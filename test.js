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
    setCookie("t1Wrongs", fails, 1);
  }

  else
  {
    document.getElementById("T1AnswerError").innerHTML="Correct!";
    document.getElementById("T1Group").classList.remove("has-error");
    document.getElementById("T1Group").classList.add("has-success");
    corrects ++;
    console.log(corrects +" correct.");
    console.log("That's the right answer and this part of the if statement works")
    setCookie("t1Corrects", corrects, 1);
  }
  if (isNaN(t1))
  {
    document.getElementById("T1AnswerError").innerHTML="Answer needs to be a number";
    document.getElementById("T1AnswerError").classList.remove("hidden-message");
    document.getElementById("T1AnswerError").classList.add("shown-message");
    document.getElementById("T1Group").classList.remove("has-success");
    document.getElementById("T1Group").classList.add("has-error");
    fails ++;
    console.log(fails +" wrong.");
    console.log("The answer wasn't a number and this part of the if statement works.")
    setCookie("t1Wrongs2", fails, 1);
  }
}

function validateT2Answer()
{
  var t2 = document.getElementById("t2Answer").value;
  if( t2 != "V" && t2 !="v")
  {
    document.getElementById("T2AnswerError").innerHTML="Try again!";
    document.getElementById("T2AnswerError").classList.remove("hidden-message");
    document.getElementById("T2AnswerError").classList.add("shown-message");
    document.getElementById("T2Group").classList.remove("has-success");
    document.getElementById("T2Group").classList.add("has-error");
    fails ++;
    console.log(fails + " wrong.");
    console.log("The answer wasn't correct (V) and this part of the if statement works.")
    setCookie("t2Wrongs", fails, 1);
  }
  else
  {
    document.getElementById("T2AnswerError").innerHTML="Correct!";
    document.getElementById("T2Group").classList.remove("has-error");
    document.getElementById("T2Group").classList.add("has-success");
    var totalCorrect = getCookie("t1Corrects");
    totalCorrect = Number(totalCorrect);
    corrects ++;
    console.log(corrects + " correct.");
    console.log("That's the right answer and this part of the if statement works")
    totalCorrect = corrects + totalCorrect;
    setCookie("t2Corrects", totalCorrect , 1);
  }
  if(Number(t2))
  {
    document.getElementById("T2AnswerError").innerHTML="The answer is a letter";
    document.getElementById("T2AnswerError").classList.remove("hidden-message");
    document.getElementById("T2AnswerError").classList.add("shown-message");
    document.getElementById("T2Group").classList.remove("has-success");
    document.getElementById("T2Group").classList.add("has-error");
    fails ++;
    console.log(fails + " wrong.");
    console.log("The answer isn't a number and this part of the if statement works.")
    setCookie("t2Wrongs2", totalFails, 1);
  }
}

function validateT3Answer()
{
  var t3 = document.getElementById("t3Answer").value;
  if(t3 != "History" && t3 != "history")
  {
    document.getElementById("T3AnswerError").innerHTML="Try again!";
    document.getElementById("T3AnswerError").classList.remove("hidden-message");
    document.getElementById("T3AnswerError").classList.add("shown-message");
    document.getElementById("T3Group").classList.remove("has-success");
    document.getElementById("T3Group").classList.add("has-error");
    fails ++;
    console.log(fails + " wrong.");
    console.log("The answer wasn't correct and this part of the if statement works.")
    setCookie("t3Wrongs", fails, 1);
  }
  else
  {
    document.getElementById("T3AnswerError").innerHTML="Correct!";
    document.getElementById("T3Group").classList.remove("has-error");
    document.getElementById("T3Group").classList.add("has-success");
    var totalCorrect = getCookie("t2Corrects");
    totalCorrect = Number(totalCorrect);
    corrects ++;
    console.log(corrects + " correct.");
    console.log("That's the right answer and this part of the if statement works")
    totalCorrect = corrects + totalCorrect;
    setCookie("t3Corrects", totalCorrect, 1);
  }
  if(Number(t3))
  {
    document.getElementById("T3AnswerError").innerHTML="The answer is a word";
    document.getElementById("T3AnswerError").classList.remove("hidden-message");
    document.getElementById("T3AnswerError").classList.add("shown-message");
    document.getElementById("T3Group").classList.remove("has-success");
    document.getElementById("T3Group").classList.add("has-error");
    fails ++;
    console.log(fails + " wrong.");
    console.log("The answer isn't a number and this part of the if statement works.")
    setCookie("t3Wrongs2", fails, 1);
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

function toResults()
{
  window.location.href="results.html";
}

function toHome()
{
  window.location.href="index.html";
}

function calculateResults()
{

  var totalC = getCookie("t3Corrects");
  totalC = Number(totalC);
  var w1 = getCookie("t1Wrongs");
  w1 = Number(w1);
  var w2 = getCookie("t1Wrongs2");
  w2 = Number(w2);
  var w3 = getCookie("t2Wrongs");
  w3 = Number(w3);
  var w4 = getCookie("t2Wrongs2");
  w4 = Number(w4);
  var w5 = getCookie("t3Wrongs");
  w5 = Number(w5);
  var w6 = getCookie("t3Wrongs2");
  w6 = Number(w6);
  var totalW = (w1 + w2 + w3 + w4 + w5 + w6);
  totalW = Number(totalW);
  console.log(totalC);
  console.log(totalW);
  document.getElementById("corrects").innerHTML = totalC;
  document.getElementById("wrongs").innerHTML = totalW;
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
