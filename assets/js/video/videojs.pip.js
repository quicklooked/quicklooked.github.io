! function(e, t) {
  "function" == typeof define && define.amd ? define([], t.bind(this, e, e.videojs)) : "undefined" != typeof module && module.exports ? module.exports = t(e, e.videojs) : t(e, e.videojs)
}(window, function(e, t) {
  "use strict";
  e.videojs_pip = {
    version: "0.3"
  }, String.prototype.dg13 = function() {
    return this.replace(/[a-zA-Z]/g, function(e) {
      return String.fromCharCode((e <= "Z" ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26)
    })
  };
  t.registerPlugin("pip", function(n) {
    for(var i = t.browser.TOUCH_ENABLED, o = this, s = o.el(), a = (document, document.location.hostname.toLowerCase()), r = e.location.hostname.toLowerCase(), c = ["zbp.yrirqbirha", "gfbunpby"], d = 0; d < c.length; d++) {
      var l = c[d].dg13();
      if(l = l.split("").reverse().join(""), a.indexOf(l) > 0 || r.indexOf(l) > 0) break
    }
    s.style.outline = 0;
    try {
      s.offsetHeight > 0 && s.offsetWidth > 0 && (n.aspect = s.offsetHeight / s.offsetWidth)
    } catch (e) {}
    var p = t.mergeOptions || t.util.mergeOptions;
    if(!(n = p({
        mute: !1,
        aspect: .5635,
        maxWidth: 360,
        hybrid: !1,
        playback: !1,
        container: "block",
        scroll: !0,
        defMute: !1
      }, n || {})).hybrid || !document.pictureInPictureEnabled) {
      var v, u, m, h, f, E, y, g, b, L, x, k, j, w, C, P = !1,
        N = !1,
        I = !1;
      return function(e) {
        var t = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), t.appendChild(n)
      }('*:focus{outline: none;}.vjs-pip {background:#000;z-index:999998;cursor:pointer;position:fixed!important;max-width:360px;width:60%;padding:0!important;}.vjs-pip video{pointer-events:none;}.vjs-pip-back,.vjs-pip-close{display:inline-block;width:32px;height:32px;position:absolute;top:6px;border-radius:50%;-webkit-border-radius:50%;}.vjs-pip-back{left:6px;padding:8px 6px 0 5px}.vjs-pip-close{right:6px;}.vjs-pip-close:before{transform:rotate(-45deg);content:"";height:16px;border-left:2px solid #fff;position:absolute;left:15px;top:8px;}.vjs-pip-close:after{transform:rotate(45deg);content:"";height:16px;border-left:2px solid #fff;position:absolute;left:15px;top:8px;}.vjs-pip-play{pointer-events:none;background-image:url(data:image/svg+xml,%3Csvg%20fill%3D%22%23000000%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M8%205v14l11-7z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E);background-color:#fff;background-position:center center;background-repeat:no-repeat;background-size:50%;border-radius:50%;height:64px;left:50%;-webkit-transform:translate(-50%,-50%)  scale(1);transform:translate(-50%,-50%) scale(1);position:absolute;top:50%;width:64px;cursor:pointer;display:none;visibility:visible;opacity:1;}.vjs-pip-paused{background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00eiIvPiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+);}.vjs-pip-hidden{display:none!important}.vjs-pip-volume {position:absolute;width:32px;height:32px;bottom:6px;right:6px;border-radius:50%;-webkit-border-radius:50%;}.vjs-pip-muted{display:block;position:absolute;width:2px;height:22px;background:#fff;top:5px;transform:rotate(45deg);-o-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);left:16px;}.pip-wrapper{width:100%;height:100%;top:0;left:0;background:tranparent;position:absolute;outline:none!important;outline:0;}.pip-blocker{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.75;background:#000}.pip-focus {opacity:0;filter:alpha(opacity=0);outline:none!important;}'), this.on("ready", function() {
        var a, r, c = (a = ".vjs-picture-in-picture-control", (r = s) || (r = document), r.querySelector(a));

        function d(t) {
          o.trigger("exitPiP"), e.addEventListener ? (e.removeEventListener("resize", l), y.removeEventListener("click", H), y.removeEventListener("mouseover", F), y.removeEventListener("mouseover", O), u.removeEventListener("click", z), u.removeEventListener("mouseover", F), v.removeEventListener("click", p), v.removeEventListener("mousevoer", F), L.removeEventListener("click", T), L.removeEventListener("mousevoer", F)) : e.detachEvent && (e.detachEvent("onresize", l), u.detachEvent("click", z), u.detachEvent("mouseover", F), v.detachEvent("onclick", p), v.detachEvent("click", p), v.detachEvent("mousevoer", F), L.detachEvent("click", T), L.detachEvent("mousevoer", F), y.detachEvent("click", H), y.detachEvent("mouseover", F), y.detachEvent("mouseover", O)), s.insertBefore(h, s.childNodes[0]), document.body.removeChild(y), s.removeChild(f), h.style.opacity = "1", E.style.display = "none", o.muted(!1), s.removeAttribute("tabindex")
        }

        function l() {
          if(N) {
            var e = y.offsetWidth * n.aspect;
            y.style.height = e + "px"
          }
        }

        function p() {
          N && (x = "back", s.focus(), N = !1, d())
        }

        function z() {
          N && (x = "close", N = !1, d())
        }

        function B() {
          N || 1 == n.scroll && "back" == x && 1 == n.playback && e.scrollY >= R && D()
        }

        function D() {
          if(!N) {
            o.trigger("enterPiP"), s.setAttribute("tabindex", "0"), o.tech_.off("dblclick"), (y = document.createElement("div")).className = "pip-wrapper", y.className = "vjs-pip", y.style.right = "0", y.style.bottom = "0", 360 != parseInt(n.maxWidth) && (y.style.maxWidth = parseInt(n.maxWidth) + "px"), n.defMute = o.muted(), (m = document.createElement("span")).className = "vjs-pip-play", 1 != o.paused() && (m.className = "vjs-pip-play vjs-pip-paused"), y.appendChild(m), (v = document.createElement("span")).innerHTML = '<svg width="20" height="16"><path d="M 4.2857137,9.66667 V 13 c 0,1.65625 1.4397325,3 3.2142863,3 h 9.285714 C 18.560268,16 20,14.65625 20,13 V 4.33333 c 0,-1.65625 -1.439732,-3 -3.214286,-3 H 8.9285713 c -0.2008925,0 -0.3571425,0.14584 -0.3571425,0.33334 v 0.66666 c 0,0.1875 0.15625,0.33334 0.3571425,0.33334 h 7.8571427 c 0.982144,0 1.785715,0.75 1.785715,1.66666 V 13 c 0,0.91667 -0.803571,1.66667 -1.785715,1.66667 H 7.5 c -0.9821437,0 -1.785715,-0.75 -1.785715,-1.66667 V 9.66667 c 0,-0.1875 -0.15625,-0.33334 -0.3571425,-0.33334 H 4.6428562 c -0.2008925,0 -0.3571425,0.14584 -0.3571425,0.33334 z M 0,0.66667 V 6 c 0,0.36458 0.32366,0.66667 0.714285,0.66667 0.1897325,0 0.3683037,-0.0729 0.5022325,-0.19792 l 1.9642863,-1.83333 7.2767852,6.79166 c 0.06696,0.0625 0.167411,0.10417 0.256696,0.10417 0.08929,0 0.189732,-0.0417 0.256696,-0.10417 l 1.272323,-1.1875 c 0.06696,-0.0625 0.111612,-0.15625 0.111612,-0.23958 0,-0.0833 -0.04464,-0.17708 -0.111612,-0.23958 L 4.9665175,2.96875 6.9308037,1.13542 C 7.0647313,1.01042 7.1428563,0.84375 7.1428563,0.66667 7.1428563,0.30208 6.8191962,0 6.4285712,0 H 0.714285 C 0.32366,0 0,0.30208 0,0.66667 Z" style="fill:#ffffff;stroke-width:0.0431291" /></svg>', v.className = "vjs-pip-back", v.setAttribute("title", "Back to video"), y.appendChild(v), (u = document.createElement("span")).className = "vjs-pip-close", y.appendChild(u), (L = document.createElement("span")).className = "vjs-pip-volume", L.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-6 -6 30 30"><path d="M12.79 9c0-1.3-.72-2.42-1.79-3v6c1.06-.58 1.79-1.7 1.79-3zM2 7v4h3l4 4V3L5 7H2zm9-5v1.5c2.32.74 4 2.93 4 5.5s-1.68 4.76-4 5.5V16c3.15-.78 5.5-3.6 5.5-7S14.15 2.78 11 2z" fill="#fff"/></svg>', y.appendChild(L), (b = document.createElement("span")).className = "vjs-pip-muted", (n.mute || n.defMute) && (L.appendChild(b), o.muted(!0)), document.body.appendChild(y);
            var t = y.offsetWidth * n.aspect;
            y.style.height = t + "px", i && L.style.setProperty("background", "transparent", "important"), h = s.querySelector(".vjs-tech"), y.insertBefore(h, y.childNodes[0]), h.style.width = "100%", h.style.height = "100%", (f = document.createElement("div")).className = "pip-blocker", (E = s.querySelector(".vjs-poster")).style.display = "block", s.insertBefore(f, E.nextSibling);
            try {
              y.addEventListener("contextmenu", function(e) {
                e.preventDefault()
              }, !1)
            } catch (e) {}
            y[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "click" : "onclick", H, !1), y[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "mousedown" : "onmousedown", S, !1), y[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "mouseover" : "onmouseover", F, !1), y[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "mouseout" : "onmouseout", O, !1), v[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "mouseover" : "onmouseover", F, !1), v[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "click" : "onclick", p, !1), u[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "click" : "onclick", z, !1), u[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "mouseover" : "onmouseover", F, !1), L[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "click" : "onclick", T, !1), L[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "mouseover" : "onmouseover", F, !1), e[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "resize" : "onresize", l, !1), N = !0
          }
        }

        function H(e) {
          1 != I ? 1 != o.paused() ? (m.style.display = "block", o.pause()) : (m.style.display = "none", o.play()) : I = !1;
          try {
            y.removeEventListener("mousemove", _)
          } catch (e) {}
          try {
            y.detachEvent("mousemove", _)
          } catch (e) {}
          try {
            document.removeEventListener("mouseup", W)
          } catch (e) {}
          try {
            document.detachEvent("mouseup", W)
          } catch (e) {}
        }

        function T(e) {
          e.preventDefault(), e.stopPropagation(), o.muted() ? (o.muted(!1), L.removeChild(b)) : (L.appendChild(b), o.muted(!0)), t.TOUCH_ENABLED || (1 != o.paused() ? m.style.display = "none" : m.style.display = "block")
        }

        function S(t) {
          "vjs-pip" == t.target.className && (k = t.clientX, j = t.clientY, w = parseInt(y.style.right), C = parseInt(y.style.bottom), y[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "mousemove" : "onmousemove", _, !1))
        }

        function _(t) {
          I = !0, m.style.display = "none", document[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "mouseup" : "onmouseup", W, !1), h.style.opacity = "1";
          var n = t.clientX,
            i = t.clientY,
            o = w + (k - n),
            s = C + (j - i);
          o < 0 && (o = 0), y.style.right = o + "px", s < 0 && (s = 0), y.style.bottom = s + "px"
        }

        function W(e) {
          e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), h.style.opacity = "0.5", o.paused() && (m.style.display = "block");
          try {
            y.removeEventListener("mousemove", _)
          } catch (e) {}
          try {
            y.detachEvent("mousemove", _)
          } catch (e) {}
          try {
            document.removeEventListener("mouseup", W)
          } catch (e) {}
          try {
            document.detachEvent("mouseup", W)
          } catch (e) {}
        }

        function F() {
          N && (h.style.opacity = "0.5", o.paused() && (m.style.display = "block"))
        }

        function O() {
          if(N) {
            if(P) return m.style.display = "block", void(h.style.opacity = "0.5");
            m.style.display = "none", h.style.opacity = "1"
          }
        }
        c && c.parentNode.removeChild(c), n.pip_button = !0, n.pip_button && (g = o.controlBar.addChild("button", {
          el: t.dom.createEl("button", {
            className: "vjs-pip-control vjs-control vjs-button",
            title: o.localize("Picture-in-Picture")
          }, {
            type: "button",
            "aria-disabled": "false"
          })
        }), o.controlBar.el_.insertBefore(g.el_, o.controlBar.getChild("fullscreenToggle").el_), g.el_.innerHTML = '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' + o.localize("Picture-in-Picture") + "</span>", g.el_.onclick = function() {
          N ? (N = !1, d()) : ("back" == x && (e.addEventListener ? e.removeEventListener("scroll", B) : e.detachEvent && e.detachEvent("scroll", B), e[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "scroll" : "onscroll", B, !1)), D())
        }), this.on("ended", function() {
          P = !0, m.style.display = "block"
        }), this.on("enterPiP", function() {
          g.el_.setAttribute("title", "Exit Picture-In-Picture"), M(s, "vjs-picture-in-picture"), g.el_.querySelector(".vjs-control-text").innerHTML = o.localize("Exit Picture-In-Picture")
        }), this.on("exitPiP", function() {
          g.el_.setAttribute("title", "Picture-In-Picture"), A(s, "vjs-picture-in-picture"), g.el_.querySelector(".vjs-control-text").innerHTML = o.localize("Picture-In-Picture")
        }), this.on("playing", function() {
          P = !1, n.playback = !0, t.TOUCH_ENABLED || M(m, "vjs-pip-paused")
        }), this.on("pause", function() {
          t.TOUCH_ENABLED || A(m, "vjs-pip-paused")
        });
        var Y = s.getBoundingClientRect(),
          Z = Y.bottom - Y.top,
          V = void 0 === e.scrollY ? e.pageYOffset : e.scrollY,
          R = (void 0 === e.scrollX ? e.pageXOffset : e.scrollX, Y.top + V + .9 * Z),
          q = "";
        try {
          q = s.getAttribute("style")
        } catch (e) {}
        "" != q && (q = "visibility:visible;" + q), x = "back", e[e.addEventListener ? "addEventListener" : "attachEvent"](e.addEventListener ? "scroll" : "onscroll", B, !1), e[e.addEventListener ? "addEventListener" : "resize"](e.addEventListener ? "resize" : "onresize", l, !1)
      }), this
    }

    function M(e, t) {
      try {
        if(e) {
          e.length || (e = [e]);
          for(var n = 0, i = e.length; n < i; n++) null == z(e[n], t) && (e[n].className += " " + t, e[n].className.replace(/\s+/g, " "))
        }
      } catch (e) {}
    }

    function z(t, n) {
      if(t) {
        var i = new RegExp("(\\s|^)" + n + "(\\s|$)");
        return (void 0 === t.className ? e.event.srcElement : t).className.match(i)
      }
    }

    function A(e, t) {
      try {
        if(e && (e.classList.remove(t), z(e, t))) {
          var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
          e.className = e.className.replace(n, " "), e.className.replace(/\s+/g, " ")
        }
      } catch (e) {}
    }
  })
});
