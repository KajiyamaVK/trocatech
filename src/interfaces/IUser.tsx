interface ILocation {
  lat: number;
  lng: number;
  address: string;
  city: string;
  state: string;
  zip_code: number;
}

export default interface IUser {
  name: string;
  email: string;
  login: string;
  password: string;
  location: ILocation;
}
