import "./globals.css";
import { ReactNode } from "react";
import { normalFont } from "./lib/fonts";

export const metadata = {
  title: "Donathan's Secret Valley",
  description: "Donathan's personal website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={normalFont.className}>{children}</body>
    </html>
  );
}
