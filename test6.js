// singleton

// object literlas

// 1.  declaration of Object

const user = {
    name: "tanvi", 
    age: 23,
    location : "Pune",
    email : "tan@gmail.com",
    isLoggedIn :false,
    lastLoginDays: ["monday", "Saturday"]

} 

// how to access objects
// 1.
console.log(user.email);
// 2. 
console.log(user["email"]);

// 2 method is used in this type of question
// suppose u have to declare symbol as a key in that object eg.,fruits. first u have to declare that symbol

const sym = Symbol("key1")

// const fruits = {
//     name: "Apple",
//     color: "red",
//     quantity: 12
// }

// now how can we add in fruits 
const fruits = {
    name: "Apple",
    color: "red",
    quantity: 12,
    // sym: "key1" ,// this not a good method
    [sym]: "key1"  // this a right method to add any new element in object *** IMPORTANT ***
}

// how to acesss
console.log(fruits[sym]); // this is a right method to access

// what if we used this method 
console.log(fruits.sym); // output: Undefined... so we cant use this method in such question

// another example

const color = {
name : "yellow",
quantity : 12 ,
"size" : 24
}

// now i wanted to access that size 
console.log(color.size)

color.name = "pink"  // suppose i want to change the value then this method is used.. 
console.log(color);

// output : { name: 'pink', quantity: 12, size: 24 }

// what if i dont  want to allow others to change the specific value
Object.freeze(color) // freeze(object name) used 
color.quantity = 14
console.log(color);

// output :  { name: 'pink', quantity: 12, size: 24 } // here see that quantity is not change 
