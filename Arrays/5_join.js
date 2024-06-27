// Javascript Array join()

// The join() method returns a new string by concatenating all of the elements 
// in an array, separated by a specified separator.

// Example
let message = ["JavaScript", "is", "fun."];

// join all elements of array using space
let joinedMessage = message.join(" ");
console.log(joinedMessage);

// Output: JavaScript is fun.

/*
===== join() Parameters
- The join() method takes in:
- separator (optional) - A string to separate each pair of adjacent 
elements of the array. By default, it is comma ,.

===== join() Return Value
- Returns a String with all the array elements joined by separator.

- The join() method does not change the original array.
- Elements like undefined, null, or empty array have an empty 
string representation.

*/


// Example: Using join() method
var info= ["Terence", 28, "Kathmandu"];
var infoStr= info.join(' | ');

// join() does not change the original array
console.log(info); // [ 'Terence', 28, 'Kathmandu' ]

// join() returns the string by joining with separator
console.log(infoStr); // Terence | 28 | Kathmandu

// empty argument = no separator
var collection = [3, ".", 1, 4, 1, 5, 9, 2];
console.log(collection.join("")); // 3.141592

var random = [44, "abc", undefined];
console.log(random.join(" and ")); // 44 and abc and