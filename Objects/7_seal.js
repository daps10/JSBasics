// JavaScript Object.seal()

// The Object.seal() method seals the given object. This prevents new properties from 
// being added to the object and marks all the existing properties as non-configurable.


// Example
const obj = {
  name: 'John',
  age: 30
};

// seal the obj object
Object.seal(obj);

// throws an error in strict mode
// silently fails in non-strict mode
obj.address = "New York"; 

console.log(obj.address);  // Output: undefined

/*
=========== seal() Parameters
- The seal() method takes in:
  - obj - the object that is to be sealed.

=========== seal() Return Value
- The seal() method returns the object being sealed i.e. obj.

*/

// Example 1: JavaScript Object.seal()
let obj1 = {
  foo: "bar",
  func: function () {},
};

// before sealing, properties can be
// added, modified, or removed
obj1.foo = "JavaScript";
obj1.value = 5;
delete obj1.func;

console.log(obj1);

// Output: { foo: 'JavaScript', value: 5 } 

// seal the object
let o = Object.seal(obj1);

// can still change property values
// as it is writable by default
obj1.foo = "bar1";
console.log(obj1); // Output: { foo: 'bar1', value: 5 }

// no other change happens, fails silently
obj1.foo1 = "bar";
delete obj1.foo;
console.log(obj);  // Output: { foo: 'bar1', value: 5 }

/*
- After sealing obj with the seal() method, we
  - can modify existing writable properties like foo and value,
  - cannot add new properties to obj (attempt fails silently in 
  non-strict mode)

*/