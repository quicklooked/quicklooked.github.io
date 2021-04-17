var a = document.getElementById("highlight").clientHeight;
var b = document.getElementById("highlight").offsetTop;
var x = (screen.availWidth - 1175) / 2;
var c = b - (a / 2) - 6;
if(a > 0) {
  document.getElementById("highlight2").style.top = c + "px";
  document.getElementById("highlight1").style.width = x + "px";
} else {
  document.getElementById("highlight3").style.display = "none";
}
