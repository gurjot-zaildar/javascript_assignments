/* Character Case Checker – Ask the user for a single character. 
Check if it's uppercase, lowercase, or neither (not a letter). */


var char=prompt("enter any single character");
if(char.length == 1 && char <= 'Z' && char >= 'A' ){
    console.log("uppercase");
}else if(char.length == 1 && char <='z' && char >='a' ){
     console.log("lowercase");
}
else{
    console.log("not a letter/write single character");
}