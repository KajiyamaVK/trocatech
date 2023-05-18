import ILocation from "../ILocation";
import IDealUrgency from "./IDealUrgency";
import IPhoto from "../IPhoto";
import DealType from "./IDealTypes";

export default interface IDeal {
  authorization?: string;
  type?: DealType;
  value?: number;
  description: string;
  trade_for?: string;
  location: ILocation;
  distance?: number;
  urgency?: IDealUrgency;
  photos: IPhoto[];
}
