function navChange() {
	var attr = document.getElementById("navchange").attributes;
	var attr1 = document.getElementById("navchange1").attributes;
	var attr2 = document.getElementById("navchange2").attributes;
	var attr3 = document.getElementById("navchange3").attributes;
	if(attr['aria-label'].value == "Expand navbar") {
		document.getElementById("navchange").ariaLabel = "Collapse navbar";
		document.getElementById("navchange1").classList.remove("ggx");
		document.getElementById("navchange1").classList.add("cm", "mfx", "mgx");
		document.getElementById("navchange3").classList.remove("onx", "ai", "mnx");
		document.getElementById("navchange3").classList.add("onx", "ai");
	} else {
		document.getElementById("navchange").ariaLabel = "Expand navbar";
		document.getElementById("navchange1").classList.remove("cm", "mfx", "mgx");
		document.getElementById("navchange1").classList.add("ggx");
		document.getElementById("navchange3").classList.remove("onx", "ai");
		document.getElementById("navchange3").classList.add("onx", "ai", "mnx");
	}
}
