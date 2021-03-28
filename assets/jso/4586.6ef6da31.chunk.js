(self.webpackChunklite = self.webpackChunklite || []).push([
	[4586], {
		965: (e, t, n) => {
			"use strict";
			n.d(t, {
				JP: () => b,
				CP: () => C
			});
			var r = n(59713),
				o = n.n(r),
				a = n(63038),
				l = n.n(a),
				i = n(28655),
				s = n.n(i),
				c = n(71439),
				u = n(46829),
				p = n(67294),
				m = n(25665);

			function d(e, t) {
				var n = Object.keys(e);
				if(Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function f(e) {
				for(var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? d(Object(n), !0).forEach((function(t) {
						o()(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function v() {
				var e = s()(["\n  mutation ClapMutation($targetPostId: ID!, $userId: ID!, $numClaps: Int!) {\n    clap(targetPostId: $targetPostId, userId: $userId, numClaps: $numClaps) {\n      ...ClapMutation_post\n    }\n  }\n  ", "\n"]);
				return v = function() {
					return e
				}, e
			}

			function g() {
				var e = s()(["\n  fragment ClapMutation_post on Post {\n    __typename\n    id\n    clapCount\n    viewerClapCount\n    ...MultiVoteCount_post\n  }\n  ", "\n"]);
				return g = function() {
					return e
				}, e
			}
			var b = (0, c.Ps)(g(), m.U),
				h = (0, c.Ps)(v(), b),
				C = function() {
					var e = (0, u.useMutation)(h),
						t = l()(e, 1)[0];
					return (0, p.useCallback)((function(e, n, r) {
						return t({
							variables: {
								targetPostId: e.id,
								userId: n,
								numClaps: r
							},
							optimisticResponse: {
								clap: f(f({
									__typename: "Post"
								}, e), {}, {
									clapCount: e.clapCount + r,
									viewerClapCount: (e.viewerClapCount || 0) + r
								})
							},
							update: function(t, n) {
								var o, a = null == n || null === (o = n.data) || void 0 === o ? void 0 : o.clap;
								if(a) {
									var l = t.readFragment({
										id: "Post:".concat(a.id),
										fragment: b,
										fragmentName: "ClapMutation_post"
									});
									t.writeFragment({
										id: "Post:".concat(a.id),
										fragment: b,
										fragmentName: "ClapMutation_post",
										data: f(f({}, l), {}, {
											clapCount: e.clapCount + r,
											viewerClapCount: (e.viewerClapCount || 0) + r
										})
									})
								}
							}
						})
					}), [])
				}
		},
		25665: (e, t, n) => {
			"use strict";
			n.d(t, {
				_: () => re,
				U: () => oe
			});
			var r = n(28655),
				o = n.n(r),
				a = n(59713),
				l = n.n(a),
				i = n(71439),
				s = n(23450),
				c = n.n(s),
				u = n(67294),
				p = n(67154),
				m = n.n(p),
				d = n(319),
				f = n.n(d),
				v = n(6479),
				g = n.n(v),
				b = n(87757),
				h = n.n(b),
				C = n(48926),
				x = n.n(C),
				E = n(63038),
				y = n.n(E),
				w = n(82492),
				O = n.n(w),
				P = n(80439),
				k = n(12291),
				I = n(98281),
				j = n(53380),
				D = n(7530),
				S = n(64504),
				M = n(67995);

			function V() {
				return (V = Object.assign || function(e) {
					for(var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = u.createElement("g", {
				fillRule: "evenodd"
			}, u.createElement("path", {
				d: "M7.94 1h-.89L7.5 2.9zM10.09 1.33l-.84-.3-.23 1.95zM5.73 1.04l-.84.3L5.97 3zM5.63 11.57a3043.52 3043.52 0 0 0-1.6-1.6C2.32 8.26 1.25 7.5 1.75 7c.25-.25.62-.3.93 0 .45.46 1.54 1.65 1.54 1.65a.69.69 0 0 0 .34.2c.17.04.36-.06.5-.2.14-.13.06-.47-.06-.6L2.94 5.98c-.29-.29-.39-.78-.08-1.09.3-.29.64-.14.9.12l2.1 2.15a.33.33 0 0 0 .24.1.42.42 0 0 0 .26-.12c.13-.12.2-.36.07-.49L5 5.2c-.56-.56-.6-.95-.36-1.2.35-.35.82-.24 1.45.48l2.8 2.95-.59-1.46s-.37-.97 0-1.17c.37-.2.74.33 1 .72l1.37 2.62a3.29 3.29 0 0 1-.57 4.05c-1.22 1.22-3.18.69-4.48-.6z"
			}), u.createElement("path", {
				d: "M11.37 4.73c-.26-.4-.7-.4-.98-.19-.19.15-.16.48-.15.7l1.18 2.07c.91 1.49 1.23 2.7.19 4.1.31-.14.4-.27.58-.49.65-.8 1.05-2.47.39-3.88a3.35 3.35 0 0 0-.03-.05l-1.18-2.26z"
			}));
			const L = function(e) {
				return u.createElement("svg", V({
					width: 15,
					height: 15
				}, e), _)
			};
			var R = n(27952);

			function A() {
				var e = o()(["\n  query PostVotersDialogQuery($postId: ID!, $pagingOptions: PagingOptions) {\n    post(id: $postId) {\n      id\n      title\n      clapCount\n      voterCount\n      voters(paging: $pagingOptions) {\n        items {\n          user {\n            id\n            name\n            bio\n            username\n            ...UserAvatar_user\n            ...UserFollowButton_user\n            ...userUrl_user\n          }\n          clapCount\n        }\n        pagingInfo {\n          next {\n            page\n          }\n        }\n      }\n      ...UserFollowButton_post\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
				return A = function() {
					return e
				}, e
			}
			var F = function(e) {
					return {
						position: "relative",
						bottom: "12px",
						borderRadius: "10px",
						color: e.backgroundColor,
						fill: e.backgroundColor,
						background: e.accentColor.fill.normal,
						textAlign: "center"
					}
				},
				$ = {
					left: "20px",
					padding: "0 6px"
				},
				N = {
					left: "24px",
					padding: "0 2px"
				},
				U = function(e) {
					var t = e.clapCount,
						n = (0, M.n)({
							name: "detail",
							color: "DARKER",
							scale: "S"
						}),
						r = t ? [n, F, $] : [F, N];
					return u.createElement(D.hS, null, (function(e) {
						return u.createElement("span", {
							className: e(r)
						}, t ? "+".concat(t) : u.createElement(L, null))
					}))
				},
				z = function(e) {
					var t = e.user,
						n = e.clapCount,
						r = e.post,
						o = (0, k.v9)((function(e) {
							return e.config.authDomain
						})),
						a = t.username,
						l = t.name,
						i = t.bio,
						s = void 0 === i ? "" : i;
					return l && a ? u.createElement(D.xu, {
						padding: "12px 0"
					}, u.createElement(D.xu, {
						display: "flex",
						alignItems: "flex-start",
						justifyContent: "space-between"
					}, u.createElement(D.xu, {
						display: "flex",
						alignItems: "flex-start"
					}, u.createElement(D.xu, {
						marginRight: "20px"
					}, u.createElement(I.ZP, {
						user: t,
						scale: "S"
					}), u.createElement(U, {
						clapCount: n
					})), u.createElement(D.xu, {
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start"
					}, u.createElement(D.rU, {
						href: (0, R.AWr)(t, o)
					}, u.createElement(S.X6, {
						scale: "XS"
					}, l, " ")), u.createElement(S.F, {
						scale: "S"
					}, s))), u.createElement(D.xu, {
						marginLeft: "48px"
					}, u.createElement(j.Bv, {
						buttonSize: "SMALL",
						post: r,
						user: t,
						susiEntry: "follow_list"
					})))) : null
				},
				T = function(e) {
					var t = e.isVisible,
						n = e.hide,
						r = e.post,
						o = e.fetchMore,
						a = u.useState(!1),
						l = y()(a, 2),
						i = l[0],
						s = l[1],
						c = u.useCallback(x()(h().mark((function e() {
							return h().wrap((function(e) {
								for(;;) switch(e.prev = e.next) {
									case 0:
										if(!o || i) {
											e.next = 8;
											break
										}
										return s(!0), e.prev = 2, e.next = 5, o();
									case 5:
										return e.prev = 5, s(!1), e.finish(5);
									case 8:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[2, , 5, 8]
							])
						}))), [o, i, s]);
					if(!r) return null;
					var p = r.title,
						m = r.voters,
						d = r.clapCount,
						f = r.voterCount;
					return u.createElement(D.Vq, {
						isVisible: t,
						hide: n,
						withAnimation: !0
					}, u.createElement(D.xu, {
						maxWidth: "550px",
						sm: {
							paddingTop: "0"
						},
						paddingTop: "88px"
					}, u.createElement(D.xu, {
						display: "flex",
						flexDirection: "column",
						marginBottom: "24px",
						textAlign: "center"
					}, u.createElement(S.X6, {
						scale: "S"
					}, d, " claps from ", f, " ", 1 === f ? "person" : "people", ' for "', p, '"')), m && m.items.map((function(e) {
						var t = e.user,
							n = e.clapCount;
						return t && u.createElement(z, {
							user: t,
							clapCount: n,
							post: r,
							key: t.id
						})
					})), o && u.createElement(D.xu, {
						display: "flex",
						flexDirection: "column",
						margin: "24px",
						alignItems: "center"
					}, u.createElement(D.zx, {
						buttonStyle: "SOCIAL",
						size: "SMALL",
						onClick: c
					}, "Show more claps"))))
				};

			function q(e) {
				var t = e.postId,
					n = e.isVisible,
					r = g()(e, ["postId", "isVisible"]);
				return n ? u.createElement(P.AE, {
					ssr: !1,
					query: W,
					variables: {
						postId: t,
						pagingOptions: {
							limit: 10
						}
					}
				}, (function(e) {
					var t, o = e.data,
						a = (o = void 0 === o ? {} : o).post,
						l = e.loading,
						i = e.error,
						s = e.fetchMore;
					if(l) return u.createElement(D.TF, null);
					if(i || null == a || !a.voters) return null;
					var c = a.voters.pagingInfo && a.voters.pagingInfo.next;
					if(c) {
						var p = {
							page: c.page
						};
						t = function() {
							return s({
								variables: {
									pagingOptions: p
								},
								updateQuery: function(e, t) {
									var n, r, o, a, l, i, s = t.fetchMoreResult;
									return O()({}, s, {
										post: {
											voters: {
												items: [].concat(f()(null !== (n = null == e || null === (r = e.post) || void 0 === r || null === (o = r.voters) || void 0 === o ? void 0 : o.items) && void 0 !== n ? n : []), f()(null !== (a = null == s || null === (l = s.post) || void 0 === l || null === (i = l.voters) || void 0 === i ? void 0 : i.items) && void 0 !== a ? a : []))
											}
										}
									})
								}
							})
						}
					}
					return u.createElement(T, m()({
						isVisible: n,
						post: a,
						loading: l,
						fetchMore: t
					}, r))
				})) : null
			}
			var W = (0, i.Ps)(A(), I.WQ, j.sj, j.S$, R.$mN),
				B = n(27390),
				H = n(11642);

			function K() {
				var e = o()(["\n  fragment PostVotersNetwork_post on Post {\n    voterCount\n    viewerClapCount\n    recommenders {\n      name\n    }\n  }\n"]);
				return K = function() {
					return e
				}, e
			}
			var Q = function(e) {
					var t, n, r = e.post,
						o = e.showVoters,
						a = null !== (t = null === (n = r.recommenders) || void 0 === n ? void 0 : n.map((function(e) {
							return e.name
						})).filter(H.b)) && void 0 !== t ? t : [],
						l = (r.viewerClapCount ? ["you"] : []).concat(a).slice(0, 2);
					if(!l.length) return null;
					var i = (r.voterCount || 0) - l.length,
						s = l.join(i > 0 ? ", " : " and "),
						p = "".concat(l.length > 1 ? "," : "", " and"),
						m = c()("other", i),
						d = i > 0 ? "".concat(p, " ").concat((0, B.rR)(i), " ").concat(m) : "";
					return u.createElement(D.xu, {
						sm: {
							display: "none"
						}
					}, u.createElement(D.rU, {
						onClick: o
					}, u.createElement(S.F, {
						scale: "S"
					}, "Applause from ".concat(s).concat(d))))
				},
				X = (0, i.Ps)(K()),
				Z = n(71542),
				G = n(19464),
				J = n(98024),
				Y = n(28309);

			function ee() {
				var e = o()(["\n  fragment MultiVoteCount_post on Post {\n    id\n    ...PostVotersNetwork_post\n  }\n  ", "\n"]);
				return ee = function() {
					return e
				}, e
			}

			function te(e, t) {
				var n = Object.keys(e);
				if(Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function ne(e) {
				for(var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? te(Object(n), !0).forEach((function(t) {
						l()(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function re(e) {
				var t = e.clapCount,
					n = e.hasLabel,
					r = void 0 !== n && n,
					o = e.showFullNumber,
					a = void 0 !== o && o,
					l = e.post,
					i = e.shouldShowNetwork,
					s = e.hasDialog,
					p = void 0 !== s && s,
					m = e.shouldShowResponsiveLabelText,
					d = void 0 !== m && m,
					f = e.shouldHideClapsText,
					v = void 0 !== f && f,
					g = l.id;
				if(!(t > 0)) return null;
				var b = r && !v ? c()("clap", t) : "",
					h = function(e) {
						var t = e.showVoters;
						return i && t ? u.createElement(Q, {
							showVoters: t,
							post: l
						}) : null
					},
					C = a ? (0, B.rR)(t) : (0, B.pY)(t),
					x = function(e) {
						var t = e.showVoters,
							n = (0, Y.Iq)();
						return u.createElement("div", {
							className: n(ne(ne({}, d || r ? {
								position: "relative",
								top: "1px"
							} : {}), {}, {
								"& button": {
									textAlign: "left"
								}
							}))
						}, u.createElement(J.F, {
							color: d || r || v ? "DARKER" : "LIGHTER",
							scale: "M"
						}, d ? u.createElement(u.Fragment, null, t ? u.createElement(D.rU, {
							onClick: t
						}, C, u.createElement(Z.s, null, "Â ", b)) : C, u.createElement(Z.s, null, u.createElement(h, {
							showVoters: t
						}))) : u.createElement(u.Fragment, null, t ? u.createElement(D.rU, {
							onClick: t
						}, C, " ", b) : C, u.createElement(h, {
							showVoters: t
						}))))
					};
				return p && g ? u.createElement(G.Z, null, (function(e) {
					var t = e.isVisible,
						n = e.show,
						r = e.hide;
					return u.createElement(u.Fragment, null, u.createElement(x, {
						showVoters: n
					}), u.createElement(q, {
						isVisible: t,
						hide: r,
						postId: g
					}))
				})) : u.createElement(x, null)
			}
			var oe = (0, i.Ps)(ee(), X)
		},
		71542: (e, t, n) => {
			"use strict";
			n.d(t, {
				s: () => c,
				e: () => u
			});
			var r = n(67154),
				o = n.n(r),
				a = n(6479),
				l = n.n(a),
				i = n(67294),
				s = n(7530),
				c = function(e) {
					var t = e.xs,
						n = e.sm,
						r = e.children,
						a = l()(e, ["xs", "sm", "children"]);
					return i.createElement(s.xu, o()({
						xs: {
							display: "none"
						},
						sm: {
							display: t ? "inline-block" : "none"
						},
						md: {
							display: t || n ? "inline-block" : "none"
						},
						lg: {
							display: "inline-block"
						},
						xl: {
							display: "inline-block"
						},
						tag: "span"
					}, a), r)
				},
				u = function(e) {
					var t = e.xs,
						n = e.sm,
						r = e.children,
						a = l()(e, ["xs", "sm", "children"]);
					return i.createElement(s.xu, o()({
						xs: {
							display: "inline-block"
						},
						sm: {
							display: t ? "none" : "inline-block"
						},
						md: {
							display: t || n ? "none" : "inline-block"
						},
						lg: {
							display: "none"
						},
						xl: {
							display: "none"
						},
						tag: "span"
					}, a), r)
				}
		},
		33914: (e, t, n) => {
			"use strict";
			n.d(t, {
				_: () => u
			});
			var r = n(67294),
				o = n(7530),
				a = n(52862),
				l = n(67995),
				i = n(24438),
				s = n(28309),
				c = n(67122);

			function u(e) {
				var t = e.children,
					n = e.tooltipText,
					u = e.isVisible,
					p = void 0 === u || u,
					m = e.onMouseLeave,
					d = e.placement,
					f = void 0 === d ? "top" : d,
					v = e.maxWidth,
					g = e.targetDistance,
					b = (0, s.Iq)(),
					h = (0, l.n)({
						name: "detail",
						scale: "S",
						color: "DARKER"
					});
				return r.createElement(a.Z, {
					darkTheme: !0,
					hideOnClick: !0,
					isVisible: p,
					noPortal: !0,
					mouseEnterDelay: 500,
					mouseLeaveDelay: 0,
					placement: f,
					popoverRenderFn: function() {
						return r.createElement(o.xu, {
							padding: "8px",
							maxWidth: v ? (0, i.a)(v) : void 0,
							textAlign: "center"
						}, r.createElement("span", {
							className: b([h, {
								color: c.ix,
								whiteSpace: v ? void 0 : "nowrap"
							}])
						}, n))
					},
					role: "tooltip",
					targetDistance: g,
					onMouseLeave: m
				}, t)
			}
		},
		55573: (e, t, n) => {
			"use strict";

			function r(e, t) {
				return !!t && e[t.id] || {
					clapCount: (null == t ? void 0 : t.clapCount) || 0,
					viewerClapCount: (null == t ? void 0 : t.viewerClapCount) || 0,
					viewerHasClappedSinceFetch: !1
				}
			}
			n.d(t, {
				l: () => r
			})
		}
	}
]);
