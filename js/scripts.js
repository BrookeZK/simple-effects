$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").fadeToggle("fast");
    $("#initially-showing").fadeToggle("fast");
  });
});
