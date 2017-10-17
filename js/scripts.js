$(document).ready(function() {
  $(".button").click(function() {
    $("#hidden").toggle();
    $("#unhidden").toggle();
  });

  $(".fade-button").click(function() {
  $("#fade").fadeOut("slow");
    //$(".hidden").hide();

  });
});
