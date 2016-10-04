/**
 * Created by william.eyre on 04/10/2016.
 */
var var1 = 5;
//this variable is a global function that is available to the whole script
document.getElementById("sum").innerHTML =var1;
//this documentElement object is looking back at the HTML script to find
//the name of the paragraph space.
myfunction();//this is the name of the function
function myfunction () { //This function runs the function inside the curly brackets
    var1 = 10; //this variable will only be available in this function.
    document.getElementById("sum2").innerHTML=var1;
}
//this shows putting two variables with the same name,
// one global and the other local to a function


