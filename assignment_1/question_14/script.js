/*  FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a 
multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if 
only 5, print “Buzz”; otherwise, print the number itself */


var num1= +prompt("enter any number")

if(num1 %3==0 && num1 % 5==0){
    console.log("fizzbuzz")
}else if(num1 % 3==0 ){
    console.log("fizz")
}else if(num1 % 5==0 ){
    console.log("buzz")
}else{
    console.log(num1)
}