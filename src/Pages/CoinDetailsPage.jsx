import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import { useEffect } from "react";

function CoinDetailsPage() {
    const { coinId } = useParams();

    
    const { data, isLoading, isError, error } = useQuery(['coinsDetails', coinId ], () => fetchCoinDetails(coinId), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2
    })
    
    useEffect(() => {
        console.log("Data: ", data);
    });

    if(isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <>
            <div>Coin Details Page {coinId}</div>
            {isLoading && <div>Loading...</div>}
            {/* <div>data id: {data.id}</div> */}
            <img src={data.image.large} />
        </>
    )
}

export default CoinDetailsPage;