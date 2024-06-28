// JavaScript Object.freeze()


// The Object.freeze() method freezes an object i.e. it prevents the object 
// from being modified.

// Example
let obj = {
  prop: function () {},
  foo: "bar",
};

// freeze the object
Object.freeze(obj)

// changes will not occur
obj.foo = "bar1";
console.log(obj.foo); // Output: bar

/*
=========== freeze() Parameters
- The freeze() method takes in:
  - obj - the object to freeze.

=========== freeze() Return Value
- The freeze() method returns:
  - The object that was passed to the function.

*/

// Example: JavaScript Object.freeze()
let obj = {
  prop: function () {},
  foo: "bar",
};

// freeze the obj object
let o = Object.freeze(obj);

// changes will fail silently
obj.foo = "bar1";
console.log(obj.foo);  // bar

// cannot add a new property 
obj.new_foo = "bar";
console.log(obj.new_foo);  // undefined

/*
- We then used the Object.freeze() method to freeze obj, which makes it immutable. Once an 
object is frozen, its properties cannot be modified or deleted.

- The output indicates that any attempt to modify a property or add a new property on a frozen 
object will fail silently without throwing an error.

*/