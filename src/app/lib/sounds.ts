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
