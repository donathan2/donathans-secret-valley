import "./globals.css";
import { ReactNode } from "react";
import { normalFont } from "./lib/fonts";

export const metadata = {
  title: "Donathan's Secret Valley",
  description: "Donathan's personal website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={normalFont.className}>{children}</body>
    </html>
  );
}
