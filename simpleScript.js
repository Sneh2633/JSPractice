//singleline comment- //      multiline cmt-  /*   */     semicolon afer ending is not mandatory. 
//console.log("Hello World!!","Snehal bhogawade",21,"BE CSE");


// let a=10;
// a=20.5
// var b=20   
// b="Snehal"
// const c=30   //once initialized we can't modify value.
// //c=40

// console.log(a,b,c)

//There are 7 primitive datatypes in the js.
/*
let a=50    //number
let b="Snehal"  //string
let c=true  //boolean
let d=undefined  //undefined
let e=null   //object
let f=BigInt(345321895759798)
let g=Symbol("~")

console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof g);

//non-primitive datatype - object.

const person={
    firstname:"Snehal",
    lastname:"Bhogawade",
    age:23,
    isMarried:false
}

console.log(person);
//we can access specific property using . operator
console.log(person.isMarried)
//update the existing object
person.age=20;
//adding extra object
person.company=null;
console.log(person)
*/


//operators
let p=3+5;
let q=5+"s"+5;
let x=5-"s";

let r=3**3;
r**=3;
console.log(p,q,r,x)


console.log(3=="3");  // true  internally does the implicit conversion basically compares the values
console.log(3==="3");  //false checks value as well as data type.


