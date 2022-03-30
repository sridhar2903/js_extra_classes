//OBJECT DESTRUCTURING

let obj=
{
    name:"sridhar",
    age:21
}

let {name:username,age:userage}=obj;

console.log(username);
console.log(userage);



//CREATING MULTIPLE OBJECTS USING CONSTRUCTOR FUNCTION


function employee (empname,empage)
{
this.empname=empname;
this.empage=empage;
}


let empone=new employee("sridhar",21);

let emptwo=new employee("madhav",26);

console.log(empone);
console.log(emptwo);
