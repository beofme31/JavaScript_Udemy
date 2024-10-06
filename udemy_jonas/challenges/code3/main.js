'use strict';

const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 123) / 3;
console.log(averageDolphins);
console.log(averageKoalas);

if (averageDolphins > averageKoalas) {
  console.log('Dolphins wins!');
} else {
  console.log('Koalas wins!');
}

const dolphinsWin = averageDolphins > averageKoalas;
const koalasWin = averageDolphins < averageKoalas;
const equal = averageDolphins === averageKoalas
if (dolphinsWin && averageDolphins >= 100) {
  console.log('Dolphins wins!');
} else if (koalasWin && averageKoalas >= 100) {
  console.log('Koalas wins!');
} else if (equal && averageDolphins >= 100 && averageKoalas >= 100) {
  console.log('Both wins!');
} else {
  console.log('Winners not exists!');
}