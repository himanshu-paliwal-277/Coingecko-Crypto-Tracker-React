import Alert from "../Alert/Alert";
import CoinInfo from "./CoinInfo";
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";
import { chartDays } from "../../helpers/constants";
import { useState } from "react";
import ChartLoader from "../PageLoader/ChartLoader";

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
    return <ChartLoader />;
  }

  if (isError) {
    return <Alert message="Error fetching data" type="error" />;
  }

  return (
    <>
      <CoinInfo historicData={historicData} days={days} currency={currency} />
      <div className="flex justify-between w-full px-0 mt-3 overflow-x-auto text-sm sm:text-lg sm:px-4">
        {["24 Hours", "30 Days", "3 Months", "1 Year"].map(
          (buttonValue, buttonIndex) => (
            <button
              key={buttonIndex}
              onClick={() => handleButtonClick(buttonValue)}
              className={`sm:px-[70px] w-[90px] sm:w-auto py-2 rounded mx-1 sm:mx-0 ${
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
