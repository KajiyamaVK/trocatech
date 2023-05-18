import { useEffect, useContext } from "react";
import { NavigationContext } from "@/contexts/NavigationContext";

export default function Users() {
  const { setIsLoading } = useContext(NavigationContext);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="flex justify-center items-center  h-screen">
      <div className="border-gray-500 border-2 border-dashed p-5 w-2/3">
        <h1>
          <b>Pendente</b>
        </h1>
        <p>
          Algumas questões permaneceram pendetes até a data de entrega conforme
          e-mail enviado ao cliente. A API de cadastro de usuários pedia o token
          de autenticação = portanto, apenas uma pessoa logada poderia cadastrar
          novos usuários. Isso definiria o layout e tela onde esse cadastro
          seria feito.
        </p>
      </div>
    </div>
  );
}
