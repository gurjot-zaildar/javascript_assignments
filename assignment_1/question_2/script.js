/*  Even or Odd Sum – Take two numbers from the user using 
prompt(). If the sum of both numbers is even, print “Even Sum”; 
otherwise, print “Odd Sum. */

var num1 = +prompt("enter 1st number");
var num2 =  +prompt("enter 2st number");
var num3= num1+num2;
if(num3 %2 == 0){
    console.log("even sum");
}else{
    console.log("odd sum")
}