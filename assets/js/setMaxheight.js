function setMaxheight(){
    var affixEle = $("#scroll").first(),
        winHeight = $(window).height();

    // If there is some margins from top or bottom, remove it like:
    // winheight -= 20;

    affixEle.css({
        'max-height' : winHeight*92/100 + "px"
    });
}

$(document).ready(function(){
  setMaxheight();
});

$(function(){
    

    $(window).resize(function(){
        setMaxheight();
    });
});
