import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { FiMenu, FiHome, FiUser, FiLogOut, FiMail } from "react-icons/fi";
import { MdOutlineHandshake, MdOutlineAddShoppingCart } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { NavigationContext } from "@/contexts/NavigationContext";
import { AuthContext } from "@/contexts/AuthContext";
import MenuItem from "./MenuItem";

export default function DrawerMenu({
  ...props
}: {
  isDrawerOpenState: boolean;
  setIsDrawerOpen: Function;
}) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1366 });

  const { darkMode } = useContext(NavigationContext);
  const { userData, isAuthenticated } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    setMenuCollapsed(isSmallScreen);
  }, [isSmallScreen]);

  const { setIsDrawerOpen } = props;

  useEffect(() => {
    setIsDrawerOpen(!menuCollapsed);
  }, [menuCollapsed, setIsDrawerOpen]);

  const menuItems = [
    { icon: FiHome, label: "Início", route: "/" },
    {
      icon: MdOutlineAddShoppingCart,
      label: "Criar negociações",
      route: "/negotiations/add",
    },
    { icon: FiMail, label: "Convites", route: "/invites" },
    { icon: FiUser, label: "Usuários", route: "/users" },
    { icon: FiLogOut, label: "Sair", route: "/logout" },
  ];
  return (
    <div
      className={`transition-all duration-300 h-screen fixed left-0 top-0 z-50
                  ${darkMode ? "bg-gray-800" : "bg-gray-100"} 
                  ${menuCollapsed ? "w-20" : "min-w-[300px]"}`}
    >
      <button
        className="p-4"
        onClick={() => {
          setMenuCollapsed(!menuCollapsed);
          props.setIsDrawerOpen(menuCollapsed);
        }}
        aria-label="Toggle menu"
      >
        <FiMenu
          className={`${darkMode ? "text-white" : "text-black"} w-6 h-6`}
        />
      </button>
      <div className="flex flex-col items-start space-y-4 p-4">
        {!menuCollapsed && (
          <div className="w-full">
            <p>{userData!.name}</p>
            <p>{userData!.email}</p>
            <hr
              className={`mx-auto my-5 border-1 
                        ${darkMode ? "border-gray-950" : "border-gray-200"}`}
            />
          </div>
        )}

        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            route={item.route}
            dark={darkMode}
            collapsed={menuCollapsed}
            isActive={router.pathname === item.route}
          />
        ))}
      </div>
    </div>
  );
}
