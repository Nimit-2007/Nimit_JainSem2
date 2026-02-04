const user={
    name: 'Nimit',
    age: 18,
    URN: "E25B001846",
    "Ph no": 8447080185
}
console.log(user);

for(let keys in user){
    console.log(keys);
}

for(let keys in user){
    console.log(keys,":", user[keys]);
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const u1={
    name: 'Nimit Jain',
    age: 18,
    URN: "E25B001846",
    greeting : function(){
        console.log(`This is the URN no. ${u1.URN} of ${u1.name}`)
    }
}
console.log(u1.greeting());

const u1={
    name: 'Nimit Jain',
    age: 18,
    URN: "E25B001846",
    greeting : function(){
        console.log(`This is the URN no. ${this.URN} of ${this.name}`)
    }
}

const u2={
    name: 'Satyam Kumar',
    age: 18,
    URN: "E25B001878",  
}

u2.greeting=u1.greeting;
console.log(u2.greeting());

const user2=structuredClone(user); //cloing Exact object without copying referecence
user2.age=19;
console.log(user2);


const you={
    name: 'Nimit Jain',
    age: 18,
    college: {
        college1: "Vedam school of technology",
        college2: "Ajeenkya DY patil university"
    }
}
console.log(you);
console.log(you.college);
console.log(you.college.college1);

you.college.college1="VST, pune";
console.log(you);

const {name, age, college}=you;
console.log(name, age, college);


//Array is an object
let arr=[1,2,3,4,5];
{
    0:1,
    1:2,
    2:3,
    3:4,
    4:5
} // this is how array is stored as an object