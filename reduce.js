// reduce

// tip : at the end we used 0 bcz it is used to initialise the value

const mynums= [1,2,3]

// const total = mynums.reduce (function( accumulator, currentValue){
//     console.log(`accumulator is ${accumulator} and currentValue is ${currentValue}`);
//     return accumulator + currentValue
// }, 0)

// by using arrow functions

const total = mynums.reduce((acc, currval) => (acc+currval),0)
 console.log(total);


 const ShoppingCart = [
    { 
    itemName : "js Course",
    price: 2999
 },
    { 
    itemName : "python Course",
    price: 999
 },
    { 
    itemName : "java Course",
    price: 1999
 }
]

const totalItems = ShoppingCart.reduce((accumulator, item)=> accumulator + item.price,0)
console.log(totalItems);