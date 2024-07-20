// Date is Object in JavaScript
// Different methods of Date

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
//console.log(myDate.toLocaleString());
//console.log(myDate.toJSON());
// console.log(myDate.toTimeString())

// ################ Time Stamp ################

let myCreatedDate= new Date("01-15-2023")
//console.log(myCreatedDate)

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})
