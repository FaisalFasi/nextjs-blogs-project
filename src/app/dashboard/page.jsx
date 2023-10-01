"use client";
import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       setErr(true);
  //     }
  //     const data = await res.json();
  //     setIsLoading(false);
  //     setData(data);
  //   };
  //   getData();
  // }, []);

  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );
  if (session.status === "loading") {
    return <p> Loading ...!</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
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
        <div className={styles.posts}>
          {isLoading ? (
            "Loading ...!"
          ) : data.length === 0 ? (
            <h1 className={styles.noPost}>No Posts! Please Add One</h1>
          ) : (
            data.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image
                    src={post.img}
                    className={styles.img}
                    // fill={true}
                    priority
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))
          )}
        </div>
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
      </div>
    );
  }
};

export default Dashboard;
