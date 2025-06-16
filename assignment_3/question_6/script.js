/* Remove duplicate values from an array. */

let arr = [1,2,4,6,3,4,1,2,3,3,3,4,1,1,5,5,5];
let ans = [...new Set(arr)];
console.log(ans)