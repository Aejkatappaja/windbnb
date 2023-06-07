"use client";

import { VisibleContext } from "@/context/DisplayModalContext";
import { City } from "@/lib/city";
import { useDataStore } from "@/lib/state-manager/store";
import React from "react";
import { FaMapPin } from "react-icons/fa";

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
      <form
        onSubmit={OnSubmit}
        className="flex h-[40%] w-full flex-col justify-between border-4 px-10 md:h-16 md:flex-row"
      >
        <label htmlFor="city" className="flex w-[32%] flex-col">
          <h2 className="font-semibold">LOCATION</h2>
          <input
            type="text"
            id="city"
            value={currentCity ? currentCity : city}
            placeholder="Add location"
            className=" bg-slate-50 outline-none"
          />
        </label>

        <label htmlFor="guests" className="flex w-[32%] flex-col ">
          <h2 className="font-semibold">GUESTS</h2>
          <input
            type="number"
            id="guests"
            value={guestNumber > 0 ? guestNumber : "Add guests"}
            readOnly={true}
            placeholder="Add guests"
            className="bg-slate-50 outline-none"
          />
        </label>
        <div className="flex w-[32%] items-center justify-center ">
          <button
            type="submit"
            className=" h-full w-full rounded-lg bg-wind font-semibold md:w-[50%]"
          >
            Search
          </button>
        </div>
      </form>

      <div className="flex w-full justify-between border-2">
        <div className=" flex h-40 w-[32%] flex-col justify-around border-2 ">
          {City.map((city: string, index: number) => {
            return (
              <p
                key={index}
                onClick={() => setCurrentCity(city)}
                className=" flex items-center px-10"
              >
                <FaMapPin className="text-wind" /> {city}
              </p>
            );
          })}
        </div>
        <div className="w-[32%] border-2">
          <button
            onClick={() => setGuestNumber((prev) => (prev = guestNumber - 1))}
          >
            -
          </button>
          {guestNumber}
          <button
            onClick={() => setGuestNumber((prev) => (prev = guestNumber + 1))}
          >
            +
          </button>
        </div>
        <div className="w-[32%] border-2"></div>
      </div>
    </>
  );
};
