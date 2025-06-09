/* Even Digit Counter – Take a number from the user and count 
how many even digits it has */

var num = +prompt("enter any number")
var even=0;
while(num>0){
    var digit= num%10;1
    if(digit%2 ==0){
        even++;
    }
    num=Math.floor(num/10);
}
console.log(even)