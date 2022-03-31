let arr=[10,20,30,40,50];

let add=arr.map((x)=>x+10);
console.log(add);


arr.forEach((x)=>console.log(x+10))



//

let arrtwo=[10,20,30,40,50,60,70,80,90,100];
let count=0;
let arrthree=[];

for(var i=0;i<arrtwo.length;i++)
{
    if(arrtwo[i]<60)
    {
        count++
        arrthree.push(arrtwo[i]);
    }
}

console.log(count);
console.log(arrthree);


//



let arrsum=[10,20,30];


let sum=arrsum.reduce((x,s)=>s=s+x,0);

console.log(sum);


//


let s="Peter is a good guy, Peter is from england";


let replace=s.replaceAll("Peter","John")
console.log(replace);



//
let stringrev=" Hello this is me";

let rev=stringrev.split(" ");

let arev=rev.reverse();

let joinrev=arev.join(" ");

console.log(joinrev);

//


let userobj={
    name:"sridhar",
    age:21,
    salary:"5LPA"
}

console.log(Object.keys(userobj));
console.log((Object.values(userobj)));


//

function createobject(place,country)
{
    this.place=place
    this.country=country
}


let personone= new createobject("hyderabad","INDIA");
let persontwo=new createobject("new york","USA");

console.log(personone);
console.log(persontwo);



const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

console.log(person);