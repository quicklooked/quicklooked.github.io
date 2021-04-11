document.addEventListener("DOMContentLoaded", function() {
    var status = "under180";
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        if(x > 180) {
            if(status == "under180") {
                document.getElementById("slide").classList.remove("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
                document.getElementById("slide").classList.add("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
                status = "over180";
            }
        } else if(x <= 180) {
            if(status == "over180") {
                document.getElementById("slide").classList.remove("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
                document.getElementById("slide").classList.add("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
                status = "under180";
            }
        }
    })
})
