let arr=[10,20,30,40,50,{name:"Snehal"},BigInt(897654)];

console.log(arr);


let players=[
    {name:"Kohli",score:100},
    {name:"Sharma",score:80},
    {name:"Dhavan",score:60},
    {name:"Yadav",score:70},
    {name:"Pant",score:40},
];

players.push({name:"Hardik",score:75})  //insert new element at the end.
players.pop();  //deletes the element present at last.
console.log(players);

players.unshift({name:"Dhoni",score:120});   //insert element at beginning.
console.log(players);

players.shift();
console.log(players);


let slicedArr=players.slice(3);   //slice will take 2 args starting index and ending index (excludes the last index)
console.log(slicedArr);

// players.splice(1,2,{name:"Bumra",wickets:3});  //splice will take 3 args starting index,deletion count,add new elements.
// console.log(players);


//some and every   ---> some-> any one value should be true;  every-> needs all value to be true based on condition.

let info=players.every(function(obj){
    if(obj.score>90){
        return true;
    }else{
        return false;
    }
})
console.log(info);

//find
let info1=players.find(function(obj){
    return obj.score===100;
})
console.log(info1);


players.sort(function(obj1,obj2){
    return obj1.score-obj2.score;
})
console.log(players);

delete players[2];
console.log(players);