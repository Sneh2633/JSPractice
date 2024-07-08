let val=100;
let msg=(val>100)?`${val} is greater.`:`${val} is smaller.`;
document.getElementById('message').innerHTML=msg;

let check= (val%2==0)?"Even":"Odd";
document.write(`${val} is ${check}`);