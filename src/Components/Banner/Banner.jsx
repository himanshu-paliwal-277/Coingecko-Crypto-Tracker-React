import BannerImage from "../../assets/banner1.jpeg";

function Banner() {
    return (
        <div className="w-full h-[25rem relative">
            <img 
                src={BannerImage} 
                className="w-full h-full"
            />
            
            <div className="absolute left-0 right-0 mx-auto top-20 w-[28rem]">
                <div className="flex flex-col gap-4">
                    <div className="text-5xl font-semibold text-center text-white">Crypto Tracker</div>
                    <div className="text-sm font-semibold text-center text-white">
                        Get all info regarding cryptocurrencies
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;