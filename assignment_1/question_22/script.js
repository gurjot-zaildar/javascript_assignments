/* Nested Condition Challenge – Ask the user for their age and 
salary. Print a message based on conditions:
 If age is below 18, print “Not eligible”
 If age is 18 or more but salary is less than ₹20,000, print “Low        
Salary”
 If salary is ₹50,000 or more, print “High Salary”
 .  Otherwise, print “Medium Salary” */


var age=+prompt("enter your age")
var salary=+prompt("enter your salary")
if(age<18){
    console.log("not eligible")
}else if ((age>=18) && (salary<20000)){
     console.log("low salary")
}else if  (salary>=50000){
     console.log("high salary")
}else{
    console.log("medium salary")
}