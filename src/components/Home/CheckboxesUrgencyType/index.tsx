import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { NavigationContext } from "@/contexts/NavigationContext";
import { useContext } from "react";

export default function RadioButtonsUrgencyType({
  onChange,
  filters,
}: {
  onChange: any;
  filters: any;
}) {
  const { darkMode } = useContext(NavigationContext);
  const checkboxClassName = darkMode ? "text-gray-100" : "text-gray-800";
  return (
    <div className="mx-5 my-6 min-w-fit">
      <h3 className="my-4 ">Urgência</h3>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.urgency.isLow}
              onChange={onChange("urgency", "isLow")}
              className={checkboxClassName}
            />
          }
          label="Baixa"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.urgency.isMedium}
              onChange={onChange("urgency", "isMedium")}
              className={checkboxClassName}
            />
          }
          label="Média"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.urgency.isHigh}
              onChange={onChange("urgency", "isHigh")}
              className={checkboxClassName}
            />
          }
          label="Alta"
        />
        <FormControlLabel
          control={<Checkbox checked />}
          label="Com data Limite"
        />
      </FormGroup>
    </div>
  );
}
