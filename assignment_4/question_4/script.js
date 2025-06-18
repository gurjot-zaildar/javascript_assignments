/* Implement a function that limits how many times another function can be called (Closure + HOF).
*/

function abcd (fn,limit){
    let total = 0;
   return function(){
        if(total < limit){
            total++;
            fn();
        }else{
            console.log("limit reached");
        }
    }
}
let ans = abcd(function(){
    console.log("hello")
},2);

ans()
ans()
ans()