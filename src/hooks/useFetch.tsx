import { useEffect, useState } from "react";
import axios from "axios";
import { ResponseModel } from "@/model/ResponseModel";

type httpMethod = "GET" | "POST" | "PUT";

function useFetch(url: string, method: httpMethod, body?:any): ResponseModel {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiCall();
  }, [url, method]);

  const refetch = () => {
    setLoading(true);
    apiCall();
  };

  return { data, loading, error, refetch };

  function apiCall() {
    if (method === "GET") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    if (method === "POST") {
        axios
        .post(url,body)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    if (method === "PUT") {
    }
  }
}

export default useFetch;
