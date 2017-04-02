// Generated by CoffeeScript 1.12.2
(function() {
  (function($) {
    'use strict';
    var devSize;
    devSize = $(document).width();
    if (devSize >= 768) {
      document.querySelector('iframe').setAttribute('width', '512');
      document.querySelector('iframe').setAttribute('height', '288');
    } else {
      document.querySelector('iframe').setAttribute('width', '256');
      document.querySelector('iframe').setAttribute('height', '144');
    }
    $('[data-toggle="tooltip"]').tooltip();
    $('.page-scroll a').bind('click', function(event) {
      var $anchor;
      $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 50
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
    });
    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    });
    $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
    });
    $('#header').affix({
      offset: {
        top: 100
      }
    });
    $(function() {
      $('body').on('input propertychange', '.label-form-group', function(e) {
        $(this).toggleClass('label-form-group-with-value', !!$(e.target).val());
      }).on('focus', '.label-form-group', function() {
        $(this).addClass('label-form-group-with-focus');
      }).on('blur', '.label-form-group', function() {
        $(this).removeClass('label-form-group-with-focus');
      });
    });
  })(jQuery);

}).call(this);
