// JavaScript Math min()

// The min() method finds the minimum value among the specified values and returns it.

// Example
let numbers = Math.min(12, 4, 5, 9, 0, -3);
console.log(numbers);  // Output:  -3

/*
=========== min() Parameters
- The min() method takes in a random number of parameters:
  - number1/number2/… - values among which the minimum number is to be computed

=========== min() Return Value
- The min() method returns:
  - the smallest value among the given numbers
  - NaN (Not a Number) for non-numeric arguments

*/

// Example 1: JavaScript Math.min()
// min() with negative numbers
let numbers1 = Math.min(-1, -11, -132);
console.log(numbers1);  // -132

// min() with positive numbers
let numbers2 = Math.min(0.456, 135, 500);
console.log(numbers2); // 0.456


// Example 2: Math.min() with Arrays
let numbers3 = [4, 1, 2, 55, 9];

// min() with a spread operator
let minNum = Math.min(...numbers3);
console.log(minNum); // Output: 1


// Example 3: Math.min() with Non-Numeric Argument
// min() with string argument
let numbers4 = Math.min("Dwayne", 2, 5, 79);
console.log(numbers4);  // NaN

// min() with characters arguments
let minNum1 = Math.min('A', 'B', 'C');
console.log(minNum1); // NaN
