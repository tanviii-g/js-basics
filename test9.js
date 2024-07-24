// Scope of function
let a =10
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log( "Inner" , c); 
// tip : try to print one by one sentence..


// nested scope
function one(){
    const username = "radha"

    function two(){
        const website = "insta"
        console.log(username);

    }
    // console.log(website); // it is not executed give error bcz.. it is outside the function
    two()
}
one()


// interesting example
// 1. 

console.log(addOne(5)) // here we call the function first and then declare
function addOne(num){
    return num+1
}
// Output : 6

// 2. example 
// console.log(addtwo(3))    // here same we call the function
//const addtwo = function(num2){     // here we create a variable and store inside the function
    // return num2+2
// }

//  Error : Cannot access 'addtwo' before initialization....means when we use this method always keep in mind that we cannot call function before its declaration

// 3. example 
const addThree = function(num3){
    return num3+3
}
console.log(addThree(7))
// output : 10 ....(7+3)