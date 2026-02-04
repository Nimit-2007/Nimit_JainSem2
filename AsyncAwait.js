async function str() {
    return new Promise((resolve, reject) => {
        reject("Rohit");
    })
}
const p = str();
p.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("Error: ", error); //will print Error: Rohit
})

fetch("https://api.github.com/users")
    .then((response) => { return response.json() })
    .then((data) => console.log(data))
    .catch((error) => { console.log(error) }) //this is complex to write but will definately give the answer

const response = fetch("https://api.github.com/users");
const data = response.json();
console.log(data);  //this is easier to write but will give an error because javascript never waits for someone

//most comfortable solution for this

const response2 = await fetch("https://api.github.com/users");
const data2 = await response2.json();
console.log(data2); //now easier to write and js will also wait till each line is executed
//it will freeze till this whole will work
console.log("Hello ji"); //this will wait till the upper function is executed fully 

// Now comes the best solution - async await

async function github() {
    console.log("function is running") //1. this will be returned first 
    const response2 = await fetch("https://api.github.com/users");
    const data2 = await response2.json();
    console.log(data2); //this will be returned at last async will execute the next available task first
}
github();
console.log("Hello I should return at last"); //this will be executed second.


async function comment(){
    const photo=await fetch("photo");
    const calllog=await fetch("calllog");
    const camera=await fetch("camera");
    
    //now all these all these will take time as 1 by 1 tasks will be performed and what if we want all the three tgether..?
    // here we can use Promise all

    const [photos,calllogs,cameras]=await Promise.all([fetch("photo"),fetch("calllog").fetch("camera")]);

    //this will help use print all the three tasks in parallel
}