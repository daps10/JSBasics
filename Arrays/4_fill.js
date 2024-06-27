// JavaScript Array fill()

// The fill() method returns an array by filling all elements with a specified value.

// Example
// defining an array 
var fruits = ['Apple', 'Banana', 'Grape'];

// filling every element of the array with 'Cherry'
fruits.fill("Cherry");

console.log(fruits);
// Output: 
// [ 'Cherry', 'Cherry', 'Cherry' ]


// ===== fill() Parameters
// The fill() method can take 3 parameters:

// value - Value to fill the array with.
// start (optional) - Start index (default is 0).
// end (optional) - End index (default is Array.length), which is always excluded.

// =====  fill() Return Value
// Returns the modified array, filled with value from start to end.

// If start or end is negative, indexes are counted backwards.
// Since fill() is a mutator method, it changes the array itself (not a copy) and returns it.


// Example 2: fill() Method with Three Arguments
var language = ["JavaScript", "Python", "C", "C++"];

// replacing element of array from index 1 to 3 by 'JavaScript'
language.fill("JavaScript", 1, 3);
// printing the original array
console.log(language); // [ 'JavaScript', 'JavaScript', 'JavaScript', 'C++']

// Here, we have used the fill() method to fill 'JavaScript' in language 
// from index 1 to 3 (excluding 3).

// So the method just replace the element of language[1] and language[2] 
// with 'JavaScript'.

// Example 3: fill() Method with Invalid Indexes
var rank = [8, 9, 3, 7];
rank.fill(15, -2);

// prints the modified 'rank' array
console.log(rank);  // [ 8, 9, 15, 15 ]

// passing invalid index result in no change
rank.fill(15, 7, 8);
console.log(rank);  // [ 8, 9, 15, 15 ]

// passing invalid indexes
rank.fill(15, NaN, NaN);
console.log(rank);  // [ 8, 9, 15, 15 ]

/*

- In the above example, we have passed negative index value -2 as start 
in the fill() method. rank.fill(15,-2) fills the last two elements of the 
array with 15.

*/