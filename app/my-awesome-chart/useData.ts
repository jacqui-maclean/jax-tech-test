import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";

import apiClient from "./apiClient";

interface Response<T> {
  rates: {};
}
export interface ConvertRate {
  USD: number;
}

const FetchData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState({ rates: {} });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<Response<T>>(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data), setIsLoading(false);
      })
      .catch((err) => {
        if (err.message === "canceled") return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, [endpoint]);
  return data;
};

export default FetchData;
