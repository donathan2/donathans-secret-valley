"use client";
import Navbar from "../components/Navbar";
import MouseFollower from "../components/MouseFollower";
import { motion } from "framer-motion";
import { normalFont } from "../lib/fonts";
import { headingFont } from "../lib/fonts";
import { useState, useEffect } from "react";

export default function BioPage() {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 140) {
        setScrolledPast(true);
      } else {
        setScrolledPast(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MouseFollower></MouseFollower>
      <Navbar />
      <div className="fixed inset-0 -z-10 bg-[url('/landscape-3.jpg')] bg-cover bg-fixed bg-center"></div>
      <main className="relative min-h-screen flex items-center justify-start pl-[122px] pt-16">
        <motion.div
          className="w-[330px] h-[550px] bg-white/52 border-3 border-amber-50 rounded-lg shadow-xl shadow-black/60"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.img
            src="/portrait.png"
            alt="portrait"
            className="w-[330px] h-[300px]"
          ></motion.img>
          <p className="text-2xl text-center">Me!</p>
          <p className="text-xl text-center pt-5 underline">Quick Facts</p>
          <div className="flex flex-row gap-10 text-center pt-2">
            <div className="flex flex-col pl-5 gap-4">
              <p>Cornell CS</p>
              <p>@Williamstown, NJ</p>
              <p>kimi ni todoke lover</p>
              <p>keshi/bixby aspirer</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>Vietnamese</p>
              <p>mentos muncher</p>
              <p>excessive sleeper</p>
              <p>best seraphine-er</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={`${normalFont.className} w-[800px] h-[550px] bg-gradient-to-br from-lime-300 via-green-700 to-green-900 shadow-lg shadow-green-950 ml-16`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p className="ml-5 mt-24 mr-5">
            Hi! I&apos;m Donathan, and I love self-expression! So much so, that
            my childhood dream was to become an author. In high school I loved
            reading novels and writing poetry. I would told everyone decidedly
            that I&apos;d become an English major. But writing books is hard.
            Finding a publisher is harder. And honestly, I have nowhere near the
            wisdom or life experience I would need to write a respectable novel.
            That stuff takes so much thoughtful introspection.
          </motion.p>
          <motion.p className="ml-5 mt-8 mr-5">
            Programming, however, was always in reach for me. All I needed was a
            computer and a working internet and I could create anything I put my
            mind towards. It&apos;s crazy honestly. There&apos;s no medium for
            expression that allows me to so easily conjure thoughts into words,
            words into pictures, and make that picture do a bunch of things when
            I click buttons. Every day I realize with increasing clarity how
            powerful programming is and it reinstills in me how much I want to
            pursue this for the rest of my life.
          </motion.p>
          <motion.p className="ml-5 mt-8 mr-5">
            Right now, I&apos;m a rising sophomore at Cornell University
            studying Computer Science. I do Python, Java, JS, HTML/CSS, C++, and
            more. I&apos;m learning bit by bit every day, and there&apos;s
            always something new to learn! I&apos;m always looking for a fun
            project to collaborate on or an exhilarating software internship
            position.
          </motion.p>
          <motion.p className="ml-5 mt-8 mr-5">
            In my free time, I love the arts! I love reading Murakami and
            Mishima, writing letters, and making crafts. I also love watching
            anime, reading manga, and playing a lot of video games.
          </motion.p>
        </motion.div>
        <motion.img
          src="/vietnam.png"
          alt="vietnam flag"
          width={315}
          height={315}
          className="absolute translate-x-[-180px] translate-y-[55px]"
          style={{ overflowY: "visible" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring" }}
          whileTap={{ scale: 1.1 }}
        ></motion.img>
        <motion.h1
          className={`${headingFont.className} absolute text-7xl text-amber-50 translate-x-[411px] translate-y-[-230px]`}
          style={{ textShadow: "5px 5px 1px rgba(0, 0,0,1)" }}
          initial={{ opacity: 0, scale: 1.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 110 }}
        >
          About me!
        </motion.h1>
      </main>
      <div className="flex relative items-center justify-center w-[full] h-[300px]">
        <motion.div
          className="absolute w-[315px] h-[70px] z-20 bg-gradient-to-br from-lime-300 to-green-300 translate-x-[-325px] border-4 border-white/30 rounded rounded-lg translate-y-[-75px] shadow-xl shadow-white/10"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            scrolledPast ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ type: "spring", delay: 0.2 }}
        >
          <motion.p
            className={`${headingFont.className} text-6xl text-amber-50 ml-[10px]`}
            style={{ textShadow: "5px 5px 1px rgba(0, 0,0,1)" }}
          >
            Lets connect!
          </motion.p>
        </motion.div>
        <motion.div
          className="w-[1000px] h-[145px] translate-y-[10px] bg-gradient-to-br from-lime-300 to-green-600 rounded-lg shadow-lg shadow-black/60"
          initial={{ scale: 0, opacity: 0 }}
          animate={
            scrolledPast ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ type: "spring", stiffness: 75 }}
        >
          <a
            href="https://www.linkedin.com/in/donathan-truong-5627b8316"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-15 mt-[28px] rounded-xl h-[95px] w-[95px] hover:bg-white/15 transition inline-flex items-center justify-center"
          >
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a
            href="https://leetcode.com/u/alear34/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-15 rounded-xl h-[95px] w-[95px] hover:bg-white/15 transition inline-flex items-center justify-center"
          >
            <img src="/leetcode.png" alt="leetcode" />
          </a>
          <a
            href="https://github.com/donathan2"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-15 rounded-xl h-[95px] w-[95px] hover:bg-white/15 transition inline-flex items-center justify-center"
          >
            <img src="/github.png" alt="github" />
          </a>
          <a
            href="mailto:dnt34@cornell.edu"
            className="ml-15 rounded-xl h-[95px] w-[95px] hover:bg-white/15 transition inline-flex items-center justify-center"
          >
            <img src="/email.png" alt="email for professional/academic" />
          </a>
          <a
            href="mailto:truongdonathan@gmail.com"
            className="ml-15 rounded-xl h-[95px] w-[95px] hover:bg-white/15 transition inline-flex items-center justify-center"
          >
            <img src="/email.png" alt="email for friends" />
          </a>
          <a
            href="mailto:donathan.truong1@gmail.com"
            className="ml-15 rounded-xl h-[95px] w-[95px] hover:bg-white/15 transition inline-flex items-center justify-center"
          >
            <img src="/email.png" alt="email for other" />
          </a>
          <p className="absolute text-sm translate-x-[502px] translate-y-[-12px]">
            Professional/Academic
          </p>
          <p className="absolute text-sm translate-x-[680px] translate-y-[-12px]">
            Personal Friends
          </p>
          <p className="absolute text-sm translate-x-[840px] translate-y-[-12px]">
            Other inquiries
          </p>
        </motion.div>
        <motion.img
          src="/butterfly.png"
          alt="/butterfly"
          className=" absolute w-[230px] h-[230px] translate-x-[535px] translate-y-[-65px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={
            scrolledPast ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ type: "spring" }}
          whileHover={{ rotate: 15 }}
          whileTap={{ scale: 1.1 }}
        ></motion.img>
      </div>
    </>
  );
}
