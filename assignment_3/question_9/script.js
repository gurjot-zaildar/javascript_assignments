/* Reverse an array without using .reverse() */

let arr = [1,2,3,4,5,6,7,8,9];
var rev=[];
    
for(let i = arr.length-1; i>=0;i--){
        rev.push(arr[i])
}

console.log(rev);