// JavaScript Array.toLocaleString()

// The Array.toLocaleString() method returns a string representing the elements 
// of the array in a particular locale.

// Example
let array1 = ["Nepal", 1];

// returns string representation of array
let stringFromArray = array1.toLocaleString();

console.log(stringFromArray);

// Output:
// Nepal,1

/*
======= toLocaleString() Parameters
- The toLocaleString() method can take two parameters:
  - locales (optional) - A convention or formatting based on 
  particular geography.
  - options (optional) - An object with configuration 
  properties.


======= toLocaleString() Return Value

- Returns a string representing the elements of the array.

*/


// Example 2: toLocaleString() Method with Parameters
let prices = [689, 100, 4577, 56];

let resultingString = prices.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});

console.log(resultingString);  // $689.00,$100.00,$4,577.00,$56.00