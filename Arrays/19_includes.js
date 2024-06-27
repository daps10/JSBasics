// JavaScript Array includes()

// The includes() method checks if an array contains a specified element or not.

// Example
let languages = ["JavaScript", "Java", "C"];

// checking whether the array contains 'Java'
let check = languages.includes("Java");

console.log(check);  // Output: true

/*
===== includes() Parameters
- The includes() method can take two parameters:
  - searchValue- The value to search for.
  - fromIndex (optional) - The position in the array at which to begin the search. By default, it is 0.

==== includes() Return Value
- true if searchValue is found anywhere within the array
- false if searchValue is not found anywhere within the array

*/

// Example 2: includes() for Case-Sensitive Search
let languages1 = ["JavaScript", "Java", "C", "Python"];

// checking whether the array contains 'Python'
let check1 = languages1.includes("Python");

console.log(check1); // true

// checking whether the array contains 'python'
let check2 = languages1.includes("python"); // because the method is case sensitive and it treats 
// 'Python' and 'python' as two different strings.

console.log(check2); // false


// Example 3: includes() with two Parameters
let languages2 = ["JavaScript", "Java", "C", "Python"];

// second argument specifies position to start the search
let check3 = languages2.includes("Java", 2);

console.log(check3); // false

// the search starts from third last element 
let check4 = languages2.includes("Java", -3);

console.log(check4); // true 

/*
- languages.includes("Java", 2) returns false since the method 
doesn't find 'Java' from second index of the array.
- In languages.includes("Java", -3), the method starts searching 
'Java' from the third last element because of the negative 
argument -3.

*/