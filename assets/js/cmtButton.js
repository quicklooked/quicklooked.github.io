function cmtButton() {
	var x = document.getElementById("cmtButton");
	var attr = document.getElementById("cmtButton1");
	if(attr['aria-label'].value = "open") {
		x.style.display = "block";
		document.getElementById("cmtButton1").ariaLabel = "close";
	}
	else {
		x.style.display = "none";
		document.getElementById("cmtButton1").ariaLabel = "open";
	}
}
