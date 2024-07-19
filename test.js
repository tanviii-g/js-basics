// 1. let score = 33
// //console.log(typeof score);

// // let name = "tanvi"
// // console.log(typeof name);

// let valueInNumber = Number(score)
// console.log(valueInNumber)
// console.log(typeof valueInNumber)

// 2. let Score = "33abc"
// let valueInNumber = Number(Score)
// console.log(valueInNumber)
// console.log(typeof valueInNumber)

// let Score = null
//  let valueInNumber = Number(Score)
// console.log(valueInNumber)
//  console.log(typeof valueInNumber)

 // ###################################################################

  // Stack  (primitive) , Heap  (non-primitive)

  // 1. Stack - it gives copy of original value ... 

//   let myName = "tanvi"

//   letAnotherName = myName
//   AnotherName = "tanviGaikwad"

//   console.log(myName)
//   console.log(AnotherName)

// 2. Heap - it will give reference of original value...

let userOne = {
    email: "taani@google.com",
    upi:  "user@ybl"

}

let userTwo = userOne
userTwo.email= "tara@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);