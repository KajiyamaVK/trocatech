import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

//Begin - Contexts
import { AuthContext } from "@/contexts/AuthContext";
import { NavigationContext } from "@/contexts/NavigationContext";
//End - Contexts

//Begin - Interfaces
import IDeal from "@/interfaces/IDeal/IDeal";
import IDealsFilters from "@/interfaces/IDealsFilters";
//End - Interfaces

//Begin - Functions
import { getDistanceInKm } from "@/functions/localizationFunctions";
import { filterDeals } from "@/functions/dealsFilterFunctions";
//End - Functions

//Begin - Components
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CookieBanner from "../CookieStorageAlert";
import DealCard from "./DealCards";
import SearchRadiusSlider from "./SearchRadiusSlider";
import InfoCardList from "./InfoCardList";
import RadioButtonsDealType from "./CheckboxesDealType";
import RadioButtonsUrgencyType from "./CheckboxesUrgencyType";
//End - Components

export default function Homepage({ dealsData }: { dealsData: IDeal[] }) {
  const { userData } = useContext(AuthContext);
  const [sliderValue, setSliderValue] = useState(50);
  let [deals, setDeals] = useState(dealsData);

  const { darkMode } = useContext(NavigationContext);
  const checkboxClassName = darkMode ? "text-gray-100" : "text-gray-800";

  const router = useRouter();
  const [showUrgents, setShowUrgents] = useState(false);
  const [areaRadiusSearch, setAreaRadiusSearch] = useState(0);
  const [filters, setFilters] = useState<IDealsFilters>({
    urgency: {
      isHigh: true,
      isMedium: true,
      isLow: true,
    },
    category: {
      isSell: true,
      isTrade: true,
      isWish: true,
    },
  });

  function handleFilterChange(
    filterType: "urgency" | "category",
    field: string
  ) {
    return (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: {
          ...prevFilters[filterType],
          [field]: checked,
        },
      }));
    };
  }

  useEffect(() => {
    let dealWithDistanceInfo: IDeal[] = [];

    if (dealsData) {
      dealsData.forEach((deal: IDeal) => {
        const distance = getDistanceInKm(deal.location, userData!.location);
        deal.distance = distance;

        if (distance <= sliderValue) {
          dealWithDistanceInfo.push(deal);
        }
      });

      dealWithDistanceInfo = dealWithDistanceInfo.filter((deal) =>
        filterDeals(deal, filters)
      );

      setDeals(dealWithDistanceInfo.sort((a, b) => a.distance! - b.distance!));
    }
  }, [sliderValue, filters]);

  function valuetext(value: number) {
    return `${value}Km`;
  }
  //
  return (
    <div>
      <InfoCardList dealsData={dealsData} deals={deals} />
      <div className="flex items-start">
        <div className="flex flex-col ">
          <div className=" w-72 ml-5 mb-5 my-auto min-w-fit border-b">
            <h3>Buscar</h3>
          </div>

          <FormControlLabel
            control={
              <Checkbox defaultChecked={false} className={checkboxClassName} />
            }
            label="Apenas minhas negociações"
            className="ml-3 "
          />

          <RadioButtonsDealType
            onChange={handleFilterChange}
            filters={filters}
          />

          <RadioButtonsUrgencyType
            onChange={handleFilterChange}
            filters={filters}
          />

          <SearchRadiusSlider
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
          />
        </div>
        <div className="flex mt-20 overflow-hidden w-full flex-wrap justify-center">
          {deals?.map((deal: IDeal, index: number) => (
            <div key={index} className="m-5">
              <DealCard
                deal={deal}
                distance={
                  userData?.location
                    ? getDistanceInKm(deal.location, userData?.location)
                    : 0
                }
              />
            </div>
          ))}
        </div>
      </div>
      <CookieBanner />
    </div>
  );
}
