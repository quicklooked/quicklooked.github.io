function navChange() {
	var attr = document.getElementById("navchange").attributes;
	if(attr['aria-label'].value == "Expand navbar") {
		document.getElementById("navchange1").ariaLabel = "Collapse navbar";
		document.getElementById("navchange2").classList.remove("ggx");
		document.getElementById("navchange2").classList.add("cm", "mfx", "mgx");
		document.getElementById("navchange3").classList.remove("onx", "ai", "mnx");
		document.getElementById("navchange3").classList.add("onx", "ai");
	} else {
		document.getElementById("navchange1").ariaLabel = "Expand navbar";
		document.getElementById("navchange2").classList.remove("cm", "mfx", "mgx");
		document.getElementById("navchange2").classList.add("ggx");
		document.getElementById("navchange3").classList.remove("onx", "ai");
		document.getElementById("navchange3").classList.add("onx", "ai", "mnx");
	}
}
