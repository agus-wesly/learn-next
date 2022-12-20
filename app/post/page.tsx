import React from "react";
import Link from "next/link";
import { Post } from "../../typings";
import { getPost } from "../../functions";

const Page = async () => {
  const posts: Post[] = await getPost(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="flex flex-col gap-3">
      {posts.map((post) => (
        <Link href={`/post/${post.id}`}>Post with ID: {post.id}</Link>
      ))}
    </div>
  );
};

export default Page;
