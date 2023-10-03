"use client";
import React, { useState } from "react";
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

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleNavbarEnable = (e) => {
    e.preventDefault();
    setIsNavbarOpen(true);
  };
  const handleNavbarDisable = () => {
    setIsNavbarOpen(false);
  };
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        FR-Blogs
      </Link>
      <div className={styles.links}>
        <div
          className={styles.navbarLinksContainer}
          style={{ top: `${isNavbarOpen ? "0" : "-1050px"}` }}
        >
          <div className={styles.navbarLink}>
            {links.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  className={styles.link}
                  onClick={handleNavbarDisable}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>

        <DarkModeToggle />
        <button className={styles.navbarButton} onClick={handleNavbarEnable}>
          navbar
        </button>
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
