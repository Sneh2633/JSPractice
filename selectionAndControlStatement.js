//if else

let grocerySpending=1200;
if(grocerySpending>1000){
    let discount=0.10*grocerySpending;
    console.log("You got 10% discount and final payable amount is: ",grocerySpending-discount);
}else if(grocerySpending>500){
    let discount=0.05*grocerySpending;
    console.log("You got 5% discount and final payable amount is: ",grocerySpending-discount);
}else{
    console.log("NO discount!");
}

//switch statement

let shippingDay= "Expres";

switch(shippingDay){
    case 'Standard':
        console.log("your order will be delivered in 2-3 days");
        break;
    case 'Express':
        console.log("Your order will be delivered in 1-2 days");
        break;
    case 'One-Day':
        console.log("your order will be delivered within a day");
        break;
    default:
        console.log("Invalid shipping");
        break;
}


//loops

let items=[10,20,30,40,50];
let sum=0;

for(let i=0;i<items.length;i++){
    sum+=items[i];
}
console.log(sum);

//while loop

let arr=[5,10,15,20,25];
let j=0;
let sum1=0;
while(j<arr.length){
    sum1+=arr[j];
    j++;
}
console.log(sum1);

//functions

//function without parameter

function printName(){
    console.log("Snehal Bhogawade");
}
printName();

//function with parameter - we cant overload the funtion in js.
function printname(name){
    return name;
}
let ans=printname("Snehal Bhogawade");
console.log(ans);


//scoping -> Global ,block,function.

let a=10;   //global scope

function scope(){
    let b=20;    //block or funtion scope.
    console.log(a);
    console.log(b);
}
scope();
// console.log(b);  -------> gives error b is not define as it have the function scope.


//lexical scope  ---> chaining of function.

var q=30;
function outer(){
    q=20;
    function inner(){
        var r=10;
        console.log(q,r);              //inner->outer
    }
    inner();
}

outer();
console.log(q);   //updated value.