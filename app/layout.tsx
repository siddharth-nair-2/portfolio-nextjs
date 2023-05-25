import Navbar from "@/components/Navbar";
import { inter } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Siddharth Nair",
  description: "Siddharth Nair – Portfolio. Software Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
