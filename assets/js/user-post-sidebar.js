document.addEventListener("DOMContentLoaded", function() {
  var status = "under1180";
  var clientHeight = document.getElementById("divSlide").clientHeight;
  var clientHeight1 = document.getElementById("divSlide1").clientHeight;
  var clientHeight2 = document.getElementById("divSlide2").clientHeight;
  window.addEventListener("scroll", function() {
    var x = pageYOffset;
    var y = 88 + divSlide1.clientHeight + divSlide2.clientHeight;
    if(x > y && x < divSlide.clientHeight - 188) {
      if(status == "under1180") {
        document.getElementById("slide").classList.remove("em", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
        document.getElementById("slide").classList.add("nr", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
        document.getElementById("slide1").classList.remove("gg");
        document.getElementById("slide1").classList.add("vas");
        document.getElementById("slide2").classList.remove("em", "gg", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
        document.getElementById("slide2").classList.add("nr", "va", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
        status = "over1180";
      }
    } else {
      if(status == "over1180") {
        document.getElementById("slide").classList.remove("nr", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
        document.getElementById("slide").classList.add("em", "gg", "fj", "ml", "w", "tr", "fl", "mj", "sv");
        document.getElementById("slide1").classList.remove("vas");
        document.getElementById("slide1").classList.add("gg");
        document.getElementById("slide2").classList.remove("nr", "va", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
        document.getElementById("slide2").classList.add("em", "gg", "me", "fj", "mf", "mg", "mh", "mi", "mj", "mk");
        status = "under1180";
      }
    }
  })
})



(self.webpackChunklite = self.webpackChunklite || []).push([
  [179],
  {
    27108: (e, t, n) => {
      "use strict";
      n.d(t, {
        jC: () => v,
        V6: () => E
      });
      var r = n(34575),
        o = n.n(r),
        a = n(93913),
        i = n.n(a),
        c = n(23493),
        l = n.n(c),
        u = n(23279),
        s = n.n(u),
        d = n(58875),
        m = n.n(d),
        p = n(29652),
        f = 100,
        g = (function () {
          function e() {
            o()(this, e);
          }
          return (
            i()(e, [
              {
                key: "on",
                value: function () {}
              },
              {
                key: "off",
                value: function () {}
              }
            ]),
            e
          );
        })(),
        h = (function () {
          function e(t) {
            var n = this;
            o()(this, e),
              (this._emitter = void 0),
              (this._onScrollEnd = void 0),
              (this._onScrollThrottled = void 0),
              (this._onResizeThrottled = void 0),
              (this._onResizeEnd = void 0),
              (this._resizingTimeout = void 0),
              (this._lastKnownPageYOffset = void 0),
              (this.singularEventsFired = {
                load: !1
              }),
              (this.ref = void 0),
              (this.ref = t || window),
              (this._emitter = new p.Z()),
              (this._onScrollEnd = s()(function () {
                n._emitter.emit("scroll_end");
              }, f)),
              (this._onScrollThrottled = l()(function () {
                n._emitter.emit("scroll_throttled");
              }, f)),
              (this._onResizeThrottled = l()(function () {
                n._emitter.emit("resize_throttled");
              }, f)),
              (this._onResizeEnd = l()(function () {
                n._emitter.emit("resize_end");
              }, f)),
              (this._resizingTimeout = null),
              this.ref.addEventListener("load", this._onLoad.bind(this)),
              this.ref.addEventListener("scroll", this._onScroll.bind(this)),
              this.ref.addEventListener("resize", this._onResize.bind(this), {
                passive: !0
              });
          }
          return (
            i()(e, [
              {
                key: "on",
                value: function (e, t) {
                  this.singularEventsFired[e] ? t() : this._emitter.on(e, t);
                }
              },
              {
                key: "off",
                value: function (e, t) {
                  this._emitter.off(e, t);
                }
              },
              {
                key: "_onLoad",
                value: function () {
                  var e = this;
                  this.singularEventsFired.load ||
                    setTimeout(function () {
                      e._emitter.emit("load"),
                        (e.singularEventsFired.load = !0);
                    }, 500);
                }
              },
              {
                key: "_onScroll",
                value: function () {
                  this._emitter.emit("scroll"),
                    this._onScrollThrottled(),
                    this._onScrollEnd();
                  var e =
                    this.ref instanceof Window
                      ? this.ref.pageYOffset
                      : this.ref.scrollTop;
                  "number" == typeof this._lastKnownPageYOffset &&
                    (this._lastKnownPageYOffset > e
                      ? this._emitter.emit("scroll_up")
                      : this._emitter.emit("scroll_down")),
                    (this._lastKnownPageYOffset = e);
                }
              },
              {
                key: "_onResize",
                value: function () {
                  var e = this;
                  this._emitter.emit("resize"),
                    this._onResizeThrottled(),
                    this._resizingTimeout &&
                      clearTimeout(this._resizingTimeout),
                    (this._resizingTimeout = setTimeout(function () {
                      e._onResizeEnd(), (e._resizingTimeout = null);
                    }, f));
                }
              }
            ]),
            e
          );
        })(),
        v = m().canUseDOM
          ? function (e) {
              return new h(e);
            }
          : function () {
              return new g();
            },
        E = v();
    }
  },
  0,
  [
    [29613, 6700, 8464],
    [30514, 6700, 8464]
  ]
]);
