import { getRandomNumber } from "./playerHelper.js";

const rarity = {
  POOR: { rarityNumber: 1, rarityName: "Rusty" },
  UNCOMMON: { rarityNumber: 2, rarityName: "Regular" },
  RARE: { rarityNumber: 3, rarityName: "Fine" },
  EPIC: { rarityNumber: 4, rarityName: "Master" },
  LEGENDARY: { rarityNumber: 5, rarityName: "Godly" },
};

const itemSlots = {
  WEAPON: {
    slotNumber: 1,
    slotName: "Weapon",
    imgPath: "/assets/loot/weapons/weapon",
    availableImages: 10,
  },
};

export function generateRandomItem(level, id) {
  const item = {};
  const rarity = getRandomRarity();
  const slot = itemSlots.WEAPON;
  const clickDamage = generateRandomStat(rarity.rarityNumber, level);
  const perSecDamage = generateRandomStat(rarity.rarityNumber, level);
  item.equipmentName = `${rarity.rarityName} ${slot.slotName}`;
  item.equipmentLevel = level;
  item.equipmentPerClickDamage = clickDamage;
  item.equipmentPerSecDamage = perSecDamage;
  item.equipmentRarity = rarity.rarityNumber;
  item.equipmentSlot = 1;
  item.price = rarity.rarityNumber * 5 * level;
  item.id = id;
  item.picturePath = getRandomPicture(slot.imgPath, slot.availableImages);
  item.dmgPercent = 0;
  item.defPercent = 0;

  return item;
}

function getRandomRarity() {
  const roll = diceRoll();
  if (roll <= 40) {
    return rarity.POOR;
  }
  if (roll > 40 && roll <= 75) {
    return rarity.UNCOMMON;
  }
  if (roll > 75 && roll <= 85) {
    return rarity.RARE;
  }
  if (roll > 85 && roll <= 97) {
    return rarity.EPIC;
  }
  if (roll > 97 && roll <= 100) {
    return rarity.LEGENDARY;
  }
}

function generateRandomStat(quality, level) {
  const base = 1500;
  if (level >= 1 && level <= 10) {
    let percent = getRandomNumber(1, 10) + quality;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 11 && level <= 20) {
    let percent = getRandomNumber(11, 20) + quality;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 21 && level <= 30) {
    let percent = getRandomNumber(21, 30) + quality;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 31 && level <= 40) {
    let percent = getRandomNumber(31, 40) + quality;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 41 && level <= 50) {
    let percent = getRandomNumber(41, 50) + quality;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 51 && level <= 60) {
    let percent = getRandomNumber(51, 60) + quality;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 61 && level <= 70) {
    let percent = getRandomNumber(61, 70) + quality;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 71 && level <= 80) {
    let percent = getRandomNumber(71, 80) + quality;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 81 && level <= 90) {
    let percent = getRandomNumber(81, 90) + quality;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 91) {
    let percent = getRandomNumber(91, 100) + quality;
    return Math.floor((base * percent) / 100);
  }
}

function diceRoll() {
  return getRandomNumber(1, 100);
}

function getRandomPicture(basePath, availableImages) {
  const randomImage = getRandomNumber(1, availableImages);
  return `${basePath}${randomImage}.jpeg`;
}

for (let i = 0; i < 10; i++) {
  console.log(generateRandomItem(1));
}
