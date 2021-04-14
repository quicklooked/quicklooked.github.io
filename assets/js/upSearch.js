function upSearch() {
	var attr = document.getElementById("search").attributes;
	if(attr['aria-hidden'].value == "true") {
		document.getElementById("search").tabIndex = 0;
		document.getElementById("search").ariaHidden = "false";
		document.getElementById("search").classList.remove("ek", "eg", "el", "cr", "aw", "em", "en", "eo", "ep", "ah", "eq", "er", "es");
		document.getElementById("search").classList.add("ek", "eg", "el", "cr", "aw", "atf", "en", "eo", "ep", "ah", "atg", "afw", "es");
		document.getElementById("search").style.fontFamily = "sohne";
		document.getElementById("search").autocomplete = "off";
		document.getElementById("search").focus();
	} else {
		document.getElementById("search").tabIndex = -1;
		document.getElementById("search").ariaHidden = "true";
		document.getElementById("search").classList.remove("ek", "eg", "el", "cr", "aw", "atf", "en", "eo", "ep", "ah", "atg", "afw", "es");
		document.getElementById("search").classList.add("ek", "eg", "el", "cr", "aw", "em", "en", "eo", "ep", "ah", "eq", "er", "es");
		document.getElementById("search").style.fontFamily = "system-ui";
		document.getElementById("search").autocomplete = "off";
	}
}
