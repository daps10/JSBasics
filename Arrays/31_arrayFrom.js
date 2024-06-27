// Javascript Array.from()

// The from() method creates a new array from any array-like or iterable 
// object.

// Example
// creating a new array from string
let newArray = Array.from("abc");
console.log(newArray);
// Output:
// [ 'a', 'b', 'c' ]

/*
======== from() Parameters
- The from() method can take three parameters:
  - arraylike - Array-like or iterable object to convert to an array.
  - mapFunc (optional) - Map function that is called on each element.
  - thisArg (optional) - Value to use as this when executing mapFunc

========from() Return Value
- Returns a new Array instance.

*/


// Example 2: from() Method with Mapping Function
function createArray(arraylike, mapFunc) {
  return Array.from(arraylike, mapFunc);
}

// using arrow function for mapFunc
let result = createArray([2, 4, 6], (element) => element + 2);

console.log(result); //  [ 4, 6, 8 ]