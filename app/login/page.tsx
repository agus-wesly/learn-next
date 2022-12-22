"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../../firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && pwd && !error) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          pwd
        );
        const user = userCredential.user;
        console.log(user);
      } catch (error) {
        console.log(error);

        setError(true);
      }
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

        <button
          type="submit"
          className="mt-5 rounded-lg bg-purple-800 font-bold text-white p-3"
        >
          Login
        </button>
        {error && (
          <span className="text-center text-red-600">
            Username or password incorrect !
          </span>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
