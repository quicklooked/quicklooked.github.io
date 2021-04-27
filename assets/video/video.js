! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).flowplayer = t()
}(this, (function() {
  "use strict";
  const e = [].slice;

  function t() {}

  function n(e, t, ...n) {
    for(const n in t) e[n] = t[n];
    return e
  }

  function r(...e) {
    return e.slice(1).reduce((e, t) => n(e, t), e[0] || {})
  }

  function o(e) {
    return Array.isArray(e) ? e.slice(0) : e.split(".")
  }

  function i(e, t, n) {
    const r = o(t);
    for(; r.length;) {
      if(null == e) return n;
      const t = r.shift();
      if("string" != typeof t) return n;
      e = e[t]
    }
    return null == e ? n : e
  }

  function a(e, t, n) {
    const r = (t = o(t)).pop(),
      a = i(e, t);
    return a && r && (a[r] = n), e
  }

  function u(e) {
    const t = "number" == typeof e ? e : parseInt(e, 10);
    return (t > 9 ? "" : "0") + t
  }

  function s(e) {
    if(isNaN(e) || e >= Number.MAX_SAFE_INTEGER) return "";
    const t = e < 0 ? "-" : "";
    e = Math.round(Math.abs(e));
    const n = Math.floor(e / 3600);
    let r = Math.floor(e / 60);
    return e -= 60 * r, n >= 1 ? (r -= 60 * n, t + n + ":" + u(r) + ":" + u(e)) : t + u(r) + ":" + u(e)
  }

  function l(t) {
    return e.call(t)
  }

  function c(e) {
    return "string" != typeof e ? e : "false" != e && ("true" == e || (isNaN(Number(e)) ? !!e : !!Number(e)))
  }
  var f = Object.freeze({
    __proto__: null,
    noop: t,
    extend: n,
    assign: r,
    make_path: o,
    lens: i,
    put: a,
    get: function(e, t, n) {
      const r = new XMLHttpRequest;
      r.open("GET", e, !0), r.onreadystatechange = function() {
        const e = r.status;
        e >= 400 && n && n(e), 200 == e && 4 == r.readyState && t(r.responseText)
      }, r.send()
    },
    zero_pad: u,
    prettyTime: s,
    toArray: l,
    box: function(e) {
      const t = {
        val: e
      };
      return function(e) {
        return void 0 !== e && (t.val = e), t.val
      }
    },
    as_bool: c
  });
  const d = !! function() {
      let e = !1;
      try {
        const t = Object.defineProperty({}, "passive", {
          get: function() {
            e = !0
          }
        });
        window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
      } catch (e) {}
      return e
    }() && {
      passive: !0
    },
    p = ["touchstart", "touchmove"];

  function m(e) {
    var t = e;
    return t.emit = function(e, r, o = {}) {
      const i = function(e) {
        const t = document.createEvent("Event");
        return t.initEvent(e, !1, !0), t
      }(e);
      return r && n(i, {
        data: r || {}
      }), t.dispatchEvent(i), !1 === o.return_self ? i : t
    }, t.on = function(e, n) {
      return "string" == typeof e && (e = e.split(" ")), e.forEach((function(e) {
        return function(e) {
          return ~p.indexOf(e)
        }(e) ? t.addEventListener(e, n, d) : t.addEventListener(e, n)
      })), t
    }, t.off = function(e, n) {
      return t.removeEventListener(e, n), t
    }, t.one = t.once = function(e, n) {
      return t.on(e, (function r(o) {
        t.off(e, r), n(o)
      }))
    }, t
  }
  const v = Array.isArray,
    h = "undefined" != typeof window && m(window),
    g = "undefined" != typeof document && m(document),
    _ = ["span", "a", "em", "p", "i"];

  function y(e, t, n) {
    var r = E(document.createElement(e));
    if(v(t) && (n = t, t = !1), n || (n = []), n && !v(n) && (n = [n]), n.length && n.filter(e => !!e).forEach(e => r.append(e)), "object" != typeof t) return r;
    for(var o in t) o in r ? r[o] = t[o] : r.setAttribute(o, t[o]);
    return r
  }

  function E(e) {
    return void 0 === e || function(e) {
      return e && e.__flowplayer__
    }(e) ? e : function(e) {
      var t = e.tagName;
      e.__flowplayer__ = 1, e.find = function(t) {
        var n = e.querySelector(t);
        return n ? E(n) : n
      }, e.html = function(t) {
        return e.innerHTML = t, e
      }, e.empty = function() {
        return e.innerHTML = "", e
      }, e.offset = function() {
        var t = {
            top: 0,
            left: 0
          },
          n = e;
        do {
          t.left += n.offsetLeft || 0, t.top += n.offsetTop || 0
        } while(n = n.offsetParent);
        return t
      }, e.innerWidth = function() {
        var t = getComputedStyle(e);
        return e.clientWidth - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight)
      };
      var n = e.insert = function(t, n) {
        return n ? v(n) ? n.map((function(n) {
          return e.insert(t, n)
        }))[0] : E(n = "string" == typeof n ? e.insertAdjacentHTML(t, n) : e.insertAdjacentElement ? e.insertAdjacentElement(t, n) : e.appendChild(n)) : n
      };
      return e.append = n.bind(e, "beforeend"), e.prepend = n.bind(e, "afterbegin"), e.css = function(t, n) {
        if("object" == typeof t) {
          for(const n in t) e.css(n, t[n]);
          return e
        }
        return void 0 === n && "string" == typeof t ? getComputedStyle(e)[t] : ("number" == typeof n && (n += "px"), e.style[t] = n, e)
      }, e.show = function() {
        return e.css({
          display: ~_.indexOf(t) ? "inline" : "block"
        })
      }, e.hide = function() {
        return e.css({
          display: "none"
        })
      }, e.remove = function() {
        var t = e.parentNode;
        t && t.removeChild(e)
      }, e.attr = function(t, n) {
        return null == n ? e.getAttribute(t) : (e.setAttribute(t, n), e)
      }, e.txt = function(t) {
        return e.textContent = t, e
      }, e.fp = function(t) {
        return e.addClass("fp-" + t)
      }, e.addClass = function(t) {
        return t.split(" ").forEach((function(t) {
          e.hasClass(t) || (e.className += (e.className ? " " : "") + t)
        })), e
      }, e.removeClass = function(t) {
        const n = t.split(" ");
        var r = e.className.split(" ");
        return e.className = r.filter((function(e) {
          return !~n.indexOf(e)
        })).join(" "), e
      }, e.toggleClass = function(t, n) {
        return void 0 === n && (n = !e.hasClass(t)), n ? e.addClass(t) : e.removeClass(t)
      }, e.findAll = function(t) {
        return l(e.querySelectorAll(t))
      }, e.hasClass = function(t) {
        return ~e.className.split(" ").indexOf(t)
      }, e
    }(m(e))
  }

  function b(e, t) {
    if("string" == typeof e && "<" == e[0]) return y(e.slice(1, -1), t);
    if("string" != typeof e) return E(e);
    var n = t instanceof HTMLElement && t.querySelector(".fp-" + e) || document.querySelector(e);
    return n ? E(n) : void 0
  }
  const w = e => (t, n) => ("string" == typeof t && (t = {
    class: t
  }), y(e, t, n));
  Object.assign(b, {
    div: w("div"),
    img: w("img"),
    li: w("li"),
    ol: w("ol"),
    span: w("span"),
    p: w("p"),
    i: w("i"),
    a: w("a"),
    el: y,
    document: g,
    window: h
  });
  var k = [];

  function S() {
    return k.filter((function(e) {
      return !e.paused
    }))
  }
  var A = Object.freeze({
    __proto__: null,
    instances: k,
    playing: S
  });
  const O = "is-playing",
    T = "is-paused",
    N = "is-loading",
    x = "is-starting",
    L = "is-seeking",
    R = "is-waiting",
    M = "is-seamless",
    C = "is-touched";
  var P = Object.freeze({
    __proto__: null,
    PLAYING: O,
    FULLSCREEN: "is-fullscreen",
    PAUSED: T,
    MUTED: "is-muted",
    LOADED: "is-loaded",
    LOADING: N,
    STARTING: x,
    SEEKING: L,
    GRABBING: "is-grabbing",
    DISABLED: "is-disabled",
    SMALL: "is-small",
    TINY: "is-tiny",
    RTL: "is-rtl",
    ENDED: "is-ended",
    LIVE: "is-live",
    ERRORED: "is-error",
    WAITING: R,
    AUTOPLAY: "is-autoplay",
    SEAMLESS: M,
    NO_AUTOPLAY: "no-autoplay",
    TOGGLING: "is-toggling",
    LIVE_SEEKED: "is-live-seeked",
    NO_DVR: "no-timeline",
    HAS_POSTER: "has-poster",
    MENU_OPENED: "has-menu-opened",
    TOUCHED: C,
    HOVERED: "is-hovered",
    TOUCH_DEVICE: "is-touch-device",
    WILL_SEEK: "will-seek",
    SEEKABLE: "is-seekable"
  });

  function I(e, t) {
    try {
      var n = t.exec(e)[1];
      return parseFloat(n, 10)
    } catch (e) {
      return console.error(e), 0
    }
  }

  function D() {
    var e = "undefined" != typeof document && "undefined" != typeof window,
      t = e ? navigator.userAgent : "",
      n = /iP(hone|od)/i.test(t) && !/iPad/.test(t) && !/IEMobile/i.test(t),
      r = /Android/.test(t) && !/Firefox/.test(t),
      o = /IEMobile/.test(t),
      i = o ? I(t, /Windows Phone (\d+\.\d+)/) : 0,
      a = o ? I(t, /IEMobile\/(\d+\.\d+)/) : 0,
      u = /^((?!chrome|android).)*safari/i.test(t),
      s = /SamsungBrowser/.test(t),
      l = s && /SMART-TV/.test(t),
      c = n && /FBSN\/iOS/i.test(t),
      f = function() {
        if(!e) return !1;
        if(document.documentMode) return document.documentMode;
        for(var t = 9; t > 3; t--) {
          var n = document.createElement("div");
          if(n.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", n.getElementsByTagName("span").length) return t
        }
        return !1
      }();
    return {
      controls: !n && (!o || i >= 8.1 && a >= 11),
      video: function(t) {
        return e && document.createElement("video").canPlayType(t)
      },
      lang: e && (window.navigator.userLanguage || window.navigator.language),
      android: r,
      iphone: n,
      ie: f,
      safari: u,
      ios: e && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
      samsung: s,
      samsung_tv: s && l,
      fb_ios: c
    }
  }
  const U = "click",
    F = "loadedmetadata",
    j = "loadeddata",
    q = "reap",
    z = "config",
    H = "landscape",
    G = "portrait";
  var V = Object.freeze({
    __proto__: null,
    MOUNT: "mount",
    ERROR: "error",
    CONTEXT_MENU: "contextmenu",
    CLICK: U,
    DBL_CLICK: "dblclick",
    KEYUP: "keyup",
    KEYDOWN: "keydown",
    LOAD: "load",
    MOUSE_ENTER: "mouseenter",
    MOUSE_LEAVE: "mouseleave",
    MOUSE_UP: "mouseup",
    MOUSE_DOWN: "mousedown",
    MOUSE_MOVE: "mousemove",
    TOUCH_START: "touchstart",
    TOUCH_MOVE: "touchmove",
    TOUCH_END: "touchend",
    TOUCH_CANCEL: "touchcancel",
    RESIZE: "resize",
    SCROLL: "scroll",
    FULLSCREEN_ENTER: "fullscreenenter",
    FULLSCREEN_EXIT: "fullscreenexit",
    FULLSCREEN_CHANGE: "fullscreenchange",
    WEBKIT_NEEDKEY: "webkitneedkey",
    METADATA: F,
    DATA: j,
    PROGRESS: "progress",
    TIME_UPDATE: "timeupdate",
    LOAD_START: "loadstart",
    VOLUME_CHANGE: "volumechange",
    PAUSE: "pause",
    PLAYING: "playing",
    PLAY: "play",
    WAITING: "waiting",
    CAN_PLAY: "canplay",
    ENDED: "ended",
    SEEKED: "seeked",
    SEEKING: "seeking",
    DURATION_CHANGE: "durationchange",
    BEFORE_PLAY: "beforeplay",
    BEFORE_PAUSE: "beforepause",
    STATE: "state",
    CUEPOINTS: "cuepoints",
    CUEPOINT_START: "cuepointstart",
    CUEPOINT_END: "cuepointend",
    VIEW_ENTER: "viewenter",
    VIEW_LEAVE: "viewleave",
    SOURCE: "src",
    RECOVER: "recover",
    REAP: q,
    CONFIG: z,
    QUALITIES: "qualities",
    SET_QUALITY: "quality:set",
    NON_RECOVERABLE_ERROR: "error:fatal",
    RECOMMENDATIONS_READY: "recommendationsready",
    AUDIO_ONLY_SOURCE: "audioonlysource",
    LANDSCAPE: H,
    PORTRAIT: G,
    RENDER_PLUGIN: "renderplugin",
    DVR: "dvr",
    LIVE: "live",
    SEEK_QUEUED: "seek:queued",
    SEEK_CANCEL: "seek:cancel",
    PLUGIN_REGISTERED: "plugin:registered"
  });

  function W(e, t) {
    var n = t.clientWidth;
    t.toggleClass("is-small", n < 600).toggleClass("is-tiny", n < 400)
  }
  b.window && b.window.on(["load", "resize"], (function() {
    k.forEach((function(e) {
      var t = e.root;
      t.prevWidth != t.clientWidth && (e.emit("resize"), t.prevWidth = t.clientWidth)
    }))
  }));

  function B(e) {
    var t = function(e) {
      var t = e.getBoundingClientRect(),
        n = window.innerHeight,
        r = t.height,
        o = t.bottom,
        i = r / 5;
      return t.top <= i && t.top + r > n - i || o - r + i >= 0 && o < n + i
    }(e.root);
    return e.in_viewport === t || (e.in_viewport = t, e.emit(t ? "viewenter" : "viewleave")), e
  }
  b.window && b.window.on("scroll", (function() {
    k.forEach(B)
  }));
  var K = [function(e, t, n) {
    var r = !0;
    t.addClass("flowplayer"), W(0, t), n.on(["loadstart", "resize"], (function() {
      W(0, t)
    })), n.on("state", (function(e) {
      Object.keys(n.playerState).forEach((function(n) {
        t.toggleClass(n, e.data[n])
      }))
    })), n.on("timeupdate", (function() {
      n.setState(R, !1)
    })), n.on(z, (function() {
      var r = n.paused && (!e.autoplay || t.hasClass("no-autoplay")) && 0 == n.currentTime;
      [N, x].forEach((function(e) {
        n.setState(e, r)
      }))
    })), n.on("ended", (function(t) {
      setTimeout((function() {
        t.defaultPrevented || (e.rewind && !n.loop && (e.autoplay && (e.autoplay = !1, n.setState("is-autoplay", !1), n.setState(M, !1)), n.setState(L, !0), n.one("seeked", (function() {
          n.setState(L, !1), n.pause(), n.setState(x, !0)
        })), n.currentTime = 0), n.one("timeupdate", (function() {
          n.setState("is-ended", !1)
        })), n.transitionState("is-ended", O, e.loop || e.rewind ? 0 : 300))
      }), 0)
    })), n.on(["seeking", "seeked"], (function(e) {
      n.setState(L, "seeking" == e.type), n.setState(T, n.paused), n.setState(O, !n.paused)
    })), n.on("ended", (function() {
      r = !0
    })), n.on(D().ios ? F : j, (function(e) {
      var t = "src" != e.type || "none" !== n.opt("preload");
      n.setState("is-loaded", t), n.setState(N, !t)
    })), n.on(["waiting", "canplay", "loadstart"], (function(t) {
      if(!n.hasState(L) && ("canplay" != t.type || e.autoplay || n.setState(R, !1), "loadstart" != t.type || "none" != n.opt("preload") || e.autoplay)) {
        if("loadstart" == t.type && e.autoplay) return n.one("playing", (function() {
          n.setState(R, !1)
        }));
        "waiting" == t.type && [O, T, x].forEach((function(e) {
          n.setState(e, !1)
        })), n.setState("is-ended", !1);
        var r = ["waiting"];
        n.setState(R, r.indexOf(t.type) > -1)
      }
    })), n.on(["playing", "pause"], (function(t) {
      var o = "playing" == t.type,
        i = n.currentTime == n.duration,
        a = o && r && e.autoplay || n.hasState(M) || n.hasState(R);
      if(o && (n.started = !0), !e.seamless && r && n.setState(M, !1), o && (r = !1), n.setState(R, !1).setState(x, !1), !i && !n.hasState(L)) {
        r && n.setState(x, !1);
        var u = o ? O : T,
          s = o ? T : O;
        n.transitionState(u, s, a ? 0 : 300), o && n.setState("no-autoplay", !1)
      }
    }))
  }, function(e, t, n) {
    var r = b.div({
      class: "fp-ratio"
    });
    r.set = function(e) {
      e = function(e) {
        if("number" == typeof e && !isNaN(e)) return Number(e);
        if("string" == typeof e) {
          var t = e.split(":");
          return Number(t[1]) / Number(t[0])
        }
        return e
      }(e || .5625), r.css("padding-top", isNaN(e) ? e : 100 * e + "%")
    }, t.reaper.put("aspect_ratio", r), t.append(r);
    var o = [j, F];
    n.on(o, (function() {
      r.set(e.ratio || n.videoHeight && n.videoWidth && n.videoHeight / n.videoWidth)
    })), n.on(z, (function(e) {
      r.set(i(e, "data.ratio", n.videoHeight && n.videoWidth && n.videoHeight / n.videoWidth))
    }))
  }, function(e, t, n) {
    B(n);
    var r = {
      should_resume: e.autoplay,
      has_user_gesture: !1,
      locked: !1
    };
    n.one(["touchend", U], (function() {
      r.has_user_gesture = !0
    })), n.on("play", (function() {
      r.locked || (r.should_resume = !0)
    })), n.on("pause", (function() {
      r.locked || (r.should_resume = !1)
    })), n.on("canplay", (function(t) {
      e.autoplay && !S().size && n.in_viewport && n.paused && r.should_resume && n.togglePlay(!0)
    })), e.autopause && (n.on("viewenter", (function() {
      r.should_resume && n.togglePlay(!0)
    })), n.on("viewleave", (function() {
      var e = !n.paused;
      r.locked = !0, n.pause(), setTimeout((function() {
        r.should_resume = e, r.locked = !1
      }), 0)
    })))
  }];

  function Y() {
    return K.filter((function(e) {
      return "function" == typeof e.wants
    }))
  }

  function X(e) {
    return Array.isArray(e) ? e.join(".") : e
  }

  function Q(e, t) {
    return t.length - e.length
  }

  function J(e) {
    if(void 0 !== e) {
      if(e.reaper) return e.reaper;
      if(!(this instanceof J)) return new J(e);
      var t = e.reaper = this;
      return t.tree = e, t.props = [], t.push = function(e) {
        return t.props = t.props.concat(e), t
      }, t.put = function(n, r) {
        return t.push(n), a(e, n, r), r
      }, t.run = function(n) {
        (n = Array.isArray(n) ? n : []).push(t);
        for(var r = t.props.map(X).sort(Q); r.length;) {
          var o = r.shift(),
            u = i(e, o);
          u && u.reaper && !~n.indexOf(u.reaper) && u.reaper.run(n), a(e, o, 0)
        }
        for(var s in t) delete t[s];
        delete n[n.indexOf(t)], e.reaper = 0
      }, t
    }
  }

  function Z(e) {
    this.message = e
  }
  Z.prototype = new Error, Z.prototype.name = "InvalidCharacterError";
  var $ = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(e) {
    var t = String(e).replace(/=+$/, "");
    if(t.length % 4 == 1) throw new Z("'atob' failed: The string to be decoded is not correctly encoded.");
    for(var n, r, o = 0, i = 0, a = ""; r = t.charAt(i++); ~r && (n = o % 4 ? 64 * n + r : r, o++ % 4) ? a += String.fromCharCode(255 & n >> (-2 * o & 6)) : 0) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
    return a
  };
  var ee = function(e) {
    var t = e.replace(/-/g, "+").replace(/_/g, "/");
    switch(t.length % 4) {
      case 0:
        break;
      case 2:
        t += "==";
        break;
      case 3:
        t += "=";
        break;
      default:
        throw "Illegal base64url string!"
    }
    try {
      return function(e) {
        return decodeURIComponent($(e).replace(/(.)/g, (function(e, t) {
          var n = t.charCodeAt(0).toString(16).toUpperCase();
          return n.length < 2 && (n = "0" + n), "%" + n
        })))
      }(t)
    } catch (e) {
      return $(t)
    }
  };

  function te(e) {
    this.message = e
  }
  te.prototype = new Error, te.prototype.name = "InvalidTokenError";
  var ne = function(e, t) {
    if("string" != typeof e) throw new te("Invalid token specified");
    var n = !0 === (t = t || {}).header ? 0 : 1;
    try {
      return JSON.parse(ee(e.split(".")[n]))
    } catch (e) {
      throw new te("Invalid token specified: " + e.message)
    }
  };
  ne.InvalidTokenError = te;
  var re = {
    OFF: 0,
    ON: 1,
    AUDIO_REQUIRED: 2
  };

  function oe() {
    var e = this,
      t = {};
    e.has = function(e) {
      return !!t[e]
    }, e.get = function(e) {
      return t[e]
    }, e.put = function(n, r) {
      return t[n] = r, e
    }, e.delete = function(n) {
      return delete t[n], e
    }, e.keys = function() {
      var e = [];
      for(var n in t) e.push(n);
      return e
    }, e.each = function(n, r) {
      for(var o in t) n.call(r || e, t[o], o);
      return e
    }
  }

  function ie(e) {
    return "function" == typeof e
  }

  function ae() {
    throw new Error("Function was expected as Argument[0]")
  }
  var ue = [].slice;

  function se(e) {
    if(!(this instanceof se)) return new se(e);
    var t = this;
    return t.data = e, t.tap = function() {
      var e = ue.call(arguments),
        n = e.shift();
      return n == se.lift ? t.data : ie(n) ? (n.apply(t, [t.data].concat(e)), t) : void ae()
    }, t.into = t.fmap = function() {
      var e = ue.call(arguments),
        n = e.shift();
      return n == se.lift ? t.data : ie(n) ? se(n.apply(t, [t.data].concat(e))) : void ae()
    }, t.unwrap = function() {
      return t.data
    }, t
  }

  function le(e, t, n, r) {
    se.of(n).fmap(e.get).fmap(i, t).fmap(se.maybe, se.apply, r)
  }
  se.of = se, se.lift = function(e) {
    return e instanceof se ? e.data : e
  }, se._apply = se.apply = function(e, t) {
    if(0 == t.length) return e();
    if(1 == t.length) return e(t[0]);
    if(2 == t.length) return e(t[0], t[1]);
    if(3 == t.length) return e(t[0], t[1], t[2]);
    if(4 == t.length) return e(t[0], t[1], t[2], t[3]);
    if(5 == t.length) return e(t[0], t[1], t[2], t[3], t[4]);
    throw new Error("Pipe._apply() does not support arity > 5")
  }, se.maybe = function(e, t, n) {
    return e ? se._apply(t, [e].concat(ue.call(arguments, 2, arguments.length))) : e
  }, se.curry = function(e, t, n) {
    return (t = t || []).length > e.length - 1 ? e.apply(n, t) : function() {
      var r = t.concat(ue.call(arguments));
      return se.curry(e, r, n)
    }
  };
  var ce = new function() {
    oe.call(this), this.render = se.curry(le, [this, "onrender"]), this.remove = se.curry(le, [this, "onremove"])
  };

  function fe(e) {
    return re.AUDIO_REQUIRED & e.autoplay
  }

  function de(e, t) {
    t.multiplay || k.forEach((function(t) {
      e != t && (t.toggleFullScreen(!1), t.pause())
    }))
  }

  function pe(e) {
    e.setState("is-autoplay", !1), e.setState(R, !1), e.setState(M, !1), e.setState(T, !0), e.setState("no-autoplay", !0), 0 == e.currentTime && e.setState(x, !0)
  }

  function me(e) {
    return e.catch((function(e) {
      if("AbortError" == e.name) return {
        ok: 1
      };
      throw e
    }))
  }

  function ve(e, t, n) {
    var r = n.muted;
    return t.__pending_play = me(e), e.catch((function(e) {
      return t.paused ? fe(n) ? {
        err: re.AUDIO_REQUIRED
      } : function(e, t) {
        return e.muted = t.muted = !0, me(e.play())
      }(t, n) : {
        ok: 1
      }
    })).then((function(e) {
      i(e, "err") == re.AUDIO_REQUIRED && pe(t), de(t, n)
    })).catch((function(e) {
      t.started || (n.autoplay = !1, n.muted = r, t.toggleMute(!1), pe(t), console.error(e))
    })).then((function() {
      t.__pending_play = void 0, t.setState(M, !1)
    }))
  }

  function he(e, t, n) {
    var r = "boolean" == typeof n;
    if("boolean" != typeof n && (n = e.paused), ! function(e, t, n) {
        var r = e.emit(t ? "beforeplay" : "beforepause", {
          forced: n
        }, {
          return_self: !1
        });
        return r && r.defaultPrevented
      }(e, n, r)) try {
      if(0 == n) return e.pause();
      var o = e.__pending_play;
      if(0 == e.paused && !o) return;
      if(o) return o.src !== _e(e.original_src) && ge(e), e.__pending_play;
      (function(e) {
        return (0 == e.networkState || 0 == e.readyState) && e.currentSrc == _e(e.original_src)
      })(e) && ge(e), fe(t) && (e.muted = !1, 0 == e.volume && (e.volume = 1));
      var i = e.play();
      if(i && (i.src = _e(e.original_src)), i && "function" == typeof i.catch) return ve(i, e, t);
      e.paused && n && 0 == e.currentTime && pe(e), de(e, t)
    } catch (t) {
      e.emit("error", t)
    }
  }

  function ge(e) {
    e.currentSrc.match(/^blob:/) || e.load()
  }

  function _e(e) {
    var t = document.createElement("a");
    return t.href = e, t.href
  }

  function ye(e, t) {
    var n = {};
    for(var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if(null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var o = 0;
      for(r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
    }
    return n
  }

  function Ee(e) {
    var t = document.createElement("a");
    t.href = e;
    var n = t.pathname && t.pathname.split(".");
    return n.length > 1 && n[n.length - 1]
  }

  function be(e) {
    switch(e) {
      case "video/mpd":
        return "application/dash+xml";
      case "video/m3u8":
        return "application/x-mpegurl";
      default:
        return e
    }
  }
  const we = e => {
    var {
      src: t
    } = e, n = ye(e, ["src"]);
    return [Object.assign({
      src: t,
      type: t ? be("video/" + Ee(t)) : ""
    }, n)]
  };

  function ke(e) {
    const [t, n] = e.split("{");
    return n ? (r = t, n.slice(0, -1).split(",").map((function(e) {
      return {
        src: r + e,
        type: be("video/" + e)
      }
    }))) : we({
      src: e
    });
    var r
  }

  function Se(e) {
    var {
      src: t,
      type: n
    } = e, r = ye(e, ["src", "type"]);
    return t && n ? [Object.assign({
      src: t,
      type: n
    }, r)] : we(Object.assign({
      src: t
    }, r))
  }
  var Ae;

  function Oe(e, t, n, r = {
    safari: !1
  }) {
    n = function(e) {
      return "string" == typeof e ? ke(e) : Array.isArray(e) || "object" != typeof e ? e.reduce((function(e, t) {
        return "string" == typeof t && (t = ke(t)), "object" != typeof t || Array.isArray(t) || (t = Se(t)), e.concat(t)
      }), []) : Se(e)
    }(n), e.currentSrc && (e.innerHTML = "");
    for(var o = 0; o < n.length; o++) {
      var i = n[o];
      if(Ae.Ok == Te(e, t, i)) break;
      if(Ae.Ok == Ne(e, t, i, r)) break;
      o == n.length - 1 && "string" == typeof i.src && (e.src = i.src)
    }
    return function(e, t) {
      (function(e, t) {
        if(!e.currentSrc) return;
        if("none" == e.opt("preload")) return;
        if(t.autoplay && t.autoplay > 0) return;
        e.load()
      })(e, t), "none" == e.opt("preload") && e.render()
    }(e, t), e
  }

  function Te(e, t, n) {
    e.emit("src", n), "string" == typeof n.src && (e.original_src = n.src);
    var r = function(e, t) {
      return Y().filter((function(n) {
        return n.wants(t.src, t, e)
      }))
    }(t, n);
    if(0 == r.length) return Ae.Err;
    return r[0].call(e, t, e.root, e, n), Ae.Ok
  }

  function Ne(e, t, n, r = {
    safari: !1
  }) {
    return /^audio\//.test(n.type || "") && e.emit("audioonlysource"), t.start_time && (n.src = n.src + "#t=" + t.start_time), "" == e.canPlayType(n.type || "") ? Ae.Err : !n.drm || n.drm["com.apple.fps.1_0"] && r.safari ? ("string" == typeof n.src && (e.src = n.src), Ae.Ok) : Ae.Err
  }! function(e) {
    e[e.Err = 0] = "Err", e[e.Ok = 1] = "Ok"
  }(Ae || (Ae = {}));
  const xe = [q, "seeking", "src", "seek:cancel"];
  var Le;

  function Re(e, t, n) {
    return isNaN(e.duration) || isNaN(e.currentTime) ? {} : (t.offset += n, 0 == t.offset ? Me(e, t) : (t.timer && clearTimeout(t.timer), t.timer = setTimeout((function() {
      0 != e.reaper && (e.currentTime = function(e, t, n = 0) {
        return Math.max(Math.min(t, e), n)
      }(e.currentTime + t.offset, e.duration), t.timer = 0, Me(e, t))
    }), 1e3), function(e, t) {
      e.setState("will-seek", !0), e.setState(Le.BACKWARD, t.offset < 0), e.setState(Le.FORWARD, t.offset > 0)
    }(e, t), e.emit("seek:queued", t), t))
  }

  function Me(e, t) {
    t.timer && clearTimeout(t.timer), t.timer = t.offset = 0,
      function(e) {
        e.setState(Le.FORWARD, !1), e.setState(Le.BACKWARD, !1), e.setState("will-seek", !1)
      }(e)
  }! function(e) {
    e.FORWARD = "forward", e.BACKWARD = "backward"
  }(Le || (Le = {}));
  var Ce = ["complete", "interactive", "loaded"];

  function Pe() {
    if("undefined" == typeof document) return !1;
    var e = document.documentElement;
    return e && "rtl" == e.getAttribute("dir")
  }
  var Ie = {
      preload: "none",
      rtl: !1,
      controls: !0
    },
    De = ["loop", "muted", "preload"];

  function Ue(e) {
    var t = Array(e.length),
      n = 0;
    if(0 == e.length) return t;
    for(; n < e.length;) t[n] = [e.start(n), e.end(n)], n++;
    return t
  }

  function Fe(e, t, o) {
    o.toJSON = function() {
      return {
        duration: o.duration,
        volume: o.volume,
        currentTime: o.currentTime,
        buffered: Ue(o.buffered),
        played: Ue(o.played),
        states: o.root.className
      }
    }, o.setSrc = function(t) {
      return Oe(o, e, t, D())
    }, o.playerState = o.playerState || {}, o.setState = function(e, t) {
      var n = {};
      return n[e] = t, (n = r({}, o.playerState, n))[R] && (n[O] = !1), o.playerState = n, o.emit("state", o.playerState)
    }, o.hasState = function(e) {
      return !!o.playerState[e]
    }, o.transitionState = function(e, t, n) {
      o.hasState(e) && (n = 0), n && o.setState("is-toggling", !0), o.setState(t, !1), o.setState(e, !0), n && setTimeout((function() {
        o.setState("is-toggling", !1)
      }), n)
    }, o.render = function(e, t) {
      return "string" == typeof e ? ce.render(e, t) : (o.emit(D().ios ? F : j), o.emit("canplay"), o)
    }, o.togglePlay = function(t, n) {
      var r = he(o, e, t);
      return "function" != typeof n ? r : r && "object" == typeof r && "catch" in r ? r.then(n) : n()
    }, o.toggleMute = function(e) {
      e = null == e ? !o.muted : !!e, o.muted = e, o.muted || o.volume || (o.volume = 1), o.emit("volumechange")
    }, o.toggleDisable = function(e) {
      e = null == e ? !o.disabled : !!e, o.setState("is-disabled", e), o.disabled = e
    }, o.destroy = o.reap = function(e) {
      o.pause();
      var t = k.indexOf(o);
      ~t && k.splice(t, 1), o.emit(q), setTimeout((function() {
        o.setSrc([]), "function" == typeof e && e()
      }), 0)
    }, o.setAttrs = function(e) {
      De.forEach((function(t) {
        var n = c(e[t]);
        if(n) return o.attr(t, n), void(t in o && (o[t] = n));
        !1 === n && (o.removeAttribute(t), t in o && (o[t] = n))
      }))
    }, o.opt = function(e, t) {
      return t = void 0 === t ? i(Ie, e) : t, i(o.opts, e, t)
    }, o.setOpts = function(r) {
      if(0 != o.reaper) {
        n(e, r);
        var i = !!e.autoplay && !o.hasState("no-autoplay");
        "disabled" in r && o.toggleDisable(r.disabled), "muted" in r && o.toggleMute(r.muted), o.setState("is-autoplay", i), o.setState("is-rtl", o.opt("rtl", function(e) {
          if(!e) return Pe();
          var t = e.getAttribute("dir");
          return t ? "rtl" == t : Pe()
        }(t))), o.setState("is-live", !!e.live), o.setState("no-timeline", !(!e.live || e.dvr)), o.setState(M, !(!e.seamless && !i)), o.setState("has-poster", "string" == typeof e.poster && e.poster.length > 0), o.setState("is-seekable", !!e.seekable), t.style.backgroundImage = o.hasState("has-poster") ? "url('" + e.poster + "')" : "", o.emit(z, e)
      }
    }, o.renderPlugin = function(e) {
      o.emit("renderplugin", e, {
        return_self: !1
      }).defaultPrevented || o.root.appendChild(e)
    };
    var a, u, s = {
      offset: 0,
      timer: 0
    };
    u = s, (a = o).on(xe, (function() {
      Me(a, u)
    })), o.enqueueSeek = function(e) {
      if(0 != o.opts.seekable && !(1 == o.opts.disabled && e > 0)) return Re(o, s, e)
    }
  }

  function je(e, t) {
    var n = t.querySelector("video"),
      r = b(n || (e._video_element_callback ? e._video_element_callback(e) : document.createElement("video")));
    return r.addClass("fp-engine"), J(r), r.async = void 0 !== n, r.async && !r.paused ? (r.setState(O, !0).setState(M, !0), r) : (r.attr("playsinline", ""), r.attr("webkit-playsinline", ""), t.append(r), r)
  }

  function qe(e, t) {
    if("object" == typeof exports && "undefined" != typeof module) return t;
    "flowplayer" in e || (e.flowplayer = {
      extensions: []
    });
    var n = e.flowplayer;
    return "function" == typeof n ? (n(t), t) : (Array.isArray(n.extensions) || (n.extensions = []), ~n.extensions.indexOf(t) || n.extensions.push(t), t)
  }

  function ze() {
    return "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}
  }
  var He = ["localhost", "127.0.0.1", "0.0.0.0", "s.codepen.io", "cdpn.io"];

  function Ge(e, t) {
    return !!~He.indexOf(e) || e.indexOf(t) === e.length - t.length
  }

  function Ve(e, t) {
    var n = {};
    t = t || {};
    try {
      n = ne(e), this.valid_jwt = !0
    } catch (e) {}
    this.raw = e, this.data = JSON.parse(n.c || "{}"), this.exp = n.exp, t.require_valid_token && Ve.validate(this)
  }

  function We(e) {
    try {
      return Ve.validate(e), {
        success: !0
      }
    } catch (e) {
      return {
        success: !1,
        message: e.message
      }
    }
  }
  Ge.check_whitelist = function(e) {
    return !!~He.indexOf(e)
  }, Ve.validate = function(e) {
    if("string" == typeof e && (e = new Ve(e)), !e || !e.raw) {
      if(Ge.check_whitelist(window.location.hostname)) return !0;
      throw new Error("No token provided in configuration")
    }
    if(!e.valid_jwt) throw new Error("Invalid token provided");
    var t = window.location.hostname,
      n = Ge.bind(null, t);
    if(e.data.domain && e.data.domain.length && !e.data.domain.some(n)) throw new Error("Domain not allowed");
    if(1e3 * e.exp - Date.now() < 0) throw new Error("Expired token");
    return !0
  }, Ve.id = function(e) {
    if(e) return "string" == typeof e && (e = new Ve(e)), e.data.id
  };
  var Be = Object.freeze({
      __proto__: null,
      ADS: 2,
      ANALYTICS: 4,
      NO_METERING: 8,
      DEVELOPER_PLAN: 16
    }),
    Ke = {};
  for(var Ye in Be) Ke[Be[Ye]] = Ye;

  function Xe(e) {
    if(!(this instanceof Xe)) return new Xe(e);
    var t = this;
    t.grant = e, t.is_granted = function(e) {
      return (t.grant & e) === e
    }
  }

  function Qe(e, t) {
    if("function" != typeof e) {
      "string" == typeof t && (t = {
        src: t
      }), t || (t = {}), t.token || "string" != typeof window.__FLOWPLAYER_TOKEN || (t.token = window.__FLOWPLAYER_TOKEN);
      var n = b(e);
      if(!n) return console.error(new Error("Flowplayer: '" + e.toString() + "' not found"));
      if(n.video) return n.video;
      var r = We(t.token);
      if(!r.success) return Je(n, null, {
        reason: "token",
        details: r.message
      });
      if(D().ie > 0 && n.addClass("poor-flex"), !D().video) return n.append(b.img({
        src: t.poster
      }));
      var o = J(n),
        i = o.put("video", je(t, n));
      if(Object.defineProperty(i, "token", {
          value: "string" == typeof t.token ? Ve.id(t.token) : "",
          writable: !1
        }), i.once(q, o.run), o.put("video.root", n), Xe.from_token(t.token).is_granted(Xe.permissions.DEVELOPER_PLAN)) return Je(n, null, {
        reason: "developer_plan",
        details: "Using developer plan tokens is not currently supported"
      });
      !~k.indexOf(i) && k.push(i), Fe(t, n, i), i.setAttrs(t), K.forEach((function(e) {
        "function" == typeof e.onapi && e.onapi.call(Qe, t, n, i)
      })), K.forEach((function(e) {
        e.call(Qe, t, n, i)
      })), i.reaper.put("opts", t), i.setOpts(t), t.src && i.setSrc(t.src);
      var a = i.readyState;
      return a > 0 && i.currentSrc && i.emit(F), a > 2 && i.currentSrc && i.emit("canplay"), "none" == i.opt("preload") && i.paused && i.currentSrc && i.render(), i.emit("mount"), i.on("error:fatal", (function(e) {
        Je(n, i, e.data)
      })), i
    }
    for(var u = 0; u < arguments.length; ++u) {
      var s = arguments[u];
      K.push(s), "function" == typeof s.onumd && s.onumd(Qe)
    }
  }

  function Je(e, t, n) {
    t && t.destroy(), e.innerHTML = "", e.removeClass("flowplayer"), e.addClass("flowplayer-fatal"), e.append(b.el("h2", {}, "Playback error")), e.append(b.p({}, "Are you the site owner?")), e.append(b.a({
      className: "troubleshoot",
      target: "_blank",
      href: "https://quicklooked.github.io/help" + n.reason
    }, "Troubleshoot")), e.append(b.a({}, b.img({
      src: "/assets/images/fit/32/1_m-R_BkNf1Qjr1YbyOIJY2w.png"
    }))), console.error(new Error(n.details || n.reason))
  }
  Xe.of = Xe, Xe.from_token = function(e) {
      var t = new Ve(e, {
        require_valid_token: !0
      });
      return Xe.of(t.data.acl)
    }, Xe.permissions = Be, r(Qe, function() {
      var e = ze(),
        t = e.flowplayer ? e.flowplayer : {
          extensions: []
        };
      return Array.isArray(t.extensions) || (t.extensions = []), t
    }()),
    function(e) {
      Array.isArray(e.extensions) && e.extensions.forEach((function(e) {
        K.push(e)
      })), e.components = ce, e.version = "2.9.6", e.commit = "c21973731e50f047756ebba96e9d958593a2fa2e", e.Players = A, e.instances = k, e.extensions = K, e.loaders = Y, e.support = D, e.events = V, e.states = P, e.mq = b, e.jwt = ne, e.util = f, e.observable = m, e.Reaper = J, e.autoplay = e.autoplay_options = re, e.extensions.forEach((function(t) {
        "function" == typeof t.onumd && t.onumd(e)
      }))
    }(Qe), "object" == typeof document && "function" == typeof document.emit && setTimeout(document.emit, 0, "flowplayer:umd", Qe);
  var Ze = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function $e(e) {
    var t = {
      exports: {}
    };
    return e(t, t.exports), t.exports
  }
  var et = $e((function(e, t) {
      var n = Ze && Ze.__assign || function() {
        return (n = Object.assign || function(e) {
          for(var t, n = 1, r = arguments.length; n < r; n++)
            for(var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }).apply(this, arguments)
      };
      t.__esModule = !0, t.remove = t.downcase = t.pluck = t.merge = void 0, t.merge = function() {
        for(var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return e.reduce((function(e, t) {
          return n(n({}, e), t)
        }), {})
      }, t.pluck = function(e) {
        for(var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        return Object.keys(e).filter((function(e) {
          return ~n.indexOf(e)
        })).reduce((function(n, r) {
          var o;
          return t.merge(n, ((o = {})[r] = e[r], o))
        }), {})
      }, t.downcase = function(e) {
        return (e || "").toString().toLowerCase()
      }, t.remove = function(e, t) {
        var n = e.lastIndexOf(t);
        return ~n && e.splice(n, 1), e
      }
    })),
    tt = $e((function(e, t) {
      var n = Ze && Ze.__createBinding || (Object.create ? function(e, t, n, r) {
          void 0 === r && (r = n), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
              return t[n]
            }
          })
        } : function(e, t, n, r) {
          void 0 === r && (r = n), e[r] = t[n]
        }),
        r = Ze && Ze.__setModuleDefault || (Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        }),
        o = Ze && Ze.__importStar || function(e) {
          if(e && e.__esModule) return e;
          var t = {};
          if(null != e)
            for(var o in e) "default" !== o && Object.hasOwnProperty.call(e, o) && n(t, e, o);
          return r(t, e), t
        };
      t.__esModule = !0;
      var i = o(et),
        a = function() {
          function e() {
            this.pending = [], this.open = [], this.stats = {
              failures: 0,
              ttl: 0
            }
          }
          return e.of = function() {
            return new e
          }, e.is_empty = function(e) {
            return 0 == e.pending.length
          }, e.is_high_water = function(t) {
            return t.open.length == e.MAX_OPEN_REQUESTS
          }, e.maybe_spawn_req = function(t) {
            if(e.is_empty(t)) return t;
            if(e.is_high_water(t)) return t;
            try {
              var n = e.lpop(t);
              n && e.request(t, n)
            } catch (e) {}
          }, e.increment_failures = function(t) {
            return t.stats.failures++, t.stats.failures > e.MAX_FAILURE_COUNT && (t.stats.ttl = Date.now() + e.REQUEST_TTL_MS), t
          }, e.handle_error = function(t, n) {
            e.rm(t, n), e.increment_failures(t)
          }, e.request = function(t, n) {
            var r = n[0],
              o = n[1],
              i = n[2];
            if(!(Date.now() < t.stats.ttl)) {
              var a = new XMLHttpRequest;
              t.open.push(a), a.timeout = e.REQUEST_TIMEOUT_MS, a.ontimeout = function() {
                e.handle_error(t, a)
              }, a.onerror = function(n) {
                e.handle_error(t, a)
              }, a.onreadystatechange = function() {
                a.readyState == XMLHttpRequest.DONE && e.rm(t, a), Math.floor(a.status / 100)
              }, a.onload = function() {
                e.rm(t, a), t.stats.failures && t.stats.failures--
              }, a.open(o, r), a.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
              try {
                a.send(JSON.stringify(i))
              } catch (e) {}
            }
          }, e.rpush = function(t) {
            for(var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            return n.forEach((function(n) {
              t.pending.length >= e.MAX_PENDING || (t.pending.push(n), e.maybe_spawn_req(t))
            })), t
          }, e.lpop = function(e) {
            return e.pending.shift()
          }, e.rm = function(e, t) {
            return i.remove(e.open, t), e
          }, e.MAX_OPEN_REQUESTS = 3, e.MAX_PENDING = 5, e.REQUEST_TIMEOUT_MS = 4e3, e.REQUEST_TTL_MS = 5e3, e.MAX_FAILURE_COUNT = 3, e
        }();
      t.default = a
    })),
    nt = $e((function(e, t) {
      var n = Ze && Ze.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      };
      t.__esModule = !0;
      var r = n(tt);
      t.default = r.default.of()
    })),
    rt = $e((function(e, t) {
      t.__esModule = !0, t.prepare_url = t.URL_PARAM = void 0, t.URL_PARAM = /:([a-zA-Z_]+)/g, t.prepare_url = function(e, n) {
        return e.url.replace(t.URL_PARAM, (function(t) {
          if((t = t.slice(1, t.length)) in n) return n[t].toString();
          e.log.error(new Error("\n      preparing url[" + e.url + "] failed\n      \n      parameter[" + t + "] not detected in params:\n      \n      " + JSON.stringify(n, null, 2) + "\n    "))
        }))
      }
    })),
    ot = $e((function(e, t) {
      t.__esModule = !0, t.Log = void 0;
      var n = function() {
        function e(e) {
          this.emitter = e
        }
        return e.prepare = function(e, t) {
          var n = document.createEvent("Event");
          return n.initEvent(e, !1, !0), n.ns = e, n.data = t, n
        }, e.of = function(t) {
          return new e(t)
        }, e.prototype.info = function(t) {
          this.emitter.dispatchEvent(e.prepare(e.NAMESPACE.INFO, t))
        }, e.prototype.error = function(t) {
          this.emitter.dispatchEvent(e.prepare(e.NAMESPACE.ERROR, t))
        }, e.prototype.warn = function(t) {
          this.emitter.dispatchEvent(e.prepare(e.NAMESPACE.WARN, t))
        }, e.NAMESPACE = {
          INFO: "tracker:info",
          ERROR: "tracker:err",
          WARN: "tracker:warn"
        }, e
      }();
      t.Log = n
    })),
    it = $e((function(e, t) {
      var n;
      t.__esModule = !0, t.Verb = void 0, (n = t.Verb || (t.Verb = {})).POST = "POST", n.PUT = "PUT", n.GET = "GET"
    })),
    at = $e((function(e, t) {
      var n = Ze && Ze.__createBinding || (Object.create ? function(e, t, n, r) {
          void 0 === r && (r = n), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
              return t[n]
            }
          })
        } : function(e, t, n, r) {
          void 0 === r && (r = n), e[r] = t[n]
        }),
        r = Ze && Ze.__setModuleDefault || (Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        }),
        o = Ze && Ze.__importStar || function(e) {
          if(e && e.__esModule) return e;
          var t = {};
          if(null != e)
            for(var o in e) "default" !== o && Object.hasOwnProperty.call(e, o) && n(t, e, o);
          return r(t, e), t
        },
        i = Ze && Ze.__spreadArrays || function() {
          for(var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
          var r = Array(e),
            o = 0;
          for(t = 0; t < n; t++)
            for(var i = arguments[t], a = 0, u = i.length; a < u; a++, o++) r[o] = i[a];
          return r
        },
        a = Ze && Ze.__importDefault || function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        };
      t.__esModule = !0;
      var u = a(nt),
        s = a(tt),
        l = o(rt),
        c = o(et),
        f = function() {
          function e(t, n) {
            var r = this;
            void 0 === n && (n = {});
            var o = this;
            if(this.emitter = t, this.url = n.url, this.log = ot.Log.of(this.emitter), this.verb = n.verb, this.metadata = c.merge({}, n.metadata || {}), this.rq = n.rq || u.default, this.events = n.events || [], this.required_keys = n.required_keys || [], this.optional_keys = n.optional_keys || [], this.listeners = [], this.valid_keys = this.required_keys.slice(0).concat(this.optional_keys), e.assert_emitter_api(this.emitter), void 0 === e.verb[this.verb]) throw new Error("invalid HTTP verb[" + this.verb + "] passed");
            if("string" != typeof this.url) throw new Error("invalid API url[" + this.url + "] passed");
            e.TRACKERS.push(this), o.events.forEach((function(t) {
              e.create_listener(r, t, (function(n) {
                void 0 === n && (n = {});
                var i = c.merge(o.metadata, {
                    event_type: t
                  }, n.data || n),
                  a = l.prepare_url(o, i),
                  u = e.pluck_valid_keys(o, i),
                  f = e.ensure_required_keys(o, u);
                if(f.length) return o.log.error("Tracker.validate_metadata() failed for \n            Event[" + t + "]\n            missing keys: " + f + "\n            payload:\n              " + JSON.stringify(u, null, 2));
                s.default.rpush(r.rq, [a, r.verb, u])
              }))
            }))
          }
          return e.of = function(t, n) {
            return new e(t, n)
          }, e.ensure_required_keys = function(e, t) {
            return e.required_keys.filter((function(e) {
              return !(e in t)
            }))
          }, e.pluck_valid_keys = function(e, t) {
            return c.pluck.apply(c, i([t], e.valid_keys))
          }, e.merge_metadata = function(t, n) {
            return void 0 === n && (n = {}), t.metadata = e.pluck_valid_keys(t, c.merge(t.metadata, n)), t
          }, e.assert_emitter_api = function(e) {
            if("function" != typeof(e || {}).addEventListener) throw new Error("Tracker() received an emitter that does not implement the addEventListener method");
            if("function" != typeof(e || {}).removeEventListener) throw new Error("Tracker() received an emitter that does not implement the removeEventListener method")
          }, e.create_listener = function(e, t, n) {
            e.listeners.push([t, n]), e.emitter.addEventListener(t, n)
          }, e.prototype.destroy = function() {
            var t = this;
            this.listeners.forEach((function(e) {
              var n = e[0],
                r = e[1];
              return t.emitter.removeEventListener(n, r)
            })), delete this.rq, delete this.emitter, c.remove(e.TRACKERS, this)
          }, e.prototype.put = function(t) {
            return void 0 === t && (t = {}), e.merge_metadata(this, t), this
          }, e.TRACKERS = [], e.QUEUE = u.default, e.verb = it.Verb, e
        }();
      t.default = f
    })),
    ut = $e((function(e, t) {
      var n = Ze && Ze.__createBinding || (Object.create ? function(e, t, n, r) {
          void 0 === r && (r = n), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
              return t[n]
            }
          })
        } : function(e, t, n, r) {
          void 0 === r && (r = n), e[r] = t[n]
        }),
        r = Ze && Ze.__setModuleDefault || (Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        }),
        o = Ze && Ze.__importStar || function(e) {
          if(e && e.__esModule) return e;
          var t = {};
          if(null != e)
            for(var o in e) "default" !== o && Object.hasOwnProperty.call(e, o) && n(t, e, o);
          return r(t, e), t
        },
        i = Ze && Ze.__importDefault || function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        };
      t.__esModule = !0, t.API = t.Tracker = void 0;
      var a = i(at);
      t.Tracker = a.default;
      var u = o(rt);
      t.API = u
    })),
    st = "ping",
    lt = "display",
    ct = "view";
  var ft = {
    3: !0,
    5: !0,
    7: !0,
    9: !0
  };
  var dt = function(e) {
      for(var t, n = 0; n < 16; n++) 0 == (3 & n) && (t = 4294967296 * Math.random()), e[n] = t >>> ((3 & n) << 3) & 255;
      return e
    }(Array(16)).reduce((function(e, t, n) {
      var r = (t + 256).toString(16).substr(1);
      return e + (ft[n] ? "-" : "") + r
    }), ""),
    pt = ["sitegroup_id", "session_id", "media_id", "site_id", "player_id", "video_type"],
    mt = ["created", "position"],
    vt = ["player_version", "created", "source", "category", "category_id", "autoplay", "muted", "customer_user_id"];

  function ht(e, t, n) {
    if(!(this instanceof ht)) return new ht(e, t, n);
    var r = this;
    return r.name = e.name || "RL::anonymous::" + Date.now(), r.locked = !1, r.ttl = t, r.unlock = function() {
      return r.locked = !1, r
    }, r.run = function() {
      r.locked || (r.locked = setTimeout((function() {
        return e.apply(null, n), r.unlock()
      }), t))
    }, r.cancel = function() {
      return r.locked && clearTimeout(r.locked), r.unlock()
    }, r
  }

  function gt(e, t, n) {
    if(!(this instanceof gt)) return new gt(e, t, n);
    var o = this;
    o.last_idx = 0, o.segment_duration = 0, o.breakpoints = [], o.calculate_segment_info = function() {
      return t.duration / 1 === t.duration && r(o, gt.segment_info(t.duration))
    }, o.run = function(e) {
      if(o.segment_duration || o.calculate_segment_info()) {
        var n = gt.select_watched_segments(o, t, e);
        0 != n.length && t.emit(st, {
          position: n
        })
      }
    }, o.update = function() {
      o.calculate_segment_info(), o.last_idx = gt.next_idx(o, t)
    }
  }
  gt.segment_info = function(e) {
    var t = e / 100;
    return {
      segment_duration: t,
      breakpoints: Array.apply(null, Array(100)).map((function(e, n) {
        return Math.floor(n * t * 1e3) / 1e3
      }))
    }
  }, gt.next_idx = function(e, t) {
    return Math.min(Math.floor(t.currentTime / e.segment_duration), 99)
  }, gt.select_watched_segments = function(e, t, n) {
    var r = e.last_idx,
      o = n ? 99 : gt.next_idx(e, t);
    return e.last_idx = o, o <= r ? [] : e.breakpoints.slice(r, 99 == o ? 100 : o).map((function(t) {
      return e.breakpoints.indexOf(t)
    }))
  };

  function _t(e, t, n) {
    if(!(this instanceof _t)) return new _t(e, t, n);
    var r = this;
    r.last_tracked_ts = Date.now(), r.ticks = 0, r.run = function() {
      var e = Date.now();
      e - r.last_tracked_ts < 6e4 || (r.last_tracked_ts = e, ++r.ticks, t.emit(st, {
        position: 60 * r.ticks
      }))
    }, r.update = function() {}
  }
  _t.within = function(e, t, n) {
    var r = e + t.right,
      o = e - t.left;
    return n < r && n > o
  };
  var yt = "vod",
    Et = "live",
    bt = [lt, st, ct];

  function wt(e) {
    var t = e.ads;
    return void 0 !== t && (void 0 !== t.schedule && ("function" == typeof t.hasPreroll && (t.currentRequests ? t.currentRequests : !!t.adPlaying || !(!t.hasPreroll() || 0 != t.nextIndex))))
  }

  function kt() {
    try {
      return window.location !== window.parent.location ? document.referrer : document.location.href
    } catch (e) {
      return !1
    }
  }
  var St = qe(ze(), (function(e, t, n) {
    if(Xe.from_token(e.token).is_granted(Xe.permissions.ANALYTICS) && !n.analytics) {
      var r = n.analytics = {
          ticker: void 0,
          last_media_id: void 0,
          ping: function() {
            r.ticker && r.ticker.run()
          },
          comp: ht((function() {
            r.ping()
          }), 6e3),
          ended: void 0
        },
        o = {
          session_id: dt,
          autoplay: n.autoplay,
          muted: n.muted,
          player_id: e.player_id,
          customer_user_id: e.customer_user_id
        },
        a = n.analytics.tracker = ut.Tracker.of(n, {
          verb: ut.Tracker.verb.POST,
          url: "https://ptm.flowplayer.com/:video_type/:sitegroup_id/:event_type",
          events: bt,
          required_keys: pt,
          optional_keys: [].concat(vt).concat(mt),
          metadata: o,
          video_type: e.live ? Et : yt
        });
      n.on(q, (function() {
        a && a.destroy(), a = 0
      })), n.on(z, (function(t) {
        if(a) {
          var o = i(t, "data.metadata", {});
          if(o.media_id) {
            var u = i(a, "metadata.media_id");
            if(!u || o.media_id != u) {
              var s = i(e, "analytics", {});
              a.put(o), a.put(s);
              var l = i(e, "metadata.live_start_time", e.live) ? Et : yt;
              a.put({
                video_type: l,
                source: e.source || kt() || ""
              }), r.ticker = e.live ? _t(r, n, a) : gt(r, n, a), r.ended = !1, n.emit(lt)
            }
          }
        }
      }));
      var u = void 0;
      n.on("playing", (function() {
        if(a && !u && ! function(e, t) {
            return e.metadata.media_id && e.metadata.media_id == t.last_media_id
          }(a, r)) {
          a.put({
            muted: n.muted
          });
          var e = wt(n);
          if(e) return u = function(e, t, n) {
            if(e && "function" == typeof e.then) {
              var r = e.then(t);
              if("function" != typeof n) return r;
              r.catch(n)
            }
          }(e, (function() {
            r.last_media_id = a.metadata.media_id, n.emit(ct), u = void 0
          }), (function() {
            u = void 0
          }));
          r.last_media_id = a.metadata.media_id, n.emit(ct)
        }
      })), n.on("timeupdate", (function() {
        a && (u || wt(n) || r.ended || (!e.live && n.currentTime + .25 >= n.duration && r.ticker && r.ticker.run(!0), r.comp.run()))
      })), n.on("seeked", (function() {
        a && r.ticker && r.ticker.update()
      })), n.on("ended", (function() {
        a && function(e) {
          e.ended || (e.ended = !0, e.comp.cancel(), e.ping())
        }(r)
      }))
    }
  }));

  function At() {}

  function Ot(e, t, n) {
    var r;
    "undefined" != typeof window && "ontouchstart" in window && n.setState("is-touch-device", !0), n.setState("is-accessibility", !1), t.middle.on("touchend", (function(e) {
      0 != e.cancelable && (e.preventDefault(), n.emit(e.type, e.data))
    })), n.on("touchend", (function(e) {
      setTimeout((function() {
        if(!e.defaultPrevented && !n.hasClass(R)) {
          if(n.ended) return n.togglePlay(!0);
          var t = n.hasState(x);
          r && clearTimeout(r), (t || n.hasState(C) || n.hasState("no-autoplay")) && (n.hasState(C) && (n.setState(C, !1), n.setState("is-hovered", !1)), n.togglePlay(), t) || (n.setState(C, !0), n.paused || (r = setTimeout((function() {
            r = 0, n.setState(C, !1), n.setState("is-hovered", !1)
          }), 2e3)))
        }
      }), 0)
    }))
  }
  St.Tracker = ut.Tracker, "undefined" != typeof window && window.matchMedia && [H, G].forEach((function(e) {
    window.matchMedia("(orientation: " + e + ")").addListener((function(t) {
      k.length && k.forEach((function(n) {
        t.matches && n.emit(e)
      }))
    }))
  }));
  var Tt = b.document;

  function Nt(e, n) {
    var r, o, i;
    if("grabbing" in e) return e;
    e.grabbing = !1, e.touching = !1;
    var a = n.onseek || t,
      u = n.onstart || t,
      s = n.onend || t,
      l = n.onmouse || t,
      c = n.ontouch || t,
      f = n.ontouchend || t,
      d = n.ctx;

    function p(t) {
      var n;
      n = e.getBoundingClientRect(), r = n.left, o = n.width;
      var i = (function(e) {
        return "function" == typeof window.TouchEvent && e instanceof TouchEvent
      }(t) ? t.changedTouches[0].pageX : t.pageX) - r;
      return i > o && (i = o), i < 0 && (i = 0), i / o * 100
    }

    function m(t) {
      var n = p(t);
      n != i && (a.call(d, n, e), i = n)
    }

    function v(e) {
      if(e) {
        var t = "";
        return Array.prototype.forEach.call(e.classList, (function(e) {
          t = "." + e
        })), t
      }
    }

    function h(e) {
      var t = window.getComputedStyle(e);
      return "0" !== t.width && "0" !== t.height && "0" !== t.opacity && "none" !== t.display && "hidden" !== t.visibility
    }
    return e.on("touchstart", (function(t) {
      t.target.closest(v(e)) && (e.touching = !0, h(e.parentElement) && (t.preventDefault(), e.grabbing = !0, c(d, e), u(d, e), m(t)))
    })), e.on("touchmove", (function(t) {
      t.target.closest(v(e)) && h(e.parentElement) && e.touching && (t.preventDefault(), m(t), l.call(d, p(t), e))
    })), e.on("touchend", (function(t) {
      setTimeout((function() {
        e.touching = !1
      }), 500), t.target.closest(v(e)) && h(e.parentElement) && (t.preventDefault(), e.grabbing = !1, f(d, e, p(t)), s.call(d, e, p(t)), o = 0)
    })), e.on("touchcancel", (function() {
      e.touching = !1, e.grabbing = !1, o = 0
    })), e.on("mousedown", (function(t) {
      e.touching || (Tt.on("mousemove", m), e.grabbing = !0, u.call(d, e), t.preventDefault(), m(t))
    })), e.on("mousemove", (function(t) {
      e.touching || l.call(d, p(t), e)
    })), Tt.on("mouseup", (function(t) {
      e.touching || (Tt.off("mousemove", m), e.grabbing && (e.grabbing = !1, s.call(d, e, p(t)), o = 0))
    })), e
  }
  Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function(e) {
    var t = this;
    if(!document.documentElement.contains(this)) return null;
    do {
      if(t.matches(e)) return t;
      t = t.parentElement
    } while(null !== t);
    return null
  });
  var xt = new function() {
    function e() {
      this.getItem = this.removeItem = this.setItem = t
    }

    function n(t, n) {
      var r = function() {
        try {
          return window.localStorage || new e
        } catch (t) {
          return new e
        }
      }();
      return function() {
        try {
          return r[t].apply(r, arguments)
        } catch (e) {
          return n
        }
      }
    }
    this.removeItem = n("removeItem"), this.getItem = n("getItem", null), this.setItem = n("setItem")
  };

  function Lt(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
  }

  function Rt(e) {
    var t, n, r = Lt("svg");
    return r.setAttribute("viewBox", e.coords), e.name && r.setAttribute("class", e.name), e.title && r.setAttribute("title", e.title), e.title && r.setAttribute("aria-label", e.title), r.setAttribute("tabindex", "0"), r.setAttribute("focusable", "true"), r.appendChild((t = e.link, (n = Lt("use")).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t), n)), b(r)
  }
  var Mt = {
      coords: "-1 -2 40 30",
      name: "fp-fullscreen",
      link: "#fp-fs",
      translation_key: "core.fullscreen"
    },
    Ct = {
      coords: "-1 -2 40 30",
      name: "fp-fullscreen-exit",
      link: "#fp-exit",
      translation_key: "core.exit_fullscreen"
    },
    Pt = {
      coords: "-2 -2 50 50",
      name: "fp-play",
      link: "#fp-play",
      translation_key: "core.play"
    },
    It = {
      coords: Pt.coords,
      name: "fp-pause",
      link: "#fp-pause",
      translation_key: "core.pause"
    },
    Dt = {
      coords: Pt.coords,
      name: "fp-play fp-play-stroke",
      link: "#fp-play-stroke",
      translation_key: "core.play"
    },
    Ut = {
      coords: Pt.coords,
      name: "fp-pause fp-pause-stroke",
      link: "#fp-pause-stroke",
      translation_key: "core.pause"
    },
    Ft = {
      coords: Pt.coords,
      name: "fp-play fp-play-circle",
      link: "#fp-play-circle",
      translation_key: "core.play"
    },
    jt = Ut,
    qt = {
      coords: "-2 -2 36 58",
      link: "#fp-volume",
      translation_key: "core.mute"
    },
    zt = {
      coords: "-2 -2 50 50",
      link: "#fp-play",
      translation_key: "core.play",
      name: "fp-small-play"
    },
    Ht = {
      coords: "-2 -2 50 50",
      link: "#fp-pause",
      translation_key: "core.pause",
      name: "fp-small-pause"
    },
    Gt = Object.freeze({
      __proto__: null,
      ENTER_FULLSCREEN: Mt,
      EXIT_FULLSCREEN: Ct,
      PLAY_1: Pt,
      PAUSE_1: It,
      PLAY_2: Dt,
      PAUSE_2: Ut,
      PLAY_3: Ft,
      PAUSE_3: jt,
      VOLUME: qt,
      SMALL_PLAY: zt,
      SMALL_PAUSE: Ht,
      FACEBOOK: {
        coords: "-5 25 460 460",
        link: "#fp-facebook",
        name: "fp-facebook"
      },
      LINK: {
        coords: "0 0 512 512",
        link: "#fp-link",
        name: "fp-link"
      },
      SHARE: {
        coords: "0 0 448 512",
        link: "#fp-share",
        name: "fp-share"
      },
      EMBED: {
        coords: "0 0 512 512",
        link: "#fp-share",
        name: "fp-embed"
      },
      TWITTER: {
        coords: "0 0 512 512",
        link: "#fp-twitter",
        name: "fp-twitter"
      },
      AIRPLAY: {
        coords: "0 0 512 512",
        link: "#fp-airplay",
        name: "fp-airplay"
      },
      SKIP_NEXT: {
        coords: "0 0 41 42",
        link: "#fp-skip-next",
        translation_key: "core.skip-next",
        name: "fp-skip-next"
      },
      SKIP_PREV: {
        coords: "0 0 41 42",
        link: "#fp-skip-prev",
        translation_key: "core.skip-prev",
        name: "fp-skip-prev"
      },
      MUTE: {
        coords: "-22 -22 122 122",
        link: "#fp-mute",
        translation_key: "core.mute",
        name: "fp-mute"
      },
      UNMUTE: {
        coords: "-22 -22 122 122",
        link: "#fp-unmute",
        translation_key: "core.mute",
        name: "fp-unmute"
      },
      CLOSE: {
        coords: "19 0 80 80",
        link: "#fp-close",
        translation_key: "core.close",
        name: "fp-close"
      }
    }),
    Vt = Object.freeze({
      __proto__: null,
      NO_FULLSCREEN: 1,
      NO_VOLUME_CONTROL: 2,
      NO_MUTE: 4,
      LOGO_ON_RIGHT: 8,
      USE_DRAG_HANDLE: 16,
      USE_PLAY_2: 32,
      USE_PLAY_3: 64,
      USE_THIN_CONTROLBAR: 128,
      NO_TITLE: 256,
      NO_DESCRIPTION: 512,
      NO_CONTROLS: 1024,
      NO_DURATION: 2048,
      NO_HEADER: 4096,
      NO_TOUCH_ZONES: 16384
    }),
    Wt = "function" == typeof Audio && new Audio || {};
  Wt.volume = .1;

  function Bt(e, t, n) {
    if(n.opt("controls")) {
      var r = b.div("fp-volume"),
        o = Yt.call(n, r, Kt, 0, n.root),
        i = b.div("fp-volumebtn", Rt(qt));
      if(t.append(i), i && i.on(U, (function() {
          n.toggleMute()
        })), .1 == Wt.volume && t.append(r), r.attr("tabindex", "0").attr("role", "slider").attr("aria-valuemin", "0").attr("aria-valuemax", "1").attr("aria-label", n._t("core.volume", "volume")), e.muted_initially && xt.setItem("mute", 1 == e.muted_initially), n.on("volumechange", (function() {
          var e = 0 == n.volume || n.muted;
          if(n.setState("is-muted", e), xt.setItem("mute", e), i.attr("aria-label", e ? n._t("unmute", "unmute") : n._t("mute", "mute")), e) return o.adjust(0);
          o.grabbing || o.adjust(n.volume)
        })), "true" == xt.getItem("mute") && (n.muted = !0, n.setState("is-muted", n.muted)), e.muted_initially) return n.volume = 0, n.one("pause", (function() {
        n.volume = 1 * (xt.getItem("volume") || 1), n.play()
      })), o;
      var a = xt.getItem("volume");
      return a && !isNaN(a) && (n.volume = Number(a)), n.emit("volumechange"), o
    }
  }

  function Kt(e, t) {
    e > 0 && (this.muted = !1, xt.removeItem("mute")), xt.setItem("volume", this.volume = e / 100), t.adjust(this.volume)
  }

  function Yt(e, t, n, r) {
    var o = 10;
    return e.empty(), r.hasClass("is-small") && (o = 8), r.hasClass("is-tiny") && (o = 6), Nt(e, {
      onseek: t,
      ctx: this
    }), Qt(e, o), e
  }

  function Xt() {
    return b.i("fp-tick")
  }

  function Qt(e, t) {
    var n = Array.apply(null, Array(t)).map(Xt);
    return e.append(n), e.adjust = function(r) {
      e.attr("aria-valuenow", r);
      var o = (r *= 100) / 100,
        i = Math.round(o * t);
      n.slice(i, t).forEach(Xt.off), n.slice(0, i).forEach(Xt.on)
    }, e
  }

  function Jt(e, t, n) {
    n.toggleFullScreen = function(r, o) {
      n.ios_fullscreen_disabled || ("boolean" != typeof r && (r = !n.in_fullscreen), r != n.in_fullscreen && (n.in_fullscreen = r, n.emit(r ? "fullscreenenter" : "fullscreenexit"), n.emit("resize"), b.document.fullscreenEnabled && !e.fake_fullscreen && (r ? t.requestFullScreen() : b.document.exitFullScreen()), Zt() && (n.in_fullscreen ? function(e) {
        e.getAttribute("playsinline") && e.removeAttribute("playsinline");
        e.getAttribute("webkit-playsinline") && e.removeAttribute("webkit-playsinline");
        e.webkitEnterFullScreen()
      }(n) : function(e, t, n) {
        e.getAttribute("playsinline") || e.setAttribute("playsinline", "");
        e.getAttribute("webkit-playsinline") || e.setAttribute("webkit-playsinline", "");
        t || e.webkitExitFullScreen();
        e.togglePlay(!1), n.hasClass(C) || n.addClass(C)
      }(n, o, t))))
    }, Zt() && (n.ios_fullscreen_disabled = !0, n.one("beforeplay", (function() {
      n.ios_fullscreen_disabled = !1
    })), n.on("webkitendfullscreen", (function() {
      n.toggleFullScreen(!1, !0)
    }), !1)), n.on(["fullscreenexit", "fullscreenenter"], (function(e) {
      var t = "fullscreenenter" == e.type;
      n.in_fullscreen = t, n.setState("is-fullscreen", t)
    })), !1 !== e.dblclickable && t.on("dblclick", (function(e) {
      e.target == t.ui && n.toggleFullScreen()
    }))
  }

  function Zt() {
    return D().ios
  }

  function $t(e, t, n) {
    var r = b.div("fp-header"),
      o = b.div("fp-primary"),
      a = b.div("fp-duration"),
      u = function(e, t) {
        var n = b.div("fp-secondary").addClass("fp-togglable");
        Jt(e, t.root, t);
        var r = Rt(Mt).attr("role", "button").attr("aria-label", t._t("core.fullscreen")),
          o = Rt(Ct).attr("role", "button").attr("aria-label", t._t("core.fullscreen_exit"));
        return r.on(U, t.toggleFullScreen), o.on(U, t.toggleFullScreen), n.append([r, o]), n
      }(e, n),
      l = {
        logo: null
      };
    n.on(z, (function(e) {
      ! function(e, t) {
        if(!t) return e.empty();
        e.txt(s(t))
      }(a, i(e, "data.duration"));
      var t = l.logo,
        n = i(e, "data.logo");
      t != n && (l.logo = n, function(e, t, n) {
        if(t) {
          e.empty();
          var r = b.img({
            class: "fp-logo",
            src: t,
            alt: "Brand logo"
          });
          if(n) {
            var o = b.a({
              href: n
            });
            o.append(r), r = o
          }
          e.append(r)
        }
      }(o, n, i(e, "data.logo_href")))
    })), r.append([o, a, u]), t.append(r), t.reaper.put("header", r), t.reaper.put("header.secondary", u)
  }
  Bt.inject_bar = Yt, Bt.Tick = Xt, Xt.on = function(e) {
      e.addClass("fp-color")
    }, Xt.off = function(e) {
      e.removeClass("fp-color")
    }, Bt.extend_volume_slider = Qt,
    function() {
      var e = b.document;
      if(e) {
        e.on("webkitfullscreenchange mozfullscreenchange MSFullscreenChange msfullscreenchange", (function() {
          e.emit("fullscreenchange", e.fullscreenElement || e.webkitFullscreenElement || e.mozFullScreenElement || e.msFullscreenElement)
        }));
        var t = Element.prototype;
        t.requestFullScreen || ["webkit", "moz", "ms"].forEach((function(n) {
          var r = t[n + "RequestFullScreen"] || t.msRequestFullscreen,
            o = e[n + "CancelFullScreen"] || e.msExitFullscreen;
          r && (t.requestFullScreen = r, e.fullscreenEnabled = !0), o && (e.exitFullScreen = o)
        })), e.on("fullscreenchange", (function(e) {
          var t, n = !1 !== function() {
            try {
              if("boolean" == typeof document.fullscreen) return document.fullscreen;
              if("boolean" == typeof document.mozFullScreen) return document.mozFullScreen;
              if("boolean" == typeof document.webkitIsFullScreen) return document.webkitIsFullScreen;
              if("boolean" == typeof document.msFullscreenElement) return document.msFullscreenElement
            } catch (e) {
              return
            }
          }() && (e.data || e.target || !1);
          t = n, k.forEach((function(e) {
            if(!1 === t) return e.emit("fullscreenexit");
            e.root !== t && e.in_fullscreen && e.emit("fullscreenexit")
          }))
        }))
      }
    }();
  var en = [1, 2, 3];

  function tn(e, t, n) {
    var r = b.div("fp-middle"),
      o = b.div("fp-left-zone"),
      i = b.div("fp-middle-zone"),
      a = b.div("fp-right-zone"),
      u = [o, i, a];
    return function(e, t) {
        var n = t[0],
          r = t[1];
        e.on("seeked", (function() {
          t.forEach(rn)
        })), e.on("seek:queued", (function(e) {
          var o = e.data;
          if("number" == typeof o.offset) {
            var i = o.offset;
            if(0 == i) return t.forEach(rn);
            var a, u = i > 0 ? r : n;
            return rn(u == r ? n : r), a = i, void(u.querySelector(".fp-zone-seconds").innerText = Math.abs(a))
          }
        })), e.on("seek:cancel", (function() {
          t.forEach(rn)
        })), t.forEach((function(t) {
          var r = t == n ? -1 : 1,
            o = b.span("fp-zone-seconds"),
            i = b.span("fp-zone-sigil"),
            a = nn(Pt).cloneNode(!0);
          a.setAttribute("class", "fp-fast-forward"), i.append([a.cloneNode(!0), a.cloneNode(!0)]), t.append([o, i]), rn(t), t.on("touchend", (function(t) {
            isNaN(e.duration) || isNaN(e.currentTime) || 16384 & e.opts.ui || e.hasState("no-timeline") || !e.hasState("will-seek") && !e.hasState(C) || e.enqueueSeek(5 * r) && (t.stopPropagation(), t.preventDefault())
          }))
        }))
      }(n, [o, a]), u.forEach((function(e) {
        r.append(e)
      })), n.root.reaper.put("middle", r),
      function(e, t) {
        e.on([U, "dblclick"], (function(e) {
          if(!e.defaultPrevented) return e.preventDefault(), t.emit(e.type, e.data), !1
        })), t.on(U, (function(e) {
          setTimeout((function() {
            e.defaultPrevented || t.hasState(R) || t.togglePlay()
          }), 0)
        })), t.on("dblclick", (function(e) {
          setTimeout((function() {
            e.defaultPrevented || t.toggleFullScreen()
          }), 0)
        }))
      }(r, n),
      function(e) {
        for(var t = b.div("fp-wait"), n = 0; n < 4; n++) t.append(b("<b>"));
        e.append(t)
      }(i), e.mouseover_play && n.root.on(["mouseenter", "mouseleave"], (function(e) {
        n.togglePlay("mouseenter" == e.type)
      })), en.forEach((function(e) {
        i.append(b.div("fp-switch", [Gt["PLAY_" + e], Gt["PAUSE_" + e]].map(nn)).addClass("fp-play-" + e))
      })), t.append(r), r.attr("tabindex", 0), r.attr("role", "button"), r.attr("aria-label", n._t("core.play")), n.once(["playing", "seeked"], (function() {
        r.removeAttribute("tabindex"), r.removeAttribute("role"), r.removeAttribute("aria-label")
      })), r
  }

  function nn(e) {
    var t = Rt(e);
    return t.removeAttribute("tabindex"), t
  }

  function rn(e) {
    e.querySelector(".fp-zone-seconds").innerText = ""
  }
  var on = "function" == typeof requestAnimationFrame ? requestAnimationFrame : setTimeout;
  var an = b.div,
    un = b.span;

  function sn(e, t, n, r) {
    "function" == typeof n && (r = n, n = void 0), n = "string" == typeof n ? " " + n : "", r = r || an;
    var o = ln(t);
    return e.put(t, r(o + n))
  }

  function ln(e) {
    return "fp-" + e
  }

  function cn(e, t) {
    return t.translation_key ? r({
      title: e.translate(t.translation_key)
    }, t) : t
  }

  function fn(e, t) {
    var n = an("fp-controls fp-togglable"),
      r = J(n),
      o = sn(r, "timeline", ln("bar")),
      i = sn(r, "btns", ln("small-switch")),
      a = sn(r, "live-status"),
      u = sn(r, "live-indicator", ln("color")),
      l = sn(r, "live-text").txt("live"),
      c = sn(r, "buffer"),
      f = sn(r, "progress", ln("color")),
      d = sn(r, "hover"),
      p = sn(r, "timestamp"),
      m = sn(r, "duration"),
      v = sn(r, "elapsed", un).txt(s(0)),
      h = sn(r, "dragger", ln("color")),
      g = cn.bind(null, t);
    o.attr("role", "slider").attr("tabindex", "0").attr("aria-label", t.translate("timeline", "Timeline")), o.append([c, f, d, p]), n.append([i, a, v, o, m]), a.append([u, l]), J(n);
    var _ = Rt(g(Ht)).attr("role", "button"),
      y = Rt(g(zt)).attr("role", "button");
    return _.on("click", (function() {
      setTimeout((function() {
        y.focus && y.focus()
      }), 100)
    })), y.on("click", (function() {
      setTimeout((function() {
        _.focus && _.focus()
      }), 100)
    })), i.append([_, y]), f.append(h), e.append(n), n
  }

  function dn(e, t) {
    var n = e.innerWidth() / e.parentElement.innerWidth() * 100 / 2;
    e.css("left", t - n + "%").show()
  }
  var pn = Object.freeze({
    __proto__: null,
    tooltip_offset: dn,
    buffer_update: function(e, t, n) {
      if(!isNaN(t.duration)) {
        var r = t.buffered || {};
        r.length && n.buffer.css("width", Math.min(r.end(0) / t.duration * 100, 100) + "%")
      }
    },
    progress: function(e, t, n) {},
    loadedmetadata: function(e, t, n) {
      t.duration && n.duration.txt(s(t.duration))
    },
    timeupdate: function(e, t, n) {
      n.elapsed.txt(s(t.currentTime))
    },
    timeline_repaint: function(e, t, n) {
      n.progress.css("width", t.currentTime / t.duration * 100 + "%")
    },
    timeline_mouse_move: function(e, t, n) {
      n.hover.css("width", e.percent + "%")
    },
    timeline_grab_start: function(e, t, n) {
      n.timestamp.show()
    },
    timeline_grab_moved: function(e, t, n) {
      var r = t.duration * (e.percent / 100);
      if(t.disabled && r > t.currentTime) return !1;
      n.progress.css("width", e.percent + "%"), t.currentTime = r
    },
    timeline_grab_end: function(e, t, n) {},
    recover: function() {},
    timeline_mouse_enter: function(e, t, n) {
      n.timestamp.show()
    },
    timeline_mouse_leave: function(e, t, n) {
      n.hover.css("width", 0), n.timestamp.hide()
    },
    tooltip_update: function(e, t, n) {
      var r = e.percent,
        o = n.timestamp;
      !o || isNaN(r) || isNaN(t.duration) || (dn(n.timestamp, r), o.empty().append(b.span().txt(s(r / 100 * t.duration))))
    }
  });

  function mn(e) {
    if("object" != typeof e.opts) return {
      head: 0,
      tail: 0
    };
    if(e.opts.live_seekable_range) return e.opts.live_seekable_range;
    if(0 == e.seekable.length) return {
      head: 0,
      tail: 0
    };
    const t = e.opt("live_dvr_window", 0),
      n = e.seekable.end(e.seekable.length - 1);
    return {
      head: n,
      tail: Math.max(e.seekable.start(0), n - t)
    }
  }

  function vn(e) {
    return e.opt("live", !1) || e.duration >= Number.MAX_SAFE_INTEGER
  }

  function hn(e) {
    return isFinite(e.duration) ? e.duration : 0 == e.seekable.length ? 0 : e.seekable.end(0)
  }

  function gn(e) {
    const t = e.opts.live_now;
    return "number" == typeof t ? t : function(e) {
      return mn(e).head
    }(e) - function(e) {
      return e.opts.live_rebuffer_budget || .5
    }(e)
  }

  function _n(e, t) {
    if(t > 1 || t < 0) return console.warn("cannot calculate a percent outside of range(0..1)"), 0;
    if(isFinite(e.duration)) return hn(e) * t;
    var n = e.seekable.start(0);
    return n + t * (e.seekable.end(0) - n)
  }
  var yn = Object.freeze({
    __proto__: null,
    time_watched: function(e) {
      var t = Date.now();
      return Math.round((t - (e.stream_start || t)) / 1e3)
    },
    progress: function(e, t, n) {},
    timeupdate: function(e, t, n) {
      n.elapsed.txt(s(t.currentTime))
    },
    loadedmetadata: function(e, t, n) {},
    timeline_repaint: function(e, t, n) {},
    tooltip_update: function(e, t, n) {
      if(!t.seeking && t.seekable && 0 != t.seekable.length) {
        var r = _n(t, e.percent / 100);
        dn(n.timestamp, e.percent);
        var o = isFinite(t.duration) ? r : t.seekable.start(0) + r;
        n.timestamp.txt(s(o))
      }
    },
    seek_to_now: function(e, t, n) {
      try {
        if(!t.hasState("is-live-seeked")) return;
        t.dvr_offset = 0;
        var r = gn(t);
        t.currentTime = r, t.setState("is-live-seeked", !1), n.progress.css("width", 0)
      } catch (e) {
        console.warn("failed to seek to now: %j", e)
      }
    },
    buffer_update: function(e, t, n) {},
    timeline_grab_start: function(e, t, n) {},
    timeline_grab_moved: function(e, t, n) {},
    timeline_grab_end: function(e, t, n) {
      var r = e.percent / 100;
      t.currentTime = _n(t, r)
    },
    timeline_mouse_move: function(e, t, n) {
      n.hover.css("width", 100 - e.percent + "%")
    },
    timeline_mouse_leave: function(e, t, n) {
      n.hover.css("width", 0), n.timestamp.hide()
    }
  });

  function En(e) {
    if(!(this instanceof En)) return new En(e);
    var t = this.kinds = {
      vod: r({}, pn),
      live: r({}, yn)
    };
    this.route = function(n, r) {
      var o = (t[n] || {})[r.type];
      if(o) return o.apply(r.currentTarget, [r].concat(e, n))
    }
  }

  function bn(e, t, n) {
    if(n.opt("controls")) {
      var r = fn(t.ui, n.translator),
        o = t.reaper.put("timeline", r.timeline);
      t.reaper.put("controls", r);
      var a = En([n, r]);
      n.reaper.put("_behavior", a), [].forEach.call(r.btns.childNodes, (function(e) {
        e.on(U, n.togglePlay)
      })), r["live-status"].on(U, (function() {
        a.route("live", {
          type: "seek_to_now"
        })
      })), n.on(z, (function(t) {
        if(0 != n.reaper) {
          var o = vn(n) ? NaN : i(t, "data.duration");
          if(void 0 === i(t, "data.seekable") && (e.seekable = !0), isNaN(o) || o >= Number.MAX_SAFE_INTEGER) return r.duration.hide();
          r.duration.show(), r.duration.txt(s(o))
        }
      }));
      var u, l, c, f, d, p, m = (u = function() {
        0 != n.reaper && (a.route(wn(e), {
          type: "timeline_repaint"
        }), n.paused || o && o.grabbing || requestAnimationFrame(m))
      }, l = setTimeout, c = 15 || 60, f = Math.ceil(1e3 / c), d = Date.now(), p = null, function() {
        var e = Date.now() - d;
        null === p && (p = (l || on)((function() {
          p = null, u.apply(this, arguments), d = Date.now()
        }), Math.max(0, f - e)))
      });
      n.on("playing", m), n.paused || m(n, o), n.on("timeupdate", (function(t) {
        if(0 != n.reaper) {
          var r = wn(e);
          o.attr("aria-valuenow", n.currentTime), a.route(r, t), a.route(r, {
            type: "buffer_update"
          }), m(n, o), e.live && function(e) {
            return !("dvr" in e) || 1 == e.dvr
          }(e) && function(e, t) {
            if(0 == t) return !0;
            var n = mn(e);
            return n.head - n.tail >= t
          }(n, e.seconds_to_dvr || 0) && n.setOpts({
            dvr: n.seekable.length > 0
          })
        }
      })), n.on("progress", (function(t) {
        if(0 != n.reaper) {
          var r = wn(e);
          a.route(r, t), a.route(r, {
            type: "buffer_update"
          })
        }
      })), n.on("live", (function() {
        n.setState("is-live-seeked", !1), r.progress.css("width", "0%")
      })), n.on("dvr", (function() {
        var e = hn(n),
          t = n.seekable.end(0) - n.seekable.start(0),
          o = (e - n.currentTime) / t * 100,
          i = Math.round(o);
        n.setState("is-live-seeked", i > 0), r.progress.css("width", i + "%")
      })), n.on("seeking", (function() {
        if(vn(n) && 0 != n.seekable.length && 0 != n.played.length && 0 != hn(n)) {
          var e = gn(n),
            t = n.currentTime >= e ? "live" : "dvr";
          n.emit(t)
        }
      })), n.on(F, (function(t) {
        if(0 != n.reaper) {
          n.stream_start || n.setOpts({
            live: vn(n)
          });
          var r = wn(e);
          a.route(r, t), a.route(r, {
            type: "buffer_update"
          })
        }
      })), n.on("durationchange", (function(e) {
        if(0 != n.reaper) {
          var t = vn(n),
            r = t ? hn(n) : e.data || n.duration;
          0 == n.reaper || isNaN(r) || (n.setOpts({
            live: t,
            duration: r
          }), o.attr("aria-valuemax", r), o.attr("aria-valuemin", "0"))
        }
      })), n.on("recover", (function(t) {
        var n = wn(e);
        a.route(n, t)
      }));
      var v = !1;
      Nt(o, {
        onseek: kn(n, (function(t) {
          var n = wn(e);
          a.route(n, {
            type: "timeline_grab_moved",
            percent: t
          }), a.route(n, {
            type: "tooltip_update",
            percent: t
          })
        })),
        onstart: kn(n, (function() {
          n.setState(L, !0), a.route(wn(e), {
            type: "timeline_grab_start"
          })
        })),
        onend: function(t, r) {
          if(0 == e.seekable) return m();
          n.setState(L, !1), a.route(wn(e), {
            type: "timeline_grab_end",
            percent: r
          }), m()
        },
        ontouch: function() {
          n.paused || (v = !0, n.pause())
        },
        ontouchend: function() {
          v && (v = !1, n.play()), a.route(wn(e), {
            type: "timeline_mouse_leave"
          })
        },
        onmouse: kn(n, (function(t) {
          if(!o.grabbing) {
            var n = wn(e);
            a.route(n, {
              type: "timeline_mouse_move",
              percent: t
            }), a.route(n, {
              type: "tooltip_update",
              percent: t
            })
          }
        }))
      }).on("mouseleave", (function() {
        a.route(wn(e), {
          type: "timeline_mouse_leave"
        })
      }))
    }
  }

  function wn(e) {
    return e.live ? "live" : "vod"
  }

  function kn(e, t) {
    return function() {
      0 != i(e, "opts.seekable", !0) && (isNaN(e.duration) || t.apply(null, arguments))
    }
  }
  var Sn = {
    "-1": "an unknown error occurred",
    1: "media playback was aborted",
    2: "a network error occurred",
    3: "unable to decode media content",
    4: "unsupported media type",
    1001: "cannot load insecure content in a secure context",
    1002: "no internet connection detected"
  };

  function An() {
    return !0 === (navigator || {}).onLine
  }

  function On(e) {
    try {
      return "https:" === location.protocol && "http:" == function(e) {
        var t = document.createElement("a");
        return t.href = e, t
      }(e).protocol
    } catch (e) {
      return !1
    }
  }

  function Tn(e, n, r) {
    r.on("error", (function(e) {
      var o = e.data || r.error || {},
        i = e.code || o.code,
        a = "Error: %s\n" + (new Error).stack.split("\n").slice(2).join("\n");
      setTimeout((function() {
        if(!e.defaultPrevented && "AbortError" != o.name) {
          r.setState("is-error", !0), 8 === i || o.fatal || function(e) {
            var n = e.togglePlay,
              r = e.root;
            e.togglePlay = t, e.one("recover", (function() {
              e.togglePlay = n, e.setState("is-error", !1);
              var t = r.find(".fp-error");
              t && t.remove()
            }))
          }(r);
          var u = function(e, t, n) {
              switch(t) {
                case "http:0":
                  return function(e) {
                    return On(e.original_src) ? {
                      code: 1001
                    } : An() ? {
                      code: 2
                    } : An() ? {
                      code: -1
                    } : {
                      code: 1002
                    }
                  }(e);
                case 4:
                  return e.one("loadstart", (function() {
                    e.emit("recover")
                  })), n;
                default:
                  return n
              }
            }(r, i, o),
            s = function(e, t) {
              if(t.message) return t.message;
              if(t.stack) return t.stack;
              var n = t.code || -1;
              return e._t("media_errors." + n, Sn[n] || Sn[-1])
            }(r, u);
          return console.error(a, s),
            function(e, t, n, r) {
              if(e) {
                var o = b.div("fp-error").txt(t);
                if(r) {
                  var i = e.querySelector("#" + r);
                  i && e.removeChild(i), o.id = r
                }
                e.append(o), n && o.append(b.div("fp-error-details").txt(n))
              }
            }(n.ui, s, o.details)
        }
      }))
    }))
  }

  function Nn(e, t, n) {
    var r = document.createDocumentFragment(),
      o = b.div("fp-ui");
    J(o), r.appendChild(o), t.reaper.put("ui", o), ~t.className.indexOf("use-play-") || t.addClass("use-play-" + (e.play || 1)),
      function(e, t, n) {
        var r = t.append(b.div({
          class: "fp-footer"
        }));
        n.on(z, (function(e) {
          var t = e.data,
            n = t.description,
            o = t.title;
          if(r.empty(), "string" == typeof o && r.append(b.div({
              class: "fp-title"
            }).txt(t.title)), "string" == typeof n) {
            var i = n.split(" "),
              a = b.div({
                class: "fp-desc"
              }).txt(i.join(" "));
            for(r.append(a); i.length > 1 && a.scrollHeight > a.offsetHeight;) i.pop(), a.txt(i.join(" ") + "...")
          }
        }))
      }(0, t, n), $t(e, o, n), tn(e, o, n), bn(e, t, n), Bt(e, t.controls, n), Tn(0, t, n), t.appendChild(r), t.on(["mouseenter", "mouseleave"], (function(e) {
        n.setState("is-hovered", "mouseenter" == e.type), n.setState("is-accessibility", !1)
      })), n.on(z, (function(e) {
        var n = i(e, "data.ui", {});
        "number" == typeof n && (t.toggleClass("use-play-1", !(32 & n || 64 & n)), t.toggleClass("use-play-2", 32 & n), t.toggleClass("use-play-3", 64 & n), t.toggleClass("use-thin-controlbar", 128 & n), t.toggleClass("no-title", 256 & n), t.toggleClass("no-description", 512 & n), t.toggleClass("logo-on-right", 8 & n), t.toggleClass("use-drag-handle", 16 & n), t.toggleClass("no-controls", 1024 & n), t.toggleClass("no-duration", 2048 & n), t.toggleClass("no-header", 4096 & n), t.toggleClass("no-mute", 4 & n), t.toggleClass("no-volume", 2 & n), t.toggleClass("no-fullscreen", 1 & n), t.toggleClass("no-touch-zones", 16384 & n))
      }));
    var a = !1;
    o.on("mousemove", (function() {
      "number" == typeof a && clearTimeout(a), n.setState("is-hovered", !0), a = 0 == n.paused && setTimeout((function() {
        n.setState("is-hovered", !1)
      }), 2e3)
    }))
  }

  function xn(e, t) {
    var n = {
        token_id: e,
        factor: 1,
        rnd: Math.random().toString(36).substring(2)
      },
      r = new XMLHttpRequest,
      o = JSON.stringify(n),
      i = "undefined" != typeof flowplayer && flowplayer.METERING_URL ? flowplayer.METERING_URL : "https://pmi.flowplayer.com/in";
    r.open("POST", i, !0), r.timeout = 2500, r.send(o), r.addEventListener("load", t.bind(null, r))
  }

  function Ln(e) {
    if(!(this instanceof Ln)) return new Ln(e);
    this.dictionaries = e, this.translate = function(e, t) {
      return void 0 === t && (t = ""),
        function e(t, n, r, o) {
          return (o = o || 0) >= t.length ? r : i(t[o], n, e(t, n, r, o + 1))
        }(this.dictionaries, e, t)
    }
  }
  Nn.onumd = function(e) {
    e.create_svg = function(e, t, n) {
      return t && !document.querySelector(t) && n && (n.style.display = "none", document.body.appendChild(n)), Rt(e)
    }
  }, Ln.of = Ln;
  var Rn = {
      ads: {
        ad: "Ad",
        ads: "Ads",
        advertisement: "Advertisement"
      },
      audio: {
        button_txt: "Audio",
        menu_title: "Audio"
      },
      core: {
        exit_fullscreen: "Exit fullscreen",
        fullscreen: "Fullscreen",
        mute: "Mute",
        pause: "Pause",
        play: "Play",
        unmute: "Unmute",
        volume: "Volume"
      },
      ovp: {
        starting_in: "Countdown"
      },
      playlist: {
        cancel: "Cancel",
        up_next: "Up next"
      },
      qsel: {
        menu_title: "Quality"
      },
      share: {
        clipboard_failure: "Access to clipboard failed",
        clipboard_success: "The text is now on your clipboard",
        embed: "Embed",
        link: "Link",
        menu_title: "Share"
      },
      speed: {
        menu_title: "Speed"
      }
    },
    Mn = [].concat;
  var Cn = qe(window, (function() {}));
  Cn.onapi = function(e, t, n) {
    n.reaper.put("translator", new Ln(function(e, t) {
      var n = {};
      Cn[e.lang] && (n[e.lang] = Cn[e.lang]);
      (function() {
        try {
          return Mn.apply([], (navigator.languages || [navigator.language]).map((function(e) {
            return ~e.indexOf("-") ? [e, e.split("-")[0]] : [e]
          }))).map((function(e) {
            return e.toLowerCase()
          }))
        } catch (e) {
          return []
        }
      })().forEach((function(e) {
        Cn[e] && !n[e] && (n[e] = Cn[e])
      })), n.length || (n[t] = Cn[t]);
      return function(e) {
        var t = [];
        for(var n in e) e.hasOwnProperty(n) && t.push(e[n]);
        return t
      }(n)
    }(e, "en"))), n._t = function(e, t) {
      return n.translator.translate(e, t || "")
    }
  }, Cn.en = Rn;
  var Pn = Date.now(),
    In = {
      session_id: Math.random().toString(36).substring(2) + performance.now().toString(36)
    };
  class Dn {
    constructor() {
      this._summary = {}, this._session_id = In, this.start_time = Pn
    }
    increment(e, t) {
      if("string" == typeof e && "number" == typeof t) {
        var n = this._summary[e] || 0;
        this._summary[e] = n + t
      }
    }
    set(e, t) {
      "string" == typeof e && (this._summary[e] = t)
    }
    duration() {
      return Date.now() - this.start_time
    }
    summary(e) {
      return r("object" == typeof e ? e : {}, {
        event: "health_summary"
      }, this._summary, this._session_id, {
        duration: this.duration()
      })
    }
    sessionize(e) {
      return r(e, this._session_id)
    }
  }

  function Un(e, t) {
    return function(e, t) {
      return "function" == typeof navigator.sendBeacon && navigator.sendBeacon(e, t)
    }(e, JSON.stringify({
      events: t
    }))
  }
  class Fn {
    constructor(e) {
      this.middleware = e, this._pending = []
    }
    pending() {
      return this._pending
    }
    _run_middleware(e, t) {
      return e = r({}, e), this.middleware.forEach((function(n) {
        var o = n(t);
        if("object" == typeof o) return r(e, o);
        console.warn("KPI::middleware did not return an Object\nreturn: %o\n\nfn: %s", o, n)
      })), e
    }
    push(e, t) {
      e = this._run_middleware(e, t), this.push_finalized(e)
    }
    push_finalized(e) {
      this._pending.push(e), this.send()
    }
    send(e) {
      if(!(this._pending.length < 20) || e) {
        var t = this._pending.slice(0);
        this._pending.length = 0, Un("https://health.flowplayer.com/v1/health/events", t)
      }
    }
  }

  function jn() {
    return i(window, "navigator.connection.downlink")
  }

  function qn(e) {
    const t = e.hls;
    if(!t) return;
    const n = t.abrController._bwEstimator;
    return n ? .001 * n.getEstimate() : void 0
  }

  function zn(e) {
    const t = [qn, jn];
    for(; t.length;) {
      const n = t.shift(),
        r = "function" == typeof n && n(e);
      if("number" == typeof r) return {
        downlink_mbs: Number(r.toFixed(2))
      }
    }
    return {}
  }
  const Hn = document.createElement("a");

  function Gn(e) {
    var t = e.original_src;
    return "string" != typeof t ? {} : (Hn.href = t, "string" == typeof Hn.pathname ? {
      media_type: Hn.pathname.split(".").pop()
    } : {})
  }

  function Vn(e) {
    return {
      preload: e.opt("preload"),
      autoplay: e.opt("autoplay", e.autoplay)
    }
  }

  function Wn(e) {
    return {
      player_id: e.opt("metadata.player_id"),
      media_id: e.opt("metadata.media_id"),
      site_id: e.opt("metadata.site_id"),
      category_id: e.opt("metadata.category_id"),
      sitegroup_id: e.opt("metadata.sitegroup_id"),
      token: e.token
    }
  }

  function Bn() {
    return {
      timestamp: Date.now()
    }
  }

  function Kn() {
    return {
      ua: navigator.userAgent,
      version: "2.9.6",
      commit: "c21973731e50f047756ebba96e9d958593a2fa2e"
    }
  }
  var Yn = ["error", "rebuffer"],
    Xn = Yn.concat(["load", "loadstart", F, j, "error:fatal", "playing", "seeked", "quality:set", "pause", "ended", "seeking"]);
  let Qn = !1;

  function Jn(e, t, n) {
    e.push_finalized(r(t.summary({}), Vn(n), Wn(n), Bn(), Kn())), e.send(!0)
  }

  function Zn(e) {
    try {
      return !!new URL(e)
    } catch (e) {
      return !1
    }
  }
  var $n = qe(window, (function(e, t, n) {
    if(!n._health) {
      Qn || function(e) {
        Qn = !0, window.addEventListener("unload", (function() {
          e && "function" == typeof e && Array.isArray(e.instances) && e.instances.forEach(e => e.emit("unload"))
        }))
      }(this);
      var r = n._health = new Dn,
        o = n._kpis = new Fn([Gn, Vn, Wn, zn, Bn, Kn]);
      Yn.forEach(e => {
          r.set(e, 0)
        }),
        function(e) {
          e.on("waiting", (function(t) {
            e.seeking || e.networkState === e.NETWORK_LOADING && e.readyState !== e.HAVE_NOTHING && e.emit("rebuffer")
          }))
        }(n), n.on(q, (function() {
          o.send(), n._kpis = n._health = void 0
        })), n.on("health:summary:increment", (function(e) {
          for(var t in e.data) r.increment(t, e.data[t])
        })), n.on("health:summary:set", (function(e) {
          for(var t in e.data) r.set(t, e.data[t])
        })), n.on(Yn, (function(e) {
          setTimeout(() => {
            e.defaultPrevented || n.emit("health:summary:increment", {
              [e.type]: 1
            })
          })
        })), n.on(Xn, (function(e) {
          setTimeout(() => {
            e.defaultPrevented || n.emit("health:kpi:track", {
              event: e.type
            })
          }, 0)
        })), n.on("health:kpi:track", (function(e) {
          const t = r.sessionize(e.data);
          o.push(t, n)
        })), n.on("src", (function(e) {
          const t = e.data && e.data.src;
          "string" == typeof t && Zn(n.original_src) && Zn(t) && t != n.original_src && Jn(o, r, n)
        })), n.on("unload", (function() {
          Jn(o, r, n)
        }))
    }
  }));
  ! function(e) {
    if("undefined" == typeof document || ~Ce.indexOf(document.readyState)) return e();
    document.addEventListener("DOMContentLoaded", e)
  }((function() {
    ! function(e) {
      if("undefined" != typeof DOMParser) {
        var t = (new DOMParser).parseFromString(e, "image/svg+xml"),
          n = document.importNode(t.documentElement, !0);
        n && n.style && (n.style.display = "none", document.body.appendChild(n))
      }
    }("<svg id='fp-icons' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><defs><path id='FS' d='M1 9V1h12'/><path id='fp-play-button' d='M19.201 4.78l18.546 30.001a2.001 2.001 0 0 1-1.707 3.052H-1.046a2 2 0 0 1-1.701-3.052l18.545-30a2 2 0 0 1 3.403 0' transform='rotate(90 20 25.4)'/><g id='fp-pause-lines'><rect class='fp-rect' x='8.5' y='5' width='11' height='36'/><rect class='fp-rect' x='26.5' y='5' width='11' height='36'/></g><path id='fp-speaker' d='M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z'/></defs><g id='fp-play' class='fp-fill'><use xlink:href='#fp-play-button'></use></g><g id='fp-play-circle' class='fp-fill'><circle cx='22.9' cy='22.9' r='23.5' class='fp-thin-stroke' fill='none'/><use xlink:href='#fp-play-button' transform='translate(11.5, 9.8) scale(.57)'></use></g><g id='fp-play-stroke' fill='none' class='fp-thin-stroke'><use xlink:href='#fp-play-button'></use></g><g id='fp-pause' class='fp-fill'><use xlink:href='#fp-pause-lines'></use></g><g id='fp-pause-stroke' fill='none' class='fp-thin-stroke'><use xlink:href='#fp-pause-lines'></use></g><g id='fp-volume' class='fp-fill'><path class='fp-rect' d='M0 15h30v24H0z'/><path d='M1 27L31 0v54z'/></g><g id='fp-fs' fill='none' class='fp-thin-stroke'><use xlink:href='#FS'/><use xlink:href='#FS' transform='matrix(1 0 0 -1 0 26)'/><use xlink:href='#FS' transform='matrix(-1 0 0 1 36 0)'/><use xlink:href='#FS' transform='rotate(180 18 13)'/></g><g id='fp-exit' fill='none' class='fp-thin-stroke'><use xlink:href='#FS' transform='translate(22 17)'/><use xlink:href='#FS' transform='matrix(-1 0 0 1 13 17)'/><use xlink:href='#FS' transform='rotate(180 6.5 4.5)'/><use xlink:href='#FS' transform='matrix(1 0 0 -1 22 9)'/></g><g id='fp-facebook'><path fill='#4469B0' d='M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z'/></g><g id='fp-link'><path fill='currentColor' d='M301.148 394.702l-79.2 79.19c-50.778 50.799-133.037 50.824-183.84 0-50.799-50.778-50.824-133.037 0-183.84l79.19-79.2a132.833 132.833 0 0 1 3.532-3.403c7.55-7.005 19.795-2.004 20.208 8.286.193 4.807.598 9.607 1.216 14.384.481 3.717-.746 7.447-3.397 10.096-16.48 16.469-75.142 75.128-75.3 75.286-36.738 36.759-36.731 96.188 0 132.94 36.759 36.738 96.188 36.731 132.94 0l79.2-79.2.36-.36c36.301-36.672 36.14-96.07-.37-132.58-8.214-8.214-17.577-14.58-27.585-19.109-4.566-2.066-7.426-6.667-7.134-11.67a62.197 62.197 0 0 1 2.826-15.259c2.103-6.601 9.531-9.961 15.919-7.28 15.073 6.324 29.187 15.62 41.435 27.868 50.688 50.689 50.679 133.17 0 183.851zm-90.296-93.554c12.248 12.248 26.362 21.544 41.435 27.868 6.388 2.68 13.816-.68 15.919-7.28a62.197 62.197 0 0 0 2.826-15.259c.292-5.003-2.569-9.604-7.134-11.67-10.008-4.528-19.371-10.894-27.585-19.109-36.51-36.51-36.671-95.908-.37-132.58l.36-.36 79.2-79.2c36.752-36.731 96.181-36.738 132.94 0 36.731 36.752 36.738 96.181 0 132.94-.157.157-58.819 58.817-75.3 75.286-2.651 2.65-3.878 6.379-3.397 10.096a163.156 163.156 0 0 1 1.216 14.384c.413 10.291 12.659 15.291 20.208 8.286a131.324 131.324 0 0 0 3.532-3.403l79.19-79.2c50.824-50.803 50.799-133.062 0-183.84-50.802-50.824-133.062-50.799-183.84 0l-79.2 79.19c-50.679 50.682-50.688 133.163 0 183.851z'/></g><g id='fp-share' class='fp-fill'><path d='M448 416c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-12.965 2.576-25.327 7.235-36.61l-95.45-59.657C150.199 339.525 124.558 352 96 352c-53.019 0-96-42.981-96-96s42.981-96 96-96c28.558 0 54.199 12.475 71.784 32.267l95.45-59.657C258.576 121.327 256 108.965 256 96c0-53.019 42.981-96 96-96s96 42.981 96 96-42.981 96-96 96c-28.558 0-54.199-12.475-71.784-32.267l-95.451 59.656c9.661 23.396 9.641 49.87 0 73.22l95.451 59.656C297.801 332.475 323.442 320 352 320c53.019 0 96 42.981 96 96zM352 32c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64M96 192c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64m256 160c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64'/></g><g id='fp-twitter'><path fill='#29A3EF' d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'/></g><g id='fp-airplay'><path d='M116.364 477.091h279.272L256 337.455z'/><path d='M465.455 34.909H46.545C20.945 34.909 0 55.855 0 81.455v279.273c0 25.6 20.945 46.545 46.545 46.545h93.091v-46.545H46.545V81.455h418.909v279.273h-93.091v46.545h93.091c25.6 0 46.545-20.945 46.545-46.545V81.455c.001-25.6-20.944-46.546-46.544-46.546z'/></g><g id='fp-skip-next' fill='#fff' fill-rule='evenodd'><path d='M33.23 22.696L3.56 41.223A2 2 0 0 1 .5 39.527V2.473A2 2 0 0 1 3.56.776l29.67 18.527a2 2 0 0 1 0 3.393z'/><rect x='33' y='.5' width='7' height='41' rx='2'/></g><g id='fp-skip-prev'><use xlink:href='#fp-skip-next' transform='rotate(180 21 21)'></use></g><g id='fp-close' class='fp-float-player-icons'><path d='M 48.651772,50.269646 69.395223,25.971024'/><path d='M 69.395223,50.269646 48.651772,25.971024'/></g><g id='fp-unmute' class='fp-float-player-icons'><use xlink:href='#fp-speaker'></use><path fill='none' d='M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6'/></g><g id='fp-mute' class='fp-float-player-icons'><use xlink:href='#fp-speaker'></use><use xlink:href='#fp-close'></use></g></svg> ")
  }));
  var er = [$n, Cn, St, Nn, function(e, t, n) {
    [At, Ot].forEach((function(r) {
      r(e, t, n)
    }))
  }, function(e, t, n) {
    if(!Xe.from_token(e.token).is_granted(Xe.permissions.NO_METERING)) {
      var r = Ve.id(e.token);
      if(r) {
        var o = xn.bind(null, r, (function(e) {
          403 === e.status && n.emit("error:fatal", {
            reason: "token",
            details: "The token online validation failed"
          })
        }));
        n.one("playing", o)
      }
    }
  }];
  return Qe.extensions.unshift.apply(Qe.extensions, er), er.forEach((function(e) {
    "function" == typeof e.onumd && e.onumd(Qe)
  })), Qe.volume = Bt, Qe.storage = xt, Qe.i18n = Cn, Qe.ui = Vt, Qe
}));
