"use client";

import { useEffect, useState } from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

const myChart = () => {
  const [data, setData] = useState();
  const [isError, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      console.log("calling fetchData from loadData");
      try {
        const response = await fetch("https://api.frankfurter.app/2023-01-01..2023-01-31?from=GBP&to=USD");
        let results = await response.json();
        console.log("results from loadData", results);
        let data = results;
        setData(data);
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
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 },
        ]}
      />
      <VictoryLine
        style={{
          data: { stroke: "#c4c4c4" },
          parent: { border: "1px solid #ccc" },
        }}
        data={[
          { x: 1, y: 3 },
          { x: 2, y: 4 },
          { x: 3, y: 5 },
          { x: 4, y: 6 },
          { x: 5, y: 7 },
        ]}
      />
    </VictoryChart>
  );
};

export default myChart;
