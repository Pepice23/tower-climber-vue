import { numberFormatter } from "./playerHelper.js";

let totalMonster = 1;
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 15; j++) {
    totalMonster++;
    console.log(
      `Level: ${i} - Monster count: ${j} - HP: ${numberFormatter.format(
        Math.pow(1.02, totalMonster) * 100
      )}`
    );
  }
}

// console.log(numberFormatter.format(Math.pow(1.02, 1500)));
// console.log(numberFormatter.format(Math.pow(1.12, 150)));
// console.log(numberFormatter.format(Math.pow(1.35, 2) * 5 * 18));

// console.log(`${i} - ${numberFormatter.format(Math.pow(1.35, i) * 3)}`);
// console.log(`${i} - ${numberFormatter.format(Math.pow(1.02, i) * 100)}`);
