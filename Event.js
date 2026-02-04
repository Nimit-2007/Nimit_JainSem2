parent=document.querySelector("#father");

//whenever it is clicked it e.target access its #father all children, and applies to whosoever is clicked
// parent.addEventListener('click',(e)=>{
//     console.log(e.target);
//     e.target.textContent="I am clicked";
// })

//IF only want to run 1 time and apply to only one time to whosoever is clicked

function handleclick(e){
    e.target.textContent="I am clicked";
    parent.removeEventListener('click',handleclick);
}
parent.addEventListener('click',handleclick);