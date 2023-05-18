// pages/index.tsx
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { NavigationContext } from "@/contexts/NavigationContext";
import Homepage from "@/components/Home";
import { getDeals } from "@/functions/fetchFunctions/dealsFetchFunctions";
import IDeal from "@/interfaces/IDeal/IDeal";
import { parseCookies } from "nookies";

export default function Home({ deals }: { deals: IDeal[] }) {
  const { isAuthenticated } = useContext(AuthContext);
  const { setIsLoading } = useContext(NavigationContext);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isAuthenticated) {
    return <Homepage dealsData={deals} />;
  } else {
    return null;
  }
}

export async function getStaticProps() {
  const { "vibbraneo.token": token } = parseCookies();
  try {
    const data = await getDeals(token);

    return {
      props: {
        deals: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        deals: [],
      },
    };
  }
}
