! function(r) {
    var e = {};

    function t(n) { if (e[n]) return e[n].exports; var o = e[n] = { i: n, l: !1, exports: {} }; return r[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports }
    t.m = r, t.c = e, t.d = function(r, e, n) { t.o(r, e) || Object.defineProperty(r, e, { enumerable: !0, get: n }) }, t.r = function(r) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 }) }, t.t = function(r, e) {
        if (1 & e && (r = t(r)), 8 & e) return r;
        if (4 & e && "object" == typeof r && r && r.__esModule) return r;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: r }), 2 & e && "string" != typeof r)
            for (var o in r) t.d(n, o, function(e) { return r[e] }.bind(null, o));
        return n
    }, t.n = function(r) { var e = r && r.__esModule ? function() { return r.default } : function() { return r }; return t.d(e, "a", e), e }, t.o = function(r, e) { return Object.prototype.hasOwnProperty.call(r, e) }, t.p = "/", t(t.s = 10)
}([function(r, e, t) {
    "use strict";
    var n = t(3),
        o = "object" == typeof self && self && self.Object === Object && self,
        c = n.a || o || Function("return this")();
    e.a = c
}, function(r, e, t) {
    "use strict";
    (function(r) {
        var n = t(3),
            o = "object" == typeof exports && exports && !exports.nodeType && exports,
            c = o && "object" == typeof r && r && !r.nodeType && r,
            a = c && c.exports === o && n.a.process,
            i = function() { try { var r = c && c.require && c.require("util").types; return r || a && a.binding && a.binding("util") } catch (r) {} }();
        e.a = i
    }).call(this, t(6)(r))
}, function(r, e, t) {
    "use strict";
    (function(r) {
        var n = t(0),
            o = t(8),
            c = "object" == typeof exports && exports && !exports.nodeType && exports,
            a = c && "object" == typeof r && r && !r.nodeType && r,
            i = a && a.exports === c ? n.a.Buffer : void 0,
            u = (i ? i.isBuffer : void 0) || o.a;
        e.a = u
    }).call(this, t(6)(r))
}, function(r, e, t) {
    "use strict";
    (function(r) {
        var t = "object" == typeof r && r && r.Object === Object && r;
        e.a = t
    }).call(this, t(9))
}, function(r, e, t) {
    "use strict";
    (function(r) {
        var n = t(0),
            o = "object" == typeof exports && exports && !exports.nodeType && exports,
            c = o && "object" == typeof r && r && !r.nodeType && r,
            a = c && c.exports === o ? n.a.Buffer : void 0,
            i = a ? a.allocUnsafe : void 0;
        e.a = function(r, e) {
            if (e) return r.slice();
            var t = r.length,
                n = i ? i(t) : new r.constructor(t);
            return r.copy(n), n
        }
    }).call(this, t(6)(r))
}, function(r, e, t) {
    var n, o;
    /*!
     * JavaScript Cookie v2.2.0
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */
    ! function(c) {
        if (void 0 === (o = "function" == typeof(n = c) ? n.call(e, t, e, r) : n) || (r.exports = o), !0, r.exports = c(), !!0) {
            var a = window.Cookies,
                i = window.Cookies = c();
            i.noConflict = function() { return window.Cookies = a, i }
        }
    }(function() {
        function r() { for (var r = 0, e = {}; r < arguments.length; r++) { var t = arguments[r]; for (var n in t) e[n] = t[n] } return e }
        return function e(t) {
            function n(e, o, c) {
                var a;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if ("number" == typeof(c = r({ path: "/" }, n.defaults, c)).expires) {
                            var i = new Date;
                            i.setMilliseconds(i.getMilliseconds() + 864e5 * c.expires), c.expires = i
                        }
                        c.expires = c.expires ? c.expires.toUTCString() : "";
                        try { a = JSON.stringify(o), /^[\{\[]/.test(a) && (o = a) } catch (r) {}
                        o = t.write ? t.write(o, e) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var u = "";
                        for (var f in c) c[f] && (u += "; " + f, !0 !== c[f] && (u += "=" + c[f]));
                        return document.cookie = e + "=" + o + u
                    }
                    e || (a = {});
                    for (var s = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, p = 0; p < s.length; p++) {
                        var v = s[p].split("="),
                            d = v.slice(1).join("=");
                        this.json || '"' !== d.charAt(0) || (d = d.slice(1, -1));
                        try {
                            var b = v[0].replace(l, decodeURIComponent);
                            if (d = t.read ? t.read(d, b) : t(d, b) || d.replace(l, decodeURIComponent), this.json) try { d = JSON.parse(d) } catch (r) {}
                            if (e === b) { a = d; break }
                            e || (a[b] = d)
                        } catch (r) {}
                    }
                    return a
                }
            }
            return n.set = n, n.get = function(r) { return n.call(n, r) }, n.getJSON = function() { return n.apply({ json: !0 }, [].slice.call(arguments)) }, n.defaults = {}, n.remove = function(e, t) { n(e, "", r(t, { expires: -1 })) }, n.withConverter = e, n
        }(function() {})
    })
}, function(r, e) {
    r.exports = function(r) {
        if (!r.webpackPolyfill) {
            var e = Object.create(r);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), Object.defineProperty(e, "exports", { enumerable: !0 }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(r, e) { r.exports = { version: "1.1.10", build: { env: "production" }, dev: { env: "development" } } }, function(r, e, t) {
    "use strict";
    e.a = function() { return !1 }
}, function(r, e) {
    var t;
    t = function() { return this }();
    try { t = t || Function("return this")() || (0, eval)("this") } catch (r) { "object" == typeof window && (t = window) }
    r.exports = t
}, function(r, e, t) {
    "use strict";

    function n(r, e) { for (var t in r) e[t] = r[t]; return e }
    t.r(e);
    var o = {};
    o.wrap = a, o.wrapArgs = function(r) { return function() { var e, t = (e = arguments, [].slice.call(e)).map(function(r) { return a(r) }); return r.apply(this, t) } };
    var c = { handleTryCatchError: function() {} };

    function a(r) { return function(r) { return "[object Function]" === Object.prototype.toString.call(r) }(r) ? function(r) { r._wrapped || (r._wrapped = function() { try { return r.apply(this, arguments) } catch (r) { throw c.handleTryCatchError(r), window.ignoreError = !0, r } }); return r._wrapped }(r) : r }
    var i = o,
        u = {};
    u.tryJS = i, n({ handleTryCatchError: function(r) { g(function(r) { return { type: d, desc: r.message, stack: r.stack } }(r)) } }, c), u.init = function(r) {
        var e;
        ! function(r) {
            n(r, l), e = l.report, t = l.delay, o = function() { f = [] }, s = function() {
                var r = this,
                    n = arguments;
                clearTimeout(c), c = setTimeout(function() { e.apply(r, n), !o || o() }, t)
            };
            var e, t, o, c
        }(r), window.addEventListener("error", function(r) {
            var e = r.target;
            if (e !== window && e.nodeName && b[e.nodeName.toUpperCase()]) g(function(r) { return { type: b[r.nodeName.toUpperCase()], desc: r.baseURI + "@" + (r.src || r.href), stack: "no stack" } }(e));
            else {
                var t = r.message,
                    n = r.filename,
                    o = r.lineno,
                    c = r.colno,
                    a = r.error,
                    i = function(r, e, t, n, o) { return { type: p, desc: r + " at " + e + ":" + t + ":" + n, stack: o && o.stack ? o.stack : "no stack" } }(t, n, o, c, a);
                g(i)
            }
        }, !0), console.error = (e = console.error, function(r) {
            var t = { type: v, desc: r };
            g(t), e.call(console, r)
        })
    }, window.ignoreError = !1;
    var f = [],
        s = function() {},
        l = { concat: !0, delay: 2e3, maxError: 16, sampling: 1 },
        p = 1,
        v = 7,
        d = 8,
        b = { SCRIPT: 2, LINK: 3, IMG: 4, AUDIO: 5, VIDEO: 6 };

    function g(r) { l.concat ? (! function(r) { h(l.sampling) && f.length < l.maxError && f.push(r) }(r), s(f)) : !h(l.sampling) || l.report([r]) }

    function h(r) { return Math.random() < (r || 1) }
    var y = u,
        _ = [];
    _[1] = { df: ["url", "http_code", "during_ms", "size"], ef: ["params", "response"], dft: { size: "response_size_b" } }, _[2] = { df: ["url"], ef: ["params", "response"], dft: {} }, _[3] = { df: ["url", "reason"], ef: ["code"], dft: { reason: "error_no" } }, _[4] = { df: ["step"], ef: ["desc"], dft: { step: "error_no" } }, _[5] = { df: ["url", "step"], ef: ["params"], dft: { step: "error_no" } }, _[8] = { df: [], dft: { error_name: "error_no", http_code: "http_code", during_ms: "during_ms", url: "url", request_size_b: "request_size_b", response_size_b: "response_size_b" } };
    var j = _,
        m = t(7),
        w = t.n(m),
        O = Array.isArray,
        R = t(0),
        k = R.a.Symbol,
        E = Object.prototype,
        A = E.hasOwnProperty,
        S = E.toString,
        x = k ? k.toStringTag : void 0;
    var I = function(r) {
            var e = A.call(r, x),
                t = r[x];
            try { r[x] = void 0; var n = !0 } catch (r) {}
            var o = S.call(r);
            return n && (e ? r[x] = t : delete r[x]), o
        },
        z = Object.prototype.toString;
    var P = function(r) { return z.call(r) },
        C = "[object Null]",
        T = "[object Undefined]",
        D = k ? k.toStringTag : void 0;
    var U = function(r) { return null == r ? void 0 === r ? T : C : D && D in Object(r) ? I(r) : P(r) };
    var N = function(r) { return null != r && "object" == typeof r },
        M = "[object Symbol]";
    var F = function(r) { return "symbol" == typeof r || N(r) && U(r) == M },
        L = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        q = /^\w*$/;
    var B = function(r, e) { if (O(r)) return !1; var t = typeof r; return !("number" != t && "symbol" != t && "boolean" != t && null != r && !F(r)) || q.test(r) || !L.test(r) || null != e && r in Object(e) };
    var $ = function(r) { var e = typeof r; return null != r && ("object" == e || "function" == e) },
        V = "[object AsyncFunction]",
        J = "[object Function]",
        G = "[object GeneratorFunction]",
        W = "[object Proxy]";
    var Y, H = function(r) { if (!$(r)) return !1; var e = U(r); return e == J || e == G || e == V || e == W },
        K = R.a["__core-js_shared__"],
        Z = (Y = /[^.]+$/.exec(K && K.keys && K.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Y : "";
    var Q = function(r) { return !!Z && Z in r },
        X = Function.prototype.toString;
    var rr = function(r) { if (null != r) { try { return X.call(r) } catch (r) {} try { return r + "" } catch (r) {} } return "" },
        er = /^\[object .+?Constructor\]$/,
        tr = Function.prototype,
        nr = Object.prototype,
        or = tr.toString,
        cr = nr.hasOwnProperty,
        ar = RegExp("^" + or.call(cr).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var ir = function(r) { return !(!$(r) || Q(r)) && (H(r) ? ar : er).test(rr(r)) };
    var ur = function(r, e) { return null == r ? void 0 : r[e] };
    var fr = function(r, e) { var t = ur(r, e); return ir(t) ? t : void 0 },
        sr = fr(Object, "create");
    var lr = function() { this.__data__ = sr ? sr(null) : {}, this.size = 0 };
    var pr = function(r) { var e = this.has(r) && delete this.__data__[r]; return this.size -= e ? 1 : 0, e },
        vr = "__lodash_hash_undefined__",
        dr = Object.prototype.hasOwnProperty;
    var br = function(r) { var e = this.__data__; if (sr) { var t = e[r]; return t === vr ? void 0 : t } return dr.call(e, r) ? e[r] : void 0 },
        gr = Object.prototype.hasOwnProperty;
    var hr = function(r) { var e = this.__data__; return sr ? void 0 !== e[r] : gr.call(e, r) },
        yr = "__lodash_hash_undefined__";
    var _r = function(r, e) { var t = this.__data__; return this.size += this.has(r) ? 0 : 1, t[r] = sr && void 0 === e ? yr : e, this };

    function jr(r) {
        var e = -1,
            t = null == r ? 0 : r.length;
        for (this.clear(); ++e < t;) {
            var n = r[e];
            this.set(n[0], n[1])
        }
    }
    jr.prototype.clear = lr, jr.prototype.delete = pr, jr.prototype.get = br, jr.prototype.has = hr, jr.prototype.set = _r;
    var mr = jr;
    var wr = function() { this.__data__ = [], this.size = 0 };
    var Or = function(r, e) { return r === e || r != r && e != e };
    var Rr = function(r, e) {
            for (var t = r.length; t--;)
                if (Or(r[t][0], e)) return t;
            return -1
        },
        kr = Array.prototype.splice;
    var Er = function(r) {
        var e = this.__data__,
            t = Rr(e, r);
        return !(t < 0 || (t == e.length - 1 ? e.pop() : kr.call(e, t, 1), --this.size, 0))
    };
    var Ar = function(r) {
        var e = this.__data__,
            t = Rr(e, r);
        return t < 0 ? void 0 : e[t][1]
    };
    var Sr = function(r) { return Rr(this.__data__, r) > -1 };
    var xr = function(r, e) {
        var t = this.__data__,
            n = Rr(t, r);
        return n < 0 ? (++this.size, t.push([r, e])) : t[n][1] = e, this
    };

    function Ir(r) {
        var e = -1,
            t = null == r ? 0 : r.length;
        for (this.clear(); ++e < t;) {
            var n = r[e];
            this.set(n[0], n[1])
        }
    }
    Ir.prototype.clear = wr, Ir.prototype.delete = Er, Ir.prototype.get = Ar, Ir.prototype.has = Sr, Ir.prototype.set = xr;
    var zr = Ir,
        Pr = fr(R.a, "Map");
    var Cr = function() { this.size = 0, this.__data__ = { hash: new mr, map: new(Pr || zr), string: new mr } };
    var Tr = function(r) { var e = typeof r; return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== r : null === r };
    var Dr = function(r, e) { var t = r.__data__; return Tr(e) ? t["string" == typeof e ? "string" : "hash"] : t.map };
    var Ur = function(r) { var e = Dr(this, r).delete(r); return this.size -= e ? 1 : 0, e };
    var Nr = function(r) { return Dr(this, r).get(r) };
    var Mr = function(r) { return Dr(this, r).has(r) };
    var Fr = function(r, e) {
        var t = Dr(this, r),
            n = t.size;
        return t.set(r, e), this.size += t.size == n ? 0 : 1, this
    };

    function Lr(r) {
        var e = -1,
            t = null == r ? 0 : r.length;
        for (this.clear(); ++e < t;) {
            var n = r[e];
            this.set(n[0], n[1])
        }
    }
    Lr.prototype.clear = Cr, Lr.prototype.delete = Ur, Lr.prototype.get = Nr, Lr.prototype.has = Mr, Lr.prototype.set = Fr;
    var qr = Lr,
        Br = "Expected a function";

    function $r(r, e) {
        if ("function" != typeof r || null != e && "function" != typeof e) throw new TypeError(Br);
        var t = function() {
            var n = arguments,
                o = e ? e.apply(this, n) : n[0],
                c = t.cache;
            if (c.has(o)) return c.get(o);
            var a = r.apply(this, n);
            return t.cache = c.set(o, a) || c, a
        };
        return t.cache = new($r.Cache || qr), t
    }
    $r.Cache = qr;
    var Vr = $r,
        Jr = 500;
    var Gr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Wr = /\\(\\)?/g,
        Yr = function(r) {
            var e = Vr(r, function(r) { return t.size === Jr && t.clear(), r }),
                t = e.cache;
            return e
        }(function(r) { var e = []; return 46 === r.charCodeAt(0) && e.push(""), r.replace(Gr, function(r, t, n, o) { e.push(n ? o.replace(Wr, "$1") : t || r) }), e });
    var Hr = function(r, e) { for (var t = -1, n = null == r ? 0 : r.length, o = Array(n); ++t < n;) o[t] = e(r[t], t, r); return o },
        Kr = 1 / 0,
        Zr = k ? k.prototype : void 0,
        Qr = Zr ? Zr.toString : void 0;
    var Xr = function r(e) { if ("string" == typeof e) return e; if (O(e)) return Hr(e, r) + ""; if (F(e)) return Qr ? Qr.call(e) : ""; var t = e + ""; return "0" == t && 1 / e == -Kr ? "-0" : t };
    var re = function(r) { return null == r ? "" : Xr(r) };
    var ee = function(r, e) { return O(r) ? r : B(r, e) ? [r] : Yr(re(r)) },
        te = 1 / 0;
    var ne = function(r) { if ("string" == typeof r || F(r)) return r; var e = r + ""; return "0" == e && 1 / r == -te ? "-0" : e };
    var oe = function(r, e) { for (var t = 0, n = (e = ee(e, r)).length; null != r && t < n;) r = r[ne(e[t++])]; return t && t == n ? r : void 0 };
    var ce = function(r, e, t) { var n = null == r ? void 0 : oe(r, e); return void 0 === n ? t : n },
        ae = function() { try { var r = fr(Object, "defineProperty"); return r({}, "", {}), r } catch (r) {} }();
    var ie = function(r, e, t) { "__proto__" == e && ae ? ae(r, e, { configurable: !0, enumerable: !0, value: t, writable: !0 }) : r[e] = t },
        ue = Object.prototype.hasOwnProperty;
    var fe = function(r, e, t) {
            var n = r[e];
            ue.call(r, e) && Or(n, t) && (void 0 !== t || e in r) || ie(r, e, t)
        },
        se = 9007199254740991,
        le = /^(?:0|[1-9]\d*)$/;
    var pe = function(r, e) { var t = typeof r; return !!(e = null == e ? se : e) && ("number" == t || "symbol" != t && le.test(r)) && r > -1 && r % 1 == 0 && r < e };
    var ve = function(r, e, t, n) {
        if (!$(r)) return r;
        for (var o = -1, c = (e = ee(e, r)).length, a = c - 1, i = r; null != i && ++o < c;) {
            var u = ne(e[o]),
                f = t;
            if (o != a) {
                var s = i[u];
                void 0 === (f = n ? n(s, u, i) : void 0) && (f = $(s) ? s : pe(e[o + 1]) ? [] : {})
            }
            fe(i, u, f), i = i[u]
        }
        return r
    };
    var de = function(r, e, t) { return null == r ? r : ve(r, e, t) },
        be = Object.prototype.hasOwnProperty;
    var ge = function(r, e) { return null != r && be.call(r, e) },
        he = "[object Arguments]";
    var ye = function(r) { return N(r) && U(r) == he },
        _e = Object.prototype,
        je = _e.hasOwnProperty,
        me = _e.propertyIsEnumerable,
        we = ye(function() { return arguments }()) ? ye : function(r) { return N(r) && je.call(r, "callee") && !me.call(r, "callee") },
        Oe = 9007199254740991;
    var Re = function(r) { return "number" == typeof r && r > -1 && r % 1 == 0 && r <= Oe };
    var ke = function(r, e, t) {
        for (var n = -1, o = (e = ee(e, r)).length, c = !1; ++n < o;) {
            var a = ne(e[n]);
            if (!(c = null != r && t(r, a))) break;
            r = r[a]
        }
        return c || ++n != o ? c : !!(o = null == r ? 0 : r.length) && Re(o) && pe(a, o) && (O(r) || we(r))
    };
    var Ee = function(r, e) { return null != r && ke(r, e, ge) };
    var Ae = function() { this.__data__ = new zr, this.size = 0 };
    var Se = function(r) {
        var e = this.__data__,
            t = e.delete(r);
        return this.size = e.size, t
    };
    var xe = function(r) { return this.__data__.get(r) };
    var Ie = function(r) { return this.__data__.has(r) },
        ze = 200;
    var Pe = function(r, e) {
        var t = this.__data__;
        if (t instanceof zr) {
            var n = t.__data__;
            if (!Pr || n.length < ze - 1) return n.push([r, e]), this.size = ++t.size, this;
            t = this.__data__ = new qr(n)
        }
        return t.set(r, e), this.size = t.size, this
    };

    function Ce(r) {
        var e = this.__data__ = new zr(r);
        this.size = e.size
    }
    Ce.prototype.clear = Ae, Ce.prototype.delete = Se, Ce.prototype.get = xe, Ce.prototype.has = Ie, Ce.prototype.set = Pe;
    var Te = Ce;
    var De = function(r, e) { for (var t = -1, n = null == r ? 0 : r.length; ++t < n && !1 !== e(r[t], t, r);); return r };
    var Ue = function(r, e, t, n) {
        var o = !t;
        t || (t = {});
        for (var c = -1, a = e.length; ++c < a;) {
            var i = e[c],
                u = n ? n(t[i], r[i], i, t, r) : void 0;
            void 0 === u && (u = r[i]), o ? ie(t, i, u) : fe(t, i, u)
        }
        return t
    };
    var Ne = function(r, e) { for (var t = -1, n = Array(r); ++t < r;) n[t] = e(t); return n },
        Me = t(2),
        Fe = {};
    Fe["[object Float32Array]"] = Fe["[object Float64Array]"] = Fe["[object Int8Array]"] = Fe["[object Int16Array]"] = Fe["[object Int32Array]"] = Fe["[object Uint8Array]"] = Fe["[object Uint8ClampedArray]"] = Fe["[object Uint16Array]"] = Fe["[object Uint32Array]"] = !0, Fe["[object Arguments]"] = Fe["[object Array]"] = Fe["[object ArrayBuffer]"] = Fe["[object Boolean]"] = Fe["[object DataView]"] = Fe["[object Date]"] = Fe["[object Error]"] = Fe["[object Function]"] = Fe["[object Map]"] = Fe["[object Number]"] = Fe["[object Object]"] = Fe["[object RegExp]"] = Fe["[object Set]"] = Fe["[object String]"] = Fe["[object WeakMap]"] = !1;
    var Le = function(r) { return N(r) && Re(r.length) && !!Fe[U(r)] };
    var qe = function(r) { return function(e) { return r(e) } },
        Be = t(1),
        $e = Be.a && Be.a.isTypedArray,
        Ve = $e ? qe($e) : Le,
        Je = Object.prototype.hasOwnProperty;
    var Ge = function(r, e) {
            var t = O(r),
                n = !t && we(r),
                o = !t && !n && Object(Me.a)(r),
                c = !t && !n && !o && Ve(r),
                a = t || n || o || c,
                i = a ? Ne(r.length, String) : [],
                u = i.length;
            for (var f in r) !e && !Je.call(r, f) || a && ("length" == f || o && ("offset" == f || "parent" == f) || c && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || pe(f, u)) || i.push(f);
            return i
        },
        We = Object.prototype;
    var Ye = function(r) { var e = r && r.constructor; return r === ("function" == typeof e && e.prototype || We) };
    var He = function(r, e) { return function(t) { return r(e(t)) } },
        Ke = He(Object.keys, Object),
        Ze = Object.prototype.hasOwnProperty;
    var Qe = function(r) { if (!Ye(r)) return Ke(r); var e = []; for (var t in Object(r)) Ze.call(r, t) && "constructor" != t && e.push(t); return e };
    var Xe = function(r) { return null != r && Re(r.length) && !H(r) };
    var rt = function(r) { return Xe(r) ? Ge(r) : Qe(r) };
    var et = function(r, e) { return r && Ue(e, rt(e), r) };
    var tt = function(r) {
            var e = [];
            if (null != r)
                for (var t in Object(r)) e.push(t);
            return e
        },
        nt = Object.prototype.hasOwnProperty;
    var ot = function(r) {
        if (!$(r)) return tt(r);
        var e = Ye(r),
            t = [];
        for (var n in r)("constructor" != n || !e && nt.call(r, n)) && t.push(n);
        return t
    };
    var ct = function(r) { return Xe(r) ? Ge(r, !0) : ot(r) };
    var at = function(r, e) { return r && Ue(e, ct(e), r) },
        it = t(4);
    var ut = function(r, e) {
        var t = -1,
            n = r.length;
        for (e || (e = Array(n)); ++t < n;) e[t] = r[t];
        return e
    };
    var ft = function(r, e) {
        for (var t = -1, n = null == r ? 0 : r.length, o = 0, c = []; ++t < n;) {
            var a = r[t];
            e(a, t, r) && (c[o++] = a)
        }
        return c
    };
    var st = function() { return [] },
        lt = Object.prototype.propertyIsEnumerable,
        pt = Object.getOwnPropertySymbols,
        vt = pt ? function(r) { return null == r ? [] : (r = Object(r), ft(pt(r), function(e) { return lt.call(r, e) })) } : st;
    var dt = function(r, e) { return Ue(r, vt(r), e) };
    var bt = function(r, e) { for (var t = -1, n = e.length, o = r.length; ++t < n;) r[o + t] = e[t]; return r },
        gt = He(Object.getPrototypeOf, Object),
        ht = Object.getOwnPropertySymbols ? function(r) { for (var e = []; r;) bt(e, vt(r)), r = gt(r); return e } : st;
    var yt = function(r, e) { return Ue(r, ht(r), e) };
    var _t = function(r, e, t) { var n = e(r); return O(r) ? n : bt(n, t(r)) };
    var jt = function(r) { return _t(r, rt, vt) };
    var mt = function(r) { return _t(r, ct, ht) },
        wt = fr(R.a, "DataView"),
        Ot = fr(R.a, "Promise"),
        Rt = fr(R.a, "Set"),
        kt = fr(R.a, "WeakMap"),
        Et = rr(wt),
        At = rr(Pr),
        St = rr(Ot),
        xt = rr(Rt),
        It = rr(kt),
        zt = U;
    (wt && "[object DataView]" != zt(new wt(new ArrayBuffer(1))) || Pr && "[object Map]" != zt(new Pr) || Ot && "[object Promise]" != zt(Ot.resolve()) || Rt && "[object Set]" != zt(new Rt) || kt && "[object WeakMap]" != zt(new kt)) && (zt = function(r) {
        var e = U(r),
            t = "[object Object]" == e ? r.constructor : void 0,
            n = t ? rr(t) : "";
        if (n) switch (n) {
            case Et:
                return "[object DataView]";
            case At:
                return "[object Map]";
            case St:
                return "[object Promise]";
            case xt:
                return "[object Set]";
            case It:
                return "[object WeakMap]"
        }
        return e
    });
    var Pt = zt,
        Ct = Object.prototype.hasOwnProperty;
    var Tt = function(r) {
            var e = r.length,
                t = new r.constructor(e);
            return e && "string" == typeof r[0] && Ct.call(r, "index") && (t.index = r.index, t.input = r.input), t
        },
        Dt = R.a.Uint8Array;
    var Ut = function(r) { var e = new r.constructor(r.byteLength); return new Dt(e).set(new Dt(r)), e };
    var Nt = function(r, e) { var t = e ? Ut(r.buffer) : r.buffer; return new r.constructor(t, r.byteOffset, r.byteLength) },
        Mt = /\w*$/;
    var Ft = function(r) { var e = new r.constructor(r.source, Mt.exec(r)); return e.lastIndex = r.lastIndex, e },
        Lt = k ? k.prototype : void 0,
        qt = Lt ? Lt.valueOf : void 0;
    var Bt = function(r) { return qt ? Object(qt.call(r)) : {} };
    var $t = function(r, e) { var t = e ? Ut(r.buffer) : r.buffer; return new r.constructor(t, r.byteOffset, r.length) },
        Vt = "[object Boolean]",
        Jt = "[object Date]",
        Gt = "[object Map]",
        Wt = "[object Number]",
        Yt = "[object RegExp]",
        Ht = "[object Set]",
        Kt = "[object String]",
        Zt = "[object Symbol]",
        Qt = "[object ArrayBuffer]",
        Xt = "[object DataView]",
        rn = "[object Float32Array]",
        en = "[object Float64Array]",
        tn = "[object Int8Array]",
        nn = "[object Int16Array]",
        on = "[object Int32Array]",
        cn = "[object Uint8Array]",
        an = "[object Uint8ClampedArray]",
        un = "[object Uint16Array]",
        fn = "[object Uint32Array]";
    var sn = function(r, e, t) {
            var n = r.constructor;
            switch (e) {
                case Qt:
                    return Ut(r);
                case Vt:
                case Jt:
                    return new n(+r);
                case Xt:
                    return Nt(r, t);
                case rn:
                case en:
                case tn:
                case nn:
                case on:
                case cn:
                case an:
                case un:
                case fn:
                    return $t(r, t);
                case Gt:
                    return new n;
                case Wt:
                case Kt:
                    return new n(r);
                case Yt:
                    return Ft(r);
                case Ht:
                    return new n;
                case Zt:
                    return Bt(r)
            }
        },
        ln = Object.create,
        pn = function() {
            function r() {}
            return function(e) {
                if (!$(e)) return {};
                if (ln) return ln(e);
                r.prototype = e;
                var t = new r;
                return r.prototype = void 0, t
            }
        }();
    var vn = function(r) { return "function" != typeof r.constructor || Ye(r) ? {} : pn(gt(r)) },
        dn = "[object Map]";
    var bn = function(r) { return N(r) && Pt(r) == dn },
        gn = Be.a && Be.a.isMap,
        hn = gn ? qe(gn) : bn,
        yn = "[object Set]";
    var _n = function(r) { return N(r) && Pt(r) == yn },
        jn = Be.a && Be.a.isSet,
        mn = jn ? qe(jn) : _n,
        wn = 1,
        On = 2,
        Rn = 4,
        kn = "[object Arguments]",
        En = "[object Function]",
        An = "[object GeneratorFunction]",
        Sn = "[object Object]",
        xn = {};
    xn[kn] = xn["[object Array]"] = xn["[object ArrayBuffer]"] = xn["[object DataView]"] = xn["[object Boolean]"] = xn["[object Date]"] = xn["[object Float32Array]"] = xn["[object Float64Array]"] = xn["[object Int8Array]"] = xn["[object Int16Array]"] = xn["[object Int32Array]"] = xn["[object Map]"] = xn["[object Number]"] = xn[Sn] = xn["[object RegExp]"] = xn["[object Set]"] = xn["[object String]"] = xn["[object Symbol]"] = xn["[object Uint8Array]"] = xn["[object Uint8ClampedArray]"] = xn["[object Uint16Array]"] = xn["[object Uint32Array]"] = !0, xn["[object Error]"] = xn[En] = xn["[object WeakMap]"] = !1;
    var In = function r(e, t, n, o, c, a) {
            var i, u = t & wn,
                f = t & On,
                s = t & Rn;
            if (n && (i = c ? n(e, o, c, a) : n(e)), void 0 !== i) return i;
            if (!$(e)) return e;
            var l = O(e);
            if (l) { if (i = Tt(e), !u) return ut(e, i) } else {
                var p = Pt(e),
                    v = p == En || p == An;
                if (Object(Me.a)(e)) return Object(it.a)(e, u);
                if (p == Sn || p == kn || v && !c) { if (i = f || v ? {} : vn(e), !u) return f ? yt(e, at(i, e)) : dt(e, et(i, e)) } else {
                    if (!xn[p]) return c ? e : {};
                    i = sn(e, p, u)
                }
            }
            a || (a = new Te);
            var d = a.get(e);
            if (d) return d;
            if (a.set(e, i), mn(e)) return e.forEach(function(o) { i.add(r(o, t, n, o, e, a)) }), i;
            if (hn(e)) return e.forEach(function(o, c) { i.set(c, r(o, t, n, c, e, a)) }), i;
            var b = s ? f ? mt : jt : f ? keysIn : rt,
                g = l ? void 0 : b(e);
            return De(g || e, function(o, c) { g && (o = e[c = o]), fe(i, c, r(o, t, n, c, e, a)) }), i
        },
        zn = 4;
    var Pn = function(r) { return In(r, zn) };
    var Cn = function(r, e, t) {
        (void 0 === t || Or(r[e], t)) && (void 0 !== t || e in r) || ie(r, e, t)
    };
    var Tn = function(r) { return function(e, t, n) { for (var o = -1, c = Object(e), a = n(e), i = a.length; i--;) { var u = a[r ? i : ++o]; if (!1 === t(c[u], u, c)) break } return e } }();
    var Dn = function(r) { return N(r) && Xe(r) },
        Un = "[object Object]",
        Nn = Function.prototype,
        Mn = Object.prototype,
        Fn = Nn.toString,
        Ln = Mn.hasOwnProperty,
        qn = Fn.call(Object);
    var Bn = function(r) { if (!N(r) || U(r) != Un) return !1; var e = gt(r); if (null === e) return !0; var t = Ln.call(e, "constructor") && e.constructor; return "function" == typeof t && t instanceof t && Fn.call(t) == qn };
    var $n = function(r, e) { if ("__proto__" != e) return r[e] };
    var Vn = function(r) { return Ue(r, ct(r)) };
    var Jn = function(r, e, t, n, o, c, a) {
        var i = $n(r, t),
            u = $n(e, t),
            f = a.get(u);
        if (f) Cn(r, t, f);
        else {
            var s = c ? c(i, u, t + "", r, e, a) : void 0,
                l = void 0 === s;
            if (l) {
                var p = O(u),
                    v = !p && Object(Me.a)(u),
                    d = !p && !v && Ve(u);
                s = u, p || v || d ? O(i) ? s = i : Dn(i) ? s = ut(i) : v ? (l = !1, s = Object(it.a)(u, !0)) : d ? (l = !1, s = $t(u, !0)) : s = [] : Bn(u) || we(u) ? (s = i, we(i) ? s = Vn(i) : $(i) && !H(i) || (s = vn(u))) : l = !1
            }
            l && (a.set(u, s), o(s, u, n, c, a), a.delete(u)), Cn(r, t, s)
        }
    };
    var Gn = function r(e, t, n, o, c) {
        e !== t && Tn(t, function(a, i) {
            if ($(a)) c || (c = new Te), Jn(e, t, i, n, r, o, c);
            else {
                var u = o ? o($n(e, i), a, i + "", e, t, c) : void 0;
                void 0 === u && (u = a), Cn(e, i, u)
            }
        }, ct)
    };
    var Wn = function(r) { return r };
    var Yn = function(r, e, t) {
            switch (t.length) {
                case 0:
                    return r.call(e);
                case 1:
                    return r.call(e, t[0]);
                case 2:
                    return r.call(e, t[0], t[1]);
                case 3:
                    return r.call(e, t[0], t[1], t[2])
            }
            return r.apply(e, t)
        },
        Hn = Math.max;
    var Kn = function(r, e, t) {
        return e = Hn(void 0 === e ? r.length - 1 : e, 0),
            function() {
                for (var n = arguments, o = -1, c = Hn(n.length - e, 0), a = Array(c); ++o < c;) a[o] = n[e + o];
                o = -1;
                for (var i = Array(e + 1); ++o < e;) i[o] = n[o];
                return i[e] = t(a), Yn(r, this, i)
            }
    };
    var Zn = function(r) { return function() { return r } },
        Qn = ae ? function(r, e) { return ae(r, "toString", { configurable: !0, enumerable: !1, value: Zn(e), writable: !0 }) } : Wn,
        Xn = 800,
        ro = 16,
        eo = Date.now;
    var to = function(r) {
        var e = 0,
            t = 0;
        return function() {
            var n = eo(),
                o = ro - (n - t);
            if (t = n, o > 0) { if (++e >= Xn) return arguments[0] } else e = 0;
            return r.apply(void 0, arguments)
        }
    }(Qn);
    var no = function(r, e) { return to(Kn(r, e, Wn), r + "") };
    var oo = function(r, e, t) { if (!$(t)) return !1; var n = typeof e; return !!("number" == n ? Xe(t) && pe(e, t.length) : "string" == n && e in t) && Or(t[e], r) };
    var co = function(r) {
            return no(function(e, t) {
                var n = -1,
                    o = t.length,
                    c = o > 1 ? t[o - 1] : void 0,
                    a = o > 2 ? t[2] : void 0;
                for (c = r.length > 3 && "function" == typeof c ? (o--, c) : void 0, a && oo(t[0], t[1], a) && (c = o < 3 ? void 0 : c, o = 1), e = Object(e); ++n < o;) {
                    var i = t[n];
                    i && r(e, i, n, c)
                }
                return e
            })
        }(function(r, e, t) { Gn(r, e, t) }),
        ao = t(5),
        io = t.n(ao);

    function uo(r) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(r) { return Object.getOwnPropertyDescriptor(t, r).enumerable }))), n.forEach(function(e) { fo(r, e, t[e]) })
        }
        return r
    }

    function fo(r, e, t) { return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r }

    function so(r) { return function(r) { if (Array.isArray(r)) { for (var e = 0, t = new Array(r.length); e < r.length; e++) t[e] = r[e]; return t } }(r) || function(r) { if (Symbol.iterator in Object(r) || "[object Arguments]" === Object.prototype.toString.call(r)) return Array.from(r) }(r) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function lo(r) { return (lo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) { return typeof r } : function(r) { return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r })(r) }
    t.d(e, "Elog", function() { return Eo }), t.d(e, "Plog", function() { return Ao }), t.d(e, "Ilog", function() { return So });
    var po = "crosSdkDT2019DeviceId",
        vo = {};
    vo.get = ce, vo.set = de, vo.has = Ee, vo.clone = Pn, vo.isFunction = H, vo.merge = co;
    var bo = { 1: "ERROR_RUNTIME", 2: "ERROR_SCRIPT", 3: "ERROR_STYLE", 4: "ERROR_IMAGE", 5: "ERROR_AUDIO", 6: "ERROR_VIDEO", 7: "ERROR_CONSOLE", 8: "ERROR_TRY_CATCH" },
        go = { 1: "JS_RUNTIME_ERROR", 2: "SCRIPT_LOAD_ERROR", 3: "CSS_LOAD_ERROR", 4: "IMAGE_LOAD_ERROR", 5: "AUDIO_LOAD_ERROR", 6: "VIDEO_LOAD_ERROR", 7: "CONSOLE_ERROR", 8: "TRY_CATCH_ERROR" },
        ho = { pid: "", uuid: "", ucid: "", is_test: !1, record: { time_on_page: !0, performance: !0, js_error: !0, js_error_report_config: { ERROR_RUNTIME: !0, ERROR_SCRIPT: !0, ERROR_STYLE: !0, ERROR_IMAGE: !0, ERROR_AUDIO: !0, ERROR_VIDEO: !0, ERROR_CONSOLE: !0, ERROR_TRY_CATCH: !0, checkErrorNeedReport: function() { arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return !0 } } }, version: "1.0.0", getPageType: function() { var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location; return "".concat(r.host).concat(r.pathname) } },
        yo = vo.clone(ho);

    function _o(r) {
        var e = 0,
            t = 0;
        if (0 === (r += "").length) return e.toString(36);
        for (t = 0; t < r.length; t++) e = (e << 5) - e + r.charCodeAt(t), e |= 0;
        return e.toString(36)
    }

    function jo() {
        var r = io.a.get(po);
        if (void 0 === r) {
            r = function() {
                function r() { return Math.floor(65536 * (1 + Math.random())).toString(36).substring(1) }
                return _o(1 * new Date + "") + "-" + _o(navigator.userAgent) + "-" + r() + r() + r() + r() + r() + "-" + r() + r() + r()
            }();
            var e = function(r) {
                var e, t = new RegExp(/(.*?)\.?([^\.]*?)\.(gl|com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/),
                    n = r.match(t);
                n && (e = n[2] ? n[2] + "." + n[3] : void 0);
                if (void 0 === e) {
                    var o = r.split(".");
                    e = o.slice(o.length - 2, o.length).join(".")
                }
                return e += ""
            }(location.hostname);
            io.a.set(po, r, { expires: 1e3, domain: e }), r = io.a.get(po) || ""
        }
        return r
    }

    function mo() {
        var r;
        yo.is_test && (r = console).log.apply(r, arguments)
    }
    var wo = function() {
        var r, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            c = function() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (!vo.get(yo, ["pid"], "")) return "请设置工程ID[pid]";
                if ("error" === r) { if (e < 0 || e > 9999) return "type:error的log code 应该在1～9999之间" } else if ("product" === r) { if (e < 1e4 || e > 19999) return "type:product的log code 应该在10000～19999之间" } else if ("info" === r && (e < 2e4 || e > 29999)) return "type:info的log code 应该在20000～29999之间";
                if ("object" !== lo(t)) return "second argument detail required object";
                if ("object" !== lo(n)) return "third argument extra required object";
                var o = j[e];
                if (o) {
                    var c = so(o.df),
                        a = Object.keys(t),
                        i = [];
                    if (c.forEach(function(r) {-1 === a.indexOf(r) && i.push(r) }), i.length) return "code: ".concat(e, " 要求 ").concat(i.join(","), "字段必填")
                }
                return ""
            }(e, t, n, o);
        if (c) return r = c, console.log("%c ".concat(r), "color:red"), c;
        var a = vo.get(yo, ["getPageType"], vo.get(ho, ["getPageType"])),
            i = window.location,
            u = i.href;
        try { u = "" + a(i) } catch (r) { mo("config.getPageType执行时发生异常, 请注意, 错误信息=>", { e: r, location: i }), u = "".concat(i.host).concat(i.pathname) }
        var f = {
            type: e,
            code: t,
            detail: function(r) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = j[r];
                if (t) {
                    var n = uo({}, { error_no: "", http_code: "", during_ms: "", url: "", request_size_b: "", response_size_b: "" });
                    return Object.keys(e).forEach(function(r) {
                        var o = t.dft[r];
                        o ? (n[o] = e[r], delete e[r]) : n[r] = e[r]
                    }), n
                }
                return e
            }(t, n),
            extra: o,
            common: uo({}, yo, { timestamp: Date.now(), runtime_version: yo.version, sdk_version: w.a.version, page_type: u })
        };
        (new window.Image).src = "".concat("https://dig.lianjia.com/fee.gif", "?d=").concat(encodeURIComponent(JSON.stringify(f)))
    };

    function Oo(r, e) { var t = vo.get(yo, ["record", "js_error_report_config", "checkErrorNeedReport"], "");!1 === vo.isFunction(t) && (t = vo.get(yo, ["record", "js_error_report_config", "checkErrrorNeedReport"], vo.get(ho, ["record", "js_error_report_config", "checkErrorNeedReport"]))); var n = !1; try { n = t(r, e) } catch (t) { mo("config.record.js_error_report_config.checkErrorNeedReport执行时发生异常, 请注意, 页面报错信息为=>", { e: t, desc: r, stack: e }), n = !0 } return !!n }
    wo.set = function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        yo = e ? uo({}, r) : vo.merge(yo, r);
        var t = vo.get(yo, ["is_test"], vo.get(ho, ["is_test"])),
            n = vo.get(yo, ["test"], !1),
            o = t || n,
            c = vo.get(yo, ["uuid"], "");
        "" === c && (c = jo(), vo.set(yo, ["uuid"], c)), "" === vo.get(yo, ["ucid"], "") && mo("警告: 未设置ucid(用户唯一标识), 无法统计新增用户数");
        var a = vo.get(yo, ["record", "js_error_report_config", "checkErrorNeedReport"]);
        !1 === vo.isFunction(a) && (a = vo.get(yo, ["record", "js_error_report_config", "checkErrorNeedReport"])), !1 === vo.isFunction(a) && mo("警告: config.record.js_error_report_config.checkErrorNeedReport 不是可执行函数, 将导致错误打点数据异常");
        var i = vo.get(yo, ["getPageType"]);
        !1 === vo.isFunction(i) && mo("警告: config.getPageType 不是可执行函数, 将导致打点数据异常!"), o && (yo.test = "b47ca710747e96f1c523ebab8022c19e9abaa56b", mo("配置更新完毕"), mo("当前为测试模式"), mo("Tip: 测试模式下打点数据仅供浏览, 不会展示在系统中"), mo("更新后配置为:", yo))
    }, y.init({
        concat: !1,
        report: function() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                e = vo.get(yo, ["record", "js_error"], vo.get(ho, ["record", "js_error"])),
                t = vo.get(yo, ["jserror"], !1);
            if (!1 !== (e || t)) {
                var n = !0,
                    o = !1,
                    c = void 0;
                try {
                    for (var a, i = r[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                        var u = a.value,
                            f = u.type,
                            s = u.desc,
                            l = u.stack,
                            p = vo.get(bo, f, "");
                        if (!1 !== vo.get(yo, ["record", "js_error_report_config", p], vo.get(ho, ["record", "js_error_report_config", p])))
                            if (!1 != !!Oo(s, l)) {
                                var v = "页面报错_" + go[f],
                                    d = window.location;
                                mo("[自动]捕捉到页面错误, 发送打点数据, 上报内容 => ", { error_no: v, url: "".concat(d.host).concat(d.pathname), desc: s, stack: l }), wo("error", 7, { error_no: v, url: "".concat(d.host).concat(d.pathname) }, { desc: s, stack: l })
                            } else mo("config.record.js_error_report_config.checkErrorNeedReport返回值为false, 跳过此类错误, 页面报错信息为=>", { desc: s, stack: l });
                        else mo("config.record.js_error_report_config.".concat(p, "值为false, 跳过类别为").concat(p, "的页面报错打点, 错误信息=>"), u)
                    }
                } catch (r) { o = !0, c = r } finally { try { n || null == i.return || i.return() } finally { if (o) throw c } }
            } else mo("config.record.js_error为false, 跳过页面报错打点, 页面报错内容为 =>", r)
        }
    }), window.addEventListener("load", function() {
        var r = vo.get(yo, ["record", "performance"], vo.get(ho, ["record", "performance"])),
            e = vo.get(yo, ["performance"], !1);
        if (!1 !== (r || e)) {
            var t = window.performance;
            if (t) {
                Object.keys(t.timing);
                var n = {};
                for (var o in t.timing) isNaN(t.timing[o]) || (n[o] = t.timing[o]);
                mo("发送页面性能指标数据, 上报内容 => ", uo({}, n, { url: "".concat(window.location.host).concat(window.location.pathname) })), wo("perf", 20001, uo({}, n, { url: "".concat(window.location.host).concat(window.location.pathname) }))
            } else console.log("你的浏览器不支持 performance 接口")
        } else mo("config.record.performance值为false, 跳过性能指标打点")
    }), window.addEventListener("unhandledrejection", function(r) {
        var e = vo.get(r, ["promise"], "") + "",
            t = vo.get(r, ["reason"], "") + "",
            n = vo.get(r, ["reason", "message"], ""),
            o = vo.get(r, ["reason", "stack"], ""),
            c = "Unhandled_Rejection:" + e;
        if (c && o && !1 == !!Oo(c, o)) return void mo("config.record.js_error_report_config.checkErrorNeedReport返回值为false, 跳过此类错误, 页面报错信息为=>", { desc: c, stack: o });
        ko("JS错误_Unhandled_Rejection", location.href, { desc: c, reason: t, message: n, stack: o })
    }, !0);
    var Ro = Date.now();

    function ko() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = {},
            o = {};
        if (r) { n.error_name = "" + r, n.url = "" + e, n.error_name.length > 200 && (n.error_name = n.error_name.slice(0, 200), mo("error_name长度不能超过200字符, 自动截断. 截断后为=>", n.error_name)), n.url.length > 200 && (n.url = n.url.slice(0, 200), mo("url长度不能超过200字符, 自动截断. 截断后为=>", n.error_name)); for (var c = ["http_code", "during_ms", "request_size_b", "response_size_b"], a = 0; a < c.length; a++) { var i = c[a]; if (vo.has(t, [i])) { var u = parseInt(t[i]);!1 === isNaN(u) ? n[i] = u : n[i] = 0 } } for (var f = Object.keys(t), s = 0; s < f.length; s++) { var l = f[s];!0 !== { error_no: !0, error_name: !0, url: !0, http_code: !0, during_ms: !0, request_size_b: !0, response_size_b: !0 }[l] && (o[l] = t[l]) } return mo("发送自定义错误数据, 上报内容 => ", { detail: n, extra: o }), wo("error", 8, n, o) }
        console.log("dt.notify 的 errorName 不能为空")
    }
    window.addEventListener("click", function() {
        var r = vo.get(yo, ["record", "time_on_page"], vo.get(ho, ["record", "time_on_page"])),
            e = vo.get(yo, ["online"], !1);
        if (!1 !== (r || e)) {
            var t = Date.now() - Ro;
            t > 9e5 ? Ro = Date.now() : t > 5e3 && (Ro = Date.now(), mo("发送用户留存时间埋点, 埋点内容 => ", { duration_ms: t }), wo.product(10001, { duration_ms: t }))
        } else mo("config.record.time_on_page值为false, 跳过停留时长打点")
    }, !1), wo.notify = ko, wo.behavior = function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        mo("发送用户点击行为埋点, 上报内容 => ", { code: r, name: e, url: t }), wo.product(10002, { code: r, name: e, url: t })
    }, window.dt = wo;
    var Eo = wo.error = function(r, e, t) { return wo("error", r, e, t) },
        Ao = wo.product = function(r, e, t) { return wo("product", r, e, t) },
        So = wo.info = function(r, e, t) { return wo("info", r, e, t) };
    e.default = wo
}]);