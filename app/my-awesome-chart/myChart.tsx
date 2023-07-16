import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

import convertData, { ChartPoint } from "./convertData";
import FetchData from "./useData";

interface Props {
  data1: ChartPoint[];
  data2: ChartPoint[];
}

const myChart = () => {
  const rawData1: any = FetchData("/2023-01-01..2023-01-31?from=GBP&to=USD");
  console.log("rawData1.rates ", JSON.stringify(rawData1.rates));
  const ChartData1 = convertData(rawData1);

  const rawData2: any = FetchData("/2013-01-01..2013-01-31?from=GBP&to=USD");
  const ChartData2: any = convertData(rawData2);
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" },
        }}
        data={ChartData1}
      />
      <VictoryLine
        style={{
          data: { stroke: "#c4c4c4" },
          parent: { border: "1px solid #ccc" },
        }}
        data={ChartData2}
      />
    </VictoryChart>
  );
};

export default myChart;
