import BannerImage from "../../assets/banner1.jpeg";

function Banner() {
    return (
        <div className="w-full h-[25rem relative">
            <img 
                src={BannerImage} 
                className="w-full h-full"
            />
            
            <div className="absolute left-0 right-0 mx-auto top-20 w-[28rem]">
                <div className="flex flex-col gap-6">
                    <div className="text-6xl font-bold text-center text-white">Crypto Tracker</div>
                    <div className="text-sm font-semibold text-center text-gray-300">
                    You need to enable JavaScript to run this app.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;