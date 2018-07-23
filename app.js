'use strict';

(function($) {
    $.fn.cardify = () => {

      $('img').wrap('<figure></figure>');

      $('figure').hover(function() {
         
         let caption = $(this).children().attr('alt');
         
         $(this).append(`<figcaption>${caption}</figcaption>`);
       
      }, () => {

       $('figcaption').remove();

      });
    };

  })(jQuery);

