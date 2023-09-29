"use client";
import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const session = useSession();

  const router = useRouter();
  if (session.status === "loading") {
    return <p> Loading ...!</p>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSubmit} className={styles.form}>
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

        <button className={styles.button}>Login</button>
        <Link href={"/dashboard/login"}> Login with existing account</Link>
      </form>
      <button onClick={() => signIn("google")}> Login with Google</button>
    </div>
  );
};

export default Login;
