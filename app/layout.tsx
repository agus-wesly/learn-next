import "../styles/globals.css";
import Navbar from "./Navbar";
import { Manrope } from "@next/font/google";
import ProviderTheme from "./ProviderTheme";

const roboto = Manrope({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={roboto.variable}>
      <body className="bg-white/80 dark:bg-black/80">
        <ProviderTheme>
          <Navbar />
          {children}
        </ProviderTheme>
      </body>
    </html>
  );
}
