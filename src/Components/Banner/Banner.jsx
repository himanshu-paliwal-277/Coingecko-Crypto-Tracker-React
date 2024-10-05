function Banner() {
  return (
    <div className="relative w-full">
      <div className="w-full h-[25rem] Banner">
        {/* <img src={BannerImage} className="w-full h-full" /> */}
      </div>

      <div className="relative mx-auto w-[28rem] mt-16">
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
