document.addEventListener("DOMContentLoaded", function() {
    var status = "under0";
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        if(x > 0) {
            if(status == "under0") {
                document.getElementById("slide").classList.remove("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
                document.getElementById("slide").classList.add("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
                status = "over0";
            }
        } else if(x <= 0) {
            if(status == "over0") {
                document.getElementById("slide").classList.remove("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
                document.getElementById("slide").classList.add("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
                status = "under0";
            }
        }
    })
})
