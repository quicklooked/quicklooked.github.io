function navChange() {
	var attr = document.getElementById("navchange").attributes;
	var attr1 = document.getElementById("navchange1").attributes;
	var attr2 = document.getElementById("navchange2").attributes;
	var attr3 = document.getElementById("navchange3").attributes;
	if(attr['aria-label'].value == "Expand navbar") {
		document.getElementById("navchange").ariaLabel = "Collapse navbar";
		document.getElementById("navchange").style.outline = "none";
		document.getElementById("navchange1").classList.remove("ggx");
		document.getElementById("navchange1").classList.add("cm", "mfx", "mgx");
		new_path = 'M12.6.59L7 6.19 1.39.6l-.8.8L6.19 7 .6 12.61l.8.8L7 7.81l5.61 5.6.8-.8L7.81 7l5.6-5.61';
		svg_element = document.getElementById('navchange2');
		svg_element.setAttribute('d', new_path);
		document.getElementById("navchange3").classList.remove("onx", "ai", "mnx");
		document.getElementById("navchange3").classList.add("onx", "ai");
		document.getElementById("navchange3").focus();
	} else {
		document.getElementById("navchange").ariaLabel = "Expand navbar";
		document.getElementById("navchange").style.outline = "unset";
		document.getElementById("navchange1").classList.remove("cm", "mfx", "mgx");
		document.getElementById("navchange1").classList.add("ggx");
		new_path = 'M0 .5h14M0 7h14M0 13.5h14';
		svg_element = document.getElementById('navchange2');
		svg_element.setAttribute('d', new_path);
		document.getElementById("navchange3").classList.remove("onx", "ai");
		document.getElementById("navchange3").classList.add("onx", "ai", "mnx");
	}
}
