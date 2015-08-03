$(document).ready(function() {	
	document.body.setAttribute("class", "loaded");

	$("#preregForm").submit(function() {
		$theForm = $(this);
		
		$.ajax({
			type: $theForm.attr("method"),
			url: $theForm.attr("action"),
			dataType: "xml",
			data: $theForm.serialize(),
		});
		
		// KNOWN ISSUE: Currently, the form will submit to Google Forms, 
		// but there is no response back because of a cross domain issue
		// that is out of our control. Since this is just preregistration,
		// and needs to be up, I will leave this error, and hopefully we will
		// use something better for actual registration.
		$("#preregForm").hide();
		$("#prereg-success").show();
		return false;
	});	
});