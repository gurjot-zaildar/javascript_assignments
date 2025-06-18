/* Implement a function that throttles another function (HOF + Closures). */

function abcd(fn,time){
let lc=0;
return function(){
    let c = Date.now();
 if(c-lc>=time){
    lc = c;
    fn();
 }
}
}
let ans = abcd(function(){
    console.log("mai 6sec k baad hi chalu ga")
},6000);