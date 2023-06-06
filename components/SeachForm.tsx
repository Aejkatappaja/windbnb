"use client";

import React from "react";

interface SearchFormProps {}

export const SearchForm: React.FC<SearchFormProps> = () => {
  const InputCityRef = React.useRef<HTMLInputElement>(null);
  const inputGuestsRef = React.useRef<HTMLInputElement>(null);

  const OnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const city = InputCityRef.current?.value;
  };
  return (
    <form onSubmit={OnSubmit}>
      <label htmlFor="city">
        LOCATION
        <input type="text" id="city" />
      </label>
      GUESTS
      <label htmlFor="guests">
        <input type="text" id="guests" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
