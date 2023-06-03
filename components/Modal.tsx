"use client";

import { VisibleContext } from "../context/DisplayModalContext";
import React from "react";

export const Modal = () => {
  const { isVisible, setIsVisible } = React.useContext(VisibleContext);

  return isVisible ? (
    <div
      className="fixed top-0 z-40 h-[100vh] w-[100vw] bg-white bg-opacity-30"
      onClick={() => setIsVisible(!isVisible)}
    >
      <div
        className="opa z-50 mx-auto flex h-80 w-full flex-col items-center justify-center border-2 bg-slate-50"
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  ) : null;
};
