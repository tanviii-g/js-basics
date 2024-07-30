// map 


const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((numbers)=>{
   // return numbers+10
   

   // chaining 
const newNums = myNumbers.map((numbers) => numbers * 10).map((numbers) => numbers+1 ).filter((numbers)=> numbers>=40)
console.log(newNums);


