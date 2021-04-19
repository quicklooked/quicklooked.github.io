function cmtButton() {
	var x = document.getElementById("cmtButton");
	if(attr['aria-label'].value == "close") {
		x.style.display = "none";
		document.getElementById("cmtButton").ariaLabel = "open";
	}
	else {
		x.style.display = "block";
		document.getElementById("cmtButton").ariaLabel = "close";
	}
}
