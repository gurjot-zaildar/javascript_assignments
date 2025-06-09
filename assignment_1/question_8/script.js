/* User Greeting – Ask for the user's name and time (24-hour 
format). Greet them accordingly:
 5 AM–12 PM: "Good Morning, [Name]!"
 12 PM–5 PM: "Good Afternoon, [Name]!"
 5 PM–9 PM: "Good Evening, [Name]!"
 9 PM–5 AM: "Good Night, [Name]!" */

 var name = prompt("enter your name");
 var time = +prompt("enter time in 24 hours formait");
 if(time>=5 && time<12){
    console.log("good morning " + name ) ;
 }else if(time>=12&& time<17){
    console.log("good afternoon " + name);
 }else if(time>=17&& time<21){
    console.log("good evening " + name );
}else if(time>=21&& time<=24){
    console.log("good night " + name );
}else if(time>=1&& time<5){
    console.log("good night " + name );}
 else{
    console.log("wrong input" + name );
 }