"use client";

import React from "react";
import { GoSearch } from "react-icons/go";
import { VisibleContext } from "@/context/DisplayModalContext";
import { useDataStore } from "@/lib/state-manager/store";

export const ModalActivationButton = () => {
  const { setIsVisible } = React.useContext(VisibleContext);
  return (
    <GoSearch
      className="h-6 w-6 text-wind"
      onClick={() => setIsVisible(true)}
    />
  );
};
