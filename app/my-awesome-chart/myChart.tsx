import { VictoryAxis, VictoryChart, VictoryLegend, VictoryLine, VictoryTheme } from "victory";

import convertData, { ChartPoint } from "./convertData";
import FetchData from "./useData";

interface Props {
  data1: ChartPoint[];
  data2: ChartPoint[];
}

const myChart = () => {
  const rawData1: any = FetchData("/2023-01-01..2023-01-31?from=GBP&to=USD");
  const ChartData1 = convertData(rawData1);

  const rawData2: any = FetchData("/2013-01-01..2013-01-31?from=GBP&to=USD");
  const ChartData2: any = convertData(rawData2);
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLegend
        x={125}
        y={100}
        title="Legend"
        centerTitle
        orientation="horizontal"
        gutter={20}
        style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
        data={[
          { name: "January 2013", symbol: { fill: "#c4c4c4" } },
          { name: "January 2023", symbol: { fill: "#00ff00" } },
        ]}
      />
      <VictoryAxis tickValues={[5, 10, 15, 20, 25, 30]} tickFormat={["5th", "10th", "15th", "20th", "25th", "30th"]} />
      <VictoryAxis dependentAxis />

      <VictoryLine
        style={{
          data: { stroke: "#00ff00" },
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
