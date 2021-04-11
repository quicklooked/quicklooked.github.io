function setSlide() {
	var attr = document.getElementById("slide").attributes;
	if(attr['aria-hidden'].value == "true") {
		document.getElementById("slide").classList.remove("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
		document.getElementById("slide").classList.add("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
	} else {
		document.getElementById("search").classList.remove("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
		document.getElementById("search").classList.add("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
	}
}
