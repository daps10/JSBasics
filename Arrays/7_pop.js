// JavaScript Array pop()

// The pop() method removes the last element from an array and returns that element.

// Example
let cities = ["Madrid", "New York", "Kathmandu", "Paris"];

// remove the last element
let removedCity = cities.pop();

console.log(cities)         // ["Madrid", "New York", "Kathmandu"]
console.log(removedCity);   // Paris

/*
==== pop() Parameters
- The pop() method does not have any parameters.

==== pop() Return Value
- Removes the last element from array and returns that value.
- Returns undefined if the array is empty.

*/


// Example: Using pop() method
var languages = ["JavaScript", "Python", "Java", "C++", "Lua"];
var popped = languages.pop();

console.log(languages); // [ 'JavaScript', 'Python', 'Java', 'C++' ]
console.log(popped); // Lua

// pop returns any type of object
var numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [-5, -4, -3],
];
console.log(numbers.pop()); // [ -5, -4, -3 ]
console.log(numbers); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]