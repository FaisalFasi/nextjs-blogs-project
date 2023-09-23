import React from "react";
import Styles from "./button.module.css";
import Link from "next/link";
const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <div className={Styles.container}> {text}</div>
    </Link>
  );
};

export default Button;
