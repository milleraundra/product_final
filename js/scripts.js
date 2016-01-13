$(document).ready(function(){
  $("#blanks form").submit(function(event){
    $("#receipt").show();
    var firstInput = $("#firstname").val();
    var lastInput = $("#lastname").val();
    var addressInput = $("#address").val();
    $(".firstname").text(firstInput);
    $(".lastname").text(lastInput);
    $(".address").text(addressInput);
    event.preventDefault();
    });
  });
