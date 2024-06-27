// Javascript Array reduceRight()

// The reduceRight() method reduces the array to a single value by executing 
// a callback function on two values of the array (from right to left).

// Example
let numbers = [1, 2, 3, 4];

// function that adds last two values of the numbers array
function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

// returns a single value after reducing the numbers array
let sum = numbers.reduceRight(sum_reducer);

console.log(sum); // Output: 10

/*
======== reduceRight() Parameters
- The reduceRight() method can take two parameters:
  - callback - The function to execute on each array element. 
  It takes in:
  - accumulator - It accumulates the callback's return values. 
  It is initialValue for the first call if supplied.
  - currentValue - The current element being passed from the 
  array.

- initialValue (optional) - A value that will be passed to callback() 
on the first call. If not provided, the last element acts as the accumulator 
on the first call and callback() won't execute on it.


======== reduceRight() Return Value
- Returns the value resulting after reducing the array.
  - reduceRight() executes the given function for each value from right 
  to left.
  - reduceRight() does not change the original array.
  - It is almost always safer to provide initialValue.

*/  


// Example 2: Passing initialValue in reduceRight() Method
let expense = [50, 300, 20, 100, 1800];

const add= (acc, init) => {
  return acc + init;
}

let result= expense.reduceRight(add, 0);
console.log(result); // 2270

