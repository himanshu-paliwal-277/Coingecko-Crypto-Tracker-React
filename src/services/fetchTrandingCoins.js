import axiosInstance from "../helpers/axiosInstance";

export async function fetchTrandingCoins(currency = "inr") {
  try {
    const response = await axiosInstance.get(
      `/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
