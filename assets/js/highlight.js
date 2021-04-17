var hl = document.getElementById("highlight").clientHeight;
if(hl > 0) {
  document.getElementById("highlight1").style.top = hl + "px";
} else {
  document.getElementById("highlight2").style.display = "none";
}
