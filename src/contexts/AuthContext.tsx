import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { useRouter } from "next/router";
import IAuthContext from "@/interfaces/IAuthContext";
import { authenticateUser } from "@/functions/authFunctions";
import ICredential from "@/interfaces/ICredential";
import IUser from "@/interfaces/IUser";
import { setCookie, parseCookies } from "nookies";
import { fetchUserData } from "@/functions/fetchFunctions/userFetchFunctions";

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  userData: null,
  signIn: async () => {},
  handleSetIsAuthenticated: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(!!userData);

  const router = useRouter();

  async function handleSetIsAuthenticated(value: boolean) {
    setAuthenticated(value);
  }

  //This useEffect will run only once, when the component is mounted. This will be used to fetch the user data from the API and store it in the context
  //when there is already a token stored in the cookies. This will allow the user to refresh the page without losing the authentication state.
  useEffect(() => {
    const fetchData = async () => {
      const { "vibbraneo.token": token } = parseCookies();
      if (token && !userData) {
        // We don't have a real API, so we'll mock the response
        const response = await fetchUserData(token);

        if (response) {
          setUserData(response.userData!);
          setAuthenticated(true);

          if (router.pathname === "/login") router.push("/");
        } else {
          console.error("Erro ao buscar dados do usuário");
        }
      } else if (!token) {
        setAuthenticated(false);
        setUserData(null);
        router.push("/login");
      }
    };

    fetchData();
  }, []);

  async function signIn(
    { login, password, app_token }: ICredential,
    isSSO: boolean
  ) {
    const response = await authenticateUser({ login, password }, isSSO);

    if (response) {
      setUserData(response.userData!);
      setAuthenticated(true);
      setCookie(undefined, "vibbraneo.token", response?.token!, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
      router.push("/");
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userData, signIn, handleSetIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}
