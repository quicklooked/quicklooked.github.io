! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.MediumZoomElement = t()
}(this, function() {
  "use strict";

  function e() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
  }
  var t = Object.assign || function(e) {
      for(var t, o = 1; o < arguments.length; o++)
        for(var n in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e
    },
    o = function(e) {
      if(Array.isArray(e)) {
        for(var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
        return o
      }
      return Array.from(e)
    },
    n = function(e, t) {
      return t = {
        exports: {}
      }, e(t, t.exports), t.exports
    }(function(e) {
      var n = ["IMG"],
        r = [27, 81],
        i = function(e) {
          return n.includes(e.tagName)
        },
        a = function(e) {
          return e.naturalWidth !== e.width
        },
        c = function(e) {
          return NodeList.prototype.isPrototypeOf(e) || HTMLCollection.prototype.isPrototypeOf(e)
        },
        u = function(e) {
          return e && 1 === e.nodeType
        };
      e.exports = function(e) {
        var s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          d = s.margin,
          l = void 0 === d ? 0 : d,
          m = s.background,
          f = void 0 === m ? "#fff" : m,
          p = s.scrollOffset,
          h = void 0 === p ? 48 : p,
          v = s.metaClick,
          g = function(e) {
            var t = e.getBoundingClientRect(),
              o = t.top,
              n = t.left,
              r = t.width,
              i = t.height,
              a = e.cloneNode(),
              c = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
              u = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            return a.removeAttribute("id"), a.style.position = "absolute", a.style.top = o + c + "px", a.style.left = n + u + "px", a.style.width = r + "px", a.style.height = i + "px", a.style.transform = "", a
          },
          y = function() {
            if(T.template)
              if(T.template.dispatchEvent(new Event("show")), j = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, _ = !0, T.zoomed = g(T.template), document.body.appendChild(x), document.body.appendChild(T.zoomed), requestAnimationFrame(function() {
                  document.body.classList.add("medium-zoom--open")
                }), T.template.style.visibility = "hidden", T.zoomed.classList.add("medium-zoom-image--open"), T.zoomed.addEventListener("click", b), T.zoomed.addEventListener("transitionend", k), T.template.getAttribute("data-zoom-target")) {
                T.zoomedHd = T.zoomed.cloneNode(), T.zoomedHd.src = T.zoomed.getAttribute("data-zoom-target"), T.zoomedHd.onerror = function() {
                  clearInterval(e), console.error("Unable to reach the zoom image target " + T.zoomedHd.src), T.zoomedHd = null, O()
                };
                var e = setInterval(function() {
                  T.zoomedHd.naturalWidth && (clearInterval(e), T.zoomedHd.classList.add("medium-zoom-image--open"), T.zoomedHd.addEventListener("click", b), document.body.appendChild(T.zoomedHd), O())
                }, 10)
              } else O()
          },
          b = function e() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
              o = function() {
                _ || !T.template || (T.template.dispatchEvent(new Event("hide")), _ = !0, document.body.classList.remove("medium-zoom--open"), T.zoomed.style.transform = "", T.zoomedHd && (T.zoomedHd.style.transform = "", T.zoomedHd.removeEventListener("click", e)), T.zoomed.removeEventListener("click", e), T.zoomed.addEventListener("transitionend", E))
              };
            0 < t ? setTimeout(o, t) : o()
          },
          z = function(e) {
            T.template ? b() : (T.template = e ? e.target : H[0], y())
          },
          w = function(e) {
            return (e.metaKey || e.ctrlKey) && C.metaClick ? window.open(e.target.getAttribute("data-original") || e.target.parentNode.href || e.target.src, "_blank") : (e.preventDefault(), void z(e))
          },
          k = function e() {
            _ = !1, T.zoomed.removeEventListener("transitionend", e), T.template.dispatchEvent(new Event("shown"))
          },
          E = function e() {
            T.template && (T.template.style.visibility = "", document.body.removeChild(T.zoomed), T.zoomedHd && document.body.removeChild(T.zoomedHd), document.body.removeChild(x), T.zoomed.classList.remove("medium-zoom-image--open"), _ = !1, T.zoomed.removeEventListener("transitionend", e), T.template.dispatchEvent(new Event("hidden")), T.template = null, T.zoomed = null, T.zoomedHd = null)
          },
          A = function() {
            if(!_ && T.template) {
              var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
              Math.abs(j - e) > C.scrollOffset && b(150)
            }
          },
          L = function(e) {
            r.includes(e.keyCode || e.which) && b()
          },
          O = function() {
            var e = Math.min;
            if(T.template) {
              var t = window.innerWidth,
                o = window.innerHeight,
                n = t - 2 * C.margin,
                r = o - 2 * C.margin,
                i = T.zoomedHd || T.template,
                a = i.naturalWidth,
                c = void 0 === a ? n : a,
                u = i.naturalHeight,
                s = void 0 === u ? r : u,
                d = i.getBoundingClientRect(),
                l = d.top,
                m = d.left,
                f = d.width,
                p = d.height,
                h = e(e(c, n) / f, e(s, r) / p) || 1,
                v = "scale(" + h + ") translate3d(" + ((n - f) / 2 - m + C.margin) / h + "px, " + ((r - p) / 2 - l + C.margin) / h + "px, 0)";
              T.zoomed.style.transform = v, T.zoomedHd && (T.zoomedHd.style.transform = v)
            }
          },
          C = {
            margin: l,
            background: f,
            scrollOffset: h,
            metaClick: void 0 === v || v
          };
        e instanceof Object && t(C, e);
        var H = function(e) {
            try {
              return Array.isArray(e) ? e.filter(i) : c(e) ? [].concat(o(e)).filter(i) : u(e) ? [e].filter(i) : "string" == typeof e ? [].concat(o(document.querySelectorAll(e))).filter(i) : [].concat(o(document.querySelectorAll(n.map(function(e) {
                return e.toLowerCase()
              }).join(",")))).filter(a)
            } catch (e) {
              throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList, an HTMLCollection or an array.\nSee: https://github.com/francoischalifour/medium-zoom")
            }
          }(e),
          x = function(e) {
            var t = document.createElement("div");
            return t.classList.add("medium-zoom-overlay"), t.style.backgroundColor = e, t
          }(C.background),
          T = {
            template: null,
            zoomed: null,
            zoomedHd: null
          },
          j = 0,
          _ = !1;
        return H.forEach(function(e) {
          e.classList.add("medium-zoom-image"), e.addEventListener("click", w)
        }), x.addEventListener("click", b), document.addEventListener("scroll", A), document.addEventListener("keyup", L), window.addEventListener("resize", b), {
          show: z,
          hide: b,
          toggle: z,
          update: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return e.background && (x.style.backgroundColor = e.background), t(C, e)
          },
          addEventListeners: function(e, t) {
            H.forEach(function(o) {
              o.addEventListener(e, t)
            })
          },
          detach: function() {
            var e = function e() {
              var t = new Event("detach");
              H.forEach(function(e) {
                e.classList.remove("medium-zoom-image"), e.removeEventListener("click", w), e.dispatchEvent(t)
              }), H.splice(0, H.length), x.removeEventListener("click", b), document.removeEventListener("scroll", A), document.removeEventListener("keyup", L), window.removeEventListener("resize", b), T.zoomed && T.zoomed.removeEventListener("transitionend", e)
            };
            T.zoomed ? (b(), T.zoomed.addEventListener("transitionend", requestAnimationFrame(e))) : e()
          },
          images: H,
          options: C
        }
      }
    });
  ! function(e, t) {
    if("undefined" == typeof document) return t;
    e = e || "";
    var o = document.head || document.getElementsByTagName("head")[0],
      n = document.createElement("style");
    n.type = "text/css", o.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
  }(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--open .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s}.medium-zoom-image--open{position:relative;z-index:1;cursor:pointer;cursor:zoom-out;will-change:transform}", void 0);
  var r = n,
    i = (function() {
      function e(e) {
        this.value = e
      }

      function t(t) {
        function o(r, i) {
          try {
            var a = t[r](i),
              c = a.value;
            c instanceof e ? Promise.resolve(c.value).then(function(e) {
              o("next", e)
            }, function(e) {
              o("throw", e)
            }) : n(a.done ? "return" : "normal", a.value)
          } catch (e) {
            n("throw", e)
          }
        }

        function n(e, t) {
          switch(e) {
            case "return":
              r.resolve({
                value: t,
                done: !0
              });
              break;
            case "throw":
              r.reject(t);
              break;
            default:
              r.resolve({
                value: t,
                done: !1
              })
          }(r = r.next) ? o(r.key, r.arg): i = null
        }
        var r, i;
        this._invoke = function(e, t) {
          return new Promise(function(n, a) {
            var c = {
              key: e,
              arg: t,
              resolve: n,
              reject: a,
              next: null
            };
            i ? i = i.next = c : (r = i = c, o(e, t))
          })
        }, "function" != typeof t.return && (this.return = void 0)
      }
      "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function() {
        return this
      }), t.prototype.next = function(e) {
        return this._invoke("next", e)
      }, t.prototype.throw = function(e) {
        return this._invoke("throw", e)
      }, t.prototype.return = function(e) {
        return this._invoke("return", e)
      }
    }(), function(e, t) {
      if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }),
    a = function() {
      function e(e, t) {
        for(var o = 0; o < t.length; o++) {
          var n = t[o];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
      }
    }(),
    c = function(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e
    },
    u = function(e, t) {
      if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    },
    s = function(e, t) {
      if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    },
    d = function(e) {
      if(Array.isArray(e)) {
        for(var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
        return o
      }
      return Array.from(e)
    };
  Object.setPrototypeOf(e.prototype, HTMLElement.prototype), Object.setPrototypeOf(e, HTMLElement);
  var l = function(e) {
      return e.replace(/-([a-z])/g, function(e) {
        return e[1].toUpperCase()
      })
    },
    m = document.createElement("template");
  m.innerHTML = "\n<style>\n  :host {\n    display: block;\n  }\n  img {\n    max-width: 100%;\n  }\n  .medium-zoom-image {\n    cursor: zoom-in;\n  }\n</style>\n<img />\n";
  var f = function(t) {
    function o() {
      i(this, o);
      var e = s(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
      return e.attachShadow({
        mode: "open"
      }), e.shadowRoot.appendChild(m.content.cloneNode(!0)), e.image = e.shadowRoot.querySelector("img"), e.zoom = r(e.image), Object.keys(e.zoom).forEach(function(t) {
        return e[t] = e.zoom[t]
      }), e.setAttribute("role", "img"), e.setAttribute("aria-label", e.alt), e
    }
    return u(o, e), a(o, null, [{
      key: "getOptionName",
      value: function(e) {
        return "disable-metaclick" === e ? "metaClick" : l(e)
      }
    }, {
      key: "observedOptions",
      get: function() {
        return ["margin", "background", "scroll-offset", "disable-metaclick", "zoom-target"]
      }
    }, {
      key: "observedAttributes",
      get: function() {
        return [].concat(d(o.observedOptions), ["src", "alt", "width", "height", "style"])
      }
    }]), a(o, [{
      key: "disconnectedCallback",
      value: function() {
        this.zoom.detach()
      }
    }, {
      key: "adoptedCallback",
      value: function() {
        this.zoom.hide()
      }
    }, {
      key: "attributeChangedCallback",
      value: function(e, t, n) {
        if(o.observedOptions.includes(e)) {
          if("zoom-target" === e) return void this.image.setAttribute("data-zoom-target", n);
          this.zoom.update(c({}, o.getOptionName(e), this[o.getOptionName(e)]))
        } else this.image.setAttribute(e, n)
      }
    }, {
      key: "src",
      get: function() {
        return this.getAttribute("src") || ""
      },
      set: function(e) {
        this.setAttribute("src", e)
      }
    }, {
      key: "alt",
      get: function() {
        return this.getAttribute("alt") || ""
      },
      set: function(e) {
        this.setAttribute("alt", e)
      }
    }, {
      key: "zoomTarget",
      get: function() {
        return this.getAttribute("zoom-target") || ""
      },
      set: function(e) {
        e ? this.setAttribute("zoom-target", e) : this.removeAttribute("zoom-target")
      }
    }, {
      key: "width",
      get: function() {
        return this.getAttribute("width") || ""
      },
      set: function(e) {
        e ? this.setAttribute("width", e) : this.removeAttribute("width")
      }
    }, {
      key: "height",
      get: function() {
        return this.getAttribute("height") || ""
      },
      set: function(e) {
        e ? this.setAttribute("height", e) : this.removeAttribute("height")
      }
    }, {
      key: "margin",
      get: function() {
        return Number(this.getAttribute("margin")) || ""
      },
      set: function(e) {
        e ? this.setAttribute("margin", e) : this.removeAttribute("margin")
      }
    }, {
      key: "background",
      get: function() {
        return this.getAttribute("background") || ""
      },
      set: function(e) {
        e ? this.setAttribute("background", e) : this.removeAttribute("background")
      }
    }, {
      key: "scrollOffset",
      get: function() {
        return this.hasAttribute("scroll-offset") ? Number(this.getAttribute("scroll-offset")) : ""
      },
      set: function(e) {
        null !== e ? this.setAttribute("scroll-offset", Number(e)) : this.removeAttribute("scroll-offset")
      }
    }, {
      key: "metaClick",
      get: function() {
        return !this.hasAttribute("disable-metaclick")
      },
      set: function(e) {
        e ? this.setAttribute("disable-metaclick", e) : this.removeAttribute("disable-metaclick")
      }
    }]), o
  }();
  return window.customElements.define("medium-zoom", f), f
});
