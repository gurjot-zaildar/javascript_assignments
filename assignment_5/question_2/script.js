/* Implement a function that returns a function with a preset greeting (Closure). */

function greet(greeting){
    return function(name){
console.log(`${greeting} ${name}`)
    }
}
let indiangreet = greet("hello!");
indiangreet("gurjot");

let frenchgreet = greet("bonjour!");
frenchgreet("gurjot");