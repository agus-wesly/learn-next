import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full px-5 py-7 flex gap-5 bg-blue-500">
      <div className="p-3 bg-white rounded-md font-bold text-base">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="p-3 bg-white rounded-md font-bold text-base">
        <Link href={"/post"}>Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
