import "./globals.css";
import { Tiny5 } from "next/font/google";
import { Jersey_10 } from "next/font/google";

export const normalFont = Tiny5({
  subsets: ["latin"],
  weight: "400",
});

export const headingFont = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={normalFont.className}>{children}</body>
    </html>
  );
}
