'use strict';

const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;

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