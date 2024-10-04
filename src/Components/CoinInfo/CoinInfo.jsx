import { CategoryScale } from "chart.js";
import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

function CoinInfo({ historicData, days, currency }) {
  if (!historicData) {
    return (
      <>
        <div className="h-[500px] w-full mt-6">
          <Alert message="No data available" type="warning" />;
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full px-2 mt-6">
      <div className="h-[500px] w-full">
        <Line
          data={{
            labels: historicData.prices.map((coinPrice) => {
              let date = new Date(coinPrice[0]); // CONVERTING UNIX TIMESTAMP TO DATE
              let time =
                date?.getHours() > 12
                  ? `${date?.getHours() - 12}:${date?.getMinutes()} PM`
                  : `${date?.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                label: `Price (Past ${days} ${
                  days === 1 ? "Day" : "Days"
                }) in ${currency?.toUpperCase()}`,
                data: historicData.prices.map((coinPrice) => coinPrice[1]),
                borderColor: "#EEBC1D",
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              point: {
                radius: 0,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default CoinInfo;
