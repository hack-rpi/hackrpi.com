window.onload = function() {	
	document.body.setAttribute("class", "loaded");
	
	var info = document.getElementById("info");
	var infoWrap = document.getElementById("infoWrap");
	var preregBtn = document.getElementById("preregBtn");
	
	var prereg = document.getElementById("prereg");
	var preregWrap = document.getElementById("preregWrap");
	var preregSubmit = document.getElementById("preregSubmit");
	
	info.addEventListener("transitionend", function(event) {
		if (info !== event.target) return;
		if (info.classList.contains("active"))
			infoWrap.classList.add("active");
		else
			prereg.classList.add("active");
	}, false);
	
	infoWrap.addEventListener("transitionend", function(event) {
		if (infoWrap !== event.target) return;
		if (!infoWrap.classList.contains("active"))
			info.classList.remove("active");
	}, false);
	
	preregBtn.onclick = function() {
		infoWrap.classList.remove("active");
	}
	
	prereg.addEventListener("transitionend", function(event) {
		if (prereg !== event.target) return;
		if (prereg.classList.contains("active"))
			preregWrap.classList.add("active");
		else
			info.classList.add("active");
		
	}, false);
	
	preregWrap.addEventListener("transitionend", function(event) {
		if (preregWrap !== event.target) return;
		if (!preregWrap.classList.contains("active"))
			prereg.classList.remove("active");
	}, false);
	
	info.classList.add("active");
}