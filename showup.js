/*
 * Showup.js
 * http://github.com/jonschlinkert/showup
 * Jon Schlinkert
 *
 */
(function( $ ) {
  $.fn.showUp = function(ele) {
    var target         = $(ele),
        downClass      = 'navbar-hide',
        upClass        = 'navbar-show',
        previousScroll = 0;

    $(window).scroll(function () {
      // var currentScroll = $(this).scrollTop();
      if ($(this).scrollTop() > 100) {
        if ($(this).scrollTop() > previousScroll) {
          // Action on scroll down
          target.removeClass(upClass).addClass(downClass).unbind('click');
        } else {
          // Action on scroll up
          target.removeClass(downClass).addClass(upClass).unbind('click');
        }
      }
      previousScroll = $(this).scrollTop();
    });
  };
})( jQuery );


$(document).ready(function () {
  var offset   = 220;
  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.btn-fixed-bottom').fadeIn(duration);
    } else {
      $('.btn-fixed-bottom').fadeOut(duration);
    }
  });

  $('.back-to-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  })
});