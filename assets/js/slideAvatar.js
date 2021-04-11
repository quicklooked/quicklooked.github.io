document.addEventListener("DOMContentLoaded", function() {
    var status = "under116";
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        if(x > 116) {
            if(status == "under116") {
                document.getElementById("slide").classList.remove("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
                document.getElementById("slide").classList.add("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
                status = "over116";
            }
        } else if(x <= 116) {
            if(status == "over116") {
                document.getElementById("slide").classList.remove("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
                document.getElementById("slide").classList.add("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
                status = "under116";
            }
        }
    })
})
