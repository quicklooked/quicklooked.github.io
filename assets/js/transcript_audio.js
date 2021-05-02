$("audio.with-transcript").each(function () {
	var $audio_el = $(this);
	var source = $audio_el.find("source").attr("src");
	var timecodes = {};
	var $list = $('ul[data-audio-file="' + source + '"]');
	var $items = $("li", $list);
	var markers = [];
	$items.each(function () {
		var timecode = $(this).attr("data-timecode");
		timecodes[timecode] = {};
		timecodes[timecode]["el"] = $(this);
		timecodes[timecode]["offset"] = $(this).offset().top - $list.offset().top;

		if ($(this).hasClass("timecode-marker")) {
			var timeparts = timecode.split(":");
			$.each(timeparts, function (index, val) {
				timeparts[index] = parseInt(val);
			});
			var seconds = calc_seconds(timeparts);
			markers.push(seconds);
		}
	});
	$audio_el.mediaelementplayer({
		features: ["playpause", "current", "progress", "duration", "markers"],
		markers: markers,
		stretching: "responsive",
		markerCallback: function (media, time) {
			console.log("reached marker!");
		}
	});

	$audio_el
		.on("canplaythrough", function () {})
		.bind("timeupdate", function () {
			var current_time = $audio_el[0].currentTime;
			var current_minutes = formatNumber(parseInt(current_time / 60, 10));
			var current_seconds = formatNumber(parseInt(current_time % 60));

			var timecode_index = current_minutes + ":" + current_seconds;
			console.log(current_minutes + ":" + current_seconds);
			if (typeof timecodes[timecode_index] !== "undefined") {
				if (!timecodes[timecode_index]["el"].hasClass("current")) {
					$(".current", $list).removeClass("current");
					timecodes[timecode_index]["el"].addClass("current");
					$list.animate(
						{
							scrollTop: timecodes[timecode_index]["offset"]
						},
						500
					);
				}
			}
		});
});

function formatNumber(n) {
	return n > 9 ? "" + n : "0" + n;
}

function calc_seconds(array) {
	var sum = 0;
	switch (array.length) {
		case 1:
			sum += array[0];
			break;
		case 2:
			sum += array[0] * 60;
			sum += array[1];
			break;
		case 3:
			sum += array[0] * 60 * 60;
			sum += array[1] * 60;
			sum += array[2];
			break;
	}
	return sum;
}
