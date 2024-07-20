// array

const myArr= [1,2,3,4]
const heros =["srk","sk"]

const myArr2= new Array(1,2,3,4) // another method to create array
console.log(heros[1]);


// Array Methods

// myArr.push(5)
// myArr.push(6)
// myArr.push(7) // add the element at the end of array
// console.log(myArr);
// myArr.pop() // remove the last element of array
// console.log(myArr)

// what if i wanted to add element at first position

//myArr.unshift(0) // it will add 0 at first position... but is not a good practice ... 
// but it will useful in to do list 
 
myArr.shift() // it remove first element of array
// console.log(myArr);
//console.log(myArr.includes(9));
// console.log(myArr.includes(1));

//const newArr = myArr.join()

// slice , splice

/* Slice :  The slice method returns a shallow copy of a portion of an array 
into a new array object selected from start to end (end not included). 
The original array will not be modified. */

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let citrusFruits = fruits.slice(1, 3);

console.log(citrusFruits); // Output: ["banana", "cherry"]
console.log(fruits); // Output: ["apple", "banana", "cherry", "date", "elderberry"]

/* In this example, slice(1, 3) extracts elements from index 1 to 3 (not including 3),
 resulting in ["banana", "cherry"]. */

 /* Splice :  The splice method changes the contents of an array 
 by removing or replacing existing elements and/or adding new elements in place.
  The original array is modified.  */

  let vegetables = ["carrot", "broccoli", "asparagus", "cauliflower"];
let removedItems = vegetables.splice(1, 2, "spinach", "kale");

console.log(removedItems); // Output: ["broccoli", "asparagus"]
console.log(vegetables); // Output: ["carrot", "spinach", "kale", "cauliflower"]

/*In this example, splice(1, 2, "spinach", "kale") starts at index 1, removes 2 elements (["broccoli", "asparagus"]), 
and adds "spinach" and "kale" at the same index. 
The resulting array is ["carrot", "spinach", "kale", "cauliflower"]./* 