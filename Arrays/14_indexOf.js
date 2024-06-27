// JavaScript Array indexOf()

// The indexOf() method returns the first index of occurance of an array element, 
// or -1 if it is not found.

// Example
let languages = ["Java", "JavaScript", "Python", "JavaScript"];

// get the index of the first occurrence of "JavaScript"
let index = languages.indexOf("JavaScript");
console.log(index); // Output: 1

/*
==== indexOf() Parameters
- The indexOf() method takes in:
1. searchElement - The element to locate in the array.
2. fromIndex (optional) - The index to start the search at. 
By default, it is 0.

==== indexOf() Return Value
- Returns the first index of the element in the array 
if it is present at least once.
- Returns -1 if the element is not found in the array.

*/

// Example 1: Using indexOf() method
var priceList = [10, 8, 2, 31, 10, 1, 65];

// indexOf() returns the first occurance
var index1 = priceList.indexOf(31);
console.log(index1); // 3

var index2 = priceList.indexOf(10);
console.log(index2); // 0

// second argument specifies the search's start index
var index3 = priceList.indexOf(10, 1);
console.log(index3); // 4

// indexOf returns -1 if not found
var index4 = priceList.indexOf(69.5);
console.log(index4); // -1


// Example 2: Finding All the Occurrences of an Element
const findAllIndex= (arr, elem) => {
  indices= [];
  var currentIndex= arr.indexOf(elem);

  while (currentIndex != -1) {
    indices.push(currentIndex);
    currentIndex= arr.indexOf(elem, currentIndex + 1);
  }

  return indices;
}

var priceList1 = [10, 8, 2, 31, 10, 1, 65, 10];

var occurance1 = findAllIndex(priceList1, 10);
console.log(occurance1); // [ 0, 4, 7 ]

var occurance2 = findAllIndex(priceList1, 8);
console.log(occurance2); // [ 1 ]

var occurance3 = findAllIndex(priceList1, 9);
console.log(occurance3); // []