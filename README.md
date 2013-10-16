jQuery Energize
=========

<br />
jQuery Energize is a javascript component built on top of jQuery library to easily create *smart* *extensible* UI Components.

features:
-----
  - Support Data attribute to override config parameters
  - Easily expose public methods for your component.
  - Avoiding overwriting existing components by using *noConflict*
  - Supporting Javascript OOP principles by using prototypes.
  - More importantly provides code consistency, simplicity and faster execution for writing UI Components.


> jQuery Energize delivers expandable, reusable, simple UI Components
> Built on top of jQuery Library by using the DOM API.

Installation
--------------
```javascript
<script type="text/javascript" src="jquery-energize.min.js"></script>
```


How to write a component
-------
```javascript
/* jshint expr: true */
(function($){
    "use strict";
    
    // 
    //
    /**
     * @constructor
     * @param {html-object/tag} element: selected DOM element
     * @param {obj literal} config: merge of data attributes, component options, component settings
     * @return {Comp obj}
     */
    function Comp(element, config){
        /* ALL YOUR CODE GOES HERE*/
        return this;
	}

	$.energize("comp_name", Comp, {
	    /* Component Settings */
	});

})(window.jQuery);
```

<br />


How to initialize a component
-------
```javascript
    $(el).comp_name({
        /* component options */
    });
```
<br />

Sample component
--------
Writing a jquery plugin that will change the color of DOM elements.
<br />
####JS File - jQuery.colorify.js component
```javascript
/* jshint expr: true */
(function($){
    "use strict";

	function Colorify(element, config){
		this.config = config;
		$(element).css("color", this.config.color);
		return this;
	}

	//shared public method
	Colorify.prototype.getColor = function(){
		return this.config.color;
	};

	$.energize("colorify", Colorify, {
		color: "pink" //default color - if there is no color specified.
	});

})(window.jQuery);
```

<br />
####HTML File
```html
<!doctype>
<html>
    <head>
		<style type="text/css">
		.color{
			height: 50px;
			width:	50px;
			display: block;
			text-align: center;
			line-height: 50px;
			font-size: 23px;
		}
		</style>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script src="../../0.0.1/jquery-energize.js"></script>
		<script src="jquery.colorify.js"></script> 
	</head>

	<body>
		<div>
			<div class="color" data-colorify-color="red">red</div>
			<div class="color" data-colorify-color="blue">blue</div>
			<div class="color">Default is pink</div>
		</div>

		<script type="text/javascript">
		$(document).ready(function(){
			//$.fn.colorify.noConflict();
			$(".color").colorify();

			$(".color").colorify("getColor", function(color){
				console.log(color, " is back");
			});
		});
		</script>
	</body>
</html>
```
