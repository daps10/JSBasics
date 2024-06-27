// JavaScript Array find()

// The find() method returns the value of the first array element that satisfies 
// the provided test function.


// Example
let numbers = [1, 3, 4, 9, 8];

// function to check even number
function isEven(element) {
  return element % 2 == 0;
}

// get the first even number
let evenNumber = numbers.find(isEven);
console.log(evenNumber); // Output: 4

/*
====== find() Parameters
- callback - Function to execute on each element of the array. 
It takes in:
  - element - The current element of array.
- thisArg (optional) - Object to use as this inside callback.

===== find() Return Value
- Returns the value of the first element in the array that 
satisfies the given function.
- Returns undefined if none of the elements satisfy the 
function.

*/


// Example 2: find() with Object elements
const team = [
  { name: "Bill", age: 10 },
  { name: "Linus", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];

function isAdult(member) {
  return member.age >= 18;
}

function isSenior(member) {
  return member.age >= 50;
}

console.log(team.find(isAdult)); // { name: 'Alan', age: 20 }
console.log(team.find(isSenior)); // undefined

