"use client";

import { useEffect, useState, useRef } from "react";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";
import Image from "next/image";
import { headingFont } from "../lib/fonts";
import { useRouter } from "next/navigation";

export default function MonsterLogic() {
  const [wasCrit, setWasCrit] = useState(false);
  const router = useRouter();
  const [count, setCount] = useState<number | null>(null);
  const [monsterSpawn, setMonsterSpawn] = useState(false);
  const [monsterShake, setMonsterShake] = useState(false);
  const [buttonSpawn, setButtonSpawn] = useState(false);
  const [playerPhase, setPlayerPhase] = useState(false);
  const [flashRed, setFlashRed] = useState(false);
  const [hearts, setHearts] = useState(5);
  const [damage, showDamage] = useState<{
    value: number | null;
    id: number;
  }>({ value: null, id: 0 });
  const [monsterStance, setMonsterStance] = useState<
    "fire" | "lightning" | "freeze" | "attack" | "idle"
  >("idle");
  const finalDamage = useRef(0);
  const [gameOver, setGameOver] = useState(false);

  // SOUNDS
  const bgmRef = useRef<HTMLAudioElement | null>(null);
  const gameOverRef = useRef<HTMLAudioElement | null>(null);

  const playFire = () => {
    const fire = new Audio("/fire-sfx.wav");
    fire.volume = 0.8;
    fire.play().catch((err) => {
      console.warn("SFX autoplay failed:", err);
    });
  };

  const playFireCrit = () => {
    const fire = new Audio("/fire-crit-sfx.wav");
    fire.volume = 0.7;
    fire.play().catch((err) => {
      console.warn("SFX autoplay failed:", err);
    });
  };

  const playLightning = () => {
    const lightning = new Audio("/lightning-sfx.wav");
    lightning.volume = 0.8;
    lightning.play().catch((err) => {
      console.warn("SFX autoplay failed:", err);
    });
  };

  const playLightningCrit = () => {
    const lightning = new Audio("/lightning-crit-sfx.wav");
    lightning.volume = 0.6;
    lightning.play().catch((err) => {
      console.warn("SFX autoplay failed:", err);
    });
  };

  const playFreeze = () => {
    const freeze = new Audio("/freeze-sfx.wav");
    freeze.volume = 0.6;
    freeze.play().catch((err) => {
      console.warn("SFX autoplay failed:", err);
    });
  };

  const playFreezeCrit = () => {
    const freeze = new Audio("/freeze-crit-sfx.wav");
    freeze.volume = 0.6;
    freeze.play().catch((err) => {
      console.warn("SFX autoplay failed:", err);
    });
  };

  const playAttacked = () => {
    const attacked = new Audio("/monster-attack.wav");
    attacked.volume = 0.8;
    attacked.play().catch((err) => {
      console.warn("SFX autoplay failed:", err);
    });
  };

  const playAttackedOneHP = () => {
    const attacked = new Audio("/monster-1hp.wav");
    attacked.volume = 0.8;
    attacked.play().catch((err) => {
      console.warn("SFX autoplay failed:", err);
    });
  };

  const playAttackedFatal = () => {
    const attacked = new Audio("/monster-fatal.wav");
    attacked.volume = 0.8;
    attacked.play().catch((err) => {
      console.warn("SFX autoplay failed:", err);
    });
  };

  const playFireHover = () => {
    const fire = new Audio("/fire-hover.wav");
    fire.volume = 0.8;
    fire.play().catch((err) => {
      console.warn("SFX autoplay failed:", err);
    });
  };

  const playLightningHover = () => {
    const lightning = new Audio("/lightning-hover.wav");
    lightning.volume = 0.8;
    lightning.play().catch((err) => {
      console.warn("SFX autoplay failed:", err);
    });
  };

  const playFreezeHover = () => {
    const freeze = new Audio("/freeze-hover.wav");
    freeze.volume = 0.8;
    freeze.play().catch((err) => {
      console.warn("SFX autoplay failed:", err);
    });
  };

  useEffect(() => {
    const spawnTimer = setTimeout(() => {
      const bgm = new Audio("/battle-theme.mp3");
      bgm.loop = true;
      bgm.volume = 0.4;
      bgm.play().catch((e) => {
        console.warn("Autoplay failed:", e);
      });
      bgmRef.current = bgm;

      setMonsterSpawn(true);
    }, 8800);

    const monsterShakeTimer = setTimeout(() => {
      handleMonsterShake();
    }, 8800);

    const buttonSpawnTimer = setTimeout(() => {
      setButtonSpawn(true);
    }, 9600);

    const startPlayerPhase = setTimeout(() => {
      setPlayerPhase(true);
    }, 9600);

    const fetchCount = async () => {
      const { data, error } = await supabase
        .from("click_counter")
        .select("count")
        .eq("id", 1)
        .single();

      if (!error && data) setCount(data.count);
    };

    fetchCount();
    return () => {
      clearTimeout(spawnTimer);
      clearTimeout(buttonSpawnTimer);
      clearTimeout(startPlayerPhase);
      clearTimeout(monsterShakeTimer);

      if (bgmRef.current) {
        bgmRef.current.pause();
        bgmRef.current.currentTime = 0;
        bgmRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (monsterStance != "idle") {
      const stanceTimer = setTimeout(() => {
        setMonsterStance("idle");
      }, 1000);
      return () => clearTimeout(stanceTimer);
    }
  }, [monsterStance]);

  useEffect(() => {
    if (hearts === 0) {
      setGameOver(true);
    }
  }, [hearts]);

  const handleMonsterShake = () => {
    setMonsterShake(true);
    setTimeout(() => {
      setMonsterShake(false);
    }, 500);
  };

  useEffect(() => {
    if (!gameOver) return;

    if (bgmRef.current) {
      bgmRef.current.pause();
      bgmRef.current.currentTime = 0;
      bgmRef.current = null;
    }
    const gameOverBgm = new Audio("/game-over.wav");
    gameOverBgm.volume = 0.4;
    gameOverBgm.loop = false;
    gameOverBgm.play().catch((e) => {
      console.warn("Autoplay failed:", e);
    });
    gameOverRef.current = gameOverBgm;

    return () => {
      if (gameOverRef.current) {
        gameOverRef.current.pause();
        gameOverRef.current.currentTime = 0;
        gameOverRef.current = null;
      }
    };
  }, [gameOver]);

  const handleEnemyPhase = () => {
    setTimeout(() => {
      setMonsterStance("attack");
      setFlashRed(true);
      setHearts((prev) => {
        const newHearts = prev - 1;

        if (newHearts <= 0) {
          playAttackedFatal();
        } else if (newHearts === 1) {
          playAttackedOneHP();
        } else {
          playAttacked();
        }

        return newHearts;
      });
    }, 1500);
    setTimeout(() => {
      setMonsterStance("idle");
      setPlayerPhase(true);
      setFlashRed(false);
    }, 2500);
  };

  const handleClick = async (damage: number, crit: boolean) => {
    if (count === null) return;

    const newCount = count + damage;
    setCount(newCount);

    const { error } = await supabase
      .from("click_counter")
      .update({ count: newCount })
      .eq("id", 1);

    if (error) {
      console.error("Failed to update count:", error);
    }
    setWasCrit(crit);
    handleEnemyPhase();
    finalDamage.current += damage;
    showDamage({ value: damage, id: Date.now() });
    setTimeout(() => {
      showDamage({ value: null, id: Date.now() + 1 });
    }, 1000);
  };

  const castFire = () => {
    const base = Math.floor(Math.random() * (35 - 25 + 1)) + 25;
    const isCrit = Math.random() < 0.25;
    const totalDamage = isCrit ? base * 2 : base;
    isCrit ? playFireCrit() : playFire();
    handleClick(totalDamage, isCrit);
  };

  const castLightning = () => {
    const base = Math.floor(Math.random() * (45 - 5 + 1)) + 5;
    const isCrit = Math.random() < 0.5;
    const totalDamage = isCrit ? base * 2 : base;
    isCrit ? playLightningCrit() : playLightning();
    handleClick(totalDamage, isCrit);
  };
  const castFreeze = () => {
    const base = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
    const isCrit = Math.random() < 0.1;
    const totalDamage = isCrit ? base * 2 : base;
    isCrit ? playFreezeCrit() : playFreeze();
    handleClick(totalDamage, isCrit);
  };

  return (
    <>
      <motion.div className="inset-0 fixed w-screen h-screen">
        {gameOver && (
          <motion.div
            className="inset-0 z-50 absolute bg-black"
            onClick={() => {
              router.push("/adventure");
            }}
          >
            <p className="text-white text-4xl text-center translate-y-[300px]">
              {" "}
              You fled the forest. You dealt {finalDamage.current} damage to the
              monster.
            </p>
          </motion.div>
        )}
        {flashRed && (
          <motion.div
            className="absolute pointer-events-none inset-0 bg-red-500 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6 }}
          ></motion.div>
        )}
        <motion.div
          animate={{
            opacity: monsterSpawn ? 1 : 0,
            scale: monsterStance === "attack" ? 1.6 : 1,
            x: monsterShake ? [0, -15, 15, -15, 15, 0] : 0,
            y: monsterShake ? [0, 10, -10, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={
              monsterStance === "fire"
                ? "/monster-fire.png"
                : monsterStance === "lightning"
                ? "/monster-lightning.png"
                : monsterStance === "freeze"
                ? "/monster-freeze.png"
                : monsterStance === "attack"
                ? "/monster-attack.png"
                : "/monster-idle.png"
            }
            alt="monster with stance"
            width={600}
            height={600}
            className="absolute w-[450px] h-[600px] left-1/2 -translate-x-[300px] translate-y-[50px]"
          ></Image>
        </motion.div>
        <motion.a
          className="absolute z-20 w-[110px] h-[30px] left-[20px] top-[20px] bg-gradient-to-br from-slate-300 to-slate-500 border border-white/50 border-2 shadow shadow-[0_0_5px_1px_rgba(255,255,255,1)] rounded-xl"
          onClick={() => {
            router.push("/adventure");
          }}
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={buttonSpawn ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-center ">Retreat!</p>
        </motion.a>
        <motion.div
          className="flex flex-rows absolute z-20 right-0 top-0 w-[400px] h-[100px]"
          initial={{ opacity: 0 }}
          animate={buttonSpawn ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image
              src={hearts >= 1 ? "/heart-alive.png" : "/heart-dead.png"}
              alt="heart"
              width={200}
              height={200}
              className="w-[75px] h-[75px]"
            ></Image>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image
              src={hearts >= 2 ? "/heart-alive.png" : "/heart-dead.png"}
              alt="heart"
              width={200}
              height={200}
              className="w-[75px] h-[75px]"
            ></Image>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image
              src={hearts >= 3 ? "/heart-alive.png" : "/heart-dead.png"}
              alt="heart"
              width={200}
              height={200}
              className="w-[75px] h-[75px]"
            ></Image>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image
              src={hearts >= 4 ? "/heart-alive.png" : "/heart-dead.png"}
              alt="heart"
              width={200}
              height={200}
              className="w-[75px] h-[75px]"
            ></Image>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image
              src={hearts >= 5 ? "/heart-alive.png" : "/heart-dead.png"}
              alt="heart"
              width={200}
              height={200}
              className="w-[75px] h-[75px]"
            ></Image>
          </motion.div>
        </motion.div>
        <motion.p
          key={damage.id}
          style={
            wasCrit
              ? {
                  fontSize: "75px",
                  textShadow: "3px 3px 1px rgb(255, 255, 255)",
                  color: "rgb(254, 54, 54)",
                }
              : {
                  fontSize: "50px",
                  textShadow: "2px 2px 1px rgb(0, 0, 0)",
                  color: "rgb(196, 0, 0)",
                }
          }
          className="absolute w-[30px] h-[30px] left-1/2 translate-x-[180px] top-1/2 translate-y-[-200px] text-5xl text-red-500"
          initial={{ opacity: 1, scale: 1.3, y: 0 }}
          animate={
            damage != null
              ? { opacity: 0, scale: [1.3, 1], y: -50 }
              : { opacity: 1, scale: 1.3, y: 0 }
          }
          transition={{ duration: 1 }}
        >
          {damage.value}
        </motion.p>
        <div className="absolute w-[85px] h-[40px] translate-x-[249px] translate-y-[425px]">
          <p className="text-[12px] text-center">
            All-time dmg:{" "}
            <span className="text-[16px]">{count ?? "Loading..."}</span>
          </p>
        </div>
        <motion.div
          className={`flex flex-col absolute items-start space-y-[25px] right-0 bottom-0 w-[400px] h-[400px] bg-white/45 border-t-3 border-l-3 border-white ${
            playerPhase ? "" : "pointer-events-none"
          }`}
          initial={{ opacity: 0, scale: 1.75 }}
          animate={
            playerPhase ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.3 }
          }
          transition={{ duration: 0.3 }}
        >
          <button
            className="text-3xl flex flex-col items-start pl-[15px] mt-[40px] hover:bg-red-400"
            onMouseEnter={() => {
              playFireHover();
            }}
            onClick={() => {
              setMonsterStance("fire");
              handleMonsterShake();
              castFire();
              setPlayerPhase(false);
            }}
          >
            Fire!
            <p className="text-lg text-left mr-[15px] ">
              Burns the monster acrisp, dealing{" "}
              <span style={{ textShadow: "1px 1px 1px rgba(255,255,255,1" }}>
                25-35
              </span>{" "}
              base dmg, with a{" "}
              <span style={{ textShadow: "1px 1px 1px rgba(255,0,0,1)" }}>
                25%{" "}
              </span>{" "}
              chance to critically strike.
            </p>
          </button>
          <button
            className="text-3xl flex flex-col items-start pl-[15px] hover:bg-yellow-400"
            onMouseEnter={() => {
              playLightningHover();
            }}
            onClick={() => {
              setMonsterStance("lightning");
              handleMonsterShake();
              castLightning();
              setPlayerPhase(false);
            }}
          >
            Lightning!
            <p className="text-lg text-left mr-[15px]">
              Zaps with piercing voltage, dealing{" "}
              <span style={{ textShadow: "1px 1px 1px rgba(255,255,255,1" }}>
                5-45
              </span>{" "}
              base dmg, with a{" "}
              <span style={{ textShadow: "1px 1px 1px rgba(255,0,0,1)" }}>
                50%
              </span>{" "}
              chance to critically strike.
            </p>
          </button>
          <button
            className="text-3xl flex flex-col items-start pl-[15px] hover:bg-cyan-400"
            onMouseEnter={() => {
              playFreezeHover();
            }}
            onClick={() => {
              setMonsterStance("freeze");
              handleMonsterShake();
              castFreeze();
              setPlayerPhase(false);
            }}
          >
            Freeze!
            <p className="text-lg text-left mr-[15px]">
              Unleashes a chilling blast, dealing{" "}
              <span style={{ textShadow: "1px 1px 1px rgba(255,255,255,1" }}>
                20-50
              </span>{" "}
              base dmg, with a{" "}
              <span style={{ textShadow: "1px 1px 1px rgba(255,0,0,1)" }}>
                10%
              </span>{" "}
              chance to critically strike.
            </p>
          </button>
          <p
            className={`${headingFont.className} absolute text-7xl text-white right-[52px] bottom-[365px]`}
            style={{ textShadow: "5px 5px 1px rgba(0,0,0,1)" }}
          >
            Cast a Spell!
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
