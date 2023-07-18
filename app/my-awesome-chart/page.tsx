"use client";

import { Title } from "@/components/ui/title";
import { GridContainer } from "@/components/grid-container";

import MyChart from "./myChart";

export default function AwesomeChart() {
  return (
    <GridContainer>
      <Title>Daily exchange rates 2013/2023 GBP to USD</Title>

      <div className="flex h-full w-full flex-col">
        <MyChart />
      </div>
    </GridContainer>
  );
}
