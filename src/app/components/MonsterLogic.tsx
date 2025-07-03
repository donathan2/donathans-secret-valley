"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";
import Image from "next/image";
import { headingFont } from "../lib/fonts";

export default function MonsterLogic() {
  const [count, setCount] = useState<number | null>(null);
  const [monsterSpawn, setMonsterSpawn] = useState(false);

  useEffect(() => {
    const spawnTimer = setTimeout(() => {
      setMonsterSpawn(true);
    }, 11500);

    const fetchCount = async () => {
      const { data, error } = await supabase
        .from("click_counter")
        .select("count")
        .eq("id", 1)
        .single();

      if (!error && data) setCount(data.count);
    };

    fetchCount();
    return () => clearTimeout(spawnTimer);
  }, []);

  const handleClick = async () => {
    if (count === null) return;

    const newCount = count + 1;
    setCount(newCount);

    const { error } = await supabase
      .from("click_counter")
      .update({ count: newCount })
      .eq("id", 1);

    if (error) {
      console.error("Failed to update count:", error);
    }
  };

  return (
    <>
      {/*

    <div className="z-50 w-[700px] h-[500px] translate-y-[200px]">
      <motion.button
        className="w-[250px] h-[100px] bg-white rounded-xl border border-black"
        onClick={handleClick}
        whileTap={{ scale: 1.2 }}
      >
        Click me!
      </motion.button>
      <span className="text-lg font-medium">
        Total clicks: {count ?? "Loading..."}
      </span>
    </div>
    */}
      <motion.div
        className="inset-0 fixed w-screen h-screen"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          monsterSpawn ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
        }
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={
            monsterSpawn
              ? { x: [0, -10, 10, -10, 10, 0], y: [0, 5, -5, 5, -5, 0] }
              : {}
          }
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/monster-idle.png"
            alt="monster idle"
            width={600}
            height={600}
            className="absolute w-[450px] h-[600px] left-1/2 -translate-x-[300px] translate-y-[50px]"
          ></Image>
        </motion.div>
      </motion.div>
      <div className="flex flex-col absolute items-start space-y-[30px] right-0 bottom-0 w-[400px] h-[400px] bg-white/30 border border-3 border-white">
        <button className="text-3xl ml-[15px] pt-[50px]">Fire!</button>
        <button className="text-3xl ml-[15px] ">Lightning!</button>
        <button className="text-3xl ml-[15px] ">Freeze!</button>
      </div>
      <p
        className={`${headingFont.className} absolute text-7xl text-white right-[52px] bottom-[365px]`}
        style={{ textShadow: "5px 5px 1px rgba(0,0,0,1)" }}
      >
        Cast a Spell!
      </p>
    </>
  );
}
