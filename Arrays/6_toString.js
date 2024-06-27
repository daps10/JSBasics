// Javascript Array toString()

// The toString() method returns a string formed by the elements of the given array.

// Example
let items = ["JavaScript", 1, "a", 3];

// returns a string with elements of the array separated by commas
let itemsString = items.toString();

console.log(itemsString);
// Output: 
// JavaScript,1,a,3

/*

=== toString() Parameters
- The toString() method does not take any parameters.

=== toString() Return Value
- Returns a string representing the values of the array separated by a comma

- The toString() method does not change the original array.
- Elements like undefined, null, or empty array, have an empty string representation.

*/

// Example 2: toString() with Nested Arrays
let nestedArray = [1, 2, 4, ["Apple", 5]];

// returns string representation of the nested array by flattening the array 
let resultingArray = nestedArray.toString();
console.log(resultingArray); // 1,2,4,Apple,5