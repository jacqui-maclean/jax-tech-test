import React, { useEffect, useState } from "react";

const loadData = () => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.frankfurter.app/2023-01-01..2023-01-31?from=GBP&to=USD");
        let results = await response.json();
        let data = results.Response;
        console.log("data ", data);
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
