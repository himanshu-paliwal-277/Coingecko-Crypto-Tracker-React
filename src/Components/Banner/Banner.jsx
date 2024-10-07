import SearchCoinFeature from "../SearchCoinFeature/SearchCoinFeature";

function Banner() {
  return (
    <div className="relative w-full">
      <div className="w-full h-[25rem] Banner">
        {/* <img src={BannerImage} className="w-full h-full" /> */}
      </div>

      <div className="relative w-full mt-16">
        <div className="flex flex-col items-center gap-6">
          <div className="text-4xl font-bold text-center sm:text-6xl ">
            Crypto Tracker
          </div> 
          <div className="text-sm font-semibold text-center text-gray-300">
            Get all the Info regarding your favorite Crypto Currency
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full pt-8 sm:hidden">
        <SearchCoinFeature />
      </div>
    </div>
  );
}

export default Banner;
