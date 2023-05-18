export default interface INavigationContext {
  isCookiesAuthorized: boolean;
  darkMode: boolean;
  isDrawerOpen: boolean;
  setIsDrawerOpen: Function;
  isLoading: boolean;
  setIsLoading: Function;
}
