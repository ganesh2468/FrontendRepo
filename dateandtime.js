// Write a JavaScript program to display the current day and time in the following format.
// Today is : Thursday.
// Current time is : 4 PM : 00 : 00
var currentdate=new Date();
var date=currentdate.getDay();
switch(date){
    case 0:
        console.log("Today is :Sunday");
        break;
    case 1:
        console.log("Today is :Monday");
        break;
    case 2:
        console.log("Today is :Tuesday");
        break;
    case 3:
        console.log("Today is :Wednesday");
        break;
    case 4:
        console.log("Today is :Thrusday");
        break;
    case 5:
        console.log("Today is :Friday");
        break;
    case 6:
        console.log("Today is :Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}
console.log(currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds()+" "+"PM");
console.log(currentdate.toLocaleTimeString());