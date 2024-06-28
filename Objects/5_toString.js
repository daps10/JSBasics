// JavaScript Object.toString()

// The Object.toString() method returns the given object as a string.

// create a number with value 10
let num = 10;

// check the type of num before
// using the toString() method
console.log(typeof num);  // Output: number

// check the type of num after 
//using the toString() method
console.log(typeof num.toString());  // Output: string

/*
========== toString() Parameters
- The toString() method does not take any parameters.

========== toString() Return Value
- The toString() method returns a string representing the object.

*/

// Example 2: toString() With Custom Object
// constructor function to create a new object
function Dog(name, breed, sex) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
}

// create a new object
let dog1 = new Dog("Daniel", "bulldog", "male");
console.log(dog1.toString()); 

// Output: [object Object]

// override the default toString() in the custom object
Dog.prototype.toString = function dogToString() {
  return `${this.name} is a ${this.sex} ${this.breed}.`;
};

console.log(dog1.toString()); // Output: Daniel is a male bulldog.
