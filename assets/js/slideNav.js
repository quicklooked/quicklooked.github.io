document.addEventListener("DOMContentLoaded", function() {
    var status = "under160";
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        if(x > 160) {
            if(status == "under160") {
                document.getElementById("slideNav").classList.remove("fd", "fe", "ff", "fg", "c", "fh", "el", "fi", "fj", "fk", "ir", "ah", "fm");
                document.getElementById("slideNav").classList.add("fd", "fe", "ff", "fg", "c", "fh", "ko", "fi", "fj", "fk", "ir", "ah", "owi");
                status = "over160";
            }
        } else if(x <= 160) {
            if(status == "over160") {
                document.getElementById("slideNav").classList.remove("fd", "fe", "ff", "fg", "c", "fh", "ko", "fi", "fj", "fk", "ir", "ah", "owi");
                document.getElementById("slideNav").classList.add("fd", "fe", "ff", "fg", "c", "fh", "el", "fi", "fj", "fk", "ir", "ah", "fm");
                status = "under160";
            }
        }
    })
})
