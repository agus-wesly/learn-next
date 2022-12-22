"use client";

import { FormEvent, useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const page = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confPwd, setConfPwd] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regis = async () => {
      try {
        const userCred = await createUserWithEmailAndPassword(auth, email, pwd);
      } catch (error) {
        console.log(error);
      }
    };
    if (email && pwd && pwd === confPwd) {
      regis();
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[80vw] mx-auto gap-2"
      >
        <label htmlFor="eml">Email</label>
        <input
          type="email"
          name="eml"
          id="eml"
          value={email}
          className="border-[1px] border-gray-800 roundd-lg p-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="pwd">Password</label>
        <input
          type="password"
          name="pwd"
          id="pwd"
          value={pwd}
          className="border-[1px] border-gray-800 roundd-lg p-3"
          onChange={(e) => setPwd(e.target.value)}
        />

        <label htmlFor="pwd">Confirm Password</label>
        <input
          type="password"
          name="confpwd"
          id="confpwd"
          value={confPwd}
          className="border-[1px] border-gray-800 roundd-lg p-3"
          onChange={(e) => setConfPwd(e.target.value)}
        />

        <button
          type="submit"
          className="mt-5 rounded-lg bg-purple-800 font-bold text-white p-3"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default page;
