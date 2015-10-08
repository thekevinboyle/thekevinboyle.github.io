;(function ($, root, undefined) {

  $(function () {

    'use strict';

    // DOM ready

    $(window).load(function(){
      // Stuff that needs to happen after things are rendered

      var counter = 0;

      var targetInterval;

      function randomPosition() {
        var $target = $('.theBoard__target');
        var $theBoard = $('.theBoard');


        $target.fadeOut(800, function() {
          var maxLeft = $theBoard.width() - $target.width();
          var maxTop = $theBoard.height() - $target.height();
          var leftPos = Math.floor(Math.random() * (maxLeft + 1));
          var topPos = Math.floor(Math.random() * (maxTop + 1));

          $target.css({
            left: leftPos,
            top: topPos

          })

          .fadeIn(100);
        });
      }

      function winTrumpBg() {
        $('body').addClass('trumpBg');
        $('.container').toggle('drop');
      }

      function win() {

        $('.youWin').html('YOU WIN');
        $('.theBoard__scoreBoard').html(counter);
        $('.theBoard__target').off( 'click', onTargetClick );
        clearInterval(targetInterval);
        winTrumpBg();
      }


      function onTargetClick() {
        counter++ ;

        if(counter === 10) {
          win();
        } else {
          $('.theBoard__scoreBoard').html(counter);

        }

      }

      $('.theBoard__target').on( 'click', onTargetClick );


      $(document).on('keydown', function(e) {

        if (e.keyCode == 72) {
          // press the letter H
          win();
        }
        return true;
      })

      randomPosition();
      targetInterval = setInterval(randomPosition, 100);

    });


  });
})(jQuery, this);
