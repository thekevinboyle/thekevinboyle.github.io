;
(function($, root, undefined) {

    $(function() {

        'use strict';

        // DOM ready
        $(window).load(function() {
            cloneDiv();
            generateRandomColor();
            $('.shoe__shelf').find('.shoe').on('click', addToCart);
            $('.shoe__cart').find('.shoe').on('click', removeFromCart);

            $('.lottery__container').find('.lottery__col__ball').on('click', rearrangeBall);

        });

        function generateRandomColor() {
            function color() {
                return Math.floor(Math.random() * 256).toString(16);
            }
            var theRandomColor = '#' + color() + color() + color();
            return theRandomColor;
        }

        function rearrangeBall() {
          $(this).detach();
          $(this).appendTo('.lottery__col');
        }


        function addToCart() {
          // $('.shoe__shelf').find('.shoe').fadeOut();
          $(this).detach('.shoe');
          $(this).appendTo('.shoe__cart');
        }

        function removeFromCart() {
          // $('.shoe__shelf').find('.shoe').fadeOut();
          $(this).detach();
          $(this).appendTo('.shoe__shelf');
        }

        function cloneDiv() {
          for (var i = 0; i < 12; i++) {
            var $shoe = $('.shoe__temp').find('.shoe').clone();
            $shoe.appendTo('.shoe__box');

            $shoe.find('.shoe__body').css('fill', generateRandomColor());
          }

          // $('.shoe:even').css('background', '#7f8c8d');
          $('.shoe__temp').remove();

        }

    });

})(jQuery, this);
