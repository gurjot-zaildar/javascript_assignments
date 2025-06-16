/*  Sort an array in descending order. */

let arr = [2,4,6,8,9,7,5,3,1]
let dec = arr.sort(function(a,b){
    return b-a;
})
console.log(dec);