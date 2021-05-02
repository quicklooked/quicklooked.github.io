(function() {
  var initializing = false,
    fnTest = /xyz/.test(function() {
      xyz;
    }) ? /\b_super\b/ : /.*/;
  this.JRClass = function() {};
  JRClass.extend = function(prop) {
    var _super = this.prototype;
    initializing = true;
    var prototype = new this();
    initializing = false;
    for(var name in prop) {
      prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function(name, fn) {
        return function() {
          var tmp = this._super;
          this._super = _super[name];
          var ret = fn.apply(this, arguments);
          this._super = tmp;
          return ret;
        };
      })(name, prop[name]) : prop[name];
    }

    function JRClass() {
      if(!initializing && this.init) this.init.apply(this, arguments);
    }
    JRClass.prototype = prototype;
    JRClass.constructor = JRClass;
    JRClass.extend = arguments.callee;
    return JRClass;
  };
})();
var VideoJS = JRClass.extend({
  init: function(element, setOptions) {
    if(typeof element == 'string') {
      this.video = document.getElementById(element);
    }
    else {
      this.video = element;
    }
    this.video.controls = false;
    this.video.player = this;
    this.options = {
      controlsBelow: false,
      controlsHiding: true,
      defaultVolume: 0.85,
      flashVersion: 9,
      linksHiding: true,
      flashIsDominant: false
    };
    if(typeof VideoJS.options == "object") {
      _V_.merge(this.options, VideoJS.options);
    }
    if(typeof setOptions == "object") {
      _V_.merge(this.options, setOptions);
    }
    this.box = this.video.parentNode;
    this.flashFallback = this.getFlashFallback();
    this.linksFallback = this.getLinksFallback();
    if(VideoJS.browserSupportsVideo() || ((this.flashFallback || VideoJS.isIE()) && this.flashVersionSupported())) {
      this.hideLinksFallback();
    }
    if(VideoJS.browserSupportsVideo()) {
      if(!this.canPlaySource() || this.options.flashIsDominant) {
        this.replaceWithFlash();
        return;
      }
    }
    else {
      return;
    }
    if(VideoJS.isIpad()) {
      this.iPadFix();
    }
    if(VideoJS.isAndroid()) {
      this.androidFix();
    }
    if(this.options.controlsBelow) {
      _V_.addClass(this.box, "vjs-controls-below");
    }
    this.percentLoaded = 0;
    this.buildPoster();
    this.showPoster();
    this.buildController();
    this.showController();
    this.video.addEventListener("loadeddata", this.onLoadedData.context(this), false);
    this.video.addEventListener("play", this.onPlay.context(this), false);
    this.video.addEventListener("pause", this.onPause.context(this), false);
    this.video.addEventListener("ended", this.onEnded.context(this), false);
    this.video.addEventListener('volumechange', this.onVolumeChange.context(this), false);
    this.video.addEventListener('error', this.onError.context(this), false);
    this.video.addEventListener('progress', this.onProgress.context(this), false);
    this.watchBuffer = setInterval(this.updateBufferedTotal.context(this), 33);
    this.video.addEventListener('timeupdate', this.onTimeUpdate.context(this), false);
    this.playControl.addEventListener("click", this.onPlayControlClick.context(this), false);
    this.video.addEventListener("click", this.onPlayControlClick.context(this), false);
    if(this.poster) {
      this.poster.addEventListener("click", this.onPlayControlClick.context(this), false);
    }
    this.progressHolder.addEventListener("mousedown", this.onProgressHolderMouseDown.context(this), false);
    this.progressHolder.addEventListener("mouseup", this.onProgressHolderMouseUp.context(this), false);
    this.setVolume(localStorage.volume || this.options.defaultVolume);
    this.volumeControl.addEventListener("mousedown", this.onVolumeControlMouseDown.context(this), false);
    this.volumeControl.addEventListener("mouseup", this.onVolumeControlMouseUp.context(this), false);
    this.updateVolumeDisplay();
    this.fullscreenControl.addEventListener("click", this.onFullscreenControlClick.context(this), false);
    this.box.addEventListener("mousemove", this.onVideoMouseMove.context(this), false);
    this.box.addEventListener("mouseout", this.onVideoMouseOut.context(this), false);
    if(this.poster) {
      this.poster.addEventListener("mousemove", this.onVideoMouseMove.context(this), false);
      this.poster.addEventListener("mouseout", this.onVideoMouseOut.context(this), false);
    }
    this.controls.addEventListener("mouseout", this.onVideoMouseOut.context(this), false);
    this.onEscKey = function(event) {
      if(event.keyCode == 27) {
        this.fullscreenOff();
      }
    }.context(this);
    this.onWindowResize = function(event) {
      this.positionController();
    }.context(this);
    this.fixPreloading();
    this.subtitlesSource = this.video.getAttribute("data-subtitles");
    if(this.subtitlesSource !== null) {
      this.loadSubtitles();
      this.buildSubtitles();
    }
  },
  fixPreloading: function() {
    if(typeof this.video.hasAttribute == "function" && this.video.hasAttribute("preload")) {
      this.video.autobuffer = true;
    }
  },
  play: function() {
    this.video.play();
  },
  pause: function() {
    this.video.pause();
  },
  buildController: function() {
    this.controls = _V_.createElement("ul", {
      className: "vjs-controls"
    });
    this.video.parentNode.appendChild(this.controls);
    this.playControl = _V_.createElement("li", {
      className: "vjs-play-control vjs-play",
      innerHTML: "<span></span>"
    });
    this.controls.appendChild(this.playControl);
    this.progressControl = _V_.createElement("li", {
      className: "vjs-progress-control"
    });
    this.controls.appendChild(this.progressControl);
    this.progressHolder = _V_.createElement("ul", {
      className: "vjs-progress-holder"
    });
    this.progressControl.appendChild(this.progressHolder);
    this.loadProgress = _V_.createElement("li", {
      className: "vjs-load-progress"
    });
    this.progressHolder.appendChild(this.loadProgress);
    this.playProgress = _V_.createElement("li", {
      className: "vjs-play-progress"
    });
    this.progressHolder.appendChild(this.playProgress);
    this.timeControl = _V_.createElement("li", {
      className: "vjs-time-control"
    });
    this.controls.appendChild(this.timeControl);
    this.currentTimeDisplay = _V_.createElement("span", {
      className: "vjs-current-time-display",
      innerHTML: "00:00"
    });
    this.timeControl.appendChild(this.currentTimeDisplay);
    this.timeSeparator = _V_.createElement("span", {
      innerHTML: " / "
    });
    this.timeControl.appendChild(this.timeSeparator);
    this.durationDisplay = _V_.createElement("span", {
      className: "vjs-duration-display",
      innerHTML: "00:00"
    });
    this.timeControl.appendChild(this.durationDisplay);
    this.volumeControl = _V_.createElement("li", {
      className: "vjs-volume-control",
      innerHTML: "<ul><li></li><li></li><li></li><li></li><li></li><li></li></ul>"
    });
    this.controls.appendChild(this.volumeControl);
    this.volumeDisplay = this.volumeControl.children[0];
    this.fullscreenControl = _V_.createElement("li", {
      className: "vjs-fullscreen-control",
      innerHTML: "<ul><li></li><li></li><li></li><li></li></ul>"
    });
    this.controls.appendChild(this.fullscreenControl);
  },
  getLinksFallback: function() {
    return this.box.getElementsByTagName("P")[0];
  },
  hideLinksFallback: function() {
    if(this.options.linksHiding && this.linksFallback) {
      this.linksFallback.style.display = "none";
    }
  },
  getFlashFallback: function() {
    if(VideoJS.isIE()) {
      return;
    }
    var children = this.box.getElementsByClassName("vjs-flash-fallback");
    for(var i = 0, j = children.length; i < j; i++) {
      return children[i];
    }
  },
  replaceWithFlash: function() {
    if(this.flashFallback) {
      this.box.insertBefore(this.flashFallback, this.video);
      this.video.style.display = "none";
    }
  },
  showController: function() {
    this.controls.style.display = "block";
    this.positionController();
  },
  positionController: function() {
    if(this.controls.style.display == 'none') {
      return;
    }
    if(this.playControl.offsetWidth == this.progressControl.offsetWidth && this.playControl.offsetWidth == this.timeControl.offsetWidth && this.playControl.offsetWidth == this.volumeControl.offsetWidth) {
      if(!this.positionRetries) {
        this.positionRetries = 1;
      }
      if(this.positionRetries++ < 100) {
        this.controls.style.display = "none";
        setTimeout(this.showController.context(this), 0);
        return;
      }
    }
    if(this.videoIsFullScreen) {
      this.box.style.width = "";
    }
    else {
      this.box.style.width = this.video.offsetWidth + "px";
    }
    if(this.options.controlsBelow) {
      if(this.videoIsFullScreen) {
        this.box.style.height = "";
        this.video.style.height = (this.box.offsetHeight - this.controls.offsetHeight) + "px";
      }
      else {
        this.video.style.height = "";
        this.box.style.height = this.video.offsetHeight + this.controls.offsetHeight + "px";
      }
      this.controls.style.top = this.video.offsetHeight + "px";
    }
    else {
      this.controls.style.top = (this.video.offsetHeight - this.controls.offsetHeight) + "px";
    }
    this.sizeProgressBar();
  },
  hideController: function() {
    if(this.options.controlsHiding) {
      this.controls.style.display = "none";
    }
  },
  updatePosterSource: function() {
    if(!this.video.poster) {
      var images = this.video.getElementsByTagName("img");
      if(images.length > 0) {
        this.video.poster = images[0].src;
      }
    }
  },
  buildPoster: function() {
    this.updatePosterSource();
    if(this.video.poster) {
      this.poster = document.createElement("img");
      this.video.parentNode.appendChild(this.poster);
      this.poster.src = this.video.poster;
      this.poster.className = "vjs-poster";
    }
    else {
      this.poster = false;
    }
  },
  showPoster: function() {
    if(!this.poster) {
      return;
    }
    this.poster.style.display = "block";
    this.positionPoster();
  },
  positionPoster: function() {
    if(!this.poster || this.poster.style.display == 'none') {
      return;
    }
    this.poster.style.height = this.video.offsetHeight + "px";
    this.poster.style.width = this.video.offsetWidth + "px";
  },
  hidePoster: function() {
    if(!this.poster) {
      return;
    }
    this.poster.style.display = "none";
  },
  canPlaySource: function() {
    var children = this.video.children;
    for(var i = 0, j = children.length; i < j; i++) {
      if(children[i].tagName.toUpperCase() == "SOURCE") {
        var canPlay = this.video.canPlayType(children[i].type);
        if(canPlay == "probably" || canPlay == "maybe") {
          return true;
        }
      }
    }
    return false;
  },
  onPlay: function(event) {
    this.playControl.className = "vjs-play-control vjs-pause";
    this.hidePoster();
    this.trackPlayProgress();
  },
  onPause: function(event) {
    this.playControl.className = "vjs-play-control vjs-play";
    this.stopTrackingPlayProgress();
  },
  onEnded: function(event) {
    this.video.pause();
    this.onPause();
  },
  onVolumeChange: function(event) {
    this.updateVolumeDisplay();
  },
  onError: function(event) {
    console.log(event);
    console.log(this.video.error);
  },
  onLoadedData: function(event) {
    this.showController();
  },
  onProgress: function(event) {
    if(event.total > 0) {
      this.setLoadProgress(event.loaded / event.total);
    }
  },
  updateBufferedTotal: function() {
    if(this.video.buffered) {
      if(this.video.buffered.length >= 1) {
        this.setLoadProgress(this.video.buffered.end(0) / this.video.duration);
        if(this.video.buffered.end(0) == this.video.duration) {
          clearInterval(this.watchBuffer);
        }
      }
    }
    else {
      clearInterval(this.watchBuffer);
    }
  },
  setLoadProgress: function(percentAsDecimal) {
    if(percentAsDecimal > this.percentLoaded) {
      this.percentLoaded = percentAsDecimal;
      this.updateLoadProgress();
    }
  },
  updateLoadProgress: function() {
    if(this.controls.style.display == 'none') {
      return;
    }
    this.loadProgress.style.width = (this.percentLoaded * (_V_.getComputedStyleValue(this.progressHolder, "width").replace("px", ""))) + "px";
  },
  onPlayControlClick: function(event) {
    if(this.video.paused) {
      this.video.play();
    }
    else {
      this.video.pause();
    }
  },
  onProgressHolderMouseDown: function(event) {
    this.stopTrackingPlayProgress();
    if(this.video.paused) {
      this.videoWasPlaying = false;
    }
    else {
      this.videoWasPlaying = true;
      this.video.pause();
    }
    _V_.blockTextSelection();
    document.onmousemove = function(event) {
      this.setPlayProgressWithEvent(event);
    }.context(this);
    document.onmouseup = function(event) {
      _V_.unblockTextSelection();
      document.onmousemove = null;
      document.onmouseup = null;
      if(this.videoWasPlaying) {
        this.video.play();
        this.trackPlayProgress();
      }
    }.context(this);
  },
  onProgressHolderMouseUp: function(event) {
    this.setPlayProgressWithEvent(event);
    if(this.video.paused) {
      this.onPause();
    }
    else {
      this.onPlay();
    }
  },
  onVolumeControlMouseDown: function(event) {
    _V_.blockTextSelection();
    document.onmousemove = function(event) {
      this.setVolumeWithEvent(event);
    }.context(this);
    document.onmouseup = function() {
      _V_.unblockTextSelection();
      document.onmousemove = null;
      document.onmouseup = null;
    }.context(this);
  },
  onVolumeControlMouseUp: function(event) {
    this.setVolumeWithEvent(event);
  },
  onFullscreenControlClick: function(event) {
    if(!this.videoIsFullScreen) {
      this.fullscreenOn();
    }
    else {
      this.fullscreenOff();
    }
  },
  onVideoMouseMove: function(event) {
    this.showController();
    clearInterval(this.mouseMoveTimeout);
    this.mouseMoveTimeout = setTimeout(function() {
      this.hideController();
    }.context(this), 4000);
  },
  onVideoMouseOut: function(event) {
    var parent = event.relatedTarget;
    while(parent && parent !== this.video && parent !== this.controls) {
      parent = parent.parentNode;
    }
    if(parent !== this.video && parent !== this.controls) {
      this.hideController();
    }
  },
  sizeProgressBar: function() {
    this.updatePlayProgress();
    this.updateLoadProgress();
  },
  getControlsPadding: function() {
    return _V_.findPosX(this.playControl) - _V_.findPosX(this.controls);
  },
  getControlBorderAdjustment: function() {
    var leftBorder = parseInt(_V_.getComputedStyleValue(this.playControl, "border-left-width").replace("px", ""), 10);
    var rightBorder = parseInt(_V_.getComputedStyleValue(this.playControl, "border-right-width").replace("px", ""), 10);
    return leftBorder + rightBorder;
  },
  trackPlayProgress: function() {
    if(this.playProgressInterval) {
      clearInterval(this.playProgressInterval);
    }
    this.playProgressInterval = setInterval(function() {
      this.updatePlayProgress();
    }.context(this), 33);
  },
  stopTrackingPlayProgress: function() {
    clearInterval(this.playProgressInterval);
  },
  updatePlayProgress: function() {
    if(this.controls.style.display == 'none') {
      return;
    }
    this.playProgress.style.width = ((this.video.currentTime / this.video.duration) * (_V_.getComputedStyleValue(this.progressHolder, "width").replace("px", ""))) + "px";
    this.updateTimeDisplay();
  },
  setPlayProgress: function(newProgress) {
    this.video.currentTime = newProgress * this.video.duration;
    this.playProgress.style.width = newProgress * (_V_.getComputedStyleValue(this.progressHolder, "width").replace("px", "")) + "px";
    this.updateTimeDisplay();
    if(!this.subtitles) {
      this.currentSubtitlePosition = 0;
    }
  },
  setPlayProgressWithEvent: function(event) {
    var newProgress = _V_.getRelativePosition(event.pageX, this.progressHolder);
    this.setPlayProgress(newProgress);
  },
  updateTimeDisplay: function() {
    this.currentTimeDisplay.innerHTML = _V_.formatTime(this.video.currentTime);
    if(this.video.duration) {
      this.durationDisplay.innerHTML = _V_.formatTime(this.video.duration);
    }
  },
  setVolume: function(newVol) {
    this.video.volume = parseFloat(newVol);
    localStorage.volume = this.video.volume;
  },
  setVolumeWithEvent: function(event) {
    var newVol = _V_.getRelativePosition(event.pageX, this.volumeControl.children[0]);
    this.setVolume(newVol);
  },
  updateVolumeDisplay: function() {
    var volNum = Math.ceil(this.video.volume * 6);
    for(var i = 0; i < 6; i++) {
      if(i < volNum) {
        _V_.addClass(this.volumeDisplay.children[i], "vjs-volume-level-on");
      }
      else {
        _V_.removeClass(this.volumeDisplay.children[i], "vjs-volume-level-on");
      }
    }
  },
  flashVersionSupported: function() {
    return VideoJS.getFlashVersion() >= this.options.flashVersion;
  },
  fullscreenOn: function() {
    if(!this.nativeFullscreenOn()) {
      this.videoIsFullScreen = true;
      this.docOrigOverflow = document.documentElement.style.overflow;
      document.addEventListener("keydown", this.onEscKey, false);
      window.addEventListener("resize", this.onWindowResize, false);
      document.documentElement.style.overflow = 'hidden';
      _V_.addClass(this.box, "vjs-fullscreen");
      this.positionController();
      this.positionPoster();
    }
  },
  nativeFullscreenOn: function() {
    if(typeof this.video.webkitEnterFullScreen == 'function') {
      if(!navigator.userAgent.match("Chrome")) {
        this.video.webkitEnterFullScreen();
        return true;
      }
    }
  },
  fullscreenOff: function() {
    this.videoIsFullScreen = false;
    document.removeEventListener("keydown", this.onEscKey, false);
    window.removeEventListener("resize", this.onWindowResize, false);
    document.documentElement.style.overflow = this.docOrigOverflow;
    _V_.removeClass(this.box, "vjs-fullscreen");
    this.positionController();
    this.positionPoster();
  },
  loadSubtitles: function() {
    if(typeof XMLHttpRequest == "undefined") {
      XMLHttpRequest = function() {
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        }
        catch (e) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        }
        catch (f) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (g) {}
        throw new Error("This browser does not support XMLHttpRequest.");
      };
    }
    var request = new XMLHttpRequest();
    request.open("GET", this.subtitlesSource);
    request.onreadystatechange = function() {
      if(request.readyState == 4 && request.status == 200) {
        this.parseSubtitles(request.responseText);
      }
    }.context(this);
    request.send();
  },
  parseSubtitles: function(subText) {
    var lines = subText.replace("\r", '').split("\n");
    this.subtitles = [];
    this.currentSubtitlePosition = 0;
    var i = 0;
    while(i < lines.length) {
      var subtitle = {};
      subtitle.id = lines[i++];
      if(!subtitle.id) {
        break;
      }
      var time = lines[i++].split(" --> ");
      subtitle.startTime = this.parseSubtitleTime(time[0]);
      subtitle.endTime = this.parseSubtitleTime(time[1]);
      var text = [];
      while(lines[i].length > 0 && lines[i] != "\r") {
        text.push(lines[i++]);
      }
      subtitle.text = text.join('<br/>');
      this.subtitles.push(subtitle);
      i++;
    }
  },
  parseSubtitleTime: function(timeText) {
    var parts = timeText.split(':');
    var time = 0;
    time += parseFloat(parts[0]) * 60 * 60;
    time += parseFloat(parts[1]) * 60;
    var seconds = parts[2].split(',');
    time += parseFloat(seconds[0]);
    time = time + parseFloat(seconds[1]) / 1000;
    return time;
  },
  buildSubtitles: function() {
    this.subtitlesDiv = _V_.createElement("div", {
      className: 'vjs-subtitles'
    });
    this.video.parentNode.appendChild(this.subtitlesDiv);
  },
  onTimeUpdate: function() {
    if(this.subtitles) {
      var x = this.currentSubtitlePosition;
      while(x < this.subtitles.length && this.video.currentTime > this.subtitles[x].endTime) {
        if(this.subtitles[x].showing) {
          this.subtitles[x].showing = false;
          this.subtitlesDiv.innerHTML = "";
        }
        this.currentSubtitlePosition++;
        x = this.currentSubtitlePosition;
      }
      if(this.currentSubtitlePosition >= this.subtitles.length) {
        return;
      }
      if(this.video.currentTime >= this.subtitles[x].startTime && this.video.currentTime <= this.subtitles[x].endTime) {
        this.subtitlesDiv.innerHTML = this.subtitles[x].text;
        this.subtitles[x].showing = true;
      }
    }
  },
  iPadFix: function() {
    this.options.controlsBelow = true;
    this.options.controlsHiding = false;
  },
  androidFix: function() {
    var children = this.video.children;
    for(var i = 0, j = children.length; i < j; i++) {
      if(children[i].tagName.toUpperCase() == "SOURCE" && children[i].src.match(/\.mp4$/i)) {
        this.video.src = children[i].src;
      }
    }
  }
});
var _V_ = {
  addClass: function(element, classToAdd) {
    if(element.className.split(/\s+/).lastIndexOf(classToAdd) == -1) {
      element.className = element.className === "" ? classToAdd : element.className + " " + classToAdd;
    }
  },
  removeClass: function(element, classToRemove) {
    if(element.className.indexOf(classToRemove) == -1) {
      return;
    }
    var classNames = element.className.split(/\s+/);
    classNames.splice(classNames.lastIndexOf(classToRemove), 1);
    element.className = classNames.join(" ");
  },
  merge: function(obj1, obj2) {
    for(var attrname in obj2) {
      if(obj2.hasOwnProperty(attrname)) {
        obj1[attrname] = obj2[attrname];
      }
    }
    return obj1;
  },
  createElement: function(tagName, attributes) {
    return _V_.merge(document.createElement(tagName), attributes);
  },
  blockTextSelection: function() {
    document.body.focus();
    document.onselectstart = function() {
      return false;
    };
  },
  unblockTextSelection: function() {
    document.onselectstart = function() {
      return true;
    };
  },
  formatTime: function(secs) {
    var seconds = Math.round(secs);
    var minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  },
  getRelativePosition: function(x, relativeElement) {
    return Math.max(0, Math.min(1, (x - _V_.findPosX(relativeElement)) / relativeElement.offsetWidth));
  },
  findPosX: function(obj) {
    var curleft = obj.offsetLeft;
    while(obj = obj.offsetParent) {
      curleft += obj.offsetLeft;
    }
    return curleft;
  },
  getComputedStyleValue: function(element, style) {
    return window.getComputedStyle(element, null).getPropertyValue(style);
  },
  bindDOMReady: function() {
    if(document.readyState === "complete") {
      return _V_.DOMReady();
    }
    if(document.addEventListener) {
      document.addEventListener("DOMContentLoaded", _V_.DOMContentLoaded, false);
      window.addEventListener("load", _V_.DOMReady, false);
    }
    else if(document.attachEvent) {
      document.attachEvent("onreadystatechange", _V_.DOMContentLoaded);
      window.attachEvent("onload", _V_.DOMReady);
    }
  },
  DOMContentLoaded: function() {
    if(document.addEventListener) {
      document.removeEventListener("DOMContentLoaded", _V_.DOMContentLoaded, false);
      _V_.DOMReady();
    }
    else if(document.attachEvent) {
      if(document.readyState === "complete") {
        document.detachEvent("onreadystatechange", _V_.DOMContentLoaded);
        _V_.DOMReady();
      }
    }
  },
  DOMReadyList: [],
  addToDOMReady: function(fn) {
    if(_V_.DOMIsReady) {
      fn.call(document);
    }
    else {
      _V_.DOMReadyList.push(fn);
    }
  },
  DOMIsReady: false,
  DOMReady: function() {
    if(_V_.DOMIsReady) {
      return;
    }
    if(!document.body) {
      return setTimeout(_V_.DOMReady, 13);
    }
    _V_.DOMIsReady = true;
    if(_V_.DOMReadyList) {
      for(var i = 0; i < _V_.DOMReadyList.length; i++) {
        _V_.DOMReadyList[i].call(document);
      }
      _V_.DOMReadyList = null;
    }
  }
};
_V_.bindDOMReady();
VideoJS.setupAllWhenReady = function(options) {
  VideoJS.options = options;
  VideoJS.DOMReady(VideoJS.setup);
};
VideoJS.DOMReady = function(fn) {
  _V_.addToDOMReady(fn);
};
VideoJS.setup = function(videos, options) {
  var returnSingular = false,
    playerList = [];
  if(!videos || videos == "All") {
    videos = VideoJS.getVideoJSTags();
  }
  else if(typeof videos != 'object' || videos.nodeType == 1) {
    videos = [videos];
    returnSingular = true;
  }
  for(var i = 0; i < videos.length; i++) {
    if(typeof videos[i] == 'string') {
      videoElement = document.getElementById(videos[i]);
    }
    else {
      videoElement = videos[i];
    }
    playerList.push(new VideoJS(videoElement, options));
  }
  return (returnSingular) ? playerList[0] : playerList;
};
VideoJS.getVideoJSTags = function() {
  var videoTags = document.getElementsByTagName("video"),
    videoJSTags = [];
  for(var i = 0, j = videoTags.length; i < j; i++) {
    videoTag = videoTags[i];
    if(videoTag.className.indexOf("video-js") != -1) {
      videoJSTags.push(videoTag);
    }
  }
  return videoJSTags;
};
VideoJS.browserSupportsVideo = function() {
  if(typeof VideoJS.videoSupport != "undefined") {
    return VideoJS.videoSupport;
  }
  VideoJS.videoSupport = !!document.createElement('video').canPlayType;
  return VideoJS.videoSupport;
};
VideoJS.getFlashVersion = function() {
  if(typeof VideoJS.flashVersion != "undefined") {
    return VideoJS.flashVersion;
  }
  var version = 0;
  if(typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object") {
    desc = navigator.plugins["Shockwave Flash"].description;
    if(desc && !(typeof navigator.mimeTypes != "undefined" && navigator.mimeTypes["application/x-shockwave-flash"] && !navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)) {
      version = parseInt(desc.match(/^.*\s+([^\s]+)\.[^\s]+\s+[^\s]+$/)[1], 10);
    }
  }
  else if(typeof window.ActiveXObject != "undefined") {
    try {
      var testObject = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
      if(testObject) {
        version = parseInt(testObject.GetVariable("$version").match(/^[^\s]+\s(\d+)/)[1], 10);
      }
    }
    catch (e) {}
  }
  VideoJS.flashVersion = version;
  return VideoJS.flashVersion;
};
VideoJS.isIE = function() {
  return !+"\v1";
};
VideoJS.isIpad = function() {
  return navigator.userAgent.match(/iPad/i) !== null;
};
VideoJS.isIphone = function() {
  return navigator.userAgent.match(/iPhone/i) !== null;
};
VideoJS.isAndroid = function() {
  return navigator.userAgent.match(/Android/i) !== null;
};
Function.prototype.context = function(obj) {
  var method = this;
  temp = function() {
    return method.apply(obj, arguments);
  };
  return temp;
};
if(window.jQuery) {
  (function($) {
    $.fn.VideoJS = function(options) {
      this.each(function() {
        VideoJS.setup(this, options);
      });
      return this;
    };
  })(jQuery);
}
