import { useQuery } from "react-query";
import store from "../../State/Store";
import { fetchTrandingCoins } from "../../services/fetchTrandingCoins";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import 'react-alice-carousel/lib/alice-carousel.css';

function TrendingCoinsCarousel() {
  const { currency } = store();
  
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  const { data: trandingCoinsData = [], isError, error } = useQuery(
    ["TradingSCoinsDetails", currency],
    () => fetchTrandingCoins(currency),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
      onSuccess: (responseData) => {
        console.log("responseData = ", responseData);
      },
    }
  );
  if (isError) {
    console.log(error);
  }

  const items = trandingCoinsData.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <div key={coin.id}>
        <Link
          className="flex flex-col items-center text-white uppercase cursor-pointer"
          to={`/coins/${coin.id}`}
        >
          <img
            className="w-20 h-20 mb-5"
            src={coin?.image}
            alt={coin.name}
          />
          <span>
            {coin?.symbol}
            &nbsp;
            <span
              style={{
                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                fontWeight: 500,
              }}
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>
          <span style={{ fontSize: 22, fontWeight: 500 }}>
            {currency === "inr" ? "₹" : "$"} {Number(coin?.current_price.toFixed(2))}
          </span>
        </Link>
      </div>
    );
  });

  return (
    <div className="flex items-center w-[100%] px-16 my-20">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
}

export default TrendingCoinsCarousel;
