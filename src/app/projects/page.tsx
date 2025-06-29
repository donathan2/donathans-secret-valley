"use client";
import Navbar from "../components/Navbar";
import MouseFollower from "../components/MouseFollower";

export default function projectsPage() {
  return (
    <>
      <Navbar></Navbar>
      <MouseFollower></MouseFollower>
      <div className="fixed inset-0 -z-10 bg-[url('/landscape-1.jpg')] bg-cover bg-fixed bg-center"></div>
    </>
  );
}
