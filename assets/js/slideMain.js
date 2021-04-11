document.addEventListener("DOMContentLoaded", function() {
    var status = "over552";
    window.addEventListener("scroll", function() {
        var x = window.screen.width;
        if(x >= 552) {
            if(status == "over552") {
                document.getElementById("slideMain").classList.remove("z", "ix", "ai", "aj", "ak", "c", "iy", "iz");
                document.getElementById("slideMain").classList.add("z", "ah", "ai", "aj", "ak", "c", "iy", "ma", "mbb", "iz");
                status = "under552";
            }
        } else if(x < 552) {
            if(status == "under552") {
                document.getElementById("slideMain").classList.remove("z", "ah", "ai", "aj", "ak", "c", "iy", "ma", "mbb", "iz");
                document.getElementById("slideMain").classList.add("z", "ix", "ai", "aj", "ak", "c", "iy", "iz");
                status = "over552";
            }
        }
    })
})
