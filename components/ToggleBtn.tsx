"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ToggleBtn = () => {
  const [mount, setMount] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  const currTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="cursor-pointer">
      {currTheme === "dark" ? (
        <div onClick={() => setTheme("light")}>Light</div>
      ) : (
        <div onClick={() => setTheme("dark")}>Dark</div>
      )}
    </div>
  );
};

export default ToggleBtn;
