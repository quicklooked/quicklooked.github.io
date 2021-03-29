(self.webpackChunklite = self.webpackChunklite || []).push([
	[118], {
		8538: (e, n, r) => {
			"use strict";
			r.r(n), r.d(n, {
				default: () => P
			});
			var t = r(94725),
				o = r(67294),
				i = r(12291),
				s = r(86280),
				a = r(72351),
				u = r(52837),
				c = r(61250),
				l = r(31235),
				f = r(31117),
				d = r(27737),
				v = r(67616),
				p = r(29035),
				g = r(63038),
				m = r.n(g),
				h = r(59713),
				_ = r.n(h),
				b = r(44059),
				w = r(14034);

			function E() {
				for(var e = new w.y, n = arguments.length, r = new Array(n), t = 0; t < n; t++) r[t] = arguments[t];
				if(0 === r.length) return e;
				var o = r.map((function() {
					return []
				}));
				return r.forEach((function(n, r) {
					n.observe((function(n) {
						o[r].push(n), o.every((function(e) {
							return e.length > 0
						})) && e.set(o.map((function(e) {
							return e.shift()
						})))
					}))
				})), e
			}
			var T = function(e) {
				return function(n) {
					return _()({}, e, n)
				}
			};
			const P = function() {
				var e, n, r, g, h, _, w, P, A, M, S, y, C, k, L;
				return o.useEffect((function() {
					var e = E(v.sY, v.wZ, v.vY).map((function(e) {
							var n = m()(e, 3),
								r = n[0],
								t = n[1],
								o = n[2];
							return {
								responseEndToLCP: new v.jb(r.response.end, t.end),
								responseEndToFCP: new v.jb(r.response.end, o.end)
							}
						})),
						n = E(v.sY, v.qH.map(T("fid")), v.vY.map(T("fcp")), v.wZ.map(T("lcp")), e);
					v.cA.observe((function(e) {
						e || n.observe((function(e) {
							var n = e.reduce((function(e, n) {
									return Object.assign(e, n)
								}), {}),
								r = Object.keys(n).reduce((function(e, r) {
									var t = n[r].duration;
									return e[r] = t % 1 == 0 ? t : Number(t.toFixed(1)), e
								}), {}),
								t = document.children[0],
								o = {
									html: null == t ? void 0 : t.innerHTML.length,
									redux: JSON.stringify(window.__PRELOADED_STATE__).length,
									apollo: JSON.stringify(window.__APOLLO_STATE__).length
								};
							b.t.log("client hydrated", {
								perf: r,
								sizes: o
							})
						}))
					})), v.Df.observe((function(e) {
						return b.t.log("client resource sizes", {
							resources: e
						})
					}))
				}), []), e = (0, i.v9)((function(e) {
					return e.tracing.tracer
				})), n = (0, i.v9)((function(e) {
					return e.tracing.originalSpan
				})), r = (0, s.cD)(), g = r.loading, h = r.isBot, _ = (0, i.v9)((function(e) {
					return e.client.routingEntity
				})), w = (0, i.v9)((function(e) {
					return e.auroraPage.isAuroraPageEnabled
				})), P = (0, s.rZ)(), A = P.loading, M = P.viewerId, S = (0, l.xg)(), y = (0, l.f$)(), C = (0, i.I0)(), k = (0, c.dh)(), L = (0, a.Av)(), o.useEffect((function() {
					var r;
					if(e && L && !g && !h && !A && M) {
						var o = k(window.location.pathname),
							i = null !== (r = null == o ? void 0 : o.route.metricName) && void 0 !== r ? r : "unidentified",
							s = (0, d.j)(M),
							a = (0, p.ic)(navigator.userAgent),
							c = [];
						S ? c.push("edge_cache_enabled") : y && c.push("edge_cache_control");
						var l = c.join(","),
							m = {
								"user.logged_in": s,
								"user.experiment": l,
								"device.mobile_or_tablet": a,
								"req.route_name": i,
								"req.route": i,
								"req.router": (null == _ ? void 0 : _.type) || u.Cr.DEFAULT
							},
							b = {
								auroraPage: w,
								loggedIn: s,
								mobileOrTablet: a,
								experiment: l,
								route: i
							},
							E = function(e) {
								return Math.round(1e3 * e)
							},
							T = function(n, r, t, o) {
								var i = t.start,
									s = t.end,
									a = e.startSpan("timing.".concat(r), {
										childOf: n,
										tags: m
									}).setBeginMicros(E(i)).setEndMicros(E(s));
								return null != o && o(a), a.finish(), a
							};
						v.sY.observe((function(r) {
							var o, i, s, a;
							L.reportRender(b, r);
							var u = e.startSpan("timing.navigation", {
								references: n ? [(0, t.followsFrom)(n)] : void 0,
								tags: m
							}).setBeginMicros(E(r.load.start)).setEndMicros(E(r.load.end)).log({
								redirect_count: null !== (o = null === (i = window) || void 0 === i || null === (s = i.performance) || void 0 === s || null === (a = s.navigation) || void 0 === a ? void 0 : a.redirectCount) && void 0 !== o ? o : 0
							});
							T(u, "beforeDomainLookup", r.before_domain_lookup), T(u, "domainLookup", r.domain_lookup), T(u, "connect", r.connect), T(u, "request", r.request), T(u, "response", r.response), T(u, "processing", r.processing);
							var c = r.overall_fcp,
								l = r.client,
								d = r.render;
							null != c && T(u, "firstContentfulPaint", c), null != l && T(u, "client", l, (function(e) {
								null != d && T(e, "render", d)
							})), u.finish(), C((0, f.YU)(u.generateTraceURL()))
						})), v.vY.observe((function(r) {
							L.reportFirstContentfulPaint(b, r), e.startSpan("timing.firstContentfulPaint.v2", {
								references: n ? [(0, t.followsFrom)(n)] : void 0,
								tags: m
							}).setBeginMicros(E(r.start)).setEndMicros(E(r.end)).finish()
						})), v.wZ.observe((function(r) {
							L.reportLargestContentfulPaint(b, r), e.startSpan("timing.largestContentfulPaint", {
								references: n ? [(0, t.followsFrom)(n)] : void 0,
								tags: m
							}).setBeginMicros(E(r.start)).setEndMicros(E(r.end)).finish()
						})), v.yI.observe((function(e) {
							L.reportCumulativeLayoutShift(b, e)
						})), v.cA.observe((function(e) {
							e && L.reportUnsupportedPerfObserver(b)
						})), v.qH.observe((function(r) {
							L.reportInput(b, r), e.startSpan("timing.input.first.delay", {
								references: n ? [(0, t.followsFrom)(n)] : void 0,
								tags: m
							}).setBeginMicros(E(r.start)).setEndMicros(E(r.end)).finish()
						}))
					}
				}), [e, A, M, g, h]), null
			}
		},
		72864: (e, n, r) => {
			"use strict";
			r.r(n), r.d(n, {
				init: () => i,
				extractSpan: () => s
			});
			var t = r(45573),
				o = r(94725),
				i = function(e) {
					var n = e.name,
						r = e.host,
						i = e.token,
						s = e.appVersion,
						a = new t.Tracer({
							component_name: n,
							xhr_instrumentation: !1,
							access_token: i,
							collector_host: r,
							default_span_tags: {
								"component.version": s
							}
						});
					return (0, o.initGlobalTracer)(a), a
				},
				s = function(e, n) {
					if(n) return e.extract(o.FORMAT_HTTP_HEADERS, n)
				}
		}
	}
]);
