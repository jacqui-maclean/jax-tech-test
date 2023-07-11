import { useEffect, useState } from "react";

const loadData = () => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);

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
        setIsError(true);
      }
    };
    fetchData();
  }, []);
  return data;
};

export default loadData;
