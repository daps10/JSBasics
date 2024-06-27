// JavaScript Array values()

// The values() method returns a new Array Iterator object that contains the 
// values for each index in the array.

// Example
let languages = ["JavaScript", "Java", "C++"];

// returns an Array Iterator object that contain values
let iteratorObject = languages.values();

// looping through iterator
for (let value of iteratorObject) {
  console.log(value);
}

// Output:
// JavaScript
// Java
// C++

/*
====== values() Parameters
- The values() method does not take any parameters.

====== values() Return Value
- Returns a new Array iterator object.


*/


// Example 2: Using values() in Arrays with Holes
let arrayWithHole = ["A", "B", , "C"];
let iteratorObject1 = arrayWithHole.values();

// looping through iterator
for (let value of iteratorObject1) {
  console.log(value); // A B undefined C
}