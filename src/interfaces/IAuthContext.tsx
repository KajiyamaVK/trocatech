import IUser from "./IUser";
import ICredential from "./ICredential";

export default interface IAuthContext {
  isAuthenticated: boolean;
  userData: IUser | null;
  signIn: (credentials: ICredential, isSSO: boolean) => Promise<void>;
  handleSetIsAuthenticated: (value: boolean) => void;
}
