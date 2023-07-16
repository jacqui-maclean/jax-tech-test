"use client";

import { Title } from "@/components/ui/title";
import { GridContainer } from "@/components/grid-container";

import MyChart from "./myChart";

export default function AwesomeChart() {
  return (
    <GridContainer>
      <Title>Exchange rates 2013/2023</Title>

      <div className="flex h-full w-full flex-col">
        <MyChart />
      </div>
    </GridContainer>
  );
}
