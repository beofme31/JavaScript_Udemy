// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = 'Matilda';

// 변수는 '값을 저장할 수 있는 박스', 현실에서 상자 안에 내용물을 담고 라벨을 붙여서 라벨을 보고 찾는 원리와 같이 작동한다.
// 변수를 통해 여러번 선언이 가능하다.
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

//  let 3years = 3; // Invalid or unexpected token 숫자로 시작할 수 없다.

// let jonas& matilda = 'JM'; // Unexpected token '&'
// let new = 27; // Unexpected token 'new' 예약어도 사용할 수 없다.
// let $function; // function은 예약어지만 앞에 $를 붙이면 사용 가능
// let person = 'Jonas' // 변수 명명할 때는 소문자로 시작하는 명사로 한다.
// let PI = 3.1415; // 절대 바뀌지 않을 데이터는 상수로 할 때 대문자로 해준다.

// let myFirstJob = 'Coder';
// let myCurrentJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob)

//   The 7 primitive data types
//   1. number: Used for demicals and integers
//   2. String: Used for text
//   3. Boolean: Used for taking decisions (ex. true/false)
//   4. Undefined: Value taken by a variable that is not yet defined('empty value')
//   5. Null: Also means 'empty value'
//   6. Symbol(ES2015): Value that is unique and cannot be changed [Not useful for now]
//   7. Bigint(ES2020): Larger integers than the Number type can hold

//  JavaScript has dynamic typing: We don't have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(jonasNew);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗')
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// type conversion(타입 변환)
// const inputYear = '1991'
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof Nan);

// console.log(String(23), 23);

// // type coercion(타입 강제)
// console.log('I am ' + 23 + 'years old.');
// // console.log('I am ' + '23' + 'years old.');
// // console.log('I am ' + String(23) + 'years old.');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null, Nan

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('Jonas')); // true
// console.log(Boolean({})); // true
// console.log(Boolean('')); // false

// const money = 0
// if (money) {
//   console.log("Don't spend it all :)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) { // 23 == 23
//   console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
//   console.log('7 is also a cool number');
// } else if (favorite === 9) {
//   console.log('9 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7');
// }

// if (favorite !== 23) console.log('Why not 23?');

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
