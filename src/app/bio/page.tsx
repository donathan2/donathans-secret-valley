"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function BioPage() {
  const router = useRouter();

  return <Navbar />;
}
