/*  11. Grade Calculator – Ask the user for their marks (0-100). 
Assign grades based on the range:
 90-100: A
 80-89: B
 70-79: C
 60-69: D
 Below 60: F */
 var num1= +prompt("enter your marks");
 if(num1>=90&&num1<=100){
    console.log("A")
 }else if(num1>=80&&num1<=89){
    console.log("B")
 }else if(num1>=70&&num1<=79){
    console.log("C")
 }else if(num1>=60&&num1<=69){
    console.log("D")
 }else if(num1<60){
    console.log("F")
 }else{
    console.log("wrong input")
 }