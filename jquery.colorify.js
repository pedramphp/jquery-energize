/* jshint expr: true */
(function($){
	"use strict";

	function Colorify(element, config){
		$(element).css("color", config.color);

		this.getColor = function(){
			return "color";
		};

		return this;
	}

	Colorify.prototype.getColor = function(){
		return "color";
	};

	$.energize("colorify", Colorify, {
		color: "pink"
	});

})(window.jQuery);