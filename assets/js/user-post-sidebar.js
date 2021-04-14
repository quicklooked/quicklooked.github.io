document.addEventListener("DOMContentLoaded", function() {
    var status = "under0";
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        if(x > 0) {
            if(status == "under0") {
                document.getElementById("slide").classList.remove("em", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
                document.getElementById("slide").classList.add("nr", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
                document.getElementById("slide1").classList.remove("gg");
                document.getElementById("slide1").classList.add("va");
                document.getElementById("slide2").classList.remove("em", "gg", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
                document.getElementById("slide2").classList.add("nr", "va", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
                status = "over0";
            }
        } else if(x <= 0) {
            if(status == "over0") {
                document.getElementById("slide").classList.remove("nr", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
                document.getElementById("slide").classList.add("em", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
                document.getElementById("slide1").classList.remove("va");
                document.getElementById("slide1").classList.add("gg");
                document.getElementById("slide1").classList.remove("nr", "va", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
                document.getElementById("slide1").classList.add("em", "gg", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
                status = "under0";
            }
        }
    })
})
