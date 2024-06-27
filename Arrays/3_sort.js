// JavaScript Array sort()

// The sort() method sorts the items of an array in a specific order (ascending or descending).

// Example
let city = ["California", "Barcelona", "Paris", "Kathmandu"];

// sort the city array in ascending order
let sortedArray = city.sort();
console.log(sortedArray);

// Output: [ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]

// sort() Parameters
// The sort() method takes in:
// compareFunction (optional) - It is used to define a 
// custom sort order.

// sort() Return Value
// Returns the array after sorting the elements of the 
// array in place (meaning that it changes the original 
// array and no copy is made).


// Example 1: Sorting the Elements of an Array

// When compareFunction is not passed,

/*

- All non-undefined array elements are first converted to strings.
- These strings are then compared using their UTF-16 code point value.
- The sorting is done in ascending order.
- All undefined elements are sorted to the end of the array.

*/

// sorting an array of strings
var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

// returns the sorted array
console.log(names.sort()); // [ 'Adam', 'Ben', 'Danil', 'Fabiano', 'Jeffrey' ]

// modifies the array in place
console.log(names); // [ 'Adam', 'Ben', 'Danil', 'Fabiano', 'Jeffrey' ]

var priceList = [1000, 50, 2, 7, 14];
priceList.sort(); 

// Number is converted to string and sorted
console.log(priceList) // [ 1000, 14, 2, 50, 7 ]

// Here, we can see that even though 1000 is greater than 50 numerically, 
// it comes at the beginning of the sorted list. It is because "1" < "5".



// Example 3: Sorting Numbers Numerically

// define array
var priceList1 = [1000, 50, 2, 7, 14];

// sort() using function expression
// ascending order
priceList1.sort(function (a, b) {
  return a - b;
});

// Output: Ascending - 2,7,14,50,1000
console.log("Ascending - " + priceList1);

// sort() using arrow function expression
// descending order
priceList1.sort((a, b) => b - a);

/*
Here,

- If a - b < 0, a comes before b. For example, 2 comes before 7 as 2 - 7 < 0.
- If a - b > 0, b comes before a. For example, 1000 comes after 50 as 1000 - 50 > 0.

*/

// Output: Descending - 1000,50,14,7,2
console.log("Descending - " + priceList1);