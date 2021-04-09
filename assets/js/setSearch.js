function setSearch() {
	if(tabIndex = -1) {
		document.getElementById("search").tabIndex = 0;
		document.getElementById("search").ariaHidden = "false";
		document.getElementById("search").classList.remove("jw", "jx", "jy", "ek", "by", "jz", "ka", "bz", "kb", "gz", "kc", "kd", "ke");
		document.getElementById("search").classList.add("jw", "jx", "jy", "ek", "by", "me", "ka", "bz", "kb", "gz", "mf", "lh", "ke");
	}
	else {
		document.getElementById("search").tabIndex = -1;
		document.getElementById("search").ariaHidden = "true";
		document.getElementById("search").classList.remove("jw", "jx", "jy", "ek", "by", "me", "ka", "bz", "kb", "gz", "mf", "lh", "ke");
		document.getElementById("search").classList.add("jw", "jx", "jy", "ek", "by", "jz", "ka", "bz", "kb", "gz", "kc", "kd", "ke");
	}
}
<script>
window.onload = function() {
	document.getElementById("search").focus();
};
</script>
