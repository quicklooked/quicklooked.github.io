document.addEventListener("DOMContentLoaded", function() {
    var status = "under1";
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        if(x > 1) {
            if(status == "under1") {
                document.getElementById("slide").classList.remove("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
                document.getElementById("slide").classList.add("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
                status = "over1";
            }
        } else if(x <= 1) {
            if(status == "over1") {
                document.getElementById("slide").classList.remove("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
                document.getElementById("slide").classList.add("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
                status = "under1";
            }
        }
    })
})
