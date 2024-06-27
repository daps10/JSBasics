// JavaScript Array.every()

// The every() method checks if all the array elements pass the given test function.

// Example
// function that checks whether
// the age is 18 or above
function checkAdult(age) {
  return age >= 18;
}

const ageArray = [34, 23, 20, 26, 12];

//checks if all the array elements
// pass the checkAdult() function
let check = ageArray.every(checkAdult); // false

/*
===== every() Return Value
- true - if all the array elements pass the given test function 
(callback returns a truthy value).
- false - if any array element fails the given test function.

*/

// Example 2: JavaScript every() With Arrow Function
let numbers = [ 1 , 2 , 3 , 4 , 5];
let result= number.every(elem => elem < 6);
console.log(result); // true