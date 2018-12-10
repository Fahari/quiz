$(document).ready(function() {
  $("#test").click(function() {


    var answer=[];
     answer.push ($("input:radio[name=question0]:checked").val());
    answer.push ($("input:radio[name=question1]:checked").val());
    answer.push( $("input:radio[name=question2]:checked").val());
    answer.push($("input:radio[name=question3]:checked").val());
    answer.push($("input:radio[name=question4]:checked").val());
