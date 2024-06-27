// Javascript Array reduce()

// The reduce() method executes a reducer function on each element 
// of the array and returns a single output value.

// Example
const message = ["JavaScript ", "is ", "fun."];

function joinStrings(acc, init){
  return acc + init;
} 

let joinedString= message.reduce(joinStrings);
console.log((joinedString)); // JavaScript is fun.

/*
========= reduce() Parameters
- The reduce() method takes in:

  - callback - The callback function to execute on each array element 
  (except the first element if no initialValue is provided). It takes in
  - accumulator - It accumulates the callback's return values.
  - currentValue - The current element being passed from the array.
- initialValue (optional) - A value that will be passed to callback() on 
first call. If not provided, the first element acts as the accumulator on the 
first call and callback() won't execute on it.

========= reduce() Return Value
- Returns the single value resulting after reducing the array.
- reduce() executes the given function for each value from left to right.
- reduce() does not change the original array.
- It is almost always safer to provide initialValue.

*/

// Example 2: Subtracting Numbers in Array
const numbers = [1800, 50, 300, 20, 100];

let difference = numbers.reduce((acc, init) => {
  return acc - init
});

console.log(difference); // 1330

const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;
let remaining= expenses.reduce((acc, init) => {
  return acc - init;
}, salary)

console.log(remaining); // 2700


// Example 3: Remove Duplicate Items from Array
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let removeDuplicates= ageGroup.reduce((acc, init) => {
  if(acc.indexOf(init) === -1) {
    acc.push(init);
  }
  return acc;

}, []);

console.log(removeDuplicates);


// Example 4: Grouping Objects by a property
let people = [
  { name: "John", age: 21 },
  { name: "Oliver", age: 55 },
  { name: "Michael", age: 55 },
  { name: "Dwight", age: 19 },
  { name: "Oscar", age: 21 },
  { name: "Kevin", age: 55 },
];

const groupBy= (arr, props) => {
  return arr.reduce((acc, curr) => {
    let key = curr[props];
    if(!acc[key]){
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
  }, {});
}

let groupedPeople= groupBy(people, 'age');
console.log(groupedPeople);