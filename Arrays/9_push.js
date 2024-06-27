// JavaScript Array push()

// The push() method adds zero or more elements to the end of the array.

// Example
let city = ["New York", "Madrid", "Kathmandu"];

// add "London" to the array
city.push("London");

console.log(city); // Output: [ 'New York', 'Madrid', 'Kathmandu', 'London' ]

/*
==== push() Parameters
- The push() method takes in an arbitrary number of elements to 
add to the array.

==== push() Return Value
- Returns the new (after appending the arguments) length of the array 
upon which the method was called.

- This method changes the original array and its length.

*/

// Example: Using push() method
var languages = ["JavaScript", "Python", "Java", "Lua"];

var count = languages.push("C++");
console.log(languages); // [ 'JavaScript', 'Python', 'Java', 'Lua', 'C++' ]
console.log(count); // 5

var priceList = [12, 21, 35];

var count1 = priceList.push(44, 10, 1.6);
console.log(priceList); // [ 12, 21, 35, 44, 10, 1.6 ]
console.log(count1); // 6