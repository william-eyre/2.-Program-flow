/**
 * Created by william.eyre on 05/10/2016.
 */
var number =""
var i = 1;

do {
    number += "<br>" + i;
    i++
}
while (i <=10);
document.getElementById("do").innerHTML = number;
