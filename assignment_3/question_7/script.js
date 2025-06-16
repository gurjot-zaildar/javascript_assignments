/* Find the second largest number in an array. */

let arr = [3,6,3,76,8,32,4,6,68,97,56,32,3,3,56,56,1,1,34,34,];
let uniq = [... new Set(arr)];
let dec = uniq.sort(function(a,b){
    return b-a;
})
console.log(dec[1]);