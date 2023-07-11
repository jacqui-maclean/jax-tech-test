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

export default convertData;
