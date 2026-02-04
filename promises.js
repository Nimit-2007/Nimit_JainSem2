const p1=fetch("https://api.github.com/users");

const p2=p1.then((response)=>{  //promise is made that no matter what the result will be I will return
    return response.json();     //it can be rejected or will return data in byte form
})
p1.then((data)=>{
    console.log(data);      //if found data, will return data in object form
})

// in simple wor ds we can re write it as

fetch("https://api.github.com/usrs")
.then((response)=>{
    if(!response.ok){ //response.ok means that is the data actually the data you wanted ?
        throw new Error("The code is containing some error"); //if it is false it will throw and error of your choice, and it will be later catch by .catch
    }
    return response.json();
})
.then((data)=>{
    //console.log(data);
    const parent=document.getElementById("first");
    for(let i=0;i<data.length;i++){
        const img=document.createElement('img');
        img.src=data[i].avatar_url;
        img.style.height="100px";
        parent.append(img);
    } 
})
//JSON is common language or data language, that every other language can understand
//like python c++ cant understand undefined of javascript so every file is converted in common language that is json, which automatically
//converts data in that language

//Reject condition - Internet down, server down, DNS down - server se baat hi nhi kar paya

//if by any chance your link is not valid or anything happens the data will still be returned, 
.catch((error)=>{
    const parent=document.getElementById("first");
    parent.textContent=error.message; //this is the way to get the error ,essage you are getting
});