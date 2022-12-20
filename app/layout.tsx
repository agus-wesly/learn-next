import "../styles/globals.css";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        <div className="p-5">{children}</div>
      </body>
    </html>
  );
}
