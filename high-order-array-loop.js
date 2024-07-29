// for of

const arr = [1,2,3,4,5]
for (const value of arr) {
   // console.log(value);
}

const greet = "Hello world!"
for (const val of greet) {
   // console.log(val);
}

let fruits = ["mango","kivi","grapes"]
for(const val of fruits){
   // console.log(val);
}


// maps 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr', "France")
//console.log(map);


for(const val of map){
console.log(val);
}

// how to iterate objects

// const myobj = {
//     game1: "nfs",
//     game2: "wwe"
// }

// for(const val of myobj){
//     //console.log(val);
// }
// output :myobj is not iterable bcz object has different method to iterate

// 2. for in loop

const lang = {
    one: "marathi",
    two: "english",
    three: "hindi"
}
for (const key in lang) {
    // console.log(lang[key]);
    }

    // 3. example 

    let myArray = ["js","java","cpp"]
    for(const key in myArray){
        //console.log(myArray[key]);
    }


    // 4. for each loop

    let color = ["purple", "white", "black"]

//    color.forEach(function(valuee){
//     console.log(valuee);

//    })
color.forEach((item) => {
    //console.log(item);

})

// another way
function printMe(items){
    //console.log(items);
}

color.forEach(printMe)


// array contains multiple objects

let newArr = [
    {
        one: "java",
        two: "python",
        three: "c++"
    },
    {
        one: "marathi",
        two: "hidi",
        three: "english"
    },
    {
        one: "red",
        two: "pink",
        three: "black"
    }
]

newArr.forEach((values) => {
    console.log(values.one);
})

// output : java
//          marathi
//          red