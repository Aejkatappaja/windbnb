import React from "react";
import styles from "./modal.module.css";
import { VisibleContext } from "@/context/isVisibleContext";
import { DataProps } from "@/types/types";
import { FaMapPin } from "react-icons/fa";

interface ModalProps {
  data: DataProps[];
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

export const Modal: React.FC<ModalProps> = ({ data, setCity }) => {
  const { isVisible, setIsVisible } = React.useContext(VisibleContext);
  const renderedCities: string[] = [];

  return isVisible ? (
    <section
      className={styles.modalroot}
      onClick={() => setIsVisible(!isVisible)}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.filter}></div>
        <div className={styles.modaltext}>
          {data?.map((item: DataProps, index: number) => {
            if (!renderedCities.includes(item.city)) {
              renderedCities.push(item.city);
              return (
                <div key={index} onClick={() => setCity(item.city)}>
                  <FaMapPin className={styles.location} />
                  {item.city}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  ) : null;
};
