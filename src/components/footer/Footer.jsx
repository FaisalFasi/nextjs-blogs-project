import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 FR-Blogs. All Rights Reserved.</div>
      <div className={styles.social}>
        <div className={styles.imgContainer}></div>
        <Image
          src="/1.png"
          alt="facebook account"
          priority
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt=" Insta account"
          priority
          width={15}
          height={15}
          className={styles.icon}
        />{" "}
        <Image
          src="/3.png"
          alt="Tweeter account"
          priority
          width={15}
          height={15}
          className={styles.icon}
        />{" "}
        <Image
          src="/4.png"
          alt="Youtube account"
          priority
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
