import { Roboto } from "next/font/google";

import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Sign Up",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./images/favicon-32x32.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
