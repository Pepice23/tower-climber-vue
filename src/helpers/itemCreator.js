import { getRandomNumber } from "./playerHelper.js";

const rarity = {
  POOR: { rarityNumber: 1, rarityName: "Rusty" },
  UNCOMMON: { rarityNumber: 2, rarityName: "Regular" },
  RARE: { rarityNumber: 3, rarityName: "Fine" },
  EPIC: { rarityNumber: 4, rarityName: "Master" },
  LEGENDARY: { rarityNumber: 5, rarityName: "Godly" },
};

const itemSlots = {
  HEAD: {
    slotNumber: 1,
    slotName: "Helmet",
    imgPath: "src/assets/loot/helmet/helmet",
    availableImages: 10,
  },
  SHOULDER: {
    slotNumber: 2,
    slotName: "Pauldron",
    imgPath: "src/assets/loot/pauldron/pauldron",
    availableImages: 10,
  },
  CHEST: {
    slotNumber: 3,
    slotName: "Breastplate",
    imgPath: "src/assets/loot/breastplate/breastplate",
    availableImages: 10,
  },
  HANDS: {
    slotNumber: 4,
    slotName: "Gauntlets",
    imgPath: "src/assets/loot/gauntlets/gauntlets",
    availableImages: 10,
  },
  LEGS: {
    slotNumber: 5,
    slotName: "Legplates",
    imgPath: "src/assets/loot/legguards/legguards",
    availableImages: 3,
  },
  FEET: {
    slotNumber: 6,
    slotName: "Sabatons",
    imgPath: "src/assets/loot/shoes/shoes",
    availableImages: 5,
  },
  RING: {
    slotNumber: 7,
    slotName: "Ring",
    imgPath: "src/assets/loot/ring/ring",
    availableImages: 9,
  },
  TRINKET: {
    slotNumber: 8,
    slotName: "Trinket",
    imgPath: "src/assets/loot/trinket/trinket",
    availableImages: 5,
  },
  NECKLACE: {
    slotNumber: 9,
    slotName: "Necklace",
    imgPath: "src/assets/loot/necklace/necklace",
    availableImages: 9,
  },
  WEAPON: {
    slotNumber: 10,
    slotName: "Weapon",
    imgPath: "src/assets/loot/weapons/weapon",
    availableImages: 10,
  },
};

export function generateRandomItem(level, id) {
  const item = {};
  const rarity = getRandomRarity();
  const slot = getRandomItemSlot();
  const atk = generateRandomStat(rarity.rarityNumber, level);
  const def = generateRandomStat(rarity.rarityNumber, level);
  item.equipmentName = `${rarity.rarityName} ${slot.slotName}`;
  item.equipmentLevel = level;
  item.equipmentDamage = atk;
  item.equipmentDefense = def;
  item.equipmentRarity = rarity.rarityNumber;
  item.equipmentSlot = slot.slotNumber;
  item.price = rarity.rarityNumber * 5 * level;
  item.id = id;
  item.picturePath = getRandomPicture(slot.imgPath, slot.availableImages);
  item.dmgPercent = 0;
  item.defPercent = 0;

  return item;
}

function getRandomItemSlot() {
  const roll = diceRoll();

  if (roll <= 10) {
    return itemSlots.HEAD;
  }
  if (roll > 10 && roll <= 20) {
    return itemSlots.SHOULDER;
  }
  if (roll > 20 && roll <= 30) {
    return itemSlots.CHEST;
  }
  if (roll > 30 && roll <= 40) {
    return itemSlots.HANDS;
  }
  if (roll > 40 && roll <= 50) {
    return itemSlots.LEGS;
  }
  if (roll > 50 && roll <= 60) {
    return itemSlots.FEET;
  }
  if (roll > 60 && roll <= 70) {
    return itemSlots.RING;
  }
  if (roll > 70 && roll <= 80) {
    return itemSlots.TRINKET;
  }
  if (roll > 80 && roll <= 90) {
    return itemSlots.NECKLACE;
  }
  if (roll > 90 && roll <= 100) {
    return itemSlots.WEAPON;
  }
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
    let percent = getRandomNumber(1, 10) + quality * 5;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 11 && level <= 20) {
    let percent = getRandomNumber(11, 20) + quality * 3;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 21 && level <= 30) {
    let percent = getRandomNumber(21, 30) + quality * 3;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 31 && level <= 40) {
    let percent = getRandomNumber(31, 40) + quality * 3;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 41 && level <= 50) {
    let percent = getRandomNumber(41, 50) + quality * 3;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 51 && level <= 60) {
    let percent = getRandomNumber(51, 60) + quality * 3;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 61 && level <= 70) {
    let percent = getRandomNumber(61, 70) + quality * 3;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 71 && level <= 80) {
    let percent = getRandomNumber(71, 80) + quality * 3;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 81 && level <= 90) {
    let percent = getRandomNumber(81, 90) + quality * 3;
    return Math.floor((base * percent) / 100);
  }
  if (level >= 91) {
    let percent = getRandomNumber(91, 100) + quality * 3;
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

// for (let i = 0; i < 10; i++) {
//   console.log(generateRandomItem(1));
// }
