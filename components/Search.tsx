import React from "react";
import { ModalActivationButton } from "./ModalActivationButton";

export const Search = () => {
  return (
    <div className="flex h-16 w-96 rounded-lg text-gray-300 shadow-lg">
      <div className="flex h-full w-[50%] items-center justify-center text-black">
        <p>Finland</p>
      </div>
      <div className="flex h-full w-[30%] items-center justify-center border-l-[0.07rem] border-r-[0.07rem] border-gray-200 text-sm">
        Add guests
      </div>
      <div className="flex h-full w-[20%] items-center justify-center">
        <ModalActivationButton />
      </div>
    </div>
  );
};
