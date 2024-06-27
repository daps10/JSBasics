// JavaScript Math max()

// The max() method finds the maximum value among the specified values and returns it.

// Example
let numbers = Math.max(12, 4, 5, 9, 0, -3);
console.log(numbers);  // Output:  12

/*
========= max() Parameters
- The max() method takes in a random number of parameters:
  - number1/number2/… - values among which the maximum number is to be computed

========= max() Return Value
- The max() method returns:
  - the largest value among the given numbers
  - NaN (Not a Number) for non-numeric arguments

*/

// Example 1: JavaScript Math.max()
// max() with negative numbers
let numbers1 = Math.max(-1, -11, -132);
console.log(numbers1);  // -1

// max() with positive numbers
let numbers2 = Math.max(0.456, 135, 500);
console.log(numbers2); // 500


// Example 2: Math.max() with Arrays
let numbers3 = [4, 1, 2, 55, 9];

// max() with a spread operator
let maxNum = Math.max(...numbers3);
console.log(maxNum); // Output: 55

// Example 3: Math.max() with Non-Numeric Argument
// max() with the string argument
let numbers4 = Math.max("Dwayne", 2, 5, 79);
console.log(numbers4);  // NaN

// max() with character arguments
let maxNum1 = Math.max('A', 'B', 'C');
console.log(maxNum1); // NaN

/*
- In the above example, we have used the max() method with the string and character arguments. 
For both arguments, we get NaN as output.

*/