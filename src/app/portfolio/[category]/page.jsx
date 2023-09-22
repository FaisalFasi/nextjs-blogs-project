import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.descriptions}>Description</p>
          <Button text="See More" url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <h1>hello</h1>
          <Image
            src="https://images.pexels.com/photos/3601450/pexels-photo-3601450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // width={10}
            // height={10}
            fill={true}
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
          <Button text="See More" url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <h1>hello</h1>
          <Image
            src="https://images.pexels.com/photos/3601450/pexels-photo-3601450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // width={10}
            // height={10}
            fill={true}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
