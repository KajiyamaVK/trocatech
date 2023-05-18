import ICredential from "@/interfaces/ICredential";
import IUser from "@/interfaces/IUser";
import { v4 as uuid } from "uuid";
import { destroyCookie } from "nookies";

export function SignOut() {
  destroyCookie(null, "vibbraneo.token");
}

export async function authenticateUser(
  credentials: ICredential,
  isSSO: boolean
) {
  try {
    let response: Response;

    if (isSSO) {
      if (credentials.login && credentials.app_token) {
        // Authentication using Single Sign-On (SSO)
        response = await fetch("https://api.vibbraneo.com/authenticate/sso", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login: credentials.login,
            app_token: credentials.app_token,
          }),
        });
      } else {
        throw new Error("Invalid SSO credentials");
      }
    } else if (credentials.login && credentials.password) {
      // Authentication using login and password
      response = await fetch("https://api.vibbraneo.com/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: credentials.login,
          password: credentials.password,
        }),
      });
    } else {
      throw new Error("Invalid credentials");
    }

    if (response.ok) {
      //We don't have a real API, so we'll mock the response
      const data = await response.json();
      return data;
    } else {
      throw new Error("Unknown error occurred during authentication");
    }
  } catch (error) {
    if (error instanceof Error) {
      //console.error("Authentication error:", error.message);

      // We don't have a real API, so we'll mock the response
      // As we don't have a real authentication API, we'll mock the user data
      const dataMock = {
        token: uuid() as string,
        userData: {
          name: "John Doe",
          email: "test@test.com",
          login: "testADM",
          password: "test123",
          location: {
            lat: -23.55043282496482,
            lng: -46.634211631410146,
            address: "Praça da Sé",
            city: "São Paulo",
            state: "SP",
            zip_code: 1001000,
          },
        } as IUser,
      };

      return dataMock;
    } else {
      // Handle other unknown errors
      console.error("Unknown error occurred during authentication");
      return null;
    }
  }
}
