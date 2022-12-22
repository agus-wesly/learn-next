"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchField() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (value) {
      e.preventDefault();
      router.push(`/search/${value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-5">
      <input
        type={"text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-[1px] border-black px-5 py-3 focus:outline-none"
      />
      <button className="bg-blue-500 text-white ml-5 rounded-lg px-4 py-3 cursor-pointer font-bold">
        Search
      </button>
    </form>
  );
}

export default SearchField;
