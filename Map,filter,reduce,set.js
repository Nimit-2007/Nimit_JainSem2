// console.log("Map,filter,reduce,set");

//forEach,reducer,map,set

// const arr=[10,20,30,"Nimit",50];
// arr.forEach((num)=>{
//     console.log(num);
// }) 

// arr.forEach( (num)=>{console.log(num); })

// const arr1=[10,45,67,88,97];
// let sum=0;
// arr1.forEach((num)=>{
//     sum+=num;
// })
// console.log(sum); //307

//filter

// const arr2=[1,2,3,4,10,23,24,45,67,89];
// const newarr=arr2.filter((num)=>num>10); //if this condition is true it will select that value otherwise skip 
// console.log(newarr); //[ 23, 24, 45, 67, 89 ]

// const ar4=[10,20,3,40];
// const neww = ar4.map((num)=>num*2);
// console.log(neww); //[ 20, 40, 6, 80 ]


// const array=[10,10,10,4,4,4,4,6,7,6,7,8,7,8,9,8,9,9,0];
// const set=new Set(array);
// const ar5=[...set];

// ar5.sort((a,b)=>a-b);
// console.log(ar5);
// ar5.sort((a,b)=>b-a);
// console.log(ar5);

let set1= new Set();


set1.add(90);
set1.add(96);

console.log(set1.has(96)); //true or false, on conditon of 96 is there in set or not
set1.delete(96); //deleting from set
console.log(set1.size); //getting size of the set

console.log(set1); //printing set