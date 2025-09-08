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


    // AOS JS Start
    AOS.init({
      duration: 1200,
    });
    // AOS JS End

// Contact form validation
$(document).ready(function() {
  var form = $("#contactForm");
  if (!form.length) return;

  function setInvalid(input, isInvalid) {
    if (isInvalid) {
      input.addClass("is-invalid");
    } else {
      input.removeClass("is-invalid");
    }
  }

  function validateEmail(value) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(String(value).toLowerCase());
  }

  form.on("submit", function(e) {
    var nameEl = $("#fullName");
    var emailEl = $("#email");
    var subjectEl = $("#subject");
    var messageEl = $("#message");

    var hasError = false;

    setInvalid(nameEl, nameEl.val().trim() === "");
    hasError = hasError || nameEl.hasClass("is-invalid");

    setInvalid(emailEl, !validateEmail(emailEl.val().trim()));
    hasError = hasError || emailEl.hasClass("is-invalid");

    setInvalid(subjectEl, subjectEl.val().trim() === "");
    hasError = hasError || subjectEl.hasClass("is-invalid");

    setInvalid(messageEl, messageEl.val().trim() === "");
    hasError = hasError || messageEl.hasClass("is-invalid");

    if (hasError) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  $("#fullName, #email, #subject, #message").on("input blur", function() {
    var input = $(this);
    if (input.attr("id") === "email") {
      setInvalid(input, !validateEmail(input.val().trim()));
    } else {
      setInvalid(input, input.val().trim() === "");
    }
  });
});

// Newsletter email validation (all pages)
$(document).ready(function() {
  function isValidEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  $(".newsletter-form").on("submit", function(e) {
    var $form = $(this);
    var $input = $form.find(".newsletter-email");
    var $feedback = $form.find(".invalid-feedback");
    var email = $input.val().trim();
    if (!isValidEmail(email)) {
      e.preventDefault();
      e.stopPropagation();
      $input.addClass("is-invalid");
      $feedback.show();
    } else {
      $input.removeClass("is-invalid");
      $feedback.hide();
    }
  });

  $(document).on("input blur", ".newsletter-email", function() {
    var $input = $(this);
    var $feedback = $input.closest(".newsletter-form").find(".invalid-feedback");
    if (isValidEmail($input.val().trim())) {
      $input.removeClass("is-invalid");
      $feedback.hide();
    }
  });
});

