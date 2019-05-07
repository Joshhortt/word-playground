// Business Logic

var stringOne = [];
var stringTwo =[];
var returnString = "";

// User Interface Logic
$(function(){
  $("#btn-submit").click(function(event){
    event.preventDefault();
    stringOne = $("#sentence").val().split(" ");
    stringTwo = [];
    stringOne.forEach(function(word) {
      if(word.length >= 3)
      {
        stringTwo.push(word);
      }
    });
    returnString = stringTwo.reverse().join(" ");
    $("#result").text(returnString);

  });
});
