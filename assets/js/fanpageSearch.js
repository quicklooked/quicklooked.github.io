function fanpageSearch() {
	var attr = document.getElementById("search").attributes;
	if(attr['aria-hidden'].value == "true") {
		document.getElementById("search").tabIndex = 0;
		document.getElementById("search").ariaHidden = "false";
		document.getElementById("search").classList.remove("cs", "cn", "ct", "cu", "bf", "cv", "cw", "bh", "cx", "ar", "cy", "cz", "da");
		document.getElementById("search").classList.add("cs", "cn", "ct", "cu", "bf", "qg", "cw", "bh", "cx", "ar", "qh", "qi", "da");
		document.getElementById("search").focus();
	} else {
		document.getElementById("search").tabIndex = -1;
		document.getElementById("search").ariaHidden = "true";
		document.getElementById("search").classList.remove("cs", "cn", "ct", "cu", "bf", "qg", "cw", "bh", "cx", "ar", "qh", "qi", "da");
		document.getElementById("search").classList.add("cs", "cn", "ct", "cu", "bf", "cv", "cw", "bh", "cx", "ar", "cy", "cz", "da");
	}
}
