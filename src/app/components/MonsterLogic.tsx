"use client";

import { useEffect, useState, useRef } from "react";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";
import Image from "next/image";
import { headingFont } from "../lib/fonts";
import { useRouter } from "next/navigation";
import Inventory from "./Inventory";
import GuardianEffect from "./GuardianEffect";
import {
  playFire,
  playFireCrit,
  playLightning,
  playLightningCrit,
  playFreeze,
  playFreezeCrit,
  playAttacked,
  playAttackedOneHP,
  playAttackedFatal,
  playSpellHover,
  playHealPot,
  playCorrode,
  playCorrupt,
  playDominionAtk,
  playChaos,
  playMementoUse,
  playUnravelUse,
  playShieldProc,
  playShieldUse,
  playDominionUse,
  playMementoAtk,
} from "../lib/sounds";

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
  const maxHp = 450;
  const [monsterHP, setMonsterHP] = useState(maxHp);
  const [winPop, setWinPop] = useState(false);
  const [damage, showDamage] = useState<{
    value: number | null;
    id: number;
  }>({ value: null, id: 0 });
  const [monsterStance, setMonsterStance] = useState<
    "fire" | "lightning" | "freeze" | "attack" | "idle"
  >("idle");
  const finalDamage = useRef(0);
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);

  // ITEMS
  const [items, setItems] = useState([1, 1, 1, 1, 1]);
  const [alreadyUsed, setAlreadyUsed] = useState(false);
  const [bonusCritMult, setBonusCritMult] = useState(1);
  const [bonusCritAdd, setBonusCritAdd] = useState(0);
  const [bonusBaseDmg, setBonusBaseDmg] = useState(0);
  const [hpVamp, setHpVamp] = useState(false);
  const [prevElement, setPrevElement] = useState("None!");
  const [dominion, setDominion] = useState(false);
  const [memento, setMemento] = useState(false);
  const [mementoDmg, setMementoDmg] = useState(0);
  const [unravel, setUnravel] = useState(false);
  const [guardian, setGuardian] = useState(0);
  const [guardianProc, setGuardianProc] = useState(false);

  // SOUNDS
  const bgmRef = useRef<HTMLAudioElement | null>(null);
  const gameOverRef = useRef<HTMLAudioElement | null>(null);
  const victoryRef = useRef<HTMLAudioElement | null>(null);

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
    setMementoDmg(15 + Math.pow(5 - hearts, 3));
  }, [hearts]);

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
    gameOverBgm.volume = 0.6;
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

  useEffect(() => {
    if (!victory) return;
    handleVictory();
  }, [victory]);

  const handleUseItem = (id: number) => {
    if (!alreadyUsed) {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        newItems[id] = 0;
        return newItems;
      });

      if (id === 0) {
        playHealPot();
        setHearts((prevHearts) => {
          const heartValue = Math.random();
          if (heartValue < 0.01) {
            return Math.min(5, prevHearts + 4);
          } else if (heartValue < 0.1) {
            return Math.min(5, prevHearts + 3);
          } else if (heartValue < 0.4) {
            return Math.min(5, prevHearts + 2);
          } else {
            return Math.min(5, prevHearts + 1);
          }
        });
        setAlreadyUsed(true);
      }

      if (id === 1) {
        setBonusCritMult(2);
        setBonusBaseDmg(10);
        setHpVamp(true);
        playDominionUse();
        setDominion(true);
        setAlreadyUsed(true);
      }

      if (id === 2) {
        setMemento(true);
        playMementoUse();
        setAlreadyUsed(true);
      }

      if (id === 3) {
        setUnravel(true);
        playUnravelUse();
        setAlreadyUsed(true);
      }

      if (id === 4) {
        setGuardian(2);
        playShieldUse();
        setAlreadyUsed(true);
      }
    }
  };

  const handleEnemyPhase = () => {
    setTimeout(() => {
      setMonsterStance("attack");
      handleItemEffects();
      if (guardian === 0) {
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
      } else {
        const blockChance = Math.random();
        if (blockChance < 0.35) {
          setGuardian((prev) => prev - 1);
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
        } else {
          setGuardian((prev) => prev - 1);
          setGuardianProc(true);
          playShieldProc();
          setTimeout(() => {
            setGuardianProc(false);
          }, 1200);
        }
      }
    }, 1500);

    setTimeout(() => {
      setMonsterStance("idle");
      setPlayerPhase(true);
      setFlashRed(false);
    }, 2500);
  };

  const handleItemEffects = () => {
    setAlreadyUsed(false);
    setBonusBaseDmg(0);
    setBonusCritAdd(0);
    setBonusCritMult(1);
    setHpVamp(false);
    setUnravel(false);
    setDominion(false);
    setMemento(false);
  };

  const handleRecoverItem = () => {
    playCorrupt();
    const usedItems = items.map((value, index) =>
      value === 0 && index != 3 ? index : null
    );
    const realUsedItems = usedItems.filter((value) => value !== null);

    if (realUsedItems.length > 0) {
      const randomItem =
        realUsedItems[Math.floor(Math.random() * realUsedItems.length)];

      setItems((prevItems) => {
        const newItems = [...prevItems];
        newItems[randomItem] = 1;
        return newItems;
      });
    }
  };

  const handleVictory = () => {
    setPlayerPhase(false);
    setMonsterSpawn(false);
    setTimeout(() => {
      setButtonSpawn(false);
      setWinPop(true);
      if (bgmRef.current) {
        bgmRef.current.pause();
        bgmRef.current.currentTime = 0;
        bgmRef.current = null;
      }
      const victoryTheme = new Audio("/victory-theme.wav");
      victoryTheme.volume = 0.5;
      victoryTheme.loop = false;
      victoryTheme.play().catch((e) => {
        console.warn("Autoplay failed:", e);
      });
      victoryRef.current = victoryTheme;
    }, 500);

    return () => {
      if (victoryRef.current) {
        victoryRef.current.pause();
        victoryRef.current.currentTime = 0;
        victoryRef.current = null;
      }
    };
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

    const nextHP = monsterHP - damage;
    setMonsterHP(nextHP);

    if (nextHP <= 0) {
      setVictory(true);
    } else {
      handleEnemyPhase();
    }

    finalDamage.current += damage;
    showDamage({ value: damage, id: Date.now() });
    setTimeout(() => {
      showDamage({ value: null, id: Date.now() + 1 });
    }, 1000);
  };

  const castFire = (
    baseDmgOverride: number,
    bonusCritDmgOverride: number,
    prevElement: string
  ) => {
    if (memento) {
      playMementoAtk();
      baseDmgOverride += mementoDmg;
    }
    const base = Math.floor(Math.random() * (35 - 25 + 1)) + 25;
    const isCrit = Math.random() < 0.25 * bonusCritMult + bonusCritAdd;
    const totalDamage = isCrit
      ? (base + bonusBaseDmg + baseDmgOverride) * (2 + bonusCritDmgOverride)
      : base + bonusBaseDmg + baseDmgOverride;
    if (isCrit) {
      playFireCrit();
    } else {
      playFire();
    }
    if (dominion) {
      playDominionAtk();
    }
    if (hpVamp) {
      setHearts((prev) => {
        return Math.min(5, prev + 1);
      });
    }
    if (unravel && prevElement === "Freeze!") {
      playCorrode();
      setHearts((prev) => {
        return Math.min(5, prev + Math.floor(totalDamage / 15));
      });
    }
    if (unravel && prevElement === "Lightning!" && isCrit) {
      playChaos();
    }
    setPrevElement("Fire!");
    handleClick(totalDamage, isCrit);
  };

  const castLightning = (
    bonusCritDmgOverride: number,
    bonusCritOverride: number,
    storedElement: string,
    baseDmgOverride: number
  ) => {
    if (memento) {
      playMementoAtk();
      baseDmgOverride += mementoDmg;
    }
    const base = Math.floor(Math.random() * (45 - 5 + 1)) + 5;
    const isCrit =
      Math.random() < 0.5 * bonusCritMult + bonusCritAdd + bonusCritOverride;
    const totalDamage = isCrit
      ? (base + bonusBaseDmg + baseDmgOverride) * (2 + bonusCritDmgOverride)
      : base + bonusBaseDmg + baseDmgOverride;
    if (isCrit) {
      playLightningCrit();
    } else {
      playLightning();
    }
    if (dominion) {
      playDominionAtk();
    }
    if (hpVamp) {
      setHearts((prev) => {
        return Math.min(5, prev + 1);
      });
    }
    if (unravel === true && storedElement === "Freeze!") {
      handleRecoverItem();
    }
    if (unravel === true && storedElement === "Fire!" && isCrit) {
      playChaos();
    }
    setPrevElement("Lightning!");
    handleClick(totalDamage, isCrit);
  };
  const castFreeze = (
    baseDmgOverride: number,
    bonusCritOverride: number,
    storedElement: string
  ) => {
    if (memento) {
      playMementoAtk();
      baseDmgOverride += mementoDmg;
    }
    const base = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
    const isCrit =
      Math.random() < 0.1 * bonusCritMult + bonusCritAdd + bonusCritOverride;
    const totalDamage = isCrit
      ? (base + bonusBaseDmg + baseDmgOverride) * 2
      : base + bonusBaseDmg + baseDmgOverride;
    if (isCrit) {
      playFreezeCrit();
    } else {
      playFreeze();
    }
    if (dominion) {
      playDominionAtk();
    }
    if (hpVamp) {
      setHearts((prev) => {
        return Math.min(5, prev + 1);
      });
    }
    if (unravel === true && storedElement === "Fire!") {
      playCorrode();
      setHearts((prev) => {
        return Math.min(5, prev + Math.floor(totalDamage / 15));
      });
    }
    if (unravel === true && storedElement === "Lightning!") {
      handleRecoverItem();
    }
    setPrevElement("Freeze!");
    handleClick(totalDamage, isCrit);
  };

  return (
    <>
      <motion.div className="inset-0 fixed w-screen h-screen">
        {winPop && (
          <motion.div
            className="absolute z-50 inset-0"
            onClick={() => {
              router.push("/adventure");
            }}
            initial={{ opacity: 0, y: -75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
          >
            <div
              className={`${headingFont.className} z-50 absolute inset-0 text-[250px] text-white translate-y-[100px] text-center`}
              style={{ textShadow: "10px 10px 2px rgba(0, 0, 0, 1) " }}
            >
              Victory!
            </div>
            <div
              className="z-50 absolute inset-0 text-[30px] text-white text-center translate-y-[400px]"
              style={{ textShadow: "5px 5px 2px rgba(0, 0, 0, 1) " }}
            >
              The valley is safe again, at least for a little while.
            </div>
          </motion.div>
        )}
        {gameOver && (
          <motion.div
            className="inset-0 z-50 absolute bg-black"
            onClick={() => {
              router.push("/adventure");
            }}
          >
            <p className="text-white text-4xl text-center translate-y-[300px]">
              You fled the forest. The monster still roams about.
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
            scale: monsterStance === "attack" ? 1.7 : 1,
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
        {guardianProc && <GuardianEffect></GuardianEffect>}

        <motion.div
          initial={{ opacity: 0 }}
          animate={buttonSpawn ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Inventory
            items={items}
            handleUseItem={handleUseItem}
            pastElement={prevElement}
          ></Inventory>
        </motion.div>
        <motion.a
          className="absolute z-20 w-[130px] h-[40px] left-[20px] top-[20px] bg-gradient-to-br from-slate-300 to-slate-800 border border-white/50 border-2 shadow rounded-xl"
          onClick={() => {
            router.push("/adventure");
          }}
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={buttonSpawn ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p
            className={`${headingFont.className} text-center text-3xl text-white`}
            style={{ textShadow: "3px 3px 1px rgba(0, 0, 0, 1)" }}
          >
            Retreat!
          </p>
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          animate={buttonSpawn ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute z-30 left-1/2 -translate-x-[400px] translate-y-[50px] text-white text-2xl"
            style={{ textShadow: "2px 2px 1px rgba(0, 0, 0, 1)" }}
          >
            HP: {Math.max(0, monsterHP)} / {maxHp}
          </div>

          <div className="absolute z-20 w-[300px] h-[30px] left-1/2 -translate-x-[450px] translate-y-[80px] bg-gradient-to-br from-gray-500 to-gray-800">
            <Image
              src="/xp-bar.png"
              alt="empty xp bar"
              fill
              className="absolute"
            ></Image>
            <motion.div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{
                width: `${(monsterHP / maxHp) * 300}px`,
                transition: "width 0.5s ease-in-out",
              }}
            >
              <Image
                src="/xp-filled.png"
                alt="full xp bar"
                fill
                className="absolute"
              ></Image>
            </motion.div>
          </div>
          <motion.div className="absolute z-30 w-[75px] h-[75px]  left-1/2 -translate-x-[475px] translate-y-[58px]">
            <Image src="/monster-heart.png" alt="monster heart" fill></Image>
          </motion.div>
        </motion.div>
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
          <p className="absolute text-[12px] text-center">
            All-time dmg:{" "}
            <span className="text-[16px]">{count ?? "Loading..."}</span>
          </p>
        </div>
        <motion.div
          className={`flex flex-col absolute items-start space-y-[25px] right-5 bottom-5 w-[400px] h-[400px] bg-white/45 border-3 border-white ${
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
              playSpellHover();
            }}
            onClick={() => {
              setMonsterStance("fire");
              handleMonsterShake();
              if (unravel) {
                if (prevElement === "Lightning!") {
                  castFire(0, 3, prevElement);
                } else if (prevElement === "Freeze!") {
                  castFire(10, 0, prevElement);
                } else {
                  castFire(0, 0, prevElement);
                }
              } else {
                castFire(0, 0, prevElement);
              }

              setPlayerPhase(false);
            }}
          >
            Fire!
            <p className="text-lg text-left mr-[15px] ">
              Burns the monster acrisp, dealing{" "}
              <span style={{ textShadow: "1px 1px 1px rgb(207, 133, 15)" }}>
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
              playSpellHover();
            }}
            onClick={() => {
              setMonsterStance("lightning");
              handleMonsterShake();
              if (unravel) {
                if (prevElement === "Fire!") {
                  castLightning(3, 0, prevElement, 0);
                } else if (prevElement === "Freeze") {
                  castLightning(0, 1, prevElement, 0);
                } else {
                  castLightning(0, 0, prevElement, 0);
                }
              } else {
                castLightning(0, 0, prevElement, 0);
              }
              setPlayerPhase(false);
            }}
          >
            Lightning!
            <p className="text-lg text-left mr-[15px]">
              Zaps with piercing voltage, dealing{" "}
              <span style={{ textShadow: "1px 1px 1px rgb(207, 133, 15)" }}>
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
              playSpellHover();
            }}
            onClick={() => {
              setMonsterStance("freeze");
              handleMonsterShake();
              if (unravel) {
                if (prevElement === "Fire!") {
                  castFreeze(10, 0, prevElement);
                } else if (prevElement === "Lightning!") {
                  castFreeze(0, 1, prevElement);
                } else {
                  castFreeze(0, 0, prevElement);
                }
              } else {
                castFreeze(0, 0, prevElement);
              }
              setPlayerPhase(false);
            }}
          >
            Freeze!
            <p className="text-lg text-left mr-[15px]">
              Unleashes a chilling blast, dealing{" "}
              <span style={{ textShadow: "1px 1px 1px rgb(207, 133, 15)" }}>
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
