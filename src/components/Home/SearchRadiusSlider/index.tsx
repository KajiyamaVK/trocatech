import { Slider } from "@mui/material";

const marks = [
  {
    value: 0,
    label: "0Km",
  },
  {
    value: 50,
    label: "50Km",
  },
  {
    value: 100,
    label: "100Km",
  },
];

interface ISearchRadiusSlider {
  sliderValue: number;
  setSliderValue: (value: number) => void;
}

export default function SearchRadiusSlider({
  sliderValue,
  setSliderValue,
}: ISearchRadiusSlider) {
  function valuetext(value: number) {
    return `${value}Km`;
  }

  return (
    <div className="ml-10">
      <p>
        <b>Limite distância</b>
      </p>
      <Slider
        aria-label="Always visible"
        value={sliderValue}
        onChange={(event, newValue) => {
          setSliderValue(newValue as number);
        }}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks={marks}
        min={0}
        max={100}
        className="text-white"
      />
    </div>
  );
}
