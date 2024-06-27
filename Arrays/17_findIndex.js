// JavaScript Array findIndex()

// The findIndex() method returns the index of the first array element that 
// satisfies the provided test function or else returns -1.

// Example
// function that returns odd number
function isOdd(element) {
  return element % 2 !== 0;
}

// defining an array of integers
let numbers = [2, 8, 1, 3, 4];
// returns the index of the first odd number in the array
let firstOdd = numbers.findIndex(isOdd);
console.log(firstOdd); // Output: 2

/*
====== findIndex() Parameters
- The findIndex() method can take two parameters:
1. callback - Function to execute on each element of the array. 
It takes in:
  - element - The current element of array.
2. thisArg (optional) - Object to use as this inside callback.

===== findIndex() Return Value
- Returns the index of the first element in the array that 
satisfies the given function.
- Returns -1 if none of the elements satisfy the function.

*/


// Example 3: findIndex() with Object Elements
// defining an object 
const team = [
  { name: "Bill", age: 10 },
  { name: "Linus", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];

function isAdult(person) {
  return person.age >= 18
}

console.log(team.findIndex(isAdult)); // 2
