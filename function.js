// function greet(){
//     console.log("Hello there! Nimit this side");
// }
// greet();

// function sum1(a,b){
//     console.log(a+b);
// }
// sum1(5,95);

// const sum=(a,b)=>{
//     console.log(a+b);
//     return;
// }
// sum(7,6);
// sum();
// sum(null);
// sum(6,8,7);

// const sum3=(a=0,b=0)=>{
//     console.log(a+b);
//     return;
// }
// sum3();

// const sum2=()=>{
//     console.log("Fuck you bitch");
//     return 45;
// }
// sum2();

//rest operator - when u dont know how much input you have to give to the function

function addnum(...num){ // this will create an array 
    let sum=0;
    for(n of num){
        sum+=n;
    }
    console.log(sum);
}
addnum(1,5,6,8,4,35,6,7);

//call back function

// function meet(){
//     console.log("I want to met someone special");
// }
// function start(hello){
//     hello();

// }
// function end(){
//     console.log("Nice to meet you");
// }
// start(meet);
// start(end)


//we dont prefer this because we dont know which function we will need to call in that function so, we can directly write the name of the function and add it will automatically be there in that function
function meet(){
    console.log("I want to met someone special");
}
function start(){
    meet();
    end();

}
function end(){
    console.log("Nice to meet you");
}
start();

//Real world use case of call back function

//Blink it merged

function blinkitorderplace(){
    console.log("we have started your order preparation");
}

function zomatoorderplace(){
    console.log("we have started preparing your food");
}

// function payment(amount){
//     console.log(`${amount} recieved, payment successfull`);
//     zomatoorderplace();

//     //more code and all
//     //GST
//     //rider amount
//     //company's payment
// }
// payment(500);

function paymentCallback(amount, calling){
    console.log(`${amount} recieved, payment successfull`);
    calling();
    //more code and all
    //GST
    //rider amount
    //company's payment
}
paymentCallback(500,blinkitorderplace);
paymentCallback(500,zomatoorderplace);
