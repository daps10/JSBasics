// Javascript Array entries()

// The entries() method returns a new Array Iterator object containing 
// key/value pairs for each array index.

// Example
// defining an array named alphabets
const alphabets = ["A", "B", "C"];

// array iterator object that contains
// key-value pairs for each index in the array
let iterator = alphabets.entries();

// iterating through key-value pairs in the array
for (let entry of iterator) {
  console.log(entry);
}

// Output: 
// [ 0, 'A' ]
// [ 1, 'B' ]
// [ 2, 'C' ]

/*
====== entries() Parameters
- The entries() method does not take any parameters.

====== entries() Return Value
- Returns a new Array iterator object.
*/

// Example 2: Using next() Method in Array Iterator Object
const symbols = ["#", "$", "*"];
let iterator1= symbols.entries();
// using built-in next() method in Array iterator object
console.log(iterator1.next().value); // [ 0, '#' ]
console.log(iterator1.next().value); // [ 1, '$' ]
console.log(iterator1.next().value); // [ 2, '*' ]
console.log(iterator1.next().value); // undefined



