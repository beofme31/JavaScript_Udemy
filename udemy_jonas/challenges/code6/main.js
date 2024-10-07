'use strict';
// const bill = 275;
// let tip;

// function calcTip(tip) {
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15
//     console.log(`청구서는 ${bill}, 팁은 ${tip}, 총 금액은 ${bill + tip}입니다.`);
//   } else {
//     tip = bill * 0.2
//     console.log(`청구서는 ${bill}, 팁은 ${tip}, 총 금액은 ${bill + tip}입니다.`)
//   }
// }

// calcTip(125)
// calcTip(555)
// calcTip(44)
// let bills = []
// let tips = []
// let totals = []

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals)