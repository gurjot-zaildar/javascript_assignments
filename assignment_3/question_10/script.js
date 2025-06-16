/* Find the most frequent element in an array. */

let arr =[2,4,6,3,2,5,8,9,6,4,2,7,0,4,3,6,8,3,6,8,6,5,3,2,1,3,3,5,7];
var obj ={};
arr.forEach(function(val){
    obj[val] === undefined ? obj[val] = 1 : obj[val]++
})