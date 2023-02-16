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
  const perSecDamage = clickDamage * 2;
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

export function getRandomRarity() {
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
  return Math.floor(Math.pow(3, level) * quality);
}

function diceRoll() {
  return getRandomNumber(1, 100);
}

function getRandomPicture(basePath, availableImages) {
  const randomImage = getRandomNumber(1, availableImages);
  return `${basePath}${randomImage}.jpeg`;
}
