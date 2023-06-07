"use client";

import { VisibleContext } from "@/context/DisplayModalContext";
import { City } from "@/lib/city";
import { useDataStore } from "@/lib/state-manager/store";
import React from "react";
import { FaMapPin } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";

interface SearchFormProps {}

export const SearchForm: React.FC<SearchFormProps> = () => {
  const { setIsVisible } = React.useContext(VisibleContext);
  const [currentCity, setCurrentCity] = React.useState<string>("");
  const [guestNumber, setGuestNumber] = React.useState<number>(0);
  const { setCity, city, setGuests } = useDataStore();

  const OnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(currentCity);
    setGuests(guestNumber);
    setIsVisible(false);
  };
  return (
    <>
      <div className="flex w-[80%] items-center justify-between pt-6 font-bold md:hidden">
        <h1>Edit search</h1>
        <RxCrossCircled className="text-2xl text-wind" />
      </div>

      <form
        onSubmit={OnSubmit}
        className="flex h-36 w-full flex-col justify-around border-4 px-10 md:h-16 md:flex-row md:justify-between"
      >
        <label
          htmlFor="city"
          className="flex flex-col rounded-lg border-2 border-black md:w-[32%]"
        >
          <h2 className="ml-1 font-semibold">LOCATION</h2>
          <input
            type="text"
            id="city"
            readOnly
            value={currentCity ? currentCity : city}
            placeholder="Add location"
            className=" ml-1 w-[90%] bg-slate-50 bg-none outline-none"
          />
        </label>

        <label
          htmlFor="guests"
          className="flex flex-col rounded-lg border-2 border-black md:w-[32%]"
        >
          <h2 className="ml-1 font-semibold">GUESTS</h2>
          <input
            type="number"
            id="guests"
            value={guestNumber > 0 ? guestNumber : ""}
            readOnly={true}
            placeholder="Add guests"
            className=" ml-1 w-[90%] bg-slate-50 bg-none outline-none"
          />
        </label>
        <div className="hidden w-[32%] items-center justify-center md:flex ">
          <button
            type="submit"
            className="flex h-full w-full items-center justify-center gap-2 rounded-lg bg-wind font-semibold text-slate-50 md:w-[50%]"
          >
            <GoSearch />
            Search
          </button>
        </div>
      </form>

      <div className="flex w-full justify-between ">
        <div className=" flex h-40 w-[32%] flex-col justify-around">
          {City.map((city: string, index: number) => {
            return (
              <p
                key={index}
                onClick={() => setCurrentCity(city)}
                className=" flex items-center gap-1 px-8"
              >
                <FaMapPin className="text-wind" /> {city}
              </p>
            );
          })}
        </div>
        <div
          className="flex w-[32%] flex-col items-center justify-center gap-4
        md:items-start md:justify-start md:px-4"
        >
          <h2>Add guests</h2>
          <div className="flex w-full items-center justify-center gap-4 md:justify-start">
            <button
              className="h-10 w-10 rounded-md bg-wind text-white disabled:opacity-30"
              onClick={() => setGuestNumber(guestNumber - 1)}
              disabled={guestNumber < 1}
            >
              -
            </button>
            {guestNumber}
            <button
              className="h-10 w-10 rounded-md bg-wind text-white"
              onClick={() => setGuestNumber(guestNumber + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="w-[32%]"></div>
      </div>
    </>
  );
};
