// Functions

//A JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it).

// 1 method of creating function
// function myname() {
//     console.log("r");
//     console.log("a");
//     console.log("d");
//     console.log("h");
//     console.log("a");
// }
// myname()     // this is must 

// 2 example
// function AddNum ( number1, number2){
//    // console.log(number1+number2);
// }

// AddNum()              // when we dont give arguments, then it gives NAN ..bcz value are not present how can he add?

// AddNum(4,8);

// difference between parameters and arguments 
// in function definition we gives parameters ... eg., function AddNum( number1,number2)...
// AddNum(4,8)... when we call function and pass value called arguments...here 4 and 8 are arguments 

// 2. Another method of creating function
function subnum(num1,num2){
    let result = num1-num2;
    return result;
}
const result=subnum(9,5)
// console.log("Result is", result);

// 3. another method

function divnum(num1,num2){
    return num1 / num2
}

const result1= divnum(10,5)
// console.log("Result is", result1);

function usermessage(username){
    return (`${username} just logged in`)

}

// usermessage("user123")
// here observe one thing that it only return the value but does not print the value

// console.log(usermessage("user123"));



// we add multiple items in a cart and we want to fetch that count ...how can we do this?

//  function calculateCartPrize( number){
//     return number

// }
// console.log(calculateCartPrize(2)) // it gives 2 as a output

// What if.... this is a wrong example but we learn that how to use rest*
// function calculateCartPrize(number1, number2, number3){
//     return number1, number2, number3
// }
// console.log(calculateCartPrize(100,200,300)) 
// Output : 300 

// problem is we want to fetch all the values so we used spread and rest...here we used rest 

function calculateCartPrize(...number1){
    return number1
}
console.log(calculateCartPrize(100,200,300)) 

// so rest is used to bundle the value
// Output is  [ 100, 200, 300 ] ... this exactly we want


// interesting example 

function calculateCartPrize(value1, value2, ...number1){
    return number1
}
console.log(calculateCartPrize(100,200,300)) 
// output : [ 300 ]
 //         [ 300 ]


 // lets create object first and used them in function

 const user = {
    name:"radha",
    age: 34
 }

 function handleObject(anyobject){
    console.log(`The name is ${anyobject.name} and age is ${anyobject.age}`)
 }
 handleObject(user)
 // Output : The name is radha and age is 34

 // another method is 
 function handleObject2(anyobj){
    console.log(`My name is ${anyobj.name} and i am ${anyobj.age} years old!!`)
 }
 handleObject2({
    name: "tanvi",
    age : 24
 })

 // Output : My name is tanvi and i am 24 years old!!

 // How to handle arrays with the help of function

 const array= [100,200,300]
 function handleArray(value){
    return value[2]         // here we have to give index number bcz without them how can we fetch from array
 }
 console.log(handleArray(array))   // here we give the arrayname as a argument 