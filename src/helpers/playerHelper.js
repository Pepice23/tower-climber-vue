export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const heroes = [
  { picturePath: "src/assets/heroes/hero1.jpeg", name: "Hero 1" },
  { picturePath: "src/assets/heroes/hero2.jpeg", name: "Hero 2" },
  { picturePath: "src/assets/heroes/hero3.jpeg", name: "Hero 3" },
  { picturePath: "src/assets/heroes/hero4.jpeg", name: "Hero 4" },
  { picturePath: "src/assets/heroes/hero5.jpeg", name: "Hero 5" },
  { picturePath: "src/assets/heroes/hero6.jpeg", name: "Hero 6" },
  { picturePath: "src/assets/heroes/hero7.jpeg", name: "Hero 7" },
];
