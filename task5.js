/**
 * Created by william.eyre on 05/10/2016.
 */
var dateTime = new Date ();
document.getElementById("dateTime").innerHTML = dateTime;
var day = dateTime.getDay(); //this function retrieves the day from the date created earlier
var dayAsString;
switch(day) {
    case 0:
        dayAsString = "Sunday";
        break;
    case 1:
        dayAsString = "Monday";
        break;
    case 2:
        dayAsString = "Tueday";
        break;
    case 3:
        dayAsString = "Wednesday";
        break;
    case 4:
        dayAsString = "Thursday";
        break;
    case 5:
        dayAsString = "Friday";
        break;
    case 6:
        dayAsString = "Saturday";
        break;
}
document.getElementById("day").innerHTML = dayAsString;


