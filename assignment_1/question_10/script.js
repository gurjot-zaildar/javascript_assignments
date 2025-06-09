/* Multiplication Table – Ask the user for a number and print its 
multiplication table up to 10 */
 var num1 = +prompt("enter any number");
 for(var i=1;i<=10;i++){
    console.log(num1 +"x" +i + "=" +(num1*i));
 }