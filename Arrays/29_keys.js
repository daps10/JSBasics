// JavaScript Array keys()

// The keys() method returns a new Array Iterator object that contains 
// the keys for each element in the array.

let alphabets = ["A", "B", "C"];
let iterator = alphabets.keys();

for (let key of iterator) {
  console.log(key);
}
// 1 2 3

/*
====== keys() Parameters
- The keys() method does not take any parameters.

====== keys() Return Value
- Returns a new Array iterator object.

*/

let vehicle = ["car", "bus", , "van", "truck"];
let iterator1 = vehicle.keys();
for (let key of iterator1) {
  console.log(key); // 1 2 3 4
}