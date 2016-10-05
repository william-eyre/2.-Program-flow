/**
 * Created by william.eyre on 05/10/2016.
 */
    var outerloop = "";


    for (var i = 1; i <= 10; i++) {

        outerloop += "outerloop" + i + "<br/>";


        for (var j = 1; j <= 10; j++) {

            outerloop += "&nbsp;&nbsp;innerloop" + j + "<br/>";

        }
    }

    document.getElementById("nest").innerHTML = outerloop;
