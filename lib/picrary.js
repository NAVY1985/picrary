'use strict';

(function ($) {
	// Pattern from: https://learn.jquery.com/plugins/basic-plugin-creation/#putting-it-together
	$.fn.picrary = function () {
		var _this = this;

		//Every container selected in the jQuery selector for example  $('.picrary') returns all class=".picrary"
		$(this).each(function () {
			//Every Image inside each container
			$(_this).find('img').each(function (index, image) {

				//We create	only the structure, in the example usage you add the blurs and hovers
				$(image).wrap('<figure></figure>');
				var caption = $(image).attr('alt');
				$(image).parent().append('<figcaption>' + caption + '</figcaption>');
			});
		});

		// Returns default jQuery for chaining
		return this;
	};
})(jQuery);