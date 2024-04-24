import Image from "next/image";
import styles from "./page.module.css";
import hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Building Exceptional Digital Experiences{" "}
        </h1>
        <p className={styles.description}>
          Turn Your Ideas into Reality. Let's Bring Your Projects to Life
          Together.
        </p>
        <Button url="portfolio" text="Explore My  Portfolio"></Button>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={hero}
          alt="hero image"
          priority
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
    </div>
  );
}
