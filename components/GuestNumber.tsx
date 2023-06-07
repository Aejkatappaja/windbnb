"use client";

import { useDataStore } from "@/lib/state-manager/store";
import React from "react";

export const GuestNumber = () => {
  const { guests } = useDataStore();
  return (
    <p className={guests ? "text-black" : ""}>
      {guests ? guests : "Add guests"}
    </p>
  );
};
