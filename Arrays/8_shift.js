// JavaScript Array shift()

// The shift() method removes the first element from an array and 
// returns that element.

// Example
let languages = ["English", "Java", "Python", "JavaScript"];

// removes the first element of the array
let first = languages.shift();
console.log(first); // English
console.log(languages); // [ 'Java', 'Python', 'JavaScript' ]

/*
==== shift() Parameters
- The shift() method does not accept any arguments.

==== shift() Return Value
- Removes the first element from array and returns that value.
- Returns undefined if the array is empty.

- After removing the element at the 0th index, it shifts other values to consecutive indexes down.
- This method changes the original array and its length.

*/

// Example: Using shift() method
var numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [-5, -4, -3],
];
console.log(numbers.shift()); // [ 1, 2, 3 ]
console.log(numbers); // [ [ 4, 5, 6 ], [ -5, -4, -3 ] ]
R