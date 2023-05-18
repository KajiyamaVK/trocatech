import IFormMode from "@/interfaces/IFormMode";
import { UrgencyType } from "@/interfaces/IDeal/IDealUrgency";
import { BiCool } from "react-icons/bi";
import { TbCircleLetterM } from "react-icons/tb";
import { BsFire } from "react-icons/bs";

interface INegotiationUrgencyRadiosProps {
  formMode: IFormMode;
  dealUrgency?: UrgencyType;
  setDealUrgency: (dealUrgency: UrgencyType) => void;
}

export default function NegotiationTypeRadios(
  props: INegotiationUrgencyRadiosProps
) {
  let dealUrgencyName: string;

  switch (props.dealUrgency) {
    case 1:
      dealUrgencyName = "Baixa";
      break;
    case 2:
      dealUrgencyName = "Media";
      break;
    case 3:
      dealUrgencyName = "Alta";
      break;
  }

  return (
    <div>
      {props.formMode === "add" ? (
        <fieldset className="min-w-[207px]" id="negotiation-urgency-fieldset">
          <legend className="text-sm font-semibold leading-6">
            Nível de urgência
          </legend>
          <p className="mt-1 text-sm leading-6">
            Selecione entre as opções abaixo.
          </p>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-3">
              <input
                id="urgency-low"
                value={1}
                name="deal-urgency"
                type="radio"
                onChange={(e) =>
                  props.setDealUrgency(Number(e.target.value) as UrgencyType)
                }
                className={`h-4 w-4  text-indigo-600 focus:ring-indigo-600`}
                required
              />
              <BiCool className={`h-7 w-7 `} />
              <label
                htmlFor="urgency-low"
                className="block text-sm font-medium leading-6"
              >
                Baixa
              </label>
            </div>

            <div className="flex items-center gap-x-3">
              <input
                id="urgency-medium"
                name="deal-urgency"
                value={2}
                type="radio"
                onChange={(e) =>
                  props.setDealUrgency(Number(e.target.value) as UrgencyType)
                }
                className={`h-4 w-4  text-indigo-600 focus:ring-indigo-600`}
                required
              />
              <TbCircleLetterM className={`h-7 w-7 `} />
              <label
                htmlFor="urgency-medium"
                className="block text-sm font-medium leading-6"
              >
                Média
              </label>
            </div>

            <div className="flex items-center gap-x-3">
              <input
                id="urgency-high"
                name="deal-urgency"
                value={3}
                type="radio"
                onChange={(e) =>
                  props.setDealUrgency(Number(e.target.value) as UrgencyType)
                }
                className={`h-4 w-4  text-indigo-600 focus:ring-indigo-600`}
                required
              />
              <BsFire className={`h-7 w-7 `} />
              <label
                htmlFor="urgency-high"
                className="block text-sm font-medium leading-6"
              >
                Alta
              </label>
            </div>
          </div>
        </fieldset>
      ) : (
        <p>
          <b>Nível de urgência:</b> {dealUrgencyName!}
        </p>
      )}
    </div>
  );
}
