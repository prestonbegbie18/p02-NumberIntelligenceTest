var corrects = 0;
var fails = 0;
function validateT1Answer()
{
  var t1 = document.getElementById("t1Answer").value;
  if (t1 != 1332318918)
  {
    document.getElementById("T1AnswerError").innerHTML="Try again!";
    document.getElementById("T1AnswerError").classList.remove("hidden-message");
    document.getElementById("T1AnswerError").classList.add("shown-message");
    document.getElementById("T1Group").classList.remove("has-success");
    document.getElementById("T1Group").classList.add("has-error");
    fails ++;
    console.log(fails +" wrong.");
    console.log("The answer wasn't correct and this part of the if statement works.")
  }
  else
  {
    document.getElementById("T1AnswerError").innerHTML="Correct!";
    document.getElementById("T1Group").classList.remove("has-error");
    document.getElementById("T1Group").classList.add("has-success");
    corrects ++;
    console.log(corrects +" correct.");
    console.log("That's the right answer and this part of the if statement works")
  }
}

function validateT2Answer()
{
  var t2 = document.getElementById("t2Answer").value;
  if(t2 != "V" && t2 !="v")
  {
    document.getElementById("T2AnswerError").innerHTML="Try again!";
    document.getElementById("T2AnswerError").classList.remove("hidden-message");
    document.getElementById("T2AnswerError").classList.add("shown-message");
    document.getElementById("T2Group").classList.remove("has-success");
    document.getElementById("T2Group").classList.add("has-error");
    fails ++;
    console.log(fails + " wrong.");
    console.log("The answer wasn't correct (V) and this part of the if statement works.")
  }
  else
  {
    document.getElementById("T2AnswerError").innerHTML="Correct!";
    document.getElementById("T2Group").classList.remove("has-error");
    document.getElementById("T2Group").classList.add("has-success");
    corrects ++;
    console.log(corrects + " correct.");
    console.log("That's the right answer and this part of the if statement works")
  }
}

function toTest2()
{
  window.location.href="test2.html";
}

function toTest3()
{
  window.location.href="test3.html";
}
//setCookie and getCookie are courtesy of w3schools
//https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
