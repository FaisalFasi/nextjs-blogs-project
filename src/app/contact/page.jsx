import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "FR-Blogs Contact Information",
  description: "This is Contact Page.",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            priority
            className={styles.image}
          />
        </div>
        <form action="" className={styles.form}>
          <input
            type="text"
            placeholder="name"
            name="name"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
