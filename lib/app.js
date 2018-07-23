'use strict';

(function ($) {
  $.fn.cardify = function () {

    $('img').wrap('<figure></figure>');

    $('figure').hover(function () {

      var caption = $(this).children().attr('alt');

      $(this).append('<figcaption>' + caption + '</figcaption>');
    }, function () {

      $('figcaption').remove();
    });
  };
})(jQuery);