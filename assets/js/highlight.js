var a = document.getElementById("highlight").clientHeight;
var b = document.getElementById("highlight").offsetTop;
var x = (window.screen.width - 680) / 2;
var c = b - (a / 2) - 6;
if(a > 0) {
  document.getElementById("highlight2").style.top = c + "px";
  document.getElementById("highlight1").style.width = x + "px";
} else {
  document.getElementById("highlight3").style.display = "none";
}
