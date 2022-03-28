// CLOSURES

function outerfunc()
{
    var a=10;
    function innerfunc()
    {
        console.log(a);
    }

    innerfunc();
}

outerfunc();




//FIRST CLASS FUNCTIONS OR CALL BACK FUNCTIONS ARE SIMILAR 
//The function which are passed as an argument to another function
//In case of callback functions ,it is used to handle asynchronous tasks.


//HIGHER ORDER FUNCTIONS are those functions which will have other function as parameter.


function higherorder(firstclass)
{
    firstclass();
    
}


higherorder(firstclass);

function firstclass()
{
console.log("Hello World");
}
 
