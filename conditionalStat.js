let val=prompt("Enter a number: ");
val=Number(val);
let num=100;
let message="nothing";
if(val>num){
   message=`${val} is greater than ${num}`;
}else if(val<num){
    message=`${val} is less than ${num}`;
}else{
    message=`${val} is equal to ${num}`;
}
document.getElementById('message').innerHTML=message;