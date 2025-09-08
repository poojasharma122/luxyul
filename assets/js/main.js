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

// Newsletter form validation (all pages)
$(document).ready(function() {
  function isValidEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  function setNewsletterInvalid($input, isInvalid) {
    if (isInvalid) {
      $input.addClass("is-invalid");
    } else {
      $input.removeClass("is-invalid");
    }
  }

  // Handle newsletter form submission
  $(document).on("submit", ".newsletter-form", function(e) {
    var $form = $(this);
    var $emailInput = $form.find(".newsletter-email");
    var $feedback = $form.find(".newsletter-feedback");
    var email = $emailInput.val().trim();
    var hasError = false;

    // Validate email
    if (!isValidEmail(email)) {
      setNewsletterInvalid($emailInput, true);
      $feedback.show();
      hasError = true;
    } else {
      setNewsletterInvalid($emailInput, false);
      $feedback.hide();
    }

    if (hasError) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // Clear validation on input
  $(document).on("input blur", ".newsletter-email", function() {
    var $input = $(this);
    var $form = $input.closest(".newsletter-form");
    var $feedback = $form.find(".newsletter-feedback");
    var email = $input.val().trim();
    
    if (isValidEmail(email)) {
      setNewsletterInvalid($input, false);
      $feedback.hide();
    } else {
      setNewsletterInvalid($input, true);
      $feedback.show();
    }
  });
});

