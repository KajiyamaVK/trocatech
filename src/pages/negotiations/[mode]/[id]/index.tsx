import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { NavigationContext } from "@/contexts/NavigationContext";
import DealsForm from "@/components/DealsForm";
import dealMockData from "@@/mockData/dealsMockData";

export default function DealPage() {
  const router = useRouter();
  const { id } = router.query;

  const { setIsLoading } = useContext(NavigationContext);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div>
      <DealsForm mode="view" dealData={dealMockData[0]} />
    </div>
  );
}
