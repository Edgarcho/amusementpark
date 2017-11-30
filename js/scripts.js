$(document).ready(function() {
  var height = parseInt(prompt("What is your height (in.)?"));

  if (height > 70) {
    $('#tall').show();
    $(".talllist,.shortlist").addClass("bg-success");
    $(".tinylist").addClass("bg-warning");
  } else if (height >= 50 && height <= 70){
    $("#tall").show();
    $('#short').show();
    $(".talllist,.shortlist,.tinylist").addClass("bg-success");
  } else {
    $('#short').show();
    $(".tinylist,.shortlist").addClass("bg-success");
    $(".talllist").addClass("bg-warning");
  }
});
