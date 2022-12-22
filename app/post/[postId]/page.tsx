import React from "react";
import { getPost } from "../../../utils";
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
    <div className="flex flex-col max-w-[290px] border-2 aspect-[4/3] bg-slate-100 dark:bg-gray-900 rounded-md p-5 pt-3 mx-5">
      <h1 className="text-xl font-semibold capitalize mb-4">
        {singlePost.title}
      </h1>
      <p className="text-lg text-slate-900 dark:text-slate-300 mb-2">
        {" "}
        {singlePost.body}
      </p>
      <p className="text-slate-900 font-light dark:text-slate-500">
        Posted By User {singlePost.userId}
      </p>
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
