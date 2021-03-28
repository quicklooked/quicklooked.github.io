(self.webpackChunklite = self.webpackChunklite || []).push([
	[8499], {
		50093: (e, n, t) => {
			"use strict";
			t.d(n, {
				oQ: () => v,
				Pl: () => x,
				qj: () => _
			});
			var r = t(67154),
				i = t.n(r),
				o = t(67294),
				a = t(12291),
				l = t(85740),
				c = t(7530),
				u = t(64504),
				s = t(28309);

			function d() {
				return (d = Object.assign || function(e) {
					for(var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for(var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			var m = o.createElement("g", {
					opacity: .8,
					clipPath: "url(#trending-topic_svg__clip0)",
					stroke: "#000"
				}, o.createElement("circle", {
					cx: 10,
					cy: 10,
					r: 9.5
				}), o.createElement("path", {
					d: "M1.46 13.57l4.47-4.48m.04-.01l3.67 3.66m.03 0l5.1-5.1m-2.15-.83h3m0 0v3",
					strokeLinecap: "round"
				})),
				p = o.createElement("defs", null, o.createElement("clipPath", {
					id: "trending-topic_svg__clip0"
				}, o.createElement("path", {
					fill: "#fff",
					d: "M0 0h20v20H0z"
				})));
			const h = function(e) {
				return o.createElement("svg", d({
					width: 20,
					height: 20,
					fill: "none"
				}, e), m, p)
			};
			var f = t(27952),
				g = function() {
					return {
						whiteSpace: "nowrap"
					}
				},
				E = function() {
					return {
						position: "absolute",
						left: "-10px",
						top: "-10px",
						borderRadius: "50%",
						backgroundColor: "white",
						border: "3px solid white"
					}
				},
				v = "36px",
				x = function(e) {
					var n = e.topic,
						t = e.isTrending,
						r = void 0 !== t && t,
						d = Boolean((0, l.P5)("enable_hot_topics")),
						m = (0, s.Iq)(),
						p = (0, a.v9)((function(e) {
							return {
								authDomain: e.config.authDomain
							}
						})).authDomain,
						v = (0, f.KL9)(p, n.slug),
						x = (0, f.Ih$)(n.slug, p),
						_ = n.slug ? d ? x : v : "#";
					return o.createElement(c.rU, {
						href: _
					}, o.createElement(c.xu, i()({
						padding: "8px 16px",
						marginRight: "8px",
						backgroundColor: "BASE_NORMAL",
						borderRadius: "100px",
						position: "relative"
					}, r && {
						marginBottom: "10px"
					}), r && o.createElement("div", {
						className: m(E)
					}, o.createElement(h, null)), o.createElement(u.F, {
						scale: "M",
						color: "DARKER"
					}, o.createElement("span", {
						className: m(g)
					}, n.name))))
				},
				_ = function() {
					return o.createElement(c.xu, {
						marginRight: "8px",
						height: v,
						width: "100px",
						backgroundColor: "BASE_NORMAL",
						borderRadius: "100px"
					})
				}
		},
		75670: (e, n, t) => {
			"use strict";
			t.d(n, {
				F: () => h
			});
			var r = t(28655),
				i = t.n(r),
				o = t(98913),
				a = t.n(o),
				l = t(71439),
				c = t(46829),
				u = t(67294),
				s = t(50093),
				d = t(7530);

			function m() {
				var e = i()(["\n  query HomepageTopicsQuery {\n    viewer {\n      id\n      followedTopics {\n        id\n        name\n        slug\n      }\n    }\n  }\n"]);
				return m = function() {
					return e
				}, e
			}
			var p = (0, l.Ps)(m()),
				h = function() {
					var e, n = (0, c.useQuery)(p, {
							ssr: !1
						}),
						t = n.loading,
						r = n.error,
						i = n.data;
					return r || null != i && i.viewer && !i.viewer.followedTopics.length ? null : u.createElement(d.xu, {
						display: "flex",
						flexWrap: "wrap",
						marginBottom: "20px",
						sm: {
							padding: "0 16px"
						},
						overflow: "hidden",
						maxHeight: s.oQ
					}, t ? a()(8, (function(e) {
						return u.createElement(s.qj, {
							key: "entity-placeholder-".concat(e)
						})
					})) : null == i || null === (e = i.viewer) || void 0 === e ? void 0 : e.followedTopics.map((function(e) {
						return u.createElement(s.Pl, {
							topic: e,
							key: "followed-topic-".concat(e.id)
						})
					})))
				}
		},
		10963: (e, n, t) => {
			"use strict";
			t.d(n, {
				P: () => s,
				u: () => d
			});
			var r = t(98913),
				i = t.n(r),
				o = t(67294),
				a = t(7530),
				l = t(28309),
				c = function() {
					return o.createElement(a.xu, {
						display: "flex",
						flexDirection: "row",
						alignItems: "flex-start",
						justifyContent: "space-between",
						marginBottom: "16px",
						width: "100%"
					}, o.createElement(a.xu, {
						width: "100%"
					}, o.createElement(a.xu, {
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						marginBottom: "20px"
					}, o.createElement(a.xu, {
						height: "20px",
						width: "20px",
						backgroundColor: "BASE_NORMAL",
						borderRadius: "10px",
						marginRight: "8px"
					}), o.createElement(a.xu, {
						height: "8px",
						width: "82px",
						backgroundColor: "BASE_NORMAL"
					})), o.createElement(a.xu, {
						width: "80%",
						height: "16px",
						marginBottom: "12px",
						backgroundColor: "BASE_NORMAL"
					}), o.createElement(a.xu, {
						width: "65%",
						height: "16px",
						marginBottom: "12px",
						backgroundColor: "BASE_NORMAL"
					})), o.createElement(a.xu, {
						height: "133px",
						width: "200px",
						backgroundColor: "BASE_NORMAL"
					}))
				},
				u = {
					"0%": {
						opacity: "0.8"
					},
					"50%": {
						opacity: "0.5"
					},
					"100%": {
						opacity: "0.8"
					}
				},
				s = function() {
					var e = (0, l.om)({
						shimmerKeyframesName: u
					}).shimmerKeyframesName;
					return {
						animation: "".concat(e, " 1.2s ease-in-out infinite")
					}
				},
				d = function(e) {
					var n = e.numPlaceholders,
						t = void 0 === n ? 4 : n,
						r = (0, l.Iq)(),
						a = s();
					return o.createElement("div", {
						className: r((function() {
							return a
						}))
					}, i()(t, (function(e) {
						return o.createElement(c, {
							key: "placeholder-".concat(e)
						})
					})))
				}
		},
		3383: (e, n, t) => {
			"use strict";
			t.d(n, {
				Z: () => p
			});
			var r = t(67294),
				i = t(12291),
				o = t(73882),
				a = t(98281),
				l = t(22091),
				c = t(77714),
				u = t(83249),
				s = t(28309),
				d = t(27952),
				m = function(e) {
					var n = e.clamp,
						t = e.children,
						i = e.rules,
						o = (0, s.Iq)(),
						a = (0, s.Fg)(),
						l = a.newFonts.detail,
						d = [{
							fontFamily: l.family,
							fontWeight: "500"
						}, (0, u.M)({
							fontConfig: l,
							scale: "S"
						}), n ? (0, c.V)({
							clamp: n,
							lineHeight: 16
						}) : void 0, {
							lineHeight: "16px",
							color: a.baseColor.text.normal
						}, i];
					return r.createElement("h4", {
						className: o(d)
					}, t)
				};

			function p(e) {
				var n = e.post,
					t = n.creator,
					c = n.collection,
					u = (0, i.v9)((function(e) {
						return {
							currentLocation: e.navigation.currentLocation,
							authDomain: e.config.authDomain
						}
					})),
					s = u.currentLocation,
					p = u.authDomain;
				if(!t) return null;
				var h, f, g = (0, d.AWr)(t, p),
					E = t.name;
				return null != c && c.id && (null == c ? void 0 : c.name) !== t.name && (h = (0, d.WGd)(c, s), f = c.name), r.createElement(l.xu, {
					display: "flex",
					flexDirection: "row",
					alignItems: "center"
				}, null != c && c.id ? r.createElement(o.v, {
					collection: c,
					size: 20,
					link: !0
				}) : r.createElement(a.ZP, {
					user: t,
					scale: "XXXS",
					link: !0
				}), r.createElement(l.xu, {
					marginLeft: "8px",
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center"
				}, r.createElement(l.rU, {
					href: g
				}, r.createElement(m, {
					clamp: 1,
					rules: {
						paddingRight: "2px"
					}
				}, E)), f && r.createElement(l.xu, {
					display: "flex"
				}, r.createElement(m, {
					rules: {
						paddingRight: "2px",
						color: "#757575"
					}
				}, "in"), r.createElement(l.rU, {
					href: h,
					display: "inline-block"
				}, r.createElement(m, {
					clamp: 1
				}, f)))))
			}
		},
		83850: (e, n, t) => {
			"use strict";
			t.d(n, {
				d: () => s
			});
			var r = t(28655),
				i = t.n(r),
				o = t(71439),
				a = t(73882),
				l = t(98281),
				c = t(27952);

			function u() {
				var e = i()(["\n  fragment PostPreviewAvatar_post on Post {\n    __typename\n    id\n    collection {\n      id\n      name\n      ...CollectionAvatar_collection\n      ...collectionUrl_collection\n    }\n    creator {\n      id\n      username\n      name\n      ...UserAvatar_user\n      ...userUrl_user\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
				return u = function() {
					return e
				}, e
			}
			var s = (0, o.Ps)(u(), a.d, c.nfI, l.WQ, c.$mN)
		},
		4964: (e, n, t) => {
			"use strict";
			t.d(n, {
				SW: () => i,
				oO: () => o,
				hS: () => a
			});
			var r = t(14391),
				i = function(e) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
					if(!e.length) return e;
					for(var t = 5 * Math.floor((new Date).getUTCMinutes() / 5), r = t % e.length, i = [], o = 0; o < n; o++) {
						var a = e[(r + o) % e.length];
						i.push(a)
					}
					return i
				},
				o = function(e) {
					if(!e) return null;
					var n = e.topic,
						t = void 0 === n ? {} : n;
					switch(e.postFeedReason) {
						case r.YV.TAG_IN_INTEREST_GRAPH:
							return "Based on your interests";
						case r.YV.SIMILAR_TO_RECENTLY_VOTED_POSTS:
							return "Based on your claps";
						case r.YV.USER_IN_DEEP_SOCIAL_GRAPH:
							return "From authors youâ€™ve applauded";
						case r.YV.CURATED_IN_TOPIC:
							return (null == t ? void 0 : t.name) || "";
						case r.YV.CURATED_IN_SUGGESTED_TOPIC:
							return null != t && t.name ? "".concat(t.name, ": suggested topic") : null;
						case r.YV.CURATED_IN_POPULAR_TOPIC:
							return null != t && t.name ? "".concat(t.name, ": popular topic") : null;
						case r.YV.COLLABORATIVE_FILTERING:
						case r.YV.SIMILAR_TO_RECENTLY_READ_OR_VOTED:
							return "Based on your reading history";
						case r.YV.PUBLISHED_BY_USER:
						case r.YV.PUBLISHED_BY_COLLECTION:
							return "From your network";
						case r.YV.RECOMMENDED_BY_STAFF:
						case r.YV.RECENT_STAFF_RECOMMENDATION:
							return "Editorsâ€˜ Pick";
						case r.YV.EVERGREEN:
							return "Most Read";
						case r.YV.PERSONALIZED_IN_PREMIUM_TOPIC:
							return "Featured for members";
						case r.YV.RECOMMENDED_BY_USER:
							return "Recommended by people in your network";
						case r.YV.TOP_STORY_ON_QUICKLOOK:
						case r.YV.TOP_POSTS_GLOBALLY:
							return "Popular on Quicklook";
						case r.YV.EXPLORE_POST_UNDER_PRESENTED:
							return "You might like"
					}
					return null
				},
				a = {
					xs: {
						width: 100,
						height: 100
					},
					sm: {
						width: 150,
						height: 100
					},
					md: {
						width: 200,
						height: 134
					},
					lg: {
						width: 200,
						height: 134
					},
					xl: {
						width: 200,
						height: 134
					}
				}
		},
		4224: (e, n, t) => {
			"use strict";
			t.d(n, {
				k: () => o
			});
			var r = t(4964),
				i = t(28309),
				o = function(e) {
					var n = (0, i.Fg)(),
						t = r.hS.xs;
					return e >= n.breakpoints.xl ? t = r.hS.xl : n.breakpoints.lg <= e && e < n.breakpoints.xl ? t = r.hS.lg : n.breakpoints.md <= e && e < n.breakpoints.lg ? t = r.hS.md : n.breakpoints.sm <= e && e < n.breakpoints.md && (t = r.hS.sm), t
				}
		},
		39393: (e, n, t) => {
			"use strict";
			t.d(n, {
				Z: () => s,
				L: () => d
			});
			var r = t(28655),
				i = t.n(r),
				o = t(71439),
				a = t(67294),
				l = t(64504),
				c = t(27390);

			function u() {
				var e = i()(["\n  fragment PostListingReadingTime_post on Post {\n    readingTime\n  }\n"]);
				return u = function() {
					return e
				}, e
			}

			function s(e) {
				var n = e.readingTime,
					t = e.scale,
					r = void 0 === t ? "S" : t;
				return a.createElement(l.F, {
					scale: r,
					tag: "span"
				}, "".concat((0, c.Vd)(n || 0), " min read"))
			}
			var d = (0, o.Ps)(u())
		},
		88065: (e, n, t) => {
			"use strict";
			t.d(n, {
				e: () => r.Z,
				z: () => r.z
			});
			var r = t(86753)
		},
		78820: (e, n, t) => {
			"use strict";
			t.d(n, {
				Zu: () => P,
				n_: () => _,
				xt: () => E,
				KQ: () => v,
				In: () => x,
				PB: () => y
			});
			var r = t(63038),
				i = t.n(r),
				o = t(28655),
				a = t.n(o),
				l = t(46829),
				c = t(71439),
				u = t(67294);

			function s() {
				var e = a()(["\n  mutation postSetPinnedByCreatorAt($postId: ID!, $isPinned: Boolean!) {\n    postSetPinnedByCreatorAt(targetPostId: $postId, isPinned: $isPinned) {\n      __typename\n      ... on Post {\n        id\n        pinnedByCreatorAt\n      }\n    }\n  }\n"]);
				return s = function() {
					return e
				}, e
			}

			function d() {
				var e = a()(["\n  mutation setPinnedAt($postId: ID!, $collectionId: ID!, $pinnedAt: Boolean!) {\n    __typename\n    setPinnedAt(targetPostId: $postId, targetCollectionId: $collectionId, pinnedAt: $pinnedAt) {\n      __typename\n      ... on Post {\n        id\n        collection {\n          id\n        }\n        pendingCollection {\n          id\n        }\n        pinnedAt\n      }\n    }\n  }\n"]);
				return d = function() {
					return e
				}, e
			}
			var m = (0, c.Ps)(d()),
				p = (0, c.Ps)(s()),
				h = t(61250),
				f = t(27952);

			function g() {
				var e = a()(["\n  fragment useIsPinnedInContext_post on Post {\n    id\n    collection {\n      id\n    }\n    pendingCollection {\n      id\n    }\n    pinnedAt\n    pinnedByCreatorAt\n  }\n"]);
				return g = function() {
					return e
				}, e
			}
			var E = (0, c.Ps)(g()),
				v = function(e) {
					var n = e.id,
						t = e.collection,
						r = e.pendingCollection,
						o = e.pinnedAt,
						a = (t || r || {
							id: ""
						}).id,
						c = (0, l.useMutation)(m, {
							optimisticResponse: {
								__typename: "Mutation",
								setPinnedAt: {
									__typename: "Post",
									id: n,
									collection: t,
									pendingCollection: r,
									pinnedAt: o ? 0 : Date.now()
								}
							}
						}),
						s = i()(c, 1)[0],
						d = u.useCallback((function() {
							return s({
								variables: {
									postId: n,
									collectionId: a,
									pinnedAt: !o
								}
							})
						}), [n, a, o, s]);
					return [o, d]
				},
				x = function(e) {
					var n = e.id,
						t = e.pinnedByCreatorAt,
						r = (0, l.useMutation)(p, {
							optimisticResponse: {
								postSetPinnedByCreatorAt: {
									__typename: "Post",
									id: n,
									pinnedByCreatorAt: t ? 0 : Date.now()
								}
							}
						}),
						o = i()(r, 1)[0],
						a = u.useCallback((function() {
							return o({
								variables: {
									postId: n,
									isPinned: !t
								}
							})
						}), [n, o, t]);
					return [t, a]
				},
				_ = function(e, n) {
					var t = v(e),
						r = i()(t, 2),
						o = r[0],
						a = r[1],
						l = x(e),
						c = i()(l, 2),
						s = c[0],
						d = c[1],
						m = u.useCallback((function() {
							return "Collection" === n ? a() : d()
						}), [n, a, d]);
					return ["Collection" === n ? o : s, m]
				},
				y = function(e, n) {
					var t = "Collection" === e.__typename ? e.slug : null,
						r = (0, h.GE)("ShowCollectionHome", t ? {
							collectionSlug: t
						} : {
							collectionSlug: ""
						});
					return "Collection" === e.__typename ? r : "User" === e.__typename && e.username ? (0, f.AWr)(e, n) : ""
				},
				P = function(e) {
					switch(e.__typename) {
						case "Collection":
							return "Publication";
						case "User":
							return "Author";
						default:
							return "Publisher"
					}
				}
		},
		25752: (e, n, t) => {
			"use strict";
			t.d(n, {
				z: () => r
			});
			var r = t(67294).createContext({
				isFetching: !1
			})
		},
		67900: (e, n, t) => {
			"use strict";
			t.d(n, {
				Z: () => E
			});
			var r = t(34575),
				i = t.n(r),
				o = t(93913),
				a = t.n(o),
				l = t(81506),
				c = t.n(l),
				u = t(2205),
				s = t.n(u),
				d = t(78585),
				m = t.n(d),
				p = t(29754),
				h = t.n(p),
				f = t(67294),
				g = t(25752);
			const E = function(e) {
				s()(o, e);
				var n, t, r = (n = o, t = function() {
					if("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if(Reflect.construct.sham) return !1;
					if("function" == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, r = h()(n);
					if(t) {
						var i = h()(this).constructor;
						e = Reflect.construct(r, arguments, i)
					} else e = r.apply(this, arguments);
					return m()(this, e)
				});

				function o(e) {
					var n;
					return i()(this, o), (n = r.call(this, e)).bottomEdgeEl = void 0, n.maybeFetch = void 0, n.state = {
						isFetching: !1
					}, n.maybeFetch = n._maybeFetch.bind(c()(n)), n
				}
				return a()(o, [{
					key: "componentDidMount",
					value: function() {
						this.attachScrollListener(), this._maybeFetch()
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.detachScrollListener()
					}
				}, {
					key: "_maybeFetch",
					value: function() {
						var e = this;
						if(this.bottomEdgeEl && !this.state.isFetching) {
							var n = this.props.fetchMore;
							if(n) {
								var t = this.bottomEdgeEl.getBoundingClientRect(),
									r = window.innerHeight;
								t.top - r < 3 * r && (this.setState({
									isFetching: !0
								}), n().then((function() {
									e.setState({
										isFetching: !1
									}), e._maybeFetch()
								})))
							}
						}
					}
				}, {
					key: "attachScrollListener",
					value: function() {
						window.addEventListener("scroll", this.maybeFetch), window.addEventListener("resize", this.maybeFetch)
					}
				}, {
					key: "detachScrollListener",
					value: function() {
						window.removeEventListener("scroll", this.maybeFetch), window.removeEventListener("resize", this.maybeFetch)
					}
				}, {
					key: "render",
					value: function() {
						var e = this,
							n = this.props.children;
						return f.createElement(g.z.Provider, {
							value: {
								isFetching: this.state.isFetching
							}
						}, f.createElement("div", null, n, f.createElement("div", {
							ref: function(n) {
								e.bottomEdgeEl = n
							}
						})))
					}
				}]), o
			}(f.Component)
		},
		84530: (e, n, t) => {
			"use strict";
			t.d(n, {
				y: () => l
			});
			var r = t(67294),
				i = t(28309),
				o = t(7650),
				a = function(e) {
					return {
						fill: e.baseColor.text.lighter,
						paddingLeft: "6px",
						height: "100%",
						position: "relative",
						transform: "translateY(-1.25px)",
						fontSize: "15px",
						lineHeight: "20px"
					}
				},
				l = function() {
					var e = (0, i.Fg)(),
						n = (0, i.Iq)();
					return r.createElement("span", {
						className: n(a(e))
					}, r.createElement(o.Z, null))
				}
		},
		44192: (e, n, t) => {
			"use strict";
			t.d(n, {
				T: () => p
			});
			var r = t(67294),
				i = t(12291),
				o = t(98281),
				a = t(53380),
				l = t(22091),
				c = t(64504),
				u = t(95760),
				s = t(27572),
				d = t(19551),
				m = t(27952),
				p = function(e) {
					var n = e.user,
						t = e.susiEntry,
						p = (0, u.Av)(),
						h = (0, s.pK)(),
						f = (0, i.v9)((function(e) {
							return e.config.authDomain
						})),
						g = (0, d.g)({
							onPresentedFn: function() {
								n && p.event("entity.presented", {
									entityId: n.id,
									entityType: 3,
									source: h
								})
							}
						});
					if(!n) return null;
					var E = n.name,
						v = n.bio,
						x = (0, m.AWr)(n, f);
					return r.createElement(l.xu, {
						ref: g,
						paddingTop: "16px",
						width: "100%",
						display: "flex",
						"flex-direction": "row",
						alignItems: "center",
						justifyContent: "space-between"
					}, r.createElement(l.xu, {
						display: "flex",
						flexDirection: "row",
						marginRight: "8px"
					}, r.createElement(o.ZP, {
						user: n,
						scale: "M",
						link: !0,
						withHalo: !1
					}), r.createElement(l.xu, {
						marginLeft: "16px",
						marginRight: "8px",
						md: {
							width: "auto"
						},
						lg: {
							width: "95px"
						},
						xl: {
							minWidth: "135px",
							maxWidth: "180px"
						}
					}, r.createElement(l.rU, {
						href: x
					}, r.createElement(c.Dx, {
						scale: "XS",
						clamp: 1
					}, E), r.createElement(l.xu, {
						marginTop: "4px"
					}, r.createElement(c.F, {
						scale: "S",
						clamp: {
							xs: 1,
							sm: 1,
							md: 1,
							lg: 1,
							xl: 2
						}
					}, v))))), r.createElement(a.Bv, {
						user: n,
						buttonSize: "SMALL",
						buttonStyleFn: function(e) {
							return e ? "BRAND" : "SUBTLE"
						},
						susiEntry: t
					}))
				}
		},
		83855: (e, n, t) => {
			"use strict";
			t.d(n, {
				V: () => c
			});
			var r = t(28655),
				i = t.n(r),
				o = t(71439),
				a = t(27952);

			function l() {
				var e = i()(["\n  fragment AuthorToFollow_user on User {\n    id\n    name\n    bio\n    quicklookMemberAt\n    isFollowing\n    imageId\n    ...userUrl_user\n  }\n  ", "\n"]);
				return l = function() {
					return e
				}, e
			}
			var c = (0, o.Ps)(l(), a.$mN)
		}
	}
]);
