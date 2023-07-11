"use client";

import { useEffect, useState } from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

const myChart = () => {
  const [data, setData] = useState();
  const [isError, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.frankfurter.app/2023-01-01..2023-01-31?from=GBP&to=USD");
        let results = await response.json();
        let data = results;
        let chartArray: { x: number; y: number }[] = [];
        let rates = data.rates;
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
        setData(chartArray);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" },
        }}
        data={data}
      />
      <VictoryLine
        style={{
          data: { stroke: "#c4c4c4" },
          parent: { border: "1px solid #ccc" },
        }}
        data={data}
      />
    </VictoryChart>
  );
};

export default myChart;
