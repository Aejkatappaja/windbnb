import React from "react";
import Image from "next/image";
import { StayType } from "@/types/stay";
import { FaStar } from "react-icons/fa";

type CardProps = {
  stay: StayType;
};
export const Card: React.FC<CardProps> = ({ stay }) => {
  return (
    <div className="mb-8 flex aspect-[1/1] w-[26rem] flex-col">
      <div className="relative h-[80%] w-full">
        <Image
          src={stay.photo}
          fill
          alt="image"
          style={{ borderRadius: "1.55rem", objectFit: "cover" }}
        />
      </div>

      <div className=" mt-4 flex h-8 w-full items-center justify-between">
        <React.Fragment>
          {stay.superHost && (
            <div className="flex h-full w-32 items-center justify-center rounded-md border-2 border-wind text-sm font-semibold text-wind">
              SUPER HOST
            </div>
          )}
          <p>{stay.type}</p>
          <span className="flex items-center">
            {stay.rating}
            <FaStar className="mb-[0.2rem] ml-2 text-lg text-wind" />
          </span>
        </React.Fragment>
      </div>
      <div className="mt-2 flex h-8 w-full items-center font-medium">
        {stay.title}
      </div>
    </div>
  );
};
