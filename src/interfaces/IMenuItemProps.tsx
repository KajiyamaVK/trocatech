import { IconType } from "react-icons";

export default interface IMenuItemProps {
  icon: IconType;
  label: string;
  dark: boolean;
  collapsed: boolean;
  route: string;
  isActive: boolean;
}
