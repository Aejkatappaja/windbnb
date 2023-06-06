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
  const [guests, setGuests] = React.useState<number>(0);
  const { setCity, city } = useDataStore();

  const OnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(currentCity);
    setIsVisible(false);
  };
  return (
    <>
      <form
        onSubmit={OnSubmit}
        className="flex w-full justify-between border-2 "
      >
        <label htmlFor="city" className="flex w-[32%] flex-col ">
          LOCATION
          <input
            type="text"
            id="city"
            value={currentCity ? currentCity : city}
            placeholder="Add location"
          />
        </label>

        <label htmlFor="guests" className="flex w-[32%] flex-col ">
          {" "}
          GUESTS
          <input
            type="number"
            id="guests"
            value={guests > 0 ? guests : ""}
            readOnly={true}
            placeholder="Add guests"
          />
        </label>
        <div className="flex w-[32%] items-center justify-center">
          <button type="submit" className=" h-full w-[50%] rounded-lg bg-wind">
            Search
          </button>
        </div>
      </form>
      <div className="flex w-full justify-between border-2">
        <div className=" flex w-[32%] flex-col justify-center  border-2">
          {City.map((city: string, index: number) => {
            return (
              <p
                key={index}
                onClick={() => setCurrentCity(city)}
                className=" flex items-center border-2"
              >
                <FaMapPin /> {city}
              </p>
            );
          })}
        </div>
        <div className="w-[32%] border-2">
          <button onClick={() => setGuests((prev) => (prev = guests - 1))}>
            -
          </button>
          {guests}{" "}
          <button onClick={() => setGuests((prev) => (prev = guests + 1))}>
            +
          </button>
        </div>
        <div className="w-[32%] border-2"></div>
      </div>
    </>
  );
};
