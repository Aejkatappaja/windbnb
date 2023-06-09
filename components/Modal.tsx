"use client";
import { VisibleContext } from "../context/DisplayModalContext";
import React from "react";
import { SearchBar } from "./SearchBar";

export const Modal = () => {
  const { isVisible, setIsVisible } = React.useContext(VisibleContext);

  return isVisible ? (
    <div
      className="fixed top-0 z-40 h-[100vh] w-[100vw] bg-white bg-opacity-30"
      onClick={() => setIsVisible(!isVisible)}
    >
      <div
        className="z-50 mx-auto flex h-[50%] w-full flex-col items-center gap-6 bg-slate-50 md:h-96 lg:justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <SearchBar variant="modal" />
      </div>
    </div>
  ) : null;
};
