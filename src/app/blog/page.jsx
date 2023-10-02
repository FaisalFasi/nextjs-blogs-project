import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import dotenv from "dotenv";

dotenv.config();

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
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
            key={item._id}
          >
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
                alt=""
                priority
                width={400}
                height={400}
                className={styles.image}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
