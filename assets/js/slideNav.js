document.addEventListener("DOMContentLoaded", function() {
    var status = "under0";
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        if(x > 0) {
            if(status == "under0") {
                document.getElementById("slideNav").classList.remove("fd", "fe", "ff", "fg", "c", "fh", "el", "fi", "fj", "fk", "ir", "ah", "fm");
                document.getElementById("slideNav").classList.add("fd", "fe", "ff", "fg", "c", "fh", "ko", "fi", "fj", "fk", "ir", "ah", "owi");
                status = "over0";
            }
        } else if(x <= 0) {
            if(status == "over0") {
                document.getElementById("slideNav").classList.remove("fd", "fe", "ff", "fg", "c", "fh", "ko", "fi", "fj", "fk", "ir", "ah", "owi");
                document.getElementById("slideNav").classList.add("fd", "fe", "ff", "fg", "c", "fh", "el", "fi", "fj", "fk", "ir", "ah", "fm");
                status = "under0";
            }
        }
    })
})
