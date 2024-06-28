// JavaScript Object.valueOf()

// The Object.valueOf() method returns the primitive value of the specified object.

// Example
// create a new Number object with value of 12
let num = new Number(12);

console.log(num); // Output: [Number: 12]
console.log(num.valueOf()); // Output: 12

/*
========= valueOf() Parameters
- The valueOf() method does not take any parameters.

========= valueOf() Return Value
- The valueOf() method returns the primitive value of the specified object.

*/

// Example 2: Create a Custom valueOf() Method
function customNum(n) {
  this.number = n;
}

// create a custom valueOf() function
customNum.prototype.valueOf = function () {
  return this.number;
};

// create num1 object from customNum() constructor function
var num1 = new customNum(2);

console.log(num1 + 3);  // Output:  5


// Example 3: valueOf() Method With Unary + Operator
// create a number with the value of 5 
const num4 = 5;

// use + operator in front of the string operand
console.log(+"5" + num4); // Output: 10

console.log(+[1] + num4); // Output: 6

console.log(+true + num4);  // Output: 6

console.log(+false + num4);  // Output: 5

console.log(+undefined + num4);  // Output: NaN

console.log(+null + num4);  // Output: 5