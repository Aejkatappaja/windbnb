"use client";

import React from "react";
import { useDataStore } from "@/lib/state-manager/store";
export const StayTitle = () => {
  const { data } = useDataStore();
  return <h2>{data.length} stays</h2>;
};
