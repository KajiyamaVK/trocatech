import IDeal from "@/interfaces/IDeal/IDeal";
import dataMock from "@@/mockData/dealsMockData";

export async function getDeals(token: string): Promise<IDeal[] | undefined> {
  const apiUrl = process.env.VIBBRANEO_API_URL;

  try {
    const response = await fetch(`${apiUrl}deal/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error(
        `API NOT WORKING. Geting mock data! status: ${response.status}`
      );
    }

    const data: IDeal[] = await response.json();
    return data.length ? data : (dataMock as IDeal[]);
  } catch (error) {
    if (error instanceof Error) {
      return dataMock as IDeal[];
    }
  }
}

async function getOneDeal(id: string): Promise<IDeal | null> {
  const apiUrl = process.env.VIBBRANEO_API_URL;

  try {
    const response = await fetch(`${apiUrl}deal/${id}`, {
      method: "GET",
      headers: {
        authorization: "XXXXXXX",
      },
    });

    if (!response.ok) {
      throw new Error(
        `API NOT WORKING. Geting mock data! status: ${response.status}`
      );
    }

    const data: IDeal = await response.json();
    return data;
  } catch (error) {
    console.error(`Fetch Error: ${error}`);
    return null;
  }
}

export async function saveDeal(
  deal: IDeal,
  authorizationToken: string
): Promise<IDeal> {
  const apiUrl = process.env.VIBBRANEO_API_URL;
  try {
    const response = await fetch(`${apiUrl}deal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: authorizationToken,
      },
      body: JSON.stringify(deal),
    });

    if (!response.ok) {
      throw new Error(
        `API NOT WORKING. Geting mock data! status: ${response.status}`
      );
    }
    const dealResponse = await response.json();

    return dealResponse.deal;
  } catch (error) {
    deal.authorization = authorizationToken;
    return deal;
  }
}
