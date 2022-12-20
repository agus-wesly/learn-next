import React from "react";
import { getPost } from "../../../functions";
import { Post } from "../../../typings";

interface IProps {
  params: {
    postId: string;
  };
}

const Page = async ({ params: { postId } }: IProps) => {
  const singlePost: Post = await getPost(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    true
  );

  return (
    <div className="flex flex-col max-w-[290px] border-2 aspect-[4/3]  bg-white/60 rounded-md p-5 pt-3">
      <h1 className="text-xl font-bold ">{singlePost.title}</h1>
      <p className="text-lg font-semibold"> {singlePost.body}</p>
      <p>Posted By User {singlePost.userId}</p>
    </div>
  );
};

export default Page;

export const generateStaticParams = async () => {
  const resp: Post[] = await getPost(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  return resp.map((res) => ({
    postId: res.id.toString(),
  }));
};
