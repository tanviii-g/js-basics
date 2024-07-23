// Functions

//A JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it).

function myname() {
    console.log("r");
    console.log("a");
    console.log("d");
    console.log("h");
    console.log("a");
}
myname()     // this is must 

// 2 example
function AddNum ( number1, number2){
    console.log(number1+number2);
}

// AddNum()              // when we dont give arguments, then it gives NAN ..bcz value are not present how can he add?

AddNum(4,8);

// difference between parameters and arguments 
// in function definition we gives parameters ... eg., function AddNum( number1,number2)...
// AddNum(4,8)... when we call function and pass value called arguments...here 4 and 8 are arguments 