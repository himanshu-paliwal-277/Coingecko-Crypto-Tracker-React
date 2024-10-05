import { useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import store from "../../State/Store";
import PageLoader from "../../Components/PageLoader/PageLoader";
// import { CurrencyContext } from "../../Context/currencyContext";

function CoinTable() {
  // const {currency} = useContext(CurrencyContext)
  const { currency } = store();
  const [searchQuery, setSearchQuery] = useState(""); // search query state

  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery(
    ["coins", page, currency],
    () => fetchCoinData(page, currency),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );

  // useEffect(() => {
  //     console.log("Data: ", data);
  // }, [data]);
  const navigate = useNavigate();

  function handleCoinRedirect(id) {
    navigate(`/details/${id}`);
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Filter coins based on search query
  const filteredCoins = data?.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center gap-2 my-5 w-[90vw] mx-auto mb-8">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a coin..."
        className="w-full px-4 py-3 mb-5 text-lg border rounded "
        style={{ borderColor: "gray" }}
      />
      <div className="flex items-center justify-center w-full px-6 py-4 font-bold text-black bg-yellow-400 rounded-t-xl">
        {/* Header of the table */}
        <div className="basis-[28%]">Coin</div>
        <div className="basis-[24%] text-end">Prices</div>
        <div className="basis-[24%] text-end">24h change</div>
        <div className="basis-[24%] text-end">Market Cap</div>
      </div>

      <div className="flex flex-col w-[90vw] mx-auto">
        {isLoading && (
          <>
            <PageLoader />
            <PageLoader />
            <PageLoader />
            <PageLoader />
            <PageLoader />
            <PageLoader />
            <PageLoader />
            <PageLoader />
            <PageLoader />
            <PageLoader />
          </>
        )}
        {filteredCoins &&
          filteredCoins.map((coin) => {
            return (
              <div
                onClick={() => handleCoinRedirect(coin.id)}
                key={coin.id}
                className="flex items-center justify-between w-full px-6 py-4 my-2 font-semibold text-white bg-transparent border-gray-500 cursor-pointer border-b-[1px] text-sm"
              >
                <div className="flex items-center justify-start gap-4 basis-[28%]">
                  <div className="w-[3.2rem] h-[3.2rem]">
                    <img
                      src={coin.image}
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-2xl">{coin.name}</div>
                    <div className="text-sm text-gray-300">{coin.symbol}</div>
                  </div>
                </div>

                <div className="basis-[24%] text-end">
                  {currency === "inr" ? "₹ " : "$ "}{" "}
                  {coin.current_price.toFixed(2)}
                </div>
                <div
                  className={`basis-[24%] text-end ${
                    coin.price_change_percentage_24h < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="basis-[24%] text-end">
                  {currency === "inr" ? "₹ " : "$ "}{" "}
                  {coin.market_cap.toString().slice(0, -6)}M
                </div>
              </div>
            );
          })}
      </div>

      {searchQuery === "" && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="text-2xl text-white btn btn-primary btn-wide"
          >
            Prev
          </button>
          <div className="px-6 py-2 mx-4 text-2xl font-bold border-2 border-gray-400 rounded-lg">
            {page}
          </div>
          <button
            onClick={() => setPage(page + 1)}
            className="text-2xl text-white btn btn-secondary btn-wide"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default CoinTable;
