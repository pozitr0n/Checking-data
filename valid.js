if (!Modernizr.input.required || !Modernizr.input.pattern) {
	$('form').submit(function() {
		var validData = true;
		$('[required], [pattern]').each(function() {
			if (($(this.attr('required') !== false) &&
				($(this).val() == "")){
				$(this).focus();
				alert($(this).attr('name') + " - required field!");
				validData = false;
				return false;
			}
			
			if ($(this).attr('pattern')){
				var regexp = new RegExp($(this).attr('pattern'));
				if (!regexp.test($(this).val())){
					$(this).focus();
					alert("Data from the field" + $(this).attr('name') + "has incorrectly format!");
					validData = false;
						return false;
				}
			}
		});
		return validData;
	});
}
