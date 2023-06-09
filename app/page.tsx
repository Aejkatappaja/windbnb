import DynamicDataFetching from "@/components/DynamicDataFetching";

import { StayTitle } from "@/components/StaysTitle";

import React from "react";

export default async function Home() {
  return (
    <main className="bg-slate-50 text-black">
      <div className="flex items-center justify-between px-6 py-14 md:px-14">
        <h1 className="text-2xl font-bold">Stays in Finland</h1>
        <StayTitle />
      </div>
      <DynamicDataFetching />
    </main>
  );
}
