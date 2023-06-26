import React from "react";
import styles from "../styles/CardSlider.module.css";

const SimpleCardSlider = ({ children }) => {
  return <div className={styles.slider}>{children}</div>;
};

export default SimpleCardSlider;
