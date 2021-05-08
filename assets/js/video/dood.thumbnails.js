(function() {
  var defaults = {
      width: 0,
      height: 0,
      basePath: ""
    },
    extend = function() {
      var args, target, i, object, property;
      args = Array.prototype.slice.call(arguments);
      target = args.shift() || {};
      for(i in args) {
        object = args[i];
        for(property in object) {
          if(object.hasOwnProperty(property)) {
            if(typeof object[property] === 'object') {
              target[property] = extend(target[property], object[property]);
            } else {
              target[property] = object[property];
            }
          }
        }
      }
      return target;
    },
    getComputedStyle = function(el, pseudo) {
      return function(prop) {
        if(window.getComputedStyle) {
          return window.getComputedStyle(el, pseudo)[prop];
        } else {
          return el.currentStyle[prop];
        }
      };
    },
    offsetParent = function(el) {
      if(el.nodeName !== 'HTML' && getComputedStyle(el)('position') === 'static') {
        return offsetParent(el.offsetParent);
      }
      return el;
    },
    getScrollOffset = function() {
      if(window.pageXOffset) {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      }
      return {
        x: document.documentElement.scrollLeft,
        y: document.documentElement.scrollTop
      };
    },
    parseImageLink = function(imglocation) {
      var lsrc, clip, hashindex, hashstring;
      hashindex = imglocation.indexOf('#');
      if(hashindex === -1) {
        return {
          src: imglocation,
          w: 0,
          h: 0,
          x: 0,
          y: 0
        };
      }
      lsrc = imglocation.substring(0, hashindex);
      hashstring = imglocation.substring(hashindex + 1);
      if(hashstring.substring(0, 5) !== 'xywh=') {
        return {
          src: defaults.basePath + lsrc,
          w: 0,
          h: 0,
          x: 0,
          y: 0
        };
      }
      var data = hashstring.substring(5).split(',');
      return {
        src: defaults.basePath + lsrc,
        w: parseInt(data[2]),
        h: parseInt(data[3]),
        x: parseInt(data[0]),
        y: parseInt(data[1])
      };
    };
  videojs.registerPlugin('thumbnails', function(options) {
    var div, settings, img, player, progressControl, duration, moveListener, moveCancel, thumbTrack;
    settings = extend({}, defaults, options);
    player = this;
    if(!options) {
      return;
    }
    var player = this;
    if(!options.vtt) {
      return;
    }
    defaults.basePath = options.basePath || options.vtt.substring(0, options.vtt.lastIndexOf('/') + 1);;
    console.log(defaults.basePath);
    player.on('durationchange', function(event) {
      duration = player.duration();
    });
    moveListener = function(event) {
      var mouseTime, time, active, left, setting, pageX, right, width, halfWidth, pageXOffset, clientRect;
      active = 0;
      mouseTime = player.controlBar.progressControl.seekBar.calculateDistance(event) * duration;
      var cnum = thumbTrack && thumbTrack.cues.length;
      i = 0;
      while(i < cnum) {
        var ccue = thumbTrack.cues[i];
        if(ccue.startTime <= mouseTime && ccue.endTime >= mouseTime) {
          setting = parseImageLink(ccue.text);
          break;
        }
        i++;
      }
      if(typeof setting === 'undefined') {
        return;
      }
      if(setting.src && img.src != setting.src) {
        img.src = setting.src;
      }
      if(setting.w === 0) {
        setting.w = settings.width;
      }
      if(setting.h === 0) {
        setting.h = settings.height;
      }
      var padding = 0;
      var textwidth = 60;
      var compareh = (setting.h + padding * 2) + 'px';
      var comparew = (setting.w + padding * 2) + 'px';
      if(div.style.width != comparew || div.style.height != compareh) {
        div.style.width = (setting.w + padding * 2) + 'px';
        div.style.height = (setting.h + padding * 2) + 'px';
        div.style.top = -(setting.h + 37) + 'px';
        span.style.width = textwidth + 'px';
        span.style.left = (setting.w / 2 - textwidth / 2) + 'px';
      }
      img.style.left = -(setting.x) + 'px';
      img.style.top = -(setting.y) + 'px';
      img.style.clip = 'rect(' + setting.y + 'px,' + (setting.w + setting.x) + 'px,' + (setting.y + setting.h) + 'px,' + setting.x + 'px)';
      var timeStr = new Date(1000 * mouseTime).toISOString().substr(11, 8);
      span.innerHTML = timeStr;
      width = setting.w;
      halfWidth = width / 2;
      div.style.left = -(halfWidth) + 'px';
    };
    moveCancel = function(event) {
      if(event.explicitOriginalTarget) {
        console.log(event.explicitOriginalTarget.className);
      }
      if((!event.explicitOriginalTarget) || ((event.explicitOriginalTarget.ClassName !== 'vjs-mouse-display') && (event.explicitOriginalTarget.ClassName !== 'vjs-progress-holder vjs-slider vjs-slider-horizontal'))) {
        console.log("done");
        div.style.left = '-1000px';
      }
    };
    player.ready(function() {
      var trackEl = player.addRemoteTextTrack({
        id: 'thumbnails',
        kind: 'metadata',
        src: options.vtt,
      });
      trackEl.addEventListener('load', function onLoad() {
        trackEl.removeEventListener('load', onLoad);
        thumbTrack = player.textTracks().getTrackById('thumbnails');
      });
      (function() {
        var progressControl, addFakeActive, removeFakeActive;
        if(navigator.userAgent.toLowerCase().indexOf("android") !== -1) {
          progressControl = player.controlBar.progressControl;
          addFakeActive = function() {
            progressControl.addClass('fake-active');
          };
          removeFakeActive = function() {
            progressControl.removeClass('fake-active');
          };
        }
      })();
      div = document.createElement('div');
      div.className = 'vjs-thumbnail-holder';
      img = document.createElement('img');
      div.appendChild(img);
      img.className = 'vjs-thumbnail';
      span = document.createElement('span');
      div.appendChild(span);
      span.className = 'vjs-thumbnail-text';
      duration = player.duration();
      progressControl = player.controlBar.progressControl;
      MTD = player.controlBar.progressControl.seekBar.mouseTimeDisplay;
      MTD.el().appendChild(div);
      progressControl.on('mousemove', moveListener);
      progressControl.on('touchmove', moveListener);
      progressControl.on('touchcancel', moveCancel);
      progressControl.on('touchend', moveCancel);
      player.on('userinactive', moveCancel);
    }, true);
  });
})();
