import MenuItemProps from "@/interfaces/IMenuItemProps";
import { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { SignOut } from "@/functions/authFunctions";
import { NavigationContext } from "@/contexts/NavigationContext";

export default function MenuItem({
  icon: Icon,
  label,
  dark,
  collapsed,
  route,
}: MenuItemProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { setIsLoading } = useContext(NavigationContext);

  const router = useRouter();
  const isActive: boolean = router.asPath === route;

  const { handleSetIsAuthenticated } = useContext(AuthContext);

  const baseClass =
    "relative w-full flex items-center space-x-2 p-2 rounded-md cursor-pointer";

  let hoverOpacity = "";

  if (collapsed || isActive) {
    hoverOpacity = "hover:bg-opacity-1";
  } else if (!collapsed && !isActive) {
    hoverOpacity = "hover:bg-opacity-50";
  }

  let hoverColor;

  if (dark && !isActive) {
    hoverColor = "hover:bg-gray-700";
  } else if (!dark && !isActive) {
    hoverColor = "hover:bg-gray-300";
  }

  const activeDarkColor = isActive && dark ? "bg-white text-gray-900" : "";
  const activeLightColor = isActive && !dark ? "bg-gray-900 text-white" : "";

  const containerClass = `${baseClass} ${hoverOpacity} ${hoverColor} ${activeDarkColor} ${activeLightColor}`;

  const iconClass = `w-5 h-5 
                    ${dark && !isActive ? "text-white" : "text-black"} 
                    ${isActive && !dark ? "text-white" : "text-gray-900"}
                    `;

  const tooltipBaseClass =
    "absolute left-10 mt-1 px-2 py-1 bg-opacity-90 rounded-md w-56";
  const darkCondition = dark && !isActive;
  const textColor = darkCondition
    ? "text-black bg-white"
    : "text-white bg-gray-900";
  const activeDarkText =
    router.pathname === route && dark ? "text-gray-900" : "";
  const activeLightText =
    router.pathname === route && !dark ? "text-white" : "";

  const tooltipSpanClass = `text-sm p-2 rounded-md ${textColor} ${activeDarkText} ${activeLightText}`;

  const labelClass = `text-sm${dark ? "text-white" : "text-black"}`;

  async function handleClick() {
    setIsLoading(true);
    if (route == "/logout") {
      handleSetIsAuthenticated(false);
      await SignOut();
      router.push("/login");
    } else {
      router.push(route);
    }
  }

  return (
    <div
      className={containerClass}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={handleClick}
    >
      <Icon className={iconClass} />
      {(!collapsed || showTooltip) && (
        <div className={tooltipBaseClass}>
          {collapsed ? (
            <span className={tooltipSpanClass}>{label}</span>
          ) : (
            <span className={labelClass}>{label}</span>
          )}
        </div>
      )}
    </div>
  );
}
