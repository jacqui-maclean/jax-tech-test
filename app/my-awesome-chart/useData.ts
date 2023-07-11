import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";

import apiClient from "./apiClient";

interface Response<T> {
  rates: {};
}
export interface ConvertRate {
  USD: number;
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState({ rates: {} });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<Response<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data), setIsLoading(false);
          console.log("from USEDATA  res.data", res.data);
        })
        .catch((err) => {
          if (err.message === "canceled") return;
          setError(err.message);
          setIsLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return data;
};

export default useData;
