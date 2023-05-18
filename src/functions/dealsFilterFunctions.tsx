import IDeal from "@/interfaces/IDeal/IDeal";
import IDealsFilters from "@/interfaces/IDealsFilters";
import DealType from "@/interfaces/IDeal/IDealTypes";

export function filterDeals(deal: IDeal, filters: IDealsFilters): boolean {
  const isUrgencyMatch = (urgencyType: number) => {
    switch (urgencyType) {
      case 1:
        return filters.urgency.isLow;
      case 2:
        return filters.urgency.isMedium;
      case 3:
        return filters.urgency.isHigh;
      case 4:
      default:
        return false;
    }
  };

  const isCategoryMatch = (dealType: DealType) => {
    switch (dealType) {
      case 1:
        return filters.category.isSell;
      case 2:
        return filters.category.isTrade;
      case 3:
        return filters.category.isWish;
      default:
        return false;
    }
  };

  return isUrgencyMatch(deal.urgency!.type!) && isCategoryMatch(deal.type!);
}
