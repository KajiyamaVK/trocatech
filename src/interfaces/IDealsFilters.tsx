interface ICategoryFilter {
  isSell: boolean;
  isTrade: boolean;
  isWish: boolean;
}

interface IUrgencyFilter {
  isHigh: boolean;
  isMedium: boolean;
  isLow: boolean;
}

export default interface IDealsFilters {
  category: ICategoryFilter;
  urgency: IUrgencyFilter;
}
