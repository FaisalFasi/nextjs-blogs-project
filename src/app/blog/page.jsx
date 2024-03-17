import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import dotenv from "dotenv";
import { notFound } from "next/navigation";
dotenv.config();

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    notFound();
  }

  return res.json();
}
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => {
        const truncatedTitle = truncateText(item.title, 30);
        const truncatedDesc = truncateText(item.desc, 30);

        return (
          <Link
            href={`/blog/${item._id}`}
            className={styles.container}
            key={item._id}
          >
            <div className={styles.content}>
              <h1 className={styles.title}>{truncatedTitle}</h1>
              <p className={styles.desc}>{truncatedDesc}</p>

              {/* <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p> */}
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
                alt=""
                fill={true}
                priority
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
