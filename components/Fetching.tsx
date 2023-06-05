"use client";

import { getAllStays } from "@/lib/stays";
import { StayType } from "@/types/stay";
import React from "react";
import { Card } from "./Card";
import { useDataStore } from "@/lib/state-manager/store";

export default function Fetching() {
  const { city, data, setData } = useDataStore();

  React.useEffect(() => {
    async function fetchData() {
      const stays = await getAllStays(city);
      setData(stays);
    }

    fetchData();
  }, [city, setData]);

  return (
    <section className="mx-auto flex h-full w-[95vw] flex-wrap justify-around bg-slate-50">
      {data?.map((stay: StayType, index: number) => {
        return <Card key={index} stay={stay} />;
      })}
    </section>
  );
}
