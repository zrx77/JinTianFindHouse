! function(e) {
    var t = {};

    function n(a) { if (t[a]) return t[a].exports; var i = t[a] = { i: a, l: !1, exports: {} }; return e[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports }
    n.m = e, n.c = t, n.d = function(e, t, a) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(a, i, function(t) { return e[t] }.bind(null, i));
        return a
    }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 207)
}([function(module, exports, __webpack_require__) {
    "use strict";

    function getCookie(e) {
        var t = null;
        if (document.cookie && "" != document.cookie)
            for (var n = document.cookie.split(";"), a = 0; a < n.length; a++) { var i = $.trim(n[a]); if (i.substring(0, e.length + 1) == e + "=") { t = decodeURIComponent(i.substring(e.length + 1)); break } }
        return t
    }
    
    $(".attention-btn").click(function(){
    	alert(1);
    });
    
    function bindTextChange(e, t) {
        var n = this,
            a = function() { for (var e = 3, t = document.createElement("div"), n = t.getElementsByTagName("i"); t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e", n[0];); return e > 4 && e }();
        if (a && a < 9) e.on("propertychange", function() { "value" === window.event.propertyName && t.call(n) });
        else if (e.on("input", t), 9 === a) {
            var i = function() { t.call(e[0]) };
            e.on("focus", function() { document.addEventListener("selectionchange", i) }).on("blur", function() { document.removeEventListener("selectionchange", i) })
        }
    }
    
    
    function getStyle(e, t) { var n = e.currentStyle ? e.currentStyle : getComputedStyle(e, null); return parseFloat(n[t]) }

    function jsonToString(e) { var t = ""; return $.each(e, function(e, n) { t += "&" + e + "=" + n }), t.substring(1) }

    function addQuery(url, key, value) {
        if (!url || url.indexOf("/") && url.indexOf("http:") && url.indexOf("https:")) return url;
        var newUrl = "",
            reg = new RegExp("(^|)" + key + "=([^&]*)(|$)"),
            temp = key + "=" + value;
        return newUrl = null != url.match(reg) ? url.replace(eval(reg), temp) : url.match("[?]") ? url + "&" + temp : url + "?" + temp, newUrl
    }

    function getQuery(e, t) {
        var n = e.split("?"),
            a = "";
        n && 2 === n.length && (a = n[1]);
        var i = a.split("&");
        if (!t) return "";
        for (var o = 0, r = i.length; o < r; o++) { var s = i[o].split("="); if (s[0] === t) return s[1] }
        return ""
    }

    function debounce(e, t, n) {
        var a, i, o, r, s;
        t = t || 200;
        var l = function l() {
            var u = (new Date).getTime() - r;
            u < t && u >= 0 ? a = setTimeout(l, t - u) : (a = null, n || (s = e.apply(o, i), a || (o = i = null)))
        };
        return function() { o = this, i = arguments, r = (new Date).getTime(); var u = n && !a; return a || (a = setTimeout(l, t)), u && (s = e.apply(o, i), o = i = null), s }
    }

    function throttle(e, t, n) {
        var a, i, o, r = null,
            s = 0;
        n || (n = {});
        var l = function() { s = !1 === n.leading ? 0 : (new Date).getTime(), r = null, o = e.apply(a, i), r || (a = i = null) };
        return function() {
            var u = (new Date).getTime();
            s || !1 !== n.leading || (s = u);
            var c = t - (u - s);
            return a = this, i = arguments, c <= 0 || c > t ? (r && (clearTimeout(r), r = null), s = u, o = e.apply(a, i), r || (a = i = null)) : r || !1 === n.trailing || (r = setTimeout(l, c)), o
        }
    }
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.getCookie = getCookie, exports.bindTextChange = bindTextChange, exports.getStyle = getStyle, exports.jsonToString = jsonToString, exports.addQuery = addQuery, exports.getQuery = getQuery, exports.debounce = debounce, exports.throttle = throttle
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = location.hostname,
        i = "prod";
    a.indexOf("dev") > -1 ? i = "dev" : a.indexOf("test") > -1 && (i = "test"), t.default = i
}, function(e, t, n) {
    "use strict";
    var a = n(9);

    function i() {}
    var o = null,
        r = {};

    function s(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("Promise constructor's argument is not a function");
        this._h = 0, this._i = 0, this._j = null, this._k = null, e !== i && p(e, this)
    }

    function l(e, t) {
        for (; 3 === e._i;) e = e._j;
        if (s._l && s._l(e), 0 === e._i) return 0 === e._h ? (e._h = 1, void(e._k = t)) : 1 === e._h ? (e._h = 2, void(e._k = [e._k, t])) : void e._k.push(t);
        ! function(e, t) {
            a(function() {
                var n = 1 === e._i ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var a = function(e, t) { try { return e(t) } catch (e) { return o = e, r } }(n, e._j);
                    a === r ? c(t.promise, o) : u(t.promise, a)
                } else 1 === e._i ? u(t.promise, e._j) : c(t.promise, e._j)
            })
        }(e, t)
    }

    function u(e, t) {
        if (t === e) return c(e, new TypeError("A promise cannot be resolved with itself."));
        if (t && ("object" == typeof t || "function" == typeof t)) { var n = function(e) { try { return e.then } catch (e) { return o = e, r } }(t); if (n === r) return c(e, o); if (n === e.then && t instanceof s) return e._i = 3, e._j = t, void d(e); if ("function" == typeof n) return void p(n.bind(t), e) }
        e._i = 1, e._j = t, d(e)
    }

    function c(e, t) { e._i = 2, e._j = t, s._m && s._m(e, t), d(e) }

    function d(e) {
        if (1 === e._h && (l(e, e._k), e._k = null), 2 === e._h) {
            for (var t = 0; t < e._k.length; t++) l(e, e._k[t]);
            e._k = null
        }
    }

    function f(e, t, n) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n }

    function p(e, t) {
        var n = !1,
            a = function(e, t, n) { try { e(t, n) } catch (e) { return o = e, r } }(e, function(e) { n || (n = !0, u(t, e)) }, function(e) { n || (n = !0, c(t, e)) });
        n || a !== r || (n = !0, c(t, o))
    }
    e.exports = s, s._l = null, s._m = null, s._n = i, s.prototype.then = function(e, t) {
        if (this.constructor !== s) return function(e, t, n) {
            return new e.constructor(function(a, o) {
                var r = new s(i);
                r.then(a, o), l(e, new f(t, n, r))
            })
        }(this, e, t);
        var n = new s(i);
        return l(this, new f(e, t, n)), n
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
    }();
    var o = function() {
        function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this._events = {} }
        return a(e, [{ key: "on", value: function(e, t) { void 0 === this._events[e] && (this._events[e] = []), "function" == typeof t && this._events[e].push(t) } }, {
            key: "emit",
            value: function(e, t) {
                var n = { type: e, data: t, target: this };
                if (this._events[e] instanceof Array)
                    for (var a = this._events[e], i = 0, o = a.length; i < o; i++) "function" == typeof a[i] && a[i](n)
            }
        }, {
            key: "off",
            value: function(e, t) {
                if (this._events[e] instanceof Array) {
                    for (var n = this._events[e], a = 0, o = n.length; a < o && n[a] !== t; a++);
                    n.splice(i, 1)
                }
            }
        }]), e
    }();
    t.default = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a, i = n(1),
        o = (a = i) && a.__esModule ? a : { default: a };
    var r = { dev: ljConf.domainConfig.ajaxapiroot, test: ljConf.domainConfig.ajaxapiroot, prod: ljConf.domainConfig.ajaxapiroot },
        s = { dev: ljConf.domainConfig.apiroot, test: ljConf.domainConfig.apiroot, prod: ljConf.domainConfig.apiroot };
    t.default = { API_URL: r[o.default], OLD_API: s[o.default] }
}, function(e, t) {
    var n;
    n = function() { return this }();
    try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function i(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; return encodeURIComponent(e) + "=" + encodeURIComponent(t) }
    t.default = {
        get: function(e) {
            var t = document.cookie.indexOf(e + "="),
                n = document.cookie.indexOf(";", t);
            return -1 == t ? "" : decodeURIComponent(document.cookie.substring(t + e.length + 1, n > t ? n : document.cookie.length))
        },
        set: function(e, t, n) {
            var o = void 0,
                r = "";
            n && ((o = new Date).setTime(o.getTime() + n), r = "; expires=" + o.toGMTString());
            if ("object" === (void 0 === e ? "undefined" : a(e)))
                for (var s in e)(e[s] || 0 === e[s]) && (document.cookie = i(s, e[s]) + r + "; path=/; domain=ke.com");
            else(t || 0 === t) && (document.cookie = i(e, t) + r + "; path=/; domain=ke.com")
        },
        del: function(e) {
            var t = "; expires=" + new Date(0).toUTCString();
            document.cookie = i(e) + t + "; path=/; domain=ke.com"
        },
        clear: function() {
            var e = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (e)
                for (var t = e.length; t--;) this.del(e[t])
        }
    }
}, function(e, t, n) {
    "use strict";
    "undefined" == typeof Promise && (n(8).enable(), window.Promise = n(10)), n(11), Object.assign || (Object.assign = n(12)), Object.values || (Object.values = function(e) { return Object.keys(e).map(function(t) { return e[t] }) }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var n = Object(this),
                a = n.length >>> 0;
            if (0 === a) return !1;
            for (var i = 0 | t, o = Math.max(i >= 0 ? i : a - Math.abs(i), 0); o < a;) {
                if (n[o] === e) return !0;
                o++
            }
            return !1
        }
    });
    var a = null;
    n.p = function() {
        if (null === a) {
            var e = "";
            if (document.currentScript) e = document.currentScript.src;
            else {
                var t = document.querySelectorAll("script");
                t.length && (e = t[t.length - 1].src)
            }
            0 != e.indexOf("http") && (e = location.origin + e);
            var n = e.lastIndexOf("/js/");
            n >= 0 && (e = e.substring(0, n + 1)), a = e
        }
        return a
    }()
}, function(e, t, n) {
    "use strict";
    var a = n(2),
        i = [ReferenceError, TypeError, RangeError],
        o = !1;

    function r() { o = !1, a._l = null, a._m = null }

    function s(e, t) { return t.some(function(t) { return e instanceof t }) }
    t.disable = r, t.enable = function(e) {
        e = e || {}, o && r();
        o = !0;
        var t = 0,
            n = 0,
            l = {};

        function u(t) {
            var a;
            (e.allRejections || s(l[t].error, e.whitelist || i)) && (l[t].displayId = n++, e.onUnhandled ? (l[t].logged = !0, e.onUnhandled(l[t].displayId, l[t].error)) : (l[t].logged = !0, l[t].displayId, (((a = l[t].error) && (a.stack || a)) + "").split("\n").forEach(function(e) {})))
        }
        a._l = function(t) {
            var n;
            2 === t._i && l[t._o] && (l[t._o].logged ? (n = t._o, l[n].logged && (e.onHandled ? e.onHandled(l[n].displayId, l[n].error) : l[n].onUnhandled)) : clearTimeout(l[t._o].timeout), delete l[t._o])
        }, a._m = function(e, n) { 0 === e._h && (e._o = t++, l[e._o] = { displayId: null, error: n, timeout: setTimeout(u.bind(null, e._o), s(n, i) ? 100 : 2e3), logged: !1 }) }
    }
}, function(e, t, n) {
    "use strict";
    (function(t) {
        function n(e) { i.length || (a(), !0), i[i.length] = e }
        e.exports = n;
        var a, i = [],
            o = 0,
            r = 1024;

        function s() {
            for (; o < i.length;) {
                var e = o;
                if (o += 1, i[e].call(), o > r) {
                    for (var t = 0, n = i.length - o; t < n; t++) i[t] = i[t + o];
                    i.length -= o, o = 0
                }
            }
            i.length = 0, o = 0, !1
        }
        var l, u, c, d = void 0 !== t ? t : self,
            f = d.MutationObserver || d.WebKitMutationObserver;

        function p(e) {
            return function() {
                var t = setTimeout(a, 0),
                    n = setInterval(a, 50);

                function a() { clearTimeout(t), clearInterval(n), e() }
            }
        }
        "function" == typeof f ? (l = 1, u = new f(s), c = document.createTextNode(""), u.observe(c, { characterData: !0 }), a = function() { l = -l, c.data = l }) : a = p(s), n.requestFlush = a, n.makeRequestCallFromTimer = p
    }).call(this, n(5))
}, function(e, t, n) {
    "use strict";
    var a = n(2);
    e.exports = a;
    var i = c(!0),
        o = c(!1),
        r = c(null),
        s = c(void 0),
        l = c(0),
        u = c("");

    function c(e) { var t = new a(a._n); return t._i = 1, t._j = e, t }
    a.resolve = function(e) {
        if (e instanceof a) return e;
        if (null === e) return r;
        if (void 0 === e) return s;
        if (!0 === e) return i;
        if (!1 === e) return o;
        if (0 === e) return l;
        if ("" === e) return u;
        if ("object" == typeof e || "function" == typeof e) try { var t = e.then; if ("function" == typeof t) return new a(t.bind(e)) } catch (e) { return new a(function(t, n) { n(e) }) }
        return c(e)
    }, a.all = function(e) {
        var t = Array.prototype.slice.call(e);
        return new a(function(e, n) {
            if (0 === t.length) return e([]);
            var i = t.length;

            function o(r, s) {
                if (s && ("object" == typeof s || "function" == typeof s)) { if (s instanceof a && s.then === a.prototype.then) { for (; 3 === s._i;) s = s._j; return 1 === s._i ? o(r, s._j) : (2 === s._i && n(s._j), void s.then(function(e) { o(r, e) }, n)) } var l = s.then; if ("function" == typeof l) return void new a(l.bind(s)).then(function(e) { o(r, e) }, n) }
                t[r] = s, 0 == --i && e(t)
            }
            for (var r = 0; r < t.length; r++) o(r, t[r])
        })
    }, a.reject = function(e) { return new a(function(t, n) { n(e) }) }, a.race = function(e) { return new a(function(t, n) { e.forEach(function(e) { a.resolve(e).then(t, n) }) }) }, a.prototype.catch = function(e) { return this.then(null, e) }
}, function(e, t) {
    ! function(e) {
        "use strict";
        if (!e.fetch) {
            var t = { searchParams: "URLSearchParams" in e, iterable: "Symbol" in e && "iterator" in Symbol, blob: "FileReader" in e && "Blob" in e && function() { try { return new Blob, !0 } catch (e) { return !1 } }(), formData: "FormData" in e, arrayBuffer: "ArrayBuffer" in e };
            if (t.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                a = function(e) { return e && DataView.prototype.isPrototypeOf(e) },
                i = ArrayBuffer.isView || function(e) { return e && n.indexOf(Object.prototype.toString.call(e)) > -1 };
            c.prototype.append = function(e, t) {
                e = s(e), t = l(t);
                var n = this.map[e];
                this.map[e] = n ? n + "," + t : t
            }, c.prototype.delete = function(e) { delete this.map[s(e)] }, c.prototype.get = function(e) { return e = s(e), this.has(e) ? this.map[e] : null }, c.prototype.has = function(e) { return this.map.hasOwnProperty(s(e)) }, c.prototype.set = function(e, t) { this.map[s(e)] = l(t) }, c.prototype.forEach = function(e, t) { for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this) }, c.prototype.keys = function() { var e = []; return this.forEach(function(t, n) { e.push(n) }), u(e) }, c.prototype.values = function() { var e = []; return this.forEach(function(t) { e.push(t) }), u(e) }, c.prototype.entries = function() { var e = []; return this.forEach(function(t, n) { e.push([n, t]) }), u(e) }, t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
            var o = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            g.prototype.clone = function() { return new g(this, { body: this._bodyInit }) }, v.call(g.prototype), v.call(m.prototype), m.prototype.clone = function() { return new m(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new c(this.headers), url: this.url }) }, m.error = function() { var e = new m(null, { status: 0, statusText: "" }); return e.type = "error", e };
            var r = [301, 302, 303, 307, 308];
            m.redirect = function(e, t) { if (-1 === r.indexOf(t)) throw new RangeError("Invalid status code"); return new m(null, { status: t, headers: { location: e } }) }, e.Headers = c, e.Request = g, e.Response = m, e.fetch = function(e, n) {
                return new Promise(function(a, i) {
                    var o = new g(e, n),
                        r = new XMLHttpRequest;
                    r.onload = function() {
                        var e, t, n = {
                            status: r.status,
                            statusText: r.statusText,
                            headers: (e = r.getAllResponseHeaders() || "", t = new c, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                var n = e.split(":"),
                                    a = n.shift().trim();
                                if (a) {
                                    var i = n.join(":").trim();
                                    t.append(a, i)
                                }
                            }), t)
                        };
                        n.url = "responseURL" in r ? r.responseURL : n.headers.get("X-Request-URL");
                        var i = "response" in r ? r.response : r.responseText;
                        a(new m(i, n))
                    }, r.onerror = function() { i(new TypeError("Network request failed")) }, r.ontimeout = function() { i(new TypeError("Network request failed")) }, r.open(o.method, o.url, !0), "include" === o.credentials ? r.withCredentials = !0 : "omit" === o.credentials && (r.withCredentials = !1), "responseType" in r && t.blob && (r.responseType = "blob"), o.headers.forEach(function(e, t) { r.setRequestHeader(t, e) }), r.send(void 0 === o._bodyInit ? null : o._bodyInit)
                })
            }, e.fetch.polyfill = !0
        }

        function s(e) { if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name"); return e.toLowerCase() }

        function l(e) { return "string" != typeof e && (e = String(e)), e }

        function u(e) { var n = { next: function() { var t = e.shift(); return { done: void 0 === t, value: t } } }; return t.iterable && (n[Symbol.iterator] = function() { return n }), n }

        function c(e) { this.map = {}, e instanceof c ? e.forEach(function(e, t) { this.append(t, e) }, this) : Array.isArray(e) ? e.forEach(function(e) { this.append(e[0], e[1]) }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) { this.append(t, e[t]) }, this) }

        function d(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function f(e) { return new Promise(function(t, n) { e.onload = function() { t(e.result) }, e.onerror = function() { n(e.error) } }) }

        function p(e) {
            var t = new FileReader,
                n = f(t);
            return t.readAsArrayBuffer(e), n
        }

        function h(e) { if (e.slice) return e.slice(0); var t = new Uint8Array(e.byteLength); return t.set(new Uint8Array(e)), t.buffer }

        function v() {
            return this.bodyUsed = !1, this._initBody = function(e) {
                if (this._bodyInit = e, e)
                    if ("string" == typeof e) this._bodyText = e;
                    else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                else if (t.arrayBuffer && t.blob && a(e)) this._bodyArrayBuffer = h(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!t.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !i(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = h(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, t.blob && (this.blob = function() { var e = d(this); if (e) return e; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this._bodyArrayBuffer ? d(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p) }), this.text = function() { var e, t, n, a = d(this); if (a) return a; if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = f(t), t.readAsText(e), n; if (this._bodyArrayBuffer) return Promise.resolve(function(e) { for (var t = new Uint8Array(e), n = new Array(t.length), a = 0; a < t.length; a++) n[a] = String.fromCharCode(t[a]); return n.join("") }(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, t.formData && (this.formData = function() { return this.text().then(y) }), this.json = function() { return this.text().then(JSON.parse) }, this
        }

        function g(e, t) {
            var n, a, i = (t = t || {}).body;
            if (e instanceof g) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new c(e.headers)), this.method = e.method, this.mode = e.mode, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new c(t.headers)), this.method = (n = t.method || this.method || "GET", a = n.toUpperCase(), o.indexOf(a) > -1 ? a : n), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i)
        }

        function y(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function(e) {
                if (e) {
                    var n = e.split("="),
                        a = n.shift().replace(/\+/g, " "),
                        i = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(a), decodeURIComponent(i))
                }
            }), t
        }

        function m(e, t) { t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new c(t.headers), this.url = t.url || "", this._initBody(e) }
    }("undefined" != typeof self ? self : this)
}, function(e, t, n) {
    "use strict";
    var a = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
    e.exports = function() { try { if (!Object.assign) return !1; var e = new String("abc"); if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1; for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n; if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) { return t[e] }).join("")) return !1; var a = {}; return "abcdefghijklmnopqrst".split("").forEach(function(e) { a[e] = e }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, a)).join("") } catch (e) { return !1 } }() ? Object.assign : function(e, t) { for (var n, r, s = function(e) { if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(e) }(e), l = 1; l < arguments.length; l++) { for (var u in n = Object(arguments[l])) i.call(n, u) && (s[u] = n[u]); if (a) { r = a(n); for (var c = 0; c < r.length; c++) o.call(n, r[c]) && (s[r[c]] = n[r[c]]) } } return s }
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
        }();
    n(15), n(16);
    var o = p(n(3)),
        r = (p(n(17)), p(n(18))),
        s = p(n(20)),
        l = p(n(22)),
        u = p(n(23)),
        c = p(n(24)),
        d = (p(n(25)), p(n(26))),
        f = p(n(31));

    function p(e) { return e && e.__esModule ? e : { default: e } }
    n(33);
    var h = function(e) {
        function t() {
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t);
            var e = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                n = window.BeikeLoginSDK,
                a = new d.default,
                i = new f.default;
            return e._globalPlugins = { loginPlugin: n, footerPlugin: a, rightPlugin: i }, e._globalPlugins.loginPlugin.getUserInfo(), e.lianjiaIM = new r.default,
                function() {
                    s.default.init(), /msie (\d+\.\d+)/i.test(navigator.userAgent) && $("body").addClass("ie", "ie" + (document.documentMode || +RegExp.$1));
                    $(".lj-lazy").lazyload(), $(".lazyload").scrollLoading(), (0, u.default)(), (0, c.default)(), (0, u.default)(), (0, l.default)(), ~location.search.indexOf("debug=true") && alert("redskull 2")
                }(), e
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.default), i(t, [{
            key: "initEvent",
            value: function(e) {
                if ("object" == (void 0 === e ? "undefined" : a(e)))
                    for (var t in e) "function" == typeof e[t] && e[t]()
            }
        }, { key: "loginCheck", value: function(e) { "object" == (void 0 === e ? "undefined" : a(e)) && this._globalPlugins.loginPlugin.bind(function(t) { for (var n in e) "function" == typeof e[n] && e[n](t) }) } }]), t
    }();
    t.default = h
}, function(e, t, n) {}, function(e, t) {
    var n, a, i;
    $.encodeHTML = function(e) { return e ? String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;") : e }, $.decodeHTML = function(e) { return e ? e.replace(/\n/g, "<br/>") : e }, $.removeHTML = function(e) { return e ? e.replace(/<[^>]+>/g, "") : e }, $.queryToJson = function(e, t) {
        if (!e) return {};
        for (var n = e.split("&"), a = {}, i = 0, o = n.length; i < o; i++) {
            var r = n[i].split("=");
            r[0] && (a[r[0]] = r[1] ? t ? decodeURIComponent(r[1]) : r[1] : "")
        }
        return a
    }, $.jsonToQuery = function(e, t) {
        var n = [];
        if (e)
            for (var a in e) n.push(a + "=" + (t ? encodeURIComponent(e[a]) : e[a]));
        return n.join("&")
    }, $.joinUrl = function(e, t) { e || (e = location.href); var n = []; for (var a in t) a && n.push(a + "=" + encodeURIComponent(t[a])); return e.indexOf("?") < 0 && (e += "?"), e + (e.indexOf("&") >= 0 ? e + "&" + n.join("&") : n.join("&")) }, $.parseURL = function(e) { if (!e) return null; for (var t = ["url", "origin", "scheme", "slash", "host", "port", "path", "query", "hash"], n = /^((?:([A-Za-z]+):(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?)(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(e), a = {}, i = 0, o = t.length; i < o; i += 1) a[t[i]] = n[i] || ""; return a }, $.getQuery = function(e) { var t = location.search.substr(1); return $.queryToJson(t)[e] }, $.buildDate = function(e) {
        if ("string" == typeof e)(e = e.replace(/-/g, "/")).indexOf("/") >= 0 ? e = new Date(e) : isNaN(parseInt(e)) || (e = new Date(parseInt(e)));
        else if ("number" == typeof e)(e + "").length <= 10 && (e *= 1e3), e = new Date(e);
        else if (!(e instanceof Date)) return !1;
        return e
    }, $.formatDate = function(e, t) { var n = $.buildDate(e); if (!n) return e; var a = { "M+": n.getMonth() + 1, "d+": n.getDate(), "h+": n.getHours(), "m+": n.getMinutes(), "s+": n.getSeconds(), "q+": Math.floor((n.getMonth() + 3) / 3), S: n.getMilliseconds() }; for (var i in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length))), a) new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[i] : ("00" + a[i]).substr(("" + a[i]).length))); return t }, $.getLimitString = function(e, t, n) { return e ? (n = n || "..", e.length > t && (e = e.substring(0, t) + n), e) : e }, $.bLength = function(e) { if (!e) return 0; var t = e.match(/[^\x00-\xff]/g); return e.length + (t ? t.length : 0) }, $.stringFormat = function(e, t) {
        e = String(e);
        var n = Array.prototype.slice.call(arguments, 1),
            a = Object.prototype.toString;
        return n.length ? (n = 1 == n.length && null !== t && /\[object Array\]|\[object Object\]/.test(a.call(t)) ? t : n, e.replace(/#\{(.+?)\}/g, function(e, t) { var i = n[t]; return "[object Function]" == a.call(i) && (i = i(t)), void 0 === i ? "" : i })) : e
    }, $.trimN = function(e) { return e.replace(/\n{2,}/gm, "\n") }, $.fixedOldComment = function(e) { return e ? $.decodeHTML($.trimN(e.replace(/<[^>]+>/g, "\n"))) : e }, $.replaceTpl = function(e, t, n) {
        var a = String(e),
            i = n || /#\{([^}]*)\}/gm,
            o = String.trim || function(e) { return e.replace(/^\s+|\s+$/g, "") };
        return a.replace(i, function(e, n) { return t[o(n)] })
    }, $.strHTML = function(e, t) {
        e = String(e);
        var n = Array.prototype.slice.call(arguments, 1),
            a = Object.prototype.toString;
        return n.length ? (n = 1 == n.length && null !== t && /\[object Array\]|\[object Object\]/.test(a.call(t)) ? t : n, e.replace(/#\{(.+?)\}/g, function(e, t) { var i = n[t]; return "[object Function]" == a.call(i) && (i = i(t)), void 0 === i ? "" : $.encodeHTML(i) })) : e
    }, $.showIframeImg = function(e, t) {
        var n = $(e),
            a = n.height(),
            i = n.width(),
            o = $.stringFormat("<style>body{margin:0;padding:0}img{width:#{0}px;height:#{1}px;}</style>", i, a),
            r = "frameimg" + Math.round(1e9 * Math.random());
        window.betafang[r] = "<head>" + o + '</head><body><img id="img-' + r + "\" src='" + t + "' /></body>", e.append('<iframe style="display:none" id="' + r + '" src="javascript:parent.betafang[\'' + r + '\'];" frameBorder="0" scrolling="no" width="' + i + '" height="' + a + '"></iframe>')
    }, $.loadScript = function(e) {
        var t = { url: "", charset: "utf-8", crossorigin: "anonymous", complete: $.noop, fail: $.noop };
        if ($.extend(t, e), !t.url) throw "url is requireed";
        var n = !1,
            a = document.createElement("script"),
            i = document.getElementsByTagName("head")[0],
            o = $.Deferred();

        function r() {
            if (n) return !1;
            n = !0, a.onload = null, a.onerror = null, t.complete && t.complete(), o.resolve(), i.removeChild(a)
        }
        return a.onload = r, a.onerror = function() {
            if (n) return !1;
            n = !0, t.fail && t.fail(), i.removeChild(a), o.reject()
        }, a.onreadystatechange = function(e) { "complete" == a.readyState && r() }, a.type = "text/javascript", a.src = t.url, a.charset = t.charset, a.setAttribute("crossorigin", t.crossorigin), i.appendChild(a), o
    }, $.TextAreaUtil = (n = window, a = document.selection, {
        getCursorPosition: function(e) {
            var t = 0;
            if (a) {
                e.focus();
                try {
                    var n = null,
                        i = (n = a.createRange()).duplicate();
                    i.moveToElementText(e), i.setEndPoint("EndToEnd", n), e.selectionStartIE = i.text.length - n.text.length, e.selectionEndIE = e.selectionEndIE + n.text.length, t = e.selectionStartIE
                } catch (n) { t = e.value.length }
            } else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart);
            return t
        },
        getSelectedText: function(e) { var t; return n.getSelection ? void 0 != (t = e).selectionStart && void 0 != t.selectionEnd ? t.value.slice(t.selectionStart, t.selectionEnd) : "" : document.selection.createRange().text }
    }), $.exist = function(e, t) { return "object" == typeof e && t ? (t = t.split(".")).every(function(t) { return !!(e = e[t]) }) ? e : null : e }, $.browser = $.browser || {}, $.browser.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0, /dev.+\.ke\.com\//.test(location.href) && (i = $.ajax, $.ajax = function(e) {
        var t = e.url.match(/^http.+ajax\.api\.ke\.com/),
            n = t ? t[0] : "";
        ~location.href.indexOf("debug=mock") && (0 == e.url.indexOf("/") ? (e.url = "http://mock.ke.com/mock/137" + e.url, e.dataType = "json") : n && ~e.url.indexOf(n) && (e.url = e.url.replace(n, "http://mock.ke.com/mock/137"), e.dataType = "json"), e.url = e.url.replace(/\/+/g, "/").replace(/\:\//, "://"));
        var a = e.success;
        return e.success = function(e) { "on" == localStorage.getItem("debug") && function(e) { e.errcode }(e), "function" == typeof a && a(e) }, i(e)
    })
}, function(e, t, n) {
    "use strict";
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
    ! function() {
        var e = JSON.stringify;
        JSON.stringify = function(t) { var n = ""; try { n = e(t) } catch (e) {} return n };
        var t = JSON.parse;
        JSON.parse = function(e) { if ("object" === (void 0 === e ? "undefined" : a(e))) return e; var n = null; try { n = t(e) } catch (e) {} return n }
    }()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
    }();
    n(19);
    var i, o = n(1),
        r = (i = o) && i.__esModule ? i : { default: i };
    var s = "dev" === r.default ? "http://s1-ljcdn.test.lianjia.com:8400/web-im-sdk/static/1.1/lianjiaim1.1.min.js" : "test" === r.default ? "http://s1-ljcdn.test.lianjia.com:8400/web-im-sdk/static/1.1/lianjiaim1.1.min.js" : "//s1.ljcdn.com/web-im-sdk/static/1.1/lianjiaim1.1.min.js",
        l = window.BeikeLoginSDK;
    var u = function() {
        function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.imHandle = null, this.init() }
        return a(e, [{
            key: "init",
            value: function() {
                var e = this;
                ! function(e) {
                    var t = { url: "", charset: "utf-8", complete: function() {}, fail: function() {} };
                    if ($.extend(t, e), !t.url) throw "url is requireed";
                    var n = !1,
                        a = document.createElement("script"),
                        i = document.getElementsByTagName("head")[0];

                    function o() {
                        if (n) return !1;
                        n = !0, a.onload = null, a.onerror = null, t.complete && t.complete(), i.removeChild(a)
                    }
                    a.onload = o, a.onerror = function() {
                        if (n) return !1;
                        n = !0, t.fail && t.fail(), i.removeChild(a)
                    }, a.onreadystatechange = function(e) { "complete" != a.readyState && "loaded" != a.readyState || o() }, a.type = "text/javascript", a.src = t.url, a.charset = t.charset, i.appendChild(a)
                }({ url: s, complete: function() { e.initIM(window.LIANJIANIM_INFOS || {}) } }), this.bind()
            }
        }, {
            key: "bind",
            value: function() {
                var e = this;
                $(document.body).on("click", 'a[data-role="beikeim-createtalk"]', function(t) {
                    if (l.userInfo) {
                        var n = $(this).data("ucid"),
                            a = $(this).data("source-extends"),
                            i = (a = $.queryToJson(a)).port || $(this).data("source-port");
                        delete a.port;
                        var o = $(this).data("msg-payload");
                        e.imHandle.initTalk({ ucid: n, port: i, extends: JSON.stringify(a), msgPayload: o })
                    } else l.init(0, function() { location.reload() })
                })
            }
        }, {
            key: "initIM",
            value: function(e) {
                var t = this;
                if (!window.LianjiaIM) return !1;
                l.bind(function(n) {
                    if (n) {
                        n.ucid = e.ucid;
                        var a = function(e) { e = e.replace(/([\.\[\]\$])/g, "\\$1"); for (var t = new RegExp("(^| )" + e + "=([^;]*)?;", "ig"), n = document.cookie + ";", a = t.exec(n), i = []; a;) i.push(a[2] || ""), a = t.exec(n); return i }("lianjia_token");
                        a = a && a[0], t.imHandle = new LianjiaIM({ appid: ljConf.pageConfig.imAppid, appkey: ljConf.pageConfig.imAppkey, is_ljbb: !1, is_bkbb: !0, token: a, userData: n, staticRoot: e.staticRoot })
                    }
                })
            }
        }]), e
    }();
    t.default = u
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a, i = n(21),
        o = (a = i) && a.__esModule ? a : { default: a };
    var r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) { window.setTimeout(e, 1e3 / 60) },
        s = void 0;

    function l() {
        var e = location.href;
        if (e != s) {
            try { window.track_handle.resetGlobal({ pid: ljConf && ljConf.page && ljConf && "site_index" == ljConf.page ? "bigc_pc" : "bigc_pc_ershou", uicode: ljConf && ljConf.page, token: u("lianjia_token")[0], ssid: u("lianjia_ssid")[0], uuid: u("lianjia_uuid")[0], cid: ljConf && ljConf.city_id, f: document.referrer }), $ULOG.send("1,3") } catch (e) {}
            s = e
        }
        r(l)
    }
    var u = function(e) { e = e.replace(/([\.\[\]\$])/g, "\\$1"); for (var t = new RegExp("(^| )" + e + "=([^;]*)?;", "ig"), n = document.cookie + ";", a = t.exec(n), i = []; a;) i.push(a[2] || ""), a = t.exec(n); return i },
        c = [];
    t.default = {
        init: function() { window.track_handle || (window.track_handle = { send: function(e, t, n) { c.push({ evtid: e, event: t, action: n }) }, checkNodes: function() {} }, this.initDoms()) },
        initDoms: function() {
            s = location.href,
                function(e, t, n) {
                    document;
                    var a, i, o = +new Date,
                        r = document.createElement("script");
                    r.src = e, r.async = 1, document.getElementsByTagName("head")[0].appendChild(r), r.onload = r.onreadystatechange = function() { a || r.readyState && !/^c|loade/.test(r.readyState) || (r.onload = r.onerror = r.onreadystatechange = null, a = 1, i && clearTimeout(i), n && n() || !n ? t && t("success", +new Date - o) : t && t("load succ,but run error", +new Date - o)) }, r.onerror = function() { r.onload = r.onerror = r.onreadystatechange = null, a = 1, i && clearTimeout(i), t && t("error", 8e4) }, i = setTimeout(function() { r.onload = r.onerror = r.onreadystatechange = null, a = 1, t && t("timeout", 8e3) }, 8e3)
                }("//s1.ljcdn.com/lianjia-track/js/1.4.7/index.js", function() { window.track_handle = new LIANJIA_TRACK({ mode: ["dig", "sa"], digConfig: { autosend: !1, target: "https:" == location.protocol ? "//dig.lianjia.com/bigc.gif" : "//test.dig.lianjia.com/bigc.gif" }, saConfig: { server_url: "https://sensors.ke.com/sa?project=production", show_log: "https:" != location.protocol && "off" != localStorage.getItem("debug") }, domConfig: { clickClass: "CLICKDATA", clickEvtKey: "data-click-evtid", clickEventKey: "data-click-event", clickActionKey: "data-action", viewClass: "VIEWDATA", viewEvtKey: "data-view-evtid", viewEventKey: "data-view-event", viewActionKey: "data-action" }, globalData: { pid: ljConf && ljConf.page && ljConf && "site_index" == ljConf.page ? "bigc_pc" : "bigc_pc_ershou", uicode: ljConf && ljConf.page, token: u("lianjia_token")[0], ssid: u("lianjia_ssid")[0], uuid: u("lianjia_uuid")[0], cid: ljConf && ljConf.city_id, f: document.referrer, action: { ad_loginurl: o.default.getValue() } } }); for (var e = 0; e < c.length; e++) window.track_handle && window.track_handle.send(c[e].evtid, c[e].event, c[e].action) })
        },
        bind: function() { l() }
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        try {
            var t = window[e],
                n = "__storage_test__";
            return t.setItem(n, n), t.removeItem(n), !0
        } catch (e) { return e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && 0 !== t.length }
    }

    function i(e, t) { return String.prototype.split.call(t, e) }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = ["qz_gdt", "gdt_vid", "bd_vid"];
    ! function(e, t, n) {
        for (var a = i(e, t), o = {}, r = 0; r < a.length; r++)
            if ("" !== a[r]) {
                var s = i("=", a[r]);
                if (2 !== s.length) { o = null; break }
                o[s[0]] = s[1]
            }
            "function" == typeof n && n(o)
    }("&", window.location.search.substring(1), function(e) {
        for (var t = "", n = 0; n < o.length; n++)
            if (e && e[o[n]]) return t = window.location.href, void(a("sessionStorage") && window.sessionStorage.setItem("ad_loginurl", t))
    }), t.default = { getValue: function() { return a("sessionStorage") ? window.sessionStorage.getItem("ad_loginurl") : "" } }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function() {
        $(document.body).on("click", ".maidian-detail", function(e) {
            e.preventDefault();
            var t = $(this),
                n = t.attr("href"),
                i = t.data("maidian"),
                o = t.data("maidian_query"),
                r = t.data("hreftype"),
                s = t.data("agentid"),
                l = t.attr("target");
            i && (n = (0, a.addQuery)(n, "fb_expo_id", i)), o && (n = (0, a.addQuery)(n, "fb_query_id", o)), r && (n = (0, a.addQuery)(n, "show_type", 1)), s && (n = (0, a.addQuery)(n, "shareAgentUcid", s)), n && ~n.indexOf("/") && window.open(n, l)
        })
    };
    var a = n(0)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function() {
        "sohu" == window.FROM_CHANNEL && ($("a").each(function() {
            var e = $(this),
                t = e.attr("href");
            /\/(ditu|fangjia|yezhu)\//.test(t) ? e.attr("target", "_blank") : e.attr("target", "_self")
        }), $(".module-footer a").attr("target", "_blank"), $(".sohu-hide").remove())
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function() {
        $(document.body).on("click", "[data-for_search_server]", function(e) {
            var t = $(this),
                n = t.data("for_search_server");
            o.default.set("forSearchServer", n, 6e4)
        })
    };
    var a, i = n(6),
        o = (a = i) && a.__esModule ? a : { default: a }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if (e) {
            var t = { dom: $(e), template: "", targetWrapper: "", totalPage: 0, curPage: 0 },
                n = $({});
            return function() {
                t.template = t.dom.attr("page-url");
                var e = t.dom.attr("target-wrapper");
                e && (t.targetWrapper = $(e));
                var n = t.dom.attr("page-data");
                n ? (n = $.parseJSON(n), $.extend(t, n)) : t.targetWrapper && (t.curPage = 1, t.totalPage = t.targetWrapper.children().length)
            }(), t.dom.delegate("[data-page]", "click", function() {
                var e = $(this).attr("data-page");
                n.trigger("showPage", parseInt(e))
            }), t.targetWrapper && n.on("showPage", function(e, n) { t.curPage = n, a() }), a(), n
        }

        function a() {
            if (!(t.totalPage <= 1)) {
                var e = function(e, t, n) {
                    var a = [];
                    if (n = n || 6, t = t || 1, e <= n)
                        for (var i = 0; i < e; i++) a.push(i + 1);
                    else {
                        a.push(1), t > 4 && a.push("");
                        var o = Math.max(t - 2, 2),
                            r = Math.min(t + 2, e - 1);
                        for (i = o; i <= r; i++) a.push(i);
                        t < e - 3 && a.push(""), a.push(e)
                    }
                    return a
                }(t.totalPage, t.curPage);
                e.length || t.dom.hide();
                var n = function(e, t, n, a) {
                    function i(e) { if (a) { var t = a.replace(/\{page\}/g, e); return 1 === e && t.search("pg1") > -1 && (t = t.search("pg1/") > -1 ? t.replace(/pg1\//, "") : t.replace(/pg1/, "")), t } return "javascript:;" }
                    var o = [];
                    if (n = n || 1, e && e.length) {
                        n > 1 && t > 6 && o.push('<a href="' + i(n - 1) + '" data-page="' + (n - 1) + '" >涓婁竴椤�/a>');
                        for (var r = e.length, s = 0; s < r; s++) o.push(e[s] ? "<a " + (e[s] == n ? 'class="on"' : "") + ' href="' + i(e[s]) + '" data-page="' + e[s] + '">' + e[s] + "</a>" : "<span>...</span>");
                        n < t && t > 6 && o.push('<a href="' + i(n + 1) + '" data-page="' + (n + 1) + '">涓嬩竴椤�/a>')
                    }
                    return o.join("")
                }(e, t.totalPage, t.curPage, t.template);
                if (t.dom.html(n), t.targetWrapper) {
                    var a = t.targetWrapper.children();
                    a.hide(), a.eq(t.curPage - 1).show(), t.targetWrapper.find(".lj-lazy").lazyload()
                }
            }
        }
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), $(function() { $("[comp-module='page']").each(function() { a($(this)) }) }), t.default = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
    }();
    n(27);
    var i, o = n(28),
        r = (i = o) && i.__esModule ? i : { default: i };
    var s = function() {
        function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.options = Object.assign({ node: ".footer" }, t), this.tab(), this.customerService() }
        return a(e, [{
            key: "tab",
            value: function() {
                var e = this.options.node,
                    t = $(e).find(".tab");
                $(e).find(".link-list div").eq(0).show(), t.on("mouseover", "span", function(e) {
                    var t = $(e.currentTarget),
                        n = t.index(),
                        a = t.closest(".tab").next(".link-list");
                    t.addClass("hover").siblings("span").removeClass("hover"), a.find("div").eq(n).show().siblings("div").hide()
                })
            }
        }, {
            key: "customerService",
            value: function() {
                var e = new r.default(".footer");
                $(this.options.node).on("click", ".req_btn", function() { e.open() })
            }
        }]), e
    }();
    t.default = s
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
    }();
    n(29);
    var i = n(30),
        o = window.BeikeLoginSDK,
        r = function() {
            function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "body";! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.isLogin = !1, this.$component = $(i()), this.$root = $(t), this.init() }
            return a(e, [{
                key: "event",
                value: function() {
                    var e = this;
                    e.$root.on("click", ".close_btn", function() { e.close() }).on("click", ".req_btn_span", function() { e.close(), e.isLogin ? ($(".lianjiaim-head").click(), $(".lianjiaim .lianjiaim-body-item").first().find("tr").first().click()) : o.init(0, function() { location.reload() }) })
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    this.$root.append(this.$component), this.event(), o.bind(function(t) { e.isLogin = !!t })
                }
            }, { key: "close", value: function() { this.$component.hide() } }, { key: "open", value: function() { this.$component.show() } }]), e
        }();
    t.default = r
}, function(e, t, n) {}, function(e, t) { e.exports = function(e) { var t = ""; return t += '<div class="main_bg" data-component="C_customerBox">\n    <div class="customer_box">\n        <div class="close_btn">\n        </div>\n        <h1>瀹樻柟瀹㈡湇</h1>\n        <p>鎮ㄥ彲浠ヤ笌鍦ㄧ嚎椤鹃棶杩涜瀹炴椂娌熼�鎴栬�鎷ㄦ墦瀹㈡湇鐑嚎鑾峰緱甯姪</p>\n        <div class="clear title_main">\n            <div class="fl">\n                <div class="title_top"><span class="title">鍦ㄧ嚎鍜ㄨ</span><span class="req_btn_span">绔嬪嵆鍜ㄨ</span></div>\n                <p>09:00-22:00</p>\n            </div>\n            <div class="fl right_div">\n                <div class="title_top"><span class="title">瀹㈡湇鐑嚎</span><span class="tel_num">10106188</span></div>\n                <p>09:00-20:00</p>\n            </div>\n        </div>\n    </div>\n</div>\n' } }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), n(32);
    t.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) }
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    var a;
    (a = jQuery).fn.scrollLoading = function(e) {
            var t = { attr: "data-url", container: a(window), callback: a.noop },
                n = a.extend({}, t, e || {});
            n.cache = [], a(this).each(function() {
                var e = this.nodeName.toLowerCase(),
                    t = a(this).attr(n.attr),
                    i = { obj: a(this), tag: e, url: t };
                n.cache.push(i)
            });
            var i = function(e) { a.isFunction(n.callback) && n.callback.call(e.get(0)) },
                o = function() {
                    var e, t = n.container.height();
                    e = a(window).get(0) === window ? a(window).scrollTop() : n.container.offset().top, a.each(n.cache, function(n, a) {
                        var o = a.obj,
                            r = a.tag,
                            s = a.url;
                        if (o) {
                            var l = o.offset().top - e,
                                u = l + o.height();
                            (l >= 0 && l < t || u > 0 && u <= t) && (s ? "img" === r ? i(o.attr("src", s)) : o.load(s, {}, function() { i(o) }) : i(o), a.obj = null)
                        }
                    })
                };
            o(), n.container.bind("scroll", o)
        },
        function(e, t, n, a) {
            var i = e(t);
            e.fn.lazyload = function(a) {
                var o, r = this,
                    s = { threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: t, data_attribute: "original", skip_invisible: !0, appear: null, load: null, placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" };

                function l() {
                    var t = 0;
                    r.each(function() {
                        var n = e(this);
                        if (!s.skip_invisible || n.is(":visible"))
                            if (e.abovethetop(this, s) || e.leftofbegin(this, s));
                            else if (e.belowthefold(this, s) || e.rightoffold(this, s)) { if (++t > s.failure_limit) return !1 } else n.trigger("appear"), t = 0
                    })
                }
                return a && (void 0 !== a.failurelimit && (a.failure_limit = a.failurelimit, delete a.failurelimit), void 0 !== a.effectspeed && (a.effect_speed = a.effectspeed, delete a.effectspeed), e.extend(s, a)), o = void 0 === s.container || s.container === t ? i : e(s.container), 0 === s.event.indexOf("scroll") && o.bind(s.event, function() { return l() }), this.each(function() {
                    var t = this,
                        n = e(t);
                    t.loaded = !1, void 0 !== n.attr("src") && !1 !== n.attr("src") || n.is("img") && n.attr("src", s.placeholder), n.one("appear", function() {
                        if (!this.loaded) {
                            if (s.appear) {
                                var a = r.length;
                                s.appear.call(t, a, s)
                            }
                            e("<img />").bind("load", function() {
                                var a = n.attr("data-" + s.data_attribute);
                                n.hide(), n.is("img") ? n.attr("src", a) : n.css("background-image", "url('" + a + "')"), n[s.effect](s.effect_speed), t.loaded = !0;
                                var i = e.grep(r, function(e) { return !e.loaded });
                                if (r = e(i), s.load) {
                                    var o = r.length;
                                    s.load.call(t, o, s)
                                }
                            }).attr("src", n.attr("data-" + s.data_attribute))
                        }
                    }), 0 !== s.event.indexOf("scroll") && n.bind(s.event, function() { t.loaded || n.trigger("appear") })
                }), i.bind("resize", function() { l() }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function(t) { t.originalEvent && t.originalEvent.persisted && r.each(function() { e(this).trigger("appear") }) }), e(n).ready(function() { l() }), this
            }, e.belowthefold = function(n, a) { return (void 0 === a.container || a.container === t ? (t.innerHeight ? t.innerHeight : i.height()) + i.scrollTop() : e(a.container).offset().top + e(a.container).height()) <= e(n).offset().top - a.threshold }, e.rightoffold = function(n, a) { return (void 0 === a.container || a.container === t ? i.width() + i.scrollLeft() : e(a.container).offset().left + e(a.container).width()) <= e(n).offset().left - a.threshold }, e.abovethetop = function(n, a) { return (void 0 === a.container || a.container === t ? i.scrollTop() : e(a.container).offset().top) >= e(n).offset().top + a.threshold + e(n).height() }, e.leftofbegin = function(n, a) { return (void 0 === a.container || a.container === t ? i.scrollLeft() : e(a.container).offset().left) >= e(n).offset().left + a.threshold + e(n).width() }, e.inviewport = function(t, n) { return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n)) }, e.extend(e.expr[":"], { "below-the-fold": function(t) { return e.belowthefold(t, { threshold: 0 }) }, "above-the-top": function(t) { return !e.belowthefold(t, { threshold: 0 }) }, "right-of-screen": function(t) { return e.rightoffold(t, { threshold: 0 }) }, "left-of-screen": function(t) { return !e.rightoffold(t, { threshold: 0 }) }, "in-viewport": function(t) { return e.inviewport(t, { threshold: 0 }) }, "above-the-fold": function(t) { return !e.belowthefold(t, { threshold: 0 }) }, "right-of-fold": function(t) { return e.rightoffold(t, { threshold: 0 }) }, "left-of-fold": function(t) { return !e.rightoffold(t, { threshold: 0 }) } })
        }(jQuery, window, document)
}, function(e, t, n) {
    "use strict";
    n(13);
    n(35), n(36);
    var a = n(37),
        i = window.BeikeLoginSDK;
    $("body").on("click", "#loginBtn", function(e) { e.preventDefault(), i.init(0, function() { location.reload() }) }), $("body").on("click", "#registerBtn", function(e) { e.preventDefault(), i.init(2, function() { location.reload() }) }), i.bind(function(e) {
        var t;
        e && (t = e, $("#userInfoContainer").html(a({ isAgent: t.isAgent, logoutUrl: t.logoutUrl, username: t.username })))
    })
}, function(e, t) { e.exports = function(e) { var t = ""; return t += '<span class="pushNews"></span>' } }, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        for (var a in n += '<div class="pushNewsList">\n    ', e.group_by_type) n += "\n    ", 0 !== e.group_by_type[a].unread && e.pushMsgMap.hasOwnProperty(a) && (n += '\n    <a href="' + (null == (t = e.pushMsgMap[a].url) ? "" : t) + '">' + (null == (t = $.replaceTpl(e.pushMsgMap[a].text, { unread: e.group_by_type[a].unread })) ? "" : t) + "</a>\n    "), n += "\n    ";
        return n += "\n</div>\n"
    }
}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        return n += "<i></i>\n", e.isAgent ? n += '\n<a id="userNameContainer" href="' + (null == (t = ljConf.domainConfig.agentroot) ? "" : t) + '">' + (null == (t = $.encodeHTML($.getLimitString(e.username, 20, ".."))) ? "" : t) + "</a>\n" : n += '\n<a id="userNameContainer" href="' + (null == (t = ljConf.domainConfig.userroot) ? "" : t) + '" rel="nofollow">' + (null == (t = $.encodeHTML($.getLimitString(e.username, 20, ".."))) ? "" : t) + "</a>\n", n += '\n<span id="tipContainer"></span>\n&nbsp;&nbsp;<a href="' + (null == (t = e.logoutUrl) ? "" : t) + '">閫�嚭</a>\n<span id="pushNewsListContainer"></span>'
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) {
        var t = { sell: "ershoufang", deal: "chengjiao", school: "xuequfang", district: "", housingPrice: "fangjia", xiaoqu: "xiaoqu", fapai: "fapaifang" },
            n = { sell: "鎴挎簮", deal: "鎴愪氦" },
            a = { sell: "/api/headerSearchForPlatC", deal: s + "sug/headerSearch", school: s + "sug/headerSearch", district: s + "sug/headerSearch", housingPrice: s + "sug/headerSearch", xiaoqu: s + "sug/headerSearch", fapai: "/api/headerSearchForFapaiFang" }[e.type],
            i = (0, r.getCookie)("select_city"),
            o = null;
        return {
            render: function(r) {
                var s = $.Deferred();
                return o && clearTimeout(o), "" === $.trim(r) ? (s.reject(), s) : (o = setTimeout(function() {
                    $.ajax({
                        url: a,
                        type: "get",
                        dataType: "json",
                        data: { channel: t[e.type], cityId: i, query: r },
                        success: function(t) {
                            var a = t.data && t.data.result && t.data.result[0] && t.data.result[0].strategyInfo || {};
                            a.source_type = "PC鎴挎簮鍒楄〃鎼滅储", a.item_detail = r, window.track_handle && window.track_handle.send("11183", "SugRequst", a), "sell" == e.type ? t && 0 === t.code && t.data && t.data.result ? (e.container.html(e.tpl({ list: t.data.result, type: e.type, typeText: n[e.type] })), s.resolve()) : s.reject() : ("housingPrice" == e.type && window.track_handle && window.track_handle.send("11969", "WebModuleClick", { source_type: "PC鎴夸环棰戦亾鎼滅储妗嗙偣鍑� }), t && t.data && 0 === t.errno && t.data.result ? (e.container.html(e.tpl({ list: t.data.result, type: e.type, typeText: n[e.type] })), s.resolve()) : t && t.data && 0 === t.errno && t.data.data && t.data.data.result ? (e.container.html(e.tpl({ list: t.data.data.result, type: e.type, typeText: n[e.type] })), s.resolve()) : s.reject())
                        }
                    })
                }, 500), s)
            }
        }
    };
    var a, i = n(4),
        o = (a = i) && a.__esModule ? a : { default: a },
        r = n(0);
    var s = o.default.API_URL
}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        n += '<div class="searchMsgTitle">\n    <span class="searchMsgName">浣犲彲鑳藉湪鎵�/span>\n</div>\n<ul data-bl="sug" data-el="sug">\n';
        for (var a = 0; a < e.list.length; a++) {
            for (var i in n += '\n<li>\n    <a href="' + (null == (t = e.list[a].url) ? "" : t) + '" data-for_search_server="from=sug_click&refer=' + (null == (t = ljConf.page) ? "" : t) + '" role="addHistory"\n       data-log_index="' + (null == (t = a + 1) ? "" : t) + '"\n       data-log_value="' + (null == (t = e.list[a].title || e.list[a].text) ? "" : t) + '"\n       class="CLICKDATA" data-click-evtid="11184" data-click-event="SugClick"\n       data-action="source_type=PC鎴挎簮鍒楄〃鎼滅储&click_position=' + (null == (t = a) ? "" : t) + "&item_type=璁㈤槄&item_detail=" + (null == (t = e.list[a].text) ? "" : t), e.list[a].strategyInfo || {}) n += "&" + (null == (t = i) ? "" : t) + "=" + (null == (t = e.list[a].strategyInfo[i]) ? "" : t) + " ";
            n += '">\n            <span class="msgListTitle">\n                ', e.list[a].sugTypeName && (n += '\n                <span class="sug_region">' + (null == (t = e.list[a].sugTypeName.text) ? "" : t) + "</span>\n                "), n += '\n                <span role="historyKey" class="historyKey">\n                    ' + (null == (t = e.list[a].hlsText || e.list[a].text || e.list[a].hls_title || e.list[a].title) ? "" : t) + '\n                </span>\n                <span class="sub-text">\n                    ' + (null == (t = e.list[a].region) ? "" : t) + "\n                </span>\n            </span>\n        ", "sell" !== e.type && "deal" !== e.type || (n += '\n            <span class="msgListAdd">\n                ', e.list[a].count ? n += "\n                    绾� + (null == (t = e.list[a].count) ? "" : t) + "濂� + (null == (t = e.typeText) ? "" : t) + "\n                " : (n += "\n                    ", "瀛﹀尯" !== e.list[a].sugTypeName.text && "鍦版爣" !== e.list[a].sugTypeName.text && (n += "\n                        鏆傛棤" + (null == (t = e.typeText) ? "" : t) + "\n                    "), n += "\n                "), n += "\n            </span>\n        "), n += "\n    </a>\n</li>\n"
        }
        return n += "\n</ul>\n"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) {
        var t = e.images.children().first().width(),
            n = [],
            a = void 0,
            i = void 0,
            o = !1,
            r = function(e, t) {
                var n = document.createElement("img");
                n.src = e, n.onload = t(e)
            },
            s = function(s) {
                0 !== n.length && (! function(n) {
                    if (a !== n) {
                        e.images.children(":eq(" + n + ")").addClass("selected"), e.images.children(":eq(" + a + ")").removeClass("selected"), (n -= e.selectPosition) < 0 && (n = 0);
                        var i = n * t + n * e.spacing;
                        e.images.animate({ scrollLeft: i }, 250)
                    }
                }(s), function(t) { o || (e.showImg.hide(), e.showDesc && e.showDesc.hide(), e.loading.show(), o = !0, t = t > n.length - 1 || t < 0 ? 0 : t, r(i && n[t].pic ? n[t].pic : n[t].src, function(a) { e.loading.hide(), e.showImg.show(), e.showDesc && e.showDesc.show(), e.showImg.attr("src", a).removeClass("maxWidth"), e.showImg.attr("data-isdefault", n[t].isdefault), e.showImg.attr("data-pic", n[t].pic || ""), e.showImg.attr("data-vr", n[t].vr || ""), e.showImg.attr("data-size", n[t].size), e.showImg.data("index", t), e.showDesc && e.showDesc.html(n[t].desc || ""), o = !1 })) }(s), a = s)
            },
            l = function(t) {
                s(t),
                    function(t) {
                        if (n.length <= 1) return e.pre.addClass("disable"), void e.next.addClass("disable");
                        e.pre.removeClass("disable"), e.next.removeClass("disable")
                    }(), "function" == typeof e.changePic && e.changePic()
            };
        return e.images.children().each(function(e) {
            var t = $(this);
            t.data("index", e), n.push({ src: t.data("src"), desc: t.data("desc"), pic: t.data("pic"), vr: t.data("vr"), size: t.data("size"), uri: t.data("uri"), isdefault: t.data("isdefault") })
        }), l(0), e.pre.on("click", function() {
            var e = void 0;
            e = 0 === a ? n.length - 1 : a - 1, l(e)
        }), e.next.on("click", function() {
            var e = void 0;
            e = a === n.length - 1 ? 0 : a + 1, l(e)
        }), e.images.children().on("click", function() {
            var e = $(this).data("index");
            l(e)
        }), { setPage: function(e, t) { i = t, l(e) } }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
    }();

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    var o = function e(t) { i(this, e) },
        r = function(e) {
            function t(e) { i(this, t); var n = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n._initialize_(e), n }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), a(t, [{ key: "_initialize_", value: function(e) { this._eventList = {}, this._eventTriggerd_ = {}, this._promise_ = "boolean" == typeof e && e } }, {
                key: "on",
                value: function(e, t) {
                    if (!e || !t) throw "type of fn is required";
                    var n = this._eventList[e];
                    n || (n = [], this._eventList[e] = n), n.push(t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    if (e) {
                        var n = this._eventList[e];
                        if (n && n.length) {
                            if (!t) { for (; n.pop();); return }
                            for (var a = 0, i = n.length; a < i; a++)
                                if (n[a] == t || n[a] == t.fn) return void n.splice(a, 1)
                        }
                    } else this._eventList = {}
                }
            }, {
                key: "trigger",
                value: function(e) {
                    if (e) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        this._promise_ && (this._eventTriggerd_[e] = t);
                        var n = this._eventList[e];
                        if (n && n.length)
                            for (var a = 0; a < n.length; a++)
                                if (!1 === n[a].apply(this, t)) return !1
                    }
                }
            }, { key: "before", value: function(e, t) { var n, a = this; return function() { return --e > 0 ? n = t.apply(a, arguments) : t = null, n } } }, { key: "once", value: function(e, t) { e && t && this.on(e, this.before(2, t)) } }, { key: "destroy", value: function() { this._eventList = null } }, { key: "always", value: function(e, t) { this.on(e, t), this._eventTriggerd_[e] && t.apply(null, this._eventTriggerd_[e]) } }]), t
        }();
    t.default = r
}, , function(e, t, n) {
    "use strict";
    var a, i;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var o, r = n(1),
        s = (o = r) && o.__esModule ? o : { default: o };

    function l(e) { if (!e) return null; for (var t = ["url", "origin", "scheme", "slash", "host", "port", "path", "query", "hash"], n = /^((?:([A-Za-z]+):(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?)(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(e), a = {}, i = 0, o = t.length; i < o; i += 1) a[t[i]] = n[i] || ""; return a }
    var u = l(location.href),
        c = (i = a = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.host = u.host, this.scheme = u.scheme, this.port = u.port }, a.joinUrl = function(e) { var t = ""; return e.scheme && (t += e.scheme + "://"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += "/" + e.path), e.query && (t += "?" + e.query), e.hash && (t += "#" + e.hash), t }, a.fixedHost = function(e) {
            if (!e) return this.host;
            var t = e.substring(0, e.indexOf("."));
            switch (s.default) {
                case "dev":
                case "test":
                    if (0 !== t.indexOf(s.default)) return s.default+e
            }
            return e
        }, a.fixedUrl = function(e, t) { t = t || !1, e.indexOf("http") < 0 && (e = location.protocol + e); var n = l(e); return n.host ? (!t && (n.host = this.fixedHost(n.host)), n.port = this.port, n.scheme || (n.scheme = this.scheme)) : (n.host = this.host, n.scheme = this.scheme, n.port = this.port), this.joinUrl(n) }, a.isSameDomain = function(e) { return l(e).host == this.host }, i);
    t.default = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
        }(),
        i = l(n(41)),
        o = l(n(4)),
        r = n(0),
        s = l(n(43));

    function l(e) { return e && e.__esModule ? e : { default: e } }
    var u = (0, r.getCookie)("select_city"),
        c = function() {
            function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.tpl = t.tpl, this.container = t.container, this.savedSearchData = { count: 0, data: [] }, this.isBusy = !1, this.emit = new i.default }
            return a(e, [{ key: "on", value: function(e, t) { this.emit.on(e, t) } }, {
                key: "getData",
                value: function() {
                    var e = this;
                    $.ajax({ url: o.default.OLD_API + "/ajax/user/favorite/getlist", type: "get", dataType: "jsonp", data: { cityId: u }, success: function(t) { 0 === t.errno && (e.savedSearchData = t.data, e.emit.trigger("update", e.savedSearchData)) } })
                }
            }, {
                key: "render",
                value: function() {
                    for (var e = 0, t = 0; t < this.savedSearchData.data.length; t++) e += this.savedSearchData.data[t].unread || 0;
                    this.container.html(this.tpl({ userCenterUrl: s.default.fixedUrl(ljConf.domainConfig.userroot + "site/searchlist/"), totalCount: e, savedData: this.savedSearchData.data }).replace(/(>\S*)(\s+)(\S*<)/g, "$1$3"))
                }
            }, {
                key: "saveSearch",
                value: function(e) {
                    var t = this,
                        n = this;
                    "" === e.url || this.isBusy ? e.callback(2) : (this.isBusy = !0, $.ajax({ url: o.default.OLD_API + "/ajax/user/favorite/addsearch", type: "get", dataType: "jsonp", data: { cityId: u, url: encodeURIComponent(e.url) }, success: function(a) { t.isBusy = !1, 0 === a.errno ? (e.callback(), n.getData()) : 1 === a.errno ? e.callback(1) : alert(a.error) } }))
                }
            }]), e
        }();
    t.default = c
}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        n += '<div class="searchMsgTitle">\n  <span class="searchMsgName">宸蹭繚瀛樻悳绱�/span>\n  <div class="searchMsgTitleRightPart">\n    ', e.totalCount && (n += '\n    <a class="totalNew">鏌ョ湅' + (null == (t = e.totalCount) ? "" : t) + "濂楁柊澧炴埧婧�/a>\n    "), n += '\n    <a href="' + (null == (t = e.userCenterUrl) ? "" : t) + '" class="manage">绠＄悊</a>\n  </div>\n</div>\n<ul data-bl="sug" data-el="history">\n';
        for (var a = 0; a < e.savedData.length; a++) {
            var i = e.savedData[a].query ? e.savedData[a].query + "&nbsp;" : "";
            i += e.savedData[a].title.join("&nbsp;"), n += '\n<li>\n  <a href="' + (null == (t = e.savedData[a].url) ? "" : t) + '" data-for_search_server="from=dingyue_click&refer=' + (null == (t = ljConf.page) ? "" : t) + '" role="savedSearch" data-log_index="' + (null == (t = a + 1) ? "" : t) + '" data-log_value="' + (null == (t = i) ? "" : t) + '"\n     class="sug--search_item">\n    <span class="msgListTitle">' + (null == (t = i) ? "" : t) + "</span>\n    ", e.savedData[a].unread && 0 !== e.savedData[a].unread && (n += '\n    <span class="msgListAdd">鏂板' + (null == (t = e.savedData[a].unread) ? "" : t) + "濂�/span>\n    "), n += "\n  </a>\n</li>\n"
        }
        return n += "\n</ul>\n"
    }
}, , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
    }();
    n(56);
    var i = u(n(57)),
        o = u(n(59)),
        r = u(n(38)),
        s = u(n(44)),
        l = n(0);

    function u(e) { return e && e.__esModule ? e : { default: e } }
    var c = n(39),
        d = n(45),
        f = f || "",
        p = $("#searchInput"),
        h = $("#savedSearchMsg"),
        v = $("#savedSearchCount"),
        g = $("#searchMsgContainer"),
        y = "",
        m = "",
        b = "",
        _ = "",
        w = "",
        k = { sell: "ershoufang", housingPrice: "fangjia", xiaoqu: "xiaoqu", deal: "chengjiao", fapai: "fapaifang" },
        j = function() {
            function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.option = t, this.searchPath = k[t.type], this.init() }
            return a(e, [{
                key: "init",
                value: function() {
                    if (f) {
                        for (var e = 0; e < f.channel.length; e++) "ershoufang" === f.channel[e].channel && (y = f.channel[e]);
                        m = new i.default({ type: this.option.type, data: y.tipsHot ? y.tipsHot.query : [], container: g })
                    }
                    b = new o.default({ type: this.option.type, container: g }), _ = new r.default({ type: this.option.type, tpl: c, container: g }), w = new s.default({ tpl: d, container: g }), this.bindEvents()
                }
            }, { key: "showSearchMsg", value: function() { g.show() } }, { key: "hideSearchMsg", value: function() { g.hide() } }, {
                key: "inputTipContent",
                value: function(e) {
                    var t = this,
                        n = e.val(),
                        a = function() { b.hasHistory() ? b.render() : f && m.render(), t.showSearchMsg() };
                    n ? _.render(n).done(function() { t.showSearchMsg() }).fail(function() { t.hideSearchMsg() }).always(function() { e.val() || a() }) : a()
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var e = this,
                        t = this;
                    p.on("focus", function() { t.inputTipContent($(this)) }), y.tipsHot && p.attr("placeholder", y.tipsHot.tips), (0, l.bindTextChange)(p, function(e) { t.inputTipContent($(e.target)) }), $(document.body).on("click", function(t) { 0 === $(t.target).closest("#searchForm").length && e.hideSearchMsg() }), $("#searchForm").submit(function(t) {
                        t.preventDefault();
                        var n = $.trim(p.val()),
                            a = "";
                        if ("" === n) a = "/" + e.searchPath;
                        else {
                            var i = +new Date;
                            b.addHistory({ name: n, url: location.origin + "/" + e.searchPath + "/rs" + encodeURIComponent(n) + "/", searchTimestamp: i }), a = "/" + e.searchPath + "/rs" + encodeURIComponent(n) + "/"
                        }
                        window.location.href = a
                    }), g.delegate('a[role="addHistory"]', "click", function(e) {
                        var t = $(e.currentTarget);
                        b.addHistory({ name: t.find('[role="historyKey"]').text(), url: t.attr("href"), searchTimestamp: +new Date })
                    }), g.on("mouseenter", 'ul[data-bl="sug"][data-el="sug"] li', function(e) { $(e.target).parent().find("li").removeClass("cur"), $(e.target).addClass("cur") }).on("mouseleave", 'ul[data-bl="sug"][data-el="sug"] li', function(e) { $(e.target).removeClass("cur") }), p.on("keyup", function(e) {
                        if (40 == e.keyCode || 38 == e.keyCode) {
                            var t = g.find('ul[data-bl="sug"][data-el="sug"]:visible');
                            if (t.length) {
                                var n = t.find("li.cur a"),
                                    a = t.find("li").length,
                                    i = n.length ? parseInt(n.attr("data-log_index") - 1, 10) : -1;
                                t.find("li.cur").removeClass("cur"), -1 === i && (i = 40 == e.keyCode ? -1 : a), (i += 1 * (40 == e.keyCode ? 1 : -1)) >= a && (i = 0), i <= -1 && (i = a - 1), t.find("li").eq(i).addClass("cur"), p.val(t.find("li").eq(i).find("a").attr("data-log_value"))
                            }
                        }
                    }), $("#searchForm").submit(function(e) {
                        var t = g.find('ul[data-bl="sug"][data-el="sug"]:visible').find(".cur");
                        t.length && (location.href = t.find("a").attr("href"), e.preventDefault())
                    }), h.on("click", function() { w.render(), e.showSearchMsg() }), w.on("update", function(e) { 0 !== e.count ? (v.html(e.count), h.css("display", "inline-block")) : h.css("display", "hidden") }), w.getData()
                }
            }]), e
        }();
    t.default = j
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) { var t = a({ list: e.data }).replace(/(>\S*)(\s+)(\S*<)/g, "$1$3"); return { render: function() { e.container.html(t) } } };
    var a = n(58)
}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        n += '  <div class="searchMsgTitle">\n    <span class="searchMsgName">鐑棬鎼滅储</span>\n  </div>\n  <ul data-bl="sug" data-el="history">\n    ';
        for (var a = 0; a < e.list.length; a++) n += '\n    <li>\n      <a role="addHistory" href="' + (null == (t = e.list[a].url) ? "" : t) + '" data-log_index="' + (null == (t = a + 1) ? "" : t) + '" data-log_value="' + (null == (t = e.list[a].string) ? "" : t) + '" class="sug--search_item">\n        <span class="msgListTitle" role="historyKey">' + (null == (t = $.encodeHTML(e.list[a].string)) ? "" : t) + "</span>\n      </a>\n    </li>\n    ";
        return n += "\n </ul>\n"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var a, i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
        }(),
        o = n(4),
        r = (a = o) && a.__esModule ? a : { default: a },
        s = n(0);
    var l = n(60),
        u = (0, s.getCookie)("select_city"),
        c = function() {
            function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.allHistorys = [], this.type = t.type ? t.type : "ershoufang", this.storageKey = this.type + u, this.container = t.container, this.init() }
            return i(e, [{ key: "getHistoryFromStorage", value: function() { return localStorage[this.storageKey] ? JSON.parse(localStorage[this.storageKey]) : [] } }, { key: "setHistoryToStorage", value: function(e) { localStorage[this.storageKey] = JSON.stringify(e) } }, {
                key: "updateHistoryItem",
                value: function(e) {
                    if (e.hasOwnProperty("name"))
                        for (var t = 0; t < this.allHistorys.length; t++) this.allHistorys[t].name === e.name && $.extend(this.allHistorys[t], e)
                }
            }, {
                key: "updateNewCount",
                value: function() {
                    var e = this;
                    this.allHistorys = this.getHistoryFromStorage();
                    var t = +new Date,
                        n = [],
                        a = [];
                    if (!this.allHistorys || !this.allHistorys.length) return !1;
                    for (var i = 0; i < this.allHistorys.length; i++) { var o = this.allHistorys[i]; - 1 !== o.url.indexOf("/ershoufang/rs") && (o.searchTimestamp || (o.searchTimestamp = t), n.push({ cityId: u, timestamp: parseInt(o.searchTimestamp / 1e3), url: o.url }), a.push(i)) }
                    0 !== n.length && (this.setHistoryToStorage(this.allHistorys), $.ajax({ url: r.default.API_URL + "/web/parsesearch/ershoufangAdditions", type: "GET", dataType: "json", data: { querySet: JSON.stringify(n) } }).done(function(t) {
                        if (0 == t.errno)
                            for (var n = 0; n < a.length && n < t.data.length; n++) e.updateHistoryItem({ name: e.allHistorys[a[n]].name, newCount: t.data[n] })
                    }))
                }
            }, { key: "init", value: function() { this.updateNewCount() } }, {
                key: "addHistory",
                value: function(e) {
                    if (e.hasOwnProperty("name") && "" !== e.name) {
                        for (var t = -1, n = 0; n < this.allHistorys.length; n++) this.allHistorys[n].name === e.name && (t = n);
                        if (sessionStorage.ershoufang_search_record = "", -1 !== t) {
                            if (-1 !== this.allHistorys[t].url.indexOf("/ershoufang/rs")) {
                                var a = { url: this.allHistorys[t].url, timestamp: this.allHistorys[t].searchTimestamp };
                                sessionStorage.ershoufang_search_record = JSON.stringify(a)
                            }
                            this.allHistorys.splice(t, 1)
                        }
                        this.allHistorys.unshift(e), this.allHistorys.length > 10 && this.allHistorys.splice(10, this.allHistorys.length - 10), this.setHistoryToStorage(this.allHistorys)
                    }
                }
            }, { key: "hasHistory", value: function() { return 0 !== this.allHistorys.length } }, {
                key: "addEvents",
                value: function() {
                    var e = this;
                    $("#clearSearchHistory").click(function(t) { t.preventDefault(), e.allHistorys = [], e.setHistoryToStorage(e.allHistorys), e.container.empty() })
                }
            }, {
                key: "render",
                value: function() {
                    var e = l({ list: this.allHistorys });
                    this.container.html(e.replace(/(>\S*)(\s+)(\S*<)/g, "$1$3")), this.addEvents()
                }
            }]), e
        }();
    t.default = c
}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        n += '  <div class="searchMsgTitle">\n    <span class="searchMsgName">鎼滅储鍘嗗彶</span>\n    <div class="searchMsgTitleRightPart">\n      <a href="#" id="clearSearchHistory" class="manage">娓呴櫎鍘嗗彶璁板綍</a>\n    </div>\n  </div>\n  <ul data-bl="sug" data-el="history">\n  ';
        for (var a = 0; a < e.list.length; a++) n += '\n    <li>\n      <a href="' + (null == (t = e.list[a].url) ? "" : t) + '" data-for_search_server="from=history_click&refer=' + (null == (t = ljConf.page) ? "" : t) + '" role="addHistory" data-log_index="' + (null == (t = a + 1) ? "" : t) + '" data-log_value="' + (null == (t = $.encodeHTML(e.list[a].name)) ? "" : t) + '" class="sug--search_item">\n        <span class="msgListTitle" role="historyKey">' + (null == (t = $.encodeHTML(e.list[a].name)) ? "" : t) + "</span>\n        ", e.list[a].newCount && (n += '\n          <span class="msgListAdd">' + (null == (t = e.list[a].newCount) ? "" : t) + "濂楁柊澧炴埧婧�/span>\n        "), n += "\n      </a>\n    </li>\n  ";
        return n += "\n  </ul>\n"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), n(62), t.default = function(e, t, n) {
        $("#otherSearchForm").submit(function(t) {
            t.preventDefault();
            var a = $.trim($(".m-filter .inp-search").val());
            if ("" !== a) {
                a = encodeURIComponent(a);
                var i = encodeURIComponent(e);
                if (-1 === window.location.pathname.indexOf("sir" + i)) - 1 === window.location.pathname.indexOf("pg" + n) ? window.location.pathname = window.location.pathname + "sir" + a : window.location.pathname = window.location.pathname.replace("pg" + n, "") + "sir" + a;
                else {
                    var o = window.location.pathname.replace("pg" + n, "");
                    window.location.pathname = o.replace("sir" + i, "sir" + a)
                }
            } else alert("鎼滅储鍐呭涓嶈兘涓虹┖锛�)
        });
        var a = $(".m-filter .list-more dl"),
            i = a.length,
            o = $(".m-filter .btn-more"),
            r = sessionStorage.getItem(t) || 0,
            s = a.filter('[data-role="hide-row"]');

        function l() { s.show(), o.html('鏀惰捣閫夐」<span class="upArrow"></span>') }
        o.click(function() { 1 == r ? (s.hide(), o.html('鏇村閫夐」<span class="arrow"></span>'), sessionStorage.setItem(t, 0)) : (l(), sessionStorage.setItem(t, 1)), r = sessionStorage.getItem(t) || 0 }), 1 == r && l(), (a.slice(3, i).find(".checked").length || $.trim($(".m-filter .inp-search").val())) && (sessionStorage.setItem(t, 1), l()), $(".m-filter .btn-showmore").click(function() { $(this).closest("dl").height("auto").end().hide() }), $(".customFilter input").keyup(function(e) {
            var t = parseInt($(this).parent().find("input").first().val()) || 0,
                n = parseInt($(this).parent().find("input").last().val()) || 1e4,
                a = $(this).parent().find("button");
            $.isNumeric(t) && $.isNumeric(n) ? a.show() : a.hide(), 13 === e.keyCode && a.filter(":visible").click()
        }), $(".list-more .btn-range").click(function() {
            var e = $(this).data("url"),
                t = Math.abs(parseInt($(this).siblings("input").first().val())) || 0,
                n = Math.abs(parseInt($(this).siblings("input").last().val())) || 1e4;
            t > n && (t = (n += t -= n) - t), e = (e = e.replace("{min}", t)).replace("{max}", n), window.location.href = e
        }), $.each($(".list-more dl").has(".btn-showmore"), function(e, t) {
            $.each($(t).find("input"), function(e, n) {
                ($(n).val() || $(t).find(".secondRowItem .checked").length) && ($(t).find(".btn-showmore").click(), $(t).find("input").val() && $(t).find("button").show())
            })
        });
        var u = $('.position [data-role="ershoufang"]'),
            c = $('.position [data-role="ditiefang"]'),
            d = $('.position [data-role="xuequ"]'),
            f = $("#areaTab"),
            p = $("#subwayTab"),
            h = $("#xuequTab");
        f.click(function(e) { e.preventDefault(), f.addClass("selected"), p.removeClass("selected"), h.removeClass("selected"), u.show(), c.hide(), d.hide() }), p.click(function(e) { e.preventDefault(), p.addClass("selected"), f.removeClass("selected"), h.removeClass("selected"), u.hide(), c.show(), d.hide() }), h.click(function(e) { e.preventDefault(), p.removeClass("selected"), f.removeClass("selected"), h.addClass("selected"), u.hide(), c.hide(), d.show() })
    }
}, function(e, t, n) {}, , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n(79)
}, function(e, t, n) {}, , , function(e, t, n) {
    "use strict";
    n(83)
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
    }();
    n(85);
    var i = n(86),
        o = function() {
            function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.$root = $('[data-component="C_SidebarKandian"]'), this.data = t.data, this.init() }
            return a(e, [{ key: "render", value: function() { $.exist(this.data, "data.length") && (this.$root.html(i({ kandian_data: this.data })), this.$root.show(), window.track_handle && window.track_handle.checkNodes()) } }, { key: "bind", value: function() { this.$root.on("click", ".arrow", function() { $(this).closest(".item").toggleClass("active") }) } }, { key: "init", value: function() { this.render(), this.bind() } }]), e
        }();
    t.default = o
}, function(e, t, n) {}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        n += '<div class="list-kandian">\n    <div class="title">璐濆３鐪嬬偣\n        <a href="' + (null == (t = e.kandian_data.more_url) ? "" : t) + '" class="btn-more" target="_blank">鏇村</a>\n    </div>\n    <div class="bd">\n        ';
        for (var a = 0; a < e.kandian_data.data.length; a++) {
            n += "\n        ";
            var i = e.kandian_data.data[a],
                o = "content_id=" + i.content_id + "&content_title=" + i.title + "&beike_id=" + i.beike_id + "&beike_name=" + i.beike_name + "&bd_source=" + i.bd_source + "&img_count=" + i.img_count + "&position=" + (a + 1) + "&recom_type=" + i.recom_type + "&recom_scene=11";
            n += '\n        <div class="item">\n            <a class="tit VIEWDATA CLICKDATA"\n               data-view-evtid="17324" data-view-event="ItemExpo"\n               data-click-evtid="17325" data-click-event="WebClick"\n               data-action=\'' + (null == (t = o) ? "" : t) + "'\n               href=\"" + (null == (t = i.url) ? "" : t) + '" target="_blank" title="' + (null == (t = i.title) ? "" : t) + '">' + (null == (t = i.title) ? "" : t) + '</a>\n            <div class="sub-tit">' + (null == (t = i.summary) ? "" : t) + '</div>\n            <span class="arrow"></span>\n        </div>\n        '
        }
        return n += "\n    </div>\n</div>\n"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var a, i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
        }(),
        o = n(1),
        r = (a = o) && a.__esModule ? a : { default: a };
    var s = { dev: "https://s1.ljcdn.com/agent-sj-sdk/1.1.0/agent-sj-sdk.js", test: "https://s1.ljcdn.com/agent-sj-sdk/1.1.0/agent-sj-sdk.js", prod: "https://s1.ljcdn.com/agent-sj-sdk/1.1.0/agent-sj-sdk.js" },
        l = function() {
            function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.single = null, this.funcQueue = [], this.loadJs() }
            return i(e, [{ key: "callbacks", value: function(e) { this.funcQueue.forEach(function(t) { t(e) }) } }, {
                key: "loadJs",
                value: function() {
                    var e = this;
                    window.KeAgentSJ || $.loadScript({ url: s[r.default], complete: function() { e.callbacks(window.KeAgentSJ) } })
                }
            }], [{ key: "ready", value: function(t) { window.KeAgentSJ ? t(window.KeAgentSJ) : (this.single || (this.single = new e), this.single.funcQueue.push(t)) } }]), e
        }();
    t.default = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
    }();
    n(92);
    var i, o = n(40),
        r = (i = o) && i.__esModule ? i : { default: i };
    var s = n(93),
        l = n(94),
        u = function() {
            function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.imgBannerSelector = '[data-component="C_agentProfPhoto__imgbanner"]', this.single = null, this.list = [], this.$root = null, this.init() }
            return a(e, [{ key: "setData", value: function(e) { this.list = e.list, this.render() } }, {
                key: "render",
                value: function() {
                    var e = $(s({ list: this.list }));
                    this.$root || (this.$root = $(l()), $("body").append(this.$root)), this.$root.html(e), (0, r.default)({ showImg: this.$root.find(".agent_prof_card__list img"), showDesc: this.$root.find(".agent_prof_card__list .desc"), pre: this.$root.find(".pre"), next: this.$root.find(".next"), images: this.$root.find(".slide ul"), spacing: 10, loading: this.$root.find(".loading"), selectPosition: 0 }), this.$root.show()
                }
            }, {
                key: "bind",
                value: function() {
                    var e = this;
                    this.$root.on("click", ".agent_prof_card__close", function(t) { t.stopPropagation(), e.$root.hide() }), this.$root.on("click", ".agent_prof_card__list img", function(e) { window.open(this.src) })
                }
            }, { key: "init", value: function() { this.render(), this.bind() } }], [{ key: "getInstance", value: function() { return this.single || $(this.imgBannerSelector).length || (this.single = new e), this.single } }]), e
        }();
    t.default = u
}, function(e, t, n) {
    "use strict";
    var a, i;
    (a = jQuery).toast = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Error",
            t = arguments[1],
            n = arguments[2];
        "function" == typeof t && (n = t, t = null), t = "number" == typeof t ? t : 2e3;
        var o = a("#ui-toast");
        o.length || (o = a('<div id="ui-toast" style="display: none;background: rgba(26,26,26,0.95);border-radius: 4px;padding: 14px; text-align: center;position: fixed;left: 50%;top: 50%;color: #FFF;transform: translate(-50%,-50%);z-index: 99;"><p style="display: inline-block;text-align: left;max-width: 200px;"></p></div>'), a("body").append(o)), o.find("p").text(e), o.is(":visible") ? clearTimeout(i) : o.show(), i = setTimeout(function() { o.hide(), "function" == typeof n && n() }, t)
    }
}, function(e, t, n) {}, , function(e, t, n) {}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        n += '<div>\n    <div class="agent_prof_card__mask"></div>\n    <div class="agent_prof_card__list">\n        <img src="" alt=""/>\n        <div class="desc"></div>\n        <div class="loading"></div>\n        <div class="pre"><span></span></div>\n        <div class="next"><span></span></div>\n    </div>\n    <div class="agent_prof_card__close"></div>\n    <div class="slide">\n        <ul>\n            ';
        for (var a = 0; a < e.list.length; a++) {
            n += "\n            ";
            var i = e.list[a];
            i.img = i.img;
            var o = i.no ? '<dt class="label">璇佷欢缂栧彿</dt><dd class="cont">' + i.no + "</dd>" : "",
                r = i.desc ? '<dt class="label">璇佷欢璇存槑</dt><dd class="cont">' + i.desc + "</dd>" : "";
            n += '\n            <li data-src="' + (null == (t = i.img) ? "" : t) + '" data-uri="' + (null == (t = i.img) ? "" : t) + "\"\n                data-desc='" + (null == (t = o + r) ? "" : t) + "'\n                data-pic=\"" + (null == (t = i.img) ? "" : t) + '">\n                <img src="' + (null == (t = i.img) ? "" : t) + '" alt=""/>\n            </li>\n            '
        }
        return n += "\n        </ul>\n    </div>\n</div>\n"
    }
}, function(e, t) { e.exports = function(e) { var t = ""; return t += '<div data-component="C_agentProfPhoto__imgbanner"></div>\n' } }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) { n(7), e.exports = n(208) }, function(e, t, n) {
    "use strict";
    var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
        }(),
        i = function e(t, n, a) { null === t && (t = Function.prototype); var i = Object.getOwnPropertyDescriptor(t, n); if (void 0 === i) { var o = Object.getPrototypeOf(t); return null === o ? void 0 : e(o, n, a) } if ("value" in i) return i.value; var r = i.get; return void 0 !== r ? r.call(a) : void 0 };
    n(209), n(34);
    var o = w(n(14)),
        r = w(n(4)),
        s = (w(n(43)), w(n(55))),
        l = w(n(61)),
        u = (w(n(78)), w(n(210))),
        c = w(n(213)),
        d = (w(n(82)), w(n(215)), w(n(217))),
        f = w(n(84)),
        p = w(n(220)),
        h = w(n(223)),
        v = w(n(226)),
        g = w(n(229)),
        y = w(n(233)),
        m = w(n(236)),
        b = w(n(239)),
        _ = w(n(242));

    function w(e) { return e && e.__esModule ? e : { default: e } }
    var k = function(e) {
        function t() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var e = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return e.events = {}, e.logined = { followHouse: function(t) { e.list.followHouse(t) } }, i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "initEvent", e).call(e, e.events), i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "loginCheck", e).call(e, e.logined), e.init(), e }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.default), a(t, [{
            key: "searchRequstLog",
            value: function() {
                var e = $(".sellListContent").find("[data-click-evtid=11178]")[0],
                    t = $(".m-noresult");
                if (e || t.length) {
                    var n = {};
                    e ? n = $.queryToJson($(e).attr("data-action") || "") : n.fb_query_id = $(t).attr("data-query-id"), n.source_type = "PC棣栭〉鍜屽垪琛ㄩ〉鎼滅储", window.track_handle && window.track_handle.send("11177", "SearchRequst", n)
                }
            }
        }, {
            key: "getAsyncData",
            value: function(e, t) {
                var n = this;
                $.ajax({ url: r.default.API_URL + e, type: "get", dataType: "jsonp", data: t, success: function(e) { 0 === e.errno && ((0, p.default)(e.data.agent, t.id + ""), (0, y.default)(e.data.resblock), new d.default({ data: e.data.baike }), new f.default({ data: e.data.vpoint }), n.list.listGuide(e.data.guide)) } })
            }
        }, { key: "init", value: function() { this.list = new b.default(this._globalPlugins.loginPlugin), this.searchRequstLog(), new s.default({ type: "sell" }), (0, l.default)(window.GLOBAL_INFOS.SIRKeyword, "openFilterErshoufang", window.GLOBAL_INFOS.pageNum), (0, u.default)(window.GLOBAL_INFOS, this._globalPlugins.loginPlugin), new c.default(window.GLOBAL_INFOS, { lianjiaIM: this.lianjiaIM }), (0, m.default)(), (0, v.default)(window.GLOBAL_INFOS.recommendExtInfo), (0, h.default)(window.GLOBAL_INFOS.recommendExtInfo), (0, g.default)(), this.getAsyncData(window.GLOBAL_INFOS.url, { cityId: window.GLOBAL_INFOS.sidebar.cityId, id: window.GLOBAL_INFOS.sidebar.id, uuid: window.GLOBAL_INFOS.sidebar.uuid, ucid: window.GLOBAL_INFOS.sidebar.ucid, type: window.GLOBAL_INFOS.sidebar.type }), new _.default(window.GLOBAL_INFOS) } }]), t
    }();
    $(function() { new k })
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) {
        ! function(e) {
            var t = $("#saveBtn");
            $(".close").on("click", function() { $(".saveok,.saveerror,.saveMegmask").hide() }), $(".m-noresult .btn-save").click(function() { t.click() }), t.on("click", function(t) { t.preventDefault(), e.userInfo ? u.saveSearch({ url: window.location.pathname, callback: function(e) { e ? 1 == e && $(".saveMegmask, .saveerror").show() : $(".saveMegmask, .saveok").show() } }) : e.init(0, function() { location.reload() }) })
        }(t),
        function(e, t) {
            var n = /\/ts\d{10}/g;
            if (n.test(location.pathname)) {
                var i = 1e3 * location.pathname.match(n)[0].substr(3),
                    o = location.pathname.replace(n, "");
                return void d({ time: i, count: t, url: o, linkText: "鏌ョ湅鍏ㄩ儴鎼滅储缁撴灉" })
            }
            var r = "";
            localStorage[l] && (localStorage[l] = "");
            sessionStorage[l] && (r = JSON.parse(sessionStorage[l]), sessionStorage[l] = "", -1 !== r.url.indexOf(r.url) && $.ajax({
                url: a.default.API_URL + "/web/parsesearch/ershoufangaddition",
                type: "get",
                dataType: "jsonp",
                data: { timestamp: parseInt(r.timestamp / 1e3, 10), city: e, query: r.url },
                success: function(e) {
                    if (0 === e.errno && 0 !== e.data) {
                        var t = location.pathname.replace(/\/rs.+/, "/ts" + parseInt(r.timestamp / 1e3, 10) + "$&");
                        d({ time: r.timestamp, count: e.data, url: t, linkText: "鏌ョ湅鏂板鎴挎簮", logText: 'data-bl="seeNew" log-mod="zhangchao_newershoufang"' });
                        var n = $(".LOGNEWERSHOUFANGSHOW").get(0);
                        if (n) try { UT.send({ type: "show" }, n) } catch (e) {}
                    }
                }
            }))
        }(e.sidebar.cityId, e.count)
    }, n(211);
    var a = o(n(4)),
        i = o(n(44));

    function o(e) { return e && e.__esModule ? e : { default: e } }
    var r = n(212),
        s = n(45),
        l = "ershoufang_search_record",
        u = new i.default({ tpl: s, container: $("#searchMsgContainer") });

    function c(e) { return e < 10 ? "0" + e.toString() : e }

    function d(e) {
        var t = new Date(e.time),
            n = $("#newAddHouseContainer"),
            a = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + "&nbsp;" + c(t.getHours()) + ":" + c(t.getMinutes());
        n.html(r({ time: a, count: e.count, url: e.url, linkText: e.linkText, logText: e.logText || "" })), window.track_handle && window.track_handle.checkNodes(), $(".newHouseRightClose").on("click", function() { n.remove() })
    }
}, function(e, t, n) {}, function(e, t) { e.exports = function(e) { var t, n = ""; return n += '<div class="newAddHouse">\n    鑷粠鎮ㄤ笂娆℃祻瑙堬紙' + (null == (t = e.time) ? "" : t) + "锛変箣鍚庯紝璇ユ悳绱㈡潯浠朵笅鏂板鍔犱簡" + (null == (t = e.count) ? "" : t) + '濂楁埧婧怽n    <a href="' + (null == (t = e.url) ? "" : t) + '" class="LOGNEWERSHOUFANGSHOW" ' + (null == (t = e.logText) ? "" : t) + ">" + (null == (t = e.linkText) ? "" : t) + '</a>\n    <span class="newHouseRightClose">x</span>\n</div>\n' } }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]) } return e },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
        }();
    n(90);
    var o = s(n(87)),
        r = s(n(88));

    function s(e) { return e && e.__esModule ? e : { default: e } }
    var l = (0, n(0).getCookie)("select_city"),
        u = n(214),
        c = window.BeikeLoginSDK,
        d = function() {
            function e(t, n) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.props = n, this.option = t, this.init(t) }
            return i(e, [{
                key: "init",
                value: function(e) {
                    var t = this,
                        n = $("#sem_card");
                    if (n && n.length) {
                        var a = n.attr("semResblockId"),
                            i = n.attr("semCommunityId"),
                            r = n.attr("semDistrictId"),
                            s = n.attr("semBizcircleId"),
                            l = n.attr("semSubwayStationId"),
                            c = n.attr("keyword"),
                            d = n.attr("semType"),
                            f = { resblock: { id: a }, community: { id: i }, bizcircle: { id: s }, subway_station: { id: l }, noresult: {} },
                            p = { type: d, resblock_id: a, community_id: i, district_id: r, bizcircle_id: s, subway_station_id: l, word: c };
                        location.href.indexOf("ershoufang") && ("community" === d ? p.source = "ershou_shequ" : "resblock" === d && (p.source = "ershou_xiaoqu")), new o.default, $.ajax({ url: "/api/listtop", type: "get", data: p, dataType: "json", success: function(n) { 0 == n.errno && ($("#sem_card").html(u({ typeId: f[d] && f[d].id, data: n.data, defaultImg: e.defaultImg, extend: { community_id: n.data.info ? n.data.info.id + "" : "" }, fbQueryId: e.fbQueryId, parentType: d })), t.initAgent(d, e.fbQueryId, { semResblockId: a || "", resblockName: n.data && n.data.info && n.data.info.name || "", semResblockIds: n.data && n.data.info && n.data.info.semResblockIds || "" }), n.data.info && 0 == n.data.info.xiaoquChannel && $(".agentCardResblockLink").hide()) } })
                    }
                }
            }, {
                key: "initAgent",
                value: function(e, t, n) {
                    var i = this;
                    o.default.ready(function() {
                        var o = "noresult" === e ? "100000821" : "100000100",
                            s = {};
                        e && "noresult" != e || (s.queryType = 1), "community" == e && (s.resblockIds = n.semResblockIds), "resblock" == e && (s.resblockId = n.semResblockId), window.KeAgentSJ.init([a({ id: o, mediumId: "100000036", hdicCityId: l, fbQueryId: t, required400: "true", action: JSON.stringify({ fb_query_id: i.option.fbQueryId }) }, s, {
                            onProfileCardClick: function(e) {
                                var t = [],
                                    n = e.agentSJInfo.agentList[0];
                                (n && n.agentProofList && n.agentProofList.length > 0 && (t = n.agentProofList.filter(function(e) { if (11 === Number(e.type)) { var t = e; return t.desc = "", t.no = "", t } })), 0 === t.length && n.orgProofList && n.orgProofList.length > 0 && (t = n.orgProofList), t && t.length > 0) && r.default.getInstance().setData({ list: t })
                            },
                            onIMClick: function(e) { c.userInfo ? i.props.lianjiaIM.imHandle.initTalk({ ucid: e.imDomData.ucid, port: e.imDomData.sourcePort, extends: JSON.stringify($.queryToJson(e.imDomData.sourceExtends)), msgPayload: "鎮ㄥソ锛屾垜鎯冲挩璇� + n.resblockName + "灏忓尯" }) : c.init(0) }
                        })])
                    })
                }
            }]), e
        }();
    t.default = d
}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        if (e.data.type) {
            if (n += '\n<div class="agentCardPush agentCardPushNew VIEWDATA"\n     data-view-event="ModuleExpo"\n    ', "bizcircle" == e.data.type ? n += '\n     data-view-evtid="15118"\n     data-action=\'source_type=PC浜屾墜鎴垮垪琛ㄥ晢鍦堝悐椤跺睍浣�tradearea_id=' + (null == (t = e.typeId) ? "" : t) + "&agent_ucid=" + (null == (t = e.data.agentUcid) ? "" : t) + "&e_plan=" + (null == (t = e.data.digVTop) ? "" : t) + "&type=tradearea'\n    " : "subway_station" == e.data.type && (n += '\n     data-view-evtid="15119"\n     data-action=\'source_type=PC浜屾墜鎴垮垪琛ㄥ湴閾佸悐椤跺睍浣�subway_id=' + (null == (t = e.typeId) ? "" : t) + "&agent_ucid=" + (null == (t = e.data.agentUcid) ? "" : t) + "&e_plan=" + (null == (t = e.data.digVTop) ? "" : t) + "&type=subway'\n    "), n += '\n     data-bl="agentim" log-mod="ershoufang_list_semcard" data-bl="agent"\n     data-el="' + (null == (t = e.data.agentUcid) ? "" : t) + '">\n    ', "noresult" == e.parentType || "community" == e.parentType || "resblock" == e.parentType) n += "\n        ", "noresult" == e.parentType ? n += '\n            <div class="agentCardAgentInfo  ke-agent-sj-sdk component-agent-id-100000821"\n                 data-fb-query-id="' + (null == (t = e.fbQueryId) ? "" : t) + '">\n            </div>\n        ' : n += '\n            <div class="agentCardAgentInfo component-agent-id-100000100"\n                 data-fb-query-id="' + (null == (t = e.fbQueryId) ? "" : t) + '">\n            </div>\n        ', n += "\n    ";
            else {
                if (n += "\n    ", e.data.agentUcid) {
                    if (n += '\n    <div class="agentCardAgentInfo ' + (null == (t = e.data.info.id ? "" : "alongBlock") ? "" : t) + '">\n        <a href="' + (null == (t = e.data.agentUrl) ? "" : t) + '" target="_blank" class="agentCardAgentImg CLICKDATA"\n            data-click-evtid="20618"\n            data-click-event="WebClick"\n            data-action="source_type=缁忕邯浜哄簵閾�缁忕邯浜哄ご鍍忕偣鍑�ljweb_channel_key=ershouxiaoqu_diaoding">\n            <div class="agent_erudite ' + (null == (t = e.data.agentTags && e.data.agentTags.erudite) ? "" : t) + '">\n                ', e.data.photoPath ? n += '\n                <img src="' + (null == (t = e.data.photoPath) ? "" : t) + '.84x110.jpg" alt="灏忓尯椤鹃棶">\n                ' : n += '\n                <img src="' + (null == (t = e.defaultImg) ? "" : t) + '" alt="">\n                ', n += '\n            </div>\n        </a>\n        <div class="cardAgentInfo">\n            <div class="cardAgentNameContainer">\n                <a target="_blank"\n                href="' + (null == (t = e.data.agentUrl) ? "" : t) + '"\n                data-click-evtid="20618"\n                data-click-event="WebClick"\n                data-action="source_type=缁忕邯浜哄簵閾�缁忕邯浜哄ご鍍忕偣鍑�ljweb_channel_key=ershouxiaoqu_diaoding"\n                class="cardAgentName CLICKDATA">' + (null == (t = e.data.name) ? "" : t) + "\n                    ", 0 != e.data.vipLevel && (n += '\n                    <i class="agent_card_vip"></i>\n                    '), n += '\n                </a>\n            </div>\n            <div class="cardAgentPhone"><span class="phone_num">' + (null == (t = e.data.fourPhoneOneTop) ? "" : t) + '</span>\n                <a class="agentIcon CLICKDATA"\n                   data-msg-payload="鎮ㄥソ锛屾垜鎯冲挩璇� + (null == (t = e.data.info.name) ? "" : t) + '灏忓尯"\n                   data-click-event="IMClick"\n                    ', "bizcircle" == e.data.type ? n += "\n                   data-action='source_type=PC浜屾墜鎴垮垪琛ㄥ晢鍦堝悐椤跺睍浣�tradearea_id=" + (null == (t = e.typeId) ? "" : t) + "&agent_ucid=" + (null == (t = e.data.agentUcid) ? "" : t) + "&agent_name=" + (null == (t = e.data.name) ? "" : t) + "&agent_telephone=" + (null == (t = e.data.fourPhoneOneTop) ? "" : t) + "&e_plan=" + (null == (t = e.data.digVTop) ? "" : t) + "&type=tradearea&fb_query_id=" + (null == (t = e.fbQueryId) ? "" : t) + "'\n                    " : "subway_station" == e.data.type && (n += "\n                   data-action='source_type=PC浜屾墜鎴垮垪琛ㄥ湴閾佸悐椤跺睍浣�subway_id=" + (null == (t = e.typeId) ? "" : t) + "&agent_ucid=" + (null == (t = e.data.agentUcid) ? "" : t) + "&agent_name=" + (null == (t = e.data.name) ? "" : t) + "&agent_telephone=" + (null == (t = e.data.fourPhoneOneTop) ? "" : t) + "&e_plan=" + (null == (t = e.data.digVTop) ? "" : t) + "&type=subway&fb_query_id=" + (null == (t = e.fbQueryId) ? "" : t) + "'\n                    "), n += '\n                   data-bl="agentim"\n                   data-el="' + (null == (t = e.data.agentUcid) ? "" : t) + '"\n                   data-bl="agent_im"\n                   data-role="beikeim-createtalk"\n                   data-ucid="' + (null == (t = e.data.agentUcid) ? "" : t) + '"\n                   data-source-port="pc_beike_ershouplat_list_ershoufang_diaoding"\n                   data-source-extends=\'' + (null == (t = $.jsonToQuery(e.extend) + "&" + $.jsonToQuery(e.data.imInfo)) ? "" : t) + '\'></a>\n            </div>\n            <div class="cardAgentDesc">' + (null == (t = e.data.desc) ? "" : t) + '</div>\n            <div class="jjr_card_div">\n                ', e.data.agentMark && (n += '\n                <span class="star_jjr">' + (null == (t = e.data.agentMark) ? "" : t) + "</span>\n                "), n += "\n                ", e.data.tags) {
                        n += "\n                ";
                        for (var a = 0; a < e.data.tags.length; a++) n += "\n                ", (e.data.agentMark && a < 2 || !e.data.agentMark && a < 3) && (n += "\n                <span>" + (null == (t = e.data.tags[a]) ? "" : t) + "</span>\n                "), n += "\n                ";
                        n += "\n                "
                    }
                    n += "\n            </div>\n        </div>\n    </div>\n    "
                }
                n += "\n    "
            }
            n += "\n    ", e.data.info.id && (n += '\n    <div class="agentCardResblockInfo">\n        <div class="agentCardResblockName">\n            <a class="agentCardResblockTitle LOGCLICK maidian-detail" data-bl="agent_resblock_name"\n               data-maidian_query="' + (null == (t = e.fbQueryId) ? "" : t) + '"\n               data-log_value="' + (null == (t = e.data.info.id) ? "" : t) + '" data-log_source="' + (null == (t = e.data.ljwebSource) ? "" : t) + '"\n               data-log_statId="' + (null == (t = e.data.ljwebStatId) ? "" : t) + '"\n                ', e.data.info.url ? n += '\n               target="_blank"\n               href="' + (null == (t = e.data.info.url) ? "" : t) + '"\n                ' : n += '\n               href="javascript:;"\n                ', n += "\n            >" + (null == (t = e.data.info.name) ? "" : t) + '</a>\n            <span class="agentCardResblockSubTitle">\n                ', e.data.info.districtName && (n += "\n                " + (null == (t = e.data.info.districtName) ? "" : t) + "\n                "), n += "\n                ", e.data.info.bizcircleName && (n += "\n                " + (null == (t = e.data.info.bizcircleName) ? "" : t) + "\n                "), n += "\n            </span>\n            ", "resblock" == e.data.type && (n += "\n            ", e.data.info.url && (n += '\n            <a href="' + (null == (t = e.data.info.url) ? "" : t) + '" target="_blank" class="agentCardResblockLink LOGCLICK"\n               data-bl="agent_resblock_info" data-log_value="' + (null == (t = e.data.info.id) ? "" : t) + '"\n               data-log_source="' + (null == (t = e.data.ljwebSource) ? "" : t) + '"\n               data-log_statId="' + (null == (t = e.data.ljwebStatId) ? "" : t) + '">鏌ョ湅灏忓尯璇︽儏</a>\n            '), n += "\n            "), n += '\n        </div>\n        <div class="agentCardResblockDetail">\n            \x3c!--  --\x3e\n            <div class="agentCardDetailItem price">\n                <div class="agentCardDetailTitle">灏忓尯鍧囦环</div>\n                <div target="_blank" class="agentCardDetailInfo LOGCLICK" data-bl="agent_resblock_avg"\n                     data-log_value="' + (null == (t = e.data.info.id) ? "" : t) + '" data-log_source="' + (null == (t = e.data.ljwebSource) ? "" : t) + '"\n                     data-log_statId="' + (null == (t = e.data.ljwebStatId) ? "" : t) + '">\n                    ', e.data.info.unitPrice ? n += "\n                    " + (null == (t = e.data.info.unitPrice) ? "" : t) + "鍏�骞崇背\n                    " : n += "\n                    鏆傛棤鏁版嵁\n                    ", n += '\n                </div>\n            </div>\n\n            \x3c!--  --\x3e\n\n            <div class="agentCardDetailItem">\n                <div class="agentCardDetailTitle">姝ｅ湪鍑哄敭</div>\n                <div class="agentCardDetailInfo">\n                    ', e.data.info.sellNum ? n += "\n                    " + (null == (t = e.data.info.sellNum) ? "" : t) + "濂梊n                    " : n += "\n                    鏆傛棤鏁版嵁\n                    ", n += '\n                </div>\n            </div>\n            \x3c!--  --\x3e\n            <div class="agentCardDetailItem">\n                <div class="agentCardDetailTitle">杩�0澶╂垚浜�/div>\n                <div target="_blank" class="agentCardDetailInfo LOGCLICK" data-bl="agent_resblock_sale"\n                     data-log_value="' + (null == (t = e.data.info.id) ? "" : t) + '" data-log_source="' + (null == (t = e.data.ljwebSource) ? "" : t) + '"\n                     data-log_statId="' + (null == (t = e.data.ljwebStatId) ? "" : t) + '">\n                    ', e.data.info["90saleCount"] ? n += "\n                    " + (null == (t = e.data.info["90saleCount"]) ? "" : t) + "濂梊n                    " : n += "\n                    鏆傛棤鏁版嵁\n                    ", n += '\n                </div>\n            </div>\n            \x3c!--  --\x3e\n            <div class="agentCardDetailItem">\n                <div class="agentCardDetailTitle">杩�0澶╁甫鐪�/div>\n                <div class="agentCardDetailInfo">\n                    ', e.data.info.day30See ? n += "\n                    " + (null == (t = e.data.info.day30See) ? "" : t) + "娆n                    " : n += "\n                    鏆傛棤鏁版嵁\n                    ", n += "\n                </div>\n            </div>\n        </div>\n    </div>\n    "), n += "\n</div>\n"
        }
        return n += "\n"
    }
}, function(e, t, n) {
    "use strict";
    n(216)
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
    }();
    n(218);
    var i = n(219),
        o = function() {
            function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.$root = $('[data-component="C_SidebarBaike"]'), this.data = t.data, this.init() }
            return a(e, [{ key: "render", value: function() { this.data.data && 0 !== this.data.data.length && (this.$root.html(i({ baike_data: this.data })), this.$root.show(), window.track_handle && window.track_handle.checkNodes()) } }, { key: "bind", value: function() { this.$root.on("click", ".arrow", function() { $(this).closest(".item").toggleClass("active") }) } }, { key: "init", value: function() { this.render(), this.bind() } }]), e
        }();
    t.default = o
}, function(e, t, n) {}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        n += '<div class="list-baike">\n    <div class="title">鐑棬鐧剧\n        <a href="' + (null == (t = e.baike_data.more_url) ? "" : t) + '" class="btn-more" target="_blank">鏇村</a>\n    </div>\n    <div class="bd">\n        ';
        for (var a = 0; a < e.baike_data.data.length; a++) n += '\n        <div class="item"><a href="' + (null == (t = e.baike_data.data[a].url) ? "" : t) + '" target="_blank" class="tit"\n                             title="' + (null == (t = e.baike_data.data[a].title) ? "" : t) + '">' + (null == (t = e.baike_data.data[a].title) ? "" : t) + '</a>\n            <div class="sub-tit">' + (null == (t = e.baike_data.data[a].summary) ? "" : t) + '</div>\n            <span class="arrow"></span></div>\n        ';
        return n += "\n    </div>\n</div>\n"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) { var n = $("#suggestAgentContainer"); "[object Object]" === Object.prototype.toString.call(e) && function(e) { var t = []; for (var n in e) e.hasOwnProperty(n) && t.push(n); return t }(e).length >= 6 ? (e.formatDesc = $.getLimitString(e.desc, 56, "..."), e.communityId = { community_id: t }, n.html(a(e)), n.show(), window.track_handle && window.track_handle.checkNodes()) : n.hide() }, n(221);
    var a = n(222)
}, function(e, t, n) {}, function(e, t) { e.exports = function(e) { var t, n = ""; return n += '<div class="title">鎺ㄨ崘缃笟椤鹃棶</div>\n<div class="agent">\n<a class="img ' + (null == (t = e.desc.search("瀛﹀尯") > -1 ? "" : "LOGVIEW LOGCLICK") ? "" : t) + '"\n   data-bl="agent_' + (null == (t = e.desc.search("瀛﹀尯") > -1 ? "school" : "community") ? "" : t) + '" data-el="' + (null == (t = e.ucid) ? "" : t) + '"\n   data-log_id="20001">\n    <img src="' + (null == (t = e.photo_url) ? "" : t) + '" alt="">\n</a>\n<div class="info">\n    <div class="name">\n        <a target="_blank" data-bl="agent_' + (null == (t = e.desc.search("瀛﹀尯") > -1 ? "school" : "community") ? "" : t) + '"\n           data-el="' + (null == (t = e.ucid) ? "" : t) + '" class="' + (null == (t = e.desc.search("瀛﹀尯") > -1 ? "" : "LOGCLICK") ? "" : t) + '"\n           data-log_id="20001">' + (null == (t = e.name) ? "" : t) + '</a>\n        <a class="lianjiaim-createtalk ' + (null == (t = e.desc.search("瀛﹀尯") > -1 ? "" : "LOGCLICK") ? "" : t) + '"\n           style="padding: 1px 0 !important;" title="鍦ㄧ嚎鍜ㄨ" data-role="beikeim-createtalk" data-ucid="' + (null == (t = e.ucid) ? "" : t) + '"\n           data-bl="agentim_' + (null == (t = e.desc.search("瀛﹀尯") > -1 ? "school" : "community") ? "" : t) + '" data-el="' + (null == (t = e.ucid) ? "" : t) + '"\n           data-log_id="20001" data-source-port="PC:ershou_ershoufang_list_xiaoquguwen"\n           data-source-extends=\'' + (null == (t = $.jsonToQuery(e.communityId) + "&" + $.jsonToQuery(e.imInfo)) ? "" : t) + '\'></a>\n    </div>\n    <div class="phone">' + (null == (t = e.phone) ? "" : t) + '</div>\n</div>\n</div>\n<div class="agentInfo" title="' + (null == (t = e.desc) ? "" : t) + '">' + (null == (t = e.formatDesc) ? "" : t) + "</div>\n" } }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) {
        var t = $("#lessResultIds");
        if (!t.length) return;
        var n = t.attr("ids");
        $.ajax({ url: "/ershoufang/lessresult/", type: "get", dataType: "json", data: { ids: n, recommend_ext_info: e }, success: function(e) { e.data && 1 === e.code ? (t.html(a(e.data)), window.track_handle && window.track_handle.checkNodes()) : t.hide() } })
    }, n(224);
    var a = n(225)
}, function(e, t, n) {}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        var a = e;
        n += '\n<ul data-component="lessResult" class="sellListContent VIEWDATA" data-view-evtid="11147" data-view-event="RecoModuleEXP" data-action=\'source_type=PC鎼滅储灏戠粨鏋淺'>\n    ';
        var i = 0;
        for (var o in n += "\n    ", a) {
            n += '\n        <li class="clear VIEWDATA CLICKDATA"  data-click-evtid="11146" data-click-event="RecoClick" data-view-evtid="11145" data-view-event="RecoItemEXP" data-action=\'source_type=PC鎼滅储灏戠粨鏋�click_position=' + (null == (t = i) ? "" : t) + "&fb_expo_id=" + (null == (t = $.exist(a[o], "strategyInfo.fb_expo_id")) ? "" : t) + '\'>\n            <a class="img" href="' + (null == (t = a[o].houseUrl) ? "" : t) + '" target="_blank">\n                <img class="lj-lazy" src="' + (null == (t = a[o].listPictureUrl) ? "" : t) + '" alt="', a[o].houseTitle, n += '">\n            </a>\n            <div class="info clear">\n                <div class="title">\n                    <a href="' + (null == (t = a[o].houseUrl) ? "" : t) + '" target="_blank" >' + (null == (t = a[o].houseTitle) ? "" : t) + "</a>\n                    ", a[o].isTrendDown && (n += '\n                    <span class="reduse tagBlock" data-hid="' + (null == (t = a[o].shellHouseId) ? "" : t) + '" data-type="1">\n                        闄嶄环\n                    </span>\n                    '), n += "\n                    ", a[o].isNew && (n += '\n                    <span class="new tagBlock">鏂颁笂</span>\n                    '), n += "\n                    ", a[o].isYeZhuTuijian && (n += '\n                    <span class="yezhushuo tagBlock">鎴夸富鑷崘</span>\n                    '), n += '\n                </div>\n                <div class="address">\n                    <div class="houseInfo">\n                        <span class="houseIcon"></span>\n                        <a href="', a[o].communityUrl ? n += null == (t = a[o].communityUrl) ? "" : t : n += "javascript:;", n += '" target="_blank" data-el="region">' + (null == (t = a[o].resblockName) ? "" : t) + "</a>\n                        ", a[o].frameType && (n += '\n                            <span class="divide">/</span>\n                            ' + (null == (t = a[o].frameType) ? "" : t) + "\n                          "), n += "\n                          ", a[o].houseArea && (n += '\n                            <span class="divide">/</span>\n                            ' + (null == (t = a[o].houseArea + "骞崇背") ? "" : t) + "\n                          "), n += "\n                          ", a[o].orientation && (n += '\n                            <span class="divide">/</span>\n                            ' + (null == (t = a[o].orientation) ? "" : t) + "\n                          "), n += "\n                          ", a[o].decorateType && (n += '\n                            <span class="divide">/</span>\n                            ' + (null == (t = a[o].decorateType) ? "" : t) + "\n                          "), n += "\n                          ", a[o].hasElevator && (n += '\n                            <span class="divide">/</span>\n                            ' + (null == (t = a[o].hasElevator) ? "" : t) + "\n                          "), n += '\n                    </div>\n                </div>\n                <div class="flood">\n                    <div class="positionInfo">\n                    <span class="positionIcon"></span>\n                    ', a[o].floorStat && a[o].totalFloor || a[o].buildingAge ? (n += "\n                        ", a[o].floorStat && (n += "\n                            " + (null == (t = a[o].floorStat) ? "" : t) + "(鍏� + (null == (t = a[o].totalFloor) ? "" : t) + "灞�\n                        "), n += "\n                        ", a[o].buildingAge && (n += "\n                            " + (null == (t = a[o].buildingAge) ? "" : t) + "\n                        "), n += "\n                    ") : n += "\n                        鏆傛棤鏁版嵁\n                    ", n += '\n                    </div>\n                </div>\n                <div class="followInfo"><span class="starIcon"></span>' + (null == (t = a[o].favCount) ? "" : t) + "浜哄叧娉�/ " + (null == (t = a[o].registerTime) ? "" : t) + '</div>\n                <div class="tag">\n                    ', a[o].subwayInfo && (n += '\n                    <span class="subway">' + (null == (t = a[o].subwayInfo) ? "" : t) + "</span>\n                    "), n += "\n                    ";
            for (var r = 0; r < a[o].tags.length; r++) n += '\n                        <span class="' + (null == (t = a[o].tags[r][0]) ? "" : t) + '">' + (null == (t = a[o].tags[r][1]) ? "" : t) + "</span>\n                        ";
            n += '\n                </div>\n                <div class="priceInfo">\n                    <div class="totalPrice"><span>' + (null == (t = a[o].houseTotalPrice) ? "" : t) + '</span>涓�/div>\n                    <div class="unitPrice" data-hid="' + (null == (t = a[o].shellHouseId) ? "" : t) + '" data-rid="' + (null == (t = a[o].resblockName) ? "" : t) + '" data-price="' + (null == (t = a[o].houseUnitPrice) ? "" : t) + '">\n                    <span>鍗曚环' + (null == (t = a[o].houseUnitPrice) ? "" : t) + '鍏�骞崇背</span>\n                    </div>\n                </div>\n            </div>\n            <div class="listButtonContainer">\n                <div class="btn-follow followBtn CLICKDATA" data-hid="' + (null == (t = a[o].houseId) ? "" : t) + '" data-click-evtid="11284" data-click-event="FavoriteClick" data-action="Housedel_id=' + (null == (t = a[o].houseId) ? "" : t) + '&status=0&source_type=PC鍒楄〃椤垫埧婧愬崱鐗囧叧娉ㄦ寜閽�>\n                    <span class="follow-text">鍏虫敞</span>\n                </div>\n            </div>\n        </li>\n        ', i++, n += "\n    "
        }
        return n += "\n</ul>\n"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) {
        var t = $('[data-component="noResult"]');
        t.hide();
        var n = $("#noResultIds");
        if (!n.length) return;
        $.ajax({ url: "/ershoufang/noresult/", type: "get", dataType: "json", data: { recommend_ext_info: e }, success: function(e) { e.data && 1 === e.code ? (n.html(a(e.data)), t.show(), window.track_handle && window.track_handle.checkNodes()) : n.hide() } })
    }, n(227);
    var a = n(228)
}, function(e, t, n) {}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        var a = e;
        n += '\n<ul data-component="noResult" class="sellListContent VIEWDATA" data-view-evtid="11144" data-view-event="RecoModuleEXP" data-action=\'source_type=PC鎼滅储灏戠粨鏋淺'>\n    ';
        var i = 0;
        for (var o in n += "\n    ", a) {
            n += '\n        <li class="clear VIEWDATA CLICKDATA"  data-click-evtid="11146" data-click-event="RecoClick" data-view-evtid="11145" data-view-event="RecoItemEXP" data-action=\'source_type=PC鎼滅储灏戠粨鏋�click_position=' + (null == (t = i) ? "" : t) + "&fb_expo_id=" + (null == (t = $.exist(a[o], "strategyInfo.fb_expo_id")) ? "" : t) + '\'>\n            <a class="img" href="' + (null == (t = a[o].houseUrl) ? "" : t) + '" target="_blank" >\n                <img class="lj-lazy" src="' + (null == (t = a[o].listPictureUrl) ? "" : t) + '" alt="', a[o].houseTitle, n += '">\n            </a>\n            <div class="info clear">\n                <div class="title">\n                    <a href="' + (null == (t = a[o].houseUrl) ? "" : t) + '" target="_blank" >' + (null == (t = a[o].houseTitle) ? "" : t) + "</a>\n                    ", a[o].isTrendDown && (n += '\n                    <span class="reduse tagBlock" data-hid="' + (null == (t = a[o].shellHouseId) ? "" : t) + '" data-type="1">\n                        闄嶄环\n                    </span>\n                    '), n += "\n                    ", a[o].isNew && (n += '\n                    <span class="new tagBlock">鏂颁笂</span>\n                    '), n += "\n                    ", a[o].isYeZhuTuijian && (n += '\n                    <span class="yezhushuo tagBlock">鎴夸富鑷崘</span>\n                    '), n += '\n                </div>\n                <div class="address">\n                    <div class="houseInfo">\n                        <span class="houseIcon"></span>\n                        <a href="', a[o].communityUrl ? n += null == (t = a[o].communityUrl) ? "" : t : n += "javascript:;", n += '" target="_blank" data-el="region">' + (null == (t = a[o].resblockName) ? "" : t) + "</a>\n                        ", a[o].frameType && (n += '\n                            <span class="divide">/</span>\n                            ' + (null == (t = a[o].frameType) ? "" : t) + "\n                          "), n += "\n                          ", a[o].houseArea && (n += '\n                            <span class="divide">/</span>\n                            ' + (null == (t = a[o].houseArea + "骞崇背") ? "" : t) + "\n                          "), n += "\n                          ", a[o].orientation && (n += '\n                            <span class="divide">/</span>\n                            ' + (null == (t = a[o].orientation) ? "" : t) + "\n                          "), n += "\n                          ", a[o].decorateType && (n += '\n                            <span class="divide">/</span>\n                            ' + (null == (t = a[o].decorateType) ? "" : t) + "\n                          "), n += "\n                          ", a[o].hasElevator && (n += '\n                            <span class="divide">/</span>\n                            ' + (null == (t = a[o].hasElevator) ? "" : t) + "\n                          "), n += '\n                    </div>\n                </div>\n                <div class="flood">\n                    <div class="positionInfo">\n                    <span class="positionIcon"></span>\n                    ', a[o].floorStat && a[o].totalFloor || a[o].buildingAge ? (n += "\n                        ", a[o].floorStat && (n += "\n                            " + (null == (t = a[o].floorStat) ? "" : t) + "(鍏� + (null == (t = a[o].totalFloor) ? "" : t) + "灞�\n                        "), n += "\n                        ", a[o].buildingAge && (n += "\n                            " + (null == (t = a[o].buildingAge) ? "" : t) + "\n                        "), n += "\n                    ") : n += "\n                        鏆傛棤鏁版嵁\n                    ", n += '\n                    </div>\n                </div>\n                <div class="followInfo"><span class="starIcon"></span>' + (null == (t = a[o].favCount) ? "" : t) + "浜哄叧娉�/ " + (null == (t = a[o].registerTime) ? "" : t) + '</div>\n                <div class="tag">\n                    ', a[o].subwayInfo && (n += '\n                    <span class="subway">' + (null == (t = a[o].subwayInfo) ? "" : t) + "</span>\n                    "), n += "\n                    ";
            for (var r = 0; r < a[o].tags.length; r++) n += '\n                        <span class="' + (null == (t = a[o].tags[r][0]) ? "" : t) + '">' + (null == (t = a[o].tags[r][1]) ? "" : t) + "</span>\n                        ";
            n += '\n                </div>\n                <div class="priceInfo">\n                    <div class="totalPrice"><span>' + (null == (t = a[o].houseTotalPrice) ? "" : t) + '</span>涓�/div>\n                    <div class="unitPrice" data-hid="' + (null == (t = a[o].shellHouseId) ? "" : t) + '" data-rid="' + (null == (t = a[o].resblockName) ? "" : t) + '" data-price="' + (null == (t = a[o].houseUnitPrice) ? "" : t) + '">\n                    <span>鍗曚环' + (null == (t = a[o].houseUnitPrice) ? "" : t) + '鍏�骞崇背</span>\n                    </div>\n                </div>\n            </div>\n            <div class="listButtonContainer">\n                <div class="btn-follow followBtn CLICKDATA" data-hid="' + (null == (t = a[o].shellHouseId) ? "" : t) + '" data-click-evtid="11284" data-click-event="FavoriteClick" data-action="Housedel_id=' + (null == (t = a[o].shellHouseId) ? "" : t) + '&status=0&source_type=PC鍒楄〃椤垫埧婧愬崱鐗囧叧娉ㄦ寜閽�>\n                    <span class="follow-text">鍏虫敞</span>\n                </div>\n            </div>\n        </li>\n        ', i++, n += "\n    "
        }
        return n += "\n</ul>\n"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function() { $('[data-component="C_sidebarDownload"]').sticky({ topSpacing: 0, bottomSpacing: 1e3 }) }, n(230), n(231)
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    var a, i, o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
    i = [n(232)], void 0 === (o = "function" == typeof(a = function(e) {
        var t = Array.prototype.slice,
            n = Array.prototype.splice,
            a = { topSpacing: 0, bottomSpacing: 0, className: "is-sticky", wrapperClassName: "sticky-wrapper", center: !1, getWidthFrom: "", widthFromWrapper: !0, responsiveWidth: !1, zIndex: "inherit" },
            i = e(window),
            o = e(document),
            s = [],
            l = i.height(),
            u = function() {
                for (var t = i.scrollTop(), n = o.height(), a = n - l, r = t > a ? a - t : 0, u = 0, c = s.length; u < c; u++) {
                    var d = s[u],
                        f = d.stickyWrapper.offset().top,
                        p = f - d.topSpacing - r;
                    if (d.stickyWrapper.css("height", d.stickyElement.outerHeight()), t <= p) null !== d.currentTop && (d.stickyElement.css({ width: "", position: "", top: "", "z-index": "" }), d.stickyElement.parent().removeClass(d.className), d.stickyElement.trigger("sticky-end", [d]), d.currentTop = null);
                    else {
                        var h, v = n - d.stickyElement.outerHeight() - d.topSpacing - d.bottomSpacing - t - r;
                        v < 0 ? v += d.topSpacing : v = d.topSpacing, d.currentTop !== v && (d.getWidthFrom ? (padding = d.stickyElement.innerWidth() - d.stickyElement.width(), h = e(d.getWidthFrom).width() - padding || null) : d.widthFromWrapper && (h = d.stickyWrapper.width()), null == h && (h = d.stickyElement.width()), d.stickyElement.css("width", h).css("position", "fixed").css("top", v).css("z-index", d.zIndex), d.stickyElement.parent().addClass(d.className), null === d.currentTop ? d.stickyElement.trigger("sticky-start", [d]) : d.stickyElement.trigger("sticky-update", [d]), d.currentTop === d.topSpacing && d.currentTop > v || null === d.currentTop && v < d.topSpacing ? d.stickyElement.trigger("sticky-bottom-reached", [d]) : null !== d.currentTop && v === d.topSpacing && d.currentTop < v && d.stickyElement.trigger("sticky-bottom-unreached", [d]), d.currentTop = v);
                        var g = d.stickyWrapper.parent(),
                            y = d.stickyElement.offset().top + d.stickyElement.outerHeight() >= g.offset().top + g.outerHeight() && d.stickyElement.offset().top <= d.topSpacing;
                        y ? d.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : d.stickyElement.css("position", "fixed").css("top", v).css("bottom", "").css("z-index", d.zIndex)
                    }
                }
            },
            c = function() {
                l = i.height();
                for (var t = 0, n = s.length; t < n; t++) {
                    var a = s[t],
                        o = null;
                    a.getWidthFrom ? a.responsiveWidth && (o = e(a.getWidthFrom).width()) : a.widthFromWrapper && (o = a.stickyWrapper.width()), null != o && a.stickyElement.css("width", o)
                }
            },
            d = {
                init: function(t) {
                    return this.each(function() {
                        var n = e.extend({}, a, t),
                            i = e(this),
                            o = i.attr("id"),
                            r = o ? o + "-" + a.wrapperClassName : a.wrapperClassName,
                            l = e("<div></div>").attr("id", r).addClass(n.wrapperClassName);
                        i.wrapAll(function() { if (0 == e(this).parent("#" + r).length) return l });
                        var u = i.parent();
                        n.center && u.css({ width: i.outerWidth(), marginLeft: "auto", marginRight: "auto" }), "right" === i.css("float") && i.css({ float: "none" }).parent().css({ float: "right" }), n.stickyElement = i, n.stickyWrapper = u, n.currentTop = null, s.push(n), d.setWrapperHeight(this), d.setupChangeListeners(this)
                    })
                },
                setWrapperHeight: function(t) {
                    var n = e(t),
                        a = n.parent();
                    a && a.css("height", n.outerHeight())
                },
                setupChangeListeners: function(e) {
                    if (window.MutationObserver) {
                        var t = new window.MutationObserver(function(t) {
                            (t[0].addedNodes.length || t[0].removedNodes.length) && d.setWrapperHeight(e)
                        });
                        t.observe(e, { subtree: !0, childList: !0 })
                    } else window.addEventListener ? (e.addEventListener("DOMNodeInserted", function() { d.setWrapperHeight(e) }, !1), e.addEventListener("DOMNodeRemoved", function() { d.setWrapperHeight(e) }, !1)) : window.attachEvent && (e.attachEvent("onDOMNodeInserted", function() { d.setWrapperHeight(e) }), e.attachEvent("onDOMNodeRemoved", function() { d.setWrapperHeight(e) }))
                },
                update: u,
                unstick: function(t) { return this.each(function() { for (var t = e(this), a = -1, i = s.length; i-- > 0;) s[i].stickyElement.get(0) === this && (n.call(s, i, 1), a = i); - 1 !== a && (t.unwrap(), t.css({ width: "", position: "", top: "", float: "", "z-index": "" })) }) }
            };
        window.addEventListener ? (window.addEventListener("scroll", u, !1), window.addEventListener("resize", c, !1)) : window.attachEvent && (window.attachEvent("onscroll", u), window.attachEvent("onresize", c)), e.fn.sticky = function(n) { return d[n] ? d[n].apply(this, t.call(arguments, 1)) : "object" !== (void 0 === n ? "undefined" : r(n)) && n ? void e.error("Method " + n + " does not exist on jQuery.sticky") : d.init.apply(this, arguments) }, e.fn.unstick = function(n) { return d[n] ? d[n].apply(this, t.call(arguments, 1)) : "object" !== (void 0 === n ? "undefined" : r(n)) && n ? void e.error("Method " + n + " does not exist on jQuery.sticky") : d.unstick.apply(this, arguments) }, e(function() { setTimeout(u, 0) })
    }) ? a.apply(t, i) : a) || (e.exports = o)
}, function(e, t) { e.exports = window.$ }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) {
        var t = $("#pushCommunity");
        0 !== e.length ? (t.html(a({ list: e })), t.show(), window.track_handle && window.track_handle.checkNodes()) : t.hide()
    }, n(234);
    var a = n(235)
}, function(e, t, n) {}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        n += '<div class="title">灏忓尯鎺ㄨ崘</div>\n<ul>\n';
        for (var a = 0; a < e.list.length; a++) n += '\n<li>\n    <a href="' + (null == (t = e.list[a].url) ? "" : t) + '" class="img LOGVIEW LOGCLICK" data-log_id="30001" target="_blank" title="' + (null == (t = e.list[a].name) ? "" : t) + '" alt="' + (null == (t = e.list[a].name) ? "" : t) + '"\n       data-log_index="' + (null == (t = a + 1) ? "" : t) + '"\n       data-bl="' + (null == (t = "灏忓尯" === $.trim($(".list-more dl:first dt").text()) ? "community" : "bizcircle") ? "" : t) + '" data-el="">\n        ', e.list[a].pic ? n += '\n        <img src="' + (null == (t = e.list[a].pic) ? "" : t) + '" title="' + (null == (t = e.list[a].name) ? "" : t) + '" alt="' + (null == (t = e.list[a].name) ? "" : t) + '">\n        ' : n += '\n        <span class="noimg">鏆傛棤鍥剧墖</span>\n        ', n += '\n        <div class="price">\n            ', 0 != e.list[a].price && e.list[a].price ? n += "\n            " + (null == (t = parseFloat(e.list[a].price, 10).toFixed()) ? "" : t) + "鍏�骞砛n            " : n += "\n            鏆傛棤鍧囦环\n            ", n += '\n        </div>\n    </a>\n    <div class="info clear">\n        <a href="' + (null == (t = e.list[a].url) ? "" : t) + '" target="_blank" class="fl">' + (null == (t = e.list[a].name) ? "" : t) + '</a>\n        <div class="fr">' + (null == (t = e.list[a].sellNum) ? "" : t) + '濂楀湪鍞�/div>\n    </div>\n    <div class="desc">' + (null == (t = e.list[a].desc) ? "" : t) + "</div>\n</li>\n";
        return n += "\n</ul>\n"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function() {
        var e = $("#newHousePush");
        $.ajax({ url: "/api/newhouserecommend", type: "get", dataType: "json", data: { type: "1", query: location.href }, success: function(t) { t.data && 0 !== t.data.length && 1 === t.code ? (e.html(a({ list: t.data, strategy_version: t.strategy_version || "" })), e.show(), window.track_handle && window.track_handle.checkNodes()) : e.hide() } })
    }, n(237);
    var a = n(238)
}, function(e, t, n) {}, function(e, t) {
    e.exports = function(e) {
        var t, n = "";
        Array.prototype.join;
        n += '<div class="newHousePushContainer">\n    <h3>鎺ㄨ崘妤肩洏</h3>\n    <ul log-mod="ershoufang_list_newHouseRecommand">\n        ';
        for (var a = 0; a < e.list.length; a++) n += '\n        <li>\n            <a class="pic CLICKDATA VIEWDATA LOGVIEW LOGCLICK" href="' + (null == (t = e.list[a].view_url) ? "" : t) + '" title="' + (null == (t = e.list[a].resblock_name) ? "" : t) + '" target="_blank" data-bl="list"\n               data-log_id="40001" data-el="' + (null == (t = e.strategy_version) ? "" : t) + '" data-log_index="' + (null == (t = a + 1) ? "" : t) + '" data-click-evtid="22485" data-click-event="WebClick" data-view-evtid="22484" data-view-event="ItemExpo" data-action="source_type=浜屾墜鍒楄〃椤靛簳閮ㄦ帹鑽愭柊鎴�fb_expo_id=' + (null == (t = $.exist(e.list[a], "fb_expo_id")) ? "" : t) + "&click_position=" + (null == (t = a) ? "" : t) + "&project_name=" + (null == (t = e.list[a].project_name) ? "" : t) + '">\n                <span class="bg"></span>\n                ', e.list[a].cover_pic ? n += '\n                <img src="' + (null == (t = e.list[a].cover_pic) ? "" : t) + '.218x150.jpg" alt="' + (null == (t = e.list[a].resblock_name) ? "" : t) + '" title="' + (null == (t = e.list[a].resblock_name) ? "" : t) + '">\n                ' : n += '\n                <div class="mark"></div>\n                ', n += '\n                <div class="description">' + (null == (t = e.list[a].district_name) ? "" : t) + "锛� + (null == (t = e.list[a].resblock_name) ? "" : t) + "</div>\n            </a>\n            ", e.list[a].rooms && (n += '\n            <p class="area">\n                ' + (null == (t = e.list[a].rooms) ? "" : t) + "\n                ", "" != e.list[a].min_frame_area && "" != e.list[a].max_frame_area && (n += "\n                &nbsp;-&nbsp;\n                " + (null == (t = e.list[a].min_frame_area) ? "" : t) + "~" + (null == (t = e.list[a].max_frame_area) ? "" : t) + "骞砛n                "), n += "\n            </p>\n            "), n += '\n            <div class="price">\n                ', e.list[a].show_price && 0 != e.list[a].show_price ? n += "\n                <i>" + (null == (t = e.list[a].show_price) ? "" : t) + "</i>\n                " + (null == (t = e.list[a].show_price_unit) ? "" : t) + "\n                " : n += "\n                浠锋牸寰呭畾\n                ", n += "\n            </div>\n        </li>\n        ";
        return n += "\n    </ul>\n</div>\n"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
    }();
    n(240);
    var i, o = n(43),
        r = (i = o) && i.__esModule ? i : { default: i };
    var s = n(241),
        l = function() {
            function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.loginPlugin = t, this.init() }
            return a(e, [{ key: "init", value: function() { this.initDaoliu(), this.followHouseEvent() } }, { key: "initDaoliu", value: function() { $(document.body).on("click", ".daoliu_close", function() { $(this).closest("li").remove() }) } }, { key: "setUnFollow", value: function(e) { e.find(".follow-text").text("鍏虫敞"), e.find(".star").removeClass("followed") } }, { key: "setFollowed", value: function(e) { e.find(".follow-text").text("鍙栨秷鍏虫敞"), e.find(".star").addClass("followed") } }, {
                key: "listGuide",
                value: function(e) {
                    if (e.length && $(".sellListContent li").length > 2) {
                        var t = e[0];
                        $(".sellListContent li").eq(1).html(s(t)), t.sub_title || $(".list_guide .list_guide_title").css({ top: "50%", marginTop: "-15px" })
                    }
                }
            }, {
                key: "followHouseEvent",
                value: function() {
                    var e = this;
                    $(document).on("click", ".btn-follow", function() {
                        var t = $(this),
                            n = t.attr("isfav"),
                            a = t.data("hid"),
                            i = $('.btn-follow[data-hid="' + a + '"]');
                        return e.loginPlugin.userInfo ? $.getJSON(r.default.fixedUrl("/api/sethousefav"), { id: a, isFav: n || 0 }, function(t) { 0 == t.status ? 1 == n ? (i.attr("isfav", 0), e.setFollowed(i)) : (i.attr("isfav", 1), e.setUnFollow(i)) : alert(t.msg) }) : e.loginPlugin.init(0, function() { location.reload() }), !1
                    })
                }
            }, {
                key: "followHouse",
                value: function(e) {
                    var t = this;
                    e && $.getJSON(r.default.fixedUrl("/api/gethousesfav"), { id: window.GLOBAL_INFOS.ids }, function(e) {
                        $.each(e, function(e, n) {
                            var a = $('.btn-follow[data-hid="' + e + '"]'),
                                i = $.queryToJson(a.attr("data-action") || "");
                            i.status = n ? 0 : 1, a.attr("data-action", $.jsonToQuery(i)), a.attr("isfav", n ? 0 : 1), n ? t.setFollowed(a) : t.setUnFollow(a)
                        })
                    })
                }
            }]), e
        }();
    t.default = l
}, function(e, t, n) {}, function(e, t) { e.exports = function(e) { var t, n = ""; return n += '<li class="list_guide">\n    <a href="' + (null == (t = e.url) ? "" : t) + '" class="list_guide_bg" style="background-image:url(' + (null == (t = e.img_url) ? "" : t) + ');"> +\n        <div class="list_guide_cover"></div>\n        <div class="list_guide_title">\n            <p class="big"> ' + (null == (t = e.title || "") ? "" : t) + "</p>\n            <p> " + (null == (t = e.sub_title || "") ? "" : t) + " </p>\n        </div>\n    </a>\n</li>\n" } }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t }
    }();
    n(243), n(89);
    var i = $(".lz_save").length > 0 && $(".lz_save").attr("class").indexOf("disable") < 0,
        o = !0,
        r = function() {
            function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.option = t, this.init(t) }
            return a(e, [{ key: "init", value: function(e) { this.changePhone(), this.sendMsg(), this.lzSave(e) } }, { key: "checkMobileNum", value: function(e) { return /^(1)\d{10}$/.test(e) } }, {
                key: "changePhone",
                value: function() {
                    var e = this;
                    $(".lz_phone,.lz_yzm input").keyup(function() { e.checkMobileNum($(this).val()) ? $(this).siblings("label").removeClass("disable") : $(this).siblings("label").addClass("disable"), "" != $(".lz_yzm input").val() && e.checkMobileNum($(".lz_phone").val()) ? ($(".lz_save").removeClass("disable"), i = !0) : $(".lz_save").addClass("disable") })
                }
            }, {
                key: "sendMsgFunc",
                value: function() {
                    var e = this,
                        t = $(".sendMsg");
                    t.attr("class").indexOf("disable") < 0 && o && $.ajax({ url: "/ershouliuzi/sendverifycode", type: "get", dataType: "json", data: { mobile: $(".lz_phone").val(), verify_pic: $(".lz_dialog").find("input").val() || "" }, success: function(n) { if (0 === n.errno && n.data) { var a = 60;! function e() { o = !1, 0 === a ? (t.html("閲嶅彂"), t.removeClass("disable"), o = !0) : (t.html(a + "s鍚庨噸鍙�), t.addClass("disable"), a--, setTimeout(e, 1e3)) }(), $(".lz_dialog").hide(), $.toast("鐭俊楠岃瘉鐮佸凡鍙戦�锛岃娉ㄦ剰鏌ユ敹") } else 1 === n.errno && n.data && 1 == n.data.isPwdExceedLoginTimes ? e.showVerifyImg() : 2 === n.errno ? ($.toast(n.errmsg), e.showVerifyImg()) : ($.toast(n.errmsg), $(".lz_dialog").hide()) } })
                }
            }, {
                key: "sendMsg",
                value: function() {
                    var e = this;
                    $(".sendMsg").click(function() { e.sendMsgFunc() }), $(".lzActOk").click(function() { "" == $(".lz_dialog").find("input").val() ? ($.toast("璇疯緭鍏ユ纭殑鍥惧舰楠岃瘉鐮�), e.showVerifyImg()) : e.sendMsgFunc() })
                }
            }, {
                key: "showVerifyImg",
                value: function() {
                    var e = "/ershouliuzi/generatepictureupgrade?mobile=" + $(".lz_phone").val() + "&_t=",
                        t = $(".lz_dialog").find("img");
                    $(".lz_dialog").find("input").val(""), t.attr("src", e + Date.now()), t.on("click", function() { t.attr("src", e + Date.now()) }), $(".lz_dialog").show()
                }
            }, { key: "lzSave", value: function(e) { $(".lz_save").click(function() { i && (i = !i, $.ajax({ url: "/ershouliuzi/liuzisave", type: "get", dataType: "json", data: { query: location.pathname.split("/ershoufang/")[1], mobile: $(".lz_phone").val(), verify_code: $(".lz_yzm input").val() || "", cityId: e.sidebar.cityId }, success: function(e) { 0 === e.errno && e.data ? ($.toast("濉啓鎴愬姛锛屾湁鐩稿叧鎴挎簮灏嗙珛鍗抽�鐭ヤ綘"), i = !0, $(".lz_box").remove()) : ($.toast(e.errmsg), i = !0) } })) }) } }]), e
        }();
    t.default = r
}, function(e, t, n) {}]);