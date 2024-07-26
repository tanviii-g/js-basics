// example 1
// const userEmail = "t@tanvi.g"

// if(userEmail){
//     console.log("Got user email");
// } else{
//     console.log("Dont have user email");
// }

// output : Got user email

// example 2

// const userEmail = ""

// if(userEmail){
//     console.log("Got user email");
// } else{
//     console.log("Dont have user email");
// }

// output : Dont have user email

const userEmail = []

if(userEmail){
     console.log("Got user email");
 } else{
     console.log("Dont have user email");
 }

 // output : Got user email


 // 1. Falsy Values

 // false, 0, BigInt -0n, "" , null, undefined , NaN


 // 2. Truthy Values
 // "0" , "false" , " ", [], {}, function(){}

 // 3. How to check array is empty
 if(userEmail.length === 0){
    console.log("Array is empty");

 }

 // 4. How to check object is empty

 const emptyObj = {}
 if(Object.keys(emptyObj).length ===0 ){
    console.log("Object is empty");

 }

 // in the above code we first give Object to keys(emptyObj)... it gives array and  then we know that  how to check array is empty.,  .length === 0 ; so by using this way we check object is empty or not