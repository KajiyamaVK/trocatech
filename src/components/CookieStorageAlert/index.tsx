//Creates a cookie storage alert component using Nookie, React-icon and tailwind in Typescript
// components/CookieBanner.tsx
import React from "react";
import { useState, useContext } from "react";
import { NavigationContext } from "@/contexts/NavigationContext";
import { MdCookie } from "react-icons/md";
import { Button } from "@mui/material";
import { parseCookies, setCookie } from "nookies";

export default function CookieStorageAlert() {
  const { isCookiesAuthorized } = useContext(NavigationContext);
  const [isHidden, setIsHidden] = useState<boolean>(isCookiesAuthorized);

  function onReject() {
    setIsHidden(true);
  }

  function onAccept() {
    setCookie(undefined, "isCookiesAuthorized", "true", {
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    setIsHidden(true);
  }

  return (
    <div
      className={`${isHidden && "hidden"} 
      fixed bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 border-t-2 border-gray-200 dark:border-gray-700 z-50`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <MdCookie className="mr-2" size={24} />
          <p className="text-sm">
            Utilizamos cookies para melhorar a sua experiência. Ao clicar em{" "}
            <b>Concordar</b>, você aceita que eles sejam guardados.
          </p>
        </div>
        <div className="flex items-center">
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={onAccept}
            className="mr-2 border-white border-2 border-solid"
          >
            Concordar
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={onReject}
            className="mr-2 border-red-700 border-2 border-solid"
          >
            Discordar
          </Button>
        </div>
      </div>
    </div>
  );
}
