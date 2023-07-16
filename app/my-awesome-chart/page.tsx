"use client";

import { Title } from "@/components/ui/title";
import { GridContainer } from "@/components/grid-container";

import MyChart from "./myChart";

export default function AwesomeChart() {
  return (
    <GridContainer>
      <Title>My Awesome Chart</Title>

      <div className="flex h-full w-full flex-col">
        <MyChart />
      </div>
    </GridContainer>
  );
}
