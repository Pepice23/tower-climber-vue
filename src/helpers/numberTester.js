import { numberFormatter } from "./playerHelper.js";

let totalMonster = 1;
for (let i = 1; i <= 100; i++) {
  console.log();
  for (let j = 1; j <= 15; j++) {
    totalMonster++;
    console.log(`${Math.floor(Math.pow(1.02, totalMonster) * 100)}`);
  }
}

// console.log(numberFormatter.format(Math.pow(1.02, 1500)));
// console.log(numberFormatter.format(Math.pow(1.12, 150)));
// console.log(numberFormatter.format(Math.pow(1.35, 2) * 5 * 18));
//
// console.log(`${i} - ${numberFormatter.format(Math.pow(1.35, i) * 3)}`);
// console.log(`${i} - ${numberFormatter.format(Math.pow(1.02, i) * 100)}`);

// WEAPON DAMAGE

// for (let i = 1; i <= 10; i++) {
//Level 100 - 92 T
// console.log(`${i} : ${numberFormatter.format(Math.pow(1.34, i) * 18)}`);
// Level 80 - 2.5 T
// console.log(`${i} : ${numberFormatter.format(Math.pow(1.38, i) * 16)}`);
// Level 70 - 144B
// console.log(`${i} : ${numberFormatter.format(Math.pow(1.39, i) * 14)}`);
// Level 60 - 7B
// console.log(`${i} : ${numberFormatter.format(Math.pow(1.4, i) * 12)}`);
// Level 50 - 4,2B
// console.log(`${i} : ${numberFormatter.format(Math.pow(1.42, i) * 10)}`);
// Level 40 - 214M
// console.log(`${i} : ${numberFormatter.format(Math.pow(1.44, i) * 8)}`);
// Level 30 - 11M
// console.log(`${i} : ${numberFormatter.format(Math.pow(1.49, i) * 6)}`);
// Level 20 - 562K
// console.log(`${i} : ${numberFormatter.format(Math.pow(1.61, i) * 4)}`);
// Level 10 - 29K
// console.log(`${i} : ${numberFormatter.format(Math.pow(2.07, i) * 2)}`);
// Level 10 - 1.3K
// console.log(`${i} : ${numberFormatter.format(Math.pow(2.1, i))}`);
// }
// let armor = 18;
// for (let i = 91; i <= 100; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(
//       `Level ${i} - ${numberFormatter.format(Math.pow(1.31, i) * j * armor)}`
//     );
//   }
// }
