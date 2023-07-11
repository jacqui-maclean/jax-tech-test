"use client";

import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

import FetchData from "./useData";

const myChart = () => {
  const convertData = (rawData: { rates: { [key: string]: any } }) => {
    let chartArray: { x: number; y: number }[] = [];
    let rates = rawData.rates;
    for (let key in rates) {
      let chartObject = { x: 0, y: 0 };
      let dateKey = rates[key];
      let dateItems = key.split("-");
      let day = dateItems[2];
      chartObject.x = parseInt(day);
      for (let key in dateKey) {
        chartObject.y = dateKey[key];
      }
      chartArray.push(chartObject);
    }
    return chartArray;
  };
  const rawData1: any = FetchData("/2023-01-01..2023-01-31?from=GBP&to=USD");
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
