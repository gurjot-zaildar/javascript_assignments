/* Reverse Without String Methods – Ask the user for a number 
and reverse it without using .split(), .reverse(), or .join(). */

var num = +prompt("enter any number")
var rev=0;
while(num>0){
    var digit= num%10;
    rev=rev*10+digit;
    num=Math.floor(num/10);
   
}
 console.log(rev)