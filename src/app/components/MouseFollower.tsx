"use client";
import { motion, useMotionValue } from "framer-motion";
import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

export default function MouseFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHolding, setIsHolding] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsHolding(true);
    const handleMouseUp = () => setIsHolding(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.img
      src={isHolding ? "/wand-4.png" : "/wand-3.png"}
      alt="wand"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: mouseX,
        y: mouseY,
        pointerEvents: "none",
        zIndex: 1000,
      }}
      className="w-[155px] h-[134px] -translate-x-[58px] -translate-y-[40px]"
    />
  );
}
