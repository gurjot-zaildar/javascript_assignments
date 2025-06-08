/*  Leap Year Checker – Ask the user for a year and determine if 
it's a leap year or not */

var year= +prompt("enter any year");
if(year % 4 == 0){
    console.log("it is a leap year")
}else{
    console.log("it is not a leap year")
}