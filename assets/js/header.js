function getX(item) {
  var currTrans = item.css("transform");

  if (currTrans == "none") {
    return 0;
  } else {
    var transSplit = currTrans.split(/[()]/)[1];
    var posx = transSplit.split(",")[4];
    return Number(posx);
  }
}

function getOverflow() {
  console.log($(".js-carouselInner").parent()[0]);
  var overflow = $(".js-carouselInner").parent()[0].scrollWidth;
  var width = $(".js-carouselInner").width();
  var ow = overflow - width;
  console.log(ow);
  return ow;
}

var ow = 0;

$(window).on("resize", function() {
  ow = getOverflow();
  $(".js-carouselInner").css({ transform: "translateX(0)" });
  $(".js-carouselReverse").prop("disabled", true);
  $(".js-carouselForward").prop("disabled", false);
});

$(document).ready(function() {
  ow = getOverflow();

  $(".js-carouselReverse").click(function(e) {
    var x = getX($(".js-carouselInner"));
    var difference = 300;
    var minus = x + difference;

    if (x <= -difference) {
      $(".js-carouselInner").css({ transform: "translateX(" + minus + "px)" });
      $(".js-carouselForward").prop("disabled", false);
    } else {
      $(".js-carouselInner").css({ transform: "translateX(0)" });
      $(this).prop("disabled", true);
    }
  });

  $(".js-carouselForward").click(function(e) {
    var x = getX($(".js-carouselInner"));
    var difference = -300;
    var plus = x + difference;
    console.log(x);

    if (x > -(ow + difference)) {
      $(".js-carouselInner").css({ transform: "translateX(" + plus + "px)" });
      $(".js-carouselReverse").prop("disabled", false);
    } else {
      $(".js-carouselInner").css({ transform: "translateX(" + -ow + "px)" });
      $(this).prop("disabled", true);
    }
  });
});
