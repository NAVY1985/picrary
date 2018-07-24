'use strict';

(function($) {
	$.fn.picrary = function() {
		//Every container selected in the jQuery selector for example  $('.picrary') returns all class=".picrary"
		$(this).each( () => {
			//Every Image inside each container
			$(this).find('img').each( (index, image) => {
				
				//We create	only the structure, in the example usage you add the blurs and hovers
				$(image).wrap('<figure></figure>');
				let caption = $(image).attr('alt');
				$(image).parent().append(`<figcaption>${caption}</figcaption>`);
			
			});
		
		});
	}
})(jQuery);
	
	