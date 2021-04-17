var hl = document.getElementById("highlight").clientHeight;
if(hl > 0) {
  document.getElementById("highlight2").style.top = hl + "px";
} else {
  document.getElementById("highlight3").style.display = "none";
}
