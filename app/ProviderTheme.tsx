"use client";

import { ThemeProvider } from "next-themes";
import CountProvider from "../context/CountProvider";

const ProviderTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <CountProvider>{children}</CountProvider>
    </ThemeProvider>
  );
};

export default ProviderTheme;
