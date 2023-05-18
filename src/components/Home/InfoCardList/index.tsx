import IDeal from "@/interfaces/IDeal/IDeal";
import InfoCard from "@/components/Home/InfoCardList/InfoCards";
import countObjectsInArrayWithFilter from "@/functions/generalFunctions/countObjectsInArrayWithFilter";

interface InfoCardListProps {
  dealsData: IDeal[];
  deals: IDeal[];
}

export default function InfoCardList({ dealsData, deals }: InfoCardListProps) {
  return (
    <div className="flex flex-row ">
      <InfoCard
        title="Total"
        number={dealsData.length}
        link="/"
        className="bg-blue-700"
        numberComplement="negociações"
      />
      <InfoCard
        title="Total no filtro"
        number={deals.length}
        link="/"
        className="bg-cyan-700"
        numberComplement="negociações"
      />
      <InfoCard
        title="Urgentes no filtro"
        number={countObjectsInArrayWithFilter(deals, "urgency.type", 3)}
        numberComplement="urgentes"
        link="/"
        className="bg-rose-900 text-bg-rose-100"
      />
    </div>
  );
}
