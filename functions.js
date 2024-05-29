function addtocart(product){
    console.log(`product ${product} is added to the cart.`);
}
addtocart("OnePlus");
addtocart("Active Wear");
addtocart("Tooth Floss");


//Anonymous function.

let add=function(){
    console.log(23+7);
}
add();

//Higher Order Function -> function that takes a function as an argument or returns a new function

//passing a function as an argument.
function getCapture(capture){
    capture();
}
getCapture(function(){
    console.log("I am captured");
})


//returning a function as a value

function returnFunction(){
    return function(){
        console.log("Returning function from function.");
    }
}

let rf=returnFunction();
rf();

function calculate(operation,initialvalue,numbers){
    let total=initialvalue;
    for(const number of numbers){
        total=operation(total,number);
    }
    return total;
}

function sum(n1,n2){
    return n1+n2;
}

function multiply(n1,n2){
    return n1*n2;
}

let sum1=calculate(sum,0,[1,2,3,4,5]);
console.log(sum1);
let mul=calculate(multiply,5,[1,2,3,4,5]);
console.log(mul);

//arrow function

let hello=()=>{
    console.log("Hello!!!");
}
hello();

let sum2=(a,b)=>a+b

let res=sum2(10,20);
console.log(res);


//IIFE- Immediately Invoked Function Expression  ->No need to call function explicitly.

// (function sub(){
//     console.log(10-5);
// }())

(()=>{
    console.log(5+5);
})()

var a=20;

(function(a){
    a=50;                         //o/p-> 50 20.
    console.log(a);
}(a))
console.log(a);



//Execution Context -> function EC & Global EC
//Both are divided into 2 parts memory phase and execution phase

var l=5;
var w=4;

function calcArea(len,wid){
    var area=len*wid;
    return area;
}
var rectangle=calcArea(l,w);
console.log(rectangle);

//whenever code is starting execution firstly global execution context is generated in which 
//memory created for l ,w,calcarea,rectangle having undefine values after that 
//code execution phase started and values are assigned as soon as function is invoked the function Expression context generated.
//and again memory created and code execution phase generated.  i.e. length,width,area ->undefined