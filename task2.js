/**
 * Created by william.eyre on 04/10/2016.
 */
var e1 =document.getElementById("button");
e1.addEventListener("click", myfirst, false);

function myfirst()
{
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    var number3 = parseInt(document.getElementById("number3").value);
    var sum = (number1 + number2 + number3);
    var output = document.getElementById("output");
    output.innerHTML = sum;
}
