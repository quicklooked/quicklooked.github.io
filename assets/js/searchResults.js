(self.webpackChunklite = self.webpackChunklite || []).push([
    [179], {
        89431: (e, t, n) => {
            "use strict";
            n.d(t, {
                DY: () => Y,
                Rh: () => ae,
                Aw: () => ie
            });
            var r = n(28655),
                o = n.n(r),
                a = n(87757),
                i = n.n(a),
                c = n(48926),
                l = n.n(c),
                s = n(63038),
                u = n.n(s),
                d = n(59713),
                m = n.n(d),
                p = n(71439),
                f = n(67294),
                g = n(12291),
                h = n(95482),
                v = n(53976),
                E = n(9292),
                b = n(32262),
                S = n(8558),
                y = n(7530),
                P = n(64504),
                w = n(62630),
                O = n(28309),
                _ = n(52837),
                x = n(13241),
                C = n(78249),
                T = n(51064),
                I = n(90038),
                k = n(27952),
                R = n(94301),
                A = n.n(R);

            function N() {
                var e = o()(["\n  fragment algoliaSearch_publisher on Publisher {\n    __typename\n    id\n  }\n"]);
                return N = function() {
                    return e
                }, e
            }
            var L = "/1/indexes/*/queries",
                D = "user",
                U = "tag",
                M = "post",
                F = [D, "collection", U],
                j = "numericFilters",
                B = {
                    publisher: null,
                    query: "",
                    collections: [],
                    posts: [],
                    users: [],
                    tags: []
                };

            function H(e, t, n) {
                var r = e.results,
                    o = {
                        publisher: null,
                        query: "",
                        collections: [],
                        posts: [],
                        users: [],
                        tags: []
                    };
                return o.query = t, n ? (o.publisher = n, o.posts = r[0].hits.filter((function(e) {
                    return !!e.latestPublishedAt
                }))) : (o.users = r[0].hits, o.collections = r[1].hits, o.tags = r[2].hits), o
            }

            function V(e, t, n, r) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = l()(i().mark((function e(t, n, r, o) {
                    var a, c, l, s, u, d, m;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = (null == r ? void 0 : r.id) || null, c = "https://" + t.appId + t.host, l = c + L, s = {
                                    query: n,
                                    hitsPerPage: 3,
                                    numericFilters: ""
                                }, a && (s.facetFilters = "Collection" === (null == r ? void 0 : r.__typename) ? "collectionId:".concat(a) : "authorId:".concat(a), s.attributesToRetrieve = "title,postId,latestPublishedAt"), u = (a ? [M] : F).map((function(e) {
                                    var n = Object.assign({}, s);
                                    return e === U && (n[j] = "postCount>=1,followerCount>=1"), e === D && !a && o && (n.filters = "highQualityUser:true"), {
                                        indexName: t.indexPrefix + e,
                                        params: Object.keys(n).map((function(e) {
                                            return e + "=" + n[e]
                                        })).join("&").toString()
                                    }
                                })), d = {
                                    requests: u
                                }, e.next = 10, A()(l, {
                                    method: "POST",
                                    headers: {
                                        "X-Algolia-API-Key": t.apiKeySearch,
                                        "X-Algolia-Application-Id": t.appId
                                    },
                                    body: JSON.stringify(d)
                                }).then((function(e) {
                                    return e.json()
                                })).catch();
                            case 10:
                                return m = e.sent, e.abrupt("return", H(m, n, r));
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var W = (0, p.Ps)(N());

            function z() {
                var e = o()(["\n  fragment SearchWidget_publisher on Publisher {\n    __typename\n    ... on Collection {\n      id\n      slug\n      name\n      domain\n    }\n    ... on User {\n      id\n      name\n    }\n    ...algoliaSearch_publisher\n  }\n  ", "\n"]);
                return z = function() {
                    return e
                }, e
            }

            function q(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(n), !0).forEach((function(t) {
                        m()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Y = "16px",
                Z = "searchResults",
                $ = function(e) {
                    var t = e.type,
                        n = e.name,
                        r = e.url,
                        o = e.imageId,
                        a = e.query,
                        i = e.isFocus,
                        c = (0, w.Av)(),
                        l = (0, O.Iq)(),
                        s = f.createElement(f.Fragment, null);
                    "TAG" === t && (s = f.createElement("div", {
                        className: l({
                            fill: "rgba(0, 0, 0, 0.54)",
                            display: "block",
                            marginLeft: "5px",
                            marginRight: "6px"
                        })
                    }, f.createElement(C.Z, null))), "COLLECTION" === t && (s = f.createElement(S.UV, {
                        rules: {
                            borderRadius: "3px"
                        },
                        miroId: o || "",
                        freezeGifs: !1,
                        alt: n || "Publication avatar",
                        width: 32,
                        height: 32,
                        strategy: I._S.Crop
                    })), "USER" === t && (s = f.createElement(S.zN, {
                        miroId: o || "1*dmbNkD5D-u45r44go_cf0g.png",
                        alt: n || "",
                        diameter: 32,
                        freezeGifs: !1
                    }));
                    var u = f.createElement(P.F, {
                            color: "DARKER",
                            scale: "M"
                        }, f.createElement("div", {
                            className: l({
                                width: "170px",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap"
                            })
                        }, n)),
                        d = f.useRef(null);
                    return f.useEffect((function() {
                        i && d && d.current && d.current.focus()
                    }), [i]), f.createElement(y.xu, {
                        display: "flex",
                        width: "250px",
                        tag: "li",
                        paddingLeft: "20px",
                        paddingRight: "20px"
                    }, f.createElement(y.xu, {
                        marginBottom: "16px"
                    }, f.createElement(y.rU, {
                        anchorRef: d,
                        tabIndex: -1,
                        linkStyle: "SUBTLE",
                        href: r,
                        onClick: function(e) {
                            c.event("search.predictiveResultClicked", {
                                type: t.toLowerCase(),
                                query: a,
                                path: e.currentTarget.href,
                                rank: 0,
                                total: 0
                            })
                        }
                    }, f.createElement(E.Y, {
                        avatar: s,
                        title: u,
                        description: null
                    }))))
                };

            function X(e) {
                var t, r = e.searchPlaceholder,
                    o = e.slug,
                    a = e.isPopoverVisible,
                    i = e.onQueryChange,
                    c = e.entityType,
                    l = e.authDomain,
                    s = (0, O.Iq)(),
                    d = f.useState(""),
                    m = u()(d, 2),
                    p = m[0],
                    g = m[1],
                    h = (0, T.O)(!1),
                    v = u()(h, 4),
                    E = v[0],
                    b = v[3],
                    S = f.useRef(null);
                return f.useEffect((function() {
                    S && S.current && E && S.current.focus()
                }), [E]), f.createElement(y.xu, {
                    display: "flex"
                }, f.createElement(y.rU, {
                    onClick: b
                }, f.createElement(y.xu, {
                    tag: "span",
                    padding: "4px"
                }, f.createElement(x.Z, {
                    className: s((function(e) {
                        return {
                            fill: e.baseColor.fill.lighter
                        }
                    }))
                }))), f.createElement("input", {
                    role: "combobox",
                    "aria-controls": Z,
                    "aria-expanded": a ? "true" : "false",
                    "aria-hidden": E ? "false" : "true",
                    tabIndex: E ? 0 : -1,
                    className: s([function(e) {
                        return {
                            border: "none",
                            outline: "none",
                            font: "inherit",
                            fontSize: "16px",
                            lineHeight: "20px",
                            opacity: 0,
                            backgroundColor: "transparent",
                            color: e.baseColor.text.normal,
                            "::placeholder": {
                                color: e.baseColor.text.lighter
                            }
                        }
                    }, (t = E, K(K({
                        position: "relative"
                    }, t ? {
                        width: "182px",
                        marginRight: "28px",
                        opacity: 100
                    } : {
                        padding: "0px",
                        width: "0px",
                        opacity: 0
                    }), {}, {
                        transition: "width 140ms ease-in, padding 140ms ease-in"
                    }))]),
                    placeholder: r,
                    ref: S,
                    value: p,
                    onChange: function(e) {
                        g(e.target.value), i(e.target.value)
                    },
                    onKeyDown: function(e) {
                        13 === e.keyCode && n.g.window && n.g.window.location.assign((0, k.rrN)(p, c, l, o)), "ArrowDown" === e.key && S.current && S.current.blur()
                    }
                }))
            }

            function Q(e) {
                var t = e.title,
                    n = e.url;
                return f.createElement(y.xu, {
                    width: "250px",
                    padding: "0 20px"
                }, f.createElement(y.xu, {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px"
                }, f.createElement(P.Lh, null, t), n && f.createElement(P.F, {
                    scale: "S"
                }, f.createElement(y.rU, {
                    linkStyle: "SUBTLE",
                    href: n
                }, "More"))), f.createElement(b.oK, {
                    paddingTopBottom: "0"
                }))
            }

            function J(e) {
                var t = e.data,
                    n = e.moreUrl,
                    r = e.refIndex,
                    o = t.collections,
                    a = t.query;
                return f.createElement(f.Fragment, null, f.createElement(Q, {
                    title: "Publications",
                    url: n
                }), f.createElement(y.xu, {
                    marginTop: "20px",
                    marginBottom: "8px"
                }, o.map((function(e, t) {
                    var n = e.collectionId,
                        o = e.imageId,
                        i = e.name;
                    return f.createElement($, {
                        isFocus: r === t,
                        key: t,
                        type: "COLLECTION",
                        name: i,
                        imageId: o,
                        url: (0, k.RHb)(n),
                        query: a
                    })
                }))))
            }

            function ee(e) {
                var t = e.data,
                    n = e.moreUrl,
                    r = e.authDomain,
                    o = e.entityType,
                    a = e.refIndex,
                    i = t.tags,
                    c = t.query;
                return f.createElement(f.Fragment, null, f.createElement(Q, {
                    title: "Tags",
                    url: n
                }), f.createElement(y.xu, {
                    marginTop: "20px",
                    marginBottom: "8px"
                }, i.map((function(e, t) {
                    var n = e.displayText,
                        i = e.tagSlug;
                    return f.createElement($, {
                        isFocus: a === t,
                        key: t,
                        type: "TAG",
                        name: n,
                        url: (0, k.HYG)(i, r, o),
                        query: c
                    })
                }))))
            }

            function te(e) {
                var t = e.data,
                    n = e.authDomain,
                    r = e.moreUrl,
                    o = e.refIndex,
                    a = t.query,
                    i = t.users;
                return f.createElement(f.Fragment, null, f.createElement(Q, {
                    title: "People",
                    url: r
                }), f.createElement(y.xu, {
                    marginTop: "20px",
                    marginBottom: "8px"
                }, i.map((function(e, t) {
                    var r = e.imageId,
                        i = e.name,
                        c = e.username;
                    return f.createElement($, {
                        isFocus: o === t,
                        key: t,
                        type: "USER",
                        imageId: r,
                        name: i,
                        url: (0, k.Qyn)(c, n),
                        query: a
                    })
                }))))
            }

            function ne(e) {
                var t = e.url,
                    n = e.productName,
                    r = e.isFocus,
                    o = f.useRef(null);
                return f.useEffect((function() {
                    r && o && o.current && o.current.focus()
                }), [r]), f.createElement(y.xu, {
                    display: "flex",
                    backgroundColor: "BASE_LIGHT",
                    width: "250px",
                    overflow: "hidden",
                    whiteSpace: "pre-line",
                    padding: "10px 20px"
                }, f.createElement(P.F, {
                    scale: "S",
                    color: "ACCENT"
                }, f.createElement(y.rU, {
                    href: t,
                    tabIndex: -1,
                    anchorRef: o
                }, "Search all of ".concat(n))))
            }
            var re = function(e) {
                var t = e.post,
                    n = e.isEntityRouter,
                    r = e.reportPredictiveSearchClicked,
                    o = e.isFocus,
                    a = (0, O.Iq)(),
                    i = (0, k.jVf)({
                        id: t.postId
                    }, n),
                    c = f.useRef(null);
                return f.useEffect((function() {
                    o && c && c.current && c.current.focus()
                }), [o]), f.createElement(y.xu, {
                    display: "flex",
                    width: "250px",
                    tag: "li",
                    paddingLeft: "20px",
                    paddingRight: "20px"
                }, f.createElement(y.xu, {
                    marginBottom: "16px"
                }, f.createElement(y.rU, {
                    anchorRef: c,
                    tabIndex: -1,
                    linkStyle: "SUBTLE",
                    href: i,
                    onClick: r
                }, f.createElement(P.F, {
                    scale: "S",
                    color: "DARKER"
                }, f.createElement("div", {
                    className: a({
                        width: "210px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    })
                }, t.title)), f.createElement(P.F, {
                    scale: "S"
                }, f.createElement(h.Z, {
                    timestamp: t.latestPublishedAt
                })))))
            };

            function oe(e) {
                var t = e.isCollection,
                    n = e.data,
                    r = e.isEntityRouter,
                    o = e.refIndex,
                    a = (0, w.Av)(),
                    i = n.posts,
                    c = f.useCallback((function(e) {
                        a.event("search.predictiveResultClicked", {
                            type: "post",
                            query: n.query,
                            path: e.currentTarget.href,
                            rank: 0,
                            total: 0
                        })
                    }), [n.query]),
                    l = "From this ".concat(t ? "Publication" : "Profile");
                return 0 !== i.length ? f.createElement(f.Fragment, null, f.createElement(Q, {
                    title: l
                }), f.createElement(y.xu, {
                    marginTop: "20px",
                    marginBottom: "8px"
                }, i.map((function(e, t) {
                    return f.createElement(re, {
                        key: "story-item-".concat(t),
                        post: e,
                        isEntityRouter: r,
                        reportPredictiveSearchClicked: c,
                        isFocus: o === t
                    })
                })))) : null
            }
            var ae = (0, g.$j)((function(e) {
                    return {
                        productName: e.config.productName,
                        algolia: e.config.algolia,
                        authDomain: e.config.authDomain,
                        entityType: e.client.routingEntity.type
                    }
                }))((function(e) {
                    var t = e.publisher,
                        n = e.productName,
                        r = e.algolia,
                        o = e.authDomain,
                        a = e.entityType,
                        c = e.setIsMetabarLocked,
                        s = (0, w.Av)(),
                        d = f.useState(null),
                        m = u()(d, 2),
                        p = m[0],
                        g = m[1],
                        h = f.useState(B),
                        E = u()(h, 2),
                        S = E[0],
                        P = E[1],
                        O = f.useState(""),
                        x = u()(O, 2),
                        C = x[0],
                        I = x[1],
                        R = (0, T.O)(!1),
                        A = u()(R, 3),
                        N = A[0],
                        L = A[1],
                        D = A[2],
                        U = t && "Collection" === t.__typename && !t.domain ? t.slug : null,
                        M = t && t.name ? t.name : n,
                        F = t ? "Search" : null,
                        j = !!(0, v.V)({
                            name: "remove_low_quality_posts_from_internal_search",
                            placeholder: !1
                        }),
                        H = t && S.posts ? S.posts.length + 1 : S.collections.length + S.users.length + S.tags.length,
                        G = function() {
                            D(), c(!1)
                        },
                        W = f.useCallback((function() {
                            return s.event("search.predictiveOpened", {})
                        }), []),
                        z = function() {
                            var e = l()(i().mark((function e(n) {
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return I(n), n || G(), g(null), N || (L(), c(!0), W()), s.event("search.predictiveQueried", {
                                                query: n
                                            }), e.t0 = P, e.next = 8, V(r, n, t || null, j);
                                        case 8:
                                            e.t1 = e.sent, (0, e.t0)(e.t1);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        q = f.createElement(b.mX, {
                            padding: "16px"
                        }, function() {
                            if (!S) return null;
                            var e = S.collections,
                                r = S.posts,
                                i = S.tags,
                                c = S.users;
                            return t ? t && r ? f.createElement(f.Fragment, null, f.createElement(oe, {
                                isCollection: "Collection" === t.__typename,
                                data: S,
                                isEntityRouter: a !== _.Cr.DEFAULT,
                                refIndex: p
                            }), f.createElement(ne, {
                                url: (0, k.rrN)(C, a, o, null, void 0),
                                productName: n,
                                isFocus: p === r.length
                            })) : void 0 : f.createElement(f.Fragment, null, c && !!c.length && f.createElement(te, {
                                data: S,
                                authDomain: o,
                                moreUrl: (0, k.rrN)(C, a, o, U, "users"),
                                refIndex: p
                            }), e && !!e.length && f.createElement(J, {
                                data: S,
                                moreUrl: (0, k.rrN)(C, a, o, U, "publications"),
                                refIndex: null !== p ? p - c.length : null
                            }), i && !!i.length && f.createElement(ee, {
                                data: S,
                                moreUrl: (0, k.rrN)(C, a, o, U, "tags"),
                                authDomain: o,
                                entityType: a,
                                refIndex: null !== p ? p - (c.length + e.length) : null
                            }))
                        }()),
                        K = f.createElement(X, {
                            authDomain: o,
                            entityType: a,
                            isPopoverVisible: N,
                            searchPlaceholder: F || "Search ".concat(M),
                            slug: U,
                            onQueryChange: z
                        });
                    return f.useEffect((function() {
                        if (N) {
                            var e = function(e) {
                                var t = "ArrowUp" === e.key,
                                    n = "ArrowDown" === e.key;
                                if (t || n) {
                                    e.preventDefault();
                                    var r = H - 1;
                                    g(n ? null === p || p === r ? 0 : p + 1 : null === p ? null : 0 === p ? r : p - 1)
                                }
                            };
                            return window.addEventListener("keydown", e),
                                function() {
                                    window.removeEventListener("keydown", e)
                                }
                        }
                    }), [p, N]), f.createElement(y.J2, {
                        ariaId: Z,
                        flip: !1,
                        isVisible: N,
                        hide: G,
                        popoverRenderFn: function() {
                            return q
                        },
                        setMaxHeight: !0
                    }, K)
                })),
                ie = (0, p.Ps)(z(), W)
        }
    },
    0, [
        [29613, 6700, 8850],
        [66456, 6700, 8850]
    ]
]);
