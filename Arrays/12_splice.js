// JavaScript Array splice()

// The splice() method modifies an array (adds, removes or replaces elements).

// Example
let prime_numbers = [2, 3, 5, 7, 9, 11];

// replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers);

// Output: [ 9 ]
//         [ 2, 3, 5, 7, 13, 11 ]

/*
======= splice() Parameters
- start - The index from where the array is changed.
- deleteCount (optional) - The number of items to remove from start.
- item1, ..., itemN (optional) - The elements to add to the start 
index. If not specified, splice() will only remove elements from 
the array.

======= splice() Return Value
- Returns an array containing the deleted elements.

*/

// Example 1: Using splice() method
let languages = ["JavaScript", "Python", "Java", "Lua"];
// replacing "Java" & "Lua" with "C" & "C++"
let removed = languages.splice(2, 2, "C", "C++");
console.log(removed); // [ 'Java', 'Lua' ]
console.log(languages); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// adding elements without deleting existing elements
let removed1 = languages.splice(1, 0, "Java", "Lua");
console.log(removed1); // []
console.log(languages); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]

// removing 3 elements
let removed2 = languages.splice(2, 3);
console.log(removed2); // [ 'Lua', 'Python', 'C' ]
console.log(languages); // [ 'JavaScript', 'Java', 'C++' ]


// Example 2: Using splice() for different deleteCount values

/*
- If start > array.length, splice() does not delete anything and starts appending 
arguments to the end of the array.
- If start < 0, the index is counted from backward (array.length + start). For 
example, -1 is the last element.
- If array.length + start < 0, it will begin from index 0.

*/

let languages1 = ["JavaScript", "Python", "Java", "Lua"];

// does not removes, only appends to the end
let removed4 = languages1.splice(5, 2, "C++");
console.log(removed4); // []
console.log(languages1); // ["JavaScript", "Python", "Java", "Lua", "C++"]

// remove last element and add 3 more elements
let removed5 = languages1.splice(-1, 1, "Swift", "Scala", "Go");
console.log(removed5); // [ "C++" ]
console.log(languages1); // ["JavaScript", "Python", "Java", "Lua", "Swift", "Scala", "Go"]


// Example 3: Using splice() for different start values

/*
- If deleteCount is omitted or is greater than the number of elements 
left in the array, it deletes all elements from start to end of the 
array.
- If deleteCount is 0 or negative, no elements are removed. But, at least 
one new element should be specified.

*/

let languages3 = ["JavaScript", "Python", "Java", "Lua"];

// removes everything from start
let removed7 = languages3.splice(1);
console.log(removed7); // [ "Python", "Java", "Lua" ]
console.log(languages3); // [ "JavaScript" ]

// remove none & add 3 more element
let removed8 = languages3.splice(1, -2, "Swift", "Scala", "Go");
console.log(removed8); // [ ]
console.log(languages3); // [ "JavaScript", "Swift", "Scala", "Go" ]