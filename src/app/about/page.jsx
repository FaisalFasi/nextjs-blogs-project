import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
          fill={true}
          priority
          alt="cover photo"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}> Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            {" "}
            Handcrafting award winning digital experiences{" "}
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who Are We?</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. optio minus
            quam atque omnis illo nostrum possimus reprehenderit. Ut soluta quod
            dolores dignissimos cum alias est cumque aperiam, maiores autem ad
            id animi architecto corporis in amet eaque optio, veniam ab ipsum
            accusamus aspernatur numquam ratione.
            <br />
            <br />
            Mollitia, magni illum quaerat sequi, possimus aut, delectus
            voluptatum sit quos numquam voluptatibus nihil! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Hic repellendus temporibus
            aspernatur.
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>What We Do?</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus sequi pariatur architecto ratione debitis. Cum nobis
            odit dolore earum maxime explicabo dolorum neque. Veniam
            necessitatibus neque iure laborum saepe aut.
            <br />
            <br />- Dynamic Websites <br />
            <br />- Fast and Handy <br /> <br />- Mobile Apps
          </p>
          <Button url="/contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
