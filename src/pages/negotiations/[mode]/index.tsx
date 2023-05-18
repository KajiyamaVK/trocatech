import { useRouter } from "next/router";
import DealsForm from "@/components/DealsForm";
import { use, useContext, useEffect } from "react";
import { NavigationContext } from "@/contexts/NavigationContext";

export default function DealPage() {
  const { setIsLoading } = useContext(NavigationContext);
  const router = useRouter();
  const { mode } = router.query;

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const modeValue = typeof mode === "string" ? mode : "";

  return (
    <div>
      <DealsForm mode={modeValue} />
    </div>
  );
}
