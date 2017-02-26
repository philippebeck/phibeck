(function($) {
  "use strict";

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  $('#header').affix({
    offset: {
      top: 100
    }
  });

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".label-form-group", function(e) {
      $(this).toggleClass("label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".label-form-group", function() {
      $(this).addClass("label-form-group-with-focus");
    }).on("blur", ".label-form-group", function() {
      $(this).removeClass("label-form-group-with-focus");
    });
  });

})(jQuery);
