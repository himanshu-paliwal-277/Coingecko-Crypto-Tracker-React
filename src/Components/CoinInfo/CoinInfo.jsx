import { CategoryScale } from "chart.js";
import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function CoinInfo({ historicData, setDays, setCoinInterval, days, currency }) {
  Chart.register(CategoryScale);
  if (!historicData) {
    return <Alert message="No data available" type="warning" />;
  }
  console.log(setDays)
  console.log(setCoinInterval)
  return (
    <>
      <Line
        data={{
          labels: ["1","2","3","4","5"],
          datasets: [
            {
              label: "Line 1",
              data: [3,5,7,1,6] // this is for line 1
            },
            {
              label: "Line 2",
              data: [4,6,7,2,4] // this is for line 2
            },
            {
              label: "Line 3",
              data: [2,1,5,1,5] // this is for line 2
            }
          ]
        }}
          
      />
      <h4>Graph</h4> 
      <h4>Days  = {days}</h4>
      <h4>Currency  = {currency}</h4>
    </>
  );
}

export default CoinInfo;
