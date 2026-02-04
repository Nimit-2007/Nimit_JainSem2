let s = " Learn JavaScript Functions Arrow IIFE "; 
// let s=prompt('Enter the string');
console.log(s.trim());
console.log(s.toUpperCase());
console.log(s.toLowerCase());
let word='JavaScript';
if(s.includes(word)){
    let d=s.indexOf(word);
    console.log(s.substring(d,word.length+d))
}
// console.log(s.substring(6,17));
// console.log(s.slice(6,17));
console.log(s.includes('functions'));
console.log(s.includes('arrows'));
console.log(s.includes('life'));
console.log(s.charAt(6));
console.log(s.at(6));
console.log(s.charCodeAt(0));
console.log(s.toLowerCase().includes('javascript'));
