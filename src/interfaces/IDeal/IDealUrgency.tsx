export type UrgencyType = 1 | 2 | 3 | 4 | undefined;

export default interface IDealUrgency {
  type: UrgencyType;
  limit_date?: string;
}
