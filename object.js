let student={
name:"Snehal",
Rollno: 1,
Age:23,
getDetails: function(){
    console.log("Details");
},
arr: ["Rupa,2,24"],
address:{
    houseno:101,
    area:"Chinchwad",
    landmark:"Near Chandukaka Saraf",
    pincode:411033,
    guardian:{
        name:"Kanchan",
        area:"chinchwad",
        contact:9087654325
    }
}
};

//console.log(student);
// console.log(student.getDetails());
// console.log(student.arr);

// for(let key in student){
//     console.log(key +":"+ student[key]);
// }

console.log(student.address);
