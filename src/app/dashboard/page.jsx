"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
// swr is a React Hooks library for remote data fetching.
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [session.status]);

  if (session.status === "loading") {
    return <p> Loading ...!</p>;
  }
  const isValidUrl = (url) => {
    const allowedDomains = [
      "images.pexels.com",
      "www.pexels.com",
      "images.unsplash.com",
      "media.istockphoto.com",
    ];

    try {
      const urlObject = new URL(url);
      const hostname = urlObject.hostname;
      return allowedDomains.includes(hostname);
    } catch (error) {
      return false;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    if (!title || !desc || !content) {
      return alert("Please fill all the fields");
    } else if (!isValidUrl(img)) {
      return alert(
        "Invalid Image URL! Please use only  Pexel, Unsplash or Istockphoto websites images link " +
          error
      );
    }

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session?.data?.user?.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        {/* Form */}
        <form
          action={styles.new}
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image URL" className={styles.input} />
          <textarea
            type="text"
            placeholder="Content"
            className={styles.textarea}
            cols={"30"}
            rows={"10"}
          />
          <button className={styles.button}>Send</button>
        </form>
        {/* Posts */}
        <div>
          <h1 className={styles.postsHeading}>POSTS</h1>
          <div className={styles.posts}>
            {isLoading ? (
              "Loading ...!"
            ) : data.length === 0 ? (
              <h1 className={styles.noPost}>No Posts! Please Add One</h1>
            ) : (
              data.map((post) => {
                const truncatedTitle = truncateText(post.title, 35);

                return (
                  <div className={styles.post} key={post._id}>
                    <h2 className={styles.postTitle}>{truncatedTitle}</h2>
                    <div className={styles.imgContainer}>
                      <Image
                        src={post.img}
                        className={styles.image}
                        width={250}
                        height={250}
                        alt=""
                      />
                      <button
                        className={styles.delete}
                        onClick={() => handleDelete(post._id)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
