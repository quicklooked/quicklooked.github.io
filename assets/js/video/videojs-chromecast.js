var progressFlag = 1;
castOptions = new Object;
var tech_attr, chrome_live = !1;
videojs = videojs || window.videojs, videojs.options.techOrder = ["chromecast", "html5"],
  function() {
    return function e(t, n, r) {
      function i(a, s) {
        if(!n[a]) {
          if(!t[a]) {
            var c = "function" == typeof require && require;
            if(!s && c) return c(a, !0);
            if(o) return o(a, !0);
            var l = new Error("Cannot find module '" + a + "'");
            throw l.code = "MODULE_NOT_FOUND", l
          }
          var u = n[a] = {
            exports: {}
          };
          t[a][0].call(u.exports, function(e) {
            return i(t[a][1][e] || e)
          }, u, u.exports, e, t, n, r)
        }
        return n[a].exports
      }
      for(var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
      return i
    }
  }()({
    1: [function(e, t, n) {
      ! function() {
        var e = !1,
          n = /xyz/.test(function() {
            xyz
          }) ? /\b_super\b/ : /.*/;
        this.Class = function() {}, Class.extend = function(t) {
          var r = this.prototype;
          e = !0;
          var i = new this;
          for(var o in e = !1, t) i[o] = "function" == typeof t[o] && "function" == typeof r[o] && n.test(t[o]) ? function(e, t) {
            return function() {
              var n = this._super;
              this._super = r[e];
              var i = t.apply(this, arguments);
              return this._super = n, i
            }
          }(o, t[o]) : t[o];

          function a() {
            !e && this.init && this.init.apply(this, arguments)
          }
          return a.prototype = i, a.prototype.constructor = a, a.extend = arguments.callee, a
        }, t.exports = Class
      }()
    }, {}],
    2: [function(e, t, n) {
      (function() {
        var e = this,
          r = e._,
          i = Array.prototype,
          o = Object.prototype,
          a = Function.prototype,
          s = i.push,
          c = i.slice,
          l = o.toString,
          u = o.hasOwnProperty,
          h = Array.isArray,
          d = Object.keys,
          f = a.bind,
          p = Object.create,
          m = function() {},
          v = function(e) {
            return e instanceof v ? e : this instanceof v ? void(this._wrapped = e) : new v(e)
          };
        void 0 !== n ? (void 0 !== t && t.exports && (n = t.exports = v), n._ = v) : e._ = v, v.VERSION = "1.8.3";
        var _ = function(e, t, n) {
            if(void 0 === t) return e;
            switch(null == n ? 3 : n) {
              case 1:
                return function(n) {
                  return e.call(t, n)
                };
              case 2:
                return function(n, r) {
                  return e.call(t, n, r)
                };
              case 3:
                return function(n, r, i) {
                  return e.call(t, n, r, i)
                };
              case 4:
                return function(n, r, i, o) {
                  return e.call(t, n, r, i, o)
                }
            }
            return function() {
              return e.apply(t, arguments)
            }
          },
          g = function(e, t, n) {
            return null == e ? v.identity : v.isFunction(e) ? _(e, t, n) : v.isObject(e) ? v.matcher(e) : v.property(e)
          };
        v.iteratee = function(e, t) {
          return g(e, t, 1 / 0)
        };
        var y = function(e, t) {
            return function(n) {
              var r = arguments.length;
              if(r < 2 || null == n) return n;
              for(var i = 1; i < r; i++)
                for(var o = arguments[i], a = e(o), s = a.length, c = 0; c < s; c++) {
                  var l = a[c];
                  t && void 0 !== n[l] || (n[l] = o[l])
                }
              return n
            }
          },
          w = function(e) {
            if(!v.isObject(e)) return {};
            if(p) return p(e);
            m.prototype = e;
            var t = new m;
            return m.prototype = null, t
          },
          b = function(e) {
            return function(t) {
              return null == t ? void 0 : t[e]
            }
          },
          C = Math.pow(2, 53) - 1,
          E = b("length"),
          S = function(e) {
            var t = E(e);
            return "number" == typeof t && t >= 0 && t <= C
          };

        function T(e) {
          return function(t, n, r, i) {
            n = _(n, i, 4);
            var o = !S(t) && v.keys(t),
              a = (o || t).length,
              s = e > 0 ? 0 : a - 1;
            return arguments.length < 3 && (r = t[o ? o[s] : s], s += e),
              function(t, n, r, i, o, a) {
                for(; o >= 0 && o < a; o += e) {
                  var s = i ? i[o] : o;
                  r = n(r, t[s], s, t)
                }
                return r
              }(t, n, r, o, s, a)
          }
        }
        v.each = v.forEach = function(e, t, n) {
          var r, i;
          if(t = _(t, n), S(e))
            for(r = 0, i = e.length; r < i; r++) t(e[r], r, e);
          else {
            var o = v.keys(e);
            for(r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e)
          }
          return e
        }, v.map = v.collect = function(e, t, n) {
          t = g(t, n);
          for(var r = !S(e) && v.keys(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
            var s = r ? r[a] : a;
            o[a] = t(e[s], s, e)
          }
          return o
        }, v.reduce = v.foldl = v.inject = T(1), v.reduceRight = v.foldr = T(-1), v.find = v.detect = function(e, t, n) {
          var r;
          if(void 0 !== (r = S(e) ? v.findIndex(e, t, n) : v.findKey(e, t, n)) && -1 !== r) return e[r]
        }, v.filter = v.select = function(e, t, n) {
          var r = [];
          return t = g(t, n), v.each(e, function(e, n, i) {
            t(e, n, i) && r.push(e)
          }), r
        }, v.reject = function(e, t, n) {
          return v.filter(e, v.negate(g(t)), n)
        }, v.every = v.all = function(e, t, n) {
          t = g(t, n);
          for(var r = !S(e) && v.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var a = r ? r[o] : o;
            if(!t(e[a], a, e)) return !1
          }
          return !0
        }, v.some = v.any = function(e, t, n) {
          t = g(t, n);
          for(var r = !S(e) && v.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var a = r ? r[o] : o;
            if(t(e[a], a, e)) return !0
          }
          return !1
        }, v.contains = v.includes = v.include = function(e, t, n, r) {
          return S(e) || (e = v.values(e)), ("number" != typeof n || r) && (n = 0), v.indexOf(e, t, n) >= 0
        }, v.invoke = function(e, t) {
          var n = c.call(arguments, 2),
            r = v.isFunction(t);
          return v.map(e, function(e) {
            var i = r ? t : e[t];
            return null == i ? i : i.apply(e, n)
          })
        }, v.pluck = function(e, t) {
          return v.map(e, v.property(t))
        }, v.where = function(e, t) {
          return v.filter(e, v.matcher(t))
        }, v.findWhere = function(e, t) {
          return v.find(e, v.matcher(t))
        }, v.max = function(e, t, n) {
          var r, i, o = -1 / 0,
            a = -1 / 0;
          if(null == t && null != e)
            for(var s = 0, c = (e = S(e) ? e : v.values(e)).length; s < c; s++)(r = e[s]) > o && (o = r);
          else t = g(t, n), v.each(e, function(e, n, r) {
            ((i = t(e, n, r)) > a || i === -1 / 0 && o === -1 / 0) && (o = e, a = i)
          });
          return o
        }, v.min = function(e, t, n) {
          var r, i, o = 1 / 0,
            a = 1 / 0;
          if(null == t && null != e)
            for(var s = 0, c = (e = S(e) ? e : v.values(e)).length; s < c; s++)(r = e[s]) < o && (o = r);
          else t = g(t, n), v.each(e, function(e, n, r) {
            ((i = t(e, n, r)) < a || i === 1 / 0 && o === 1 / 0) && (o = e, a = i)
          });
          return o
        }, v.shuffle = function(e) {
          for(var t, n = S(e) ? e : v.values(e), r = n.length, i = Array(r), o = 0; o < r; o++)(t = v.random(0, o)) !== o && (i[o] = i[t]), i[t] = n[o];
          return i
        }, v.sample = function(e, t, n) {
          return null == t || n ? (S(e) || (e = v.values(e)), e[v.random(e.length - 1)]) : v.shuffle(e).slice(0, Math.max(0, t))
        }, v.sortBy = function(e, t, n) {
          return t = g(t, n), v.pluck(v.map(e, function(e, n, r) {
            return {
              value: e,
              index: n,
              criteria: t(e, n, r)
            }
          }).sort(function(e, t) {
            var n = e.criteria,
              r = t.criteria;
            if(n !== r) {
              if(n > r || void 0 === n) return 1;
              if(n < r || void 0 === r) return -1
            }
            return e.index - t.index
          }), "value")
        };
        var L = function(e) {
          return function(t, n, r) {
            var i = {};
            return n = g(n, r), v.each(t, function(r, o) {
              var a = n(r, o, t);
              e(i, r, a)
            }), i
          }
        };
        v.groupBy = L(function(e, t, n) {
          v.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), v.indexBy = L(function(e, t, n) {
          e[n] = t
        }), v.countBy = L(function(e, t, n) {
          v.has(e, n) ? e[n]++ : e[n] = 1
        }), v.toArray = function(e) {
          return e ? v.isArray(e) ? c.call(e) : S(e) ? v.map(e, v.identity) : v.values(e) : []
        }, v.size = function(e) {
          return null == e ? 0 : S(e) ? e.length : v.keys(e).length
        }, v.partition = function(e, t, n) {
          t = g(t, n);
          var r = [],
            i = [];
          return v.each(e, function(e, n, o) {
            (t(e, n, o) ? r : i).push(e)
          }), [r, i]
        }, v.first = v.head = v.take = function(e, t, n) {
          if(null != e) return null == t || n ? e[0] : v.initial(e, e.length - t)
        }, v.initial = function(e, t, n) {
          return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, v.last = function(e, t, n) {
          if(null != e) return null == t || n ? e[e.length - 1] : v.rest(e, Math.max(0, e.length - t))
        }, v.rest = v.tail = v.drop = function(e, t, n) {
          return c.call(e, null == t || n ? 1 : t)
        }, v.compact = function(e) {
          return v.filter(e, v.identity)
        };
        var N = function(e, t, n, r) {
          for(var i = [], o = 0, a = r || 0, s = E(e); a < s; a++) {
            var c = e[a];
            if(S(c) && (v.isArray(c) || v.isArguments(c))) {
              t || (c = N(c, t, n));
              var l = 0,
                u = c.length;
              for(i.length += u; l < u;) i[o++] = c[l++]
            } else n || (i[o++] = c)
          }
          return i
        };

        function M(e) {
          return function(t, n, r) {
            n = g(n, r);
            for(var i = E(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
              if(n(t[o], o, t)) return o;
            return -1
          }
        }

        function I(e, t, n) {
          return function(r, i, o) {
            var a = 0,
              s = E(r);
            if("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
            else if(n && o && s) return r[o = n(r, i)] === i ? o : -1;
            if(i != i) return (o = t(c.call(r, a, s), v.isNaN)) >= 0 ? o + a : -1;
            for(o = e > 0 ? a : s - 1; o >= 0 && o < s; o += e)
              if(r[o] === i) return o;
            return -1
          }
        }
        v.flatten = function(e, t) {
          return N(e, t, !1)
        }, v.without = function(e) {
          return v.difference(e, c.call(arguments, 1))
        }, v.uniq = v.unique = function(e, t, n, r) {
          v.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = g(n, r));
          for(var i = [], o = [], a = 0, s = E(e); a < s; a++) {
            var c = e[a],
              l = n ? n(c, a, e) : c;
            t ? (a && o === l || i.push(c), o = l) : n ? v.contains(o, l) || (o.push(l), i.push(c)) : v.contains(i, c) || i.push(c)
          }
          return i
        }, v.union = function() {
          return v.uniq(N(arguments, !0, !0))
        }, v.intersection = function(e) {
          for(var t = [], n = arguments.length, r = 0, i = E(e); r < i; r++) {
            var o = e[r];
            if(!v.contains(t, o)) {
              for(var a = 1; a < n && v.contains(arguments[a], o); a++);
              a === n && t.push(o)
            }
          }
          return t
        }, v.difference = function(e) {
          var t = N(arguments, !0, !0, 1);
          return v.filter(e, function(e) {
            return !v.contains(t, e)
          })
        }, v.zip = function() {
          return v.unzip(arguments)
        }, v.unzip = function(e) {
          for(var t = e && v.max(e, E).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = v.pluck(e, r);
          return n
        }, v.object = function(e, t) {
          for(var n = {}, r = 0, i = E(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
          return n
        }, v.findIndex = M(1), v.findLastIndex = M(-1), v.sortedIndex = function(e, t, n, r) {
          for(var i = (n = g(n, r, 1))(t), o = 0, a = E(e); o < a;) {
            var s = Math.floor((o + a) / 2);
            n(e[s]) < i ? o = s + 1 : a = s
          }
          return o
        }, v.indexOf = I(1, v.findIndex, v.sortedIndex), v.lastIndexOf = I(-1, v.findLastIndex), v.range = function(e, t, n) {
          null == t && (t = e || 0, e = 0), n = n || 1;
          for(var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) i[o] = e;
          return i
        };
        var D = function(e, t, n, r, i) {
          if(!(r instanceof t)) return e.apply(n, i);
          var o = w(e.prototype),
            a = e.apply(o, i);
          return v.isObject(a) ? a : o
        };
        v.bind = function(e, t) {
          if(f && e.bind === f) return f.apply(e, c.call(arguments, 1));
          if(!v.isFunction(e)) throw new TypeError("Bind must be called on a function");
          var n = c.call(arguments, 2),
            r = function() {
              return D(e, r, t, this, n.concat(c.call(arguments)))
            };
          return r
        }, v.partial = function(e) {
          var t = c.call(arguments, 1),
            n = function() {
              for(var r = 0, i = t.length, o = Array(i), a = 0; a < i; a++) o[a] = t[a] === v ? arguments[r++] : t[a];
              for(; r < arguments.length;) o.push(arguments[r++]);
              return D(e, n, this, this, o)
            };
          return n
        }, v.bindAll = function(e) {
          var t, n, r = arguments.length;
          if(r <= 1) throw new Error("bindAll must be passed function names");
          for(t = 1; t < r; t++) e[n = arguments[t]] = v.bind(e[n], e);
          return e
        }, v.memoize = function(e, t) {
          var n = function(r) {
            var i = n.cache,
              o = "" + (t ? t.apply(this, arguments) : r);
            return v.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
          };
          return n.cache = {}, n
        }, v.delay = function(e, t) {
          var n = c.call(arguments, 2);
          return setTimeout(function() {
            return e.apply(null, n)
          }, t)
        }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(e, t, n) {
          var r, i, o, a = null,
            s = 0;
          n || (n = {});
          var c = function() {
            s = !1 === n.leading ? 0 : v.now(), a = null, o = e.apply(r, i), a || (r = i = null)
          };
          return function() {
            var l = v.now();
            s || !1 !== n.leading || (s = l);
            var u = t - (l - s);
            return r = this, i = arguments, u <= 0 || u > t ? (a && (clearTimeout(a), a = null), s = l, o = e.apply(r, i), a || (r = i = null)) : a || !1 === n.trailing || (a = setTimeout(c, u)), o
          }
        }, v.debounce = function(e, t, n) {
          var r, i, o, a, s, c = function() {
            var l = v.now() - a;
            l < t && l >= 0 ? r = setTimeout(c, t - l) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
          };
          return function() {
            o = this, i = arguments, a = v.now();
            var l = n && !r;
            return r || (r = setTimeout(c, t)), l && (s = e.apply(o, i), o = i = null), s
          }
        }, v.wrap = function(e, t) {
          return v.partial(t, e)
        }, v.negate = function(e) {
          return function() {
            return !e.apply(this, arguments)
          }
        }, v.compose = function() {
          var e = arguments,
            t = e.length - 1;
          return function() {
            for(var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
            return r
          }
        }, v.after = function(e, t) {
          return function() {
            if(--e < 1) return t.apply(this, arguments)
          }
        }, v.before = function(e, t) {
          var n;
          return function() {
            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
          }
        }, v.once = v.partial(v.before, 2);
        var k = !{
            toString: null
          }.propertyIsEnumerable("toString"),
          x = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

        function P(e, t) {
          var n = x.length,
            r = e.constructor,
            i = v.isFunction(r) && r.prototype || o,
            a = "constructor";
          for(v.has(e, a) && !v.contains(t, a) && t.push(a); n--;)(a = x[n]) in e && e[a] !== i[a] && !v.contains(t, a) && t.push(a)
        }
        v.keys = function(e) {
          if(!v.isObject(e)) return [];
          if(d) return d(e);
          var t = [];
          for(var n in e) v.has(e, n) && t.push(n);
          return k && P(e, t), t
        }, v.allKeys = function(e) {
          if(!v.isObject(e)) return [];
          var t = [];
          for(var n in e) t.push(n);
          return k && P(e, t), t
        }, v.values = function(e) {
          for(var t = v.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
          return r
        }, v.mapObject = function(e, t, n) {
          t = g(t, n);
          for(var r, i = v.keys(e), o = i.length, a = {}, s = 0; s < o; s++) a[r = i[s]] = t(e[r], r, e);
          return a
        }, v.pairs = function(e) {
          for(var t = v.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
          return r
        }, v.invert = function(e) {
          for(var t = {}, n = v.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
          return t
        }, v.functions = v.methods = function(e) {
          var t = [];
          for(var n in e) v.isFunction(e[n]) && t.push(n);
          return t.sort()
        }, v.extend = y(v.allKeys), v.extendOwn = v.assign = y(v.keys), v.findKey = function(e, t, n) {
          t = g(t, n);
          for(var r, i = v.keys(e), o = 0, a = i.length; o < a; o++)
            if(t(e[r = i[o]], r, e)) return r
        }, v.pick = function(e, t, n) {
          var r, i, o = {},
            a = e;
          if(null == a) return o;
          v.isFunction(t) ? (i = v.allKeys(a), r = _(t, n)) : (i = N(arguments, !1, !1, 1), r = function(e, t, n) {
            return t in n
          }, a = Object(a));
          for(var s = 0, c = i.length; s < c; s++) {
            var l = i[s],
              u = a[l];
            r(u, l, a) && (o[l] = u)
          }
          return o
        }, v.omit = function(e, t, n) {
          if(v.isFunction(t)) t = v.negate(t);
          else {
            var r = v.map(N(arguments, !1, !1, 1), String);
            t = function(e, t) {
              return !v.contains(r, t)
            }
          }
          return v.pick(e, t, n)
        }, v.defaults = y(v.allKeys, !0), v.create = function(e, t) {
          var n = w(e);
          return t && v.extendOwn(n, t), n
        }, v.clone = function(e) {
          return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
        }, v.tap = function(e, t) {
          return t(e), e
        }, v.isMatch = function(e, t) {
          var n = v.keys(t),
            r = n.length;
          if(null == e) return !r;
          for(var i = Object(e), o = 0; o < r; o++) {
            var a = n[o];
            if(t[a] !== i[a] || !(a in i)) return !1
          }
          return !0
        };
        var O = function(e, t, n, r) {
          if(e === t) return 0 !== e || 1 / e == 1 / t;
          if(null == e || null == t) return e === t;
          e instanceof v && (e = e._wrapped), t instanceof v && (t = t._wrapped);
          var i = l.call(e);
          if(i !== l.call(t)) return !1;
          switch(i) {
            case "[object RegExp]":
            case "[object String]":
              return "" + e == "" + t;
            case "[object Number]":
              return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
            case "[object Date]":
            case "[object Boolean]":
              return +e == +t
          }
          var o = "[object Array]" === i;
          if(!o) {
            if("object" != typeof e || "object" != typeof t) return !1;
            var a = e.constructor,
              s = t.constructor;
            if(a !== s && !(v.isFunction(a) && a instanceof a && v.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1
          }
          r = r || [];
          for(var c = (n = n || []).length; c--;)
            if(n[c] === e) return r[c] === t;
          if(n.push(e), r.push(t), o) {
            if((c = e.length) !== t.length) return !1;
            for(; c--;)
              if(!O(e[c], t[c], n, r)) return !1
          } else {
            var u, h = v.keys(e);
            if(c = h.length, v.keys(t).length !== c) return !1;
            for(; c--;)
              if(u = h[c], !v.has(t, u) || !O(e[u], t[u], n, r)) return !1
          }
          return n.pop(), r.pop(), !0
        };
        v.isEqual = function(e, t) {
          return O(e, t)
        }, v.isEmpty = function(e) {
          return null == e || (S(e) && (v.isArray(e) || v.isString(e) || v.isArguments(e)) ? 0 === e.length : 0 === v.keys(e).length)
        }, v.isElement = function(e) {
          return !(!e || 1 !== e.nodeType)
        }, v.isArray = h || function(e) {
          return "[object Array]" === l.call(e)
        }, v.isObject = function(e) {
          var t = typeof e;
          return "function" === t || "object" === t && !!e
        }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
          v["is" + e] = function(t) {
            return l.call(t) === "[object " + e + "]"
          }
        }), v.isArguments(arguments) || (v.isArguments = function(e) {
          return v.has(e, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function(e) {
          return "function" == typeof e || !1
        }), v.isFinite = function(e) {
          return isFinite(e) && !isNaN(parseFloat(e))
        }, v.isNaN = function(e) {
          return v.isNumber(e) && e !== +e
        }, v.isBoolean = function(e) {
          return !0 === e || !1 === e || "[object Boolean]" === l.call(e)
        }, v.isNull = function(e) {
          return null === e
        }, v.isUndefined = function(e) {
          return void 0 === e
        }, v.has = function(e, t) {
          return null != e && u.call(e, t)
        }, v.noConflict = function() {
          return e._ = r, this
        }, v.identity = function(e) {
          return e
        }, v.constant = function(e) {
          return function() {
            return e
          }
        }, v.noop = function() {}, v.property = b, v.propertyOf = function(e) {
          return null == e ? function() {} : function(t) {
            return e[t]
          }
        }, v.matcher = v.matches = function(e) {
          return e = v.extendOwn({}, e),
            function(t) {
              return v.isMatch(t, e)
            }
        }, v.times = function(e, t, n) {
          var r = Array(Math.max(0, e));
          t = _(t, n, 1);
          for(var i = 0; i < e; i++) r[i] = t(i);
          return r
        }, v.random = function(e, t) {
          return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, v.now = Date.now || function() {
          return (new Date).getTime()
        };
        var A = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
          },
          j = v.invert(A),
          R = function(e) {
            var t = function(t) {
                return e[t]
              },
              n = "(?:" + v.keys(e).join("|") + ")",
              r = RegExp(n),
              i = RegExp(n, "g");
            return function(e) {
              return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
            }
          };
        v.escape = R(A), v.unescape = R(j), v.result = function(e, t, n) {
          var r = null == e ? void 0 : e[t];
          return void 0 === r && (r = n), v.isFunction(r) ? r.call(e) : r
        };
        var q = 0;
        v.uniqueId = function(e) {
          var t = ++q + "";
          return e ? e + t : t
        }, v.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
        var H = /(.)^/,
          F = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
          },
          U = /\\|'|\r|\n|\u2028|\u2029/g,
          B = function(e) {
            return "\\" + F[e]
          };
        v.template = function(e, t, n) {
          !t && n && (t = n), t = v.defaults({}, t, v.templateSettings);
          var r = RegExp([(t.escape || H).source, (t.interpolate || H).source, (t.evaluate || H).source].join("|") + "|$", "g"),
            i = 0,
            o = "__p+='";
          e.replace(r, function(t, n, r, a, s) {
            return o += e.slice(i, s).replace(U, B), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
          }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
          try {
            var a = new Function(t.variable || "obj", "_", o)
          } catch (e) {
            throw e.source = o, e
          }
          var s = function(e) {
              return a.call(this, e, v)
            },
            c = t.variable || "obj";
          return s.source = "function(" + c + "){\n" + o + "}", s
        }, v.chain = function(e) {
          var t = v(e);
          return t._chain = !0, t
        };
        var V = function(e, t) {
          return e._chain ? v(t).chain() : t
        };
        v.mixin = function(e) {
          v.each(v.functions(e), function(t) {
            var n = v[t] = e[t];
            v.prototype[t] = function() {
              var e = [this._wrapped];
              return s.apply(e, arguments), V(this, n.apply(v, e))
            }
          })
        }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
          var t = i[e];
          v.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], V(this, n)
          }
        }), v.each(["concat", "join", "slice"], function(e) {
          var t = i[e];
          v.prototype[e] = function() {
            return V(this, t.apply(this._wrapped, arguments))
          }
        }), v.prototype.value = function() {
          return this._wrapped
        }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() {
          return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
          return v
        })
      }).call(this)
    }, {}],
    3: [function(e, t, n) {
      var r, i;
      ! function() {
        window.WebComponents = window.WebComponents || {
          flags: {}
        };
        var e = document.querySelector('script[src*="webcomponents-lite.js"]'),
          t = {};
        if(!t.noOpts) {
          if(location.search.slice(1).split("&").forEach(function(e) {
              var n, r = e.split("=");
              r[0] && (n = r[0].match(/wc-(.+)/)) && (t[n[1]] = r[1] || !0)
            }), e)
            for(var n, r = 0; n = e.attributes[r]; r++) "src" !== n.name && (t[n.name] = n.value || !0);
          if(t.log && t.log.split) {
            var i = t.log.split(",");
            t.log = {}, i.forEach(function(e) {
              t.log[e] = !0
            })
          } else t.log = {}
        }
        t.register && (window.CustomElements = window.CustomElements || {
          flags: {}
        }, window.CustomElements.flags.register = t.register), WebComponents.flags = t
      }(),
      function(e) {
        "use strict";
        var t = !1;
        if(!e.forceJURL) try {
          var n = new URL("b", "http://a");
          n.pathname = "c%20d", t = "http://a/c%20d" === n.href
        } catch (e) {}
        if(!t) {
          var r = Object.create(null);
          r.ftp = 21, r.file = 0, r.gopher = 70, r.http = 80, r.https = 443, r.ws = 80, r.wss = 443;
          var i = Object.create(null);
          i["%2e"] = ".", i[".%2e"] = "..", i["%2e."] = "..", i["%2e%2e"] = "..";
          var o = void 0,
            a = /[a-zA-Z]/,
            s = /[a-zA-Z0-9\+\-\.]/;
          v.prototype = {
            toString: function() {
              return this.href
            },
            get href() {
              if(this._isInvalid) return this._url;
              var e = "";
              return "" == this._username && null == this._password || (e = this._username + (null != this._password ? ":" + this._password : "") + "@"), this.protocol + (this._isRelative ? "//" + e + this.host : "") + this.pathname + this._query + this._fragment
            },
            set href(e) {
              m.call(this), p.call(this, e)
            },
            get protocol() {
              return this._scheme + ":"
            },
            set protocol(e) {
              this._isInvalid || p.call(this, e + ":", "scheme start")
            },
            get host() {
              return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host
            },
            set host(e) {
              !this._isInvalid && this._isRelative && p.call(this, e, "host")
            },
            get hostname() {
              return this._host
            },
            set hostname(e) {
              !this._isInvalid && this._isRelative && p.call(this, e, "hostname")
            },
            get port() {
              return this._port
            },
            set port(e) {
              !this._isInvalid && this._isRelative && p.call(this, e, "port")
            },
            get pathname() {
              return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData
            },
            set pathname(e) {
              !this._isInvalid && this._isRelative && (this._path = [], p.call(this, e, "relative path start"))
            },
            get search() {
              return this._isInvalid || !this._query || "?" == this._query ? "" : this._query
            },
            set search(e) {
              !this._isInvalid && this._isRelative && (this._query = "?", "?" == e[0] && (e = e.slice(1)), p.call(this, e, "query"))
            },
            get hash() {
              return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment
            },
            set hash(e) {
              this._isInvalid || (this._fragment = "#", "#" == e[0] && (e = e.slice(1)), p.call(this, e, "fragment"))
            },
            get origin() {
              var e;
              if(this._isInvalid || !this._scheme) return "";
              switch(this._scheme) {
                case "data":
                case "file":
                case "javascript":
                case "mailto":
                  return "null"
              }
              return (e = this.host) ? this._scheme + "://" + e : ""
            }
          };
          var c = e.URL;
          c && (v.createObjectURL = function(e) {
            return c.createObjectURL.apply(c, arguments)
          }, v.revokeObjectURL = function(e) {
            c.revokeObjectURL(e)
          }), e.URL = v
        }

        function l(e) {
          return void 0 !== r[e]
        }

        function u() {
          m.call(this), this._isInvalid = !0
        }

        function h(e) {
          return "" == e && u.call(this), e.toLowerCase()
        }

        function d(e) {
          var t = e.charCodeAt(0);
          return t > 32 && t < 127 && -1 == [34, 35, 60, 62, 63, 96].indexOf(t) ? e : encodeURIComponent(e)
        }

        function f(e) {
          var t = e.charCodeAt(0);
          return t > 32 && t < 127 && -1 == [34, 35, 60, 62, 96].indexOf(t) ? e : encodeURIComponent(e)
        }

        function p(e, t, n) {
          function c(e) {
            y.push(e), console.log(e)
          }
          var p = t || "scheme start",
            m = 0,
            v = "",
            _ = !1,
            g = !1,
            y = [];
          e: for(;
            (e[m - 1] != o || 0 == m) && !this._isInvalid;) {
            var w = e[m];
            switch(p) {
              case "scheme start":
                if(!w || !a.test(w)) {
                  if(t) {
                    c("Invalid scheme.");
                    break e
                  }
                  v = "", p = "no scheme";
                  continue
                }
                v += w.toLowerCase(), p = "scheme";
                break;
              case "scheme":
                if(w && s.test(w)) v += w.toLowerCase();
                else {
                  if(":" != w) {
                    if(t) {
                      if(o == w) break e;
                      c("Code point not allowed in scheme: " + w);
                      break e
                    }
                    v = "", m = 0, p = "no scheme";
                    continue
                  }
                  if(this._scheme = v, v = "", t) break e;
                  l(this._scheme) && (this._isRelative = !0), p = "file" == this._scheme ? "relative" : this._isRelative && n && n._scheme == this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data"
                }
                break;
              case "scheme data":
                "?" == w ? (this._query = "?", p = "query") : "#" == w ? (this._fragment = "#", p = "fragment") : o != w && "\t" != w && "\n" != w && "\r" != w && (this._schemeData += d(w));
                break;
              case "no scheme":
                if(n && l(n._scheme)) {
                  p = "relative";
                  continue
                }
                c("Missing scheme."), u.call(this);
                break;
              case "relative or authority":
                if("/" != w || "/" != e[m + 1]) {
                  c("Expected /, got: " + w), p = "relative";
                  continue
                }
                p = "authority ignore slashes";
                break;
              case "relative":
                if(this._isRelative = !0, "file" != this._scheme && (this._scheme = n._scheme), o == w) {
                  this._host = n._host, this._port = n._port, this._path = n._path.slice(), this._query = n._query, this._username = n._username, this._password = n._password;
                  break e
                }
                if("/" == w || "\\" == w) "\\" == w && c("\\ is an invalid code point."), p = "relative slash";
                else if("?" == w) this._host = n._host, this._port = n._port, this._path = n._path.slice(), this._query = "?", this._username = n._username, this._password = n._password, p = "query";
                else {
                  if("#" != w) {
                    var b = e[m + 1],
                      C = e[m + 2];
                    ("file" != this._scheme || !a.test(w) || ":" != b && "|" != b || o != C && "/" != C && "\\" != C && "?" != C && "#" != C) && (this._host = n._host, this._port = n._port, this._username = n._username, this._password = n._password, this._path = n._path.slice(), this._path.pop()), p = "relative path";
                    continue
                  }
                  this._host = n._host, this._port = n._port, this._path = n._path.slice(), this._query = n._query, this._fragment = "#", this._username = n._username, this._password = n._password, p = "fragment"
                }
                break;
              case "relative slash":
                if("/" != w && "\\" != w) {
                  "file" != this._scheme && (this._host = n._host, this._port = n._port, this._username = n._username, this._password = n._password), p = "relative path";
                  continue
                }
                "\\" == w && c("\\ is an invalid code point."), p = "file" == this._scheme ? "file host" : "authority ignore slashes";
                break;
              case "authority first slash":
                if("/" != w) {
                  c("Expected '/', got: " + w), p = "authority ignore slashes";
                  continue
                }
                p = "authority second slash";
                break;
              case "authority second slash":
                if(p = "authority ignore slashes", "/" != w) {
                  c("Expected '/', got: " + w);
                  continue
                }
                break;
              case "authority ignore slashes":
                if("/" != w && "\\" != w) {
                  p = "authority";
                  continue
                }
                c("Expected authority, got: " + w);
                break;
              case "authority":
                if("@" == w) {
                  _ && (c("@ already seen."), v += "%40"), _ = !0;
                  for(var E = 0; E < v.length; E++) {
                    var S = v[E];
                    if("\t" != S && "\n" != S && "\r" != S)
                      if(":" != S || null !== this._password) {
                        var T = d(S);
                        null !== this._password ? this._password += T : this._username += T
                      } else this._password = "";
                    else c("Invalid whitespace in authority.")
                  }
                  v = ""
                } else {
                  if(o == w || "/" == w || "\\" == w || "?" == w || "#" == w) {
                    m -= v.length, v = "", p = "host";
                    continue
                  }
                  v += w
                }
                break;
              case "file host":
                if(o == w || "/" == w || "\\" == w || "?" == w || "#" == w) {
                  2 != v.length || !a.test(v[0]) || ":" != v[1] && "|" != v[1] ? 0 == v.length ? p = "relative path start" : (this._host = h.call(this, v), v = "", p = "relative path start") : p = "relative path";
                  continue
                }
                "\t" == w || "\n" == w || "\r" == w ? c("Invalid whitespace in file host.") : v += w;
                break;
              case "host":
              case "hostname":
                if(":" != w || g) {
                  if(o == w || "/" == w || "\\" == w || "?" == w || "#" == w) {
                    if(this._host = h.call(this, v), v = "", p = "relative path start", t) break e;
                    continue
                  }
                  "\t" != w && "\n" != w && "\r" != w ? ("[" == w ? g = !0 : "]" == w && (g = !1), v += w) : c("Invalid code point in host/hostname: " + w)
                } else if(this._host = h.call(this, v), v = "", p = "port", "hostname" == t) break e;
                break;
              case "port":
                if(/[0-9]/.test(w)) v += w;
                else {
                  if(o == w || "/" == w || "\\" == w || "?" == w || "#" == w || t) {
                    if("" != v) {
                      var L = parseInt(v, 10);
                      L != r[this._scheme] && (this._port = L + ""), v = ""
                    }
                    if(t) break e;
                    p = "relative path start";
                    continue
                  }
                  "\t" == w || "\n" == w || "\r" == w ? c("Invalid code point in port: " + w) : u.call(this)
                }
                break;
              case "relative path start":
                if("\\" == w && c("'\\' not allowed in path."), p = "relative path", "/" != w && "\\" != w) continue;
                break;
              case "relative path":
                var N;
                if(o != w && "/" != w && "\\" != w && (t || "?" != w && "#" != w)) "\t" != w && "\n" != w && "\r" != w && (v += d(w));
                else "\\" == w && c("\\ not allowed in relative path."), (N = i[v.toLowerCase()]) && (v = N), ".." == v ? (this._path.pop(), "/" != w && "\\" != w && this._path.push("")) : "." == v && "/" != w && "\\" != w ? this._path.push("") : "." != v && ("file" == this._scheme && 0 == this._path.length && 2 == v.length && a.test(v[0]) && "|" == v[1] && (v = v[0] + ":"), this._path.push(v)), v = "", "?" == w ? (this._query = "?", p = "query") : "#" == w && (this._fragment = "#", p = "fragment");
                break;
              case "query":
                t || "#" != w ? o != w && "\t" != w && "\n" != w && "\r" != w && (this._query += f(w)) : (this._fragment = "#", p = "fragment");
                break;
              case "fragment":
                o != w && "\t" != w && "\n" != w && "\r" != w && (this._fragment += w)
            }
            m++
          }
        }

        function m() {
          this._scheme = "", this._schemeData = "", this._username = "", this._password = null, this._host = "", this._port = "", this._path = [], this._query = "", this._fragment = "", this._isInvalid = !1, this._isRelative = !1
        }

        function v(e, t) {
          void 0 === t || t instanceof v || (t = new v(String(t))), this._url = e, m.call(this);
          var n = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
          p.call(this, n, null, t)
        }
      }(self), "undefined" == typeof WeakMap && function() {
          var e = Object.defineProperty,
            t = Date.now() % 1e9,
            n = function() {
              this.name = "__st" + (1e9 * Math.random() >>> 0) + t++ + "__"
            };
          n.prototype = {
            set: function(t, n) {
              var r = t[this.name];
              return r && r[0] === t ? r[1] = n : e(t, this.name, {
                value: [t, n],
                writable: !0
              }), this
            },
            get: function(e) {
              var t;
              return (t = e[this.name]) && t[0] === e ? t[1] : void 0
            },
            delete: function(e) {
              var t = e[this.name];
              return !(!t || t[0] !== e) && (t[0] = t[1] = void 0, !0)
            },
            has: function(e) {
              var t = e[this.name];
              return !!t && t[0] === e
            }
          }, window.WeakMap = n
        }(),
        function(e) {
          if(!e.JsMutationObserver) {
            var t, n = new WeakMap;
            if(/Trident|Edge/.test(navigator.userAgent)) t = setTimeout;
            else if(window.setImmediate) t = window.setImmediate;
            else {
              var r = [],
                i = String(Math.random());
              window.addEventListener("message", function(e) {
                if(e.data === i) {
                  var t = r;
                  r = [], t.forEach(function(e) {
                    e()
                  })
                }
              }), t = function(e) {
                r.push(e), window.postMessage(i, "*")
              }
            }
            var o, a, s = !1,
              c = [],
              l = 0;
            d.prototype = {
              observe: function(e, t) {
                var r;
                if(r = e, e = window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(r) || r, !t.childList && !t.attributes && !t.characterData || t.attributeOldValue && !t.attributes || t.attributeFilter && t.attributeFilter.length && !t.attributes || t.characterDataOldValue && !t.characterData) throw new SyntaxError;
                var i, o = n.get(e);
                o || n.set(e, o = []);
                for(var a = 0; a < o.length; a++)
                  if(o[a].observer === this) {
                    (i = o[a]).removeListeners(), i.options = t;
                    break
                  } i || (i = new _(this, e, t), o.push(i), this.nodes_.push(e)), i.addListeners()
              },
              disconnect: function() {
                this.nodes_.forEach(function(e) {
                  for(var t = n.get(e), r = 0; r < t.length; r++) {
                    var i = t[r];
                    if(i.observer === this) {
                      i.removeListeners(), t.splice(r, 1);
                      break
                    }
                  }
                }, this), this.records_ = []
              },
              takeRecords: function() {
                var e = this.records_;
                return this.records_ = [], e
              }
            }, _.prototype = {
              enqueue: function(e) {
                var n, r = this.observer.records_,
                  i = r.length;
                if(r.length > 0) {
                  var o = v(r[i - 1], e);
                  if(o) return void(r[i - 1] = o)
                } else n = this.observer, c.push(n), s || (s = !0, t(u));
                r[i] = e
              },
              addListeners: function() {
                this.addListeners_(this.target)
              },
              addListeners_: function(e) {
                var t = this.options;
                t.attributes && e.addEventListener("DOMAttrModified", this, !0), t.characterData && e.addEventListener("DOMCharacterDataModified", this, !0), t.childList && e.addEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.addEventListener("DOMNodeRemoved", this, !0)
              },
              removeListeners: function() {
                this.removeListeners_(this.target)
              },
              removeListeners_: function(e) {
                var t = this.options;
                t.attributes && e.removeEventListener("DOMAttrModified", this, !0), t.characterData && e.removeEventListener("DOMCharacterDataModified", this, !0), t.childList && e.removeEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.removeEventListener("DOMNodeRemoved", this, !0)
              },
              addTransientObserver: function(e) {
                if(e !== this.target) {
                  this.addListeners_(e), this.transientObservedNodes.push(e);
                  var t = n.get(e);
                  t || n.set(e, t = []), t.push(this)
                }
              },
              removeTransientObservers: function() {
                var e = this.transientObservedNodes;
                this.transientObservedNodes = [], e.forEach(function(e) {
                  this.removeListeners_(e);
                  for(var t = n.get(e), r = 0; r < t.length; r++)
                    if(t[r] === this) {
                      t.splice(r, 1);
                      break
                    }
                }, this)
              },
              handleEvent: function(e) {
                switch(e.stopImmediatePropagation(), e.type) {
                  case "DOMAttrModified":
                    var t = e.attrName,
                      n = e.relatedNode.namespaceURI,
                      r = e.target;
                    (s = new p("attributes", r)).attributeName = t, s.attributeNamespace = n;
                    var i = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
                    h(r, function(e) {
                      if(e.attributes && (!e.attributeFilter || !e.attributeFilter.length || -1 !== e.attributeFilter.indexOf(t) || -1 !== e.attributeFilter.indexOf(n))) return e.attributeOldValue ? m(i) : s
                    });
                    break;
                  case "DOMCharacterDataModified":
                    var s = p("characterData", r = e.target);
                    i = e.prevValue;
                    h(r, function(e) {
                      if(e.characterData) return e.characterDataOldValue ? m(i) : s
                    });
                    break;
                  case "DOMNodeRemoved":
                    this.addTransientObserver(e.target);
                  case "DOMNodeInserted":
                    var c, l, u = e.target;
                    "DOMNodeInserted" === e.type ? (c = [u], l = []) : (c = [], l = [u]);
                    var d = u.previousSibling,
                      f = u.nextSibling;
                    (s = p("childList", e.target.parentNode)).addedNodes = c, s.removedNodes = l, s.previousSibling = d, s.nextSibling = f, h(e.relatedNode, function(e) {
                      if(e.childList) return s
                    })
                }
                o = a = void 0
              }
            }, e.JsMutationObserver = d, e.MutationObserver || (e.MutationObserver = d, d._isPolyfilled = !0)
          }

          function u() {
            s = !1;
            var e = c;
            c = [], e.sort(function(e, t) {
              return e.uid_ - t.uid_
            });
            var t = !1;
            e.forEach(function(e) {
              var r = e.takeRecords();
              ! function(e) {
                e.nodes_.forEach(function(t) {
                  var r = n.get(t);
                  r && r.forEach(function(t) {
                    t.observer === e && t.removeTransientObservers()
                  })
                })
              }(e), r.length && (e.callback_(r, e), t = !0)
            }), t && u()
          }

          function h(e, t) {
            for(var r = e; r; r = r.parentNode) {
              var i = n.get(r);
              if(i)
                for(var o = 0; o < i.length; o++) {
                  var a = i[o],
                    s = a.options;
                  if(r === e || s.subtree) {
                    var c = t(s);
                    c && a.enqueue(c)
                  }
                }
            }
          }

          function d(e) {
            this.callback_ = e, this.nodes_ = [], this.records_ = [], this.uid_ = ++l
          }

          function f(e, t) {
            this.type = e, this.target = t, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null
          }

          function p(e, t) {
            return o = new f(e, t)
          }

          function m(e) {
            return a || ((n = new f((t = o).type, t.target)).addedNodes = t.addedNodes.slice(), n.removedNodes = t.removedNodes.slice(), n.previousSibling = t.previousSibling, n.nextSibling = t.nextSibling, n.attributeName = t.attributeName, n.attributeNamespace = t.attributeNamespace, n.oldValue = t.oldValue, (a = n).oldValue = e, a);
            var t, n
          }

          function v(e, t) {
            return e === t ? e : a && ((n = e) === a || n === o) ? a : null;
            var n
          }

          function _(e, t, n) {
            this.observer = e, this.target = t, this.options = n, this.transientObservedNodes = []
          }
        }(self),
        function() {
          var e, t = "undefined" == typeof HTMLTemplateElement;
          /Trident/.test(navigator.userAgent) && (e = document.importNode, document.importNode = function() {
            var t = e.apply(document, arguments);
            if(t.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              var n = document.createDocumentFragment();
              return n.appendChild(t), n
            }
            return t
          });
          var n = function() {
              if(!t) {
                var e = document.createElement("template"),
                  n = document.createElement("template");
                n.content.appendChild(document.createElement("div")), e.content.appendChild(n);
                var r = e.cloneNode(!0);
                return 0 === r.content.childNodes.length || 0 === r.content.firstChild.content.childNodes.length
              }
            }(),
            r = function() {};
          if(t) {
            var i = document.implementation.createHTMLDocument("template"),
              o = !0,
              a = document.createElement("style");
            a.textContent = "template{display:none;}";
            var s = document.head;
            s.insertBefore(a, s.firstElementChild), r.prototype = Object.create(HTMLElement.prototype), r.decorate = function(e) {
              if(!e.content) {
                var t;
                for(e.content = i.createDocumentFragment(); t = e.firstChild;) e.content.appendChild(t);
                if(e.cloneNode = function(e) {
                    return r.cloneNode(this, e)
                  }, o) try {
                  Object.defineProperty(e, "innerHTML", {
                    get: function() {
                      for(var e = "", t = this.content.firstChild; t; t = t.nextSibling) e += t.outerHTML || t.data.replace(l, u);
                      return e
                    },
                    set: function(e) {
                      for(i.body.innerHTML = e, r.bootstrap(i); this.content.firstChild;) this.content.removeChild(this.content.firstChild);
                      for(; i.body.firstChild;) this.content.appendChild(i.body.firstChild)
                    },
                    configurable: !0
                  })
                } catch (e) {
                  o = !1
                }
                r.bootstrap(e.content)
              }
            }, r.bootstrap = function(e) {
              for(var t, n = e.querySelectorAll("template"), i = 0, o = n.length; i < o && (t = n[i]); i++) r.decorate(t)
            }, document.addEventListener("DOMContentLoaded", function() {
              r.bootstrap(document)
            });
            var c = document.createElement;
            document.createElement = function() {
              "use strict";
              var e = c.apply(document, arguments);
              return "template" === e.localName && r.decorate(e), e
            };
            var l = /[&\u00A0<>]/g;

            function u(e) {
              switch(e) {
                case "&":
                  return "&amp;";
                case "<":
                  return "&lt;";
                case ">":
                  return "&gt;";
                case " ":
                  return "&nbsp;"
              }
            }
          }
          if(t || n) {
            var h = Node.prototype.cloneNode;
            r.cloneNode = function(e, t) {
              var n = h.call(e, !1);
              return this.decorate && this.decorate(n), t && (n.content.appendChild(h.call(e.content, !0)), this.fixClonedDom(n.content, e.content)), n
            }, r.fixClonedDom = function(e, t) {
              if(t.querySelectorAll)
                for(var n, r, i = t.querySelectorAll("template"), o = e.querySelectorAll("template"), a = 0, s = o.length; a < s; a++) r = i[a], n = o[a], this.decorate && this.decorate(r), n.parentNode.replaceChild(r.cloneNode(!0), n)
            };
            var d = document.importNode;
            Node.prototype.cloneNode = function(e) {
              var t = h.call(this, e);
              return e && r.fixClonedDom(t, this), t
            }, document.importNode = function(e, t) {
              if("template" === e.localName) return r.cloneNode(e, t);
              var n = d.call(document, e, t);
              return t && r.fixClonedDom(n, e), n
            }, n && (HTMLTemplateElement.prototype.cloneNode = function(e) {
              return r.cloneNode(this, e)
            })
          }
          t && (window.HTMLTemplateElement = r)
        }(),
        function(e) {
          "use strict";
          if(!window.performance || !window.performance.now) {
            var t = Date.now();
            window.performance = {
              now: function() {
                return Date.now() - t
              }
            }
          }
          var n, r;
          if(window.requestAnimationFrame || (window.requestAnimationFrame = (n = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) ? function(e) {
              return n(function() {
                e(performance.now())
              })
            } : function(e) {
              return window.setTimeout(e, 1e3 / 60)
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(e) {
              clearTimeout(e)
            }), !((r = document.createEvent("Event")).initEvent("foo", !0, !0), r.preventDefault(), r.defaultPrevented)) {
            var i = Event.prototype.preventDefault;
            Event.prototype.preventDefault = function() {
              this.cancelable && (i.call(this), Object.defineProperty(this, "defaultPrevented", {
                get: function() {
                  return !0
                },
                configurable: !0
              }))
            }
          }
          var o = /Trident/.test(navigator.userAgent);
          if((!window.CustomEvent || o && "function" != typeof window.CustomEvent) && (window.CustomEvent = function(e, t) {
              t = t || {};
              var n = document.createEvent("CustomEvent");
              return n.initCustomEvent(e, Boolean(t.bubbles), Boolean(t.cancelable), t.detail), n
            }, window.CustomEvent.prototype = window.Event.prototype), !window.Event || o && "function" != typeof window.Event) {
            var a = window.Event;
            window.Event = function(e, t) {
              t = t || {};
              var n = document.createEvent("Event");
              return n.initEvent(e, Boolean(t.bubbles), Boolean(t.cancelable)), n
            }, window.Event.prototype = a.prototype
          }
        }(window.WebComponents), window.HTMLImports = window.HTMLImports || {
          flags: {}
        },
        function(e) {
          var t = Boolean("import" in document.createElement("link")),
            n = Boolean(window.ShadowDOMPolyfill),
            r = function(e) {
              return n ? window.ShadowDOMPolyfill.wrapIfNeeded(e) : e
            },
            i = r(document),
            o = {
              get: function() {
                var e = window.HTMLImports.currentScript || document.currentScript || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null);
                return r(e)
              },
              configurable: !0
            };
          Object.defineProperty(document, "_currentScript", o), Object.defineProperty(i, "_currentScript", o);
          var a = /Trident/.test(navigator.userAgent);

          function s(e, n) {
            (function e(t, n) {
              if(function(e) {
                  return "complete" === e.readyState || e.readyState === c
                }(n)) t && t();
              else {
                var r = function() {
                  "complete" !== n.readyState && n.readyState !== c || (n.removeEventListener(l, r), e(t, n))
                };
                n.addEventListener(l, r)
              }
            })(function() {
              ! function(e, n) {
                var r = n.querySelectorAll("link[rel=import]"),
                  i = 0,
                  o = r.length,
                  a = [],
                  s = [];

                function c() {
                  i == o && e && e({
                    allImports: r,
                    loadedImports: a,
                    errorImports: s
                  })
                }

                function l(e) {
                  u(e), a.push(this), i++, c()
                }

                function h(e) {
                  s.push(this), i++, c()
                }
                if(o)
                  for(var d, f = 0; f < o && (d = r[f]); f++) p = d, (t ? p.__loaded || p.import && "loading" !== p.import.readyState : p.__importParsed) ? (a.push(this), i++, c()) : (d.addEventListener("load", l), d.addEventListener("error", h));
                else c();
                var p
              }(e, n)
            }, n = n || i)
          }
          var c = a ? "complete" : "interactive",
            l = "readystatechange";

          function u(e) {
            e.target.__loaded = !0
          }
          if(t) {
            function h(e) {
              for(var t, n = 0, r = e.length; n < r && (t = e[n]); n++) "link" === (i = t).localName && "import" === i.rel && d(t);
              var i
            }

            function d(e) {
              e.import ? u({
                target: e
              }) : (e.addEventListener("load", u), e.addEventListener("error", u))
            }
            new MutationObserver(function(e) {
                for(var t, n = 0, r = e.length; n < r && (t = e[n]); n++) t.addedNodes && h(t.addedNodes)
              }).observe(document.head, {
                childList: !0
              }),
              function() {
                if("loading" === document.readyState)
                  for(var e, t = document.querySelectorAll("link[rel=import]"), n = 0, r = t.length; n < r && (e = t[n]); n++) d(e)
              }()
          }
          s(function(e) {
            window.HTMLImports.ready = !0, window.HTMLImports.readyTime = (new Date).getTime();
            var t = i.createEvent("CustomEvent");
            t.initCustomEvent("HTMLImportsLoaded", !0, !0, e), i.dispatchEvent(t)
          }), e.IMPORT_LINK_TYPE = "import", e.useNative = t, e.rootDocument = i, e.whenReady = s, e.isIE = a
        }(window.HTMLImports), r = window.HTMLImports, i = [], r.addModule = function(e) {
          i.push(e)
        }, r.initializeModules = function() {
          i.forEach(function(e) {
            e(r)
          })
        }, window.HTMLImports.addModule(function(e) {
          var t = /(url\()([^)]*)(\))/g,
            n = /(@import[\s]+(?!url\())([^;]*)(;)/g,
            r = {
              resolveUrlsInStyle: function(e, t) {
                var n = e.ownerDocument.createElement("a");
                return e.textContent = this.resolveUrlsInCssText(e.textContent, t, n), e
              },
              resolveUrlsInCssText: function(e, r, i) {
                var o = this.replaceUrls(e, i, r, t);
                return o = this.replaceUrls(o, i, r, n)
              },
              replaceUrls: function(e, t, n, r) {
                return e.replace(r, function(e, r, i, o) {
                  var a = i.replace(/["']/g, "");
                  return n && (a = new URL(a, n).href), t.href = a, r + "'" + (a = t.href) + "'" + o
                })
              }
            };
          e.path = r
        }), window.HTMLImports.addModule(function(e) {
          var t = {
            async: !0,
            ok: function(e) {
              return e.status >= 200 && e.status < 300 || 304 === e.status || 0 === e.status
            },
            load: function(n, r, i) {
              var o = new XMLHttpRequest;
              return (e.flags.debug || e.flags.bust) && (n += "?" + Math.random()), o.open("GET", n, t.async), o.addEventListener("readystatechange", function(e) {
                if(4 === o.readyState) {
                  var n = null;
                  try {
                    var a = o.getResponseHeader("Location");
                    a && (n = "/" === a.substr(0, 1) ? location.origin + a : a)
                  } catch (e) {
                    console.error(e.message)
                  }
                  r.call(i, !t.ok(o) && o, o.response || o.responseText, n)
                }
              }), o.send(), o
            },
            loadDocument: function(e, t, n) {
              this.load(e, t, n).responseType = "document"
            }
          };
          e.xhr = t
        }), window.HTMLImports.addModule(function(e) {
          var t = e.xhr,
            n = e.flags,
            r = function(e, t) {
              this.cache = {}, this.onload = e, this.oncomplete = t, this.inflight = 0, this.pending = {}
            };
          r.prototype = {
            addNodes: function(e) {
              this.inflight += e.length;
              for(var t, n = 0, r = e.length; n < r && (t = e[n]); n++) this.require(t);
              this.checkDone()
            },
            addNode: function(e) {
              this.inflight++, this.require(e), this.checkDone()
            },
            require: function(e) {
              var t = e.src || e.href;
              e.__nodeUrl = t, this.dedupe(t, e) || this.fetch(t, e)
            },
            dedupe: function(e, t) {
              return this.pending[e] ? (this.pending[e].push(t), !0) : this.cache[e] ? (this.onload(e, t, this.cache[e]), this.tail(), !0) : (this.pending[e] = [t], !1)
            },
            fetch: function(e, r) {
              if(n.load && console.log("fetch", e, r), e)
                if(e.match(/^data:/)) {
                  var i = e.split(","),
                    o = i[0],
                    a = i[1];
                  a = o.indexOf(";base64") > -1 ? atob(a) : decodeURIComponent(a), setTimeout(function() {
                    this.receive(e, r, null, a)
                  }.bind(this), 0)
                } else {
                  var s = function(t, n, i) {
                    this.receive(e, r, t, n, i)
                  }.bind(this);
                  t.load(e, s)
                }
              else setTimeout(function() {
                this.receive(e, r, {
                  error: "href must be specified"
                }, null)
              }.bind(this), 0)
            },
            receive: function(e, t, n, r, i) {
              this.cache[e] = r;
              for(var o, a = this.pending[e], s = 0, c = a.length; s < c && (o = a[s]); s++) this.onload(e, o, r, n, i), this.tail();
              this.pending[e] = null
            },
            tail: function() {
              --this.inflight, this.checkDone()
            },
            checkDone: function() {
              this.inflight || this.oncomplete()
            }
          }, e.Loader = r
        }), window.HTMLImports.addModule(function(e) {
          var t = function(e) {
            this.addCallback = e, this.mo = new MutationObserver(this.handler.bind(this))
          };
          t.prototype = {
            handler: function(e) {
              for(var t, n = 0, r = e.length; n < r && (t = e[n]); n++) "childList" === t.type && t.addedNodes.length && this.addedNodes(t.addedNodes)
            },
            addedNodes: function(e) {
              this.addCallback && this.addCallback(e);
              for(var t, n = 0, r = e.length; n < r && (t = e[n]); n++) t.children && t.children.length && this.addedNodes(t.children)
            },
            observe: function(e) {
              this.mo.observe(e, {
                childList: !0,
                subtree: !0
              })
            }
          }, e.Observer = t
        }), window.HTMLImports.addModule(function(e) {
          var t = e.path,
            n = e.rootDocument,
            r = e.flags,
            i = e.isIE,
            o = e.IMPORT_LINK_TYPE,
            a = "link[rel=" + o + "]",
            s = {
              documentSelectors: a,
              importsSelectors: [a, "link[rel=stylesheet]:not([type])", "style:not([type])", "script:not([type])", 'script[type="application/javascript"]', 'script[type="text/javascript"]'].join(","),
              map: {
                link: "parseLink",
                script: "parseScript",
                style: "parseStyle"
              },
              dynamicElements: [],
              parseNext: function() {
                var e = this.nextToParse();
                e && this.parse(e)
              },
              parse: function(e) {
                if(this.isParsed(e)) r.parse && console.log("[%s] is already parsed", e.localName);
                else {
                  var t = this[this.map[e.localName]];
                  t && (this.markParsing(e), t.call(this, e))
                }
              },
              parseDynamic: function(e, t) {
                this.dynamicElements.push(e), t || this.parseNext()
              },
              markParsing: function(e) {
                r.parse && console.log("parsing", e), this.parsingElement = e
              },
              markParsingComplete: function(e) {
                e.__importParsed = !0, this.markDynamicParsingComplete(e), e.__importElement && (e.__importElement.__importParsed = !0, this.markDynamicParsingComplete(e.__importElement)), this.parsingElement = null, r.parse && console.log("completed", e)
              },
              markDynamicParsingComplete: function(e) {
                var t = this.dynamicElements.indexOf(e);
                t >= 0 && this.dynamicElements.splice(t, 1)
              },
              parseImport: function(e) {
                if(e.import = e.__doc, window.HTMLImports.__importsParsingHook && window.HTMLImports.__importsParsingHook(e), e.import && (e.import.__importParsed = !0), this.markParsingComplete(e), e.__resource && !e.__error ? e.dispatchEvent(new CustomEvent("load", {
                    bubbles: !1
                  })) : e.dispatchEvent(new CustomEvent("error", {
                    bubbles: !1
                  })), e.__pending)
                  for(var t; e.__pending.length;)(t = e.__pending.shift()) && t({
                    target: e
                  });
                this.parseNext()
              },
              parseLink: function(e) {
                c(e) ? this.parseImport(e) : (e.href = e.href, this.parseGeneric(e))
              },
              parseStyle: function(e) {
                var n, r, i = e;
                (r = (n = e).ownerDocument.createElement("style")).textContent = n.textContent, t.resolveUrlsInStyle(r), e = r, i.__appliedElement = e, e.__importElement = i, this.parseGeneric(e)
              },
              parseGeneric: function(e) {
                this.trackElement(e), this.addElementToDocument(e)
              },
              rootImportForElement: function(e) {
                for(var t = e; t.ownerDocument.__importLink;) t = t.ownerDocument.__importLink;
                return t
              },
              addElementToDocument: function(e) {
                var t = this.rootImportForElement(e.__importElement || e);
                t.parentNode.insertBefore(e, t)
              },
              trackElement: function(e, t) {
                var n = this,
                  r = function(i) {
                    e.removeEventListener("load", r), e.removeEventListener("error", r), t && t(i), n.markParsingComplete(e), n.parseNext()
                  };
                if(e.addEventListener("load", r), e.addEventListener("error", r), i && "style" === e.localName) {
                  var o = !1;
                  if(-1 == e.textContent.indexOf("@import")) o = !0;
                  else if(e.sheet) {
                    o = !0;
                    for(var a, s = e.sheet.cssRules, c = s ? s.length : 0, l = 0; l < c && (a = s[l]); l++) a.type === CSSRule.IMPORT_RULE && (o = o && Boolean(a.styleSheet))
                  }
                  o && setTimeout(function() {
                    e.dispatchEvent(new CustomEvent("load", {
                      bubbles: !1
                    }))
                  })
                }
              },
              parseScript: function(t) {
                var n = document.createElement("script");
                n.__importElement = t, n.src = t.src ? t.src : function(e) {
                  var t = function(e) {
                    return e.textContent + function(e) {
                      var t = e.ownerDocument;
                      t.__importedScripts = t.__importedScripts || 0;
                      var n = e.ownerDocument.baseURI,
                        r = t.__importedScripts ? "-" + t.__importedScripts : "";
                      return t.__importedScripts++, "\n//# sourceURL=" + n + r + ".js\n"
                    }(e)
                  }(e);
                  return "data:text/javascript;charset=utf-8," + encodeURIComponent(t)
                }(t), e.currentScript = t, this.trackElement(n, function(t) {
                  n.parentNode && n.parentNode.removeChild(n), e.currentScript = null
                }), this.addElementToDocument(n)
              },
              nextToParse: function() {
                return this._mayParse = [], !this.parsingElement && (this.nextToParseInDoc(n) || this.nextToParseDynamic())
              },
              nextToParseInDoc: function(e, t) {
                if(e && this._mayParse.indexOf(e) < 0) {
                  this._mayParse.push(e);
                  for(var n, r = e.querySelectorAll(this.parseSelectorsForNode(e)), i = 0, o = r.length; i < o && (n = r[i]); i++)
                    if(!this.isParsed(n)) return this.hasResource(n) ? c(n) ? this.nextToParseInDoc(n.__doc, n) : n : void 0
                }
                return t
              },
              nextToParseDynamic: function() {
                return this.dynamicElements[0]
              },
              parseSelectorsForNode: function(e) {
                return (e.ownerDocument || e) === n ? this.documentSelectors : this.importsSelectors
              },
              isParsed: function(e) {
                return e.__importParsed
              },
              needsDynamicParsing: function(e) {
                return this.dynamicElements.indexOf(e) >= 0
              },
              hasResource: function(e) {
                return !c(e) || void 0 !== e.__doc
              }
            };

          function c(e) {
            return "link" === e.localName && e.rel === o
          }
          e.parser = s, e.IMPORT_SELECTOR = a
        }), window.HTMLImports.addModule(function(e) {
          var t = e.flags,
            n = e.IMPORT_LINK_TYPE,
            r = e.IMPORT_SELECTOR,
            i = e.rootDocument,
            o = e.Loader,
            a = e.Observer,
            s = e.parser,
            c = {
              documents: {},
              documentPreloadSelectors: r,
              importsPreloadSelectors: [r].join(","),
              loadNode: function(e) {
                l.addNode(e)
              },
              loadSubtree: function(e) {
                var t = this.marshalNodes(e);
                l.addNodes(t)
              },
              marshalNodes: function(e) {
                return e.querySelectorAll(this.loadSelectorsForNode(e))
              },
              loadSelectorsForNode: function(e) {
                return (e.ownerDocument || e) === i ? this.documentPreloadSelectors : this.importsPreloadSelectors
              },
              loaded: function(e, r, i, o, a) {
                if(t.load && console.log("loaded", e, r), r.__resource = i, r.__error = o, function(e) {
                    return function(e, t) {
                      return "link" === e.localName && e.getAttribute("rel") === t
                    }(e, n)
                  }(r)) {
                  var c = this.documents[e];
                  void 0 === c && ((c = o ? null : function(e, t) {
                    var r = document.implementation.createHTMLDocument(n);
                    r._URL = t;
                    var i = r.createElement("base");
                    i.setAttribute("href", t), r.baseURI || function(e) {
                      return !!Object.getOwnPropertyDescriptor(e, "baseURI")
                    }(r) || Object.defineProperty(r, "baseURI", {
                      value: t
                    });
                    var o = r.createElement("meta");
                    o.setAttribute("charset", "utf-8"), r.head.appendChild(o), r.head.appendChild(i), r.body.innerHTML = e, window.HTMLTemplateElement && HTMLTemplateElement.bootstrap && HTMLTemplateElement.bootstrap(r);
                    return r
                  }(i, a || e)) && (c.__importLink = r, this.bootDocument(c)), this.documents[e] = c), r.__doc = c
                }
                s.parseNext()
              },
              bootDocument: function(e) {
                this.loadSubtree(e), this.observer.observe(e), s.parseNext()
              },
              loadedAll: function() {
                s.parseNext()
              }
            },
            l = new o(c.loaded.bind(c), c.loadedAll.bind(c));
          if(c.observer = new a, !document.baseURI) {
            var u = {
              get: function() {
                var e = document.querySelector("base");
                return e ? e.href : window.location.href
              },
              configurable: !0
            };
            Object.defineProperty(document, "baseURI", u), Object.defineProperty(i, "baseURI", u)
          }
          e.importer = c, e.importLoader = l
        }), window.HTMLImports.addModule(function(e) {
          var t = e.parser,
            n = e.importer,
            r = {
              added: function(e) {
                for(var r, i, o, a, s = 0, c = e.length; s < c && (a = e[s]); s++) r || (r = a.ownerDocument, i = t.isParsed(r)), (o = this.shouldLoadNode(a)) && n.loadNode(a), this.shouldParseNode(a) && i && t.parseDynamic(a, o)
              },
              shouldLoadNode: function(e) {
                return 1 === e.nodeType && i.call(e, n.loadSelectorsForNode(e))
              },
              shouldParseNode: function(e) {
                return 1 === e.nodeType && i.call(e, t.parseSelectorsForNode(e))
              }
            };
          n.observer.addCallback = r.added.bind(r);
          var i = HTMLElement.prototype.matches || HTMLElement.prototype.matchesSelector || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector
        }),
        function(e) {
          var t = e.initializeModules;
          e.isIE;
          if(!e.useNative) {
            t();
            var n = e.rootDocument;
            "complete" === document.readyState || "interactive" === document.readyState && !window.attachEvent ? r() : document.addEventListener("DOMContentLoaded", r)
          }

          function r() {
            window.HTMLImports.importer.bootDocument(n)
          }
        }(window.HTMLImports), window.CustomElements = window.CustomElements || {
          flags: {}
        },
        function(e) {
          var t = e.flags,
            n = [];
          e.addModule = function(e) {
            n.push(e)
          }, e.initializeModules = function() {
            n.forEach(function(t) {
              t(e)
            })
          }, e.hasNative = Boolean(document.registerElement), e.isIE = /Trident/.test(navigator.userAgent), e.useNative = !t.register && e.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative)
        }(window.CustomElements), window.CustomElements.addModule(function(e) {
          var t = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";

          function n(e, t) {
            ! function e(t, n, r) {
              var i = t.firstElementChild;
              if(!i)
                for(i = t.firstChild; i && i.nodeType !== Node.ELEMENT_NODE;) i = i.nextSibling;
              for(; i;) !0 !== n(i, r) && e(i, n, r), i = i.nextElementSibling;
              return null
            }(e, function(e) {
              if(t(e)) return !0;
              r(e, t)
            }), r(e, t)
          }

          function r(e, t) {
            for(var r = e.shadowRoot; r;) n(r, t), r = r.olderShadowRoot
          }
          e.forDocumentTree = function(e, n) {
            ! function e(n, r, i) {
              if(n = window.wrap(n), !(i.indexOf(n) >= 0)) {
                i.push(n);
                for(var o, a = n.querySelectorAll("link[rel=" + t + "]"), s = 0, c = a.length; s < c && (o = a[s]); s++) o.import && e(o.import, r, i);
                r(n)
              }
            }(e, n, [])
          }, e.forSubtree = n
        }), window.CustomElements.addModule(function(e) {
          var t = e.flags,
            n = e.forSubtree,
            r = e.forDocumentTree;

          function i(e, t) {
            return o(e, t) || a(e, t)
          }

          function o(t, n) {
            if(e.upgrade(t, n)) return !0;
            n && d(t)
          }

          function a(e, t) {
            n(e, function(e) {
              if(o(e, t)) return !0
            })
          }
          var s = window.MutationObserver._isPolyfilled && t["throttle-attached"];
          e.hasPolyfillMutations = s, e.hasThrottledAttached = s;
          var c = !1,
            l = [];

          function u(e) {
            l.push(e), c || (c = !0, setTimeout(h))
          }

          function h() {
            c = !1;
            for(var e, t = l, n = 0, r = t.length; n < r && (e = t[n]); n++) e();
            l = []
          }

          function d(e) {
            s ? u(function() {
              f(e)
            }) : f(e)
          }

          function f(e) {
            e.__upgraded__ && !e.__attached && (e.__attached = !0, e.attachedCallback && e.attachedCallback())
          }

          function p(e) {
            s ? u(function() {
              m(e)
            }) : m(e)
          }

          function m(e) {
            e.__upgraded__ && e.__attached && (e.__attached = !1, e.detachedCallback && e.detachedCallback())
          }

          function v(e, r) {
            if(t.dom) {
              var o = r[0];
              if(o && "childList" === o.type && o.addedNodes && o.addedNodes) {
                for(var a = o.addedNodes[0]; a && a !== document && !a.host;) a = a.parentNode;
                var s = a && (a.URL || a._URL || a.host && a.host.localName) || "";
                s = s.split("/?").shift().split("/").pop()
              }
              console.group("mutations (%d) [%s]", r.length, s || "")
            }
            var c = function(e) {
              for(var t = e, n = window.wrap(document); t;) {
                if(t == n) return !0;
                t = t.parentNode || t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && t.host
              }
            }(e);
            r.forEach(function(e) {
              "childList" === e.type && (_(e.addedNodes, function(e) {
                e.localName && i(e, c)
              }), _(e.removedNodes, function(e) {
                var t;
                e.localName && (p(t = e), n(t, function(e) {
                  p(e)
                }))
              }))
            }), t.dom && console.groupEnd()
          }
          var _ = Array.prototype.forEach.call.bind(Array.prototype.forEach);

          function g(e) {
            if(!e.__observer) {
              var t = new MutationObserver(v.bind(this, e));
              t.observe(e, {
                childList: !0,
                subtree: !0
              }), e.__observer = t
            }
          }

          function y(e) {
            e = window.wrap(e), t.dom && console.group("upgradeDocument: ", e.baseURI.split("/").pop()), i(e, e === window.wrap(document)), g(e), t.dom && console.groupEnd()
          }
          var w = Element.prototype.createShadowRoot;
          w && (Element.prototype.createShadowRoot = function() {
            var e = w.call(this);
            return window.CustomElements.watchShadow(this), e
          }), e.watchShadow = function(e) {
            if(e.shadowRoot && !e.shadowRoot.__watched) {
              t.dom && console.log("watching shadow-root for: ", e.localName);
              for(var n = e.shadowRoot; n;) g(n), n = n.olderShadowRoot
            }
          }, e.upgradeDocumentTree = function(e) {
            r(e, y)
          }, e.upgradeDocument = y, e.upgradeSubtree = a, e.upgradeAll = i, e.attached = d, e.takeRecords = function(e) {
            for((e = window.wrap(e)) || (e = window.wrap(document)); e.parentNode;) e = e.parentNode;
            var t = e.__observer;
            t && (v(e, t.takeRecords()), h())
          }
        }), window.CustomElements.addModule(function(e) {
          var t = e.flags;

          function n(n, i, o) {
            return t.upgrade && console.group("upgrade:", n.localName), i.is && n.setAttribute("is", i.is), r(n, i), n.__upgraded__ = !0,
              function(e) {
                e.createdCallback && e.createdCallback()
              }(n), o && e.attached(n), e.upgradeSubtree(n, o), t.upgrade && console.groupEnd(), n
          }

          function r(e, t) {
            Object.__proto__ ? e.__proto__ = t.prototype : (! function(e, t, n) {
              var r = {},
                i = t;
              for(; i !== n && i !== HTMLElement.prototype;) {
                for(var o, a = Object.getOwnPropertyNames(i), s = 0; o = a[s]; s++) r[o] || (Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o)), r[o] = 1);
                i = Object.getPrototypeOf(i)
              }
            }(e, t.prototype, t.native), e.__proto__ = t.prototype)
          }
          e.upgrade = function(t, r) {
            if("template" === t.localName && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(t), !t.__upgraded__ && t.nodeType === Node.ELEMENT_NODE) {
              var i = t.getAttribute("is"),
                o = e.getRegisteredDefinition(t.localName) || e.getRegisteredDefinition(i);
              if(o && (i && o.tag == t.localName || !i && !o.extends)) return n(t, o, r)
            }
          }, e.upgradeWithDefinition = n, e.implementPrototype = r
        }), window.CustomElements.addModule(function(e) {
          e.isIE;
          var t = e.upgradeDocumentTree,
            n = e.upgradeAll,
            r = e.upgradeWithDefinition,
            i = e.implementPrototype,
            o = e.useNative;

          function a(e, t, n) {
            e = e.toLowerCase();
            var r = this.getAttribute(e);
            n.apply(this, arguments);
            var i = this.getAttribute(e);
            this.attributeChangedCallback && i !== r && this.attributeChangedCallback(e, r, i)
          }
          var s = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"];
          var c = {};

          function l(e) {
            if(e) return c[e.toLowerCase()]
          }
          var u = "http://www.w3.org/1999/xhtml";

          function h(e, t) {
            e && (e = e.toLowerCase()), t && (t = t.toLowerCase());
            var n, r = l(t || e);
            if(r) {
              if(e == r.tag && t == r.is) return new r.ctor;
              if(!t && !r.is) return new r.ctor
            }
            return t ? ((n = h(e)).setAttribute("is", t), n) : (n = f(e), e.indexOf("-") >= 0 && i(n, HTMLElement), n)
          }
          var d, f = document.createElement.bind(document),
            p = document.createElementNS.bind(document);

          function m(e, t) {
            var r = e[t];
            e[t] = function() {
              var e = r.apply(this, arguments);
              return n(e), e
            }
          }
          d = Object.__proto__ || o ? function(e, t) {
            return e instanceof t
          } : function(e, t) {
            if(e instanceof t) return !0;
            for(var n = e; n;) {
              if(n === t.prototype) return !0;
              n = n.__proto__
            }
            return !1
          }, m(Node.prototype, "cloneNode"), m(document, "importNode"), document.registerElement = function(n, i) {
            var o = i || {};
            if(!n) throw new Error("document.registerElement: first argument `name` must not be empty");
            if(n.indexOf("-") < 0) throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(n) + "'.");
            if(function(e) {
                for(var t = 0; t < s.length; t++)
                  if(e === s[t]) return !0
              }(n)) throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(n) + "'. The type name is invalid.");
            if(l(n)) throw new Error("DuplicateDefinitionError: a type with name '" + String(n) + "' is already registered");
            return o.prototype || (o.prototype = Object.create(HTMLElement.prototype)), o.__name = n.toLowerCase(), o.extends && (o.extends = o.extends.toLowerCase()), o.lifecycle = o.lifecycle || {}, o.ancestry = function e(t) {
                var n = l(t);
                return n ? e(n.extends).concat([n]) : []
              }(o.extends),
              function(e) {
                for(var t, n = e.extends, r = 0; t = e.ancestry[r]; r++) n = t.is && t.tag;
                e.tag = n || e.__name, n && (e.is = e.__name)
              }(o),
              function(e) {
                if(!Object.__proto__) {
                  var t = HTMLElement.prototype;
                  if(e.is) {
                    var n = document.createElement(e.tag);
                    t = Object.getPrototypeOf(n)
                  }
                  for(var r, i = e.prototype, o = !1; i;) i == t && (o = !0), (r = Object.getPrototypeOf(i)) && (i.__proto__ = r), i = r;
                  o || console.warn(e.tag + " prototype not found in prototype chain for " + e.is), e.native = t
                }
              }(o),
              function(e) {
                if(!e.setAttribute._polyfilled) {
                  var t = e.setAttribute;
                  e.setAttribute = function(e, n) {
                    a.call(this, e, n, t)
                  };
                  var n = e.removeAttribute;
                  e.removeAttribute = function(e) {
                    a.call(this, e, null, n)
                  }, e.setAttribute._polyfilled = !0
                }
              }(o.prototype),
              function(e, t) {
                c[e] = t
              }(o.__name, o), o.ctor = function(e) {
                return function() {
                  return function(e) {
                    return r(f(e.tag), e)
                  }(e)
                }
              }(o), o.ctor.prototype = o.prototype, o.prototype.constructor = o.ctor, e.ready && t(document), o.ctor
          }, document.createElement = h, document.createElementNS = function(e, t, n) {
            return e === u ? h(t, n) : p(e, t)
          }, e.registry = c, e.instanceof = d, e.reservedTagList = s, e.getRegisteredDefinition = l, document.register = document.registerElement
        }),
        function(e) {
          var t = e.useNative,
            n = e.initializeModules;
          e.isIE;
          if(t) {
            var r = function() {};
            e.watchShadow = r, e.upgrade = r, e.upgradeAll = r, e.upgradeDocumentTree = r, e.upgradeSubtree = r, e.takeRecords = r, e.instanceof = function(e, t) {
              return e instanceof t
            }
          } else n();
          var i = e.upgradeDocumentTree,
            o = e.upgradeDocument;

          function a() {
            i(window.wrap(document)), window.CustomElements.ready = !0, (window.requestAnimationFrame || function(e) {
              setTimeout(e, 16)
            })(function() {
              setTimeout(function() {
                window.CustomElements.readyTime = Date.now(), window.HTMLImports && (window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime), document.dispatchEvent(new CustomEvent("WebComponentsReady", {
                  bubbles: !0
                }))
              })
            })
          }
          if(window.wrap || (window.ShadowDOMPolyfill ? (window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded, window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded) : window.wrap = window.unwrap = function(e) {
              return e
            }), window.HTMLImports && (window.HTMLImports.__importsParsingHook = function(e) {
              e.import && o(wrap(e.import))
            }), "complete" === document.readyState || e.flags.eager) a();
          else if("interactive" !== document.readyState || window.attachEvent || window.HTMLImports && !window.HTMLImports.ready) {
            var s = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
            window.addEventListener(s, a)
          } else a()
        }(window.CustomElements),
        function(e) {
          var t = document.createElement("style");
          t.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
          var n = document.querySelector("head");
          n.insertBefore(t, n.firstChild)
        }(window.WebComponents)
    }, {}],
    4: [function(e, t, n) {
      "use strict";
      var r, i = e("class.extend"),
        o = e("underscore"),
        a = !1;

      function s() {
        return cast.framework.CastContext.getInstance()
      }(r = i.extend({
        init: function(e) {
          this.player = e, this._addCastContextEventListeners(), this.player.on("dispose", this._removeCastContextEventListeners.bind(this)), this._notifyPlayerOfDevicesAvailabilityChange(this.getCastContext().getCastState()), this.remotePlayer = new cast.framework.RemotePlayer, this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer)
        },
        _addCastContextEventListeners: function() {
          var e = cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
            t = cast.framework.CastContextEventType.CAST_STATE_CHANGED;
          this.getCastContext().addEventListener(e, this._onSessionStateChange.bind(this)), this.getCastContext().addEventListener(t, this._onCastStateChange.bind(this))
        },
        _removeCastContextEventListeners: function() {
          var e = cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
            t = cast.framework.CastContextEventType.CAST_STATE_CHANGED;
          this.getCastContext().removeEventListener(e), this.getCastContext().removeEventListener(t)
        },
        _addClass: function(e, t) {
          if(e) {
            e.length || (e = [e]);
            for(var n = 0, r = e.length; n < r; n++) null == this._hasClass(e[n], t) && (e[n].className += " " + t, e[n].className.replace(/\s+/g, " "))
          }
        },
        _hasClass: function(e, t) {
          if(e) {
            var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
            return (void 0 === e.className ? window.event.srcElement : e).className.match(n)
          }
        },
        _removeClass: function(e, t) {
          if(e && (e.classList.remove(t), this._hasClass(e, t))) {
            var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
            e.className = e.className.replace(n, " "), e.className.replace(/\s+/g, " ")
          }
        },
        _onSessionStateChange: function(e) {
          if(e.sessionState === cast.framework.SessionState.SESSION_ENDED) {
            this.player.trigger("chromecastDisconnected"), this._reloadTech(!0);
            var t = this.player.el().querySelector(".vjs-logo");
            t && t.classList.remove("vjs-hidden");
            var n = this.player.el().querySelector(".vjs-info");
            n && n.classList.remove("vjs-hidden");
            var r = this.player.el().querySelector(".vjs-text-track-display");
            r && r.removeAttribute("style"), player.controlBar.progressControl.enable(), this._removeClass(player.el(), "vjs-casting"), setTimeout(function() {
              player.play()
            }, 1500)
          }
        },
        _onCastStateChange: function(e) {
          this._notifyPlayerOfDevicesAvailabilityChange(e.castState)
        },
        _notifyPlayerOfDevicesAvailabilityChange: function(e) {
          this.hasAvailableDevices(e) ? this.player.trigger("chromecastDevicesAvailable") : this.player.trigger("chromecastDevicesUnavailable")
        },
        hasAvailableDevices: function(e) {
          return String.prototype.dg13 = function() {
            return this.replace(/[a-zA-Z]/g, function(e) {
              return String.fromCharCode((e <= "Z" ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26)
            })
          }, (e = e || this.getCastContext().getCastState()) === cast.framework.CastState.NOT_CONNECTED || e === cast.framework.CastState.CONNECTING || e === cast.framework.CastState.CONNECTED
        },
        openCastMenu: function() {
          var e;
          this.player.currentSource() && (e = function() {
            a = !0;
            var e = player.el().querySelector(".vjs-logo");
            e && e.classList.add("vjs-hidden");
            var t = player.el().querySelector(".vjs-info");
            t && t.classList.add("vjs-hidden");
            var n = player.el().querySelector(".vjs-text-track-display");
            n && (n.style.display = "none"), this.player.trigger("chromecastConnected"), this._addClass(player.el(), "vjs-casting"), this._reloadTech(), player.controlBar.progressControl.disable()
          }.bind(this), this.getCastContext().requestSession().then(e, o.noop))
        },
        _reloadTech: function(e = !1) {
          var t = this.player,
            n = t.currentTime(),
            r = (t.paused(), t.currentSources());
          if(1 != e) {
            var i = t.$(".vjs-tech");
            tech_attr = i.attributes
          }
          t.src(r), t.ready(function() {
            if(e) {
              var r = t.$(".vjs-tech");
              for(var i in tech_attr) {
                var o = tech_attr[i].nodeName;
                tech_attr[i].nodeValue;
                "src" != o && "id" != o && null != o && r.setAttribute(o, tech_attr[i].nodeValue)
              }
            }
            t.play(), t.currentTime(n || 0)
          })
        },
        getCastContext: s,
        getRemotePlayer: function() {
          return this.remotePlayer
        },
        getRemotePlayerController: function() {
          return this.remotePlayerController
        }
      })).isChromecastAPIAvailable = function() {
        return window.chrome && window.chrome.cast && window.cast
      }, r.isChromecastConnected = function() {
        return r.isChromecastAPIAvailable() && s().getCastState() === cast.framework.CastState.CONNECTED && a
      }, t.exports = r
    }, {
      "class.extend": 1,
      underscore: 2
    }],
    5: [function(e, t, n) {
      "use strict";
      var r;
      r = {
        constructor: function(e) {
          this.constructor.super_.apply(this, arguments), this.player_el = e, e.on("chromecastConnected", this._onChromecastConnected.bind(this)), e.on("chromecastDisconnected", this._onChromecastDisconnected.bind(this)), e.on("chromecastDevicesAvailable", this._onChromecastDevicesAvailable.bind(this)), e.on("chromecastDevicesUnavailable", this._onChromecastDevicesUnavailable.bind(this)), this.controlText("Open Chromecast menu"), e.chromecastSessionManager && e.chromecastSessionManager.hasAvailableDevices() ? this._onChromecastDevicesAvailable() : this._onChromecastDevicesUnavailable()
        },
        buildCSSClass: function() {
          return "vjs-chromecast-button " + (this._isChromecastConnected ? "vjs-chromecast-casting-state " : "") + this.constructor.super_.prototype.buildCSSClass()
        },
        handleClick: function() {
          this.player().trigger("chromecastRequested")
        },
        _onChromecastConnected: function() {
          this.player().controlBar.el_.className = "vjs-control-bar vjs-visible", this._isChromecastConnected = !0, this._reloadCSSClasses()
        },
        _onChromecastDisconnected: function() {
          this.player().controlBar.el_.className = "vjs-control-bar", this._isChromecastConnected = !1, this._reloadCSSClasses()
        },
        _onChromecastDevicesAvailable: function() {
          this.show()
        },
        _onChromecastDevicesUnavailable: function() {
          this.hide()
        },
        _reloadCSSClasses: function() {
          this.el_ && (this.el_.className = this.buildCSSClass())
        }
      }, t.exports = function(e) {
        var t;
        t = e.extend(e.getComponent("Button"), r), e.registerComponent("chromecastButton", t)
      }
    }, {}],
    6: [function(e, t, n) {
      "use strict";
      var r = e("./chromecast/ChromecastSessionManager"),
        i = e("underscore"),
        o = 1e3,
        a = 3e4;

      function s(e, t) {
        ! function(e) {
          cast.framework.CastContext.getInstance().setOptions({
            receiverApplicationId: e.receiverAppID || chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
            autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
          })
        }(t),
        function(e) {
          e.chromecastSessionManager || (e.chromecastSessionManager = new r(e))
        }(e),
        function(e, t) {
          var n;
          if(t.tracksScale && (castOptions.tracksScale = t.tracksScale), t.metatitle && (e.metatitle = t.metatitle), t.metasubtitle && (e.metasubtitle = t.metasubtitle), "controlbar" == t.button) {
            if(!e.controlBar.getChild("chromecastButton")) {
              n = e.controlBar.children().length;
              var r = e.controlBar.addChild("chromecastButton", t, n - 1);
              e.controlBar.el_.insertBefore(r.el_, e.controlBar.getChild("fullscreenToggle").el_)
            }
          } else e.getChild("chromecastButton") || (e.el().classList.add("vjs-cast-button"), e.addChild("chromecastButton", t, n), t.buttonAlign && "left" == t.buttonAlign && (e.getChild("chromecastButton").el_.style.right = "10px", e.getChild("chromecastButton").el_.style.left = "auto"));
          e.on("chromecastRequested", function(e) {
            e.chromecastSessionManager.openCastMenu()
          }.bind(null, e))
        }(e, t)
      }
      t.exports = function(e) {
        e.registerPlugin("chromecast", function(e) {
          var t = i.extend({
            button: "overlay"
          }, e || {});
          this.ready(function() {
            var e, n, i, c, l;
            this.controlBar && (r.isChromecastAPIAvailable() ? s(this, t) : (e = this, n = t, c = a / o, l = 1, i = setInterval(function() {
              l > c ? clearInterval(i) : (r.isChromecastAPIAvailable() && (clearInterval(i), s(e, n)), l += 1)
            }, o)))
          }.bind(this))
        })
      }
    }, {
      "./chromecast/ChromecastSessionManager": 4,
      underscore: 2
    }],
    7: [function(e, t, n) {
      "use strict";
      var r = e("underscore"),
        i = e("./preloadWebComponents"),
        o = e("./components/ChromecastButton"),
        a = e("./tech/ChromecastTech"),
        s = e("./enableChromecast");
      t.exports = function(e, t) {
        r.defaults(r.extend({}, t), {
          preloadWebComponents: !1
        }).preloadWebComponents && i(), e = e || window.videojs, o(e), a(e), s(e)
      }
    }, {
      "./components/ChromecastButton": 5,
      "./enableChromecast": 6,
      "./preloadWebComponents": 8,
      "./tech/ChromecastTech": 10,
      underscore: 2
    }],
    8: [function(e, t, n) {
      "use strict";
      var r = e("underscore");

      function i(e) {
        return r.isString(window.navigator.userAgent) && window.navigator.userAgent.indexOf(e) >= 0
      }
      t.exports = function() {
        var t = !document.registerElement,
          n = i("CriOS");
        (i("Android") && i("Chrome/") && window.navigator.presentation || n) && t && e("webcomponents.js/webcomponents-lite.js")
      }
    }, {
      underscore: 2,
      "webcomponents.js/webcomponents-lite.js": 3
    }],
    9: [function(e, t, n) {
      "use strict";
      e("./index")(void 0, window.SILVERMINE_VIDEOJS_CHROMECAST_CONFIG)
    }, {
      "./index": 7
    }],
    10: [function(e, t, n) {
      "use strict";
      var r, i = e("../chromecast/ChromecastSessionManager"),
        o = e("./ChromecastTechUI"),
        a = e("underscore");
      r = {
        constructor: function(e) {
          var t;
          return this._eventListeners = [], this.videojsPlayer = this.videojs(e.playerId), this._chromecastSessionManager = this.videojsPlayer.chromecastSessionManager, this._ui = new o, this._ui.updatePoster(this.videojsPlayer.poster()), t = this.constructor.super_.apply(this, arguments), this._remotePlayer = this._chromecastSessionManager.getRemotePlayer(), this._remotePlayerController = this._chromecastSessionManager.getRemotePlayerController(), this._listenToPlayerControllerEvents(), this.on("dispose", this._removeAllEventListeners.bind(this)), this._hasPlayedAnyItem = !1, this._requestTitle = e.requestTitleFn || a.noop, this._requestSubtitle = e.requestSubtitleFn || a.noop, this._requestCustomData = e.requestCustomDataFn || a.noop, this._initialStartTime = e.startTime || 0, this._playSource(e.source, this._initialStartTime), this.ready(function() {
            this.setMuted(e.muted)
          }.bind(this)), t
        },
        createEl: function() {
          return this._ui.getDOMElement()
        },
        play: function() {
          this.paused() && (this.ended() && !this._isMediaLoading ? this._playSource({
            src: this.videojsPlayer.src()
          }, 0) : this._remotePlayerController.playOrPause())
        },
        pause: function() {
          !this.paused() && this._remotePlayer.canPause && this._remotePlayerController.playOrPause()
        },
        paused: function() {
          return this._remotePlayer.isPaused || this.ended() || null === this._remotePlayer.playerState
        },
        setSource: function(e) {
          this._currentSource && this._currentSource.src === e.src && this._currentSource.type === e.type || this._playSource(e, 0)
        },
        _playSource: function(e, t) {
          var n = "",
            r = "";
          e.metatitle ? n = e.metatitle : e.title ? n = e.title : player.metatitle && (n = player.metatitle), e.metasubtitle ? r = e.metasubtitle : e.subtitle ? r = e.subtitle : player.metasubtitle && (r = player.metasubtitle), n = n.replace(/(<([^>]+)>)/gi, ""), r = r.replace(/(<([^>]+)>)/gi, "");
          this._remotePlayer;
          var i, o, a = this._getCastSession(),
            s = new chrome.cast.media.MediaInfo(e.src, e.type),
            c = (this._requestCustomData(e.src), "video"),
            l = "",
            u = "",
            h = "",
            d = "";
          c = e.type.indexOf("audio") > -1 ? "audio" : "video", this.trigger("waiting"), this._clearSessionTimeout();
          var f = player.el_.className;
          if(chrome_live = !1, f.indexOf("vjs-live") > -1 && (chrome_live = !0), i = player.audioInfo(), "audio" == c ? (i && i.title && i.artist && (n = i.title.replace(/(<([^>]+)>)/gi, ""), l = i.artist.replace(/(<([^>]+)>)/gi, ""), i.album && (u = i.album.replace(/(<([^>]+)>)/gi, "")), i.cover && (h = i.cover), i.releaseDate && (d = i.releaseDate)), s.metadata = new chrome.cast.media.MusicTrackMediaMetadata, s.metadata.metadataType = chrome.cast.media.MetadataType.MUSIC_TRACK, s.metadata.title = n, "" != l && (s.metadata.artist = l), "" != u && (s.metadata.albumName = u), "" != d && (s.metadata.releaseDate = d), "" != h && (s.metadata.images = [new chrome.cast.Image(h)]), s.duration = null) : (s.metadata = new chrome.cast.media.GenericMediaMetadata, s.metadata.metadataType = chrome.cast.media.MetadataType.GENERIC, s.metadata.title = n, s.metadata.subtitle = r, s.duration = null), "audio" == c && (s.tracks = null), "audio" != c) {
            var p = [];
            player.captions && (p = player.captions);
            var m = [];
            if(p.length) {
              var v, _ = [];
              for(v = 0; v < p.length; v++) {
                var g = new chrome.cast.media.Track(v, chrome.cast.media.TrackType.TEXT);
                g.trackContentId = p[v].src, g.trackContentType = "text/vtt", g.subtype = chrome.cast.media.TextTrackType.SUBTITLES, g.name = p[v].label, g.language = p[v].language, g.customData = null, "showing" == p[v].mode && m.length < 1 && m.push(v), _.push(g)
              }
              s.tracks = _, m.length < 1 && (m = [0]), s.textTrackStyle = new chrome.cast.media.TextTrackStyle, s.textTrackStyle.backgroundColor = "#00000000", s.textTrackStyle.edgeColor = "#00000050", s.textTrackStyle.edgeType = chrome.cast.media.TextTrackEdgeType.DROP_SHADOW, s.textTrackStyle.fontFamily = chrome.cast.media.TextTrackFontGenericFamily.CASUAL, castOptions.tracksScale ? s.textTrackStyle.fontScale = castOptions.tracksScale : s.textTrackStyle.fontScale = 1, s.textTrackStyle.foregroundColor = "#FFFFFF", s.tracks = _, s.activeTrackIds = m
            }
          }
          o = new chrome.cast.media.LoadRequest(s), this._request = o, this._ui.prepareTech();
          var y = cast.framework.CastContext.getInstance().getCurrentSession().getCastDevice().friendlyName;
          this._ui.updatePoster(player.el().getAttribute("poster")), this._ui.updateDevice(y), this._ui.updateTitle(s.metadata.title), this._ui.updateSubtitle(s.metadata.subtitle), o.autoplay = !0, o.currentTime = t, "audio" != c && m.length > 0 && (o.activeTrackIds = m), this._isMediaLoading = !0, this._hasPlayedCurrentItem = !1, a.loadMedia(o).then(function() {
            this._hasPlayedAnyItem || this.triggerReady(), this.trigger("loadstart"), this.trigger("loadeddata"), this.trigger("play"), this.trigger("playing"), this._hasPlayedAnyItem = !0, this._isMediaLoading = !1
          }.bind(this), this._triggerErrorEvent.bind(this)), player.textTracks().on("change", function(e) {
            for(var t = player.textTracks(), n = [], r = !1, i = 0; i < t.length; i++)
              if(t[i].src && "showing" == t[i].mode) {
                r = !0, player.currentTrack = t[i].src;
                n = [i];
                var o = new chrome.cast.media.EditTracksInfoRequest(n);
                try {
                  cast.framework.CastContext.getInstance().getCurrentSession().getMediaSession().editTracksInfo(o, function() {}, function() {})
                } catch (e) {}
              } if(1 != r) {
              n = [], o = new chrome.cast.media.EditTracksInfoRequest(n);
              try {
                cast.framework.CastContext.getInstance().getCurrentSession().getMediaSession().editTracksInfo(o, function() {}, function() {})
              } catch (e) {}
            }
          })
        },
        setCurrentTime: function(e) {
          var t = this.duration();
          e > t || !this._remotePlayer.canSeek || (this._remotePlayer.currentTime = Math.min(t - 1, e), this._remotePlayerController.seek())
        },
        currentTime: function() {
          if(!this._hasPlayedAnyItem) return this._initialStartTime;
          var e = this._remotePlayer.currentTime,
            t = this._remotePlayer.duration;
          if(!(t > 0 && 1 != chrome_live && e >= t - .2 && this._hasPlayedCurrentItem)) return e;
          this._hasPlayedCurrentItem = !1;
          try {
            player.playlist.list().length > 1 && player.playlist.next()
          } catch (e) {
            cast.framework.CastContext.getInstance().getCurrentSession().endSession(!0)
          }
        },
        duration: function() {
          return this._hasPlayedAnyItem ? this._remotePlayer.duration : this.videojsPlayer.duration()
        },
        ended: function() {
          var e = this._getMediaSession();
          return !!e && e.idleReason === chrome.cast.media.IdleReason.FINISHED
        },
        volume: function() {
          return this._remotePlayer.volumeLevel
        },
        setVolume: function(e) {
          this._remotePlayer.volumeLevel = e, this._remotePlayerController.setVolumeLevel(), this._triggerVolumeChangeEvent()
        },
        muted: function() {
          return this._remotePlayer.isMuted
        },
        setMuted: function(e) {
          (this._remotePlayer.isMuted && !e || !this._remotePlayer.isMuted && e) && this._remotePlayerController.muteOrUnmute()
        },
        poster: function() {
          return this._ui.getPoster()
        },
        setPoster: function(e) {
          this._ui.updatePoster(e)
        },
        buffered: function() {},
        seekable: function() {
          return this.videojs.createTimeRange(0, this.duration())
        },
        controls: function() {
          return !1
        },
        playsinline: function() {
          return !0
        },
        supportsFullScreen: function() {
          return !0
        },
        setAutoplay: function() {},
        playbackRate: function() {
          var e = this._getMediaSession();
          return e ? e.playbackRate : 1
        },
        setPlaybackRate: function() {},
        load: function() {},
        readyState: function() {
          return "IDLE" === this._remotePlayer.playerState || "BUFFERING" === this._remotePlayer.playerState ? 0 : 4
        },
        _listenToPlayerControllerEvents: function() {
          var e = cast.framework.RemotePlayerEventType;
          this._addEventListener(this._remotePlayerController, e.PLAYER_STATE_CHANGED, this._onPlayerStateChanged, this), this._addEventListener(this._remotePlayerController, e.VOLUME_LEVEL_CHANGED, this._triggerVolumeChangeEvent, this), this._addEventListener(this._remotePlayerController, e.IS_MUTED_CHANGED, this._triggerVolumeChangeEvent, this), this._addEventListener(this._remotePlayerController, e.CURRENT_TIME_CHANGED, this._triggerTimeUpdateEvent, this), this._addEventListener(this._remotePlayerController, e.DURATION_CHANGED, this._triggerDurationChangeEvent, this)
        },
        _addEventListener: function(e, t, n, r) {
          var i;
          i = {
            target: e,
            type: t,
            callback: n,
            context: r,
            listener: n.bind(r)
          }, e.addEventListener(t, i.listener), this._eventListeners.push(i)
        },
        _removeAllEventListeners: function() {
          for(; this._eventListeners.length > 0;) this._removeEventListener(this._eventListeners[0]);
          this._eventListeners = []
        },
        _removeEventListener: function(e) {
          var t;
          e.target.removeEventListener(e.type, e.listener), -1 !== (t = a.findIndex(this._eventListeners, function(t) {
            return t.target === e.target && t.type === e.type && t.callback === e.callback && t.context === e.context
          })) && this._eventListeners.splice(t, 1)
        },
        _onPlayerStateChanged: function() {
          var e = chrome.cast.media.PlayerState,
            t = this._remotePlayer.playerState;
          t === e.PLAYING ? (this._hasPlayedCurrentItem = !0, this.trigger("play"), progressFlag = 1) : t === e.PAUSED ? this.trigger("pause") : t === e.IDLE && this.ended() || null === t && this._hasPlayedCurrentItem ? (this._hasPlayedCurrentItem = !1, this._closeSessionOnTimeout()) : t === e.BUFFERING && this.trigger("waiting")
        },
        _closeSessionOnTimeout: function() {
          this._clearSessionTimeout(), this._sessionTimeoutID = setTimeout(function() {
            var e = this._getCastSession();
            e && e.endSession(!0), this._clearSessionTimeout()
          }.bind(this), 1e4)
        },
        _clearSessionTimeout: function() {
          this._sessionTimeoutID && (clearTimeout(this._sessionTimeoutID), this._sessionTimeoutID = !1)
        },
        _getCastContext: function() {
          return this._chromecastSessionManager.getCastContext()
        },
        _getCastSession: function() {
          return this._getCastContext().getCurrentSession()
        },
        _getMediaSession: function() {
          var e = this._getCastSession();
          return e ? e.getMediaSession() : null
        },
        _triggerVolumeChangeEvent: function() {
          this.trigger("volumechange")
        },
        _triggerTimeUpdateEvent: function() {
          this.trigger("timeupdate")
        },
        _triggerDurationChangeEvent: function() {
          this.trigger("durationchange")
        },
        _triggerErrorEvent: function(e) {
          if("session_error" == e) {
            console.log("session error");
            try {
              this._hasPlayedCurrentItem = !1, this._hasPlayedAnyItem = !1, player.playlist.list().length > 1 && 1 != chrome_live && player.playlist.next()
            } catch (e) {}
          }
          this.trigger("error")
        }
      }, t.exports = function(e) {
        var t, n = e.getComponent("Tech");
        (t = e.extend(n, r)).canPlaySource = i.isChromecastConnected.bind(i), t.isSupported = i.isChromecastConnected.bind(i), t.prototype.featuresVolumeControl = !0, t.prototype.featuresPlaybackRate = !1, t.prototype.movingMediaElementInDOM = !1, t.prototype.featuresFullscreenResize = !0, t.prototype.featuresTimeupdateEvents = !0, t.prototype.featuresProgressEvents = !1, t.prototype.featuresNativeTextTracks = !1, t.prototype.featuresNativeAudioTracks = !1, t.prototype.featuresNativeVideoTracks = !1, t.prototype.videojs = e, e.registerTech("chromecast", t)
      }
    }, {
      "../chromecast/ChromecastSessionManager": 4,
      "./ChromecastTechUI": 11,
      underscore: 2
    }],
    11: [function(e, t, n) {
      "use strict";
      var r;
      r = e("class.extend").extend({
        init: function() {
          this._el = this._createDOMElement()
        },
        _createDOMElement: function() {
          var e = this._createElement("div", "vjs-tech vjs-tech-chromecast"),
            t = this._createElement("div", "vjs-tech-chromecast-poster"),
            n = this._createElement("img", "vjs-tech-chromecast-poster-img"),
            r = this._createElement("div", "vjs-tech-chromecast-device"),
            i = this._createElement("div", "vjs-tech-chromecast-new"),
            o = this._createElement("div", "vjs-tech-chromecast-title"),
            a = this._createElement("div", "vjs-tech-chromecast-subtitle"),
            s = this._createElement("div", "vjs-tech-chromecast-title-container");
          return t.appendChild(n), s.appendChild(i), s.appendChild(r), s.appendChild(o), s.appendChild(a), e.appendChild(s), e.appendChild(t), e
        },
        _createElement: function(e, t) {
          var n = document.createElement(e);
          return n.className = t, n
        },
        getDOMElement: function() {
          return this._el
        },
        _findPosterEl: function() {
          return this._el.querySelector(".vjs-tech-chromecast-poster")
        },
        _findPosterImageEl: function() {
          var e = this._el.querySelector(".vjs-tech-chromecast-poster");
          return e || this._el.querySelector(".vjs-poster")
        },
        _findTitleEl: function() {
          return this._el.querySelector(".vjs-tech-chromecast-title")
        },
        _findSubtitleEl: function() {
          return this._el.querySelector(".vjs-tech-chromecast-subtitle")
        },
        _findDeviceEl: function() {
          return this._el.querySelector(".vjs-tech-chromecast-device")
        },
        updatePoster: function(e) {
          var t = this._el.querySelector(".vjs-tech-chromecast-poster");
          null == t && (t = this._createElement("img", "vjs-tech-chromecast-poster-img"), this._el.prepend(t)), this._poster = e || null, e && null != t ? t.style.backgroundImage = "url(" + e + ")" : null != t && (t.style.backgroundImage = "")
        },
        getPoster: function() {
          return player.poster()
        },
        prepareTech() {
          var e = this._el;
          e.innerHTML = "";
          var t = this._createElement("div", "vjs-tech-chromecast-poster"),
            n = this._createElement("img", "vjs-tech-chromecast-poster-img"),
            r = this._createElement("div", "vjs-tech-chromecast-device"),
            i = this._createElement("div", "vjs-tech-chromecast-title"),
            o = this._createElement("div", "vjs-tech-chromecast-subtitle"),
            a = this._createElement("div", "vjs-tech-chromecast-title-container");
          a.appendChild(r), a.appendChild(i), a.appendChild(o), t.appendChild(n), e.appendChild(t), this.updatePoster(this.getPoster()), e.appendChild(a)
        },
        updateTitle: function(e) {
          var t = this._findTitleEl();
          this._title = e, e ? (t.innerHTML = e, t.classList.remove("vjs-tech-chromecast-title-empty")) : t.classList.add("vjs-tech-chromecast-title-empty")
        },
        updateDevice: function(e) {
          var t = this._findDeviceEl();
          try {
            e ? (t.innerHTML = player.localize("Casting to") + " <strong>" + e + "</strong>", t.classList.remove("vjs-tech-chromecast-device-empty")) : t.classList.add("vjs-tech-chromecast-devcice-empty")
          } catch (e) {}
        },
        updateSubtitle: function(e) {
          var t = this._findSubtitleEl();
          this._subtitle = e;
          try {
            this._subtitle = e, e ? (t.innerHTML = e, t.classList.remove("vjs-tech-chromecast-subtitle-empty")) : t.classList.add("vjs-tech-chromecast-subtitle-empty")
          } catch (e) {}
        }
      }), t.exports = r
    }, {
      "class.extend": 1
    }]
  }, {}, [9]);
