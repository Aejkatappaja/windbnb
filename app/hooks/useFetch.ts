"use client";

import { DataProps } from "@/types/types";
import React from "react";
import Data from "@/data/data.json";

export default function UseFetch() {
  const [data, setData] = React.useState<DataProps[]>([]);

  function getData() {
    return new Promise<DataProps[]>((resolve) => {
      resolve(Data as DataProps[]);
    });
  }

  React.useEffect(() => {
    (async function () {
      try {
        const data = await getData();
        setData(data);
      } catch (e: any) {
        console.error(e.message);
      }
    })();
  }, []);

  return { data };
}
