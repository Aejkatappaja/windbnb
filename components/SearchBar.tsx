import React from "react";
import { ModalActivationButton } from "./ModalActivationButton";
import { CityParagraph } from "./CityName";
import { SearchForm } from "./SeachForm";
import { GuestNumber } from "./GuestNumber";

type SearchBarProps = {
  variant?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({ variant }) => {
  return variant === "modal" ? (
    <SearchForm />
  ) : (
    <div className="flex h-16 w-full rounded-lg text-gray-300 shadow-lg md:w-96">
      <div className="flex h-full w-[50%] items-center justify-center text-black">
        <CityParagraph />
      </div>
      <div className="flex h-full w-[30%] items-center justify-center border-l-[0.07rem] border-r-[0.07rem] border-gray-200 text-sm">
        <GuestNumber />
      </div>
      <div className="flex h-full w-[20%] items-center justify-center">
        <ModalActivationButton />
      </div>
    </div>
  );
};
