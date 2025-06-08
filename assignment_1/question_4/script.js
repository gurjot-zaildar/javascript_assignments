/* Largest of Three Numbers – Take three numbers as input and 
print the largest number among them without using 
Math.max(). */



var num1 = +prompt("enter 1st number");
var num2 = +prompt("enter 2st number");
var num3 = +prompt("enter 3st number");
if(num1>num2&&num1>num2){
    console.log("1st number is largest");
}
else if(num2>num1&&num2>num3){
     console.log("2nd number is largest");
}else{
     console.log("3rd number is largest");
}