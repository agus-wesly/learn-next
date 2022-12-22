"use client";

import { useContext } from "react";
import { NumbContext } from "../../context/CountProvider";

const page = () => {
  const { state, dispatch } = useContext(NumbContext);

  if (!dispatch) return;

  return (
    <div className="flex flex-col gap-5 px-5 items-center">
      <input
        type="text"
        className="border-2 border-black"
        value={state.text}
        onChange={(e) => dispatch({ type: "SETTXT", payload: e.target.value })}
      />
      <p>
        Text: <span className="font-bold text-lg">{state.text}</span>
      </p>
      <p>Current count : {state.counter}</p>
      <button onClick={() => dispatch({ type: "INC" })}>++</button>
      <button onClick={() => dispatch({ type: "DEC" })}>--</button>
    </div>
  );
};

export default page;
