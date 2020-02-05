// var today = new Date();
// var hourNow = today.getHours();
// var greeting; 
 

function creategreeting(hourNow)
{
        console.log(hourNow);
        var greeting = 'Something went wrong!';  
if (hourNow >= 18 && hourNow <23)
{
        greeting = 'Good evening, Class!';
       }
        else if (hourNow >= 12 && hourNow > 18) 
       {
        greeting = 'Good afternoon, Class!';
        }
        else if (hourNow >= 0 && hourNow < 12) 
        {
        greeting = 'Good morning!'; 
        } 
       return greeting
} 
var hourNow2 = prompt(" what the time now ?");
 document.write('<h3>'+creategreeting(hourNow2)+'</h3>');