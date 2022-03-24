//USING IF ELSE CONDITION
const age=30;

if(age<30)
{
    console.log("Adult");
}
else
{
    console.log("OLD");
}


// USING TERNARY OPERATOR

console.log(age>30?"Adult":"OLD");


// ELSE IF LADDER

const ageofperson=28;

if(ageofperson<15)
{
    console.log("Young");
}

else if(ageofperson>15&&ageofperson<30)
{
    console.log("Adult");
}

else{
    console.log("OLD");
}


// SWITCH CASE

let day = 3;
let dayName;

switch (day) {
  case 0:
    dayName = 'Monday';
    break;
 
    
  case 1:
    dayName = 'Tuesday';
    break;
  case 2:
    dayName = 'Wednesday';
    break;
  case 3:
    dayName = 'Thursday';
    break;
  case 4:
    dayName = 'Friday';
    break;
  case 5:
    dayName = 'Saturday';
    break;
    case 6:
        dayName = 'Sunday';
        break;
        

  default:
    dayName = 'Invalid day';
}

console.log(dayName);


//FOR LOOP TO PRINT 13 TABLE


for(var i=1;i<11;i++)
{
    console.log("13","*",i,"=",13*i);
}