function Banner() {
  return (
    <div className="w-full h-[25rem] relative">
      <div className="w-full h-full mt-1 Banner">
        {/* <img src={BannerImage} className="w-full h-full" /> */}
      </div>

      <div className="absolute left-0 right-0 mx-auto top-20 w-[28rem]">
        <div className="flex flex-col gap-6">
          <div className="text-6xl font-bold text-center text-white">
            Crypto Tracker
          </div>
          <div className="text-sm font-semibold text-center text-gray-300">
            Get all the Info regarding your favorite Crypto Currency
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
