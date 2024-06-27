// JavaScript Object.keys()

// The Object.keys() method returns an array of a given object's own enumerable property names.

// Example
let Student = {
  name: "Lisa",
  age: 24,
  marks: 78.9,
};

// get all keys of Student
let std1 = Object.keys(Student);
console.log(std1); // Output: [ 'name', 'age', 'marks' ]

/*
========== keys() Parameters
- The keys() method takes in:
  - obj - the object whose enumerable properties are to be returned.

========== keys() Return Value
- The keys() method returns an array of strings that represent all the 
enumerable properties of the given object.

*/

// Example: Using Object.keys()
// Array objects
const arr = ["A", "B", "C"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// array-like objects
const obj = { 65: "A", 66: "B", 67: "C" };
console.log(Object.keys(obj)); // ['65', '66', '67']

// random key ordering
const obj1 = { 42: "a", 22: "b", 71: "c" };
console.log(Object.keys(obj1)); // ['22', '42', '71']

// string => from ES2015+, non objects are coerced to object
const string = "code";
console.log(Object.keys(string)); // [ '0', '1', '2', '3' ]
