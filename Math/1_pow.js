// JavaScript Math.pow()

// The pow() method computes the power of a number by raising the second argument 
// to the power of the first argument.

// Example
let power = Math.pow(5, 2);
console.log(power);  // Output:  25

/*
========= pow() Parameters
- The pow() method takes two parameters:
  - number - the base value that is raised to a certain power
  - power - the exponent value that raises number

========= pow() Return Value
- The pow() method returns:
  - numberpower, number raised to a certain power
  - 1 if value of power is 0
  - 0 if value of number is 0

*/


// Example 1: JavaScript Math.pow() with Integer Parameters
// pow() with positive arguments
let power3 = Math.pow(5, 3);
console.log(power3);  // 125

// pow() with negative arguments
let power4 = Math.pow(-4, -2);
console.log(power4); // 80.44885596939699


// Example 2: Math.pow() with Zero Arguments
let power5 = Math.pow(4, 0);
console.log(power5); // 1

// zero raised to a positive power
let power6 = Math.pow(0, 5);
console.log(power6); // 0

// zero raised to negative power
let power7 = Math.pow(0, -3);
console.log(power7); // Infinity


// Example 4: Math.pow() with String Arguments
// pow() numeric string
let power8 = Math.pow("6", "2");
console.log(power8); // Output: 36

// pow() with non-numeric string
let power9 = Math.pow("Harry", "Potter");
console.log(power9); // Output: NaN 

/*
- Math.pow("6", "2") - converts the numeric string to numbers and computes 
the power
- Math.pow("Harry", "Potter") - cannot compute the power of a non-numeric 
string and returns NaN

*/