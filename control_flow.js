// if statement 

// if(2==2){
//     console.log("yes it is equal");

// }

// const x = 10

// if(10 === 9){
//     console.log("it is equal");
// }
// console.log("not equal")

// interesting 
// what if we dont give else 
// const x = 12

// if(12 === 12){
//     console.log("it is equal");
// }
// console.log("not equal")
// Output is : it is equal , not equal ...so the problem is everytime it prints the value present at outside of if Scope... thats why we used else

// const y = 200

// if(200 === 12){
//     console.log("it is equal");
// } else{
//     console.log("not equal")
// }

// implicit scope
// const bal = 1000

// // if(bal> 500) console.log("yes it is greater");

// if(bal<500){
//     console.log("less than");
// } else if(bal<850){
//     console.log("less than 550");
// } else{
//     console.log("greater than or equal to");
// }

// const userLoggedIn = true
// const DebitCard = true
// if(userLoggedIn && DebitCard){
//     console.log("Allow to buy");
// }

// example 1
// const userLoggedInn = true
// const DebitCardd = true
// if(userLoggedInn && DebitCardd && 2==12){
//     console.log("Allow to buy");
// }

// here our code not executed bcz when we used && operator then the Condition is all values should be true but here 2==12 is not true so it doesnt execute the code


// example 2

userLoggedInFromGoogle = false
userLoggedInFromEmail = true
if(userLoggedInFromEmail || userLoggedInFromGoogle){
    console.log("Log in Succesfully");
}

// here we used pipe( || )... its condition is if one of the value is true then code is executed

// example 3 - switch statement
/* syntax : switch (key) {
    case value:
        
        break;

    default:
        break;
} */

        // Tip: shit+alt+down arrow(it duplicates the value)

        const month = 1
        switch (month) {
            case 1:
                console.log("january");
                break;
            case 2:
                console.log("february");
                break;
            case 3:
                console.log("march");
                break;
            case 4:
                console.log("april");
                break;
        
            default:
                break;
        }
