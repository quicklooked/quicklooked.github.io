document.addEventListener("DOMContentLoaded", function() {
  var status = "underY";
  var clientHeight = document.getElementById("divSlide").clientHeight;
  var clientHeight1 = document.getElementById("divSlide1").clientHeight;
  var clientHeight2 = document.getElementById("divSlide2").clientHeight;
  var disbar = document.getElementById("disableslibar1").clientHeight;
  var y = 88 + divSlide1.clientHeight + divSlide2.clientHeight;
  window.addEventListener("scroll", function() {
    var x = pageYOffset;
    var disbar1 = document.getElementById("disableslibar1").scrollTop;
    if(x > y && x < divSlide.clientHeight - 188) {
      if(x < disbar1 && x > disbar1 + disbar) {
        if(status == "underY") {
          document.getElementById("slide").classList.remove("em", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
          document.getElementById("slide").classList.add("nr", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
          document.getElementById("slide1").classList.remove("gg");
          document.getElementById("slide1").classList.add("vas");
          document.getElementById("slide2").classList.remove("em", "gg", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
          document.getElementById("slide2").classList.add("nr", "va", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
          status = "overY";
        }
      } else {
        if(status == "overY") {
          document.getElementById("slide").classList.remove("nr", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
          document.getElementById("slide").classList.add("em", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
          document.getElementById("slide1").classList.remove("vas");
          document.getElementById("slide1").classList.add("gg");
          document.getElementById("slide2").classList.remove("nr", "va", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
          document.getElementById("slide2").classList.add("em", "gg", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
          status = "underY";
        }
      }
    } else {
      if(x < disbar1 && x > disbar1 + disbar) {
      document.getElementById("slide").classList.remove("nr", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
      document.getElementById("slide").classList.add("em", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
      document.getElementById("slide1").classList.remove("vas");
      document.getElementById("slide1").classList.add("gg");
      document.getElementById("slide2").classList.remove("nr", "va", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
      document.getElementById("slide2").classList.add("em", "gg", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
      status = "underY";
      }
    }
  })
})
