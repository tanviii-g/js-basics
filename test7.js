// Singleton Object and Non-Singleton Object

const tinderUser1 = new Object() // This is Singleton-Object

const tinderUser = {}  // This is Non-Singleton Object
tinderUser.id = "123abc"
tinderUser.name = "Radha"
tinderUser.isLoggedIn = false
// console.log(tinderUser) 

// Output : { id: '123abc', name: 'Radha', isLoggedIn: false }

// lets create objects inside an object

const regularUser = {
    fullname:{
        userFullName:{
            firstname : "radha",
            lastname : "krishna"
        }
    }
}
 // console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName.firstname);  // In this way we can access multiple objects ... ***IMP*** 

// console.log(regularUser.firstname);   // output: undefined.. bcz we cannot directly access firstname bcz firstname is present inside object.ie.., userFullname

// console.log(regularUser.fullname.firstname); // also give undefined

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
const obj3 = {5:"e" , 6:"f"}

// how to merge all the Objects?

// method 1
const obj4 = {...obj1, ...obj2, ...obj3} // spread method
// console.log(obj4);
// Output : { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// method 2
const obj5 = Object.assign({}, obj1, obj2, obj3)
//console.log(obj5);
// Output : { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }



// when values are came from database.. they came like this 
const users= [
    {
        id: 1,
        email: "radha@gmail.com"
    },
    {
        id: 2,
        email: "adha@gmail.com"
    },
    {
        id: 3,
        email: "dha@gmail.com"
    },
]

// users[1].email
// console.log(users);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


