"use client";
import { useGame } from "./StoreContext";
import { playPerfect, playGood, playMid, playBad } from "@/app/lib/sounds";

export default function useAssessment() {
  const { currentOrder, setDialogue, base, scoopOne, scoopTwo, scoopThree, toppings } = useGame();

  const perfectOrder = 
  ["This is perfect, truly. Thanks for your hard work! I'll be coming back for sure.", 
    "YES! This is exactly what I needed on such a hot day. Thank you so much!!", 
    "I might cry... to have the honor of consuming a dessert as fine as this one. It's all thanks to you cutie.",
  "Only a sculptor's hands could have made a masterpiece like this... Thanks for this.",
"Your passion and hard work shines evidently through this sweet surprise. My day couldn't have been made better."]

const goodOrder = ["Looks pretty nice! Thanks for this sweet treat.",
  "Ooooooh, looks pretty good. I can't wait to devour this one.",
  "Yummy yummy yummy. Will be coming back.",
  "A sweet treat like this could ward away any and all negativity.",
  "WOW. Excited to chow down on this one."
]

const midOrder = ["Hey I can tell you really tried with this one, but maybe you could try harder next time!",
  "This looks like the ice cream I made in my backyard when I was 5! Very nostalgic I guess.",
  "Well this is quite something. I wonder if the birds outside would enjoy this, not that it's bad or anything...",
  "I never knew ice cream scooping was that difficult but thank you for trying I guess.",
  "Is this your first time working here? Keep it up and maybe you'll be able to make good ice cream in a few months!"
]

const badOrder = ["... Did you have an accident in the kitchen?", 
  "Are you trying to send me to a hospital???? I mean what is this garbage??", 
"Did I say something wrong? You could've just told me instead of serving me this trash.", 
"??????????????????????????????", 
"Um. Is this a threat??"]




  function startAssessment() {
    const points = pointAnalysis()
    console.log("Overall points", points)
    console.log(currentOrder)
    if (points === 7) {
      setDialogue(randomFromArray(perfectOrder))
      playPerfect()
    } else if (points === 5 || points === 6 || points === 4) {
      setDialogue(randomFromArray(goodOrder))
      playGood()
    } else if (points === 3 || points === 2 || points === 1) {
      setDialogue(randomFromArray(midOrder))
      playMid()
    } else {
      setDialogue(randomFromArray(badOrder))
      playBad()
    }
  }

  function pointAnalysis() {
    if (!currentOrder) {
      return
    }
    let pointCount = 0;

    // POPSICLE ORDER: IF SUBMITS CORRECT POPSICLE: 7 PTS, IF SUBMITS WRONG POPSICLE: 3 PTS, IF DOESNT SUBMIT POPSICLE, 0 PTS
    if (currentOrder.desired.type === "popsicle") {
      if (currentOrder.desired.popsicleFlavor === "orange") {
        if (base === "orange popsicle") {
          pointCount = 7
        } else if (base === "cherry popsicle" || base === "grape popsicle") {
          pointCount = 3
        } else {
          pointCount = 0
        }
      } else if (currentOrder.desired.popsicleFlavor === "cherry") {
        if (base === "cherry popsicle") {
          pointCount = 7
        } else if (base === "orange popsicle" || base === "grape popsicle") {
          pointCount = 3
        } else {
          pointCount = 0
        }
    } else if (currentOrder.desired.popsicleFlavor === "grape") {
        if (base === "grape popsicle") {
          pointCount = 7
        } else if (base === "orange popsicle" || base === "cherry popsicle") {
          pointCount = 3
        } else {
          pointCount = 0
        }
    }

    // NON-POPSICLE ORDER: IF SUBMITS A POPSICLE WHEN NOT REQUESTED, INSTANT 0
  } else if ((base === "orange popsicle" || base === "cherry popsicle" || base === "grape popsicle")) {
    pointCount = 0
    console.log("submitted popsicle when regular")

    // OTHER NON-POPSICLE ORDERS
  } else {
    // 1 POINT FOR CORRECT BASE, -1 FOR WRONG
    
    if (currentOrder?.desired.type === base) {
      console.log("base point +1")
      pointCount += 1
    }  else {
      console.log("base point -1")
      pointCount -= 1
    }

    // COUNTING SCOOPS
    let scoopCountLocal = 0;
    if (scoopOne!= "none") {
      scoopCountLocal += 1
    } if (scoopTwo != "none") {
      scoopCountLocal += 1
    } if (scoopThree != "none") {
      scoopCountLocal += 1
    }
    
    // 1 POINT FOR CORRECT SCOOP COUNT
    if (currentOrder.desired.scoopCount === scoopCountLocal) {
      console.log("scoop count point +1")
      pointCount += 1
    }

    // 3 POINTS FOR FULLY CORRECT SCOOPS, -1 POINT FOR EVERY SCOOP THAT DOESNT BELONG, -1 POINT FOR EVERY SCOOP MISSING
    const scoopsList = currentOrder.desired.flavor
    let scoopsLocal: string[] = []
    let noScoopsMissing = true
      if (scoopOne !== "none") {
        scoopsLocal = [...scoopsLocal, scoopOne]
      }
      if (scoopTwo !== "none") {
        scoopsLocal = [...scoopsLocal, scoopTwo]
      }
      if (scoopThree !== "none") {
        scoopsLocal = [...scoopsLocal, scoopThree]
      }
    
    let localScoopPoints = 0
    for (let i = 0; i < scoopsList.length; i++) {
      
      if (scoopsLocal.includes(scoopsList[i])) {
        const index = scoopsLocal.indexOf(scoopsList[i])
        scoopsLocal.splice(index, 1)
        localScoopPoints += 1
      } else {
        console.log("scoop flavor missing -1")
        noScoopsMissing = false
        pointCount -= 1
      }
    }
    if (scoopsLocal.length === 0 && noScoopsMissing) {
      console.log("scoops all right! +3")
      pointCount += 3
    } else {
      console.log("extra scoops:", scoopsLocal.length)
      console.log("scoops correct:", localScoopPoints)
    pointCount -= scoopsLocal.length
  pointCount += localScoopPoints}
  

  // 2 POINTS FOR FULLY CORRECT TOPPINGS, -1 POINT FOR EVERY TOPPING THAT DOESNT BELONG, -1 POINT IF TOPPING IS MISSING, +1 IF INCLUDED
  let localToppingPoints = 0;
  let containsTopping = false;
  const toppingReq = currentOrder.desired.topping
  if (toppings.cherry) {
    if (toppingReq === "a cherry") {
      localToppingPoints += 1
      containsTopping = true
    } else localToppingPoints -=1
  } if (toppings.cream) {
    if (toppingReq === "some whipped cream") {
      localToppingPoints += 1
      containsTopping = true
    } else localToppingPoints -=1
  } if (toppings.sprinkles) {
    if (toppingReq === "some rainbow sprinkles") {
      localToppingPoints += 1
      containsTopping = true
    } else localToppingPoints -=1
  } if (toppings.chips) {
    if (toppingReq === "some chocolate chips") {
      localToppingPoints += 1
      containsTopping = true
    } else localToppingPoints -=1
  } if (toppings.sauce) {
    if (toppingReq === "some chocolate sauce") {
      localToppingPoints += 1
      containsTopping = true
    } else localToppingPoints -=1
  }

  if (localToppingPoints === 1) {
    console.log("topping points +2")
    pointCount += 2
  }
  else {if (containsTopping === false) 
    console.log("missing topping points -1")
    {pointCount -=1}
    console.log("topping points -", localToppingPoints)
  pointCount += localToppingPoints}
  }

  return pointCount
  }


  function randomFromArray<T>(arr: T[]): T {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
  

  
  return {startAssessment}

}
