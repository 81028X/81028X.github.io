
function autoAdjustBackstretch(){
  if ($("#backstretch-img")[0].width / $("#backstretch-img")[0].height < $(window).width() / $(window).height()) {
    $("#backstretch-img").css({
        "width": "100%",
        "height": "auto"
    });
  } else {
    $("#backstretch-img").css({
        "width": "auto",
        "height": "100%"
    });
  }
}



$(document).ready(function() {
  $("body").removeClass("preload");
  $("#nav-placeholder").load("./nav.html");
  $("#footer-placeholder").load("./footer.html");
  // autoAdjustBackstretch();
  $(window).scroll(function() {
    if ($(window).scrollTop() >100) {
      $("nav").addClass("bg-light");
      $("nav").addClass("navbar-light");
      $("nav").removeClass("navbar-dark");
    } else {
      $("nav").removeClass("bg-light");
      $("nav").addClass("navbar-dark");
      $("nav").removeClass("navbar-light");
    }
  });

  $(window).resize(function() {
    // autoAdjustBackstretch();
  });

});