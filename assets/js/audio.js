$(document).ready(function() {});
$(window).on('load', function() {});
$(window).resize(function() {});

function addAudioControls() {
  $(".PodcastEpisode_Player").each(function() {
    var playerID = $(this).find("audio").attr("id");
    var audio = document.getElementById(playerID);
    var isDragging = false;
    var currentVolume = 1;
    var isVolDragging = false;
    audio.addEventListener("canplaythrough", function() {
      var audioMinutes = audio.duration / 60;
      if(audioMinutes.toFixed(2) != "NaN") {
        $("#" + playerID).parent().find(".GNPAplayerControls_Time").html(audioMinutes.toFixed(2));
      } else {
        $("#" + playerID).parent().find(".GNPAplayerControls_Time").html("Loading");
      }
      $("#" + playerID).parent().find(".GNPAplayerControls_VolumeBarProg").css("width", audio.volume * 100 + "%");
    }, false);
    $(this).find(".GNPAplayerControls_Play").click(function(e) {
      audio.play();
      $(this).parent().find(".GNPAplayerControls_Play").css("display", "none");
      $(this).parent().find(".GNPAplayerControls_Pause").css("display", "flex");
      console.log("Play1: " + $(this).parent().parent().parent().parent().find("audio").attr("id"));
      e.stopImmediatePropagation();
    });
    $(this).find(".GNPAplayerControls_Pause").click(function(e) {
      audio.pause();
      $(this).parent().find(".GNPAplayerControls_Play").css("display", "flex");
      $(this).parent().find(".GNPAplayerControls_Pause").css("display", "none");
      //console.log("Pause1: "+$(this).parent().parent().parent().parent().find("audio").attr("id"));
      e.stopImmediatePropagation();
    });
    $(this).find(".GNPAplayerControls_ScrubBar").on('mousedown touchstart', function(e) {
      //console.log("start");
      $("DebugText").html();
      isDragging = true;
      var clickBarPercent = (e.clientX - 10 - $(this).offset().left) / $(this).width();
      audio.currentTime = audio.duration * clickBarPercent;
    });
    $(this).find(".GNPAplayerControlsLeft").on('mouseenter mousemove', function(e) {
      if(isDragging) {
        //console.log("move");
        audio.pause();
        $(this).parent().find(".GNPAplayerControls_Play").css("display", "flex");
        $(this).parent().find(".GNPAplayerControls_Pause").css("display", "none");
        var clickBarPercent = (e.clientX - 10 - $(this).find(".GNPAplayerControls_ScrubBar").offset().left) / $(this).find(".GNPAplayerControls_ScrubBar").width();
        audio.currentTime = audio.duration * clickBarPercent;
      }
    })
    $(this).find(".GNPAplayerControlsLeft").on('mouseup mouseleave touchend', function(e) {
      if(isDragging) {
        var clickBarPercent = (e.clientX - 10 - $(this).find(".GNPAplayerControls_ScrubBar").offset().left) / $(this).find(".GNPAplayerControls_ScrubBar").width();
        if(clickBarPercent > 0) {
          audio.currentTime = audio.duration * clickBarPercent;
        }
      }
      isDragging = false;
      //console.log("end");
    });
    $(this).find(".GNPAplayerControls_VolumeOn").click(function() {
      document.getElementById(playerID).volume = 0;
      $(this).parent().find(".GNPAplayerControls_VolumeOff").css("display", "flex");
      $(this).parent().find(".GNPAplayerControls_VolumeOn").css("display", "none");
      $(this).parent().find(".GNPAplayerControls_VolumeBarProg").css("width", "2%");
    });
    $(this).find(".GNPAplayerControls_VolumeOff").click(function() {
      document.getElementById(playerID).volume = currentVolume;
      $(this).parent().find(".GNPAplayerControls_VolumeOff").css("display", "none");
      $(this).parent().find(".GNPAplayerControls_VolumeOn").css("display", "flex");
      $(this).parent().find(".GNPAplayerControls_VolumeBarProg").css("width", "100%");
    });
    $(this).find(".GNPAplayerControls_VolumeBar").on('mousedown touchstart', function(e) {
      //console.log("Vstart");
      isVolDragging = true;
      var clickVolBar = (e.clientX - $(this).offset().left) / $(this).width();
      var clickVolBarPercent = Math.ceil((e.clientX - $(this).offset().left) / $(this).width() * 100);
      if(clickVolBar < 0) {
        clickVolBar = 0;
      }
      if(clickVolBar > 1) {
        clickVolBar = 1;
      }
      audio.volume = clickVolBar;
      currentVolume = clickVolBar;
      $(this).parent().find(".GNPAplayerControls_VolumeBarProg").css("width", clickVolBarPercent + "%");
      if(clickVolBarPercent > 5) {
        $(this).parent().find(".GNPAplayerControls_VolumeOff").css("display", "none");
        $(this).parent().find(".GNPAplayerControls_VolumeOn").css("display", "flex");
      } else {
        $(this).parent().find(".GNPAplayerControls_VolumeOff").css("display", "flex");
        $(this).parent().find(".GNPAplayerControls_VolumeOn").css("display", "none");
        $(this).parent().find(".GNPAplayerControls_VolumeBarProg").css("width", "2%");
      }
    });
    $(this).find(".GNPAplayerControls_Volume").on('mouseenter mousemove', function(e) {
      if(isVolDragging) {
        //console.log("Vmove");
        var clickVolBar = (e.clientX - $(this).find(".GNPAplayerControls_VolumeBar").offset().left) / $(this).find(".GNPAplayerControls_VolumeBar").width();
        var clickVolBarPercent = Math.ceil((e.clientX - $(this).find(".GNPAplayerControls_VolumeBar").offset().left) / $(this).find(".GNPAplayerControls_VolumeBar").width() * 100);
        if(clickVolBar < 0) {
          clickVolBar = 0;
        }
        if(clickVolBar > 1) {
          clickVolBar = 1;
        }
        audio.volume = clickVolBar;
        currentVolume = clickVolBar;
        $(this).find(".GNPAplayerControls_VolumeBarProg").css("width", clickVolBarPercent + "%");
        if(clickVolBarPercent > 5) {
          $(this).find(".GNPAplayerControls_VolumeOff").css("display", "none");
          $(this).find(".GNPAplayerControls_VolumeOn").css("display", "flex");
        } else {
          $(this).find(".GNPAplayerControls_VolumeOff").css("display", "flex");
          $(this).find(".GNPAplayerControls_VolumeOn").css("display", "none");
          $(this).find(".GNPAplayerControls_VolumeBarProg").css("width", "2%");
        }
      }
    })
    $(this).find(".GNPAplayerControls_Volume").on('mouseup mouseleave touchend', function(e) {
      if(isVolDragging) {
        var clickVolBar = (e.clientX - $(this).find(".GNPAplayerControls_VolumeBar").offset().left) / $(this).find(".GNPAplayerControls_VolumeBar").width();
        var clickVolBarPercent = Math.ceil((e.clientX - $(this).find(".GNPAplayerControls_VolumeBar").offset().left) / $(this).find(".GNPAplayerControls_VolumeBar").width() * 100);
        if(clickVolBar < 0) {
          clickVolBar = 0;
        }
        if(clickVolBar > 1) {
          clickVolBar = 1;
        }
        audio.volume = clickVolBar;
        currentVolume = clickVolBar;
        $(this).find(".GNPAplayerControls_VolumeBarProg").css("width", clickVolBarPercent + "%");
        if(clickVolBarPercent > 5) {
          $(this).find(".GNPAplayerControls_VolumeOff").css("display", "none");
          $(this).find(".GNPAplayerControls_VolumeOn").css("display", "flex");
        } else {
          $(this).find(".GNPAplayerControls_VolumeOff").css("display", "flex");
          $(this).find(".GNPAplayerControls_VolumeOn").css("display", "none");
          $(this).find(".GNPAplayerControls_VolumeBarProg").css("width", "2%");
        }
      }
      isVolDragging = false;
      //console.log("Vend");
    });
  });
  int = window.setInterval(updateProgress, 300);

  function updateProgress() {
    $(".PodcastEpisode_Player").each(function() {
      var playerID = $(this).find("audio").attr("id");
      var audio = document.getElementById(playerID);
      progress_seconds = audio.currentTime;
      progress_percent = Math.ceil(audio.currentTime / audio.duration * 100);
      var audioMinutes = progress_seconds / 60;
      var audioMinutesTotal = audio.duration / 60;
      $("#" + playerID).parent().find('.GNPAplayerControls_TimeNow').html(audioMinutes.toFixed(2));
      $("#" + playerID).parent().find('.GNPAplayerControls_ScrubBarProg').css('width', progress_percent + "%");
      //10% tracking
      if($("#" + playerID).parent().find('.GNPAplayerControls_ScrubBarProg').attr("data-playstatus") == "unplayed" && progress_percent > 10) {
        $("#" + playerID).parent().find('.GNPAplayerControls_ScrubBarProg').attr("data-playstatus", "10");
      }
      //50% tracking
      if($("#" + playerID).parent().find('.GNPAplayerControls_ScrubBarProg').attr("data-playstatus") == "10" && progress_percent > 50) {
        $("#" + playerID).parent().find('.GNPAplayerControls_ScrubBarProg').attr("data-playstatus", "50");
      }
      //90% tracking
      if($("#" + playerID).parent().find('.GNPAplayerControls_ScrubBarProg').attr("data-playstatus") == "50" && progress_percent > 90) {
        $("#" + playerID).parent().find('.GNPAplayerControls_ScrubBarProg').attr("data-playstatus", "90");
      }
      if(audioMinutesTotal.toFixed(2) != "NaN") {
        $("#" + playerID).parent().find(".GNPAplayerControls_Time").html(audioMinutesTotal.toFixed(2));
      } else {
        $("#" + playerID).parent().find(".GNPAplayerControls_Time").html("Loading");
      }
      $("#" + playerID).parent().find(".GNPAplayerControls_VolumeBarProg").css("width", audio.volume * 100 + "%");
      if(audio.duration > 0 && !audio.paused) {
        //Its playing...do your job
        $(this).parent().find(".GNPAplayerControls_Play").css("display", "none");
        $(this).parent().find(".GNPAplayerControls_Pause").css("display", "flex");
      } else {
        //Not playing...maybe paused, stopped or never played.
        $(this).parent().find(".GNPAplayerControls_Play").css("display", "flex");
        $(this).parent().find(".GNPAplayerControls_Pause").css("display", "none");
      }
    });
  };
}
