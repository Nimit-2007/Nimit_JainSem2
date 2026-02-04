//this: class object method
//'use strict'

//global: In window(browser) it is called window but in node js it is called global
//globalThis points to global object environment
console.log(global);
console.log(globalThis);

//learning about this keyword

console.log(this)
//this keyword points to global scope: NodeJS(Empty Object), in browser it will point to global object
//{} -> returns this 

//Function

const user={
    name: "Nimit",
    age: 18,
    greet: function(){
        console.log(`HI ${this.name}`);
    }
}
//this will point towards user-it will see who inkoved greet function
//in this case user invoked the greet function so this will point towards user object
// this == user
user.greet();



//Example of hard Code, this is where THIS works out
const user1={
    name: "Nimit",
    age: 18,
    greet: function(){
        console.log(`HI ${this.name}`);
        // console.log(user1.name);
    }
}
const user2={
    name: "Mohit"
}
user2.greet=user1.greet;
user2.greet();


//3. now what if we have to use the greet function in 100 objects..?

function greet(){
    console.log(`hi ${this.name}`);
}
const user3={
    name: "Nimit",
    age:18 
}
const user4={
    name: "Arjit",
    age:19
}
greet(); //this will return undefined as this will not able to find name keyword in global object


//this became a global bug
function greet3(){
    console.log(this);
}
greet3();   // it will point out to global object and will return global data

 