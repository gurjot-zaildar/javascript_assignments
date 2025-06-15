/* Create an array of 5 numbers and log the sum using .reduce(). */

let arr = [1,2,3,4,5];
let ans = arr.reduce(function(acc,value){
   return acc + value;
},0); 

console.log(ans);