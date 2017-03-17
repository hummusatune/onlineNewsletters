$(document).foundation();

//First hide all of the content
$(document).ready(function(){
  $(".hover-reveal").hide();
});

//Now make the content pop up with a click function
$(".section-title").click(function() {
  $(this).next('.hover-reveal').slideToggle();
});