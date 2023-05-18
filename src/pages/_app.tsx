// pages/_app.tsx
import { useRouter } from "next/router";
import { useContext } from "react";
import DrawerMenu from "@/components/DrawerMenu";
import { NavigationContext } from "@/contexts/NavigationContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/AuthContext";
import { NavigationProvider } from "@/contexts/NavigationContext";
import { LocalizationProvider } from "@/contexts/LocalizationContext";
import { AuthContext } from "@/contexts/AuthContext";
import { ReactNode } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <LocalizationProvider>
        <NavigationProvider>
          <div className="flex ">
            <ContentWithDrawerMenu>
              <Component {...pageProps} />
            </ContentWithDrawerMenu>
          </div>
        </NavigationProvider>
      </LocalizationProvider>
    </AuthProvider>
  );
}

function ContentWithDrawerMenu({ children }: { children: ReactNode }) {
  const { isDrawerOpen, setIsDrawerOpen, isLoading } =
    useContext(NavigationContext);
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  const contentClass = isDrawerOpen ? "drawer-open" : "drawer-closed";

  return (
    <div className="flex flex-row items-start min-h-screen">
      <LoadingScreen state={isLoading} />
      <div className={contentClass}>
        {isAuthenticated && router.pathname !== "/login" && (
          <DrawerMenu
            isDrawerOpenState={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        )}
        <div
          className={
            isDrawerOpen
              ? "absolute left-[300px] right-0 transition-all duration-300"
              : "absolute left-20 right-0 transition-all duration-300"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
