import { useQuery } from "react-query";
import currencyStore from "../State/Store";
import { useState } from "react";
import fetchCoinHistoricData from "../services/fetchCoinHistoricData";

function useFetchCoinHistory(coinId) {
  const { currency } = currencyStore();
  const [days, setDays] = useState(1);
  const [interval, setCoinInterval] = useState("");

  const { data: historicData, isLoading, isError } = useQuery(['coinHistoricData', coinId, currency, days, interval], () => fetchCoinHistoricData(coinId, interval, days, currency), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    return {
        historicData,
        isLoading,
        isError,
        setDays,
        setCoinInterval,
        days,
        currency
    }
}

export default useFetchCoinHistory;
