import Image from "next/image";
import { use, useCallback } from "react";
import logo from "@@/imgs/logo.png";
import { validateForm } from "@/functions/formFunctions";
import { AuthContext } from "@/contexts/AuthContext";
import { NavigationContext } from "@/contexts/NavigationContext";
import { useContext, useState, useEffect } from "react";
import ICredential from "@/interfaces/ICredential";
import EmailInput from "@/components/CustomFormsComponents/Inputs/EmailInput";
import PasswordInput from "@/components/CustomFormsComponents/Inputs/PasswordInput";

export default function LoginForm() {
  // begin: To work with the return of errors states from the inputs, we need to have this piece
  interface IInputsWithErrors {
    elementName: string;
    isError: boolean;
    value?: string;
  }

  const { setIsLoading } = useContext(NavigationContext);

  //This state is used to control the loading state of the form. We cannot call the state directly from the context because it is not updated in time.

  const [inputWithErrors, setInputWithErrors] = useState<IInputsWithErrors[]>(
    []
  );

  const handleInputWithErrors = useCallback((input: IInputsWithErrors) => {
    if (input.isError) {
      if (
        !inputWithErrors.some((item) => item.elementName === input.elementName)
      ) {
        setInputWithErrors((prevErrors) => [...prevErrors, input]);
      }
    } else {
      setInputWithErrors((prevErrors) =>
        prevErrors.filter((item) => item.elementName !== input.elementName)
      );
    }
  }, []);

  //end: To work with the return of errors states from the inputs, we need to have this piece

  const { signIn } = useContext(AuthContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData: ICredential = validateForm();

    if (inputWithErrors.length > 0) {
      alert("Formulário com erros. Procure por erros ou campos vazios.");
      setIsLoading(false); // Reset isLoading when there are errors
      return;
    }

    if (formData) {
      signIn(formData, isSSO);
    }
  };

  const handleSSOLogin = () => {
    setIsLoading(true);
    setIsSSO(true);
    signIn({} as ICredential, isSSO);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSSO, setIsSSO] = useState(false);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <Image
            className="mx-auto h-100 w-auto"
            src={logo}
            alt="Logo TrocaTech"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Entre na sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" id="loginForm" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                E-mail
              </label>
              <div className="mt-2">
                <EmailInput
                  id="login"
                  name="login"
                  type="email"
                  autoComplete="email"
                  aria-label="E-mail"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  report_input_error={handleInputWithErrors}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Senha
                </label>
              </div>
              <div className="mt-2">
                <PasswordInput
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  aria-label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  report_input_error={handleInputWithErrors}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
            </div>
          </form>

          <div className="flex mt-10 justify-center">
            <p className="text-center text-sm text-gray-500">
              Usar Single-Sign-On?
            </p>
            <p
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 ml-1 cursor-pointer"
              onClick={handleSSOLogin}
            >
              Clique aqui
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
