// Filter

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums =myNums.filter((num)=> num>4);
// console.log(newNums);


// here in filter there is a call back function (num)=> and after that we have to give condition num<4


// another way but this is wrong
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums =myNums.filter((num)=> {
//     num<4
// });
// console.log(newNums);

// here output is [].., empty array
// bcz when we give {} then it should return the value

// another way correct the mistake here
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums =myNums.filter((num)=> {
    //return num<4                       // here we used return keyword
});

//console.log(newNums);



// how we used foreach loop in this
// suppose u have an empty array and u want to add values in that array which is greater than 4
const array = [1,2,3,4,5,6,7,8,9,10];
const array1= [];
array.forEach((nums)=>{
    if (nums >4){
        array1.push(nums)
     }
   
})
// console.log(array);
// console.log(array1);


// interesting example
const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearPublished: 1960,
        genre: "Fiction",
        isbn: "978-0-06-112008-4"
    },
    {
        title: "1984",
        author: "George Orwell",
        yearPublished: 1949,
        genre: "Dystopian",
        isbn: "978-0-452-28423-4"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        yearPublished: 1925,
        genre: "Novel",
        isbn: "978-0-7432-7356-5"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        yearPublished: 1951,
        genre: "Novel",
        isbn: "978-0-316-76948-0"
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        yearPublished: 1851,
        genre: "Adventure",
        isbn: "978-0-14-243724-7"
    }
];

// let userBooks = books.filter((bk)=> bk.genre==="Adventure" )
// console.log(userBooks);

// let userBooks = books.filter((bk)=> {
//     return bk.yearPublished >= 1951; 
// });
// console.log(userBooks);

let userBooks = books.filter((bk)=>{
    return bk.title ==="1984";

});
console.log(userBooks)
