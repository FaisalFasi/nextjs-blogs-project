import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { items } from "./data";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      {data.map((item) => {
        return (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.descriptions}>{item.desc}</p>
              <Button text="See More" url={"#"} />
            </div>

            <div className={styles.imgContainer}>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  style={{ cursor: "pointer" }}
                >
                  <Image src={item.image} priority fill={true} alt="" />
                </a>
              ) : (
                <Image src={item.image} priority fill={true} alt="" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
