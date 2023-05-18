import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { useRouter } from "next/router";
import INavigationContext from "@/interfaces/INavigationContext";
import { authenticateUser } from "@/functions/authFunctions";
import ICredential from "@/interfaces/ICredential";
import IUser from "@/interfaces/IUser";
import { setCookie, parseCookies } from "nookies";
import { AuthContext } from "./AuthContext";

export const NavigationContext = createContext<INavigationContext>({
  isCookiesAuthorized: false,
  darkMode: false,
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<string>("Homepage");
  const [isCookiesAuthorized, setCookiesAuthorized] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { userData, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setDarkMode(darkModeMediaQuery.matches);
    const listener = (event: MediaQueryListEvent) => setDarkMode(event.matches);
    darkModeMediaQuery.addEventListener("change", listener);
    return () => darkModeMediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (
      parseCookies()["isCookiesAuthorized"] === "true" &&
      !isCookiesAuthorized
    ) {
      setCookiesAuthorized(true);
    }
  }, [isCookiesAuthorized]);

  function changeCurrentRoute(route: string) {
    setCurrentRoute(route);
  }

  return (
    <NavigationContext.Provider
      value={{
        isCookiesAuthorized,
        darkMode,
        isDrawerOpen,
        setIsDrawerOpen,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
