import IDeal from "@/interfaces/IDeal/IDeal";
import Image from "next/image";
import { Paper } from "@mui/material";
import { useContext } from "react";
import { NavigationContext } from "@/contexts/NavigationContext";

interface DealCardProps {
  deal: IDeal;
  className?: string;
  distance: number;
}

export default function DealCard({ deal, className, distance }: DealCardProps) {
  const { setIsLoading } = useContext(NavigationContext);

  function handleDealClick(deal: IDeal) {
    setIsLoading(true);
    window.location.href = `/negotiations/view/1`;
  }

  return (
    <div>
      <Paper
        elevation={3}
        className={`cursor-pointer flex flex-col min-w-[320px] w-80 h-80 bg-white rounded-xl shadow-md ${className}`}
        onClick={() => handleDealClick(deal)}
      >
        <div className="flex flex-col items-center justify-center w-full h-1/2">
          <Image
            className="object-cover w-full h-full"
            src={deal.photos[0].src}
            alt={deal.description}
            width={320}
            height={320}
          />
        </div>
        <div className="flex flex-col items-center w-full h-1/2 px-4">
          <p className="text-gray-600 mt-5">
            {deal.description.slice(0, 96)}{" "}
            {deal.description.length > 96 && "..."}
          </p>

          <div className="flex justify-end items-start h-full w-full flex-col mb-3">
            <p className="text-gray-600 text-right ">
              {deal.location.city}/{deal.location.state}
            </p>
            {distance != 0 && (
              <p>
                <b>Distância: </b>
                {distance.toFixed(2)} km
              </p>
            )}
          </div>
        </div>
      </Paper>
    </div>
  );
}
