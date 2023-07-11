import { Title } from "@/components/ui/title";
import { GridContainer } from "@/components/grid-container";

import convertData from "./convertData";
import MyChart from "./myChart";
import FetchData from "./useData";

const rawData1: any = FetchData("/2023-01-01..2023-01-31?from=GBP&to=USD");
const ChartData1 = convertData(rawData1);

const rawData2: any = FetchData("/2013-01-01..2013-01-31?from=GBP&to=USD");
const ChartData2: any = convertData(rawData2);

export default function AwesomeChart() {
  return (
    <GridContainer>
      <Title>My Awesome Chart</Title>

      <div className="flex h-full w-full flex-col">
        <MyChart data1={ChartData1} data2={ChartData2} />
      </div>
    </GridContainer>
  );
}
