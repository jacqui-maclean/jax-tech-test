export interface ChartPoint {
  x: number;
  y: number;
}

interface Raw {
  rates: { [key: string]: { USD: number } };
}

const convertData = (rawData: Raw) =>
  Object.entries(rawData.rates).reduce<ChartPoint[]>((acc, curr) => {
    let [date, currency] = curr;
    let dateItems = date.split("-");
    acc.push({
      x: parseInt(dateItems[2]),
      y: currency.USD,
    });
    return acc;
  }, []);

export default convertData;
