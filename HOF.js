let numbers=[1,2,3,4,5,6,7,8,9,10]
numbers.forEach((number)=>{
    console.log(number);
})


let products=[
    {id:1,name:"Product 1",price:99},
    {id:2,name:"Product 2",price:199},
    {id:3,name:"Product 3",price:939},
    {id:4,name:"Product 4",price:599},
    {id:5,name:"Product 5",price:899}
]

products.forEach((product)=>{
    console.log(`Product id:- ${product.id}`);
    console.log(`Product name:- ${product.name}`);
    console.log(`Product price:- ${product.price}`);
})


//difference between foreach and map-> map returns a array(creates new array) will not affect original array.
products.map((product)=>{
    console.log(`Product id:- ${product.id}`);
    console.log(`Product name:- ${product.name}`);
    console.log(`Product price:- ${product.price}`);
})

//filter-. returns new array 
let filteredprods=products.filter((product)=>{
    return product.price >500;
})
console.log(filteredprods);


//reduce->give ans insingle value

let cartTotal=products.reduce((total,product)=>{
    return total+product.price;
},0);

console.log(cartTotal);

//some,every.
