import React from "react";
import Image from "next/image";
import styles from "./header.module.css";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" width={120} height={40} alt="logo-windbnb-pink" />
    </header>
  );
};
