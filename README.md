#Yvalidator

Simple yet customizable form validator built with jQuery and Twitter Bootstrap Tooltip

###Dependencies

* jQuery
* Twitter Bootstrap (for the Tooltip)

###Example

Include dependencies and `yvalidator.js`

```html
<!-- dependencies -->
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/2.3.2/css/bootstrap.min.css">	
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>	
<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
<!-- yvalidator -->
<script src="src/yvalidator.js"></script>
```
Call `yvalidator.validate()` using your validation details map as argument and get boolean returned

```javascript
var valid = yvalidator.validate([
	{
		// valid: validation expression (must return boolean)
		valid: ($scope.email),
		// element target to show tooltip
		target: '#email',
		// message to show in the tooltip
		message: 'Please provide your email'
	},		
	{
	  // yvalidator.default contains predefined validation
		valid: (!$scope.email || yvalidator.default.email($scope.email)),
		target: '#email',
		message: 'Invalid email'
	}
]);
		
if (valid) {
  // do something
}
```
