//REVERSING A STRING

let s="sridhar"


let a=s.split("");
let b=a.reverse();
let c=b.join("");
console.log(c);


//REMOVE THE DUPLICATE ARRAY ELEMENTS
let arr=[1,2,3,1,1,1,2,2,3,3,3,3];

let aa=new Set(arr);
let bb= [...aa]
console.log(bb);


//REMOVE THE DUPLICATE STRING CHARACTERS
let ss="iiiiii"
let cc=new Set(ss);
let d=[...cc]
let e=d.join("");
console.log(e);