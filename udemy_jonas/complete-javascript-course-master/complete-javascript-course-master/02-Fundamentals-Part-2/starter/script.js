// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }

// Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
//   // return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// // function declaration
// // function that can be used before it's declared
// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// // function expression
// // essentially a function value stored in a variable
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }

// // arrow funtion
// // great for a quick one-line functions. Has no this keyword (more later...)
// const calcAge3 = birthYear => 2037 - birthYear;

// const friend1 = 'Michael'
// const friend2 = 'Steven'
// const friend3 = 'Peter'

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends)

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years)

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length)
// console.log(friends[friends.length - 1])

// friends[2] = 'Jay'
// console.log(friends)
// // friends = ['Bob', 'Alice']

// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
// console.log(jonas)
// console.log(jonas.length)


// // Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear
// }
// const years = [1990, 1967, 2002, 2010, 2018]

// // console.log(calcAge(years)) // Nan
// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])
// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages)

const friends = ['Michael', 'Steven', 'Peter']

// Add elements
const newLength = friends.push('Jay') // push 함수는 배열의 값을 반환
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)

// Remove elements
friends.pop() // Last
const popped = friends.pop() // pop 함수는 제거된 요소를 반환
console.log(popped) // Peter
console.log(friends)

friends.shift() // First
console.log(friends)

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob')) // 없으면 -1

friends.push(23)
console.log(friends.includes('Steven')) // true
console.log(friends.includes('Bob')) // false
console.log(friends.includes('23')) // false, 형식적인 강압을 안 함
console.log(friends.includes(23)) // true, 숫자면 숫자로 물어보기

if (friends.includes('Steven')) {
  console.log('You have a friend called Peter')
}