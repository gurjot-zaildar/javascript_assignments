/*  Sum of Digits – Take a number from the user and print the sum 
of its digits. (Example: 123 → 1+2+3 = 6). */


var num1= +prompt("enter any number")
var count=0;
for(var i=0;i<=num1;i++){
    count=i+count
}
console.log(count)