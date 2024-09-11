import { useQuery } from "react-query";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import currencyStore from '../State/Store';
function useFetchCoin(coinId) {

    const { currency } = currencyStore();

    const { isError, isLoading, data: coin } = useQuery(["coin", coinId], () => fetchCoinDetails(coinId), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    return {
        currency,
        isError,
        isLoading,
        coin
    }
}

export default useFetchCoin;