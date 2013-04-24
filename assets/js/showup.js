(function( $ ) {

  $.fn.showUp = function(ele) {
    var previousScroll = 0;

    var speed  = 'slow';
    var target = $(ele);

    $(window).scroll(function() {
      var currentScroll = $(this).scrollTop();
      if (currentScroll > previousScroll) {
        // Action on scroll down
        $(target).fadeOut(speed);
      } else {
        // Action on scroll up
        $(target).show();
      }
      previousScroll = currentScroll;
    });

  };

})( jQuery );
