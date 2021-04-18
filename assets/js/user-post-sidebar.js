document.addEventListener("DOMContentLoaded", function() {
  var status = "under1180";
  var clientHeight = document.getElementById("divSlide").clientHeight;
  var clientHeight1 = document.getElementById("divSlide1").clientHeight;
  var clientHeight2 = document.getElementById("divSlide2").clientHeight;
  window.addEventListener("scroll", function() {
    var x = pageYOffset;
    var y = 88 + divSlide1.clientHeight + divSlide2.clientHeight;
    if(x > y && x < divSlide.clientHeight - 100) {
      if(status == "under1180") {
        document.getElementById("slide").classList.remove("em", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
        document.getElementById("slide").classList.add("nr", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
        document.getElementById("slide1").classList.remove("gg");
        document.getElementById("slide1").classList.add("vas");
        document.getElementById("slide2").classList.remove("em", "gg", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
        document.getElementById("slide2").classList.add("nr", "va", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
        status = "over1180";
      }
    } else {
      if(status == "over1180") {
        document.getElementById("slide").classList.remove("nr", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
        document.getElementById("slide").classList.add("em", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
        document.getElementById("slide1").classList.remove("vas");
        document.getElementById("slide1").classList.add("gg");
        document.getElementById("slide2").classList.remove("nr", "va", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
        document.getElementById("slide2").classList.add("em", "gg", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
        status = "under1180";
      }
    }
  })
})
