"use client";
import Navbar from "../components/Navbar";
import MouseFollower from "../components/MouseFollower";
import { headingFont } from "../lib/fonts";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Press_Start_2P } from "next/font/google";

const bitbridgeFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function ProjectsPage() {
  const controls = useAnimation();
  const [showBitBridge, setShowBitBridge] = useState(false);

  useEffect(() => {
    async function sequence() {
      await controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
      });

      controls.start({
        scale: [1, 0.93, 1],
        transition: {
          repeat: Infinity,
          duration: 1.2,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      });
    }

    function handleScroll() {
      if (window.scrollY > 500) {
        setShowBitBridge(true);
      } else {
        setShowBitBridge(false);
      }
    }
    sequence();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <>
      <Navbar></Navbar>
      <MouseFollower></MouseFollower>
      <div className="fixed inset-0 -z-10 bg-[url('/landscape-1.jpg')] bg-cover bg-fixed bg-center"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={showBitBridge ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed w-[99.5%] shadow-[0_0_10px_10px_rgba(75,239,255,0.9)] translate-x-[-50%] left-1/2 bg-cyan-950/75 inset-0 shadow pointer-events-none"
      />
      <main className="relative mx-auto w-full h-[575px]">
        <motion.div
          className={`${headingFont.className} absolute z-10 w-[450px] h-[75px] translate-x-[150px] shadow-lg translate-y-[-45px] border border-4 border-amber-50 rounded-full bg-gradient-to-br from-green-200 to-green-500`}
          initial={{ opacity: 0, scale: 0 }}
          animate={controls}
        >
          <motion.h1
            className={"text-5xl text-amber-50 ml-[20px] translate-y-[10px]"}
            style={{ textShadow: "2px 2px 1px rgba(0,0,0,1)" }}
          >
            Check out my projects!
          </motion.h1>
        </motion.div>
        <motion.div
          className="w-[950px] h-[350px] mt-[200px] translate-x-[250px] bg-amber-200 rounded-xl shadow-xl bg-gradient-to-br from-lime-400 to-lime-800"
          initial={{ opacity: 0, x: 55 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="ml-[25px] mr-[20px] pt-[45px] leading-relaxed text-2xl">
            Here you&apos;ll find an archive of programming projects I&apos;ve
            worked on! I&apos;ve gotten much better at programming since
            I&apos;ve begun college, so I&apos;ll only include major projects
            starting from then. If you have any comments or opinions, please
            feel welcome to tell me what you think! I love hearing suggestions
            for any work I do.
          </p>
        </motion.div>
        <motion.div
          className="w-full h-[200px] text-6xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 10 }}
        >
          <p className="w-[300px] mx-auto text-center translate-y-[55px]">
            ↓ ↓ ↓
          </p>
        </motion.div>
      </main>
      <motion.div className=" w-full h-[650px]">
        <motion.div
          className="w-[400px] h-[120px] bg-cyan-950 ml-[90px] border-4 border-cyan-400 translate-x-[50px] rounded shadow-[0_0_10px_2px_rgba(3,170,250,0.9)]"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            showBitBridge ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ type: "spring" }}
        >
          <p
            className={`${bitbridgeFont.className} text-cyan-400 text-center text-3xl pt-10`}
          >
            BitBridge
          </p>
        </motion.div>
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="w-[640px] h-auto rounded-xl border-2 border-cyan-400 translate-x-[680px] translate-y-[-120px] rounded shadow-[0_0_10px_2px_rgba(3,170,250,0.9)] object-cover"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            showBitBridge ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ type: "spring", delay: 0.2 }}
        >
          <source src="/bitbridge-recording-edited.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        <motion.div
          className="relative w-[500px] h-[425px] translate-x-[90px] translate-y-[-290px] bg-cyan-800 rounded border-2 border-cyan-950 shadow-[0_0_10px_4px_rgba(3,80,100,1)]"
          initial={{ opacity: 0, x: -160 }}
          animate={
            showBitBridge ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="absolute w-[500px] h-[425px] translate-x-[115px] shadow-[0_0_10px_2px_rgba(250,250,250,1)] translate-y-[-690px] bg-sky-300 rounded border-4 border-stone-100"
          initial={{ opacity: 0, x: -160 }}
          animate={
            showBitBridge ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <p className="m-5">
            Code. Collaborate. Level up! BitBridge is a web app where users can
            hone their coding skills via project based learning within a
            community of other aspiring coders. Simply create a project, or join
            one! You&apos;ll become part of a team with other coders with an
            integrated workspace area, built-in GitHub integration, and an
            interface designed for collaborative work.
          </p>
          <p className="m-5">
            BitBridge is gamified as well! Upon finishing a project or
            collecting daily log-in rewards, users can level up and accumulate
            bits and bytes. They can use these to purchase titles in the
            BitVault and customize their profiles!
          </p>
          <p className="m-5">
            BitBridge can be used as a tool to help students break into the
            coding sphere in a supportive environment, but anyone can utilize it
            to find a collaborative project to work on and add to their
            portfolios if they don&apos;t have a team.
          </p>
        </motion.div>
        <motion.div
          className="w-[600px] h-[200px] bg-cyan-950 border-3 border-white shadow-[0_0_10px_2px_rgba(250,250,250,1)] rounded translate-y-[-500px] translate-x-[700px]"
          initial={{ opacity: 0, x: 160 }}
          animate={
            showBitBridge ? { opacity: 1, x: 0 } : { opacity: 0, x: 125 }
          }
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <p className="p-5 text-white">
            BitBridge was made as a part of the 2025 Startery x Antler
            launchpad. It uses React, TypeScript, Tailwind CSS, Supabase, OAuth,
            and was deployed using Netlify. Thank you to everyone at launchpad
            for the valuable suggestions made across its development, and
            special thanks to James Tandy for his UI/UX and BitVault
            contributions.
          </p>
        </motion.div>
        <motion.a
          href="https://bitbridgeai.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute z-50 w-[160px] h-[50px] bg-white rounded rounded-full border-2 translate-x-[1150px] translate-y-[-770px] flex items-center justify-center font-bold text-xl shadow-[0_0_20px_10px_rgba(250,250,250,1)]"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            showBitBridge ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{
            opacity: { duration: 0.4, ease: "easeInOut", delay: 0.4 },
            scale: { type: "spring", delay: 0.4 },
          }}
          whileHover={{
            boxShadow: "0px 0px 35px 20px rgba(132, 255, 0, 0.97)",
            scale: 1.2,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          }}
          whileTap={{
            boxShadow: "0px 0px 75px 75px rgba(208, 0, 255, 0.97)",
            scale: 1.0,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          }}
        >
          Check it out!
        </motion.a>
      </motion.div>
    </>
  );
}
