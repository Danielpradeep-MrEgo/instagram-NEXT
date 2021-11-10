import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

// const posts = [
//   {
//     id: "123",
//     username: "Danny",
//     userImg:
//       "https://www.thestatesman.com/wp-content/uploads/2019/02/DJ-Marshmellow.jpg",
//     img: "https://www.thestatesman.com/wp-content/uploads/2019/02/DJ-Marshmellow.jpg",
//     caption: "testing",
//   },
//   {
//     id: "12335",
//     username: "Dan",
//     userImg:
//       "https://www.thestatesman.com/wp-content/uploads/2019/02/DJ-Marshmellow.jpg",
//     img: "https://www.thestatesman.com/wp-content/uploads/2019/02/DJ-Marshmellow.jpg",
//     caption: "sdfgbseghersr4",
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
