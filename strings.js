let s1='nbujb';
let s2="nklonl";
let s3=`mkljs`;

console.log(s1,s2,s3);

let fname="Snehal";
let lname="Bhogawade";
let age=23;
let fullname=`My name is : ${fname} ${lname},My age is ${age}`;    //template literal.
console.log(fullname);



let s4="My name is Snehal.\
I am from Shirur.\
I love to travel,cooking."
let keyword="Shirur";
let replaceWord="Pune";

console.log(s4.search(keyword));
console.log(s4.replace(keyword,replaceWord));