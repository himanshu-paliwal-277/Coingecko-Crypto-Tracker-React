import axiosInstance from "../helpers/axiosInstance";


async function fetchCoinHistoricData(id, interval, days = 7, currency = "usd") {
    try {
        const response = await axiosInstance.get(`coins/${id.coinId}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
        console.log(response.data);
        return response.data;
    }
    catch(error) {
        console.error(error);
        return null;
    }
}

export default fetchCoinHistoricData;