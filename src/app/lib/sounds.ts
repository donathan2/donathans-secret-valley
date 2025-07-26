export const playSFX = (src: string, volume: number = 1) => {
  const audio = new Audio(src);
  audio.volume = volume;
  audio.play().catch((err) => {
    console.warn(`SFX autoplay failed for ${src}:`, err);
  });
  return audio;
};

export const playFire = () => playSFX("/fire-sfx.wav", 0.8);
export const playFireCrit = () => playSFX("/fire-crit-sfx.wav", 0.7);
export const playLightning = () => playSFX("/lightning-sfx.wav", 0.8);
export const playLightningCrit = () => playSFX("/lightning-crit-sfx.wav", 0.6);
export const playFreeze = () => playSFX("/freeze-sfx.wav", 0.6);
export const playFreezeCrit = () => playSFX("/freeze-crit-sfx.wav", 0.6);
export const playAttacked = () => playSFX("/monster-attack.wav", 0.8);
export const playAttackedOneHP = () => playSFX("/monster-1hp.wav", 0.5);
export const playAttackedFatal = () => playSFX("/monster-fatal.wav", 0.4);
export const playSpellHover = () => playSFX("/fire-hover.wav", 0.8);


export const playItemHover = () => playSFX("/lightning-hover.wav", 0.8);
export const playHealPot = () => playSFX("/heal-use.wav", 0.8);
export const playCorrode = () => playSFX("/corrode-sfx.wav", 0.8);
export const playCorrupt = () => playSFX("/corrupt-sfx.wav", 0.8);
export const playDominionAtk = () => playSFX("/dominion-atk.wav", 0.9);
export const playChaos = () => playSFX("/chaos-sfx.wav", 0.8);
export const playInvOpen = () => playSFX("/freeze-hover.wav", 0.7);
export const playMementoUse = () => playSFX("/memento-use.wav", 0.7);
export const playUnravelUse = () => playSFX("/unravel-use.wav", 0.7);
export const playShieldProc = () => playSFX("/shield-activate.wav", 1);
export const playShieldUse = () => playSFX("/shield-use.wav", 0.9);
export const playDominionUse = () => playSFX("/dominion-use.wav", 0.7);
export const playMementoAtk = () => playSFX("/memento-atk.wav", 1);


// ice cream sfx
export const playScoop1 = () => playSFX("/voice3.mp3", 1);
export const playScoop2 = () => playSFX("/scoop.mp3", 1);
export const playScoop3 = () => playSFX("/scoop3.mp3", 1);
export const playTalk = () => playSFX("/talk.mp3", 1)
export const playCherry = () => playSFX("/cherry-equip.wav", 1);
export const playCream = () => playSFX("/cream-equip.wav", 0.8);
export const playCone = () => playSFX("/cone-equip.wav", 0.7);
export const playChocCone = () => playSFX("/cone-chocolate-equip.wav", 0.7);
export const playCup = () => playSFX("/cup-equip.wav", 0.5);
export const playSprinkles = () => playSFX("/sprinkles-equip.wav", 0.7);
export const playChips = () => playSFX("/chips-equip.wav", 0.7);
export const playSauce = () => playSFX("/sauce-equip.mp3", 0.7);
export const playLights = () => playSFX("/lights.wav", 0.3);
export const playPerfect = () => playSFX("/perfect.mp3", 0.7);
export const playGood = () => playSFX("/good.mp3", 0.7);
export const playMid = () => playSFX("/mid.mp3", 0.7);
export const playBad = () => playSFX("/bad.mp3", 0.7);
export const playPickUp = () => playSFX("/pickup.wav", 1);
export const playFridge = () => playSFX("/fridge-2.wav", 0.3);
export const playFridgeClose = () => playSFX("/fridge1.wav", 0.6);
export const playPopsicle = () => playSFX("/popsicle-equip.wav", 0.4);

