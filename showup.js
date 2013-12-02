/*
 * Showup.js
 * http://github.com/jonschlinkert/showup
 * Jon Schlinkert
 */


(function( $ ) {
  $.fn.showUp = function(ele) {
    var target         = $(ele);
    var downClass      = 'navbar-hide';
    var upClass        = 'navbar-show';
    var btnHideShow    = '.btn-hide-show';
    var hideOffset     = 110;
    var previousScroll = 0;

    $(window).scroll(function () {
      // var currentScroll = $(this).scrollTop();
      if ($(this).scrollTop() > hideOffset) {
        if ($(this).scrollTop() > previousScroll) {
          // Action on scroll down
          target.removeClass(upClass).addClass(downClass);
        } else {
          // Action on scroll up
          target.removeClass(downClass).addClass(upClass);
        }
      }
      previousScroll = $(this).scrollTop();
    });

    // Toggle visibility of target on click
    $(btnHideShow).click(function () {
      if (target.hasClass(downClass)) {
        target.removeClass(downClass).addClass(upClass);
      } else {
        target.removeClass(upClass).addClass(downClass);
      }
    });
  };
})( jQuery );



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