function cmtButton() {
	var x = document.getElementById("cmtButton");
	var y = document.getElementById("cmtButton1");
	if(attr['aria-label'].value == "close") {
		x.style.display = "block";
		document.getElementById("cmtButton1").ariaLabel = "open";
	}
	else {
		x.style.display = "none";
		document.getElementById("cmtButton1").ariaLabel = "close";
	}
}
