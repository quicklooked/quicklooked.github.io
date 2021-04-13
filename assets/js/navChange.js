function navChange() {
	var attr = document.getElementById("navchange").attributes;
	if(attr['aria-label'].value == "Expand navbar") {
		document.getElementById("navchange").ariaLabel = "Collapse navbar";
		document.getElementById("navchange").classList.remove("ggx");
    document.getElementById("navchange").classList.add("cm", "mfx", "mgx");
    document.getElementById("navchange").classList.remove("onx", "ai", "mnx");
    document.getElementById("navchange").classList.add("onx", "ai");
	} else {
		document.getElementById("navchange").ariaLabel = "Expand navbar";
		document.getElementById("navchange").classList.remove("cm", "mfx", "mgx");
		document.getElementById("navchange").classList.add("ggx");
    document.getElementById("navchange").classList.remove("onx", "ai");
    document.getElementById("navchange").classList.add("onx", "ai", "mnx");
	}
}
