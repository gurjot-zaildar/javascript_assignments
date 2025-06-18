/* Create a function that takes a callback and executes it after every `n` seconds indefinitely. */

function abcd(fn,time){ 
setInterval(fn,time)
}
abcd(function(){
    console.log("I LOVE YOU");
    },1500);