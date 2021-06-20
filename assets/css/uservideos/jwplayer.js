window.jwplayer = function(t) {
  function e(e) {
    for(var n, i, o = e[0], u = e[1], a = 0, s = []; a < o.length; a++) i = o[a], Object.prototype.hasOwnProperty.call(r, i) && r[i] && s.push(r[i][0]), r[i] = 0;
    for(n in u) Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
    for(c && c(e); s.length;) s.shift()()
  }
  var n = {},
    r = {
      0: 0
    };

  function i(e) {
    if(n[e]) return n[e].exports;
    var r = n[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports
  }
  i.e = function(t) {
    var e = [],
      n = r[t];
    if(0 !== n)
      if(n) e.push(n[2]);
      else {
        var o = new Promise((function(e, i) {
          n = r[t] = [e, i]
        }));
        e.push(n[2] = o);
        var u, a = document.createElement("script");
        a.charset = "utf-8", a.timeout = 55, i.nc && a.setAttribute("nonce", i.nc), a.src = function(t) {
          return i.p + "" + ({
            1: "jwplayer.amp",
            2: "jwplayer.controls",
            3: "jwplayer.controls.tizen",
            4: "jwplayer.core",
            5: "jwplayer.core.controls",
            6: "jwplayer.core.controls.html5",
            7: "jwplayer.core.controls.polyfills",
            8: "jwplayer.core.controls.polyfills.html5",
            9: "polyfills.intersection-observer",
            10: "polyfills.webvtt",
            11: "provider.airplay",
            12: "provider.cast",
            13: "provider.hlsjs",
            14: "provider.hlsjs-alt",
            15: "provider.html5",
            16: "provider.shaka",
            17: "related",
            18: "vttparser"
          } [t] || t) + ".js"
        }(t);
        var c = new Error;
        u = function(e) {
          a.onerror = a.onload = null, clearTimeout(s);
          var n = r[t];
          if(0 !== n) {
            if(n) {
              var i = e && ("load" === e.type ? "missing" : e.type),
                o = e && e.target && e.target.src;
              c.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")", c.name = "ChunkLoadError", c.type = i, c.request = o, n[1](c)
            }
            r[t] = void 0
          }
        };
        var s = setTimeout((function() {
          u({
            type: "timeout",
            target: a
          })
        }), 55e3);
        a.onerror = a.onload = u, document.head.appendChild(a)
      } return Promise.all(e)
  }, i.m = t, i.c = n, i.d = function(t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  }, i.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, i.t = function(t, e) {
    if(1 & e && (t = i(t)), 8 & e) return t;
    if(4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if(i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for(var r in t) i.d(n, r, function(e) {
        return t[e]
      }.bind(null, r));
    return n
  }, i.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return i.d(e, "a", e), e
  }, i.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, i.p = "", i.oe = function(t) {
    throw console.error(t), t
  };
  var o = window.webpackJsonpjwplayer = window.webpackJsonpjwplayer || [],
    u = o.push.bind(o);
  o.push = e, o = o.slice();
  for(var a = 0; a < o.length; a++) e(o[a]);
  var c = u;
  return i(i.s = 51)
}([function(t, e, n) {
  "use strict";
  n.d(e, "i", (function() {
    return k
  })), n.d(e, "A", (function() {
    return x
  })), n.d(e, "E", (function() {
    return T
  })), n.d(e, "l", (function() {
    return _
  })), n.d(e, "k", (function() {
    return I
  })), n.d(e, "a", (function() {
    return L
  })), n.d(e, "b", (function() {
    return R
  })), n.d(e, "F", (function() {
    return B
  })), n.d(e, "n", (function() {
    return H
  })), n.d(e, "G", (function() {
    return Q
  })), n.d(e, "e", (function() {
    return W
  })), n.d(e, "I", (function() {
    return Z
  })), n.d(e, "m", (function() {
    return $
  })), n.d(e, "h", (function() {
    return J
  })), n.d(e, "p", (function() {
    return K
  })), n.d(e, "c", (function() {
    return G
  })), n.d(e, "H", (function() {
    return it
  })), n.d(e, "q", (function() {
    return at
  })), n.d(e, "g", (function() {
    return ct
  })), n.d(e, "j", (function() {
    return st
  })), n.d(e, "C", (function() {
    return lt
  })), n.d(e, "w", (function() {
    return dt
  })), n.d(e, "t", (function() {
    return gt
  })), n.d(e, "v", (function() {
    return mt
  })), n.d(e, "x", (function() {
    return bt
  })), n.d(e, "s", (function() {
    return yt
  })), n.d(e, "u", (function() {
    return jt
  })), n.d(e, "r", (function() {
    return wt
  })), n.d(e, "y", (function() {
    return Ot
  })), n.d(e, "o", (function() {
    return Ct
  })), n.d(e, "d", (function() {
    return xt
  })), n.d(e, "D", (function() {
    return Pt
  })), n.d(e, "B", (function() {
    return St
  })), n.d(e, "z", (function() {
    return Et
  }));
  var r = n(14),
    i = {},
    o = Array.prototype,
    u = Object.prototype,
    a = Function.prototype,
    c = o.slice,
    s = o.concat,
    l = u.toString,
    f = u.hasOwnProperty,
    d = o.map,
    p = o.reduce,
    h = o.forEach,
    v = o.filter,
    g = o.every,
    m = o.some,
    b = o.indexOf,
    y = Array.isArray,
    j = Object.keys,
    w = a.bind,
    O = window.isFinite,
    k = function(t, e, n) {
      var r, o;
      if(null == t) return t;
      if(h && t.forEach === h) t.forEach(e, n);
      else if(t.length === +t.length) {
        for(r = 0, o = t.length; r < o; r++)
          if(e.call(n, t[r], r, t) === i) return
      } else {
        var u = ot(t);
        for(r = 0, o = u.length; r < o; r++)
          if(e.call(n, t[u[r]], u[r], t) === i) return
      }
      return t
    },
    C = k,
    x = function(t, e, n) {
      var r = [];
      return null == t ? r : d && t.map === d ? t.map(e, n) : (k(t, (function(t, i, o) {
        r.push(e.call(n, t, i, o))
      })), r)
    },
    P = x,
    S = "Reduce of empty array with no initial value",
    T = function(t, e, n, r) {
      var i = arguments.length > 2;
      if(null == t && (t = []), p && t.reduce === p) return r && (e = G(e, r)), i ? t.reduce(e, n) : t.reduce(e);
      if(k(t, (function(t, o, u) {
          i ? n = e.call(r, n, t, o, u) : (n = t, i = !0)
        })), !i) throw new TypeError(S);
      return n
    },
    E = T,
    A = T,
    _ = function(t, e, n) {
      var r;
      return R(t, (function(t, i, o) {
        if(e.call(n, t, i, o)) return r = t, !0
      })), r
    },
    F = _,
    I = function(t, e, n) {
      var r = [];
      return null == t ? r : v && t.filter === v ? t.filter(e, n) : (k(t, (function(t, i, o) {
        e.call(n, t, i, o) && r.push(t)
      })), r)
    },
    M = I,
    L = function(t, e, n) {
      e || (e = Ct);
      var r = !0;
      return null == t ? r : g && t.every === g ? t.every(e, n) : (k(t, (function(t, o, u) {
        if(!(r = r && e.call(n, t, o, u))) return i
      })), !!r)
    },
    N = L,
    R = function(t, e, n) {
      e || (e = Ct);
      var r = !1;
      return null == t ? r : m && t.some === m ? t.some(e, n) : (k(t, (function(t, o, u) {
        if(r || (r = e.call(n, t, o, u))) return i
      })), !!r)
    },
    D = R,
    B = function(t) {
      return null == t ? 0 : t.length === +t.length ? t.length : ot(t).length
    },
    q = function(t, e) {
      var n;
      return function() {
        return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
      }
    },
    z = function(t) {
      return null == t ? Ct : gt(t) ? t : Pt(t)
    },
    V = function(t) {
      return function(e, n, r) {
        var i = {};
        return n = z(n), k(e, (function(o, u) {
          var a = n.call(r, o, u, e);
          t(i, a, o)
        })), i
      }
    },
    H = V((function(t, e, n) {
      kt(t, e) ? t[e].push(n) : t[e] = [n]
    })),
    U = V((function(t, e, n) {
      t[e] = n
    })),
    Q = function(t, e, n, r) {
      for(var i = (n = z(n)).call(r, e), o = 0, u = t.length; o < u;) {
        var a = o + u >>> 1;
        n.call(r, t[a]) < i ? o = a + 1 : u = a
      }
      return o
    },
    W = function(t, e) {
      return null != t && (t.length !== +t.length && (t = ut(t)), K(t, e) >= 0)
    },
    X = W,
    Z = function(t, e) {
      return I(t, St(e))
    },
    $ = function(t, e) {
      return _(t, St(e))
    },
    J = function(t) {
      var e = s.apply(o, c.call(arguments, 1));
      return I(t, (function(t) {
        return !W(e, t)
      }))
    },
    K = function(t, e, n) {
      if(null == t) return -1;
      var r = 0,
        i = t.length;
      if(n) {
        if("number" != typeof n) return t[r = Q(t, e)] === e ? r : -1;
        r = n < 0 ? Math.max(0, i + n) : n
      }
      if(b && t.indexOf === b) return t.indexOf(e, n);
      for(; r < i; r++)
        if(t[r] === e) return r;
      return -1
    },
    Y = function() {},
    G = function(t, e) {
      var n, r;
      if(w && t.bind === w) return w.apply(t, c.call(arguments, 1));
      if(!gt(t)) throw new TypeError;
      return n = c.call(arguments, 2), r = function() {
        if(!(this instanceof r)) return t.apply(e, n.concat(c.call(arguments)));
        Y.prototype = t.prototype;
        var i = new Y;
        Y.prototype = null;
        var o = t.apply(i, n.concat(c.call(arguments)));
        return Object(o) === o ? o : i
      }
    },
    tt = function(t) {
      var e = c.call(arguments, 1);
      return function() {
        for(var n = 0, r = e.slice(), i = 0, o = r.length; i < o; i++) kt(r[i], "partial") && (r[i] = arguments[n++]);
        for(; n < arguments.length;) r.push(arguments[n++]);
        return t.apply(this, r)
      }
    },
    et = tt(q, 2),
    nt = function(t, e) {
      var n = c.call(arguments, 2);
      return setTimeout((function() {
        return t.apply(null, n)
      }), e)
    },
    rt = tt(nt, {
      partial: tt
    }, 1),
    it = function(t, e, n) {
      var r, i, o, u = null,
        a = 0;
      n || (n = {});
      var c = function() {
        a = !1 === n.leading ? 0 : Tt(), u = null, o = t.apply(r, i), r = i = null
      };
      return function() {
        a || !1 !== n.leading || (a = Tt);
        var s = e - (Tt - a);
        return r = this, i = arguments, s <= 0 ? (clearTimeout(u), u = null, a = Tt, o = t.apply(r, i), r = i = null) : u || !1 === n.trailing || (u = setTimeout(c, s)), o
      }
    },
    ot = function(t) {
      if(!dt(t)) return [];
      if(j) return j(t);
      var e = [];
      for(var n in t) kt(t, n) && e.push(n);
      return e
    },
    ut = function(t) {
      for(var e = ot(t), n = ot.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];
      return r
    },
    at = function(t) {
      for(var e = {}, n = ot(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];
      return e
    },
    ct = function(t) {
      return k(c.call(arguments, 1), (function(e) {
        if(e)
          for(var n in e) void 0 === t[n] && (t[n] = e[n])
      })), t
    },
    st = Object.assign || function(t) {
      return k(c.call(arguments, 1), (function(e) {
        if(e)
          for(var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
      })), t
    },
    lt = function(t) {
      var e = {},
        n = s.apply(o, c.call(arguments, 1));
      return k(n, (function(n) {
        n in t && (e[n] = t[n])
      })), e
    },
    ft = y || function(t) {
      return "[object Array]" == l.call(t)
    },
    dt = function(t) {
      return t === Object(t)
    },
    pt = [];
  k(["Function", "String", "Number", "Date", "RegExp"], (function(t) {
    pt[t] = function(e) {
      return l.call(e) == "[object " + t + "]"
    }
  })), pt.Function = function(t) {
    return "function" == typeof t
  };
  var ht = pt.Date,
    vt = pt.RegExp,
    gt = pt.Function,
    mt = pt.Number,
    bt = pt.String,
    yt = function(t) {
      return O(t) && !jt(parseFloat(t))
    },
    jt = function(t) {
      return mt(t) && t != +t
    },
    wt = function(t) {
      return !0 === t || !1 === t || "[object Boolean]" == l.call(t)
    },
    Ot = function(t) {
      return void 0 === t
    },
    kt = function(t, e) {
      return f.call(t, e)
    },
    Ct = function(t) {
      return t
    },
    xt = function(t) {
      return function() {
        return t
      }
    },
    Pt = function(t) {
      return function(e) {
        return e[t]
      }
    },
    St = function(t) {
      return function(e) {
        if(e === t) return !0;
        for(var n in t)
          if(t[n] !== e[n]) return !1;
        return !0
      }
    },
    Tt = r.a,
    Et = function(t) {
      return mt(t) && !jt(t)
    };
  e.f = {
    after: function(t, e) {
      return function() {
        if(--t < 1) return e.apply(this, arguments)
      }
    },
    all: L,
    any: R,
    before: q,
    bind: G,
    clone: function(t) {
      return dt(t) ? ft(t) ? t.slice() : st({}, t) : t
    },
    collect: P,
    compact: function(t) {
      return I(t, Ct)
    },
    constant: xt,
    contains: W,
    debounce: function(t, e) {
      var n;
      return void 0 === e && (e = 100),
        function() {
          for(var r = this, i = arguments.length, o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u];
          clearTimeout(n), n = setTimeout((function() {
            t.apply(r, o)
          }), e)
        }
    },
    defaults: ct,
    defer: rt,
    delay: nt,
    detect: F,
    difference: J,
    each: k,
    every: N,
    extend: st,
    filter: I,
    find: _,
    findWhere: $,
    foldl: E,
    forEach: C,
    groupBy: H,
    has: kt,
    identity: Ct,
    include: X,
    indexBy: U,
    indexOf: K,
    inject: A,
    invert: at,
    isArray: ft,
    isBoolean: wt,
    isDate: ht,
    isFinite: yt,
    isFunction: gt,
    isNaN: jt,
    isNull: function(t) {
      return null === t
    },
    isNumber: mt,
    isObject: dt,
    isRegExp: vt,
    isString: bt,
    isUndefined: Ot,
    isValidNumber: Et,
    keys: ot,
    last: function(t, e, n) {
      if(null != t) return null == e || n ? t[t.length - 1] : c.call(t, Math.max(t.length - e, 0))
    },
    map: x,
    matches: St,
    max: function(t, e, n) {
      if(!e && ft(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
      var r = -1 / 0,
        i = -1 / 0;
      return k(t, (function(t, o, u) {
        var a = e ? e.call(n, t, o, u) : t;
        a > i && (r = t, i = a)
      })), r
    },
    memoize: function(t, e) {
      var n = {};
      return e || (e = Ct),
        function() {
          var r = e.apply(this, arguments);
          return kt(n, r) ? n[r] : n[r] = t.apply(this, arguments)
        }
    },
    now: Tt,
    omit: function(t) {
      var e = {},
        n = s.apply(o, c.call(arguments, 1));
      for(var r in t) W(n, r) || (e[r] = t[r]);
      return e
    },
    once: et,
    partial: tt,
    pick: lt,
    pluck: function(t, e) {
      return x(t, Pt(e))
    },
    property: Pt,
    propertyOf: function(t) {
      return null == t ? function() {} : function(e) {
        return t[e]
      }
    },
    reduce: T,
    reject: function(t, e, n) {
      return I(t, (function(t, r, i) {
        return !e.call(n, t, r, i)
      }), n)
    },
    result: function(t, e) {
      if(null != t) {
        var n = t[e];
        return gt(n) ? n.call(t) : n
      }
    },
    select: M,
    size: B,
    some: D,
    sortedIndex: Q,
    throttle: it,
    where: Z,
    without: function(t) {
      return J(t, c.call(arguments, 1))
    }
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "x", (function() {
    return i
  })), n.d(e, "w", (function() {
    return o
  })), n.d(e, "v", (function() {
    return u
  })), n.d(e, "s", (function() {
    return a
  })), n.d(e, "t", (function() {
    return c
  })), n.d(e, "r", (function() {
    return s
  })), n.d(e, "b", (function() {
    return l
  })), n.d(e, "d", (function() {
    return f
  })), n.d(e, "u", (function() {
    return d
  })), n.d(e, "e", (function() {
    return p
  })), n.d(e, "i", (function() {
    return h
  })), n.d(e, "a", (function() {
    return v
  })), n.d(e, "f", (function() {
    return g
  })), n.d(e, "c", (function() {
    return m
  })), n.d(e, "g", (function() {
    return b
  })), n.d(e, "h", (function() {
    return y
  })), n.d(e, "m", (function() {
    return j
  })), n.d(e, "j", (function() {
    return w
  })), n.d(e, "k", (function() {
    return O
  })), n.d(e, "l", (function() {
    return k
  })), n.d(e, "n", (function() {
    return C
  })), n.d(e, "o", (function() {
    return x
  })), n.d(e, "p", (function() {
    return P
  })), n.d(e, "q", (function() {
    return S
  })), n.d(e, "z", (function() {
    return T
  })), n.d(e, "y", (function() {
    return E
  })), n.d(e, "A", (function() {
    return A
  }));
  var r = n(0),
    i = 1e5,
    o = 100001,
    u = 100002,
    a = 101e3,
    c = 102e3,
    s = 102700,
    l = 200001,
    f = 202e3,
    d = 104e3,
    p = 203e3,
    h = 203640,
    v = 203700,
    g = 204e3,
    m = 306e3,
    b = 308e3,
    y = 308640,
    j = "cantPlayVideo",
    w = "badConnection",
    O = "cantLoadPlayer",
    k = "cantPlayInBrowser",
    C = "liveStreamDown",
    x = "protectedContent",
    P = "technicalError",
    S = function() {
      function t(t, e, n) {
        this.code = Object(r.z)(e) ? e : 0, this.sourceError = n || null, t && (this.key = t)
      }
      return t.logMessage = function(t) {
        var e = t % 1e3,
          n = Math.floor((t - e) / 1e3),
          r = t.toString();
        return e >= 400 && e < 600 && (r = n + "400-" + n + "599"), "JW Player " + (t > 299999 && t < 4e5 ? "Warning" : "Error") + " " + t + ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" + r
      }, t
    }();

  function T(t, e, n) {
    return n instanceof S && n.code ? n : new S(t, e, n)
  }

  function E(t, e) {
    var n = T(P, e, t);
    return n.code = (t && t instanceof S && t.code || 0) + e, n
  }

  function A(t) {
    var e = t.name,
      n = t.message;
    switch(e) {
      case "AbortError":
        return /pause/.test(n) ? 303213 : /load/.test(n) ? 303212 : 303210;
      case "NotAllowedError":
        return 303220;
      case "NotSupportedError":
        return 303230;
      default:
        return 303200
    }
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "i", (function() {
    return o
  })), n.d(e, "e", (function() {
    return u
  })), n.d(e, "j", (function() {
    return a
  })), n.d(e, "a", (function() {
    return c
  })), n.d(e, "b", (function() {
    return s
  })), n.d(e, "g", (function() {
    return l
  })), n.d(e, "d", (function() {
    return f
  })), n.d(e, "f", (function() {
    return d
  })), n.d(e, "h", (function() {
    return p
  })), n.d(e, "c", (function() {
    return h
  }));
  var r = n(0),
    i = window.parseFloat;

  function o(t) {
    return t.replace(/^\s+|\s+$/g, "")
  }

  function u(t, e, n) {
    for(t = "" + t, n = n || "0"; t.length < e;) t = n + t;
    return t
  }

  function a(t, e) {
    for(var n = t.attributes, r = 0; r < n.length; r++)
      if(n[r].name && n[r].name.toLowerCase() === e.toLowerCase()) return n[r].value.toString();
    return ""
  }

  function c(t) {
    if(!t || "rtmp" === t.substr(0, 4)) return "";
    var e = /[(,]format=(m3u8|mpd)-/i.exec(t);
    if(e) return e[1];
    var n = t.replace(/^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/, "$1");
    return n !== t ? n.toLowerCase() : (t = t.split("?")[0].split("#")[0]).lastIndexOf(".") > -1 ? t.substr(t.lastIndexOf(".") + 1, t.length).toLowerCase() : ""
  }

  function s(t) {
    var e = (t / 60 | 0) % 60,
      n = t % 60;
    return u((t / 3600 | 0).toString(), 2) + ":" + u(e.toString(), 2) + ":" + u(n.toFixed(3), 6)
  }

  function l(t, e) {
    if(!t) return 0;
    if(Object(r.z)(t)) return t;
    var n = t.replace(",", "."),
      o = n.slice(-1),
      u = n.split(":"),
      a = u.length,
      c = 0;
    if("s" === o) c = i(n);
    else if("m" === o) c = 60 * i(n);
    else if("h" === o) c = 3600 * i(n);
    else if(a > 1) {
      var s = a - 1;
      4 === a && (e && (c = i(u[s]) / e), s -= 1), c += i(u[s]), c += 60 * i(u[s - 1]), a >= 3 && (c += 3600 * i(u[s - 2]))
    } else c = i(n);
    return Object(r.z)(c) ? c : 0
  }

  function f(t, e, n) {
    if(Object(r.x)(t) && "%" === t.slice(-1)) {
      var o = i(t);
      return e && Object(r.z)(e) && Object(r.z)(o) ? e * o / 100 : null
    }
    return l(t, n)
  }

  function d(t, e) {
    return t.map((function(t) {
      return e + t
    }))
  }

  function p(t, e) {
    return t.map((function(t) {
      return t + e
    }))
  }

  function h(t) {
    return !!t && Object(r.x)(t) && "%" === t.slice(-1)
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "kb", (function() {
    return r
  })), n.d(e, "nb", (function() {
    return i
  })), n.d(e, "lb", (function() {
    return o
  })), n.d(e, "pb", (function() {
    return u
  })), n.d(e, "qb", (function() {
    return a
  })), n.d(e, "mb", (function() {
    return c
  })), n.d(e, "ob", (function() {
    return s
  })), n.d(e, "rb", (function() {
    return l
  })), n.d(e, "t", (function() {
    return f
  })), n.d(e, "v", (function() {
    return d
  })), n.d(e, "u", (function() {
    return p
  })), n.d(e, "o", (function() {
    return h
  })), n.d(e, "r", (function() {
    return v
  })), n.d(e, "ub", (function() {
    return g
  })), n.d(e, "s", (function() {
    return m
  })), n.d(e, "ab", (function() {
    return b
  })), n.d(e, "X", (function() {
    return y
  })), n.d(e, "w", (function() {
    return j
  })), n.d(e, "Z", (function() {
    return w
  })), n.d(e, "x", (function() {
    return O
  })), n.d(e, "wb", (function() {
    return k
  })), n.d(e, "a", (function() {
    return C
  })), n.d(e, "b", (function() {
    return x
  })), n.d(e, "c", (function() {
    return P
  })), n.d(e, "d", (function() {
    return S
  })), n.d(e, "e", (function() {
    return T
  })), n.d(e, "f", (function() {
    return E
  })), n.d(e, "i", (function() {
    return A
  })), n.d(e, "G", (function() {
    return _
  })), n.d(e, "hb", (function() {
    return F
  })), n.d(e, "R", (function() {
    return I
  })), n.d(e, "D", (function() {
    return M
  })), n.d(e, "C", (function() {
    return L
  })), n.d(e, "F", (function() {
    return N
  })), n.d(e, "q", (function() {
    return R
  })), n.d(e, "db", (function() {
    return D
  })), n.d(e, "n", (function() {
    return B
  })), n.d(e, "H", (function() {
    return q
  })), n.d(e, "I", (function() {
    return z
  })), n.d(e, "O", (function() {
    return V
  })), n.d(e, "P", (function() {
    return H
  })), n.d(e, "S", (function() {
    return U
  })), n.d(e, "jb", (function() {
    return Q
  })), n.d(e, "cb", (function() {
    return W
  })), n.d(e, "E", (function() {
    return X
  })), n.d(e, "T", (function() {
    return Z
  })), n.d(e, "Q", (function() {
    return $
  })), n.d(e, "U", (function() {
    return J
  })), n.d(e, "W", (function() {
    return K
  })), n.d(e, "N", (function() {
    return Y
  })), n.d(e, "M", (function() {
    return G
  })), n.d(e, "L", (function() {
    return tt
  })), n.d(e, "J", (function() {
    return et
  })), n.d(e, "K", (function() {
    return nt
  })), n.d(e, "V", (function() {
    return rt
  })), n.d(e, "p", (function() {
    return it
  })), n.d(e, "z", (function() {
    return ot
  })), n.d(e, "ib", (function() {
    return ut
  })), n.d(e, "eb", (function() {
    return at
  })), n.d(e, "fb", (function() {
    return ct
  })), n.d(e, "g", (function() {
    return st
  })), n.d(e, "h", (function() {
    return lt
  })), n.d(e, "sb", (function() {
    return ft
  })), n.d(e, "tb", (function() {
    return dt
  })), n.d(e, "bb", (function() {
    return pt
  })), n.d(e, "B", (function() {
    return ht
  })), n.d(e, "m", (function() {
    return vt
  })), n.d(e, "l", (function() {
    return gt
  })), n.d(e, "gb", (function() {
    return mt
  })), n.d(e, "vb", (function() {
    return bt
  })), n.d(e, "A", (function() {
    return yt
  })), n.d(e, "k", (function() {
    return jt
  })), n.d(e, "Y", (function() {
    return wt
  })), n.d(e, "j", (function() {
    return Ot
  })), n.d(e, "y", (function() {
    return kt
  }));
  var r = "buffering",
    i = "idle",
    o = "complete",
    u = "paused",
    a = "playing",
    c = "error",
    s = "loading",
    l = "stalled",
    f = "drag",
    d = "dragStart",
    p = "dragEnd",
    h = "click",
    v = "doubleClick",
    g = "tap",
    m = "doubleTap",
    b = "over",
    y = "move",
    j = "enter",
    w = "out",
    O = c,
    k = "warning",
    C = "adClick",
    x = "mediaLoaded",
    P = "adPause",
    S = "adPlay",
    T = "adSkipped",
    E = "adTime",
    A = "autostartNotAllowed",
    _ = o,
    F = "ready",
    I = "seek",
    M = "beforePlay",
    L = "beforeComplete",
    N = "bufferFull",
    R = "displayClick",
    D = "playlistComplete",
    B = "cast",
    q = "mediaError",
    z = "firstFrame",
    V = "playAttempt",
    H = "playAttemptFailed",
    U = "seeked",
    Q = "setupError",
    W = "state",
    X = "bufferChange",
    Z = "time",
    $ = "ratechange",
    J = "mediaType",
    K = "volume",
    Y = "mute",
    G = "metadataCueParsed",
    tt = "meta",
    et = "levels",
    nt = "levelsChanged",
    rt = "visualQuality",
    it = "controls",
    ot = "fullscreen",
    ut = "resize",
    at = "playlistItem",
    ct = "playlist",
    st = "audioTracks",
    lt = "audioTrackChanged",
    ft = "subtitlesTracks",
    dt = "subtitlesTrackChanged",
    pt = "playbackRateChanged",
    ht = "logoClick",
    vt = "captionsList",
    gt = "captionsChanged",
    mt = "providerFirstFrame",
    bt = "userAction",
    yt = "instreamClick",
    jt = "breakpoint",
    wt = "fullscreenchange",
    Ot = "bandwidthEstimate",
    kt = "float"
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return i
  })), n.d(e, "d", (function() {
    return o
  })), n.d(e, "a", (function() {
    return u
  })), n.d(e, "c", (function() {
    return a
  }));
  var r = n(2);

  function i(t) {
    var e = "";
    return t && (t.localName ? e = t.localName : t.baseName && (e = t.baseName)), e
  }

  function o(t) {
    var e = "";
    return t && (t.textContent ? e = Object(r.i)(t.textContent) : t.text && (e = Object(r.i)(t.text))), e
  }

  function u(t, e) {
    return t.childNodes[e]
  }

  function a(t) {
    return t.childNodes ? t.childNodes.length : 0
  }
}, function(t, e, n) {
  "use strict";
  n.r(e);
  var r = n(6);

  function i(t, e) {
    var n = t.exec(e);
    if(n && n.length > 1) return n[1]
  }
  n.d(e, "Browser", (function() {
    return a
  })), n.d(e, "OS", (function() {
    return c
  })), n.d(e, "Features", (function() {
    return s
  }));
  var o = navigator.userAgent,
    u = function() {};
  var a = {
      get androidNative() {
        return Object(r.c)()
      },
      get chrome() {
        return Object(r.d)()
      },
      get edge() {
        return Object(r.e)()
      },
      get facebook() {
        return Object(r.g)()
      },
      get firefox() {
        return Object(r.f)()
      },
      get ie() {
        return Object(r.i)()
      },
      get msie() {
        return Object(r.n)()
      },
      get safari() {
        return Object(r.q)()
      },
      get version() {
        return function(t, e) {
          var n, r, i, o;
          if(t.chrome) n = -1 !== e.indexOf("Chrome") ? e.substring(e.indexOf("Chrome") + 7) : e.substring(e.indexOf("CriOS") + 6);
          else if(t.safari) n = e.substring(e.indexOf("Version") + 8);
          else if(t.firefox) n = e.substring(e.indexOf("Firefox") + 8);
          else if(t.edge) {
            var u = e.indexOf("Edge"); - 1 === u ? u = e.indexOf("Edg") + 4 : u += 5, n = e.substring(u)
          } else t.ie && (-1 !== e.indexOf("rv:") ? n = e.substring(e.indexOf("rv:") + 3) : -1 !== e.indexOf("MSIE") && (n = e.substring(e.indexOf("MSIE") + 5)));
          return n && (-1 !== (o = n.indexOf(";")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(" ")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(")")) && (n = n.substring(0, o)), r = parseInt(n, 10), i = parseInt(n.split(".")[1], 10)), {
            version: n,
            major: r,
            minor: i
          }
        }(this, o)
      }
    },
    c = {
      get android() {
        return Object(r.b)()
      },
      get iOS() {
        return Object(r.j)()
      },
      get mobile() {
        return Object(r.o)()
      },
      get mac() {
        return Object(r.p)()
      },
      get iPad() {
        return Object(r.k)()
      },
      get iPhone() {
        return Object(r.l)()
      },
      get windows() {
        return o.indexOf("Windows") > -1
      },
      get tizen() {
        return Object(r.r)()
      },
      get tizenApp() {
        return Object(r.s)()
      },
      get version() {
        return function(t, e) {
          var n, r, o;
          if(t.windows) switch(n = i(/Windows(?: NT|)? ([._\d]+)/, e)) {
            case "6.1":
              n = "7.0";
              break;
            case "6.2":
              n = "8.0";
              break;
            case "6.3":
              n = "8.1"
          } else t.android ? n = i(/Android ([._\d]+)/, e) : t.iOS ? n = i(/OS ([._\d]+)/, e) : t.mac ? n = i(/Mac OS X ([._\d]+)/, e) : t.tizen && (n = i(/Tizen ([._\d]+)/, e));
          if(n) {
            r = parseInt(n, 10);
            var u = n.split(/[._]/);
            u && (o = parseInt(u[1], 10))
          }
          return {
            version: n,
            major: r,
            minor: o
          }
        }(this, o)
      }
    },
    s = {
      get flash() {
        return Object(r.h)()
      },
      get flashVersion() {
        return Object(r.a)()
      },
      get iframe() {
        return Object(r.m)()
      },
      get passiveEvents() {
        return function() {
          var t = !1;
          try {
            var e = Object.defineProperty({}, "passive", {
              get: function() {
                return t = !0
              }
            });
            window.addEventListener("testPassive", u, e), window.removeEventListener("testPassive", u, e)
          } catch (t) {}
          return t
        }()
      },
      get backgroundLoading() {
        return !(c.iOS || a.safari || c.tizen)
      }
    }
}, function(t, e, n) {
  "use strict";

  function r(t) {
    return null !== navigator.userAgent.match(t)
  }
  n.d(e, "f", (function() {
    return o
  })), n.d(e, "l", (function() {
    return u
  })), n.d(e, "k", (function() {
    return a
  })), n.d(e, "p", (function() {
    return c
  })), n.d(e, "g", (function() {
    return s
  })), n.d(e, "e", (function() {
    return l
  })), n.d(e, "n", (function() {
    return f
  })), n.d(e, "r", (function() {
    return d
  })), n.d(e, "s", (function() {
    return p
  })), n.d(e, "d", (function() {
    return h
  })), n.d(e, "i", (function() {
    return v
  })), n.d(e, "q", (function() {
    return g
  })), n.d(e, "j", (function() {
    return m
  })), n.d(e, "c", (function() {
    return b
  })), n.d(e, "b", (function() {
    return y
  })), n.d(e, "o", (function() {
    return j
  })), n.d(e, "m", (function() {
    return w
  })), n.d(e, "h", (function() {
    return O
  })), n.d(e, "a", (function() {
    return k
  }));
  var i = function() {
      return "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
    },
    o = function() {
      return r(/gecko\//i)
    },
    u = function() {
      return r(/iP(hone|od)/i)
    },
    a = function() {
      return r(/iPad/i) || i()
    },
    c = function() {
      return r(/Macintosh/i) && !i()
    },
    s = function() {
      return r(/FBAV/i)
    },
    l = function() {
      return r(/\sEdge?\/\d+/i)
    },
    f = function() {
      return r(/msie/i)
    },
    d = function() {
      return r(/SMART-TV/)
    },
    p = function() {
      return d() && !r(/SamsungBrowser/)
    },
    h = function() {
      return r(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !l() && !r(/UCBrowser/i) && !d()
    },
    v = function() {
      return !r(/\sEdg\/\d+/i) && (l() || r(/trident\/.+rv:\s*11/i) || f())
    },
    g = function() {
      return r(/safari/i) && !r(/(?:Chrome|CriOS|chromium|android|phantom)/i) || d()
    },
    m = function() {
      return r(/iP(hone|ad|od)/i) || i()
    };

  function b() {
    return !(r(/chrome\/[123456789]/i) && !r(/chrome\/18/i) && !o()) && y()
  }
  var y = function() {
      return r(/Android/i) && !r(/Windows Phone/i)
    },
    j = function() {
      return m() || y() || r(/Windows Phone/i)
    };

  function w() {
    try {
      return window.self !== window.top
    } catch (t) {
      return !0
    }
  }
  var O = function() {
      return !1
    },
    k = function() {
      return 0
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "i", (function() {
    return s
  })), n.d(e, "e", (function() {
    return l
  })), n.d(e, "q", (function() {
    return f
  })), n.d(e, "j", (function() {
    return d
  })), n.d(e, "s", (function() {
    return p
  })), n.d(e, "r", (function() {
    return v
  })), n.d(e, "u", (function() {
    return g
  })), n.d(e, "d", (function() {
    return y
  })), n.d(e, "a", (function() {
    return j
  })), n.d(e, "o", (function() {
    return w
  })), n.d(e, "p", (function() {
    return O
  })), n.d(e, "v", (function() {
    return k
  })), n.d(e, "t", (function() {
    return C
  })), n.d(e, "h", (function() {
    return x
  })), n.d(e, "b", (function() {
    return P
  })), n.d(e, "g", (function() {
    return S
  })), n.d(e, "c", (function() {
    return T
  })), n.d(e, "m", (function() {
    return E
  })), n.d(e, "k", (function() {
    return A
  })), n.d(e, "n", (function() {
    return _
  })), n.d(e, "l", (function() {
    return F
  })), n.d(e, "f", (function() {
    return I
  }));
  var r, i = n(0),
    o = n(2),
    u = n(5),
    a = window.DOMParser,
    c = !0;

  function s(t, e) {
    return t.classList.contains(e)
  }

  function l(t) {
    return d(t).firstChild
  }

  function f(t, e) {
    x(t),
      function(t, e) {
        if(!e) return;
        for(var n = document.createDocumentFragment(), r = d(e).childNodes, i = 0; i < r.length; i++) n.appendChild(r[i].cloneNode(!0));
        t.appendChild(n)
      }(t, e)
  }

  function d(t) {
    var e = function(t) {
      r || (r = new a, c = function() {
        try {
          if(r.parseFromString("", "text/html")) return !0
        } catch (t) {}
        return !1
      }());
      if(c) return r.parseFromString(t, "text/html").body;
      var e = document.implementation.createHTMLDocument("");
      t.toLowerCase().indexOf("<!doctype") > -1 ? e.documentElement.innerHTML = t : e.body.innerHTML = t;
      return e.body
    }(t);
    p(e);
    for(var n = e.querySelectorAll("*"), i = n.length; i--;) {
      v(n[i])
    }
    return e
  }

  function p(t) {
    for(var e = t.querySelectorAll("script,object,iframe,meta"), n = e.length; n--;) {
      var r = e[n];
      r.parentNode.removeChild(r)
    }
    return t
  }
  var h = new RegExp(/^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/);

  function v(t) {
    for(var e = t.attributes, n = e.length; n--;) {
      var r = e[n].name;
      if(/^on/.test(r) && t.removeAttribute(r), /href/.test(r)) {
        var i = e[n].value;
        /javascript:|javascript&colon;/.test(i) || !h.test(i) ? t.removeAttribute(r) : console.warn("Invalid or unsafe URL")
      }
    }
    return t
  }

  function g(t) {
    return t + (t.toString().indexOf("%") > 0 ? "" : "px")
  }

  function m(t) {
    return Object(i.x)(t.className) ? t.className.split(" ") : []
  }

  function b(t, e) {
    e = Object(o.i)(e), t.className !== e && (t.className = e)
  }

  function y(t) {
    return t.classList ? t.classList : m(t)
  }

  function j(t, e) {
    var n = m(t);
    (Array.isArray(e) ? e : e.split(" ")).forEach((function(t) {
      Object(i.e)(n, t) || n.push(t)
    })), b(t, n.join(" "))
  }

  function w(t, e) {
    var n = m(t),
      r = Array.isArray(e) ? e : e.split(" ");
    b(t, Object(i.h)(n, r).join(" "))
  }

  function O(t, e, n) {
    var r = t.className || "";
    e.test(r) ? r = r.replace(e, n) : n && (r += " " + n), b(t, r)
  }

  function k(t, e, n) {
    var r = s(t, e);
    (n = Object(i.r)(n) ? n : !r) !== r && (n ? j(t, e) : w(t, e))
  }

  function C(t, e, n) {
    t.setAttribute(e, n)
  }

  function x(t) {
    for(; t.firstChild;) t.removeChild(t.firstChild)
  }

  function P(t) {
    var e = document.createElement("link");
    e.rel = "stylesheet", e.href = t, document.getElementsByTagName("head")[0].appendChild(e)
  }

  function S(t) {
    t && x(t)
  }

  function T(t) {
    var e = {
      left: 0,
      right: 0,
      width: 0,
      height: 0,
      top: 0,
      bottom: 0
    };
    if(!t || !document.body.contains(t)) return e;
    var n = t.getBoundingClientRect(),
      r = window.pageYOffset,
      i = window.pageXOffset;
    return n.width || n.height || n.left || n.top ? (e.left = n.left + i, e.right = n.right + i, e.top = n.top + r, e.bottom = n.bottom + r, e.width = n.right - n.left, e.height = n.bottom - n.top, e) : e
  }

  function E(t, e) {
    t.insertBefore(e, t.firstChild)
  }

  function A(t) {
    return t.nextElementSibling
  }

  function _(t) {
    return t.previousElementSibling
  }

  function F(t, e, n) {
    if(void 0 === n && (n = {}), h.test(t)) {
      var r = document.createElement("a");
      r.href = t, r.target = e, r = v(Object(i.j)(r, n)), u.Browser.firefox ? r.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
      })) : r.click()
    }
  }

  function I() {
    var t = window.screen.orientation;
    return !!t && ("landscape-primary" === t.type || "landscape-secondary" === t.type) || 90 === window.orientation || -90 === window.orientation
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return i
  })), n.d(e, "b", (function() {
    return o
  })), n.d(e, "c", (function() {
    return u
  })), n.d(e, "d", (function() {
    return a
  }));
  var r = n(1),
    i = {};

  function o(t, e) {
    return function() {
      throw new r.q(r.k, t, e)
    }
  }

  function u(t, e) {
    return function() {
      throw new r.q(null, t, e)
    }
  }

  function a() {
    return n.e(4).then(function(t) {
      return n(71).default
    }.bind(null, n)).catch(o(r.s + 101))
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  })), n.d(e, "c", (function() {
    return i
  })), n.d(e, "d", (function() {
    return o
  })), n.d(e, "b", (function() {
    return u
  })), n.d(e, "e", (function() {
    return a
  })), n.d(e, "f", (function() {
    return c
  }));
  var r = function() {
      function t() {}
      var e = t.prototype;
      return e.on = function(t, e, n) {
        if(!l(this, "on", t, [e, n]) || !e) return this;
        var r = this._events || (this._events = {});
        return (r[t] || (r[t] = [])).push({
          callback: e,
          context: n
        }), this
      }, e.once = function(t, e, n) {
        if(!l(this, "once", t, [e, n]) || !e) return this;
        var r = 0,
          i = this,
          o = function n() {
            r++ || (i.off(t, n), e.apply(this, arguments))
          };
        return o._callback = e, this.on(t, o, n)
      }, e.off = function(t, e, n) {
        if(!this._events || !l(this, "off", t, [e, n])) return this;
        if(!t && !e && !n) return delete this._events, this;
        for(var r = t ? [t] : Object.keys(this._events), i = 0, o = r.length; i < o; i++) {
          t = r[i];
          var u = this._events[t];
          if(u) {
            var a = this._events[t] = [];
            if(e || n)
              for(var c = 0, s = u.length; c < s; c++) {
                var f = u[c];
                (e && e !== f.callback && e !== f.callback._callback || n && n !== f.context) && a.push(f)
              }
            a.length || delete this._events[t]
          }
        }
        return this
      }, e.trigger = function(t) {
        for(var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        if(!this._events) return this;
        if(!l(this, "trigger", t, n)) return this;
        var i = this._events[t],
          o = this._events.all;
        return i && f(i, n, this), o && f(o, arguments, this), this
      }, e.triggerSafe = function(t) {
        for(var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        if(!this._events) return this;
        if(!l(this, "trigger", t, n)) return this;
        var i = this._events[t],
          o = this._events.all;
        return i && f(i, n, this, t), o && f(o, arguments, this, t), this
      }, t
    }(),
    i = r.prototype.on,
    o = r.prototype.once,
    u = r.prototype.off,
    a = r.prototype.trigger,
    c = r.prototype.triggerSafe;
  r.on = i, r.once = o, r.off = u, r.trigger = a;
  var s = /\s+/;

  function l(t, e, n, r) {
    if(!n) return !0;
    if("object" == typeof n) {
      for(var i in n) Object.prototype.hasOwnProperty.call(n, i) && t[e].apply(t, [i, n[i]].concat(r));
      return !1
    }
    if(s.test(n)) {
      for(var o = n.split(s), u = 0, a = o.length; u < a; u++) t[e].apply(t, [o[u]].concat(r));
      return !1
    }
    return !0
  }

  function f(t, e, n, r) {
    for(var i = -1, o = t.length; ++i < o;) {
      var u = t[i];
      if(r) try {
        u.callback.apply(u.context || n, e)
      } catch (t) {
        console.log('Error in "' + r + '" event handler:', t)
      } else u.callback.apply(u.context || n, e)
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "exists", (function() {
    return i
  })), n.d(e, "isHTTPS", (function() {
    return o
  })), n.d(e, "isFileProtocol", (function() {
    return u
  })), n.d(e, "isRtmp", (function() {
    return a
  })), n.d(e, "isYouTube", (function() {
    return c
  })), n.d(e, "typeOf", (function() {
    return s
  })), n.d(e, "isDeepKeyCompliant", (function() {
    return l
  }));
  var r = window.location.protocol;

  function i(t) {
    switch(typeof t) {
      case "string":
        return t.length > 0;
      case "object":
        return null !== t;
      case "undefined":
        return !1;
      default:
        return !0
    }
  }

  function o() {
    return "https:" === r
  }

  function u() {
    return "file:" === r
  }

  function a(t, e) {
    return 0 === t.indexOf("rtmp:") || "rtmp" === e
  }

  function c(t, e) {
    return "youtube" === e || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(t)
  }

  function s(t) {
    if(null === t) return "null";
    var e = typeof t;
    return "object" === e && Array.isArray(t) ? "array" : e
  }

  function l(t, e, n) {
    var r = Object.keys(t);
    return Object.keys(e).length >= r.length && r.every((function(r) {
      var i = t[r],
        o = e[r];
      return i && "object" == typeof i ? !(!o || "object" != typeof o) && l(i, o, n) : n(r, t)
    }))
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return a
  })), n.d(e, "b", (function() {
    return c
  })), n.d(e, "d", (function() {
    return s
  })), n.d(e, "e", (function() {
    return d
  })), n.d(e, "c", (function() {
    return p
  }));
  var r, i = n(2),
    o = n(41),
    u = n.n(o),
    a = u.a.clear;

  function c(t, e, n, r) {
    n = n || "all-players";
    var i = "";
    if("object" == typeof e) {
      var o = document.createElement("div");
      s(o, e);
      var a = o.style.cssText;
      Object.prototype.hasOwnProperty.call(e, "content") && a && (a = a + ' content: "' + e.content + '";'), r && a && (a = a.replace(/;/g, " !important;")), i = "{" + a + "}"
    } else "string" == typeof e && (i = e);
    "" !== i && "{}" !== i ? u.a.style([
      [t, t + i]
    ], n) : u.a.clear(n, t)
  }

  function s(t, e) {
    if(null != t) {
      var n;
      void 0 === t.length && (t = [t]);
      var r = {};
      for(n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = f(n, e[n]));
      for(var i = 0; i < t.length; i++) {
        var o = t[i],
          u = void 0;
        if(null != o)
          for(n in r) Object.prototype.hasOwnProperty.call(r, n) && (u = l(n), o.style[u] !== r[n] && (o.style[u] = r[n]))
      }
    }
  }

  function l(t) {
    t = t.split("-");
    for(var e = 1; e < t.length; e++) t[e] = t[e].charAt(0).toUpperCase() + t[e].slice(1);
    return t.join("")
  }

  function f(t, e) {
    return "" === e || null == e ? "" : "string" == typeof e && isNaN(e) ? /png|gif|jpe?g/i.test(e) && e.indexOf("url") < 0 ? "url(" + e + ")" : e : 0 === e || "z-index" === t || "opacity" === t ? "" + e : /color/i.test(t) ? "#" + Object(i.e)(e.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(e) + "px"
  }

  function d(t, e) {
    s(t, {
      transform: e
    })
  }

  function p(t, e) {
    var n = "rgb",
      i = void 0 !== e && 100 !== e;
    if(i && (n += "a"), !r) {
      var o = document.createElement("canvas");
      o.height = 1, o.width = 1, r = o.getContext("2d")
    }
    t ? isNaN(parseInt(t, 16)) || (t = "#" + t) : t = "#000000", r.clearRect(0, 0, 1, 1), r.fillStyle = t, r.fillRect(0, 0, 1, 1);
    var u = r.getImageData(0, 0, 1, 1).data;
    return n += "(" + u[0] + ", " + u[1] + ", " + u[2], i && (n += ", " + e / 100), n + ")"
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "getAbsolutePath", (function() {
    return o
  })), n.d(e, "isAbsolutePath", (function() {
    return u
  })), n.d(e, "parseXML", (function() {
    return a
  })), n.d(e, "serialize", (function() {
    return c
  })), n.d(e, "parseDimension", (function() {
    return s
  })), n.d(e, "timeFormat", (function() {
    return l
  }));
  var r = n(10),
    i = n(0);

  function o(t, e) {
    if(e && Object(r.exists)(e) || (e = document.location.href), !Object(r.exists)(t)) return "";
    if(u(t)) return t;
    var n, i = e.substring(0, e.indexOf("://") + 3),
      o = e.substring(i.length, e.indexOf("/", i.length + 1));
    if(0 === t.indexOf("/")) n = t.split("/");
    else {
      var a = e.split("?")[0];
      n = (a = a.substring(i.length + o.length + 1, a.lastIndexOf("/"))).split("/").concat(t.split("/"))
    }
    for(var c = [], s = 0; s < n.length; s++) n[s] && Object(r.exists)(n[s]) && "." !== n[s] && (".." === n[s] ? c.pop() : c.push(n[s]));
    return i + o + "/" + c.join("/")
  }

  function u(t) {
    return /^(?:(?:https?|file):)?\/\//.test(t)
  }

  function a(t) {
    var e = null;
    try {
      (e = (new window.DOMParser).parseFromString(t, "text/xml")).querySelector("parsererror") && (e = null)
    } catch (t) {}
    return e
  }

  function c(t) {
    if(void 0 === t) return null;
    if("string" == typeof t && t.length < 6) {
      var e = t.toLowerCase();
      if("true" === e) return !0;
      if("false" === e) return !1;
      if(!Object(i.u)(Number(t)) && !Object(i.u)(parseFloat(t))) return Number(t)
    }
    return t
  }

  function s(t) {
    return Object(i.z)(t) ? t : "" === t ? 0 : t.lastIndexOf("%") > -1 ? t : parseInt(t.replace("px", ""), 10)
  }

  function l(t, e) {
    if(Object(i.u)(t) && (t = parseInt(t.toString())), Object(i.u)(t) || !isFinite(t) || t <= 0 && !e) return "00:00";
    var n = t < 0 ? "-" : "";
    t = Math.abs(t);
    var r = Math.floor(t / 3600),
      o = Math.floor((t - 3600 * r) / 60),
      u = Math.floor(t % 60);
    return n + (r ? r + ":" : "") + (o < 10 ? "0" : "") + o + ":" + (u < 10 ? "0" : "") + u
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "j", (function() {
    return p
  })), n.d(e, "d", (function() {
    return h
  })), n.d(e, "b", (function() {
    return v
  })), n.d(e, "e", (function() {
    return m
  })), n.d(e, "g", (function() {
    return y
  })), n.d(e, "h", (function() {
    return j
  })), n.d(e, "c", (function() {
    return w
  })), n.d(e, "f", (function() {
    return k
  })), n.d(e, "i", (function() {
    return C
  })), n.d(e, "a", (function() {
    return x
  }));
  var r = n(0),
    i = n(6),
    o = n(27),
    u = n(10),
    a = n(40),
    c = {},
    s = {
      zh: "Chinese",
      nl: "Dutch",
      en: "English",
      fr: "French",
      de: "German",
      it: "Italian",
      ja: "Japanese",
      pt: "Portuguese",
      ru: "Russian",
      es: "Spanish",
      el: "Greek",
      fi: "Finnish",
      id: "Indonesian",
      ko: "Korean",
      th: "Thai",
      vi: "Vietnamese"
    },
    l = Object(r.q)(s);

  function f(t) {
    var e = d(t),
      n = e.indexOf("_");
    return -1 === n ? e : e.substring(0, n)
  }

  function d(t) {
    return t.toLowerCase().replace("-", "_")
  }

  function p(t) {
    return t ? Object.keys(t).reduce((function(e, n) {
      return e[d(n)] = t[n], e
    }), {}) : {}
  }

  function h(t) {
    if(t) return 3 === t.length ? t : s[f(t)] || t
  }

  function v(t) {
    return l[t] || ""
  }

  function g(t) {
    var e = t.querySelector("html");
    return e ? e.getAttribute("lang") : null
  }

  function m() {
    var t = g(document);
    if(!t && Object(i.m)()) try {
      t = g(window.top.document)
    } catch (t) {}
    return t || navigator.language || "en"
  }
  var b = ["ar", "da", "de", "el", "es", "fi", "fr", "he", "id", "it", "ja", "ko", "nb", "nl", "nn", "no", "oc", "pt", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh"];

  function y(t) {
    return 8207 === t.charCodeAt(0) || /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(t)
  }

  function j(t) {
    return b.indexOf(f(t)) >= 0
  }

  function w(t, e, n) {
    return Object(r.j)({}, function(t) {
      var e = t.advertising,
        n = t.related,
        i = t.sharing,
        o = t.abouttext,
        u = Object(r.j)({}, t.localization);
      e && (u.advertising = u.advertising || {}, O(u.advertising, e, "admessage"), O(u.advertising, e, "cuetext"), O(u.advertising, e, "loadingAd"), O(u.advertising, e, "podmessage"), O(u.advertising, e, "skipmessage"), O(u.advertising, e, "skiptext"));
      "string" == typeof u.related ? u.related = {
        heading: u.related
      } : u.related = u.related || {};
      n && O(u.related, n, "autoplaymessage");
      i && (u.sharing = u.sharing || {}, O(u.sharing, i, "heading"), O(u.sharing, i, "copied"));
      o && O(u, t, "abouttext");
      var a = u.close || u.nextUpClose;
      a && (u.close = a);
      return u
    }(t), e[f(n)], e[d(n)])
  }

  function O(t, e, n) {
    var r = t[n] || e[n];
    r && (t[n] = r)
  }

  function k(t) {
    return Object(u.isDeepKeyCompliant)(a.a, t, (function(t, e) {
      return "string" == typeof e[t]
    }))
  }

  function C(t, e) {
    var n, r = c[e];
    if(!r) {
      var i = t + "translations/" + (n = f(e), (/^n[bn]$/.test(n) ? "no" : n) + ".json");
      c[e] = r = new Promise((function(t, n) {
        Object(o.b)({
          url: i,
          oncomplete: t,
          onerror: function(t, r, i, o) {
            c[e] = null, n(o)
          },
          responseType: "json"
        })
      }))
    }
    return r
  }

  function x(t, e) {
    var n = Object(r.j)({}, t, e);
    return P(n, "errors", t, e), P(n, "related", t, e), P(n, "sharing", t, e), P(n, "advertising", t, e), P(n, "shortcuts", t, e), P(n, "captionsStyles", t, e), n
  }

  function P(t, e, n, i) {
    t[e] = Object(r.j)({}, n[e], i[e])
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));
  var r = Date.now || function() {
    return (new Date).getTime()
  }
}, function(t, e, n) {
  "use strict";
  e.a = []
}, function(t, e, n) {
  "use strict";
  e.a = {
    debug: !1
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return p
  }));
  var r = n(31),
    i = n(5),
    o = n(20),
    u = n(0),
    a = n(37),
    c = n(22),
    s = Object(u.l)(r.a, Object(u.B)({
      name: "html5"
    })),
    l = s.supports;

  function f(t) {
    var e = window.MediaSource;
    return Object(u.a)(t, (function(t) {
      return !!e && !!e.isTypeSupported && e.isTypeSupported(t)
    }))
  }

  function d(t) {
    if(t.drm) return !1;
    var e = t.file.indexOf(".m3u8") > -1,
      n = "hls" === t.type || "m3u8" === t.type;
    if(!e && !n) return !1;
    var r = i.Browser.chrome || i.Browser.firefox || i.Browser.edge || i.Browser.ie && 11 === i.Browser.version.major || i.OS.tizen,
      o = i.Browser.safari && (!c.a.canPlayType || !c.a.canPlayType("application/vnd.apple.mpegURL")),
      u = i.OS.android && !1 === t.hlsjsdefault,
      a = i.Browser.safari && !!t.safarihlsjs;
    return f(t.mediaTypes || ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"']) && (r || a || o) && !u
  }
  s.supports = function(t, e) {
    var n = l.apply(this, arguments);
    if(n && t.drm && "hls" === t.type) {
      var r = Object(o.a)(e),
        i = r("drm");
      if(i && t.drm.fairplay) {
        var u = window.WebKitMediaKeys;
        return u && u.isTypeSupported && u.isTypeSupported("com.apple.fps.1_0", "video/mp4")
      }
      return i
    }
    return n
  }, r.a.push({
    name: "shaka",
    supports: function(t) {
      return !(t.drm && !Object(a.a)(t.drm)) && (!(!window.HTMLVideoElement || !window.MediaSource) && (f(t.mediaTypes) && ("dash" === t.type || "mpd" === t.type || (t.file || "").indexOf("mpd-time-csf") > -1)))
    }
  }), r.a.unshift({
    name: "hlsjs",
    supports: function(t) {
      return d(t)
    }
  }), r.a.unshift({
    name: "hlsjsAlt",
    supports: function(t) {
      return t._hlsjsProgressive && d(t)
    }
  });
  var p = r.a
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return a
  }));
  var r = n(32),
    i = n(17),
    o = n(57),
    u = n(0);
  n(9);

  function a(t) {
    var e = t.getName().name;
    if(!r.a[e]) {
      if(!Object(u.l)(i.a, Object(u.B)({
          name: e
        }))) {
        if(!Object(u.t)(t.supports)) throw new Error("Tried to register a provider with an invalid object");
        i.a.unshift({
          name: e,
          supports: t.supports
        })
      }
      0, Object(u.g)(t.prototype, o.a), r.a[e] = t
    }
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return i
  })), n.d(e, "c", (function() {
    return o
  })), n.d(e, "b", (function() {
    return u
  }));
  var r = n(38),
    i = r.a,
    o = r.c;

  function u(t) {
    var e = Object(r.b)(t);
    if(!t) return e;
    switch(Object(r.c)(t)) {
      case "jwpsrv":
        e = 305001;
        break;
      case "googima":
        e = 305002;
        break;
      case "vast":
        e = 305003;
        break;
      case "freewheel":
        e = 305004;
        break;
      case "dai":
        e = 305005;
        break;
      case "gapro":
        e = 305006;
        break;
      case "bidding":
        e = 305007
    }
    return e
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));

  function r(t) {
    var e = {
      setup: ["free", "starter", "business", "premium", "enterprise", "developer", "ads", "unlimited", "trial", "platinum"],
      drm: ["enterprise", "developer", "ads", "unlimited", "trial"],
      ads: ["ads", "unlimited", "trial", "platinum", "enterprise", "developer", "business"],
      jwpsrv: ["free", "starter", "business", "premium", "enterprise", "developer", "ads", "trial", "platinum", "invalid"],
      discovery: ["ads", "enterprise", "developer", "trial", "unlimited"]
    };
    return function(n) {
      return e[n] && e[n].indexOf(t) > -1
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "getScriptPath", (function() {
    return o
  })), n.d(e, "repo", (function() {
    return u
  })), n.d(e, "versionCheck", (function() {
    return a
  })), n.d(e, "loadFrom", (function() {
    return c
  }));
  var r = n(29),
    i = n(10),
    o = function(t) {
      for(var e = document.getElementsByTagName("script"), n = 0; n < e.length; n++) {
        var r = e[n].src;
        if(r) {
          var i = r.lastIndexOf("/" + t);
          if(i >= 0) return r.substr(0, i + 1)
        }
      }
      return ""
    },
    u = function() {
      var t = "//ssl.p.jwpcdn.com/player/v/8.20.7/";
      return "" + (Object(i.isFileProtocol)() ? "https:" : "") + t
    },
    a = function(t) {
      var e = ("0" + t).split(/\W/),
        n = r.a.split(/\W/),
        i = parseFloat(e[0]),
        o = parseFloat(n[0]);
      return !(i > o) && !(i === o && parseFloat("0" + e[1]) > parseFloat(n[1]))
    },
    c = function() {
      return u()
    }
}, function(t, e, n) {
  "use strict";
  var r = document.createElement("video");
  e.a = r
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    i = {
      none: !0,
      metadata: !0,
      auto: !0
    };

  function o(t, e) {
    return i[t] ? t : i[e] ? e : "metadata"
  }
  var u = n(28),
    a = n(33),
    c = n(42),
    s = n(1);
  n.d(e, "b", (function() {
    return l
  })), n.d(e, "e", (function() {
    return f
  })), n.d(e, "d", (function() {
    return d
  })), n.d(e, "f", (function() {
    return p
  })), n.d(e, "c", (function() {
    return h
  }));

  function l(t, e, n) {
    var i = Object(r.j)({}, n);
    return delete i.playlist, t.map((function(t) {
      return d(e, t, i)
    })).filter((function(t) {
      return !!t
    }))
  }

  function f(t) {
    if(!Array.isArray(t) || 0 === t.length) throw new s.q(s.m, 630)
  }

  function d(t, e, n) {
    var i = t.getProviders(),
      u = t.get("preload"),
      a = Object(r.j)({}, e);
    if(a.preload = o(e.preload, u), a.allSources = v(a, t), a.sources = g(a.allSources, i), a.sources.length) return a.file = a.sources[0].file, a.feedData = n,
      function(t) {
        var e = t.sources[0].liveSyncDuration;
        e && (t.liveSyncDuration = t.dvrSeekLimit = e);
        return t
      }(a)
  }

  function p(t, e) {
    var n = (parseInt(t, 10) || 0) % e;
    return n < 0 && (n += e), n
  }
  var h = function(t, e) {
    return g(v(t, e), e.getProviders())
  };

  function v(t, e) {
    var n = e.attributes,
      r = t.sources,
      i = t.allSources,
      u = t.preload,
      c = t.drm,
      s = m(t.withCredentials, n.withCredentials);
    return (i || r).map((function(e) {
      if(e !== Object(e)) return null;
      b(e, n, "androidhls"), b(e, n, "hlsjsdefault"), b(e, n, "safarihlsjs"),
        function(t, e, n) {
          if(t.liveSyncDuration) return;
          var r = e.liveSyncDuration ? e : n;
          b(t, r, "liveSyncDuration")
        }(e, t, n), b(e, n, "_hlsjsProgressive"), e.preload = o(e.preload, u);
      var r = e.drm || c || n.drm;
      r && (e.drm = r);
      var i = m(e.withCredentials, s);
      return void 0 !== i && (e.withCredentials = i), Object(a.a)(e)
    })).filter((function(t) {
      return !!t
    }))
  }

  function g(t, e) {
    e && e.choose || (e = new c.a);
    var n = function(t, e) {
      for(var n = 0; n < t.length; n++) {
        var r = t[n],
          i = e.choose(r).providerToCheck;
        if(i) return {
          type: r.type,
          provider: i
        }
      }
      return null
    }(t, e);
    if(!n) return [];
    var r = n.provider,
      i = n.type;
    return t.filter((function(t) {
      return t.type === i && e.providerSupports(r, t)
    }))
  }

  function m(t, e) {
    return void 0 === t ? e : t
  }

  function b(t, e, n) {
    n in e && (t[n] = e[n])
  }
  e.a = function(t) {
    return (Array.isArray(t) ? t : [t]).map(u.a)
  }
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    i = n(9),
    o = n(3),
    u = {};

  function a(t) {
    var e = document.createElement("link");
    return e.type = "text/css", e.rel = "stylesheet", e.href = t, e
  }

  function c(t, e) {
    var n = document.createElement("script");
    return n.type = "text/javascript", n.charset = "utf-8", n.async = !0, n.timeout = e || 45e3, n.src = t, n
  }
  var s = function(t, e, n) {
    var r = this,
      i = 0;

    function s(t) {
      i = 2, r.trigger(o.x, t).off()
    }

    function l(t) {
      i = 3, r.trigger(o.lb, t).off()
    }
    this.getStatus = function() {
      return i
    }, this.load = function() {
      var r = u[t];
      return 0 !== i || (r && r.then(l).catch(s), i = 1, r = new Promise((function(r, i) {
        var o = (e ? a : c)(t, n),
          u = function() {
            o.onerror = o.onload = null, clearTimeout(d)
          },
          f = function(t) {
            u(), s(t), i(t)
          },
          d = setTimeout((function() {
            f(new Error("Network timeout " + t))
          }), 45e3);
        o.onerror = function() {
          f(new Error("Failed to load " + t))
        }, o.onload = function(t) {
          u(), l(t), r(t)
        };
        var p = document.getElementsByTagName("head")[0] || document.documentElement;
        p.insertBefore(o, p.firstChild)
      })), u[t] = r), r
    }
  };
  Object(r.j)(s.prototype, i.a), e.a = s
}, function(t, e, n) {
  "use strict";
  var r = n(1),
    i = n(19),
    o = function() {
      this.load = function(t, e, n, o) {
        return n && "object" == typeof n ? Promise.all(Object.keys(n).filter((function(t) {
          return t
        })).map((function(u) {
          var a = n[u];
          return e.setupPlugin(u).then((function(e) {
            if(!o.attributes._destroyed) return Object(i.a)(e, a, t)
          })).catch((function(t) {
            return e.removePlugin(u), t.code ? t : new r.q(null, Object(i.b)(u), t)
          }))
        }))) : Promise.resolve()
      }
    },
    u = n(58),
    a = n(47),
    c = {},
    s = function() {
      function t() {}
      var e = t.prototype;
      return e.setupPlugin = function(t) {
        var e = this.getPlugin(t);
        return e ? (e.url !== t && Object(a.a)('JW Plugin "' + Object(i.c)(t) + '" already loaded from "' + e.url + '". Ignoring "' + t + '."'), e.promise) : this.addPlugin(t).load()
      }, e.addPlugin = function(t) {
        var e = Object(i.c)(t),
          n = c[e];
        return n || (n = new u.a(t), c[e] = n), n
      }, e.getPlugin = function(t) {
        return c[Object(i.c)(t)]
      }, e.removePlugin = function(t) {
        delete c[Object(i.c)(t)]
      }, e.getPlugins = function() {
        return c
      }, t
    }();
  n.d(e, "b", (function() {
    return f
  })), n.d(e, "a", (function() {
    return d
  }));
  var l = new s,
    f = function(t, e, n) {
      var r = l.addPlugin(t);
      r.js || r.registerPlugin(t, e, n)
    };

  function d(t, e) {
    var n = t.get("plugins");
    return window.jwplayerPluginJsonp = f, (t.pluginLoader = t.pluginLoader || new o).load(e, l, n, t).then((function(e) {
      if(!t.attributes._destroyed) return delete window.jwplayerPluginJsonp, e
    }))
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return a
  }));
  var r = n(48),
    i = n(20),
    o = n(45),
    u = n(1),
    a = 100013;
  e.b = function(t) {
    var e, n, c;
    try {
      var s = Object(r.a)(t || "", Object(o.a)("NDh2aU1Cb0NHRG5hcDFRZQ==")).split("/");
      if("pro" === (e = s[0]) && (e = "premium"), Object(i.a)(e)("setup") || (e = "invalid"), s.length > 2) {
        n = s[1];
        var l = parseInt(s[2]);
        l > 0 && (c = new Date).setTime(l)
      }
    } catch (t) {
      e = "invalid"
    }
    this.edition = function() {
      return e
    }, this.token = function() {
      return n
    }, this.expiration = function() {
      return c
    }, this.duration = function() {
      return c ? c.getTime() - (new Date).getTime() : 0
    }, this.error = function() {
      var r;
      return void 0 === t ? r = 100011 : "invalid" !== e && n ? this.duration() < 0 && (r = a) : r = 100012, r ? new u.q(u.k, r) : null
    }
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return c
  })), n.d(e, "a", (function() {
    return s
  }));
  var r = n(0),
    i = n(12),
    o = n(10),
    u = n(1),
    a = function() {};

  function c(t, e, n, d) {
    var p;
    t === Object(t) && (t = (d = t).url);
    var h = Object(r.j)({
        xhr: null,
        url: t,
        withCredentials: !1,
        retryWithoutCredentials: !1,
        timeout: 6e4,
        timeoutId: -1,
        oncomplete: e || a,
        onerror: n || a,
        mimeType: d && !d.responseType ? "text/xml" : "",
        requireValidXML: !1,
        responseType: d && d.plainText ? "text" : "",
        useDomParser: !1,
        requestFilter: null
      }, d),
      v = function(t, e) {
        return function(t, n) {
          var i = t.currentTarget || e.xhr;
          if(clearTimeout(e.timeoutId), e.retryWithoutCredentials && e.xhr.withCredentials) return s(i), void c(Object(r.j)({}, e, {
            xhr: null,
            withCredentials: !1,
            retryWithoutCredentials: !1
          }));
          !n && i.status >= 400 && i.status < 600 && (n = i.status), l(e, n ? u.m : u.p, n || 6, t)
        }
      }(0, h);
    if("XMLHttpRequest" in window) {
      if(p = h.xhr = h.xhr || new window.XMLHttpRequest, "function" == typeof h.requestFilter) {
        var g;
        try {
          g = h.requestFilter({
            url: t,
            xhr: p
          })
        } catch (t) {
          return v(t, 5), p
        }
        g && "open" in g && "send" in g && (p = h.xhr = g)
      }
      p.onreadystatechange = function(t) {
        return function(e) {
          var n = e.currentTarget || t.xhr;
          if(4 === n.readyState) {
            clearTimeout(t.timeoutId);
            var a = n.status;
            if(a >= 400) return void l(t, u.m, a < 600 ? a : 6);
            if(200 === a) return function(t) {
              return function(e) {
                var n = e.currentTarget || t.xhr;
                if(clearTimeout(t.timeoutId), t.responseType) {
                  if("json" === t.responseType) return function(t, e) {
                    if(!t.response || "string" == typeof t.response && '"' !== t.responseText.substr(1)) try {
                      t = Object(r.j)({}, t, {
                        response: JSON.parse(t.responseText)
                      })
                    } catch (t) {
                      return void l(e, u.m, 611, t)
                    }
                    return e.oncomplete(t)
                  }(n, t)
                } else {
                  var o, a = n.responseXML;
                  if(a) try {
                    o = a.firstChild
                  } catch (t) {}
                  if(a && o) return f(n, a, t);
                  if(t.useDomParser && n.responseText && !a && (a = Object(i.parseXML)(n.responseText)) && a.firstChild) return f(n, a, t);
                  if(t.requireValidXML) return void l(t, u.m, 602)
                }
                t.oncomplete(n)
              }
            }(t)(e);
            0 === a && Object(o.isFileProtocol)() && !/^[a-z][a-z0-9+.-]*:/.test(t.url) && l(t, u.m, 7)
          }
        }
      }(h), p.onerror = v, "overrideMimeType" in p ? h.mimeType && p.overrideMimeType(h.mimeType) : h.useDomParser = !0;
      try {
        t = t.replace(/#.*$/, ""), p.open("GET", t, !0)
      } catch (t) {
        return v(t, 3), p
      }
      if(h.responseType) try {
        p.responseType = h.responseType
      } catch (t) {}
      h.timeout && (h.timeoutId = setTimeout((function() {
        s(p), l(h, u.p, 1)
      }), h.timeout), p.onabort = function() {
        clearTimeout(h.timeoutId)
      });
      try {
        h.withCredentials && "withCredentials" in p && (p.withCredentials = !0), p.send()
      } catch (t) {
        v(t, 4)
      }
      return p
    }
    l(h, u.p, 2)
  }

  function s(t) {
    t.onload = null, t.onprogress = null, t.onreadystatechange = null, t.onerror = null, "abort" in t && t.abort()
  }

  function l(t, e, n, r) {
    t.onerror(e, t.url, t.xhr, new u.q(e, n, r))
  }

  function f(t, e, n) {
    var i = e.documentElement;
    if(!n.requireValidXML || "parsererror" !== i.nodeName && !i.getElementsByTagName("parsererror").length) return t.responseXML || (t = Object(r.j)({}, t, {
      responseXML: e
    })), n.oncomplete(t);
    l(n, u.m, 601)
  }
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    i = n(33),
    o = ["captions", "metadata", "thumbnails", "chapters"];
  var u = function(t) {
      if(t && t.file) {
        var e, n = Object(r.j)({}, {
          kind: "captions",
          default: !1
        }, t);
        return n.kind = (e = n.kind, -1 !== o.indexOf(e) ? n.kind : "captions"), n.default = !!n.default, n
      }
    },
    a = n(35),
    c = Array.isArray;
  e.a = function(t) {
    c((t = t || {}).tracks) || delete t.tracks;
    var e = Object(r.j)({}, {
      sources: [],
      tracks: [],
      minDvrWindow: a.b
    }, t);
    e.sources !== Object(e.sources) || c(e.sources) || (e.sources = [Object(i.a)(e.sources)]), c(e.sources) && 0 !== e.sources.length || (t.levels ? e.sources = t.levels : e.sources = [Object(i.a)(t)]);
    for(var n = 0; n < e.sources.length; n++) {
      var o = e.sources[n];
      if(o) {
        var s = o.default;
        o.default = !!s && "true" === s.toString(), e.sources[n].label || (e.sources[n].label = n.toString()), e.sources[n] = Object(i.a)(e.sources[n])
      }
    }
    return e.sources = e.sources.filter((function(t) {
      return !!t
    })), c(e.tracks) || (e.tracks = []), c(e.captions) && (e.tracks = e.tracks.concat(e.captions), delete e.captions), e.tracks = e.tracks.map(u).filter((function(t) {
      return !!t
    })), e
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));
  var r = "8.20.7+commercial_v8-20-7.460.commercial.096ca72.hlsjs..hlsjsalt..jwplayer.b4bba24.dai.1f98a0b.freewheel.f907d3d.googima.6bd0741.googimanvmp.106f6b4.headerbidding.c12af74.vast.fc84b65.analytics.920ae01.gapro.141397a"
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    i = n(14),
    o = window.performance || {
      timing: {}
    },
    u = o.timing.navigationStart || Object(i.a)();

  function a() {
    return u + o.now()
  }
  "now" in o || (o.now = function() {
    return Object(i.a)() - u
  });
  var c = function() {
    function t() {
      this.startTimes = {}, this.sum = {}, this.counts = {}, this.ticks = {}
    }
    var e = t.prototype;
    return e.start = function(t) {
      this.startTimes[t] = a(), this.counts[t] = this.counts[t] + 1 || 1
    }, e.end = function(t) {
      if(this.startTimes[t]) {
        var e = a() - this.startTimes[t];
        delete this.startTimes[t], this.sum[t] = this.sum[t] + e || e
      }
    }, e.dump = function() {
      var t = Object(r.j)({}, this.sum);
      for(var e in this.startTimes)
        if(Object.prototype.hasOwnProperty.call(this.startTimes, e)) {
          var n = a() - this.startTimes[e];
          t[e] = t[e] + n || n
        } return {
        counts: Object(r.j)({}, this.counts),
        sums: t,
        events: Object(r.j)({}, this.ticks)
      }
    }, e.tick = function(t) {
      this.ticks[t] = a()
    }, e.clear = function(t) {
      delete this.ticks[t]
    }, e.between = function(t, e) {
      return this.ticks[e] && this.ticks[t] ? this.ticks[e] - this.ticks[t] : null
    }, t
  }();
  e.a = c
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return a
  })), n.d(e, "b", (function() {
    return c
  }));
  var r = n(65),
    i = n(10),
    o = n(22),
    u = {
      aac: "audio/mp4",
      mp4: "video/mp4",
      f4v: "video/mp4",
      m4v: "video/mp4",
      mov: "video/mp4",
      mp3: "audio/mpeg",
      mpeg: "audio/mpeg",
      ogv: "video/ogg",
      ogg: "video/ogg",
      oga: "video/ogg",
      vorbis: "video/ogg",
      webm: "video/webm",
      f4a: "video/aac",
      m3u8: "application/vnd.apple.mpegurl",
      m3u: "application/vnd.apple.mpegurl",
      hls: "application/vnd.apple.mpegurl"
    },
    a = [{
      name: "html5",
      supports: c
    }];

  function c(t) {
    if(!o.a || !o.a.canPlayType) return !1;
    if(!1 === Object(r.a)(t)) return !1;
    var e = t.file,
      n = t.type;
    if(Object(i.isRtmp)(e, n)) return !1;
    var a = t.mimeType || u[n];
    if(!a) return !1;
    var c = t.mediaTypes;
    return c && c.length && (a = [a].concat(c.slice()).join("; ")), !!o.a.canPlayType(a)
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));
  var r = {}
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    i = n(10),
    o = n(2);
  e.a = function(t) {
    if(t && t.file) {
      var e = Object(r.j)({}, {
        default: !1,
        type: ""
      }, t);
      e.file = Object(o.i)("" + e.file);
      var n = /^[^/]+\/(?:x-)?([^/]+)$/,
        u = e.type;
      if(n.test(u) && (e.mimeType = u, e.type = u.replace(n, "$1")), Object(i.isYouTube)(e.file) ? e.type = "youtube" : Object(i.isRtmp)(e.file) ? e.type = "rtmp" : e.type || (e.type = Object(o.a)(e.file)), e.type) {
        switch(e.type) {
          case "m3u8":
          case "vnd.apple.mpegurl":
            e.type = "hls";
            break;
          case "dash+xml":
            e.type = "dash";
            break;
          case "m4a":
            e.type = "aac";
            break;
          case "smil":
            e.type = "rtmp"
        }
        return Object.keys(e).forEach((function(t) {
          "" === e[t] && delete e[t]
        })), e
      }
    }
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return g
  })), n.d(e, "b", (function() {
    return k
  }));
  var r = n(5),
    i = n(3),
    o = n(9),
    u = n(14),
    a = n(7);

  function c(t, e) {
    return (c = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var s, l, f = "ontouchstart" in window,
    d = "PointerEvent" in window && !r.OS.android,
    p = !(d || f && r.OS.mobile),
    h = r.Features.passiveEvents,
    v = !!h && {
      passive: !0
    },
    g = function(t) {
      var e, n;

      function r(e, n) {
        var r;
        r = t.call(this) || this;
        var i = !(n = n || {}).preventScrolling;
        return r.directSelect = !!n.directSelect, r.dragged = !1, r.enableDoubleTap = !1, r.el = e, r.handlers = {}, r.options = {}, r.lastClick = 0, r.lastStart = 0, r.passive = i, r.pointerId = null, r.startX = 0, r.startY = 0, r.event = null, r.clicking = !1, r
      }
      n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, c(e, n);
      var i = r.prototype;
      return i.on = function(e, n, r) {
        return b(e) && (this.handlers[e] || O[e](this)), t.prototype.on.call(this, e, n, r)
      }, i.off = function(e, n, r) {
        var i = this;
        if(b(e)) x(this, e);
        else if(!e) {
          var o = this.handlers;
          Object.keys(o).forEach((function(t) {
            x(i, t)
          }))
        }
        return t.prototype.off.call(this, e, n, r)
      }, i.destroy = function() {
        this.el && (this.off(), d && P(this), this.el = null)
      }, r
    }(o.a),
    m = /\s+/;

  function b(t) {
    return t && !(m.test(t) || "object" == typeof t)
  }

  function y(t) {
    if(!t.handlers.init) {
      var e = t.el,
        n = t.passive,
        r = !!h && {
          passive: n
        },
        o = function(e) {
          if(t.dragged) T(t, i.t, e);
          else {
            var r = E(e),
              o = r.pageX,
              u = r.pageY,
              a = o - t.startX,
              c = u - t.startY;
            a * a + c * c > 36 && (T(t, i.v, e), t.dragged = !0, T(t, i.t, e))
          }
          var s;
          n || "touchmove" !== e.type || (s = e).preventDefault && s.preventDefault()
        },
        c = function(e) {
          clearTimeout(s), t.el && (P(t), x(t, "window"), t.dragged && (t.dragged = !1, T(t, i.u, e)))
        };
      w(t, "init"), A(t, "init", (function(i) {
        if(Object(a.o)(e, "jw-tab-focus"), ! function(t) {
            if("which" in t) return 3 === t.which;
            if("button" in t) return 2 === t.button;
            return !1
          }(i)) {
          var s = i.target,
            l = i.type;
          if(!t.directSelect || s === e) {
            var f = E(i),
              d = f.pageX,
              p = f.pageY;
            if(t.dragged = !1, t.lastStart = Object(u.a)(), t.startX = d, t.startY = p, x(t, "window"), "pointerdown" === l && i.isPrimary) {
              if(!n) {
                var h = i.pointerId;
                t.pointerId = h, e.setPointerCapture(h)
              }
              C(t, "window", "pointermove", o, r), C(t, "window", "pointercancel", c), C(t, "window", "pointerup", c)
            } else "mousedown" === l ? (C(t, "window", "mousemove", o, r), C(t, "window", "mouseup", c)) : "touchstart" === l && (C(t, "window", "touchmove", o, r), C(t, "window", "touchcancel", c), C(t, "window", "touchend", c))
          }
        }
      }), r), l || (l = new g(document).on("interaction"))
    }
  }

  function j(t) {
    if(!t.handlers.select) {
      w(t, "select"), A(t, "select", (function(e) {
        var n = e.target;
        e.isPrimary && "BUTTON" === n.tageName && n.focus(), t.lastStart = Object(u.a)(), t.clicking = !0
      })), C(t, "select", "click", (function(e) {
        if(Object(u.a)() - t.lastStart > 500 && !0 === t.clicking) t.clicking = !1;
        else {
          var n = "click" === e.type;
          ! function(t, e, n) {
            if(t.enableDoubleTap)
              if(Object(u.a)() - t.lastClick < 300) {
                var r = n ? i.r : i.s;
                T(t, r, e), t.lastClick = 0
              } else t.lastClick = Object(u.a)()
          }(t, e, n), T(t, n ? i.o : i.ub, e)
        }
      }))
    }
  }

  function w(t, e) {
    if(!t.handlers.init && !t.handlers.select) {
      var n = t.el;
      C(t, e, "blur", (function() {
        Object(a.o)(n, "jw-tab-focus")
      })), C(t, e, "focus", (function() {
        l.event && "keydown" === l.event.type && Object(a.a)(n, "jw-tab-focus")
      }))
    }
  }
  var O = {
    drag: function(t) {
      y(t)
    },
    dragStart: function(t) {
      y(t)
    },
    dragEnd: function(t) {
      y(t)
    },
    click: function(t) {
      j(t)
    },
    tap: function(t) {
      j(t)
    },
    doubleTap: function(t) {
      t.enableDoubleTap = !0, j(t)
    },
    doubleClick: function(t) {
      t.enableDoubleTap = !0, j(t)
    },
    longPress: function(t) {
      if(r.OS.iOS) {
        var e = function() {
          clearTimeout(s)
        };
        C(t, "longPress", "touchstart", (function(n) {
          e(), s = setTimeout((function() {
            T(t, "longPress", n)
          }), 500)
        })), C(t, "longPress", "touchmove", e), C(t, "longPress", "touchcancel", e), C(t, "longPress", "touchend", e)
      } else t.el.oncontextmenu = function(e) {
        return T(t, "longPress", e), !1
      }
    },
    focus: function(t) {
      C(t, "focus", "focus", (function(e) {
        S(t, "focus", e)
      }))
    },
    blur: function(t) {
      C(t, "blur", "blur", (function(e) {
        S(t, "blur", e)
      }))
    },
    over: function(t) {
      (d || p) && C(t, i.ab, d ? "pointerover" : "mouseover", (function(e) {
        "touch" !== e.pointerType && T(t, i.ab, e)
      }))
    },
    out: function(t) {
      if(d) {
        var e = t.el;
        C(t, i.Z, "pointerout", (function(n) {
          if("touch" !== n.pointerType && "clientX" in n) {
            var r = document.elementFromPoint(n.clientX, n.clientY);
            e.contains(r) || T(t, i.Z, n)
          }
        }))
      } else p && C(t, i.Z, "mouseout", (function(e) {
        T(t, i.Z, e)
      }))
    },
    move: function(t) {
      (d || p) && C(t, i.X, d ? "pointermove" : "mousemove", (function(e) {
        "touch" !== e.pointerType && T(t, i.X, e)
      }))
    },
    enter: function(t) {
      C(t, i.w, "keydown", (function(e) {
        "Enter" !== e.key && 13 !== e.keyCode || (e.stopPropagation(), e.preventDefault(), S(t, i.w, e))
      }), !1)
    },
    keydown: function(t) {
      C(t, "keydown", "keydown", (function(e) {
        S(t, "keydown", e)
      }), !1)
    },
    gesture: function(t) {
      var e = function(e) {
        return T(t, "gesture", e)
      };
      C(t, "gesture", "click", e), C(t, "gesture", "keydown", e)
    },
    interaction: function(t) {
      var e = function(e) {
        t.event = e
      };
      C(t, "interaction", "mousedown", e, !0), C(t, "interaction", "keydown", e, !0)
    }
  };

  function k(t) {
    var e = t.ownerDocument || t;
    return e.defaultView || e.parentWindow || window
  }

  function C(t, e, n, r, i) {
    void 0 === i && (i = v);
    var o = t.handlers[e],
      u = t.options[e];
    if(o || (o = t.handlers[e] = {}, u = t.options[e] = {}), o[n]) throw new Error(e + " " + n + " already registered");
    o[n] = r, u[n] = i;
    var a = t.el;
    ("window" === e ? k(a) : a).addEventListener(n, r, i)
  }

  function x(t, e) {
    var n = t.el,
      r = t.handlers,
      i = t.options,
      o = "window" === e ? k(n) : n,
      u = r[e],
      a = i[e];
    u && (Object.keys(u).forEach((function(t) {
      var e = a[t];
      "boolean" == typeof e ? o.removeEventListener(t, u[t], e) : o.removeEventListener(t, u[t])
    })), r[e] = null, i[e] = null)
  }

  function P(t) {
    var e = t.el;
    null !== t.pointerId && (e.releasePointerCapture(t.pointerId), t.pointerId = null)
  }

  function S(t, e, n) {
    var r = t.el,
      i = n.target;
    t.trigger(e, {
      type: e,
      sourceEvent: n,
      currentTarget: r,
      target: i
    })
  }

  function T(t, e, n) {
    var r = function(t, e, n) {
      var r, i = e.target,
        o = e.touches,
        u = e.changedTouches,
        a = e.pointerType;
      o || u ? (r = o && o.length ? o[0] : u[0], a = a || "touch") : (r = e, a = a || "mouse");
      var c = r,
        s = c.pageX,
        l = c.pageY;
      return {
        type: t,
        pointerType: a,
        pageX: s,
        pageY: l,
        sourceEvent: e,
        currentTarget: n,
        target: i
      }
    }(e, n, t.el);
    t.trigger(e, r)
  }

  function E(t) {
    return 0 === t.type.indexOf("touch") ? (t.originalEvent || t).changedTouches[0] : t
  }

  function A(t, e, n, r) {
    d ? C(t, e, "pointerdown", n, r) : p && C(t, e, "mousedown", n, r), C(t, e, "touchstart", n, r)
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "d", (function() {
    return r
  })), n.d(e, "c", (function() {
    return i
  })), n.d(e, "b", (function() {
    return o
  })), n.d(e, "a", (function() {
    return u
  }));
  var r = {
      audioMode: !1,
      itemMeta: {},
      playbackRate: 1,
      playRejected: !1,
      state: n(3).nb,
      itemReady: !1,
      controlsEnabled: !1
    },
    i = {
      position: 0,
      duration: 0,
      buffer: 0,
      currentTime: 0
    },
    o = 120,
    u = 25
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    i = n(21),
    o = n(10),
    u = n(12),
    a = n(2),
    c = n(30),
    s = n(16);

  function l(t, e) {
    this.name = t, this.message = e.message || e.toString(), this.error = e
  }
  var f = n(6),
    d = n(7),
    p = n(11),
    h = n(27),
    v = n(52),
    g = n(47),
    m = n(53);
  var b = Object(r.j)({}, u, o, i, {
    addClass: d.a,
    hasClass: d.i,
    removeClass: d.o,
    replaceClass: d.p,
    toggleClass: d.v,
    classList: d.d,
    styleDimension: d.u,
    createElement: d.e,
    emptyElement: d.h,
    addStyleSheet: d.b,
    bounds: d.c,
    openLink: d.l,
    replaceInnerHtml: d.q,
    css: p.b,
    clearCss: p.a,
    style: p.d,
    transform: p.e,
    getRgba: p.c,
    ajax: h.b,
    crossdomain: function(t) {
      var e = window.URL;
      try {
        var n = new e(t, location.origin);
        return location.protocol + "//" + location.host != n.protocol + "//" + n.host
      } catch (t) {}
      return !0
    },
    tryCatch: function(t, e, n) {
      if(void 0 === n && (n = []), s.a.debug) return t.apply(e || this, n);
      try {
        return t.apply(e || this, n)
      } catch (e) {
        return new l(t.name, e)
      }
    },
    Error: l,
    Timer: c.a,
    log: g.a,
    genId: m.b,
    between: v.a,
    foreach: function(t, e) {
      for(var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
    },
    flashVersion: f.a,
    isIframe: f.m,
    indexOf: r.p,
    trim: a.i,
    pad: a.e,
    extension: a.a,
    hms: a.b,
    seconds: a.g,
    prefix: a.f,
    suffix: a.h,
    noop: function() {}
  });
  e.a = b
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return c
  })), n.d(e, "d", (function() {
    return s
  })), n.d(e, "c", (function() {
    return l
  })), n.d(e, "a", (function() {
    return f
  }));
  var r, i = n(20),
    o = [{
      configName: "clearkey",
      keyName: "org.w3.clearkey"
    }, {
      configName: "widevine",
      keyName: "com.widevine.alpha"
    }, {
      configName: "playready",
      keyName: "com.microsoft.playready"
    }],
    u = [],
    a = {};

  function c(t) {
    return t.some((function(t) {
      return !!t.drm || t.sources.some((function(t) {
        return !!t.drm
      }))
    }))
  }

  function s(t) {
    return r || ((navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration || window.MSMediaKeys) && Object(i.a)(t)("drm") ? (o.forEach((function(t) {
      var e, n, r = (e = t.keyName, n = [{
        initDataTypes: ["cenc"],
        videoCapabilities: [{
          contentType: 'video/mp4;codecs="avc1.4d401e"'
        }],
        audioCapabilities: [{
          contentType: 'audio/mp4;codecs="mp4a.40.2"'
        }]
      }], navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(e, n) : new Promise((function(t, n) {
        var r;
        try {
          r = new window.MSMediaKeys(e)
        } catch (t) {
          return void n(t)
        }
        t(r)
      }))).then((function() {
        a[t.configName] = !0
      })).catch((function() {
        a[t.configName] = !1
      }));
      u.push(r)
    })), r = Promise.all(u)) : Promise.resolve())
  }

  function l(t) {
    return a[t]
  }

  function f(t) {
    if(r) return Object.keys(t).some((function(t) {
      return l(t)
    }))
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "c", (function() {
    return i
  })), n.d(e, "b", (function() {
    return o
  })), n.d(e, "a", (function() {
    return u
  }));
  var r = n(0),
    i = function(t) {
      return t.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, "$2")
    };

  function o(t) {
    return 305e3
  }

  function u(t, e, n) {
    var i = t.name,
      o = Object(r.j)({}, e),
      u = document.createElement("div");
    u.id = n.id + "_" + i, u.className = "jw-plugin jw-reset";
    var a = t.getNewInstance(n, o, u);
    return n.addPlugin(i, a), a
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return u
  })), n.d(e, "b", (function() {
    return a
  }));
  var r = n(8),
    i = n(5),
    o = null,
    u = {};

  function a() {
    return o || (o = i.OS.tizenApp ? n.e(3).then(function(t) {
      var e = n(72).default;
      return u.controls = e, e
    }.bind(null, n)).catch((function() {
      o = null, Object(r.c)(301133)()
    })) : n.e(2).then(function(t) {
      var e = n(69).default;
      return u.controls = e, e
    }.bind(null, n)).catch((function() {
      o = null, Object(r.c)(301130)()
    }))), o
  }
}, function(t, e, n) {
  "use strict";
  e.a = {
    advertising: {
      admessage: "This ad will end in xx",
      cuetext: "Advertisement",
      displayHeading: "Advertisement",
      loadingAd: "Loading ad",
      podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
      skipmessage: "Skip ad in xx",
      skiptext: "Skip"
    },
    airplay: "AirPlay",
    audioTracks: "Audio",
    auto: "Auto",
    buffer: "Loading",
    cast: "Chromecast",
    cc: "Closed captions",
    close: "Close",
    errors: {
      badConnection: "This video cannot be played because of a problem with your internet connection.",
      cantLoadPlayer: "Sorry, the video player failed to load.",
      cantPlayInBrowser: "The video cannot be played in this browser.",
      cantPlayVideo: "This video file cannot be played.",
      errorCode: "Error Code",
      liveStreamDown: "The live stream is either down or has ended.",
      protectedContent: "There was a problem providing access to protected content.",
      technicalError: "This video cannot be played because of a technical error."
    },
    exitFullscreen: "Exit full screen",
    fullscreen: "Full screen",
    hd: "Quality",
    liveBroadcast: "Live",
    logo: "Logo",
    mute: "Mute",
    next: "Next",
    nextUp: "Up next",
    notLive: "Live",
    off: "Off",
    pause: "Pause",
    play: "Play",
    playback: "Play",
    playbackRates: "Playback speed",
    player: "Quicklook Inc.",
    poweredBy: "Powered by",
    prev: "Previous",
    related: {
      autoplaymessage: "Next up in xx",
      heading: "Episodes"
    },
    replay: "Replay",
    rewind: "Rewind 10s",
    settings: "Settings",
    sharing: {
      copied: "Copied",
      email: "Email",
      embed: "Embed",
      heading: "Share",
      link: "Link"
    },
    slider: "Seek",
    stop: "Stop",
    unmute: "Unmute",
    videoInfo: "About",
    volume: "Volume",
    volumeSlider: "Volume",
    shortcuts: {
      playPause: "Play/Pause",
      volumeToggle: "Mute/Unmute",
      fullscreenToggle: "Fullscreen/Exit Fullscreen",
      seekPercent: "Seek %",
      keyboardShortcuts: "Keyboard",
      increaseVolume: "Increase volume",
      decreaseVolume: "Decrease volume",
      seekForward: "Seek forward",
      seekBackward: "Seek backward",
      spacebar: "SPACE",
      captionsToggle: "Captions on/off"
    },
    captionsStyles: {
      subtitleSettings: "Subtitle settings",
      color: "Font color",
      fontOpacity: "Font opacity",
      userFontScale: "Font size",
      fontFamily: "Font family",
      edgeStyle: "Character edge",
      backgroundColor: "Background color",
      backgroundOpacity: "Background opacity",
      windowColor: "Window color",
      windowOpacity: "Window opacity",
      white: "White",
      black: "Black",
      red: "Red",
      green: "Green",
      blue: "Blue",
      yellow: "Yellow",
      magenta: "Magenta",
      cyan: "Cyan",
      none: "None",
      raised: "Raised",
      depressed: "Depressed",
      uniform: "Uniform",
      dropShadow: "Drop shadow"
    },
    disabled: "Disabled",
    enabled: "Enabled",
    reset: "Reset"
  }
}, function(t, e) {
  var n, r, i = {},
    o = {},
    u = (n = function() {
      return document.head || document.getElementsByTagName("head")[0]
    }, function() {
      return void 0 === r && (r = n.apply(this, arguments)), r
    });

  function a(t) {
    var e = document.createElement("style");
    return e.type = "text/css", e.setAttribute("data-jwplayer-id", t),
      function(t) {
        u().appendChild(t)
      }(e), e
  }

  function c(t, e) {
    var n, r, i, u = o[t];
    u || (u = o[t] = {
      element: a(t),
      counter: 0
    });
    var c = u.counter++;
    return n = u.element, i = function() {
        f(n, c, "")
      }, (r = function(t) {
        f(n, c, t)
      })(e.css),
      function(t) {
        if(t) {
          if(t.css === e.css && t.media === e.media) return;
          r((e = t).css)
        } else i()
      }
  }
  t.exports = {
    style: function(t, e) {
      ! function(t, e) {
        for(var n = 0; n < e.length; n++) {
          var r = e[n],
            o = (i[t] || {})[r.id];
          if(o) {
            for(var u = 0; u < o.parts.length; u++) o.parts[u](r.parts[u]);
            for(; u < r.parts.length; u++) o.parts.push(c(t, r.parts[u]))
          } else {
            var a = [];
            for(u = 0; u < r.parts.length; u++) a.push(c(t, r.parts[u]));
            i[t] = i[t] || {}, i[t][r.id] = {
              id: r.id,
              parts: a
            }
          }
        }
      }(e, function(t) {
        for(var e = [], n = {}, r = 0; r < t.length; r++) {
          var i = t[r],
            o = i[0],
            u = i[1],
            a = i[2],
            c = {
              css: u,
              media: a
            };
          n[o] ? n[o].parts.push(c) : e.push(n[o] = {
            id: o,
            parts: [c]
          })
        }
        return e
      }(t))
    },
    clear: function(t, e) {
      var n = i[t];
      if(!n) return;
      if(e) {
        var r = n[e];
        if(r)
          for(var o = 0; o < r.parts.length; o += 1) r.parts[o]();
        return
      }
      for(var u = Object.keys(n), a = 0; a < u.length; a += 1)
        for(var c = n[u[a]], s = 0; s < c.parts.length; s += 1) c.parts[s]();
      delete i[t]
    }
  };
  var s, l = (s = [], function(t, e) {
    return s[t] = e, s.filter(Boolean).join("\n")
  });

  function f(t, e, n) {
    if(t.styleSheet) t.styleSheet.cssText = l(e, n);
    else {
      var r = document.createTextNode(n),
        i = t.childNodes[e];
      i ? t.replaceChild(r, i) : t.appendChild(r)
    }
  }
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    i = n(17),
    o = n(32),
    u = n(18),
    a = n(8),
    c = {
      html5: function() {
        return n.e(15).then(function(t) {
          var e = n(166).default;
          return Object(u.a)(e), e
        }.bind(null, n)).catch(Object(a.b)(152))
      }
    };
  Object(r.j)(c, {
    shaka: function() {
      return n.e(16).then(function(t) {
        var e = n(180).default;
        return Object(u.a)(e), e
      }.bind(null, n)).catch(Object(a.b)(154))
    },
    hlsjs: function() {
      return n.e(13).then(function(t) {
        var e = n(175).default;
        return Object(u.a)(e), e
      }.bind(null, n)).catch(Object(a.b)(153))
    },
    hlsjsAlt: function() {
      return n.e(14).then(function(t) {
        var e = n(176).default;
        return Object(u.a)(e), e
      }.bind(null, n)).catch(Object(a.b)(155))
    }
  });
  var s = c;

  function l(t) {
    this.config = t || {}
  }
  Object(r.j)(l.prototype, {
    load: function(t) {
      var e = s[t],
        n = function() {
          return Promise.reject(new Error("Failed to load media"))
        };
      return e ? e().then((function() {
        var e = o.a[t];
        return e || n()
      })) : n()
    },
    providerSupports: function(t, e) {
      return t.supports(e)
    },
    choose: function(t) {
      if(t === Object(t))
        for(var e = i.a.length, n = 0; n < e; n++) {
          var r = i.a[n];
          if(this.providerSupports(r, t)) return {
            priority: e - n - 1,
            name: r.name,
            type: t.type,
            providerToCheck: r,
            provider: o.a[r.name]
          }
        }
      return {}
    }
  });
  var f = l;
  f.prototype.providerSupports = function(t, e) {
    return t.supports(e, this.config.edition)
  };
  e.a = f
}, function(t, e, n) {
  "use strict";
  var r = n(7),
    i = n(11);

  function o(t, e) {
    var n = e.message,
      o = e.code,
      u = function(t, e, n, r) {
        return '<div id="' + t + '" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="' + t + '"].jw-error{background:#000;overflow:hidden;position:relative}[id="' + t + '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="' + t + '"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Helvetica,Arial,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset-text" dir="auto" data-nosnippet>' + (e || "") + '<span class="jw-break jw-reset"></span>' + (r ? ("(" + n + ": " + r + ")").replace(/\s+/g, "&nbsp;") : "") + "</div></div></div></div>"
      }(t.get("id"), n, t.get("localization").errors.errorCode, o.toString()),
      a = t.get("width"),
      c = t.get("height"),
      s = Object(r.e)(u);
    return Object(i.d)(s, {
      width: a.toString().indexOf("%") > 0 ? a : a + "px",
      height: c.toString().indexOf("%") > 0 ? c : c + "px"
    }), s
  }
  n.d(e, "a", (function() {
    return o
  }))
}, function(t, e, n) {
  "use strict";

  function r(t) {
    return t.slice && "px" === t.slice(-2) && (t = t.slice(0, -2)), t
  }

  function i(t, e) {
    if(-1 === e.toString().indexOf("%")) return 0;
    if("string" != typeof t || !t) return 0;
    if(/^\d*\.?\d+%$/.test(t)) return t;
    var n = t.indexOf(":");
    if(-1 === n) return 0;
    var r = parseFloat(t.substr(0, n)),
      i = parseFloat(t.substr(n + 1));
    return r <= 0 || i <= 0 ? 0 : i / r * 100 + "%"
  }
  n.d(e, "b", (function() {
    return r
  })), n.d(e, "a", (function() {
    return i
  }))
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));
  var r = window.atob
}, function(t, e, n) {
  "use strict";
  var r = n(4),
    i = n(2);

  function o(t) {
    var e = {
      zh: "Chinese",
      nl: "Dutch",
      en: "English",
      fr: "French",
      de: "German",
      it: "Italian",
      ja: "Japanese",
      pt: "Portuguese",
      ru: "Russian",
      es: "Spanish"
    };
    return e[t] ? e[t] : t
  }

  function u(t) {
    for(var e = [], n = 0; n < Object(r.c)(t); n++) {
      var i = t.childNodes[n];
      "jwplayer" === i.prefix && "mediatypes" === Object(r.b)(i).toLowerCase() && e.push(Object(r.d)(i))
    }
    return e
  }
  var a = function t(e, n) {
      for(var a = [], c = 0; c < Object(r.c)(e); c++) {
        var s = e.childNodes[c];
        if("media" === s.prefix) {
          if(!Object(r.b)(s)) continue;
          switch(Object(r.b)(s).toLowerCase()) {
            case "content":
              if(Object(i.j)(s, "duration") && (n.duration = Object(i.g)(Object(i.j)(s, "duration"))), Object(i.j)(s, "url")) {
                n.sources || (n.sources = []);
                var l = {
                    file: Object(i.j)(s, "url"),
                    type: Object(i.j)(s, "type"),
                    width: Object(i.j)(s, "width"),
                    label: Object(i.j)(s, "label")
                  },
                  f = u(s);
                f.length && (l.mediaTypes = f), n.sources.push(l)
              }
              Object(r.c)(s) > 0 && (n = t(s, n));
              break;
            case "title":
              n.title = Object(r.d)(s);
              break;
            case "description":
              n.description = Object(r.d)(s);
              break;
            case "guid":
              n.mediaid = Object(r.d)(s);
              break;
            case "thumbnail":
              n.image || (n.image = Object(i.j)(s, "url"));
              break;
            case "group":
              t(s, n);
              break;
            case "subtitle":
              var d = {
                file: Object(i.j)(s, "url"),
                kind: "captions"
              };
              Object(i.j)(s, "lang").length > 0 && (d.label = o(Object(i.j)(s, "lang"))), a.push(d)
          }
        }
      }
      n.tracks || (n.tracks = []);
      for(var p = 0; p < a.length; p++) n.tracks.push(a[p]);
      return n
    },
    c = n(12),
    s = function(t, e) {
      for(var n = "default", o = [], u = [], a = e, s = 0; s < t.childNodes.length; s++) {
        var l = t.childNodes[s];
        if("jwplayer" === l.prefix) {
          var f = Object(r.b)(l);
          "source" === f ? (delete e.sources, o.push({
            file: Object(i.j)(l, "file"),
            default: Object(i.j)(l, n),
            label: Object(i.j)(l, "label"),
            type: Object(i.j)(l, "type")
          })) : "track" === f ? (delete e.tracks, u.push({
            file: Object(i.j)(l, "file"),
            default: Object(i.j)(l, n),
            kind: Object(i.j)(l, "kind"),
            label: Object(i.j)(l, "label")
          })) : (e[f] = Object(c.serialize)(Object(r.d)(l)), "file" === f && e.sources && delete e.sources)
        }
        e.file || (e.file = e.link)
      }
      if(o.length) {
        e.sources = [];
        for(var d = 0; d < o.length; d++) {
          var p = o[d];
          p.file.length > 0 && (p[n] = "true" === o[d][n], p.label || delete p.label, a.sources.push(p))
        }
      }
      if(u.length) {
        e.tracks = [];
        for(var h = 0; h < u.length; h++) {
          var v = u[h];
          v.file && v.file.length > 0 && (v[n] = "true" === u[h][n], v.kind = u[h].kind.length ? u[h].kind : "captions", v.label || delete v.label, a.tracks.push(v))
        }
      }
      return a
    },
    l = n(28);

  function f(t) {
    var e = [];
    e.feedData = {};
    for(var n = 0; n < Object(r.c)(t); n++) {
      var i = Object(r.a)(t, n);
      if("channel" === Object(r.b)(i).toLowerCase())
        for(var o = 0; o < Object(r.c)(i); o++) {
          var u = Object(r.a)(i, o),
            a = Object(r.b)(u).toLowerCase();
          "item" === a ? e.push(d(u)) : a && (e.feedData[a] = Object(r.d)(u))
        }
    }
    return e
  }

  function d(t) {
    for(var e = {}, n = 0; n < t.childNodes.length; n++) {
      var o = t.childNodes[n],
        u = Object(r.b)(o);
      if(u) switch(u.toLowerCase()) {
        case "enclosure":
          e.file = Object(i.j)(o, "url");
          break;
        case "title":
          e.title = Object(r.d)(o);
          break;
        case "guid":
          e.mediaid = Object(r.d)(o);
          break;
        case "pubdate":
          e.date = Object(r.d)(o);
          break;
        case "description":
          e.description = Object(r.d)(o);
          break;
        case "link":
          e.link = Object(r.d)(o);
          break;
        case "category":
          e.tags ? e.tags += Object(r.d)(o) : e.tags = Object(r.d)(o)
      }
    }
    return new l.a(s(t, a(t, e)))
  }
  n.d(e, "a", (function() {
    return f
  }))
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));
  var r = "function" == typeof console.log ? console.log.bind(console) : function() {}
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return o
  }));
  var r = n(45);

  function i(t) {
    for(var e = new Array(Math.ceil(t.length / 4)), n = 0; n < e.length; n++) e[n] = t.charCodeAt(4 * n) + (t.charCodeAt(4 * n + 1) << 8) + (t.charCodeAt(4 * n + 2) << 16) + (t.charCodeAt(4 * n + 3) << 24);
    return e
  }

  function o(t, e) {
    if(t = String(t), e = String(e), 0 === t.length) return "";
    for(var n, o, u, a = i(Object(r.a)(t)), c = i((n = e, unescape(encodeURIComponent(n))).slice(0, 16)), s = a.length, l = a[s - 1], f = a[0], d = 2654435769 * Math.floor(6 + 52 / s); d;) {
      u = d >>> 2 & 3;
      for(var p = s - 1; p >= 0; p--) o = ((l = a[p > 0 ? p - 1 : s - 1]) >>> 5 ^ f << 2) + (f >>> 3 ^ l << 4) ^ (d ^ f) + (c[3 & p ^ u] ^ l), f = a[p] -= o;
      d -= 2654435769
    }
    return function(t) {
      try {
        return decodeURIComponent(escape(t))
      } catch (e) {
        return t
      }
    }(function(t) {
      for(var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = String.fromCharCode(255 & t[n], t[n] >>> 8 & 255, t[n] >>> 16 & 255, t[n] >>> 24 & 255);
      return e.join("")
    }(a).replace(/\0+$/, ""))
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return r
  })), n.d(e, "a", (function() {
    return i
  }));
  var r = window.requestAnimationFrame || function(t) {
      return setTimeout(t, 17)
    },
    i = window.cancelAnimationFrame || clearTimeout
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return l
  })), n.d(e, "c", (function() {
    return f
  }));
  var r = n(0),
    i = n(44),
    o = n(21),
    u = n(12),
    a = n(5),
    c = n(40),
    s = n(13),
    l = {
      autoPause: {
        viewability: !1,
        pauseAds: !1
      },
      autostart: !1,
      bandwidthEstimate: null,
      bitrateSelection: null,
      castAvailable: !1,
      controls: !0,
      cues: [],
      defaultPlaybackRate: 1,
      displaydescription: !0,
      displaytitle: !0,
      displayPlaybackLabel: !1,
      enableShortcuts: !0,
      height: 360,
      intl: {},
      item: 0,
      language: "en",
      liveTimeout: null,
      localization: c.a,
      mute: !1,
      nextUpDisplay: !0,
      playbackRateControls: !1,
      playbackRates: [.5, 1, 1.25, 1.5, 2],
      renderCaptionsNatively: !1,
      repeat: !1,
      stretching: "uniform",
      volume: 90,
      width: 640
    };

  function f(t) {
    return t < 5 ? 5 : t > 30 ? 30 : t
  }
  e.b = function(t, e) {
    var d = Object(r.j)({}, (window.jwplayer || {}).defaults, e, t);
    ! function(t) {
      Object.keys(t).forEach((function(e) {
        "id" !== e && (t[e] = Object(u.serialize)(t[e]))
      }))
    }(d);
    var p = d.forceLocalizationDefaults ? l.language : Object(s.e)(),
      h = Object(s.j)(d.intl);
    d.localization = Object(s.a)(c.a, Object(s.c)(d, h, p));
    var v = Object(r.j)({}, l, d);
    "." === v.base && (v.base = Object(o.getScriptPath)("jwplayer.js")), v.base = (v.base || Object(o.loadFrom)()).replace(/\/?$/, "/"), n.p = v.base, v.width = Object(i.b)(v.width), v.height = Object(i.b)(v.height), v.aspectratio = Object(i.a)(v.aspectratio, v.width), v.volume = Object(r.z)(v.volume) ? Math.min(Math.max(0, v.volume), 100) : l.volume, v.mute = !!v.mute, v.language = p, v.intl = h;
    var g = v.playlistIndex;
    g && (v.item = g), Object(r.v)(v.item) || (v.item = 0);
    var m = d.autoPause;
    m && (v.autoPause.viewability = !("viewability" in m) || !!m.viewability);
    var b = v.playbackRateControls;
    if(b) {
      var y = v.playbackRates;
      Array.isArray(b) && (y = b), (y = y.filter((function(t) {
        return Object(r.v)(t) && t >= .25 && t <= 4
      })).map((function(t) {
        return Math.round(100 * t) / 100
      }))).indexOf(1) < 0 && y.push(1), y.sort(), v.playbackRateControls = !0, v.playbackRates = y
    }(!v.playbackRateControls || v.playbackRates.indexOf(v.defaultPlaybackRate) < 0) && (v.defaultPlaybackRate = 1), v.playbackRate = v.defaultPlaybackRate, v.aspectratio || delete v.aspectratio;
    var j = v.playlist;
    if(j) Array.isArray(j.playlist) && (v.feedData = j, v.playlist = j.playlist);
    else {
      var w = Object(r.C)(v, ["title", "description", "type", "mediaid", "image", "images", "file", "sources", "tracks", "preload", "duration"]);
      v.playlist = [w]
    }
    v.qualityLabels = v.qualityLabels || v.hlslabels, delete v.duration;
    var O = v.liveTimeout;
    null !== O && (Object(r.z)(O) ? 0 !== O && (O = Math.max(30, O)) : O = null, v.liveTimeout = O);
    var k, C, x = parseFloat(v.bandwidthEstimate),
      P = parseFloat(v.bitrateSelection);
    return v.bandwidthEstimate = Object(r.z)(x) ? x : (k = v.defaultBandwidthEstimate, C = parseFloat(k), Object(r.z)(C) ? Math.max(C, 1) : l.bandwidthEstimate), v.bitrateSelection = Object(r.z)(P) ? P : l.bitrateSelection, v.liveSyncDuration = f(v.liveSyncDuration), v.backgroundLoading = Object(r.r)(v.backgroundLoading) ? v.backgroundLoading : a.Features.backgroundLoading, v
  }
}, function(t, e, n) {
  "use strict";
  n.r(e);
  var r = n(0),
    i = setTimeout;

  function o() {}

  function u(t) {
    if(!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
    if("function" != typeof t) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(t, this)
  }

  function a(t, e) {
    for(; 3 === t._state;) t = t._value;
    0 !== t._state ? (t._handled = !0, u._immediateFn((function() {
      var n = 1 === t._state ? e.onFulfilled : e.onRejected;
      if(null !== n) {
        var r;
        try {
          r = n(t._value)
        } catch (t) {
          return void s(e.promise, t)
        }
        c(e.promise, r)
      } else(1 === t._state ? c : s)(e.promise, t._value)
    }))) : t._deferreds.push(e)
  }

  function c(t, e) {
    try {
      if(e === t) throw new TypeError("A promise cannot be resolved with itself.");
      if(e && ("object" == typeof e || "function" == typeof e)) {
        var n = e.then;
        if(e instanceof u) return t._state = 3, t._value = e, void l(t);
        if("function" == typeof n) return void d((r = n, i = e, function() {
          r.apply(i, arguments)
        }), t)
      }
      t._state = 1, t._value = e, l(t)
    } catch (e) {
      s(t, e)
    }
    var r, i
  }

  function s(t, e) {
    t._state = 2, t._value = e, l(t)
  }

  function l(t) {
    2 === t._state && 0 === t._deferreds.length && u._immediateFn((function() {
      t._handled || u._unhandledRejectionFn(t._value)
    }));
    for(var e = 0, n = t._deferreds.length; e < n; e++) a(t, t._deferreds[e]);
    t._deferreds = null
  }

  function f(t, e, n) {
    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
  }

  function d(t, e) {
    var n = !1;
    try {
      t((function(t) {
        n || (n = !0, c(e, t))
      }), (function(t) {
        n || (n = !0, s(e, t))
      }))
    } catch (t) {
      if(n) return;
      n = !0, s(e, t)
    }
  }
  u.prototype.catch = function(t) {
    return this.then(null, t)
  }, u.prototype.then = function(t, e) {
    var n = new this.constructor(o);
    return a(this, new f(t, e, n)), n
  }, u.prototype.finally = function(t) {
    var e = this.constructor;
    return this.then((function(n) {
      return e.resolve(t()).then((function() {
        return n
      }))
    }), (function(n) {
      return e.resolve(t()).then((function() {
        return e.reject(n)
      }))
    }))
  }, u.all = function(t) {
    return new u((function(e, n) {
      if(!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
      var r = Array.prototype.slice.call(t);
      if(0 === r.length) return e([]);
      var i = r.length;

      function o(t, u) {
        try {
          if(u && ("object" == typeof u || "function" == typeof u)) {
            var a = u.then;
            if("function" == typeof a) return void a.call(u, (function(e) {
              o(t, e)
            }), n)
          }
          r[t] = u, 0 == --i && e(r)
        } catch (t) {
          n(t)
        }
      }
      for(var u = 0; u < r.length; u++) o(u, r[u])
    }))
  }, u.resolve = function(t) {
    return t && "object" == typeof t && t.constructor === u ? t : new u((function(e) {
      e(t)
    }))
  }, u.reject = function(t) {
    return new u((function(e, n) {
      n(t)
    }))
  }, u.race = function(t) {
    return new u((function(e, n) {
      for(var r = 0, i = t.length; r < i; r++) t[r].then(e, n)
    }))
  }, u._immediateFn = "function" == typeof setImmediate && function(t) {
    setImmediate(t)
  } || function(t) {
    i(t, 0)
  }, u._unhandledRejectionFn = function(t) {
    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
  };
  var p = u;
  window.Promise || (window.Promise = p);
  var h = n(21),
    v = n(15),
    g = n(17),
    m = n(18),
    b = {
      availableProviders: g.a,
      registerProvider: m.a
    },
    y = n(25);
  b.registerPlugin = function(t, e, n) {
    "jwpsrv" !== t && Object(y.b)(t, e, n)
  };
  var j = b,
    w = n(29),
    O = n(16),
    k = n(5),
    C = n(64),
    x = n(3),
    P = n(30),
    S = n(9),
    T = n(36),
    E = 0;

  function A(t, e) {
    var n = new C.a(e);
    return n.on(x.hb, (function(e) {
      t._qoe.tick("ready"), e.setupTime = t._qoe.between("setup", "ready")
    })), n.on("all", (function(e, n) {
      t.trigger(e, n)
    })), n
  }

  function _(t, e) {
    var n = t.plugins,
      r = Object.keys(n).map((function(t) {
        var e = n[t];
        return delete n[t], e
      }));
    e.get("setupConfig") && t.trigger("remove"), t.off(), e.playerDestroy(), r.forEach((function(t) {
      if(t.destroy) try {
        t.destroy()
      } catch (t) {}
    })), e.getContainer().removeAttribute("data-jwplayer-id")
  }

  function F(t) {
    var e = ++E,
      n = t.id || "player-" + e,
      i = new P.a,
      o = {},
      u = A(this, t);
    i.tick("init"), t.setAttribute("data-jwplayer-id", n), Object.defineProperties(this, {
      id: {
        enumerable: !0,
        get: function() {
          return n
        }
      },
      uniqueId: {
        enumerable: !0,
        get: function() {
          return e
        }
      },
      plugins: {
        enumerable: !0,
        get: function() {
          return o
        }
      },
      _qoe: {
        enumerable: !0,
        get: function() {
          return i
        }
      },
      version: {
        enumerable: !0,
        get: function() {
          return w.a
        }
      },
      Events: {
        enumerable: !0,
        get: function() {
          return S.a
        }
      },
      utils: {
        enumerable: !0,
        get: function() {
          return T.a
        }
      },
      _: {
        enumerable: !0,
        get: function() {
          return r.f
        }
      }
    }), Object(r.j)(this, {
      _events: {},
      setup: function(e) {
        return i.clear("ready"), i.tick("setup"), u && _(this, u), (u = A(this, t)).init(e, this), this.on(e.events, null, this)
      },
      remove: function() {
        return function(t) {
          for(var e = v.a.length; e--;)
            if(v.a[e].uniqueId === t.uniqueId) {
              v.a.splice(e, 1);
              break
            }
        }(this), u && _(this, u), this
      },
      qoe: function() {
        var t = u.getItemQoe();
        return {
          setupTime: this._qoe.between("setup", "ready"),
          firstFrame: t.getFirstFrame ? t.getFirstFrame() : null,
          player: this._qoe.dump(),
          item: t.dump()
        }
      },
      addCues: function(t) {
        return Array.isArray(t) && u.addCues(t), this
      },
      getAudioTracks: function() {
        return u.getAudioTracks()
      },
      getBuffer: function() {
        return u.get("buffer")
      },
      getCaptions: function() {
        return u.get("captions")
      },
      getCaptionsList: function() {
        return u.getCaptionsList()
      },
      getConfig: function() {
        return u.getConfig()
      },
      getContainer: function() {
        return u.getContainer()
      },
      getControls: function() {
        return u.get("controls")
      },
      getCues: function() {
        return u.get("cues")
      },
      getCurrentAudioTrack: function() {
        return u.getCurrentAudioTrack()
      },
      getCurrentCaptions: function() {
        return u.getCurrentCaptions()
      },
      getCurrentQuality: function() {
        return u.getCurrentQuality()
      },
      getCurrentTime: function() {
        return u.get("currentTime")
      },
      getDuration: function() {
        return u.get("duration")
      },
      getEnvironment: function() {
        return k
      },
      getFullscreen: function() {
        return u.get("fullscreen")
      },
      getHeight: function() {
        return u.getHeight()
      },
      getItemMeta: function() {
        return u.get("itemMeta") || {}
      },
      getMute: function() {
        return u.getMute()
      },
      getPercentViewable: function() {
        return u.get("visibility")
      },
      getPlaybackRate: function() {
        return u.get("playbackRate")
      },
      getPlaylist: function() {
        return u.get("playlist")
      },
      getPlaylistIndex: function() {
        return u.get("item")
      },
      getPlaylistItem: function(t) {
        if(!T.a.exists(t)) return u.get("playlistItem");
        var e = this.getPlaylist();
        return e ? e[t] : null
      },
      getPosition: function() {
        return u.get("position")
      },
      getProvider: function() {
        return u.getProvider()
      },
      getQualityLevels: function() {
        return u.getQualityLevels()
      },
      getSafeRegion: function(t) {
        return void 0 === t && (t = !0), u.getSafeRegion(t)
      },
      getState: function() {
        return u.getState()
      },
      getStretching: function() {
        return u.get("stretching")
      },
      getViewable: function() {
        return u.get("viewable")
      },
      getVisualQuality: function() {
        return u.getVisualQuality()
      },
      getVolume: function() {
        return u.get("volume")
      },
      getWidth: function() {
        return u.getWidth()
      },
      setCaptions: function(t) {
        return u.setCaptions(t), this
      },
      setConfig: function(t) {
        return u.setConfig(t), this
      },
      setControls: function(t) {
        return u.setControls(t), this
      },
      setCurrentAudioTrack: function(t) {
        u.setCurrentAudioTrack(t)
      },
      setCurrentCaptions: function(t) {
        u.setCurrentCaptions(t)
      },
      setCurrentQuality: function(t) {
        u.setCurrentQuality(t)
      },
      setFullscreen: function(t) {
        return u.setFullscreen(t), this
      },
      setMute: function(t) {
        return u.setMute(t), this
      },
      setPlaybackRate: function(t) {
        return u.setPlaybackRate(t), this
      },
      setPlaylistItem: function(t, e) {
        return u.setPlaylistItem(t, e), this
      },
      setCues: function(t) {
        return Array.isArray(t) && u.setCues(t), this
      },
      setVolume: function(t) {
        return u.setVolume(t), this
      },
      load: function(t, e) {
        return u.load(t, e), this
      },
      play: function(t) {
        return u.play(t), this
      },
      pause: function(t) {
        return u.pause(t), this
      },
      playToggle: function(t) {
        switch(this.getState()) {
          case x.qb:
          case x.kb:
            return this.pause(t);
          default:
            return this.play(t)
        }
      },
      seek: function(t, e) {
        return u.seek(t, e), this
      },
      playlistItem: function(t, e) {
        return u.playlistItem(t, e), this
      },
      playlistNext: function(t) {
        return u.playlistNext(t), this
      },
      playlistPrev: function(t) {
        return u.playlistPrev(t), this
      },
      next: function(t) {
        return u.next(t), this
      },
      castToggle: function() {
        return u.castToggle(), this
      },
      stopCasting: function() {
        return u.stopCasting(), this
      },
      createInstream: function() {
        return u.createInstream()
      },
      stop: function() {
        return u.stop(), this
      },
      resize: function(t, e) {
        return u.resize(t, e), this
      },
      addButton: function(t, e, n, r, i) {
        return u.addButton(t, e, n, r, i), this
      },
      removeButton: function(t) {
        return u.removeButton(t), this
      },
      attachMedia: function() {
        return u.attachMedia(), this
      },
      detachMedia: function() {
        return u.detachMedia(), this
      },
      isBeforeComplete: function() {
        return u.isBeforeComplete()
      },
      isBeforePlay: function() {
        return u.isBeforePlay()
      },
      setPlaylistItemCallback: function(t, e) {
        u.setItemCallback(t, e)
      },
      removePlaylistItemCallback: function() {
        u.setItemCallback(null)
      },
      getPlaylistItemPromise: function(t) {
        return u.getItemPromise(t)
      },
      getFloating: function() {
        return !!u.get("isFloating")
      },
      setFloating: function(t) {
        u.setConfig({
          floating: {
            mode: t ? "always" : "never"
          }
        })
      }
    })
  }
  Object(r.j)(F.prototype, {
    on: function(t, e, n) {
      return S.c.call(this, t, e, n)
    },
    once: function(t, e, n) {
      return S.d.call(this, t, e, n)
    },
    off: function(t, e, n) {
      return S.b.call(this, t, e, n)
    },
    trigger: function(t, e) {
      return (e = r.f.isObject(e) ? Object(r.j)({}, e) : {}).type = t, O.a.debug ? S.e.call(this, t, e) : S.f.call(this, t, e)
    },
    getPlugin: function(t) {
      return this.plugins[t]
    },
    addPlugin: function(t, e) {
      this.plugins[t] = e, this.on("ready", e.addToPlayer), e.resize && this.on("resize", e.resizeHandler)
    },
    registerPlugin: function(t, e, n) {
      Object(y.b)(t, e, n)
    },
    getAdBlock: function() {
      return !1
    },
    playAd: function(t) {},
    pauseAd: function(t) {},
    skipAd: function() {}
  }), n.p = Object(h.loadFrom)();
  var I = function(t) {
    var e, n;
    if(t ? "string" == typeof t ? (e = M(t)) || (n = document.getElementById(t)) : "number" == typeof t ? e = v.a[t] : t.nodeType && (e = M((n = t).id || n.getAttribute("data-jwplayer-id"))) : e = v.a[0], e) return e;
    if(n) {
      var r = new F(n);
      return v.a.push(r), r
    }
    return {
      registerPlugin: y.b
    }
  };

  function M(t) {
    for(var e = 0; e < v.a.length; e++)
      if(v.a[e].id === t) return v.a[e];
    return null
  }

  function L(t) {
    Object.defineProperties(t, {
      api: {
        get: function() {
          return j
        },
        set: function() {}
      },
      version: {
        get: function() {
          return w.a
        },
        set: function() {}
      },
      debug: {
        get: function() {
          return O.a.debug
        },
        set: function(t) {
          O.a.debug = !!t
        }
      }
    })
  }
  L(I);
  var N = I,
    R = n(34),
    D = n(26),
    B = n(24),
    q = n(48),
    z = n(46),
    V = n(22),
    H = r.f.extend,
    U = {};
  U._ = r.f, U.utils = Object(r.j)(T.a, {
    key: D.b,
    extend: H,
    scriptloader: B.a,
    rssparser: {
      parse: z.a
    },
    tea: q.a,
    UI: R.a
  }), U.utils.css.style = U.utils.style, U.vid = V.a;
  var Q = U,
    W = n(63),
    X = /^(?:on(?:ce)?|off|trigger)$/;

  function Z(t) {
    var e = {};
    $(this, t, t, e), $(this, t, F.prototype, e)
  }

  function $(t, e, n, r) {
    var i = Object.keys(n);
    i.forEach((function(o) {
      "function" == typeof n[o] && "Events" !== o ? t[o] = function t(e, n, r, i, o) {
        return function() {
          var u = Array.prototype.slice.call(arguments),
            a = u[0],
            c = n._trackCallQueue || (n._trackCallQueue = []),
            s = X.test(r),
            l = s && u[1] && u[1]._callback,
            f = o.edition || J(n, o, "edition"),
            d = "free" === f;
          if(d) {
            var p = ["addButton", "addCues", "detachMedia", "load", "next", "pause", "play", "playlistItem", "playlistNext", "playlistPrev", "playToggle", "resize", "seek", "setCaptions", "setConfig", "setControls", "setCues", "setFullscreen", "setMute", "setPlaybackRate", "setPlaylistItem", "setVolume", "stop"];
            if(p.indexOf(r) > -1) return K(r), e;
            var h = ["createInstream", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality"];
            if(h.indexOf(r) > -1) return K(r), null
          }
          if(l || c.push([r, a]), s) return tt(n, c), n[r].apply(e, u);
          Y(r, u);
          var v = n[r].apply(n, u);
          return "remove" === r ? n.off.call(e) : "setup" === r && (n.off.call(e), n.off(a.events, null, n), n.on.call(e, a.events, null, e), n.on("all", (function(r, u) {
            if("ready" === r) {
              var a = Object.keys(n).filter((function(t) {
                  return "_" !== t[0] && -1 === i.indexOf(t) && "function" == typeof n[t]
                })),
                s = i.concat(a);
              a.forEach((function(r) {
                e[r] = t(e, n, r, s, o)
              }))
            }
            n.trigger.call(e, r, u), tt(n, c)
          }))), tt(n, c), v === n ? e : v
        }
      }(t, e, o, i, r) : "_events" === o ? t._events = {} : Object.defineProperty(t, o, {
        enumerable: !0,
        get: function() {
          return n[o]
        }
      })
    }))
  }

  function J(t, e, n) {
    var r = t.getConfig()[n];
    return e[n] = r, r
  }

  function K(t) {
    console.warn("The API method jwplayer()." + t + "() is disabled in the free edition of JW Player.")
  }

  function Y(t, e) {
    var n = {
      reason: Object(W.a)() ? "interaction" : "external"
    };
    switch(t) {
      case "play":
      case "pause":
      case "playToggle":
      case "playlistNext":
      case "playlistPrev":
      case "next":
        e[0] = n;
        break;
      case "seek":
      case "playlistItem":
        e[1] = n
    }
  }

  function G(t, e, n) {
    try {
      var r = function(t, e) {
        switch(t) {
          case "setup":
            return !!e;
          case "getSafeRegion":
          case "pauseAd":
          case "setControls":
          case "setFullscreen":
          case "setMute":
            return !!e === e ? e : void 0;
          case "setPlaylistItem":
          case "getPlaylistItem":
            return (0 | e) === e ? e : void 0;
          case "setPlaybackRate":
          case "setVolume":
            return Number(e);
          case "setConfig":
            return Object.keys(Object(e)).join(",");
          case "on":
          case "once":
          case "off":
          case "trigger":
          case "getPlugin":
          case "addPlugin":
          case "registerPlugin":
            return "" + e
        }
        return null
      }(e, n);
      t.trackExternalAPIUsage(e, r)
    } catch (t) {
      O.a.debug && console.warn(t)
    }
  }

  function tt(t, e) {
    if(e.length) {
      var n = t.getPlugin("jwpsrv");
      n && n.trackExternalAPIUsage && (e.forEach((function(t) {
        G(n, t[0], t[1])
      })), e.length = 0)
    }
  }
  var et = window;
  Object(r.j)(N, Q);
  var nt = function(t) {
    var e = N(t);
    return e.uniqueId ? e._publicApi || (e._publicApi = new Z(e)) : e
  };
  Object(r.j)(nt, Q), L(nt), "function" == typeof et.define && et.define.amd && et.define([], (function() {
    return nt
  }));
  var rt = nt;
  et.jwplayer && (rt = et.jwplayer);
  e.default = rt
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));
  var r = function(t, e, n) {
    return Math.max(Math.min(t, n), e)
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  })), n.d(e, "b", (function() {
    return o
  }));
  var r = 12;

  function i() {
    try {
      var t = window.crypto || window.msCrypto;
      if(t && t.getRandomValues) return t.getRandomValues(new Uint32Array(1))[0].toString(36)
    } catch (t) {}
    return Math.random().toString(36).slice(2, 9)
  }

  function o(t) {
    for(var e = ""; e.length < t;) e += i();
    return e.slice(0, t)
  }
}, function(t, e, n) {
  "use strict";

  function r(t, e) {
    return (r = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  n.d(e, "a", (function() {
    return i
  }));
  var i = function(t) {
    var e, n;

    function i() {
      var e;
      return (e = t.call(this) || this).attributes = Object.create(null), e
    }
    n = t, (e = i).prototype = Object.create(n.prototype), e.prototype.constructor = e, r(e, n);
    var o = i.prototype;
    return o.addAttributes = function(t) {
      var e = this;
      Object.keys(t).forEach((function(n) {
        e.add(n, t[n])
      }))
    }, o.add = function(t, e) {
      var n = this;
      Object.defineProperty(this, t, {
        get: function() {
          return n.attributes[t]
        },
        set: function(e) {
          return n.set(t, e)
        },
        enumerable: !1
      }), this.attributes[t] = e
    }, o.get = function(t) {
      return this.attributes[t]
    }, o.set = function(t, e) {
      if(this.attributes[t] !== e) {
        var n = this.attributes[t];
        this.attributes[t] = e, this.trigger("change:" + t, this, e, n)
      }
    }, o.clone = function() {
      var t = {},
        e = this.attributes;
      if(e)
        for(var n in e) t[n] = e[n];
      return t
    }, o.change = function(t, e, n) {
      this.on("change:" + t, e, n);
      var r = this.get(t);
      return e.call(n, this, r, r), this
    }, i
  }(n(9).a)
}, function(t, e, n) {
  "use strict";

  function r(t, e, n) {
    var r = [],
      i = {};

    function o() {
      for(; r.length > 0;) {
        var e = r.shift(),
          n = e.command,
          o = e.args;
        (i[n] || t[n]).apply(t, o)
      }
    }
    e.forEach((function(e) {
      var u = t[e];
      i[e] = u, t[e] = function() {
        for(var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
        n() ? r.push({
          command: e,
          args: i
        }) : (o(), u && u.apply(this, i))
      }
    })), Object.defineProperty(this, "queue", {
      enumerable: !0,
      get: function() {
        return r
      }
    }), this.flush = o, this.empty = function() {
      r.length = 0
    }, this.off = function() {
      e.forEach((function(e) {
        var n = i[e];
        n && (t[e] = n, delete i[e])
      }))
    }, this.destroy = function() {
      this.off(), this.empty()
    }
  }
  n.d(e, "a", (function() {
    return r
  }))
}, function(t, e, n) {
  "use strict";
  n.d(e, "c", (function() {
    return r
  })), n.d(e, "b", (function() {
    return i
  })), n.d(e, "a", (function() {
    return o
  }));
  var r = 4,
    i = 5,
    o = 1
}, function(t, e, n) {
  "use strict";
  var r = n(3),
    i = function() {},
    o = function() {
      return !1
    },
    u = {
      name: "default"
    },
    a = {
      supports: o,
      play: i,
      pause: i,
      preload: i,
      load: i,
      stop: i,
      volume: i,
      mute: i,
      seek: i,
      resize: i,
      remove: i,
      destroy: i,
      setVisibility: i,
      setFullscreen: i,
      getFullscreen: o,
      supportsFullscreen: o,
      getContainer: i,
      setContainer: i,
      getName: function() {
        return u
      },
      getQualityLevels: i,
      getCurrentQuality: i,
      setCurrentQuality: i,
      getAudioTracks: i,
      getCurrentAudioTrack: i,
      setCurrentAudioTrack: i,
      getSeekRange: function() {
        return {
          start: 0,
          end: this.getDuration()
        }
      },
      setPlaybackRate: i,
      getPlaybackRate: function() {
        return 1
      },
      getBandwidthEstimate: function() {
        return null
      },
      getLiveLatency: function() {
        return null
      },
      attachMedia: i,
      detachMedia: i,
      init: i,
      setState: function(t) {
        this.state = t, this.trigger(r.cb, {
          newstate: t
        })
      },
      sendMediaType: function(t) {
        var e = t[0],
          n = e.type,
          i = e.mimeType,
          o = "aac" === n || "mp3" === n || "mpeg" === n || i && 0 === i.indexOf("audio/");
        this.trigger(r.U, {
          mediaType: o ? "audio" : "video"
        })
      },
      getDuration: function() {
        return 0
      },
      trigger: i
    };
  e.a = a
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    i = n(24),
    o = n(12),
    u = n(2),
    a = n(1),
    c = n(19),
    s = function(t) {
      if("string" == typeof t) {
        var e = (t = t.split("?")[0]).indexOf("://");
        if(e > 0) return 0;
        var n = t.indexOf("/"),
          r = Object(u.a)(t);
        return !(e < 0 && n < 0) || r && isNaN(r) ? 1 : 2
      }
    };
  var l = function(t) {
    this.url = t, this.promise_ = null
  };
  Object.defineProperties(l.prototype, {
    promise: {
      get: function() {
        return this.promise_ || this.load()
      },
      set: function() {}
    }
  }), Object(r.j)(l.prototype, {
    load: function() {
      var t = this,
        e = this.promise_;
      if(!e) {
        if(2 === s(this.url)) e = Promise.resolve(this);
        else {
          var n = new i.a(function(t) {
            switch(s(t)) {
              case 0:
                return t;
              case 1:
                return Object(o.getAbsolutePath)(t, window.location.href)
            }
          }(this.url));
          this.loader = n, e = n.load().then((function() {
            return t
          }))
        }
        this.promise_ = e
      }
      return e
    },
    registerPlugin: function(t, e, n) {
      this.name = t, this.target = e, this.js = n
    },
    getNewInstance: function(t, e, n) {
      var r = this.js;
      if("function" != typeof r) throw new a.q(null, Object(c.b)(this.url) + 100);
      var i = new r(t, e, n);
      return i.addToPlayer = function() {
        var t = this.getContainer().querySelector(".jw-overlays");
        t && (n.left = t.style.left, n.top = t.style.top, t.appendChild(n), i.displayArea = t)
      }, i.resizeHandler = function() {
        var t = i.displayArea;
        t && i.resize(t.clientWidth, t.clientHeight)
      }, i
    }
  }), e.a = l
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    i = n(3),
    o = n(4),
    u = n(46),
    a = n(27),
    c = n(9),
    s = n(1);
  e.a = function() {
    var t = Object(r.j)(this, c.a);

    function e(e) {
      try {
        var a, c = e.responseXML ? e.responseXML.childNodes : null,
          l = null;
        if(c) {
          for(var f = 0; f < c.length && 8 === (l = c[f]).nodeType; f++);
          if(l && "xml" === Object(o.b)(l) && (l = l.nextSibling), l && "rss" === Object(o.b)(l)) {
            var d = Object(u.a)(l);
            a = Object(r.j)({
              playlist: d
            }, d.feedData)
          }
        }
        if(!a) try {
          var p = JSON.parse(e.responseText);
          if(Array.isArray(p)) a = {
            playlist: p
          };
          else {
            if(!Array.isArray(p.playlist)) throw Error("Playlist is not an array");
            a = p
          }
        } catch (t) {
          throw new s.q(s.m, 621, t)
        }
        t.trigger(i.fb, a)
      } catch (t) {
        n(t)
      }
    }

    function n(e) {
      e instanceof s.q && !e.code && (e = new s.q(s.m, 0)), t.trigger(i.x, e)
    }
    this.load = function(t) {
      Object(a.b)(t, e, (function(t, e, r, i) {
        n(i)
      }))
    }, this.destroy = function() {
      this.off()
    }
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return i
  })), n.d(e, "a", (function() {
    return u
  }));
  var r = n(56);

  function i() {
    for(var t = r.c, e = [], n = [], i = 0; i < t; i++) {
      var a = u();
      e.push(a), n.push(a), o(a)
    }
    var c = n.shift(),
      s = n.shift(),
      l = !1;
    return {
      primed: function() {
        return l
      },
      prime: function() {
        e.forEach(o), l = !0
      },
      played: function() {
        l = !0
      },
      getPrimedElement: function() {
        return n.shift() || null
      },
      getAdElement: function() {
        return c
      },
      getTestElement: function() {
        return s
      },
      clean: function(t) {
        if(t.src) {
          t.removeAttribute("src");
          try {
            t.load()
          } catch (t) {}
        }
      },
      recycle: function(t) {
        t && !n.some((function(e) {
          return e === t
        })) && (this.clean(t), n.push(t))
      },
      syncVolume: function(t) {
        var n = Math.min(Math.max(0, t / 100), 1);
        e.forEach((function(t) {
          t.volume = n
        }))
      },
      syncMute: function(t) {
        e.forEach((function(e) {
          e.muted = t
        }))
      }
    }
  }

  function o(t) {
    t.src || t.load()
  }

  function u(t) {
    var e = document.createElement("video");
    return e.className = "jw-video jw-reset", e.setAttribute("tabindex", "-1"), e.setAttribute("disableRemotePlayback", ""), e.setAttribute("webkit-playsinline", ""), e.setAttribute("playsinline", ""), t && Object.keys(t).forEach((function(n) {
      e.setAttribute(n, t[n])
    })), e
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return i
  }));
  var r = n(0);

  function i(t, e) {
    return Object(r.j)({}, e, {
      prime: function() {
        t.src || t.load()
      },
      getPrimedElement: function() {
        return t
      },
      clean: function() {
        e.clean(t)
      },
      recycle: function() {
        e.clean(t)
      }
    })
  }
}, function(t, e, n) {
  "use strict";
  e.a = "hidden" in document ? function() {
    return !document.hidden
  } : "webkitHidden" in document ? function() {
    return !document.webkitHidden
  } : function() {
    return !0
  }
}, function(t, e, n) {
  "use strict";

  function r(t) {
    return !!(t = t || window.event) && /^(?:mouse|pointer|touch|gesture|click|key)/.test(t.type)
  }
  n.d(e, "a", (function() {
    return r
  }))
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    i = n(55),
    o = n(50),
    u = n(21),
    a = n(10),
    c = n(51),
    s = n(26),
    l = n(20);

  function f(t, e) {
    var n = t.querySelector(e);
    if(n) return n.getAttribute("content")
  }
  var d = n(67),
    p = n.n(d),
    h = n(66);

  function v(t) {
    return "string" == typeof t && /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(t)
  }

  function g(t) {
    return "https:" + t
  }

  function m(t, e) {
    var n = "file:" === window.location.protocol ? "https:" : "",
      r = {
        bidding: "//ssl.p.jwpcdn.com/player/v/8.20.7/bidding.js",
        jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.20.7/jwpsrv.js",
        dai: "//ssl.p.jwpcdn.com/player/plugins/dai/v/0.5.3/dai.js",
        vast: "//ssl.p.jwpcdn.com/player/plugins/vast/v/8.9.2/vast.js",
        googima: e ? "//ssl.p.jwpcdn.com/player/v/8.20.7/googimanvmp.js" : "//ssl.p.jwpcdn.com/player/plugins/googima/v/8.8.14/googima.js",
        freewheel: "//ssl.p.jwpcdn.com/player/plugins/freewheel/v/2.2.12/freewheel.js",
        gapro: "//ssl.p.jwpcdn.com/player/plugins/gapro/v/2.1.5/gapro.js"
      } [t];
    return r ? n + r : ""
  }

  function b(t, e, n) {
    e && (t[e.client || m(n)] = e, delete e.client)
  }
  var y = function(t, e) {
      var i, d, y, j = Object(o.b)(t, e),
        w = j.key || c.default.key,
        O = new s.b(w),
        k = O.edition();
      if("free" === O.edition() && (j = Object(r.j)({
          skin: {
            active: "#ff0046",
            timeslider: {
              progress: "none"
            }
          },
          logo: {
            position: "control-bar",
            file: p.a
          }
        }, o.a, Object(r.C)(j, ["analytics", "aspectratio", "base", "file", "height", "playlist", "sources", "width"]))), j.key = w, j.edition = k, j.error = O.error(), j.generateSEOMetadata = j.generateSEOMetadata || !1, "unlimited" === k) {
        var C = Object(u.getScriptPath)("jwplayer.js");
        if(!C) throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
        n.p = C
      }
      if(j.related = function(t) {
          var e = Object(l.a)(t.edition),
            n = t.related,
            i = !e("discovery") || n !== Object(n),
            o = !n || "none" !== n.displayMode,
            u = n || {},
            a = void 0 === u.oncomplete ? "none" : u.oncomplete,
            c = u.autoplaytimer;
          !1 === a || t.repeat ? a = "hide" : "none" === a && (c = 0);
          var s = "autoplay" === a && c <= 0 || "none" === a;
          return Object(r.j)({}, n, {
            disableRelated: i,
            showButton: o,
            oncomplete: a,
            autoplaytimer: c,
            shouldAutoAdvance: s
          })
        }(j), j.ab && (j.ab = function(t) {
          var e = t.ab;
          e.clone && (e = e.clone());
          return Object.keys(e.tests).forEach((function(n) {
            e.tests[n].forEach((function(e) {
              e.addConfig && e.addConfig(t, e.selection)
            }))
          })), e
        }(j)), j.plugins = function(t) {
          var e = Object(r.j)({}, t.plugins),
            n = Object(l.a)(t.edition);
          if(n("ads")) {
            var i = Object(r.j)({}, t.advertising),
              o = i.client;
            if(o) {
              var u = m(o, t.__ab_jwIMA) || o;
              e[u] = i, delete i.client
            }
            i.bids && b(e, i.bids, "bidding")
          }
          if(n("jwpsrv")) {
            var a = t.analytics;
            a !== Object(a) && (a = {}), b(e, a, "jwpsrv")
          }
          return b(e, t.ga, "gapro"), e
        }(j), i = j.playlist, Object(r.x)(i) && i.indexOf("__CONTEXTUAL__") > -1 && (j.playlist = function(t, e) {
          var n = (t.querySelector("title") || {}).textContent,
            r = f(t, 'meta[property="og:title"]'),
            i = encodeURIComponent(r || n || ""),
            o = f(t, 'meta[property="og:description"]') || f(t, 'meta[name="description"]');
          return o && (i += "&page_description=" + encodeURIComponent(o)), e.replace("__CONTEXTUAL__", i)
        }(document, j.playlist), j.contextual = !0), Object(a.isFileProtocol)()) {
        var x = j,
          P = x.playlist,
          S = x.related;
        v(P) && (j.playlist = g(P)), S && v(S.file) && (S.file = g(S.file))
      }
      return j.__abSendDomainToFeeds && (y = j.playlist, /\.jwplatform.com|\.jwplayer.com/.test(y)) && (j.playlist = (d = j.playlist, d += (-1 !== d.indexOf("?") ? "&" : "?") + "page_domain=" + encodeURIComponent(Object(h.a)()))), j
    },
    j = n(8),
    w = n(28),
    O = n(23),
    k = n(17),
    C = n(18),
    x = n(39),
    P = n(1),
    S = n(5),
    T = null;

  function E(t) {
    return T || (T = function(t) {
      var e = t.get("controls"),
        r = A(),
        i = function(t, e) {
          var n = t.get("playlist");
          if(Array.isArray(n) && n.length)
            for(var r = Object(O.f)(t.get("item"), n.length), i = Object(O.c)(Object(w.a)(n[r]), t), o = 0; o < i.length; o++)
              for(var u = i[o], a = t.getProviders(), c = 0; c < k.a.length; c++) {
                var s = k.a[c];
                if(a.providerSupports(s, u)) return s.name === e
              }
          return !1
        }(t, "html5");
      if(S.OS.tizen) return _();
      if(e && r && i) return o = n.e(8).then(function(t) {
        n(162);
        var e = n(71).default;
        return x.a.controls = n(69).default, Object(C.a)(n(166).default), e
      }.bind(null, n)).catch(Object(j.b)(P.s + 105)), j.a.html5 = o, o;
      var o;
      if(e && i) return function() {
        var t = n.e(6).then(function(t) {
          var e = n(71).default;
          return x.a.controls = n(69).default, Object(C.a)(n(166).default), e
        }.bind(null, n)).catch(Object(j.b)(P.s + 104));
        return j.a.html5 = t, t
      }();
      if(e && r) return n.e(7).then(function(t) {
        n(162);
        var e = n(71).default;
        return x.a.controls = n(69).default, e
      }.bind(null, n)).catch(Object(j.b)(P.s + 103));
      if(e) return n.e(5).then(function(t) {
        var e = n(71).default;
        return x.a.controls = n(69).default, e
      }.bind(null, n)).catch(Object(j.b)(P.s + 102));
      return _()
    }(t)), T
  }

  function A() {
    var t = window.IntersectionObserverEntry;
    return !t || !("IntersectionObserver" in window) || !("intersectionRatio" in t.prototype)
  }

  function _() {
    return function() {
      if(A()) return n.e(9).then(function(t) {
        return n(162)
      }.bind(null, n)).catch(Object(j.b)(P.s + 120));
      return Promise.resolve()
    }().then(j.d)
  }
  var F = n(25),
    I = n(3),
    M = n(59),
    L = n(24),
    N = n(13);

  function R(t) {
    var e = t.get("playlist");
    return new Promise((function(n, r) {
      if("string" != typeof e) {
        var i = t.get("feedData") || {};
        return D(t, e, i), n()
      }
      var o = new M.a;
      o.on(I.fb, (function(e) {
        var r = e.playlist;
        delete e.playlist, D(t, r, e), n()
      })), o.on(I.x, (function(e) {
        D(t, [], {}), r(Object(P.y)(e, P.t))
      })), o.load(e)
    }))
  }

  function D(t, e, n) {
    var r = t.attributes;
    r.playlist = Object(O.a)(e), r.feedData = n
  }

  function B(t) {
    return t.attributes._destroyed
  }
  var q = n(37),
    z = function(t, e) {
      return /isAMP/.test(document.location.search) ? n.e(1).then(function(r) {
        var i = new(0, n(177).default)(e);
        return t.attributes.ampController = i, Promise.resolve()
      }.bind(null, n)).catch(Object(j.b)(P.s + 130)) : Promise.resolve()
    };

  function V(t) {
    return Q(t) ? Promise.resolve() : R(t).then((function() {
      if(t.get("drm") || Object(q.b)(t.get("playlist"))) return Object(q.d)(t.get("edition"))
    })).then((function() {
      return R(e = t).then((function() {
        if(!B(e)) {
          var t = Object(O.b)(e.get("playlist"), e);
          e.attributes.playlist = t;
          try {
            Object(O.e)(t)
          } catch (t) {
            throw t.code += P.t, t
          }
          var n = e.getProviders(),
            r = Object(O.f)(e.get("item"), t.length),
            i = n.choose(t[r].sources[0]),
            o = i.provider,
            u = i.name;
          return "function" == typeof o ? o : j.a.html5 && "html5" === u ? j.a.html5 : n.load(u).catch((function(t) {
            throw Object(P.y)(t, P.u)
          }))
        }
      }));
      var e
    }))
  }

  function H(t, e) {
    var n = [U(t), z(t, e)];
    return Q(t) || n.push(Promise.resolve()), Promise.all(n)
  }

  function U(t) {
    var e = t.attributes,
      n = e.error;
    if(n && n.code === s.a) {
      var r = e.pid,
        i = e.ph,
        o = new s.b(e.key);
      if(i > 0 && i < 4 && r && o.duration() > -7776e6) return new L.a("//content.jwplatform.com/libraries/" + r + ".js").load().then((function() {
        var t = window.jwplayer.defaults.key,
          n = new s.b(t);
        n.error() || n.token() !== o.token() || (e.key = t, e.edition = n.edition(), e.error = n.error())
      })).catch((function() {}))
    }
    return Promise.resolve()
  }

  function Q(t) {
    var e = t.get("advertising");
    return !(!e || !e.outstream)
  }
  var W = function(t) {
      var e = t.get("skin") ? t.get("skin").url : void 0;
      if("string" == typeof e && ! function(t) {
          for(var e = document.styleSheets, n = 0, r = e.length; n < r; n++)
            if(e[n].href === t) return !0;
          return !1
        }(e)) {
        return new L.a(e, !0).load().catch((function(t) {
          return t
        }))
      }
      return Promise.resolve()
    },
    X = function(t) {
      var e = t.attributes,
        n = e.language,
        r = e.base,
        i = e.setupConfig,
        o = e.intl,
        u = Object(N.c)(i, o, n);
      return !Object(N.h)(n) || Object(N.f)(u) ? Promise.resolve() : new Promise((function(i) {
        return Object(N.i)(r, n).then((function(n) {
          var r = n.response;
          if(!B(t)) {
            if(!r) throw new P.q(null, P.h);
            e.localization = Object(N.a)(r, u), i()
          }
        })).catch((function(t) {
          i(t.code === P.h ? t : Object(P.y)(t, P.g))
        }))
      }))
    };
  var Z = function(t) {
      var e;
      this.start = function(n) {
        var r = Object(F.a)(t, n),
          i = Promise.all([E(t), r, V(t), H(t, n), W(t), X(t)]),
          o = new Promise((function(t, n) {
            e = setTimeout((function() {
              n(new P.q(P.k, P.w))
            }), 6e4);
            var r = function() {
              clearTimeout(e), setTimeout(t, 6e4)
            };
            i.then(r).catch(r)
          }));
        return Promise.race([i, o]).catch((function(t) {
          var e = function() {
            throw t
          };
          return r.then(e).catch(e)
        })).then((function(t) {
          return function(t) {
            if(!t || !t.length) return {
              core: null,
              warnings: []
            };
            var e = t.reduce((function(t, e) {
              return t.concat(e)
            }), []).filter((function(t) {
              return t && t.code
            }));
            return {
              core: t[0],
              warnings: e
            }
          }(t)
        }))
      }, this.destroy = function() {
        clearTimeout(e), t.set("_destroyed", !0), t = null
      }
    },
    $ = n(42),
    J = n(30),
    K = n(12),
    Y = n(16),
    G = {
      removeItem: function(t) {}
    };
  try {
    G = window.localStorage || G
  } catch (t) {}
  var tt = function() {
      function t(t, e) {
        this.namespace = t, this.items = e
      }
      var e = t.prototype;
      return e.getAllItems = function() {
        var t = this;
        return this.items.reduce((function(e, n) {
          var r = G[t.namespace + "." + n];
          return r && (e[n] = "captions" !== n ? Object(K.serialize)(r) : JSON.parse(r)), e
        }), {})
      }, e.track = function(t) {
        var e = this;
        this.items.forEach((function(n) {
          t.on("change:" + n, (function(t, r) {
            try {
              "captions" === n && (r = JSON.stringify(r)), G[e.namespace + "." + n] = r
            } catch (t) {
              Y.a.debug && console.error(t)
            }
          }))
        }))
      }, e.clear = function() {
        var t = this;
        this.items.forEach((function(e) {
          G.removeItem(t.namespace + "." + e)
        }))
      }, t
    }(),
    et = n(54),
    nt = n(35),
    rt = n(9),
    it = n(43),
    ot = n(60),
    ut = n(61),
    at = n(34);
  n(68), n(70);
  n.d(e, "b", (function() {
    return ft
  }));
  var ct = function(t) {
    this._events = {}, this.modelShim = new et.a, this.modelShim._qoeItem = new J.a, this.mediaShim = {}, this.setup = new Z(this.modelShim), this.currentContainer = this.originalContainer = t, this.apiQueue = new i.a(this, ["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "addButton", "removeButton", "castToggle", "setMute", "setVolume", "setPlaybackRate", "addCues", "setCues", "setPlaylistItem", "stopCasting", "resize", "setCaptions", "setControls"], (function() {
      return !0
    }))
  };

  function st(t, e) {
    e && e.code && (e.sourceError && console.error(e.sourceError), console.error(P.q.logMessage(e.code)))
  }

  function lt(t) {
    t && t.code && console.warn(P.q.logMessage(t.code))
  }

  function ft(t, e) {
    if(!document.body.contains(t.currentContainer)) {
      var n = document.getElementById(t.get("id"));
      n && (t.currentContainer = n)
    }
    t.currentContainer.parentElement && t.currentContainer.parentElement.replaceChild(e, t.currentContainer), t.currentContainer = e
  }
  Object(r.j)(ct.prototype, {
    on: rt.a.on,
    once: rt.a.once,
    off: rt.a.off,
    trigger: rt.a.trigger,
    init: function(t, e) {
      var n = this,
        i = this.modelShim,
        o = new tt("jwplayer", ["volume", "mute", "captionLabel", "captions", "bandwidthEstimate", "bitrateSelection", "qualityLabel", "enableShortcuts"]),
        u = o && o.getAllItems();
      i.attributes = i.attributes || {}, Object(r.j)(this.mediaShim, nt.c);
      var a = t,
        c = y(Object(r.j)({}, t), u);
      c.id = e.id, c.setupConfig = a, Object(r.j)(i.attributes, c, nt.d), i.getProviders = function() {
        return new $.a(c)
      }, i.setProvider = function() {};
      var s = Object(ot.b)();
      i.get("backgroundLoading") || (s = Object(ut.a)(s.getPrimedElement(), s));
      var l = this.primeUi = new at.a(Object(at.b)(this.originalContainer)).once("gesture", (function() {
        s.prime(), n.preload(), l.destroy()
      }));
      return i.on("change:errorEvent", st), this.setup.start(e).then((function(t) {
        var u = t.core;
        if(!u) throw Object(P.y)(null, P.v);
        if(n.setup) {
          n.on(I.wb, lt), t.warnings.forEach((function(t) {
            n.trigger(I.wb, t)
          }));
          var a = n.modelShim.clone();
          if(a.error) throw a.error;
          var c = n.apiQueue.queue.slice(0);
          n.apiQueue.destroy(), Object(r.j)(n, u.prototype), n.playerSetup(a, e, n.originalContainer, n._events, c, s);
          var l = n._model;
          return i.off("change:errorEvent", st), l.on("change:errorEvent", st), o.track(l), n.updatePlaylist(l.get("playlist"), l.get("feedData")).catch((function(t) {
            var e = t.code === P.a ? P.r : P.t;
            throw Object(P.y)(t, e)
          }))
        }
      })).then((function() {
        n.setup && n.playerReady()
      })).catch((function(t) {
        n.setup && function(t, e, n) {
          Promise.resolve().then((function() {
            var r = Object(P.z)(P.p, P.x, n),
              i = t._model || t.modelShim;
            r.message = r.message || i.get("localization").errors[r.key], delete r.key;
            var o = i.get("contextual");
            if(!o) {
              var u = Object(it.a)(t, r);
              it.a.cloneIcon && u.querySelector(".jw-icon").appendChild(it.a.cloneIcon("error")), ft(t, u)
            }
            i.set("errorEvent", r), i.set("state", I.mb), t.trigger(I.jb, r), o && e.remove()
          }))
        }(n, e, t)
      }))
    },
    playerDestroy: function() {
      this.destroy && this.destroy(), this.apiQueue && this.apiQueue.destroy(), this.setup && this.setup.destroy(), this.primeUi && this.primeUi.destroy(), this.currentContainer !== this.originalContainer && ft(this, this.originalContainer), this.off(), this._events = this._model = this.modelShim = this.apiQueue = this.primeUi = this.setup = null
    },
    getContainer: function() {
      return this.currentContainer
    },
    get: function(t) {
      if(this.modelShim) return t in this.mediaShim ? this.mediaShim[t] : this.modelShim.get(t)
    },
    getItemQoe: function() {
      return this.modelShim._qoeItem
    },
    getItemPromise: function() {
      return null
    },
    setItemCallback: function(t) {
      this.modelShim && (this.modelShim.attributes.playlistItemCallback = t)
    },
    getConfig: function() {
      return Object(r.j)({}, this.modelShim.attributes, this.mediaShim)
    },
    getCurrentCaptions: function() {
      return this.get("captionsIndex")
    },
    getWidth: function() {
      return this.get("containerWidth")
    },
    getHeight: function() {
      return this.get("containerHeight")
    },
    getMute: function() {
      return this.get("mute")
    },
    getProvider: function() {
      return this.get("provider")
    },
    getState: function() {
      return this.get("state")
    },
    getAudioTracks: function() {
      return null
    },
    getCaptionsList: function() {
      return null
    },
    getQualityLevels: function() {
      return null
    },
    getVisualQuality: function() {
      return null
    },
    getCurrentQuality: function() {
      return -1
    },
    getCurrentAudioTrack: function() {
      return -1
    },
    getSafeRegion: function() {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }
    },
    isBeforeComplete: function() {
      return !1
    },
    isBeforePlay: function() {
      return !1
    },
    createInstream: function() {
      return null
    },
    skipAd: function() {},
    attachMedia: function() {},
    detachMedia: function() {}
  });
  e.a = ct
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return i
  }));
  var r = n(5);

  function i(t) {
    return "hls" === t.type && r.OS.android ? !1 !== t.androidhls && (!r.Browser.firefox && parseFloat(r.OS.version.version || "0") >= 4.4) : null
  }
}, function(t, e, n) {
  "use strict";

  function r() {
    var t, e, n = window.location.host;
    if(window.top !== window.self) {
      n = (document.referrer ? (t = document.referrer, (e = document.createElement("a")).href = t, e) : {}).host;
      try {
        n = n || window.top.location.host
      } catch (t) {}
    }
    return n
  }
  n.d(e, "a", (function() {
    return r
  }))
}, function(t, e) {
  t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 29.3" class="jw-svg-icon jw-svg-icon-watermark" focusable="false"><path d="M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z"></path><polygon points="58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61"></polygon><path d="M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z"></path><path d="M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z"></path><polygon points="113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18"></polygon><polygon points="123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29"></polygon><path d="M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z"></path><path d="M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z"></path></svg>'
}, function(t, e, n) {
  "use strict";
  var r, i = n(62),
    o = n(5),
    u = n(7),
    a = [],
    c = [],
    s = [],
    l = {},
    f = "screen" in window && "orientation" in window.screen,
    d = o.OS.android && o.Browser.chrome,
    p = !1;

  function h(t, e) {
    for(var n = e.length; n--;) {
      var r = e[n];
      if(t.target === r.getContainer()) {
        r.setIntersection(t);
        break
      }
    }
  }

  function v() {
    a.forEach((function(t) {
      var e = t.model;
      if(!(e.get("audioMode") || e.get("isFloating") || !e.get("controls") || e.get("visibility") < .75)) {
        var n = e.get("state"),
          r = Object(u.f)();
        !r && "paused" === n && t.api.getFullscreen() ? t.api.setFullscreen(!1) : "playing" === n && t.api.setFullscreen(r)
      }
    }))
  }

  function g() {
    a.forEach((function(t) {
      t.model.set("activeTab", Object(i.a)())
    }))
  }

  function m(t, e) {
    var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
  }

  function b(t) {
    s.forEach((function(e) {
      e(t)
    }))
  }
  document.addEventListener("visibilitychange", g), document.addEventListener("webkitvisibilitychange", g), d && f && window.screen.orientation.addEventListener("change", v), window.addEventListener("beforeunload", (function() {
    document.removeEventListener("visibilitychange", g), document.removeEventListener("webkitvisibilitychange", g), window.removeEventListener("scroll", b), d && f && window.screen.orientation.removeEventListener("change", v)
  })), e.a = {
    add: function(t) {
      a.push(t)
    },
    remove: function(t) {
      m(t, a)
    },
    addScrollHandler: function(t) {
      p || (p = !0, window.addEventListener("scroll", b)), s.push(t)
    },
    removeScrollHandler: function(t) {
      var e = s.indexOf(t); - 1 !== e && s.splice(e, 1)
    },
    addWidget: function(t) {
      c.push(t)
    },
    removeWidget: function(t) {
      m(t, c)
    },
    size: function() {
      return a.length
    },
    observe: function(t) {
      var e;
      e = window.IntersectionObserver, r || (r = new e((function(t) {
        if(t && t.length)
          for(var e = t.length; e--;) {
            var n = t[e];
            h(n, a), h(n, c)
          }
      }), {
        threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
      })), l[t.id] || (l[t.id] = !0, r.observe(t))
    },
    unobserve: function(t) {
      r && l[t.id] && (delete l[t.id], r.unobserve(t))
    }
  }
}, , function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return l
  }));
  var r = n(0),
    i = n(49),
    o = n(7),
    u = n(11),
    a = [],
    c = -1;

  function s() {
    Object(i.a)(c), c = Object(i.b)((function() {
      a.forEach((function(t) {
        t.view.updateBounds();
        var e = t.view.model.get("containerWidth");
        t.resized = t.width !== e, t.width = e
      })), a.forEach((function(t) {
        t.contractElement.scrollLeft = 2 * t.width
      })), a.forEach((function(t) {
        Object(u.d)(t.expandChild, {
          width: t.width + 1
        }), t.resized && t.view.model.get("visibility") && t.view.updateStyles()
      })), a.forEach((function(t) {
        t.expandElement.scrollLeft = t.width + 1
      })), a.forEach((function(t) {
        t.resized && t.view.checkResized()
      }))
    }))
  }
  var l = function() {
    function t(t, e, n) {
      var i = {
          display: "block",
          position: "absolute",
          top: 0,
          left: 0
        },
        c = {
          width: "100%",
          height: "100%"
        },
        l = Object(o.e)('<div style="opacity:0;visibility:hidden;overflow:hidden;"><div><div style="height:1px;"></div></div><div class="jw-contract-trigger"></div></div>'),
        f = l.firstChild,
        d = f.firstChild,
        p = f.nextSibling;
      Object(u.d)([f, p], Object(r.j)({
        overflow: "auto"
      }, i, c)), Object(u.d)(l, Object(r.j)({}, i, c)), this.expandElement = f, this.expandChild = d, this.contractElement = p, this.hiddenElement = l, this.element = t, this.view = e, this.model = n, this.width = 0, this.resized = !1, t.firstChild ? t.insertBefore(l, t.firstChild) : t.appendChild(l), t.addEventListener("scroll", s, !0), a.push(this), s()
    }
    return t.prototype.destroy = function() {
      if(this.view) {
        var t = a.indexOf(this); - 1 !== t && a.splice(t, 1), this.element.removeEventListener("scroll", s, !0), this.element.removeChild(this.hiddenElement), this.view = this.model = null
      }
    }, t
  }()
}]).default;
var jwDefaults = {
  "key": "GytdaYuqfyvirEusXu6WqDo4Flbquswk8SceF+iP+chw318UDdxUxovv3nFnvgsa",
  "hlshtml": true,
  "primary": "html5",
  "fullscreen": true,
  "flashplayer": "//ssl.p.jwpcdn.com/player/v/8.12.5/jwplayer.flash.swf",
  "stagevideo": true,
  "renderCaptionsNatively": false,
  "controls": true,
  "debug": false,
  "cast": {},
  "abouttext": "Quicklook TV+",
  "aspectratio": "16:9",
  "horizontalVolumeSlider": false,
  "autostart": false,
  "controls": true,
  "nextUpDisplay": true,
  "displaydescription": false,
  "displaytitle": false,
  "displayPlaybackLabel": false,
  "height": "100%",
  "visualplaylist": true,
  "captions": {
    "fontFamily": "Helvetica, Arial, sans-serif",
    "fontOpacity": "100",
    "color": "#FFF",
    "windowColor": "#000000",
    "windowOpacity": "0",
    "backgroundColor": "#000000",
    "backgroundOpacity": "50"
  },
  "mute": true,
  "ph": 1,
  "pid": "Jq6HIbgz",
  "playbackRateControls": false,
  "preload": "metadata",
  "repeat": false,
  "stretching": "uniform",
  "repeat": false,
  "width": "100%"
};
jwplayer.defaults = jwDefaults;
