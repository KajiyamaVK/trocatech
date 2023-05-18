import dataMock from "@@/mockData/userMockData.json";

export async function fetchUserData(token: string) {
  try {
    const response = await fetch(`http://api.vibbraneo.com/user/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });

    if (response.ok) {
      //We don't have a real API, so we'll mock the response
      const data = await response.json();
      return data;
    } else {
      //throw new Error("Authentication error");

      throw new Error("Unknown error occurred during user data fetch");
    }
  } catch (error) {
    if (error instanceof Error) {
      //console.error("Authentication error:", error.message);
      // We don't have a real API, so we'll mock the response
      return dataMock;
    }
  }
}
