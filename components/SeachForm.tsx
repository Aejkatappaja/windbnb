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
  const [locationList, setLocationList] = React.useState<boolean>(false);
  const [guestList, setGuestList] = React.useState<boolean>(false);

  const OnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(currentCity);
    setGuests(guestNumber);
    setIsVisible(false);
  };
  return (
    <>
      <div className="flex w-[80%] items-center justify-between pt-6 font-bold md:hidden">
        <h1>Edit search</h1>
        <RxCrossCircled
          className="text-2xl text-wind"
          onClick={() => setIsVisible(false)}
        />
      </div>

      <form
        onSubmit={OnSubmit}
        className="flex h-36 w-full flex-col justify-around px-10 md:h-16 md:flex-row md:justify-between"
      >
        <label
          htmlFor="city"
          className={
            locationList
              ? "flex flex-col rounded-lg border-2  border-black md:w-[32%]"
              : "flex flex-col rounded-lg border-2  border-gray-200 md:w-[32%]"
          }
          onClick={() => {
            setLocationList(!locationList);
            guestList && setGuestList(false);
          }}
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
          className={
            guestList
              ? "flex flex-col rounded-lg border-2  border-black md:w-[32%]"
              : "flex flex-col rounded-lg border-2  border-gray-200 md:w-[32%]"
          }
          onClick={() => {
            setGuestList(!guestList);
            locationList && setLocationList(false);
          }}
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
        <>
          <div className="hidden w-[32%] items-center justify-center md:flex ">
            <button
              type="submit"
              className="flex h-full w-full items-center justify-center gap-2 rounded-lg bg-wind font-semibold text-slate-50 md:w-[50%]"
            >
              <GoSearch />
              Search
            </button>
          </div>
          <div className="absolute bottom-[52%] left-36 h-10 w-[32%] items-center justify-center md:hidden ">
            <button
              type="submit"
              className="flex h-full w-full items-center justify-center gap-2 rounded-lg bg-wind font-semibold text-slate-50 md:w-[50%]"
            >
              <GoSearch />
              Search
            </button>
          </div>
        </>
      </form>

      <div className="flex h-60 w-full items-center justify-center md:justify-between ">
        <div
          className={
            locationList
              ? "flex h-40 w-full flex-col items-center justify-around md:w-[32%]"
              : "hidden"
          }
        >
          {City.map((city: string, index: number) => {
            return (
              <p
                key={index}
                onClick={() => setCurrentCity(city)}
                className=" flex w-36 items-center justify-start gap-1"
              >
                <FaMapPin className="text-wind" /> {city}
              </p>
            );
          })}
        </div>
        <div
          className={
            guestList
              ? "border-2md:w-[32%] flex w-full flex-col items-center justify-center gap-4 "
              : "hidden"
          }
        >
          <h2>Add guests</h2>
          <div className="flex w-full items-center justify-center gap-4 ">
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
        {/* <div className="w-[32%]"></div> */}
      </div>
    </>
  );
};
