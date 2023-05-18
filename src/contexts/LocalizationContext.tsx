import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";

import Dialog from "@/components/Dialog";
import { ILocalizationContext } from "@/interfaces/ILocalizationContext";
import { AuthContext } from "./AuthContext";

export const LocalizationContext = createContext<ILocalizationContext>({
  location: { lat: 0, lng: 0 },
});

export function LocalizationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<ILocalizationContext["location"]>({
    lat: 0,
    lng: 0,
  });

  const { isAuthenticated, userData } = useContext(AuthContext);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation && isAuthenticated) {
      alert("Geolocalização não suportada pelo seu navegador.");
      return;
    }

    const { lat, lng } = userData?.location || { lat: 0, lng: 0 };

    if (isAuthenticated) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
          setIsAlertOpen(true);
          if (!lat) {
            setLocation({
              lat: 0,
              lng: 0,
            });
          } else {
            setLocation({
              lat: lat,
              lng: lng,
            });
          }
        }
      );
    }
  }, [isAuthenticated, userData?.location]);

  return (
    <LocalizationContext.Provider value={{ location }}>
      <Dialog
        title="Geolocalização"
        content="Para uma melhor experiência, por favor, ative a geolocalização. Como a permissão não foi dada, o calculo da distância será feito a partir da informação cedida no cadastro do usuário, e não na do dispositivo."
        open={isAlertOpen}
        setOpen={setIsAlertOpen}
      />
      {children}
    </LocalizationContext.Provider>
  );
}
