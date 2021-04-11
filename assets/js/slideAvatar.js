document.addEventListener("DOMContentLoaded", function() {
    var status = "under179";
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        if(x > 179) {
            if(status == "under179") {
                document.getElementById("slide").classList.remove("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
                document.getElementById("slide").classList.add("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
                status = "over179";
            }
        } else if(x <= 179) {
            if(status == "over179") {
                document.getElementById("slide").classList.remove("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
                document.getElementById("slide").classList.add("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
                status = "under179";
            }
        }
    })
})
