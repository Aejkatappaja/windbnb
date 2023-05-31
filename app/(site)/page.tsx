import React from "react";
import styles from "./page.module.css";
import Data from "@/data/data.json";
import { Header } from "@/components/header/header";
import { DataProps } from "@/types/types";

interface Home {}

async function getData() {
  try {
    const data = Data;
    return data;
  } catch (e: any) {
    console.error(e.message);
  }
}

export default async function Home({}) {
  const data = await getData();
  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.h1}>Stays in Finland</h1>
      {data?.map((item: DataProps, index: number) => {
        console.log(item);

        return <h3 className={styles.h1}>{item.title}</h3>;
      })}
    </main>
  );
}
