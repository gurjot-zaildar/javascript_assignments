/* Implement a function that takes a callback and only executes it once (HOF + Closure). */

function abcd(fn){
    let render = false;
return function(){
    if(!render){
        render = true;
        fn();
    }else{
        console.error("mai nahi chalu ga");
        
    }

}
}

let ans = abcd(function(){
    console.log("mai sirf ik barr hi chalu ga.")
});
ans();
ans();