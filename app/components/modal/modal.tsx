import React from "react";
import styles from "./modal.module.css";
import { VisibleContext } from "@/context/isVisibleContext";

export const Modal = () => {
  const { isVisible, setIsVisible } = React.useContext(VisibleContext);

  return isVisible ? (
    <section
      className={styles.modalroot}
      onClick={() => setIsVisible(!isVisible)}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}></div>
    </section>
  ) : null;
};
