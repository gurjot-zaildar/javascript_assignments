/* Create a function that takes another function as an argument 
and calls it after 3 seconds (HOF + Callback). */

function abcd(fn){
setTimeout(fn,3000);
}
abcd (function(){
    console.log("hello");
})