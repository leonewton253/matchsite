$(document).ready(function() {
  $("form#dating").submit(function(event) {
  var age = $("#age").val();
  var animal = $("#animal").val();



  if (animal === "dog" && age > 20) {
    $(".heroes").hide();
    $(".superman").show();
  } else if (animal === "lion" && age < 10) {
    $(".heroes").hide();
    $(".ironman").show();
  } else if (animal === "turtle") {
    $(".heroes").hide();
    $(".flash").show();
  } else {
    $(".heroes").hide();
    $(".batman").show();
  }

    event.preventDefault();
  });
});
