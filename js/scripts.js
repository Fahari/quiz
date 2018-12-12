$(document).ready(function() {
  $("#test").click(function() {

    var userName = $("#user").val()
    var answer = [];
    answer.push($("input:radio[name=question0]:checked").val());
    answer.push($("input:radio[name=question1]:checked").val());
    answer.push($("input:radio[name=question2]:checked").val());
    answer.push($("input:radio[name=question3]:checked").val());
    answer.push($("input:radio[name=question4]:checked").val());

    $("#form1").hide(function(event) {
      $("#display").html(userName + ", you scored " + score + "/5");
    });
  });
});

var score = 0;

if (answer[0] == "C") {
  score++;
}
if (answer[1] == "D") {
  score++;
}
if (answer[2] == "C") {
  score++;
}
if (answer[3] == "A") {
  score++;
}
if (answer[4] == "D") {
  score++;
}
