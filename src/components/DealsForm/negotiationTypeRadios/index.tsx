import IFormMode from "@/interfaces/IFormMode";
import IDealType from "@/interfaces/IDeal/IDealTypes";

interface INegotiationTypeRadiosProps {
  formMode: IFormMode;
  dealType?: IDealType;
  setDealType: (dealType: IDealType) => void;
}

export default function NegotiationTypeRadios(
  props: INegotiationTypeRadiosProps
) {
  let dealTypeName: string;

  switch (props.dealType) {
    case 1:
      dealTypeName = "Venda";
      break;
    case 2:
      dealTypeName = "Troca";
      break;
    case 3:
      dealTypeName = "Desejo";
      break;
  }

  return (
    <div>
      {props.formMode === "add" || !props.dealType ? (
        <fieldset className="min-w-[207px]" id="negotiation-type-fieldset">
          <legend className="text-sm font-semibold leading-6">
            Tipo de negociação
          </legend>
          <p className="mt-1 text-sm leading-6">
            Selecione entre as opções abaixo.
          </p>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-3">
              <input
                id="type-sale"
                value={1}
                name="deal-type"
                type="radio"
                onChange={(e) =>
                  props.setDealType(Number(e.target.value) as IDealType)
                }
                className={`h-4 w-4  text-indigo-600 focus:ring-indigo-600`}
                required
              />
              <label
                htmlFor="type-sale"
                className="block text-sm font-medium leading-6"
              >
                Venda
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="type-trade"
                name="deal-type"
                value={2}
                type="radio"
                onChange={(e) =>
                  props.setDealType(Number(e.target.value) as IDealType)
                }
                className={`h-4 w-4  text-indigo-600 focus:ring-indigo-600`}
                required
              />
              <label
                htmlFor="type-trade"
                className="block text-sm font-medium leading-6"
              >
                Troca
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="type-wish"
                name="deal-type"
                value={3}
                type="radio"
                onChange={(e) =>
                  props.setDealType(Number(e.target.value) as IDealType)
                }
                className={`h-4 w-4  text-indigo-600 focus:ring-indigo-600`}
                required
              />
              <label
                htmlFor="type-wish"
                className="block text-sm font-medium leading-6"
              >
                Desejo
              </label>
            </div>
          </div>
        </fieldset>
      ) : (
        <p>
          <b>Tipo da negociação:</b> {dealTypeName!}
        </p>
      )}
    </div>
  );
}
