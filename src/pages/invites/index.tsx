import { useEffect, useContext } from "react";
import { NavigationContext } from "@/contexts/NavigationContext";

export default function Invites() {
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
          e-mail enviado ao cliente. O convite seria para a <b>plataforma</b> ou
          para alguma <b>negociação</b> em particular? Isso define todo o layout
          e tela onde esse cadastro ficaria.
        </p>
      </div>
    </div>
  );
}
