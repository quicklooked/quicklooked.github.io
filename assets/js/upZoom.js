function upZoom() {
	var attr = document.getElementById("zoom").attributes;
	if(attr['aria-hidden'].value == "true") {
    document.getElementById("zoom").ariaHidden = "false";
		document.getElementById("zoom").classList.remove("jj", "jk", "ah", "jl", "w", "jm");
		document.getElementById("zoom").classList.add("jj", "amh", "atm", "gc", "amv", "amw", "aml");
	} else {
		document.getElementById("zoom").classList.remove("jj", "amh", "atm", "gc", "amv", "amw", "aml");
		document.getElementById("zoom").classList.add("jj", "jk", "ah", "jl", "w", "jm");
    document.getElementById("zoom").ariaHidden = "true";
	}
}
