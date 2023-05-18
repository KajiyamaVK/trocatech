type DealType = 1 | 2 | 3;

export default interface ISearchDealsParams {
  type?: DealType;
  value_start?: number;
  value_end?: number;
  term?: string;
  lat?: number;
  lng?: number;
}
