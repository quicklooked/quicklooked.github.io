document.addEventListener("DOMContentLoaded", function() {
    var status = "under300";
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        if(x > 300) {
            if(status == "under300") {
                document.getElementById("slide").classList.remove("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
                document.getElementById("slide").classList.add("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
                status = "over300";
            }
        } else if(x <= 300) {
            if(status == "over300") {
                document.getElementById("slide").classList.remove("ko", "fu", "fi", "ms", "v", "ot", "fk", "mu", "nz");
                document.getElementById("slide").classList.add("ko", "fu", "fq", "ms", "v", "ny", "fk", "mu", "nz");
                status = "under300";
            }
        }
    })
})
