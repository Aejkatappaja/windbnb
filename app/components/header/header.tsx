import React from "react";
import Image from "next/image";
import styles from "./header.module.css";
import { VisibleContext } from "@/context/isVisibleContext";
import { GoSearch } from "react-icons/go";

export const Header = () => {
  const { isVisible, setIsVisible } = React.useContext(VisibleContext);
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" width={120} height={40} alt="logo-windbnb-pink" />
      <div className={styles.search}>
        <div>Helsinki, Finland</div>
        <div>Add guests</div>
        <div onClick={() => setIsVisible(!isVisible)}>
          <GoSearch className={styles.glass} />{" "}
        </div>
      </div>
    </header>
  );
};
