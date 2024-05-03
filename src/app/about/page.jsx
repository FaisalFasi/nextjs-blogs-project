import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.profileImage}>
          <Image
            src="/profilePic.png"
            className={styles.profileImage}
            width={300}
            height={300}
            alt="Profile Picture"
          />
        </div>
        <div className={styles.profileText}>
          <h1 className={styles.title}>Hi, I'm Faisal Rehman</h1>
          <p className={styles.subtitle}>Passionate MERN Stack Developer</p>
        </div>
      </div>

      <div className={styles.description}>
        <div>
          <p>
            I'm a dedicated MERN (MongoDB, Express.js, React, Node.js) stack
            developer with a knack for crafting modern, responsive, and
            user-friendly web applications. I specialize in leveraging
            JavaScript, React, HTML, CSS, and Next.js to create dynamic and
            engaging digital experiences.
          </p>
          <p>
            With hands-on experience in building RESTful APIs, integrating
            databases (MongoDB, MySQL, PostgreSQL), and implementing robust
            server-side applications with Express.js, I am adept at translating
            ideas into functional and scalable solutions.
          </p>
          <p>
            I thrive on solving complex problems and continuously enhancing my
            skills to keep pace with the latest technologies. Whether it's
            designing intuitive user interfaces, optimizing performance, or
            ensuring code quality through testing methodologies, I'm committed
            to delivering high-quality software solutions.
          </p>
          <p>
            Let's collaborate to transform your ideas into reality! Feel free to
            reach out for project inquiries, collaboration opportunities, or
            just to connect and discuss the latest trends in web development.
          </p>
        </div>
        <Button
          url="/contact"
          text="Contact Me"
          customStyle={styles.buttonContainer}
        />
      </div>
    </div>
  );
};

export default AboutMe;
