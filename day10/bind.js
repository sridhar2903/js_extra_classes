let obj={
    name:"sridhar",
    age:21
}


function printdata(weight,height)
{
    console.log(this.name,this.age,height,weight);
}


printdata.call(obj,50,160);
printdata.apply(obj,[60,160]);

let newprintdata=printdata.bind(obj)

newprintdata(70,170);


//PROTOTYPE

