import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://media.istockphoto.com/id/586207080/de/foto/arbeitsplatz-auf-stapel-von-bunten-b%C3%BCchern.jpg?s=612x612&w=0&k=20&c=IdboHAxFAYhxZl0k1tDRI18lhh3l0HMhj-pJb33BIKs="
            }
            alt=""
            width={15}
            height={15}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>{" "}
          <p className={styles.description}>Description</p>{" "}
        </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://media.istockphoto.com/id/1190664622/de/foto/arbeitsplatz-mit-tisch-stuhl-computer-und-drucker.jpg?s=612x612&w=is&k=20&c=J4UzWJjHo7a43BUPf5vzRVvH-ERZyQO3-cqRkbfn01Q="
            }
            alt=""
            width={15}
            height={15}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>{" "}
          <p className={styles.description}>Description</p>{" "}
        </div>
      </Link>
    </div>
  );
};

export default Blog;
