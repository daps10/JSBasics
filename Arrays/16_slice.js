// JavaScript Array slice()

// The slice() method returns a shallow copy of a portion of an array 
// into a new array object.

// Example
let numbers = [2, 3, 5, 7, 11, 13, 17];

// create another array by slicing numbers from index 3 to 5
let newArray = numbers.slice(3, 6);
console.log(newArray); // Output: [ 7, 11, 13 ]

/*
==== slice() Parameters
- start (optional) - Starting index of the selection. If not provided, 
the selection starts at start 0.
- end (optional) - Ending index of the selection (exclusive). If not provided, 
the selection ends at the index of the last element.

==== slice() Return Value
- Returns a new array containing the extracted elements.

*/

// Example 1: JavaScript slice() method
let languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let new_arr = languages.slice();
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

// slicing from the third element
let new_arr1 = languages.slice(2);
console.log(new_arr1); // [ 'C', 'C++', 'Java' ]

// slicing from the second element to fourth element
let new_arr2 = languages.slice(1, 4);
console.log(new_arr2); // [ 'Python', 'C', 'C++' ]

// Example 2: JavaScript slice() With Negative index

const languages1 = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array from start to second-to-last
let new_arr3 = languages1.slice(0, -1);
console.log(new_arr3); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// slicing the array from third-to-last
let new_arr4 = languages1.slice(-3);
console.log(new_arr4); // [ 'C', 'C++', 'Java' ]


// Example 3: JavaScript slice() with Objects as Array Elements
let human= {
  name: "David",
  age: 23,
}
let arr= [human, 'Nepal', 'Manager'];
let new_arr5 = arr.slice();

// original object
console.log(arr[0]); // { name: 'David', age: 23 }

// making changes to the object in new array
new_arr5[0].name = "Levy";

// changes are reflected
console.log(arr[0]); // { name: 'Levy', age: 23 }
