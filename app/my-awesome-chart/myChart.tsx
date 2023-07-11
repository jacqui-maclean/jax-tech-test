"use client";

import { useEffect, useState } from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

import useData from "./useData";

const myChart = () => {
  const [data1, setData1] = useState<{ x: number; y: number }[]>();
  const [data2, setData2] = useState<{ x: number; y: number }[]>();

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
  const rawData1: any = useData("/2023-01-01..2023-01-31?from=GBP&to=USD");
  console.log("TEST rawData.data", rawData1);
  const ChartData1 = convertData(rawData1);
  console.log("ChartData1", ChartData1);

  const rawData2: any = useData("/2013-01-01..2013-01-31?from=GBP&to=USD");
  console.log("TEST rawData.data2", rawData2);
  const ChartData2: any = convertData(rawData2);
  console.log("ChartData2", ChartData2);

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
