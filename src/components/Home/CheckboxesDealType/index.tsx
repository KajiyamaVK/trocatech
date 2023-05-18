/**
 *
 *A component that renders a group of checkboxes with labels.
 *@component
 *@param {Object} props - The component props.
 *@param {string} props.title - The title of the radio buttons group.
 *@param {Object[]} props.options - The options for the radio buttons group.
 *@param {string} props.options.label - The label for the checkbox option.
 *@param {boolean} props.options.initialValue - The initial value of the checkbox.
 *@param {function} props.options.onChange - The callback function to be called when the checkbox value changes.
 *@returns {JSX.Element} The rendered RadioButtons component.
 */

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { NavigationContext } from "@/contexts/NavigationContext";
import { useContext } from "react";

export default function RadioButtonsDealType({
  onChange,
  filters,
}: {
  onChange: any;
  filters: any;
}) {
  const { darkMode } = useContext(NavigationContext);
  const checkboxClassName = darkMode ? "text-gray-100" : "text-gray-800";

  return (
    <div>
      <div className="mx-5 my-6">
        <h3 className="my-4 ">Tipos de negócio</h3>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.category.isSell}
                onChange={onChange("category", "isSell")}
                className={checkboxClassName}
              />
            }
            label="Venda"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.category.isTrade}
                onChange={onChange("category", "isTrade")}
                className={checkboxClassName}
              />
            }
            label="Troca"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.category.isWish}
                onChange={onChange("category", "isWish")}
                className={checkboxClassName}
              />
            }
            label="Desejo"
          />
        </FormGroup>
      </div>
    </div>
  );
}
