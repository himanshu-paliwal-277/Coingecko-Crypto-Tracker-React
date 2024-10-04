import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import CoinInfoContainer from "../Components/CoinInfo/CoinInfoContainer";
import useFetchCoin from "../hooks/useFetchCoin";
import LineLoader from "../Components/PageLoader/LineLoader";
import CoinDetailsPageLoader from "../Components/PageLoader/CoinDetailsPageLoader";

function CoinDetailsPage() {
  const { coinId } = useParams();
  const { isLoading, isError, coin, currency } = useFetchCoin(coinId);

  if (isLoading) {
    return <><LineLoader />  <CoinDetailsPageLoader /></>;
  }

  if (isError) {
    return <div>Error: Something went wrong</div>;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center w-full mt-6 border-r-2 border-gray-500 md:w-[28%] md:mt-0">
          <img
            alt={coin?.name}
            src={coin?.image?.large}
            className="h-48 my-5"
          />

          <h1 className="mb-5 text-5xl font-bold text-center">{coin?.name}</h1>

          <p className="w-full px-6 py-4 text-justify">
            {parse(coin?.description?.en.split(". ")[0])}
            {"."}
          </p>

          <div className="flex flex-col w-full gap-5 px-6">
            <div className="flex items-center justify-center mb-4 md:mb-0">
              <h2 className="text-2xl font-bold ">Rank</h2>
              <span className="ml-3 text-2xl ">{coin?.market_cap_rank}</span>
            </div>

            <div className="flex items-center gap-5 mb-4 text-xl md:mb-0">
              <h2 className="font-bold ">Current Price:</h2>
              <span>
                {currency === "inr" ? "₹ " : "$ "}
                {coin?.market_data.current_price[
                  currency.toLowerCase()
                ].toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-5 mb-4 text-xl md:mb-0">
              <h2 className="font-bold ">Market Cap:</h2>
              <span>
                {currency === "inr" ? "₹ " : "$ "}
                {Number(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                ).toLocaleString()}
                {"M"}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full p-6 md:w-[72%]">
          <div className="w-full md-w-2/3">
            <CoinInfoContainer coinId={{ coinId }} />
            {/* <CoinDetailsPageLoader /> */}
          </div>
        </div>
      </div>
      {/* <CoinDetailsPageLoader /> */}
    </div>
  );
}
export default CoinDetailsPage;
