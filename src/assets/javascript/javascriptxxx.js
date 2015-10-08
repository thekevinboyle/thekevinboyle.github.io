
;(function ($, root, undefined) {

  $(function () {

    'use strict';

    // DOM ready

    $(window).load(function(){
      // Stuff that needs to happen after things are rendered
      $('.bear--nose').hover(function(){
        $('.bear--ears').stop().animate({'margin-top': '200px'}, 500);
      }, function(){
        $('.bear--ears').stop().animate({'margin-top': '50px'}, 500);
      });
    });

    $('.bear--eyes').hover(function() {
      $('.bear').stop().animate({
                height: '+=90px' }, 500);
    }, function () {

      $('.bear').stop().animate({
                height: '400px' }, 500);
    }
                          );

});

})

(jQuery, this);
