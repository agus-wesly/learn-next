import Link from "next/link";
import React from "react";
import ToggleBtn from "../components/ToggleBtn";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full px-5 py-7 flex flex-wrap gap-5 bg-white/20 backdrop-blur-lg dark:bg-black/20 text-black dark:text-white">
      <div className="p-3 text-center bg-slate-100 dark:bg-gray-900 min-w-[90px] rounded-md font-bold text-base ">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="p-3 text-center bg-slate-100 dark:bg-gray-900 min-w-[90px] rounded-md font-bold text-base">
        <Link href={"/post"}>Posts</Link>
      </div>
      <div className="p-3 text-center bg-slate-100 dark:bg-gray-900 min-w-[90px] rounded-md font-bold text-base">
        <ToggleBtn />
      </div>
      <div className="p-3 text-center bg-slate-100 dark:bg-gray-900 min-w-[90px] rounded-md font-bold text-base">
        <Link href={"/login"}>Login</Link>
      </div>
      <div className="p-3 text-center bg-slate-100 dark:bg-gray-900 min-w-[90px] rounded-md font-bold text-base">
        <Link href={"/register"}>Register</Link>
      </div>
      <div className="p-3 text-center bg-slate-100 dark:bg-gray-900 min-w-[90px] rounded-md font-bold text-base">
        <Link href={"/upload"}>Upload</Link>
      </div>
      <div className="p-3 text-center bg-slate-100 dark:bg-gray-900 min-w-[90px] rounded-md font-bold text-base">
<<<<<<< HEAD
        <Link href={"/modal"}>Modal</Link>
=======
        <Link href={"/users"}>Users List</Link>
>>>>>>> TableFeature
      </div>
    </div>
  );
};

export default Navbar;
