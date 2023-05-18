import { useContext, useState, useCallback, ReactNode } from "react";

//Begin - Interfaces
import IDeal from "@/interfaces/IDeal/IDeal";
import IDealType from "@/interfaces/IDeal/IDealTypes";
import IDealUrgency from "@/interfaces/IDeal/IDealUrgency";
import { UrgencyType } from "@/interfaces/IDeal/IDealUrgency";
import IFormMode from "@/interfaces/IFormMode";
//End - Interfaces

//Begin - Contexts
import { NavigationContext } from "@/contexts/NavigationContext";
import { LocalizationContext } from "@/contexts/LocalizationContext";
import { AuthContext } from "@/contexts/AuthContext";
//End - Contexts

//Begin - Icons
import { PhotoIcon } from "@heroicons/react/24/solid";
import { RiImageAddLine } from "react-icons/ri";
import { BsFillTrashFill } from "react-icons/bs";
//End - Icons

//Begin - Components
import MoneyInput from "@/components/CustomFormsComponents/Inputs/MoneyInput";
import UrlInput from "@/components/CustomFormsComponents/Inputs/UrlInputs";
import NegotiationTypeRadios from "./negotiationTypeRadios";
import UrgencyRadios from "./negotiationUrgencyRadios";
import { parseCookies } from "nookies";
//End - Components

//Begin - Functions
import { saveDeal } from "@/functions/fetchFunctions/dealsFetchFunctions";
import IPhoto from "@/interfaces/IPhoto";

interface IDealsFormProps {
  mode: string;
  dealData?: IDeal;
}
export default function DealsForm({ mode, dealData }: IDealsFormProps) {
  //Begin - Contexts Hooks
  const { location } = useContext(LocalizationContext);
  const { darkMode } = useContext(NavigationContext);
  const { userData } = useContext(AuthContext);
  //End - Contexts Hooks

  //Begin - Inputs states/////////////////////////////////////////////////

  const [dealtype, setDealType] = useState<IDealType | undefined>(
    dealData ? dealData.type : undefined
  );
  const [chat, setChat] = useState<ReactNode[]>([]);
  const [message, setMessage] = useState<string>("");
  const [dealUrgency, setDealUrgency] = useState<UrgencyType | undefined>(
    dealData ? dealData.urgency?.type : undefined
  );
  const [dealDescription, setDealDescription] = useState<string>(
    dealData ? dealData.description : ""
  );
  const [dealPrice, setDealPrice] = useState<number>(
    dealData ? dealData?.value ?? 0 : 0
  );
  const [imgInput, setImgInput] = useState<string>("");
  const [dealImgs, setDealImgs] = useState<string[]>(
    dealData ? dealData.photos.map((photo) => photo.src) : []
  );
  //End - Inputs states/////////////////////////////////////////////////

  interface IInputsWithErrors {
    elementName: string;
    isError: boolean;
    value?: string;
  }

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
  function handleAddImg() {
    if (imgInput) {
      setDealImgs([...dealImgs, imgInput]);
      setImgInput("");
    }
  }

  function handleDeleteImg(index: number) {
    const newImgs = dealImgs.filter((_, i) => i !== index);
    setDealImgs(newImgs);
  }

  function sendMessage() {
    if (message) {
      setChat((prevChat) => [
        ...prevChat,
        <div key={prevChat.length} className="mt-10">
          <div>
            <p>
              <b>Você:</b>
            </p>
          </div>
          <div>
            <p>{message}</p>
          </div>
        </div>,
      ]);
      setMessage("");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (inputWithErrors.length > 0) {
      alert("Formulário com erros. Procure por erros ou campos vazios.");
      return;
    }

    const formatedImgsList: IPhoto[] = dealImgs.map((img) => {
      return { src: img };
    });

    const deal = {
      type: dealtype,
      value: dealPrice,
      description: dealDescription,
      location: {
        lat: location.lat ? location.lat : userData!.location.lat,
        lng: location.lng ? location.lng : userData!.location.lng,
        address: location.address
          ? location.address
          : userData!.location.address,
        city: location.city ? location.city : userData!.location.city,
        state: location.state ? location.state : userData!.location.state,
        zipCode: location.zip_code
          ? location.zip_code
          : userData!.location.zip_code,
      },
      urgency: {
        type: dealUrgency,
      },
      photos: {
        ...formatedImgsList,
      },
    };
    const { "vibbraneo.token": token } = parseCookies();
    const response = await saveDeal(deal, token);

    console.log(response);
  }

  return (
    <form className="mx-5 mt-10" onSubmit={handleSubmit}>
      <div className="space-y-12 w-full justify-center">
        <div className={`border-b  pb-12`}>
          <h2 className="text-base font-semibold leading-7 border-b ">
            {dealData ? "Negociação #123" : "Nova negociação"}
          </h2>
          {!dealData && (
            <p className={`mt-1 text-sm leading-6 border-b pb-5 `}>
              Cadastre a sua nova negocição e aguarde. Você será notificado
              quando houver uma resposta.
            </p>
          )}
          <div
            className={`flex ${
              dealData ? "flex-col" : " justify-evenly "
            }  w-full  flex-wrap mt-5`}
          >
            <div className={dealData ? "" : "pb-10"}>
              <NegotiationTypeRadios
                formMode={mode as IFormMode}
                dealType={dealtype as IDealType}
                setDealType={setDealType}
              />
            </div>

            <UrgencyRadios
              formMode={mode as IFormMode}
              dealUrgency={dealUrgency as UrgencyType}
              setDealUrgency={setDealUrgency}
            />
          </div>
          <div className="col-span-full mt-10">
            <label
              htmlFor="deal-desc"
              className="block text-sm font-medium leading-6"
            >
              Descrição da negociação
            </label>
            {!dealData && (
              <p className="mt-3 text-sm leading-6">
                Descreva a sua negociação detalhadamente. Essa informação será
                muito importante para que os outros usuários possam entender o
                que você quer negociar.
              </p>
            )}
            <div className="mt-2">
              <textarea
                name="deal-desc"
                id="deal-desc"
                // name="deal-desc"
                rows={3}
                className={` block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                value={dealDescription}
                onChange={(e) => setDealDescription(e.target.value)}
                required
                readOnly={!!dealData}
              />
            </div>
          </div>
          <div className="mt-10 flex flex-row flex-wrap items-end">
            {dealtype === 2 && (
              <div className="min-w-[520px] max-w-[100px] mr-5 w-3/4">
                <label
                  htmlFor="negotiation-title"
                  className="block text-sm font-medium leading-6"
                >
                  Troca por
                </label>
                <p className={`mt-1 text-sm leading-6 border-b pb-5 `}>
                  Digite o nome do item pelo qual você deseja efetuar a troca.
                </p>
                <div className="mt-2">
                  <input
                    type="text"
                    name="negotiation-title"
                    id="negotiation-title"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    readOnly={!!dealData}
                  />
                </div>
              </div>
            )}
            {dealtype === 1 && (
              <div className="pt-5 ">
                <label htmlFor="valueInput" className="text-sm font-medium ">
                  Valor
                </label>
                <div className="flex w-full max-w-[520px]">
                  <div className="flex items-start">
                    <div className="flex rounded-l-md shadow-sm">
                      <span
                        className={`flex select-none items-center p-[5.5px]   ring-1 ring-gray-300 rounded-l-lg `}
                      >
                        R$
                      </span>
                    </div>
                  </div>

                  <MoneyInput
                    className="w-full border-0 py-1.5 pl-1 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  "
                    placeholder="0,00"
                    value={String(dealPrice)}
                    onChange={(value) => setDealPrice(Number(value))}
                    reportInputError={handleInputWithErrors}
                    required
                    readOnly={!!dealData}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="main-photo"
                className="block text-sm font-medium leading-6"
              >
                Fotos do item
              </label>

              {!dealData && (
                <div>
                  <p className="mt-3 text-sm leading-6 field-instruction">
                    Insira URLs da imagens do item que você quer negociar.
                  </p>

                  <div className="mt-5 flex items-center gap-x-3">
                    <RiImageAddLine
                      className="h-12 w-12 text-gray-300 mt-5"
                      aria-hidden="true"
                    />

                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-full">
                        <label
                          htmlFor="imgUrl"
                          className="text-sm font-medium leading-6 grid grid-col-1"
                        >
                          Url da imagem
                        </label>

                        <UrlInput
                          name="imgUrl"
                          id="imgUrl"
                          value={imgInput}
                          onChange={setImgInput}
                          className={`block flex-1 ring-1 ring-gray-300 border-0 py-1.5 pl-1  min-w-[400px] placeholder:text-gray-400 sm:text-sm sm:leading-6`}
                          placeholder="https://example.com/image.png"
                          isImage
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddImg}
                      className="mt-5 rounded-md bg-white px-2.5 py-1.5 text-sm text-gray-900 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6"
              >
                {dealData ? "" : "Fotos já adicionadas."}
              </label>

              <div
                className={`mt-2 flex justify-center rounded-lg border border-dashed  px-6 py-10`}
              >
                {dealImgs.length === 0 && (
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6">
                      Aqui serão exibidas as fotos que você adicionar.
                    </div>
                  </div>
                )}

                <div className=" flex flex-wrap justify-center">
                  {dealImgs.map((img, index) => (
                    <div key={index} className="flex flex-col">
                      {!dealData && (
                        <BsFillTrashFill
                          className="ml-5 cursor-pointer"
                          onClick={() => {
                            handleDeleteImg(index);
                          }}
                        />
                      )}
                      <img
                        src={img}
                        alt="Imagem do item"
                        width={200}
                        height={200}
                        className="rounded-lg m-5 border-t-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {chat.map((messageNode) => messageNode)}
      {dealData && (
        <div className="mt-5 w-full mb-20">
          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6"
          >
            {dealData ? "" : "Mensagem"}
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              rows={3}
              className="shadow-sm block w-full focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm border-gray-300 rounded-md"
              placeholder="Escreva uma mensagem para o anunciante"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <p className="mt-2 text-sm text-gray-500">
              Você pode enviar uma mensagem para o anunciante para negociar o
              item.
            </p>

            <div className="flex justify-end">
              <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={sendMessage}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
      {!dealData && (
        <div className="mt-6 flex items-center justify-end gap-x-6 mb-10">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Salvar
          </button>
        </div>
      )}
    </form>
  );
}
