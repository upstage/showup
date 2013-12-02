/*
 * Showup.js jQuery Plugin
 * http://github.com/jonschlinkert/showup
 *
 * Copyright (c) 2013 Jon Schlinkert, contributors
 * Licensed under the MIT License (MIT).
 */


(function( $ ) {
  $.fn.showUp = function(ele, options) {
    options = options || {};

    var target         = $(ele);
    var down           = options.down        || 'navbar-hide';
    var up             = options.up          || 'navbar-show';
    var btnHideShow    = options.btnHideShow || '.btn-hide-show';
    var hideOffset     = options.offset      || 110;
    var previousScroll = 0;

    $(window).scroll(function () {
      // var currentScroll = $(this).scrollTop();
      if ($(this).scrollTop() > hideOffset) {
        if ($(this).scrollTop() > previousScroll) {
          // Action on scroll down
          target.removeClass(up).addClass(down);
        } else {
          // Action on scroll up
          target.removeClass(down).addClass(up);
        }
      }
      previousScroll = $(this).scrollTop();
    });

    // Toggle visibility of target on click
    $(btnHideShow).click(function () {
      if (target.hasClass(down)) {
        target.removeClass(down).addClass(up);
      } else {
        target.removeClass(up).addClass(down);
      }
    });
  };
})( jQuery );

// TODO: make customizable
$(document).ready(function () {
  var duration      = 420;
  var showOffset    = 220;
  var btnFixed      = '.btn-fixed-bottom';
  var btnToTopClass = '.back-to-top';

  $(window).scroll(function () {
    if ($(this).scrollTop() > showOffset) {
      $(btnFixed).fadeIn(duration);
    } else {
      $(btnFixed).fadeOut(duration);
    }
  });

  $(btnToTopClass).click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });
});

