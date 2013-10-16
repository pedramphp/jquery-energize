/* jshint expr: true */
(function($){
	"use strict";

	function Colorify(element, config){
		this.config = config;
		$(element).css("color", this.config.color);
		return this;
	}

	//shared methods
	Colorify.prototype.getColor = function(){
		return this.config.color;
	};

	$.energize("colorify", Colorify, {
		color: "pink"
	});

})(window.jQuery);