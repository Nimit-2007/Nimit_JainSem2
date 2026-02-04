console.log("Hello world"); //this will be printed first
setTimeout(()=>{
    console.log("Hi I should be second to be printed"); // this will be printed at last as it will be printed after5 seconds
},5000);
console.log("I am third one to be printed"); //this will be printed second