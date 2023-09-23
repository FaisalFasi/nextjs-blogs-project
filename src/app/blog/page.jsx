import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
async function getData() {
  const res = await fetch("http://localhost/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => {
        return (
          <Link
            href={`/blog/${item._id}`}
            className={styles.container}
            key={item.id}
          >
            <div className={styles.imageContainer}>
              <Image
                src={item.image}
                alt=""
                width={300}
                height={300}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>{" "}
              <p className={styles.description}>{item.desc}</p>{" "}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
