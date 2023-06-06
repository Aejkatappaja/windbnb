"use client";

import { useDataStore } from "@/lib/state-manager/store";
import React from "react";

export const CityParagraph = () => {
  const { city } = useDataStore();
  return <p>{city && `${city} ,`} Finland</p>;
};
