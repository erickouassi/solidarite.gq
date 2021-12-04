// close sidebar
closeSidebar();
function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
}

// Date
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
//document.getElementById("date").innerHTML = "Happy  " + day;
var d = new Date(); // Full current date and time
// var n = d.getFullYear() // Just the year (2021)
document.getElementById("update").innerHTML = d;
//document.getElementsByClassName("year").innerHTML = n;

// greetings
var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Bonjour';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Bon après-midi';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Bonsoir';

    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b> and bienvenue sur votre espace Solidarite';

// Display error message
        function showErrors() {
          document.getElementById('errors').style.display = "block";
       }