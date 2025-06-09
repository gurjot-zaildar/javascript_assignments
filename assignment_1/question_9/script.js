/* Traffic Light System – Ask the user for a traffic light color (red, 
yellow, green). Print appropriate messages:
 Red: "Stop!"
 Yellow: "Get Ready!"
 Green: "Go! */

 var col = prompt("enter traffic light color \n 1 = red \n 2 = yellow \n 3 = green")
 if(col==1){
    console.log("stop")
 }else if(col==2){
    console.log("get ready")
 }else if(col==3){
    console.log("go")
 }else{
     console.log("wrong input")
 }