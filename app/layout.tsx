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
        <div>Hello</div>
        {children}
      </body>
    </html>
  );
}
