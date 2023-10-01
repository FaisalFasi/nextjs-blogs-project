"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  console.log(session.status, "session");
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        FR-Blogs
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => {
          return (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          );
        })}
        {session.status === "authenticated" ? (
          <button onClick={signOut} className={styles.logout}>
            Logout
          </button>
        ) : (
          <button onClick={signIn} className={styles.logout}>
            SignUp
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
