// JavaScript Object.values()

// The Object.values() method returns an array containing the enumerable values of an object.

// Example
const obj = { 65: "A", 66: "B", 67: "C" };

// print the enumerable values of obj
console.log(Object.values(obj)); // Output:  [ 'A', 'B', 'C' ]

/*
=========== values() Parameters
- The values() method takes in:
  - obj - the object whose enumerable properties are to be returned

=========== values() Return Value
- The values() method returns an array of strings that represents all 
the enumerable property values of the given object.

*/

// Example 1: Javascript Object.values() With Array-like Object
const obj1 = { 65: "A", 66: "B", 67: "C" };

// print the enumerable values of obj
console.log(Object.values(obj1)); // Output: [ 'A', 'B', 'C' ]


// Example 3: values() With Object Having Random Key Ordering
const obj2 = { 42: "a", 22: "b", 71: "c" };
console.log(Object.values(obj2)); // [ 'b', 'a', 'c' ]
/*
- However, the values() method returns the values in ascending order of their corresponding keys. 
In other words, the value corresponding to the smallest integer key (22), which is b, is placed 
first, and so on.

*/


// Example 4: JavaScript Object.values() With String
const string = "code";
console.log(Object.values(string)); // Output:  [ 'c', 'o', 'd', 'e' ]

