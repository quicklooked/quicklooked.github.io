var a = document.getElementById("highlight").clientHeight;
var b = document.getElementById("highlight").offsetTop;
var c = b - (a / 2);
if(a > 0) {
  document.getElementById("highlight2").style.top = c + "px";
} else {
  document.getElementById("highlight3").style.display = "none";
}
