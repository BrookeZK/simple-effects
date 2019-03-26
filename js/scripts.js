$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").fadeToggle("fast");
    $("#initially-showing").fadeToggle("fast");
  });

  $(".clickableReturn").click(function() {
    $("#initially-hidden").fadeToggle("fast");
    $("#initially-showing").fadeToggle("fast");
  });

  $(".clickable2").click(function() {
    $("#hidden-clown").fadeToggle("fast");
    $("#showing-clown").fadeToggle("fast");
  });

  $(".clickableReturn2").click(function() {
    $("#hidden-clown").fadeToggle("fast");
    $("#showing-clown").fadeToggle("fast");
  });
});
