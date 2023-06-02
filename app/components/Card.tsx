import React from "react";
import Image from "next/image";
import { StayType } from "@/types/stay";
import { FaStar } from "react-icons/fa";

type CardProps = {
  stay: StayType;
};
export const Card: React.FC<CardProps> = ({ stay }) => {
  return (
    <div className="w-[26rem] aspect-[1/1] flex flex-col mb-4">
      <div className="relative w-full h-[80%]">
        <Image
          src={stay.photo}
          fill
          alt="image"
          style={{ borderRadius: "1.55rem", objectFit: "cover" }}
        />
      </div>

      <div className=" mt-4 w-full h-8 flex items-center justify-between">
        <React.Fragment>
          {stay.superHost && (
            <div className="border-2 border-wind rounded-md w-32 h-full text-sm font-semibold text-wind flex justify-center items-center">
              SUPER HOST
            </div>
          )}
          <p>{stay.type}</p>
          <span className="flex items-center">
            {stay.rating}
            <FaStar className="text-wind ml-2 text-lg mb-[0.2rem]" />
          </span>
        </React.Fragment>
      </div>
      <div className="h-8 w-full mt-2 flex items-center font-medium">
        {stay.title}
      </div>
    </div>
  );
};
