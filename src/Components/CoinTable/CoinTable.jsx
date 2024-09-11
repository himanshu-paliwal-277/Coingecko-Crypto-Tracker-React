import { useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import store from "../../State/Store";
import PageLoader from "../../Components/PageLoader/PageLoader";
import InfiniteScroll from "react-infinite-scroll-component";

function CoinTable() {
  const { currency } = store.getState(); // Assuming store.getState() is the correct way to get the state
  const [items, setItems] = useState([]); // List of items to display
  const [hasMore, setHasMore] = useState(true); // To know if there is more data to load
  const [page, setPage] = useState(1); // Page number for pagination
  const [retryTimeout, setRetryTimeout] = useState(null); // Timeout ID for retries

  const navigate = useNavigate();

  const { isLoading, isError, error, refetch } = useQuery(
    ["coins", page, currency],
    () => fetchCoinData(page, currency),
    {
      cacheTime: 1000 * 60 * 2, // Cache for 2 minutes
      staleTime: 1000 * 60 * 2, // Consider fresh for 2 minutes
      keepPreviousData: true, // Keep the previous data while fetching new data
      onSuccess: (newData) => {
        setItems((prevItems) => [...prevItems, ...newData]); // Append new data
        if (newData.length === 0) setHasMore(false); // If no more data, stop loading
      },
      onError: (err) => {
        console.error("API Error: ", err.message);
        if (err.response?.status === 429) { // 429 is the status code for "Too Many Requests"
          if (!retryTimeout) {
            const timeout = setTimeout(() => {
              refetch(); // Retry fetching after a delay
              clearTimeout(retryTimeout);
              setRetryTimeout(null);
            }, 5000); // Retry after 5 seconds
            setRetryTimeout(timeout);
          }
        }
      },
      retry: false, // Disable built-in retry logic to implement custom retry logic
    }
  );

  const fetchMoreData = () => {
    if (items.length >= 100) { // Example limit: Stop after 100 items
      setHasMore(false);
      return;
    }
    setPage((prevPage) => prevPage + 1); // Increment page number for next fetch
  };

  const handleCoinRedirect = (id) => {
    navigate(`/details/${id}`); // Navigate to details page on coin click
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 my-5 w-[80vw] mx-auto">
      <div className="flex items-center justify-center w-full px-2 py-4 font-semibold text-black bg-yellow-400">
        {/* Header of the table */}
        <div className="basis-[35%]">Coin</div>
        <div className="basis-[25%]">Prices</div>
        <div className="basis-[20%]">24h change</div>
        <div className="basis-[20%]">Market Cap</div>
      </div>

      <div className="flex flex-col w-[80vw] mx-auto">
        {/* Show loading indicator */}
        {isLoading && <PageLoader />}
        {/* Show error if any, but continue retrying */}
        {isError && error.response?.status !== 429 && <div>Error: {error.message}</div>}

        <InfiniteScroll
          dataLength={items.length} // Length of current list of items
          next={fetchMoreData} // Function to load more data
          hasMore={hasMore} // Boolean to control whether more data is available
          loader={<PageLoader />} // Loading indicator
          endMessage={<p>No more data to display</p>} // End message when data is exhausted
        >
          {items.map((coin) => (
            <div
              onClick={() => handleCoinRedirect(coin.id)}
              key={coin.id}
              className="flex items-center justify-between w-full px-2 py-4 my-2 font-semibold text-white bg-transparent cursor-pointer"
            >
              <div className="flex items-center justify-start gap-3 basis-[35%]">
                <div className="w-[5rem] h-[5rem]">
                  <img
                    src={coin.image}
                    className="w-full h-full"
                    loading="lazy"
                    alt={coin.name}
                  />
                </div>

                <div className="flex flex-col">
                  <div className="text-3xl">{coin.name}</div>
                  <div className="text-xl">{coin.symbol}</div>
                </div>
              </div>

              <div className="basis-[25%]">{coin.current_price}</div>
              <div className="basis-[20%]">{coin.price_change_24h}</div>
              <div className="basis-[20%]">{coin.market_cap}</div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default CoinTable;
