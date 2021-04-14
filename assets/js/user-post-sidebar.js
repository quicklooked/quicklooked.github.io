document.addEventListener("DOMContentLoaded", function() {
    var status = "under1239";
    var clientHeight = document.getElementById("divSlide").clientHeight;
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        if(x > 1239) {
            if(status == "under1239") {
                document.getElementById("slide").classList.remove("em", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
                document.getElementById("slide").classList.add("nr", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
                document.getElementById("slide1").classList.remove("gg");
                document.getElementById("slide1").classList.add("vas");
                document.getElementById("slide2").classList.remove("em", "gg", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
                document.getElementById("slide2").classList.add("nr", "va", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
                status = "over1239";
            }
        } else if(x <= 1239 ++ clientHeight) {
            if(status == "over1239") {
                document.getElementById("slide").classList.remove("nr", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
                document.getElementById("slide").classList.add("em", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
                document.getElementById("slide1").classList.remove("vas");
                document.getElementById("slide1").classList.add("gg");
                document.getElementById("slide2").classList.remove("nr", "va", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
                document.getElementById("slide2").classList.add("em", "gg", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
                status = "under1239";
            }
        }
    })
})
