/*  Simple Login System – Set a predefined username and 
password. Ask the user to enter their credentials using 
prompt(). If correct, print “Login Successful”; otherwise, print 
“Incorrect username or password.” */

var username= "gurjot";
var password= "zaildar123"

var user= prompt("enter your username")
var pass= prompt("enter your password")
if(user==username && pass==password){
    console.log("login successful")
}else{
    console.log("incorrect username or password")
}