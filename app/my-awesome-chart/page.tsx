"use client";

import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

import { Title } from "@/components/ui/title";
import { GridContainer } from "@/components/grid-container";

import loadData from "./loadData";

export default function AwesomeChart() {
  console.log("data ", loadData);
  return (
    <GridContainer>
      <Title>My Awesome Chart</Title>
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

      <div className="flex h-full w-full flex-col">Display your awesome chart here...</div>
    </GridContainer>
  );
}
