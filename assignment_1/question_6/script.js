/*  Simple Calculator – Ask the user for two numbers and an 
operator (+, -, *, /). Perform the operation and display the result */

var num1= +prompt("enter 1st number");
var num2= +prompt("enter 2nd number");
var num3= +prompt("choose any symbol \n 1 = + \n 2 = - \n 3 = * \n 4 = /");
if(num3==1){
    console.log(num1+num2);
}else if(num3==2){
    console.log(num1-num2);
}else if(num3==3){
    console.log(num1*num2);
}else if(num==3){
    console.log(num1/num2);
}else{
    console.log(" enter valid number ");
}