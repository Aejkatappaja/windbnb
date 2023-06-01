"use client";

import React from "react";

import styles from "./page.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Header } from "@/components/header/header";
import { DataProps } from "@/types/types";
import { Modal } from "@/components/modal/modal";
import UseFetch from "@/hooks/useFetch";

export default function Home() {
  const { data } = UseFetch();
  const [city, setCity] = React.useState("");
  return (
    <main className={styles.main}>
      <Header city={city} setCity={setCity} data={data} />
      <div className={styles.line}>
        <h1 className={styles.h1}>Stays in Finland</h1>
        <span>
          {
            data?.filter((item: DataProps) => {
              if (city === "") return true;
              return item.city === city;
            }).length
          }{" "}
          stays
        </span>
      </div>
      <section className={styles.container}>
        {data
          ?.filter((item: DataProps) => {
            if (city === "") return true;
            return item.city === city;
          })
          .map((item: DataProps, index: number) => {
            console.log(item);
            return (
              <div key={index} className={styles.card}>
                <div className={styles.image}>
                  <Image
                    src={item.photo}
                    fill
                    alt="image"
                    style={{ borderRadius: "1.55rem", objectFit: "cover" }}
                  />
                </div>
                <div className={styles.cardline}>
                  <>
                    {item.superHost && (
                      <div className={styles.host}>SUPER HOST</div>
                    )}

                    <p className={styles.greytext}>{item.type}</p>
                    <span>
                      {" "}
                      {item.rating} <FaStar className={styles.star} />
                    </span>
                  </>
                </div>
                <h3 className={styles.h3}>{item.title}</h3>
              </div>
            );
          })}
      </section>
      <Modal data={data} setCity={setCity} />
    </main>
  );
}
