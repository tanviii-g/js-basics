// array

// const myArr= [1,2,3,4]
// const heros =["srk","sk"]

// const myArr2= new Array(1,2,3,4) // another method to create array
// console.log(heros[1]);


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
 
// myArr.shift() // it remove first element of array
// console.log(myArr);
//console.log(myArr.includes(9));
// console.log(myArr.includes(1));

//const newArr = myArr.join()

// slice , splice

/* Slice :  The slice method returns a shallow copy of a portion of an array 
into a new array object selected from start to end (end not included). 
The original array will not be modified. */

// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// let citrusFruits = fruits.slice(1, 3);

// console.log(citrusFruits); // Output: ["banana", "cherry"]
// console.log(fruits); // Output: ["apple", "banana", "cherry", "date", "elderberry"]

/* In this example, slice(1, 3) extracts elements from index 1 to 3 (not including 3),
 resulting in ["banana", "cherry"]. */

 /* Splice :  The splice method changes the contents of an array 
 by removing or replacing existing elements and/or adding new elements in place.
  The original array is modified.  */

//   let vegetables = ["carrot", "broccoli", "asparagus", "cauliflower"];
// let removedItems = vegetables.splice(1, 2, "spinach", "kale");

// console.log(removedItems); // Output: ["broccoli", "asparagus"]
// console.log(vegetables); // Output: ["carrot", "spinach", "kale", "cauliflower"]

/*In this example, splice(1, 2, "spinach", "kale") starts at index 1, removes 2 elements (["broccoli", "asparagus"]), 
and adds "spinach" and "kale" at the same index. 
The resulting array is ["carrot", "spinach", "kale", "cauliflower"].*/


const marvel_heros= ["Thor", "Ironman", "spiderman"];
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros)
// Output : [ 'Thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 
// it considers dc_heros array as a seperate elements ...total elements are 4 here

// what if we conacatenate .... it will concatenate two arrays
let newArr = marvel_heros.concat(dc_heros)
console.log(newArr);
// output: [ 'Thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] it combines both 
// limitation: only one value can pass in this method

// mainly used method is spread method ... with the help of this we can add multiple arrays

let new_hero = [...marvel_heros, ...dc_heros]
console.log(new_hero);
// [ 'Thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] output is same as concatenate...but
// we can add multiple arrays in one variable


// suppose u have multiple arrays in one array and u have to combine that all in a single array then 
// flat method used 

const mixture_array = [1, 2, 3, [4,5], 6,7, [5,4]];
const res_array = mixture_array.flat(Infinity)// here instead of infinity u can give depth as 1,2
console.log(res_array);

/*output: [
  1, 2, 3, 4, 5,
  6, 7, 5, 4
]  it combines all the arrays */ 

// How to check it is array or not
//isArray method is used
console.log(Array.isArray("Swami"))
// Output : false

// if we want to convert it into array
// From is used
console.log(Array.from("Swami"));
// output :  [ 'S', 'w', 'a', 'm', 'i' ]

// another case
console.log(Array.from({ name:"Swami"}));
// output : [] - it gives empty array


// Suppose we have 3 values
let num1 = 10;
let num2 = 20;
let num3 = 30;

// we have to create array of these numbers 

console.log(Array.of(num1,num2,num3));
// Output: [ 10, 20, 30 ]
