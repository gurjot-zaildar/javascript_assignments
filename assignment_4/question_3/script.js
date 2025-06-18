/*Write a function that uses closures to create a counter.*/

function outer(){
    let counter = 0;
    return function(){
    counter++;
    console.log(counter);
    }
}
let ans = outer();
ans();
ans();
ans();