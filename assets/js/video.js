! function r(a, s, l) {
  function d(n, e) {
    if(!s[n]) {
      if(!a[n]) {
        var t = "function" == typeof require && require;
        if(!e && t) return t(n, !0);
        if(u) return u(n, !0);
        var o = new Error("Cannot find module '" + n + "'");
        throw o.code = "MODULE_NOT_FOUND", o
      }
      var i = s[n] = {
        exports: {}
      };
      a[n][0].call(i.exports, function(e) {
        var t = a[n][1][e];
        return d(t || e)
      }, i, i.exports, r, a, s, l)
    }
    return s[n].exports
  }
  for(var u = "function" == typeof require && require, e = 0; e < l.length; e++) d(l[e]);
  return d
}({
  1: [function(e, t, n) {}, {}],
  2: [function(i, r, e) {
    (function(e) {
      var t, n = void 0 !== e ? e : "undefined" != typeof window ? window : {},
        o = i(1);
      "undefined" != typeof document ? t = document : (t = n["__GLOBAL_DOCUMENT_CACHE@4"]) || (t = n["__GLOBAL_DOCUMENT_CACHE@4"] = o), r.exports = t
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {
    1: 1
  }],
  3: [function(e, n, t) {
    (function(e) {
      var t;
      t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, n.exports = t
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {}],
  4: [function(e, n, t) {
    ! function(e) {
      var t = setTimeout;

      function o() {}

      function r(e) {
        if("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
      }

      function i(n, o) {
        for(; 3 === n._state;) n = n._value;
        0 !== n._state ? (n._handled = !0, r._immediateFn(function() {
          var e = 1 === n._state ? o.onFulfilled : o.onRejected;
          if(null !== e) {
            var t;
            try {
              t = e(n._value)
            } catch (e) {
              return void s(o.promise, e)
            }
            a(o.promise, t)
          } else(1 === n._state ? a : s)(o.promise, n._value)
        })) : n._deferreds.push(o)
      }

      function a(t, e) {
        try {
          if(e === t) throw new TypeError("A promise cannot be resolved with itself.");
          if(e && ("object" == typeof e || "function" == typeof e)) {
            var n = e.then;
            if(e instanceof r) return t._state = 3, t._value = e, void l(t);
            if("function" == typeof n) return void d((o = n, i = e, function() {
              o.apply(i, arguments)
            }), t)
          }
          t._state = 1, t._value = e, l(t)
        } catch (e) {
          s(t, e)
        }
        var o, i
      }

      function s(e, t) {
        e._state = 2, e._value = t, l(e)
      }

      function l(e) {
        2 === e._state && 0 === e._deferreds.length && r._immediateFn(function() {
          e._handled || r._unhandledRejectionFn(e._value)
        });
        for(var t = 0, n = e._deferreds.length; t < n; t++) i(e, e._deferreds[t]);
        e._deferreds = null
      }

      function d(e, t) {
        var n = !1;
        try {
          e(function(e) {
            n || (n = !0, a(t, e))
          }, function(e) {
            n || (n = !0, s(t, e))
          })
        } catch (e) {
          if(n) return;
          n = !0, s(t, e)
        }
      }
      r.prototype.catch = function(e) {
        return this.then(null, e)
      }, r.prototype.then = function(e, t) {
        var n = new this.constructor(o);
        return i(this, new function(e, t, n) {
          this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }(e, t, n)), n
      }, r.all = function(e) {
        var s = Array.prototype.slice.call(e);
        return new r(function(o, i) {
          if(0 === s.length) return o([]);
          var r = s.length;

          function a(t, e) {
            try {
              if(e && ("object" == typeof e || "function" == typeof e)) {
                var n = e.then;
                if("function" == typeof n) return void n.call(e, function(e) {
                  a(t, e)
                }, i)
              }
              s[t] = e, 0 == --r && o(s)
            } catch (e) {
              i(e)
            }
          }
          for(var e = 0; e < s.length; e++) a(e, s[e])
        })
      }, r.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === r ? t : new r(function(e) {
          e(t)
        })
      }, r.reject = function(n) {
        return new r(function(e, t) {
          t(n)
        })
      }, r.race = function(i) {
        return new r(function(e, t) {
          for(var n = 0, o = i.length; n < o; n++) i[n].then(e, t)
        })
      }, r._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e)
      } || function(e) {
        t(e, 0)
      }, r._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
      }, r._setImmediateFn = function(e) {
        r._immediateFn = e
      }, r._setUnhandledRejectionFn = function(e) {
        r._unhandledRejectionFn = e
      }, void 0 !== n && n.exports ? n.exports = r : e.Promise || (e.Promise = r)
    }(this)
  }, {}],
  5: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      i = e(7),
      r = (o = i) && o.__esModule ? o : {
        default: o
      },
      s = e(15),
      l = e(27);
    var d = {
      lang: "en",
      en: s.EN,
      language: function() {
        for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if(null != t && t.length) {
          if("string" != typeof t[0]) throw new TypeError("Language code must be a string value");
          if(!/^[a-z]{2,3}((\-|_)[a-z]{2})?$/i.test(t[0])) throw new TypeError("Language code must have format 2-3 letters and. optionally, hyphen, underscore followed by 2 more letters");
          d.lang = t[0], void 0 === d[t[0]] ? (t[1] = null !== t[1] && void 0 !== t[1] && "object" === a(t[1]) ? t[1] : {}, d[t[0]] = (0, l.isObjectEmpty)(t[1]) ? s.EN : t[1]) : null !== t[1] && void 0 !== t[1] && "object" === a(t[1]) && (d[t[0]] = t[1])
        }
        return d.lang
      },
      t: function(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if("string" == typeof e && e.length) {
          var n = void 0,
            o = void 0,
            i = d.language(),
            r = function(e, t, n) {
              return "object" !== (void 0 === e ? "undefined" : a(e)) || "number" != typeof t || "number" != typeof n ? e : [function() {
                return arguments.length <= 1 ? void 0 : arguments[1]
              }, function() {
                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
              }, function() {
                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
              }, function() {
                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
              }, function() {
                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) || 11 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) || 12 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 < (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
              }, function() {
                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 0 < (arguments.length <= 0 ? void 0 : arguments[0]) % 100 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
              }, function() {
                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 10 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || 20 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100) ? arguments.length <= 2 ? void 0 : arguments[2] : [3]
              }, function() {
                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || 20 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
              }, function() {
                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) <= 4 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
              }, function() {
                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || 20 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
              }, function() {
                return (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 1 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 2 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 3 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 4 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 1 ? void 0 : arguments[1]
              }, function() {
                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 < (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) < 7 ? arguments.length <= 3 ? void 0 : arguments[3] : 6 < (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) < 11 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 5 ? void 0 : arguments[5]
              }, function() {
                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : 3 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 <= 10 ? arguments.length <= 4 ? void 0 : arguments[4] : 11 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100 ? arguments.length <= 5 ? void 0 : arguments[5] : arguments.length <= 6 ? void 0 : arguments[6]
              }, function() {
                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 < (arguments.length <= 0 ? void 0 : arguments[0]) % 100 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 11 ? arguments.length <= 2 ? void 0 : arguments[2] : 10 < (arguments.length <= 0 ? void 0 : arguments[0]) % 100 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
              }, function() {
                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 2 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
              }, function() {
                return 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
              }, function() {
                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || 20 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
              }, function() {
                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 8 !== (arguments.length <= 0 ? void 0 : arguments[0]) && 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
              }, function() {
                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
              }, function() {
                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 3 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
              }, function() {
                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
              }][n].apply(null, [t].concat(e))
            };
          return void 0 !== d[i] && (n = d[i][e], null !== t && "number" == typeof t && (o = d[i]["mejs.plural-form"], n = r.apply(null, [n, t, o]))), !n && d.en && (n = d.en[e], null !== t && "number" == typeof t && (o = d.en["mejs.plural-form"], n = r.apply(null, [n, t, o]))), n = n || e, null !== t && "number" == typeof t && (n = n.replace("%1", t)), (0, l.escapeHTML)(n)
        }
        return e
      }
    };
    r.default.i18n = d, "undefined" != typeof mejsL10n && r.default.i18n.language(mejsL10n.language, mejsL10n.strings), n.default = d
  }, {
    15: 15,
    27: 27,
    7: 7
  }],
  6: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      F = o(e(3)),
      j = o(e(2)),
      I = o(e(7)),
      M = e(27),
      O = e(28),
      D = e(8),
      R = e(25);

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var i = function e(t, n, o) {
      var c = this;
      ! function(e, t) {
        if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e);
      var f = this;
      o = Array.isArray(o) ? o : null, f.defaults = {
        renderers: [],
        fakeNodeName: "mediaelementwrapper",
        pluginPath: "build/",
        shimScriptAccess: "sameDomain"
      }, n = Object.assign(f.defaults, n), f.mediaElement = j.default.createElement(n.fakeNodeName);
      var i = t,
        r = !1;
      if("string" == typeof t ? f.mediaElement.originalNode = j.default.getElementById(t) : i = (f.mediaElement.originalNode = t).id, void 0 === f.mediaElement.originalNode || null === f.mediaElement.originalNode) return null;
      f.mediaElement.options = n, i = i || "mejs_" + Math.random().toString().slice(2), f.mediaElement.originalNode.setAttribute("id", i + "_from_mejs");
      var a = f.mediaElement.originalNode.tagName.toLowerCase(); - 1 < ["video", "audio"].indexOf(a) && !f.mediaElement.originalNode.getAttribute("preload") && f.mediaElement.originalNode.setAttribute("preload", "none"), f.mediaElement.originalNode.parentNode.insertBefore(f.mediaElement, f.mediaElement.originalNode), f.mediaElement.appendChild(f.mediaElement.originalNode);
      var s = function(t, e) {
          if("https:" === F.default.location.protocol && 0 === t.indexOf("http:") && R.IS_IOS && -1 < I.default.html5media.mediaTypes.indexOf(e)) {
            var n = new XMLHttpRequest;
            n.onreadystatechange = function() {
              if(4 === this.readyState && 200 === this.status) {
                var e = (F.default.URL || F.default.webkitURL).createObjectURL(this.response);
                return f.mediaElement.originalNode.setAttribute("src", e), e
              }
              return t
            }, n.open("GET", t), n.responseType = "blob", n.send()
          }
          return t
        },
        l = void 0;
      if(null !== o) l = o;
      else if(null !== f.mediaElement.originalNode) switch(l = [], f.mediaElement.originalNode.nodeName.toLowerCase()) {
        case "iframe":
          l.push({
            type: "",
            src: f.mediaElement.originalNode.getAttribute("src")
          });
          break;
        case "audio":
        case "video":
          var d = f.mediaElement.originalNode.children.length,
            u = f.mediaElement.originalNode.getAttribute("src");
          if(u) {
            var p = f.mediaElement.originalNode,
              m = (0, O.formatType)(u, p.getAttribute("type"));
            l.push({
              type: m,
              src: s(u, m)
            })
          }
          for(var h = 0; h < d; h++) {
            var v = f.mediaElement.originalNode.children[h];
            if("source" === v.tagName.toLowerCase()) {
              var g = v.getAttribute("src"),
                y = (0, O.formatType)(g, v.getAttribute("type"));
              l.push({
                type: y,
                src: s(g, y)
              })
            }
          }
      }
      f.mediaElement.id = i, f.mediaElement.renderers = {}, f.mediaElement.events = {}, f.mediaElement.promises = [], f.mediaElement.renderer = null, f.mediaElement.rendererName = null, f.mediaElement.changeRenderer = function(e, t) {
        var n = c,
          o = 2 < Object.keys(t[0]).length ? t[0] : t[0].src;
        if(void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && n.mediaElement.renderer.name === e) return n.mediaElement.renderer.pause(), n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(), n.mediaElement.renderer.show(), n.mediaElement.renderer.setSrc(o), !0;
        void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && (n.mediaElement.renderer.pause(), n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(), n.mediaElement.renderer.hide());
        var i = n.mediaElement.renderers[e],
          r = null;
        if(null != i) return i.show(), i.setSrc(o), n.mediaElement.renderer = i, n.mediaElement.rendererName = e, !0;
        for(var a = n.mediaElement.options.renderers.length ? n.mediaElement.options.renderers : D.renderer.order, s = 0, l = a.length; s < l; s++) {
          var d = a[s];
          if(d === e) {
            r = D.renderer.renderers[d];
            var u = Object.assign(r.options, n.mediaElement.options);
            return (i = r.create(n.mediaElement, u, t)).name = e, n.mediaElement.renderers[r.name] = i, n.mediaElement.renderer = i, n.mediaElement.rendererName = e, i.show(), !0
          }
        }
        return !1
      }, f.mediaElement.setSize = function(e, t) {
        void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && f.mediaElement.renderer.setSize(e, t)
      }, f.mediaElement.generateError = function(e, t) {
        e = e || "", t = Array.isArray(t) ? t : [];
        var n = (0, M.createEvent)("error", f.mediaElement);
        n.message = e, n.urls = t, f.mediaElement.dispatchEvent(n), r = !0
      };
      var E = I.default.html5media.properties,
        b = I.default.html5media.methods,
        S = function(t, e, n, o) {
          var i = t[e];
          Object.defineProperty(t, e, {
            get: function() {
              return n.apply(t, [i])
            },
            set: function(e) {
              return i = o.apply(t, [e])
            }
          })
        },
        x = function(e) {
          if("src" !== e) {
            var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1),
              n = function() {
                return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer["get" + t] ? f.mediaElement.renderer["get" + t]() : null
              },
              o = function(e) {
                void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer["set" + t] && f.mediaElement.renderer["set" + t](e)
              };
            S(f.mediaElement, e, n, o), f.mediaElement["get" + t] = n, f.mediaElement["set" + t] = o
          }
        },
        w = function() {
          return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer ? f.mediaElement.renderer.getSrc() : null
        },
        P = function(e) {
          var t = [];
          if("string" == typeof e) t.push({
            src: e,
            type: e ? (0, O.getTypeFromFile)(e) : ""
          });
          else if("object" === (void 0 === e ? "undefined" : L(e)) && void 0 !== e.src) {
            var n = (0, O.absolutizeUrl)(e.src),
              o = e.type,
              i = Object.assign(e, {
                src: n,
                type: "" !== o && null != o || !n ? o : (0, O.getTypeFromFile)(n)
              });
            t.push(i)
          } else if(Array.isArray(e))
            for(var r = 0, a = e.length; r < a; r++) {
              var s = (0, O.absolutizeUrl)(e[r].src),
                l = e[r].type,
                d = Object.assign(e[r], {
                  src: s,
                  type: "" !== l && null != l || !s ? l : (0, O.getTypeFromFile)(s)
                });
              t.push(d)
            }
          var u = D.renderer.select(t, f.mediaElement.options.renderers.length ? f.mediaElement.options.renderers : []),
            c = void 0;
          if(f.mediaElement.paused || null == f.mediaElement.src || "" === f.mediaElement.src || (f.mediaElement.pause(), c = (0, M.createEvent)("pause", f.mediaElement), f.mediaElement.dispatchEvent(c)), f.mediaElement.originalNode.src = t[0].src || "", null !== u || !t[0].src) return !(null == t[0].src || "" === t[0].src) ? f.mediaElement.changeRenderer(u.rendererName, t) : null;
          f.mediaElement.generateError("No renderer found", t)
        },
        T = function(e, t) {
          try {
            if("play" !== e || "native_dash" !== f.mediaElement.rendererName && "native_hls" !== f.mediaElement.rendererName && "vimeo_iframe" !== f.mediaElement.rendererName) f.mediaElement.renderer[e](t);
            else {
              var n = f.mediaElement.renderer[e](t);
              n && "function" == typeof n.then && n.catch(function() {
                f.mediaElement.paused && setTimeout(function() {
                  var e = f.mediaElement.renderer.play();
                  void 0 !== e && e.catch(function() {
                    f.mediaElement.renderer.paused || f.mediaElement.renderer.pause()
                  })
                }, 150)
              })
            }
          } catch (e) {
            f.mediaElement.generateError(e, l)
          }
        },
        C = function(o) {
          f.mediaElement[o] = function() {
            for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer[o] && (f.mediaElement.promises.length ? Promise.all(f.mediaElement.promises).then(function() {
              T(o, t)
            }).catch(function(e) {
              f.mediaElement.generateError(e, l)
            }) : T(o, t)), null
          }
        };
      S(f.mediaElement, "src", w, P), f.mediaElement.getSrc = w, f.mediaElement.setSrc = P;
      for(var k = 0, _ = E.length; k < _; k++) x(E[k]);
      for(var N = 0, A = b.length; N < A; N++) C(b[N]);
      return f.mediaElement.addEventListener = function(e, t) {
        f.mediaElement.events[e] = f.mediaElement.events[e] || [], f.mediaElement.events[e].push(t)
      }, f.mediaElement.removeEventListener = function(e, t) {
        if(!e) return f.mediaElement.events = {}, !0;
        var n = f.mediaElement.events[e];
        if(!n) return !0;
        if(!t) return f.mediaElement.events[e] = [], !0;
        for(var o = 0; o < n.length; o++)
          if(n[o] === t) return f.mediaElement.events[e].splice(o, 1), !0;
        return !1
      }, f.mediaElement.dispatchEvent = function(e) {
        var t = f.mediaElement.events[e.type];
        if(t)
          for(var n = 0; n < t.length; n++) t[n].apply(null, [e])
      }, f.mediaElement.destroy = function() {
        var e = f.mediaElement.originalNode.cloneNode(!0),
          t = f.mediaElement.parentElement;
        e.removeAttribute("id"), e.remove(), f.mediaElement.remove(), t.appendChild(e)
      }, l.length && (f.mediaElement.src = l), f.mediaElement.promises.length ? Promise.all(f.mediaElement.promises).then(function() {
        f.mediaElement.options.success && f.mediaElement.options.success(f.mediaElement, f.mediaElement.originalNode)
      }).catch(function() {
        r && f.mediaElement.options.error && f.mediaElement.options.error(f.mediaElement, f.mediaElement.originalNode)
      }) : (f.mediaElement.options.success && f.mediaElement.options.success(f.mediaElement, f.mediaElement.originalNode), r && f.mediaElement.options.error && f.mediaElement.options.error(f.mediaElement, f.mediaElement.originalNode)), f.mediaElement
    };
    F.default.MediaElement = i, I.default.MediaElement = i, n.default = i
  }, {
    2: 2,
    25: 25,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  7: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o, i = e(3);
    var r = {
      version: "4.2.16",
      html5media: {
        properties: ["volume", "src", "currentTime", "muted", "duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable", "currentSrc", "preload", "bufferedBytes", "bufferedTime", "initialTime", "startOffsetTime", "defaultPlaybackRate", "playbackRate", "played", "autoplay", "loop", "controls"],
        readOnlyProperties: ["duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable"],
        methods: ["load", "play", "pause", "canPlayType"],
        events: ["loadstart", "durationchange", "loadedmetadata", "loadeddata", "progress", "canplay", "canplaythrough", "suspend", "abort", "error", "emptied", "stalled", "play", "playing", "pause", "waiting", "seeking", "seeked", "timeupdate", "ended", "ratechange", "volumechange"],
        mediaTypes: ["audio/mp3", "audio/ogg", "audio/oga", "audio/wav", "audio/x-wav", "audio/wave", "audio/x-pn-wav", "audio/mpeg", "audio/mp4", "video/mp4", "video/webm", "video/ogg", "video/ogv"]
      }
    };
    ((o = i) && o.__esModule ? o : {
      default: o
    }).default.mejs = r, n.default = r
  }, {
    3: 3
  }],
  8: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.renderer = void 0;
    var o, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      r = function() {
        function o(e, t) {
          for(var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
          }
        }
        return function(e, t, n) {
          return t && o(e.prototype, t), n && o(e, n), e
        }
      }(),
      a = e(7),
      s = (o = a) && o.__esModule ? o : {
        default: o
      };
    var l = function() {
        function e() {
          ! function(e, t) {
            if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.renderers = {}, this.order = []
        }
        return r(e, [{
          key: "add",
          value: function(e) {
            if(void 0 === e.name) throw new TypeError("renderer must contain at least `name` property");
            this.renderers[e.name] = e, this.order.push(e.name)
          }
        }, {
          key: "select",
          value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
              n = t.length;
            if(t = t.length ? t : this.order, !n) {
              var o = [/^(html5|native)/i, /^flash/i, /iframe$/i],
                i = function(e) {
                  for(var t = 0, n = o.length; t < n; t++)
                    if(o[t].test(e)) return t;
                  return o.length
                };
              t.sort(function(e, t) {
                return i(e) - i(t)
              })
            }
            for(var r = 0, a = t.length; r < a; r++) {
              var s = t[r],
                l = this.renderers[s];
              if(null != l)
                for(var d = 0, u = e.length; d < u; d++)
                  if("function" == typeof l.canPlayType && "string" == typeof e[d].type && l.canPlayType(e[d].type)) return {
                    rendererName: l.name,
                    src: e[d].src
                  }
            }
            return null
          }
        }, {
          key: "order",
          set: function(e) {
            if(!Array.isArray(e)) throw new TypeError("order must be an array of strings.");
            this._order = e
          },
          get: function() {
            return this._order
          }
        }, {
          key: "renderers",
          set: function(e) {
            if(null !== e && "object" !== (void 0 === e ? "undefined" : i(e))) throw new TypeError("renderers must be an array of objects.");
            this._renderers = e
          },
          get: function() {
            return this._renderers
          }
        }]), e
      }(),
      d = n.renderer = new l;
    s.default.Renderers = d
  }, {
    7: 7
  }],
  9: [function(e, t, n) {
    "use strict";
    var f = a(e(3)),
      p = a(e(2)),
      i = a(e(5)),
      o = e(16),
      r = a(o),
      m = function(e) {
        {
          if(e && e.__esModule) return e;
          var t = {};
          if(null != e)
            for(var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t.default = e, t
        }
      }(e(25)),
      h = e(27),
      v = e(26),
      g = e(28);

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.assign(o.config, {
      usePluginFullScreen: !0,
      fullscreenText: null,
      useFakeFullscreen: !1
    }), Object.assign(r.default.prototype, {
      isFullScreen: !1,
      isNativeFullScreen: !1,
      isInIframe: !1,
      isPluginClickThroughCreated: !1,
      fullscreenMode: "",
      containerSizeTimeout: null,
      buildfullscreen: function(n) {
        if(n.isVideo) {
          n.isInIframe = f.default.location !== f.default.parent.location, n.detectFullscreenMode();
          var o = this,
            e = (0, h.isString)(o.options.fullscreenText) ? o.options.fullscreenText : i.default.t("mejs.fullscreen"),
            t = p.default.createElement("div");
          if(t.className = o.options.classPrefix + "button " + o.options.classPrefix + "fullscreen-button", t.innerHTML = '<button type="button" aria-controls="' + o.id + '" title="' + e + '" aria-label="' + e + '" tabindex="0"></button>', o.addControlElement(t, "fullscreen"), t.addEventListener("click", function() {
              m.HAS_TRUE_NATIVE_FULLSCREEN && m.IS_FULLSCREEN || n.isFullScreen ? n.exitFullScreen() : n.enterFullScreen()
            }), n.fullscreenBtn = t, o.options.keyActions.push({
              keys: [70],
              action: function(e, t, n, o) {
                o.ctrlKey || void 0 !== e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
              }
            }), o.exitFullscreenCallback = function(e) {
              var t = e.which || e.keyCode || 0;
              o.options.enableKeyboard && 27 === t && (m.HAS_TRUE_NATIVE_FULLSCREEN && m.IS_FULLSCREEN || o.isFullScreen) && n.exitFullScreen()
            }, o.globalBind("keydown", o.exitFullscreenCallback), o.normalHeight = 0, o.normalWidth = 0, m.HAS_TRUE_NATIVE_FULLSCREEN) {
            n.globalBind(m.FULLSCREEN_EVENT_NAME, function() {
              n.isFullScreen && (m.isFullScreen() ? (n.isNativeFullScreen = !0, n.setControlsSize()) : (n.isNativeFullScreen = !1, n.exitFullScreen()))
            })
          }
        }
      },
      cleanfullscreen: function(e) {
        e.exitFullScreen(), e.globalUnbind("keydown", e.exitFullscreenCallback)
      },
      detectFullscreenMode: function() {
        var e = null !== this.media.rendererName && /(native|html5)/i.test(this.media.rendererName),
          t = "";
        return m.HAS_TRUE_NATIVE_FULLSCREEN && e ? t = "native-native" : m.HAS_TRUE_NATIVE_FULLSCREEN && !e ? t = "plugin-native" : this.usePluginFullScreen && m.SUPPORT_POINTER_EVENTS && (t = "plugin-click"), this.fullscreenMode = t
      },
      enterFullScreen: function() {
        var o = this,
          e = null !== o.media.rendererName && /(html5|native)/i.test(o.media.rendererName),
          t = getComputedStyle(o.getElement(o.container));
        if(o.isVideo)
          if(!1 === o.options.useFakeFullscreen && m.IS_IOS && m.HAS_IOS_FULLSCREEN && "function" == typeof o.media.originalNode.webkitEnterFullscreen && o.media.originalNode.canPlayType((0, g.getTypeFromFile)(o.media.getSrc()))) o.media.originalNode.webkitEnterFullscreen();
          else {
            if((0, v.addClass)(p.default.documentElement, o.options.classPrefix + "fullscreen"), (0, v.addClass)(o.getElement(o.container), o.options.classPrefix + "container-fullscreen"), o.normalHeight = parseFloat(t.height), o.normalWidth = parseFloat(t.width), "native-native" !== o.fullscreenMode && "plugin-native" !== o.fullscreenMode || (m.requestFullScreen(o.getElement(o.container)), o.isInIframe && setTimeout(function e() {
                if(o.isNativeFullScreen) {
                  var t = f.default.innerWidth || p.default.documentElement.clientWidth || p.default.body.clientWidth,
                    n = screen.width;
                  .002 * n < Math.abs(n - t) ? o.exitFullScreen() : setTimeout(e, 500)
                }
              }, 1e3)), o.getElement(o.container).style.width = "100%", o.getElement(o.container).style.height = "100%", o.containerSizeTimeout = setTimeout(function() {
                o.getElement(o.container).style.width = "100%", o.getElement(o.container).style.height = "100%", o.setControlsSize()
              }, 500), e) o.node.style.width = "100%", o.node.style.height = "100%";
            else
              for(var n = o.getElement(o.container).querySelectorAll("embed, object, video"), i = n.length, r = 0; r < i; r++) n[r].style.width = "100%", n[r].style.height = "100%";
            o.options.setDimensions && "function" == typeof o.media.setSize && o.media.setSize(screen.width, screen.height);
            for(var a = o.getElement(o.layers).children, s = a.length, l = 0; l < s; l++) a[l].style.width = "100%", a[l].style.height = "100%";
            o.fullscreenBtn && ((0, v.removeClass)(o.fullscreenBtn, o.options.classPrefix + "fullscreen"), (0, v.addClass)(o.fullscreenBtn, o.options.classPrefix + "unfullscreen")), o.setControlsSize(), o.isFullScreen = !0;
            var d = Math.min(screen.width / o.width, screen.height / o.height),
              u = o.getElement(o.container).querySelector("." + o.options.classPrefix + "captions-text");
            u && (u.style.fontSize = 100 * d + "%", u.style.lineHeight = "normal", o.getElement(o.container).querySelector("." + o.options.classPrefix + "captions-position").style.bottom = (screen.height - o.normalHeight) / 2 - o.getElement(o.controls).offsetHeight / 2 + d + 15 + "px");
            var c = (0, h.createEvent)("enteredfullscreen", o.getElement(o.container));
            o.getElement(o.container).dispatchEvent(c)
          }
      },
      exitFullScreen: function() {
        var e = this,
          t = null !== e.media.rendererName && /(native|html5)/i.test(e.media.rendererName);
        if(e.isVideo) {
          if(clearTimeout(e.containerSizeTimeout), m.HAS_TRUE_NATIVE_FULLSCREEN && (m.IS_FULLSCREEN || e.isFullScreen) && m.cancelFullScreen(), (0, v.removeClass)(p.default.documentElement, e.options.classPrefix + "fullscreen"), (0, v.removeClass)(e.getElement(e.container), e.options.classPrefix + "container-fullscreen"), e.options.setDimensions) {
            if(e.getElement(e.container).style.width = e.normalWidth + "px", e.getElement(e.container).style.height = e.normalHeight + "px", t) e.node.style.width = e.normalWidth + "px", e.node.style.height = e.normalHeight + "px";
            else
              for(var n = e.getElement(e.container).querySelectorAll("embed, object, video"), o = n.length, i = 0; i < o; i++) n[i].style.width = e.normalWidth + "px", n[i].style.height = e.normalHeight + "px";
            "function" == typeof e.media.setSize && e.media.setSize(e.normalWidth, e.normalHeight);
            for(var r = e.getElement(e.layers).children, a = r.length, s = 0; s < a; s++) r[s].style.width = e.normalWidth + "px", r[s].style.height = e.normalHeight + "px"
          }
          e.fullscreenBtn && ((0, v.removeClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen"), (0, v.addClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen")), e.setControlsSize(), e.isFullScreen = !1;
          var l = e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-text");
          l && (l.style.fontSize = "", l.style.lineHeight = "", e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-position").style.bottom = "");
          var d = (0, h.createEvent)("exitedfullscreen", e.getElement(e.container));
          e.getElement(e.container).dispatchEvent(d)
        }
      }
    })
  }, {
    16: 16,
    2: 2,
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    5: 5
  }],
  10: [function(e, t, n) {
    "use strict";
    var c = r(e(2)),
      o = e(16),
      i = r(o),
      f = r(e(5)),
      p = e(27),
      m = e(26);

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.assign(o.config, {
      playText: null,
      pauseText: null
    }), Object.assign(i.default.prototype, {
      buildplaypause: function(e, t, n, o) {
        var i = this,
          r = i.options,
          a = (0, p.isString)(r.playText) ? r.playText : f.default.t("mejs.play"),
          s = (0, p.isString)(r.pauseText) ? r.pauseText : f.default.t("mejs.pause"),
          l = c.default.createElement("div");
        l.className = i.options.classPrefix + "button " + i.options.classPrefix + "playpause-button " + i.options.classPrefix + "play", l.innerHTML = '<button type="button" aria-controls="' + i.id + '" title="' + a + '" aria-label="' + s + '" tabindex="0"></button>', l.addEventListener("click", function() {
          i.paused ? i.play() : i.pause()
        });
        var d = l.querySelector("button");

        function u(e) {
          "play" === e ? ((0, m.removeClass)(l, i.options.classPrefix + "play"), (0, m.removeClass)(l, i.options.classPrefix + "replay"), (0, m.addClass)(l, i.options.classPrefix + "pause"), d.setAttribute("title", s), d.setAttribute("aria-label", s)) : ((0, m.removeClass)(l, i.options.classPrefix + "pause"), (0, m.removeClass)(l, i.options.classPrefix + "replay"), (0, m.addClass)(l, i.options.classPrefix + "play"), d.setAttribute("title", a), d.setAttribute("aria-label", a))
        }
        i.addControlElement(l, "playpause"), u("pse"), o.addEventListener("loadedmetadata", function() {
          -1 === o.rendererName.indexOf("flash") && u("pse")
        }), o.addEventListener("play", function() {
          u("play")
        }), o.addEventListener("playing", function() {
          u("play")
        }), o.addEventListener("pause", function() {
          u("pse")
        }), o.addEventListener("ended", function() {
          e.options.loop || ((0, m.removeClass)(l, i.options.classPrefix + "pause"), (0, m.removeClass)(l, i.options.classPrefix + "play"), (0, m.addClass)(l, i.options.classPrefix + "replay"), d.setAttribute("title", a), d.setAttribute("aria-label", a))
        })
      }
    })
  }, {
    16: 16,
    2: 2,
    26: 26,
    27: 27,
    5: 5
  }],
  11: [function(e, t, n) {
    "use strict";
    var p = r(e(2)),
      o = e(16),
      i = r(o),
      m = r(e(5)),
      y = e(25),
      E = e(30),
      b = e(26);

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.assign(o.config, {
      enableProgressTooltip: !0,
      useSmoothHover: !0,
      forceLive: !1
    }), Object.assign(i.default.prototype, {
      buildprogress: function(h, s, e, d) {
        var u = 0,
          v = !1,
          c = !1,
          g = this,
          t = h.options.autoRewind,
          n = h.options.enableProgressTooltip ? '<span class="' + g.options.classPrefix + 'time-float"><span class="' + g.options.classPrefix + 'time-float-current">00:00</span><span class="' + g.options.classPrefix + 'time-float-corner"></span></span>' : "",
          o = p.default.createElement("div");
        o.className = g.options.classPrefix + "time-rail", o.innerHTML = '<span class="' + g.options.classPrefix + "time-total " + g.options.classPrefix + 'time-slider"><span class="' + g.options.classPrefix + 'time-buffering"></span><span class="' + g.options.classPrefix + 'time-loaded"></span><span class="' + g.options.classPrefix + 'time-current"></span><span class="' + g.options.classPrefix + 'time-hovered no-hover"></span><span class="' + g.options.classPrefix + 'time-handle"><span class="' + g.options.classPrefix + 'time-handle-content"></span></span>' + n + "</span>", g.addControlElement(o, "progress"), g.options.keyActions.push({
          keys: [37, 227],
          action: function(e) {
            if(!isNaN(e.duration) && 0 < e.duration) {
              e.isVideo && (e.showControls(), e.startControlsTimer());
              var t = e.getElement(e.container).querySelector("." + g.options.classPrefix + "time-total");
              t && t.focus();
              var n = Math.max(e.currentTime - e.options.defaultSeekBackwardInterval(e), 0);
              e.paused || e.pause(), setTimeout(function() {
                e.setCurrentTime(n)
              }, 0), setTimeout(function() {
                e.play()
              }, 0)
            }
          }
        }, {
          keys: [39, 228],
          action: function(e) {
            if(!isNaN(e.duration) && 0 < e.duration) {
              e.isVideo && (e.showControls(), e.startControlsTimer());
              var t = e.getElement(e.container).querySelector("." + g.options.classPrefix + "time-total");
              t && t.focus();
              var n = Math.min(e.currentTime + e.options.defaultSeekForwardInterval(e), e.duration);
              e.paused || e.pause(), setTimeout(function() {
                e.setCurrentTime(n)
              }, 0), setTimeout(function() {
                e.play()
              }, 0)
            }
          }
        }), g.rail = s.querySelector("." + g.options.classPrefix + "time-rail"), g.total = s.querySelector("." + g.options.classPrefix + "time-total"), g.loaded = s.querySelector("." + g.options.classPrefix + "time-loaded"), g.current = s.querySelector("." + g.options.classPrefix + "time-current"), g.handle = s.querySelector("." + g.options.classPrefix + "time-handle"), g.timefloat = s.querySelector("." + g.options.classPrefix + "time-float"), g.timefloatcurrent = s.querySelector("." + g.options.classPrefix + "time-float-current"), g.slider = s.querySelector("." + g.options.classPrefix + "time-slider"), g.hovered = s.querySelector("." + g.options.classPrefix + "time-hovered"), g.buffer = s.querySelector("." + g.options.classPrefix + "time-buffering"), g.newTime = 0, g.forcedHandlePause = !1, g.setTransformStyle = function(e, t) {
          e.style.transform = t, e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t
        }, g.buffer.style.display = "none";
        var i = function(e) {
            var t = getComputedStyle(g.total),
              n = (0, b.offset)(g.total),
              o = g.total.offsetWidth,
              i = void 0 !== t.webkitTransform ? "webkitTransform" : void 0 !== t.mozTransform ? "mozTransform " : void 0 !== t.oTransform ? "oTransform" : void 0 !== t.msTransform ? "msTransform" : "transform",
              r = "WebKitCSSMatrix" in window ? "WebKitCSSMatrix" : "MSCSSMatrix" in window ? "MSCSSMatrix" : "CSSMatrix" in window ? "CSSMatrix" : void 0,
              a = 0,
              s = 0,
              l = 0,
              d = void 0;
            if(d = e.originalEvent && e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageX : e.changedTouches ? e.changedTouches[0].pageX : e.pageX, g.getDuration()) {
              if(d < n.left ? d = n.left : d > o + n.left && (d = o + n.left), a = (l = d - n.left) / o, g.newTime = a * g.getDuration(), v && null !== g.getCurrentTime() && g.newTime.toFixed(4) !== g.getCurrentTime().toFixed(4) && (g.setCurrentRailHandle(g.newTime), g.updateCurrent(g.newTime)), !y.IS_IOS && !y.IS_ANDROID) {
                if(l < 0 && (l = 0), g.options.useSmoothHover && null !== r && void 0 !== window[r]) {
                  var u = new window[r](getComputedStyle(g.handle)[i]).m41,
                    c = l / parseFloat(getComputedStyle(g.total).width) - u / parseFloat(getComputedStyle(g.total).width);
                  g.hovered.style.left = u + "px", g.setTransformStyle(g.hovered, "scaleX(" + c + ")"), g.hovered.setAttribute("pos", l), 0 <= c ? (0, b.removeClass)(g.hovered, "negative") : (0, b.addClass)(g.hovered, "negative")
                }
                if(g.timefloat) {
                  var f = g.timefloat.offsetWidth / 2,
                    p = mejs.Utils.offset(g.getElement(g.container)),
                    m = getComputedStyle(g.timefloat);
                  s = d - p.left < g.timefloat.offsetWidth ? f : d - p.left >= g.getElement(g.container).offsetWidth - f ? g.total.offsetWidth - f : l, (0, b.hasClass)(g.getElement(g.container), g.options.classPrefix + "long-video") && (s += parseFloat(m.marginLeft) / 2 + g.timefloat.offsetWidth / 2), g.timefloat.style.left = s + "px", g.timefloatcurrent.innerHTML = (0, E.secondsToTimeCode)(g.newTime, h.options.alwaysShowHours, h.options.showTimecodeFrameCount, h.options.framesPerSecond, h.options.secondsDecimalLength, h.options.timeFormat), g.timefloat.style.display = "block"
                }
              }
            } else y.IS_IOS || y.IS_ANDROID || !g.timefloat || (s = g.timefloat.offsetWidth + o >= g.getElement(g.container).offsetWidth ? g.timefloat.offsetWidth / 2 : 0, g.timefloat.style.left = s + "px", g.timefloat.style.left = s + "px", g.timefloat.style.display = "block")
          },
          f = function() {
            1e3 <= new Date - u && g.play()
          };
        g.slider.addEventListener("focus", function() {
          h.options.autoRewind = !1
        }), g.slider.addEventListener("blur", function() {
          h.options.autoRewind = t
        }), g.slider.addEventListener("keydown", function(e) {
          if(1e3 <= new Date - u && (c = g.paused), g.options.enableKeyboard && g.options.keyActions.length) {
            var t = e.which || e.keyCode || 0,
              n = g.getDuration(),
              o = h.options.defaultSeekForwardInterval(d),
              i = h.options.defaultSeekBackwardInterval(d),
              r = g.getCurrentTime(),
              a = g.getElement(g.container).querySelector("." + g.options.classPrefix + "volume-slider");
            if(38 === t || 40 === t) {
              a && (a.style.display = "block"), g.isVideo && (g.showControls(), g.startControlsTimer());
              var s = 38 === t ? Math.min(g.volume + .1, 1) : Math.max(g.volume - .1, 0),
                l = s <= 0;
              return g.setVolume(s), void g.setMuted(l)
            }
            switch(a && (a.style.display = "none"), t) {
              case 37:
                g.getDuration() !== 1 / 0 && (r -= i);
                break;
              case 39:
                g.getDuration() !== 1 / 0 && (r += o);
                break;
              case 36:
                r = 0;
                break;
              case 35:
                r = n;
                break;
              case 13:
              case 32:
                return void(y.IS_FIREFOX && (g.paused ? g.play() : g.pause()));
              default:
                return
            }
            r = r < 0 || isNaN(r) ? 0 : n <= r ? n : Math.floor(r), u = new Date, c || h.pause(), setTimeout(function() {
              g.setCurrentTime(r)
            }, 0), r < g.getDuration() && !c && setTimeout(f, 1100), h.showControls(), e.preventDefault(), e.stopPropagation()
          }
        });
        var r = ["mousedown", "touchstart"];
        g.slider.addEventListener("dragstart", function() {
          return !1
        });
        for(var a = 0, l = r.length; a < l; a++) g.slider.addEventListener(r[a], function(e) {
          if(g.forcedHandlePause = !1, g.getDuration() !== 1 / 0 && (1 === e.which || 0 === e.which)) {
            g.paused || (g.pause(), g.forcedHandlePause = !0), v = !0, i(e);
            for(var t = ["mouseup", "touchend"], n = 0, o = t.length; n < o; n++) g.getElement(g.container).addEventListener(t[n], function(e) {
              var t = e.target;
              (t === g.slider || t.closest("." + g.options.classPrefix + "time-slider")) && i(e)
            });
            g.globalBind("mouseup.dur touchend.dur", function() {
              v && null !== g.getCurrentTime() && g.newTime.toFixed(4) !== g.getCurrentTime().toFixed(4) && (g.setCurrentTime(g.newTime), g.setCurrentRailHandle(g.newTime), g.updateCurrent(g.newTime)), g.forcedHandlePause && (g.slider.focus(), g.play()), g.forcedHandlePause = !1, v = !1, g.timefloat && (g.timefloat.style.display = "none")
            })
          }
        }, !(!y.SUPPORT_PASSIVE_EVENT || "touchstart" !== r[a]) && {
          passive: !0
        });
        g.slider.addEventListener("mouseenter", function(e) {
          e.target === g.slider && g.getDuration() !== 1 / 0 && (g.getElement(g.container).addEventListener("mousemove", function(e) {
            var t = e.target;
            (t === g.slider || t.closest("." + g.options.classPrefix + "time-slider")) && i(e)
          }), !g.timefloat || y.IS_IOS || y.IS_ANDROID || (g.timefloat.style.display = "block"), g.hovered && !y.IS_IOS && !y.IS_ANDROID && g.options.useSmoothHover && (0, b.removeClass)(g.hovered, "no-hover"))
        }), g.slider.addEventListener("mouseleave", function() {
          g.getDuration() !== 1 / 0 && (v || (g.timefloat && (g.timefloat.style.display = "none"), g.hovered && g.options.useSmoothHover && (0, b.addClass)(g.hovered, "no-hover")))
        }), g.broadcastCallback = function(e) {
          var t, n, o, i, r = s.querySelector("." + g.options.classPrefix + "broadcast");
          if(g.options.forceLive || g.getDuration() === 1 / 0) {
            if(!r && g.options.forceLive) {
              var a = p.default.createElement("span");
              a.className = g.options.classPrefix + "broadcast", a.innerText = m.default.t("mejs.live-broadcast"), g.slider.style.display = "none", g.rail.appendChild(a)
            }
          } else r && (g.slider.style.display = "", r.remove()), h.setProgressRail(e), g.forcedHandlePause || h.setCurrentRail(e), t = g.getCurrentTime(), n = m.default.t("mejs.time-slider"), o = (0, E.secondsToTimeCode)(t, h.options.alwaysShowHours, h.options.showTimecodeFrameCount, h.options.framesPerSecond, h.options.secondsDecimalLength, h.options.timeFormat), i = g.getDuration(), g.slider.setAttribute("role", "slider"), g.slider.tabIndex = 0, d.paused ? (g.slider.setAttribute("aria-label", n), g.slider.setAttribute("aria-valuemin", 0), g.slider.setAttribute("aria-valuemax", isNaN(i) ? 0 : i), g.slider.setAttribute("aria-valuenow", t), g.slider.setAttribute("aria-valuetext", o)) : (g.slider.removeAttribute("aria-label"), g.slider.removeAttribute("aria-valuemin"), g.slider.removeAttribute("aria-valuemax"), g.slider.removeAttribute("aria-valuenow"), g.slider.removeAttribute("aria-valuetext"))
        }, d.addEventListener("progress", g.broadcastCallback), d.addEventListener("timeupdate", g.broadcastCallback), d.addEventListener("play", function() {
          g.buffer.style.display = "none"
        }), d.addEventListener("playing", function() {
          g.buffer.style.display = "none"
        }), d.addEventListener("seeking", function() {
          g.buffer.style.display = ""
        }), d.addEventListener("seeked", function() {
          g.buffer.style.display = "none"
        }), d.addEventListener("pause", function() {
          g.buffer.style.display = "none"
        }), d.addEventListener("waiting", function() {
          g.buffer.style.display = ""
        }), d.addEventListener("loadeddata", function() {
          g.buffer.style.display = ""
        }), d.addEventListener("canplay", function() {
          g.buffer.style.display = "none"
        }), d.addEventListener("error", function() {
          g.buffer.style.display = "none"
        }), g.getElement(g.container).addEventListener("controlsresize", function(e) {
          g.getDuration() !== 1 / 0 && (h.setProgressRail(e), g.forcedHandlePause || h.setCurrentRail(e))
        })
      },
      cleanprogress: function(e, t, n, o) {
        o.removeEventListener("progress", e.broadcastCallback), o.removeEventListener("timeupdate", e.broadcastCallback), e.rail && e.rail.remove()
      },
      setProgressRail: function(e) {
        var t = this,
          n = void 0 !== e ? e.detail.target || e.target : t.media,
          o = null;
        n && n.buffered && 0 < n.buffered.length && n.buffered.end && t.getDuration() ? o = n.buffered.end(n.buffered.length - 1) / t.getDuration() : n && void 0 !== n.bytesTotal && 0 < n.bytesTotal && void 0 !== n.bufferedBytes ? o = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && 0 !== e.total && (o = e.loaded / e.total), null !== o && (o = Math.min(1, Math.max(0, o)), t.loaded && t.setTransformStyle(t.loaded, "scaleX(" + o + ")"))
      },
      setCurrentRailHandle: function(e) {
        this.setCurrentRailMain(this, e)
      },
      setCurrentRail: function() {
        this.setCurrentRailMain(this)
      },
      setCurrentRailMain: function(e, t) {
        if(void 0 !== e.getCurrentTime() && e.getDuration()) {
          var n = void 0 === t ? e.getCurrentTime() : t;
          if(e.total && e.handle) {
            var o = parseFloat(getComputedStyle(e.total).width),
              i = Math.round(o * n / e.getDuration()),
              r = i - Math.round(e.handle.offsetWidth / 2);
            if(r = r < 0 ? 0 : r, e.setTransformStyle(e.current, "scaleX(" + i / o + ")"), e.setTransformStyle(e.handle, "translateX(" + r + "px)"), e.options.useSmoothHover && !(0, b.hasClass)(e.hovered, "no-hover")) {
              var a = parseInt(e.hovered.getAttribute("pos"), 10),
                s = (a = isNaN(a) ? 0 : a) / o - r / o;
              e.hovered.style.left = r + "px", e.setTransformStyle(e.hovered, "scaleX(" + s + ")"), 0 <= s ? (0, b.removeClass)(e.hovered, "negative") : (0, b.addClass)(e.hovered, "negative")
            }
          }
        }
      }
    })
  }, {
    16: 16,
    2: 2,
    25: 25,
    26: 26,
    30: 30,
    5: 5
  }],
  12: [function(e, t, n) {
    "use strict";
    var a = r(e(2)),
      o = e(16),
      i = r(o),
      s = e(30),
      l = e(26);

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.assign(o.config, {
      duration: 0,
      timeAndDurationSeparator: "<span> | </span>"
    }), Object.assign(i.default.prototype, {
      buildcurrent: function(e, t, n, o) {
        var i = this,
          r = a.default.createElement("div");
        r.className = i.options.classPrefix + "time", r.setAttribute("role", "timer"), r.setAttribute("aria-live", "off"), r.innerHTML = '<span class="' + i.options.classPrefix + 'currenttime">' + (0, s.secondsToTimeCode)(0, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat) + "</span>", i.addControlElement(r, "current"), e.updateCurrent(), i.updateTimeCallback = function() {
          i.controlsAreVisible && e.updateCurrent()
        }, o.addEventListener("timeupdate", i.updateTimeCallback)
      },
      cleancurrent: function(e, t, n, o) {
        o.removeEventListener("timeupdate", e.updateTimeCallback)
      },
      buildduration: function(e, t, n, o) {
        var i = this;
        if(t.lastChild.querySelector("." + i.options.classPrefix + "currenttime")) t.querySelector("." + i.options.classPrefix + "time").innerHTML += i.options.timeAndDurationSeparator + '<span class="' + i.options.classPrefix + 'duration">' + (0, s.secondsToTimeCode)(i.options.duration, i.options.alwaysShowHours, i.options.showTimecodeFrameCount, i.options.framesPerSecond, i.options.secondsDecimalLength, i.options.timeFormat) + "</span>";
        else {
          t.querySelector("." + i.options.classPrefix + "currenttime") && (0, l.addClass)(t.querySelector("." + i.options.classPrefix + "currenttime").parentNode, i.options.classPrefix + "currenttime-container");
          var r = a.default.createElement("div");
          r.className = i.options.classPrefix + "time " + i.options.classPrefix + "duration-container", r.innerHTML = '<span class="' + i.options.classPrefix + 'duration">' + (0, s.secondsToTimeCode)(i.options.duration, i.options.alwaysShowHours, i.options.showTimecodeFrameCount, i.options.framesPerSecond, i.options.secondsDecimalLength, i.options.timeFormat) + "</span>", i.addControlElement(r, "duration")
        }
        i.updateDurationCallback = function() {
          i.controlsAreVisible && e.updateDuration()
        }, o.addEventListener("timeupdate", i.updateDurationCallback)
      },
      cleanduration: function(e, t, n, o) {
        o.removeEventListener("timeupdate", e.updateDurationCallback)
      },
      updateCurrent: function() {
        var e = this,
          t = e.getCurrentTime();
        isNaN(t) && (t = 0);
        var n = (0, s.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat);
        5 < n.length ? (0, l.addClass)(e.getElement(e.container), e.options.classPrefix + "long-video") : (0, l.removeClass)(e.getElement(e.container), e.options.classPrefix + "long-video"), e.getElement(e.controls).querySelector("." + e.options.classPrefix + "currenttime") && (e.getElement(e.controls).querySelector("." + e.options.classPrefix + "currenttime").innerText = n)
      },
      updateDuration: function() {
        var e = this,
          t = e.getDuration();
        void 0 !== e.media && (isNaN(t) || t === 1 / 0 || t < 0) && (e.media.duration = e.options.duration = t = 0), 0 < e.options.duration && (t = e.options.duration);
        var n = (0, s.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat);
        5 < n.length ? (0, l.addClass)(e.getElement(e.container), e.options.classPrefix + "long-video") : (0, l.removeClass)(e.getElement(e.container), e.options.classPrefix + "long-video"), e.getElement(e.controls).querySelector("." + e.options.classPrefix + "duration") && 0 < t && (e.getElement(e.controls).querySelector("." + e.options.classPrefix + "duration").innerHTML = n)
      }
    })
  }, {
    16: 16,
    2: 2,
    26: 26,
    30: 30
  }],
  13: [function(e, t, n) {
    "use strict";
    var L = r(e(2)),
      d = r(e(7)),
      F = r(e(5)),
      o = e(16),
      i = r(o),
      m = e(30),
      j = e(27),
      I = e(26);

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.assign(o.config, {
      startLanguage: "",
      tracksText: null,
      chaptersText: null,
      tracksAriaLive: !1,
      hideCaptionsButtonWhenEmpty: !0,
      toggleCaptionsButtonWhenOnlyOne: !1,
      slidesSelector: ""
    }), Object.assign(i.default.prototype, {
      hasChapters: !1,
      buildtracks: function(o, e, t, n) {
        if(this.findTracks(), o.tracks.length || o.trackFiles && 0 !== !o.trackFiles.length) {
          var i = this,
            r = i.options.tracksAriaLive ? ' role="log" aria-live="assertive" aria-atomic="false"' : "",
            a = (0, j.isString)(i.options.tracksText) ? i.options.tracksText : F.default.t("mejs.captions-subtitles"),
            s = (0, j.isString)(i.options.chaptersText) ? i.options.chaptersText : F.default.t("mejs.captions-chapters"),
            l = null === o.trackFiles ? o.tracks.length : o.trackFiles.length;
          if(i.domNode.textTracks)
            for(var d = i.domNode.textTracks.length - 1; 0 <= d; d--) i.domNode.textTracks[d].mode = "hidden";
          i.cleartracks(o), o.captions = L.default.createElement("div"), o.captions.className = i.options.classPrefix + "captions-layer " + i.options.classPrefix + "layer", o.captions.innerHTML = '<div class="' + i.options.classPrefix + "captions-position " + i.options.classPrefix + 'captions-position-hover"' + r + '><span class="' + i.options.classPrefix + 'captions-text"></span></div>', o.captions.style.display = "none", t.insertBefore(o.captions, t.firstChild), o.captionsText = o.captions.querySelector("." + i.options.classPrefix + "captions-text"), o.captionsButton = L.default.createElement("div"), o.captionsButton.className = i.options.classPrefix + "button " + i.options.classPrefix + "captions-button", o.captionsButton.innerHTML = '<button type="button" aria-controls="' + i.id + '" title="' + a + '" aria-label="' + a + '" tabindex="0"></button><div class="' + i.options.classPrefix + "captions-selector " + i.options.classPrefix + 'offscreen"><ul class="' + i.options.classPrefix + 'captions-selector-list"><li class="' + i.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + i.options.classPrefix + 'captions-selector-input" name="' + o.id + '_captions" id="' + o.id + '_captions_none" value="none" checked disabled><label class="' + i.options.classPrefix + "captions-selector-label " + i.options.classPrefix + 'captions-selected" for="' + o.id + '_captions_none">' + F.default.t("mejs.none") + "</label></li></ul></div>", i.addControlElement(o.captionsButton, "tracks"), o.captionsButton.querySelector("." + i.options.classPrefix + "captions-selector-input").disabled = !1, o.chaptersButton = L.default.createElement("div"), o.chaptersButton.className = i.options.classPrefix + "button " + i.options.classPrefix + "chapters-button", o.chaptersButton.innerHTML = '<button type="button" aria-controls="' + i.id + '" title="' + s + '" aria-label="' + s + '" tabindex="0"></button><div class="' + i.options.classPrefix + "chapters-selector " + i.options.classPrefix + 'offscreen"><ul class="' + i.options.classPrefix + 'chapters-selector-list"></ul></div>';
          for(var u = 0, c = 0; c < l; c++) {
            var f = o.tracks[c].kind;
            o.tracks[c].src.trim() && ("subtitles" === f || "captions" === f ? u++ : "chapters" !== f || e.querySelector("." + i.options.classPrefix + "chapter-selector") || o.captionsButton.parentNode.insertBefore(o.chaptersButton, o.captionsButton))
          }
          o.trackToLoad = -1, o.selectedTrack = null, o.isLoadingTrack = !1;
          for(var p = 0; p < l; p++) {
            var m = o.tracks[p].kind;
            !o.tracks[p].src.trim() || "subtitles" !== m && "captions" !== m || o.addTrackButton(o.tracks[p].trackId, o.tracks[p].srclang, o.tracks[p].label)
          }
          o.loadNextTrack();
          var h = ["mouseenter", "focusin"],
            v = ["mouseleave", "focusout"];
          if(i.options.toggleCaptionsButtonWhenOnlyOne && 1 === u) o.captionsButton.addEventListener("click", function(e) {
            var t = "none";
            null === o.selectedTrack && (t = o.tracks[0].trackId);
            var n = e.keyCode || e.which;
            o.setTrack(t, void 0 !== n)
          });
          else {
            for(var g = o.captionsButton.querySelectorAll("." + i.options.classPrefix + "captions-selector-label"), y = o.captionsButton.querySelectorAll("input[type=radio]"), E = 0, b = h.length; E < b; E++) o.captionsButton.addEventListener(h[E], function() {
              (0, I.removeClass)(this.querySelector("." + i.options.classPrefix + "captions-selector"), i.options.classPrefix + "offscreen")
            });
            for(var S = 0, x = v.length; S < x; S++) o.captionsButton.addEventListener(v[S], function() {
              (0, I.addClass)(this.querySelector("." + i.options.classPrefix + "captions-selector"), i.options.classPrefix + "offscreen")
            });
            for(var w = 0, P = y.length; w < P; w++) y[w].addEventListener("click", function(e) {
              var t = e.keyCode || e.which;
              o.setTrack(this.value, void 0 !== t)
            });
            for(var T = 0, C = g.length; T < C; T++) g[T].addEventListener("click", function(e) {
              var t = (0, I.siblings)(this, function(e) {
                  return "INPUT" === e.tagName
                })[0],
                n = (0, j.createEvent)("click", t);
              t.dispatchEvent(n), e.preventDefault()
            });
            o.captionsButton.addEventListener("keydown", function(e) {
              e.stopPropagation()
            })
          }
          for(var k = 0, _ = h.length; k < _; k++) o.chaptersButton.addEventListener(h[k], function() {
            this.querySelector("." + i.options.classPrefix + "chapters-selector-list").children.length && (0, I.removeClass)(this.querySelector("." + i.options.classPrefix + "chapters-selector"), i.options.classPrefix + "offscreen")
          });
          for(var N = 0, A = v.length; N < A; N++) o.chaptersButton.addEventListener(v[N], function() {
            (0, I.addClass)(this.querySelector("." + i.options.classPrefix + "chapters-selector"), i.options.classPrefix + "offscreen")
          });
          o.chaptersButton.addEventListener("keydown", function(e) {
            e.stopPropagation()
          }), o.options.alwaysShowControls ? (0, I.addClass)(o.getElement(o.container).querySelector("." + i.options.classPrefix + "captions-position"), i.options.classPrefix + "captions-position-hover") : (o.getElement(o.container).addEventListener("controlsshown", function() {
            (0, I.addClass)(o.getElement(o.container).querySelector("." + i.options.classPrefix + "captions-position"), i.options.classPrefix + "captions-position-hover")
          }), o.getElement(o.container).addEventListener("controlshidden", function() {
            n.paused || (0, I.removeClass)(o.getElement(o.container).querySelector("." + i.options.classPrefix + "captions-position"), i.options.classPrefix + "captions-position-hover")
          })), n.addEventListener("timeupdate", function() {
            o.displayCaptions()
          }), "" !== o.options.slidesSelector && (o.slidesContainer = L.default.querySelectorAll(o.options.slidesSelector), n.addEventListener("timeupdate", function() {
            o.displaySlides()
          }))
        }
      },
      cleartracks: function(e) {
        e && (e.captions && e.captions.remove(), e.chapters && e.chapters.remove(), e.captionsText && e.captionsText.remove(), e.captionsButton && e.captionsButton.remove(), e.chaptersButton && e.chaptersButton.remove())
      },
      rebuildtracks: function() {
        var e = this;
        e.findTracks(), e.buildtracks(e, e.getElement(e.controls), e.getElement(e.layers), e.media)
      },
      findTracks: function() {
        var e = this,
          t = null === e.trackFiles ? e.node.querySelectorAll("track") : e.trackFiles,
          n = t.length;
        e.tracks = [];
        for(var o = 0; o < n; o++) {
          var i = t[o],
            r = i.getAttribute("srclang").toLowerCase() || "",
            a = e.id + "_track_" + o + "_" + i.getAttribute("kind") + "_" + r;
          e.tracks.push({
            trackId: a,
            srclang: r,
            src: i.getAttribute("src"),
            kind: i.getAttribute("kind"),
            label: i.getAttribute("label") || "",
            entries: [],
            isLoaded: !1
          })
        }
      },
      setTrack: function(e, t) {
        for(var n = this, o = n.captionsButton.querySelectorAll('input[type="radio"]'), i = n.captionsButton.querySelectorAll("." + n.options.classPrefix + "captions-selected"), r = n.captionsButton.querySelector('input[value="' + e + '"]'), a = 0, s = o.length; a < s; a++) o[a].checked = !1;
        for(var l = 0, d = i.length; l < d; l++)(0, I.removeClass)(i[l], n.options.classPrefix + "captions-selected");
        r.checked = !0;
        for(var u = (0, I.siblings)(r, function(e) {
            return (0, I.hasClass)(e, n.options.classPrefix + "captions-selector-label")
          }), c = 0, f = u.length; c < f; c++)(0, I.addClass)(u[c], n.options.classPrefix + "captions-selected");
        if("none" === e) n.selectedTrack = null, (0, I.removeClass)(n.captionsButton, n.options.classPrefix + "captions-enabled");
        else
          for(var p = 0, m = n.tracks.length; p < m; p++) {
            var h = n.tracks[p];
            if(h.trackId === e) {
              null === n.selectedTrack && (0, I.addClass)(n.captionsButton, n.options.classPrefix + "captions-enabled"), n.selectedTrack = h, n.captions.setAttribute("lang", n.selectedTrack.srclang), n.displayCaptions();
              break
            }
          }
        var v = (0, j.createEvent)("captionschange", n.media);
        v.detail.caption = n.selectedTrack, n.media.dispatchEvent(v), t || setTimeout(function() {
          n.getElement(n.container).focus()
        }, 500)
      },
      loadNextTrack: function() {
        var e = this;
        e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks())
      },
      loadTrack: function(e) {
        var t = this,
          n = t.tracks[e];
        void 0 === n || void 0 === n.src && "" === n.src || (0, I.ajax)(n.src, "text", function(e) {
          n.entries = "string" == typeof e && /<tt\s+xml/gi.exec(e) ? d.default.TrackFormatParser.dfxp.parse(e) : d.default.TrackFormatParser.webvtt.parse(e), n.isLoaded = !0, t.enableTrackButton(n), t.loadNextTrack(), "slides" === n.kind ? t.setupSlides(n) : "chapters" !== n.kind || t.hasChapters || (t.drawChapters(n), t.hasChapters = !0)
        }, function() {
          t.removeTrackButton(n.trackId), t.loadNextTrack()
        })
      },
      enableTrackButton: function(e) {
        var t = this,
          n = e.srclang,
          o = L.default.getElementById("" + e.trackId);
        if(o) {
          var i = e.label;
          "" === i && (i = F.default.t(d.default.language.codes[n]) || n), o.disabled = !1;
          for(var r = (0, I.siblings)(o, function(e) {
              return (0, I.hasClass)(e, t.options.classPrefix + "captions-selector-label")
            }), a = 0, s = r.length; a < s; a++) r[a].innerHTML = i;
          if(t.options.startLanguage === n) {
            o.checked = !0;
            var l = (0, j.createEvent)("click", o);
            o.dispatchEvent(l)
          }
        }
      },
      removeTrackButton: function(e) {
        var t = L.default.getElementById("" + e);
        if(t) {
          var n = t.closest("li");
          n && n.remove()
        }
      },
      addTrackButton: function(e, t, n) {
        var o = this;
        "" === n && (n = F.default.t(d.default.language.codes[t]) || t), o.captionsButton.querySelector("ul").innerHTML += '<li class="' + o.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + o.options.classPrefix + 'captions-selector-input" name="' + o.id + '_captions" id="' + e + '" value="' + e + '" disabled><label class="' + o.options.classPrefix + 'captions-selector-label"for="' + e + '">' + n + " (loading)</label></li>"
      },
      checkForTracks: function() {
        var e = this,
          t = !1;
        if(e.options.hideCaptionsButtonWhenEmpty) {
          for(var n = 0, o = e.tracks.length; n < o; n++) {
            var i = e.tracks[n].kind;
            if(("subtitles" === i || "captions" === i) && e.tracks[n].isLoaded) {
              t = !0;
              break
            }
          }
          e.captionsButton.style.display = t ? "" : "none", e.setControlsSize()
        }
      },
      displayCaptions: function() {
        if(void 0 !== this.tracks) {
          var e = this,
            t = e.selectedTrack;
          if(null !== t && t.isLoaded) {
            var n = e.searchTrackPosition(t.entries, e.media.currentTime);
            if(-1 < n) {
              var o = t.entries[n].text;
              return "function" == typeof e.options.captionTextPreprocessor && (o = e.options.captionTextPreprocessor(o)), e.captionsText.innerHTML = function(e) {
                var t = L.default.createElement("div");
                t.innerHTML = e;
                for(var n = t.getElementsByTagName("script"), o = n.length; o--;) n[o].remove();
                for(var i = t.getElementsByTagName("*"), r = 0, a = i.length; r < a; r++)
                  for(var s = i[r].attributes, l = Array.prototype.slice.call(s), d = 0, u = l.length; d < u; d++) l[d].name.startsWith("on") || l[d].value.startsWith("javascript") ? i[r].remove() : "style" === l[d].name && i[r].removeAttribute(l[d].name);
                return t.innerHTML
              }(o), e.captionsText.className = e.options.classPrefix + "captions-text " + (t.entries[n].identifier || ""), e.captions.style.display = "", void(e.captions.style.height = "0px")
            }
            e.captions.style.display = "none"
          } else e.captions.style.display = "none"
        }
      },
      setupSlides: function(e) {
        this.slides = e, this.slides.entries.imgs = [this.slides.entries.length], this.showSlide(0)
      },
      showSlide: function(e) {
        var i = this,
          r = this;
        if(void 0 !== r.tracks && void 0 !== r.slidesContainer) {
          var t = r.slides.entries[e].text,
            n = r.slides.entries[e].imgs;
          if(void 0 === n || void 0 === n.fadeIn) {
            var a = L.default.createElement("img");
            a.src = t, a.addEventListener("load", function() {
              var e = i,
                t = (0, I.siblings)(e, function(e) {
                  return t(e)
                });
              e.style.display = "none", r.slidesContainer.innerHTML += e.innerHTML, (0, I.fadeIn)(r.slidesContainer.querySelector(a));
              for(var n = 0, o = t.length; n < o; n++)(0, I.fadeOut)(t[n], 400)
            }), r.slides.entries[e].imgs = n = a
          } else if(!(0, I.visible)(n)) {
            var o = (0, I.siblings)(self, function(e) {
              return o(e)
            });
            (0, I.fadeIn)(r.slidesContainer.querySelector(n));
            for(var s = 0, l = o.length; s < l; s++)(0, I.fadeOut)(o[s])
          }
        }
      },
      displaySlides: function() {
        if(void 0 !== this.slides) {
          var e = this.slides,
            t = this.searchTrackPosition(e.entries, this.media.currentTime); - 1 < t && this.showSlide(t)
        }
      },
      drawChapters: function(e) {
        var r = this,
          t = e.entries.length;
        if(t) {
          r.chaptersButton.querySelector("ul").innerHTML = "";
          for(var n = 0; n < t; n++) r.chaptersButton.querySelector("ul").innerHTML += '<li class="' + r.options.classPrefix + 'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="' + r.options.classPrefix + 'captions-selector-input" name="' + r.id + '_chapters" id="' + r.id + "_chapters_" + n + '" value="' + e.entries[n].start + '" disabled><label class="' + r.options.classPrefix + 'chapters-selector-label"for="' + r.id + "_chapters_" + n + '">' + e.entries[n].text + "</label></li>";
          for(var o = r.chaptersButton.querySelectorAll('input[type="radio"]'), i = r.chaptersButton.querySelectorAll("." + r.options.classPrefix + "chapters-selector-label"), a = 0, s = o.length; a < s; a++) o[a].disabled = !1, o[a].checked = !1, o[a].addEventListener("click", function(e) {
            var t = r.chaptersButton.querySelectorAll("li"),
              n = (0, I.siblings)(this, function(e) {
                return (0, I.hasClass)(e, r.options.classPrefix + "chapters-selector-label")
              })[0];
            this.checked = !0, this.parentNode.setAttribute("aria-checked", !0), (0, I.addClass)(n, r.options.classPrefix + "chapters-selected"), (0, I.removeClass)(r.chaptersButton.querySelector("." + r.options.classPrefix + "chapters-selected"), r.options.classPrefix + "chapters-selected");
            for(var o = 0, i = t.length; o < i; o++) t[o].setAttribute("aria-checked", !1);
            void 0 === (e.keyCode || e.which) && setTimeout(function() {
              r.getElement(r.container).focus()
            }, 500), r.media.setCurrentTime(parseFloat(this.value)), r.media.paused && r.media.play()
          });
          for(var l = 0, d = i.length; l < d; l++) i[l].addEventListener("click", function(e) {
            var t = (0, I.siblings)(this, function(e) {
                return "INPUT" === e.tagName
              })[0],
              n = (0, j.createEvent)("click", t);
            t.dispatchEvent(n), e.preventDefault()
          })
        }
      },
      searchTrackPosition: function(e, t) {
        for(var n = 0, o = e.length - 1, i = void 0, r = void 0, a = void 0; n <= o;) {
          if(r = e[i = n + o >> 1].start, a = e[i].stop, r <= t && t < a) return i;
          r < t ? n = i + 1 : t < r && (o = i - 1)
        }
        return -1
      }
    }), d.default.language = {
      codes: {
        af: "mejs.afrikaans",
        sq: "mejs.albanian",
        ar: "mejs.arabic",
        be: "mejs.belarusian",
        bg: "mejs.bulgarian",
        ca: "mejs.catalan",
        zh: "mejs.chinese",
        "zh-cn": "mejs.chinese-simplified",
        "zh-tw": "mejs.chines-traditional",
        hr: "mejs.croatian",
        cs: "mejs.czech",
        da: "mejs.danish",
        nl: "mejs.dutch",
        en: "mejs.english",
        et: "mejs.estonian",
        fl: "mejs.filipino",
        fi: "mejs.finnish",
        fr: "mejs.french",
        gl: "mejs.galician",
        de: "mejs.german",
        el: "mejs.greek",
        ht: "mejs.haitian-creole",
        iw: "mejs.hebrew",
        hi: "mejs.hindi",
        hu: "mejs.hungarian",
        is: "mejs.icelandic",
        id: "mejs.indonesian",
        ga: "mejs.irish",
        it: "mejs.italian",
        ja: "mejs.japanese",
        ko: "mejs.korean",
        lv: "mejs.latvian",
        lt: "mejs.lithuanian",
        mk: "mejs.macedonian",
        ms: "mejs.malay",
        mt: "mejs.maltese",
        no: "mejs.norwegian",
        fa: "mejs.persian",
        pl: "mejs.polish",
        pt: "mejs.portuguese",
        ro: "mejs.romanian",
        ru: "mejs.russian",
        sr: "mejs.serbian",
        sk: "mejs.slovak",
        sl: "mejs.slovenian",
        es: "mejs.spanish",
        sw: "mejs.swahili",
        sv: "mejs.swedish",
        tl: "mejs.tagalog",
        th: "mejs.thai",
        tr: "mejs.turkish",
        uk: "mejs.ukrainian",
        vi: "mejs.vietnamese",
        cy: "mejs.welsh",
        yi: "mejs.yiddish"
      }
    }, d.default.TrackFormatParser = {
      webvtt: {
        pattern: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
        parse: function(e) {
          for(var t = e.split(/\r?\n/), n = [], o = void 0, i = void 0, r = void 0, a = 0, s = t.length; a < s; a++) {
            if((o = this.pattern.exec(t[a])) && a < t.length) {
              for(0 <= a - 1 && "" !== t[a - 1] && (r = t[a - 1]), i = t[++a], a++;
                "" !== t[a] && a < t.length;) i = i + "\n" + t[a], a++;
              i = null === i ? "" : i.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), n.push({
                identifier: r,
                start: 0 === (0, m.convertSMPTEtoSeconds)(o[1]) ? .2 : (0, m.convertSMPTEtoSeconds)(o[1]),
                stop: (0, m.convertSMPTEtoSeconds)(o[3]),
                text: i,
                settings: o[5]
              })
            }
            r = ""
          }
          return n
        }
      },
      dfxp: {
        parse: function(e) {
          var t = (e = $(e).filter("tt")).firstChild,
            n = t.querySelectorAll("p"),
            o = e.getElementById("" + t.attr("style")),
            i = [],
            r = void 0;
          if(o.length) {
            o.removeAttribute("id");
            var a = o.attributes;
            if(a.length) {
              r = {};
              for(var s = 0, l = a.length; s < l; s++) r[a[s].name.split(":")[1]] = a[s].value
            }
          }
          for(var d = 0, u = n.length; d < u; d++) {
            var c = void 0,
              f = {
                start: null,
                stop: null,
                style: null,
                text: null
              };
            if(n.eq(d).attr("begin") && (f.start = (0, m.convertSMPTEtoSeconds)(n.eq(d).attr("begin"))), !f.start && n.eq(d - 1).attr("end") && (f.start = (0, m.convertSMPTEtoSeconds)(n.eq(d - 1).attr("end"))), n.eq(d).attr("end") && (f.stop = (0, m.convertSMPTEtoSeconds)(n.eq(d).attr("end"))), !f.stop && n.eq(d + 1).attr("begin") && (f.stop = (0, m.convertSMPTEtoSeconds)(n.eq(d + 1).attr("begin"))), r)
              for(var p in c = "", r) c += p + ":" + r[p] + ";";
            c && (f.style = c), 0 === f.start && (f.start = .2), f.text = n.eq(d).innerHTML.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), i.push(f)
          }
          return i
        }
      }
    }
  }, {
    16: 16,
    2: 2,
    26: 26,
    27: 27,
    30: 30,
    5: 5,
    7: 7
  }],
  14: [function(e, t, n) {
    "use strict";
    var x = r(e(2)),
      o = e(16),
      i = r(o),
      w = r(e(5)),
      P = e(25),
      T = e(27),
      C = e(26);

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.assign(o.config, {
      muteText: null,
      unmuteText: null,
      allyVolumeControlText: null,
      hideVolumeOnTouchDevices: !0,
      audioVolume: "horizontal",
      videoVolume: "vertical",
      startVolume: .8
    }), Object.assign(i.default.prototype, {
      buildvolume: function(e, t, n, o) {
        if(!P.IS_ANDROID && !P.IS_IOS || !this.options.hideVolumeOnTouchDevices) {
          var a = this,
            s = a.isVideo ? a.options.videoVolume : a.options.audioVolume,
            r = (0, T.isString)(a.options.muteText) ? a.options.muteText : w.default.t("mejs.mute"),
            l = (0, T.isString)(a.options.unmuteText) ? a.options.unmuteText : w.default.t("mejs.unmute"),
            i = (0, T.isString)(a.options.allyVolumeControlText) ? a.options.allyVolumeControlText : w.default.t("mejs.volume-help-text"),
            d = x.default.createElement("div");
          if(d.className = a.options.classPrefix + "button " + a.options.classPrefix + "volume-button " + a.options.classPrefix + "mute", d.innerHTML = "horizontal" === s ? '<button type="button" aria-controls="' + a.id + '" title="' + r + '" aria-label="' + r + '" tabindex="0"></button>' : '<button type="button" aria-controls="' + a.id + '" title="' + r + '" aria-label="' + r + '" tabindex="0"></button><a href="javascript:void(0);" class="' + a.options.classPrefix + 'volume-slider" aria-label="' + w.default.t("mejs.volume-slider") + '" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span class="' + a.options.classPrefix + 'offscreen">' + i + '</span><div class="' + a.options.classPrefix + 'volume-total"><div class="' + a.options.classPrefix + 'volume-current"></div><div class="' + a.options.classPrefix + 'volume-handle"></div></div></a>', a.addControlElement(d, "volume"), a.options.keyActions.push({
              keys: [38],
              action: function(e) {
                var t = e.getElement(e.container).querySelector("." + a.options.classPrefix + "volume-slider");
                t && t.matches(":focus") && (t.style.display = "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
                var n = Math.min(e.volume + .1, 1);
                e.setVolume(n), 0 < n && e.setMuted(!1)
              }
            }, {
              keys: [40],
              action: function(e) {
                var t = e.getElement(e.container).querySelector("." + a.options.classPrefix + "volume-slider");
                t && (t.style.display = "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
                var n = Math.max(e.volume - .1, 0);
                e.setVolume(n), n <= .1 && e.setMuted(!0)
              }
            }, {
              keys: [77],
              action: function(e) {
                var t = e.getElement(e.container).querySelector("." + a.options.classPrefix + "volume-slider");
                t && (t.style.display = "block"), e.isVideo && (e.showControls(), e.startControlsTimer()), e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
              }
            }), "horizontal" === s) {
            var u = x.default.createElement("a");
            u.className = a.options.classPrefix + "horizontal-volume-slider", u.href = "javascript:void(0);", u.setAttribute("aria-label", w.default.t("mejs.volume-slider")), u.setAttribute("aria-valuemin", 0), u.setAttribute("aria-valuemax", 100), u.setAttribute("aria-valuenow", 100), u.setAttribute("role", "slider"), u.innerHTML += '<span class="' + a.options.classPrefix + 'offscreen">' + i + '</span><div class="' + a.options.classPrefix + 'horizontal-volume-total"><div class="' + a.options.classPrefix + 'horizontal-volume-current"></div><div class="' + a.options.classPrefix + 'horizontal-volume-handle"></div></div>', d.parentNode.insertBefore(u, d.nextSibling)
          }
          var c = !1,
            f = !1,
            p = !1,
            m = "vertical" === s ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-slider") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-slider"),
            h = "vertical" === s ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-total") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-total"),
            v = "vertical" === s ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-current") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-current"),
            g = "vertical" === s ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-handle") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-handle"),
            y = function(e) {
              if(null !== e && !isNaN(e) && void 0 !== e) {
                if(e = Math.max(0, e), 0 === (e = Math.min(e, 1))) {
                  (0, C.removeClass)(d, a.options.classPrefix + "mute"), (0, C.addClass)(d, a.options.classPrefix + "unmute");
                  var t = d.firstElementChild;
                  t.setAttribute("title", l), t.setAttribute("aria-label", l)
                } else {
                  (0, C.removeClass)(d, a.options.classPrefix + "unmute"), (0, C.addClass)(d, a.options.classPrefix + "mute");
                  var n = d.firstElementChild;
                  n.setAttribute("title", r), n.setAttribute("aria-label", r)
                }
                var o = 100 * e + "%",
                  i = getComputedStyle(g);
                "vertical" === s ? (v.style.bottom = 0, v.style.height = o, g.style.bottom = o, g.style.marginBottom = -parseFloat(i.height) / 2 + "px") : (v.style.left = 0, v.style.width = o, g.style.left = o, g.style.marginLeft = -parseFloat(i.width) / 2 + "px")
              }
            },
            E = function(e) {
              var t = (0, C.offset)(h),
                n = getComputedStyle(h);
              p = !0;
              var o = null;
              if("vertical" === s) {
                var i = parseFloat(n.height);
                if(o = (i - (e.pageY - t.top)) / i, 0 === t.top || 0 === t.left) return
              } else {
                var r = parseFloat(n.width);
                o = (e.pageX - t.left) / r
              }
              o = Math.max(0, o), o = Math.min(o, 1), y(o), a.setMuted(0 === o), a.setVolume(o), e.preventDefault(), e.stopPropagation()
            },
            b = function() {
              a.muted ? (y(0), (0, C.removeClass)(d, a.options.classPrefix + "mute"), (0, C.addClass)(d, a.options.classPrefix + "unmute")) : (y(o.volume), (0, C.removeClass)(d, a.options.classPrefix + "unmute"), (0, C.addClass)(d, a.options.classPrefix + "mute"))
            };
          e.getElement(e.container).addEventListener("keydown", function(e) {
            !!e.target.closest("." + a.options.classPrefix + "container") || "vertical" !== s || (m.style.display = "none")
          }), d.addEventListener("mouseenter", function(e) {
            e.target === d && (m.style.display = "block", f = !0, e.preventDefault(), e.stopPropagation())
          }), d.addEventListener("focusin", function() {
            m.style.display = "block", f = !0
          }), d.addEventListener("focusout", function(e) {
            e.relatedTarget && (!e.relatedTarget || e.relatedTarget.matches("." + a.options.classPrefix + "volume-slider")) || "vertical" !== s || (m.style.display = "none")
          }), d.addEventListener("mouseleave", function() {
            f = !1, c || "vertical" !== s || (m.style.display = "none")
          }), d.addEventListener("focusout", function() {
            f = !1
          }), d.addEventListener("keydown", function(e) {
            if(a.options.enableKeyboard && a.options.keyActions.length) {
              var t = e.which || e.keyCode || 0,
                n = o.volume;
              switch(t) {
                case 38:
                  n = Math.min(n + .1, 1);
                  break;
                case 40:
                  n = Math.max(0, n - .1);
                  break;
                default:
                  return !0
              }
              c = !1, y(n), o.setVolume(n), e.preventDefault(), e.stopPropagation()
            }
          }), d.querySelector("button").addEventListener("click", function() {
            o.setMuted(!o.muted);
            var e = (0, T.createEvent)("volumechange", o);
            o.dispatchEvent(e)
          }), m.addEventListener("dragstart", function() {
            return !1
          }), m.addEventListener("mouseover", function() {
            f = !0
          }), m.addEventListener("focusin", function() {
            m.style.display = "block", f = !0
          }), m.addEventListener("focusout", function() {
            f = !1, c || "vertical" !== s || (m.style.display = "none")
          }), m.addEventListener("mousedown", function(e) {
            E(e), a.globalBind("mousemove.vol", function(e) {
              var t = e.target;
              c && (t === m || t.closest("vertical" === s ? "." + a.options.classPrefix + "volume-slider" : "." + a.options.classPrefix + "horizontal-volume-slider")) && E(e)
            }), a.globalBind("mouseup.vol", function() {
              c = !1, f || "vertical" !== s || (m.style.display = "none")
            }), c = !0, e.preventDefault(), e.stopPropagation()
          }), o.addEventListener("volumechange", function(e) {
            var t;
            c || b(), t = Math.floor(100 * o.volume), m.setAttribute("aria-valuenow", t), m.setAttribute("aria-valuetext", t + "%")
          });
          var S = !1;
          o.addEventListener("rendererready", function() {
            p || setTimeout(function() {
              S = !0, (0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0), e.options.startVolume = 0), o.setVolume(e.options.startVolume), a.setControlsSize()
            }, 250)
          }), o.addEventListener("loadedmetadata", function() {
            setTimeout(function() {
              p || S || ((0 === e.options.startVolume || o.originalNode.muted) && o.setMuted(!0), o.setVolume(e.options.startVolume), a.setControlsSize()), S = !1
            }, 250)
          }), (0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0), e.options.startVolume = 0, b()), a.getElement(a.container).addEventListener("controlsresize", function() {
            b()
          })
        }
      }
    })
  }, {
    16: 16,
    2: 2,
    25: 25,
    26: 26,
    27: 27,
    5: 5
  }],
  15: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    n.EN = {
      "mejs.plural-form": 1,
      "mejs.download-file": "Download File",
      "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
      "mejs.fullscreen": "Fullscreen",
      "mejs.play": "Play",
      "mejs.pause": "Pause",
      "mejs.time-slider": "Time Slider",
      "mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
      "mejs.live-broadcast": "Live Broadcast",
      "mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
      "mejs.unmute": "Unmute",
      "mejs.mute": "Mute",
      "mejs.volume-slider": "Volume Slider",
      "mejs.video-player": "Video Player",
      "mejs.audio-player": "Audio Player",
      "mejs.captions-subtitles": "Captions/Subtitles",
      "mejs.captions-chapters": "Chapters",
      "mejs.none": "None",
      "mejs.afrikaans": "Afrikaans",
      "mejs.albanian": "Albanian",
      "mejs.arabic": "Arabic",
      "mejs.belarusian": "Belarusian",
      "mejs.bulgarian": "Bulgarian",
      "mejs.catalan": "Catalan",
      "mejs.chinese": "Chinese",
      "mejs.chinese-simplified": "Chinese (Simplified)",
      "mejs.chinese-traditional": "Chinese (Traditional)",
      "mejs.croatian": "Croatian",
      "mejs.czech": "Czech",
      "mejs.danish": "Danish",
      "mejs.dutch": "Dutch",
      "mejs.english": "English",
      "mejs.estonian": "Estonian",
      "mejs.filipino": "Filipino",
      "mejs.finnish": "Finnish",
      "mejs.french": "French",
      "mejs.galician": "Galician",
      "mejs.german": "German",
      "mejs.greek": "Greek",
      "mejs.haitian-creole": "Haitian Creole",
      "mejs.hebrew": "Hebrew",
      "mejs.hindi": "Hindi",
      "mejs.hungarian": "Hungarian",
      "mejs.icelandic": "Icelandic",
      "mejs.indonesian": "Indonesian",
      "mejs.irish": "Irish",
      "mejs.italian": "Italian",
      "mejs.japanese": "Japanese",
      "mejs.korean": "Korean",
      "mejs.latvian": "Latvian",
      "mejs.lithuanian": "Lithuanian",
      "mejs.macedonian": "Macedonian",
      "mejs.malay": "Malay",
      "mejs.maltese": "Maltese",
      "mejs.norwegian": "Norwegian",
      "mejs.persian": "Persian",
      "mejs.polish": "Polish",
      "mejs.portuguese": "Portuguese",
      "mejs.romanian": "Romanian",
      "mejs.russian": "Russian",
      "mejs.serbian": "Serbian",
      "mejs.slovak": "Slovak",
      "mejs.slovenian": "Slovenian",
      "mejs.spanish": "Spanish",
      "mejs.swahili": "Swahili",
      "mejs.swedish": "Swedish",
      "mejs.tagalog": "Tagalog",
      "mejs.thai": "Thai",
      "mejs.turkish": "Turkish",
      "mejs.ukrainian": "Ukrainian",
      "mejs.vietnamese": "Vietnamese",
      "mejs.welsh": "Welsh",
      "mejs.yiddish": "Yiddish"
    }
  }, {}],
  16: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.config = void 0;
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = function() {
        function o(e, t) {
          for(var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
          }
        }
        return function(e, t, n) {
          return t && o(e.prototype, t), n && o(e, n), e
        }
      }(),
      S = r(e(3)),
      x = r(e(2)),
      f = r(e(7)),
      d = r(e(6)),
      a = r(e(17)),
      u = r(e(5)),
      w = e(25),
      m = e(27),
      c = e(30),
      p = e(28),
      P = function(e) {
        {
          if(e && e.__esModule) return e;
          var t = {};
          if(null != e)
            for(var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t.default = e, t
        }
      }(e(26));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    f.default.mepIndex = 0, f.default.players = {};
    var s = n.config = {
      poster: "",
      showPosterWhenEnded: !1,
      showPosterWhenPaused: !1,
      defaultVideoWidth: 480,
      defaultVideoHeight: 270,
      videoWidth: -1,
      videoHeight: -1,
      defaultAudioWidth: 400,
      defaultAudioHeight: 40,
      defaultSeekBackwardInterval: function(e) {
        return .05 * e.getDuration()
      },
      defaultSeekForwardInterval: function(e) {
        return .05 * e.getDuration()
      },
      setDimensions: !0,
      audioWidth: -1,
      audioHeight: -1,
      loop: !1,
      autoRewind: !0,
      enableAutosize: !0,
      timeFormat: "",
      alwaysShowHours: !1,
      showTimecodeFrameCount: !1,
      framesPerSecond: 25,
      alwaysShowControls: !1,
      hideVideoControlsOnLoad: !1,
      hideVideoControlsOnPause: !1,
      clickToPlayPause: !0,
      controlsTimeoutDefault: 1500,
      controlsTimeoutMouseEnter: 2500,
      controlsTimeoutMouseLeave: 1e3,
      iPadUseNativeControls: !1,
      iPhoneUseNativeControls: !1,
      AndroidUseNativeControls: !1,
      features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
      useDefaultControls: !1,
      isVideo: !0,
      stretching: "auto",
      classPrefix: "mejs__",
      enableKeyboard: !0,
      pauseOtherPlayers: !0,
      secondsDecimalLength: 0,
      customError: null,
      keyActions: [{
        keys: [32, 179],
        action: function(e) {
          w.IS_FIREFOX || (e.paused || e.ended ? e.play() : e.pause())
        }
      }]
    };
    f.default.MepDefaults = s;
    var l = function() {
      function r(e, t) {
        ! function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, r);
        var n = this,
          o = "string" == typeof e ? x.default.getElementById(e) : e;
        if(!(n instanceof r)) return new r(o, t);
        if(n.node = n.media = o, n.node) {
          if(n.media.player) return n.media.player;
          if(n.hasFocus = !1, n.controlsAreVisible = !0, n.controlsEnabled = !0, n.controlsTimer = null, n.currentMediaTime = 0, n.proxy = null, void 0 === t) {
            var i = n.node.getAttribute("data-mejsoptions");
            t = i ? JSON.parse(i) : {}
          }
          return n.options = Object.assign({}, s, t), n.options.loop && !n.media.getAttribute("loop") ? (n.media.loop = !0, n.node.loop = !0) : n.media.loop && (n.options.loop = !0), n.options.timeFormat || (n.options.timeFormat = "mm:ss", n.options.alwaysShowHours && (n.options.timeFormat = "hh:mm:ss"), n.options.showTimecodeFrameCount && (n.options.timeFormat += ":ff")), (0, c.calculateTimeFormat)(0, n.options, n.options.framesPerSecond || 25), n.id = "mep_" + f.default.mepIndex++, (f.default.players[n.id] = n).init(), n
        }
      }
      return o(r, [{
        key: "getElement",
        value: function(e) {
          return e
        }
      }, {
        key: "init",
        value: function() {
          var n = this,
            e = Object.assign({}, n.options, {
              success: function(e, t) {
                n._meReady(e, t)
              },
              error: function(e) {
                n._handleError(e)
              }
            }),
            t = n.node.tagName.toLowerCase();
          if(n.isDynamic = "audio" !== t && "video" !== t && "iframe" !== t, n.isVideo = n.isDynamic ? n.options.isVideo : "audio" !== t && n.options.isVideo, n.mediaFiles = null, n.trackFiles = null, w.IS_IPAD && n.options.iPadUseNativeControls || w.IS_IPHONE && n.options.iPhoneUseNativeControls) n.node.setAttribute("controls", !0), w.IS_IPAD && n.node.getAttribute("autoplay") && n.play();
          else if(!n.isVideo && (n.isVideo || !n.options.features.length && !n.options.useDefaultControls) || w.IS_ANDROID && n.options.AndroidUseNativeControls) n.isVideo || n.options.features.length || n.options.useDefaultControls || (n.node.style.display = "none");
          else {
            n.node.removeAttribute("controls");
            var o = n.isVideo ? u.default.t("mejs.video-player") : u.default.t("mejs.audio-player"),
              i = x.default.createElement("span");
            if(i.className = n.options.classPrefix + "offscreen", i.innerText = o, n.media.parentNode.insertBefore(i, n.media), n.container = x.default.createElement("div"), n.getElement(n.container).id = n.id, n.getElement(n.container).className = n.options.classPrefix + "container " + n.options.classPrefix + "container-keyboard-inactive " + n.media.className, n.getElement(n.container).tabIndex = 0, n.getElement(n.container).setAttribute("role", "application"), n.getElement(n.container).setAttribute("aria-label", o), n.getElement(n.container).innerHTML = '<div class="' + n.options.classPrefix + 'inner"><div class="' + n.options.classPrefix + 'mediaelement"></div><div class="' + n.options.classPrefix + 'layers"></div><div class="' + n.options.classPrefix + 'controls"></div></div>', n.getElement(n.container).addEventListener("focus", function(e) {
                if(!n.controlsAreVisible && !n.hasFocus && n.controlsEnabled) {
                  n.showControls(!0);
                  var t = (0, m.isNodeAfter)(e.relatedTarget, n.getElement(n.container)) ? "." + n.options.classPrefix + "controls ." + n.options.classPrefix + "button:last-child > button" : "." + n.options.classPrefix + "playpause-button > button";
                  n.getElement(n.container).querySelector(t).focus()
                }
              }), n.node.parentNode.insertBefore(n.getElement(n.container), n.node), n.options.features.length || n.options.useDefaultControls || (n.getElement(n.container).style.background = "transparent", n.getElement(n.container).querySelector("." + n.options.classPrefix + "controls").style.display = "none"), n.isVideo && "fill" === n.options.stretching && !P.hasClass(n.getElement(n.container).parentNode, n.options.classPrefix + "fill-container")) {
              n.outerContainer = n.media.parentNode;
              var r = x.default.createElement("div");
              r.className = n.options.classPrefix + "fill-container", n.getElement(n.container).parentNode.insertBefore(r, n.getElement(n.container)), r.appendChild(n.getElement(n.container))
            }
            w.IS_ANDROID && P.addClass(n.getElement(n.container), n.options.classPrefix + "android"), w.IS_IOS && P.addClass(n.getElement(n.container), n.options.classPrefix + "ios"), w.IS_IPAD && P.addClass(n.getElement(n.container), n.options.classPrefix + "ipad"), w.IS_IPHONE && P.addClass(n.getElement(n.container), n.options.classPrefix + "iphone"), P.addClass(n.getElement(n.container), n.isVideo ? n.options.classPrefix + "video" : n.options.classPrefix + "audio"), n.getElement(n.container).querySelector("." + n.options.classPrefix + "mediaelement").appendChild(n.node), (n.media.player = n).controls = n.getElement(n.container).querySelector("." + n.options.classPrefix + "controls"), n.layers = n.getElement(n.container).querySelector("." + n.options.classPrefix + "layers");
            var a = n.isVideo ? "video" : "audio",
              s = a.substring(0, 1).toUpperCase() + a.substring(1);
            0 < n.options[a + "Width"] || -1 < n.options[a + "Width"].toString().indexOf("%") ? n.width = n.options[a + "Width"] : "" !== n.node.style.width && null !== n.node.style.width ? n.width = n.node.style.width : n.node.getAttribute("width") ? n.width = n.node.getAttribute("width") : n.width = n.options["default" + s + "Width"], 0 < n.options[a + "Height"] || -1 < n.options[a + "Height"].toString().indexOf("%") ? n.height = n.options[a + "Height"] : "" !== n.node.style.height && null !== n.node.style.height ? n.height = n.node.style.height : n.node.getAttribute("height") ? n.height = n.node.getAttribute("height") : n.height = n.options["default" + s + "Height"], n.initialAspectRatio = n.height >= n.width ? n.width / n.height : n.height / n.width, n.setPlayerSize(n.width, n.height), e.pluginWidth = n.width, e.pluginHeight = n.height
          }
          if(f.default.MepDefaults = e, new d.default(n.media, e, n.mediaFiles), void 0 !== n.getElement(n.container) && n.options.features.length && n.controlsAreVisible && !n.options.hideVideoControlsOnLoad) {
            var l = (0, m.createEvent)("controlsshown", n.getElement(n.container));
            n.getElement(n.container).dispatchEvent(l)
          }
        }
      }, {
        key: "showControls",
        value: function(e) {
          var i = this;
          if(e = void 0 === e || e, !i.controlsAreVisible && i.isVideo) {
            if(e) ! function() {
              P.fadeIn(i.getElement(i.controls), 200, function() {
                P.removeClass(i.getElement(i.controls), i.options.classPrefix + "offscreen");
                var e = (0, m.createEvent)("controlsshown", i.getElement(i.container));
                i.getElement(i.container).dispatchEvent(e)
              });
              for(var n = i.getElement(i.container).querySelectorAll("." + i.options.classPrefix + "control"), e = function(e, t) {
                  P.fadeIn(n[e], 200, function() {
                    P.removeClass(n[e], i.options.classPrefix + "offscreen")
                  })
                }, t = 0, o = n.length; t < o; t++) e(t)
            }();
            else {
              P.removeClass(i.getElement(i.controls), i.options.classPrefix + "offscreen"), i.getElement(i.controls).style.display = "", i.getElement(i.controls).style.opacity = 1;
              for(var t = i.getElement(i.container).querySelectorAll("." + i.options.classPrefix + "control"), n = 0, o = t.length; n < o; n++) P.removeClass(t[n], i.options.classPrefix + "offscreen"), t[n].style.display = "";
              var r = (0, m.createEvent)("controlsshown", i.getElement(i.container));
              i.getElement(i.container).dispatchEvent(r)
            }
            i.controlsAreVisible = !0, i.setControlsSize()
          }
        }
      }, {
        key: "hideControls",
        value: function(e, t) {
          var i = this;
          if(e = void 0 === e || e, !0 === t || !(!i.controlsAreVisible || i.options.alwaysShowControls || i.paused && 4 === i.readyState && (!i.options.hideVideoControlsOnLoad && i.currentTime <= 0 || !i.options.hideVideoControlsOnPause && 0 < i.currentTime) || i.isVideo && !i.options.hideVideoControlsOnLoad && !i.readyState || i.ended)) {
            if(e) ! function() {
              P.fadeOut(i.getElement(i.controls), 200, function() {
                P.addClass(i.getElement(i.controls), i.options.classPrefix + "offscreen"), i.getElement(i.controls).style.display = "";
                var e = (0, m.createEvent)("controlshidden", i.getElement(i.container));
                i.getElement(i.container).dispatchEvent(e)
              });
              for(var n = i.getElement(i.container).querySelectorAll("." + i.options.classPrefix + "control"), e = function(e, t) {
                  P.fadeOut(n[e], 200, function() {
                    P.addClass(n[e], i.options.classPrefix + "offscreen"), n[e].style.display = ""
                  })
                }, t = 0, o = n.length; t < o; t++) e(t)
            }();
            else {
              P.addClass(i.getElement(i.controls), i.options.classPrefix + "offscreen"), i.getElement(i.controls).style.display = "", i.getElement(i.controls).style.opacity = 0;
              for(var n = i.getElement(i.container).querySelectorAll("." + i.options.classPrefix + "control"), o = 0, r = n.length; o < r; o++) P.addClass(n[o], i.options.classPrefix + "offscreen"), n[o].style.display = "";
              var a = (0, m.createEvent)("controlshidden", i.getElement(i.container));
              i.getElement(i.container).dispatchEvent(a)
            }
            i.controlsAreVisible = !1
          }
        }
      }, {
        key: "startControlsTimer",
        value: function(e) {
          var t = this;
          e = void 0 !== e ? e : t.options.controlsTimeoutDefault, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function() {
            t.hideControls(), t.killControlsTimer("hide")
          }, e)
        }
      }, {
        key: "killControlsTimer",
        value: function() {
          null !== this.controlsTimer && (clearTimeout(this.controlsTimer), delete this.controlsTimer, this.controlsTimer = null)
        }
      }, {
        key: "disableControls",
        value: function() {
          this.killControlsTimer(), this.controlsEnabled = !1, this.hideControls(!1, !0)
        }
      }, {
        key: "enableControls",
        value: function() {
          this.controlsEnabled = !0, this.showControls(!1)
        }
      }, {
        key: "_setDefaultPlayer",
        value: function() {
          var e = this;
          e.proxy && e.proxy.pause(), e.proxy = new a.default(e), e.media.addEventListener("loadedmetadata", function() {
            0 < e.getCurrentTime() && 0 < e.currentMediaTime && (e.setCurrentTime(e.currentMediaTime), w.IS_IOS || w.IS_ANDROID || e.play())
          })
        }
      }, {
        key: "_meReady",
        value: function(e, t) {
          var n = this,
            o = t.getAttribute("autoplay"),
            i = !(null == o || "false" === o),
            r = null !== e.rendererName && /(native|html5)/i.test(n.media.rendererName);
          if(n.getElement(n.controls) && n.enableControls(), n.getElement(n.container) && n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-play") && (n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-play").style.display = ""), !n.created) {
            if(n.created = !0, n.media = e, n.domNode = t, !(w.IS_ANDROID && n.options.AndroidUseNativeControls || w.IS_IPAD && n.options.iPadUseNativeControls || w.IS_IPHONE && n.options.iPhoneUseNativeControls)) {
              if(!n.isVideo && !n.options.features.length && !n.options.useDefaultControls) return i && r && n.play(), void(n.options.success && ("string" == typeof n.options.success ? S.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n)));
              if(n.featurePosition = {}, n._setDefaultPlayer(), n.buildposter(n, n.getElement(n.controls), n.getElement(n.layers), n.media), n.buildkeyboard(n, n.getElement(n.controls), n.getElement(n.layers), n.media), n.buildoverlays(n, n.getElement(n.controls), n.getElement(n.layers), n.media), n.options.useDefaultControls) {
                var a = ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"];
                n.options.features = a.concat(n.options.features.filter(function(e) {
                  return -1 === a.indexOf(e)
                }))
              }
              n.buildfeatures(n, n.getElement(n.controls), n.getElement(n.layers), n.media);
              var s = (0, m.createEvent)("controlsready", n.getElement(n.container));
              n.getElement(n.container).dispatchEvent(s), n.setPlayerSize(n.width, n.height), n.setControlsSize(), n.isVideo && (n.clickToPlayPauseCallback = function() {
                if(n.options.clickToPlayPause) {
                  var e = n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-button"),
                    t = e.getAttribute("aria-pressed");
                  n.paused && t ? n.pause() : n.paused ? n.play() : n.pause(), e.setAttribute("aria-pressed", !t), n.getElement(n.container).focus()
                }
              }, n.createIframeLayer(), n.media.addEventListener("click", n.clickToPlayPauseCallback), !w.IS_ANDROID && !w.IS_IOS || n.options.alwaysShowControls ? (n.getElement(n.container).addEventListener("mouseenter", function() {
                n.controlsEnabled && (n.options.alwaysShowControls || (n.killControlsTimer("enter"), n.showControls(), n.startControlsTimer(n.options.controlsTimeoutMouseEnter)))
              }), n.getElement(n.container).addEventListener("mousemove", function() {
                n.controlsEnabled && (n.controlsAreVisible || n.showControls(), n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseEnter))
              }), n.getElement(n.container).addEventListener("mouseleave", function() {
                n.controlsEnabled && (n.paused || n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseLeave))
              })) : n.node.addEventListener("touchstart", function() {
                n.controlsAreVisible ? n.hideControls(!1) : n.controlsEnabled && n.showControls(!1)
              }, !!w.SUPPORT_PASSIVE_EVENT && {
                passive: !0
              }), n.options.hideVideoControlsOnLoad && n.hideControls(!1), n.options.enableAutosize && n.media.addEventListener("loadedmetadata", function(e) {
                var t = void 0 !== e ? e.detail.target || e.target : n.media;
                n.options.videoHeight <= 0 && !n.domNode.getAttribute("height") && !n.domNode.style.height && null !== t && !isNaN(t.videoHeight) && (n.setPlayerSize(t.videoWidth, t.videoHeight), n.setControlsSize(), n.media.setSize(t.videoWidth, t.videoHeight))
              })), n.media.addEventListener("play", function() {
                for(var e in n.hasFocus = !0, f.default.players)
                  if(f.default.players.hasOwnProperty(e)) {
                    var t = f.default.players[e];
                    t.id === n.id || !n.options.pauseOtherPlayers || t.paused || t.ended || !0 === t.options.ignorePauseOtherPlayersOption || (t.pause(), t.hasFocus = !1)
                  } w.IS_ANDROID || w.IS_IOS || n.options.alwaysShowControls || !n.isVideo || n.hideControls()
              }), n.media.addEventListener("ended", function() {
                if(n.options.autoRewind) try {
                  n.setCurrentTime(0), setTimeout(function() {
                    var e = n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-loading");
                    e && e.parentNode && (e.parentNode.style.display = "none")
                  }, 20)
                } catch (e) {}
                "function" == typeof n.media.renderer.stop ? n.media.renderer.stop() : n.pause(), n.setProgressRail && n.setProgressRail(), n.setCurrentRail && n.setCurrentRail(), n.options.loop ? n.play() : !n.options.alwaysShowControls && n.controlsEnabled && n.showControls()
              }), n.media.addEventListener("loadedmetadata", function() {
                (0, c.calculateTimeFormat)(n.getDuration(), n.options, n.options.framesPerSecond || 25), n.updateDuration && n.updateDuration(), n.updateCurrent && n.updateCurrent(), n.isFullScreen || (n.setPlayerSize(n.width, n.height), n.setControlsSize())
              });
              var l = null;
              n.media.addEventListener("timeupdate", function() {
                isNaN(n.getDuration()) || l === n.getDuration() || (l = n.getDuration(), (0, c.calculateTimeFormat)(l, n.options, n.options.framesPerSecond || 25), n.updateDuration && n.updateDuration(), n.updateCurrent && n.updateCurrent(), n.setControlsSize())
              }), n.getElement(n.container).addEventListener("click", function(e) {
                P.addClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive")
              }), n.getElement(n.container).addEventListener("focusin", function(e) {
                P.removeClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive"), !n.isVideo || w.IS_ANDROID || w.IS_IOS || !n.controlsEnabled || n.options.alwaysShowControls || (n.killControlsTimer("enter"), n.showControls(), n.startControlsTimer(n.options.controlsTimeoutMouseEnter))
              }), n.getElement(n.container).addEventListener("focusout", function(e) {
                setTimeout(function() {
                  e.relatedTarget && n.keyboardAction && !e.relatedTarget.closest("." + n.options.classPrefix + "container") && (n.keyboardAction = !1, !n.isVideo || n.options.alwaysShowControls || n.paused || n.startControlsTimer(n.options.controlsTimeoutMouseLeave))
                }, 0)
              }), setTimeout(function() {
                n.setPlayerSize(n.width, n.height), n.setControlsSize()
              }, 0), n.globalResizeCallback = function() {
                n.isFullScreen || w.HAS_TRUE_NATIVE_FULLSCREEN && x.default.webkitIsFullScreen || n.setPlayerSize(n.width, n.height), n.setControlsSize()
              }, n.globalBind("resize", n.globalResizeCallback)
            }
            i && r && n.play(), n.options.success && ("string" == typeof n.options.success ? S.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n))
          }
        }
      }, {
        key: "_handleError",
        value: function(e, t, n) {
          var o = this,
            i = o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-play");
          i && (i.style.display = "none"), o.options.error && o.options.error(e, t, n), o.getElement(o.container).querySelector("." + o.options.classPrefix + "cannotplay") && o.getElement(o.container).querySelector("." + o.options.classPrefix + "cannotplay").remove();
          var r = x.default.createElement("div");
          r.className = o.options.classPrefix + "cannotplay", r.style.width = "100%", r.style.height = "100%";
          var a = "function" == typeof o.options.customError ? o.options.customError(o.media, o.media.originalNode) : o.options.customError,
            s = "";
          if(!a) {
            var l = o.media.originalNode.getAttribute("poster");
            if(l && (s = '<img src="' + l + '" alt="' + f.default.i18n.t("mejs.download-file") + '">'), e.message && (a = "<p>" + e.message + "</p>"), e.urls)
              for(var d = 0, u = e.urls.length; d < u; d++) {
                var c = e.urls[d];
                a += '<a href="' + c.src + '" data-type="' + c.type + '"><span>' + f.default.i18n.t("mejs.download-file") + ": " + c.src + "</span></a>"
              }
          }
          a && o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-error") && (r.innerHTML = a, o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-error").innerHTML = "" + s + r.outerHTML, o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-error").parentNode.style.display = "block"), o.controlsEnabled && o.disableControls()
        }
      }, {
        key: "setPlayerSize",
        value: function(e, t) {
          var n = this;
          if(!n.options.setDimensions) return !1;
          switch(void 0 !== e && (n.width = e), void 0 !== t && (n.height = t), n.options.stretching) {
            case "fill":
              n.isVideo ? n.setFillMode() : n.setDimensions(n.width, n.height);
              break;
            case "responsive":
              n.setResponsiveMode();
              break;
            case "none":
              n.setDimensions(n.width, n.height);
              break;
            default:
              !0 === n.hasFluidMode() ? n.setResponsiveMode() : n.setDimensions(n.width, n.height)
          }
        }
      }, {
        key: "hasFluidMode",
        value: function() {
          var e = this;
          return -1 !== e.height.toString().indexOf("%") || e.node && e.node.style.maxWidth && "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width || e.node && e.node.currentStyle && "100%" === e.node.currentStyle.maxWidth
        }
      }, {
        key: "setResponsiveMode",
        value: function() {
          var e, o = this,
            t = function() {
              for(var t = void 0, n = o.getElement(o.container); n;) {
                try {
                  if(w.IS_FIREFOX && "html" === n.tagName.toLowerCase() && S.default.self !== S.default.top && null !== S.default.frameElement) return S.default.frameElement;
                  t = n.parentElement
                } catch (e) {
                  t = n.parentElement
                }
                if(t && P.visible(t)) return t;
                n = t
              }
              return null
            }(),
            n = t ? getComputedStyle(t, null) : getComputedStyle(x.default.body, null),
            i = o.isVideo ? o.node.videoWidth && 0 < o.node.videoWidth ? o.node.videoWidth : o.node.getAttribute("width") ? o.node.getAttribute("width") : o.options.defaultVideoWidth : o.options.defaultAudioWidth,
            r = o.isVideo ? o.node.videoHeight && 0 < o.node.videoHeight ? o.node.videoHeight : o.node.getAttribute("height") ? o.node.getAttribute("height") : o.options.defaultVideoHeight : o.options.defaultAudioHeight,
            a = (e = 1, o.isVideo && (e = o.node.videoWidth && 0 < o.node.videoWidth && o.node.videoHeight && 0 < o.node.videoHeight ? o.height >= o.width ? o.node.videoWidth / o.node.videoHeight : o.node.videoHeight / o.node.videoWidth : o.initialAspectRatio, (isNaN(e) || e < .01 || 100 < e) && (e = 1)), e),
            s = parseFloat(n.height),
            l = void 0,
            d = parseFloat(n.width);
          if(l = o.isVideo ? "100%" === o.height ? parseFloat(d * r / i, 10) : o.height >= o.width ? parseFloat(d / a, 10) : parseFloat(d * a, 10) : r, isNaN(l) && (l = s), 0 < o.getElement(o.container).parentNode.length && "body" === o.getElement(o.container).parentNode.tagName.toLowerCase() && (d = S.default.innerWidth || x.default.documentElement.clientWidth || x.default.body.clientWidth, l = S.default.innerHeight || x.default.documentElement.clientHeight || x.default.body.clientHeight), l && d) {
            o.getElement(o.container).style.width = d + "px", o.getElement(o.container).style.height = l + "px", o.node.style.width = "100%", o.node.style.height = "100%", o.isVideo && o.media.setSize && o.media.setSize(d, l);
            for(var u = o.getElement(o.layers).children, c = 0, f = u.length; c < f; c++) u[c].style.width = "100%", u[c].style.height = "100%"
          }
        }
      }, {
        key: "setFillMode",
        value: function() {
          var e = this,
            t = S.default.self !== S.default.top && null !== S.default.frameElement,
            n = function() {
              for(var t = void 0, n = e.getElement(e.container); n;) {
                try {
                  if(w.IS_FIREFOX && "html" === n.tagName.toLowerCase() && S.default.self !== S.default.top && null !== S.default.frameElement) return S.default.frameElement;
                  t = n.parentElement
                } catch (e) {
                  t = n.parentElement
                }
                if(t && P.visible(t)) return t;
                n = t
              }
              return null
            }(),
            o = n ? getComputedStyle(n, null) : getComputedStyle(x.default.body, null);
          "none" !== e.node.style.height && e.node.style.height !== e.height && (e.node.style.height = "auto"), "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width && (e.node.style.maxWidth = "none"), "none" !== e.node.style.maxHeight && e.node.style.maxHeight !== e.height && (e.node.style.maxHeight = "none"), e.node.currentStyle && ("100%" === e.node.currentStyle.height && (e.node.currentStyle.height = "auto"), "100%" === e.node.currentStyle.maxWidth && (e.node.currentStyle.maxWidth = "none"), "100%" === e.node.currentStyle.maxHeight && (e.node.currentStyle.maxHeight = "none")), t || parseFloat(o.width) || (n.style.width = e.media.offsetWidth + "px"), t || parseFloat(o.height) || (n.style.height = e.media.offsetHeight + "px"), o = getComputedStyle(n);
          var i = parseFloat(o.width),
            r = parseFloat(o.height);
          e.setDimensions("100%", "100%");
          var a = e.getElement(e.container).querySelector("." + e.options.classPrefix + "poster>img");
          a && (a.style.display = "");
          for(var s = e.getElement(e.container).querySelectorAll("object, embed, iframe, video"), l = e.height, d = e.width, u = i, c = l * i / d, f = d * r / l, p = r, m = i < f == !1, h = m ? Math.floor(u) : Math.floor(f), v = m ? Math.floor(c) : Math.floor(p), g = m ? i + "px" : h + "px", y = m ? v + "px" : r + "px", E = 0, b = s.length; E < b; E++) s[E].style.height = y, s[E].style.width = g, e.media.setSize && e.media.setSize(g, y), s[E].style.marginLeft = Math.floor((i - h) / 2) + "px", s[E].style.marginTop = 0
        }
      }, {
        key: "setDimensions",
        value: function(e, t) {
          var n = this;
          e = (0, m.isString)(e) && -1 < e.indexOf("%") ? e : parseFloat(e) + "px", t = (0, m.isString)(t) && -1 < t.indexOf("%") ? t : parseFloat(t) + "px", n.getElement(n.container).style.width = e, n.getElement(n.container).style.height = t;
          for(var o = n.getElement(n.layers).children, i = 0, r = o.length; i < r; i++) o[i].style.width = e, o[i].style.height = t
        }
      }, {
        key: "setControlsSize",
        value: function() {
          var t = this;
          if(P.visible(t.getElement(t.container)))
            if(t.rail && P.visible(t.rail)) {
              for(var e = t.total ? getComputedStyle(t.total, null) : null, n = e ? parseFloat(e.marginLeft) + parseFloat(e.marginRight) : 0, o = getComputedStyle(t.rail), i = parseFloat(o.marginLeft) + parseFloat(o.marginRight), r = 0, a = P.siblings(t.rail, function(e) {
                  return e !== t.rail
                }), s = a.length, l = 0; l < s; l++) r += a[l].offsetWidth;
              r += n + (0 === n ? 2 * i : i) + 1, t.getElement(t.container).style.minWidth = r + "px";
              var d = (0, m.createEvent)("controlsresize", t.getElement(t.container));
              t.getElement(t.container).dispatchEvent(d)
            } else {
              for(var u = t.getElement(t.controls).children, c = 0, f = 0, p = u.length; f < p; f++) c += u[f].offsetWidth;
              t.getElement(t.container).style.minWidth = c + "px"
            }
        }
      }, {
        key: "addControlElement",
        value: function(e, t) {
          var n = this;
          if(void 0 !== n.featurePosition[t]) {
            var o = n.getElement(n.controls).children[n.featurePosition[t] - 1];
            o.parentNode.insertBefore(e, o.nextSibling)
          } else {
            n.getElement(n.controls).appendChild(e);
            for(var i = n.getElement(n.controls).children, r = 0, a = i.length; r < a; r++)
              if(e === i[r]) {
                n.featurePosition[t] = r;
                break
              }
          }
        }
      }, {
        key: "createIframeLayer",
        value: function() {
          var t = this;
          if(t.isVideo && null !== t.media.rendererName && -1 < t.media.rendererName.indexOf("iframe") && !x.default.getElementById(t.media.id + "-iframe-overlay")) {
            var e = x.default.createElement("div"),
              n = x.default.getElementById(t.media.id + "_" + t.media.rendererName);
            e.id = t.media.id + "-iframe-overlay", e.className = t.options.classPrefix + "iframe-overlay", e.addEventListener("click", function(e) {
              t.options.clickToPlayPause && (t.paused ? t.play() : t.pause(), e.preventDefault(), e.stopPropagation())
            }), n.parentNode.insertBefore(e, n)
          }
        }
      }, {
        key: "resetSize",
        value: function() {
          var e = this;
          setTimeout(function() {
            e.setPlayerSize(e.width, e.height), e.setControlsSize()
          }, 50)
        }
      }, {
        key: "setPoster",
        value: function(e) {
          var t = this;
          if(t.getElement(t.container)) {
            var n = t.getElement(t.container).querySelector("." + t.options.classPrefix + "poster");
            n || ((n = x.default.createElement("div")).className = t.options.classPrefix + "poster " + t.options.classPrefix + "layer", t.getElement(t.layers).appendChild(n));
            var o = n.querySelector("img");
            !o && e && ((o = x.default.createElement("img")).className = t.options.classPrefix + "poster-img", o.width = "100%", o.height = "100%", n.style.display = "", n.appendChild(o)), e ? (o.setAttribute("src", e), n.style.backgroundImage = 'url("' + e + '")', n.style.display = "") : o ? (n.style.backgroundImage = "none", n.style.display = "none", o.remove()) : n.style.display = "none"
          } else(w.IS_IPAD && t.options.iPadUseNativeControls || w.IS_IPHONE && t.options.iPhoneUseNativeControls || w.IS_ANDROID && t.options.AndroidUseNativeControls) && (t.media.originalNode.poster = e)
        }
      }, {
        key: "changeSkin",
        value: function(e) {
          var t = this;
          t.getElement(t.container).className = t.options.classPrefix + "container " + e, t.setPlayerSize(t.width, t.height), t.setControlsSize()
        }
      }, {
        key: "globalBind",
        value: function(e, n) {
          var o = this.node ? this.node.ownerDocument : x.default;
          if((e = (0, m.splitEvents)(e, this.id)).d)
            for(var t = e.d.split(" "), i = 0, r = t.length; i < r; i++) t[i].split(".").reduce(function(e, t) {
              return o.addEventListener(t, n, !1), t
            }, "");
          if(e.w)
            for(var a = e.w.split(" "), s = 0, l = a.length; s < l; s++) a[s].split(".").reduce(function(e, t) {
              return S.default.addEventListener(t, n, !1), t
            }, "")
        }
      }, {
        key: "globalUnbind",
        value: function(e, n) {
          var o = this.node ? this.node.ownerDocument : x.default;
          if((e = (0, m.splitEvents)(e, this.id)).d)
            for(var t = e.d.split(" "), i = 0, r = t.length; i < r; i++) t[i].split(".").reduce(function(e, t) {
              return o.removeEventListener(t, n, !1), t
            }, "");
          if(e.w)
            for(var a = e.w.split(" "), s = 0, l = a.length; s < l; s++) a[s].split(".").reduce(function(e, t) {
              return S.default.removeEventListener(t, n, !1), t
            }, "")
        }
      }, {
        key: "buildfeatures",
        value: function(e, t, n, o) {
          for(var i = 0, r = this.options.features.length; i < r; i++) {
            var a = this.options.features[i];
            if(this["build" + a]) try {
              this["build" + a](e, t, n, o)
            } catch (e) {
              console.error("error building " + a, e)
            }
          }
        }
      }, {
        key: "buildposter",
        value: function(e, t, n, o) {
          var i = this,
            r = x.default.createElement("div");
          r.className = i.options.classPrefix + "poster " + i.options.classPrefix + "layer", n.appendChild(r);
          var a = o.originalNode.getAttribute("poster");
          "" !== e.options.poster && (a && w.IS_IOS && o.originalNode.removeAttribute("poster"), a = e.options.poster), a ? i.setPoster(a) : null !== i.media.renderer && "function" == typeof i.media.renderer.getPosterUrl ? i.setPoster(i.media.renderer.getPosterUrl()) : r.style.display = "none", o.addEventListener("play", function() {
            r.style.display = "none"
          }), o.addEventListener("playing", function() {
            r.style.display = "none"
          }), e.options.showPosterWhenEnded && e.options.autoRewind && o.addEventListener("ended", function() {
            r.style.display = ""
          }), o.addEventListener("error", function() {
            r.style.display = "none"
          }), e.options.showPosterWhenPaused && o.addEventListener("pause", function() {
            e.ended || (r.style.display = "")
          })
        }
      }, {
        key: "buildoverlays",
        value: function(t, e, n, o) {
          if(t.isVideo) {
            var i = this,
              r = x.default.createElement("div"),
              a = x.default.createElement("div"),
              s = x.default.createElement("div");
            r.style.display = "none", r.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer", r.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-loading"><span class="' + i.options.classPrefix + 'overlay-loading-bg-img"></span></div>', n.appendChild(r), a.style.display = "none", a.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer", a.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-error"></div>', n.appendChild(a), s.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer " + i.options.classPrefix + "overlay-play", s.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-button" role="button" tabindex="0" aria-label="' + u.default.t("mejs.play") + '" aria-pressed="false"></div>', s.addEventListener("click", function() {
              if(i.options.clickToPlayPause) {
                var e = i.getElement(i.container).querySelector("." + i.options.classPrefix + "overlay-button"),
                  t = e.getAttribute("aria-pressed");
                i.paused ? i.play() : i.pause(), e.setAttribute("aria-pressed", !!t), i.getElement(i.container).focus()
              }
            }), s.addEventListener("keydown", function(e) {
              var t = e.keyCode || e.which || 0;
              if(13 === t || w.IS_FIREFOX && 32 === t) {
                var n = (0, m.createEvent)("click", s);
                return s.dispatchEvent(n), !1
              }
            }), n.appendChild(s), null !== i.media.rendererName && (/(youtube|facebook)/i.test(i.media.rendererName) && !(i.media.originalNode.getAttribute("poster") || t.options.poster || "function" == typeof i.media.renderer.getPosterUrl && i.media.renderer.getPosterUrl()) || w.IS_STOCK_ANDROID || i.media.originalNode.getAttribute("autoplay")) && (s.style.display = "none");
            var l = !1;
            o.addEventListener("play", function() {
              s.style.display = "none", r.style.display = "none", a.style.display = "none", l = !1
            }), o.addEventListener("playing", function() {
              s.style.display = "none", r.style.display = "none", a.style.display = "none", l = !1
            }), o.addEventListener("seeking", function() {
              s.style.display = "none", r.style.display = "", l = !1
            }), o.addEventListener("seeked", function() {
              s.style.display = i.paused && !w.IS_STOCK_ANDROID ? "" : "none", r.style.display = "none", l = !1
            }), o.addEventListener("pause", function() {
              r.style.display = "none", w.IS_STOCK_ANDROID || l || (s.style.display = ""), l = !1
            }), o.addEventListener("waiting", function() {
              r.style.display = "", l = !1
            }), o.addEventListener("loadeddata", function() {
              r.style.display = "", w.IS_ANDROID && (o.canplayTimeout = setTimeout(function() {
                if(x.default.createEvent) {
                  var e = x.default.createEvent("HTMLEvents");
                  return e.initEvent("canplay", !0, !0), o.dispatchEvent(e)
                }
              }, 300)), l = !1
            }), o.addEventListener("canplay", function() {
              r.style.display = "none", clearTimeout(o.canplayTimeout), l = !1
            }), o.addEventListener("error", function(e) {
              i._handleError(e, i.media, i.node), r.style.display = "none", s.style.display = "none", l = !0
            }), o.addEventListener("loadedmetadata", function() {
              i.controlsEnabled || i.enableControls()
            }), o.addEventListener("keydown", function(e) {
              i.onkeydown(t, o, e), l = !1
            })
          }
        }
      }, {
        key: "buildkeyboard",
        value: function(o, e, t, i) {
          var r = this;
          r.getElement(r.container).addEventListener("keydown", function() {
            r.keyboardAction = !0
          }), r.globalKeydownCallback = function(e) {
            var t = x.default.activeElement.closest("." + r.options.classPrefix + "container"),
              n = r.media.closest("." + r.options.classPrefix + "container");
            return r.hasFocus = !(!t || !n || t.id !== n.id), r.onkeydown(o, i, e)
          }, r.globalClickCallback = function(e) {
            r.hasFocus = !!e.target.closest("." + r.options.classPrefix + "container")
          }, r.globalBind("keydown", r.globalKeydownCallback), r.globalBind("click", r.globalClickCallback)
        }
      }, {
        key: "onkeydown",
        value: function(e, t, n) {
          if(e.hasFocus && e.options.enableKeyboard)
            for(var o = 0, i = e.options.keyActions.length; o < i; o++)
              for(var r = e.options.keyActions[o], a = 0, s = r.keys.length; a < s; a++)
                if(n.keyCode === r.keys[a]) return r.action(e, t, n.keyCode, n), n.preventDefault(), void n.stopPropagation();
          return !0
        }
      }, {
        key: "play",
        value: function() {
          this.proxy.play()
        }
      }, {
        key: "pause",
        value: function() {
          this.proxy.pause()
        }
      }, {
        key: "load",
        value: function() {
          this.proxy.load()
        }
      }, {
        key: "setCurrentTime",
        value: function(e) {
          this.proxy.setCurrentTime(e)
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.proxy.currentTime
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.proxy.duration
        }
      }, {
        key: "setVolume",
        value: function(e) {
          this.proxy.volume = e
        }
      }, {
        key: "getVolume",
        value: function() {
          return this.proxy.getVolume()
        }
      }, {
        key: "setMuted",
        value: function(e) {
          this.proxy.setMuted(e)
        }
      }, {
        key: "setSrc",
        value: function(e) {
          this.controlsEnabled || this.enableControls(), this.proxy.setSrc(e)
        }
      }, {
        key: "getSrc",
        value: function() {
          return this.proxy.getSrc()
        }
      }, {
        key: "canPlayType",
        value: function(e) {
          return this.proxy.canPlayType(e)
        }
      }, {
        key: "remove",
        value: function() {
          var l = this,
            d = l.media.rendererName,
            u = l.media.originalNode.src;
          for(var e in l.options.features) {
            var t = l.options.features[e];
            if(l["clean" + t]) try {
              l["clean" + t](l, l.getElement(l.layers), l.getElement(l.controls), l.media)
            } catch (e) {
              console.error("error cleaning " + t, e)
            }
          }
          var n = l.node.getAttribute("width"),
            o = l.node.getAttribute("height");
          (n ? -1 === n.indexOf("%") && (n += "px") : n = "auto", o ? -1 === o.indexOf("%") && (o += "px") : o = "auto", l.node.style.width = n, l.node.style.height = o, l.setPlayerSize(0, 0), l.isDynamic ? l.getElement(l.container).parentNode.insertBefore(l.node, l.getElement(l.container)) : function() {
            l.node.setAttribute("controls", !0), l.node.setAttribute("id", l.node.getAttribute("id").replace("_" + d, "").replace("_from_mejs", ""));
            var e = l.getElement(l.container).querySelector("." + l.options.classPrefix + "poster>img");
            (e && l.node.setAttribute("poster", e.src), delete l.node.autoplay, l.node.setAttribute("src", ""), "" !== l.media.canPlayType((0, p.getTypeFromFile)(u)) && l.node.setAttribute("src", u), d && -1 < d.indexOf("iframe")) && x.default.getElementById(l.media.id + "-iframe-overlay").remove();
            var i = l.node.cloneNode();
            if(i.style.display = "", l.getElement(l.container).parentNode.insertBefore(i, l.getElement(l.container)), l.node.remove(), l.mediaFiles)
              for(var t = 0, n = l.mediaFiles.length; t < n; t++) {
                var o = x.default.createElement("source");
                o.setAttribute("src", l.mediaFiles[t].src), o.setAttribute("type", l.mediaFiles[t].type), i.appendChild(o)
              }
            if(l.trackFiles)
              for(var r = function(e, t) {
                  var n = l.trackFiles[e],
                    o = x.default.createElement("track");
                  o.kind = n.kind, o.label = n.label, o.srclang = n.srclang, o.src = n.src, i.appendChild(o), o.addEventListener("load", function() {
                    this.mode = "showing", i.textTracks[e].mode = "showing"
                  })
                }, a = 0, s = l.trackFiles.length; a < s; a++) r(a);
            delete l.node, delete l.mediaFiles, delete l.trackFiles
          }(), l.media.renderer && "function" == typeof l.media.renderer.destroy && l.media.renderer.destroy(), delete f.default.players[l.id], "object" === i(l.getElement(l.container))) && (l.getElement(l.container).parentNode.querySelector("." + l.options.classPrefix + "offscreen").remove(), l.getElement(l.container).remove());
          l.globalUnbind("resize", l.globalResizeCallback), l.globalUnbind("keydown", l.globalKeydownCallback), l.globalUnbind("click", l.globalClickCallback), delete l.media.player
        }
      }, {
        key: "paused",
        get: function() {
          return this.proxy.paused
        }
      }, {
        key: "muted",
        get: function() {
          return this.proxy.muted
        },
        set: function(e) {
          this.setMuted(e)
        }
      }, {
        key: "ended",
        get: function() {
          return this.proxy.ended
        }
      }, {
        key: "readyState",
        get: function() {
          return this.proxy.readyState
        }
      }, {
        key: "currentTime",
        set: function(e) {
          this.setCurrentTime(e)
        },
        get: function() {
          return this.getCurrentTime()
        }
      }, {
        key: "duration",
        get: function() {
          return this.getDuration()
        }
      }, {
        key: "volume",
        set: function(e) {
          this.setVolume(e)
        },
        get: function() {
          return this.getVolume()
        }
      }, {
        key: "src",
        set: function(e) {
          this.setSrc(e)
        },
        get: function() {
          return this.getSrc()
        }
      }]), r
    }();
    S.default.MediaElementPlayer = l, f.default.MediaElementPlayer = l, n.default = l
  }, {
    17: 17,
    2: 2,
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    30: 30,
    5: 5,
    6: 6,
    7: 7
  }],
  17: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o, i = function() {
        function o(e, t) {
          for(var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
          }
        }
        return function(e, t, n) {
          return t && o(e.prototype, t), n && o(e, n), e
        }
      }(),
      r = e(3),
      a = (o = r) && o.__esModule ? o : {
        default: o
      };
    var s = function() {
      function e(t) {
        return function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.media = t.media, this.isVideo = t.isVideo, this.classPrefix = t.options.classPrefix, this.createIframeLayer = function() {
          return t.createIframeLayer()
        }, this.setPoster = function(e) {
          return t.setPoster(e)
        }, this
      }
      return i(e, [{
        key: "play",
        value: function() {
          this.media.play()
        }
      }, {
        key: "pause",
        value: function() {
          this.media.pause()
        }
      }, {
        key: "load",
        value: function() {
          this.isLoaded || this.media.load(), this.isLoaded = !0
        }
      }, {
        key: "setCurrentTime",
        value: function(e) {
          this.media.setCurrentTime(e)
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.media.currentTime
        }
      }, {
        key: "getDuration",
        value: function() {
          var e = this.media.getDuration();
          return e === 1 / 0 && this.media.seekable && this.media.seekable.length && (e = this.media.seekable.end(0)), e
        }
      }, {
        key: "setVolume",
        value: function(e) {
          this.media.setVolume(e)
        }
      }, {
        key: "getVolume",
        value: function() {
          return this.media.getVolume()
        }
      }, {
        key: "setMuted",
        value: function(e) {
          this.media.setMuted(e)
        }
      }, {
        key: "setSrc",
        value: function(e) {
          var t = this,
            n = document.getElementById(t.media.id + "-iframe-overlay");
          n && n.remove(), t.media.setSrc(e), t.createIframeLayer(), null !== t.media.renderer && "function" == typeof t.media.renderer.getPosterUrl && t.setPoster(t.media.renderer.getPosterUrl())
        }
      }, {
        key: "getSrc",
        value: function() {
          return this.media.getSrc()
        }
      }, {
        key: "canPlayType",
        value: function(e) {
          return this.media.canPlayType(e)
        }
      }, {
        key: "paused",
        get: function() {
          return this.media.paused
        }
      }, {
        key: "muted",
        set: function(e) {
          this.setMuted(e)
        },
        get: function() {
          return this.media.muted
        }
      }, {
        key: "ended",
        get: function() {
          return this.media.ended
        }
      }, {
        key: "readyState",
        get: function() {
          return this.media.readyState
        }
      }, {
        key: "currentTime",
        set: function(e) {
          this.setCurrentTime(e)
        },
        get: function() {
          return this.getCurrentTime()
        }
      }, {
        key: "duration",
        get: function() {
          return this.getDuration()
        }
      }, {
        key: "remainingTime",
        get: function() {
          return this.getDuration() - this.currentTime()
        }
      }, {
        key: "volume",
        set: function(e) {
          this.setVolume(e)
        },
        get: function() {
          return this.getVolume()
        }
      }, {
        key: "src",
        set: function(e) {
          this.setSrc(e)
        },
        get: function() {
          return this.getSrc()
        }
      }]), e
    }();
    n.default = s, a.default.DefaultPlayer = s
  }, {
    3: 3
  }],
  18: [function(e, t, n) {
    "use strict";
    a(e(3));
    var o, i = a(e(7)),
      r = a(e(16));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    "undefined" != typeof jQuery ? i.default.$ = jQuery : "undefined" != typeof Zepto ? i.default.$ = Zepto : "undefined" != typeof ender && (i.default.$ = ender), void 0 !== (o = i.default.$) && (o.fn.mediaelementplayer = function(e) {
      return !1 === e ? this.each(function() {
        var e = o(this).data("mediaelementplayer");
        e && e.remove(), o(this).removeData("mediaelementplayer")
      }) : this.each(function() {
        o(this).data("mediaelementplayer", new r.default(this, e))
      }), this
    }, o(document).ready(function() {
      o("." + i.default.MepDefaults.classPrefix + "player").mediaelementplayer()
    }))
  }, {
    16: 16,
    3: 3,
    7: 7
  }],
  19: [function(e, t, n) {
    "use strict";
    var b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      S = a(e(3)),
      x = a(e(7)),
      w = e(8),
      P = e(27),
      o = e(28),
      i = e(25),
      r = e(26);

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var T = {
        promise: null,
        load: function(e) {
          return "undefined" != typeof dashjs ? T.promise = new Promise(function(e) {
            e()
          }).then(function() {
            T._createPlayer(e)
          }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.dashjs.org/latest/dash.all.min.js", T.promise = T.promise || (0, r.loadScript)(e.options.path), T.promise.then(function() {
            T._createPlayer(e)
          })), T.promise
        },
        _createPlayer: function(e) {
          var t = dashjs.MediaPlayer().create();
          return S.default["__ready__" + e.id](t), t
        }
      },
      s = {
        name: "native_dash",
        options: {
          prefix: "native_dash",
          dash: {
            path: "https://cdn.dashjs.org/latest/dash.all.min.js",
            debug: !1,
            drm: {},
            robustnessLevel: ""
          }
        },
        canPlayType: function(e) {
          return i.HAS_MSE && -1 < ["application/dash+xml"].indexOf(e.toLowerCase())
        },
        create: function(s, l, e) {
          var t = s.originalNode,
            r = s.id + "_" + l.prefix,
            a = t.autoplay,
            n = t.children,
            d = null,
            u = null;
          t.removeAttribute("type");
          for(var o = 0, i = n.length; o < i; o++) n[o].removeAttribute("type");
          d = t.cloneNode(!0), l = Object.assign(l, s.options);
          for(var c = x.default.html5media.properties, f = x.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function(e) {
              return "error" !== e
            }), p = function(e) {
              var t = (0, P.createEvent)(e.type, s);
              s.dispatchEvent(t)
            }, m = function(i) {
              var e = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
              d["get" + e] = function() {
                return null !== u ? d[i] : null
              }, d["set" + e] = function(e) {
                if(-1 === x.default.html5media.readOnlyProperties.indexOf(i))
                  if("src" === i) {
                    var t = "object" === (void 0 === e ? "undefined" : b(e)) && e.src ? e.src : e;
                    if(d[i] = t, null !== u) {
                      u.reset();
                      for(var n = 0, o = f.length; n < o; n++) d.removeEventListener(f[n], p);
                      u = T._createPlayer({
                        options: l.dash,
                        id: r
                      }), e && "object" === (void 0 === e ? "undefined" : b(e)) && "object" === b(e.drm) && (u.setProtectionData(e.drm), (0, P.isString)(l.dash.robustnessLevel) && l.dash.robustnessLevel && u.getProtectionController().setRobustnessLevel(l.dash.robustnessLevel)), u.attachSource(t), a && u.play()
                    }
                  } else d[i] = e
              }
            }, h = 0, v = c.length; h < v; h++) m(c[h]);
          if(S.default["__ready__" + r] = function(e) {
              s.dashPlayer = u = e;
              for(var t, n = dashjs.MediaPlayer.events, o = 0, i = f.length; o < i; o++) "loadedmetadata" === (t = f[o]) && (u.initialize(), u.attachView(d), u.setAutoPlay(!1), "object" !== b(l.dash.drm) || x.default.Utils.isObjectEmpty(l.dash.drm) || (u.setProtectionData(l.dash.drm), (0, P.isString)(l.dash.robustnessLevel) && l.dash.robustnessLevel && u.getProtectionController().setRobustnessLevel(l.dash.robustnessLevel)), u.attachSource(d.getSrc())), d.addEventListener(t, p);
              var r = function(e) {
                if("error" === e.type.toLowerCase()) s.generateError(e.message, d.src), console.error(e);
                else {
                  var t = (0, P.createEvent)(e.type, s);
                  t.data = e, s.dispatchEvent(t)
                }
              };
              for(var a in n) n.hasOwnProperty(a) && u.on(n[a], function(e) {
                return r(e)
              })
            }, e && 0 < e.length)
            for(var g = 0, y = e.length; g < y; g++)
              if(w.renderer.renderers[l.prefix].canPlayType(e[g].type)) {
                d.setAttribute("src", e[g].src), void 0 !== e[g].drm && (l.dash.drm = e[g].drm);
                break
              } d.setAttribute("id", r), t.parentNode.insertBefore(d, t), t.autoplay = !1, t.style.display = "none", d.setSize = function(e, t) {
            return d.style.width = e + "px", d.style.height = t + "px", d
          }, d.hide = function() {
            return d.pause(), d.style.display = "none", d
          }, d.show = function() {
            return d.style.display = "", d
          }, d.destroy = function() {
            null !== u && u.reset()
          };
          var E = (0, P.createEvent)("rendererready", d);
          return s.dispatchEvent(E), s.promises.push(T.load({
            options: l.dash,
            id: r
          })), d
        }
      };
    o.typeChecks.push(function(e) {
      return ~e.toLowerCase().indexOf(".mpd") ? "application/dash+xml" : null
    }), w.renderer.add(s)
  }, {
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  20: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.PluginDetector = void 0;
    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      C = o(e(3)),
      k = o(e(2)),
      _ = o(e(7)),
      N = o(e(5)),
      A = e(8),
      L = e(27),
      F = e(25),
      j = e(28);

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var r = n.PluginDetector = {
      plugins: [],
      hasPluginVersion: function(e, t) {
        var n = r.plugins[e];
        return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] === t[0] && n[1] > t[1] || n[0] === t[0] && n[1] === t[1] && n[2] >= t[2]
      },
      addPlugin: function(e, t, n, o, i) {
        r.plugins[e] = r.detectPlugin(t, n, o, i)
      },
      detectPlugin: function(e, t, n, o) {
        var i = [0, 0, 0],
          r = void 0,
          a = void 0;
        if(null !== F.NAV.plugins && void 0 !== F.NAV.plugins && "object" === d(F.NAV.plugins[e])) {
          if((r = F.NAV.plugins[e].description) && (void 0 === F.NAV.mimeTypes || !F.NAV.mimeTypes[t] || F.NAV.mimeTypes[t].enabledPlugin))
            for(var s = 0, l = (i = r.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".")).length; s < l; s++) i[s] = parseInt(i[s].match(/\d+/), 10)
        } else if(void 0 !== C.default.ActiveXObject) try {
          (a = new ActiveXObject(n)) && (i = o(a))
        } catch (e) {}
        return i
      }
    };
    r.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
      var t = [],
        n = e.GetVariable("$version");
      return n && (n = n.split(" ")[1].split(","), t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]), t
    });
    var i = {
      create: function(e, t, n) {
        var r = {},
          o = !1;
        r.options = t, r.id = e.id + "_" + r.options.prefix, r.mediaElement = e, r.flashState = {}, r.flashApi = null, r.flashApiStack = [];
        for(var i = _.default.html5media.properties, a = function(t) {
            r.flashState[t] = null;
            var e = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
            r["get" + e] = function() {
              if(null !== r.flashApi) {
                if("function" == typeof r.flashApi["get_" + t]) {
                  var e = r.flashApi["get_" + t]();
                  return "buffered" === t ? {
                    start: function() {
                      return 0
                    },
                    end: function() {
                      return e
                    },
                    length: 1
                  } : e
                }
                return null
              }
              return null
            }, r["set" + e] = function(e) {
              if("src" === t && (e = (0, j.absolutizeUrl)(e)), null !== r.flashApi && void 0 !== r.flashApi["set_" + t]) try {
                r.flashApi["set_" + t](e)
              } catch (e) {} else r.flashApiStack.push({
                type: "set",
                propName: t,
                value: e
              })
            }
          }, s = 0, l = i.length; s < l; s++) a(i[s]);
        var d = _.default.html5media.methods,
          u = function(e) {
            r[e] = function() {
              if(o)
                if(null !== r.flashApi) {
                  if(r.flashApi["fire_" + e]) try {
                    r.flashApi["fire_" + e]()
                  } catch (e) {}
                } else r.flashApiStack.push({
                  type: "call",
                  methodName: e
                })
            }
          };
        d.push("stop");
        for(var c = 0, f = d.length; c < f; c++) u(d[c]);
        for(var p = ["rendererready"], m = 0, h = p.length; m < h; m++) {
          var v = (0, L.createEvent)(p[m], r);
          e.dispatchEvent(v)
        }
        C.default["__ready__" + r.id] = function() {
          if(r.flashReady = !0, r.flashApi = k.default.getElementById("__" + r.id), r.flashApiStack.length)
            for(var e = 0, t = r.flashApiStack.length; e < t; e++) {
              var n = r.flashApiStack[e];
              if("set" === n.type) {
                var o = n.propName,
                  i = "" + o.substring(0, 1).toUpperCase() + o.substring(1);
                r["set" + i](n.value)
              } else "call" === n.type && r[n.methodName]()
            }
        }, C.default["__event__" + r.id] = function(e, t) {
          var n = (0, L.createEvent)(e, r);
          if(t) try {
            n.data = JSON.parse(t), n.details.data = JSON.parse(t)
          } catch (e) {
            n.message = t
          }
          r.mediaElement.dispatchEvent(n)
        }, r.flashWrapper = k.default.createElement("div"), -1 === ["always", "sameDomain"].indexOf(r.options.shimScriptAccess) && (r.options.shimScriptAccess = "sameDomain");
        var g = e.originalNode.autoplay,
          y = ["uid=" + r.id, "autoplay=" + g, "allowScriptAccess=" + r.options.shimScriptAccess, "preload=" + (e.originalNode.getAttribute("preload") || "")],
          E = null !== e.originalNode && "video" === e.originalNode.tagName.toLowerCase(),
          b = E ? e.originalNode.height : 1,
          S = E ? e.originalNode.width : 1;
        e.originalNode.getAttribute("src") && y.push("src=" + e.originalNode.getAttribute("src")), !0 === r.options.enablePseudoStreaming && (y.push("pseudostreamstart=" + r.options.pseudoStreamingStartQueryParam), y.push("pseudostreamtype=" + r.options.pseudoStreamingType)), r.options.streamDelimiter && y.push("streamdelimiter=" + encodeURIComponent(r.options.streamDelimiter)), r.options.proxyType && y.push("proxytype=" + r.options.proxyType), e.appendChild(r.flashWrapper), e.originalNode.style.display = "none";
        var x = [];
        if(F.IS_IE || F.IS_EDGE) {
          var w = k.default.createElement("div");
          r.flashWrapper.appendChild(w), x = F.IS_EDGE ? ['type="application/x-shockwave-flash"', 'data="' + r.options.pluginPath + r.options.filename + '"', 'id="__' + r.id + '"', 'width="' + S + '"', 'height="' + b + "'\""] : ['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', 'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', 'id="__' + r.id + '"', 'width="' + S + '"', 'height="' + b + '"'], E || x.push('style="clip: rect(0 0 0 0); position: absolute;"'), w.outerHTML = "<object " + x.join(" ") + '><param name="movie" value="' + r.options.pluginPath + r.options.filename + "?x=" + new Date + '" /><param name="flashvars" value="' + y.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + r.options.shimScriptAccess + '" /><param name="allowFullScreen" value="true" /><div>' + N.default.t("mejs.install-flash") + "</div></object>"
        } else x = ['id="__' + r.id + '"', 'name="__' + r.id + '"', 'play="true"', 'loop="false"', 'quality="high"', 'bgcolor="#000000"', 'wmode="transparent"', 'allowScriptAccess="' + r.options.shimScriptAccess + '"', 'allowFullScreen="true"', 'type="application/x-shockwave-flash"', 'pluginspage="//www.macromedia.com/go/getflashplayer"', 'src="' + r.options.pluginPath + r.options.filename + '"', 'flashvars="' + y.join("&") + '"'], E ? (x.push('width="' + S + '"'), x.push('height="' + b + '"')) : x.push('style="position: fixed; left: -9999em; top: -9999em;"'), r.flashWrapper.innerHTML = "<embed " + x.join(" ") + ">";
        if(r.flashNode = r.flashWrapper.lastChild, r.hide = function() {
            o = !1, E && (r.flashNode.style.display = "none")
          }, r.show = function() {
            o = !0, E && (r.flashNode.style.display = "")
          }, r.setSize = function(e, t) {
            r.flashNode.style.width = e + "px", r.flashNode.style.height = t + "px", null !== r.flashApi && "function" == typeof r.flashApi.fire_setSize && r.flashApi.fire_setSize(e, t)
          }, r.destroy = function() {
            r.flashNode.remove()
          }, n && 0 < n.length)
          for(var P = 0, T = n.length; P < T; P++)
            if(A.renderer.renderers[t.prefix].canPlayType(n[P].type)) {
              r.setSrc(n[P].src);
              break
            } return r
      }
    };
    if(r.hasPluginVersion("flash", [10, 0, 0])) {
      j.typeChecks.push(function(e) {
        return (e = e.toLowerCase()).startsWith("rtmp") ? ~e.indexOf(".mp3") ? "audio/rtmp" : "video/rtmp" : /\.og(a|g)/i.test(e) ? "audio/ogg" : ~e.indexOf(".m3u8") ? "application/x-mpegURL" : ~e.indexOf(".mpd") ? "application/dash+xml" : ~e.indexOf(".flv") ? "video/flv" : null
      });
      var a = {
        name: "flash_video",
        options: {
          prefix: "flash_video",
          filename: "mediaelement-flash-video.swf",
          enablePseudoStreaming: !1,
          pseudoStreamingStartQueryParam: "start",
          pseudoStreamingType: "byte",
          proxyType: "",
          streamDelimiter: ""
        },
        canPlayType: function(e) {
          return ~["video/mp4", "video/rtmp", "audio/rtmp", "rtmp/mp4", "audio/mp4", "video/flv", "video/x-flv"].indexOf(e.toLowerCase())
        },
        create: i.create
      };
      A.renderer.add(a);
      var s = {
        name: "flash_hls",
        options: {
          prefix: "flash_hls",
          filename: "mediaelement-flash-video-hls.swf"
        },
        canPlayType: function(e) {
          return ~["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase())
        },
        create: i.create
      };
      A.renderer.add(s);
      var l = {
        name: "flash_dash",
        options: {
          prefix: "flash_dash",
          filename: "mediaelement-flash-video-mdash.swf"
        },
        canPlayType: function(e) {
          return ~["application/dash+xml"].indexOf(e.toLowerCase())
        },
        create: i.create
      };
      A.renderer.add(l);
      var u = {
        name: "flash_audio",
        options: {
          prefix: "flash_audio",
          filename: "mediaelement-flash-audio.swf"
        },
        canPlayType: function(e) {
          return ~["audio/mp3"].indexOf(e.toLowerCase())
        },
        create: i.create
      };
      A.renderer.add(u);
      var c = {
        name: "flash_audio_ogg",
        options: {
          prefix: "flash_audio_ogg",
          filename: "mediaelement-flash-audio-ogg.swf"
        },
        canPlayType: function(e) {
          return ~["audio/ogg", "audio/oga", "audio/ogv"].indexOf(e.toLowerCase())
        },
        create: i.create
      };
      A.renderer.add(c)
    }
  }, {
    2: 2,
    25: 25,
    27: 27,
    28: 28,
    3: 3,
    5: 5,
    7: 7,
    8: 8
  }],
  21: [function(e, t, n) {
    "use strict";
    var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      E = a(e(3)),
      b = a(e(7)),
      S = e(8),
      x = e(27),
      o = e(25),
      i = e(28),
      r = e(26);

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var w = {
        promise: null,
        load: function(e) {
          return "undefined" != typeof flvjs ? w.promise = new Promise(function(e) {
            e()
          }).then(function() {
            w._createPlayer(e)
          }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.jsdelivr.net/npm/flv.js@latest", w.promise = w.promise || (0, r.loadScript)(e.options.path), w.promise.then(function() {
            w._createPlayer(e)
          })), w.promise
        },
        _createPlayer: function(e) {
          flvjs.LoggingControl.enableDebug = e.options.debug, flvjs.LoggingControl.enableVerbose = e.options.debug;
          var t = flvjs.createPlayer(e.options, e.configs);
          return E.default["__ready__" + e.id](t), t
        }
      },
      s = {
        name: "native_flv",
        options: {
          prefix: "native_flv",
          flv: {
            path: "https://cdn.jsdelivr.net/npm/flv.js@latest",
            cors: !0,
            debug: !1
          }
        },
        canPlayType: function(e) {
          return o.HAS_MSE && -1 < ["video/x-flv", "video/flv"].indexOf(e.toLowerCase())
        },
        create: function(s, a, e) {
          var t = s.originalNode,
            l = s.id + "_" + a.prefix,
            d = null,
            u = null;
          d = t.cloneNode(!0), a = Object.assign(a, s.options);
          for(var n = b.default.html5media.properties, c = b.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function(e) {
              return "error" !== e
            }), f = function(e) {
              var t = (0, x.createEvent)(e.type, s);
              s.dispatchEvent(t)
            }, o = function(r) {
              var e = "" + r.substring(0, 1).toUpperCase() + r.substring(1);
              d["get" + e] = function() {
                return null !== u ? d[r] : null
              }, d["set" + e] = function(e) {
                if(-1 === b.default.html5media.readOnlyProperties.indexOf(r))
                  if("src" === r) {
                    if(d[r] = "object" === (void 0 === e ? "undefined" : y(e)) && e.src ? e.src : e, null !== u) {
                      var t = {
                        type: "flv"
                      };
                      t.url = e, t.cors = a.flv.cors, t.debug = a.flv.debug, t.path = a.flv.path;
                      var n = a.flv.configs;
                      u.destroy();
                      for(var o = 0, i = c.length; o < i; o++) d.removeEventListener(c[o], f);
                      (u = w._createPlayer({
                        options: t,
                        configs: n,
                        id: l
                      })).attachMediaElement(d), u.load()
                    }
                  } else d[r] = e
              }
            }, i = 0, r = n.length; i < r; i++) o(n[i]);
          if(E.default["__ready__" + l] = function(e) {
              s.flvPlayer = u = e;
              for(var t, i = flvjs.Events, n = 0, o = c.length; n < o; n++) "loadedmetadata" === (t = c[n]) && (u.unload(), u.detachMediaElement(), u.attachMediaElement(d), u.load()), d.addEventListener(t, f);
              var r = function(o) {
                i.hasOwnProperty(o) && u.on(i[o], function() {
                  for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                  return function(e, t) {
                    if("error" === e) {
                      var n = t[0] + ": " + t[1] + " " + t[2].msg;
                      s.generateError(n, d.src)
                    } else {
                      var o = (0, x.createEvent)(e, s);
                      o.data = t, s.dispatchEvent(o)
                    }
                  }(i[o], t)
                })
              };
              for(var a in i) r(a)
            }, e && 0 < e.length)
            for(var p = 0, m = e.length; p < m; p++)
              if(S.renderer.renderers[a.prefix].canPlayType(e[p].type)) {
                d.setAttribute("src", e[p].src);
                break
              } d.setAttribute("id", l), t.parentNode.insertBefore(d, t), t.autoplay = !1, t.style.display = "none";
          var h = {
            type: "flv"
          };
          h.url = d.src, h.cors = a.flv.cors, h.debug = a.flv.debug, h.path = a.flv.path;
          var v = a.flv.configs;
          d.setSize = function(e, t) {
            return d.style.width = e + "px", d.style.height = t + "px", d
          }, d.hide = function() {
            return null !== u && u.pause(), d.style.display = "none", d
          }, d.show = function() {
            return d.style.display = "", d
          }, d.destroy = function() {
            null !== u && u.destroy()
          };
          var g = (0, x.createEvent)("rendererready", d);
          return s.dispatchEvent(g), s.promises.push(w.load({
            options: h,
            configs: v,
            id: l
          })), d
        }
      };
    i.typeChecks.push(function(e) {
      return ~e.toLowerCase().indexOf(".flv") ? "video/flv" : null
    }), S.renderer.add(s)
  }, {
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  22: [function(e, t, n) {
    "use strict";
    var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      E = a(e(3)),
      b = a(e(7)),
      S = e(8),
      x = e(27),
      o = e(25),
      i = e(28),
      r = e(26);

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var w = {
        promise: null,
        load: function(e) {
          return "undefined" != typeof Hls ? w.promise = new Promise(function(e) {
            e()
          }).then(function() {
            w._createPlayer(e)
          }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.jsdelivr.net/npm/hls.js@latest", w.promise = w.promise || (0, r.loadScript)(e.options.path), w.promise.then(function() {
            w._createPlayer(e)
          })), w.promise
        },
        _createPlayer: function(e) {
          var t = new Hls(e.options);
          return E.default["__ready__" + e.id](t), t
        }
      },
      s = {
        name: "native_hls",
        options: {
          prefix: "native_hls",
          hls: {
            path: "https://cdn.jsdelivr.net/npm/hls.js@latest",
            autoStartLoad: !1,
            debug: !1
          }
        },
        canPlayType: function(e) {
          return o.HAS_MSE && -1 < ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase())
        },
        create: function(d, i, u) {
          var e = d.originalNode,
            r = d.id + "_" + i.prefix,
            t = e.getAttribute("preload"),
            n = e.autoplay,
            c = null,
            f = null,
            p = 0,
            m = u.length;
          f = e.cloneNode(!0), (i = Object.assign(i, d.options)).hls.autoStartLoad = t && "none" !== t || n;
          for(var o = b.default.html5media.properties, h = b.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function(e) {
              return "error" !== e
            }), v = function(e) {
              var t = (0, x.createEvent)(e.type, d);
              d.dispatchEvent(t)
            }, a = function(o) {
              var e = "" + o.substring(0, 1).toUpperCase() + o.substring(1);
              f["get" + e] = function() {
                return null !== c ? f[o] : null
              }, f["set" + e] = function(e) {
                if(-1 === b.default.html5media.readOnlyProperties.indexOf(o))
                  if("src" === o) {
                    if(f[o] = "object" === (void 0 === e ? "undefined" : y(e)) && e.src ? e.src : e, null !== c) {
                      c.destroy();
                      for(var t = 0, n = h.length; t < n; t++) f.removeEventListener(h[t], v);
                      (c = w._createPlayer({
                        options: i.hls,
                        id: r
                      })).loadSource(e), c.attachMedia(f)
                    }
                  } else f[o] = e
              }
            }, s = 0, l = o.length; s < l; s++) a(o[s]);
          if(E.default["__ready__" + r] = function(e) {
              d.hlsPlayer = c = e;
              for(var i = Hls.Events, t = function(e) {
                  if("loadedmetadata" === e) {
                    var t = d.originalNode.src;
                    c.detachMedia(), c.loadSource(t), c.attachMedia(f)
                  }
                  f.addEventListener(e, v)
                }, n = 0, o = h.length; n < o; n++) t(h[n]);
              var s = void 0,
                l = void 0,
                r = function(o) {
                  i.hasOwnProperty(o) && c.on(i[o], function() {
                    for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(e, t) {
                      if("hlsError" === e && (console.warn(t), (t = t[1]).fatal)) switch(t.type) {
                        case "mediaError":
                          var n = (new Date).getTime();
                          if(!s || 3e3 < n - s) s = (new Date).getTime(), c.recoverMediaError();
                          else if(!l || 3e3 < n - l) l = (new Date).getTime(), console.warn("Attempting to swap Audio Codec and recover from media error"), c.swapAudioCodec(), c.recoverMediaError();
                          else {
                            var o = "Cannot recover, last media error recovery failed";
                            d.generateError(o, f.src), console.error(o)
                          }
                          break;
                        case "networkError":
                          if("manifestLoadError" === t.details)
                            if(p < m && void 0 !== u[p + 1]) f.setSrc(u[p++].src), f.load(), f.play();
                            else {
                              var i = "Network error";
                              d.generateError(i, u), console.error(i)
                            }
                          else {
                            var r = "Network error";
                            d.generateError(r, u), console.error(r)
                          }
                          break;
                        default:
                          c.destroy()
                      } else {
                        var a = (0, x.createEvent)(e, d);
                        a.data = t, d.dispatchEvent(a)
                      }
                    }(i[o], t)
                  })
                };
              for(var a in i) r(a)
            }, 0 < m)
            for(; p < m; p++)
              if(S.renderer.renderers[i.prefix].canPlayType(u[p].type)) {
                f.setAttribute("src", u[p].src);
                break
              }
          "auto" === t || n || (f.addEventListener("play", function() {
            null !== c && c.startLoad()
          }), f.addEventListener("pause", function() {
            null !== c && c.stopLoad()
          })), f.setAttribute("id", r), e.parentNode.insertBefore(f, e), e.autoplay = !1, e.style.display = "none", f.setSize = function(e, t) {
            return f.style.width = e + "px", f.style.height = t + "px", f
          }, f.hide = function() {
            return f.pause(), f.style.display = "none", f
          }, f.show = function() {
            return f.style.display = "", f
          }, f.destroy = function() {
            null !== c && (c.stopLoad(), c.destroy())
          };
          var g = (0, x.createEvent)("rendererready", f);
          return d.dispatchEvent(g), d.promises.push(w.load({
            options: i.hls,
            id: r
          })), f
        }
      };
    i.typeChecks.push(function(e) {
      return ~e.toLowerCase().indexOf(".m3u8") ? "application/x-mpegURL" : null
    }), S.renderer.add(s)
  }, {
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  23: [function(e, t, n) {
    "use strict";
    var o = r(e(3)),
      g = r(e(2)),
      y = r(e(7)),
      E = e(8),
      b = e(27),
      i = e(25);

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var a = {
      name: "html5",
      options: {
        prefix: "html5"
      },
      canPlayType: function(e) {
        var t = g.default.createElement("video");
        return i.IS_ANDROID && /\/mp(3|4)$/i.test(e) || ~["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) && i.SUPPORTS_NATIVE_HLS ? "yes" : t.canPlayType ? t.canPlayType(e.toLowerCase()).replace(/no/, "") : ""
      },
      create: function(n, e, t) {
        var o = n.id + "_" + e.prefix,
          i = !1,
          r = null;
        void 0 === n.originalNode || null === n.originalNode ? (r = g.default.createElement("audio"), n.appendChild(r)) : r = n.originalNode, r.setAttribute("id", o);
        for(var a = y.default.html5media.properties, s = function(t) {
            var e = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
            r["get" + e] = function() {
              return r[t]
            }, r["set" + e] = function(e) {
              -1 === y.default.html5media.readOnlyProperties.indexOf(t) && (r[t] = e)
            }
          }, l = 0, d = a.length; l < d; l++) s(a[l]);
        for(var u, c = y.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function(e) {
            return "error" !== e
          }), f = 0, p = c.length; f < p; f++) u = c[f], r.addEventListener(u, function(e) {
          if(i) {
            var t = (0, b.createEvent)(e.type, e.target);
            n.dispatchEvent(t)
          }
        });
        r.setSize = function(e, t) {
          return r.style.width = e + "px", r.style.height = t + "px", r
        }, r.hide = function() {
          return i = !1, r.style.display = "none", r
        }, r.show = function() {
          return i = !0, r.style.display = "", r
        };
        var m = 0,
          h = t.length;
        if(0 < h)
          for(; m < h; m++)
            if(E.renderer.renderers[e.prefix].canPlayType(t[m].type)) {
              r.setAttribute("src", t[m].src);
              break
            } r.addEventListener("error", function(e) {
          e && e.target && e.target.error && 4 === e.target.error.code && i && (m < h && void 0 !== t[m + 1] ? (r.src = t[m++].src, r.load(), r.play()) : n.generateError("Media error: Format(s) not supported or source(s) not found", t))
        });
        var v = (0, b.createEvent)("rendererready", r);
        return n.dispatchEvent(v), r
      }
    };
    o.default.HtmlMediaElement = y.default.HtmlMediaElement = a, E.renderer.add(a)
  }, {
    2: 2,
    25: 25,
    27: 27,
    3: 3,
    7: 7,
    8: 8
  }],
  24: [function(e, t, n) {
    "use strict";
    var w = a(e(3)),
      P = a(e(2)),
      T = a(e(7)),
      o = e(8),
      C = e(27),
      i = e(28),
      r = e(26);

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var k = {
        isIframeStarted: !1,
        isIframeLoaded: !1,
        iframeQueue: [],
        enqueueIframe: function(e) {
          k.isLoaded = "undefined" != typeof YT && YT.loaded, k.isLoaded ? k.createIframe(e) : (k.loadIframeApi(), k.iframeQueue.push(e))
        },
        loadIframeApi: function() {
          k.isIframeStarted || ((0, r.loadScript)("https://www.youtube.com/player_api"), k.isIframeStarted = !0)
        },
        iFrameReady: function() {
          for(k.isLoaded = !0, k.isIframeLoaded = !0; 0 < k.iframeQueue.length;) {
            var e = k.iframeQueue.pop();
            k.createIframe(e)
          }
        },
        createIframe: function(e) {
          return new YT.Player(e.containerId, e)
        },
        getYouTubeId: function(e) {
          var t = "";
          return 0 < e.indexOf("?") ? "" === (t = k.getYouTubeIdFromParam(e)) && (t = k.getYouTubeIdFromUrl(e)) : t = k.getYouTubeIdFromUrl(e), (t = t.substring(t.lastIndexOf("/") + 1).split("?"))[0]
        },
        getYouTubeIdFromParam: function(e) {
          if(null == e || !e.trim().length) return null;
          for(var t = e.split("?")[1].split("&"), n = "", o = 0, i = t.length; o < i; o++) {
            var r = t[o].split("=");
            if("v" === r[0]) {
              n = r[1];
              break
            }
          }
          return n
        },
        getYouTubeIdFromUrl: function(e) {
          return null != e && e.trim().length ? (e = e.split("?")[0]).substring(e.lastIndexOf("/") + 1) : null
        },
        getYouTubeNoCookieUrl: function(e) {
          if(null == e || !e.trim().length || -1 === e.indexOf("//www.youtube")) return e;
          var t = e.split("/");
          return t[2] = t[2].replace(".com", "-nocookie.com"), t.join("/")
        }
      },
      s = {
        name: "youtube_iframe",
        options: {
          prefix: "youtube_iframe",
          youtube: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            end: 0,
            loop: 0,
            modestbranding: 0,
            playsinline: 0,
            rel: 0,
            showinfo: 0,
            start: 0,
            iv_load_policy: 3,
            nocookie: !1,
            imageQuality: null
          }
        },
        canPlayType: function(e) {
          return ~["video/youtube", "video/x-youtube"].indexOf(e.toLowerCase())
        },
        create: function(m, n, o) {
          var h = {},
            v = [],
            g = null,
            r = !0,
            a = !1,
            y = null;
          h.options = n, h.id = m.id + "_" + n.prefix, h.mediaElement = m;
          for(var e = T.default.html5media.properties, t = function(i) {
              var e = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
              h["get" + e] = function() {
                if(null !== g) {
                  switch(i) {
                    case "currentTime":
                      return g.getCurrentTime();
                    case "duration":
                      return g.getDuration();
                    case "volume":
                      return g.getVolume() / 100;
                    case "playbackRate":
                      return g.getPlaybackRate();
                    case "paused":
                      return r;
                    case "ended":
                      return a;
                    case "muted":
                      return g.isMuted();
                    case "buffered":
                      var e = g.getVideoLoadedFraction(),
                        t = g.getDuration();
                      return {
                        start: function() {
                          return 0
                        }, end: function() {
                          return e * t
                        }, length: 1
                      };
                    case "src":
                      return g.getVideoUrl();
                    case "readyState":
                      return 4
                  }
                  return null
                }
                return null
              }, h["set" + e] = function(e) {
                if(null !== g) switch(i) {
                  case "src":
                    var t = "string" == typeof e ? e : e[0].src,
                      n = k.getYouTubeId(t);
                    m.originalNode.autoplay ? g.loadVideoById(n) : g.cueVideoById(n);
                    break;
                  case "currentTime":
                    g.seekTo(e);
                    break;
                  case "muted":
                    e ? g.mute() : g.unMute(), setTimeout(function() {
                      var e = (0, C.createEvent)("volumechange", h);
                      m.dispatchEvent(e)
                    }, 50);
                    break;
                  case "volume":
                    e, g.setVolume(100 * e), setTimeout(function() {
                      var e = (0, C.createEvent)("volumechange", h);
                      m.dispatchEvent(e)
                    }, 50);
                    break;
                  case "playbackRate":
                    g.setPlaybackRate(e), setTimeout(function() {
                      var e = (0, C.createEvent)("ratechange", h);
                      m.dispatchEvent(e)
                    }, 50);
                    break;
                  case "readyState":
                    var o = (0, C.createEvent)("canplay", h);
                    m.dispatchEvent(o)
                } else v.push({
                  type: "set",
                  propName: i,
                  value: e
                })
              }
            }, i = 0, s = e.length; i < s; i++) t(e[i]);
          for(var l = T.default.html5media.methods, d = function(e) {
              h[e] = function() {
                if(null !== g) switch(e) {
                  case "play":
                    return r = !1, g.playVideo();
                  case "pause":
                    return r = !0, g.pauseVideo();
                  case "load":
                    return null
                } else v.push({
                  type: "call",
                  methodName: e
                })
              }
            }, u = 0, c = l.length; u < c; u++) d(l[u]);
          var f = P.default.createElement("div");
          f.id = h.id, h.options.youtube.nocookie && (m.originalNode.src = k.getYouTubeNoCookieUrl(o[0].src)), m.originalNode.parentNode.insertBefore(f, m.originalNode), m.originalNode.style.display = "none";
          var p = "audio" === m.originalNode.tagName.toLowerCase(),
            E = p ? "1" : m.originalNode.height,
            b = p ? "1" : m.originalNode.width,
            S = k.getYouTubeId(o[0].src),
            x = {
              id: h.id,
              containerId: f.id,
              videoId: S,
              height: E,
              width: b,
              playerVars: Object.assign({
                controls: 0,
                rel: 0,
                disablekb: 1,
                showinfo: 0,
                modestbranding: 0,
                html5: 1,
                iv_load_policy: 3
              }, h.options.youtube),
              origin: w.default.location.host,
              events: {
                onReady: function(e) {
                  if(m.youTubeApi = g = e.target, m.youTubeState = {
                      paused: !0,
                      ended: !1
                    }, v.length)
                    for(var t = 0, n = v.length; t < n; t++) {
                      var o = v[t];
                      if("set" === o.type) {
                        var i = o.propName,
                          r = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                        h["set" + r](o.value)
                      } else "call" === o.type && h[o.methodName]()
                    }
                  y = g.getIframe(), m.originalNode.muted && g.mute();
                  for(var a = ["mouseover", "mouseout"], s = function(e) {
                      var t = (0, C.createEvent)(e.type, h);
                      m.dispatchEvent(t)
                    }, l = 0, d = a.length; l < d; l++) y.addEventListener(a[l], s, !1);
                  for(var u = ["rendererready", "loadedmetadata", "loadeddata", "canplay"], c = 0, f = u.length; c < f; c++) {
                    var p = (0, C.createEvent)(u[c], h);
                    m.dispatchEvent(p)
                  }
                },
                onStateChange: function(e) {
                  var t = [];
                  switch(e.data) {
                    case -1:
                      t = ["loadedmetadata"], r = !0, a = !1;
                      break;
                    case 0:
                      t = ["ended"], r = !1, a = !h.options.youtube.loop, h.options.youtube.loop || h.stopInterval();
                      break;
                    case 1:
                      t = ["play", "playing"], a = r = !1, h.startInterval();
                      break;
                    case 2:
                      t = ["pause"], r = !0, a = !1, h.stopInterval();
                      break;
                    case 3:
                      t = ["progress"], a = !1;
                      break;
                    case 5:
                      t = ["loadeddata", "loadedmetadata", "canplay"], r = !0, a = !1
                  }
                  for(var n = 0, o = t.length; n < o; n++) {
                    var i = (0, C.createEvent)(t[n], h);
                    m.dispatchEvent(i)
                  }
                },
                onError: function(e) {
                  return function(e) {
                    var t = "";
                    switch(e.data) {
                      case 2:
                        t = "The request contains an invalid parameter value. Verify that video ID has 11 characters and that contains no invalid characters, such as exclamation points or asterisks.";
                        break;
                      case 5:
                        t = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";
                        break;
                      case 100:
                        t = "The video requested was not found. Either video has been removed or has been marked as private.";
                        break;
                      case 101:
                      case 105:
                        t = "The owner of the requested video does not allow it to be played in embedded players.";
                        break;
                      default:
                        t = "Unknown error."
                    }
                    m.generateError("Code " + e.data + ": " + t, o)
                  }(e)
                }
              }
            };
          return (p || m.originalNode.hasAttribute("playsinline")) && (x.playerVars.playsinline = 1), m.originalNode.controls && (x.playerVars.controls = 1), m.originalNode.autoplay && (x.playerVars.autoplay = 1), m.originalNode.loop && (x.playerVars.loop = 1), (x.playerVars.loop && 1 === parseInt(x.playerVars.loop, 10) || -1 < m.originalNode.src.indexOf("loop=")) && !x.playerVars.playlist && -1 === m.originalNode.src.indexOf("playlist=") && (x.playerVars.playlist = k.getYouTubeId(m.originalNode.src)), k.enqueueIframe(x), h.onEvent = function(e, t, n) {
            null != n && (m.youTubeState = n)
          }, h.setSize = function(e, t) {
            null !== g && g.setSize(e, t)
          }, h.hide = function() {
            h.stopInterval(), h.pause(), y && (y.style.display = "none")
          }, h.show = function() {
            y && (y.style.display = "")
          }, h.destroy = function() {
            g.destroy()
          }, h.interval = null, h.startInterval = function() {
            h.interval = setInterval(function() {
              var e = (0, C.createEvent)("timeupdate", h);
              m.dispatchEvent(e)
            }, 250)
          }, h.stopInterval = function() {
            h.interval && clearInterval(h.interval)
          }, h.getPosterUrl = function() {
            var e = n.youtube.imageQuality,
              t = k.getYouTubeId(m.originalNode.src);
            return e && -1 < ["default", "hqdefault", "mqdefault", "sddefault", "maxresdefault"].indexOf(e) && t ? "https://img.youtube.com/vi/" + t + "/" + e + ".jpg" : ""
          }, h
        }
      };
    w.default.onYouTubePlayerAPIReady = function() {
      k.iFrameReady()
    }, i.typeChecks.push(function(e) {
      return /\/\/(www\.youtube|youtu\.?be)/i.test(e) ? "video/x-youtube" : null
    }), o.renderer.add(s)
  }, {
    2: 2,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  25: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.cancelFullScreen = n.requestFullScreen = n.isFullScreen = n.FULLSCREEN_EVENT_NAME = n.HAS_NATIVE_FULLSCREEN_ENABLED = n.HAS_TRUE_NATIVE_FULLSCREEN = n.HAS_IOS_FULLSCREEN = n.HAS_MS_NATIVE_FULLSCREEN = n.HAS_MOZ_NATIVE_FULLSCREEN = n.HAS_WEBKIT_NATIVE_FULLSCREEN = n.HAS_NATIVE_FULLSCREEN = n.SUPPORTS_NATIVE_HLS = n.SUPPORT_PASSIVE_EVENT = n.SUPPORT_POINTER_EVENTS = n.HAS_MSE = n.IS_STOCK_ANDROID = n.IS_SAFARI = n.IS_FIREFOX = n.IS_CHROME = n.IS_EDGE = n.IS_IE = n.IS_ANDROID = n.IS_IOS = n.IS_IPOD = n.IS_IPHONE = n.IS_IPAD = n.UA = n.NAV = void 0;
    var i = a(e(3)),
      r = a(e(2)),
      o = a(e(7));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    for(var s = n.NAV = i.default.navigator, l = n.UA = s.userAgent.toLowerCase(), d = n.IS_IPAD = /ipad/i.test(l) && !i.default.MSStream, u = n.IS_IPHONE = /iphone/i.test(l) && !i.default.MSStream, c = n.IS_IPOD = /ipod/i.test(l) && !i.default.MSStream, f = (n.IS_IOS = /ipad|iphone|ipod/i.test(l) && !i.default.MSStream, n.IS_ANDROID = /android/i.test(l)), p = n.IS_IE = /(trident|microsoft)/i.test(s.appName), m = (n.IS_EDGE = "msLaunchUri" in s && !("documentMode" in r.default)), h = n.IS_CHROME = /chrome/i.test(l), v = n.IS_FIREFOX = /firefox/i.test(l), g = n.IS_SAFARI = /safari/i.test(l) && !h, y = n.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(l), E = (n.HAS_MSE = "MediaSource" in i.default), b = n.SUPPORT_POINTER_EVENTS = function() {
        var e = r.default.createElement("x"),
          t = r.default.documentElement,
          n = i.default.getComputedStyle;
        if(!("pointerEvents" in e.style)) return !1;
        e.style.pointerEvents = "auto", e.style.pointerEvents = "x", t.appendChild(e);
        var o = n && "auto" === (n(e, "") || {}).pointerEvents;
        return e.remove(), !!o
      }(), S = n.SUPPORT_PASSIVE_EVENT = function() {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function() {
              e = !0
            }
          });
          i.default.addEventListener("test", null, t)
        } catch (e) {}
        return e
      }(), x = ["source", "track", "audio", "video"], w = void 0, P = 0, T = x.length; P < T; P++) w = r.default.createElement(x[P]);
    var C = n.SUPPORTS_NATIVE_HLS = g || p && /edge/i.test(l),
      k = void 0 !== w.webkitEnterFullscreen,
      _ = void 0 !== w.requestFullscreen;
    k && /mac os x 10_5/i.test(l) && (k = _ = !1);
    var N = void 0 !== w.webkitRequestFullScreen,
      A = void 0 !== w.mozRequestFullScreen,
      L = void 0 !== w.msRequestFullscreen,
      F = N || A || L,
      j = F,
      I = "",
      M = void 0,
      O = void 0,
      D = void 0;
    A ? j = r.default.mozFullScreenEnabled : L && (j = r.default.msFullscreenEnabled), h && (k = !1), F && (N ? I = "webkitfullscreenchange" : A ? I = "fullscreenchange" : L && (I = "MSFullscreenChange"), n.isFullScreen = M = function() {
      return A ? r.default.mozFullScreen : N ? r.default.webkitIsFullScreen : L ? null !== r.default.msFullscreenElement : void 0
    }, n.requestFullScreen = O = function(e) {
      N ? e.webkitRequestFullScreen() : A ? e.mozRequestFullScreen() : L && e.msRequestFullscreen()
    }, n.cancelFullScreen = D = function() {
      N ? r.default.webkitCancelFullScreen() : A ? r.default.mozCancelFullScreen() : L && r.default.msExitFullscreen()
    });
    var R = n.HAS_NATIVE_FULLSCREEN = _,
      V = n.HAS_WEBKIT_NATIVE_FULLSCREEN = N,
      H = n.HAS_MOZ_NATIVE_FULLSCREEN = A,
      U = n.HAS_MS_NATIVE_FULLSCREEN = L,
      q = n.HAS_IOS_FULLSCREEN = k,
      B = n.HAS_TRUE_NATIVE_FULLSCREEN = F,
      z = n.HAS_NATIVE_FULLSCREEN_ENABLED = j,
      W = n.FULLSCREEN_EVENT_NAME = I;
    n.isFullScreen = M, n.requestFullScreen = O, n.cancelFullScreen = D, o.default.Features = o.default.Features || {}, o.default.Features.isiPad = d, o.default.Features.isiPod = c, o.default.Features.isiPhone = u, o.default.Features.isiOS = o.default.Features.isiPhone || o.default.Features.isiPad, o.default.Features.isAndroid = f, o.default.Features.isIE = p, o.default.Features.isEdge = m, o.default.Features.isChrome = h, o.default.Features.isFirefox = v, o.default.Features.isSafari = g, o.default.Features.isStockAndroid = y, o.default.Features.hasMSE = E, o.default.Features.supportsNativeHLS = C, o.default.Features.supportsPointerEvents = b, o.default.Features.supportsPassiveEvent = S, o.default.Features.hasiOSFullScreen = q, o.default.Features.hasNativeFullscreen = R, o.default.Features.hasWebkitNativeFullScreen = V, o.default.Features.hasMozNativeFullScreen = H, o.default.Features.hasMsNativeFullScreen = U, o.default.Features.hasTrueNativeFullScreen = B, o.default.Features.nativeFullScreenEnabled = z, o.default.Features.fullScreenEventName = W, o.default.Features.isFullScreen = M, o.default.Features.requestFullScreen = O, o.default.Features.cancelFullScreen = D
  }, {
    2: 2,
    3: 3,
    7: 7
  }],
  26: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.removeClass = n.addClass = n.hasClass = void 0, n.loadScript = a, n.offset = s, n.toggleClass = h, n.fadeOut = v, n.fadeIn = g, n.siblings = y, n.visible = E, n.ajax = b;
    var l = r(e(3)),
      i = r(e(2)),
      o = r(e(7));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function a(o) {
      return new Promise(function(e, t) {
        var n = i.default.createElement("script");
        n.src = o, n.async = !0, n.onload = function() {
          n.remove(), e()
        }, n.onerror = function() {
          n.remove(), t()
        }, i.default.head.appendChild(n)
      })
    }

    function s(e) {
      var t = e.getBoundingClientRect(),
        n = l.default.pageXOffset || i.default.documentElement.scrollLeft,
        o = l.default.pageYOffset || i.default.documentElement.scrollTop;
      return {
        top: t.top + o,
        left: t.left + n
      }
    }
    var d = void 0,
      u = void 0,
      c = void 0;
    "classList" in i.default.documentElement ? (d = function(e, t) {
      return void 0 !== e.classList && e.classList.contains(t)
    }, u = function(e, t) {
      return e.classList.add(t)
    }, c = function(e, t) {
      return e.classList.remove(t)
    }) : (d = function(e, t) {
      return new RegExp("\\b" + t + "\\b").test(e.className)
    }, u = function(e, t) {
      f(e, t) || (e.className += " " + t)
    }, c = function(e, t) {
      e.className = e.className.replace(new RegExp("\\b" + t + "\\b", "g"), "")
    });
    var f = n.hasClass = d,
      p = n.addClass = u,
      m = n.removeClass = c;

    function h(e, t) {
      f(e, t) ? m(e, t) : p(e, t)
    }

    function v(i) {
      var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 400,
        a = arguments[2];
      i.style.opacity || (i.style.opacity = 1);
      var s = null;
      l.default.requestAnimationFrame(function e(t) {
        var n = t - (s = s || t),
          o = parseFloat(1 - n / r, 2);
        i.style.opacity = o < 0 ? 0 : o, r < n ? a && "function" == typeof a && a() : l.default.requestAnimationFrame(e)
      })
    }

    function g(i) {
      var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 400,
        a = arguments[2];
      i.style.opacity || (i.style.opacity = 0);
      var s = null;
      l.default.requestAnimationFrame(function e(t) {
        var n = t - (s = s || t),
          o = parseFloat(n / r, 2);
        i.style.opacity = 1 < o ? 1 : o, r < n ? a && "function" == typeof a && a() : l.default.requestAnimationFrame(e)
      })
    }

    function y(e, t) {
      var n = [];
      for(e = e.parentNode.firstChild; t && !t(e) || n.push(e), e = e.nextSibling;);
      return n
    }

    function E(e) {
      return void 0 !== e.getClientRects && "function" === e.getClientRects ? !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) : !(!e.offsetWidth && !e.offsetHeight)
    }

    function b(e, t, n, o) {
      var i = l.default.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
        r = "application/x-www-form-urlencoded; charset=UTF-8",
        a = !1,
        s = "*/".concat("*");
      switch(t) {
        case "text":
          r = "text/plain";
          break;
        case "json":
          r = "application/json, text/javascript";
          break;
        case "html":
          r = "text/html";
          break;
        case "xml":
          r = "application/xml, text/xml"
      }
      "application/x-www-form-urlencoded" !== r && (s = r + ", */*; q=0.01"), i && (i.open("GET", e, !0), i.setRequestHeader("Accept", s), i.onreadystatechange = function() {
        if(!a && 4 === i.readyState)
          if(200 === i.status) {
            a = !0;
            var e = void 0;
            switch(t) {
              case "json":
                e = JSON.parse(i.responseText);
                break;
              case "xml":
                e = i.responseXML;
                break;
              default:
                e = i.responseText
            }
            n(e)
          } else "function" == typeof o && o(i.status)
      }, i.send())
    }
    o.default.Utils = o.default.Utils || {}, o.default.Utils.offset = s, o.default.Utils.hasClass = f, o.default.Utils.addClass = p, o.default.Utils.removeClass = m, o.default.Utils.toggleClass = h, o.default.Utils.fadeIn = g, o.default.Utils.fadeOut = v, o.default.Utils.siblings = y, o.default.Utils.visible = E, o.default.Utils.ajax = b, o.default.Utils.loadScript = a
  }, {
    2: 2,
    3: 3,
    7: 7
  }],
  27: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.escapeHTML = a, n.debounce = s, n.isObjectEmpty = l, n.splitEvents = d, n.createEvent = u, n.isNodeAfter = c, n.isString = f;
    var o, i = e(7),
      r = (o = i) && o.__esModule ? o : {
        default: o
      };

    function a(e) {
      if("string" != typeof e) throw new Error("Argument passed must be a string");
      var t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
      };
      return e.replace(/[&<>"]/g, function(e) {
        return t[e]
      })
    }

    function s(o, i) {
      var r = this,
        a = arguments,
        s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
      if("function" != typeof o) throw new Error("First argument must be a function");
      if("number" != typeof i) throw new Error("Second argument must be a numeric value");
      var l = void 0;
      return function() {
        var e = r,
          t = a,
          n = s && !l;
        clearTimeout(l), l = setTimeout(function() {
          l = null, s || o.apply(e, t)
        }, i), n && o.apply(e, t)
      }
    }

    function l(e) {
      return Object.getOwnPropertyNames(e).length <= 0
    }

    function d(e, n) {
      var o = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
        i = {
          d: [],
          w: []
        };
      return (e || "").split(" ").forEach(function(e) {
        var t = e + (n ? "." + n : "");
        t.startsWith(".") ? (i.d.push(t), i.w.push(t)) : i[o.test(e) ? "w" : "d"].push(t)
      }), i.d = i.d.join(" "), i.w = i.w.join(" "), i
    }

    function u(e, t) {
      if("string" != typeof e) throw new Error("Event name must be a string");
      var n = e.match(/([a-z]+\.([a-z]+))/i),
        o = {
          target: t
        };
      return null !== n && (e = n[1], o.namespace = n[2]), new window.CustomEvent(e, {
        detail: o
      })
    }

    function c(e, t) {
      return !!(e && t && 2 & e.compareDocumentPosition(t))
    }

    function f(e) {
      return "string" == typeof e
    }
    r.default.Utils = r.default.Utils || {}, r.default.Utils.escapeHTML = a, r.default.Utils.debounce = s, r.default.Utils.isObjectEmpty = l, r.default.Utils.splitEvents = d, r.default.Utils.createEvent = u, r.default.Utils.isNodeAfter = c, r.default.Utils.isString = f
  }, {
    7: 7
  }],
  28: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.typeChecks = void 0, n.absolutizeUrl = l, n.formatType = d, n.getMimeFromType = u, n.getTypeFromFile = c, n.getExtension = f, n.normalizeExtension = p;
    var o, i = e(7),
      r = (o = i) && o.__esModule ? o : {
        default: o
      },
      a = e(27);
    var s = n.typeChecks = [];

    function l(e) {
      if("string" != typeof e) throw new Error("`url` argument must be a string");
      var t = document.createElement("div");
      return t.innerHTML = '<a href="' + (0, a.escapeHTML)(e) + '">x</a>', t.firstChild.href
    }

    function d(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
      return e && !t ? c(e) : t
    }

    function u(e) {
      if("string" != typeof e) throw new Error("`type` argument must be a string");
      return e && -1 < e.indexOf(";") ? e.substr(0, e.indexOf(";")) : e
    }

    function c(e) {
      if("string" != typeof e) throw new Error("`url` argument must be a string");
      for(var t = 0, n = s.length; t < n; t++) {
        var o = s[t](e);
        if(o) return o
      }
      var i = p(f(e)),
        r = "video/mp4";
      return i && (~["mp4", "m4v", "ogg", "ogv", "webm", "flv", "mpeg", "mov"].indexOf(i) ? r = "video/" + i : ~["mp3", "oga", "wav", "mid", "midi"].indexOf(i) && (r = "audio/" + i)), r
    }

    function f(e) {
      if("string" != typeof e) throw new Error("`url` argument must be a string");
      var t = e.split("?")[0].split("\\").pop().split("/").pop();
      return ~t.indexOf(".") ? t.substring(t.lastIndexOf(".") + 1) : ""
    }

    function p(e) {
      if("string" != typeof e) throw new Error("`extension` argument must be a string");
      switch(e) {
        case "mp4":
        case "m4v":
          return "mp4";
        case "webm":
        case "webma":
        case "webmv":
          return "webm";
        case "ogg":
        case "oga":
        case "ogv":
          return "ogg";
        default:
          return e
      }
    }
    r.default.Utils = r.default.Utils || {}, r.default.Utils.typeChecks = s, r.default.Utils.absolutizeUrl = l, r.default.Utils.formatType = d, r.default.Utils.getMimeFromType = u, r.default.Utils.getTypeFromFile = c, r.default.Utils.getExtension = f, r.default.Utils.normalizeExtension = p
  }, {
    27: 27,
    7: 7
  }],
  29: [function(e, t, n) {
    "use strict";
    var o, i = a(e(2)),
      r = a(e(4));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    if([Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(e) {
        e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function() {
            this.parentNode.removeChild(this)
          }
        })
      }), function() {
        if("function" == typeof window.CustomEvent) return;

        function e(e, t) {
          t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
          };
          var n = i.default.createEvent("CustomEvent");
          return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
      }(), "function" != typeof Object.assign && (Object.assign = function(e) {
        if(null == e) throw new TypeError("Cannot convert undefined or null to object");
        for(var t = Object(e), n = 1, o = arguments.length; n < o; n++) {
          var i = arguments[n];
          if(null !== i)
            for(var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
        }
        return t
      }), String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
        return t = t || 0, this.substr(t, e.length) === e
      }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
        for(var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length - 1; 0 <= --n && t.item(n) !== this;);
        return -1 < n
      }), window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
        var t = (this.document || this.ownerDocument).querySelectorAll(e),
          n = void 0,
          o = this;
        do {
          for(n = t.length; 0 <= --n && t.item(n) !== o;);
        } while(n < 0 && (o = o.parentElement));
        return o
      }), function() {
        for(var i = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
          var t = (new Date).getTime(),
            n = Math.max(0, 16 - (t - i)),
            o = window.setTimeout(function() {
              e(t + n)
            }, n);
          return i = t + n, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
          clearTimeout(e)
        })
      }(), /firefox/i.test(navigator.userAgent)) {
      var s = window.getComputedStyle;
      window.getComputedStyle = function(e, t) {
        var n = s(e, t);
        return null === n ? {
          getPropertyValue: function() {}
        } : n
      }
    }
    window.Promise || (window.Promise = r.default), (o = window.Node || window.Element) && o.prototype && null === o.prototype.children && Object.defineProperty(o.prototype, "children", {
      get: function() {
        for(var e = 0, t = void 0, n = this.childNodes, o = []; t = n[e++];) 1 === t.nodeType && o.push(t);
        return o
      }
    })
  }, {
    2: 2,
    4: 4
  }],
  30: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.isDropFrame = C, n.secondsToTimeCode = a, n.timeCodeToSeconds = s, n.calculateTimeFormat = l, n.convertSMPTEtoSeconds = d;
    var o, i = e(7),
      r = (o = i) && o.__esModule ? o : {
        default: o
      };

    function C() {
      return !((0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 25) % 1 == 0)
    }

    function a(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 25,
        i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
        r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "hh:mm:ss";
      e = !e || "number" != typeof e || e < 0 ? 0 : e;
      var a = Math.round(.066666 * o),
        s = Math.round(o),
        l = 24 * Math.round(3600 * o),
        d = Math.round(600 * o),
        u = C(o) ? ";" : ":",
        c = void 0,
        f = void 0,
        p = void 0,
        m = void 0,
        h = Math.round(e * o);
      if(C(o)) {
        h < 0 && (h = l + h);
        var v = (h %= l) % d;
        h += 9 * a * Math.floor(h / d), a < v && (h += a * Math.floor((v - a) / Math.round(60 * s - a)));
        var g = Math.floor(h / s);
        c = Math.floor(Math.floor(g / 60) / 60), f = Math.floor(g / 60) % 60, p = n ? g % 60 : Math.floor(h / s % 60).toFixed(i)
      } else c = Math.floor(e / 3600) % 24, f = Math.floor(e / 60) % 60, p = n ? Math.floor(e % 60) : Math.floor(e % 60).toFixed(i);
      c = c <= 0 ? 0 : c, p = 60 === (p = p <= 0 ? 0 : p) ? 0 : p, f = 60 === (f = f <= 0 ? 0 : f) ? 0 : f;
      for(var y = r.split(":"), E = {}, b = 0, S = y.length; b < S; ++b) {
        for(var x = "", w = 0, P = y[b].length; w < P; w++) x.indexOf(y[b][w]) < 0 && (x += y[b][w]);
        ~["f", "s", "m", "h"].indexOf(x) && (E[x] = y[b].length)
      }
      var T = t || 0 < c ? (c < 10 && 1 < E.h ? "0" + c : c) + ":" : "";
      return T += (f < 10 && 1 < E.m ? "0" + f : f) + ":", T += "" + (p < 10 && 1 < E.s ? "0" + p : p), n && (T += (m = (m = (h % s).toFixed(0)) <= 0 ? 0 : m) < 10 && E.f ? u + "0" + m : "" + u + m), T
    }

    function s(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 25;
      if("string" != typeof e) throw new TypeError("Time must be a string");
      if(0 < e.indexOf(";") && (e = e.replace(";", ":")), !/\d{2}(\:\d{2}){0,3}/i.test(e)) throw new TypeError("Time code must have the format `00:00:00`");
      var n = e.split(":"),
        o = void 0,
        i = 0,
        r = 0,
        a = 0,
        s = 0,
        l = 0,
        d = Math.round(.066666 * t),
        u = Math.round(t),
        c = 3600 * u,
        f = 60 * u;
      switch(n.length) {
        default:
        case 1:
          a = parseInt(n[0], 10);
          break;
        case 2:
          r = parseInt(n[0], 10), a = parseInt(n[1], 10);
          break;
        case 3:
          i = parseInt(n[0], 10), r = parseInt(n[1], 10), a = parseInt(n[2], 10);
          break;
        case 4:
          i = parseInt(n[0], 10), r = parseInt(n[1], 10), a = parseInt(n[2], 10), s = parseInt(n[3], 10)
      }
      return o = C(t) ? c * i + f * r + u * a + s - d * ((l = 60 * i + r) - Math.floor(l / 10)) : (c * i + f * r + t * a + s) / t, parseFloat(o.toFixed(3))
    }

    function l(e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 25;
      e = !e || "number" != typeof e || e < 0 ? 0 : e;
      for(var o = Math.floor(e / 3600) % 24, i = Math.floor(e / 60) % 60, r = Math.floor(e % 60), a = [
          [Math.floor((e % 1 * n).toFixed(3)), "f"],
          [r, "s"],
          [i, "m"],
          [o, "h"]
        ], s = t.timeFormat, l = s[1] === s[0], d = l ? 2 : 1, u = s.length < d ? s[d] : ":", c = s[0], f = !1, p = 0, m = a.length; p < m; p++)
        if(~s.indexOf(a[p][1])) f = !0;
        else if(f) {
        for(var h = !1, v = p; v < m; v++)
          if(0 < a[v][0]) {
            h = !0;
            break
          } if(!h) break;
        l || (s = c + s), s = a[p][1] + u + s, l && (s = a[p][1] + s), c = a[p][1]
      }
      t.timeFormat = s
    }

    function d(e) {
      if("string" != typeof e) throw new TypeError("Argument must be a string value");
      for(var t = ~(e = e.replace(",", ".")).indexOf(".") ? e.split(".")[1].length : 0, n = 0, o = 1, i = 0, r = (e = e.split(":").reverse()).length; i < r; i++) o = 1, 0 < i && (o = Math.pow(60, i)), n += Number(e[i]) * o;
      return Number(n.toFixed(t))
    }
    r.default.Utils = r.default.Utils || {}, r.default.Utils.secondsToTimeCode = a, r.default.Utils.timeCodeToSeconds = s, r.default.Utils.calculateTimeFormat = l, r.default.Utils.convertSMPTEtoSeconds = d
  }, {
    7: 7
  }]
}, {}, [29, 6, 5, 15, 23, 20, 19, 21, 22, 24, 16, 18, 17, 9, 10, 11, 12, 13, 14]);


! function i(l, r, p) {
  function a(t, o) {
    if(!r[t]) {
      if(!l[t]) {
        var e = "function" == typeof require && require;
        if(!o && e) return e(t, !0);
        if(f) return f(t, !0);
        var s = new Error("Cannot find module '" + t + "'");
        throw s.code = "MODULE_NOT_FOUND", s
      }
      var n = r[t] = {
        exports: {}
      };
      l[t][0].call(n.exports, function(o) {
        return a(l[t][1][o] || o)
      }, n, n.exports, i, l, r, p)
    }
    return r[t].exports
  }
  for(var f = "function" == typeof require && require, o = 0; o < p.length; o++) a(p[o]);
  return a
}({
  1: [function(o, t, e) {
    "use strict";
    mejs.i18n.en["mejs.loop"] = "Toggle Loop", Object.assign(mejs.MepDefaults, {
      loopText: null
    }), Object.assign(MediaElementPlayer.prototype, {
      buildloop: function(o) {
        var t = this,
          e = mejs.Utils.isString(t.options.loopText) ? t.options.loopText : mejs.i18n.t("mejs.loop"),
          s = document.createElement("div");
        s.className = t.options.classPrefix + "button " + t.options.classPrefix + "loop-button " + (o.options.loop ? t.options.classPrefix + "loop-on" : t.options.classPrefix + "loop-off"), s.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + e + '" aria-label="' + e + '" tabindex="0"></button>', t.addControlElement(s, "loop"), s.addEventListener("click", function() {
          o.options.loop = !o.options.loop, o.options.loop ? (mejs.Utils.removeClass(s, t.options.classPrefix + "loop-off"), mejs.Utils.addClass(s, t.options.classPrefix + "loop-on")) : (mejs.Utils.removeClass(s, t.options.classPrefix + "loop-on"), mejs.Utils.addClass(s, t.options.classPrefix + "loop-off"))
        })
      }
    })
  }, {}]
}, {}, [1]);




! function a(r, d, s) {
  function u(t, e) {
    if(!d[t]) {
      if(!r[t]) {
        var o = "function" == typeof require && require;
        if(!e && o) return o(t, !0);
        if(l) return l(t, !0);
        var n = new Error("Cannot find module '" + t + "'");
        throw n.code = "MODULE_NOT_FOUND", n
      }
      var i = d[t] = {
        exports: {}
      };
      r[t][0].call(i.exports, function(e) {
        return u(r[t][1][e] || e)
      }, i, i.exports, a, r, d, s)
    }
    return d[t].exports
  }
  for(var l = "function" == typeof require && require, e = 0; e < s.length; e++) u(s[e]);
  return u
}({
  1: [function(e, t, o) {
    "use strict";
    Object.assign(mejs.MepDefaults, {
      previewMode: !1,
      muteOnPreviewMode: !0,
      fadeInAudioStart: 0,
      fadeInAudioInterval: 0,
      fadeOutAudioStart: 0,
      fadeOutAudioInterval: 0,
      fadePercent: .02,
      pauseOnlyOnPreview: !1,
      delayPreview: 0
    }), Object.assign(MediaElementPlayer.prototype, {
      buildpreview: function(e) {
        var n = !1,
          i = !1,
          t = void 0,
          o = !1,
          a = this,
          r = function() {
            if(a.options.fadeInAudioInterval && (Math.floor(a.media.currentTime) < a.options.fadeIntAudioStart && (a.media.setVolume(0), a.media.setMuted(!0)), Math.floor(a.media.currentTime) === a.options.fadeInAudioStart)) {
              n = !0;
              var e = 0,
                t = a.options.fadeInAudioInterval,
                o = setInterval(function() {
                  e < 1 ? (1 < (e += a.options.fadePercent) && (e = 1), a.media.setVolume(e.toFixed(2))) : (clearInterval(o), o = null, a.media.setMuted(!1), setTimeout(function() {
                    n = !1
                  }, 300))
                }, t)
            }
          },
          d = function() {
            if(a.options.fadeOutAudioInterval && (Math.floor(a.media.currentTime) < a.options.fadeOutAudioStart && (a.media.setVolume(1), a.media.setMuted(!1)), Math.floor(a.media.currentTime) === a.options.fadeOutAudioStart)) {
              i = !0;
              var e = 1,
                t = a.options.fadeOutAudioInterval,
                o = setInterval(function() {
                  0 < e ? ((e -= a.options.fadePercent) < 0 && (e = 0), a.media.setVolume(e.toFixed(2))) : (clearInterval(o), o = null, a.media.setMuted(!1), setTimeout(function() {
                    i = !1
                  }, 300))
                }, t)
            }
          };
        a.options.muteOnPreviewMode || a.options.fadeInAudioInterval ? (a.media.setVolume(0), a.media.setMuted(!0)) : a.options.fadeOutAudioInterval && (a.media.setVolume(1), a.media.setMuted(!1)), a.media.addEventListener("timeupdate", function() {
          n ? a.media.removeEventListener("timeupdate", r) : i ? a.media.removeEventListener("timeupdate", d) : (r(), d())
        }), e.isVideo && (document.body.addEventListener("mouseover", function(e) {
          e.target === a.container || e.target.closest("." + a.options.classPrefix + "container") ? (o = !0, a.container.querySelector("." + a.options.classPrefix + "overlay-loading").parentNode.style.display = "flex", a.container.querySelector("." + a.options.classPrefix + "overlay-play").style.display = "none", a.media.paused ? t = setTimeout(function() {
            o ? a.media.play() : (clearTimeout(t), t = null), a.container.querySelector("." + a.options.classPrefix + "overlay-loading").parentNode.style.display = "none"
          }, a.options.delayPreview) : a.container.querySelector("." + a.options.classPrefix + "overlay-loading").parentNode.style.display = "none") : (o = !1, clearTimeout(t), t = null, a.media.paused || a.media.pause(), a.container.querySelector("." + a.options.classPrefix + "overlay-loading").parentNode.style.display = "none")
        }), document.body.addEventListener("mouseout", function(e) {
          e.target === a.container || e.target.closest("." + a.options.classPrefix + "container") || (o = !1, a.container.querySelector("." + a.options.classPrefix + "overlay-loading").parentNode.style.display = "none", a.media.paused || (a.media.pause(), a.options.pauseOnlyOnPreview || a.media.setCurrentTime(0)), clearTimeout(t), t = null)
        }), window.addEventListener("scroll", function() {
          o = !1, a.container.querySelector("." + a.options.classPrefix + "overlay-loading").parentNode.style.display = "none", a.media.paused || a.media.pause()
        }))
      }
    })
  }, {}]
}, {}, [1]);



(function() {
  function r(e, n, t) {
    function o(i, f) {
      if(!n[i]) {
        if(!e[i]) {
          var c = "function" == typeof require && require;
          if(!f && c) return c(i, !0);
          if(u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function(r) {
          var n = e[i][1][r];
          return o(n || r)
        }, p, p.exports, r, e, n, t)
      }
      return n[i].exports
    }
    for(var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o
  }
  return r
})()({
  1: [function(_dereq_, module, exports) {
    'use strict';
    Object.assign(mejs.MepDefaults, {
      previewMode: false,
      muteOnPreviewMode: true,
      fadeInAudioStart: 0,
      fadeInAudioInterval: 0,
      fadeOutAudioStart: 0,
      fadeOutAudioInterval: 0,
      fadePercent: 0.02,
      pauseOnlyOnPreview: false,
      delayPreview: 0
    });
    Object.assign(MediaElementPlayer.prototype, {
      buildpreview: function buildpreview(player) {
        var initFadeIn = false,
          initFadeOut = false,
          timeout = void 0,
          mouseOver = false;
        var t = this,
          fadeInCallback = function fadeInCallback() {
            if(t.options.fadeInAudioInterval) {
              if(Math.floor(t.media.currentTime) < t.options.fadeIntAudioStart) {
                t.media.setVolume(0);
                t.media.setMuted(true);
              }
              if(Math.floor(t.media.currentTime) === t.options.fadeInAudioStart) {
                initFadeIn = true;
                var volume = 0,
                  audioInterval = t.options.fadeInAudioInterval,
                  interval = setInterval(function() {
                    if(volume < 1) {
                      volume += t.options.fadePercent;
                      if(volume > 1) {
                        volume = 1;
                      }
                      t.media.setVolume(volume.toFixed(2));
                    } else {
                      clearInterval(interval);
                      interval = null;
                      t.media.setMuted(false);
                      setTimeout(function() {
                        initFadeIn = false;
                      }, 300);
                    }
                  }, audioInterval);
              }
            }
          },
          fadeOutCallback = function fadeOutCallback() {
            if(t.options.fadeOutAudioInterval) {
              if(Math.floor(t.media.currentTime) < t.options.fadeOutAudioStart) {
                t.media.setVolume(1);
                t.media.setMuted(false);
              }
              if(Math.floor(t.media.currentTime) === t.options.fadeOutAudioStart) {
                initFadeOut = true;
                var volume = 1,
                  audioInterval = t.options.fadeOutAudioInterval,
                  interval = setInterval(function() {
                    if(volume > 0) {
                      volume -= t.options.fadePercent;
                      if(volume < 0) {
                        volume = 0;
                      }
                      t.media.setVolume(volume.toFixed(2));
                    } else {
                      clearInterval(interval);
                      interval = null;
                      t.media.setMuted(false);
                      setTimeout(function() {
                        initFadeOut = false;
                      }, 300);
                    }
                  }, audioInterval);
              }
            }
          };
        if(t.options.muteOnPreviewMode || t.options.fadeInAudioInterval) {
          t.media.setVolume(0);
          t.media.setMuted(true);
        } else if(t.options.fadeOutAudioInterval) {
          t.media.setVolume(1);
          t.media.setMuted(false);
        }
        t.media.addEventListener('timeupdate', function() {
          if(initFadeIn) {
            t.media.removeEventListener('timeupdate', fadeInCallback);
            return;
          }
          if(initFadeOut) {
            t.media.removeEventListener('timeupdate', fadeOutCallback);
            return;
          }
          fadeInCallback();
          fadeOutCallback();
        });
        if(!player.isVideo) {
          return;
        }
        document.body.addEventListener('mouseover', function(e) {
          if(e.target === t.container || e.target.closest('.' + t.options.classPrefix + 'container')) {
            mouseOver = true;
            t.container.querySelector('.' + t.options.classPrefix + 'overlay-loading').parentNode.style.display = 'flex';
            t.container.querySelector('.' + t.options.classPrefix + 'overlay-play').style.display = 'none';
            if(t.media.paused) {
              timeout = setTimeout(function() {
                if(mouseOver) {
                  t.media.play();
                } else {
                  clearTimeout(timeout);
                  timeout = null;
                }
                t.container.querySelector('.' + t.options.classPrefix + 'overlay-loading').parentNode.style.display = 'none';
              }, t.options.delayPreview);
            } else {
              t.container.querySelector('.' + t.options.classPrefix + 'overlay-loading').parentNode.style.display = 'none';
            }
          } else {
            mouseOver = false;
            clearTimeout(timeout);
            timeout = null;
            if(!t.media.paused) {
              t.media.pause();
            }
            t.container.querySelector('.' + t.options.classPrefix + 'overlay-loading').parentNode.style.display = 'none';
          }
        });
        document.body.addEventListener('mouseout', function(e) {
          if(!(e.target === t.container) && !e.target.closest('.' + t.options.classPrefix + 'container')) {
            mouseOver = false;
            t.container.querySelector('.' + t.options.classPrefix + 'overlay-loading').parentNode.style.display = 'none';
            if(!t.media.paused) {
              t.media.pause();
              if(!t.options.pauseOnlyOnPreview) {
                t.media.setCurrentTime(0);
              }
            }
            clearTimeout(timeout);
            timeout = null;
          }
        });
        window.addEventListener('scroll', function() {
          mouseOver = false;
          t.container.querySelector('.' + t.options.classPrefix + 'overlay-loading').parentNode.style.display = 'none';
          if(!t.media.paused) {
            t.media.pause();
          }
        });
      }
    });
  }, {}]
}, {}, [1]);







! function i(n, a, l) {
  function p(r, e) {
    if(!a[r]) {
      if(!n[r]) {
        var s = "function" == typeof require && require;
        if(!e && s) return s(r, !0);
        if(c) return c(r, !0);
        var t = new Error("Cannot find module '" + r + "'");
        throw t.code = "MODULE_NOT_FOUND", t
      }
      var o = a[r] = {
        exports: {}
      };
      n[r][0].call(o.exports, function(e) {
        return p(n[r][1][e] || e)
      }, o, o.exports, i, n, a, l)
    }
    return a[r].exports
  }
  for(var c = "function" == typeof require && require, e = 0; e < l.length; e++) p(l[e]);
  return p
}({
  1: [function(e, r, s) {
    "use strict";
    Object.assign(mejs.MepDefaults, {
      markersRollsColor: "#E9BC3D",
      markersRollsWidth: 1,
      markersRolls: {}
    }), Object.assign(MediaElementPlayer.prototype, {
      buildmarkersrolls: function(e, r, s, t) {
        var o = -1,
          i = -1,
          n = -1,
          a = Object.keys(e.options.markersRolls).length;
        if(a) {
          for(var l = 0, p = a; l < p; ++l) {
            var c = document.createElement("span");
            c.className = this.options.classPrefix + "time-marker", r.querySelector("." + this.options.classPrefix + "time-total").appendChild(c)
          }
          var d = document.createElement("iframe");
          d.frameBorder = "0", d.className = this.options.classPrefix + "markersrolls-layer " + this.options.classPrefix + "overlay " + this.options.classPrefix + "layer", d.style.display = "none", d.style.backgroundColor = "#9F9F9F", d.style.border = "0 none", d.style.boxShadow = "#B0B0B0 0px 0px 20px -10px inset", d.style.paddingBottom = "40px", s.appendChild(d), t.addEventListener("durationchange", function() {
            e.setmarkersrolls(r)
          }), t.addEventListener("timeupdate", function() {
            (o = Math.floor(t.currentTime)) < i ? o < n && (n = -1) : i = o, 0 !== a && e.options.markersRolls[o] && o !== n && (n = o, t.pause(), d.src = e.options.markersRolls[o], d.style.display = "block")
          }, !1), t.addEventListener("play", function() {
            d.style.display = "none", d.src = ""
          }, !1)
        }
      },
      setmarkersrolls: function(e) {
        var r = e.querySelectorAll("." + this.options.classPrefix + "time-marker"),
          s = 0;
        for(var t in this.options.markersRolls)
          if(this.options.markersRolls.hasOwnProperty(t) && !((t = parseInt(t)) >= this.media.duration || t < 0)) {
            var o = 100 * t / this.media.duration,
              i = r[s];
            i.style.width = this.options.markersRollsWidth + "px", i.style.left = o + "%", i.style.background = this.options.markersRollsColor, s++
          }
      }
    })
  }, {}]
}, {}, [1]);





"use strict";
if(mejs.i18n.es !== undefined) {
  mejs.i18n.es['mejs.picture-in-pictureText'] = 'Picture in picture';
}
if(mejs.i18n.de !== undefined) {
  mejs.i18n.de['mejs.picture-in-pictureText'] = 'Bild in Bild';
}
if(mejs.i18n.fr !== undefined) {
  mejs.i18n.fr['mejs.picture-in-pictureText'] = 'Image dans l’image';
}
if(mejs.i18n.es !== undefined) {
  mejs.i18n.es['mejs.picture-in-pictureText'] = 'Imagen dentro de imagen';
}
// TODO Add more languages for the title attribute


! function r(i, l, a) {
  function d(t, e) {
    if(!l[t]) {
      if(!i[t]) {
        var s = "function" == typeof require && require;
        if(!e && s) return s(t, !0);
        if(p) return p(t, !0);
        var o = new Error("Cannot find module '" + t + "'");
        throw o.code = "MODULE_NOT_FOUND", o
      }
      var n = l[t] = {
        exports: {}
      };
      i[t][0].call(n.exports, function(e) {
        return d(i[t][1][e] || e)
      }, n, n.exports, r, i, l, a)
    }
    return l[t].exports
  }
  for(var p = "function" == typeof require && require, e = 0; e < a.length; e++) d(a[e]);
  return d
}({
  1: [function(e, t, s) {
    "use strict";
    mejs.i18n.en["mejs.speed-rate"] = "Speed Rate", Object.assign(mejs.MepDefaults, {
      speeds: ["2.00", "1.50", "1.25", "1.00", "0.75"],
      defaultSpeed: "1.00",
      speedChar: "x",
      speedText: null
    }), Object.assign(MediaElementPlayer.prototype, {
      buildspeed: function(l, e, t, a) {
        var d = this;
        if(null !== d.media.rendererName && /(native|html5)/i.test(d.media.rendererName)) {
          for(var o = [], s = mejs.Utils.isString(d.options.speedText) ? d.options.speedText : mejs.i18n.t("mejs.speed-rate"), p = function(e) {
              for(var t = 0, s = o.length; t < s; t++)
                if(o[t].value === e) return o[t].name
            }, c = void 0, n = !1, r = 0, i = d.options.speeds.length; r < i; r++) {
            var u = d.options.speeds[r];
            "string" == typeof u ? (o.push({
              name: "" + u + d.options.speedChar,
              value: u
            }), u === d.options.defaultSpeed && (n = !0)) : (o.push(u), u.value === d.options.defaultSpeed && (n = !0))
          }
          n || o.push({
            name: d.options.defaultSpeed + d.options.speedChar,
            value: d.options.defaultSpeed
          }), o.sort(function(e, t) {
            return parseFloat(t.value) - parseFloat(e.value)
          }), d.cleanspeed(l), l.speedButton = document.createElement("div"), l.speedButton.className = d.options.classPrefix + "button " + d.options.classPrefix + "speed-button", l.speedButton.innerHTML = '<button type="button" aria-controls="' + d.id + '" title="' + s + '" aria-label="' + s + '" tabindex="0">' + p(d.options.defaultSpeed) + '</button><div class="' + d.options.classPrefix + "speed-selector " + d.options.classPrefix + 'offscreen"><ul class="' + d.options.classPrefix + 'speed-selector-list"></ul></div>', d.addControlElement(l.speedButton, "speed");
          for(var f = 0, v = o.length; f < v; f++) {
            var h = d.id + "-speed-" + o[f].value;
            l.speedButton.querySelector("ul").innerHTML += '<li class="' + d.options.classPrefix + 'speed-selector-list-item"><input class="' + d.options.classPrefix + 'speed-selector-input" type="radio" name="' + d.id + '_speed"disabled="disabled" value="' + o[f].value + '" id="' + h + '"  ' + (o[f].value === d.options.defaultSpeed ? ' checked="checked"' : "") + '/><label for="' + h + '" class="' + d.options.classPrefix + "speed-selector-label" + (o[f].value === d.options.defaultSpeed ? " " + d.options.classPrefix + "speed-selected" : "") + '">' + o[f].name + "</label></li>"
          }
          c = d.options.defaultSpeed, l.speedSelector = l.speedButton.querySelector("." + d.options.classPrefix + "speed-selector");
          for(var m = ["mouseenter", "focusin"], S = ["mouseleave", "focusout"], x = l.speedButton.querySelectorAll('input[type="radio"]'), y = l.speedButton.querySelectorAll("." + d.options.classPrefix + "speed-selector-label"), b = 0, g = m.length; b < g; b++) l.speedButton.addEventListener(m[b], function() {
            mejs.Utils.removeClass(l.speedSelector, d.options.classPrefix + "offscreen"), l.speedSelector.style.height = l.speedSelector.querySelector("ul").offsetHeight, l.speedSelector.style.top = -1 * parseFloat(l.speedSelector.offsetHeight) + "px"
          });
          for(var P = 0, j = S.length; P < j; P++) l.speedSelector.addEventListener(S[P], function() {
            mejs.Utils.addClass(this, d.options.classPrefix + "offscreen")
          });
          for(var k = 0, E = x.length; k < E; k++) {
            var B = x[k];
            B.disabled = !1, B.addEventListener("click", function() {
              var e = this.value;
              c = e, a.playbackRate = parseFloat(e), l.speedButton.querySelector("button").innerHTML = p(e);
              for(var t = l.speedButton.querySelectorAll("." + d.options.classPrefix + "speed-selected"), s = 0, o = t.length; s < o; s++) mejs.Utils.removeClass(t[s], d.options.classPrefix + "speed-selected");
              this.checked = !0;
              for(var n = mejs.Utils.siblings(this, function(e) {
                  return mejs.Utils.hasClass(e, d.options.classPrefix + "speed-selector-label")
                }), r = 0, i = n.length; r < i; r++) mejs.Utils.addClass(n[r], d.options.classPrefix + "speed-selected")
            })
          }
          for(var U = 0, C = y.length; U < C; U++) y[U].addEventListener("click", function() {
            var e = mejs.Utils.siblings(this, function(e) {
                return "INPUT" === e.tagName
              })[0],
              t = mejs.Utils.createEvent("click", e);
            e.dispatchEvent(t)
          });
          d.options.keyActions.push({
            keys: [60, 188],
            action: function(e, t, s, o) {
              if("<" == o.key)
                for(var n = 0; n < x.length - 1; n++)
                  if(x[n].checked) {
                    var r = x[n + 1];
                    r.dispatchEvent(mejs.Utils.createEvent("click", r))
                  }
            }
          }, {
            keys: [62, 190],
            action: function(e, t, s, o) {
              if(">" == o.key)
                for(var n = 1; n < x.length; n++)
                  if(x[n].checked) {
                    var r = x[n - 1];
                    r.dispatchEvent(mejs.Utils.createEvent("click", r))
                  }
            }
          }), l.speedSelector.addEventListener("keydown", function(e) {
            e.stopPropagation()
          }), a.addEventListener("loadedmetadata", function() {
            c && (a.playbackRate = parseFloat(c))
          })
        }
      },
      cleanspeed: function(e) {
        e && (e.speedButton && e.speedButton.parentNode.removeChild(e.speedButton), e.speedSelector && e.speedSelector.parentNode.removeChild(e.speedSelector))
      }
    })
  }, {}]
}, {}, [1]);







! function s(o, a, c) {
  function p(e, t) {
    if(!a[e]) {
      if(!o[e]) {
        var i = "function" == typeof require && require;
        if(!t && i) return i(e, !0);
        if(u) return u(e, !0);
        var n = new Error("Cannot find module '" + e + "'");
        throw n.code = "MODULE_NOT_FOUND",
          n
      }
      var r = a[e] = {
        exports: {}
      };
      o[e][0].call(r.exports, function(t) {
        return p(o[e][1][t] || t)
      }, r, r.exports, s, o, a, c)
    }
    return a[e].exports
  }
  for(var u = "function" == typeof require && require, t = 0; t < c.length; t++) p(c[t]);
  return p
}
({
  1: [function(t, e, i) {
    "use strict";
    mejs.i18n.en["mejs.time-skip-back"] = ["Skip back 1 second", "Skip back %1 seconds"], Object.assign(mejs.MepDefaults, {
      skipBackInterval: 30,
      skipBackText: null
    }), Object.assign(MediaElementPlayer.prototype, {
      buildskipback: function(t, e, i, n) {
        var r = this,
          s = mejs.i18n.t("mejs.time-skip-back", r.options.skipBackInterval),
          o = mejs.Utils.isString(r.options.skipBackText) ? r.options.skipBackText.replace("%1", r.options.skipBackInterval) : s,
          a = document.createElement("div");
        a.className = r.options.classPrefix + "button " + r.options.classPrefix + "skip-back-button", a.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + o + '" aria-label="' + o + '" tabindex="0">' + r.options.skipBackInterval + "</button>", r.addControlElement(a, "skipback"), a.addEventListener("click", function() {
          if(isNaN(n.duration) ? r.options.skipBackInterval : n.duration) {
            var t = n.currentTime === 1 / 0 ? 0 : n.currentTime;
            n.setCurrentTime(Math.max(t - r.options.skipBackInterval, 0)), this.querySelector("button").blur()
          }
        })
      }
    })
  }, {}]
}, {}, [1]);



      'use strict';
      if(mejs.i18n.ca !== undefined) {
        mejs.i18n.ca['mejs.time-skip-back'] = ['Retornar 1 segon', 'Retornar %1 segons'];
      }
      if(mejs.i18n.cs !== undefined) {
        mejs.i18n.cs['mejs.time-skip-back'] = ['Přeskočte zpět o 1 sekundu', 'Přeskočte zpět %1 vteřiny', 'Přeskočte zpět %1 sekund'];
      }
      if(mejs.i18n.de !== undefined) {
        mejs.i18n.de['mejs.time-skip-back'] = ['1 Sekunde zurückspulen', '%1 Sekunden zurückspulen'];
      }
      if(mejs.i18n.es !== undefined) {
        mejs.i18n.es['mejs.time-skip-back'] = ['Rebobinar 1 segundo', 'Rebobinar %1 segundos'];
      }
      if(mejs.i18n.fr !== undefined) {
        mejs.i18n.fr['mejs.time-skip-back'] = ['Reculer de %1 seconde', 'Reculer de %1 secondes'];
      }
      if(mejs.i18n.fa !== undefined) {
        mejs.i18n.fa['mejs.time-skip-back'] = '%1 ثانیه به عقب برگردید';
      }
      if(mejs.i18n.hr !== undefined) {
        mejs.i18n.hr['mejs.time-skip-back'] = ['Skoči natrag 1 sekundu', 'Skoči natrag %1 sekunde', 'Skoči natrag %1 sekundi'];
      }
      if(mejs.i18n.hu !== undefined) {
        mejs.i18n.hu['mejs.time-skip-back'] = ['Menj vissza 1 másodpercig', 'Ugrás vissza %1 másodperccel'];
      }
      if(mejs.i18n.it !== undefined) {
        mejs.i18n.it['mejs.time-skip-back'] = ['Riavvolgere 1 secondo', 'Riavvolgere %1 secondi'];
      }
      if(mejs.i18n.ja !== undefined) {
        mejs.i18n.ja['mejs.time-skip-back'] = '%1秒スキップバックする';
      }
      if(mejs.i18n.ko !== undefined) {
        mejs.i18n.ko['mejs.time-skip-back'] = '%1초 를 뒤로 건너뛰세요';
      }
      if(mejs.i18n.ms !== undefined) {
        mejs.i18n.ms['mejs.time-skip-back'] = 'Undur masa %1 saat';
      }
      if(mejs.i18n.nl !== undefined) {
        mejs.i18n.nl['mejs.time-skip-back'] = ['Sla 1 seconde terug', 'Sla %1 seconden terug'];
      }
      if(mejs.i18n.pl !== undefined) {
        mejs.i18n.pl['mejs.time-skip-back'] = ['Cofnij o 1 sekundę', 'Cofnij o %1 sekundy', 'Cofnij o %1 sekund'];
      }
      if(mejs.i18n.pt !== undefined) {
        mejs.i18n.pt['mejs.time-skip-back'] = ['Retroceder %1 segundo', 'Retroceder %1 segundos'];
      }
      if(mejs.i18n.ro !== undefined) {
        mejs.i18n.ro['mejs.time-skip-back'] = ['Treceți înapoi 1 secundă', 'Treceți înapoi în %1 secunde'];
      }
      if(mejs.i18n.ru !== undefined) {
        mejs.i18n.ru['mejs.time-skip-back'] = ['Перейти назад на %1 секунду', 'Перейти назад на %1 секунды', 'Перейти назад на %1 секунд'];
      }
      if(mejs.i18n.sk !== undefined) {
        mejs.i18n.sk['mejs.time-skip-back'] = ['Preskočte späť 1 sekundu', 'Preskočte %1 sekundy', 'Preskočte späť %1 sekúnd'];
      }
      if(mejs.i18n.sv !== undefined) {
        mejs.i18n.sv['mejs.time-skip-back'] = ['Hoppa tillbaka 1 sekund', 'Hoppa tillbaka %1 sekunder'];
      }
      if(mejs.i18n.tr !== undefined) {
        mejs.i18n.tr['mejs.time-skip-back'] = ['1 saniye geri sar', '%1 saniye geri sar'];
      }
      if(mejs.i18n.uk !== undefined) {
        mejs.i18n.uk['mejs.time-skip-back'] = ['Перейти назад на %1 секунду', 'Перейти назад на %1 секунди', 'Перейти назад на %1 секунд'];
      }
      if(mejs.i18n.zh !== undefined) {
        mejs.i18n.zh['mejs.time-skip-back'] = '跳躍式迴繞%1秒';
      }
      if(mejs.i18n['zh-CN'] !== undefined) {
        mejs.i18n['zh-CN']['mejs.time-skip-back'] = '后退%1秒';
      }
        




! function i(a, u, s) {
  function p(t, r) {
    if(!u[t]) {
      if(!a[t]) {
        var e = "function" == typeof require && require;
        if(!r && e) return e(t, !0);
        if(m) return m(t, !0);
        var n = new Error("Cannot find module '" + t + "'");
        throw n.code = "MODULE_NOT_FOUND", n
      }
      var o = u[t] = {
        exports: {}
      };
      a[t][0].call(o.exports, function(r) {
        return p(a[t][1][r] || r)
      }, o, o.exports, i, a, u, s)
    }
    return u[t].exports
  }
  for(var m = "function" == typeof require && require, r = 0; r < s.length; r++) p(s[r]);
  return p
}({
  1: [function(r, t, e) {
    "use strict";
    mejs.i18n.en["mejs.time-jump-forward"] = ["Jump forward 1 second", "Jump forward %1 seconds"], Object.assign(mejs.MepDefaults, {
      jumpForwardInterval: 30,
      jumpForwardText: null
    }), Object.assign(MediaElementPlayer.prototype, {
      buildjumpforward: function(r, t, e, n) {
        var o = this,
          i = mejs.i18n.t("mejs.time-jump-forward", o.options.jumpForwardInterval),
          a = mejs.Utils.isString(o.options.jumpForwardText) ? o.options.jumpForwardText.replace("%1", o.options.jumpForwardInterval) : i,
          u = document.createElement("div");
        u.className = o.options.classPrefix + "button " + o.options.classPrefix + "jump-forward-button", u.innerHTML = '<button type="button" aria-controls="' + o.id + '" title="' + a + '" aria-label="' + a + '" tabindex="0">' + o.options.jumpForwardInterval + "</button>", o.addControlElement(u, "jumpforward"), u.addEventListener("click", function() {
          var r = isNaN(n.duration) ? o.options.jumpForwardInterval : n.duration;
          if(r) {
            var t = n.currentTime === 1 / 0 ? 0 : n.currentTime;
            n.setCurrentTime(Math.min(t + o.options.jumpForwardInterval, r)), this.querySelector("button").blur()
          }
        })
      }
    })
  }, {}]
}, {}, [1]);

'use strict';
if(mejs.i18n.ca !== undefined) {
  mejs.i18n.ca['mejs.time-jump-forward'] = ['Salteu endavant 1 segon', 'Salta endavant %1 segons'];
}
if(mejs.i18n.cs !== undefined) {
  mejs.i18n.cs['mejs.time-jump-forward'] = ['Přeskočte o 1 sekundu dopředu', 'Přeskočte %1 vteřiny dopředu', 'Jump forward %1 seconds'];
}
if(mejs.i18n.de !== undefined) {
  mejs.i18n.de['mejs.time-jump-forward'] = ['1 Sekunde vorspulen', 'Přeskočte %1 vteřiny dopředu', 'Skok %1 vteřin'];
}
if(mejs.i18n.es !== undefined) {
  mejs.i18n.es['mejs.time-jump-forward'] = ['Adelantar 1 segundo', 'Adelantar %1 segundos'];
}
if(mejs.i18n.fa !== undefined) {
  mejs.i18n.fa['mejs.time-jump-forward'] = 'پرش به جلو 1% ثانیه';
}
if(mejs.i18n.fr !== undefined) {
  mejs.i18n.fr['mejs.time-jump-forward'] = ['Avancer de %1 seconde', 'Avancer de %1 secondes'];
}
if(mejs.i18n.hr !== undefined) {
  mejs.i18n.hr['mejs.time-jump-forward'] = ['Skoči naprijed 1 sekundu', 'Skoči naprijed %1 sekunde', 'Skoči naprijed %1 sekundi'];
}
if(mejs.i18n.hu !== undefined) {
  mejs.i18n.hu['mejs.time-jump-forward'] = ['Ugrás előre 1 másodpercig', 'Ugrás előre %1 másodpercig'];
}
if(mejs.i18n.it !== undefined) {
  mejs.i18n.it['mejs.time-jump-forward'] = ['Salta in avanti per 1 secondo', 'Salta in avanti %1 secondi'];
}
if(mejs.i18n.ja !== undefined) {
  mejs.i18n.ja['mejs.time-jump-forward'] = '%1秒前にジャンプ';
}
if(mejs.i18n.ko !== undefined) {
  mejs.i18n.ko['mejs.time-jump-forward'] = '%1 초 앞으로 뛰어 오르십시오';
}
if(mejs.i18n.ms !== undefined) {
  mejs.i18n.ms['mejs.time-jump-forward'] = 'Lompat masa %1 saat';
}
if(mejs.i18n.nl !== undefined) {
  mejs.i18n.nl['mejs.time-jump-forward'] = '%1 seconden vooruit springen';
}
if(mejs.i18n.pl !== undefined) {
  mejs.i18n.pl['mejs.time-jump-forward'] = ['Przewiń do przodu o sekundę', 'Przewiń do przodu o %1 sekundy', 'Przewiń do przodu o %1 sekund'];
}
if(mejs.i18n.pt !== undefined) {
  mejs.i18n.pt['mejs.time-jump-forward'] = ['Avance 1 segundo', 'Avance %1 segundos'];
}
if(mejs.i18n.ro !== undefined) {
  mejs.i18n.ro['mejs.time-jump-forward'] = ['Salt înainte de 1 secundă', 'Salt înainte de %1 secunde'];
}
if(mejs.i18n.ru !== undefined) {
  mejs.i18n.ru['mejs.time-jump-forward'] = ['Перейти вперед на %1 секунду', 'Перейти вперед на %1 секунды', 'Перейти вперед на %1 секунд'];
}
if(mejs.i18n.sk !== undefined) {
  mejs.i18n.sk['mejs.time-jump-forward'] = ['Skočiť dopredu o 1 sekundu', 'Skok vpred o %1 sekundy', 'Skok dopredu %1 sekúnd'];
}
if(mejs.i18n.sv !== undefined) {
  mejs.i18n.sv['mejs.time-jump-forward'] = ['Hoppa fram 1 sekund', 'Hoppa fram %1 sekunder'];
}
if(mejs.i18n.tr !== undefined) {
  mejs.i18n.tr['mejs.time-jump-forward'] = ['1 saniye ileri atla', '%1 saniye ileri atla'];
}
if(mejs.i18n.uk !== undefined) {
  mejs.i18n.uk['mejs.time-jump-forward'] = ['Перейти вперед на %1 секунду', 'Перейти вперед на %1 секунди', 'Перейти вперед на %1 секунд'];
}
if(mejs.i18n.zh !== undefined) {
  mejs.i18n.zh['mejs.time-jump-forward'] = '向前跳%1秒';
}
if(mejs.i18n['zh-CN'] !== undefined) {
  mejs.i18n['zh-CN']['mejs.time-jump-forward'] = '向前跳%1秒';
}


! function n(l, o, s) {
  function d(t, e) {
    if(!o[t]) {
      if(!l[t]) {
        var i = "function" == typeof require && require;
        if(!e && i) return i(t, !0);
        if(c) return c(t, !0);
        var a = new Error("Cannot find module '" + t + "'");
        throw a.code = "MODULE_NOT_FOUND", a
      }
      var r = o[t] = {
        exports: {}
      };
      l[t][0].call(r.exports, function(e) {
        return d(l[t][1][e] || e)
      }, r, r.exports, n, l, o, s)
    }
    return o[t].exports
  }
  for(var c = "function" == typeof require && require, e = 0; e < s.length; e++) d(s[e]);
  return d
}({
  1: [function(e, t, i) {
    "use strict";
    Object.assign(mejs.MepDefaults, {
      airPlayText: null
    }), Object.assign(MediaElementPlayer.prototype, {
      buildairplay: function() {
        if(window.WebKitPlaybackTargetAvailabilityEvent) {
          var r = this,
            e = mejs.Utils.isString(r.options.airPlayText) ? r.options.airPlayText : "AirPlay",
            n = document.createElement("div");
          n.className = r.options.classPrefix + "button " + r.options.classPrefix + "airplay-button", n.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + e + '" aria-label="' + e + '" tabindex="0"></button>', n.addEventListener("click", function() {
            r.media.originalNode.webkitShowPlaybackTargetPicker()
          });
          var t = r.media.originalNode.getAttribute("x-webkit-airplay");
          t && "allow" === t || r.media.originalNode.setAttribute("x-webkit-airplay", "allow"), r.media.originalNode.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", function() {
            var e = r.media.originalNode.webkitCurrentPlaybackTargetIsWireless ? "Started" : "Stopped",
              t = r.media.originalNode.webkitCurrentPlaybackTargetIsWireless ? "active" : "",
              i = n.querySelector("button"),
              a = mejs.Utils.createEvent("airplay" + e, r.media);
            r.media.dispatchEvent(a), "active" === t ? mejs.Utils.addClass(i, "active") : mejs.Utils.removeClass(i, "active")
          }), r.media.originalNode.addEventListener("webkitplaybacktargetavailabilitychanged", function(e) {
            "available" === e.availability && r.addControlElement(n, "airplay")
          })
        }
      }
    })
  }, {}]
}, {}, [1]);







! function u(r, c, s) {
  function l(n, e) {
    if(!c[n]) {
      if(!r[n]) {
        var t = "function" == typeof require && require;
        if(!e && t) return t(n, !0);
        if(a) return a(n, !0);
        var o = new Error("Cannot find module '" + n + "'");
        throw o.code = "MODULE_NOT_FOUND", o
      }
      var i = c[n] = {
        exports: {}
      };
      r[n][0].call(i.exports, function(e) {
        return l(r[n][1][e] || e)
      }, i, i.exports, u, r, c, s)
    }
    return c[n].exports
  }
  for(var a = "function" == typeof require && require, e = 0; e < s.length; e++) l(s[e]);
  return l
}({
  1: [function(e, n, t) {
    "use strict";
    mejs.i18n.en["mejs.fullscreen-off"] = "Turn off Fullscreen", mejs.i18n.en["mejs.fullscreen-on"] = "Go Fullscreen", mejs.i18n.en["mejs.download-video"] = "Download Video", Object.assign(mejs.MepDefaults, {
      contextMenuItems: [{
        render: function(e) {
          return void 0 === e.enterFullScreen ? null : e.isFullScreen ? mejs.i18n.t("mejs.fullscreen-off") : mejs.i18n.t("mejs.fullscreen-on")
        },
        click: function(e) {
          e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
        }
      }, {
        render: function(e) {
          return e.media.muted ? mejs.i18n.t("mejs.unmute") : mejs.i18n.t("mejs.mute")
        },
        click: function(e) {
          e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
        }
      }, {
        isSeparator: !0
      }, {
        render: function() {
          return mejs.i18n.t("mejs.download-video")
        },
        click: function(e) {
          window.location.href = e.media.currentSrc
        }
      }]
    }), Object.assign(MediaElementPlayer.prototype, {
      isContextMenuEnabled: !0,
      contextMenuTimeout: null,
      buildcontextmenu: function(n) {
        n.isVideo && (document.querySelector("." + n.options.classPrefix + "contextmenu") || (n.contextMenu = document.createElement("div"), n.contextMenu.className = n.options.classPrefix + "contextmenu", n.contextMenu.style.display = "none", document.body.appendChild(n.contextMenu)), n.container.addEventListener("contextmenu", function(e) {
          !n.isContextMenuEnabled || 3 !== e.keyCode && 3 !== e.which || (n.renderContextMenu(e), e.preventDefault(), e.stopPropagation())
        }), n.container.addEventListener("click", function() {
          n.contextMenu.style.display = "none"
        }), n.contextMenu.addEventListener("mouseleave", function() {
          n.startContextMenuTimer()
        }))
      },
      cleancontextmenu: function(e) {
        e.contextMenu.remove()
      },
      enableContextMenu: function() {
        this.isContextMenuEnabled = !0
      },
      disableContextMenu: function() {
        this.isContextMenuEnabled = !1
      },
      startContextMenuTimer: function() {
        var e = this;
        e.killContextMenuTimer(), e.contextMenuTimer = setTimeout(function() {
          e.hideContextMenu(), e.killContextMenuTimer()
        }, 750)
      },
      killContextMenuTimer: function() {
        var e = this.contextMenuTimer;
        null != e && (clearTimeout(e), e = null)
      },
      hideContextMenu: function() {
        this.contextMenu.style.display = "none"
      },
      renderContextMenu: function(e) {
        for(var u = this, n = "", t = u.options.contextMenuItems, o = 0, i = t.length; o < i; o++) {
          var r = t[o];
          if(r.isSeparator) n += '<div class="' + u.options.classPrefix + 'contextmenu-separator"></div>';
          else {
            var c = r.render(u);
            null != c && (n += '<div class="' + u.options.classPrefix + 'contextmenu-item" data-itemindex="' + o + '" id="element-' + 1e6 * Math.random() + '">' + c + "</div>")
          }
        }
        u.contextMenu.innerHTML = n;
        var s = u.contextMenu.offsetWidth,
          l = u.contextMenu.offsetHeight,
          a = e.pageX,
          d = e.pageY,
          f = document.documentElement,
          m = (window.pageXOffset || f.scrollLeft) - (f.clientLeft || 0),
          x = (window.pageYOffset || f.scrollTop) - (f.clientTop || 0),
          M = a + s > window.innerWidth + m ? a - s : a,
          p = d + l > window.innerHeight + x ? d - l : d;
        u.contextMenu.style.display = "", u.contextMenu.style.left = M + "px", u.contextMenu.style.top = p + "px";
        for(var v = u.contextMenu.querySelectorAll("." + u.options.classPrefix + "contextmenu-item"), h = function(e, n) {
            var t = v[e],
              o = parseInt(t.getAttribute("data-itemindex"), 10),
              i = u.options.contextMenuItems[o];
            void 0 !== i.show && i.show(t, u), t.addEventListener("click", function() {
              void 0 !== i.click && i.click(u), u.contextMenu.style.display = "none"
            })
          }, y = 0, j = v.length; y < j; y++) h(y);
        setTimeout(function() {
          u.killControlsTimer()
        }, 100)
      }
    })
  }, {}]
}, {}, [1]);

'use strict';
if(mejs.i18n.ca !== undefined) {
  mejs.i18n.ca['mejs.fullscreen-off'] = 'Desconnectar pantalla completaa';
  mejs.i18n.ca['mejs.fullscreen-on'] = 'Anar a pantalla completa';
  mejs.i18n.ca['mejs.download-video'] = 'Descarregar vídeo';
}
if(mejs.i18n.cs !== undefined) {
  mejs.i18n.cs['mejs.fullscreen-off'] = 'Vypnout režim celá obrazovka';
  mejs.i18n.cs['mejs.fullscreen-on'] = 'Na celou obrazovku';
  mejs.i18n.cs['mejs.download-video'] = 'Stáhnout video';
}
if(mejs.i18n.de !== undefined) {
  mejs.i18n.de['mejs.fullscreen-off'] = 'Vollbildmodus beenden';
  mejs.i18n.de['mejs.fullscreen-on'] = 'Vollbild';
  mejs.i18n.de['mejs.download-video'] = 'Video herunterladen';
}
if(mejs.i18n.es !== undefined) {
  mejs.i18n.es['mejs.fullscreen-off'] = 'Desconectar pantalla completa';
  mejs.i18n.es['mejs.fullscreen-on'] = 'Ir a pantalla completa';
  mejs.i18n.es['mejs.download-video'] = 'Descargar vídeo';
}
if(mejs.i18n.fa !== undefined) {
  mejs.i18n.fa['mejs.fullscreen-off'] = 'تمام صفحه را خاموش کنید';
  mejs.i18n.fa['mejs.fullscreen-on'] = 'برو تمام صفحه';
  mejs.i18n.fa['mejs.download-video'] = 'دانلود فیلم';
}
if(mejs.i18n.fr !== undefined) {
  mejs.i18n.fr['mejs.fullscreen-off'] = 'Quitter le mode plein écran';
  mejs.i18n.fr['mejs.fullscreen-on'] = 'Afficher en plein écran';
  mejs.i18n.fr['mejs.download-video'] = 'Télécharger la vidéo';
}
if(mejs.i18n.hr !== undefined) {
  mejs.i18n.hr['mejs.fullscreen-off'] = 'Isključi puni zaslon';
  mejs.i18n.hr['mejs.fullscreen-on'] = 'Uključi puni zaslon';
  mejs.i18n.hr['mejs.download-video'] = 'Preuzmi video';
}
if(mejs.i18n.hu !== undefined) {
  mejs.i18n.hu['mejs.fullscreen-off'] = 'Teljes képernyő kikapcsolása';
  mejs.i18n.hu['mejs.fullscreen-on'] = 'Átlépés teljes képernyős módra';
  mejs.i18n.hu['mejs.download-video'] = 'Videó letöltése';
}
if(mejs.i18n.it !== undefined) {
  mejs.i18n.it['mejs.fullscreen-off'] = 'Disattivare lo schermo intero';
  mejs.i18n.it['mejs.fullscreen-on'] = 'Attivare lo schermo intero';
  mejs.i18n.it['mejs.download-video'] = 'Scaricare il video';
}
if(mejs.i18n.ja !== undefined) {
  mejs.i18n.ja['mejs.fullscreen-off'] = '全画面をオフにする';
  mejs.i18n.ja['mejs.fullscreen-on'] = '全画面にする';
  mejs.i18n.ja['mejs.download-video'] = '動画をダウンロードする';
}
if(mejs.i18n.ko !== undefined) {
  mejs.i18n.ko['mejs.fullscreen-off'] = '전체화면 해제';
  mejs.i18n.ko['mejs.fullscreen-on'] = '전체화면 가기';
  mejs.i18n.ko['mejs.download-video'] = '비디오 다운로드';
}
if(mejs.i18n.ms !== undefined) {
  mejs.i18n.ms['mejs.fullscreen-off'] = 'Keluar dari mod skrin penuh';
  mejs.i18n.ms['mejs.fullscreen-on'] = 'Masuk ke mod skrin penuh';
  mejs.i18n.ms['mejs.download-video'] = 'Muat turun video';
}
if(mejs.i18n.nl !== undefined) {
  mejs.i18n.nl['mejs.fullscreen-off'] = 'Volledig scherm uitschakelen';
  mejs.i18n.nl['mejs.fullscreen-on'] = 'Volledig scherm';
  mejs.i18n.nl['mejs.download-video'] = 'Video downloaden';
}
if(mejs.i18n.pl !== undefined) {
  mejs.i18n.pl['mejs.fullscreen-off'] = 'Wyłącz pełny ekran';
  mejs.i18n.pl['mejs.fullscreen-on'] = 'Przejdź na pełny ekran';
  mejs.i18n.pl['mejs.download-video'] = 'Pobierz wideo';
}
if(mejs.i18n.pt !== undefined) {
  mejs.i18n.pt['mejs.fullscreen-off'] = 'Desligar ecrã completo';
  mejs.i18n.pt['mejs.fullscreen-on'] = 'Ir para ecrã completo';
  mejs.i18n.pt['mejs.download-video'] = 'Descarregar o vídeo';
}
if(mejs.i18n.ro !== undefined) {
  mejs.i18n.ro['mejs.fullscreen-off'] = 'Opreşte ecranul complet';
  mejs.i18n.ro['mejs.fullscreen-on'] = 'Treci la ecran complet';
  mejs.i18n.ro['mejs.download-video'] = 'Descarcă fişierul video';
}
if(mejs.i18n.ru !== undefined) {
  mejs.i18n.ru['mejs.fullscreen-off'] = 'Выключить полноэкранный режим';
  mejs.i18n.ru['mejs.fullscreen-on'] = 'Перейти в полноэкранный режим';
  mejs.i18n.ru['mejs.download-video'] = 'Скачать видео';
}
if(mejs.i18n.sk !== undefined) {
  mejs.i18n.sk['mejs.fullscreen-off'] = 'Vypnúť celú obrazovku';
  mejs.i18n.sk['mejs.fullscreen-on'] = 'Prejsť na celú obrazovku';
  mejs.i18n.sk['mejs.download-video'] = 'Prevziať video';
}
if(mejs.i18n.sv !== undefined) {
  mejs.i18n.sv['mejs.fullscreen-off'] = 'Stäng av Fullskärmläge';
  mejs.i18n.sv['mejs.fullscreen-on'] = 'Visa i Fullskärmsläge';
  mejs.i18n.sv['mejs.download-video'] = 'Ladda ner Video';
}
if(mejs.i18n.tr !== undefined) {
  mejs.i18n.tr['mejs.fullscreen-off'] = 'Tam ekran modundan çık';
  mejs.i18n.tr['mejs.fullscreen-on'] = 'Tam ekran moduna geç';
  mejs.i18n.tr['mejs.download-video'] = 'Videoyu indir';
}
if(mejs.i18n.uk !== undefined) {
  mejs.i18n.uk['mejs.fullscreen-off'] = 'Вимкнути повноекранний режим';
  mejs.i18n.uk['mejs.fullscreen-on'] = 'Увійти в повноекранний режим';
  mejs.i18n.uk['mejs.download-video'] = 'Скачати відео';
}
if(mejs.i18n.zh !== undefined) {
  mejs.i18n.zh['mejs.fullscreen-off'] = '關閉全屏';
  mejs.i18n.zh['mejs.fullscreen-on'] = '轉向全屏';
  mejs.i18n.zh['mejs.download-video'] = '下載視頻';
}
if(mejs.i18n['zh-CN'] !== undefined) {
  mejs.i18n['zh-CN']['mejs.fullscreen-off'] = '关闭全屏';
  mejs.i18n['zh-CN']['mejs.fullscreen-on'] = '转向全屏';
  mejs.i18n['zh-CN']['mejs.download-video'] = '下载视频';
}
