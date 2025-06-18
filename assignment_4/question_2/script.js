/* Implement your own version of `.map()` as a higher-order function. */

let arr = [1,2,3,4,5];
function tap(arr,fn){
    var newarr = [];
    for(var i=0;i<=arr.length-1;i++){
        newarr.push(fn(arr[i]));
    }
    return newarr;
}
var ans = tap(arr,function(value){
return value*2;
});                     
console.log(ans);