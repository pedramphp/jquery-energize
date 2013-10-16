/* ===========================================================
 * jquery-energize.js v0.0.1
 * 
 * Developed by Mahdi Pedramrazi
 * ========================================================== */

/* jshint expr: true */

(function($){
	"use strict";
	
	$.energize = function(compName, Comp, settings){
		var old = $.fn[compName];
		$.fn[compName] = function(config){
			var args = [].slice.call(arguments, 0),
				options,
				DATA_ATTR = "jquery-energize-" + compName;
		
			this.each(function(){
				var $el = $(this),
					widgetInstance = $el.data(DATA_ATTR),
					key,
					callbackFunc,
					methodResponse,
					methodName,
					lastParam,
					params = $.extend(true, [],  args);

				// if the first parameter is a string and the widget has been initiated yet then.
				if((typeof config === "string" || config instanceof String) && (widgetInstance instanceof Comp)){

					methodName = config;
					// method calls	supports optional parameters
					params.shift();
					lastParam = params[params.length-1];
					if($.isFunction(lastParam)){
						callbackFunc = lastParam;
						params.pop();
					}
					// if the method exists then trigger it and pass the arguments.
					if(widgetInstance[methodName]){
						methodResponse = widgetInstance[methodName].apply(widgetInstance, params);
						// if there is any callback function trigger it.
						callbackFunc && callbackFunc.call(widgetInstance, methodResponse);
					}
				}else if(!(widgetInstance instanceof Comp) && (!config || $.isPlainObject(config))){
					// instantiating, only gets called once
					options = $.extend({}, settings, config);
					//update configurations
					for(key in settings){
						if(settings.hasOwnProperty(key) && $el.data(compName + "-" + key)){
							options[key] = $el.data(compName + "-" + key);
						}
					}
					// initialize the component and assign it to data attribute for future refrences.
					$el.data(DATA_ATTR, new Comp(this, options));
				}else{
					throw "Unsupported Parameter type" + config;
				}
			});

			return this;
		};
		
		$.fn[compName].settings = settings || {};
		$.fn[compName].Constructor = Comp;
		$.fn[compName].noConflict = function(){
			$.fn[compName] = old;
			return this;
		};
	};
	
})(window.jQuery);