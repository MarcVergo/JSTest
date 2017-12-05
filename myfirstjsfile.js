
document.writeln("<br/><b>Hello World via an external JS file! v5</b><br/>");





//declare variables to do some math
var a = 5;            // global variable without a keyword, so avoid this, hard to debug
var b = 1;
var result = a - b;
document.writeln(result + "<br/>");
console.log(result);


// concatenate two strings
let mytext1 = "I like Spanish";
let mytext2 = " because the melody is nice.";
document.writeln(mytext1 + mytext2 + "<br/>");



document.writeln("<br/>check out the console log<br/>")
let myArray = ["Android", true, 7]
//can use alert or console.log
console.log(myArray[0]);
console.log(myArray.length);
myArray.pop();
console.log(myArray);
myArray.push("Eclipse")
console.log(myArray);


/*Iterate over the array and write it to the console of the browser*/
for(let i = 0; i < myArray.length; i++) { console.log(myArray[i]) }







