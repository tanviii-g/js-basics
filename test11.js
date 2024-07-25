// Immediately Invoked Function Expressions (IIFE)

// sometimes global pollution can make problem, to remove this problem we used IIFE
// sytax : ()()
(function database(){
    // named IIFE
    console.log("DB Connected");
}) () ; // here semicolon is imp bcz if we want to run another code 

// same as function but little bit different.. u have to keep in mind the braces 

// this is another example of IIFE by using arrow function...
(()=> {
    // unNamed IIFE
    console.log("Database is connected");
}) ()