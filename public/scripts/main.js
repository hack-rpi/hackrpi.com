$(document).ready(function() {	
	document.body.setAttribute("class", "loaded");
	
	var info = document.getElementById("info");
	var infoWrap = document.getElementById("infoWrap");
	var preregBtn = document.getElementById("preregBtn");
	
	var prereg = document.getElementById("prereg");
	var preregWrap = document.getElementById("preregWrap");
	var preregSubmit = document.getElementById("preregSubmit");
	
	var preregSuccess = document.getElementById("preregSuccess");
	var preregSuccessWrap = document.getElementById("preregSuccessWrap");
	
	/*info.addEventListener("transitionend", function(event) {
		if (info !== event.target) return;
		if (info.classList.contains("active"))
			infoWrap.classList.add("active");
		else
			prereg.classList.add("active");
	}, false);*/
	
	infoWrap.addEventListener("transitionend", infoWrapTransitionEnd, false);
	infoWrap.addEventListener("webkitTransitionEnd", infoWrapTransitionEnd, false);
	infoWrap.addEventListener("oTransitionEnd", infoWrapTransitionEnd, false);
	infoWrap.addEventListener("otransitionend", infoWrapTransitionEnd, false);
	
	preregBtn.onclick = function() {
		infoWrap.classList.remove("active");
	}
	
	/*prereg.addEventListener("transitionend", function(event) {
		if (prereg !== event.target) return;
		if (prereg.classList.contains("active"))
			preregWrap.classList.add("active");
		else
			preregSuccess.classList.add("active");
		
	}, false);*/
	
	preregWrap.addEventListener("transitionend", preregWrapTransitionEnd, false);
	preregWrap.addEventListener("webkitTransitionEnd", preregWrapTransitionEnd, false);
	preregWrap.addEventListener("oTransitionEnd", preregWrapTransitionEnd, false);
	preregWrap.addEventListener("otransitionend", preregWrapTransitionEnd, false);
	
	/*preregSuccess.addEventListener("transitionend", function(event) {
		if (preregSuccess !== event.target) return;
		if (preregSuccess.classList.contains("active"))
			preregSuccessWrap.classList.add("active");
		else
			info.classList.add("active");
		
	}, false);*/
	
	preregSuccessWrap.addEventListener("transitionend", preregSuccessWrapTransitionEnd, false);
	preregSuccessWrap.addEventListener("webkitTransitionEnd", preregSuccessWrapTransitionEnd, false);
	preregSuccessWrap.addEventListener("oTransitionEnd", preregSuccessWrapTransitionEnd, false);
	preregSuccessWrap.addEventListener("otransitionend", preregSuccessWrapTransitionEnd, false);
	
	/*setTimeout(function() {
		info.classList.add("active");
		infoWrap.classList.add("active");
	}, 200);*/
	
	$("#preregForm").submit(function() {
		$theForm = $(this);
		
		$.ajax({
			type: $theForm.attr("method"),
			url: $theForm.attr("action"),
			dataType: "xml",
			data: $theForm.serialize(),
			statusCode: {
				0: function() {
					$("#preregWrap").removeClass("active");
				},
				200: function() {
					$("#preregWrap").removeClass("active");
				}
			}
		});
		
		return false;
	});
});

function infoWrapTransitionEnd(event) {
	if (infoWrap !== event.target)
		return;
	if (!infoWrap.classList.contains("active")) {
		info.classList.remove("active");
		prereg.classList.add("active");
		preregWrap.classList.add("active");
	}
}

function preregWrapTransitionEnd(event) {
	if (preregWrap !== event.target)
		return;
	if (!preregWrap.classList.contains("active")) {
		prereg.classList.remove("active");
		preregSuccess.classList.add("active");
		preregSuccessWrap.classList.add("active");
	}
}

function preregSuccessWrapTransitionEnd(event) {
	if (preregSuccessWrap !== event.target)
		return;
	if (!preregSuccessWrap.classList.contains("active")) {
		preregSuccess.classList.remove("active");
		info.classList.add("active");
		infoWrap.classList.add("active");
	}
	else
		setTimeout(function() {
			preregSuccessWrap.classList.remove("active");
		}, 3000);
}