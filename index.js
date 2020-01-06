
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

$(document).ready(function () {
  if(window.screen.width>1920||window.screen.height>1920){
    $("body").addClass("fullrez");
  }

  $("body").removeClass("preload");
  $("#nav-placeholder").load("./nav.html");
  $("#footer-placeholder").load("./footer.html");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("bg-light");
      $("nav").addClass("navbar-light");
      $("nav").removeClass("navbar-dark");
    } else {
      $("nav").removeClass("bg-light");
      $("nav").addClass("navbar-dark");
      $("nav").removeClass("navbar-light");
    }
  });
});

function scrollToID(targetID) {
  console.log("scrolling to " + targetID);
  $('html,body').animate({
    scrollTop: $("#" + targetID).offset().top - 100
  });
}
