//const myName; ->we need to initialize the value whenever using const. ->It cannot be redeclared.
/*
myName="Snehal Bhogawade";
if(true){
   const myName="Tester";
    console.log(myName);
}
*/
//alert(myName);
let myName=prompt("What is your name?");
let msg='Welcome to the page, ';
let output= msg + myName;
document.write(output);
console.log(output);
//document.write(myName);
document.getElementById('message').innerHTML=myName;
//whatever value we pass in the innerhtml will assign that value to the id which named message.
console.log(myName);