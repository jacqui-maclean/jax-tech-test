"use client";

import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

interface Props {
  data1: ChartPoint[];
  data2: ChartPoint[];
}

interface ChartPoint {
  x: number;
  y: number;
}

const myChart = ({ data1, data2 }: Props) => {
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" },
        }}
        data={data1}
      />
      <VictoryLine
        style={{
          data: { stroke: "#c4c4c4" },
          parent: { border: "1px solid #ccc" },
        }}
        data={data2}
      />
    </VictoryChart>
  );
};

export default myChart;
