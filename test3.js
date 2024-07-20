// // Numbers
// const score = 100
// console.log(score)

// const balance = new Number(400) // another method to declare a number
// console.log(balance);

// console.log(balance.toString().length); // toString() and length() method
// console.log(balance.toFixed(2)); // toFixed Method


// const otherNum = 23.99
// console.log(otherNum.toPrecision(2)); // toPrecision() method

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // toLocaleString() is method "en-IN" is used to convert in indian 


// ##############################   Maths  ######################################################

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(5.8));
console.log((Math.random()*10) +1 ); // to avoid zero value we used 10+1

// suppose u want only single digit as a output by using random() bcz random() gives like this 0.87777777
// to avoid this used this formula
// step by step explanation
// suppose i want values between 10 to 20 

const min= 10;
const max = 20;

//1. normally we used random method
// Math.random()
// it gives random number like this  2.2888668931747005

//2.  i want single digit like 2 or 3 

// console.log(Math.round(2.9))
// it gives round off value 3 


// we want to avoid zero so the formula become
// console.log(Math.random() * (max - min + 1))

// 3. but our question is we want value between  10 to 20
 console.log(Math.floor(Math.random() * (max - min + 1)) + min)    // imp****
 /* here we add min at last bcz normal formula gives value between 1 to 10
  but we want value between 10 to 20 
 let suppose random() gives value 2 , but we want more than 2 
 so it will add like 2+10.... 10 is our minimum value..
 it gives 12 value    */


 



