import Banner from "../Components/Banner/Banner"
import CoinTable from "../Components/CoinTable/CoinTable"
import TrendingCoinsCarousel from "../Components/TrendingCoinsCarousel/TrendingCoinsCarousel";

function Home() {
  return (
    <>
      <Banner />
      <TrendingCoinsCarousel />
      <CoinTable />
    </>
  );
}

export default Home;
