import React from "react";
import Image from "next/image";
import styles from "./header.module.css";
import { VisibleContext } from "@/context/isVisibleContext";
import { GoSearch } from "react-icons/go";
import { DataProps } from "@/types/types";

type HeaderProps = {
  data: DataProps[];
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

export const Header: React.FC<HeaderProps> = ({ data, city, setCity }) => {
  const { isVisible, setIsVisible } = React.useContext(VisibleContext);

  return (
    <header className={styles.header}>
      <Image
        src="/logo.svg"
        width={120}
        height={40}
        alt="logo-windbnb-pink"
        onClick={() => setCity("")}
      />
      <div className={styles.search}>
        {city ? <div>{city}, Finland</div> : <div>Finland</div>}
        <div>Add guests</div>
        <div onClick={() => setIsVisible(!isVisible)}>
          <GoSearch className={styles.glass} />{" "}
        </div>
      </div>
    </header>
  );
};
