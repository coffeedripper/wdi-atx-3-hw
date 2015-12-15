
// if(localStorage.getItem("log")) {
// $("#comment").val("log");

// if(localStorage.getItem("log")) {
// $("#comment").val("3");
 // }
// $("#comment").append(eval(calc.text()) + ", " );

// num pad
$(function(){

// localStorage.setItem("log","6");

  // $("#comment").val(localStorage.getItem('log'));

  // var retrievedObject = localStorage.getItem('testObject');

  var logArr = [];

  var sum;

  var calc = $("#display");

$("#1").click(function() {
  $("#display").append("1");

});
$("#2").click(function() {
  $("#display").append("2");

});
$("#3").click(function() {
  $("#display").append("3");

});
$("#4").click(function() {
  $("#display").append("4");

});
$("#5").click(function() {
  $("#display").append("5");

});
$("#6").click(function() {
  $("#display").append("6");

});
$("#7").click(function() {
  $("#display").append("7");

});
$("#8").click(function() {
  $("#display").append("8");

});
$("#9").click(function() {
  $("#display").append("9");

});
$("#0").click(function() {
  $("#display").append("0");

});

// operators

$("#divide").click(function() {
  $("#display").append("/");

});
$("#multiply").click(function() {
  $("#display").append("*");

});
$("#add").click(function() {
  $("#display").append("+");

});
$("#subtract").click(function() {
  $("#display").append("-");

});
$("#decimal").click(function() {
  $("#display").append(".");

});

$(".c").click(function() {
  $("#display").text(" ");
  // $("#comment").text(" ");

});

//special

// $("#equals").click(function() {
//  calc.text(eval(calc.text()));

$("#equals").click(function() {
 calc.text(eval(calc.text()));

 $("#comment").append(eval(calc.text()) + ", " );

 // var storeVal = $("#comment");

 // localStorage.log = $(eval(calc.text()) + ", " );

 // $localStorage.log = calc.text(eval(calc.text())) ;

// console.log(eval(calc.text()));

console.log(eval(calc.text()));



logArr.push(eval(calc.text()));


console.log(logArr[0]);











});
});
