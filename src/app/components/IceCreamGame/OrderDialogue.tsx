type props = {
  type: string;
  scoopCount: number;
  flavors: string[];
  topping: string;
  popsicleFlavor: string;
};

export default function OrderDialogue({
  type,
  scoopCount,
  flavors,
  topping,
  popsicleFlavor,
}: props) {
  //dialogue openers
  const openings = [
    "Hi there!",
    "Gosh, it is so hot today!",
    "What an interesting establishment you have here.",
    "I love ice cream!",
    "Good morning!",
    "Some ice cream would hit the spot right now.",
    "! ! ! ! !",
    "I'M STARVING.",
    "I'm so hungry!",
    "Hope you're doing well today :)",
    "I'm craving something sweet!",
    "Howdy partner.",
    "I spent this entire morning swimming down that river.",
  ];

  //order details
  //popsicle dialogues
  const popsicleOrders = [
    `Could I have a fresh ${popsicleFlavor} popsicle? I am FAMISHED.`,
    `Nothing beats a cold ${popsicleFlavor} popsicle on a hot day. I need one pronto!`,
    `That ${popsicleFlavor} popsicle flavor sounds enticing, something that could uplift my spirits, something that could fill this void... One of those please.`,
    `Is this the place with the world-famous ${popsicleFlavor} popsicles? Give me one now!!!!!!!!!!`,
    `A ${popsicleFlavor} popsicle would make today even better. Get on it! `,
    `May I please have your ${popsicleFlavor} flavored popsicle? Sounds interesting.`,
  ];

  //cone/cup dialogues
  const oneScoop = [
    `I'd love a ${type} with just one scoop of ${flavors[0]} ice cream! So excited :)`,
    `I've heard too much about the ${flavors[0]} ice cream here. Give me a ${type} with one scoop of it, now! `,
    `I loveeeeeeeee ${flavors[0]}. Just a ${type} with one scoop of it pleaseeeeee!`,
  ];

  const twoScoop = [
    `I'm hungry for 2 scoops of ${flavors[0]} and ${flavors[1]}. Put it in a ${type} please.`,
    `What's a better combo than ${flavors[0]} and ${flavors[1]}? A ${type} with both of them now!`,
    `I had a dream last night that I ordered a ${type} with ${flavors[0]} and ${flavors[1]} ice cream from here, so I just had to recreate it.`,
  ];

  const threeScoop = [
    `Alright. ${flavors[0]}, ${flavors[1]}, and what's a good 3rd scoop??? ${flavors[2]}! And in a ${type} please.`,
    `Triple scoops = triple happiness! Give me ${flavors[0]}, ${flavors[1]}, and ${flavors[2]} all in a ${type}!`,
    `It's time to seize the day! A ${type} with ${flavors[0]}, ${flavors[1]}, and ${flavors[2]} please!`,
  ];

  //topping dialogue
  const toppingOrders = [
    `Oh, and I can have ${topping} on top? You're the best!`,
    `And ${topping} with that would be amazinggg. Thank you!`,
    `Also, I'd love you even more if you put ${topping} on top. Thanks!`,
    `For toppings, I'd just like ${topping} on top. My favorite!`,
    `Oh and the best part is the toppings! Give me ${topping} on top boss!`,
    `But wait, this ice cream can only be completed with ${topping}. If you will.`,
    `I've also had this life long dream of consuming ${topping}, so please add that. `,
    `Right, and lay ${topping} beautifully on top of this masterpiece. I'll be waiting.`,
    `Make sure you add ${topping} to top it off! Thank you!`,
    `The only thing that could round this ice cream out is ${topping} on top. Thanks!`,
  ];

  function randomFromArray<T>(arr: T[]): T {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  //concatanate together final dialogue based on order
  let completedDialogue = "";
  completedDialogue += randomFromArray(openings) + " ";
  if (type === "popsicle") {
    completedDialogue += randomFromArray(popsicleOrders);
  } else {
    if (scoopCount === 1) {
      completedDialogue += randomFromArray(oneScoop) + " ";
    } else if (scoopCount === 2) {
      completedDialogue += randomFromArray(twoScoop) + " ";
    } else {
      completedDialogue += randomFromArray(threeScoop) + " ";
    }

    if (topping !== "none") {
      completedDialogue += randomFromArray(toppingOrders);
    }
  }
  return <div> {completedDialogue} </div>;
}
