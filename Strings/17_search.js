// Javascript String search()

// The search() method searches for a match between a given string and a regular 
// expression.

let sentence= "I love JavaScript.";

// pattern that searches the first occurence of an uppercase character
let regExp = /[A-Z]/;
// searching for a match between regExp and given string 
let indexReg = sentence.search(regExp);
console.log(indexReg); // Output: 0


/*
======= search() Parameters
- regExp - A regular expression object (Argument is implicitly converted to 
regExp if it is a non-regExp object)

======= search() Return Value
- Returns the index of the first match between the regular expression and the 
given string
- Returns -1 if no match was found.

*/


// Example 1: Using search() Method
// defining string
let string1 = "JavaScript JavaScript1";

// pattern having 'JavaScript' followed by a digit
let regExp1 = /(JavaScript)\d/;

// searching for a match between regExp1 and given string
let index = string1.search(regExp1);

console.log(index); // 11

/*
- string1.search(regExp) executes the search and returns 11 which is the 
index value of the match found i.e.'JavaScript1'.

*/