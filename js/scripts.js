$(document).ready(function() {
  $("#form1").submit(function(event) {

    var username = $("#user").val()
    var answers = ["C", "D", "C", "A", "B", "C", "A", "A", "A", "C"];

    function checkedValue(radioName) {
      var radios = document.getElementsByName(radioName);
      for (var x = 0; x < radios.length; x++)
        if (radios[x].checked) {
          return radios[x].value;
        }
    }

  >  function getScore() {
      checkedValue();
      var score = 0;
      var totalQuestions = 10;
      var response = checkedValue;
      for (var i = 0; i < totalQuestions; i++)
        if (response[i] === answers[i]) {
          score += 1;
          return score;
        }

    }

    function returnScore() {
      alert("Your score " + username + "is: " + getscore() + "/" + totalQuestions.length);
    };

    event.preventDefault();
  });
});
