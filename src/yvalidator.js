/**
 * Yvalidator : simple & highly customizable validator built upon jQuery & Twitter Bootstrap
 * Dependencies : jQuery & Twitter Bootstrap
 * Author : yohanes.gultom@gmail.com
 */

// tooltip element
var errorTooltip = $('<a>').addClass('error-tooltip').attr('data-placement', 'right');

var yvalidator = {

	// default (built-in) validation
	default : {
		
		email: function(value) {
			return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);	
		},

		minLength: function(value, length) {
			return (value) && (value.length >= length);
		}

	},		

	// validator main function
	validate : function (validator) {	
		$('.error-tooltip').tooltip('hide');
		var valid = true;
		if (validator) {
			for (var i = 0; i < validator.length; i++) {			
				if (!validator[i].valid) {				
					$(errorTooltip.clone().attr('title', validator[i].message)).insertAfter(validator[i].target);
					valid = false;
				}
			}		

			if (!valid) {
				$('.error-tooltip').tooltip('show');
				setTimeout(function() {
					$('.error-tooltip').tooltip('hide').remove();
				}, 5000);	
			}		
		}
		return valid;
	}

}