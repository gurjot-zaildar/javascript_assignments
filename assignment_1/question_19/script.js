 /* Find Second Largest – Take three numbers as input and find 
the second largest number (without using sort() or Math.max()) */

var num1= +prompt("enter 1st number")
var num2= +prompt("enter 2st number")
var num3= +prompt("enter 3st number")
if((num1>num2&&num1 < num3)|| (num1<num2&&num1>num3)){
    console.log("1 is secound largest")
}else if ((num2>num1&&num2 < num3)|| (num2<num1&&num2>num3)){
    console.log("2 is secound largest")
}else{
console.log("number 3 is 2nd largest")
}
