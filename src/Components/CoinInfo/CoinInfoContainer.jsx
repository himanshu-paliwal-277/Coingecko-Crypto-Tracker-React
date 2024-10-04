import Alert from "../Alert/Alert";
import CoinInfo from "./CoinInfo";
import PageLoader from "../PageLoader/PageLoader";
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";
import { chartDays } from "../../helpers/constants";
import { useState } from "react";

function CoinInfoContainer({ coinId }) {
  const {
    historicData,
    isError,
    isLoading,
    currency,
    days,
    setDays,
    setCoinInterval,
  } = useFetchCoinHistory(coinId);

  const [selectedButton, setSelectedButton] = useState("24 Hours");
  const handleButtonClick = (buttonValue) => {
    setSelectedButton(buttonValue);
    setDays(chartDays[buttonValue]);
    setCoinInterval?.("");
  };

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return <Alert message="Error fetching data" type="error" />;
  }

  return (
    <>
      <CoinInfo
        historicData={historicData}
        days={days}
        currency={currency}
      />
      <div className="flex justify-between w-full px-4 mt-3 text-lg">
        {["24 Hours", "30 Days", "3 Months", "1 Year"].map(
          (buttonValue, buttonIndex) => (
            <button
              key={buttonIndex}
              onClick={() => handleButtonClick(buttonValue)}
              className={`px-[70px] py-2 rounded ${
                selectedButton === buttonValue
                  ? "bg-yellow-300 text-black font-bold"
                  : "border-[1px] border-yellow-300 hover:bg-yellow-300 hover:text-black" 
              }`}
            >
              {buttonValue}
            </button>
          )
        )}
      </div>
    </>
  );
}

export default CoinInfoContainer;
