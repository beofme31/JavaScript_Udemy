'use strict';

let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

let markBMI = massMark / heightMark ** 2;
let johnBMI = massJohn / heightJohn ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
