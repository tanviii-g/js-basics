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
 console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName.firstname);  // In this way we can access multiple objects ... ***IMP*** 

// console.log(regularUser.firstname);   // output: undefined.. bcz we cannot directly access firstname bcz firstname is present inside object.ie.., userFullname

// console.log(regularUser.fullname.firstname); // also give undefined