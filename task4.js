/**
 * Created by william.eyre on 04/10/2016.
 */
var loop1 = document.getElementById("loop1");

for(var i = 1; i <= 50; i++) //this creates the variable, and initialises it to go
//to a set value, the last section is telling it to add 1 every time.
{
    loop1.innerHTML += i;
    if(i <50){
        loop1.innerHTML += ","; // this section adds the commas between each
    }
}
