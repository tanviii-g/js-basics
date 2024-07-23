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
console.log("Result is", result);

// 3. another method

function divnum(num1,num2){
    return num1 / num2
}

const result1= divnum(10,5)
console.log("Result is", result1);

function usermessage(username){
    return (`${username} just logged in`)

}

// usermessage("user123")
// here observe one thing that it only return the value but does not print the value

console.log(usermessage("user123"));