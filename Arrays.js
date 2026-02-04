let arr=[10,20,30,40];
let arr1=[50,60];

console.log(typeof(arr)); //type of array - Object

arr.push(arr1); //add arr1 as a nested array in arr
console.log(arr);

arr=arr.concat(arr1); // concatination of 1 array to another
console.log(arr); //arr=[ 10, 20, 30, 40, 50, 60 ]

console.log(arr);
console.log(arr.slice(1,3));
console.log(arr.splice(1,3));
console.log(arr);

arr = [...arr, ...arr1]; //method 2 of concatination
console.log(arr);



let ar=["Rohit", 10,30,"Nimit"];

ar.pop();
console.log(ar);

ar.push("Nimit");
console.log(ar);

ar.unshift("Satyam");
console.log(ar);

ar.shift();
console.log(ar);



//Iterating in Arrays
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for(let num of arr){
    console.log(num);
}



console.log(arr);
console.log(arr.splice(1,3,"Nimit",99));
console.log(arr);



let ar1=[10,20,30,40,[50,60,[70,80],70],50,60];

let ar2=ar1.flat();
let ar3=ar1.flat(Infinity);

console.log(ar2);
console.log(ar3);

const sort=(a,b)=>a-b;
console.log(ar3.sort());


let arr5 = [10, 20, 30];
let arr2 = [...arr5];
console.log(arr2); // [10, 20, 30]

let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]

let arrr = [20, 30];
let newArr = [10, ...arrr, 40];
console.log(newArr); // [10, 20, 30, 40]




