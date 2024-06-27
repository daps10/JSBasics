// JavaScript String trim()

// The trim() method removes whitespace from both ends of a string.

// Example
const message = "   JAVASCRIPT IS FUN    ";

// remove leading and trailing whitespaces
const newMessage = message.trim();
console.log(newMessage); // Output: JAVASCRIPT IS FUN

/*
========== trim() Parameter
- The trim() method does not take in any parameters.

========== trim() Return Value
- Returns a new string representing the str stripped of whitespace from both ends.

- Whitespace is all the whitespace characters (space, tab, no-break space, etc.) 
and all the line terminator characters (LF, CR, etc.).

*/

// Example: Using trim()
let str = "   foo  ";
console.log(str.trim()); // 'foo'

// trim() removes whitespace only from the edges
let str1 = "  A B C D  ";
console.log(str1.trim()); // 'A B C D'
