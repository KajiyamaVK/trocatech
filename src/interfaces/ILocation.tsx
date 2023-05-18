import ICoordenates from "./ICoordenates";

export default interface ILocation {
  lat: number;
  lng: number;
  coordenates?: ICoordenates;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: number;
}
