// JavaScript Array unshift()

// The unshift() method adds one or more elements to the beginning of an 
// array and returns the new length of the array.

// Example
let languages = ["Java", "Python", "C"];

// add "JavaScript" at the beginning of the array
languages.unshift("JavaScript");
console.log(languages); // Output: [ 'JavaScript', 'Java', 'Python', 'C' ]

/*
===== unshift() Parameters
- The unshift() method takes in an arbitrary number of elements 
to add to the array.

===== unshift() Return Value
- Returns the new (after adding arguments to the beginning of array) 
length of the array upon which the method was called.

- This method changes the original array and its length.

*/


// Example: Using unshift() method
var priceList = [12, 21, 35];

var count1 = priceList.unshift(44, 10, 1.6);
console.log(priceList); // [ 44, 10, 1.6, 12, 21, 35 ]
console.log(count1); // 6

