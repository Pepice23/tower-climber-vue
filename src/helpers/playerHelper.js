export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const heroes = [
  { picturePath: "/heroes/hero1.jpeg", name: "Hero 1" },
  { picturePath: "/heroes/hero2.jpeg", name: "Hero 2" },
  { picturePath: "/heroes/hero3.jpeg", name: "Hero 3" },
  { picturePath: "/heroes/hero4.jpeg", name: "Hero 4" },
  { picturePath: "/heroes/hero5.jpeg", name: "Hero 5" },
  { picturePath: "/heroes/hero6.jpeg", name: "Hero 6" },
  { picturePath: "/heroes/hero7.jpeg", name: "Hero 7" },
];
