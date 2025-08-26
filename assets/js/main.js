// Toggle Menu Functionaliy Start
$(document).ready(function() {
  $(".nav__toggle").click(function() {
      $("body").addClass("nav--open");
  });
  
  $(".nav__close").click(function() {
      $("body").removeClass("nav--open");
  });
});
// Toggle Menu Functionaliy End

// Header Scroll JS Start
  $(document).ready(function () {
    $(window).scroll(function () {
      var header = $("header");
      header.toggleClass("header--sticky", $(window).scrollTop() > 0);
    });
  });
  // Header Scroll JS End

