import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
const Button = ({ text, url, customStyle }) => {
  return (
    <Link href={url} className={styles.link}>
      <div className={`${styles.container} ${customStyle}`}> {text}</div>
    </Link>
  );
};

export default Button;
