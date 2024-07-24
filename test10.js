const user = {
    username : "radha",
    price : 44,

    welcomeMessage : function(){
        //console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }
}
user.welcomeMessage()
//user.username
// console.log(this) // {} - this is output


// Arrow function
// () => {}

    const addTwoo = (num1,num2) => {
        return num1+num2
    }
    //console.log(addTwoo(3,7))


// implicit return ... means we not used return keyword
    const add = (numb1,numb2) => numb1+ numb2 ;
    //console.log(add(9,0))   // output: 9

// how we return objects by using this method
   const addition = (numb1,numb2) => ({name:"krishna"})
    console.log(addition(7,9)) 

// explicit return .... means we used return keyword...one more thing, when we used {} then we have to used return keyword

const addTwoNumbers = (num1,num2) => {
    return num1+num2
}
//console.log(addTwoNumbers(3,8))