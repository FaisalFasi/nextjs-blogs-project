import Image from "next/image";
import styles from "./page.module.css";
import hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.description}>
          Turning your ideas into reality. We bring the teams from the global
          tech industry
        </p>
        <Button url="portfolio" text="See Our Works"></Button>
      </div>
      <div className={styles.imgContainer}></div>
      <Image
        src={hero}
        alt="hero image"
        priority
        width={500}
        height={500}
        className={styles.image}
      />
    </div>
  );
}
