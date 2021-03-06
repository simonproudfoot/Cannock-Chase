/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
module.exports = function(t) {
    function e(i) { if (n[i]) return n[i].exports; var s = n[i] = { i: i, l: !1, exports: {} }; return t[i].call(s.exports, s, s.exports, e), s.l = !0, s.exports }
    var n = {};
    return e.m = t, e.c = n, e.i = function(t) { return t }, e.d = function(t, n, i) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: i }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "/", e(e.s = 5)
}([function(t, e) {
    function n(t, e) {
        var n = t[1] || "",
            s = t[3];
        if (!s) return n;
        if (e && "function" == typeof btoa) { var r = i(s); return [n].concat(s.sources.map(function(t) { return "/*# sourceURL=" + s.sourceRoot + t + " */" })).concat([r]).join("\n") }
        return [n].join("\n")
    }

    function i(t) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */" }
    t.exports = function(t) {
        var e = [];
        return e.toString = function() { return this.map(function(e) { var i = n(e, t); return e[2] ? "@media " + e[2] + "{" + i + "}" : i }).join("") }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var i = {}, s = 0; s < this.length; s++) { var r = this[s][0]; "number" == typeof r && (i[r] = !0) }
            for (s = 0; s < t.length; s++) { var o = t[s]; "number" == typeof o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o)) }
        }, e
    }
}, function(t, e) {
    t.exports = function(t, e, n, i, s) {
        var r, o = t = t || {},
            a = typeof t.default;
        "object" !== a && "function" !== a || (r = t, o = t.default);
        var u = "function" == typeof o ? o.options : o;
        e && (u.render = e.render, u.staticRenderFns = e.staticRenderFns), i && (u._scopeId = i);
        var c;
        if (s ? (c = function(t) { t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), n && n.call(this, t), t && t._registeredComponents && t._registeredComponents.add(s) }, u._ssrRegister = c) : n && (c = n), c) {
            var d = u.functional,
                l = d ? u.render : u.beforeCreate;
            d ? u.render = function(t, e) { return c.call(e), l(t, e) } : u.beforeCreate = l ? [].concat(l, c) : [c]
        }
        return { esModule: r, exports: o, options: u }
    }
}, function(t, e, n) {
    function i(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e],
                i = d[n.id];
            if (i) {
                i.refs++;
                for (var s = 0; s < i.parts.length; s++) i.parts[s](n.parts[s]);
                for (; s < n.parts.length; s++) i.parts.push(r(n.parts[s]));
                i.parts.length > n.parts.length && (i.parts.length = n.parts.length)
            } else {
                for (var o = [], s = 0; s < n.parts.length; s++) o.push(r(n.parts[s]));
                d[n.id] = { id: n.id, refs: 1, parts: o }
            }
        }
    }

    function s() { var t = document.createElement("style"); return t.type = "text/css", l.appendChild(t), t }

    function r(t) {
        var e, n, i = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
        if (i) {
            if (h) return v;
            i.parentNode.removeChild(i)
        }
        if (A) {
            var r = f++;
            i = p || (p = s()), e = o.bind(null, i, r, !1), n = o.bind(null, i, r, !0)
        } else i = s(), e = a.bind(null, i), n = function() { i.parentNode.removeChild(i) };
        return e(t),
            function(i) {
                if (i) {
                    if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap) return;
                    e(t = i)
                } else n()
            }
    }

    function o(t, e, n, i) {
        var s = n ? "" : i.css;
        if (t.styleSheet) t.styleSheet.cssText = m(e, s);
        else {
            var r = document.createTextNode(s),
                o = t.childNodes;
            o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(r, o[e]) : t.appendChild(r)
        }
    }

    function a(t, e) {
        var n = e.css,
            i = e.media,
            s = e.sourceMap;
        if (i && t.setAttribute("media", i), s && (n += "\n/*# sourceURL=" + s.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
        }
    }
    var u = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !u) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var c = n(16),
        d = {},
        l = u && (document.head || document.getElementsByTagName("head")[0]),
        p = null,
        f = 0,
        h = !1,
        v = function() {},
        A = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    t.exports = function(t, e, n) {
        h = n;
        var s = c(t, e);
        return i(s),
            function(e) {
                for (var n = [], r = 0; r < s.length; r++) {
                    var o = s[r],
                        a = d[o.id];
                    a.refs--, n.push(a)
                }
                e ? (s = c(t, e), i(s)) : s = [];
                for (var r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (0 === a.refs) {
                        for (var u = 0; u < a.parts.length; u++) a.parts[u]();
                        delete d[a.id]
                    }
                }
            }
    };
    var m = function() { var t = []; return function(e, n) { return t[e] = n, t.filter(Boolean).join("\n") } }()
}, function(t, e, n) {
    ! function(e, n) { t.exports = n() }(0, function() {
        return function(t) {
            function e(i) { if (n[i]) return n[i].exports; var s = n[i] = { exports: {}, id: i, loaded: !1 }; return t[i].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports }
            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function(t, e) {
            "use strict";

            function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
            var i = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t },
                s = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
                }(),
                r = function(t, e, n) { e.forEach(function(e) { t.addEventListener(e, function(t) { n(t) }) }) },
                o = function(t, e) { e.forEach(function(e) { t.removeEventListener(e) }) },
                a = function() {
                    function t(e) { n(this, t), this.defaults = { idle: 1e4, events: ["mousemove", "keydown", "mousedown", "touchstart"], onIdle: function() {}, onActive: function() {}, onHide: function() {}, onShow: function() {}, keepTracking: !0, startAtIdle: !1, recurIdleCall: !1 }, this.settings = i({}, this.defaults, e), this.idle = this.settings.startAtIdle, this.visible = !this.settings.startAtIdle, this.visibilityEvents = ["visibilitychange", "webkitvisibilitychange", "mozvisibilitychange", "msvisibilitychange"], this.lastId = null }
                    return s(t, [{ key: "resetTimeout", value: function(t, e) { if (this.idle && (e.onActive.call(), this.idle = !1), clearTimeout(t), this.settings.keepTracking) return this.timeout(this.settings) } }, { key: "timeout", value: function(t) { var e = this.settings.recurIdleCall ? setInterval : setTimeout; return e(function() { this.idle = !0, this.settings.onIdle.call() }.bind(this), this.settings.idle) } }, { key: "start", value: function() { window.addEventListener("idle:stop", function(t) { o(window, this.settings.events), this.settings.keepTracking = !1, this.resetTimeout(this.lastId, this.settings) }), this.lastId = this.timeout(this.settings), r(window, this.settings.events, function(t) { this.lastId = this.resetTimeout(this.lastId, this.settings) }.bind(this)), (this.settings.onShow || this.settings.onHide) && r(document, this.visibilityEvents, function(t) { document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? this.visible && (this.visible = !1, this.settings.onHide.call()) : this.visible || (this.visible = !0, this.settings.onShow.call()) }.bind(this)) } }]), t
                }();
            t.exports = a
        }])
    })
}, function(t, e, n) {
    function i(t) { n(15) }
    var s = n(1)(n(6), n(13), i, null, null);
    t.exports = s.exports
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { default: t } }

    function s(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(3),
        o = i(r),
        a = n(4),
        u = i(a);
    e.default = {
        IdleView: u.default,
        install: function(t, e) {
            var n = e || {},
                i = n.eventEmitter,
                r = n.store,
                a = n.moduleName,
                c = void 0 === a ? "idleVue" : a,
                d = n.idleTime,
                l = void 0 === d ? 6e4 : d,
                p = n.events,
                f = void 0 === p ? ["mousemove", "keydown", "mousedown", "touchstart"] : p,
                h = n.keepTracking,
                v = void 0 === h || h,
                A = n.startAtIdle,
                m = void 0 === A || A;
            if (!i && !r) throw Error("Either `eventEmitter` or `store` must be passed in options");
            r && r.registerModule(c, { state: { isIdle: m }, mutations: s({}, c + "/IDLE_CHANGED", function(t, e) { t.isIdle = e }) });
            var b = c + "_onIdle",
                g = c + "_onActive";
            new o.default({ idle: l, events: f, keepTracking: v, startAtIdle: m, onIdle: function() { i && i.$emit(b), r && r.commit(c + "/IDLE_CHANGED", !0) }, onActive: function() { i && i.$emit(g), r && r.commit(c + "/IDLE_CHANGED", !1) } }).start(), t.component("IdleView", u.default), t.mixin({ data: function() { var t; return t = {}, s(t, b, null), s(t, g, null), t }, created: function() { i && this.$options.onIdle && (this[b] = this.$options.onIdle.bind(this), i.$on(b, this[b])), i && this.$options.onActive && (this[g] = this.$options.onActive.bind(this), i.$on(g, this[g])) }, destroyed: function() { i && this[b] && i.$off(b, this[b]), i && this[g] && i.$off(g, this[g]) }, computed: { isAppIdle: function() { return r && r.state[c].isIdle } } })
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(11),
        s = function(t) { return t && t.__esModule ? t : { default: t } }(i);
    e.default = { components: { Sprite: s.default }, onIdle: function() { this.$refs.sprite.play() }, onActive: function() { this.$refs.sprite.stop() } }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
        name: "sprite",
        props: { spriteSrc: { type: String, default: "" }, spriteId: { type: String, default: "sprite" }, spriteW: { type: Number, default: 1 }, spriteH: { type: Number, default: 1 }, spriteSpeed: { type: Number, default: 1 } },
        data: function() { return { visible: !0, frameIndex: 0, tickCount: 0, frameLength: 0, ticksPerFrame: 0, numberOfFrames: 0, frameRate: 20, ctx: "", canvas: "", mySprite: "", animationFrameId: -1 } },
        mounted: function() {
            var t = this;
            this.$nextTick(function() { t.mySprite = new Image, t.mySprite.onload = function(e) { t.spriteInit(e.target) }, t.mySprite.src = t.spriteSrc })
        },
        methods: {
            spriteInit: function(t) { this.canvas = this.$el.querySelector("#" + this.spriteId), this.ctx = this.canvas.getContext("2d"), this.ticksPerFrame = this.spriteSpeed, this.frameLength = t.width, this.numberOfFrames = t.width / this.spriteW, this.spriteLoop() },
            spriteUpdate: function() {++this.tickCount > this.ticksPerFrame && (this.tickCount = 0, this.frameIndex < this.numberOfFrames - 1 ? this.frameIndex++ : this.frameIndex = 0) },
            spriteRender: function() {
                this.ctx.clearRect(0, 0, this.spriteW, this.spriteH);
                var t = this.frameIndex * this.spriteW;
                this.ctx.drawImage(this.mySprite, t, 0, this.spriteW, this.spriteH, 0, 0, this.spriteW, this.spriteH)
            },
            spriteLoop: function() { this.animationFrameId = window.requestAnimationFrame(this.spriteLoop), this.spriteUpdate(), this.spriteRender() },
            stop: function() { window.cancelAnimationFrame(this.animationFrameId) },
            play: function() { this.spriteLoop() }
        }
    }
}, function(t, e, n) { e = t.exports = n(0)(!0), e.push([t.i, "", "", { version: 3, sources: [], names: [], mappings: "", file: "Sprite.vue", sourceRoot: "" }]) }, function(t, e, n) { e = t.exports = n(0)(!0), e.push([t.i, ".idle-view{position:fixed;top:0;width:100vw;height:100vh;z-index:8888;pointer-events:none;display:none}.idle-view.isIdle{pointer-events:all;display:block}.idle-view .sprite{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);height:10px;width:180px;z-index:9999;-webkit-transform:scale(.7)}.idle-view .overlay{width:100%;height:100%;position:absolute;z-index:8888;background:#000;opacity:0;-webkit-transition:opacity .8s cubic-bezier(.77,0,.175,1)}.idle-view.isIdle .overlay{opacity:.6}@-webkit-keyframes SlowMo{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}", "", { version: 3, sources: ["/home/afonso/Dev/idle-vue/src/components/Idle.vue"], names: [], mappings: "AACA,WACE,eAAgB,AAChB,MAAO,AACP,YAAa,AACb,aAAc,AACd,aAAc,AAEd,oBAAqB,AACrB,YAAc,CACf,AACD,kBACE,mBAAoB,AACpB,aAAe,CAChB,AACD,mBACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,4CAA6C,AAE7C,YAAa,AACb,YAAa,AACb,aAAc,AACd,2BAA8B,CAC/B,AACD,oBACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,aAAc,AAEd,gBAAiB,AACjB,UAAW,AAEX,yDAAkE,CACnE,AACD,2BACE,UAAa,CACd,AACD,0BACA,GAAG,yBAA0B,CAC5B,AACD,IAAI,4BAA4B,CAC/B,AACD,GAAK,yBAA0B,CAC9B,CACA", file: "Idle.vue", sourcesContent: ["\n.idle-view {\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 8888;\n\n  pointer-events: none;\n  display: none;\n}\n.idle-view.isIdle {\n  pointer-events: all;\n  display: block;\n}\n.idle-view .sprite {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n\n  height: 10px;\n  width: 180px;\n  z-index: 9999;\n  -webkit-transform: scale(0.7);\n}\n.idle-view .overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 8888;\n\n  background: #000;\n  opacity: 0;\n  /*-webkit-animation: SlowMo 5s cubic-bezier(0.77, 0, 0.175, 1) infinite;*/\n  -webkit-transition: opacity 800ms cubic-bezier(0.77, 0, 0.175, 1);\n}\n.idle-view.isIdle .overlay {\n  opacity: 0.6;\n}\n@-webkit-keyframes SlowMo {\n0%{background-position:0% 50%\n}\n50%{background-position:100% 50%\n}\n100%{background-position:0% 50%\n}\n}\n"], sourceRoot: "" }]) }, function(t, e, n) { t.exports = n.p + "static/img/touch.ba3be66.png" }, function(t, e, n) {
    function i(t) { n(14) }
    var s = n(1)(n(7), n(12), i, null, null);
    t.exports = s.exports
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", { staticClass: "sprite" }, [n("canvas", { attrs: { id: t.spriteId, width: t.spriteW, height: t.spriteH } })])
        },
        staticRenderFns: []
    }
}, function(t, e, n) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", { staticClass: "idle-view", class: { isIdle: t.isIdle } }, [i("div", { staticClass: "overlay" }), t._v(" "), i("sprite", { ref: "sprite", attrs: { spriteId: "touch", spriteSrc: n(10), spriteW: 180, spriteH: 215 } })], 1)
        },
        staticRenderFns: []
    }
}, function(t, e, n) {
    var i = n(8);
    "string" == typeof i && (i = [
        [t.i, i, ""]
    ]), i.locals && (t.exports = i.locals);
    n(2)("b6696284", i, !0)
}, function(t, e, n) {
    var i = n(9);
    "string" == typeof i && (i = [
        [t.i, i, ""]
    ]), i.locals && (t.exports = i.locals);
    n(2)("25b5ba8a", i, !0)
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = [], i = {}, s = 0; s < e.length; s++) {
            var r = e[s],
                o = r[0],
                a = r[1],
                u = r[2],
                c = r[3],
                d = { id: t + ":" + s, css: a, media: u, sourceMap: c };
            i[o] ? i[o].parts.push(d) : n.push(i[o] = { id: o, parts: [d] })
        }
        return n
    }
}]);
//# sourceMappingURL=build.js.map/**
*
Skipped minification because the original files appears to be already minified.*Do NOT use SRI with dynamically generated files!More information: https: //www.jsdelivr.com/using-sri-with-dynamic-files
    *
    /
module.exports = function(t) {
    function e(i) { if (n[i]) return n[i].exports; var s = n[i] = { i: i, l: !1, exports: {} }; return t[i].call(s.exports, s, s.exports, e), s.l = !0, s.exports }
    var n = {};
    return e.m = t, e.c = n, e.i = function(t) { return t }, e.d = function(t, n, i) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: i }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "/", e(e.s = 5)
}([function(t, e) {
    function n(t, e) {
        var n = t[1] || "",
            s = t[3];
        if (!s) return n;
        if (e && "function" == typeof btoa) { var r = i(s); return [n].concat(s.sources.map(function(t) { return "/*# sourceURL=" + s.sourceRoot + t + " */" })).concat([r]).join("\n") }
        return [n].join("\n")
    }

    function i(t) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */" }
    t.exports = function(t) {
        var e = [];
        return e.toString = function() { return this.map(function(e) { var i = n(e, t); return e[2] ? "@media " + e[2] + "{" + i + "}" : i }).join("") }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var i = {}, s = 0; s < this.length; s++) { var r = this[s][0]; "number" == typeof r && (i[r] = !0) }
            for (s = 0; s < t.length; s++) { var o = t[s]; "number" == typeof o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o)) }
        }, e
    }
}, function(t, e) {
    t.exports = function(t, e, n, i, s) {
        var r, o = t = t || {},
            a = typeof t.default;
        "object" !== a && "function" !== a || (r = t, o = t.default);
        var u = "function" == typeof o ? o.options : o;
        e && (u.render = e.render, u.staticRenderFns = e.staticRenderFns), i && (u._scopeId = i);
        var c;
        if (s ? (c = function(t) { t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), n && n.call(this, t), t && t._registeredComponents && t._registeredComponents.add(s) }, u._ssrRegister = c) : n && (c = n), c) {
            var d = u.functional,
                l = d ? u.render : u.beforeCreate;
            d ? u.render = function(t, e) { return c.call(e), l(t, e) } : u.beforeCreate = l ? [].concat(l, c) : [c]
        }
        return { esModule: r, exports: o, options: u }
    }
}, function(t, e, n) {
    function i(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e],
                i = d[n.id];
            if (i) {
                i.refs++;
                for (var s = 0; s < i.parts.length; s++) i.parts[s](n.parts[s]);
                for (; s < n.parts.length; s++) i.parts.push(r(n.parts[s]));
                i.parts.length > n.parts.length && (i.parts.length = n.parts.length)
            } else {
                for (var o = [], s = 0; s < n.parts.length; s++) o.push(r(n.parts[s]));
                d[n.id] = { id: n.id, refs: 1, parts: o }
            }
        }
    }

    function s() { var t = document.createElement("style"); return t.type = "text/css", l.appendChild(t), t }

    function r(t) {
        var e, n, i = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
        if (i) {
            if (h) return v;
            i.parentNode.removeChild(i)
        }
        if (A) {
            var r = f++;
            i = p || (p = s()), e = o.bind(null, i, r, !1), n = o.bind(null, i, r, !0)
        } else i = s(), e = a.bind(null, i), n = function() { i.parentNode.removeChild(i) };
        return e(t),
            function(i) {
                if (i) {
                    if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap) return;
                    e(t = i)
                } else n()
            }
    }

    function o(t, e, n, i) {
        var s = n ? "" : i.css;
        if (t.styleSheet) t.styleSheet.cssText = m(e, s);
        else {
            var r = document.createTextNode(s),
                o = t.childNodes;
            o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(r, o[e]) : t.appendChild(r)
        }
    }

    function a(t, e) {
        var n = e.css,
            i = e.media,
            s = e.sourceMap;
        if (i && t.setAttribute("media", i), s && (n += "\n/*# sourceURL=" + s.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
        }
    }
    var u = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !u) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var c = n(16),
        d = {},
        l = u && (document.head || document.getElementsByTagName("head")[0]),
        p = null,
        f = 0,
        h = !1,
        v = function() {},
        A = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    t.exports = function(t, e, n) {
        h = n;
        var s = c(t, e);
        return i(s),
            function(e) {
                for (var n = [], r = 0; r < s.length; r++) {
                    var o = s[r],
                        a = d[o.id];
                    a.refs--, n.push(a)
                }
                e ? (s = c(t, e), i(s)) : s = [];
                for (var r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (0 === a.refs) {
                        for (var u = 0; u < a.parts.length; u++) a.parts[u]();
                        delete d[a.id]
                    }
                }
            }
    };
    var m = function() { var t = []; return function(e, n) { return t[e] = n, t.filter(Boolean).join("\n") } }()
}, function(t, e, n) {
    ! function(e, n) { t.exports = n() }(0, function() {
        return function(t) {
            function e(i) { if (n[i]) return n[i].exports; var s = n[i] = { exports: {}, id: i, loaded: !1 }; return t[i].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports }
            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function(t, e) {
            "use strict";

            function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
            var i = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t },
                s = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
                }(),
                r = function(t, e, n) { e.forEach(function(e) { t.addEventListener(e, function(t) { n(t) }) }) },
                o = function(t, e) { e.forEach(function(e) { t.removeEventListener(e) }) },
                a = function() {
                    function t(e) { n(this, t), this.defaults = { idle: 1e4, events: ["mousemove", "keydown", "mousedown", "touchstart"], onIdle: function() {}, onActive: function() {}, onHide: function() {}, onShow: function() {}, keepTracking: !0, startAtIdle: !1, recurIdleCall: !1 }, this.settings = i({}, this.defaults, e), this.idle = this.settings.startAtIdle, this.visible = !this.settings.startAtIdle, this.visibilityEvents = ["visibilitychange", "webkitvisibilitychange", "mozvisibilitychange", "msvisibilitychange"], this.lastId = null }
                    return s(t, [{ key: "resetTimeout", value: function(t, e) { if (this.idle && (e.onActive.call(), this.idle = !1), clearTimeout(t), this.settings.keepTracking) return this.timeout(this.settings) } }, { key: "timeout", value: function(t) { var e = this.settings.recurIdleCall ? setInterval : setTimeout; return e(function() { this.idle = !0, this.settings.onIdle.call() }.bind(this), this.settings.idle) } }, { key: "start", value: function() { window.addEventListener("idle:stop", function(t) { o(window, this.settings.events), this.settings.keepTracking = !1, this.resetTimeout(this.lastId, this.settings) }), this.lastId = this.timeout(this.settings), r(window, this.settings.events, function(t) { this.lastId = this.resetTimeout(this.lastId, this.settings) }.bind(this)), (this.settings.onShow || this.settings.onHide) && r(document, this.visibilityEvents, function(t) { document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? this.visible && (this.visible = !1, this.settings.onHide.call()) : this.visible || (this.visible = !0, this.settings.onShow.call()) }.bind(this)) } }]), t
                }();
            t.exports = a
        }])
    })
}, function(t, e, n) {
    function i(t) { n(15) }
    var s = n(1)(n(6), n(13), i, null, null);
    t.exports = s.exports
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { default: t } }

    function s(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(3),
        o = i(r),
        a = n(4),
        u = i(a);
    e.default = {
        IdleView: u.default,
        install: function(t, e) {
            var n = e || {},
                i = n.eventEmitter,
                r = n.store,
                a = n.moduleName,
                c = void 0 === a ? "idleVue" : a,
                d = n.idleTime,
                l = void 0 === d ? 6e4 : d,
                p = n.events,
                f = void 0 === p ? ["mousemove", "keydown", "mousedown", "touchstart"] : p,
                h = n.keepTracking,
                v = void 0 === h || h,
                A = n.startAtIdle,
                m = void 0 === A || A;
            if (!i && !r) throw Error("Either `eventEmitter` or `store` must be passed in options");
            r && r.registerModule(c, { state: { isIdle: m }, mutations: s({}, c + "/IDLE_CHANGED", function(t, e) { t.isIdle = e }) });
            var b = c + "_onIdle",
                g = c + "_onActive";
            new o.default({ idle: l, events: f, keepTracking: v, startAtIdle: m, onIdle: function() { i && i.$emit(b), r && r.commit(c + "/IDLE_CHANGED", !0) }, onActive: function() { i && i.$emit(g), r && r.commit(c + "/IDLE_CHANGED", !1) } }).start(), t.component("IdleView", u.default), t.mixin({ data: function() { var t; return t = {}, s(t, b, null), s(t, g, null), t }, created: function() { i && this.$options.onIdle && (this[b] = this.$options.onIdle.bind(this), i.$on(b, this[b])), i && this.$options.onActive && (this[g] = this.$options.onActive.bind(this), i.$on(g, this[g])) }, destroyed: function() { i && this[b] && i.$off(b, this[b]), i && this[g] && i.$off(g, this[g]) }, computed: { isAppIdle: function() { return r && r.state[c].isIdle } } })
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(11),
        s = function(t) { return t && t.__esModule ? t : { default: t } }(i);
    e.default = { components: { Sprite: s.default }, onIdle: function() { this.$refs.sprite.play() }, onActive: function() { this.$refs.sprite.stop() } }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
        name: "sprite",
        props: { spriteSrc: { type: String, default: "" }, spriteId: { type: String, default: "sprite" }, spriteW: { type: Number, default: 1 }, spriteH: { type: Number, default: 1 }, spriteSpeed: { type: Number, default: 1 } },
        data: function() { return { visible: !0, frameIndex: 0, tickCount: 0, frameLength: 0, ticksPerFrame: 0, numberOfFrames: 0, frameRate: 20, ctx: "", canvas: "", mySprite: "", animationFrameId: -1 } },
        mounted: function() {
            var t = this;
            this.$nextTick(function() { t.mySprite = new Image, t.mySprite.onload = function(e) { t.spriteInit(e.target) }, t.mySprite.src = t.spriteSrc })
        },
        methods: {
            spriteInit: function(t) { this.canvas = this.$el.querySelector("#" + this.spriteId), this.ctx = this.canvas.getContext("2d"), this.ticksPerFrame = this.spriteSpeed, this.frameLength = t.width, this.numberOfFrames = t.width / this.spriteW, this.spriteLoop() },
            spriteUpdate: function() {++this.tickCount > this.ticksPerFrame && (this.tickCount = 0, this.frameIndex < this.numberOfFrames - 1 ? this.frameIndex++ : this.frameIndex = 0) },
            spriteRender: function() {
                this.ctx.clearRect(0, 0, this.spriteW, this.spriteH);
                var t = this.frameIndex * this.spriteW;
                this.ctx.drawImage(this.mySprite, t, 0, this.spriteW, this.spriteH, 0, 0, this.spriteW, this.spriteH)
            },
            spriteLoop: function() { this.animationFrameId = window.requestAnimationFrame(this.spriteLoop), this.spriteUpdate(), this.spriteRender() },
            stop: function() { window.cancelAnimationFrame(this.animationFrameId) },
            play: function() { this.spriteLoop() }
        }
    }
}, function(t, e, n) { e = t.exports = n(0)(!0), e.push([t.i, "", "", { version: 3, sources: [], names: [], mappings: "", file: "Sprite.vue", sourceRoot: "" }]) }, function(t, e, n) { e = t.exports = n(0)(!0), e.push([t.i, ".idle-view{position:fixed;top:0;width:100vw;height:100vh;z-index:8888;pointer-events:none;display:none}.idle-view.isIdle{pointer-events:all;display:block}.idle-view .sprite{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);height:10px;width:180px;z-index:9999;-webkit-transform:scale(.7)}.idle-view .overlay{width:100%;height:100%;position:absolute;z-index:8888;background:#000;opacity:0;-webkit-transition:opacity .8s cubic-bezier(.77,0,.175,1)}.idle-view.isIdle .overlay{opacity:.6}@-webkit-keyframes SlowMo{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}", "", { version: 3, sources: ["/home/afonso/Dev/idle-vue/src/components/Idle.vue"], names: [], mappings: "AACA,WACE,eAAgB,AAChB,MAAO,AACP,YAAa,AACb,aAAc,AACd,aAAc,AAEd,oBAAqB,AACrB,YAAc,CACf,AACD,kBACE,mBAAoB,AACpB,aAAe,CAChB,AACD,mBACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,4CAA6C,AAE7C,YAAa,AACb,YAAa,AACb,aAAc,AACd,2BAA8B,CAC/B,AACD,oBACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,aAAc,AAEd,gBAAiB,AACjB,UAAW,AAEX,yDAAkE,CACnE,AACD,2BACE,UAAa,CACd,AACD,0BACA,GAAG,yBAA0B,CAC5B,AACD,IAAI,4BAA4B,CAC/B,AACD,GAAK,yBAA0B,CAC9B,CACA", file: "Idle.vue", sourcesContent: ["\n.idle-view {\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 8888;\n\n  pointer-events: none;\n  display: none;\n}\n.idle-view.isIdle {\n  pointer-events: all;\n  display: block;\n}\n.idle-view .sprite {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n\n  height: 10px;\n  width: 180px;\n  z-index: 9999;\n  -webkit-transform: scale(0.7);\n}\n.idle-view .overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 8888;\n\n  background: #000;\n  opacity: 0;\n  /*-webkit-animation: SlowMo 5s cubic-bezier(0.77, 0, 0.175, 1) infinite;*/\n  -webkit-transition: opacity 800ms cubic-bezier(0.77, 0, 0.175, 1);\n}\n.idle-view.isIdle .overlay {\n  opacity: 0.6;\n}\n@-webkit-keyframes SlowMo {\n0%{background-position:0% 50%\n}\n50%{background-position:100% 50%\n}\n100%{background-position:0% 50%\n}\n}\n"], sourceRoot: "" }]) }, function(t, e, n) { t.exports = n.p + "static/img/touch.ba3be66.png" }, function(t, e, n) {
    function i(t) { n(14) }
    var s = n(1)(n(7), n(12), i, null, null);
    t.exports = s.exports
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", { staticClass: "sprite" }, [n("canvas", { attrs: { id: t.spriteId, width: t.spriteW, height: t.spriteH } })])
        },
        staticRenderFns: []
    }
}, function(t, e, n) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", { staticClass: "idle-view", class: { isIdle: t.isIdle } }, [i("div", { staticClass: "overlay" }), t._v(" "), i("sprite", { ref: "sprite", attrs: { spriteId: "touch", spriteSrc: n(10), spriteW: 180, spriteH: 215 } })], 1)
        },
        staticRenderFns: []
    }
}, function(t, e, n) {
    var i = n(8);
    "string" == typeof i && (i = [
        [t.i, i, ""]
    ]), i.locals && (t.exports = i.locals);
    n(2)("b6696284", i, !0)
}, function(t, e, n) {
    var i = n(9);
    "string" == typeof i && (i = [
        [t.i, i, ""]
    ]), i.locals && (t.exports = i.locals);
    n(2)("25b5ba8a", i, !0)
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = [], i = {}, s = 0; s < e.length; s++) {
            var r = e[s],
                o = r[0],
                a = r[1],
                u = r[2],
                c = r[3],
                d = { id: t + ":" + s, css: a, media: u, sourceMap: c };
            i[o] ? i[o].parts.push(d) : n.push(i[o] = { id: o, parts: [d] })
        }
        return n
    }
}]);
//# sourceMappingURL=build.js.map