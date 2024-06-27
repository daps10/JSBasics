// JavaScript Array flatMap()

// The flatMap() method first maps each element of an array using a mapping function, 
// then flattens it into a new array.

// Example
let numbers = [1, 2, 3, 4, 5];
const resultingArray = numbers.flatMap((x) => [x ** 2]);
console.log(resultingArray); // [ 1, 4, 9, 16, 25 ]

/*
====== flatMap() Return Value
- Returns a new array after mapping every element using callback

*/


// Example 2: Using flat() and map() Instead of flatMap()
let numbers1 = [1, 2, 3, 4, 5];
let afterMapping = numbers.map((element) => element + 2);
let afterFlattening = afterMapping.flat();
console.log(afterFlattening); // [ 3, 4, 5, 6, 7 ]

let after_flatMap = numbers.flatMap((element) => element + 2);
console.log(after_flatMap); // [ 3, 4, 5, 6, 7 ]
