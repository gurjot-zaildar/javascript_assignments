/*  Check if "JavaScript" contains "Script" without using .includes(). */

let a = ("javascript");
console.log(a.search("script") !== -1);
console.log(a.indexOf("script") !== -1);
