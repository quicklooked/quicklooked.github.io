function setSearch() {
	var attr = document.getElementById("search").attributes;
	if(attr['aria-hidden'].value == "true") {
		document.getElementById("search").tabIndex = 0;
		document.getElementById("search").ariaHidden = "false";
		document.getElementById("search").classList.remove("ej", "ef", "ek", "cq", "av", "el", "em", "en", "eo", "ag", "ep", "eq", "er");
		document.getElementById("search").classList.add("ej", "ef", "ek", "cq", "av", "or", "em", "en", "eo", "ag", "os", "ot", "er");
		document.getElementById("search").focus();
	} else {
		document.getElementById("search").tabIndex = -1;
		document.getElementById("search").ariaHidden = "true";
		document.getElementById("search").classList.remove("ej", "ef", "ek", "cq", "av", "or", "em", "en", "eo", "ag", "os", "ot", "er");
		document.getElementById("search").classList.add("ej", "ef", "ek", "cq", "av", "el", "em", "en", "eo", "ag", "ep", "eq", "er");
	}
}
