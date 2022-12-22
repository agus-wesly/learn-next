import "../styles/globals.css";
import Navbar from "./Navbar";
import { Inter } from "@next/font/google";
import ProviderTheme from "./ProviderTheme";

const inter = Inter({
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.variable}>
      <body className="bg-white/80 dark:bg-black/80">
        <ProviderTheme>
          <Navbar />
          {children}
        </ProviderTheme>
      </body>
    </html>
  );
}
