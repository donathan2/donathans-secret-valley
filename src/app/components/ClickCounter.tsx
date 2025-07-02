"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";

export default function ClickCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      const { data, error } = await supabase
        .from("click_counter")
        .select("count")
        .eq("id", 1) // assumes a row exists with id = 1
        .single();

      if (!error && data) setCount(data.count);
    };

    fetchCount();
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
    <div className="z-10 w-[700px] h-[500px] translate-y-[200px]">
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
  );
}
