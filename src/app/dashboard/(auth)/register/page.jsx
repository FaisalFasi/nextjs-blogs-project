"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log(name, email, password);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      console.log(res);
      res.status === 201 &&
        router.push("/dashboard/register?success=Account has been created");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          id="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          autoComplete="true"
          className={styles.input}
          required
        />

        <button className={styles.button}>Register</button>
        {err && <p className={styles.error}>Something went wrong</p>}
        <Link href={"/dashboard/login"}> Login with existing account</Link>
      </form>
    </div>
  );
};

export default Register;
