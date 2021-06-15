window.nmplayer = function(e) {
  if(typeof $ == 'undefined') {}
  if(!(this instanceof window.nmplayer)) {
    return new window.nmplayer(e);
  }
  $("nav").css("display", "none");
  this.setup;
  this.jwplayer;
  this.syncData;
  let optionsMenuToggle = false,
    qualityMenuToggle = false,
    seasonsMenuToggle = false,
    timer,
    tap = null,
    tapCount = 10,
    isSeeking = false,
    subOffset = 0,
    message,
    lock = false,
    upnext = false,
    eggBoiled = 0;
  const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  const isFirefox = window.navigator.userAgent.includes('Firefox');
  const isSafari = /constructor/i.test(window.HTMLElement) || (function(p) {
    return p.toString() === "[object SafariRemoteNotification]";
  })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  const isIE = /*@cc_on!@*/ false || !!document.documentMode;
  const isEdge = !isIE && !!window.StyleMedia;
  const isEdgeChromium = window.navigator.userAgent.includes('Edg');
  const isChrome = window.navigator.userAgent.includes('Chrome');
  const isTizen = window.navigator.userAgent.includes('Firefox/47.0');
  const isOmi = window.navigator.userAgent.includes('OMI');
  const supportsBackgroundLoading = jwplayer().getEnvironment().Features.backgroundLoading && !(/PlayStation|Chrome\/49/).test(navigator.userAgent);
  const isMobile = {
    Android: function() {
      if(navigator.userAgent.match(/Android/i)) {
        return true;
      }
    },
    BlackBerry: function() {
      if(navigator.userAgent.match(/BlackBerry/i)) {
        return true;
      }
    },
    iOS: function() {
      if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        return true;
      }
    },
    Opera: function() {
      if(navigator.userAgent.match(/Opera Mini/i)) {
        return true;
      }
    },
    Windows: function() {
      if(navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)) {
        return true;
      }
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  this.setup = (f) => {
    this.jwplayer = f.jwplayerInstance.setup(f.jwplayerSetup);
    if(typeof f.jwplayerSetup.key == 'undefined' || typeof jwplayer_hls_provider != "undefined") {
      jwplayer_hls_provider.attach();
    }
    jwplayer().on("ready", (e) => {
      $("video").append(`<div class="libassjs-canvas-parent"></div>`);
      $('.jwplayer').prepend(`
                <div id="overlay" class="absolute flex flex-col w-full h-screen p-0 mx-0 text-white">
                    <div id="overlay-top" class="absolute left-0 flex flex-row w-full h-24 px-8 py-4 md:mr-8 lg:px-16">
                        <button data-button="back" id="back" class="w-16 h-16 p-5 mx-2 text-white back"></button>
                        <button data-button="quality" id="quality" class="hidden w-16 h-16 p-5 mx-2 text-white quality"></button>
                        <button data-button="options" id="options" class="hidden w-16 h-16 p-5 mx-2 text-white options"></button>
                        <button data-button="previous" id="previous" class="w-16 h-16 p-5 mx-2 text-white previous"></button>
                        <button data-button="next" id="next" class="w-16 h-16 p-5 mx-2 text-white next"></button>
                        <button data-button="seasons"  id="seasons" class="hidden w-16 h-16 p-5 mx-2 text-white seasons"></button>
                    </div>
                    <div id="overlay-center" class="flex flex-row w-full h-full p-0 mx-0">
                        <div id="player-message" class="row player-message"></div>
                        <div id="spinner" class="spinner"></div>
                        <div class="hidden nextup z-100" onclick="nmplayer.nextClick()">
                            <div class="bg"></div>
                            <div class="triangle"></div>
                            &nbsp;&nbsp;  next episode
                        </div>
                        <div class="absolute top-0 left-0 w-6/12 h-screen pr-2 py-auto lg:w-3/12 rewind notification">
                            <div class="flex flex-col items-center justify-center w-full h-full pr-2 md:flex-row rewind-icon icon" style="background-color: #ffffff2e;border-radius: 0% 150% 150% 0%/ 100% 100% 100% 100%;">
                                <div class="flex flex-row">
                                    <button class="fast-rewind" type="button"></button>
                                    <button class="fast-rewind" type="button"></button>
                                    <button class="fast-rewind" type="button"></button>
                                </div>
                                <span class="text-center sm:mx-auto lg:mx-2 rewind">10 seconds</span>
                            </div>
                        </div>
                        <div class="absolute top-0 right-0 w-6/12 h-screen pl-2 py-auto lg:w-3/12 forward notification">
                            <div class="flex flex-col items-center justify-center w-full h-full pl-2 md:flex-row forward-icon icon" style="background-color: #ffffff2e;border-radius: 150% 0% 0% 150%/ 100% 100% 100% 100%;">
                                <div class="flex flex-row">
                                    <button class="fast-forward" type="button"></button>
                                    <button class="fast-forward" type="button"></button>
                                    <button class="fast-forward" type="button"></button>
                                </div>
                                <span class="text-center sm:mx-auto lg:mx-2 forward">10 seconds</span>
                            </div>
                        </div>
                    </div>
                    <div id="slider-container" data-button="slider pt-6" class="w-11/12 mx-auto">
                        <div id="slider" data-button="slider" class="relative left-0 w-full">
                            <div id="slider-pop" data-button="slider-pop">
                                <div id="slider-image" src"#"></div>
                                <div id="slider-time" class="time"></div>
                            </div>
                            <span id="buffer" data-button="buffer"></span>
                            <span id="time" data-button="slider"></span>
                            <span id="time-nipple" class="" data-button="slider"></span>
                        </div>
                    </div>
                    <div id="overlay-bottom" class="absolute bottom-0 left-0 flex flex-row w-full h-24 px-4 py-2 mb-0 md:mb-0 lg:px-16">
                        <button id="btn-playback" data-button="playback" class="w-16 h-16 p-5 mx-2 text-white pause" type="button"></button>
                        <button id="btn-mute-mobile" data-button="mute" class="w-16 h-16 p-5 mx-2 text-white unmute unmuted" type="button"></button>
                        <div id="current-time" class="w-24 h-12 pt-3 mr-4 text-center text-white 3xl:pt-2 time current-time" >00:00</div>
                        <div id="remaining-time" class="w-24 h-12 pt-3 ml-auto text-center text-white 3xl:pt-2 time remaining-time" >00:00</div>
                        <button data-button="fullscreen" id="btn-fullscreen" class="w-16 h-16 p-5 mx-2 text-white fullscreen" type="button"></button>
                    </div>

                    <div id="optionsMenu" class="absolute top-0 right-0 flex flex-col h-full p-5 bg-black sm:h-screen bg-opacity-90">
                        <div class="flex-row w-full px-2 py-2">
                        <button data-button="close" class="float-right w-10 h-10 close"></button>
                        </div>
                        <div class="flex flex-row w-full h-full mt-6">
                        <div id="audioMenu" class="flex-col float-left w-6/12 text-3xl font-bold text-center lg:mx-8">
                            Audio
                            <div id="audios" class="flex flex-col w-full h-full mt-4 overflow-x-hidden overflow-y-auto text-base xl:px-4 lg:mt-10 lext-left">
                            </div>
                        </div>
                            <div id="subtitleMenu" class="flex-col float-left w-6/12 text-3xl font-bold text-center lg:mx-8">
                                Subtitles
                                <div id="subtitles" class="flex flex-col w-full h-full mt-4 overflow-x-hidden overflow-y-auto text-base xl:px-4 lg:mt-10 lext-left">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="seasonsMenu" class="absolute top-0 right-0 flex-col w-full h-full p-5 bg-black sm:h-screen bg-opacity-90">
                        <div class="flex flex-row w-full px-2 py-2">
                            <button data-button="season-back" class="w-3/12 h-4 left-arrow" style="height: 45px;"></button>
                            <div id="season-menu-name" class="w-full h-12 py-4 text-2xl text-center float-center text-bold"></div>
                            <button data-button="close" class="w-10 h-10 close"></button>
                        </div>
                        <div id="season-forward-container" class="flex-col hidden w-full h-full px-2 overflow-y-auto season-forward-container"></div>
                        <div id="seasons-container" class="w-full h-full overflow-hidden seasons-container"></div>

                    </div>

                    <div id="qualityMenu" class="absolute flex-col hidden p-5 bg-black bg-opacity-50">
                        <div class="flex flex-row w-full px-2 py-2">
                            <div class="w-full h-12 py-4 text-2xl text-center float-center text-bold"></div>
                            <button data-button="quality" class="w-10 h-10 px-3 bg-gray-800 qual" onclick="$('.qualityMenuItem').hide();$('#qualities').show();">Q</button>
                            <button data-button="aspect" class="w-10 h-10 px-3 bg-gray-800 aspect" onclick="$('.qualityMenuItem').hide();$('#aspects').show();">A</button>
                            <button data-button="close" class="w-10 h-10 px-3 close"></button>
                        </div>

                        <div id="aspects" class="flex-col hidden w-full h-full px-2 overflow-y-auto qualityMenuItem">
                            <div class="flex-row w-full h-8 px-8 py-2 text-right" onclick="nmplayer.changeAspectRatio('contain');$('.activeAspectItem').hide();$('#active_aspect_contain').show()"">
                                <p id="aspect_contain" class="float-right w-5/12 pl-3 text-right">Contain</p>
                                <div id="active_aspect_contain" class="float-left w-2/12 pr-3 activeAspectItem">âœ”</div>
                            </div>
                            <div class="flex-row w-full h-8 px-8 py-2 text-right" onclick="nmplayer.changeAspectRatio('cover');$('.activeAspectItem').hide();$('#active_aspect_cover').show()"">
                                <p id="aspect_contain" class="float-right w-5/12 pl-3 text-right">Cover</p>
                                <div id="active_aspect_cover" class="hidden float-left w-2/12 pr-3 activeAspectItem">âœ”</div>
                            </div>
                            <div class="flex-row w-full h-8 px-8 py-2 text-right" onclick="nmplayer.changeAspectRatio('fill');$('.activeAspectItem').hide();$('#active_aspect_fill').show()"">
                                <p id="aspect_contain" class="float-right w-5/12 pl-3 text-right">Fill</p>
                                <div id="active_aspect_fill" class="hidden float-left w-2/12 pr-3 activeAspectItem">âœ”</div>
                            </div>
                        </div>
                        <div id="qualities" class="flex-col w-full h-full px-2 overflow-y-auto qualityMenuItem"></div>
                    </div>
                    <div id="subtitle-window" class="subtitle-window"></div>
                </div>
            `);
    });
    jwplayer().on("ready", (e) => {
      if(typeof window.nmsync == 'undefined') {
        if(new URLSearchParams(window.location.search).get('season') !== null && new URLSearchParams(window.location.search).get('episode') !== null) {
          nmplayer.setEpisode(new URLSearchParams(window.location.search).get('season'), new URLSearchParams(window.location.search).get('episode'));
        } else if(new URLSearchParams(window.location.search).get('type') !== null && new URLSearchParams(window.location.search).get('item') !== null) {
          nmplayer.setEpisode(0, new URLSearchParams(window.location.search).get('item'));
        } else {
          nmplayer.setEpisode(1, 1);
        }
      }
      setTimeout(() => {
        jwplayer().play();
      }, 300);
    });
    jwplayer().on("playlist", (e) => {
      preloadImages();
      setTimeout(() => {
        loadPreviewSlider();
      }, 1500);
    });
    jwplayer().on("playlistItem", (e) => {
      nmplayer.subtitleOffset(0);
      clearTimeout(next);
      setTimeout(() => {
        loadPreviewSlider();
      }, 1500);
      buttonDisplay();
    });
    jwplayer().on("viewable", (e) => {
      addEventListeners();
    });
    jwplayer().on("beforePlay", (e) => {
      $("#slider-pop").css('display', 'none');
      document.title = jwplayer().getPlaylistItem().title;
      window.newTime = 0;
      $('#remaining-time').text(humanTime(jwplayer().getDuration() - jwplayer().getPosition()));
      if(jwplayer().getMute()) {
        $("#btn-mute-mobile").toggleClass("unmuted", "muted");
      };
      hideOptionsMenu();
      hideSeasonsMenu();
      hideQualityMenu();
      if(typeof window.nmsync == 'undefined') {
        setAudioTrack();
        setSubtitleTrack();
      }
    });
    jwplayer().on("play", (e) => {
      lock = false;
      $('.spinner').css("display", "none");
      $("#btn-playback").removeClass("play");
      $("#btn-playback").addClass("pause");
      hideControls();
    });
    jwplayer().on("pause", (e) => {
      lock = true;
      $("#btn-playback").removeClass("pause");
      $("#btn-playback").addClass("play");
      showControls();
    });
    jwplayer().on("firstFrame", (e) => {
      $('.spinner').css("display", "none");
    });
    jwplayer().on("playlistComplete", (e) => {
      nmplayer.goBack();
    });
    jwplayer().on('warning', (e) => {});
    jwplayer().on("error", (e) => {});
    jwplayer().on("mediaError", (e) => {});
    jwplayer().on("mute", (e) => {
      if(e.mute) {
        $("#btn-mute-mobile").removeClass("unmuted");
        $("#btn-mute-mobile").addClass("muted");
      } else {
        $("#btn-mute-mobile").removeClass("muted");
        $("#btn-mute-mobile").addClass("unmuted");
      }
    });
    jwplayer().on("fullscreen", (e) => {
      $("#btn-fullscreen").toggleClass("fullscreen-not", "fullscreen");
    });
    jwplayer().on("time", (e) => {
      $('.spinner').css("display", "none");
      $('.current-time').text(humanTime(e.position));
      $('#remaining-time').text(humanTime(jwplayer().getDuration() - jwplayer().getPosition()))
      $("#slider>#time").css("width", `${(jwplayer().getPosition() / jwplayer().getDuration()) * 100}%`);
      firstError = true;
      if(jwplayer().getCurrentCaptions() == 0 && jwplayer().getPlaylistItem().tracks) {
        $('.subtitle-window').text('');
      } else {
        getCue(e.position);
      }
    });
    jwplayer().on("bufferChange", (e) => {
      let percentage = (jwplayer().getPosition() + jwplayer().getBuffer()) / jwplayer().getDuration() * 100;
      percentage = percentage > 100 ? 100 : percentage;
      $("#slider>#buffer").css("width", percentage + "%");
    });
    jwplayer().on("seek", (e) => {
      $('.spinner').css('display', 'block');
      $(".subtitle-window").html('');
      window.newTime = 0;
      var percentage = (e.offset / jwplayer().getDuration()) * 100;
      $("#slider span").css("width", percentage + "%");
      $('.current-time').text(humanTime(e.offset));
    });
    jwplayer().on("seeked", (e) => {
      $('.spinner').css('display', 'none');
      jwplayer().play();
    });
    function clearToggles() {
      optionsMenuToggle = false;
      audioMenuToggle = false;
      qualityMenuToggle = false;
    }

    function toggleQualityMenu() {
      hideOptionsMenu();
      hideQualityMenu();
      hideSeasonsMenu();
      $('[data-button="level"]').click(function() {
        qualityMenuToggle = false;
        $('#qualityMenu').css("display", "none");
        jwplayer().play();
      });
      if(qualityMenuToggle == false) {
        showQualityMenu();
      } else {
        hideQualityMenu();
      }
    };

    function showQualityMenu() {
      qualityMenuToggle = true;
      jwplayer().pause();
      $('#qualityMenu').css("display", "flex");
    }

    function hideQualityMenu() {
      qualityMenuToggle = false;
      $('#qualityMenu').css("display", "none");
    }

    function toggleOptionsMenu() {
      hideOptionsMenu();
      hideQualityMenu();
      hideSeasonsMenu();
      $('[data-button="audio"],[data-button="subtitle"]').click(function() {
        optionsMenuToggle = false;
        $('#qualityMenu').css("display", "none");
        jwplayer().play();
      });
      if(optionsMenuToggle == false) {
        showOptionsMenu();
      } else {
        hideOptionsMenu();
      }
    };

    function showOptionsMenu() {
      optionsMenuToggle = true;
      jwplayer().pause();
      $('#optionsMenu').css("display", "flex");
      $("#optionsMenu").css('right', '0');
      $("#subtitle-window").css('display', 'none');
    };

    function hideOptionsMenu() {
      optionsMenuToggle = false;
      $('#optionsMenu').css("display", "none");
      $("#optionsMenu").css('right', '-40vw');
      $("#subtitle-window").css('display', 'block');
    };

    function toggleSeasonsMenu() {
      hideOptionsMenu();
      hideQualityMenu();
      hideSeasonsMenu();
      _seasonBack();
      let season = new URLSearchParams(window.location.search).get('season') || '01';
      _seasonForward(season);
      $('#season-menu-name').text(`Season ${season != 0 ? season : 'specials'}`)
      scroll_to_div(`#${new URLSearchParams(window.location.search).get('item') || jwplayer().getPlaylistIndex()}`);
      $('[data-button="video"]').click(function() {
        qualityMenuToggle = false;
        $('#seasonsMenu').css("display", "none");
      });
      if(optionsMenuToggle == false) {
        showSeasonsMenu();
      } else {
        hideSeasonsMenu();
      }
    };

    function showSeasonsMenu() {
      seasonsMenuToggle = true;
      jwplayer().pause();
      $('#seasonsMenu').css("display", "flex");
      $("#seasonsMenu").css('right', '0');
      $("#subtitle-window").css('display', 'none');
    };

    function hideSeasonsMenu() {
      seasonsMenuToggle = false;
      $('#seasonsMenu').css("display", "none");
      $("#seasonsMenu").css('right', '-40vw');
      $("#subtitle-window").css('display', 'block');
    };

    function dynamicControls() {
      showControls();
      clearTimeout(timer);
      if(lock == false && optionsMenuToggle == false && seasonsMenuToggle == false) {
        timer = setTimeout(hideControls, 5000);
      }
    };

    function showControls() {
      $("#overlay,.jwplayer").addClass("active");
      $('*').css('cursor', 'unset');
    };

    function hideControls() {
      if(lock == false) {
        $("#overlay,.jwplayer").removeClass("active");
        $('*').css('cursor', 'none');
      }
    };

    function toggleFullscreen() {
      jwplayer().setFullscreen();
    };

    function togglePlayback() {
      switch(jwplayer().getState()) {
        case 'paused':
          jwplayer().play();
          break;
        case 'playing':
          jwplayer().pause();
          break;
        default:
          break;
      }
    };

    function toggleMute() {
      jwplayer().setMute(!jwplayer().getMute());
    };

    function _seasonBack() {
      $('.season').css('display', 'none');
      $('#seasons-container').css('display', 'none');
      $('#season-menu-name').text(``)
      $('[data-button="season-back"]').css("display", "none");
      $("#season-forward-container").css("display", "flex");
    };

    function _seasonForward(season) {
      season = String(zeroPad(season, 2));
      $('.season').css('display', 'none');
      $('#seasons-container').css('display', 'flex')
      $('#seasonsMenu').css('display', 'flex')
      $("#season-forward-container").css("display", "none");
      $('[data-button="season-back"]').css("display", "flex");
      $('#season-menu-name').text(`Season ${season != 0 ? season : 'specials'}`)
      $(`#season-${season != 0 ? season : 'specials'}-container`).css("display", "flex");
    };

    function _changeSource(source) {
      $(".subtitle-window").html('');
      const vid = document.querySelector('video');
      if(typeof jwplayer_hls_provider != "undefined") {
        jwplayer().hls.detachMedia()
        jwplayer().hls = new Hls();
        jwplayer().hls.loadSource(source);
        jwplayer().hls.attachMedia(vid);
        jwplayer().hls.on(Hls.Events.MANIFEST_PARSED, (e) => {
          if(typeof window.nmsync == 'undefined') {
            setAudioTrack();
            setSubtitleTrack();
          }
        });
      }
    };

    function buttonDisplay() {
      if(jwplayer().getPlaylist().length > 1) {
        $("#previous").css("display", "flex");
        $("#next").css("display", "flex");
      }
      if(jwplayer().getPlaylistIndex() > 0 && jwplayer().getPlaylist().length > 1) {
        $("#previous").css("display", "flex");
        $("#previous").attr("title", jwplayer().getPlaylist()[jwplayer().getPlaylistIndex() - 1].title);
      } else {
        $("#previous").css("display", "none");
      }
      if(!jwplayer().getPlaylist()[jwplayer().getPlaylistIndex() + 1] && jwplayer().getPlaylist().length >= 1) {
        $("#next").css("display", "none");
      } else {
        $("#next").css("display", "flex");
        $("#next").attr("title", jwplayer().getPlaylist()[jwplayer().getPlaylistIndex() + 1].title);
      }
      let last;
      for(i = jwplayer().getPlaylistIndex(); i < jwplayer().getPlaylist().length; i++) {
        if(jwplayer().getPlaylist()[i].file !== null) {
          last = i;
          this.last = i;
        }
      }
      if(jwplayer().getPlaylistIndex() == last) {
        $("#next").css("display", "none");
      }
      if(jwplayer().getPlaylist().length > 1) {
        $('#seasons').removeClass('hidden');
      }
    };
    function setSubtitleTrack() {
      if(typeof localStorage !== 'undefined') {
        jwplayer().getPlaylistItem().tracks.forEach((e, index) => {
          if(e.name != null && e.name.replace(' ', '_') == localStorage.getItem('jwplayer.captionLabel')) {
            jwplayer().setCurrentCaptions(index);
          }
        });
      }
    };

    function setAudioTrack() {
      if(typeof localStorage !== 'undefined') {
        jwplayer().getAudioTracks().forEach((e, index) => {
          if(e.name != null && e.name.replace(' ', '_') == localStorage.getItem('jwplayer.audioLabel')) {
            jwplayer().setCurrentAudioTrack(index);
          }
        });
      }
    };

    function preloadImages() {
      jwplayer().getPlaylist().forEach(function(i) {
        i.tracks.forEach(function(t) {
          if(t.kind == 'thumbnails') {
            $('.preload-images').attr('src', t.file.replace("previews.vtt", "sprite.webp"));
          }
        });
      });
    }

    function scroll_to_div(hash) {
      let target = $(hash);
      headerHeight = 200;
      if(target.length) {
        $(".active>.episode-list").stop().animate({
          scrollTop: target.offset().top - headerHeight // offsets for fixed header
        }, "linear");
      }
    }

    function humanTime(time) {
      var st;
      ct = parseInt(time);
      if(st != ct) {
        st = ct;
        var hours = parseInt(st / 3600);
        var minutes = parseInt(
          (st % 3600) / 60);
        var seconds = parseInt(st % 60);
        if(("" + minutes).length == 1) {
          minutes = "0" + minutes;
        }
        if(("" + seconds).length == 1) {
          seconds = "0" + seconds;
        }
        if(hours != 0) {
          var hours = "" + hours + ":";
        } else {
          var hours = "";
        }
        current = hours + minutes + ":" + seconds;
      }
      return current.replace("NaN:NaN:NaN", "00:00");
    };

    function convertToSeconds(hms) {
      var a = hms.split(':');
      return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    }

    function zeroPad(num, places) {
      var zero = places - num.toString().length + 1;
      return Array(+(zero > 0 && zero)).join("0") + num;
    };

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    };
    // Events.
    function onClick(e) {
      switch(e.target.dataset.button) {
        case "back":
          if(typeof window.nmsync !== 'undefined' && !jwplayer().getPlaylistItem().production && (typeof jwplayer().getPlaylistIndex().length == 'undefined' || jwplayer().getPlaylistIndex() == jwplayer().getPlaylistIndex().length) && (jwplayer().getDuration() - jwplayer().getPosition() < 600)) {
            nmsync.theEnd();
          } else {
            nmplayer.goBack();
          }
          break;
        case "close":
          jwplayer().play();
          break;
        case "quality":
          toggleQualityMenu();
          break;
        case "options":
          toggleOptionsMenu();
          break;
          break;
        case "previous":
          $('.spinner').css('display', 'block');
          nmplayer.previous();
          break;
        case "next":
          $('.spinner').css('display', 'block');
          nmplayer.next();
          break;
        case "playback":
          togglePlayback();
          break;
        case "fullscreen":
          toggleFullscreen();
          break;
        case "seasons":
          toggleSeasonsMenu();
          break;
        case "season-back":
          _seasonBack();
          break;
        case "season-forward":
          _seasonForward(e.target.dataset.season || 'Specials');
          break;
        case "mute":
          toggleMute();
          break;
        case "slider":
          break;
        case "session":
          changeAspect();
          break;
        case "href":
          window.location = e.target.dataset.href;
          break;
        case "subtitle":
          jwplayer().setCurrentCaptions(e.target.dataset.track);
          break;
        case "audio":
          if(typeof jwplayer_hls_provider != "undefined") {
            jwplayer().hls.audioTrack = e.target.dataset.track;
          } else {
            jwplayer().setCurrentAudioTrack(e.target.dataset.track);
          }
          break;
        default:
          console.log("no data-button property set");
          break;
      }
      sleep(2000);
    };

    function onVideoClick(e) {
      if(!isMobile.any()) {
        togglePlayback();
      }
      if(isSeeking) {
        if(e.pageX < Math.floor(window.innerWidth / 3.5)) {
          nmplayer.rewindVideo();
        }
        if(e.pageX > (window.innerWidth - Math.floor(window.innerWidth / 3.5))) {
          nmplayer.forwardVideo();
        }
      }
    };

    function onVideoDblclick(e) {
      const video = document.querySelector('video');
      e.preventDefault();
      e.stopPropagation();
      if(e.pageX < Math.floor(window.innerWidth / 3.5)) {
        isSeeking = true;
        nmplayer.rewindVideo();
      }
      if(e.pageX > (window.innerWidth - Math.floor(window.innerWidth / 3.5))) {
        isSeeking = true;
        nmplayer.forwardVideo();
      }
      if(e.pageX > Math.floor(window.innerWidth / 3.5) && e.pageX < (window.innerWidth - Math.floor(window.innerWidth / 3.5))) {
        if(e.pageY < (window.innerHeight - Math.floor(window.innerHeight / 1.4))) {
          if(video.volume != 1) {
            video.volume = video.volume + 0.1;
          }
        }
        if((e.pageY > (window.innerHeight - Math.floor(window.innerHeight / 1.4)) && e.pageY < Math.floor(window.innerHeight / 1.6)) || !isMobile.any()) {
          isSeeking = false;
          toggleFullscreen();
        }
        if(e.pageY > Math.floor(window.innerHeight / 1.6)) {
          video.volume = video.volume - 0.1;
        }
      }
    };

    function addEventListeners() {
      removeEventListeners();
      $("[data-button]").click(function(e) {
        onClick(e)
      });
      $("#overlay").dblclick(function(e) {
        onVideoDblclick(e)
      });
      $("#overlay-center").mousemove(function(e) {
        dynamicControls(e)
      }).click(function(e) {
        onVideoClick(e)
      });
      setTimeout(() => {
        loadSeasons();
      }, 3000);
      document.onkeydown = function(e) {
        switch(e.keyCode) {
          case 107:
            nmplayer.expediteSub();
            break;
          case 109:
            nmplayer.delaySub();
          case 32:
            jwplayer().playToggle()
            break;
          case 37:
            nmplayer.rewindVideo()
            break;
          case 39:
            nmplayer.forwardVideo()
            break;
          default:
            break;
        }
      }
    };

    function removeEventListeners() {
      $("[data-button]").off();
      $("#overlay").off();
      $("#overlay-center").off();
      $("#overlay-center").off();
    };
    // Dynamic builds based on player data.
    function clearLists() {
      $(`#subtitles`).empty();
      $('#audios').empty();
      $('#qualityMenu').empty();
    }

    function loadSeasons() {
      $(`#season-forward-container`).empty();
      $(`#seasons-container`).empty();
      if(new URLSearchParams(window.location.search).get('type') == null) {
        let season = 999,
          style;
        jwplayer().getPlaylist().forEach((e, i) => {
          if(e.season != season) {
            var src;
            season = e.season;
            src = `src="${e.season_image || '/img/poster-not-available.png'}" onerror="this.src='${f.host || ''}/img/poster-not-available.png'"`;
            $('#season-forward-container').append(`
                                <div onclick="nmplayer.seasonForward(${e.season != 0 ? e.season : 'Specials'})" class="flex flex-col mb-2 overflow-hidden season-forward" style="background:${i % 2 == 0 ? '#0a090980' : '#000000ba'}">
                                    <div class="flex flex-row overflow-hidden season-forward">
                                        <div class="flex flex-col justify-center float-left w-32 mx-auto">
                                            <img ${src} alt="" style="display: block;height: 100%;margin: auto; padding: 10%;max-height: 100%;">
                                        </div>
                                        <div class="flex flex-col float-left w-10/12 h-full mr-4">
                                            <div class="flex flex-col h-4 mx-4 my-4 text-center">
                                                ${e.season != 0 ? ' Season ' + e.season : 'Specials'}
                                            </div>
                                            <div class="flex flex-col float-left h-16 mx-4 my-2 overflow-hidden text-xs" style="min-width: 73%;">
                                                ${e.season_overview || ''}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            `);
          }
        });
        season = 999, style;
        jwplayer().getPlaylist().forEach((e, i) => {
          if(e.season != season) {
            season = e.season;
            if(e.season == new URLSearchParams(window.location.search).get('season')) {
              style = 'active';
            } else {
              style = '';
            }
            $('#seasons-container').append(`
                                <div id="season-${e.season != 0 ? e.season : 'Specials'}-container" class="season h-full w-full overflow-hidden flex-col ${style}">
                                    <div id="season-${e.season != 0 ? e.season : 'Specials'}-list" data-seasonList="${e.season != 0 ? e.season : 'Specials'}" class="w-full p-3 mb-2 overflow-y-auto season-list" style="overflow-x: hidden;"></div>
                                </div>
                            `);
          }
        });
        jwplayer().getPlaylist().forEach((e, i) => {
          var src;
          src = `src="${e.image != 'Specials' ? e.image.replace('original', 'original') : '.x'}" onerror="this.src='${f.host || ''}/img/still-not-available.png'"`;
          $(`#season-${e.season != 0 ? e.season : 'Specials'}-list`).append(`
                            <div id="${i}" data-button="video" onclick="nmplayer.setEpisode(${e.season || 0},${e.episode || 'Specials'})" class="w-full h-32 p-2 mb-2" style="background:${i % 2 == 0 ? '#0a090980' : '#000000ba'}">
                                <div data-button="video" class="w-full p-2 text-sm">
                                S${zeroPad(e.season || 0, 2)}E${zeroPad(e.episode || 0, 2)} ${e.title.replace('S H I E L D', 'S.H.I.E.L.D.')}
                                </div>
                                <div class="flex-row h-20">
                                    <div data-button="video" class="float-left w-3/12 h-full px-2 py-1">
                                        <img data-button="video" ${src} alt="" style="display: block;margin: auto;max-height: 100%;">
                                    </div>
                                    <div data-button="video" id="" class="float-left w-9/12 p-1 text-xs overview">
                                        ${e.description}
                                    </div>
                                </div>
                            </div>
                        `);
        });
      } else {
        $(`#seasons-container`).append(`
                        <div data-button="season-back" id="season-1-container" class="season-list-container" style="display:block;width: 100%;margin-top: 50px;">
                            <div data-button="season-back"  id="season-1-button" data-season="1" class="episodes" style="overflow-x: hidden;"></div>
                            <div id="season-1-list" data-seasonList="1" class="episode-list" style="overflow-x: hidden;"></div>
                        </div>
                    `);
        $(`#seasons-container`).addClass('active');
        jwplayer().getPlaylist().forEach((e, i) => {
          $('#season-1-list').append(`
                            <div id="${i}" data-button="video" onclick="nmplayer.setEpisode(1,${i || 0})" class="w-full p-2" style="background:${i % 2 == 0 ? '#0a090980' : '#000000ba'}">
                                <div data-button="video" class="w-full p-2">
                                    #${i} ${e.title.replace('S H I E L D', 'S.H.I.E.L.D.')}
                                </div>
                                <div class="row w-100">
                                    <div data-button="video" class="float-left w-3/12 p-1">
                                        <img data-button="video" id="" src="${e.image != null ? e.image.replace('original', 'w300') : '.x'}" onerror="this.src='${f.host || ''}/img/noimage.thumbnail.jpg'" alt="" style="display: block">
                                    </div>
                                    <div data-button="video" id="" class="float-left w-9/12 p-1 text-sm" style="font-size: 0.8rem;line-height:1rem;font-weight: 500;overflow: hidden;height: 4rem;">
                                        ${e.description}
                                    </div>
                                </div>
                            </div>
                        `);
        });
      }
    };

    function loadPreviewSlider() {
      let previewTime = [];
      let m;
      $("#slider-image").css('background-image', `url('${jwplayer().getPlaylistItem().tracks[0].file.replace("previews.vtt", "sprite.webp").replace('chapters.vtt', 'sprite.webp')}')`);
      $.get(jwplayer().getPlaylistItem().tracks[0].file, function(data) {
        const regex = /(\d{2}:\d{2}:\d{2})\.\d{3}\s-->\s(\d{2}:\d{2}:\d{2})\.\d{3}\nsprite\.webp#(xywh=\d{1,},\d{1,},\d{1,},\d{1,})/gm;
        while((m = regex.exec(data)) !== null) {
          if(m.index === regex.lastIndex) {
            regex.lastIndex++;
          }
          previewTime.push({
            start: m[1],
            end: m[2],
            position: m[3]
          });
        }
      });
      $('#slider').mousemove(function(e) {
        lock = true;
        let parentOffset = $(this).offset().left,
          thisOffset = $(this).offset(),
          relativeXPosition = (e.pageX - thisOffset.left),
          sliderTime = (jwplayer().getDuration() / $('#slider').width()) * relativeXPosition,
          popLeft = relativeXPosition;
        $("#subtitle-window").css('display', 'none');
        $("#time-nipple").css('display', 'block');
        $("#time-nipple").css('left', relativeXPosition);
        $("#slider-pop").css('display', 'flex');
        $("#slider-pop").css('left', popLeft);
        $("#slider-time").html(humanTime(sliderTime));
        previewTime.forEach((match) => {
          let start = convertToSeconds(match.start),
            end = convertToSeconds(match.end);
          if(sliderTime >= start && sliderTime < end) {
            $("#slider-image").css('background-position', `-${match.position.split('=')[1].split(',')[0]}px -${match.position.split('=')[1].split(',')[1]}px`);
          }
        });
      }).mouseleave(function(e) {
        $("#subtitle-window").css('display', 'block');
        $("#slider-pop").css('display', 'none');
        $("#time-nipple").css('display', 'none');
        lock = false;
      }).click(function(e) {
        let offset = $(this).offset();
        let left = e.pageX - offset.left;
        let totalWidth = $("#slider").width();
        let percentage = left / totalWidth;
        let videoTime = jwplayer().getDuration() * percentage;
        jwplayer().seek(videoTime);
      });
      $('.time-nipple').hover(function() {
      })
      $('.time-nipple').mouseleave(function() {
      })
    }
    jwplayer().on('captionsList', (e, index) => {
      $('#options').css("display", "flex");
      $(`#subtitles`).empty();
      jwplayer().getPlaylistItem().tracks.forEach(function(e, i) {
        if(e.kind == "chapters") {
          jwplayer().getPlaylistItem().tracks.splice(i, 1);
        }
      });
      if(jwplayer().getCaptionsList().length > 1) {
        $('#options').css("display", "flex");
      }
      jwplayer().getCaptionsList().forEach((data, index) => {
        $(`#subtitles`).append(`
                    <div class="flex flex-row h-10 px-4 py-3 opacity-50 cursor-pointer w-12/12 hover:opacity-50" data-button="subtitle" data-track="${index}" onclick="jwplayer().setCurrentCaptions(${index});jwplayer().play()">
                    <div id="active_subtitle_${data.label.replace(' ', '_')}" class="hidden w-1/12 pl-4 activeSubItem" data-track="${index}" onclick="jwplayer().setCurrentCaptions(${index});jwplayer().play()" >âœ”</div>
                        <p id="subtitle_${data.label}" class="float-left w-11/12 px-3 ml-auto text-right" data-button="subtitle" data-track="${index}" onclick="jwplayer().setCurrentCaptions(${index});jwplayer().play()" >${data.label}</p>
                    </div>
                `);
      });
      setTimeout(() => {
        $("#active_subtitle_" + jwplayer().getCaptionsList()[jwplayer().getCurrentCaptions()].label.replace(' ', '_')).css("display", "block").parent().css('opacity', '1');
      }, 1500);
      opus();
    });
    jwplayer().on("captionsChanged", (data) => {
      hideOptionsMenu();
      $(".activeSubItem").css("display", "none").parent().css('opacity', '0.65');
      $("#active_subtitle_" + jwplayer().getCaptionsList()[jwplayer().getCurrentCaptions()].label.replace(' ', '_')).css("display", "block").parent().css('opacity', '1');
      if(typeof localStorage !== 'undefined') {
        localStorage.setItem("jwplayer.captionLabel", jwplayer().getCaptionsList()[jwplayer().getCurrentCaptions()].label.replace(' ', '_'));
      }
      opus();
    });
    if(typeof jwplayer_hls_provider != "undefined") {}
    if(typeof jwplayer_hls_provider == "undefined") {
      jwplayer().on('audioTracks', (e) => {
        $('#options').css("display", "flex");
        $('#audios').empty();
        if(jwplayer().getAudioTracks().length > 1) {
          $('#options').css("display", "flex");
        }
        jwplayer().getAudioTracks().forEach((data, index) => {
          $('#audios').append(`
                        <div class="flex flex-row h-10 px-4 py-3 opacity-50 cursor-pointer w-12/12 hover:opacity-100" data-button="subtitle" data-button="audio" data-track="${index}" onclick='jwplayer().setCurrentAudioTrack(${index});'>
                            <div id="active_audio_${data.name}" class="hidden w-1/12 pl-4 activeSubItem" data-button="audio" data-track="${index}" onclick='jwplayer().setCurrentAudioTrack(${index});'>âœ”</div>
                            <p id="audio_${data.name}" class="float-left w-11/12 px-3 ml-auto text-right" data-button="audio" data-track="${index}" onclick='jwplayer().setCurrentAudioTrack(${index});'>
                                ${data.name.replace('SoundHandler', 'English')}
                            </p>
                        </div>
                    `);
        });
        setTimeout(() => {
          $("#active_audio_" + jwplayer().getAudioTracks()[jwplayer().getCurrentAudioTrack()].name || '#active_audio_English').css("display", "block").parent().css('opacity', '1');
        }, 3500);
      });
      jwplayer().on('audioTrackChanged', (e) => {
        hideOptionsMenu();
        $(".activeAudioItem").css("display", "none").parent().css('opacity', '0.65');
        setTimeout(() => {
          $("#active_audio_" + jwplayer().getAudioTracks()[jwplayer().getCurrentAudioTrack()].name).css("display", "block").parent().css('opacity', '1');
          if(typeof localStorage !== 'undefined') {
            localStorage.setItem("jwplayer.audioLabel", jwplayer().getAudioTracks()[jwplayer().getCurrentAudioTrack()].name.replace(' ', '_'));
          }
        }, 1500);
        jwplayer().play();
      });
    }
    if(typeof jwplayer_hls_provider != "undefined") {}
    if(typeof jwplayer_hls_provider == "undefined") {
      jwplayer().on('levels', (e, index) => {
        $('#qualities').empty();
        if(jwplayer().getQualityLevels().length > 1) {
          $("#quality").css("display", "flex");
        }
        jwplayer().getQualityLevels().forEach((data, i) => {
          $('#qualities').append(`
                        <div class="flex-row w-full h-8 px-8 py-2 text-right" data-button="level" data-track="${i}" style="background:${i % 2 == 0 ? '#0a090980' : '#000000ba'}" onclick="jwplayer().setCurrentQuality(${i})">
                        <p id="level_${data.label}" class="float-right w-5/12 pl-3 text-right" data-button="level" data-track="${i}">${data.label == 0 ? 'Auto' : data.label}</p>
                            ${i == 0 ? `<div id="auto_label" class="float-right w-5/12 pl-3 text-right"></div>` : `<div id="auto_label"> </div>`}
                            <div id="active_level_${i}" class="hidden float-left w-2/12 pr-3 activeLevelItem" data-button="level" data-level="${i}">âœ”</div>
                        </div>
                    `);
        });
        setTimeout(() => {
          $(`#active_level_${jwplayer().getCurrentQuality()}`).css("display", "block");
        }, 500);
      });
      jwplayer().on('levelsChanged', (event, data) => {
        $(".activeLevelItem").css("display", "none");
        $(`#active_level_${jwplayer().getCurrentQuality()}`).css("display", "block");
        jwplayer().play();
      });
    }

    function getCue(time) {
      $("#subtitle-window").html('');
      if(typeof jwplayer().getPlaylistItem().tracks[jwplayer().getCurrentCaptions()] != 'undefined') {
        let currentTime = time - (subOffset / 10);
        jwplayer().getPlaylistItem().tracks[jwplayer().getCurrentCaptions()].data.forEach(cue => {
          if(currentTime >= cue.startTime && currentTime <= cue.endTime) {
            $(".subtitle-window").html(cue.text);
          }
        });
      }
    };

    function opus() {
      let subtitleURL, subtitleName;
      if(typeof window.octopusInstance != 'undefined' && typeof window.octopusInstance.video != 'undefined' && window.octopusInstance.video.parentNode != null) {
        window.octopusInstance.dispose();
      }
      $('.libassjs-canvas-parent').remove();
      if(typeof jwplayer_hls_provider != "undefined") {
        subtitleURL = jwplayer().getPlaylistItem().tracks[jwplayer().getCurrentCaptions()].file;
        subtitleName = jwplayer().getPlaylistItem().tracks[jwplayer().getCurrentCaptions()].label;
      } else {
        subtitleURL = jwplayer().getCaptionsList()[jwplayer().getCurrentCaptions()].id;
        subtitleName = jwplayer().getCaptionsList()[jwplayer().getCurrentCaptions()].label;
      }
      $("#active_subtitle_" + subtitleName).css("display", "block");
      var options = {
        video: document.querySelector("video"),
        subUrl: subtitleURL,
        lossyRender: true,
        fonts: ["/fonts/OpenSans-Bold.ttf", "/fonts/OpenSans-BoldItalic.ttf", "/fonts/OpenSans-ExtraBold.ttf", "/fonts/OpenSans-ExtraBoldItalic.ttf", "/fonts/OpenSans-Italic.ttf", "/fonts/OpenSans-Light.ttf", "/fonts/OpenSans-LightItalic.ttf", "/fonts/OpenSans-Regular.ttf", "/fonts/OpenSans-Semibold.ttf", "/fonts/OpenSans-SemiboldItalic.ttf", '/fonts/times.ttf', '/fonts/kaiu.ttf', ],
        debug: true,
        workerUrl: "/js/dist/subtitles-octopus-worker.js"
      };
      window.octopusInstance = new SubtitlesOctopus(options); // You can experiment in console
      if(typeof window.octopusInstance != 'undefined' && typeof window.octopusInstance.video != 'undefined' && window.octopusInstance.video.parentNode != null) {
        window.SubtitlesOctopusOnLoad();
      } else if(typeof window.octopusInstance == 'undefined') {
        window.SubtitlesOctopusOnLoad();
      }
    }
    this.setUpNext = (e) => {
      eggBoiled = e;
    }
    this.nextClick = () => {
      clearTimeout(next);
      $('.nextup').css("display", "none");
      nmplayer.next();
    }
    this.setSubtitleFont = (param, value, save) => {
      if(value == 'delete') {
        console.log(param, value);
        $("#subtitle-window").css(param, 'unset');
        if(save == true) {
          if(typeof localStorage !== 'undefined') {
            localStorage.removeItem(`subtitle-font-${param}`);
          }
        }
      } else {
        console.log(param, value);
        $("#subtitle-window").css(param, value);
        if(typeof localStorage !== 'undefined' && save == true) {
          localStorage.setItem(`subtitle-font-${param}`, value);
        }
      }
    }
    this.seasonForward = (s) => {
      _seasonForward(s)
    }
    this.goBack = () => {
      location.href = document.location.protocol + '//' + document.location.hostname + (f.subroute || '') + jwplayer().getPlaylistItem().backroute;
    };
    this.previous = () => {
      if(jwplayer().getPlaylistIndex() === 0) {} else {
        jwplayer().playlistPrev();
      }
    };
    this.next = () => {
      if(jwplayer().getPlaylistIndex() != jwplayer().getPlaylistIndex().length) {
        jwplayer().playlistItem(jwplayer().getPlaylistIndex() + 1);
      } else {}
    };
    this.setEpisode = (season, episode) => {
      $('.spinner').css('display', 'block');
      jwplayer().getPlaylist().forEach((e, index) => {
        if(new URLSearchParams(window.location.search).get('type') == null) {
          if(e.season == season && e.episode == episode) {
            jwplayer().playlistItem(index);
          }
        } else {
          if(index == episode) {
            jwplayer().playlistItem(index);
          }
        }
      });
    };
    this.subtitleOffset = (e) => {
      subOffset = parseInt(e);
    }
    this.expediteSub = () => {
      subOffset = subOffset + 1;
      clearTimeout(message);
      $('#player-message').css('display', 'block');
      $('#player-message').html(`Subtitle delay: ${subOffset * 10}ms`);
      message = setTimeout(() => {
        $('#player-message').css('display', 'none');
        $('#player-message').empty();
      }, 2000);
    }
    this.delaySub = () => {
      subOffset = subOffset - 1;
      clearTimeout(message);
      $('#player-message').css('display', 'block');
      $('#player-message').html(`Subtitle delay: ${subOffset * 10}ms`);
      message = setTimeout(() => {
        $('#player-message').css('display', 'none');
        $('#player-message').empty();
      }, 2000);
    }
    this.cycleSubtitles = () => {
      if(jwplayer().getCurrentCaptions() < jwplayer().getPlaylistItem().tracks.length) {
        jwplayer().setCurrentCaptions(jwplayer().getCurrentCaptions() + 1);
      } else {
        jwplayer().setCurrentCaptions(0);
      }
      clearTimeout(message);
      $('#player-message').css('display', 'block');
      $('#player-message').html("Subtitle: " + jwplayer().getCaptionsList()[jwplayer().getCurrentCaptions()].label);
      message = setTimeout(() => {
        $('#player-message').css('display', 'none');
        $('#player-message').empty();
      }, 2000);
    }
    this.changeAspectRatio = (val) => {
      $('.jwplayer.jw-stretch-uniform video').css({
        objectFit: val
      });
    }
    this.rewindVideo = () => {
      tapCount = tapCount + 10;
      $(".rewind.notification").css('display', 'flex')
      $("span.rewind").text(`${Math.abs(tapCount)} seconds`);
      clearTimeout(tap);
      tap = setTimeout(function() {
        $(".rewind.notification").css('display', 'none')
        jwplayer().seek(jwplayer().getPosition() - tapCount);
        tapCount = 0;
        isSeeking = false;
      }, 500);
    };
    this.forwardVideo = () => {
      tapCount = tapCount + 10;
      $(".forward.notification").css('display', 'flex')
      $("span.forward").text(`${Math.abs(tapCount)} seconds`);
      clearTimeout(tap);
      tap = setTimeout(function() {
        $(".forward.notification").css('display', 'none');
        jwplayer().seek(jwplayer().getPosition() + tapCount);
        tapCount = 0;
        isSeeking = false;
      }, 500);
    };
  }
  window.addEventListener('warning', function(e) {
    console.log(e);
    alert(e.source + ', ' + e.message + ', ' + e.lineno + ', ' + e.colno);
  });
  window.addEventListener('error', function(e) {
    console.log(e);
    alert(e.source + ', ' + e.message + ', ' + e.lineno + ', ' + e.colno);
  });
}
