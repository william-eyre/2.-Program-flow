/**
 * Created by william.eyre on 04/10/2016.
 */
var e1 = document.getElementById("button");
e1.addEventListener("click", myFirst, false);

function myFirst()
{
var userInput =document.getElementById("message-box").value;
    document.getElementById("reply");
    console.log("debug");
    window.alert(userInput);
}
