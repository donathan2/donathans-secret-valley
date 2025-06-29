"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import MouseFollower from "../components/MouseFollower";
import { motion } from "framer-motion";
import { normalFont } from "../layout";
import { headingFont } from "../layout";

export default function BioPage() {
  const router = useRouter();

  return (
    <>
      <MouseFollower></MouseFollower>
      <Navbar />
      <main className="relative min-h-screen bg-[url('/landscape-3.jpg')] bg-cover bg-fixed bg-center flex items-center justify-start pl-30 pt-16">
        <motion.div
          className="w-[330px] h-[550px] bg-white/52 border-3 border-amber-50 rounded-lg shadow-xl shadow-black/60"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.img
            src="/portrait.png"
            alt="portrait"
            className="w-[330px] h-[290px]"
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
            Hi! I'm Donathan, and I love self-expression! So much so, that my
            childhood dream was to become an author. In high school I loved
            reading novels and writing poetry. I even told everyone decidedly
            I'd be an English major. But writing books is hard. Finding a
            publisher is harder. And honestly, I have nowhere near the level of
            wisdom I should have to write a respectable novel. That shit is so
            hard.
          </motion.p>
          <motion.p className="ml-5 mt-8 mr-5">
            Programming, however, was always in reach for me. All I needed was a
            computer and decent-ish internet and I could make anything I put my
            mind towards. I love programming. There's no medium for expression
            that allows me to so easily conjure thoughts into words, words into
            pictures, and make that picture do a bunch of things when I click
            buttons. Programming is so immensely powerful and I want to do this
            for the rest of my life.
          </motion.p>
          <motion.p className="ml-5 mt-8 mr-5">
            Right now, I'm a rising sophomore at Cornell University studying
            Computer Science. I do Python, Java, JS, HTML/CSS, C++, and more.
            I'm learning bit by bit every day, but there's always something new
            to learn! I'm always looking for a fun project to collaborate on or
            an exhilarating software internship position.
          </motion.p>
          <motion.p className="ml-5 mt-8 mr-5">
            In my free time, I love the arts! I love reading Murakami and
            Mishima, writing letters, and making crafts. I also love watching
            anime, reading manga, and playing a lot of video games.
          </motion.p>
        </motion.div>
        <motion.h1
          className={`${headingFont.className} absolute text-7xl text-amber-50 top-[120px] left-[535px]`}
          style={{ textShadow: "5px 5px 1px rgba(0, 0,0,1)" }}
          initial={{ opacity: 0, scale: 2.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 110 }}
        >
          About me!
        </motion.h1>
      </main>
    </>
  );
}
