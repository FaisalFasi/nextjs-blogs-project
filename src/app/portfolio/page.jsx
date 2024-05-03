import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const projectCategories = [
  { title: "Frontend Applications", url: "/portfolio/frontend" },
  { title: "Fullstack Applications", url: "/portfolio/fullstack" },
  { title: "Explore UI and UX Mastery", url: "/portfolio/ui_ux" },
  { title: "Backend/API Projects", url: "/portfolio/backend" },
  // { title: "Other Projects", url: "/portfolio/other" },
];
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      {/* projectsCategories */}
      <div className={styles.items}>
        {projectCategories.map((endpoint) => (
          <Link key={endpoint.url} href={endpoint.url} className={styles.item}>
            <span className={styles.title}>{endpoint.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
