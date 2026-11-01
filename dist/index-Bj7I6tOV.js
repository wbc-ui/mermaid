var g0 = Object.defineProperty;
var m0 = (e, t, r) => t in e ? g0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var At = (e, t, r) => m0(e, typeof t != "symbol" ? t + "" : t, r);
import { defineComponent as y0, h as Fa, resolveDynamicComponent as C0, render as Eh, nextTick as Aa } from "vue";
var xu = Object.defineProperty, p = (e, t) => xu(e, "name", { value: t, configurable: !0 }), x0 = (e, t) => {
  for (var r in t)
    xu(e, r, { get: t[r], enumerable: !0 });
};
function b0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ks = { exports: {} }, k0 = Ks.exports, $h;
function w0() {
  return $h || ($h = 1, (function(e, t) {
    (function(r, i) {
      e.exports = i();
    })(k0, (function() {
      var r = 1e3, i = 6e4, s = 36e5, o = "millisecond", a = "second", n = "minute", l = "hour", h = "day", c = "week", u = "month", f = "quarter", d = "year", g = "date", m = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
        var E = ["th", "st", "nd", "rd"], F = D % 100;
        return "[" + D + (E[(F - 20) % 10] || E[F] || E[0]) + "]";
      } }, k = function(D, E, F) {
        var O = String(D);
        return !O || O.length >= E ? D : "" + Array(E + 1 - O.length).join(F) + D;
      }, S = { s: k, z: function(D) {
        var E = -D.utcOffset(), F = Math.abs(E), O = Math.floor(F / 60), $ = F % 60;
        return (E <= 0 ? "+" : "-") + k(O, 2, "0") + ":" + k($, 2, "0");
      }, m: function D(E, F) {
        if (E.date() < F.date()) return -D(F, E);
        var O = 12 * (F.year() - E.year()) + (F.month() - E.month()), $ = E.clone().add(O, u), q = F - $ < 0, j = E.clone().add(O + (q ? -1 : 1), u);
        return +(-(O + (F - $) / (q ? $ - j : j - $)) || 0);
      }, a: function(D) {
        return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
      }, p: function(D) {
        return { M: u, y: d, w: c, d: h, D: g, h: l, m: n, s: a, ms: o, Q: f }[D] || String(D || "").toLowerCase().replace(/s$/, "");
      }, u: function(D) {
        return D === void 0;
      } }, T = "en", _ = {};
      _[T] = b;
      var v = "$isDayjsObject", L = function(D) {
        return D instanceof X || !(!D || !D[v]);
      }, z = function D(E, F, O) {
        var $;
        if (!E) return T;
        if (typeof E == "string") {
          var q = E.toLowerCase();
          _[q] && ($ = q), F && (_[q] = F, $ = q);
          var j = E.split("-");
          if (!$ && j.length > 1) return D(j[0]);
        } else {
          var Z = E.name;
          _[Z] = E, $ = Z;
        }
        return !O && $ && (T = $), $ || !O && T;
      }, N = function(D, E) {
        if (L(D)) return D.clone();
        var F = typeof E == "object" ? E : {};
        return F.date = D, F.args = arguments, new X(F);
      }, M = S;
      M.l = z, M.i = L, M.w = function(D, E) {
        return N(D, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
      };
      var X = (function() {
        function D(F) {
          this.$L = z(F.locale, null, !0), this.parse(F), this.$x = this.$x || F.x || {}, this[v] = !0;
        }
        var E = D.prototype;
        return E.parse = function(F) {
          this.$d = (function(O) {
            var $ = O.date, q = O.utc;
            if ($ === null) return /* @__PURE__ */ new Date(NaN);
            if (M.u($)) return /* @__PURE__ */ new Date();
            if ($ instanceof Date) return new Date($);
            if (typeof $ == "string" && !/Z$/i.test($)) {
              var j = $.match(y);
              if (j) {
                var Z = j[2] - 1 || 0, tt = (j[7] || "0").substring(0, 3);
                return q ? new Date(Date.UTC(j[1], Z, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, tt)) : new Date(j[1], Z, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, tt);
              }
            }
            return new Date($);
          })(F), this.init();
        }, E.init = function() {
          var F = this.$d;
          this.$y = F.getFullYear(), this.$M = F.getMonth(), this.$D = F.getDate(), this.$W = F.getDay(), this.$H = F.getHours(), this.$m = F.getMinutes(), this.$s = F.getSeconds(), this.$ms = F.getMilliseconds();
        }, E.$utils = function() {
          return M;
        }, E.isValid = function() {
          return this.$d.toString() !== m;
        }, E.isSame = function(F, O) {
          var $ = N(F);
          return this.startOf(O) <= $ && $ <= this.endOf(O);
        }, E.isAfter = function(F, O) {
          return N(F) < this.startOf(O);
        }, E.isBefore = function(F, O) {
          return this.endOf(O) < N(F);
        }, E.$g = function(F, O, $) {
          return M.u(F) ? this[O] : this.set($, F);
        }, E.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, E.valueOf = function() {
          return this.$d.getTime();
        }, E.startOf = function(F, O) {
          var $ = this, q = !!M.u(O) || O, j = M.p(F), Z = function(Lt, V) {
            var st = M.w($.$u ? Date.UTC($.$y, V, Lt) : new Date($.$y, V, Lt), $);
            return q ? st : st.endOf(h);
          }, tt = function(Lt, V) {
            return M.w($.toDate()[Lt].apply($.toDate("s"), (q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(V)), $);
          }, lt = this.$W, at = this.$M, ct = this.$D, rt = "set" + (this.$u ? "UTC" : "");
          switch (j) {
            case d:
              return q ? Z(1, 0) : Z(31, 11);
            case u:
              return q ? Z(1, at) : Z(0, at + 1);
            case c:
              var xt = this.$locale().weekStart || 0, vt = (lt < xt ? lt + 7 : lt) - xt;
              return Z(q ? ct - vt : ct + (6 - vt), at);
            case h:
            case g:
              return tt(rt + "Hours", 0);
            case l:
              return tt(rt + "Minutes", 1);
            case n:
              return tt(rt + "Seconds", 2);
            case a:
              return tt(rt + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, E.endOf = function(F) {
          return this.startOf(F, !1);
        }, E.$set = function(F, O) {
          var $, q = M.p(F), j = "set" + (this.$u ? "UTC" : ""), Z = ($ = {}, $[h] = j + "Date", $[g] = j + "Date", $[u] = j + "Month", $[d] = j + "FullYear", $[l] = j + "Hours", $[n] = j + "Minutes", $[a] = j + "Seconds", $[o] = j + "Milliseconds", $)[q], tt = q === h ? this.$D + (O - this.$W) : O;
          if (q === u || q === d) {
            var lt = this.clone().set(g, 1);
            lt.$d[Z](tt), lt.init(), this.$d = lt.set(g, Math.min(this.$D, lt.daysInMonth())).$d;
          } else Z && this.$d[Z](tt);
          return this.init(), this;
        }, E.set = function(F, O) {
          return this.clone().$set(F, O);
        }, E.get = function(F) {
          return this[M.p(F)]();
        }, E.add = function(F, O) {
          var $, q = this;
          F = Number(F);
          var j = M.p(O), Z = function(at) {
            var ct = N(q);
            return M.w(ct.date(ct.date() + Math.round(at * F)), q);
          };
          if (j === u) return this.set(u, this.$M + F);
          if (j === d) return this.set(d, this.$y + F);
          if (j === h) return Z(1);
          if (j === c) return Z(7);
          var tt = ($ = {}, $[n] = i, $[l] = s, $[a] = r, $)[j] || 1, lt = this.$d.getTime() + F * tt;
          return M.w(lt, this);
        }, E.subtract = function(F, O) {
          return this.add(-1 * F, O);
        }, E.format = function(F) {
          var O = this, $ = this.$locale();
          if (!this.isValid()) return $.invalidDate || m;
          var q = F || "YYYY-MM-DDTHH:mm:ssZ", j = M.z(this), Z = this.$H, tt = this.$m, lt = this.$M, at = $.weekdays, ct = $.months, rt = $.meridiem, xt = function(V, st, yt, kt) {
            return V && (V[st] || V(O, q)) || yt[st].slice(0, kt);
          }, vt = function(V) {
            return M.s(Z % 12 || 12, V, "0");
          }, Lt = rt || function(V, st, yt) {
            var kt = V < 12 ? "AM" : "PM";
            return yt ? kt.toLowerCase() : kt;
          };
          return q.replace(C, (function(V, st) {
            return st || (function(yt) {
              switch (yt) {
                case "YY":
                  return String(O.$y).slice(-2);
                case "YYYY":
                  return M.s(O.$y, 4, "0");
                case "M":
                  return lt + 1;
                case "MM":
                  return M.s(lt + 1, 2, "0");
                case "MMM":
                  return xt($.monthsShort, lt, ct, 3);
                case "MMMM":
                  return xt(ct, lt);
                case "D":
                  return O.$D;
                case "DD":
                  return M.s(O.$D, 2, "0");
                case "d":
                  return String(O.$W);
                case "dd":
                  return xt($.weekdaysMin, O.$W, at, 2);
                case "ddd":
                  return xt($.weekdaysShort, O.$W, at, 3);
                case "dddd":
                  return at[O.$W];
                case "H":
                  return String(Z);
                case "HH":
                  return M.s(Z, 2, "0");
                case "h":
                  return vt(1);
                case "hh":
                  return vt(2);
                case "a":
                  return Lt(Z, tt, !0);
                case "A":
                  return Lt(Z, tt, !1);
                case "m":
                  return String(tt);
                case "mm":
                  return M.s(tt, 2, "0");
                case "s":
                  return String(O.$s);
                case "ss":
                  return M.s(O.$s, 2, "0");
                case "SSS":
                  return M.s(O.$ms, 3, "0");
                case "Z":
                  return j;
              }
              return null;
            })(V) || j.replace(":", "");
          }));
        }, E.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, E.diff = function(F, O, $) {
          var q, j = this, Z = M.p(O), tt = N(F), lt = (tt.utcOffset() - this.utcOffset()) * i, at = this - tt, ct = function() {
            return M.m(j, tt);
          };
          switch (Z) {
            case d:
              q = ct() / 12;
              break;
            case u:
              q = ct();
              break;
            case f:
              q = ct() / 3;
              break;
            case c:
              q = (at - lt) / 6048e5;
              break;
            case h:
              q = (at - lt) / 864e5;
              break;
            case l:
              q = at / s;
              break;
            case n:
              q = at / i;
              break;
            case a:
              q = at / r;
              break;
            default:
              q = at;
          }
          return $ ? q : M.a(q);
        }, E.daysInMonth = function() {
          return this.endOf(u).$D;
        }, E.$locale = function() {
          return _[this.$L];
        }, E.locale = function(F, O) {
          if (!F) return this.$L;
          var $ = this.clone(), q = z(F, O, !0);
          return q && ($.$L = q), $;
        }, E.clone = function() {
          return M.w(this.$d, this);
        }, E.toDate = function() {
          return new Date(this.valueOf());
        }, E.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, E.toISOString = function() {
          return this.$d.toISOString();
        }, E.toString = function() {
          return this.$d.toUTCString();
        }, D;
      })(), W = X.prototype;
      return N.prototype = W, [["$ms", o], ["$s", a], ["$m", n], ["$H", l], ["$W", h], ["$M", u], ["$y", d], ["$D", g]].forEach((function(D) {
        W[D[1]] = function(E) {
          return this.$g(E, D[0], D[1]);
        };
      })), N.extend = function(D, E) {
        return D.$i || (D(E, X, N), D.$i = !0), N;
      }, N.locale = z, N.isDayjs = L, N.unix = function(D) {
        return N(1e3 * D);
      }, N.en = _[T], N.Ls = _, N.p = {}, N;
    }));
  })(Ks)), Ks.exports;
}
var S0 = w0();
const T0 = /* @__PURE__ */ b0(S0);
var Ue = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, U = {
  trace: /* @__PURE__ */ p((...e) => {
  }, "trace"),
  debug: /* @__PURE__ */ p((...e) => {
  }, "debug"),
  info: /* @__PURE__ */ p((...e) => {
  }, "info"),
  warn: /* @__PURE__ */ p((...e) => {
  }, "warn"),
  error: /* @__PURE__ */ p((...e) => {
  }, "error"),
  fatal: /* @__PURE__ */ p((...e) => {
  }, "fatal")
}, il = /* @__PURE__ */ p(function(e = "fatal") {
  let t = Ue.fatal;
  typeof e == "string" ? e.toLowerCase() in Ue && (t = Ue[e]) : typeof e == "number" && (t = e), U.trace = () => {
  }, U.debug = () => {
  }, U.info = () => {
  }, U.warn = () => {
  }, U.error = () => {
  }, U.fatal = () => {
  }, t <= Ue.fatal && (U.fatal = console.error ? console.error.bind(console, me("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", me("FATAL"))), t <= Ue.error && (U.error = console.error ? console.error.bind(console, me("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", me("ERROR"))), t <= Ue.warn && (U.warn = console.warn ? console.warn.bind(console, me("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", me("WARN"))), t <= Ue.info && (U.info = console.info ? console.info.bind(console, me("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", me("INFO"))), t <= Ue.debug && (U.debug = console.debug ? console.debug.bind(console, me("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", me("DEBUG"))), t <= Ue.trace && (U.trace = console.debug ? console.debug.bind(console, me("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", me("TRACE")));
}, "setLogLevel"), me = /* @__PURE__ */ p((e) => `%c${T0().format("ss.SSS")} : ${e} : `, "format");
const Qs = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    g: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    b: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    h: (e) => e % 360,
    s: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    l: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    a: (e) => e >= 1 ? 1 : e < 0 ? 0 : e
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (e) => {
    const t = e / 255;
    return e > 0.03928 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (e, t, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e),
  hsl2rgb: ({ h: e, s: t, l: r }, i) => {
    if (!t)
      return r * 2.55;
    e /= 360, t /= 100, r /= 100;
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, o = 2 * r - s;
    switch (i) {
      case "r":
        return Qs.hue2rgb(o, s, e + 1 / 3) * 255;
      case "g":
        return Qs.hue2rgb(o, s, e) * 255;
      case "b":
        return Qs.hue2rgb(o, s, e - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: e, g: t, b: r }, i) => {
    e /= 255, t /= 255, r /= 255;
    const s = Math.max(e, t, r), o = Math.min(e, t, r), a = (s + o) / 2;
    if (i === "l")
      return a * 100;
    if (s === o)
      return 0;
    const n = s - o, l = a > 0.5 ? n / (2 - s - o) : n / (s + o);
    if (i === "s")
      return l * 100;
    switch (s) {
      case e:
        return ((t - r) / n + (t < r ? 6 : 0)) * 60;
      case t:
        return ((r - e) / n + 2) * 60;
      case r:
        return ((e - t) / n + 4) * 60;
      default:
        return -1;
    }
  }
}, _0 = {
  /* API */
  clamp: (e, t, r) => t > r ? Math.min(t, Math.max(r, e)) : Math.min(r, Math.max(t, e)),
  round: (e) => Math.round(e * 1e10) / 1e10
}, B0 = {
  /* API */
  dec2hex: (e) => {
    const t = Math.round(e).toString(16);
    return t.length > 1 ? t : `0${t}`;
  }
}, mt = {
  channel: Qs,
  lang: _0,
  unit: B0
}, ar = {};
for (let e = 0; e <= 255; e++)
  ar[e] = mt.unit.dec2hex(e);
const Kt = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class v0 {
  constructor() {
    this.type = Kt.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(t) {
    if (this.type && this.type !== t)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = t;
  }
  reset() {
    this.type = Kt.ALL;
  }
  is(t) {
    return this.type === t;
  }
}
class L0 {
  /* CONSTRUCTOR */
  constructor(t, r) {
    this.color = r, this.changed = !1, this.data = t, this.type = new v0();
  }
  /* API */
  set(t, r) {
    return this.color = r, this.changed = !1, this.data = t, this.type.type = Kt.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const t = this.data, { h: r, s: i, l: s } = t;
    r === void 0 && (t.h = mt.channel.rgb2hsl(t, "h")), i === void 0 && (t.s = mt.channel.rgb2hsl(t, "s")), s === void 0 && (t.l = mt.channel.rgb2hsl(t, "l"));
  }
  _ensureRGB() {
    const t = this.data, { r, g: i, b: s } = t;
    r === void 0 && (t.r = mt.channel.hsl2rgb(t, "r")), i === void 0 && (t.g = mt.channel.hsl2rgb(t, "g")), s === void 0 && (t.b = mt.channel.hsl2rgb(t, "b"));
  }
  /* GETTERS */
  get r() {
    const t = this.data, r = t.r;
    return !this.type.is(Kt.HSL) && r !== void 0 ? r : (this._ensureHSL(), mt.channel.hsl2rgb(t, "r"));
  }
  get g() {
    const t = this.data, r = t.g;
    return !this.type.is(Kt.HSL) && r !== void 0 ? r : (this._ensureHSL(), mt.channel.hsl2rgb(t, "g"));
  }
  get b() {
    const t = this.data, r = t.b;
    return !this.type.is(Kt.HSL) && r !== void 0 ? r : (this._ensureHSL(), mt.channel.hsl2rgb(t, "b"));
  }
  get h() {
    const t = this.data, r = t.h;
    return !this.type.is(Kt.RGB) && r !== void 0 ? r : (this._ensureRGB(), mt.channel.rgb2hsl(t, "h"));
  }
  get s() {
    const t = this.data, r = t.s;
    return !this.type.is(Kt.RGB) && r !== void 0 ? r : (this._ensureRGB(), mt.channel.rgb2hsl(t, "s"));
  }
  get l() {
    const t = this.data, r = t.l;
    return !this.type.is(Kt.RGB) && r !== void 0 ? r : (this._ensureRGB(), mt.channel.rgb2hsl(t, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(t) {
    this.type.set(Kt.RGB), this.changed = !0, this.data.r = t;
  }
  set g(t) {
    this.type.set(Kt.RGB), this.changed = !0, this.data.g = t;
  }
  set b(t) {
    this.type.set(Kt.RGB), this.changed = !0, this.data.b = t;
  }
  set h(t) {
    this.type.set(Kt.HSL), this.changed = !0, this.data.h = t;
  }
  set s(t) {
    this.type.set(Kt.HSL), this.changed = !0, this.data.s = t;
  }
  set l(t) {
    this.type.set(Kt.HSL), this.changed = !0, this.data.l = t;
  }
  set a(t) {
    this.changed = !0, this.data.a = t;
  }
}
const Ho = new L0({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), ii = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (e) => {
    if (e.charCodeAt(0) !== 35)
      return;
    const t = e.match(ii.re);
    if (!t)
      return;
    const r = t[1], i = parseInt(r, 16), s = r.length, o = s % 4 === 0, a = s > 4, n = a ? 1 : 17, l = a ? 8 : 4, h = o ? 0 : -1, c = a ? 255 : 15;
    return Ho.set({
      r: (i >> l * (h + 3) & c) * n,
      g: (i >> l * (h + 2) & c) * n,
      b: (i >> l * (h + 1) & c) * n,
      a: o ? (i & c) * n / 255 : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: s } = e;
    return s < 1 ? `#${ar[Math.round(t)]}${ar[Math.round(r)]}${ar[Math.round(i)]}${ar[Math.round(s * 255)]}` : `#${ar[Math.round(t)]}${ar[Math.round(r)]}${ar[Math.round(i)]}`;
  }
}, Br = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (e) => {
    const t = e.match(Br.hueRe);
    if (t) {
      const [, r, i] = t;
      switch (i) {
        case "grad":
          return mt.channel.clamp.h(parseFloat(r) * 0.9);
        case "rad":
          return mt.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
        case "turn":
          return mt.channel.clamp.h(parseFloat(r) * 360);
      }
    }
    return mt.channel.clamp.h(parseFloat(e));
  },
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 104 && t !== 72)
      return;
    const r = e.match(Br.re);
    if (!r)
      return;
    const [, i, s, o, a, n] = r;
    return Ho.set({
      h: Br._hue2deg(i),
      s: mt.channel.clamp.s(parseFloat(s)),
      l: mt.channel.clamp.l(parseFloat(o)),
      a: a ? mt.channel.clamp.a(n ? parseFloat(a) / 100 : parseFloat(a)) : 1
    }, e);
  },
  stringify: (e) => {
    const { h: t, s: r, l: i, a: s } = e;
    return s < 1 ? `hsla(${mt.lang.round(t)}, ${mt.lang.round(r)}%, ${mt.lang.round(i)}%, ${s})` : `hsl(${mt.lang.round(t)}, ${mt.lang.round(r)}%, ${mt.lang.round(i)}%)`;
  }
}, es = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (e) => {
    e = e.toLowerCase();
    const t = es.colors[e];
    if (t)
      return ii.parse(t);
  },
  stringify: (e) => {
    const t = ii.stringify(e);
    for (const r in es.colors)
      if (es.colors[r] === t)
        return r;
  }
}, Gi = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 114 && t !== 82)
      return;
    const r = e.match(Gi.re);
    if (!r)
      return;
    const [, i, s, o, a, n, l, h, c] = r;
    return Ho.set({
      r: mt.channel.clamp.r(s ? parseFloat(i) * 2.55 : parseFloat(i)),
      g: mt.channel.clamp.g(a ? parseFloat(o) * 2.55 : parseFloat(o)),
      b: mt.channel.clamp.b(l ? parseFloat(n) * 2.55 : parseFloat(n)),
      a: h ? mt.channel.clamp.a(c ? parseFloat(h) / 100 : parseFloat(h)) : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: s } = e;
    return s < 1 ? `rgba(${mt.lang.round(t)}, ${mt.lang.round(r)}, ${mt.lang.round(i)}, ${mt.lang.round(s)})` : `rgb(${mt.lang.round(t)}, ${mt.lang.round(r)}, ${mt.lang.round(i)})`;
  }
}, Re = {
  /* VARIABLES */
  format: {
    keyword: es,
    hex: ii,
    rgb: Gi,
    rgba: Gi,
    hsl: Br,
    hsla: Br
  },
  /* API */
  parse: (e) => {
    if (typeof e != "string")
      return e;
    const t = ii.parse(e) || Gi.parse(e) || Br.parse(e) || es.parse(e);
    if (t)
      return t;
    throw new Error(`Unsupported color format: "${e}"`);
  },
  stringify: (e) => !e.changed && e.color ? e.color : e.type.is(Kt.HSL) || e.data.r === void 0 ? Br.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? Gi.stringify(e) : ii.stringify(e)
}, bu = (e, t) => {
  const r = Re.parse(e);
  for (const i in t)
    r[i] = mt.channel.clamp[i](t[i]);
  return Re.stringify(r);
}, cr = (e, t, r = 0, i = 1) => {
  if (typeof e != "number")
    return bu(e, { a: t });
  const s = Ho.set({
    r: mt.channel.clamp.r(e),
    g: mt.channel.clamp.g(t),
    b: mt.channel.clamp.b(r),
    a: mt.channel.clamp.a(i)
  });
  return Re.stringify(s);
}, F0 = (e) => {
  const { r: t, g: r, b: i } = Re.parse(e), s = 0.2126 * mt.channel.toLinear(t) + 0.7152 * mt.channel.toLinear(r) + 0.0722 * mt.channel.toLinear(i);
  return mt.lang.round(s);
}, A0 = (e) => F0(e) >= 0.5, Le = (e) => !A0(e), ku = (e, t, r) => {
  const i = Re.parse(e), s = i[t], o = mt.channel.clamp[t](s + r);
  return s !== o && (i[t] = o), Re.stringify(i);
}, R = (e, t) => ku(e, "l", t), P = (e, t) => ku(e, "l", -t), x = (e, t) => {
  const r = Re.parse(e), i = {};
  for (const s in t)
    t[s] && (i[s] = r[s] + t[s]);
  return bu(e, i);
}, M0 = (e, t, r = 50) => {
  const { r: i, g: s, b: o, a } = Re.parse(e), { r: n, g: l, b: h, a: c } = Re.parse(t), u = r / 100, f = u * 2 - 1, d = a - c, m = ((f * d === -1 ? f : (f + d) / (1 + f * d)) + 1) / 2, y = 1 - m, C = i * m + n * y, b = s * m + l * y, k = o * m + h * y, S = a * u + c * (1 - u);
  return cr(C, b, k, S);
}, A = (e, t = 100) => {
  const r = Re.parse(e);
  return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, M0(r, e, t);
};
/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */
function Oh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function E0(e) {
  if (Array.isArray(e)) return e;
}
function $0(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var i, s, o, a, n = [], l = !0, h = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(l = (i = o.call(r)).done) && (n.push(i.value), n.length !== t); l = !0) ;
    } catch (c) {
      h = !0, s = c;
    } finally {
      try {
        if (!l && r.return != null && (a = r.return(), Object(a) !== a)) return;
      } finally {
        if (h) throw s;
      }
    }
    return n;
  }
}
function O0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function D0(e, t) {
  return E0(e) || $0(e, t) || I0(e, t) || O0();
}
function I0(e, t) {
  if (e) {
    if (typeof e == "string") return Oh(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Oh(e, t) : void 0;
  }
}
const wu = Object.entries, Dh = Object.setPrototypeOf, R0 = Object.isFrozen, Su = Object.getPrototypeOf, Tu = Object.getOwnPropertyDescriptor;
let Yt = Object.freeze, Zt = Object.seal, Kr = Object.create, _u = typeof Reflect < "u" && Reflect, rn = _u.apply, sn = _u.construct;
Yt || (Yt = function(t) {
  return t;
});
Zt || (Zt = function(t) {
  return t;
});
rn || (rn = function(t, r) {
  for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) s[o - 2] = arguments[o];
  return t.apply(r, s);
});
sn || (sn = function(t) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
  return new t(...i);
});
const je = $t(Array.prototype.forEach), P0 = $t(Array.prototype.lastIndexOf), Ih = $t(Array.prototype.pop), Ii = $t(Array.prototype.push), N0 = $t(Array.prototype.slice), q0 = $t(Array.prototype.splice), si = Array.isArray, Ma = Bu(Set), Ea = $t(Set.prototype.add), Ri = $t(Set.prototype.has), Sr = $t(String.prototype.toLowerCase), $a = $t(String.prototype.toString), Rh = $t(String.prototype.match), Pi = $t(String.prototype.replace), Ph = $t(String.prototype.indexOf), W0 = $t(String.prototype.trim), z0 = $t(Number.prototype.toString), H0 = $t(Boolean.prototype.toString), Nh = typeof BigInt > "u" ? null : $t(BigInt.prototype.toString), qh = typeof Symbol > "u" ? null : $t(Symbol.prototype.toString), le = $t(Object.prototype.hasOwnProperty), Ni = $t(Object.prototype.toString), Gt = $t(RegExp.prototype.test), Ge = Bu(TypeError);
function $t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
    return rn(e, t, i);
  };
}
function Bu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
    return sn(e, r);
  };
}
function St(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Sr;
  if (Dh && Dh(e, null), !si(t)) return e;
  let i = t.length;
  for (; i--; ) {
    let s = t[i];
    if (typeof s == "string") {
      const o = r(s);
      o !== s && (R0(t) || (t[i] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function Y0(e) {
  for (let t = 0; t < e.length; t++) le(e, t) || (e[t] = null);
  return e;
}
function fe(e) {
  const t = Kr(null);
  for (const i of wu(e)) {
    var r = D0(i, 2);
    const s = r[0], o = r[1];
    le(e, s) && (si(o) ? t[s] = Y0(o) : o && typeof o == "object" && o.constructor === Object ? t[s] = fe(o) : t[s] = o);
  }
  return t;
}
function U0(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return z0(e);
    case "boolean":
      return H0(e);
    case "bigint":
      return Nh ? Nh(e) : "0";
    case "symbol":
      return qh ? qh(e) : "Symbol()";
    case "undefined":
      return Ni(e);
    case "function":
    case "object": {
      if (e === null) return Ni(e);
      const t = e, r = ye(t, "toString");
      if (typeof r == "function") {
        const i = r(t);
        return typeof i == "string" ? i : Ni(i);
      }
      return Ni(e);
    }
    default:
      return Ni(e);
  }
}
function ye(e, t) {
  for (; e !== null; ) {
    const i = Tu(e, t);
    if (i) {
      if (i.get) return $t(i.get);
      if (typeof i.value == "function") return $t(i.value);
    }
    e = Su(e);
  }
  function r() {
    return null;
  }
  return r;
}
function j0(e, t) {
  for (; e !== null; ) {
    const r = Tu(e, t);
    if (r) return r.get ? $t(r.get) : null;
    e = Su(e);
  }
  return null;
}
function G0(e) {
  try {
    return Gt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Wh = Yt([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), Oa = Yt([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), Da = Yt([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), X0 = Yt([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), Ia = Yt([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), V0 = Yt([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), zh = Yt(["#text"]), Hh = Yt([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]), Ra = Yt([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), Yh = Yt([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), Ps = Yt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), Z0 = Zt(/{{[\w\W]*|^[\w\W]*}}/g), K0 = Zt(/<%[\w\W]*|^[\w\W]*%>/g), Q0 = Zt(/\${[\w\W]*/g), J0 = Zt(/^data-[\-\w.\u00B7-\uFFFF]+$/), tC = Zt(/^aria-[\-\w]+$/), Uh = Zt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), eC = Zt(/^(?:\w+script|data):/i), rC = Zt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), iC = Zt(/^html$/i), sC = Zt(/^[a-z][.\w]*(-[.\w]+)+$/i), Pa = Zt(/<[/\w!]/g), jh = Zt(/<[/\w]/g), oC = Zt(/<\/no(script|embed|frames)/i), Gh = Zt(/\/>/i), Pt = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, aC = Yt(St({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), nC = function() {
  return typeof window > "u" ? null : window;
}, lC = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let i = null;
  const s = "data-tt-policy-suffix";
  r && r.hasAttribute(s) && (i = r.getAttribute(s));
  const o = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(o, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, Xh = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, or = function(t, r, i, s) {
  return le(t, r) && si(t[r]) ? St(s.base ? fe(s.base) : {}, t[r], s.transform) : i;
}, Na = function(t, r, i) {
  const s = le(t, r) ? t[r] : void 0;
  return s && typeof s == "object" ? fe(s) : i();
};
function vu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : nC();
  const t = (G) => vu(G);
  if (t.version = "3.4.17", t.removed = [], !e || !e.document || e.document.nodeType !== Pt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const i = r, s = i.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, a = e.Node, n = e.Element, l = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const h = e.DOMParser, c = e.trustedTypes, u = n.prototype, f = ye(u, "cloneNode"), d = ye(u, "remove"), g = ye(u, "removeAttributeNode"), m = ye(u, "nextSibling"), y = ye(u, "childNodes"), C = ye(u, "parentNode"), b = ye(u, "shadowRoot"), k = ye(u, "attributes"), S = a && a.prototype ? ye(a.prototype, "nodeType") : null, T = a && a.prototype ? ye(a.prototype, "nodeName") : null, _ = a && a.prototype ? ye(a.prototype, "ownerDocument") : null, v = function(w) {
    return S ? S(w) : w.nodeType;
  }, L = function(w) {
    return T ? T(w) : w.nodeName;
  }, z = j0(u, "namespaceURI"), N = function(w) {
    return z ? z(w) : w.namespaceURI;
  };
  if (typeof o == "function") {
    const G = r.createElement("template");
    G.content && G.content.ownerDocument && (r = G.content.ownerDocument);
  }
  let M, X = "", W, D = !1, E = 0;
  const F = function() {
    if (E > 0) throw Ge('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, O = function(w) {
    F(), E++;
    try {
      return M.createHTML(w);
    } finally {
      E--;
    }
  }, $ = function(w) {
    F(), E++;
    try {
      return M.createScriptURL(w);
    } finally {
      E--;
    }
  }, q = function() {
    return D || (W = lC(c, s), D = !0), W;
  }, j = r, Z = j.implementation, tt = j.createNodeIterator, lt = j.createDocumentFragment, at = j.getElementsByTagName, ct = i.importNode;
  let rt = Xh();
  t.isSupported = typeof wu == "function" && typeof C == "function" && Z && Z.createHTMLDocument !== void 0;
  const xt = Z0, vt = K0, Lt = Q0, V = J0, st = tC, yt = eC, kt = rC, I = sC;
  let ut = Uh, Mt = null;
  const Ls = St({}, [
    ...Wh,
    ...Oa,
    ...Da,
    ...Ia,
    ...zh
  ]);
  let Ft = null;
  const la = St({}, [
    ...Hh,
    ...Ra,
    ...Yh,
    ...Ps
  ]);
  let Ae = Object.seal(Kr(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ei = null, oh = null;
  const rr = Object.seal(Kr(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let ah = !0, ha = !0, nh = !1, ca = !0, Ye = !1, yr = !0, Cr = !1, ua = !1, Fs = null, As = null, da = !1, Wr = !1, Ms = !1, Es = !1, lh = !0, hh = !1;
  const ch = "user-content-";
  let fa = !0, pa = !1, xr = null, zr = {}, br = null;
  const uh = St({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let dh = null;
  const fh = St({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let ph = null;
  const gh = St({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), $s = "http://www.w3.org/1998/Math/MathML", Os = "http://www.w3.org/2000/svg", Me = "http://www.w3.org/1999/xhtml";
  let Hr = Me, ga = !1, ma = null;
  const Vy = St({}, [
    $s,
    Os,
    Me
  ], $a), mh = Yt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let ya = St({}, mh);
  const yh = Yt(["annotation-xml"]);
  let Ca = St({}, yh);
  const Zy = St({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let $i = null;
  const Ky = ["application/xhtml+xml", "text/html"], Qy = "text/html";
  let It = null, Yr = null;
  const Jy = r.createElement("form"), Ch = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, xa = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Yr && Yr === w) return;
    (!w || typeof w != "object") && (w = {}), w = fe(w), $i = Ky.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Qy : w.PARSER_MEDIA_TYPE, It = $i === "application/xhtml+xml" ? $a : Sr, Mt = or(w, "ALLOWED_TAGS", Ls, { transform: It }), Ft = or(w, "ALLOWED_ATTR", la, { transform: It }), ma = or(w, "ALLOWED_NAMESPACES", Vy, { transform: $a }), ph = or(w, "ADD_URI_SAFE_ATTR", gh, {
      transform: It,
      base: gh
    }), dh = or(w, "ADD_DATA_URI_TAGS", fh, {
      transform: It,
      base: fh
    }), br = or(w, "FORBID_CONTENTS", uh, { transform: It }), Ei = or(w, "FORBID_TAGS", fe({}), { transform: It }), oh = or(w, "FORBID_ATTR", fe({}), { transform: It }), zr = le(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? fe(w.USE_PROFILES) : w.USE_PROFILES : !1, ah = w.ALLOW_ARIA_ATTR !== !1, ha = w.ALLOW_DATA_ATTR !== !1, nh = w.ALLOW_UNKNOWN_PROTOCOLS || !1, ca = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ye = w.SAFE_FOR_TEMPLATES || !1, yr = w.SAFE_FOR_XML !== !1, Cr = w.WHOLE_DOCUMENT || !1, Wr = w.RETURN_DOM || !1, Ms = w.RETURN_DOM_FRAGMENT || !1, Es = w.RETURN_TRUSTED_TYPE || !1, da = w.FORCE_BODY || !1, lh = w.SANITIZE_DOM !== !1, hh = w.SANITIZE_NAMED_PROPS || !1, fa = w.KEEP_CONTENT !== !1, pa = w.IN_PLACE || !1, ut = G0(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : Uh, Hr = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Me, ya = Na(w, "MATHML_TEXT_INTEGRATION_POINTS", () => St({}, mh)), Ca = Na(w, "HTML_INTEGRATION_POINTS", () => St({}, yh));
    const B = Na(w, "CUSTOM_ELEMENT_HANDLING", () => Kr(null));
    if (Ae = Kr(null), le(B, "tagNameCheck") && Ch(B.tagNameCheck) && (Ae.tagNameCheck = B.tagNameCheck), le(B, "attributeNameCheck") && Ch(B.attributeNameCheck) && (Ae.attributeNameCheck = B.attributeNameCheck), le(B, "allowCustomizedBuiltInElements") && typeof B.allowCustomizedBuiltInElements == "boolean" && (Ae.allowCustomizedBuiltInElements = B.allowCustomizedBuiltInElements), Zt(Ae), Ye && (ha = !1), Ms && (Wr = !0), zr && (Mt = St({}, zh), Ft = Kr(null), zr.html === !0 && (St(Mt, Wh), St(Ft, Hh)), zr.svg === !0 && (St(Mt, Oa), St(Ft, Ra), St(Ft, Ps)), zr.svgFilters === !0 && (St(Mt, Da), St(Ft, Ra), St(Ft, Ps)), zr.mathMl === !0 && (St(Mt, Ia), St(Ft, Yh), St(Ft, Ps))), rr.tagCheck = null, rr.attributeCheck = null, le(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? rr.tagCheck = w.ADD_TAGS : si(w.ADD_TAGS) && (Mt === Ls && (Mt = fe(Mt)), St(Mt, w.ADD_TAGS, It))), le(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? rr.attributeCheck = w.ADD_ATTR : si(w.ADD_ATTR) && (Ft === la && (Ft = fe(Ft)), St(Ft, w.ADD_ATTR, It))), le(w, "ADD_FORBID_CONTENTS") && si(w.ADD_FORBID_CONTENTS) && (br === uh && (br = fe(br)), St(br, w.ADD_FORBID_CONTENTS, It)), fa && (Mt["#text"] = !0), Cr && St(Mt, [
      "html",
      "head",
      "body"
    ]), Mt.table && (St(Mt, ["tbody"]), delete Ei.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function") throw Ge('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Ge('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const H = M;
      M = w.TRUSTED_TYPES_POLICY;
      try {
        X = O("");
      } catch (Y) {
        throw M = H, Y;
      }
    } else w.TRUSTED_TYPES_POLICY === null ? (M = void 0, X = "") : (M === void 0 && (M = q()), M && typeof X == "string" && (X = O("")));
    Yt && Yt(w), Yr = w;
  }, xh = St({}, [
    ...Oa,
    ...Da,
    ...X0
  ]), bh = St({}, [...Ia, ...V0]), t0 = function(w, B, H) {
    return B.namespaceURI === Me ? w === "svg" : B.namespaceURI === $s ? w === "svg" && (H === "annotation-xml" || ya[H]) : !!xh[w];
  }, e0 = function(w, B, H) {
    return B.namespaceURI === Me ? w === "math" : B.namespaceURI === Os ? w === "math" && Ca[H] : !!bh[w];
  }, r0 = function(w, B, H) {
    return B.namespaceURI === Os && !Ca[H] || B.namespaceURI === $s && !ya[H] ? !1 : !bh[w] && (Zy[w] || !xh[w]);
  }, i0 = function(w) {
    const B = N(w), H = Sr(L(w)), Y = C(w);
    let nt, gt;
    return Y && v(Y) === Pt.element ? (nt = { namespaceURI: N(Y) }, gt = Sr(L(Y))) : (nt = { namespaceURI: Hr }, gt = "template"), ma[B] ? B === Os ? t0(H, nt, gt) : B === $s ? e0(H, nt, gt) : B === Me ? r0(H, nt, gt) : !!($i === "application/xhtml+xml" && ma[B]) : !1;
  }, ir = function(w) {
    Ii(t.removed, { element: w });
    try {
      C(w).removeChild(w);
    } catch {
      if (d(w), !C(w)) throw Ge("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, kh = function(w, B, H) {
    try {
      g(w, B);
    } catch {
      try {
        w.removeAttribute(H);
      } catch {
      }
    }
  }, ba = function(w) {
    wa(w);
    const B = y(w);
    B && je(N0(B), (Y) => {
      try {
        d(Y);
      } catch {
      }
    });
    const H = v(w) === Pt.element ? k(w) : null;
    if (H) for (let Y = H.length - 1; Y >= 0; --Y) {
      const nt = H[Y], gt = nt && nt.name;
      typeof gt == "string" && kh(w, nt, gt);
    }
  }, Ur = function(w, B, H) {
    if (!H) try {
      H = B.getAttributeNode(w);
    } catch {
      H = null;
    }
    Ii(t.removed, {
      attribute: H || null,
      from: B
    });
    try {
      H ? g(B, H) : B.removeAttribute(w);
    } catch {
      try {
        B.removeAttribute(w);
      } catch {
      }
    }
    if (w === "is")
      if (Wr || Ms) try {
        ir(B);
      } catch {
      }
      else try {
        B.setAttribute(w, "");
      } catch {
      }
  }, wh = function(w) {
    const B = k(w);
    if (B)
      for (let H = B.length - 1; H >= 0; --H) {
        const Y = B[H], nt = Y && Y.name;
        typeof nt != "string" || Ft[It(nt)] || kh(w, Y, nt);
      }
  }, ka = function(w, B) {
    let H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const Y = [w];
    for (; Y.length > 0; ) {
      const nt = Y.pop();
      if (B(nt) === !1) continue;
      if (H && v(nt) === Pt.element) {
        const bt = b(nt);
        sr(bt) && Y.push(bt);
      }
      const gt = y(nt);
      if (gt) for (let bt = gt.length - 1; bt >= 0; --bt) Y.push(gt[bt]);
    }
  }, wa = function(w) {
    ka(w, (B) => {
      v(B) === Pt.element && wh(B);
    });
  }, Sa = function(w) {
    const B = [];
    return ka(w, (H) => {
      B.push(H);
    }, !0), B;
  }, s0 = function(w, B) {
    const H = Ma();
    je(Sa(w), (Y) => {
      v(Y) === Pt.element && Ea(H, Y);
    }), je(B, (Y) => {
      v(Y) === Pt.element && !Ri(H, Y) && wh(Y);
    });
  }, Sh = function(w, B) {
    let H = !1;
    return je(t.removed, (Y) => {
      Y.element && (H = H || Y.element === w, wa(Y.element));
    }), s0(w, B), H;
  }, o0 = 8, a0 = function(w, B) {
    const H = xr;
    let Y = null;
    const nt = () => (Y || (Y = Ma(), je(B, (gt) => {
      Ea(Y, gt);
    })), Y);
    for (let gt = 0; ; gt++) {
      const bt = Sa(w), qt = [w];
      let Ee = !1;
      if (je(bt, (ee) => {
        v(ee) === Pt.documentFragment ? Ii(qt, ee) : !Ee && !Ri(H, ee) && (Ee = Ri(nt(), ee));
      }), !Ee) return;
      if (gt >= o0) throw Ge("the tree kept changing during in-place sanitization; refusing to return it");
      je(qt, (ee, oe) => {
        n0(ee, oe > 0, w, nt());
      });
    }
  }, n0 = function(w, B, H, Y) {
    const nt = Ta(w);
    let gt;
    for (; gt = nt.nextNode(); )
      !Ri(Y, gt) || Ri(xr, gt) || (B && xe(rt.uponSanitizeShadowNode, gt, null), Ba(gt, H), va(gt, H), sr(gt.content) && Di(gt.content));
  }, l0 = function(w) {
    xr && Ea(xr, w);
  }, Th = function(w, B) {
    return yr ? w === "patchsrc" ? !0 : w === "for" && B !== "label" && B !== "output" : !1;
  }, h0 = function(w) {
    yr && ka(w, (B) => {
      const H = v(B);
      if (H === Pt.processingInstruction || H === Pt.comment && Gt(jh, B.data)) {
        try {
          d(B);
        } catch {
        }
        return !1;
      }
      if (H === Pt.element) {
        const Y = B, nt = It(L(B));
        try {
          Y.hasAttribute && Y.hasAttribute("patchsrc") && Y.removeAttribute("patchsrc"), Y.hasAttribute && Y.hasAttribute("for") && Th("for", nt) && Y.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, _h = function(w) {
    let B = null, H = null;
    if (da) w = "<remove></remove>" + w;
    else {
      const gt = Rh(w, /^[\r\n\t ]+/);
      H = gt && gt[0];
    }
    $i === "application/xhtml+xml" && Hr === Me && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const Y = M ? O(w) : w;
    if (Hr === Me) try {
      B = new h().parseFromString(Y, $i);
    } catch {
    }
    if (!B || !B.documentElement) {
      B = Z.createDocument(Hr, "template", null);
      try {
        B.documentElement.innerHTML = ga ? X : Y;
      } catch {
      }
    }
    const nt = B.body || B.documentElement;
    return w && H && nt.insertBefore(r.createTextNode(H), nt.childNodes[0] || null), Hr === Me ? at.call(B, Cr ? "html" : "body")[0] : Cr ? B.documentElement : nt;
  }, Ta = function(w) {
    const B = _ ? _(w) : w.ownerDocument;
    return tt.call(B || w, w, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
  }, Ds = function(w) {
    return w = Pi(w, xt, " "), w = Pi(w, vt, " "), w = Pi(w, Lt, " "), w;
  }, _a = function(w) {
    var B;
    Bh(w);
    const H = (B = w.querySelectorAll) === null || B === void 0 ? void 0 : B.call(w, "template");
    H && je(H, (Y) => {
      sr(Y.content) && _a(Y.content);
    });
  }, Bh = function(w) {
    w.normalize();
    const B = _ ? _(w) : w.ownerDocument, H = tt.call(B || w, w, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null);
    let Y = H.nextNode();
    for (; Y; )
      Y.data = Ds(Y.data), Y = H.nextNode();
  }, Is = function(w) {
    const B = T ? T(w) : null;
    return typeof B != "string" || It(B) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || w.attributes !== k(w) || typeof w.removeAttribute != "function" || typeof w.removeAttributeNode != "function" || typeof w.getAttributeNode != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || w.nodeType !== S(w) || w.childNodes !== y(w);
  }, sr = function(w) {
    if (!S || typeof w != "object" || w === null) return !1;
    try {
      return S(w) === Pt.documentFragment;
    } catch {
      return !1;
    }
  }, Oi = function(w) {
    if (!S || typeof w != "object" || w === null) return !1;
    try {
      return typeof S(w) == "number";
    } catch {
      return !1;
    }
  };
  function xe(G, w, B) {
    G.length !== 0 && je(G, (H) => {
      H.call(t, w, B, Yr);
    });
  }
  const c0 = function(w, B) {
    return !!(yr && w.hasChildNodes() && !Oi(w.firstElementChild) && Gt(Pa, w.textContent) && Gt(Pa, w.innerHTML) || yr && aC[B] && v(w) === Pt.element && N(w) === Me && (Oi(w.firstElementChild) || typeof w.textContent == "string" && Gt(Pa, w.textContent)) || w.nodeType === Pt.processingInstruction || yr && w.nodeType === Pt.comment && Gt(jh, w.data));
  }, Rs = function(w, B) {
    if (w instanceof RegExp) return Gt(w, B);
    if (w instanceof Function) {
      for (var H = arguments.length, Y = new Array(H > 2 ? H - 2 : 0), nt = 2; nt < H; nt++) Y[nt - 2] = arguments[nt];
      return !!w(B, ...Y);
    }
    return !1;
  }, u0 = function(w, B, H) {
    if (!Ei[B] && Fh(B) && Rs(Ae.tagNameCheck, B)) return !1;
    if (fa && !br[B] && !br[Sr(B)]) {
      const Y = C(w), nt = y(w);
      if (nt && Y) {
        const gt = nt.length;
        for (let bt = gt - 1; bt >= 0; --bt) {
          const qt = w === H ? f(nt[bt], !0) : nt[bt];
          Y.insertBefore(qt, m(w));
        }
      }
    }
    return ir(w), !0;
  }, vh = function(w, B, H, Y) {
    return w.length === 0 ? B : B === H || B === Y ? fe(B) : B;
  }, jr = function(w, B) {
    return w === B || C(w) !== null ? !1 : (pa && wa(w), !0);
  }, Ba = function(w, B) {
    if (l0(w), xe(rt.beforeSanitizeElements, w, null), jr(w, B)) return !0;
    if (Is(w))
      return ir(w), !0;
    const H = It(L(w));
    if (Mt = vh(rt.uponSanitizeElement, Mt, Ls, Fs), xe(rt.uponSanitizeElement, w, {
      tagName: H,
      allowedTags: Mt
    }), jr(w, B)) return !0;
    if (c0(w, H))
      return ir(w), !0;
    if (Ei[H] || !(rr.tagCheck instanceof Function && rr.tagCheck(H)) && !Mt[H]) {
      const Y = u0(w, H, B);
      return Y === !1 && (xe(rt.afterSanitizeElements, w, null), jr(w, B)) ? !0 : Y;
    }
    if (v(w) === Pt.element && !i0(w) || (H === "noscript" || H === "noembed" || H === "noframes") && Gt(oC, w.innerHTML))
      return ir(w), !0;
    if (Ye && w.nodeType === Pt.text) {
      const Y = Ds(w.textContent);
      w.textContent !== Y && (Ii(t.removed, { element: w.cloneNode() }), w.textContent = Y);
    }
    return xe(rt.afterSanitizeElements, w, null), jr(w, B);
  }, Lh = function(w, B, H) {
    if (oh[B] || Th(B, w) || lh && (B === "id" || B === "name") && (H in r || H in Jy)) return !1;
    const Y = Ft[B] || rr.attributeCheck instanceof Function && rr.attributeCheck(B, w);
    return ha && Gt(V, B) || ah && Gt(st, B) ? !0 : Y ? ph[B] || Gt(ut, Pi(H, kt, "")) || (B === "src" || B === "xlink:href" || B === "href") && w !== "script" && Ph(H, "data:") === 0 && dh[w] || nh && !Gt(yt, Pi(H, kt, "")) ? !0 : !H : Fh(w) && Rs(Ae.tagNameCheck, w) && Rs(Ae.attributeNameCheck, B, w) || B === "is" && Ae.allowCustomizedBuiltInElements && Rs(Ae.tagNameCheck, H);
  }, d0 = St({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Fh = function(w) {
    return !d0[Sr(w)] && Gt(I, w);
  }, f0 = function(w, B, H, Y) {
    if (M && typeof c == "object" && typeof c.getAttributeType == "function" && !H) switch (c.getAttributeType(w, B)) {
      case "TrustedHTML":
        return O(Y);
      case "TrustedScriptURL":
        return $(Y);
    }
    return Y;
  }, p0 = function(w, B, H, Y) {
    try {
      return H ? w.setAttributeNS(H, B, Y) : w.setAttribute(B, Y), Is(w) ? (ir(w), !1) : !0;
    } catch {
      return Ur(B, w), !1;
    }
  }, Ah = function(w, B) {
    return yr && Gt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, B) ? !0 : Sr(w) === "attributename" && Rh(B, "href") !== null;
  }, va = function(w, B) {
    if (xe(rt.beforeSanitizeAttributes, w, null), jr(w, B)) return;
    const H = w.attributes;
    if (!H || Is(w)) return;
    Ft = vh(rt.uponSanitizeAttribute, Ft, la, As);
    const Y = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ft,
      forceKeepAttr: void 0
    };
    let nt = H.length;
    const gt = It(w.nodeName);
    for (; nt--; ) {
      const bt = H[nt], qt = bt.name, Ee = bt.namespaceURI, ee = bt.value, oe = It(qt), Gr = ee;
      let ae = qt === "value" ? Gr : W0(Gr), Mh = !1;
      if (Y.attrName = oe, Y.attrValue = ae, Y.keepAttr = !0, Y.forceKeepAttr = void 0, xe(rt.uponSanitizeAttribute, w, Y), ae = Y.attrValue, hh && (oe === "id" || oe === "name") && Ph(ae, ch) !== 0 && (Ur(qt, w, bt), ae = ch + ae, Mh = !0), Ah(qt, ae)) {
        Ur(qt, w, bt);
        continue;
      }
      if (!Y.forceKeepAttr) {
        if (!Y.keepAttr) {
          Ur(qt, w, bt);
          continue;
        }
        if (!ca && Gt(Gh, ae)) {
          Ur(qt, w, bt);
          continue;
        }
        if (Ye && (ae = Ds(ae)), !Lh(gt, oe, ae)) {
          Ur(qt, w, bt);
          continue;
        }
        ae = f0(gt, oe, Ee, ae), ae !== Gr && p0(w, qt, Ee, ae) && Mh && Ih(t.removed);
      }
    }
    xe(rt.afterSanitizeAttributes, w, null), jr(w, B);
  }, Di = function(w) {
    let B = null;
    const H = Ta(w);
    for (xe(rt.beforeSanitizeShadowDOM, w, null); B = H.nextNode(); )
      if (xe(rt.uponSanitizeShadowNode, B, null), Ba(B, w), va(B, w), sr(B.content) && Di(B.content), v(B) === Pt.element) {
        const Y = b(B);
        sr(Y) && (La(Y), Di(Y));
      }
    Ye && Bh(w), xe(rt.afterSanitizeShadowDOM, w, null);
  }, La = function(w) {
    const B = [{
      node: w,
      shadow: null
    }];
    for (; B.length > 0; ) {
      const H = B.pop();
      if (H.shadow) {
        Di(H.shadow);
        continue;
      }
      const Y = H.node, nt = v(Y) === Pt.element, gt = y(Y);
      if (gt) for (let bt = gt.length - 1; bt >= 0; --bt) B.push({
        node: gt[bt],
        shadow: null
      });
      if (nt) {
        const bt = T ? T(Y) : null;
        if (typeof bt == "string" && It(bt) === "template") {
          const qt = Y.content;
          sr(qt) && B.push({
            node: qt,
            shadow: null
          });
        }
      }
      if (nt) {
        const bt = b(Y);
        sr(bt) && B.push({
          node: null,
          shadow: bt
        }, {
          node: bt,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(G) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B = null, H = null, Y = null, nt = null;
    if (ga = !G, ga && (G = "<!-->"), typeof G != "string" && !Oi(G) && (G = U0(G), typeof G != "string"))
      throw Ge("dirty is not a string, aborting");
    if (!t.isSupported) return G;
    ua ? (Mt = Fs, Ft = As) : xa(w), (rt.uponSanitizeElement.length > 0 || rt.uponSanitizeAttribute.length > 0) && (Mt = fe(Mt)), rt.uponSanitizeAttribute.length > 0 && (Ft = fe(Ft)), t.removed = [];
    const gt = pa && typeof G != "string" && Oi(G);
    let bt = [];
    const qt = xr;
    if (gt) {
      h0(G);
      const oe = L(G);
      if (typeof oe == "string") {
        const Gr = It(oe);
        if (!Mt[Gr] || Ei[Gr])
          throw ba(G), Ge("root node is forbidden and cannot be sanitized in-place");
      }
      if (Is(G))
        throw ba(G), Ge("root node is clobbered and cannot be sanitized in-place");
      bt = Sa(G), xr = Ma();
    } else if (Oi(G))
      B = _h("<!---->"), H = B.ownerDocument.importNode(G, !0), H.nodeType === Pt.element && H.nodeName === "BODY" || H.nodeName === "HTML" ? B = H : B.appendChild(H), La(B);
    else {
      if (!Wr && !Ye && !Cr && G.indexOf("<") === -1) return M && Es ? O(G) : G;
      if (B = _h(G), !B) return Wr ? null : Es ? X : "";
    }
    B && da && ir(B.firstChild);
    const Ee = gt ? G : B;
    try {
      gt && La(G);
      const oe = Ta(Ee);
      for (; Y = oe.nextNode(); )
        Ba(Y, Ee), va(Y, Ee), sr(Y.content) && Di(Y.content);
      gt && a0(G, bt);
    } catch (oe) {
      throw gt && (ba(G), Sh(G, bt)), oe;
    } finally {
      xr = qt;
    }
    if (gt) {
      if (Sh(G, bt)) throw Ge("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Ye && _a(G), G;
    }
    if (Wr) {
      if (Ye && _a(B), Ms)
        for (nt = lt.call(B.ownerDocument); B.firstChild; ) nt.appendChild(B.firstChild);
      else nt = B;
      return (Ft.shadowroot || Ft.shadowrootmode) && (nt = ct.call(i, nt, !0)), nt;
    }
    let ee = Cr ? B.outerHTML : B.innerHTML;
    return Cr && Mt["!doctype"] && B.ownerDocument && B.ownerDocument.doctype && B.ownerDocument.doctype.name && Gt(iC, B.ownerDocument.doctype.name) && (ee = "<!DOCTYPE " + B.ownerDocument.doctype.name + `>
` + ee), Ye && (ee = Ds(ee)), M && Es ? O(ee) : ee;
  }, t.setConfig = function() {
    let G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    xa(G), ua = !0, Fs = Mt, As = Ft;
  }, t.clearConfig = function() {
    Yr = null, ua = !1, Fs = null, As = null, M = W, X = "";
  }, t.isValidAttribute = function(G, w, B) {
    Yr || xa({});
    const H = It(G), Y = It(w);
    return typeof B == "string" && (Ah(w, B) || !ca && Gt(Gh, B)) ? !1 : Lh(H, Y, B);
  }, t.addHook = function(G, w) {
    typeof w == "function" && le(rt, G) && Ii(rt[G], w);
  }, t.removeHook = function(G, w) {
    if (le(rt, G)) {
      if (w !== void 0) {
        const B = P0(rt[G], w);
        return B === -1 ? void 0 : q0(rt[G], B, 1)[0];
      }
      return Ih(rt[G]);
    }
  }, t.removeHooks = function(G) {
    le(rt, G) && (rt[G] = []);
  }, t.removeAllHooks = function() {
    rt = Xh();
  }, t;
}
var ki = vu(), on = /* @__PURE__ */ p((e, t, { depth: r = 2, clobber: i = !1 } = {}) => {
  const s = { depth: r, clobber: i };
  return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((o) => on(e, o, s)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((o) => {
    e.includes(o) || e.push(o);
  }), e) : e === void 0 || r <= 0 ? e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((o) => {
    typeof t[o] == "object" && t[o] !== null && (e[o] === void 0 || typeof e[o] == "object") ? (e[o] === void 0 && (e[o] = Array.isArray(t[o]) ? [] : {}), e[o] = on(e[o], t[o], { depth: r - 1, clobber: i })) : (i || typeof e[o] != "object" && typeof t[o] != "object") && (e[o] = t[o]);
  }), e);
}, "assignWithDepth"), zt = on, Ne = "#ffffff", qe = "#f2f2f2", pt = /* @__PURE__ */ p((e, t) => t ? x(e, { s: -40, l: 10 }) : x(e, { s: -40, l: -10 }), "mkBorder"), ni, hC = (ni = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.useGradient = !0, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
  }
  updateColors() {
    var r, i, s, o, a, n, l, h, c, u, f, d, g, m, y, C, b, k, S, T, _, v, L, z, N, M, X, W, D, E, F, O, $, q, j, Z, tt, lt, at, ct, rt, xt, vt, Lt, V, st, yt, kt, I;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || pt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || pt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || A(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || A(this.tertiaryColor), this.lineColor = this.lineColor || A(this.background), this.arrowheadColor = this.arrowheadColor || A(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || P(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || A(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || R(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || P(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || P(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || R(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || R(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.darkMode)
      for (let ut = 0; ut < this.THEME_COLOR_LIMIT; ut++)
        this["cScale" + ut] = P(this["cScale" + ut], 75);
    else
      for (let ut = 0; ut < this.THEME_COLOR_LIMIT; ut++)
        this["cScale" + ut] = P(this["cScale" + ut], 25);
    for (let ut = 0; ut < this.THEME_COLOR_LIMIT; ut++)
      this["cScaleInv" + ut] = this["cScaleInv" + ut] || A(this["cScale" + ut]);
    for (let ut = 0; ut < this.THEME_COLOR_LIMIT; ut++)
      this.darkMode ? this["cScalePeer" + ut] = this["cScalePeer" + ut] || R(this["cScale" + ut], 10) : this["cScalePeer" + ut] = this["cScalePeer" + ut] || P(this["cScale" + ut], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let ut = 0; ut < this.THEME_COLOR_LIMIT; ut++)
      this["cScaleLabel" + ut] = this["cScaleLabel" + ut] || this.scaleLabelColor;
    const t = this.darkMode ? -4 : -1;
    for (let ut = 0; ut < 5; ut++)
      this["surface" + ut] = this["surface" + ut] || x(this.mainBkg, { h: 180, s: -15, l: t * (5 + ut * 3) }), this["surfacePeer" + ut] = this["surfacePeer" + ut] || x(this.mainBkg, { h: 180, s: -15, l: t * (8 + ut * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || x(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || x(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || x(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || x(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || x(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? x(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? x(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? x(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? x(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? x(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? x(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? x(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? x(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
      domainFontSize: ((r = this.cynefin) == null ? void 0 : r.domainFontSize) || 16,
      itemFontSize: ((i = this.cynefin) == null ? void 0 : i.itemFontSize) || 12,
      boundaryColor: ((s = this.cynefin) == null ? void 0 : s.boundaryColor) || this.lineColor,
      boundaryWidth: ((o = this.cynefin) == null ? void 0 : o.boundaryWidth) || 2,
      cliffColor: ((a = this.cynefin) == null ? void 0 : a.cliffColor) || "#8B0000",
      cliffWidth: ((n = this.cynefin) == null ? void 0 : n.cliffWidth) || 4,
      arrowColor: ((l = this.cynefin) == null ? void 0 : l.arrowColor) || this.lineColor,
      arrowWidth: ((h = this.cynefin) == null ? void 0 : h.arrowWidth) || 2,
      complexBg: ((c = this.cynefin) == null ? void 0 : c.complexBg) || "#E8F5E9",
      complicatedBg: ((u = this.cynefin) == null ? void 0 : u.complicatedBg) || "#E3F2FD",
      chaoticBg: ((f = this.cynefin) == null ? void 0 : f.chaoticBg) || "#FBE9E7",
      clearBg: ((d = this.cynefin) == null ? void 0 : d.clearBg) || "#FFF8E1",
      confusionBg: ((g = this.cynefin) == null ? void 0 : g.confusionBg) || "#F3E5F5",
      textColor: ((m = this.cynefin) == null ? void 0 : m.textColor) || this.textColor,
      labelColor: ((y = this.cynefin) == null ? void 0 : y.labelColor) || this.primaryTextColor
    }, this.radar = {
      axisColor: ((C = this.radar) == null ? void 0 : C.axisColor) || this.lineColor,
      axisStrokeWidth: ((b = this.radar) == null ? void 0 : b.axisStrokeWidth) || 2,
      axisLabelFontSize: ((k = this.radar) == null ? void 0 : k.axisLabelFontSize) || 12,
      curveOpacity: ((S = this.radar) == null ? void 0 : S.curveOpacity) || 0.5,
      curveStrokeWidth: ((T = this.radar) == null ? void 0 : T.curveStrokeWidth) || 2,
      graticuleColor: ((_ = this.radar) == null ? void 0 : _.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((v = this.radar) == null ? void 0 : v.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((L = this.radar) == null ? void 0 : L.graticuleOpacity) || 0.3,
      legendBoxSize: ((z = this.radar) == null ? void 0 : z.legendBoxSize) || 12,
      legendFontSize: ((N = this.radar) == null ? void 0 : N.legendFontSize) || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: ((M = this.wardley) == null ? void 0 : M.backgroundColor) || this.background,
      axisColor: ((X = this.wardley) == null ? void 0 : X.axisColor) || this.lineColor,
      axisTextColor: ((W = this.wardley) == null ? void 0 : W.axisTextColor) || this.primaryTextColor,
      gridColor: ((D = this.wardley) == null ? void 0 : D.gridColor) || this.gridColor,
      componentFill: ((E = this.wardley) == null ? void 0 : E.componentFill) || this.background,
      componentStroke: ((F = this.wardley) == null ? void 0 : F.componentStroke) || this.lineColor,
      componentLabelColor: ((O = this.wardley) == null ? void 0 : O.componentLabelColor) || this.primaryTextColor,
      linkStroke: (($ = this.wardley) == null ? void 0 : $.linkStroke) || this.lineColor,
      evolutionStroke: ((q = this.wardley) == null ? void 0 : q.evolutionStroke) || this.wardleyEvolutionColor,
      annotationStroke: ((j = this.wardley) == null ? void 0 : j.annotationStroke) || this.lineColor,
      annotationTextColor: ((Z = this.wardley) == null ? void 0 : Z.annotationTextColor) || this.primaryTextColor,
      annotationFill: ((tt = this.wardley) == null ? void 0 : tt.annotationFill) || this.background
    }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Le(this.quadrant1Fill) ? R(this.quadrant1Fill) : P(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((lt = this.xyChart) == null ? void 0 : lt.backgroundColor) || this.background,
      titleColor: ((at = this.xyChart) == null ? void 0 : at.titleColor) || this.primaryTextColor,
      dataLabelColor: ((ct = this.xyChart) == null ? void 0 : ct.dataLabelColor) || this.primaryTextColor,
      xAxisTitleColor: ((rt = this.xyChart) == null ? void 0 : rt.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((xt = this.xyChart) == null ? void 0 : xt.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((vt = this.xyChart) == null ? void 0 : vt.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((Lt = this.xyChart) == null ? void 0 : Lt.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((V = this.xyChart) == null ? void 0 : V.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((st = this.xyChart) == null ? void 0 : st.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((yt = this.xyChart) == null ? void 0 : yt.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((kt = this.xyChart) == null ? void 0 : kt.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((I = this.xyChart) == null ? void 0 : I.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = R(this.git0, 25), this.git1 = R(this.git1, 25), this.git2 = R(this.git2, 25), this.git3 = R(this.git3, 25), this.git4 = R(this.git4, 25), this.git5 = R(this.git5, 25), this.git6 = R(this.git6, 25), this.git7 = R(this.git7, 25)) : (this.git0 = P(this.git0, 25), this.git1 = P(this.git1, 25), this.git2 = P(this.git2, 25), this.git3 = P(this.git3, 25), this.git4 = P(this.git4, 25), this.git5 = P(this.git5, 25), this.git6 = P(this.git6, 25), this.git7 = P(this.git7, 25)), this.gitInv0 = this.gitInv0 || A(this.git0), this.gitInv1 = this.gitInv1 || A(this.git1), this.gitInv2 = this.gitInv2 || A(this.git2), this.gitInv3 = this.gitInv3 || A(this.git3), this.gitInv4 = this.gitInv4 || A(this.git4), this.gitInv5 = this.gitInv5 || A(this.git5), this.gitInv6 = this.gitInv6 || A(this.git6), this.gitInv7 = this.gitInv7 || A(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ne, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || qe, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(ni, "Theme"), ni), cC = /* @__PURE__ */ p((e) => {
  const t = new hC();
  return t.calculate(e), t;
}, "getThemeVariables"), li, uC = (li = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = R(this.primaryColor, 16), this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = A(this.background), this.secondaryBorderColor = pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = pt(this.tertiaryColor, this.darkMode), this.primaryTextColor = A(this.primaryColor), this.secondaryTextColor = A(this.secondaryColor), this.tertiaryTextColor = A(this.tertiaryColor), this.lineColor = A(this.background), this.textColor = A(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = R(A("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = cr(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.clusterBkg = "#302F3D", this.sectionBkgColor = P("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = P(this.sectionBkgColor, 10), this.taskBorderColor = cr(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = cr(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || R(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || P(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal";
  }
  updateColors() {
    var t, r, i, s, o, a, n, l, h, c, u, f, d, g, m, y, C, b, k, S, T, _, v, L, z, N, M, X, W, D, E, F, O, $, q, j, Z, tt, lt, at, ct, rt, xt, vt, Lt, V, st, yt, kt;
    this.secondBkg = R(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = R(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.background, this.taskBkgColor = R(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = A(this.doneTaskBkgColor), this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = x(this.primaryColor, { h: 64 }), this.fillType3 = x(this.secondaryColor, { h: 64 }), this.fillType4 = x(this.primaryColor, { h: -64 }), this.fillType5 = x(this.secondaryColor, { h: -64 }), this.fillType6 = x(this.primaryColor, { h: 128 }), this.fillType7 = x(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 });
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this["cScaleInv" + I] = this["cScaleInv" + I] || A(this["cScale" + I]);
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this["cScalePeer" + I] = this["cScalePeer" + I] || R(this["cScale" + I], 10);
    for (let I = 0; I < 5; I++)
      this["surface" + I] = this["surface" + I] || x(this.mainBkg, { h: 30, s: -30, l: -(-10 + I * 4) }), this["surfacePeer" + I] = this["surfacePeer" + I] || x(this.mainBkg, { h: 30, s: -30, l: -(-7 + I * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this["cScaleLabel" + I] = this["cScaleLabel" + I] || this.scaleLabelColor;
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this["pie" + I] = this["cScale" + I];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.mainContrastColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.mainContrastColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
    for (let I = 0; I < 8; I++)
      this["venn" + (I + 1)] = this["venn" + (I + 1)] ?? R(this["cScale" + I], 30);
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
      domainFontSize: ((t = this.cynefin) == null ? void 0 : t.domainFontSize) || 16,
      itemFontSize: ((r = this.cynefin) == null ? void 0 : r.itemFontSize) || 12,
      boundaryColor: ((i = this.cynefin) == null ? void 0 : i.boundaryColor) || this.lineColor,
      boundaryWidth: ((s = this.cynefin) == null ? void 0 : s.boundaryWidth) || 2,
      cliffColor: ((o = this.cynefin) == null ? void 0 : o.cliffColor) || "#FF6B6B",
      cliffWidth: ((a = this.cynefin) == null ? void 0 : a.cliffWidth) || 4,
      arrowColor: ((n = this.cynefin) == null ? void 0 : n.arrowColor) || this.lineColor,
      arrowWidth: ((l = this.cynefin) == null ? void 0 : l.arrowWidth) || 2,
      complexBg: ((h = this.cynefin) == null ? void 0 : h.complexBg) || "#1B5E20",
      complicatedBg: ((c = this.cynefin) == null ? void 0 : c.complicatedBg) || "#0D47A1",
      chaoticBg: ((u = this.cynefin) == null ? void 0 : u.chaoticBg) || "#BF360C",
      clearBg: ((f = this.cynefin) == null ? void 0 : f.clearBg) || "#F57F17",
      confusionBg: ((d = this.cynefin) == null ? void 0 : d.confusionBg) || "#4A148C",
      textColor: ((g = this.cynefin) == null ? void 0 : g.textColor) || this.textColor,
      labelColor: ((m = this.cynefin) == null ? void 0 : m.labelColor) || this.primaryTextColor
    }, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Le(this.quadrant1Fill) ? R(this.quadrant1Fill) : P(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((y = this.xyChart) == null ? void 0 : y.backgroundColor) || this.background,
      titleColor: ((C = this.xyChart) == null ? void 0 : C.titleColor) || this.primaryTextColor,
      dataLabelColor: ((b = this.xyChart) == null ? void 0 : b.dataLabelColor) || this.primaryTextColor,
      xAxisTitleColor: ((k = this.xyChart) == null ? void 0 : k.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((S = this.xyChart) == null ? void 0 : S.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((T = this.xyChart) == null ? void 0 : T.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_ = this.xyChart) == null ? void 0 : _.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((v = this.xyChart) == null ? void 0 : v.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((L = this.xyChart) == null ? void 0 : L.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((z = this.xyChart) == null ? void 0 : z.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((N = this.xyChart) == null ? void 0 : N.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((M = this.xyChart) == null ? void 0 : M.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.background
    }, this.radar = {
      axisColor: ((X = this.radar) == null ? void 0 : X.axisColor) || this.lineColor,
      axisStrokeWidth: ((W = this.radar) == null ? void 0 : W.axisStrokeWidth) || 2,
      axisLabelFontSize: ((D = this.radar) == null ? void 0 : D.axisLabelFontSize) || 12,
      curveOpacity: ((E = this.radar) == null ? void 0 : E.curveOpacity) || 0.5,
      curveStrokeWidth: ((F = this.radar) == null ? void 0 : F.curveStrokeWidth) || 2,
      graticuleColor: ((O = this.radar) == null ? void 0 : O.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: (($ = this.radar) == null ? void 0 : $.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((q = this.radar) == null ? void 0 : q.graticuleOpacity) || 0.3,
      legendBoxSize: ((j = this.radar) == null ? void 0 : j.legendBoxSize) || 12,
      legendFontSize: ((Z = this.radar) == null ? void 0 : Z.legendFontSize) || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#ff6b6b", this.wardley = {
      backgroundColor: ((tt = this.wardley) == null ? void 0 : tt.backgroundColor) || this.background,
      axisColor: ((lt = this.wardley) == null ? void 0 : lt.axisColor) || this.lineColor,
      axisTextColor: ((at = this.wardley) == null ? void 0 : at.axisTextColor) || this.primaryTextColor,
      gridColor: ((ct = this.wardley) == null ? void 0 : ct.gridColor) || this.gridColor,
      componentFill: ((rt = this.wardley) == null ? void 0 : rt.componentFill) || this.mainBkg,
      componentStroke: ((xt = this.wardley) == null ? void 0 : xt.componentStroke) || this.lineColor,
      componentLabelColor: ((vt = this.wardley) == null ? void 0 : vt.componentLabelColor) || this.primaryTextColor,
      linkStroke: ((Lt = this.wardley) == null ? void 0 : Lt.linkStroke) || this.lineColor,
      evolutionStroke: ((V = this.wardley) == null ? void 0 : V.evolutionStroke) || this.wardleyEvolutionColor,
      annotationStroke: ((st = this.wardley) == null ? void 0 : st.annotationStroke) || this.lineColor,
      annotationTextColor: ((yt = this.wardley) == null ? void 0 : yt.annotationTextColor) || this.primaryTextColor,
      annotationFill: ((kt = this.wardley) == null ? void 0 : kt.annotationFill) || this.mainBkg
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = R(this.secondaryColor, 20), this.git1 = R(this.pie2 || this.secondaryColor, 20), this.git2 = R(this.pie3 || this.tertiaryColor, 20), this.git3 = R(this.pie4 || x(this.primaryColor, { h: -30 }), 20), this.git4 = R(this.pie5 || x(this.primaryColor, { h: -60 }), 20), this.git5 = R(this.pie6 || x(this.primaryColor, { h: -90 }), 10), this.git6 = R(this.pie7 || x(this.primaryColor, { h: 60 }), 10), this.git7 = R(this.pie8 || x(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || A(this.git0), this.gitInv1 = this.gitInv1 || A(this.git1), this.gitInv2 = this.gitInv2 || A(this.git2), this.gitInv3 = this.gitInv3 || A(this.git3), this.gitInv4 = this.gitInv4 || A(this.git4), this.gitInv5 = this.gitInv5 || A(this.git5), this.gitInv6 = this.gitInv6 || A(this.git6), this.gitInv7 = this.gitInv7 || A(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || A(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || A(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "#2d2d2d", this.emUiStroke = this.emUiStroke || "#555", this.emProcessorFill = this.emProcessorFill || R("#5a3d5c", 10), this.emProcessorStroke = this.emProcessorStroke || "#8a6d8c", this.emReadModelFill = this.emReadModelFill || R("#3d5a2d", 10), this.emReadModelStroke = this.emReadModelStroke || "#6d8c5c", this.emCommandFill = this.emCommandFill || R("#2d3d5a", 10), this.emCommandStroke = this.emCommandStroke || "#5c6d8c", this.emEventFill = this.emEventFill || R("#5a452d", 10), this.emEventStroke = this.emEventStroke || "#8c755c", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || R(this.background, 5), this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || R(this.background, 12), this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || R(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || R(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(li, "Theme"), li), dC = /* @__PURE__ */ p((e) => {
  const t = new uC();
  return t.calculate(e), t;
}, "getThemeVariables"), hi, fC = (hi = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = x(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = pt(this.tertiaryColor, this.darkMode), this.primaryTextColor = A(this.primaryColor), this.secondaryTextColor = A(this.secondaryColor), this.tertiaryTextColor = A(this.tertiaryColor), this.lineColor = A(this.background), this.textColor = A(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.primaryBorderColor = pt(this.primaryColor, this.darkMode), this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.clusterBkg = "#FBFBFF", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = cr(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !1, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow(1px 2px 2px rgba(185, 185, 185, 1))", this.updateColors();
  }
  updateColors() {
    var t, r, i, s, o, a, n, l, h, c, u, f, d, g, m, y, C, b, k, S, T, _, v, L, z, N, M, X, W, D, E, F, O, $, q, j, Z, tt, lt, at, ct, rt, xt, vt, Lt, V, st, yt, kt;
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || P(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || P(this.tertiaryColor, 40);
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this["cScale" + I] = P(this["cScale" + I], 10), this["cScalePeer" + I] = this["cScalePeer" + I] || P(this["cScale" + I], 25);
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this["cScaleInv" + I] = this["cScaleInv" + I] || x(this["cScale" + I], { h: 180 });
    for (let I = 0; I < 5; I++)
      this["surface" + I] = this["surface" + I] || x(this.mainBkg, { h: 30, l: -(5 + I * 5) }), this["surfacePeer" + I] = this["surfacePeer" + I] || x(this.mainBkg, { h: 30, l: -(7 + I * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || A(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || A(this.labelTextColor);
      for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
        this["cScaleLabel" + I] = this["cScaleLabel" + I] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || R(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || R(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = x(this.primaryColor, { h: 64 }), this.fillType3 = x(this.secondaryColor, { h: 64 }), this.fillType4 = x(this.primaryColor, { h: -64 }), this.fillType5 = x(this.secondaryColor, { h: -64 }), this.fillType6 = x(this.primaryColor, { h: 128 }), this.fillType7 = x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || x(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? x(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? x(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? x(this.tertiaryColor, { l: -40 }), this.venn4 = this.venn4 ?? x(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? x(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? x(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? x(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? x(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
      domainFontSize: ((t = this.cynefin) == null ? void 0 : t.domainFontSize) || 16,
      itemFontSize: ((r = this.cynefin) == null ? void 0 : r.itemFontSize) || 12,
      boundaryColor: ((i = this.cynefin) == null ? void 0 : i.boundaryColor) || this.lineColor,
      boundaryWidth: ((s = this.cynefin) == null ? void 0 : s.boundaryWidth) || 2,
      cliffColor: ((o = this.cynefin) == null ? void 0 : o.cliffColor) || "#8B0000",
      cliffWidth: ((a = this.cynefin) == null ? void 0 : a.cliffWidth) || 4,
      arrowColor: ((n = this.cynefin) == null ? void 0 : n.arrowColor) || this.lineColor,
      arrowWidth: ((l = this.cynefin) == null ? void 0 : l.arrowWidth) || 2,
      complexBg: ((h = this.cynefin) == null ? void 0 : h.complexBg) || "#E8F5E9",
      complicatedBg: ((c = this.cynefin) == null ? void 0 : c.complicatedBg) || "#E3F2FD",
      chaoticBg: ((u = this.cynefin) == null ? void 0 : u.chaoticBg) || "#FBE9E7",
      clearBg: ((f = this.cynefin) == null ? void 0 : f.clearBg) || "#FFF8E1",
      confusionBg: ((d = this.cynefin) == null ? void 0 : d.confusionBg) || "#F3E5F5",
      textColor: ((g = this.cynefin) == null ? void 0 : g.textColor) || this.textColor,
      labelColor: ((m = this.cynefin) == null ? void 0 : m.labelColor) || this.primaryTextColor
    }, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Le(this.quadrant1Fill) ? R(this.quadrant1Fill) : P(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
      axisColor: ((y = this.radar) == null ? void 0 : y.axisColor) || this.lineColor,
      axisStrokeWidth: ((C = this.radar) == null ? void 0 : C.axisStrokeWidth) || 2,
      axisLabelFontSize: ((b = this.radar) == null ? void 0 : b.axisLabelFontSize) || 12,
      curveOpacity: ((k = this.radar) == null ? void 0 : k.curveOpacity) || 0.5,
      curveStrokeWidth: ((S = this.radar) == null ? void 0 : S.curveStrokeWidth) || 2,
      graticuleColor: ((T = this.radar) == null ? void 0 : T.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((_ = this.radar) == null ? void 0 : _.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((v = this.radar) == null ? void 0 : v.graticuleOpacity) || 0.3,
      legendBoxSize: ((L = this.radar) == null ? void 0 : L.legendBoxSize) || 12,
      legendFontSize: ((z = this.radar) == null ? void 0 : z.legendFontSize) || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: ((N = this.wardley) == null ? void 0 : N.backgroundColor) || this.background,
      axisColor: ((M = this.wardley) == null ? void 0 : M.axisColor) || this.lineColor,
      axisTextColor: ((X = this.wardley) == null ? void 0 : X.axisTextColor) || this.primaryTextColor,
      gridColor: ((W = this.wardley) == null ? void 0 : W.gridColor) || this.gridColor,
      componentFill: ((D = this.wardley) == null ? void 0 : D.componentFill) || this.background,
      componentStroke: ((E = this.wardley) == null ? void 0 : E.componentStroke) || this.lineColor,
      componentLabelColor: ((F = this.wardley) == null ? void 0 : F.componentLabelColor) || this.primaryTextColor,
      linkStroke: ((O = this.wardley) == null ? void 0 : O.linkStroke) || this.lineColor,
      evolutionStroke: (($ = this.wardley) == null ? void 0 : $.evolutionStroke) || this.wardleyEvolutionColor,
      annotationStroke: ((q = this.wardley) == null ? void 0 : q.annotationStroke) || this.lineColor,
      annotationTextColor: ((j = this.wardley) == null ? void 0 : j.annotationTextColor) || this.primaryTextColor,
      annotationFill: ((Z = this.wardley) == null ? void 0 : Z.annotationFill) || this.background
    }, this.xyChart = {
      backgroundColor: ((tt = this.xyChart) == null ? void 0 : tt.backgroundColor) || this.background,
      titleColor: ((lt = this.xyChart) == null ? void 0 : lt.titleColor) || this.primaryTextColor,
      dataLabelColor: ((at = this.xyChart) == null ? void 0 : at.dataLabelColor) || this.primaryTextColor,
      xAxisTitleColor: ((ct = this.xyChart) == null ? void 0 : ct.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((rt = this.xyChart) == null ? void 0 : rt.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((xt = this.xyChart) == null ? void 0 : xt.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((vt = this.xyChart) == null ? void 0 : vt.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((Lt = this.xyChart) == null ? void 0 : Lt.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((V = this.xyChart) == null ? void 0 : V.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((st = this.xyChart) == null ? void 0 : st.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((yt = this.xyChart) == null ? void 0 : yt.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((kt = this.xyChart) == null ? void 0 : kt.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = R(this.git0, 25), this.git1 = R(this.git1, 25), this.git2 = R(this.git2, 25), this.git3 = R(this.git3, 25), this.git4 = R(this.git4, 25), this.git5 = R(this.git5, 25), this.git6 = R(this.git6, 25), this.git7 = R(this.git7, 25)) : (this.git0 = P(this.git0, 25), this.git1 = P(this.git1, 25), this.git2 = P(this.git2, 25), this.git3 = P(this.git3, 25), this.git4 = P(this.git4, 25), this.git5 = P(this.git5, 25), this.git6 = P(this.git6, 25), this.git7 = P(this.git7, 25)), this.gitInv0 = this.gitInv0 || P(A(this.git0), 25), this.gitInv1 = this.gitInv1 || A(this.git1), this.gitInv2 = this.gitInv2 || A(this.git2), this.gitInv3 = this.gitInv3 || A(this.git3), this.gitInv4 = this.gitInv4 || A(this.git4), this.gitInv5 = this.gitInv5 || A(this.git5), this.gitInv6 = this.gitInv6 || A(this.git6), this.gitInv7 = this.gitInv7 || A(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || A(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || A(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ne, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || qe;
  }
  calculate(t) {
    if (Object.keys(this).forEach((i) => {
      this[i] === "calculated" && (this[i] = void 0);
    }), typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(hi, "Theme"), hi), pC = /* @__PURE__ */ p((e) => {
  const t = new fC();
  return t.calculate(e), t;
}, "getThemeVariables"), ci, gC = (ci = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = R("#cde498", 10), this.primaryBorderColor = pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = pt(this.tertiaryColor, this.darkMode), this.primaryTextColor = A(this.primaryColor), this.secondaryTextColor = A(this.secondaryColor), this.tertiaryTextColor = A(this.primaryColor), this.lineColor = A(this.background), this.textColor = A(this.background), this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.5))";
  }
  updateColors() {
    var t, r, i, s, o, a, n, l, h, c, u, f, d, g, m, y, C, b, k, S, T, _, v, L, z, N, M, X, W, D, E, F, O, $, q, j, Z, tt, lt, at, ct, rt, xt, vt, Lt, V, st, yt, kt;
    this.actorBorder = P(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || P(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || P(this.tertiaryColor, 40);
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this["cScale" + I] = P(this["cScale" + I], 10), this["cScalePeer" + I] = this["cScalePeer" + I] || P(this["cScale" + I], 25);
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this["cScaleInv" + I] = this["cScaleInv" + I] || x(this["cScale" + I], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this["cScaleLabel" + I] = this["cScaleLabel" + I] || this.scaleLabelColor;
    for (let I = 0; I < 5; I++)
      this["surface" + I] = this["surface" + I] || x(this.mainBkg, { h: 30, s: -30, l: -(5 + I * 5) }), this["surfacePeer" + I] = this["surfacePeer" + I] || x(this.mainBkg, { h: 30, s: -30, l: -(8 + I * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || R(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || R(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = x(this.primaryColor, { h: 64 }), this.fillType3 = x(this.secondaryColor, { h: 64 }), this.fillType4 = x(this.primaryColor, { h: -64 }), this.fillType5 = x(this.secondaryColor, { h: -64 }), this.fillType6 = x(this.primaryColor, { h: 128 }), this.fillType7 = x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? x(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? x(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? x(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? x(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? x(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? x(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? x(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? x(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
      domainFontSize: ((t = this.cynefin) == null ? void 0 : t.domainFontSize) || 16,
      itemFontSize: ((r = this.cynefin) == null ? void 0 : r.itemFontSize) || 12,
      boundaryColor: ((i = this.cynefin) == null ? void 0 : i.boundaryColor) || this.lineColor,
      boundaryWidth: ((s = this.cynefin) == null ? void 0 : s.boundaryWidth) || 2,
      cliffColor: ((o = this.cynefin) == null ? void 0 : o.cliffColor) || "#8B4513",
      cliffWidth: ((a = this.cynefin) == null ? void 0 : a.cliffWidth) || 4,
      arrowColor: ((n = this.cynefin) == null ? void 0 : n.arrowColor) || this.lineColor,
      arrowWidth: ((l = this.cynefin) == null ? void 0 : l.arrowWidth) || 2,
      complexBg: ((h = this.cynefin) == null ? void 0 : h.complexBg) || "#C8E6C9",
      complicatedBg: ((c = this.cynefin) == null ? void 0 : c.complicatedBg) || "#DCEDC8",
      chaoticBg: ((u = this.cynefin) == null ? void 0 : u.chaoticBg) || "#FFE0B2",
      clearBg: ((f = this.cynefin) == null ? void 0 : f.clearBg) || "#FFF9C4",
      confusionBg: ((d = this.cynefin) == null ? void 0 : d.confusionBg) || "#D7CCC8",
      textColor: ((g = this.cynefin) == null ? void 0 : g.textColor) || this.textColor,
      labelColor: ((m = this.cynefin) == null ? void 0 : m.labelColor) || this.primaryTextColor
    }, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Le(this.quadrant1Fill) ? R(this.quadrant1Fill) : P(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.mainBkg
    }, this.radar = {
      axisColor: ((y = this.radar) == null ? void 0 : y.axisColor) || this.lineColor,
      axisStrokeWidth: ((C = this.radar) == null ? void 0 : C.axisStrokeWidth) || 2,
      axisLabelFontSize: ((b = this.radar) == null ? void 0 : b.axisLabelFontSize) || 12,
      curveOpacity: ((k = this.radar) == null ? void 0 : k.curveOpacity) || 0.5,
      curveStrokeWidth: ((S = this.radar) == null ? void 0 : S.curveStrokeWidth) || 2,
      graticuleColor: ((T = this.radar) == null ? void 0 : T.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((_ = this.radar) == null ? void 0 : _.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((v = this.radar) == null ? void 0 : v.graticuleOpacity) || 0.3,
      legendBoxSize: ((L = this.radar) == null ? void 0 : L.legendBoxSize) || 12,
      legendFontSize: ((z = this.radar) == null ? void 0 : z.legendFontSize) || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: ((N = this.wardley) == null ? void 0 : N.backgroundColor) || this.background,
      axisColor: ((M = this.wardley) == null ? void 0 : M.axisColor) || this.lineColor,
      axisTextColor: ((X = this.wardley) == null ? void 0 : X.axisTextColor) || this.primaryTextColor,
      gridColor: ((W = this.wardley) == null ? void 0 : W.gridColor) || this.gridColor,
      componentFill: ((D = this.wardley) == null ? void 0 : D.componentFill) || this.background,
      componentStroke: ((E = this.wardley) == null ? void 0 : E.componentStroke) || this.lineColor,
      componentLabelColor: ((F = this.wardley) == null ? void 0 : F.componentLabelColor) || this.primaryTextColor,
      linkStroke: ((O = this.wardley) == null ? void 0 : O.linkStroke) || this.lineColor,
      evolutionStroke: (($ = this.wardley) == null ? void 0 : $.evolutionStroke) || this.wardleyEvolutionColor,
      annotationStroke: ((q = this.wardley) == null ? void 0 : q.annotationStroke) || this.lineColor,
      annotationTextColor: ((j = this.wardley) == null ? void 0 : j.annotationTextColor) || this.primaryTextColor,
      annotationFill: ((Z = this.wardley) == null ? void 0 : Z.annotationFill) || this.background
    }, this.xyChart = {
      backgroundColor: ((tt = this.xyChart) == null ? void 0 : tt.backgroundColor) || this.background,
      titleColor: ((lt = this.xyChart) == null ? void 0 : lt.titleColor) || this.primaryTextColor,
      dataLabelColor: ((at = this.xyChart) == null ? void 0 : at.dataLabelColor) || this.primaryTextColor,
      xAxisTitleColor: ((ct = this.xyChart) == null ? void 0 : ct.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((rt = this.xyChart) == null ? void 0 : rt.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((xt = this.xyChart) == null ? void 0 : xt.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((vt = this.xyChart) == null ? void 0 : vt.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((Lt = this.xyChart) == null ? void 0 : Lt.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((V = this.xyChart) == null ? void 0 : V.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((st = this.xyChart) == null ? void 0 : st.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((yt = this.xyChart) == null ? void 0 : yt.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((kt = this.xyChart) == null ? void 0 : kt.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = R(this.git0, 25), this.git1 = R(this.git1, 25), this.git2 = R(this.git2, 25), this.git3 = R(this.git3, 25), this.git4 = R(this.git4, 25), this.git5 = R(this.git5, 25), this.git6 = R(this.git6, 25), this.git7 = R(this.git7, 25)) : (this.git0 = P(this.git0, 25), this.git1 = P(this.git1, 25), this.git2 = P(this.git2, 25), this.git3 = P(this.git3, 25), this.git4 = P(this.git4, 25), this.git5 = P(this.git5, 25), this.git6 = P(this.git6, 25), this.git7 = P(this.git7, 25)), this.gitInv0 = this.gitInv0 || A(this.git0), this.gitInv1 = this.gitInv1 || A(this.git1), this.gitInv2 = this.gitInv2 || A(this.git2), this.gitInv3 = this.gitInv3 || A(this.git3), this.gitInv4 = this.gitInv4 || A(this.git4), this.gitInv5 = this.gitInv5 || A(this.git5), this.gitInv6 = this.gitInv6 || A(this.git6), this.gitInv7 = this.gitInv7 || A(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || A(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || A(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ne, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || qe;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(ci, "Theme"), ci), mC = /* @__PURE__ */ p((e) => {
  const t = new gC();
  return t.calculate(e), t;
}, "getThemeVariables"), ui, yC = (ui = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = R(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = pt(this.tertiaryColor, this.darkMode), this.primaryTextColor = A(this.primaryColor), this.secondaryTextColor = A(this.secondaryColor), this.tertiaryTextColor = A(this.tertiaryColor), this.lineColor = A(this.background), this.textColor = A(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.rowOdd = this.rowOdd || R(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
  }
  updateColors() {
    var t, r, i, s, o, a, n, l, h, c, u, f, d, g, m, y, C, b, k, S, T, _, v, L, z, N, M, X, W, D, E, F, O, $, q, j, Z, tt, lt, at, ct, rt, xt, vt, Lt, V, st, yt, kt;
    this.secondBkg = R(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = R(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this["cScaleInv" + I] = this["cScaleInv" + I] || A(this["cScale" + I]);
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this.darkMode ? this["cScalePeer" + I] = this["cScalePeer" + I] || R(this["cScale" + I], 10) : this["cScalePeer" + I] = this["cScalePeer" + I] || P(this["cScale" + I], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this["cScaleLabel" + I] = this["cScaleLabel" + I] || this.scaleLabelColor;
    for (let I = 0; I < 5; I++)
      this["surface" + I] = this["surface" + I] || x(this.mainBkg, { l: -(5 + I * 5) }), this["surfacePeer" + I] = this["surfacePeer" + I] || x(this.mainBkg, { l: -(8 + I * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = R(this.contrast, 30), this.sectionBkgColor2 = R(this.contrast, 30), this.taskBorderColor = P(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = R(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = P(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = x(this.primaryColor, { h: 64 }), this.fillType3 = x(this.secondaryColor, { h: 64 }), this.fillType4 = x(this.primaryColor, { h: -64 }), this.fillType5 = x(this.secondaryColor, { h: -64 }), this.fillType6 = x(this.primaryColor, { h: 128 }), this.fillType7 = x(this.secondaryColor, { h: 128 });
    for (let I = 0; I < this.THEME_COLOR_LIMIT; I++)
      this["pie" + I] = this["cScale" + I];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
    for (let I = 0; I < 8; I++)
      this["venn" + (I + 1)] = this["venn" + (I + 1)] ?? this["cScale" + I];
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
      domainFontSize: ((t = this.cynefin) == null ? void 0 : t.domainFontSize) || 16,
      itemFontSize: ((r = this.cynefin) == null ? void 0 : r.itemFontSize) || 12,
      boundaryColor: ((i = this.cynefin) == null ? void 0 : i.boundaryColor) || this.lineColor,
      boundaryWidth: ((s = this.cynefin) == null ? void 0 : s.boundaryWidth) || 2,
      cliffColor: ((o = this.cynefin) == null ? void 0 : o.cliffColor) || "#8B0000",
      cliffWidth: ((a = this.cynefin) == null ? void 0 : a.cliffWidth) || 4,
      arrowColor: ((n = this.cynefin) == null ? void 0 : n.arrowColor) || this.lineColor,
      arrowWidth: ((l = this.cynefin) == null ? void 0 : l.arrowWidth) || 2,
      complexBg: ((h = this.cynefin) == null ? void 0 : h.complexBg) || "#E8F5E9",
      complicatedBg: ((c = this.cynefin) == null ? void 0 : c.complicatedBg) || "#E3F2FD",
      chaoticBg: ((u = this.cynefin) == null ? void 0 : u.chaoticBg) || "#FBE9E7",
      clearBg: ((f = this.cynefin) == null ? void 0 : f.clearBg) || "#FFF8E1",
      confusionBg: ((d = this.cynefin) == null ? void 0 : d.confusionBg) || "#F3E5F5",
      textColor: ((g = this.cynefin) == null ? void 0 : g.textColor) || this.textColor,
      labelColor: ((m = this.cynefin) == null ? void 0 : m.labelColor) || this.primaryTextColor
    }, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Le(this.quadrant1Fill) ? R(this.quadrant1Fill) : P(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((y = this.xyChart) == null ? void 0 : y.backgroundColor) || this.background,
      titleColor: ((C = this.xyChart) == null ? void 0 : C.titleColor) || this.primaryTextColor,
      dataLabelColor: ((b = this.xyChart) == null ? void 0 : b.dataLabelColor) || this.primaryTextColor,
      xAxisTitleColor: ((k = this.xyChart) == null ? void 0 : k.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((S = this.xyChart) == null ? void 0 : S.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((T = this.xyChart) == null ? void 0 : T.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_ = this.xyChart) == null ? void 0 : _.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((v = this.xyChart) == null ? void 0 : v.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((L = this.xyChart) == null ? void 0 : L.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((z = this.xyChart) == null ? void 0 : z.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((N = this.xyChart) == null ? void 0 : N.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((M = this.xyChart) == null ? void 0 : M.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.radar = {
      axisColor: ((X = this.radar) == null ? void 0 : X.axisColor) || this.lineColor,
      axisStrokeWidth: ((W = this.radar) == null ? void 0 : W.axisStrokeWidth) || 2,
      axisLabelFontSize: ((D = this.radar) == null ? void 0 : D.axisLabelFontSize) || 12,
      curveOpacity: ((E = this.radar) == null ? void 0 : E.curveOpacity) || 0.5,
      curveStrokeWidth: ((F = this.radar) == null ? void 0 : F.curveStrokeWidth) || 2,
      graticuleColor: ((O = this.radar) == null ? void 0 : O.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: (($ = this.radar) == null ? void 0 : $.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((q = this.radar) == null ? void 0 : q.graticuleOpacity) || 0.3,
      legendBoxSize: ((j = this.radar) == null ? void 0 : j.legendBoxSize) || 12,
      legendFontSize: ((Z = this.radar) == null ? void 0 : Z.legendFontSize) || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: ((tt = this.wardley) == null ? void 0 : tt.backgroundColor) || this.background,
      axisColor: ((lt = this.wardley) == null ? void 0 : lt.axisColor) || this.lineColor,
      axisTextColor: ((at = this.wardley) == null ? void 0 : at.axisTextColor) || this.primaryTextColor,
      gridColor: ((ct = this.wardley) == null ? void 0 : ct.gridColor) || this.gridColor,
      componentFill: ((rt = this.wardley) == null ? void 0 : rt.componentFill) || this.background,
      componentStroke: ((xt = this.wardley) == null ? void 0 : xt.componentStroke) || this.lineColor,
      componentLabelColor: ((vt = this.wardley) == null ? void 0 : vt.componentLabelColor) || this.primaryTextColor,
      linkStroke: ((Lt = this.wardley) == null ? void 0 : Lt.linkStroke) || this.lineColor,
      evolutionStroke: ((V = this.wardley) == null ? void 0 : V.evolutionStroke) || this.wardleyEvolutionColor,
      annotationStroke: ((st = this.wardley) == null ? void 0 : st.annotationStroke) || this.lineColor,
      annotationTextColor: ((yt = this.wardley) == null ? void 0 : yt.annotationTextColor) || this.primaryTextColor,
      annotationFill: ((kt = this.wardley) == null ? void 0 : kt.annotationFill) || this.background
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = P(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || x(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || x(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || x(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || x(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || x(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || A(this.git0), this.gitInv1 = this.gitInv1 || A(this.git1), this.gitInv2 = this.gitInv2 || A(this.git2), this.gitInv3 = this.gitInv3 || A(this.git3), this.gitInv4 = this.gitInv4 || A(this.git4), this.gitInv5 = this.gitInv5 || A(this.git5), this.gitInv6 = this.gitInv6 || A(this.git6), this.gitInv7 = this.gitInv7 || A(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ne, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || qe;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(ui, "Theme"), ui), CC = /* @__PURE__ */ p((e) => {
  const t = new yC();
  return t.calculate(e), t;
}, "getThemeVariables"), di, xC = (di = class {
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 2, this.primaryBorderColor = pt(this.primaryColor, this.darkMode), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#000000", this.stateBorder = "#000000", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.25));", this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
  }
  updateColors() {
    var o, a, n, l, h, c, u, f, d, g, m;
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || pt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || pt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || A(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || A(this.tertiaryColor), this.lineColor = this.lineColor || A(this.background), this.arrowheadColor = this.arrowheadColor || A(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || P(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || A(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    const t = "#ECECFE", r = "#E9E9F1", i = x(t, { h: 180, l: 5 });
    if (this.sectionBkgColor = this.sectionBkgColor || i, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || r, this.sectionBkgColor2 = this.sectionBkgColor2 || t, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || t, this.activeTaskBorderColor = this.activeTaskBorderColor || t, this.activeTaskBkgColor = this.activeTaskBkgColor || R(t, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || t, this.cScale1 = this.cScale1 || r, this.cScale2 = this.cScale2 || i, this.cScale3 = this.cScale3 || x(t, { h: 30 }), this.cScale4 = this.cScale4 || x(t, { h: 60 }), this.cScale5 = this.cScale5 || x(t, { h: 90 }), this.cScale6 = this.cScale6 || x(t, { h: 120 }), this.cScale7 = this.cScale7 || x(t, { h: 150 }), this.cScale8 = this.cScale8 || x(t, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || x(t, { h: 270 }), this.cScale10 = this.cScale10 || x(t, { h: 300 }), this.cScale11 = this.cScale11 || x(t, { h: 330 }), this.darkMode)
      for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
        this["cScale" + y] = P(this["cScale" + y], 75);
    else
      for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
        this["cScale" + y] = P(this["cScale" + y], 25);
    for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
      this["cScaleInv" + y] = this["cScaleInv" + y] || A(this["cScale" + y]);
    for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
      this.darkMode ? this["cScalePeer" + y] = this["cScalePeer" + y] || R(this["cScale" + y], 10) : this["cScalePeer" + y] = this["cScalePeer" + y] || P(this["cScale" + y], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
      this["cScaleLabel" + y] = this["cScaleLabel" + y] || this.scaleLabelColor;
    const s = this.darkMode ? -4 : -1;
    for (let y = 0; y < 5; y++)
      this["surface" + y] = this["surface" + y] || x(this.mainBkg, { h: 180, s: -15, l: s * (5 + y * 3) }), this["surfacePeer" + y] = this["surfacePeer" + y] || x(this.mainBkg, { h: 180, s: -15, l: s * (8 + y * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || t, this.fillType1 = this.fillType1 || r, this.fillType2 = this.fillType2 || x(t, { h: 64 }), this.fillType3 = this.fillType3 || x(r, { h: 64 }), this.fillType4 = this.fillType4 || x(t, { h: -64 }), this.fillType5 = this.fillType5 || x(r, { h: -64 }), this.fillType6 = this.fillType6 || x(t, { h: 128 }), this.fillType7 = this.fillType7 || x(r, { h: 128 }), this.pie1 = this.pie1 || t, this.pie2 = this.pie2 || r, this.pie3 = this.pie3 || i, this.pie4 = this.pie4 || x(t, { l: -10 }), this.pie5 = this.pie5 || x(r, { l: -10 }), this.pie6 = this.pie6 || x(i, { l: -10 }), this.pie7 = this.pie7 || x(t, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(t, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(t, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(t, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(t, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(t, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || t, this.quadrant2Fill = this.quadrant2Fill || x(t, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(t, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(t, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Le(this.quadrant1Fill) ? R(this.quadrant1Fill) : P(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((o = this.xyChart) == null ? void 0 : o.backgroundColor) || this.background,
      titleColor: ((a = this.xyChart) == null ? void 0 : a.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((h = this.xyChart) == null ? void 0 : h.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((c = this.xyChart) == null ? void 0 : c.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((u = this.xyChart) == null ? void 0 : u.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((f = this.xyChart) == null ? void 0 : f.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((d = this.xyChart) == null ? void 0 : d.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((g = this.xyChart) == null ? void 0 : g.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((m = this.xyChart) == null ? void 0 : m.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || t, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || t, this.git1 = this.git1 || r, this.git2 = this.git2 || i, this.git3 = this.git3 || x(t, { h: -30 }), this.git4 = this.git4 || x(t, { h: -60 }), this.git5 = this.git5 || x(t, { h: -90 }), this.git6 = this.git6 || x(t, { h: 60 }), this.git7 = this.git7 || x(t, { h: 120 }), this.darkMode ? (this.git0 = R(this.git0, 25), this.git1 = R(this.git1, 25), this.git2 = R(this.git2, 25), this.git3 = R(this.git3, 25), this.git4 = R(this.git4, 25), this.git5 = R(this.git5, 25), this.git6 = R(this.git6, 25), this.git7 = R(this.git7, 25)) : (this.git0 = P(this.git0, 25), this.git1 = P(this.git1, 25), this.git2 = P(this.git2, 25), this.git3 = P(this.git3, 25), this.git4 = P(this.git4, 25), this.git5 = P(this.git5, 25), this.git6 = P(this.git6, 25), this.git7 = P(this.git7, 25)), this.gitInv0 = this.gitInv0 || A(this.git0), this.gitInv1 = this.gitInv1 || A(this.git1), this.gitInv2 = this.gitInv2 || A(this.git2), this.gitInv3 = this.gitInv3 || A(this.git3), this.gitInv4 = this.gitInv4 || A(this.git4), this.gitInv5 = this.gitInv5 || A(this.git5), this.gitInv6 = this.gitInv6 || A(this.git6), this.gitInv7 = this.gitInv7 || A(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ne, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || qe;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(di, "Theme"), di), bC = /* @__PURE__ */ p((e) => {
  const t = new xC();
  return t.calculate(e), t;
}, "getThemeVariables"), fi, kC = (fi = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = R(this.primaryColor, 16), this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = A(this.background), this.secondaryBorderColor = pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = pt(this.tertiaryColor, this.darkMode), this.primaryTextColor = A(this.primaryColor), this.secondaryTextColor = A(this.secondaryColor), this.tertiaryTextColor = A(this.tertiaryColor), this.mainBkg = "#2a2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = R(A("#323D47"), 10), this.border1 = "#ccc", this.border2 = cr(255, 255, 255, 0.25), this.arrowheadColor = A(this.background), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 1, this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.2))", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
  }
  updateColors() {
    var r, i, s, o, a, n, l, h, c, u, f;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || pt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || pt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || A(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || A(this.tertiaryColor), this.lineColor = this.lineColor || A(this.background), this.arrowheadColor = this.arrowheadColor || A(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || P(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || A(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || R(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.darkMode)
      for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
        this["cScale" + d] = P(this["cScale" + d], 75);
    else
      for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
        this["cScale" + d] = P(this["cScale" + d], 25);
    for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
      this["cScaleInv" + d] = this["cScaleInv" + d] || A(this["cScale" + d]);
    for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
      this.darkMode ? this["cScalePeer" + d] = this["cScalePeer" + d] || R(this["cScale" + d], 10) : this["cScalePeer" + d] = this["cScalePeer" + d] || P(this["cScale" + d], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
      this["cScaleLabel" + d] = this["cScaleLabel" + d] || this.scaleLabelColor;
    const t = this.darkMode ? -4 : -1;
    for (let d = 0; d < 5; d++)
      this["surface" + d] = this["surface" + d] || x(this.mainBkg, { h: 180, s: -15, l: t * (5 + d * 3) }), this["surfacePeer" + d] = this["surfacePeer" + d] || x(this.mainBkg, { h: 180, s: -15, l: t * (8 + d * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || x(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || x(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || x(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || x(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || x(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Le(this.quadrant1Fill) ? R(this.quadrant1Fill) : P(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((r = this.xyChart) == null ? void 0 : r.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((a = this.xyChart) == null ? void 0 : a.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || "#0b0000", this.git1 = this.git1 || "#4d1037", this.git2 = this.git2 || "#3f5258", this.git3 = this.git3 || "#4f2f1b", this.git4 = this.git4 || "#6e0a0a", this.git5 = this.git5 || "#3b0048", this.git6 = this.git6 || "#995a01", this.git7 = this.git7 || "#154706", this.gitDarkMode = !0, this.gitDarkMode ? (this.git0 = R(this.git0, 25), this.git1 = R(this.git1, 25), this.git2 = R(this.git2, 25), this.git3 = R(this.git3, 25), this.git4 = R(this.git4, 25), this.git5 = R(this.git5, 25), this.git6 = R(this.git6, 25), this.git7 = R(this.git7, 25)) : (this.git0 = P(this.git0, 25), this.git1 = P(this.git1, 25), this.git2 = P(this.git2, 25), this.git3 = P(this.git3, 25), this.git4 = P(this.git4, 25), this.git5 = P(this.git5, 25), this.git6 = P(this.git6, 25), this.git7 = P(this.git7, 25)), this.gitInv0 = this.gitInv0 || A(this.git0), this.gitInv1 = this.gitInv1 || A(this.git1), this.gitInv2 = this.gitInv2 || A(this.git2), this.gitInv3 = this.gitInv3 || A(this.git3), this.gitInv4 = this.gitInv4 || A(this.git4), this.gitInv5 = this.gitInv5 || A(this.git5), this.gitInv6 = this.gitInv6 || A(this.git6), this.gitInv7 = this.gitInv7 || A(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ne, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || qe;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(fi, "Theme"), fi), wC = /* @__PURE__ */ p((e) => {
  const t = new kC();
  return t.calculate(e), t;
}, "getThemeVariables"), pi, SC = (pi = class {
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = pt("#28253D", this.darkMode), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.clusterBkg = "#F9F9FB", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.filterColor = "#000000";
  }
  updateColors() {
    var o, a, n, l, h, c, u, f, d, g, m;
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || pt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || pt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#FEF9C3", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || A(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || A(this.tertiaryColor), this.lineColor = this.lineColor || A(this.background), this.arrowheadColor = this.arrowheadColor || A(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.noteFontWeight = 600, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || P(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || A(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    const t = "#ECECFE", r = "#E9E9F1", i = x(t, { h: 180, l: 5 });
    this.sectionBkgColor = this.sectionBkgColor || i, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || r, this.sectionBkgColor2 = this.sectionBkgColor2 || t, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || t, this.activeTaskBorderColor = this.activeTaskBorderColor || t, this.activeTaskBkgColor = this.activeTaskBkgColor || R(t, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.compositeTitleBackground = "#F9F9FB", this.altBackground = "#F9F9FB", this.stateEdgeLabelBackground = "#FFFFFF", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor;
    for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
      this["cScale" + y] = this.mainBkg;
    if (this.darkMode)
      for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
        this["cScale" + y] = P(this["cScale" + y], 75);
    else
      for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
        this["cScale" + y] = P(this["cScale" + y], 25);
    for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
      this["cScaleInv" + y] = this["cScaleInv" + y] || A(this["cScale" + y]);
    for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
      this.darkMode ? this["cScalePeer" + y] = this["cScalePeer" + y] || R(this["cScale" + y], 10) : this["cScalePeer" + y] = this["cScalePeer" + y] || P(this["cScale" + y], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
      this["cScaleLabel" + y] = this["cScaleLabel" + y] || this.scaleLabelColor;
    const s = this.darkMode ? -4 : -1;
    for (let y = 0; y < 5; y++)
      this["surface" + y] = this["surface" + y] || x(this.mainBkg, { h: 180, s: -15, l: s * (5 + y * 3) }), this["surfacePeer" + y] = this["surfacePeer" + y] || x(this.mainBkg, { h: 180, s: -15, l: s * (8 + y * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || t, this.fillType1 = this.fillType1 || r, this.fillType2 = this.fillType2 || x(t, { h: 64 }), this.fillType3 = this.fillType3 || x(r, { h: 64 }), this.fillType4 = this.fillType4 || x(t, { h: -64 }), this.fillType5 = this.fillType5 || x(r, { h: -64 }), this.fillType6 = this.fillType6 || x(t, { h: 128 }), this.fillType7 = this.fillType7 || x(r, { h: 128 }), this.pie1 = this.pie1 || t, this.pie2 = this.pie2 || r, this.pie3 = this.pie3 || i, this.pie4 = this.pie4 || x(t, { l: -10 }), this.pie5 = this.pie5 || x(r, { l: -10 }), this.pie6 = this.pie6 || x(i, { l: -10 }), this.pie7 = this.pie7 || x(t, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(t, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(t, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(t, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(t, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(t, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || t, this.quadrant2Fill = this.quadrant2Fill || x(t, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(t, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(t, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Le(this.quadrant1Fill) ? R(this.quadrant1Fill) : P(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((o = this.xyChart) == null ? void 0 : o.backgroundColor) || this.background,
      titleColor: ((a = this.xyChart) == null ? void 0 : a.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((h = this.xyChart) == null ? void 0 : h.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((c = this.xyChart) == null ? void 0 : c.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((u = this.xyChart) == null ? void 0 : u.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((f = this.xyChart) == null ? void 0 : f.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((d = this.xyChart) == null ? void 0 : d.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((g = this.xyChart) == null ? void 0 : g.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((m = this.xyChart) == null ? void 0 : m.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || t, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#FFFFFF", this.git0 = this.git0 || t, this.git1 = this.git1 || r, this.git2 = this.git2 || i, this.git3 = this.git3 || x(t, { h: -30 }), this.git4 = this.git4 || x(t, { h: -60 }), this.git5 = this.git5 || x(t, { h: -90 }), this.git6 = this.git6 || x(t, { h: 60 }), this.git7 = this.git7 || x(t, { h: 120 }), this.darkMode ? (this.git0 = R(this.git0, 25), this.git1 = R(this.git1, 25), this.git2 = R(this.git2, 25), this.git3 = R(this.git3, 25), this.git4 = R(this.git4, 25), this.git5 = R(this.git5, 25), this.git6 = R(this.git6, 25), this.git7 = R(this.git7, 25)) : (this.git0 = P(this.git0, 25), this.git1 = P(this.git1, 25), this.git2 = P(this.git2, 25), this.git3 = P(this.git3, 25), this.git4 = P(this.git4, 25), this.git5 = P(this.git5, 25), this.git6 = P(this.git6, 25), this.git7 = P(this.git7, 25)), this.gitInv0 = this.gitInv0 || A(this.git0), this.gitInv1 = this.gitInv1 || A(this.git1), this.gitInv2 = this.gitInv2 || A(this.git2), this.gitInv3 = this.gitInv3 || A(this.git3), this.gitInv4 = this.gitInv4 || A(this.git4), this.gitInv5 = this.gitInv5 || A(this.git5), this.gitInv6 = this.gitInv6 || A(this.git6), this.gitInv7 = this.gitInv7 || A(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ne, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || qe;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(pi, "Theme"), pi), TC = /* @__PURE__ */ p((e) => {
  const t = new SC();
  return t.calculate(e), t;
}, "getThemeVariables"), gi, _C = (gi = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = R(this.primaryColor, 16), this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = A(this.background), this.secondaryBorderColor = pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = pt(this.tertiaryColor, this.darkMode), this.primaryTextColor = A(this.primaryColor), this.secondaryTextColor = A(this.secondaryColor), this.tertiaryTextColor = A(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = R(A("#323D47"), 10), this.border1 = "#ccc", this.border2 = cr(255, 255, 255, 0.25), this.arrowheadColor = A(this.background), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.filterColor = "#FFFFFF";
  }
  updateColors() {
    var r, i, s, o, a, n, l, h, c, u, f;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || pt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || pt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || A(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || A(this.tertiaryColor), this.lineColor = this.lineColor || A(this.background), this.arrowheadColor = this.arrowheadColor || A(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || P(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || A(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || R(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.compositeBackground = "#16141F", this.altBackground = "#16141F", this.compositeTitleBackground = "#16141F", this.stateEdgeLabelBackground = "#16141F", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.darkMode)
      for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
        this["cScale" + d] = P(this["cScale" + d], 75);
    else
      for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
        this["cScale" + d] = P(this["cScale" + d], 25);
    for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
      this["cScaleInv" + d] = this["cScaleInv" + d] || A(this["cScale" + d]);
    for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
      this.darkMode ? this["cScalePeer" + d] = this["cScalePeer" + d] || R(this["cScale" + d], 10) : this["cScalePeer" + d] = this["cScalePeer" + d] || P(this["cScale" + d], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
      this["cScaleLabel" + d] = this["cScaleLabel" + d] || this.scaleLabelColor;
    const t = this.darkMode ? -4 : -1;
    for (let d = 0; d < 5; d++)
      this["surface" + d] = this["surface" + d] || x(this.mainBkg, { h: 180, s: -15, l: t * (5 + d * 3) }), this["surfacePeer" + d] = this["surfacePeer" + d] || x(this.mainBkg, { h: 180, s: -15, l: t * (8 + d * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || x(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || x(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || x(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || x(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || x(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Le(this.quadrant1Fill) ? R(this.quadrant1Fill) : P(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((r = this.xyChart) == null ? void 0 : r.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((a = this.xyChart) == null ? void 0 : a.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#16141F", this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = R(this.git0, 25), this.git1 = R(this.git1, 25), this.git2 = R(this.git2, 25), this.git3 = R(this.git3, 25), this.git4 = R(this.git4, 25), this.git5 = R(this.git5, 25), this.git6 = R(this.git6, 25), this.git7 = R(this.git7, 25)) : (this.git0 = P(this.git0, 25), this.git1 = P(this.git1, 25), this.git2 = P(this.git2, 25), this.git3 = P(this.git3, 25), this.git4 = P(this.git4, 25), this.git5 = P(this.git5, 25), this.git6 = P(this.git6, 25), this.git7 = P(this.git7, 25)), this.gitInv0 = this.gitInv0 || A(this.git0), this.gitInv1 = this.gitInv1 || A(this.git1), this.gitInv2 = this.gitInv2 || A(this.git2), this.gitInv3 = this.gitInv3 || A(this.git3), this.gitInv4 = this.gitInv4 || A(this.git4), this.gitInv5 = this.gitInv5 || A(this.git5), this.gitInv6 = this.gitInv6 || A(this.git6), this.gitInv7 = this.gitInv7 || A(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ne, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || qe;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(gi, "Theme"), gi), BC = /* @__PURE__ */ p((e) => {
  const t = new _C();
  return t.calculate(e), t;
}, "getThemeVariables"), mi, vC = (mi = class {
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = pt(this.primaryColor, this.darkMode), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
      "#E879F9",
      //Fuchsia-400
      "#2DD4BF",
      //Teal-400
      "#FB923C",
      //Orange-400
      "#22D3EE",
      // Cyan-400
      "#4ADE80",
      // Green-400
      "#A78BFA",
      //Violet-400
      "#F87171",
      //red-400
      "#FACC15",
      //yellow-400
      "#818CF8",
      //indigo-400
      "#A3E635 ",
      //Lime-400
      "#38BDF8",
      //Sky-400
      "#FB7185"
      //Rose-400
    ], this.bkgColorArray = [
      "#FDF4FF",
      //Fuchsia-50
      "#F0FDFA",
      //Teal-50
      "#FFF7ED",
      //Orange-50
      "#ECFEFF",
      // Cyan-50
      "#F0FDF4",
      // Green-50
      "#F5F3FF",
      //Violet-50
      "#FEF2F2",
      //red-50
      "#FEFCE8",
      //yellow-50
      "#EEF2FF",
      //indigo-50
      "#F7FEE7",
      //Lime-50
      "#F0F9FF",
      //Sky-50
      "#FFF1F2"
      //Rose-50
    ], this.filterColor = "#000000";
  }
  updateColors() {
    var o, a, n, l, h, c, u, f, d, g, m;
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || pt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || pt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || A(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || A(this.tertiaryColor), this.lineColor = this.lineColor || A(this.background), this.arrowheadColor = this.arrowheadColor || A(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || P(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || A(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    const t = "#ECECFE", r = "#E9E9F1", i = x(t, { h: 180, l: 5 });
    this.sectionBkgColor = this.sectionBkgColor || i, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || r, this.sectionBkgColor2 = this.sectionBkgColor2 || t, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || t, this.activeTaskBorderColor = this.activeTaskBorderColor || t, this.activeTaskBkgColor = this.activeTaskBkgColor || R(t, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
    for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
      this["cScaleInv" + y] = this["cScaleInv" + y] || A(this["cScale" + y]);
    for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
      this.darkMode ? this["cScalePeer" + y] = this["cScalePeer" + y] || R(this["cScale" + y], 10) : this["cScalePeer" + y] = this["cScalePeer" + y] || P(this["cScale" + y], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let y = 0; y < this.THEME_COLOR_LIMIT; y++)
      this["cScaleLabel" + y] = this["cScaleLabel" + y] || this.scaleLabelColor;
    const s = this.darkMode ? -4 : -1;
    for (let y = 0; y < 5; y++)
      this["surface" + y] = this["surface" + y] || x(this.mainBkg, { h: 180, s: -15, l: s * (5 + y * 3) }), this["surfacePeer" + y] = this["surfacePeer" + y] || x(this.mainBkg, { h: 180, s: -15, l: s * (8 + y * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || t, this.fillType1 = this.fillType1 || r, this.fillType2 = this.fillType2 || x(t, { h: 64 }), this.fillType3 = this.fillType3 || x(r, { h: 64 }), this.fillType4 = this.fillType4 || x(t, { h: -64 }), this.fillType5 = this.fillType5 || x(r, { h: -64 }), this.fillType6 = this.fillType6 || x(t, { h: 128 }), this.fillType7 = this.fillType7 || x(r, { h: 128 }), this.pie1 = this.pie1 || t, this.pie2 = this.pie2 || r, this.pie3 = this.pie3 || i, this.pie4 = this.pie4 || x(t, { l: -10 }), this.pie5 = this.pie5 || x(r, { l: -10 }), this.pie6 = this.pie6 || x(i, { l: -10 }), this.pie7 = this.pie7 || x(t, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(t, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(t, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(t, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(t, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(t, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || t, this.quadrant2Fill = this.quadrant2Fill || x(t, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(t, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(t, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Le(this.quadrant1Fill) ? R(this.quadrant1Fill) : P(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((o = this.xyChart) == null ? void 0 : o.backgroundColor) || this.background,
      titleColor: ((a = this.xyChart) == null ? void 0 : a.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((h = this.xyChart) == null ? void 0 : h.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((c = this.xyChart) == null ? void 0 : c.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((u = this.xyChart) == null ? void 0 : u.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((f = this.xyChart) == null ? void 0 : f.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((d = this.xyChart) == null ? void 0 : d.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((g = this.xyChart) == null ? void 0 : g.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((m = this.xyChart) == null ? void 0 : m.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || t, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || t, this.git1 = this.git1 || r, this.git2 = this.git2 || i, this.git3 = this.git3 || x(t, { h: -30 }), this.git4 = this.git4 || x(t, { h: -60 }), this.git5 = this.git5 || x(t, { h: -90 }), this.git6 = this.git6 || x(t, { h: 60 }), this.git7 = this.git7 || x(t, { h: 120 }), this.darkMode ? (this.git0 = R(this.git0, 25), this.git1 = R(this.git1, 25), this.git2 = R(this.git2, 25), this.git3 = R(this.git3, 25), this.git4 = R(this.git4, 25), this.git5 = R(this.git5, 25), this.git6 = R(this.git6, 25), this.git7 = R(this.git7, 25)) : (this.git0 = P(this.git0, 25), this.git1 = P(this.git1, 25), this.git2 = P(this.git2, 25), this.git3 = P(this.git3, 25), this.git4 = P(this.git4, 25), this.git5 = P(this.git5, 25), this.git6 = P(this.git6, 25), this.git7 = P(this.git7, 25)), this.gitInv0 = this.gitInv0 || A(this.git0), this.gitInv1 = this.gitInv1 || A(this.git1), this.gitInv2 = this.gitInv2 || A(this.git2), this.gitInv3 = this.gitInv3 || A(this.git3), this.gitInv4 = this.gitInv4 || A(this.git4), this.gitInv5 = this.gitInv5 || A(this.git5), this.gitInv6 = this.gitInv6 || A(this.git6), this.gitInv7 = this.gitInv7 || A(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.fontWeight = 600, this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ne, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || qe;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(mi, "Theme"), mi), LC = /* @__PURE__ */ p((e) => {
  const t = new vC();
  return t.calculate(e), t;
}, "getThemeVariables"), yi, FC = (yi = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = R(this.primaryColor, 16), this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = A(this.background), this.secondaryBorderColor = pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = pt(this.tertiaryColor, this.darkMode), this.primaryTextColor = A(this.primaryColor), this.secondaryTextColor = A(this.secondaryColor), this.tertiaryTextColor = A(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = R(A("#323D47"), 10), this.border1 = "#ccc", this.border2 = cr(255, 255, 255, 0.25), this.arrowheadColor = A(this.background), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
      "#E879F9",
      //Fuchsia-400
      "#2DD4BF",
      //Teal-400
      "#FB923C",
      //Orange-400
      "#22D3EE",
      // Cyan-400
      "#4ADE80",
      // Green-400
      "#A78BFA",
      //Violet-400
      "#F87171",
      //red-400
      "#FACC15",
      //yellow-400
      "#818CF8",
      //indigo-400
      "#A3E635 ",
      //Lime-400
      "#38BDF8",
      //Sky-400
      "#FB7185"
      //Rose-400
    ], this.bkgColorArray = [], this.filterColor = "#FFFFFF";
  }
  updateColors() {
    var r, i, s, o, a, n, l, h, c, u, f;
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || pt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || pt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || A(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || A(this.tertiaryColor), this.lineColor = this.lineColor || A(this.background), this.arrowheadColor = this.arrowheadColor || A(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || P(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || A(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.rootLabelColor = "#FFFFFF", this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || R(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
    for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
      this["cScaleInv" + d] = this["cScaleInv" + d] || A(this["cScale" + d]);
    for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
      this.darkMode ? this["cScalePeer" + d] = this["cScalePeer" + d] || R(this["cScale" + d], 10) : this["cScalePeer" + d] = this["cScalePeer" + d] || P(this["cScale" + d], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let d = 0; d < this.THEME_COLOR_LIMIT; d++)
      this["cScaleLabel" + d] = P(this["cScale" + d], 75);
    const t = this.darkMode ? -4 : -1;
    for (let d = 0; d < 5; d++)
      this["surface" + d] = this["surface" + d] || x(this.mainBkg, { h: 180, s: -15, l: t * (5 + d * 3) }), this["surfacePeer" + d] = this["surfacePeer" + d] || x(this.mainBkg, { h: 180, s: -15, l: t * (8 + d * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || x(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || x(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || x(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || x(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || x(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Le(this.quadrant1Fill) ? R(this.quadrant1Fill) : P(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((r = this.xyChart) == null ? void 0 : r.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((a = this.xyChart) == null ? void 0 : a.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? P(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = R(this.git0, 25), this.git1 = R(this.git1, 25), this.git2 = R(this.git2, 25), this.git3 = R(this.git3, 25), this.git4 = R(this.git4, 25), this.git5 = R(this.git5, 25), this.git6 = R(this.git6, 25), this.git7 = R(this.git7, 25)) : (this.git0 = P(this.git0, 25), this.git1 = P(this.git1, 25), this.git2 = P(this.git2, 25), this.git3 = P(this.git3, 25), this.git4 = P(this.git4, 25), this.git5 = P(this.git5, 25), this.git6 = P(this.git6, 25), this.git7 = P(this.git7, 25)), this.gitInv0 = this.gitInv0 || A(this.git0), this.gitInv1 = this.gitInv1 || A(this.git1), this.gitInv2 = this.gitInv2 || A(this.git2), this.gitInv3 = this.gitInv3 || A(this.git3), this.gitInv4 = this.gitInv4 || A(this.git4), this.gitInv5 = this.gitInv5 || A(this.git5), this.gitInv6 = this.gitInv6 || A(this.git6), this.gitInv7 = this.gitInv7 || A(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.fontWeight = 600, this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ne, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || qe;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(yi, "Theme"), yi), AC = /* @__PURE__ */ p((e) => {
  const t = new FC();
  return t.calculate(e), t;
}, "getThemeVariables"), Ke = {
  base: {
    getThemeVariables: cC
  },
  dark: {
    getThemeVariables: dC
  },
  default: {
    getThemeVariables: pC
  },
  forest: {
    getThemeVariables: mC
  },
  neutral: {
    getThemeVariables: CC
  },
  neo: {
    getThemeVariables: bC
  },
  "neo-dark": {
    getThemeVariables: wC
  },
  redux: {
    getThemeVariables: TC
  },
  "redux-dark": {
    getThemeVariables: BC
  },
  "redux-color": {
    getThemeVariables: LC
  },
  "redux-dark-color": {
    getThemeVariables: AC
  }
}, jt = {
  flowchart: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: null,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200,
    inheritDir: !1
  },
  swimlane: {
    useMaxWidth: !0,
    lineHops: "arc",
    ignoreCrossLaneEdges: !0,
    optimizeRanksByCrossings: !0,
    automaticLaneOrdering: !1
  },
  sequence: {
    useMaxWidth: !0,
    hideUnusedParticipants: !1,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: !0,
    forceMenus: !1,
    bottomMarginAdj: 1,
    rightAngles: !1,
    showSequenceNumbers: !1,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: !1,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: !1,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    maxLabelWidth: 360,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    titleColor: "",
    titleFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    titleFontSize: "4ex"
  },
  class: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    arrowMarkerAbsolute: !1,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: !1,
    hideEmptyMembersBox: !1,
    hierarchicalNamespaces: !0
  },
  state: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    nodeSpacing: 140,
    rankSpacing: 80,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: !0,
    textPosition: 0.75,
    donutHole: 0,
    legendPosition: "right",
    highlightSlice: ""
  },
  quadrantChart: {
    useMaxWidth: !0,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: !0,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showDataLabel: !1,
    showDataLabelOutsideBar: !1,
    showTitle: !0,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2,
      labelRotation: 0
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2,
      labelRotation: 0
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: !0,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: !0,
    padding: 10,
    maxNodeWidth: 200,
    layoutAlgorithm: "cose-bilkent"
  },
  ishikawa: {
    useMaxWidth: !0,
    diagramPadding: 20
  },
  kanban: {
    useMaxWidth: !0,
    padding: 8,
    sectionWidth: 200,
    ticketBaseUrl: ""
  },
  timeline: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: !1
  },
  gitGraph: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: !0,
    showBranches: !0,
    rotateCommitLabel: !0,
    parallelCommits: !1,
    arrowMarkerAbsolute: !1
  },
  c4: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: !0,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: !0,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: !0,
    prefix: "",
    suffix: "",
    nodeWidth: 10,
    nodePadding: 12,
    labelStyle: "legacy"
  },
  block: {
    useMaxWidth: !0,
    padding: 8
  },
  packet: {
    useMaxWidth: !0,
    rowHeight: 32,
    bitWidth: 32,
    bitsPerRow: 32,
    showBits: !0,
    paddingX: 5,
    paddingY: 5
  },
  treeView: {
    useMaxWidth: !0,
    rowIndent: 10,
    paddingX: 5,
    paddingY: 5,
    lineThickness: 1,
    showIcons: !1,
    defaultIconPack: "",
    filenameIcons: {},
    extensionIcons: {}
  },
  architecture: {
    useMaxWidth: !0,
    padding: 40,
    iconSize: 80,
    fontSize: 16,
    randomize: !1,
    nodeSeparation: 75,
    idealEdgeLengthMultiplier: 1.5,
    edgeElasticity: 0.45,
    numIter: 2500,
    seed: 1
  },
  eventmodeling: {
    useMaxWidth: !0,
    padding: 30,
    rowHeight: 32
  },
  radar: {
    useMaxWidth: !0,
    width: 600,
    height: 600,
    marginTop: 50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,
    axisScaleFactor: 1,
    axisLabelFactor: 1.05,
    curveTension: 0.17
  },
  venn: {
    useMaxWidth: !0,
    width: 800,
    height: 450,
    padding: 8,
    useDebugLayout: !1
  },
  cynefin: {
    useMaxWidth: !0,
    width: 800,
    height: 600,
    padding: 40,
    showDomainDescriptions: !0,
    boundaryAmplitude: 8,
    seed: 0
  },
  theme: "default",
  look: "classic",
  handDrawnSeed: 0,
  layout: "dagre",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: !1,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: !0,
  arrowMarkerAbsolute: !1,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "suppressErrorRendering",
    "maxEdges"
  ],
  legacyMathML: !1,
  forceLegacyMathML: !1,
  deterministicIds: !1,
  fontSize: 16,
  markdownAutoWrap: !0,
  suppressErrorRendering: !1
}, Lu = {
  ...jt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  elk: {
    // mergeEdges is needed here to be considered
    mergeEdges: !1,
    nodePlacementStrategy: "BRANDES_KOEPF",
    forceNodeModelOrder: !1,
    considerModelOrder: "NODES_AND_EDGES"
  },
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: Ke.default.getThemeVariables(),
  sequence: {
    ...jt.sequence,
    messageFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont"),
    noteFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    }, "noteFont"),
    actorFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }, "actorFont")
  },
  class: {
    hideEmptyMembersBox: !1,
    hierarchicalNamespaces: !0
  },
  gantt: {
    ...jt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...jt.c4,
    useWidth: void 0,
    personFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    }, "personFont"),
    flowchart: {
      ...jt.flowchart,
      inheritDir: !1
      // default to legacy behavior
    },
    external_personFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    }, "external_personFont"),
    systemFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    }, "systemFont"),
    external_systemFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    }, "external_systemFont"),
    system_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    }, "system_dbFont"),
    external_system_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    }, "external_system_dbFont"),
    system_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    }, "system_queueFont"),
    external_system_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    }, "external_system_queueFont"),
    containerFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    }, "containerFont"),
    external_containerFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    }, "external_containerFont"),
    container_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    }, "container_dbFont"),
    external_container_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    }, "external_container_dbFont"),
    container_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    }, "container_queueFont"),
    external_container_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    }, "external_container_queueFont"),
    componentFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    }, "componentFont"),
    external_componentFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    }, "external_componentFont"),
    component_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    }, "component_dbFont"),
    external_component_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    }, "external_component_dbFont"),
    component_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    }, "component_queueFont"),
    external_component_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    }, "external_component_queueFont"),
    boundaryFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    }, "boundaryFont"),
    messageFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont")
  },
  pie: {
    ...jt.pie,
    useWidth: 984
  },
  xyChart: {
    ...jt.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...jt.requirement,
    useWidth: void 0
  },
  packet: {
    ...jt.packet
  },
  eventmodeling: {
    ...jt.eventmodeling
  },
  treeView: {
    ...jt.treeView,
    useWidth: void 0
  },
  radar: {
    ...jt.radar
  },
  railroad: {
    ...jt.railroad,
    // Railroad colors and typography derive from the active theme unless explicitly overridden.
    fontSize: void 0,
    fontFamily: void 0,
    terminalFill: void 0,
    terminalStroke: void 0,
    terminalTextColor: void 0,
    nonTerminalFill: void 0,
    nonTerminalStroke: void 0,
    nonTerminalTextColor: void 0,
    lineColor: void 0,
    markerFill: void 0,
    commentFill: void 0,
    commentStroke: void 0,
    commentTextColor: void 0,
    specialFill: void 0,
    specialStroke: void 0,
    ruleNameColor: void 0
  },
  ishikawa: {
    ...jt.ishikawa
  },
  sankey: {
    ...jt.sankey,
    // Set so that `configKeys` includes this key for sanitizeDirective
    nodeColors: void 0
  },
  treemap: {
    useMaxWidth: !0,
    padding: 10,
    diagramPadding: 8,
    showValues: !0,
    nodeWidth: 100,
    nodeHeight: 40,
    borderWidth: 1,
    valueFontSize: 12,
    labelFontSize: 14,
    valueFormat: ","
  },
  venn: {
    ...jt.venn
  },
  cynefin: {
    ...jt.cynefin
  }
}, Fu = /* @__PURE__ */ p((e, t = "") => Object.keys(e).reduce((r, i) => Array.isArray(e[i]) ? r : typeof e[i] == "object" && e[i] !== null ? [...r, t + i, ...Fu(e[i], "")] : [...r, t + i], []), "keyify"), MC = new Set(Fu(Lu, "")), Au = Lu, EC = {
  // CSS colors (sankey)
  nodeColors: /^#[\da-f]{3,8}$|^rgb\([\d\s%,.]+\)$|^hsl\([\d\s%,.]+\)$|^[a-z]+$/i,
  // iconify icon references (treeView filenameIcons/extensionIcons)
  filenameIcons: /^[\w-]+(?::[\w-]+)?$/,
  extensionIcons: /^[\w-]+(?::[\w-]+)?$/
}, $C = /* @__PURE__ */ p((e, t) => {
  for (const r of Object.keys(e)) {
    const i = e[r];
    (r.startsWith("__") || r.includes("proto") || r.includes("constr") || typeof i != "string" || !t.test(i)) && (U.debug("sanitize deleting dictionary entry:", r, i), delete e[r]);
  }
}, "sanitizeDictionaryConfig"), uo = /* @__PURE__ */ p((e) => {
  if (U.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
    if (Array.isArray(e)) {
      e.forEach((t) => uo(t));
      return;
    }
    for (const t of Object.keys(e)) {
      if (U.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !MC.has(t) || e[t] == null) {
        U.debug("sanitize deleting key: ", t), delete e[t];
        continue;
      }
      if (typeof e[t] == "object") {
        const i = EC[t];
        i ? $C(e[t], i) : (U.debug("sanitizing object", t), uo(e[t]));
        continue;
      }
      const r = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const i of r)
        t.includes(i) && (U.debug("sanitizing css option", t), e[t] = Mu(e[t]));
    }
    if (e.themeVariables)
      for (const t of Object.keys(e.themeVariables)) {
        const r = e.themeVariables[t];
        r != null && r.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
      }
    U.debug("After sanitization", e);
  }
}, "sanitizeDirective"), Mu = /* @__PURE__ */ p((e) => {
  let t = 0, r = 0;
  for (const i of e) {
    if (t < r)
      return "{ /* ERROR: Unbalanced CSS */ }";
    i === "{" ? t++ : i === "}" && r++;
  }
  return t !== r ? "{ /* ERROR: Unbalanced CSS */ }" : e;
}, "sanitizeCss"), wi = Object.freeze(Au), We = /* @__PURE__ */ p((e) => !(e === !1 || ["false", "null", "0"].includes(String(e).trim().toLowerCase())), "evaluate"), he = zt({}, wi), fo, Er = [], rs = zt({}, wi), Yo = /* @__PURE__ */ p((e, t) => {
  let r = zt({}, e), i = {};
  for (const s of t)
    Ou(s), i = zt(i, s);
  if (r = zt(r, i), i.theme && i.theme in Ke) {
    const s = zt({}, fo), o = zt(
      s.themeVariables || {},
      i.themeVariables
    );
    r.theme && r.theme in Ke && (r.themeVariables = Ke[r.theme].getThemeVariables(o));
  }
  return rs = r, Iu(rs), rs;
}, "updateCurrentConfig"), OC = /* @__PURE__ */ p((e) => (he = zt({}, wi), he = zt(he, e), e.theme && Ke[e.theme] && (he.themeVariables = Ke[e.theme].getThemeVariables(e.themeVariables)), Yo(he, Er), he), "setSiteConfig"), DC = /* @__PURE__ */ p((e) => {
  fo = zt({}, e);
}, "saveConfigFromInitialize"), IC = /* @__PURE__ */ p((e) => (he = zt(he, e), Yo(he, Er), he), "updateSiteConfig"), Eu = /* @__PURE__ */ p(() => zt({}, he), "getSiteConfig"), $u = /* @__PURE__ */ p((e) => (Iu(e), zt(rs, e), Ot()), "setConfig"), Ot = /* @__PURE__ */ p(() => zt({}, rs), "getConfig"), Ou = /* @__PURE__ */ p((e) => {
  e && (["secure", ...he.secure ?? []].forEach((t) => {
    Object.hasOwn(e, t) && (U.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
  }), Object.keys(e).forEach((t) => {
    t.startsWith("__") && delete e[t];
  }), Object.keys(e).forEach((t) => {
    typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && Ou(e[t]);
  }));
}, "sanitize"), RC = /* @__PURE__ */ p((e) => {
  var t;
  uo(e), e.fontFamily && !((t = e.themeVariables) != null && t.fontFamily) && (e.themeVariables = {
    ...e.themeVariables,
    fontFamily: e.fontFamily
  }), Er.push(e), Yo(he, Er);
}, "addDirective"), po = /* @__PURE__ */ p((e = he) => {
  Er = [], Yo(e, Er);
}, "reset"), PC = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.",
  FLOWCHART_HTML_LABELS_DEPRECATED: "flowchart.htmlLabels is deprecated. Please use global htmlLabels instead."
}, Vh = {}, Du = /* @__PURE__ */ p((e) => {
  Vh[e] || (U.warn(PC[e]), Vh[e] = !0);
}, "issueWarning"), Iu = /* @__PURE__ */ p((e) => {
  e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && Du("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), vF = /* @__PURE__ */ p(() => {
  let e = {};
  fo && (e = zt(e, fo));
  for (const t of Er)
    e = zt(e, t);
  return e;
}, "getUserDefinedConfig"), se = /* @__PURE__ */ p((e) => {
  var t, r;
  return ((t = e.flowchart) == null ? void 0 : t.htmlLabels) != null && Du("FLOWCHART_HTML_LABELS_DEPRECATED"), We(e.htmlLabels ?? ((r = e.flowchart) == null ? void 0 : r.htmlLabels) ?? !0);
}, "getEffectiveHtmlLabels"), Ru = /^([^\S\n\r]*)-{3}\s*[\n\r](.*?)[\n\r]\1-{3}\s*[\n\r]+/s, is = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, NC = /\s*%%.*\n/gm, Ci, Pu = (Ci = class extends Error {
  constructor(t) {
    super(t), this.name = "UnknownDiagramError";
  }
}, p(Ci, "UnknownDiagramError"), Ci), $r = {}, sl = /* @__PURE__ */ p(function(e, t) {
  e = e.replace(Ru, "").replace(is, "").replace(NC, `
`);
  for (const [r, { detector: i }] of Object.entries($r))
    if (i(e, t))
      return r;
  throw new Pu(
    `No diagram type detected matching given configuration for text: ${e}`
  );
}, "detectType"), an = /* @__PURE__ */ p((...e) => {
  for (const { id: t, detector: r, loader: i } of e)
    Nu(t, r, i);
}, "registerLazyLoadedDiagrams"), Nu = /* @__PURE__ */ p((e, t, r) => {
  $r[e] && U.warn(`Detector with key ${e} already exists. Overwriting.`), $r[e] = { detector: t, loader: r }, U.debug(`Detector with key ${e} added${r ? " with loader" : ""}`);
}, "addDetector"), qC = /* @__PURE__ */ p((e) => $r[e].loader, "getDiagramLoader"), xs = /<br\s*\/?>/gi, WC = /* @__PURE__ */ p((e) => e ? zu(e).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), zC = /* @__PURE__ */ (() => {
  let e = !1;
  return () => {
    e || (qu(), e = !0);
  };
})();
function qu() {
  const e = "data-temp-href-target";
  ki.addHook("beforeSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
  }), ki.addHook("afterSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
  });
}
p(qu, "setupDompurifyHooks");
var Wu = /* @__PURE__ */ p((e) => (zC(), ki.sanitize(e)), "removeScript"), Zh = /* @__PURE__ */ p((e, t) => {
  if (se(t)) {
    const r = t.securityLevel;
    r === "antiscript" || r === "strict" || r === "sandbox" ? e = Wu(e) : r !== "loose" && (e = zu(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = jC(e));
  }
  return e;
}, "sanitizeMore"), ve = /* @__PURE__ */ p((e, t) => e && (t.dompurifyConfig ? e = ki.sanitize(Zh(e, t), t.dompurifyConfig).toString() : e = ki.sanitize(Zh(e, t), {
  FORBID_TAGS: ["style"]
}).toString(), e), "sanitizeText"), HC = /* @__PURE__ */ p((e, t) => typeof e == "string" ? ve(e, t) : e.flat().map((r) => ve(r, t)), "sanitizeTextOrArray"), YC = /* @__PURE__ */ p((e) => xs.test(e), "hasBreaks"), UC = /* @__PURE__ */ p((e) => e.split(xs), "splitBreaks"), jC = /* @__PURE__ */ p((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), zu = /* @__PURE__ */ p((e) => e.replace(xs, "#br#"), "breakToPlaceholder"), GC = /* @__PURE__ */ p((e) => {
  let t = "";
  return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = CSS.escape(t)), t;
}, "getUrl"), XC = /* @__PURE__ */ p(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.max(...t);
}, "getMax"), VC = /* @__PURE__ */ p(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.min(...t);
}, "getMin"), Kh = /* @__PURE__ */ p(function(e) {
  const t = e.split(/(,)/), r = [];
  for (let i = 0; i < t.length; i++) {
    let s = t[i];
    if (s === "," && i > 0 && i + 1 < t.length) {
      const o = t[i - 1], a = t[i + 1];
      ZC(o, a) && (s = o + "," + a, i++, r.pop());
    }
    r.push(KC(s));
  }
  return r.join("");
}, "parseGenericTypes"), nn = /* @__PURE__ */ p((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence"), ZC = /* @__PURE__ */ p((e, t) => {
  const r = nn(e, "~"), i = nn(t, "~");
  return r === 1 && i === 1;
}, "shouldCombineSets"), KC = /* @__PURE__ */ p((e) => {
  const t = nn(e, "~");
  let r = !1;
  if (t <= 1)
    return e;
  t % 2 !== 0 && e.startsWith("~") && (e = e.substring(1), r = !0);
  const i = [...e];
  let s = i.indexOf("~"), o = i.lastIndexOf("~");
  for (; s !== -1 && o !== -1 && s !== o; )
    i[s] = "<", i[o] = ">", s = i.indexOf("~"), o = i.lastIndexOf("~");
  return r && i.unshift("~"), i.join("");
}, "processSet"), Qh = /* @__PURE__ */ p(() => window.MathMLElement !== void 0, "isMathMLSupported"), ln = /\$\$(.*?)\$\$/g, ns = /* @__PURE__ */ p((e) => {
  var t;
  return (((t = e.match(ln)) == null ? void 0 : t.length) ?? 0) > 0;
}, "hasKatex"), LF = /* @__PURE__ */ p(async (e, t) => {
  const r = document.createElement("div");
  r.innerHTML = await Hu(e, t), r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0";
  const i = document.querySelector("body");
  i == null || i.insertAdjacentElement("beforeend", r);
  const s = { width: r.clientWidth, height: r.clientHeight };
  return r.remove(), s;
}, "calculateMathMLDimensions"), QC = /* @__PURE__ */ p(async (e, t) => {
  if (!ns(e))
    return e;
  if (!(Qh() || t.legacyMathML || t.forceLegacyMathML))
    return e.replace(ln, "MathML is unsupported in this environment.");
  {
    const { default: r } = await import("./katex-jHfnQmlp.js"), i = t.forceLegacyMathML || !Qh() && t.legacyMathML ? "htmlAndMathml" : "mathml";
    return e.split(xs).map(
      (s) => ns(s) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${s}</div>` : `<div>${s}</div>`
    ).join("").replace(
      ln,
      (s, o) => r.renderToString(o, {
        throwOnError: !0,
        displayMode: !0,
        output: i
      }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
    );
  }
}, "renderKatexUnsanitized"), Hu = /* @__PURE__ */ p(async (e, t) => ve(await QC(e, t), t), "renderKatexSanitized"), bs = {
  getRows: WC,
  sanitizeText: ve,
  sanitizeTextOrArray: HC,
  hasBreaks: YC,
  splitBreaks: UC,
  lineBreakRegex: xs,
  removeScript: Wu,
  getUrl: GC,
  evaluate: We,
  getMax: XC,
  getMin: VC
}, JC = /* @__PURE__ */ p(function(e, t) {
  for (let r of t)
    e.attr(r[0], r[1]);
}, "d3Attrs"), tx = /* @__PURE__ */ p(function(e, t, r) {
  let i = /* @__PURE__ */ new Map();
  return r ? (i.set("width", "100%"), i.set("style", `max-width: ${t}px;`)) : (i.set("height", e), i.set("width", t)), i;
}, "calculateSvgSizeAttrs"), Yu = /* @__PURE__ */ p(function(e, t, r, i) {
  const s = tx(t, r, i);
  JC(e, s);
}, "configureSvgSize"), ex = /* @__PURE__ */ p(function(e, t, r, i) {
  const s = t.node().getBBox(), o = s.width, a = s.height;
  U.info(`SVG bounds: ${o}x${a}`, s);
  let n = 0, l = 0;
  U.info(`Graph bounds: ${n}x${l}`, e), n = o + r * 2, l = a + r * 2, U.info(`Calculated bounds: ${n}x${l}`), Yu(t, l, n, i);
  const h = `${s.x - r} ${s.y - r} ${s.width + 2 * r} ${s.height + 2 * r}`;
  t.attr("viewBox", h);
}, "setupGraphViewbox"), Js = {};
function hn(e) {
  return [...e.cssRules].map((t) => t.cssText).join(`
`);
}
p(hn, "cssStyleSheetToString");
var rx = /* @__PURE__ */ p((e, t, r, i) => {
  let s = "";
  return e in Js && Js[e] ? s = Js[e]({ ...r, svgId: i }) : U.warn(`No theme found for ${e}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: ${r.strokeWidth ?? 1}px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${s}
  .node .neo-node {
    stroke: ${r.nodeBorder};
  }

  [data-look="neo"].node rect, [data-look="neo"].cluster rect, [data-look="neo"].node polygon {
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }
  [data-look="neo"].swimlane.cluster rect {
    filter: none;
  }


  [data-look="neo"].node path {
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    stroke-width: ${r.strokeWidth ?? 1}px;
  }

  [data-look="neo"].node .outer-path {
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node .neo-line path {
    stroke: ${r.nodeBorder};
    filter: none;
  }

  [data-look="neo"].node circle{
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node circle .state-start{
    fill: #000000;
  }

  [data-look="neo"].icon-shape .icon {
    fill: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

    [data-look="neo"].icon-shape .icon-neo path {
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

  ${t}
`;
}, "getStyles"), ix = /* @__PURE__ */ p((e, t) => {
  t !== void 0 && (Js[e] = t);
}, "addStylesForDiagram"), sx = rx, Uu = {};
x0(Uu, {
  clear: () => ox,
  getAccDescription: () => hx,
  getAccTitle: () => nx,
  getDiagramTitle: () => ux,
  setAccDescription: () => lx,
  setAccTitle: () => ax,
  setDiagramTitle: () => cx
});
var ol = "", al = "", nl = "", ll = /* @__PURE__ */ p((e) => ve(e, Ot()), "sanitizeText"), ox = /* @__PURE__ */ p(() => {
  ol = "", nl = "", al = "";
}, "clear"), ax = /* @__PURE__ */ p((e) => {
  ol = ll(e).replace(/^\s+/g, "");
}, "setAccTitle"), nx = /* @__PURE__ */ p(() => ol, "getAccTitle"), lx = /* @__PURE__ */ p((e) => {
  nl = ll(e).replace(/\n\s+/g, `
`);
}, "setAccDescription"), hx = /* @__PURE__ */ p(() => nl, "getAccDescription"), cx = /* @__PURE__ */ p((e) => {
  al = ll(e);
}, "setDiagramTitle"), ux = /* @__PURE__ */ p(() => al, "getDiagramTitle"), Jh = U, dx = il, Tt = Ot, FF = $u, AF = wi, hl = /* @__PURE__ */ p((e) => ve(e, Tt()), "sanitizeText"), fx = ex, px = /* @__PURE__ */ p(() => Uu, "getCommonDb"), go = {}, mo = /* @__PURE__ */ p((e, t, r) => {
  var i;
  go[e] && Jh.warn(`Diagram with id ${e} already registered. Overwriting.`), go[e] = t, r && Nu(e, r), ix(e, t.styles), (i = t.injectUtils) == null || i.call(
    t,
    Jh,
    dx,
    Tt,
    hl,
    fx,
    px(),
    () => {
    }
  );
}, "registerDiagram"), cn = /* @__PURE__ */ p((e) => {
  if (e in go)
    return go[e];
  throw new gx(e);
}, "getDiagram"), xi, gx = (xi = class extends Error {
  constructor(t) {
    super(`Diagram ${t} not found.`);
  }
}, p(xi, "DiagramNotFoundError"), xi), mx = { value: () => {
} };
function ju() {
  for (var e = 0, t = arguments.length, r = {}, i; e < t; ++e) {
    if (!(i = arguments[e] + "") || i in r || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new to(r);
}
function to(e) {
  this._ = e;
}
function yx(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var i = "", s = r.indexOf(".");
    if (s >= 0 && (i = r.slice(s + 1), r = r.slice(0, s)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
to.prototype = ju.prototype = {
  constructor: to,
  on: function(e, t) {
    var r = this._, i = yx(e + "", r), s, o = -1, a = i.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((s = (e = i[o]).type) && (s = Cx(r[s], e.name))) return s;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++o < a; )
      if (s = (e = i[o]).type) r[s] = tc(r[s], e.name, t);
      else if (t == null) for (s in r) r[s] = tc(r[s], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new to(e);
  },
  call: function(e, t) {
    if ((s = arguments.length - 2) > 0) for (var r = new Array(s), i = 0, s, o; i < s; ++i) r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (o = this._[e], i = 0, s = o.length; i < s; ++i) o[i].value.apply(t, r);
  },
  apply: function(e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var i = this._[e], s = 0, o = i.length; s < o; ++s) i[s].value.apply(t, r);
  }
};
function Cx(e, t) {
  for (var r = 0, i = e.length, s; r < i; ++r)
    if ((s = e[r]).name === t)
      return s.value;
}
function tc(e, t, r) {
  for (var i = 0, s = e.length; i < s; ++i)
    if (e[i].name === t) {
      e[i] = mx, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var un = "http://www.w3.org/1999/xhtml";
const ec = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: un,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Uo(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), ec.hasOwnProperty(t) ? { space: ec[t], local: e } : e;
}
function xx(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === un && t.documentElement.namespaceURI === un ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function bx(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Gu(e) {
  var t = Uo(e);
  return (t.local ? bx : xx)(t);
}
function kx() {
}
function cl(e) {
  return e == null ? kx : function() {
    return this.querySelector(e);
  };
}
function wx(e) {
  typeof e != "function" && (e = cl(e));
  for (var t = this._groups, r = t.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, n = i[s] = new Array(a), l, h, c = 0; c < a; ++c)
      (l = o[c]) && (h = e.call(l, l.__data__, c, o)) && ("__data__" in l && (h.__data__ = l.__data__), n[c] = h);
  return new ge(i, this._parents);
}
function Sx(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Tx() {
  return [];
}
function Xu(e) {
  return e == null ? Tx : function() {
    return this.querySelectorAll(e);
  };
}
function _x(e) {
  return function() {
    return Sx(e.apply(this, arguments));
  };
}
function Bx(e) {
  typeof e == "function" ? e = _x(e) : e = Xu(e);
  for (var t = this._groups, r = t.length, i = [], s = [], o = 0; o < r; ++o)
    for (var a = t[o], n = a.length, l, h = 0; h < n; ++h)
      (l = a[h]) && (i.push(e.call(l, l.__data__, h, a)), s.push(l));
  return new ge(i, s);
}
function Vu(e) {
  return function() {
    return this.matches(e);
  };
}
function Zu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var vx = Array.prototype.find;
function Lx(e) {
  return function() {
    return vx.call(this.children, e);
  };
}
function Fx() {
  return this.firstElementChild;
}
function Ax(e) {
  return this.select(e == null ? Fx : Lx(typeof e == "function" ? e : Zu(e)));
}
var Mx = Array.prototype.filter;
function Ex() {
  return Array.from(this.children);
}
function $x(e) {
  return function() {
    return Mx.call(this.children, e);
  };
}
function Ox(e) {
  return this.selectAll(e == null ? Ex : $x(typeof e == "function" ? e : Zu(e)));
}
function Dx(e) {
  typeof e != "function" && (e = Vu(e));
  for (var t = this._groups, r = t.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, n = i[s] = [], l, h = 0; h < a; ++h)
      (l = o[h]) && e.call(l, l.__data__, h, o) && n.push(l);
  return new ge(i, this._parents);
}
function Ku(e) {
  return new Array(e.length);
}
function Ix() {
  return new ge(this._enter || this._groups.map(Ku), this._parents);
}
function yo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
yo.prototype = {
  constructor: yo,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Rx(e) {
  return function() {
    return e;
  };
}
function Px(e, t, r, i, s, o) {
  for (var a = 0, n, l = t.length, h = o.length; a < h; ++a)
    (n = t[a]) ? (n.__data__ = o[a], i[a] = n) : r[a] = new yo(e, o[a]);
  for (; a < l; ++a)
    (n = t[a]) && (s[a] = n);
}
function Nx(e, t, r, i, s, o, a) {
  var n, l, h = /* @__PURE__ */ new Map(), c = t.length, u = o.length, f = new Array(c), d;
  for (n = 0; n < c; ++n)
    (l = t[n]) && (f[n] = d = a.call(l, l.__data__, n, t) + "", h.has(d) ? s[n] = l : h.set(d, l));
  for (n = 0; n < u; ++n)
    d = a.call(e, o[n], n, o) + "", (l = h.get(d)) ? (i[n] = l, l.__data__ = o[n], h.delete(d)) : r[n] = new yo(e, o[n]);
  for (n = 0; n < c; ++n)
    (l = t[n]) && h.get(f[n]) === l && (s[n] = l);
}
function qx(e) {
  return e.__data__;
}
function Wx(e, t) {
  if (!arguments.length) return Array.from(this, qx);
  var r = t ? Nx : Px, i = this._parents, s = this._groups;
  typeof e != "function" && (e = Rx(e));
  for (var o = s.length, a = new Array(o), n = new Array(o), l = new Array(o), h = 0; h < o; ++h) {
    var c = i[h], u = s[h], f = u.length, d = zx(e.call(c, c && c.__data__, h, i)), g = d.length, m = n[h] = new Array(g), y = a[h] = new Array(g), C = l[h] = new Array(f);
    r(c, u, m, y, C, d, t);
    for (var b = 0, k = 0, S, T; b < g; ++b)
      if (S = m[b]) {
        for (b >= k && (k = b + 1); !(T = y[k]) && ++k < g; ) ;
        S._next = T || null;
      }
  }
  return a = new ge(a, i), a._enter = n, a._exit = l, a;
}
function zx(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Hx() {
  return new ge(this._exit || this._groups.map(Ku), this._parents);
}
function Yx(e, t, r) {
  var i = this.enter(), s = this, o = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), r == null ? o.remove() : r(o), i && s ? i.merge(s).order() : s;
}
function Ux(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, i = t._groups, s = r.length, o = i.length, a = Math.min(s, o), n = new Array(s), l = 0; l < a; ++l)
    for (var h = r[l], c = i[l], u = h.length, f = n[l] = new Array(u), d, g = 0; g < u; ++g)
      (d = h[g] || c[g]) && (f[g] = d);
  for (; l < s; ++l)
    n[l] = r[l];
  return new ge(n, this._parents);
}
function jx() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var i = e[t], s = i.length - 1, o = i[s], a; --s >= 0; )
      (a = i[s]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Gx(e) {
  e || (e = Xx);
  function t(u, f) {
    return u && f ? e(u.__data__, f.__data__) : !u - !f;
  }
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o) {
    for (var a = r[o], n = a.length, l = s[o] = new Array(n), h, c = 0; c < n; ++c)
      (h = a[c]) && (l[c] = h);
    l.sort(t);
  }
  return new ge(s, this._parents).order();
}
function Xx(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Vx() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Zx() {
  return Array.from(this);
}
function Kx() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], s = 0, o = i.length; s < o; ++s) {
      var a = i[s];
      if (a) return a;
    }
  return null;
}
function Qx() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Jx() {
  return !this.node();
}
function tb(e) {
  for (var t = this._groups, r = 0, i = t.length; r < i; ++r)
    for (var s = t[r], o = 0, a = s.length, n; o < a; ++o)
      (n = s[o]) && e.call(n, n.__data__, o, s);
  return this;
}
function eb(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function rb(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ib(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function sb(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function ob(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function ab(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function nb(e, t) {
  var r = Uo(e);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((t == null ? r.local ? rb : eb : typeof t == "function" ? r.local ? ab : ob : r.local ? sb : ib)(r, t));
}
function Qu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function lb(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function hb(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function cb(e, t, r) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, r);
  };
}
function ub(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? lb : typeof t == "function" ? cb : hb)(e, t, r ?? "")) : Si(this.node(), e);
}
function Si(e, t) {
  return e.style.getPropertyValue(t) || Qu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function db(e) {
  return function() {
    delete this[e];
  };
}
function fb(e, t) {
  return function() {
    this[e] = t;
  };
}
function pb(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function gb(e, t) {
  return arguments.length > 1 ? this.each((t == null ? db : typeof t == "function" ? pb : fb)(e, t)) : this.node()[e];
}
function Ju(e) {
  return e.trim().split(/^|\s+/);
}
function ul(e) {
  return e.classList || new td(e);
}
function td(e) {
  this._node = e, this._names = Ju(e.getAttribute("class") || "");
}
td.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function ed(e, t) {
  for (var r = ul(e), i = -1, s = t.length; ++i < s; ) r.add(t[i]);
}
function rd(e, t) {
  for (var r = ul(e), i = -1, s = t.length; ++i < s; ) r.remove(t[i]);
}
function mb(e) {
  return function() {
    ed(this, e);
  };
}
function yb(e) {
  return function() {
    rd(this, e);
  };
}
function Cb(e, t) {
  return function() {
    (t.apply(this, arguments) ? ed : rd)(this, e);
  };
}
function xb(e, t) {
  var r = Ju(e + "");
  if (arguments.length < 2) {
    for (var i = ul(this.node()), s = -1, o = r.length; ++s < o; ) if (!i.contains(r[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Cb : t ? mb : yb)(r, t));
}
function bb() {
  this.textContent = "";
}
function kb(e) {
  return function() {
    this.textContent = e;
  };
}
function wb(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Sb(e) {
  return arguments.length ? this.each(e == null ? bb : (typeof e == "function" ? wb : kb)(e)) : this.node().textContent;
}
function Tb() {
  this.innerHTML = "";
}
function _b(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Bb(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function vb(e) {
  return arguments.length ? this.each(e == null ? Tb : (typeof e == "function" ? Bb : _b)(e)) : this.node().innerHTML;
}
function Lb() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Fb() {
  return this.each(Lb);
}
function Ab() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Mb() {
  return this.each(Ab);
}
function Eb(e) {
  var t = typeof e == "function" ? e : Gu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function $b() {
  return null;
}
function Ob(e, t) {
  var r = typeof e == "function" ? e : Gu(e), i = t == null ? $b : typeof t == "function" ? t : cl(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Db() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ib() {
  return this.each(Db);
}
function Rb() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Pb() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Nb(e) {
  return this.select(e ? Pb : Rb);
}
function qb(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Wb(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function zb(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    return i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: r };
  });
}
function Hb(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, i = -1, s = t.length, o; r < s; ++r)
        o = t[r], (!e.type || o.type === e.type) && o.name === e.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++i] = o;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function Yb(e, t, r) {
  return function() {
    var i = this.__on, s, o = Wb(t);
    if (i) {
      for (var a = 0, n = i.length; a < n; ++a)
        if ((s = i[a]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = o, s.options = r), s.value = t;
          return;
        }
    }
    this.addEventListener(e.type, o, r), s = { type: e.type, name: e.name, value: t, listener: o, options: r }, i ? i.push(s) : this.__on = [s];
  };
}
function Ub(e, t, r) {
  var i = zb(e + ""), s, o = i.length, a;
  if (arguments.length < 2) {
    var n = this.node().__on;
    if (n) {
      for (var l = 0, h = n.length, c; l < h; ++l)
        for (s = 0, c = n[l]; s < o; ++s)
          if ((a = i[s]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (n = t ? Yb : Hb, s = 0; s < o; ++s) this.each(n(i[s], t, r));
  return this;
}
function id(e, t, r) {
  var i = Qu(e), s = i.CustomEvent;
  typeof s == "function" ? s = new s(t, r) : (s = i.document.createEvent("Event"), r ? (s.initEvent(t, r.bubbles, r.cancelable), s.detail = r.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function jb(e, t) {
  return function() {
    return id(this, e, t);
  };
}
function Gb(e, t) {
  return function() {
    return id(this, e, t.apply(this, arguments));
  };
}
function Xb(e, t) {
  return this.each((typeof t == "function" ? Gb : jb)(e, t));
}
function* Vb() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], s = 0, o = i.length, a; s < o; ++s)
      (a = i[s]) && (yield a);
}
var sd = [null];
function ge(e, t) {
  this._groups = e, this._parents = t;
}
function ks() {
  return new ge([[document.documentElement]], sd);
}
function Zb() {
  return this;
}
ge.prototype = ks.prototype = {
  constructor: ge,
  select: wx,
  selectAll: Bx,
  selectChild: Ax,
  selectChildren: Ox,
  filter: Dx,
  data: Wx,
  enter: Ix,
  exit: Hx,
  join: Yx,
  merge: Ux,
  selection: Zb,
  order: jx,
  sort: Gx,
  call: Vx,
  nodes: Zx,
  node: Kx,
  size: Qx,
  empty: Jx,
  each: tb,
  attr: nb,
  style: ub,
  property: gb,
  classed: xb,
  text: Sb,
  html: vb,
  raise: Fb,
  lower: Mb,
  append: Eb,
  insert: Ob,
  remove: Ib,
  clone: Nb,
  datum: qb,
  on: Ub,
  dispatch: Xb,
  [Symbol.iterator]: Vb
};
function Ct(e) {
  return typeof e == "string" ? new ge([[document.querySelector(e)]], [document.documentElement]) : new ge([[e]], sd);
}
function dl(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function od(e, t) {
  var r = Object.create(e.prototype);
  for (var i in t) r[i] = t[i];
  return r;
}
function ws() {
}
var ls = 0.7, Co = 1 / ls, oi = "\\s*([+-]?\\d+)\\s*", hs = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ie = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Kb = /^#([0-9a-f]{3,8})$/, Qb = new RegExp(`^rgb\\(${oi},${oi},${oi}\\)$`), Jb = new RegExp(`^rgb\\(${Ie},${Ie},${Ie}\\)$`), tk = new RegExp(`^rgba\\(${oi},${oi},${oi},${hs}\\)$`), ek = new RegExp(`^rgba\\(${Ie},${Ie},${Ie},${hs}\\)$`), rk = new RegExp(`^hsl\\(${hs},${Ie},${Ie}\\)$`), ik = new RegExp(`^hsla\\(${hs},${Ie},${Ie},${hs}\\)$`), rc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
dl(ws, cs, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ic,
  // Deprecated! Use color.formatHex.
  formatHex: ic,
  formatHex8: sk,
  formatHsl: ok,
  formatRgb: sc,
  toString: sc
});
function ic() {
  return this.rgb().formatHex();
}
function sk() {
  return this.rgb().formatHex8();
}
function ok() {
  return ad(this).formatHsl();
}
function sc() {
  return this.rgb().formatRgb();
}
function cs(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Kb.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? oc(t) : r === 3 ? new ue(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ns(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ns(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Qb.exec(e)) ? new ue(t[1], t[2], t[3], 1) : (t = Jb.exec(e)) ? new ue(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = tk.exec(e)) ? Ns(t[1], t[2], t[3], t[4]) : (t = ek.exec(e)) ? Ns(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = rk.exec(e)) ? lc(t[1], t[2] / 100, t[3] / 100, 1) : (t = ik.exec(e)) ? lc(t[1], t[2] / 100, t[3] / 100, t[4]) : rc.hasOwnProperty(e) ? oc(rc[e]) : e === "transparent" ? new ue(NaN, NaN, NaN, 0) : null;
}
function oc(e) {
  return new ue(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ns(e, t, r, i) {
  return i <= 0 && (e = t = r = NaN), new ue(e, t, r, i);
}
function ak(e) {
  return e instanceof ws || (e = cs(e)), e ? (e = e.rgb(), new ue(e.r, e.g, e.b, e.opacity)) : new ue();
}
function dn(e, t, r, i) {
  return arguments.length === 1 ? ak(e) : new ue(e, t, r, i ?? 1);
}
function ue(e, t, r, i) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +i;
}
dl(ue, dn, od(ws, {
  brighter(e) {
    return e = e == null ? Co : Math.pow(Co, e), new ue(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ls : Math.pow(ls, e), new ue(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ue(Ar(this.r), Ar(this.g), Ar(this.b), xo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ac,
  // Deprecated! Use color.formatHex.
  formatHex: ac,
  formatHex8: nk,
  formatRgb: nc,
  toString: nc
}));
function ac() {
  return `#${vr(this.r)}${vr(this.g)}${vr(this.b)}`;
}
function nk() {
  return `#${vr(this.r)}${vr(this.g)}${vr(this.b)}${vr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function nc() {
  const e = xo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ar(this.r)}, ${Ar(this.g)}, ${Ar(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function xo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ar(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function vr(e) {
  return e = Ar(e), (e < 16 ? "0" : "") + e.toString(16);
}
function lc(e, t, r, i) {
  return i <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Se(e, t, r, i);
}
function ad(e) {
  if (e instanceof Se) return new Se(e.h, e.s, e.l, e.opacity);
  if (e instanceof ws || (e = cs(e)), !e) return new Se();
  if (e instanceof Se) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, i = e.b / 255, s = Math.min(t, r, i), o = Math.max(t, r, i), a = NaN, n = o - s, l = (o + s) / 2;
  return n ? (t === o ? a = (r - i) / n + (r < i) * 6 : r === o ? a = (i - t) / n + 2 : a = (t - r) / n + 4, n /= l < 0.5 ? o + s : 2 - o - s, a *= 60) : n = l > 0 && l < 1 ? 0 : a, new Se(a, n, l, e.opacity);
}
function lk(e, t, r, i) {
  return arguments.length === 1 ? ad(e) : new Se(e, t, r, i ?? 1);
}
function Se(e, t, r, i) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +i;
}
dl(Se, lk, od(ws, {
  brighter(e) {
    return e = e == null ? Co : Math.pow(Co, e), new Se(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ls : Math.pow(ls, e), new Se(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - i;
    return new ue(
      qa(e >= 240 ? e - 240 : e + 120, s, i),
      qa(e, s, i),
      qa(e < 120 ? e + 240 : e - 120, s, i),
      this.opacity
    );
  },
  clamp() {
    return new Se(hc(this.h), qs(this.s), qs(this.l), xo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = xo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${hc(this.h)}, ${qs(this.s) * 100}%, ${qs(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function hc(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function qs(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function qa(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const fl = (e) => () => e;
function nd(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function hk(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(i) {
    return Math.pow(e + i * t, r);
  };
}
function MF(e, t) {
  var r = t - e;
  return r ? nd(e, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : fl(isNaN(e) ? t : e);
}
function ck(e) {
  return (e = +e) == 1 ? ld : function(t, r) {
    return r - t ? hk(t, r, e) : fl(isNaN(t) ? r : t);
  };
}
function ld(e, t) {
  var r = t - e;
  return r ? nd(e, r) : fl(isNaN(e) ? t : e);
}
const cc = (function e(t) {
  var r = ck(t);
  function i(s, o) {
    var a = r((s = dn(s)).r, (o = dn(o)).r), n = r(s.g, o.g), l = r(s.b, o.b), h = ld(s.opacity, o.opacity);
    return function(c) {
      return s.r = a(c), s.g = n(c), s.b = l(c), s.opacity = h(c), s + "";
    };
  }
  return i.gamma = e, i;
})(1);
function nr(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
var fn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Wa = new RegExp(fn.source, "g");
function uk(e) {
  return function() {
    return e;
  };
}
function dk(e) {
  return function(t) {
    return e(t) + "";
  };
}
function fk(e, t) {
  var r = fn.lastIndex = Wa.lastIndex = 0, i, s, o, a = -1, n = [], l = [];
  for (e = e + "", t = t + ""; (i = fn.exec(e)) && (s = Wa.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), n[a] ? n[a] += o : n[++a] = o), (i = i[0]) === (s = s[0]) ? n[a] ? n[a] += s : n[++a] = s : (n[++a] = null, l.push({ i: a, x: nr(i, s) })), r = Wa.lastIndex;
  return r < t.length && (o = t.slice(r), n[a] ? n[a] += o : n[++a] = o), n.length < 2 ? l[0] ? dk(l[0].x) : uk(t) : (t = l.length, function(h) {
    for (var c = 0, u; c < t; ++c) n[(u = l[c]).i] = u.x(h);
    return n.join("");
  });
}
var uc = 180 / Math.PI, pn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function hd(e, t, r, i, s, o) {
  var a, n, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * r + t * i) && (r -= e * l, i -= t * l), (n = Math.sqrt(r * r + i * i)) && (r /= n, i /= n, l /= n), e * i < t * r && (e = -e, t = -t, l = -l, a = -a), {
    translateX: s,
    translateY: o,
    rotate: Math.atan2(t, e) * uc,
    skewX: Math.atan(l) * uc,
    scaleX: a,
    scaleY: n
  };
}
var Ws;
function pk(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? pn : hd(t.a, t.b, t.c, t.d, t.e, t.f);
}
function gk(e) {
  return e == null || (Ws || (Ws = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ws.setAttribute("transform", e), !(e = Ws.transform.baseVal.consolidate())) ? pn : (e = e.matrix, hd(e.a, e.b, e.c, e.d, e.e, e.f));
}
function cd(e, t, r, i) {
  function s(h) {
    return h.length ? h.pop() + " " : "";
  }
  function o(h, c, u, f, d, g) {
    if (h !== u || c !== f) {
      var m = d.push("translate(", null, t, null, r);
      g.push({ i: m - 4, x: nr(h, u) }, { i: m - 2, x: nr(c, f) });
    } else (u || f) && d.push("translate(" + u + t + f + r);
  }
  function a(h, c, u, f) {
    h !== c ? (h - c > 180 ? c += 360 : c - h > 180 && (h += 360), f.push({ i: u.push(s(u) + "rotate(", null, i) - 2, x: nr(h, c) })) : c && u.push(s(u) + "rotate(" + c + i);
  }
  function n(h, c, u, f) {
    h !== c ? f.push({ i: u.push(s(u) + "skewX(", null, i) - 2, x: nr(h, c) }) : c && u.push(s(u) + "skewX(" + c + i);
  }
  function l(h, c, u, f, d, g) {
    if (h !== u || c !== f) {
      var m = d.push(s(d) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: nr(h, u) }, { i: m - 2, x: nr(c, f) });
    } else (u !== 1 || f !== 1) && d.push(s(d) + "scale(" + u + "," + f + ")");
  }
  return function(h, c) {
    var u = [], f = [];
    return h = e(h), c = e(c), o(h.translateX, h.translateY, c.translateX, c.translateY, u, f), a(h.rotate, c.rotate, u, f), n(h.skewX, c.skewX, u, f), l(h.scaleX, h.scaleY, c.scaleX, c.scaleY, u, f), h = c = null, function(d) {
      for (var g = -1, m = f.length, y; ++g < m; ) u[(y = f[g]).i] = y.x(d);
      return u.join("");
    };
  };
}
var mk = cd(pk, "px, ", "px)", "deg)"), yk = cd(gk, ", ", ")", ")"), Ti = 0, Xi = 0, qi = 0, ud = 1e3, bo, Vi, ko = 0, Or = 0, jo = 0, us = typeof performance == "object" && performance.now ? performance : Date, dd = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function pl() {
  return Or || (dd(Ck), Or = us.now() + jo);
}
function Ck() {
  Or = 0;
}
function wo() {
  this._call = this._time = this._next = null;
}
wo.prototype = fd.prototype = {
  constructor: wo,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? pl() : +r) + (t == null ? 0 : +t), !this._next && Vi !== this && (Vi ? Vi._next = this : bo = this, Vi = this), this._call = e, this._time = r, gn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, gn());
  }
};
function fd(e, t, r) {
  var i = new wo();
  return i.restart(e, t, r), i;
}
function xk() {
  pl(), ++Ti;
  for (var e = bo, t; e; )
    (t = Or - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Ti;
}
function dc() {
  Or = (ko = us.now()) + jo, Ti = Xi = 0;
  try {
    xk();
  } finally {
    Ti = 0, kk(), Or = 0;
  }
}
function bk() {
  var e = us.now(), t = e - ko;
  t > ud && (jo -= t, ko = e);
}
function kk() {
  for (var e, t = bo, r, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : bo = r);
  Vi = e, gn(i);
}
function gn(e) {
  if (!Ti) {
    Xi && (Xi = clearTimeout(Xi));
    var t = e - Or;
    t > 24 ? (e < 1 / 0 && (Xi = setTimeout(dc, e - us.now() - jo)), qi && (qi = clearInterval(qi))) : (qi || (ko = us.now(), qi = setInterval(bk, ud)), Ti = 1, dd(dc));
  }
}
function fc(e, t, r) {
  var i = new wo();
  return t = t == null ? 0 : +t, i.restart((s) => {
    i.stop(), e(s + t);
  }, t, r), i;
}
var wk = ju("start", "end", "cancel", "interrupt"), Sk = [], pd = 0, pc = 1, mn = 2, eo = 3, gc = 4, yn = 5, ro = 6;
function Go(e, t, r, i, s, o) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (r in a) return;
  Tk(e, r, {
    name: t,
    index: i,
    // For context during callback.
    group: s,
    // For context during callback.
    on: wk,
    tween: Sk,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: pd
  });
}
function gl(e, t) {
  var r = Fe(e, t);
  if (r.state > pd) throw new Error("too late; already scheduled");
  return r;
}
function ze(e, t) {
  var r = Fe(e, t);
  if (r.state > eo) throw new Error("too late; already running");
  return r;
}
function Fe(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function Tk(e, t, r) {
  var i = e.__transition, s;
  i[t] = r, r.timer = fd(o, 0, r.time);
  function o(h) {
    r.state = pc, r.timer.restart(a, r.delay, r.time), r.delay <= h && a(h - r.delay);
  }
  function a(h) {
    var c, u, f, d;
    if (r.state !== pc) return l();
    for (c in i)
      if (d = i[c], d.name === r.name) {
        if (d.state === eo) return fc(a);
        d.state === gc ? (d.state = ro, d.timer.stop(), d.on.call("interrupt", e, e.__data__, d.index, d.group), delete i[c]) : +c < t && (d.state = ro, d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete i[c]);
      }
    if (fc(function() {
      r.state === eo && (r.state = gc, r.timer.restart(n, r.delay, r.time), n(h));
    }), r.state = mn, r.on.call("start", e, e.__data__, r.index, r.group), r.state === mn) {
      for (r.state = eo, s = new Array(f = r.tween.length), c = 0, u = -1; c < f; ++c)
        (d = r.tween[c].value.call(e, e.__data__, r.index, r.group)) && (s[++u] = d);
      s.length = u + 1;
    }
  }
  function n(h) {
    for (var c = h < r.duration ? r.ease.call(null, h / r.duration) : (r.timer.restart(l), r.state = yn, 1), u = -1, f = s.length; ++u < f; )
      s[u].call(e, c);
    r.state === yn && (r.on.call("end", e, e.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = ro, r.timer.stop(), delete i[t];
    for (var h in i) return;
    delete e.__transition;
  }
}
function _k(e, t) {
  var r = e.__transition, i, s, o = !0, a;
  if (r) {
    t = t == null ? null : t + "";
    for (a in r) {
      if ((i = r[a]).name !== t) {
        o = !1;
        continue;
      }
      s = i.state > mn && i.state < yn, i.state = ro, i.timer.stop(), i.on.call(s ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete r[a];
    }
    o && delete e.__transition;
  }
}
function Bk(e) {
  return this.each(function() {
    _k(this, e);
  });
}
function vk(e, t) {
  var r, i;
  return function() {
    var s = ze(this, e), o = s.tween;
    if (o !== r) {
      i = r = o;
      for (var a = 0, n = i.length; a < n; ++a)
        if (i[a].name === t) {
          i = i.slice(), i.splice(a, 1);
          break;
        }
    }
    s.tween = i;
  };
}
function Lk(e, t, r) {
  var i, s;
  if (typeof r != "function") throw new Error();
  return function() {
    var o = ze(this, e), a = o.tween;
    if (a !== i) {
      s = (i = a).slice();
      for (var n = { name: t, value: r }, l = 0, h = s.length; l < h; ++l)
        if (s[l].name === t) {
          s[l] = n;
          break;
        }
      l === h && s.push(n);
    }
    o.tween = s;
  };
}
function Fk(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = Fe(this.node(), r).tween, s = 0, o = i.length, a; s < o; ++s)
      if ((a = i[s]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? vk : Lk)(r, e, t));
}
function ml(e, t, r) {
  var i = e._id;
  return e.each(function() {
    var s = ze(this, i);
    (s.value || (s.value = {}))[t] = r.apply(this, arguments);
  }), function(s) {
    return Fe(s, i).value[t];
  };
}
function gd(e, t) {
  var r;
  return (typeof t == "number" ? nr : t instanceof cs ? cc : (r = cs(t)) ? (t = r, cc) : fk)(e, t);
}
function Ak(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Mk(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ek(e, t, r) {
  var i, s = r + "", o;
  return function() {
    var a = this.getAttribute(e);
    return a === s ? null : a === i ? o : o = t(i = a, r);
  };
}
function $k(e, t, r) {
  var i, s = r + "", o;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === s ? null : a === i ? o : o = t(i = a, r);
  };
}
function Ok(e, t, r) {
  var i, s, o;
  return function() {
    var a, n = r(this), l;
    return n == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = n + "", a === l ? null : a === i && l === s ? o : (s = l, o = t(i = a, n)));
  };
}
function Dk(e, t, r) {
  var i, s, o;
  return function() {
    var a, n = r(this), l;
    return n == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = n + "", a === l ? null : a === i && l === s ? o : (s = l, o = t(i = a, n)));
  };
}
function Ik(e, t) {
  var r = Uo(e), i = r === "transform" ? yk : gd;
  return this.attrTween(e, typeof t == "function" ? (r.local ? Dk : Ok)(r, i, ml(this, "attr." + e, t)) : t == null ? (r.local ? Mk : Ak)(r) : (r.local ? $k : Ek)(r, i, t));
}
function Rk(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function Pk(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function Nk(e, t) {
  var r, i;
  function s() {
    var o = t.apply(this, arguments);
    return o !== i && (r = (i = o) && Pk(e, o)), r;
  }
  return s._value = t, s;
}
function qk(e, t) {
  var r, i;
  function s() {
    var o = t.apply(this, arguments);
    return o !== i && (r = (i = o) && Rk(e, o)), r;
  }
  return s._value = t, s;
}
function Wk(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var i = Uo(e);
  return this.tween(r, (i.local ? Nk : qk)(i, t));
}
function zk(e, t) {
  return function() {
    gl(this, e).delay = +t.apply(this, arguments);
  };
}
function Hk(e, t) {
  return t = +t, function() {
    gl(this, e).delay = t;
  };
}
function Yk(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? zk : Hk)(t, e)) : Fe(this.node(), t).delay;
}
function Uk(e, t) {
  return function() {
    ze(this, e).duration = +t.apply(this, arguments);
  };
}
function jk(e, t) {
  return t = +t, function() {
    ze(this, e).duration = t;
  };
}
function Gk(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Uk : jk)(t, e)) : Fe(this.node(), t).duration;
}
function Xk(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    ze(this, e).ease = t;
  };
}
function Vk(e) {
  var t = this._id;
  return arguments.length ? this.each(Xk(t, e)) : Fe(this.node(), t).ease;
}
function Zk(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    ze(this, e).ease = r;
  };
}
function Kk(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Zk(this._id, e));
}
function Qk(e) {
  typeof e != "function" && (e = Vu(e));
  for (var t = this._groups, r = t.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, n = i[s] = [], l, h = 0; h < a; ++h)
      (l = o[h]) && e.call(l, l.__data__, h, o) && n.push(l);
  return new Je(i, this._parents, this._name, this._id);
}
function Jk(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, i = t.length, s = r.length, o = Math.min(i, s), a = new Array(i), n = 0; n < o; ++n)
    for (var l = t[n], h = r[n], c = l.length, u = a[n] = new Array(c), f, d = 0; d < c; ++d)
      (f = l[d] || h[d]) && (u[d] = f);
  for (; n < i; ++n)
    a[n] = t[n];
  return new Je(a, this._parents, this._name, this._id);
}
function t1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function e1(e, t, r) {
  var i, s, o = t1(t) ? gl : ze;
  return function() {
    var a = o(this, e), n = a.on;
    n !== i && (s = (i = n).copy()).on(t, r), a.on = s;
  };
}
function r1(e, t) {
  var r = this._id;
  return arguments.length < 2 ? Fe(this.node(), r).on.on(e) : this.each(e1(r, e, t));
}
function i1(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function s1() {
  return this.on("end.remove", i1(this._id));
}
function o1(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = cl(e));
  for (var i = this._groups, s = i.length, o = new Array(s), a = 0; a < s; ++a)
    for (var n = i[a], l = n.length, h = o[a] = new Array(l), c, u, f = 0; f < l; ++f)
      (c = n[f]) && (u = e.call(c, c.__data__, f, n)) && ("__data__" in c && (u.__data__ = c.__data__), h[f] = u, Go(h[f], t, r, f, h, Fe(c, r)));
  return new Je(o, this._parents, t, r);
}
function a1(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = Xu(e));
  for (var i = this._groups, s = i.length, o = [], a = [], n = 0; n < s; ++n)
    for (var l = i[n], h = l.length, c, u = 0; u < h; ++u)
      if (c = l[u]) {
        for (var f = e.call(c, c.__data__, u, l), d, g = Fe(c, r), m = 0, y = f.length; m < y; ++m)
          (d = f[m]) && Go(d, t, r, m, f, g);
        o.push(f), a.push(c);
      }
  return new Je(o, a, t, r);
}
var n1 = ks.prototype.constructor;
function l1() {
  return new n1(this._groups, this._parents);
}
function h1(e, t) {
  var r, i, s;
  return function() {
    var o = Si(this, e), a = (this.style.removeProperty(e), Si(this, e));
    return o === a ? null : o === r && a === i ? s : s = t(r = o, i = a);
  };
}
function md(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function c1(e, t, r) {
  var i, s = r + "", o;
  return function() {
    var a = Si(this, e);
    return a === s ? null : a === i ? o : o = t(i = a, r);
  };
}
function u1(e, t, r) {
  var i, s, o;
  return function() {
    var a = Si(this, e), n = r(this), l = n + "";
    return n == null && (l = n = (this.style.removeProperty(e), Si(this, e))), a === l ? null : a === i && l === s ? o : (s = l, o = t(i = a, n));
  };
}
function d1(e, t) {
  var r, i, s, o = "style." + t, a = "end." + o, n;
  return function() {
    var l = ze(this, e), h = l.on, c = l.value[o] == null ? n || (n = md(t)) : void 0;
    (h !== r || s !== c) && (i = (r = h).copy()).on(a, s = c), l.on = i;
  };
}
function f1(e, t, r) {
  var i = (e += "") == "transform" ? mk : gd;
  return t == null ? this.styleTween(e, h1(e, i)).on("end.style." + e, md(e)) : typeof t == "function" ? this.styleTween(e, u1(e, i, ml(this, "style." + e, t))).each(d1(this._id, e)) : this.styleTween(e, c1(e, i, t), r).on("end.style." + e, null);
}
function p1(e, t, r) {
  return function(i) {
    this.style.setProperty(e, t.call(this, i), r);
  };
}
function g1(e, t, r) {
  var i, s;
  function o() {
    var a = t.apply(this, arguments);
    return a !== s && (i = (s = a) && p1(e, a, r)), i;
  }
  return o._value = t, o;
}
function m1(e, t, r) {
  var i = "style." + (e += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (t == null) return this.tween(i, null);
  if (typeof t != "function") throw new Error();
  return this.tween(i, g1(e, t, r ?? ""));
}
function y1(e) {
  return function() {
    this.textContent = e;
  };
}
function C1(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function x1(e) {
  return this.tween("text", typeof e == "function" ? C1(ml(this, "text", e)) : y1(e == null ? "" : e + ""));
}
function b1(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function k1(e) {
  var t, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (t = (r = s) && b1(s)), t;
  }
  return i._value = e, i;
}
function w1(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, k1(e));
}
function S1() {
  for (var e = this._name, t = this._id, r = yd(), i = this._groups, s = i.length, o = 0; o < s; ++o)
    for (var a = i[o], n = a.length, l, h = 0; h < n; ++h)
      if (l = a[h]) {
        var c = Fe(l, t);
        Go(l, e, r, h, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Je(i, this._parents, e, r);
}
function T1() {
  var e, t, r = this, i = r._id, s = r.size();
  return new Promise(function(o, a) {
    var n = { value: a }, l = { value: function() {
      --s === 0 && o();
    } };
    r.each(function() {
      var h = ze(this, i), c = h.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(n), t._.interrupt.push(n), t._.end.push(l)), h.on = t;
    }), s === 0 && o();
  });
}
var _1 = 0;
function Je(e, t, r, i) {
  this._groups = e, this._parents = t, this._name = r, this._id = i;
}
function yd() {
  return ++_1;
}
var Xe = ks.prototype;
Je.prototype = {
  constructor: Je,
  select: o1,
  selectAll: a1,
  selectChild: Xe.selectChild,
  selectChildren: Xe.selectChildren,
  filter: Qk,
  merge: Jk,
  selection: l1,
  transition: S1,
  call: Xe.call,
  nodes: Xe.nodes,
  node: Xe.node,
  size: Xe.size,
  empty: Xe.empty,
  each: Xe.each,
  on: r1,
  attr: Ik,
  attrTween: Wk,
  style: f1,
  styleTween: m1,
  text: x1,
  textTween: w1,
  remove: s1,
  tween: Fk,
  delay: Yk,
  duration: Gk,
  ease: Vk,
  easeVarying: Kk,
  end: T1,
  [Symbol.iterator]: Xe[Symbol.iterator]
};
function B1(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var v1 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: B1
};
function L1(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function F1(e) {
  var t, r;
  e instanceof Je ? (t = e._id, e = e._name) : (t = yd(), (r = v1).time = pl(), e = e == null ? null : e + "");
  for (var i = this._groups, s = i.length, o = 0; o < s; ++o)
    for (var a = i[o], n = a.length, l, h = 0; h < n; ++h)
      (l = a[h]) && Go(l, e, t, h, a, r || L1(l, t));
  return new Je(i, this._parents, e, t);
}
ks.prototype.interrupt = Bk;
ks.prototype.transition = F1;
const Cn = Math.PI, xn = 2 * Cn, Tr = 1e-6, A1 = xn - Tr;
function Cd(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function M1(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Cd;
  const r = 10 ** t;
  return function(i) {
    this._ += i[0];
    for (let s = 1, o = i.length; s < o; ++s)
      this._ += Math.round(arguments[s] * r) / r + i[s];
  };
}
class E1 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Cd : M1(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, i, s) {
    this._append`Q${+t},${+r},${this._x1 = +i},${this._y1 = +s}`;
  }
  bezierCurveTo(t, r, i, s, o, a) {
    this._append`C${+t},${+r},${+i},${+s},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(t, r, i, s, o) {
    if (t = +t, r = +r, i = +i, s = +s, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, n = this._y1, l = i - t, h = s - r, c = a - t, u = n - r, f = c * c + u * u;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (f > Tr) if (!(Math.abs(u * l - h * c) > Tr) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let d = i - a, g = s - n, m = l * l + h * h, y = d * d + g * g, C = Math.sqrt(m), b = Math.sqrt(f), k = o * Math.tan((Cn - Math.acos((m + f - y) / (2 * C * b))) / 2), S = k / b, T = k / C;
      Math.abs(S - 1) > Tr && this._append`L${t + S * c},${r + S * u}`, this._append`A${o},${o},0,0,${+(u * d > c * g)},${this._x1 = t + T * l},${this._y1 = r + T * h}`;
    }
  }
  arc(t, r, i, s, o, a) {
    if (t = +t, r = +r, i = +i, a = !!a, i < 0) throw new Error(`negative radius: ${i}`);
    let n = i * Math.cos(s), l = i * Math.sin(s), h = t + n, c = r + l, u = 1 ^ a, f = a ? s - o : o - s;
    this._x1 === null ? this._append`M${h},${c}` : (Math.abs(this._x1 - h) > Tr || Math.abs(this._y1 - c) > Tr) && this._append`L${h},${c}`, i && (f < 0 && (f = f % xn + xn), f > A1 ? this._append`A${i},${i},0,1,${u},${t - n},${r - l}A${i},${i},0,1,${u},${this._x1 = h},${this._y1 = c}` : f > Tr && this._append`A${i},${i},0,${+(f >= Cn)},${u},${this._x1 = t + i * Math.cos(o)},${this._y1 = r + i * Math.sin(o)}`);
  }
  rect(t, r, i, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${i = +i}v${+s}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function Xr(e) {
  return function() {
    return e;
  };
}
const EF = Math.abs, $F = Math.atan2, OF = Math.cos, DF = Math.max, IF = Math.min, RF = Math.sin, PF = Math.sqrt, mc = 1e-12, yl = Math.PI, yc = yl / 2, NF = 2 * yl;
function qF(e) {
  return e > 1 ? 0 : e < -1 ? yl : Math.acos(e);
}
function WF(e) {
  return e >= 1 ? yc : e <= -1 ? -yc : Math.asin(e);
}
function $1(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const i = Math.floor(r);
      if (!(i >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = i;
    }
    return e;
  }, () => new E1(t);
}
function O1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function xd(e) {
  this._context = e;
}
xd.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function ss(e) {
  return new xd(e);
}
function D1(e) {
  return e[0];
}
function I1(e) {
  return e[1];
}
function R1(e, t) {
  var r = Xr(!0), i = null, s = ss, o = null, a = $1(n);
  e = typeof e == "function" ? e : e === void 0 ? D1 : Xr(e), t = typeof t == "function" ? t : t === void 0 ? I1 : Xr(t);
  function n(l) {
    var h, c = (l = O1(l)).length, u, f = !1, d;
    for (i == null && (o = s(d = a())), h = 0; h <= c; ++h)
      !(h < c && r(u = l[h], h, l)) === f && ((f = !f) ? o.lineStart() : o.lineEnd()), f && o.point(+e(u, h, l), +t(u, h, l));
    if (d) return o = null, d + "" || null;
  }
  return n.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Xr(+l), n) : e;
  }, n.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Xr(+l), n) : t;
  }, n.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Xr(!!l), n) : r;
  }, n.curve = function(l) {
    return arguments.length ? (s = l, i != null && (o = s(i)), n) : s;
  }, n.context = function(l) {
    return arguments.length ? (l == null ? i = o = null : o = s(i = l), n) : i;
  }, n;
}
class bd {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function kd(e) {
  return new bd(e, !0);
}
function wd(e) {
  return new bd(e, !1);
}
function dr() {
}
function So(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function Xo(e) {
  this._context = e;
}
Xo.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        So(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        So(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function bn(e) {
  return new Xo(e);
}
function Sd(e) {
  this._context = e;
}
Sd.prototype = {
  areaStart: dr,
  areaEnd: dr,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        So(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function P1(e) {
  return new Sd(e);
}
function Td(e) {
  this._context = e;
}
Td.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, i = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, i) : this._context.moveTo(r, i);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        So(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function N1(e) {
  return new Td(e);
}
function _d(e, t) {
  this._basis = new Xo(e), this._beta = t;
}
_d.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var i = e[0], s = t[0], o = e[r] - i, a = t[r] - s, n = -1, l; ++n <= r; )
        l = n / r, this._basis.point(
          this._beta * e[n] + (1 - this._beta) * (i + l * o),
          this._beta * t[n] + (1 - this._beta) * (s + l * a)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const q1 = (function e(t) {
  function r(i) {
    return t === 1 ? new Xo(i) : new _d(i, t);
  }
  return r.beta = function(i) {
    return e(+i);
  }, r;
})(0.85);
function To(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function Cl(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Cl.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        To(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        To(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Bd = (function e(t) {
  function r(i) {
    return new Cl(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function xl(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
xl.prototype = {
  areaStart: dr,
  areaEnd: dr,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        To(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const W1 = (function e(t) {
  function r(i) {
    return new xl(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function bl(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
bl.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        To(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const z1 = (function e(t) {
  function r(i) {
    return new bl(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function kl(e, t, r) {
  var i = e._x1, s = e._y1, o = e._x2, a = e._y2;
  if (e._l01_a > mc) {
    var n = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * n - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, s = (s * n - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
  }
  if (e._l23_a > mc) {
    var h = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, c = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * h + e._x1 * e._l23_2a - t * e._l12_2a) / c, a = (a * h + e._y1 * e._l23_2a - r * e._l12_2a) / c;
  }
  e._context.bezierCurveTo(i, s, o, a, e._x2, e._y2);
}
function vd(e, t) {
  this._context = e, this._alpha = t;
}
vd.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        kl(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Ld = (function e(t) {
  function r(i) {
    return t ? new vd(i, t) : new Cl(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Fd(e, t) {
  this._context = e, this._alpha = t;
}
Fd.prototype = {
  areaStart: dr,
  areaEnd: dr,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        kl(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const H1 = (function e(t) {
  function r(i) {
    return t ? new Fd(i, t) : new xl(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Ad(e, t) {
  this._context = e, this._alpha = t;
}
Ad.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        kl(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Y1 = (function e(t) {
  function r(i) {
    return t ? new Ad(i, t) : new bl(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Md(e) {
  this._context = e;
}
Md.prototype = {
  areaStart: dr,
  areaEnd: dr,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function U1(e) {
  return new Md(e);
}
function Cc(e) {
  return e < 0 ? -1 : 1;
}
function xc(e, t, r) {
  var i = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (i || s < 0 && -0), a = (r - e._y1) / (s || i < 0 && -0), n = (o * s + a * i) / (i + s);
  return (Cc(o) + Cc(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(n)) || 0;
}
function bc(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function za(e, t, r) {
  var i = e._x0, s = e._y0, o = e._x1, a = e._y1, n = (o - i) / 3;
  e._context.bezierCurveTo(i + n, s + n * t, o - n, a - n * r, o, a);
}
function _o(e) {
  this._context = e;
}
_o.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        za(this, this._t0, bc(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, za(this, bc(this, r = xc(this, e, t)), r);
          break;
        default:
          za(this, this._t0, r = xc(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Ed(e) {
  this._context = new $d(e);
}
(Ed.prototype = Object.create(_o.prototype)).point = function(e, t) {
  _o.prototype.point.call(this, t, e);
};
function $d(e) {
  this._context = e;
}
$d.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, i, s, o) {
    this._context.bezierCurveTo(t, e, i, r, o, s);
  }
};
function Od(e) {
  return new _o(e);
}
function Dd(e) {
  return new Ed(e);
}
function Id(e) {
  this._context = e;
}
Id.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var i = kc(e), s = kc(t), o = 0, a = 1; a < r; ++o, ++a)
          this._context.bezierCurveTo(i[0][o], s[0][o], i[1][o], s[1][o], e[a], t[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function kc(e) {
  var t, r = e.length - 1, i, s = new Array(r), o = new Array(r), a = new Array(r);
  for (s[0] = 0, o[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) s[t] = 1, o[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
  for (s[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) i = s[t] / o[t - 1], o[t] -= i, a[t] -= i * a[t - 1];
  for (s[r - 1] = a[r - 1] / o[r - 1], t = r - 2; t >= 0; --t) s[t] = (a[t] - s[t + 1]) / o[t];
  for (o[r - 1] = (e[r] + s[r - 1]) / 2, t = 0; t < r - 1; ++t) o[t] = 2 * e[t + 1] - s[t + 1];
  return [s, o];
}
function Rd(e) {
  return new Id(e);
}
function Vo(e, t) {
  this._context = e, this._t = t;
}
Vo.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function Pd(e) {
  return new Vo(e, 0.5);
}
function Nd(e) {
  return new Vo(e, 0);
}
function qd(e) {
  return new Vo(e, 1);
}
function Zi(e, t, r) {
  this.k = e, this.x = t, this.y = r;
}
Zi.prototype = {
  constructor: Zi,
  scale: function(e) {
    return e === 1 ? this : new Zi(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Zi(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Zi.prototype;
var j1 = /* @__PURE__ */ p((e) => {
  var s;
  const { securityLevel: t } = Tt();
  let r = Ct("body");
  if (t === "sandbox") {
    const a = ((s = Ct(`#i${e}`).node()) == null ? void 0 : s.contentDocument) ?? document;
    r = Ct(a.body);
  }
  return r.select(`#${e}`);
}, "selectSvgElement");
function wl(e) {
  return typeof e > "u" || e === null;
}
p(wl, "isNothing");
function Wd(e) {
  return typeof e == "object" && e !== null;
}
p(Wd, "isObject");
function zd(e) {
  return Array.isArray(e) ? e : wl(e) ? [] : [e];
}
p(zd, "toArray");
function Hd(e, t) {
  var r, i, s, o;
  if (t)
    for (o = Object.keys(t), r = 0, i = o.length; r < i; r += 1)
      s = o[r], e[s] = t[s];
  return e;
}
p(Hd, "extend");
function Yd(e, t) {
  var r = "", i;
  for (i = 0; i < t; i += 1)
    r += e;
  return r;
}
p(Yd, "repeat");
function Ud(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
p(Ud, "isNegativeZero");
var G1 = wl, X1 = Wd, V1 = zd, Z1 = Yd, K1 = Ud, Q1 = Hd, Ht = {
  isNothing: G1,
  isObject: X1,
  toArray: V1,
  repeat: Z1,
  isNegativeZero: K1,
  extend: Q1
};
function Sl(e, t) {
  var r = "", i = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), i + " " + r) : i;
}
p(Sl, "formatError");
function _i(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = Sl(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
p(_i, "YAMLException$1");
_i.prototype = Object.create(Error.prototype);
_i.prototype.constructor = _i;
_i.prototype.toString = /* @__PURE__ */ p(function(t) {
  return this.name + ": " + Sl(this, t);
}, "toString");
var ce = _i;
function io(e, t, r, i, s) {
  var o = "", a = "", n = Math.floor(s / 2) - 1;
  return i - t > n && (o = " ... ", t = i - n + o.length), r - i > n && (a = " ...", r = i + n - a.length), {
    str: o + e.slice(t, r).replace(/\t/g, "→") + a,
    pos: i - t + o.length
    // relative position
  };
}
p(io, "getLine");
function so(e, t) {
  return Ht.repeat(" ", t - e.length) + e;
}
p(so, "padStart");
function jd(e, t) {
  if (t = Object.create(t || null), !e.buffer) return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, i = [0], s = [], o, a = -1; o = r.exec(e.buffer); )
    s.push(o.index), i.push(o.index + o[0].length), e.position <= o.index && a < 0 && (a = i.length - 2);
  a < 0 && (a = i.length - 1);
  var n = "", l, h, c = Math.min(e.line + t.linesAfter, s.length).toString().length, u = t.maxLength - (t.indent + c + 3);
  for (l = 1; l <= t.linesBefore && !(a - l < 0); l++)
    h = io(
      e.buffer,
      i[a - l],
      s[a - l],
      e.position - (i[a] - i[a - l]),
      u
    ), n = Ht.repeat(" ", t.indent) + so((e.line - l + 1).toString(), c) + " | " + h.str + `
` + n;
  for (h = io(e.buffer, i[a], s[a], e.position, u), n += Ht.repeat(" ", t.indent) + so((e.line + 1).toString(), c) + " | " + h.str + `
`, n += Ht.repeat("-", t.indent + c + 3 + h.pos) + `^
`, l = 1; l <= t.linesAfter && !(a + l >= s.length); l++)
    h = io(
      e.buffer,
      i[a + l],
      s[a + l],
      e.position - (i[a] - i[a + l]),
      u
    ), n += Ht.repeat(" ", t.indent) + so((e.line + l + 1).toString(), c) + " | " + h.str + `
`;
  return n.replace(/\n$/, "");
}
p(jd, "makeSnippet");
var J1 = jd, t2 = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], e2 = [
  "scalar",
  "sequence",
  "mapping"
];
function Gd(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(i) {
      t[String(i)] = r;
    });
  }), t;
}
p(Gd, "compileStyleAliases");
function Xd(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (t2.indexOf(r) === -1)
      throw new ce('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = Gd(t.styleAliases || null), e2.indexOf(this.kind) === -1)
    throw new ce('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
p(Xd, "Type$1");
var Jt = Xd;
function kn(e, t) {
  var r = [];
  return e[t].forEach(function(i) {
    var s = r.length;
    r.forEach(function(o, a) {
      o.tag === i.tag && o.kind === i.kind && o.multi === i.multi && (s = a);
    }), r[s] = i;
  }), r;
}
p(kn, "compileList");
function Vd() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, t, r;
  function i(s) {
    s.multi ? (e.multi[s.kind].push(s), e.multi.fallback.push(s)) : e[s.kind][s.tag] = e.fallback[s.tag] = s;
  }
  for (p(i, "collectType"), t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(i);
  return e;
}
p(Vd, "compileMap");
function Bo(e) {
  return this.extend(e);
}
p(Bo, "Schema$1");
Bo.prototype.extend = /* @__PURE__ */ p(function(t) {
  var r = [], i = [];
  if (t instanceof Jt)
    i.push(t);
  else if (Array.isArray(t))
    i = i.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (i = i.concat(t.explicit));
  else
    throw new ce("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(o) {
    if (!(o instanceof Jt))
      throw new ce("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (o.loadKind && o.loadKind !== "scalar")
      throw new ce("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (o.multi)
      throw new ce("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(o) {
    if (!(o instanceof Jt))
      throw new ce("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create(Bo.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(i), s.compiledImplicit = kn(s, "implicit"), s.compiledExplicit = kn(s, "explicit"), s.compiledTypeMap = Vd(s.compiledImplicit, s.compiledExplicit), s;
}, "extend");
var r2 = Bo, i2 = new Jt("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: /* @__PURE__ */ p(function(e) {
    return e !== null ? e : "";
  }, "construct")
}), s2 = new Jt("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: /* @__PURE__ */ p(function(e) {
    return e !== null ? e : [];
  }, "construct")
}), o2 = new Jt("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: /* @__PURE__ */ p(function(e) {
    return e !== null ? e : {};
  }, "construct")
}), a2 = new r2({
  explicit: [
    i2,
    s2,
    o2
  ]
});
function Zd(e) {
  if (e === null) return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
p(Zd, "resolveYamlNull");
function Kd() {
  return null;
}
p(Kd, "constructYamlNull");
function Qd(e) {
  return e === null;
}
p(Qd, "isNull");
var n2 = new Jt("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Zd,
  construct: Kd,
  predicate: Qd,
  represent: {
    canonical: /* @__PURE__ */ p(function() {
      return "~";
    }, "canonical"),
    lowercase: /* @__PURE__ */ p(function() {
      return "null";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ p(function() {
      return "NULL";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ p(function() {
      return "Null";
    }, "camelcase"),
    empty: /* @__PURE__ */ p(function() {
      return "";
    }, "empty")
  },
  defaultStyle: "lowercase"
});
function Jd(e) {
  if (e === null) return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
p(Jd, "resolveYamlBoolean");
function tf(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
p(tf, "constructYamlBoolean");
function ef(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
p(ef, "isBoolean");
var l2 = new Jt("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Jd,
  construct: tf,
  predicate: ef,
  represent: {
    lowercase: /* @__PURE__ */ p(function(e) {
      return e ? "true" : "false";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ p(function(e) {
      return e ? "TRUE" : "FALSE";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ p(function(e) {
      return e ? "True" : "False";
    }, "camelcase")
  },
  defaultStyle: "lowercase"
});
function rf(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
p(rf, "isHexCode");
function sf(e) {
  return 48 <= e && e <= 55;
}
p(sf, "isOctCode");
function of(e) {
  return 48 <= e && e <= 57;
}
p(of, "isDecCode");
function af(e) {
  if (e === null) return !1;
  var t = e.length, r = 0, i = !1, s;
  if (!t) return !1;
  if (s = e[r], (s === "-" || s === "+") && (s = e[++r]), s === "0") {
    if (r + 1 === t) return !0;
    if (s = e[++r], s === "b") {
      for (r++; r < t; r++)
        if (s = e[r], s !== "_") {
          if (s !== "0" && s !== "1") return !1;
          i = !0;
        }
      return i && s !== "_";
    }
    if (s === "x") {
      for (r++; r < t; r++)
        if (s = e[r], s !== "_") {
          if (!rf(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && s !== "_";
    }
    if (s === "o") {
      for (r++; r < t; r++)
        if (s = e[r], s !== "_") {
          if (!sf(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && s !== "_";
    }
  }
  if (s === "_") return !1;
  for (; r < t; r++)
    if (s = e[r], s !== "_") {
      if (!of(e.charCodeAt(r)))
        return !1;
      i = !0;
    }
  return !(!i || s === "_");
}
p(af, "resolveYamlInteger");
function nf(e) {
  var t = e, r = 1, i;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), i = t[0], (i === "-" || i === "+") && (i === "-" && (r = -1), t = t.slice(1), i = t[0]), t === "0") return 0;
  if (i === "0") {
    if (t[1] === "b") return r * parseInt(t.slice(2), 2);
    if (t[1] === "x") return r * parseInt(t.slice(2), 16);
    if (t[1] === "o") return r * parseInt(t.slice(2), 8);
  }
  return r * parseInt(t, 10);
}
p(nf, "constructYamlInteger");
function lf(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !Ht.isNegativeZero(e);
}
p(lf, "isInteger");
var h2 = new Jt("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: af,
  construct: nf,
  predicate: lf,
  represent: {
    binary: /* @__PURE__ */ p(function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    }, "binary"),
    octal: /* @__PURE__ */ p(function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    }, "octal"),
    decimal: /* @__PURE__ */ p(function(e) {
      return e.toString(10);
    }, "decimal"),
    /* eslint-disable max-len */
    hexadecimal: /* @__PURE__ */ p(function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }, "hexadecimal")
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), c2 = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function hf(e) {
  return !(e === null || !c2.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
p(hf, "resolveYamlFloat");
function cf(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
p(cf, "constructYamlFloat");
var u2 = /^[-+]?[0-9]+e/;
function uf(e, t) {
  var r;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (Ht.isNegativeZero(e))
    return "-0.0";
  return r = e.toString(10), u2.test(r) ? r.replace("e", ".e") : r;
}
p(uf, "representYamlFloat");
function df(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || Ht.isNegativeZero(e));
}
p(df, "isFloat");
var d2 = new Jt("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: hf,
  construct: cf,
  predicate: df,
  represent: uf,
  defaultStyle: "lowercase"
}), ff = a2.extend({
  implicit: [
    n2,
    l2,
    h2,
    d2
  ]
}), f2 = ff, pf = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), gf = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function mf(e) {
  return e === null ? !1 : pf.exec(e) !== null || gf.exec(e) !== null;
}
p(mf, "resolveYamlTimestamp");
function yf(e) {
  var t, r, i, s, o, a, n, l = 0, h = null, c, u, f;
  if (t = pf.exec(e), t === null && (t = gf.exec(e)), t === null) throw new Error("Date resolve error");
  if (r = +t[1], i = +t[2] - 1, s = +t[3], !t[4])
    return new Date(Date.UTC(r, i, s));
  if (o = +t[4], a = +t[5], n = +t[6], t[7]) {
    for (l = t[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return t[9] && (c = +t[10], u = +(t[11] || 0), h = (c * 60 + u) * 6e4, t[9] === "-" && (h = -h)), f = new Date(Date.UTC(r, i, s, o, a, n, l)), h && f.setTime(f.getTime() - h), f;
}
p(yf, "constructYamlTimestamp");
function Cf(e) {
  return e.toISOString();
}
p(Cf, "representYamlTimestamp");
var p2 = new Jt("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: mf,
  construct: yf,
  instanceOf: Date,
  represent: Cf
});
function xf(e) {
  return e === "<<" || e === null;
}
p(xf, "resolveYamlMerge");
var g2 = new Jt("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: xf
}), Tl = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function bf(e) {
  if (e === null) return !1;
  var t, r, i = 0, s = e.length, o = Tl;
  for (r = 0; r < s; r++)
    if (t = o.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0) return !1;
      i += 6;
    }
  return i % 8 === 0;
}
p(bf, "resolveYamlBinary");
function kf(e) {
  var t, r, i = e.replace(/[\r\n=]/g, ""), s = i.length, o = Tl, a = 0, n = [];
  for (t = 0; t < s; t++)
    t % 4 === 0 && t && (n.push(a >> 16 & 255), n.push(a >> 8 & 255), n.push(a & 255)), a = a << 6 | o.indexOf(i.charAt(t));
  return r = s % 4 * 6, r === 0 ? (n.push(a >> 16 & 255), n.push(a >> 8 & 255), n.push(a & 255)) : r === 18 ? (n.push(a >> 10 & 255), n.push(a >> 2 & 255)) : r === 12 && n.push(a >> 4 & 255), new Uint8Array(n);
}
p(kf, "constructYamlBinary");
function wf(e) {
  var t = "", r = 0, i, s, o = e.length, a = Tl;
  for (i = 0; i < o; i++)
    i % 3 === 0 && i && (t += a[r >> 18 & 63], t += a[r >> 12 & 63], t += a[r >> 6 & 63], t += a[r & 63]), r = (r << 8) + e[i];
  return s = o % 3, s === 0 ? (t += a[r >> 18 & 63], t += a[r >> 12 & 63], t += a[r >> 6 & 63], t += a[r & 63]) : s === 2 ? (t += a[r >> 10 & 63], t += a[r >> 4 & 63], t += a[r << 2 & 63], t += a[64]) : s === 1 && (t += a[r >> 2 & 63], t += a[r << 4 & 63], t += a[64], t += a[64]), t;
}
p(wf, "representYamlBinary");
function Sf(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
p(Sf, "isBinary");
var m2 = new Jt("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: bf,
  construct: kf,
  predicate: Sf,
  represent: wf
}), y2 = Object.prototype.hasOwnProperty, C2 = Object.prototype.toString;
function Tf(e) {
  if (e === null) return !0;
  var t = [], r, i, s, o, a, n = e;
  for (r = 0, i = n.length; r < i; r += 1) {
    if (s = n[r], a = !1, C2.call(s) !== "[object Object]") return !1;
    for (o in s)
      if (y2.call(s, o))
        if (!a) a = !0;
        else return !1;
    if (!a) return !1;
    if (t.indexOf(o) === -1) t.push(o);
    else return !1;
  }
  return !0;
}
p(Tf, "resolveYamlOmap");
function _f(e) {
  return e !== null ? e : [];
}
p(_f, "constructYamlOmap");
var x2 = new Jt("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Tf,
  construct: _f
}), b2 = Object.prototype.toString;
function Bf(e) {
  if (e === null) return !0;
  var t, r, i, s, o, a = e;
  for (o = new Array(a.length), t = 0, r = a.length; t < r; t += 1) {
    if (i = a[t], b2.call(i) !== "[object Object]" || (s = Object.keys(i), s.length !== 1)) return !1;
    o[t] = [s[0], i[s[0]]];
  }
  return !0;
}
p(Bf, "resolveYamlPairs");
function vf(e) {
  if (e === null) return [];
  var t, r, i, s, o, a = e;
  for (o = new Array(a.length), t = 0, r = a.length; t < r; t += 1)
    i = a[t], s = Object.keys(i), o[t] = [s[0], i[s[0]]];
  return o;
}
p(vf, "constructYamlPairs");
var k2 = new Jt("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Bf,
  construct: vf
}), w2 = Object.prototype.hasOwnProperty;
function Lf(e) {
  if (e === null) return !0;
  var t, r = e;
  for (t in r)
    if (w2.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
p(Lf, "resolveYamlSet");
function Ff(e) {
  return e !== null ? e : {};
}
p(Ff, "constructYamlSet");
var S2 = new Jt("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Lf,
  construct: Ff
}), Af = f2.extend({
  implicit: [
    p2,
    g2
  ],
  explicit: [
    m2,
    x2,
    k2,
    S2
  ]
}), fr = Object.prototype.hasOwnProperty, vo = 1, Mf = 2, Ef = 3, Lo = 4, Ha = 1, T2 = 2, wc = 3, _2 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, B2 = /[\x85\u2028\u2029]/, v2 = /[,\[\]\{\}]/, $f = /^(?:!|!!|![a-z\-]+!)$/i, Of = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function wn(e) {
  return Object.prototype.toString.call(e);
}
p(wn, "_class");
function _e(e) {
  return e === 10 || e === 13;
}
p(_e, "is_EOL");
function ur(e) {
  return e === 9 || e === 32;
}
p(ur, "is_WHITE_SPACE");
function re(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
p(re, "is_WS_OR_EOL");
function Lr(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
p(Lr, "is_FLOW_INDICATOR");
function Df(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
p(Df, "fromHexCode");
function If(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
p(If, "escapedHexLen");
function Rf(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
p(Rf, "fromDecimalCode");
function Sn(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
p(Sn, "simpleEscapeSequence");
function Pf(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
p(Pf, "charFromCodepoint");
function _l(e, t, r) {
  t === "__proto__" ? Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: r
  }) : e[t] = r;
}
p(_l, "setProperty");
var Nf = new Array(256), qf = new Array(256);
for (kr = 0; kr < 256; kr++)
  Nf[kr] = Sn(kr) ? 1 : 0, qf[kr] = Sn(kr);
var kr;
function Wf(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || Af, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
p(Wf, "State$1");
function Bl(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = J1(r), new ce(t, r);
}
p(Bl, "generateError");
function ot(e, t) {
  throw Bl(e, t);
}
p(ot, "throwError");
function ds(e, t) {
  e.onWarning && e.onWarning.call(null, Bl(e, t));
}
p(ds, "throwWarning");
var Sc = {
  YAML: /* @__PURE__ */ p(function(t, r, i) {
    var s, o, a;
    t.version !== null && ot(t, "duplication of %YAML directive"), i.length !== 1 && ot(t, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), s === null && ot(t, "ill-formed argument of the YAML directive"), o = parseInt(s[1], 10), a = parseInt(s[2], 10), o !== 1 && ot(t, "unacceptable YAML version of the document"), t.version = i[0], t.checkLineBreaks = a < 2, a !== 1 && a !== 2 && ds(t, "unsupported YAML version of the document");
  }, "handleYamlDirective"),
  TAG: /* @__PURE__ */ p(function(t, r, i) {
    var s, o;
    i.length !== 2 && ot(t, "TAG directive accepts exactly two arguments"), s = i[0], o = i[1], $f.test(s) || ot(t, "ill-formed tag handle (first argument) of the TAG directive"), fr.call(t.tagMap, s) && ot(t, 'there is a previously declared suffix for "' + s + '" tag handle'), Of.test(o) || ot(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      o = decodeURIComponent(o);
    } catch {
      ot(t, "tag prefix is malformed: " + o);
    }
    t.tagMap[s] = o;
  }, "handleTagDirective")
};
function Qe(e, t, r, i) {
  var s, o, a, n;
  if (t < r) {
    if (n = e.input.slice(t, r), i)
      for (s = 0, o = n.length; s < o; s += 1)
        a = n.charCodeAt(s), a === 9 || 32 <= a && a <= 1114111 || ot(e, "expected valid JSON character");
    else _2.test(n) && ot(e, "the stream contains non-printable characters");
    e.result += n;
  }
}
p(Qe, "captureSegment");
function Tn(e, t, r, i) {
  var s, o, a, n;
  for (Ht.isObject(r) || ot(e, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), a = 0, n = s.length; a < n; a += 1)
    o = s[a], fr.call(t, o) || (_l(t, o, r[o]), i[o] = !0);
}
p(Tn, "mergeMappings");
function Fr(e, t, r, i, s, o, a, n, l) {
  var h, c;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), h = 0, c = s.length; h < c; h += 1)
      Array.isArray(s[h]) && ot(e, "nested arrays are not supported inside keys"), typeof s == "object" && wn(s[h]) === "[object Object]" && (s[h] = "[object Object]");
  if (typeof s == "object" && wn(s) === "[object Object]" && (s = "[object Object]"), s = String(s), t === null && (t = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (h = 0, c = o.length; h < c; h += 1)
        Tn(e, t, o[h], r);
    else
      Tn(e, t, o, r);
  else
    !e.json && !fr.call(r, s) && fr.call(t, s) && (e.line = a || e.line, e.lineStart = n || e.lineStart, e.position = l || e.position, ot(e, "duplicated mapping key")), _l(t, s, o), delete r[s];
  return t;
}
p(Fr, "storeMappingPair");
function Zo(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : ot(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
p(Zo, "readLineBreak");
function Rt(e, t, r) {
  for (var i = 0, s = e.input.charCodeAt(e.position); s !== 0; ) {
    for (; ur(s); )
      s === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), s = e.input.charCodeAt(++e.position);
    if (t && s === 35)
      do
        s = e.input.charCodeAt(++e.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (_e(s))
      for (Zo(e), s = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; s === 32; )
        e.lineIndent++, s = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && i !== 0 && e.lineIndent < r && ds(e, "deficient indentation"), i;
}
p(Rt, "skipSeparationSpace");
function Ss(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || re(r)));
}
p(Ss, "testDocumentSeparator");
function Ko(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += Ht.repeat(`
`, t - 1));
}
p(Ko, "writeFoldedLines");
function zf(e, t, r) {
  var i, s, o, a, n, l, h, c, u = e.kind, f = e.result, d;
  if (d = e.input.charCodeAt(e.position), re(d) || Lr(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96 || (d === 63 || d === 45) && (s = e.input.charCodeAt(e.position + 1), re(s) || r && Lr(s)))
    return !1;
  for (e.kind = "scalar", e.result = "", o = a = e.position, n = !1; d !== 0; ) {
    if (d === 58) {
      if (s = e.input.charCodeAt(e.position + 1), re(s) || r && Lr(s))
        break;
    } else if (d === 35) {
      if (i = e.input.charCodeAt(e.position - 1), re(i))
        break;
    } else {
      if (e.position === e.lineStart && Ss(e) || r && Lr(d))
        break;
      if (_e(d))
        if (l = e.line, h = e.lineStart, c = e.lineIndent, Rt(e, !1, -1), e.lineIndent >= t) {
          n = !0, d = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = a, e.line = l, e.lineStart = h, e.lineIndent = c;
          break;
        }
    }
    n && (Qe(e, o, a, !1), Ko(e, e.line - l), o = a = e.position, n = !1), ur(d) || (a = e.position + 1), d = e.input.charCodeAt(++e.position);
  }
  return Qe(e, o, a, !1), e.result ? !0 : (e.kind = u, e.result = f, !1);
}
p(zf, "readPlainScalar");
function Hf(e, t) {
  var r, i, s;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, i = s = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (Qe(e, i, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        i = e.position, e.position++, s = e.position;
      else
        return !0;
    else _e(r) ? (Qe(e, i, s, !0), Ko(e, Rt(e, !1, t)), i = s = e.position) : e.position === e.lineStart && Ss(e) ? ot(e, "unexpected end of the document within a single quoted scalar") : (e.position++, s = e.position);
  ot(e, "unexpected end of the stream within a single quoted scalar");
}
p(Hf, "readSingleQuotedScalar");
function Yf(e, t) {
  var r, i, s, o, a, n;
  if (n = e.input.charCodeAt(e.position), n !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; (n = e.input.charCodeAt(e.position)) !== 0; ) {
    if (n === 34)
      return Qe(e, r, e.position, !0), e.position++, !0;
    if (n === 92) {
      if (Qe(e, r, e.position, !0), n = e.input.charCodeAt(++e.position), _e(n))
        Rt(e, !1, t);
      else if (n < 256 && Nf[n])
        e.result += qf[n], e.position++;
      else if ((a = If(n)) > 0) {
        for (s = a, o = 0; s > 0; s--)
          n = e.input.charCodeAt(++e.position), (a = Df(n)) >= 0 ? o = (o << 4) + a : ot(e, "expected hexadecimal character");
        e.result += Pf(o), e.position++;
      } else
        ot(e, "unknown escape sequence");
      r = i = e.position;
    } else _e(n) ? (Qe(e, r, i, !0), Ko(e, Rt(e, !1, t)), r = i = e.position) : e.position === e.lineStart && Ss(e) ? ot(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position);
  }
  ot(e, "unexpected end of the stream within a double quoted scalar");
}
p(Yf, "readDoubleQuotedScalar");
function Uf(e, t) {
  var r = !0, i, s, o, a = e.tag, n, l = e.anchor, h, c, u, f, d, g = /* @__PURE__ */ Object.create(null), m, y, C, b;
  if (b = e.input.charCodeAt(e.position), b === 91)
    c = 93, d = !1, n = [];
  else if (b === 123)
    c = 125, d = !0, n = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = n), b = e.input.charCodeAt(++e.position); b !== 0; ) {
    if (Rt(e, !0, t), b = e.input.charCodeAt(e.position), b === c)
      return e.position++, e.tag = a, e.anchor = l, e.kind = d ? "mapping" : "sequence", e.result = n, !0;
    r ? b === 44 && ot(e, "expected the node content, but found ','") : ot(e, "missed comma between flow collection entries"), y = m = C = null, u = f = !1, b === 63 && (h = e.input.charCodeAt(e.position + 1), re(h) && (u = f = !0, e.position++, Rt(e, !0, t))), i = e.line, s = e.lineStart, o = e.position, Dr(e, t, vo, !1, !0), y = e.tag, m = e.result, Rt(e, !0, t), b = e.input.charCodeAt(e.position), (f || e.line === i) && b === 58 && (u = !0, b = e.input.charCodeAt(++e.position), Rt(e, !0, t), Dr(e, t, vo, !1, !0), C = e.result), d ? Fr(e, n, g, y, m, C, i, s, o) : u ? n.push(Fr(e, null, g, y, m, C, i, s, o)) : n.push(m), Rt(e, !0, t), b = e.input.charCodeAt(e.position), b === 44 ? (r = !0, b = e.input.charCodeAt(++e.position)) : r = !1;
  }
  ot(e, "unexpected end of the stream within a flow collection");
}
p(Uf, "readFlowCollection");
function jf(e, t) {
  var r, i, s = Ha, o = !1, a = !1, n = t, l = 0, h = !1, c, u;
  if (u = e.input.charCodeAt(e.position), u === 124)
    i = !1;
  else if (u === 62)
    i = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; u !== 0; )
    if (u = e.input.charCodeAt(++e.position), u === 43 || u === 45)
      Ha === s ? s = u === 43 ? wc : T2 : ot(e, "repeat of a chomping mode identifier");
    else if ((c = Rf(u)) >= 0)
      c === 0 ? ot(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : a ? ot(e, "repeat of an indentation width identifier") : (n = t + c - 1, a = !0);
    else
      break;
  if (ur(u)) {
    do
      u = e.input.charCodeAt(++e.position);
    while (ur(u));
    if (u === 35)
      do
        u = e.input.charCodeAt(++e.position);
      while (!_e(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (Zo(e), e.lineIndent = 0, u = e.input.charCodeAt(e.position); (!a || e.lineIndent < n) && u === 32; )
      e.lineIndent++, u = e.input.charCodeAt(++e.position);
    if (!a && e.lineIndent > n && (n = e.lineIndent), _e(u)) {
      l++;
      continue;
    }
    if (e.lineIndent < n) {
      s === wc ? e.result += Ht.repeat(`
`, o ? 1 + l : l) : s === Ha && o && (e.result += `
`);
      break;
    }
    for (i ? ur(u) ? (h = !0, e.result += Ht.repeat(`
`, o ? 1 + l : l)) : h ? (h = !1, e.result += Ht.repeat(`
`, l + 1)) : l === 0 ? o && (e.result += " ") : e.result += Ht.repeat(`
`, l) : e.result += Ht.repeat(`
`, o ? 1 + l : l), o = !0, a = !0, l = 0, r = e.position; !_e(u) && u !== 0; )
      u = e.input.charCodeAt(++e.position);
    Qe(e, r, e.position, !1);
  }
  return !0;
}
p(jf, "readBlockScalar");
function _n(e, t) {
  var r, i = e.tag, s = e.anchor, o = [], a, n = !1, l;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = o), l = e.input.charCodeAt(e.position); l !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, ot(e, "tab characters must not be used in indentation")), !(l !== 45 || (a = e.input.charCodeAt(e.position + 1), !re(a)))); ) {
    if (n = !0, e.position++, Rt(e, !0, -1) && e.lineIndent <= t) {
      o.push(null), l = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, Dr(e, t, Ef, !1, !0), o.push(e.result), Rt(e, !0, -1), l = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && l !== 0)
      ot(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return n ? (e.tag = i, e.anchor = s, e.kind = "sequence", e.result = o, !0) : !1;
}
p(_n, "readBlockSequence");
function Gf(e, t, r) {
  var i, s, o, a, n, l, h = e.tag, c = e.anchor, u = {}, f = /* @__PURE__ */ Object.create(null), d = null, g = null, m = null, y = !1, C = !1, b;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = u), b = e.input.charCodeAt(e.position); b !== 0; ) {
    if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, ot(e, "tab characters must not be used in indentation")), i = e.input.charCodeAt(e.position + 1), o = e.line, (b === 63 || b === 58) && re(i))
      b === 63 ? (y && (Fr(e, u, f, d, g, null, a, n, l), d = g = m = null), C = !0, y = !0, s = !0) : y ? (y = !1, s = !0) : ot(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, b = i;
    else {
      if (a = e.line, n = e.lineStart, l = e.position, !Dr(e, r, Mf, !1, !0))
        break;
      if (e.line === o) {
        for (b = e.input.charCodeAt(e.position); ur(b); )
          b = e.input.charCodeAt(++e.position);
        if (b === 58)
          b = e.input.charCodeAt(++e.position), re(b) || ot(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Fr(e, u, f, d, g, null, a, n, l), d = g = m = null), C = !0, y = !1, s = !1, d = e.tag, g = e.result;
        else if (C)
          ot(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = h, e.anchor = c, !0;
      } else if (C)
        ot(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = h, e.anchor = c, !0;
    }
    if ((e.line === o || e.lineIndent > t) && (y && (a = e.line, n = e.lineStart, l = e.position), Dr(e, t, Lo, !0, s) && (y ? g = e.result : m = e.result), y || (Fr(e, u, f, d, g, m, a, n, l), d = g = m = null), Rt(e, !0, -1), b = e.input.charCodeAt(e.position)), (e.line === o || e.lineIndent > t) && b !== 0)
      ot(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return y && Fr(e, u, f, d, g, null, a, n, l), C && (e.tag = h, e.anchor = c, e.kind = "mapping", e.result = u), C;
}
p(Gf, "readBlockMapping");
function Xf(e) {
  var t, r = !1, i = !1, s, o, a;
  if (a = e.input.charCodeAt(e.position), a !== 33) return !1;
  if (e.tag !== null && ot(e, "duplication of a tag property"), a = e.input.charCodeAt(++e.position), a === 60 ? (r = !0, a = e.input.charCodeAt(++e.position)) : a === 33 ? (i = !0, s = "!!", a = e.input.charCodeAt(++e.position)) : s = "!", t = e.position, r) {
    do
      a = e.input.charCodeAt(++e.position);
    while (a !== 0 && a !== 62);
    e.position < e.length ? (o = e.input.slice(t, e.position), a = e.input.charCodeAt(++e.position)) : ot(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; a !== 0 && !re(a); )
      a === 33 && (i ? ot(e, "tag suffix cannot contain exclamation marks") : (s = e.input.slice(t - 1, e.position + 1), $f.test(s) || ot(e, "named tag handle cannot contain such characters"), i = !0, t = e.position + 1)), a = e.input.charCodeAt(++e.position);
    o = e.input.slice(t, e.position), v2.test(o) && ot(e, "tag suffix cannot contain flow indicator characters");
  }
  o && !Of.test(o) && ot(e, "tag name cannot contain such characters: " + o);
  try {
    o = decodeURIComponent(o);
  } catch {
    ot(e, "tag name is malformed: " + o);
  }
  return r ? e.tag = o : fr.call(e.tagMap, s) ? e.tag = e.tagMap[s] + o : s === "!" ? e.tag = "!" + o : s === "!!" ? e.tag = "tag:yaml.org,2002:" + o : ot(e, 'undeclared tag handle "' + s + '"'), !0;
}
p(Xf, "readTagProperty");
function Vf(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38) return !1;
  for (e.anchor !== null && ot(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !re(r) && !Lr(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && ot(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
p(Vf, "readAnchorProperty");
function Zf(e) {
  var t, r, i;
  if (i = e.input.charCodeAt(e.position), i !== 42) return !1;
  for (i = e.input.charCodeAt(++e.position), t = e.position; i !== 0 && !re(i) && !Lr(i); )
    i = e.input.charCodeAt(++e.position);
  return e.position === t && ot(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), fr.call(e.anchorMap, r) || ot(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], Rt(e, !0, -1), !0;
}
p(Zf, "readAlias");
function Dr(e, t, r, i, s) {
  var o, a, n, l = 1, h = !1, c = !1, u, f, d, g, m, y;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, o = a = n = Lo === r || Ef === r, i && Rt(e, !0, -1) && (h = !0, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)), l === 1)
    for (; Xf(e) || Vf(e); )
      Rt(e, !0, -1) ? (h = !0, n = o, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)) : n = !1;
  if (n && (n = h || s), (l === 1 || Lo === r) && (vo === r || Mf === r ? m = t : m = t + 1, y = e.position - e.lineStart, l === 1 ? n && (_n(e, y) || Gf(e, y, m)) || Uf(e, m) ? c = !0 : (a && jf(e, m) || Hf(e, m) || Yf(e, m) ? c = !0 : Zf(e) ? (c = !0, (e.tag !== null || e.anchor !== null) && ot(e, "alias node should not have any properties")) : zf(e, m, vo === r) && (c = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : l === 0 && (c = n && _n(e, y))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && ot(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), u = 0, f = e.implicitTypes.length; u < f; u += 1)
      if (g = e.implicitTypes[u], g.resolve(e.result)) {
        e.result = g.construct(e.result), e.tag = g.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (fr.call(e.typeMap[e.kind || "fallback"], e.tag))
      g = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (g = null, d = e.typeMap.multi[e.kind || "fallback"], u = 0, f = d.length; u < f; u += 1)
        if (e.tag.slice(0, d[u].tag.length) === d[u].tag) {
          g = d[u];
          break;
        }
    g || ot(e, "unknown tag !<" + e.tag + ">"), e.result !== null && g.kind !== e.kind && ot(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + g.kind + '", not "' + e.kind + '"'), g.resolve(e.result, e.tag) ? (e.result = g.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : ot(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || c;
}
p(Dr, "composeNode");
function Kf(e) {
  var t = e.position, r, i, s, o = !1, a;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (a = e.input.charCodeAt(e.position)) !== 0 && (Rt(e, !0, -1), a = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || a !== 37)); ) {
    for (o = !0, a = e.input.charCodeAt(++e.position), r = e.position; a !== 0 && !re(a); )
      a = e.input.charCodeAt(++e.position);
    for (i = e.input.slice(r, e.position), s = [], i.length < 1 && ot(e, "directive name must not be less than one character in length"); a !== 0; ) {
      for (; ur(a); )
        a = e.input.charCodeAt(++e.position);
      if (a === 35) {
        do
          a = e.input.charCodeAt(++e.position);
        while (a !== 0 && !_e(a));
        break;
      }
      if (_e(a)) break;
      for (r = e.position; a !== 0 && !re(a); )
        a = e.input.charCodeAt(++e.position);
      s.push(e.input.slice(r, e.position));
    }
    a !== 0 && Zo(e), fr.call(Sc, i) ? Sc[i](e, i, s) : ds(e, 'unknown document directive "' + i + '"');
  }
  if (Rt(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, Rt(e, !0, -1)) : o && ot(e, "directives end mark is expected"), Dr(e, e.lineIndent - 1, Lo, !1, !0), Rt(e, !0, -1), e.checkLineBreaks && B2.test(e.input.slice(t, e.position)) && ds(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Ss(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, Rt(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    ot(e, "end of the stream or a document separator is expected");
  else
    return;
}
p(Kf, "readDocument");
function vl(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new Wf(e, t), i = e.indexOf("\0");
  for (i !== -1 && (r.position = i, ot(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    Kf(r);
  return r.documents;
}
p(vl, "loadDocuments");
function L2(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var i = vl(e, r);
  if (typeof t != "function")
    return i;
  for (var s = 0, o = i.length; s < o; s += 1)
    t(i[s]);
}
p(L2, "loadAll$1");
function Qf(e, t) {
  var r = vl(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new ce("expected a single document in the stream, but found more");
  }
}
p(Qf, "load$1");
var F2 = Qf, A2 = {
  load: F2
}, Jf = Object.prototype.toString, tp = Object.prototype.hasOwnProperty, Ll = 65279, M2 = 9, fs = 10, E2 = 13, $2 = 32, O2 = 33, D2 = 34, Bn = 35, I2 = 37, R2 = 38, P2 = 39, N2 = 42, ep = 44, q2 = 45, Fo = 58, W2 = 61, z2 = 62, H2 = 63, Y2 = 64, rp = 91, ip = 93, U2 = 96, sp = 123, j2 = 124, op = 125, te = {};
te[0] = "\\0";
te[7] = "\\a";
te[8] = "\\b";
te[9] = "\\t";
te[10] = "\\n";
te[11] = "\\v";
te[12] = "\\f";
te[13] = "\\r";
te[27] = "\\e";
te[34] = '\\"';
te[92] = "\\\\";
te[133] = "\\N";
te[160] = "\\_";
te[8232] = "\\L";
te[8233] = "\\P";
var G2 = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], X2 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function ap(e, t) {
  var r, i, s, o, a, n, l;
  if (t === null) return {};
  for (r = {}, i = Object.keys(t), s = 0, o = i.length; s < o; s += 1)
    a = i[s], n = String(t[a]), a.slice(0, 2) === "!!" && (a = "tag:yaml.org,2002:" + a.slice(2)), l = e.compiledTypeMap.fallback[a], l && tp.call(l.styleAliases, n) && (n = l.styleAliases[n]), r[a] = n;
  return r;
}
p(ap, "compileStyleMap");
function np(e) {
  var t, r, i;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", i = 2;
  else if (e <= 65535)
    r = "u", i = 4;
  else if (e <= 4294967295)
    r = "U", i = 8;
  else
    throw new ce("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Ht.repeat("0", i - t.length) + t;
}
p(np, "encodeHex");
var V2 = 1, ps = 2;
function lp(e) {
  this.schema = e.schema || Af, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = Ht.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = ap(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? ps : V2, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
p(lp, "State");
function vn(e, t) {
  for (var r = Ht.repeat(" ", t), i = 0, s = -1, o = "", a, n = e.length; i < n; )
    s = e.indexOf(`
`, i), s === -1 ? (a = e.slice(i), i = n) : (a = e.slice(i, s + 1), i = s + 1), a.length && a !== `
` && (o += r), o += a;
  return o;
}
p(vn, "indentString");
function Ao(e, t) {
  return `
` + Ht.repeat(" ", e.indent * t);
}
p(Ao, "generateNextLine");
function hp(e, t) {
  var r, i, s;
  for (r = 0, i = e.implicitTypes.length; r < i; r += 1)
    if (s = e.implicitTypes[r], s.resolve(t))
      return !0;
  return !1;
}
p(hp, "testImplicitResolving");
function gs(e) {
  return e === $2 || e === M2;
}
p(gs, "isWhitespace");
function Bi(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== Ll || 65536 <= e && e <= 1114111;
}
p(Bi, "isPrintable");
function Ln(e) {
  return Bi(e) && e !== Ll && e !== E2 && e !== fs;
}
p(Ln, "isNsCharOrWhitespace");
function Fn(e, t, r) {
  var i = Ln(e), s = i && !gs(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      i
    ) : i && e !== ep && e !== rp && e !== ip && e !== sp && e !== op) && e !== Bn && !(t === Fo && !s) || Ln(t) && !gs(t) && e === Bn || t === Fo && s
  );
}
p(Fn, "isPlainSafe");
function cp(e) {
  return Bi(e) && e !== Ll && !gs(e) && e !== q2 && e !== H2 && e !== Fo && e !== ep && e !== rp && e !== ip && e !== sp && e !== op && e !== Bn && e !== R2 && e !== N2 && e !== O2 && e !== j2 && e !== W2 && e !== z2 && e !== P2 && e !== D2 && e !== I2 && e !== Y2 && e !== U2;
}
p(cp, "isPlainSafeFirst");
function up(e) {
  return !gs(e) && e !== Fo;
}
p(up, "isPlainSafeLast");
function ei(e, t) {
  var r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
p(ei, "codePointAt");
function Fl(e) {
  var t = /^\n* /;
  return t.test(e);
}
p(Fl, "needIndentIndicator");
var dp = 1, An = 2, fp = 3, pp = 4, Qr = 5;
function gp(e, t, r, i, s, o, a, n) {
  var l, h = 0, c = null, u = !1, f = !1, d = i !== -1, g = -1, m = cp(ei(e, 0)) && up(ei(e, e.length - 1));
  if (t || a)
    for (l = 0; l < e.length; h >= 65536 ? l += 2 : l++) {
      if (h = ei(e, l), !Bi(h))
        return Qr;
      m = m && Fn(h, c, n), c = h;
    }
  else {
    for (l = 0; l < e.length; h >= 65536 ? l += 2 : l++) {
      if (h = ei(e, l), h === fs)
        u = !0, d && (f = f || // Foldable line = too long, and not more-indented.
        l - g - 1 > i && e[g + 1] !== " ", g = l);
      else if (!Bi(h))
        return Qr;
      m = m && Fn(h, c, n), c = h;
    }
    f = f || d && l - g - 1 > i && e[g + 1] !== " ";
  }
  return !u && !f ? m && !a && !s(e) ? dp : o === ps ? Qr : An : r > 9 && Fl(e) ? Qr : a ? o === ps ? Qr : An : f ? pp : fp;
}
p(gp, "chooseScalarStyle");
function mp(e, t, r, i, s) {
  e.dump = (function() {
    if (t.length === 0)
      return e.quotingType === ps ? '""' : "''";
    if (!e.noCompatMode && (G2.indexOf(t) !== -1 || X2.test(t)))
      return e.quotingType === ps ? '"' + t + '"' : "'" + t + "'";
    var o = e.indent * Math.max(1, r), a = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o), n = i || e.flowLevel > -1 && r >= e.flowLevel;
    function l(h) {
      return hp(e, h);
    }
    switch (p(l, "testAmbiguity"), gp(
      t,
      n,
      e.indent,
      a,
      l,
      e.quotingType,
      e.forceQuotes && !i,
      s
    )) {
      case dp:
        return t;
      case An:
        return "'" + t.replace(/'/g, "''") + "'";
      case fp:
        return "|" + Mn(t, e.indent) + En(vn(t, o));
      case pp:
        return ">" + Mn(t, e.indent) + En(vn(yp(t, a), o));
      case Qr:
        return '"' + Cp(t) + '"';
      default:
        throw new ce("impossible error: invalid scalar style");
    }
  })();
}
p(mp, "writeScalar");
function Mn(e, t) {
  var r = Fl(e) ? String(t) : "", i = e[e.length - 1] === `
`, s = i && (e[e.length - 2] === `
` || e === `
`), o = s ? "+" : i ? "" : "-";
  return r + o + `
`;
}
p(Mn, "blockHeader");
function En(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
p(En, "dropEndingNewline");
function yp(e, t) {
  for (var r = /(\n+)([^\n]*)/g, i = (function() {
    var h = e.indexOf(`
`);
    return h = h !== -1 ? h : e.length, r.lastIndex = h, $n(e.slice(0, h), t);
  })(), s = e[0] === `
` || e[0] === " ", o, a; a = r.exec(e); ) {
    var n = a[1], l = a[2];
    o = l[0] === " ", i += n + (!s && !o && l !== "" ? `
` : "") + $n(l, t), s = o;
  }
  return i;
}
p(yp, "foldString");
function $n(e, t) {
  if (e === "" || e[0] === " ") return e;
  for (var r = / [^ ]/g, i, s = 0, o, a = 0, n = 0, l = ""; i = r.exec(e); )
    n = i.index, n - s > t && (o = a > s ? a : n, l += `
` + e.slice(s, o), s = o + 1), a = n;
  return l += `
`, e.length - s > t && a > s ? l += e.slice(s, a) + `
` + e.slice(a + 1) : l += e.slice(s), l.slice(1);
}
p($n, "foldLine");
function Cp(e) {
  for (var t = "", r = 0, i, s = 0; s < e.length; r >= 65536 ? s += 2 : s++)
    r = ei(e, s), i = te[r], !i && Bi(r) ? (t += e[s], r >= 65536 && (t += e[s + 1])) : t += i || np(r);
  return t;
}
p(Cp, "escapeString");
function xp(e, t, r) {
  var i = "", s = e.tag, o, a, n;
  for (o = 0, a = r.length; o < a; o += 1)
    n = r[o], e.replacer && (n = e.replacer.call(r, String(o), n)), (Pe(e, t, n, !1, !1) || typeof n > "u" && Pe(e, t, null, !1, !1)) && (i !== "" && (i += "," + (e.condenseFlow ? "" : " ")), i += e.dump);
  e.tag = s, e.dump = "[" + i + "]";
}
p(xp, "writeFlowSequence");
function On(e, t, r, i) {
  var s = "", o = e.tag, a, n, l;
  for (a = 0, n = r.length; a < n; a += 1)
    l = r[a], e.replacer && (l = e.replacer.call(r, String(a), l)), (Pe(e, t + 1, l, !0, !0, !1, !0) || typeof l > "u" && Pe(e, t + 1, null, !0, !0, !1, !0)) && ((!i || s !== "") && (s += Ao(e, t)), e.dump && fs === e.dump.charCodeAt(0) ? s += "-" : s += "- ", s += e.dump);
  e.tag = o, e.dump = s || "[]";
}
p(On, "writeBlockSequence");
function bp(e, t, r) {
  var i = "", s = e.tag, o = Object.keys(r), a, n, l, h, c;
  for (a = 0, n = o.length; a < n; a += 1)
    c = "", i !== "" && (c += ", "), e.condenseFlow && (c += '"'), l = o[a], h = r[l], e.replacer && (h = e.replacer.call(r, l, h)), Pe(e, t, l, !1, !1) && (e.dump.length > 1024 && (c += "? "), c += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), Pe(e, t, h, !1, !1) && (c += e.dump, i += c));
  e.tag = s, e.dump = "{" + i + "}";
}
p(bp, "writeFlowMapping");
function kp(e, t, r, i) {
  var s = "", o = e.tag, a = Object.keys(r), n, l, h, c, u, f;
  if (e.sortKeys === !0)
    a.sort();
  else if (typeof e.sortKeys == "function")
    a.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new ce("sortKeys must be a boolean or a function");
  for (n = 0, l = a.length; n < l; n += 1)
    f = "", (!i || s !== "") && (f += Ao(e, t)), h = a[n], c = r[h], e.replacer && (c = e.replacer.call(r, h, c)), Pe(e, t + 1, h, !0, !0, !0) && (u = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, u && (e.dump && fs === e.dump.charCodeAt(0) ? f += "?" : f += "? "), f += e.dump, u && (f += Ao(e, t)), Pe(e, t + 1, c, !0, u) && (e.dump && fs === e.dump.charCodeAt(0) ? f += ":" : f += ": ", f += e.dump, s += f));
  e.tag = o, e.dump = s || "{}";
}
p(kp, "writeBlockMapping");
function Dn(e, t, r) {
  var i, s, o, a, n, l;
  for (s = r ? e.explicitTypes : e.implicitTypes, o = 0, a = s.length; o < a; o += 1)
    if (n = s[o], (n.instanceOf || n.predicate) && (!n.instanceOf || typeof t == "object" && t instanceof n.instanceOf) && (!n.predicate || n.predicate(t))) {
      if (r ? n.multi && n.representName ? e.tag = n.representName(t) : e.tag = n.tag : e.tag = "?", n.represent) {
        if (l = e.styleMap[n.tag] || n.defaultStyle, Jf.call(n.represent) === "[object Function]")
          i = n.represent(t, l);
        else if (tp.call(n.represent, l))
          i = n.represent[l](t, l);
        else
          throw new ce("!<" + n.tag + '> tag resolver accepts not "' + l + '" style');
        e.dump = i;
      }
      return !0;
    }
  return !1;
}
p(Dn, "detectType");
function Pe(e, t, r, i, s, o, a) {
  e.tag = null, e.dump = r, Dn(e, r, !1) || Dn(e, r, !0);
  var n = Jf.call(e.dump), l = i, h;
  i && (i = e.flowLevel < 0 || e.flowLevel > t);
  var c = n === "[object Object]" || n === "[object Array]", u, f;
  if (c && (u = e.duplicates.indexOf(r), f = u !== -1), (e.tag !== null && e.tag !== "?" || f || e.indent !== 2 && t > 0) && (s = !1), f && e.usedDuplicates[u])
    e.dump = "*ref_" + u;
  else {
    if (c && f && !e.usedDuplicates[u] && (e.usedDuplicates[u] = !0), n === "[object Object]")
      i && Object.keys(e.dump).length !== 0 ? (kp(e, t, e.dump, s), f && (e.dump = "&ref_" + u + e.dump)) : (bp(e, t, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (n === "[object Array]")
      i && e.dump.length !== 0 ? (e.noArrayIndent && !a && t > 0 ? On(e, t - 1, e.dump, s) : On(e, t, e.dump, s), f && (e.dump = "&ref_" + u + e.dump)) : (xp(e, t, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (n === "[object String]")
      e.tag !== "?" && mp(e, e.dump, t, o, l);
    else {
      if (n === "[object Undefined]")
        return !1;
      if (e.skipInvalid) return !1;
      throw new ce("unacceptable kind of an object to dump " + n);
    }
    e.tag !== null && e.tag !== "?" && (h = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? h = "!" + h : h.slice(0, 18) === "tag:yaml.org,2002:" ? h = "!!" + h.slice(18) : h = "!<" + h + ">", e.dump = h + " " + e.dump);
  }
  return !0;
}
p(Pe, "writeNode");
function wp(e, t) {
  var r = [], i = [], s, o;
  for (Mo(e, r, i), s = 0, o = i.length; s < o; s += 1)
    t.duplicates.push(r[i[s]]);
  t.usedDuplicates = new Array(o);
}
p(wp, "getDuplicateReferences");
function Mo(e, t, r) {
  var i, s, o;
  if (e !== null && typeof e == "object")
    if (s = t.indexOf(e), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (t.push(e), Array.isArray(e))
      for (s = 0, o = e.length; s < o; s += 1)
        Mo(e[s], t, r);
    else
      for (i = Object.keys(e), s = 0, o = i.length; s < o; s += 1)
        Mo(e[i[s]], t, r);
}
p(Mo, "inspectNode");
function Z2(e, t) {
  t = t || {};
  var r = new lp(t);
  r.noRefs || wp(e, r);
  var i = e;
  return r.replacer && (i = r.replacer.call({ "": i }, "", i)), Pe(r, 0, i, !0, !0) ? r.dump + `
` : "";
}
p(Z2, "dump$1");
function K2(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
p(K2, "renamed");
var Q2 = ff, J2 = A2.load;
/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT *)
*/
var tw = /* @__PURE__ */ p((e) => {
  const { handDrawnSeed: t } = Tt();
  return {
    fill: e,
    hachureAngle: 120,
    // angle of hachure,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: e,
    seed: t
  };
}, "solidStateFill"), Fi = /* @__PURE__ */ p((e) => {
  const t = ew([
    ...e.cssCompiledStyles || [],
    ...e.cssStyles || [],
    ...e.labelStyle || []
  ]);
  return { stylesMap: t, stylesArray: [...t] };
}, "compileStyles"), ew = /* @__PURE__ */ p((e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    const [i, s] = r.split(":");
    t.set(i.trim(), s == null ? void 0 : s.trim());
  }), t;
}, "styles2Map"), Sp = /* @__PURE__ */ p((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle"), et = /* @__PURE__ */ p((e) => {
  const { stylesArray: t } = Fi(e), r = [], i = [], s = [], o = [];
  return t.forEach((a) => {
    const n = a[0];
    Sp(n) ? r.push(a.join(":") + " !important") : (i.push(a.join(":") + " !important"), n.includes("stroke") && s.push(a.join(":") + " !important"), n === "fill" && o.push(a.join(":") + " !important"));
  }), {
    labelStyles: r.join(";"),
    nodeStyles: i.join(";"),
    stylesArray: t,
    borderStyles: s,
    backgroundStyles: o
  };
}, "styles2String"), Q = /* @__PURE__ */ p((e, t) => {
  var l;
  const { themeVariables: r, handDrawnSeed: i } = Tt(), { nodeBorder: s, mainBkg: o } = r, { stylesMap: a } = Fi(e);
  return Object.assign(
    {
      roughness: 0.7,
      fill: a.get("fill") || o,
      fillStyle: "hachure",
      // solid fill
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: a.get("stroke") || s,
      seed: i,
      strokeWidth: ((l = a.get("stroke-width")) == null ? void 0 : l.replace("px", "")) || 1.3,
      fillLineDash: [0, 0],
      strokeLineDash: rw(a.get("stroke-dasharray"))
    },
    t
  );
}, "userNodeOverrides"), rw = /* @__PURE__ */ p((e) => {
  if (!e)
    return [0, 0];
  const t = e.trim().split(/\s+/).map(Number);
  if (t.length === 1) {
    const s = isNaN(t[0]) ? 0 : t[0];
    return [s, s];
  }
  const r = isNaN(t[0]) ? 0 : t[0], i = isNaN(t[1]) ? 0 : t[1];
  return [r, i];
}, "getStrokeDashArray"), zs = {}, Wt = {}, Tc;
function iw() {
  return Tc || (Tc = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.BLANK_URL = Wt.relativeFirstCharacters = Wt.whitespaceEscapeCharsRegex = Wt.urlSchemeRegex = Wt.ctrlCharactersRegex = Wt.htmlCtrlEntityRegex = Wt.htmlEntitiesRegex = Wt.invalidProtocolRegex = void 0, Wt.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, Wt.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, Wt.htmlCtrlEntityRegex = /&(newline|tab);/gi, Wt.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, Wt.urlSchemeRegex = /^.+(:|&colon;)/gim, Wt.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, Wt.relativeFirstCharacters = [".", "/"], Wt.BLANK_URL = "about:blank"), Wt;
}
var _c;
function sw() {
  if (_c) return zs;
  _c = 1, Object.defineProperty(zs, "__esModule", { value: !0 }), zs.sanitizeUrl = o;
  var e = iw();
  function t(a) {
    return e.relativeFirstCharacters.indexOf(a[0]) > -1;
  }
  function r(a) {
    var n = a.replace(e.ctrlCharactersRegex, "");
    return n.replace(e.htmlEntitiesRegex, function(l, h) {
      return String.fromCharCode(h);
    });
  }
  function i(a) {
    return URL.canParse(a);
  }
  function s(a) {
    try {
      return decodeURIComponent(a);
    } catch {
      return a;
    }
  }
  function o(a) {
    if (!a)
      return e.BLANK_URL;
    var n, l = s(a.trim());
    do
      l = r(l).replace(e.htmlCtrlEntityRegex, "").replace(e.ctrlCharactersRegex, "").replace(e.whitespaceEscapeCharsRegex, "").trim(), l = s(l), n = l.match(e.ctrlCharactersRegex) || l.match(e.htmlEntitiesRegex) || l.match(e.htmlCtrlEntityRegex) || l.match(e.whitespaceEscapeCharsRegex);
    while (n && n.length > 0);
    var h = l;
    if (!h)
      return e.BLANK_URL;
    if (t(h))
      return h;
    var c = h.trimStart(), u = c.match(e.urlSchemeRegex);
    if (!u)
      return h;
    var f = u[0].toLowerCase().trim();
    if (e.invalidProtocolRegex.test(f))
      return e.BLANK_URL;
    var d = c.replace(/\\/g, "/");
    if (f === "mailto:" || f.includes("://"))
      return d;
    if (f === "http:" || f === "https:") {
      if (!i(d))
        return e.BLANK_URL;
      var g = new URL(d);
      return g.protocol = g.protocol.toLowerCase(), g.hostname = g.hostname.toLowerCase(), g.toString();
    }
    return d;
  }
  return zs;
}
var ow = sw();
function Ya(e) {
  var r;
  if (typeof e != "object" || e == null) return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  if (Object.prototype.toString.call(e) !== "[object Object]") {
    const i = e[Symbol.toStringTag];
    return i == null || !((r = Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)) != null && r.writable) ? !1 : e.toString() === `[object ${i}]`;
  }
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function aw() {
}
function Tp(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function Al(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const nw = "[object RegExp]", _p = "[object String]", Bp = "[object Number]", vp = "[object Boolean]", Lp = "[object Arguments]", lw = "[object Symbol]", hw = "[object Date]", cw = "[object Map]", uw = "[object Set]", dw = "[object Array]", fw = "[object ArrayBuffer]", pw = "[object Object]", gw = "[object DataView]", mw = "[object Uint8Array]", yw = "[object Uint8ClampedArray]", Cw = "[object Uint16Array]", xw = "[object Uint32Array]", bw = "[object Int8Array]", kw = "[object Int16Array]", ww = "[object Int32Array]", Sw = "[object Float32Array]", Tw = "[object Float64Array]", Bc = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || /* @__PURE__ */ (function() {
  return this;
})();
function Ml(e) {
  return typeof Bc.Buffer < "u" && Bc.Buffer.isBuffer(e);
}
function _w(e) {
  return Number.isSafeInteger(e) && e >= 0;
}
function Fp(e) {
  return e != null && typeof e != "function" && _w(e.length);
}
function Bw(e) {
  return e === "__proto__";
}
function El(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function $l(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function vw(e, t) {
  return ri(e, void 0, e, /* @__PURE__ */ new Map(), t);
}
function ri(e, t, r, i = /* @__PURE__ */ new Map(), s = void 0) {
  const o = s == null ? void 0 : s(e, t, r, i);
  if (o !== void 0) return o;
  if (El(e)) return e;
  if (i.has(e)) return i.get(e);
  if (Array.isArray(e)) {
    const a = new Array(e.length);
    i.set(e, a);
    for (let n = 0; n < e.length; n++) a[n] = ri(e[n], n, r, i, s);
    return Object.hasOwn(e, "index") && (a.index = e.index), Object.hasOwn(e, "input") && (a.input = e.input), a;
  }
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) {
    const a = new RegExp(e.source, e.flags);
    return a.lastIndex = e.lastIndex, a;
  }
  if (e instanceof Map) {
    const a = /* @__PURE__ */ new Map();
    i.set(e, a);
    for (const [n, l] of e) a.set(n, ri(l, n, r, i, s));
    return a;
  }
  if (e instanceof Set) {
    const a = /* @__PURE__ */ new Set();
    i.set(e, a);
    for (const n of e) a.add(ri(n, void 0, r, i, s));
    return a;
  }
  if (Ml(e)) return e.subarray();
  if ($l(e)) {
    const a = new (Object.getPrototypeOf(e)).constructor(e.length);
    i.set(e, a);
    for (let n = 0; n < e.length; n++) a[n] = ri(e[n], n, r, i, s);
    return a;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
  if (e instanceof DataView) {
    const a = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return i.set(e, a), be(a, e, r, i, s), a;
  }
  if (typeof File < "u" && e instanceof File) {
    const a = new File([e], e.name, { type: e.type });
    return i.set(e, a), be(a, e, r, i, s), a;
  }
  if (typeof Blob < "u" && e instanceof Blob) {
    const a = new Blob([e], { type: e.type });
    return i.set(e, a), be(a, e, r, i, s), a;
  }
  if (e instanceof Error) {
    const a = structuredClone(e);
    return i.set(e, a), a.message = e.message, a.name = e.name, a.stack = e.stack, a.cause = e.cause, a.constructor = e.constructor, be(a, e, r, i, s), a;
  }
  if (e instanceof Boolean) {
    const a = new Boolean(e.valueOf());
    return i.set(e, a), be(a, e, r, i, s), a;
  }
  if (e instanceof Number) {
    const a = new Number(e.valueOf());
    return i.set(e, a), be(a, e, r, i, s), a;
  }
  if (e instanceof String) {
    const a = new String(e.valueOf());
    return i.set(e, a), be(a, e, r, i, s), a;
  }
  if (typeof e == "object" && Lw(e)) {
    const a = Object.create(Object.getPrototypeOf(e));
    return i.set(e, a), be(a, e, r, i, s), a;
  }
  return e;
}
function be(e, t, r = e, i, s) {
  const o = [...Object.keys(t), ...Tp(t)];
  for (let a = 0; a < o.length; a++) {
    const n = o[a], l = Object.getOwnPropertyDescriptor(e, n);
    (l == null || l.writable) && (e[n] = ri(t[n], n, r, i, s));
  }
}
function Lw(e) {
  switch (Al(e)) {
    case Lp:
    case dw:
    case fw:
    case gw:
    case vp:
    case hw:
    case Sw:
    case Tw:
    case bw:
    case kw:
    case ww:
    case cw:
    case Bp:
    case pw:
    case nw:
    case uw:
    case _p:
    case lw:
    case mw:
    case yw:
    case Cw:
    case xw:
      return !0;
    default:
      return !1;
  }
}
function Fw(e, t) {
  return vw(e, (r, i, s, o) => {
    if (typeof e == "object") {
      if (Al(e) === "[object Object]" && typeof e.constructor != "function") {
        const a = {};
        return o.set(e, a), be(a, e, s, o), a;
      }
      switch (Object.prototype.toString.call(e)) {
        case Bp:
        case _p:
        case vp: {
          const a = new e.constructor(e == null ? void 0 : e.valueOf());
          return be(a, e), a;
        }
        case Lp: {
          const a = {};
          return be(a, e), a.length = e.length, a[Symbol.iterator] = e[Symbol.iterator], a;
        }
        default:
          return;
      }
    }
  });
}
function vc(e) {
  return Fw(e);
}
function In(e) {
  return e !== null && typeof e == "object" && Al(e) === "[object Arguments]";
}
function Rn(e) {
  return typeof e == "object" && e !== null;
}
function Aw(e) {
  return Rn(e) && Fp(e);
}
function oo(e) {
  return $l(e);
}
function Mw(e) {
  const t = e == null ? void 0 : e.constructor;
  return e === (typeof t == "function" ? t.prototype : Object.prototype);
}
function Ts(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError("Expected a function");
  const r = function(...i) {
    const s = t ? t.apply(this, i) : i[0], o = r.cache;
    if (o.has(s)) return o.get(s);
    const a = e.apply(this, i);
    return r.cache = o.set(s, a) || o, a;
  };
  return r.cache = new (Ts.Cache || Map)(), r;
}
Ts.Cache = Map;
function Ew(e) {
  if (El(e)) return e;
  if (Array.isArray(e) || $l(e) || e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
  const t = Object.getPrototypeOf(e);
  if (t == null) return Object.assign(Object.create(t), e);
  const r = t.constructor;
  if (e instanceof Date || e instanceof Map || e instanceof Set) return new r(e);
  if (e instanceof RegExp) {
    const i = new r(e);
    return i.lastIndex = e.lastIndex, i;
  }
  if (e instanceof DataView) return new r(e.buffer.slice(0));
  if (e instanceof Error) {
    let i;
    return e instanceof AggregateError ? i = new r(e.errors, e.message, { cause: e.cause }) : i = new r(e.message, { cause: e.cause }), i.stack = e.stack, Object.assign(i, e), i;
  }
  return typeof File < "u" && e instanceof File ? new r([e], e.name, {
    type: e.type,
    lastModified: e.lastModified
  }) : typeof e == "object" ? Object.assign(Object.create(t), e) : e;
}
function $w(e, ...t) {
  const r = t.slice(0, -1), i = t[t.length - 1];
  let s = e;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    s = ao(s, a, i, /* @__PURE__ */ new Map());
  }
  return s;
}
function ao(e, t, r, i) {
  if (El(e) && (e = Object(e)), t == null || typeof t != "object") return e;
  if (i.has(t)) return Ew(i.get(t));
  if (i.set(t, e), Array.isArray(t)) {
    t = t.slice();
    for (let o = 0; o < t.length; o++) t[o] = t[o] ?? void 0;
  }
  const s = [...Object.keys(t), ...Tp(t)];
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (Bw(a)) continue;
    let n = t[a], l = e[a];
    if (In(n) && (n = { ...n }), In(l) && (l = { ...l }), Ml(n) && (n = vc(n)), Array.isArray(n)) if (Array.isArray(l)) {
      const c = [], u = Reflect.ownKeys(l);
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        c[d] = l[d];
      }
      l = c;
    } else if (Aw(l)) {
      const c = [];
      for (let u = 0; u < l.length; u++) c[u] = l[u];
      l = c;
    } else l = [];
    const h = r(l, n, a, e, t, i);
    h !== void 0 ? e[a] = h : Array.isArray(n) || Rn(l) && Rn(n) && (Ya(l) || Ya(n) || oo(l) || oo(n)) ? e[a] = ao(l, n, r, i) : l == null && Ya(n) ? e[a] = ao({}, n, r, i) : l == null && oo(n) ? e[a] = vc(n) : (l === void 0 || n !== void 0) && (e[a] = n);
  }
  return e;
}
function Ow(e, ...t) {
  return $w(e, ...t, aw);
}
function Lc(e) {
  if (e == null) return !0;
  if (Fp(e))
    return typeof e.splice != "function" && typeof e != "string" && !Ml(e) && !oo(e) && !In(e) ? !1 : e.length === 0;
  if (typeof e == "object" || typeof e == "function") {
    if (e instanceof Map || e instanceof Set) return e.size === 0;
    const t = Object.keys(e);
    return Mw(e) ? t.filter((r) => r !== "constructor").length === 0 : t.length === 0;
  }
  return !0;
}
var Dw = "​", Iw = {
  curveBasis: bn,
  curveBasisClosed: P1,
  curveBasisOpen: N1,
  curveBumpX: kd,
  curveBumpY: wd,
  curveBundle: q1,
  curveCardinalClosed: W1,
  curveCardinalOpen: z1,
  curveCardinal: Bd,
  curveCatmullRomClosed: H1,
  curveCatmullRomOpen: Y1,
  curveCatmullRom: Ld,
  curveLinear: ss,
  curveLinearClosed: U1,
  curveMonotoneX: Od,
  curveMonotoneY: Dd,
  curveNatural: Rd,
  curveStep: Pd,
  curveStepAfter: qd,
  curveStepBefore: Nd
}, Rw = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Pw = /* @__PURE__ */ p(function(e, t) {
  const r = Ap(e, /(?:init\b)|(?:initialize\b)/);
  let i = {};
  if (Array.isArray(r)) {
    const a = r.map((n) => n.args);
    uo(a), i = zt(i, [...a]);
  } else
    i = r.args;
  if (!i)
    return;
  let s = sl(e, t);
  const o = "config";
  return i[o] !== void 0 && (s === "flowchart-v2" && (s = "flowchart"), i[s] = i[o], delete i[o]), i;
}, "detectInit"), Ap = /* @__PURE__ */ p(function(e, t = null) {
  var r, i;
  try {
    const s = new RegExp(
      `[%]{2}(?![{]${Rw.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    e = e.trim().replace(s, "").replace(/'/gm, '"'), U.debug(
      `Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`
    );
    let o;
    const a = [];
    for (; (o = is.exec(e)) !== null; )
      if (o.index === is.lastIndex && is.lastIndex++, o && !t || t && ((r = o[1]) != null && r.match(t)) || t && ((i = o[2]) != null && i.match(t))) {
        const n = o[1] ? o[1] : o[2], l = o[3] ? o[3].trim() : o[4] ? JSON.parse(o[4].trim()) : null;
        a.push({ type: n, args: l });
      }
    return a.length === 0 ? { type: e, args: null } : a.length === 1 ? a[0] : a;
  } catch (s) {
    return U.error(
      `ERROR: ${s.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`
    ), { type: void 0, args: null };
  }
}, "detectDirective"), Nw = /* @__PURE__ */ p(function(e) {
  return e.replace(is, "");
}, "removeDirectives"), qw = /* @__PURE__ */ p(function(e, t) {
  for (const [r, i] of t.entries())
    if (i.match(e))
      return r;
  return -1;
}, "isSubstringInArray");
function Ol(e, t) {
  if (!e)
    return t;
  const r = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
  return Iw[r] ?? t;
}
p(Ol, "interpolateToCurve");
function Mp(e, t) {
  const r = e.trim();
  if (r)
    return t.securityLevel !== "loose" ? ow.sanitizeUrl(r) : r;
}
p(Mp, "formatUrl");
var Ww = /* @__PURE__ */ p((e, ...t) => {
  const r = e.split("."), i = r.length - 1, s = r[i];
  let o = window;
  for (let a = 0; a < i; a++)
    if (o = o[r[a]], !o) {
      U.error(`Function name: ${e} not found in window`);
      return;
    }
  o[s](...t);
}, "runFunc");
function Dl(e, t) {
  return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
p(Dl, "distance");
function Ep(e) {
  let t, r = 0;
  e.forEach((s) => {
    r += Dl(s, t), t = s;
  });
  const i = r / 2;
  return Il(e, i);
}
p(Ep, "traverseEdge");
function $p(e) {
  return e.length === 1 ? e[0] : Ep(e);
}
p($p, "calcLabelPosition");
var Fc = /* @__PURE__ */ p((e, t = 2) => {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}, "roundNumber"), Il = /* @__PURE__ */ p((e, t) => {
  let r, i = t;
  for (const s of e) {
    if (r) {
      const o = Dl(s, r);
      if (o === 0)
        return r;
      if (o < i)
        i -= o;
      else {
        const a = i / o;
        if (a <= 0)
          return r;
        if (a >= 1)
          return { x: s.x, y: s.y };
        if (a > 0 && a < 1)
          return {
            x: Fc((1 - a) * r.x + a * s.x, 5),
            y: Fc((1 - a) * r.y + a * s.y, 5)
          };
      }
    }
    r = s;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), zw = /* @__PURE__ */ p((e, t, r) => {
  U.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = t.reverse());
  const s = Il(t, 25), o = e ? 10 : 5, a = Math.atan2(t[0].y - s.y, t[0].x - s.x), n = { x: 0, y: 0 };
  return n.x = Math.sin(a) * o + (t[0].x + s.x) / 2, n.y = -Math.cos(a) * o + (t[0].y + s.y) / 2, n;
}, "calcCardinalityPosition");
function Op(e, t, r) {
  const i = structuredClone(r);
  U.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
  const s = 25 + e, o = Il(i, s), a = 10 + e * 0.5, n = Math.atan2(i[0].y - o.y, i[0].x - o.x), l = { x: 0, y: 0 };
  return t === "start_left" ? (l.x = Math.sin(n + Math.PI) * a + (i[0].x + o.x) / 2, l.y = -Math.cos(n + Math.PI) * a + (i[0].y + o.y) / 2) : t === "end_right" ? (l.x = Math.sin(n - Math.PI) * a + (i[0].x + o.x) / 2 - 5, l.y = -Math.cos(n - Math.PI) * a + (i[0].y + o.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(n) * a + (i[0].x + o.x) / 2 - 5, l.y = -Math.cos(n) * a + (i[0].y + o.y) / 2 - 5) : (l.x = Math.sin(n) * a + (i[0].x + o.x) / 2, l.y = -Math.cos(n) * a + (i[0].y + o.y) / 2), l;
}
p(Op, "calcTerminalLabelPosition");
function Dp(e) {
  let t = "", r = "";
  for (const i of e)
    i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r = r + i + ";" : t = t + i + ";");
  return { style: t, labelStyle: r };
}
p(Dp, "getStylesFromArray");
var Ac = 0, Hw = /* @__PURE__ */ p(() => (Ac++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Ac), "generateId");
function Ip(e) {
  let t = "";
  const r = "0123456789abcdef", i = r.length;
  for (let s = 0; s < e; s++)
    t += r.charAt(Math.floor(Math.random() * i));
  return t;
}
p(Ip, "makeRandomHex");
var Yw = /* @__PURE__ */ p((e) => Ip(e.length), "random"), Uw = /* @__PURE__ */ p(function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, "getTextObj"), jw = /* @__PURE__ */ p(function(e, t) {
  const r = t.text.replace(bs.lineBreakRegex, " "), [, i] = Qo(t.fontSize), s = e.append("text");
  s.attr("x", t.x), s.attr("y", t.y), s.style("text-anchor", t.anchor), s.style("font-family", t.fontFamily), s.style("font-size", i), s.style("font-weight", t.fontWeight), s.attr("fill", t.fill), t.class !== void 0 && s.attr("class", t.class);
  const o = s.append("tspan");
  return o.attr("x", t.x + t.textMargin * 2), o.attr("fill", t.fill), o.text(r), s;
}, "drawSimpleText"), Gw = Ts(
  (e, t, r) => {
    if (!e || (r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      r
    ), bs.lineBreakRegex.test(e)))
      return e;
    const i = e.split(" ").filter(Boolean), s = [];
    let o = "";
    return i.forEach((a, n) => {
      const l = tr(`${a} `, r), h = tr(o, r);
      if (l > t) {
        const { hyphenatedStrings: f, remainingWord: d } = Xw(a, t, "-", r);
        s.push(o, ...f), o = d;
      } else h + l >= t ? (s.push(o), o = a) : o = [o, a].filter(Boolean).join(" ");
      n + 1 === i.length && s.push(o);
    }), s.filter((a) => a !== "").join(r.joinWith);
  },
  (e, t, r) => `${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`
), Xw = Ts(
  (e, t, r = "-", i) => {
    i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      i
    );
    const s = [...e], o = [];
    let a = "";
    return s.forEach((n, l) => {
      const h = `${a}${n}`;
      if (tr(h, i) >= t) {
        const u = l + 1, f = s.length === u, d = `${h}${r}`;
        o.push(f ? h : d), a = "";
      } else
        a = h;
    }), { hyphenatedStrings: o, remainingWord: a };
  },
  (e, t, r = "-", i) => `${e}${t}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`
);
function Rp(e, t) {
  return Rl(e, t).height;
}
p(Rp, "calculateTextHeight");
function tr(e, t) {
  return Rl(e, t).width;
}
p(tr, "calculateTextWidth");
var Rl = Ts(
  (e, t) => {
    const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: s = 400 } = t;
    if (!e)
      return { width: 0, height: 0 };
    const [, o] = Qo(r), a = ["sans-serif", i], n = e.split(bs.lineBreakRegex), l = [], h = Ct("body");
    if (!h.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const c = h.append("svg");
    for (const f of a) {
      let d = 0;
      const g = { width: 0, height: 0, lineHeight: 0 };
      for (const m of n) {
        const y = Uw();
        y.text = m || Dw;
        const C = jw(c, y).style("font-size", o).style("font-weight", s).style("font-family", f), b = (C._groups || C)[0][0].getBBox();
        if (b.width === 0 && b.height === 0)
          throw new Error("svg element not in render tree");
        g.width = Math.round(Math.max(g.width, b.width)), d = Math.round(b.height), g.height += d, g.lineHeight = Math.round(Math.max(g.lineHeight, d));
      }
      l.push(g);
    }
    c.remove();
    const u = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[u];
  },
  (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`
), bi, Vw = (bi = class {
  constructor(t = !1, r) {
    this.count = 0, this.count = r ? r.length : 0, this.next = t ? () => this.count++ : () => Date.now();
  }
}, p(bi, "InitIDGenerator"), bi), Hs, Zw = /* @__PURE__ */ p(function(e) {
  return Hs = Hs || document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Hs.innerHTML = e, unescape(Hs.textContent);
}, "entityDecode");
function Pl(e) {
  return "str" in e;
}
p(Pl, "isDetailedError");
var Kw = /* @__PURE__ */ p((e, t, r, i) => {
  var o;
  if (!i)
    return;
  const s = (o = e.node()) == null ? void 0 : o.getBBox();
  s && e.append("text").text(i).attr("text-anchor", "middle").attr("x", s.x + s.width / 2).attr("y", -r).attr("class", t);
}, "insertTitle"), Qo = /* @__PURE__ */ p((e) => {
  if (typeof e == "number")
    return [e, e + "px"];
  const t = parseInt(e ?? "", 10);
  return Number.isNaN(t) ? [void 0, void 0] : e === String(t) ? [t, e + "px"] : [t, e];
}, "parseFontSize");
function Nl(e, t) {
  return Ow({}, e, t);
}
p(Nl, "cleanAndMerge");
var Te = {
  assignWithDepth: zt,
  wrapLabel: Gw,
  calculateTextHeight: Rp,
  calculateTextWidth: tr,
  calculateTextDimensions: Rl,
  cleanAndMerge: Nl,
  detectInit: Pw,
  detectDirective: Ap,
  isSubstringInArray: qw,
  interpolateToCurve: Ol,
  calcLabelPosition: $p,
  calcCardinalityPosition: zw,
  calcTerminalLabelPosition: Op,
  formatUrl: Mp,
  getStylesFromArray: Dp,
  generateId: Hw,
  random: Yw,
  runFunc: Ww,
  entityDecode: Zw,
  insertTitle: Kw,
  isLabelCoordinateInPath: Pp,
  parseFontSize: Qo,
  InitIDGenerator: Vw
}, Qw = /* @__PURE__ */ p(function(e) {
  let t = e;
  return t = t.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/#\w+;/g, function(r) {
    const i = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(i) ? "ﬂ°°" + i + "¶ß" : "ﬂ°" + i + "¶ß";
  }), t;
}, "encodeEntities"), Ir = /* @__PURE__ */ p(function(e) {
  return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), zF = /* @__PURE__ */ p((e, t, {
  counter: r = 0,
  prefix: i,
  suffix: s
}, o) => o || `${i ? `${i}_` : ""}${e}_${t}_${r}${s ? `_${s}` : ""}`, "getEdgeId");
function Ut(e) {
  return e ?? null;
}
p(Ut, "handleUndefinedAttr");
function Pp(e, t) {
  const r = Math.round(e.x), i = Math.round(e.y), s = t.replace(
    /(\d+\.\d+)/g,
    (o) => Math.round(parseFloat(o)).toString()
  );
  return s.includes(r.toString()) || s.includes(i.toString());
}
p(Pp, "isLabelCoordinateInPath");
var ql = /* @__PURE__ */ p(({
  flowchart: e
}) => {
  var s, o;
  const t = ((s = e == null ? void 0 : e.subGraphTitleMargin) == null ? void 0 : s.top) ?? 0, r = ((o = e == null ? void 0 : e.subGraphTitleMargin) == null ? void 0 : o.bottom) ?? 0, i = t + r;
  return {
    subGraphTitleTopMargin: t,
    subGraphTitleBottomMargin: r,
    subGraphTitleTotalMargin: i
  };
}, "getSubGraphTitleMargins");
async function Np(e, t) {
  const r = e.getElementsByTagName("img");
  if (!r || r.length === 0)
    return;
  const i = t.replace(/<img[^>]*>/g, "").trim() === "";
  await Promise.all(
    [...r].map(
      (s) => new Promise((o) => {
        function a() {
          if (s.style.display = "flex", s.style.flexDirection = "column", i) {
            const n = Tt().fontSize ? Tt().fontSize : window.getComputedStyle(document.body).fontSize, l = 5, [h = Au.fontSize] = Qo(n), c = h * l + "px";
            s.style.minWidth = c, s.style.maxWidth = c;
          } else
            s.style.width = "100%";
          o(s);
        }
        p(a, "setupImage"), setTimeout(() => {
          s.complete && a();
        }), s.addEventListener("error", a), s.addEventListener("load", a);
      })
    )
  );
}
p(Np, "configureLabelImages");
const Jw = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), Eo = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), qp = Object.freeze({
  ...Jw,
  ...Eo
}), tS = Object.freeze({
  ...qp,
  body: "",
  hidden: !1
}), eS = Object.freeze({
  width: null,
  height: null
}), rS = Object.freeze({
  ...eS,
  ...Eo
}), iS = (e, t, r, i = "") => {
  const s = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (s.length < 2 || s.length > 3) return null;
    i = s.shift().slice(1);
  }
  if (s.length > 3 || !s.length) return null;
  if (s.length > 1) {
    const n = s.pop(), l = s.pop(), h = {
      provider: s.length > 0 ? s[0] : i,
      prefix: l,
      name: n
    };
    return Ua(h) ? h : null;
  }
  const o = s[0], a = o.split("-");
  if (a.length > 1) {
    const n = {
      provider: i,
      prefix: a.shift(),
      name: a.join("-")
    };
    return Ua(n) ? n : null;
  }
  if (r && i === "") {
    const n = {
      provider: i,
      prefix: "",
      name: o
    };
    return Ua(n, r) ? n : null;
  }
  return null;
}, Ua = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1;
function sS(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (r.rotate = i), r;
}
function Mc(e, t) {
  const r = sS(e, t);
  for (const i in tS) i in Eo ? i in e && !(i in r) && (r[i] = Eo[i]) : i in t ? r[i] = t[i] : i in e && (r[i] = e[i]);
  return r;
}
function oS(e, t) {
  const r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
  function o(a) {
    if (r[a]) return s[a] = [];
    if (!(a in s)) {
      s[a] = null;
      const n = i[a] && i[a].parent, l = n && o(n);
      l && (s[a] = [n].concat(l));
    }
    return s[a];
  }
  return (t || Object.keys(r).concat(Object.keys(i))).forEach(o), s;
}
function Ec(e, t, r) {
  const i = e.icons, s = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function a(n) {
    o = Mc(i[n] || s[n], o);
  }
  return a(t), r.forEach(a), Mc(e, o);
}
function aS(e, t) {
  if (e.icons[t]) return Ec(e, t, []);
  const r = oS(e, [t])[t];
  return r ? Ec(e, t, r) : null;
}
const nS = /(-?[0-9.]*[0-9]+[0-9.]*)/g, lS = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function $c(e, t, r) {
  if (t === 1) return e;
  if (r = r || 100, typeof e == "number") return Math.ceil(e * t * r) / r;
  if (typeof e != "string") return e;
  const i = e.split(nS);
  if (i === null || !i.length) return e;
  const s = [];
  let o = i.shift(), a = lS.test(o);
  for (; ; ) {
    if (a) {
      const n = parseFloat(o);
      isNaN(n) ? s.push(o) : s.push(Math.ceil(n * t * r) / r);
    } else s.push(o);
    if (o = i.shift(), o === void 0) return s.join("");
    a = !a;
  }
}
function hS(e, t = "defs") {
  let r = "";
  const i = e.indexOf("<" + t);
  for (; i >= 0; ) {
    const s = e.indexOf(">", i), o = e.indexOf("</" + t);
    if (s === -1 || o === -1) break;
    const a = e.indexOf(">", o);
    if (a === -1) break;
    r += e.slice(s + 1, o).trim(), e = e.slice(0, i).trim() + e.slice(a + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function cS(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function uS(e, t, r) {
  const i = hS(e);
  return cS(i.defs, t + i.content + r);
}
const dS = (e) => e === "unset" || e === "undefined" || e === "none";
function fS(e, t) {
  const r = {
    ...qp,
    ...e
  }, i = {
    ...rS,
    ...t
  }, s = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let o = r.body;
  [r, i].forEach((m) => {
    const y = [], C = m.hFlip, b = m.vFlip;
    let k = m.rotate;
    C ? b ? k += 2 : (y.push("translate(" + (s.width + s.left).toString() + " " + (0 - s.top).toString() + ")"), y.push("scale(-1 1)"), s.top = s.left = 0) : b && (y.push("translate(" + (0 - s.left).toString() + " " + (s.height + s.top).toString() + ")"), y.push("scale(1 -1)"), s.top = s.left = 0);
    let S;
    switch (k < 0 && (k -= Math.floor(k / 4) * 4), k = k % 4, k) {
      case 1:
        S = s.height / 2 + s.top, y.unshift("rotate(90 " + S.toString() + " " + S.toString() + ")");
        break;
      case 2:
        y.unshift("rotate(180 " + (s.width / 2 + s.left).toString() + " " + (s.height / 2 + s.top).toString() + ")");
        break;
      case 3:
        S = s.width / 2 + s.left, y.unshift("rotate(-90 " + S.toString() + " " + S.toString() + ")");
        break;
    }
    k % 2 === 1 && (s.left !== s.top && (S = s.left, s.left = s.top, s.top = S), s.width !== s.height && (S = s.width, s.width = s.height, s.height = S)), y.length && (o = uS(o, '<g transform="' + y.join(" ") + '">', "</g>"));
  });
  const a = i.width, n = i.height, l = s.width, h = s.height;
  let c, u;
  a === null ? (u = n === null ? "1em" : n === "auto" ? h : n, c = $c(u, l / h)) : (c = a === "auto" ? l : a, u = n === null ? $c(c, h / l) : n === "auto" ? h : n);
  const f = {}, d = (m, y) => {
    dS(y) || (f[m] = y.toString());
  };
  d("width", c), d("height", u);
  const g = [
    s.left,
    s.top,
    l,
    h
  ];
  return f.viewBox = g.join(" "), {
    attributes: f,
    viewBox: g,
    body: o
  };
}
const pS = /\sid="(\S+)"/g, Oc = /* @__PURE__ */ new Map();
function gS(e) {
  e = e.replace(/[0-9]+$/, "") || "a";
  const t = Oc.get(e) || 0;
  return Oc.set(e, t + 1), t ? `${e}${t}` : e;
}
function mS(e) {
  const t = [];
  let r;
  for (; r = pS.exec(e); ) t.push(r[1]);
  if (!t.length) return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((s) => {
    const o = gS(s), a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"), "$1" + o + i + "$3");
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
function yS(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t) r += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
var CS = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
}, Pn = /* @__PURE__ */ new Map(), Wp = /* @__PURE__ */ new Map(), xS = /* @__PURE__ */ p((e) => {
  for (const t of e) {
    if (!t.name)
      throw new Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.'
      );
    if (U.debug("Registering icon pack:", t.name), "loader" in t)
      Wp.set(t.name, t.loader);
    else if ("icons" in t)
      Pn.set(t.name, t.icons);
    else
      throw U.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks"), zp = /* @__PURE__ */ p(async (e, t) => {
  const r = iS(e, !0, t !== void 0);
  if (!r)
    throw new Error(`Invalid icon name: ${e}`);
  const i = r.prefix || t;
  if (!i)
    throw new Error(`Icon name must contain a prefix: ${e}`);
  let s = Pn.get(i);
  if (!s) {
    const a = Wp.get(i);
    if (!a)
      throw new Error(`Icon set not found: ${r.prefix}`);
    try {
      s = { ...await a(), prefix: i }, Pn.set(i, s);
    } catch (n) {
      throw U.error(n), new Error(`Failed to load icon set: ${r.prefix}`);
    }
  }
  const o = aS(s, r.name);
  if (!o)
    throw new Error(`Icon not found: ${e}`);
  return o;
}, "getRegisteredIconData"), bS = /* @__PURE__ */ p(async (e) => {
  try {
    return await zp(e), !0;
  } catch {
    return !1;
  }
}, "isIconAvailable"), _s = /* @__PURE__ */ p(async (e, t, r) => {
  let i;
  try {
    i = await zp(e, t == null ? void 0 : t.fallbackPrefix);
  } catch (a) {
    U.error(a), i = CS;
  }
  const s = fS(i, t), o = yS(mS(s.body), {
    ...s.attributes,
    ...r
  });
  return ve(o, Ot());
}, "getIconSVG");
function Wl() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Nr = Wl();
function Hp(e) {
  Nr = e;
}
var os = { exec: () => null };
function _t(e, t = "") {
  let r = typeof e == "string" ? e : e.source, i = { replace: (s, o) => {
    let a = typeof o == "string" ? o : o.source;
    return a = a.replace(ie.caret, "$1"), r = r.replace(s, a), i;
  }, getRegex: () => new RegExp(r, t) };
  return i;
}
var kS = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), ie = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, wS = /^(?:[ \t]*(?:\n|$))+/, SS = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, TS = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Bs = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, _S = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, zl = /(?:[*+-]|\d{1,9}[.)])/, Yp = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Up = _t(Yp).replace(/bull/g, zl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), BS = _t(Yp).replace(/bull/g, zl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Hl = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, vS = /^[^\n]+/, Yl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, LS = _t(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Yl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), FS = _t(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, zl).getRegex(), Jo = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ul = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, AS = _t("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Ul).replace("tag", Jo).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), jp = _t(Hl).replace("hr", Bs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Jo).getRegex(), MS = _t(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", jp).getRegex(), jl = { blockquote: MS, code: SS, def: LS, fences: TS, heading: _S, hr: Bs, html: AS, lheading: Up, list: FS, newline: wS, paragraph: jp, table: os, text: vS }, Dc = _t("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Bs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Jo).getRegex(), ES = { ...jl, lheading: BS, table: Dc, paragraph: _t(Hl).replace("hr", Bs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Dc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Jo).getRegex() }, $S = { ...jl, html: _t(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ul).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: os, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: _t(Hl).replace("hr", Bs).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Up).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, OS = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, DS = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Gp = /^( {2,}|\\)\n(?!\s*$)/, IS = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ta = /[\p{P}\p{S}]/u, Gl = /[\s\p{P}\p{S}]/u, Xp = /[^\s\p{P}\p{S}]/u, RS = _t(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Gl).getRegex(), Vp = /(?!~)[\p{P}\p{S}]/u, PS = /(?!~)[\s\p{P}\p{S}]/u, NS = /(?:[^\s\p{P}\p{S}]|~)/u, qS = _t(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", kS ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Zp = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, WS = _t(Zp, "u").replace(/punct/g, ta).getRegex(), zS = _t(Zp, "u").replace(/punct/g, Vp).getRegex(), Kp = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", HS = _t(Kp, "gu").replace(/notPunctSpace/g, Xp).replace(/punctSpace/g, Gl).replace(/punct/g, ta).getRegex(), YS = _t(Kp, "gu").replace(/notPunctSpace/g, NS).replace(/punctSpace/g, PS).replace(/punct/g, Vp).getRegex(), US = _t("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Xp).replace(/punctSpace/g, Gl).replace(/punct/g, ta).getRegex(), jS = _t(/\\(punct)/, "gu").replace(/punct/g, ta).getRegex(), GS = _t(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), XS = _t(Ul).replace("(?:-->|$)", "-->").getRegex(), VS = _t("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", XS).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), $o = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, ZS = _t(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", $o).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Qp = _t(/^!?\[(label)\]\[(ref)\]/).replace("label", $o).replace("ref", Yl).getRegex(), Jp = _t(/^!?\[(ref)\](?:\[\])?/).replace("ref", Yl).getRegex(), KS = _t("reflink|nolink(?!\\()", "g").replace("reflink", Qp).replace("nolink", Jp).getRegex(), Ic = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Xl = { _backpedal: os, anyPunctuation: jS, autolink: GS, blockSkip: qS, br: Gp, code: DS, del: os, emStrongLDelim: WS, emStrongRDelimAst: HS, emStrongRDelimUnd: US, escape: OS, link: ZS, nolink: Jp, punctuation: RS, reflink: Qp, reflinkSearch: KS, tag: VS, text: IS, url: os }, QS = { ...Xl, link: _t(/^!?\[(label)\]\((.*?)\)/).replace("label", $o).getRegex(), reflink: _t(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", $o).getRegex() }, Nn = { ...Xl, emStrongRDelimAst: YS, emStrongLDelim: zS, url: _t(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Ic).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: _t(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Ic).getRegex() }, JS = { ...Nn, br: _t(Gp).replace("{2,}", "*").getRegex(), text: _t(Nn.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Ys = { normal: jl, gfm: ES, pedantic: $S }, Wi = { normal: Xl, gfm: Nn, breaks: JS, pedantic: QS }, tT = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Rc = (e) => tT[e];
function $e(e, t) {
  if (t) {
    if (ie.escapeTest.test(e)) return e.replace(ie.escapeReplace, Rc);
  } else if (ie.escapeTestNoEncode.test(e)) return e.replace(ie.escapeReplaceNoEncode, Rc);
  return e;
}
function Pc(e) {
  try {
    e = encodeURI(e).replace(ie.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Nc(e, t) {
  var o;
  let r = e.replace(ie.findPipe, (a, n, l) => {
    let h = !1, c = n;
    for (; --c >= 0 && l[c] === "\\"; ) h = !h;
    return h ? "|" : " |";
  }), i = r.split(ie.splitPipe), s = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !((o = i.at(-1)) != null && o.trim()) && i.pop(), t) if (i.length > t) i.splice(t);
  else for (; i.length < t; ) i.push("");
  for (; s < i.length; s++) i[s] = i[s].trim().replace(ie.slashPipe, "|");
  return i;
}
function zi(e, t, r) {
  let i = e.length;
  if (i === 0) return "";
  let s = 0;
  for (; s < i && e.charAt(i - s - 1) === t; )
    s++;
  return e.slice(0, i - s);
}
function eT(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let i = 0; i < e.length; i++) if (e[i] === "\\") i++;
  else if (e[i] === t[0]) r++;
  else if (e[i] === t[1] && (r--, r < 0)) return i;
  return r > 0 ? -2 : -1;
}
function qc(e, t, r, i, s) {
  let o = t.href, a = t.title || null, n = e[1].replace(s.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: r, href: o, title: a, text: n, tokens: i.inlineTokens(n) };
  return i.state.inLink = !1, l;
}
function rT(e, t, r) {
  let i = e.match(r.other.indentCodeCompensation);
  if (i === null) return t;
  let s = i[1];
  return t.split(`
`).map((o) => {
    let a = o.match(r.other.beginningSpace);
    if (a === null) return o;
    let [n] = a;
    return n.length >= s.length ? o.slice(s.length) : o;
  }).join(`
`);
}
var Oo = class {
  constructor(t) {
    At(this, "options");
    At(this, "rules");
    At(this, "lexer");
    this.options = t || Nr;
  }
  space(t) {
    let r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0) return { type: "space", raw: r[0] };
  }
  code(t) {
    let r = this.rules.block.code.exec(t);
    if (r) {
      let i = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : zi(i, `
`) };
    }
  }
  fences(t) {
    let r = this.rules.block.fences.exec(t);
    if (r) {
      let i = r[0], s = rT(i, r[3] || "", this.rules);
      return { type: "code", raw: i, lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2], text: s };
    }
  }
  heading(t) {
    let r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (this.rules.other.endingHash.test(i)) {
        let s = zi(i, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (i = s.trim());
      }
      return { type: "heading", raw: r[0], depth: r[1].length, text: i, tokens: this.lexer.inline(i) };
    }
  }
  hr(t) {
    let r = this.rules.block.hr.exec(t);
    if (r) return { type: "hr", raw: zi(r[0], `
`) };
  }
  blockquote(t) {
    let r = this.rules.block.blockquote.exec(t);
    if (r) {
      let i = zi(r[0], `
`).split(`
`), s = "", o = "", a = [];
      for (; i.length > 0; ) {
        let n = !1, l = [], h;
        for (h = 0; h < i.length; h++) if (this.rules.other.blockquoteStart.test(i[h])) l.push(i[h]), n = !0;
        else if (!n) l.push(i[h]);
        else break;
        i = i.slice(h);
        let c = l.join(`
`), u = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${c}` : c, o = o ? `${o}
${u}` : u;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(u, a, !0), this.lexer.state.top = f, i.length === 0) break;
        let d = a.at(-1);
        if ((d == null ? void 0 : d.type) === "code") break;
        if ((d == null ? void 0 : d.type) === "blockquote") {
          let g = d, m = g.raw + `
` + i.join(`
`), y = this.blockquote(m);
          a[a.length - 1] = y, s = s.substring(0, s.length - g.raw.length) + y.raw, o = o.substring(0, o.length - g.text.length) + y.text;
          break;
        } else if ((d == null ? void 0 : d.type) === "list") {
          let g = d, m = g.raw + `
` + i.join(`
`), y = this.list(m);
          a[a.length - 1] = y, s = s.substring(0, s.length - d.raw.length) + y.raw, o = o.substring(0, o.length - g.raw.length) + y.raw, i = m.substring(a.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: a, text: o };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i = r[1].trim(), s = i.length > 1, o = { type: "list", raw: "", ordered: s, start: s ? +i.slice(0, -1) : "", loose: !1, items: [] };
      i = s ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = s ? i : "[*+-]");
      let a = this.rules.other.listItemRegex(i), n = !1;
      for (; t; ) {
        let h = !1, c = "", u = "";
        if (!(r = a.exec(t)) || this.rules.block.hr.test(t)) break;
        c = r[0], t = t.substring(c.length);
        let f = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), d = t.split(`
`, 1)[0], g = !f.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, u = f.trimStart()) : g ? m = r[1].length + 1 : (m = r[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, u = f.slice(m), m += r[1].length), g && this.rules.other.blankLine.test(d) && (c += d + `
`, t = t.substring(d.length + 1), h = !0), !h) {
          let b = this.rules.other.nextBulletRegex(m), k = this.rules.other.hrRegex(m), S = this.rules.other.fencesBeginRegex(m), T = this.rules.other.headingBeginRegex(m), _ = this.rules.other.htmlBeginRegex(m);
          for (; t; ) {
            let v = t.split(`
`, 1)[0], L;
            if (d = v, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), L = d) : L = d.replace(this.rules.other.tabCharGlobal, "    "), S.test(d) || T.test(d) || _.test(d) || b.test(d) || k.test(d)) break;
            if (L.search(this.rules.other.nonSpaceChar) >= m || !d.trim()) u += `
` + L.slice(m);
            else {
              if (g || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || S.test(f) || T.test(f) || k.test(f)) break;
              u += `
` + d;
            }
            !g && !d.trim() && (g = !0), c += v + `
`, t = t.substring(v.length + 1), f = L.slice(m);
          }
        }
        o.loose || (n ? o.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (n = !0));
        let y = null, C;
        this.options.gfm && (y = this.rules.other.listIsTask.exec(u), y && (C = y[0] !== "[ ] ", u = u.replace(this.rules.other.listReplaceTask, ""))), o.items.push({ type: "list_item", raw: c, task: !!y, checked: C, loose: !1, text: u, tokens: [] }), o.raw += c;
      }
      let l = o.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      o.raw = o.raw.trimEnd();
      for (let h = 0; h < o.items.length; h++) if (this.lexer.state.top = !1, o.items[h].tokens = this.lexer.blockTokens(o.items[h].text, []), !o.loose) {
        let c = o.items[h].tokens.filter((f) => f.type === "space"), u = c.length > 0 && c.some((f) => this.rules.other.anyLine.test(f.raw));
        o.loose = u;
      }
      if (o.loose) for (let h = 0; h < o.items.length; h++) o.items[h].loose = !0;
      return o;
    }
  }
  html(t) {
    let r = this.rules.block.html.exec(t);
    if (r) return { type: "html", block: !0, raw: r[0], pre: r[1] === "pre" || r[1] === "script" || r[1] === "style", text: r[0] };
  }
  def(t) {
    let r = this.rules.block.def.exec(t);
    if (r) {
      let i = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return { type: "def", tag: i, raw: r[0], href: s, title: o };
    }
  }
  table(t) {
    var n;
    let r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
    let i = Nc(r[1]), s = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = (n = r[3]) != null && n.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: r[0], header: [], align: [], rows: [] };
    if (i.length === s.length) {
      for (let l of s) this.rules.other.tableAlignRight.test(l) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(l) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(l) ? a.align.push("left") : a.align.push(null);
      for (let l = 0; l < i.length; l++) a.header.push({ text: i[l], tokens: this.lexer.inline(i[l]), header: !0, align: a.align[l] });
      for (let l of o) a.rows.push(Nc(l, a.header.length).map((h, c) => ({ text: h, tokens: this.lexer.inline(h), header: !1, align: a.align[c] })));
      return a;
    }
  }
  lheading(t) {
    let r = this.rules.block.lheading.exec(t);
    if (r) return { type: "heading", raw: r[0], depth: r[2].charAt(0) === "=" ? 1 : 2, text: r[1], tokens: this.lexer.inline(r[1]) };
  }
  paragraph(t) {
    let r = this.rules.block.paragraph.exec(t);
    if (r) {
      let i = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return { type: "paragraph", raw: r[0], text: i, tokens: this.lexer.inline(i) };
    }
  }
  text(t) {
    let r = this.rules.block.text.exec(t);
    if (r) return { type: "text", raw: r[0], text: r[0], tokens: this.lexer.inline(r[0]) };
  }
  escape(t) {
    let r = this.rules.inline.escape.exec(t);
    if (r) return { type: "escape", raw: r[0], text: r[1] };
  }
  tag(t) {
    let r = this.rules.inline.tag.exec(t);
    if (r) return !this.lexer.state.inLink && this.rules.other.startATag.test(r[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(r[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(r[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: r[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: r[0] };
  }
  link(t) {
    let r = this.rules.inline.link.exec(t);
    if (r) {
      let i = r[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
        if (!this.rules.other.endAngleBracket.test(i)) return;
        let a = zi(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0) return;
      } else {
        let a = eT(r[2], "()");
        if (a === -2) return;
        if (a > -1) {
          let n = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + a;
          r[2] = r[2].substring(0, a), r[0] = r[0].substring(0, n).trim(), r[3] = "";
        }
      }
      let s = r[2], o = "";
      if (this.options.pedantic) {
        let a = this.rules.other.pedanticHrefTitle.exec(s);
        a && (s = a[1], o = a[3]);
      } else o = r[3] ? r[3].slice(1, -1) : "";
      return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? s = s.slice(1) : s = s.slice(1, -1)), qc(r, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      let s = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), o = r[s.toLowerCase()];
      if (!o) {
        let a = i[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return qc(i, o, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, i = "") {
    let s = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!s || s[3] && i.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !i || this.rules.inline.punctuation.exec(i))) {
      let o = [...s[0]].length - 1, a, n, l = o, h = 0, c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, r = r.slice(-1 * t.length + o); (s = c.exec(r)) != null; ) {
        if (a = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !a) continue;
        if (n = [...a].length, s[3] || s[4]) {
          l += n;
          continue;
        } else if ((s[5] || s[6]) && o % 3 && !((o + n) % 3)) {
          h += n;
          continue;
        }
        if (l -= n, l > 0) continue;
        n = Math.min(n, n + l + h);
        let u = [...s[0]][0].length, f = t.slice(0, o + s.index + u + n);
        if (Math.min(o, n) % 2) {
          let g = f.slice(1, -1);
          return { type: "em", raw: f, text: g, tokens: this.lexer.inlineTokens(g) };
        }
        let d = f.slice(2, -2);
        return { type: "strong", raw: f, text: d, tokens: this.lexer.inlineTokens(d) };
      }
    }
  }
  codespan(t) {
    let r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(i), o = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
      return s && o && (i = i.substring(1, i.length - 1)), { type: "codespan", raw: r[0], text: i };
    }
  }
  br(t) {
    let r = this.rules.inline.br.exec(t);
    if (r) return { type: "br", raw: r[0] };
  }
  del(t) {
    let r = this.rules.inline.del.exec(t);
    if (r) return { type: "del", raw: r[0], text: r[2], tokens: this.lexer.inlineTokens(r[2]) };
  }
  autolink(t) {
    let r = this.rules.inline.autolink.exec(t);
    if (r) {
      let i, s;
      return r[2] === "@" ? (i = r[1], s = "mailto:" + i) : (i = r[1], s = i), { type: "link", raw: r[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(t) {
    var i;
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let s, o;
      if (r[2] === "@") s = r[0], o = "mailto:" + s;
      else {
        let a;
        do
          a = r[0], r[0] = ((i = this.rules.inline._backpedal.exec(r[0])) == null ? void 0 : i[0]) ?? "";
        while (a !== r[0]);
        s = r[0], r[1] === "www." ? o = "http://" + r[0] : o = r[0];
      }
      return { type: "link", raw: r[0], text: s, href: o, tokens: [{ type: "text", raw: s, text: s }] };
    }
  }
  inlineText(t) {
    let r = this.rules.inline.text.exec(t);
    if (r) {
      let i = this.lexer.state.inRawBlock;
      return { type: "text", raw: r[0], text: r[0], escaped: i };
    }
  }
}, ke = class qn {
  constructor(t) {
    At(this, "tokens");
    At(this, "options");
    At(this, "state");
    At(this, "tokenizer");
    At(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Nr, this.options.tokenizer = this.options.tokenizer || new Oo(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let r = { other: ie, block: Ys.normal, inline: Wi.normal };
    this.options.pedantic ? (r.block = Ys.pedantic, r.inline = Wi.pedantic) : this.options.gfm && (r.block = Ys.gfm, this.options.breaks ? r.inline = Wi.breaks : r.inline = Wi.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: Ys, inline: Wi };
  }
  static lex(t, r) {
    return new qn(r).lex(t);
  }
  static lexInline(t, r) {
    return new qn(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(ie.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let i = this.inlineQueue[r];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], i = !1) {
    var s, o, a;
    for (this.options.pedantic && (t = t.replace(ie.tabCharGlobal, "    ").replace(ie.spaceLine, "")); t; ) {
      let n;
      if ((o = (s = this.options.extensions) == null ? void 0 : s.block) != null && o.some((h) => (n = h.call({ lexer: this }, t, r)) ? (t = t.substring(n.raw.length), r.push(n), !0) : !1)) continue;
      if (n = this.tokenizer.space(t)) {
        t = t.substring(n.raw.length);
        let h = r.at(-1);
        n.raw.length === 1 && h !== void 0 ? h.raw += `
` : r.push(n);
        continue;
      }
      if (n = this.tokenizer.code(t)) {
        t = t.substring(n.raw.length);
        let h = r.at(-1);
        (h == null ? void 0 : h.type) === "paragraph" || (h == null ? void 0 : h.type) === "text" ? (h.raw += (h.raw.endsWith(`
`) ? "" : `
`) + n.raw, h.text += `
` + n.text, this.inlineQueue.at(-1).src = h.text) : r.push(n);
        continue;
      }
      if (n = this.tokenizer.fences(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.heading(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.hr(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.blockquote(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.list(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.html(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.def(t)) {
        t = t.substring(n.raw.length);
        let h = r.at(-1);
        (h == null ? void 0 : h.type) === "paragraph" || (h == null ? void 0 : h.type) === "text" ? (h.raw += (h.raw.endsWith(`
`) ? "" : `
`) + n.raw, h.text += `
` + n.raw, this.inlineQueue.at(-1).src = h.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = { href: n.href, title: n.title }, r.push(n));
        continue;
      }
      if (n = this.tokenizer.table(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.lheading(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      let l = t;
      if ((a = this.options.extensions) != null && a.startBlock) {
        let h = 1 / 0, c = t.slice(1), u;
        this.options.extensions.startBlock.forEach((f) => {
          u = f.call({ lexer: this }, c), typeof u == "number" && u >= 0 && (h = Math.min(h, u));
        }), h < 1 / 0 && h >= 0 && (l = t.substring(0, h + 1));
      }
      if (this.state.top && (n = this.tokenizer.paragraph(l))) {
        let h = r.at(-1);
        i && (h == null ? void 0 : h.type) === "paragraph" ? (h.raw += (h.raw.endsWith(`
`) ? "" : `
`) + n.raw, h.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = h.text) : r.push(n), i = l.length !== t.length, t = t.substring(n.raw.length);
        continue;
      }
      if (n = this.tokenizer.text(t)) {
        t = t.substring(n.raw.length);
        let h = r.at(-1);
        (h == null ? void 0 : h.type) === "text" ? (h.raw += (h.raw.endsWith(`
`) ? "" : `
`) + n.raw, h.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = h.text) : r.push(n);
        continue;
      }
      if (t) {
        let h = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(h);
          break;
        } else throw new Error(h);
      }
    }
    return this.state.top = !0, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    var l, h, c, u, f;
    let i = t, s = null;
    if (this.tokens.links) {
      let d = Object.keys(this.tokens.links);
      if (d.length > 0) for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) d.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, s.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let o;
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) o = s[2] ? s[2].length : 0, i = i.slice(0, s.index + o) + "[" + "a".repeat(s[0].length - o - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    i = ((h = (l = this.options.hooks) == null ? void 0 : l.emStrongMask) == null ? void 0 : h.call({ lexer: this }, i)) ?? i;
    let a = !1, n = "";
    for (; t; ) {
      a || (n = ""), a = !1;
      let d;
      if ((u = (c = this.options.extensions) == null ? void 0 : c.inline) != null && u.some((m) => (d = m.call({ lexer: this }, t, r)) ? (t = t.substring(d.raw.length), r.push(d), !0) : !1)) continue;
      if (d = this.tokenizer.escape(t)) {
        t = t.substring(d.raw.length), r.push(d);
        continue;
      }
      if (d = this.tokenizer.tag(t)) {
        t = t.substring(d.raw.length), r.push(d);
        continue;
      }
      if (d = this.tokenizer.link(t)) {
        t = t.substring(d.raw.length), r.push(d);
        continue;
      }
      if (d = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(d.raw.length);
        let m = r.at(-1);
        d.type === "text" && (m == null ? void 0 : m.type) === "text" ? (m.raw += d.raw, m.text += d.text) : r.push(d);
        continue;
      }
      if (d = this.tokenizer.emStrong(t, i, n)) {
        t = t.substring(d.raw.length), r.push(d);
        continue;
      }
      if (d = this.tokenizer.codespan(t)) {
        t = t.substring(d.raw.length), r.push(d);
        continue;
      }
      if (d = this.tokenizer.br(t)) {
        t = t.substring(d.raw.length), r.push(d);
        continue;
      }
      if (d = this.tokenizer.del(t)) {
        t = t.substring(d.raw.length), r.push(d);
        continue;
      }
      if (d = this.tokenizer.autolink(t)) {
        t = t.substring(d.raw.length), r.push(d);
        continue;
      }
      if (!this.state.inLink && (d = this.tokenizer.url(t))) {
        t = t.substring(d.raw.length), r.push(d);
        continue;
      }
      let g = t;
      if ((f = this.options.extensions) != null && f.startInline) {
        let m = 1 / 0, y = t.slice(1), C;
        this.options.extensions.startInline.forEach((b) => {
          C = b.call({ lexer: this }, y), typeof C == "number" && C >= 0 && (m = Math.min(m, C));
        }), m < 1 / 0 && m >= 0 && (g = t.substring(0, m + 1));
      }
      if (d = this.tokenizer.inlineText(g)) {
        t = t.substring(d.raw.length), d.raw.slice(-1) !== "_" && (n = d.raw.slice(-1)), a = !0;
        let m = r.at(-1);
        (m == null ? void 0 : m.type) === "text" ? (m.raw += d.raw, m.text += d.text) : r.push(d);
        continue;
      }
      if (t) {
        let m = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(m);
          break;
        } else throw new Error(m);
      }
    }
    return r;
  }
}, Do = class {
  constructor(t) {
    At(this, "options");
    At(this, "parser");
    this.options = t || Nr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: i }) {
    var a;
    let s = (a = (r || "").match(ie.notSpaceStart)) == null ? void 0 : a[0], o = t.replace(ie.endingNewline, "") + `
`;
    return s ? '<pre><code class="language-' + $e(s) + '">' + (i ? o : $e(o, !0)) + `</code></pre>
` : "<pre><code>" + (i ? o : $e(o, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: r }) {
    return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let r = t.ordered, i = t.start, s = "";
    for (let n = 0; n < t.items.length; n++) {
      let l = t.items[n];
      s += this.listitem(l);
    }
    let o = r ? "ol" : "ul", a = r && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + o + a + `>
` + s + "</" + o + `>
`;
  }
  listitem(t) {
    var i;
    let r = "";
    if (t.task) {
      let s = this.checkbox({ checked: !!t.checked });
      t.loose ? ((i = t.tokens[0]) == null ? void 0 : i.type) === "paragraph" ? (t.tokens[0].text = s + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = s + " " + $e(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({ type: "text", raw: s + " ", text: s + " ", escaped: !0 }) : r += s + " ";
    }
    return r += this.parser.parse(t.tokens, !!t.loose), `<li>${r}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let r = "", i = "";
    for (let o = 0; o < t.header.length; o++) i += this.tablecell(t.header[o]);
    r += this.tablerow({ text: i });
    let s = "";
    for (let o = 0; o < t.rows.length; o++) {
      let a = t.rows[o];
      i = "";
      for (let n = 0; n < a.length; n++) i += this.tablecell(a[n]);
      s += this.tablerow({ text: i });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let r = this.parser.parseInline(t.tokens), i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + r + `</${i}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${$e(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: i }) {
    let s = this.parser.parseInline(i), o = Pc(t);
    if (o === null) return s;
    t = o;
    let a = '<a href="' + t + '"';
    return r && (a += ' title="' + $e(r) + '"'), a += ">" + s + "</a>", a;
  }
  image({ href: t, title: r, text: i, tokens: s }) {
    s && (i = this.parser.parseInline(s, this.parser.textRenderer));
    let o = Pc(t);
    if (o === null) return $e(i);
    t = o;
    let a = `<img src="${t}" alt="${i}"`;
    return r && (a += ` title="${$e(r)}"`), a += ">", a;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : $e(t.text);
  }
}, Vl = class {
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}, we = class Wn {
  constructor(t) {
    At(this, "options");
    At(this, "renderer");
    At(this, "textRenderer");
    this.options = t || Nr, this.options.renderer = this.options.renderer || new Do(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Vl();
  }
  static parse(t, r) {
    return new Wn(r).parse(t);
  }
  static parseInline(t, r) {
    return new Wn(r).parseInline(t);
  }
  parse(t, r = !0) {
    var s, o;
    let i = "";
    for (let a = 0; a < t.length; a++) {
      let n = t[a];
      if ((o = (s = this.options.extensions) == null ? void 0 : s.renderers) != null && o[n.type]) {
        let h = n, c = this.options.extensions.renderers[h.type].call({ parser: this }, h);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(h.type)) {
          i += c || "";
          continue;
        }
      }
      let l = n;
      switch (l.type) {
        case "space": {
          i += this.renderer.space(l);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(l);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(l);
          continue;
        }
        case "code": {
          i += this.renderer.code(l);
          continue;
        }
        case "table": {
          i += this.renderer.table(l);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          i += this.renderer.list(l);
          continue;
        }
        case "html": {
          i += this.renderer.html(l);
          continue;
        }
        case "def": {
          i += this.renderer.def(l);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(l);
          continue;
        }
        case "text": {
          let h = l, c = this.renderer.text(h);
          for (; a + 1 < t.length && t[a + 1].type === "text"; ) h = t[++a], c += `
` + this.renderer.text(h);
          r ? i += this.renderer.paragraph({ type: "paragraph", raw: c, text: c, tokens: [{ type: "text", raw: c, text: c, escaped: !0 }] }) : i += c;
          continue;
        }
        default: {
          let h = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent) return console.error(h), "";
          throw new Error(h);
        }
      }
    }
    return i;
  }
  parseInline(t, r = this.renderer) {
    var s, o;
    let i = "";
    for (let a = 0; a < t.length; a++) {
      let n = t[a];
      if ((o = (s = this.options.extensions) == null ? void 0 : s.renderers) != null && o[n.type]) {
        let h = this.options.extensions.renderers[n.type].call({ parser: this }, n);
        if (h !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(n.type)) {
          i += h || "";
          continue;
        }
      }
      let l = n;
      switch (l.type) {
        case "escape": {
          i += r.text(l);
          break;
        }
        case "html": {
          i += r.html(l);
          break;
        }
        case "link": {
          i += r.link(l);
          break;
        }
        case "image": {
          i += r.image(l);
          break;
        }
        case "strong": {
          i += r.strong(l);
          break;
        }
        case "em": {
          i += r.em(l);
          break;
        }
        case "codespan": {
          i += r.codespan(l);
          break;
        }
        case "br": {
          i += r.br(l);
          break;
        }
        case "del": {
          i += r.del(l);
          break;
        }
        case "text": {
          i += r.text(l);
          break;
        }
        default: {
          let h = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent) return console.error(h), "";
          throw new Error(h);
        }
      }
    }
    return i;
  }
}, Zs, Ki = (Zs = class {
  constructor(t) {
    At(this, "options");
    At(this, "block");
    this.options = t || Nr;
  }
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  emStrongMask(t) {
    return t;
  }
  provideLexer() {
    return this.block ? ke.lex : ke.lexInline;
  }
  provideParser() {
    return this.block ? we.parse : we.parseInline;
  }
}, At(Zs, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), At(Zs, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Zs), iT = class {
  constructor(...t) {
    At(this, "defaults", Wl());
    At(this, "options", this.setOptions);
    At(this, "parse", this.parseMarkdown(!0));
    At(this, "parseInline", this.parseMarkdown(!1));
    At(this, "Parser", we);
    At(this, "Renderer", Do);
    At(this, "TextRenderer", Vl);
    At(this, "Lexer", ke);
    At(this, "Tokenizer", Oo);
    At(this, "Hooks", Ki);
    this.use(...t);
  }
  walkTokens(t, r) {
    var s, o;
    let i = [];
    for (let a of t) switch (i = i.concat(r.call(this, a)), a.type) {
      case "table": {
        let n = a;
        for (let l of n.header) i = i.concat(this.walkTokens(l.tokens, r));
        for (let l of n.rows) for (let h of l) i = i.concat(this.walkTokens(h.tokens, r));
        break;
      }
      case "list": {
        let n = a;
        i = i.concat(this.walkTokens(n.items, r));
        break;
      }
      default: {
        let n = a;
        (o = (s = this.defaults.extensions) == null ? void 0 : s.childTokens) != null && o[n.type] ? this.defaults.extensions.childTokens[n.type].forEach((l) => {
          let h = n[l].flat(1 / 0);
          i = i.concat(this.walkTokens(h, r));
        }) : n.tokens && (i = i.concat(this.walkTokens(n.tokens, r)));
      }
    }
    return i;
  }
  use(...t) {
    let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      let s = { ...i };
      if (s.async = this.defaults.async || s.async || !1, i.extensions && (i.extensions.forEach((o) => {
        if (!o.name) throw new Error("extension name required");
        if ("renderer" in o) {
          let a = r.renderers[o.name];
          a ? r.renderers[o.name] = function(...n) {
            let l = o.renderer.apply(this, n);
            return l === !1 && (l = a.apply(this, n)), l;
          } : r.renderers[o.name] = o.renderer;
        }
        if ("tokenizer" in o) {
          if (!o.level || o.level !== "block" && o.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let a = r[o.level];
          a ? a.unshift(o.tokenizer) : r[o.level] = [o.tokenizer], o.start && (o.level === "block" ? r.startBlock ? r.startBlock.push(o.start) : r.startBlock = [o.start] : o.level === "inline" && (r.startInline ? r.startInline.push(o.start) : r.startInline = [o.start]));
        }
        "childTokens" in o && o.childTokens && (r.childTokens[o.name] = o.childTokens);
      }), s.extensions = r), i.renderer) {
        let o = this.defaults.renderer || new Do(this.defaults);
        for (let a in i.renderer) {
          if (!(a in o)) throw new Error(`renderer '${a}' does not exist`);
          if (["options", "parser"].includes(a)) continue;
          let n = a, l = i.renderer[n], h = o[n];
          o[n] = (...c) => {
            let u = l.apply(o, c);
            return u === !1 && (u = h.apply(o, c)), u || "";
          };
        }
        s.renderer = o;
      }
      if (i.tokenizer) {
        let o = this.defaults.tokenizer || new Oo(this.defaults);
        for (let a in i.tokenizer) {
          if (!(a in o)) throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a)) continue;
          let n = a, l = i.tokenizer[n], h = o[n];
          o[n] = (...c) => {
            let u = l.apply(o, c);
            return u === !1 && (u = h.apply(o, c)), u;
          };
        }
        s.tokenizer = o;
      }
      if (i.hooks) {
        let o = this.defaults.hooks || new Ki();
        for (let a in i.hooks) {
          if (!(a in o)) throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a)) continue;
          let n = a, l = i.hooks[n], h = o[n];
          Ki.passThroughHooks.has(a) ? o[n] = (c) => {
            if (this.defaults.async && Ki.passThroughHooksRespectAsync.has(a)) return (async () => {
              let f = await l.call(o, c);
              return h.call(o, f);
            })();
            let u = l.call(o, c);
            return h.call(o, u);
          } : o[n] = (...c) => {
            if (this.defaults.async) return (async () => {
              let f = await l.apply(o, c);
              return f === !1 && (f = await h.apply(o, c)), f;
            })();
            let u = l.apply(o, c);
            return u === !1 && (u = h.apply(o, c)), u;
          };
        }
        s.hooks = o;
      }
      if (i.walkTokens) {
        let o = this.defaults.walkTokens, a = i.walkTokens;
        s.walkTokens = function(n) {
          let l = [];
          return l.push(a.call(this, n)), o && (l = l.concat(o.call(this, n))), l;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return ke.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return we.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, i) => {
      let s = { ...i }, o = { ...this.defaults, ...s }, a = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && s.async === !1) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (o.hooks && (o.hooks.options = o, o.hooks.block = t), o.async) return (async () => {
        let n = o.hooks ? await o.hooks.preprocess(r) : r, l = await (o.hooks ? await o.hooks.provideLexer() : t ? ke.lex : ke.lexInline)(n, o), h = o.hooks ? await o.hooks.processAllTokens(l) : l;
        o.walkTokens && await Promise.all(this.walkTokens(h, o.walkTokens));
        let c = await (o.hooks ? await o.hooks.provideParser() : t ? we.parse : we.parseInline)(h, o);
        return o.hooks ? await o.hooks.postprocess(c) : c;
      })().catch(a);
      try {
        o.hooks && (r = o.hooks.preprocess(r));
        let n = (o.hooks ? o.hooks.provideLexer() : t ? ke.lex : ke.lexInline)(r, o);
        o.hooks && (n = o.hooks.processAllTokens(n)), o.walkTokens && this.walkTokens(n, o.walkTokens);
        let l = (o.hooks ? o.hooks.provideParser() : t ? we.parse : we.parseInline)(n, o);
        return o.hooks && (l = o.hooks.postprocess(l)), l;
      } catch (n) {
        return a(n);
      }
    };
  }
  onError(t, r) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let s = "<p>An error occurred:</p><pre>" + $e(i.message + "", !0) + "</pre>";
        return r ? Promise.resolve(s) : s;
      }
      if (r) return Promise.reject(i);
      throw i;
    };
  }
}, Rr = new iT();
function Bt(e, t) {
  return Rr.parse(e, t);
}
Bt.options = Bt.setOptions = function(e) {
  return Rr.setOptions(e), Bt.defaults = Rr.defaults, Hp(Bt.defaults), Bt;
};
Bt.getDefaults = Wl;
Bt.defaults = Nr;
Bt.use = function(...e) {
  return Rr.use(...e), Bt.defaults = Rr.defaults, Hp(Bt.defaults), Bt;
};
Bt.walkTokens = function(e, t) {
  return Rr.walkTokens(e, t);
};
Bt.parseInline = Rr.parseInline;
Bt.Parser = we;
Bt.parser = we.parse;
Bt.Renderer = Do;
Bt.TextRenderer = Vl;
Bt.Lexer = ke;
Bt.lexer = ke.lex;
Bt.Tokenizer = Oo;
Bt.Hooks = Ki;
Bt.parse = Bt;
Bt.options;
Bt.setOptions;
Bt.use;
Bt.walkTokens;
Bt.parseInline;
we.parse;
ke.lex;
function tg(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var i = Array.from(typeof e == "string" ? [e] : e);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var s = i.reduce(function(n, l) {
    var h = l.match(/\n([\t ]+|(?!\s).)/g);
    return h ? n.concat(h.map(function(c) {
      var u, f;
      return (f = (u = c.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && f !== void 0 ? f : 0;
    })) : n;
  }, []);
  if (s.length) {
    var o = new RegExp(`
[	 ]{`.concat(Math.min.apply(Math, s), "}"), "g");
    i = i.map(function(n) {
      return n.replace(o, `
`);
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var a = i[0];
  return t.forEach(function(n, l) {
    var h = a.match(/(?:^|\n)( *)$/), c = h ? h[1] : "", u = n;
    typeof n == "string" && n.includes(`
`) && (u = String(n).split(`
`).map(function(f, d) {
      return d === 0 ? f : "".concat(c).concat(f);
    }).join(`
`)), a += u + i[l + 1];
  }), a;
}
function eg(e, { markdownAutoWrap: t }) {
  const i = e.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`);
  return tg(i);
}
p(eg, "preprocessMarkdown");
function rg(e) {
  return e.split(/\\n|\n|<br\s*\/?>/gi).map(
    (t) => {
      var r;
      return ((r = t.trim().match(/<[^>]+>|[^\s<>]+/g)) == null ? void 0 : r.map((i) => ({ content: i, type: "normal" }))) ?? [];
    }
  );
}
p(rg, "nonMarkdownToLines");
function ig(e, t = {}) {
  const r = eg(e, t), i = Bt.lexer(r), s = [[]];
  let o = 0;
  function a(n, l = "normal") {
    n.type === "text" ? n.text.split(`
`).forEach((c, u) => {
      u !== 0 && (o++, s.push([])), c.split(" ").forEach((f) => {
        f = f.replace(/&#39;/g, "'"), f && s[o].push({ content: f, type: l });
      });
    }) : n.type === "strong" || n.type === "em" ? n.tokens.forEach((h) => {
      a(h, n.type);
    }) : n.type === "html" && s[o].push({ content: n.text, type: "normal" });
  }
  return p(a, "processNode"), i.forEach((n) => {
    var l;
    n.type === "paragraph" ? (l = n.tokens) == null || l.forEach((h) => {
      a(h);
    }) : n.type === "html" ? s[o].push({ content: n.text, type: "normal" }) : s[o].push({ content: n.raw, type: "normal" });
  }), s;
}
p(ig, "markdownToLines");
function sg(e) {
  return e ? `<p>${/**
  * Replace new lines with <br /> tags.
  *
  * Unlike in markdown text, `\n` sequences are treated as line breaks here.
  */
  e.replace(/\\n|\n/g, "<br />")}</p>` : "";
}
p(sg, "nonMarkdownToHTML");
function og(e, { markdownAutoWrap: t } = {}) {
  const r = Bt.lexer(e);
  function i(s) {
    var o, a, n;
    return s.type === "text" ? t === !1 ? s.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : s.text.replace(/\n */g, "<br/>") : s.type === "strong" ? `<strong>${(o = s.tokens) == null ? void 0 : o.map(i).join("")}</strong>` : s.type === "em" ? `<em>${(a = s.tokens) == null ? void 0 : a.map(i).join("")}</em>` : s.type === "paragraph" ? `<p>${(n = s.tokens) == null ? void 0 : n.map(i).join("")}</p>` : s.type === "space" ? "" : s.type === "html" ? `${s.text}` : s.type === "escape" ? s.text : (U.warn(`Unsupported markdown: ${s.type}`), s.raw);
  }
  return p(i, "output"), r.map(i).join("");
}
p(og, "markdownToHTML");
function ag(e) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((t) => t.segment) : [...e];
}
p(ag, "splitTextToChars");
function ng(e, t) {
  const r = ag(t.content);
  return Zl(e, [], r, t.type);
}
p(ng, "splitWordToFitWidth");
function Zl(e, t, r, i) {
  if (r.length === 0)
    return [
      { content: t.join(""), type: i },
      { content: "", type: i }
    ];
  const [s, ...o] = r, a = [...t, s];
  return e([{ content: a.join(""), type: i }]) ? Zl(e, a, o, i) : (t.length === 0 && s && (t.push(s), r.shift()), [
    { content: t.join(""), type: i },
    { content: r.join(""), type: i }
  ]);
}
p(Zl, "splitWordToFitWidthRecursion");
function lg(e, t) {
  if (e.some(({ content: r }) => r.includes(`
`)))
    throw new Error("splitLineToFitWidth does not support newlines in the line");
  return Io(e, t);
}
p(lg, "splitLineToFitWidth");
function Io(e, t, r = [], i = []) {
  if (e.length === 0)
    return i.length > 0 && r.push(i), r.length > 0 ? r : [];
  let s = "";
  e[0].content === " " && (s = " ", e.shift());
  const o = e.shift() ?? { content: " ", type: "normal" }, a = [...i];
  if (s !== "" && a.push({ content: s, type: "normal" }), a.push(o), t(a))
    return Io(e, t, r, a);
  if (i.length > 0)
    r.push(i), e.unshift(o);
  else if (o.content) {
    const [n, l] = ng(t, o);
    r.push([n]), l.content && e.unshift(l);
  }
  return Io(e, t, r);
}
p(Io, "splitLineToFitWidthRecursion");
function zn(e, t) {
  t && e.attr("style", t);
}
p(zn, "applyStyle");
var Wc = 16384;
async function hg(e, t, r, i, s = !1, o = Ot()) {
  const a = e.append("foreignObject");
  a.attr("width", `${Math.min(10 * r, Wc)}px`), a.attr("height", `${Math.min(10 * r, Wc)}px`);
  const n = a.append("xhtml:div"), l = ns(t.label) ? await Hu(t.label.replace(bs.lineBreakRegex, `
`), o) : ve(t.label, o), h = t.isNode ? "nodeLabel" : "edgeLabel", c = n.append("span");
  c.html(l), zn(c, t.labelStyle), c.attr("class", `${h} ${i}`), zn(n, t.labelStyle), n.style("display", "table-cell"), n.style("white-space", "nowrap"), n.style("line-height", "1.5"), r !== Number.POSITIVE_INFINITY && (n.style("max-width", r + "px"), n.style("text-align", "center")), n.attr("xmlns", "http://www.w3.org/1999/xhtml"), s && n.attr("class", "labelBkg");
  let u = n.node().getBoundingClientRect();
  return u.width === r && (n.style("display", "table"), n.style("white-space", "break-spaces"), n.style("width", r + "px"), u = n.node().getBoundingClientRect()), a.node();
}
p(hg, "addHtmlSpan");
function ea(e, t, r, i = !1) {
  const s = e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * r - 0.1 + "em").attr("dy", r + "em");
  return i && s.attr("text-anchor", "middle"), s;
}
p(ea, "createTspan");
function cg(e, t, r) {
  const i = e.append("text"), s = ea(i, 1, t);
  ra(s, r);
  const o = s.node().getComputedTextLength();
  return i.remove(), o;
}
p(cg, "computeWidthOfText");
function sT(e, t, r) {
  var a;
  const i = e.append("text"), s = ea(i, 1, t);
  ra(s, [{ content: r, type: "normal" }]);
  const o = (a = s.node()) == null ? void 0 : a.getBoundingClientRect();
  return o && i.remove(), o;
}
p(sT, "computeDimensionOfText");
function ug(e, t, r, i = !1, s = !1) {
  const a = t.append("g"), n = a.insert("rect").attr("class", "background").attr("style", "stroke: none"), l = a.append("text").attr("y", "-10.1");
  s && l.attr("text-anchor", "middle");
  let h = 0;
  for (const c of r) {
    const u = /* @__PURE__ */ p((d) => cg(a, 1.1, d) <= e, "checkWidth"), f = u(c) ? [c] : lg(c, u);
    for (const d of f) {
      const g = ea(l, h, 1.1, s);
      ra(g, d), h++;
    }
  }
  if (i) {
    const c = l.node().getBBox(), u = 2;
    return n.attr("x", c.x - u).attr("y", c.y - u).attr("width", c.width + 2 * u).attr("height", c.height + 2 * u), a.node();
  } else
    return l.node();
}
p(ug, "createFormattedText");
function Hn(e) {
  const t = /&(amp|lt|gt);/g;
  return e.replace(t, (r, i) => {
    switch (i) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      default:
        return r;
    }
  });
}
p(Hn, "decodeHTMLEntities");
function ra(e, t) {
  e.text(""), t.forEach((r, i) => {
    const s = e.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
    i === 0 ? s.text(Hn(r.content)) : s.text(" " + Hn(r.content));
  });
}
p(ra, "updateTextContentAndStyles");
async function dg(e, t = {}) {
  const r = [];
  e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (s, o, a) => (r.push(
    (async () => {
      const n = `${o}:${a}`;
      return await bS(n) ? await _s(n, void 0, { class: "label-icon" }) : `<i class='${ve(s, t).replace(":", " ")}'></i>`;
    })()
  ), s));
  const i = await Promise.all(r);
  return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => i.shift() ?? "");
}
p(dg, "replaceIconSubstring");
var He = /* @__PURE__ */ p(async (e, t = "", {
  style: r = "",
  isTitle: i = !1,
  classes: s = "",
  useHtmlLabels: o = !0,
  markdown: a = !0,
  isNode: n = !0,
  /**
   * The width to wrap the text within. Set to `Number.POSITIVE_INFINITY` for no wrapping.
   */
  width: l = 200,
  addSvgBackground: h = !1
} = {}, c) => {
  if (U.debug(
    "XYZ createText",
    t,
    r,
    i,
    s,
    o,
    n,
    "addSvgBackground: ",
    h
  ), o) {
    const u = a ? og(t, c) : sg(t), f = await dg(Ir(u), c), d = t.replace(/\\\\/g, "\\"), g = {
      isNode: n,
      label: ns(t) ? d : f,
      labelStyle: r.replace("fill:", "color:")
    };
    return await hg(e, g, l, s, h, c);
  } else {
    const u = Ir(t.replace(/<br\s*\/?>/g, "<br/>")), f = a ? ig(u.replace("<br>", "<br/>"), c) : rg(u), d = ug(
      l,
      e,
      f,
      t ? h : !1,
      !n
    );
    if (n) {
      /stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
      const g = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      Ct(d).attr("style", g);
    } else {
      const g = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      Ct(d).select("rect").attr("style", g.replace(/background:/g, "fill:"));
      const m = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      Ct(d).select("text").attr("style", m);
    }
    return i ? Ct(d).selectAll("tspan.text-outer-tspan").classed("title-row", !0) : Ct(d).selectAll("tspan.text-outer-tspan").classed("row", !0), d;
  }
}, "createText");
function ja(e, t, r) {
  if (e && e.length) {
    const [i, s] = t, o = Math.PI / 180 * r, a = Math.cos(o), n = Math.sin(o);
    for (const l of e) {
      const [h, c] = l;
      l[0] = (h - i) * a - (c - s) * n + i, l[1] = (h - i) * n + (c - s) * a + s;
    }
  }
}
function oT(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function aT(e, t, r, i = 1) {
  const s = r, o = Math.max(t, 0.1), a = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, n = [0, 0];
  if (s) for (const h of a) ja(h, n, s);
  const l = (function(h, c, u) {
    const f = [];
    for (const b of h) {
      const k = [...b];
      oT(k[0], k[k.length - 1]) || k.push([k[0][0], k[0][1]]), k.length > 2 && f.push(k);
    }
    const d = [];
    c = Math.max(c, 0.1);
    const g = [];
    for (const b of f) for (let k = 0; k < b.length - 1; k++) {
      const S = b[k], T = b[k + 1];
      if (S[1] !== T[1]) {
        const _ = Math.min(S[1], T[1]);
        g.push({ ymin: _, ymax: Math.max(S[1], T[1]), x: _ === S[1] ? S[0] : T[0], islope: (T[0] - S[0]) / (T[1] - S[1]) });
      }
    }
    if (g.sort(((b, k) => b.ymin < k.ymin ? -1 : b.ymin > k.ymin ? 1 : b.x < k.x ? -1 : b.x > k.x ? 1 : b.ymax === k.ymax ? 0 : (b.ymax - k.ymax) / Math.abs(b.ymax - k.ymax))), !g.length) return d;
    let m = [], y = g[0].ymin, C = 0;
    for (; m.length || g.length; ) {
      if (g.length) {
        let b = -1;
        for (let k = 0; k < g.length && !(g[k].ymin > y); k++) b = k;
        g.splice(0, b + 1).forEach(((k) => {
          m.push({ s: y, edge: k });
        }));
      }
      if (m = m.filter(((b) => !(b.edge.ymax <= y))), m.sort(((b, k) => b.edge.x === k.edge.x ? 0 : (b.edge.x - k.edge.x) / Math.abs(b.edge.x - k.edge.x))), (u !== 1 || C % c == 0) && m.length > 1) for (let b = 0; b < m.length; b += 2) {
        const k = b + 1;
        if (k >= m.length) break;
        const S = m[b].edge, T = m[k].edge;
        d.push([[Math.round(S.x), y], [Math.round(T.x), y]]);
      }
      y += u, m.forEach(((b) => {
        b.edge.x = b.edge.x + u * b.edge.islope;
      })), C++;
    }
    return d;
  })(a, o, i);
  if (s) {
    for (const h of a) ja(h, n, -s);
    (function(h, c, u) {
      const f = [];
      h.forEach(((d) => f.push(...d))), ja(f, c, u);
    })(l, n, -s);
  }
  return l;
}
function vs(e, t) {
  var r;
  const i = t.hachureAngle + 90;
  let s = t.hachureGap;
  s < 0 && (s = 4 * t.strokeWidth), s = Math.round(Math.max(s, 0.1));
  let o = 1;
  return t.roughness >= 1 && (((r = t.randomizer) === null || r === void 0 ? void 0 : r.next()) || Math.random()) > 0.7 && (o = s), aT(e, s, i, o || 1);
}
class Kl {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    return this._fillPolygons(t, r);
  }
  _fillPolygons(t, r) {
    const i = vs(t, r);
    return { type: "fillSketch", ops: this.renderLines(i, r) };
  }
  renderLines(t, r) {
    const i = [];
    for (const s of t) i.push(...this.helper.doubleLineOps(s[0][0], s[0][1], s[1][0], s[1][1], r));
    return i;
  }
}
function ia(e) {
  const t = e[0], r = e[1];
  return Math.sqrt(Math.pow(t[0] - r[0], 2) + Math.pow(t[1] - r[1], 2));
}
class nT extends Kl {
  fillPolygons(t, r) {
    let i = r.hachureGap;
    i < 0 && (i = 4 * r.strokeWidth), i = Math.max(i, 0.1);
    const s = vs(t, Object.assign({}, r, { hachureGap: i })), o = Math.PI / 180 * r.hachureAngle, a = [], n = 0.5 * i * Math.cos(o), l = 0.5 * i * Math.sin(o);
    for (const [h, c] of s) ia([h, c]) && a.push([[h[0] - n, h[1] + l], [...c]], [[h[0] + n, h[1] - l], [...c]]);
    return { type: "fillSketch", ops: this.renderLines(a, r) };
  }
}
class lT extends Kl {
  fillPolygons(t, r) {
    const i = this._fillPolygons(t, r), s = Object.assign({}, r, { hachureAngle: r.hachureAngle + 90 }), o = this._fillPolygons(t, s);
    return i.ops = i.ops.concat(o.ops), i;
  }
}
class hT {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = vs(t, r = Object.assign({}, r, { hachureAngle: 0 }));
    return this.dotsOnLines(i, r);
  }
  dotsOnLines(t, r) {
    const i = [];
    let s = r.hachureGap;
    s < 0 && (s = 4 * r.strokeWidth), s = Math.max(s, 0.1);
    let o = r.fillWeight;
    o < 0 && (o = r.strokeWidth / 2);
    const a = s / 4;
    for (const n of t) {
      const l = ia(n), h = l / s, c = Math.ceil(h) - 1, u = l - c * s, f = (n[0][0] + n[1][0]) / 2 - s / 4, d = Math.min(n[0][1], n[1][1]);
      for (let g = 0; g < c; g++) {
        const m = d + u + g * s, y = f - a + 2 * Math.random() * a, C = m - a + 2 * Math.random() * a, b = this.helper.ellipse(y, C, o, o, r);
        i.push(...b.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
}
class cT {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = vs(t, r);
    return { type: "fillSketch", ops: this.dashedLine(i, r) };
  }
  dashedLine(t, r) {
    const i = r.dashOffset < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashOffset, s = r.dashGap < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashGap, o = [];
    return t.forEach(((a) => {
      const n = ia(a), l = Math.floor(n / (i + s)), h = (n + s - l * (i + s)) / 2;
      let c = a[0], u = a[1];
      c[0] > u[0] && (c = a[1], u = a[0]);
      const f = Math.atan((u[1] - c[1]) / (u[0] - c[0]));
      for (let d = 0; d < l; d++) {
        const g = d * (i + s), m = g + i, y = [c[0] + g * Math.cos(f) + h * Math.cos(f), c[1] + g * Math.sin(f) + h * Math.sin(f)], C = [c[0] + m * Math.cos(f) + h * Math.cos(f), c[1] + m * Math.sin(f) + h * Math.sin(f)];
        o.push(...this.helper.doubleLineOps(y[0], y[1], C[0], C[1], r));
      }
    })), o;
  }
}
class uT {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap, s = r.zigzagOffset < 0 ? i : r.zigzagOffset, o = vs(t, r = Object.assign({}, r, { hachureGap: i + s }));
    return { type: "fillSketch", ops: this.zigzagLines(o, s, r) };
  }
  zigzagLines(t, r, i) {
    const s = [];
    return t.forEach(((o) => {
      const a = ia(o), n = Math.round(a / (2 * r));
      let l = o[0], h = o[1];
      l[0] > h[0] && (l = o[1], h = o[0]);
      const c = Math.atan((h[1] - l[1]) / (h[0] - l[0]));
      for (let u = 0; u < n; u++) {
        const f = 2 * u * r, d = 2 * (u + 1) * r, g = Math.sqrt(2 * Math.pow(r, 2)), m = [l[0] + f * Math.cos(c), l[1] + f * Math.sin(c)], y = [l[0] + d * Math.cos(c), l[1] + d * Math.sin(c)], C = [m[0] + g * Math.cos(c + Math.PI / 4), m[1] + g * Math.sin(c + Math.PI / 4)];
        s.push(...this.helper.doubleLineOps(m[0], m[1], C[0], C[1], i), ...this.helper.doubleLineOps(C[0], C[1], y[0], y[1], i));
      }
    })), s;
  }
}
const ne = {};
class dT {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const fT = 0, Ga = 1, zc = 2, Us = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function Xa(e, t) {
  return e.type === t;
}
function Ql(e) {
  const t = [], r = (function(a) {
    const n = new Array();
    for (; a !== ""; ) if (a.match(/^([ \t\r\n,]+)/)) a = a.substr(RegExp.$1.length);
    else if (a.match(/^([aAcChHlLmMqQsStTvVzZ])/)) n[n.length] = { type: fT, text: RegExp.$1 }, a = a.substr(RegExp.$1.length);
    else {
      if (!a.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      n[n.length] = { type: Ga, text: `${parseFloat(RegExp.$1)}` }, a = a.substr(RegExp.$1.length);
    }
    return n[n.length] = { type: zc, text: "" }, n;
  })(e);
  let i = "BOD", s = 0, o = r[s];
  for (; !Xa(o, zc); ) {
    let a = 0;
    const n = [];
    if (i === "BOD") {
      if (o.text !== "M" && o.text !== "m") return Ql("M0,0" + e);
      s++, a = Us[o.text], i = o.text;
    } else Xa(o, Ga) ? a = Us[i] : (s++, a = Us[o.text], i = o.text);
    if (!(s + a < r.length)) throw new Error("Path data ended short");
    for (let l = s; l < s + a; l++) {
      const h = r[l];
      if (!Xa(h, Ga)) throw new Error("Param not a number: " + i + "," + h.text);
      n[n.length] = +h.text;
    }
    if (typeof Us[i] != "number") throw new Error("Bad segment: " + i);
    {
      const l = { key: i, data: n };
      t.push(l), s += a, o = r[s], i === "M" && (i = "L"), i === "m" && (i = "l");
    }
  }
  return t;
}
function fg(e) {
  let t = 0, r = 0, i = 0, s = 0;
  const o = [];
  for (const { key: a, data: n } of e) switch (a) {
    case "M":
      o.push({ key: "M", data: [...n] }), [t, r] = n, [i, s] = n;
      break;
    case "m":
      t += n[0], r += n[1], o.push({ key: "M", data: [t, r] }), i = t, s = r;
      break;
    case "L":
      o.push({ key: "L", data: [...n] }), [t, r] = n;
      break;
    case "l":
      t += n[0], r += n[1], o.push({ key: "L", data: [t, r] });
      break;
    case "C":
      o.push({ key: "C", data: [...n] }), t = n[4], r = n[5];
      break;
    case "c": {
      const l = n.map(((h, c) => c % 2 ? h + r : h + t));
      o.push({ key: "C", data: l }), t = l[4], r = l[5];
      break;
    }
    case "Q":
      o.push({ key: "Q", data: [...n] }), t = n[2], r = n[3];
      break;
    case "q": {
      const l = n.map(((h, c) => c % 2 ? h + r : h + t));
      o.push({ key: "Q", data: l }), t = l[2], r = l[3];
      break;
    }
    case "A":
      o.push({ key: "A", data: [...n] }), t = n[5], r = n[6];
      break;
    case "a":
      t += n[5], r += n[6], o.push({ key: "A", data: [n[0], n[1], n[2], n[3], n[4], t, r] });
      break;
    case "H":
      o.push({ key: "H", data: [...n] }), t = n[0];
      break;
    case "h":
      t += n[0], o.push({ key: "H", data: [t] });
      break;
    case "V":
      o.push({ key: "V", data: [...n] }), r = n[0];
      break;
    case "v":
      r += n[0], o.push({ key: "V", data: [r] });
      break;
    case "S":
      o.push({ key: "S", data: [...n] }), t = n[2], r = n[3];
      break;
    case "s": {
      const l = n.map(((h, c) => c % 2 ? h + r : h + t));
      o.push({ key: "S", data: l }), t = l[2], r = l[3];
      break;
    }
    case "T":
      o.push({ key: "T", data: [...n] }), t = n[0], r = n[1];
      break;
    case "t":
      t += n[0], r += n[1], o.push({ key: "T", data: [t, r] });
      break;
    case "Z":
    case "z":
      o.push({ key: "Z", data: [] }), t = i, r = s;
  }
  return o;
}
function pg(e) {
  const t = [];
  let r = "", i = 0, s = 0, o = 0, a = 0, n = 0, l = 0;
  for (const { key: h, data: c } of e) {
    switch (h) {
      case "M":
        t.push({ key: "M", data: [...c] }), [i, s] = c, [o, a] = c;
        break;
      case "C":
        t.push({ key: "C", data: [...c] }), i = c[4], s = c[5], n = c[2], l = c[3];
        break;
      case "L":
        t.push({ key: "L", data: [...c] }), [i, s] = c;
        break;
      case "H":
        i = c[0], t.push({ key: "L", data: [i, s] });
        break;
      case "V":
        s = c[0], t.push({ key: "L", data: [i, s] });
        break;
      case "S": {
        let u = 0, f = 0;
        r === "C" || r === "S" ? (u = i + (i - n), f = s + (s - l)) : (u = i, f = s), t.push({ key: "C", data: [u, f, ...c] }), n = c[0], l = c[1], i = c[2], s = c[3];
        break;
      }
      case "T": {
        const [u, f] = c;
        let d = 0, g = 0;
        r === "Q" || r === "T" ? (d = i + (i - n), g = s + (s - l)) : (d = i, g = s);
        const m = i + 2 * (d - i) / 3, y = s + 2 * (g - s) / 3, C = u + 2 * (d - u) / 3, b = f + 2 * (g - f) / 3;
        t.push({ key: "C", data: [m, y, C, b, u, f] }), n = d, l = g, i = u, s = f;
        break;
      }
      case "Q": {
        const [u, f, d, g] = c, m = i + 2 * (u - i) / 3, y = s + 2 * (f - s) / 3, C = d + 2 * (u - d) / 3, b = g + 2 * (f - g) / 3;
        t.push({ key: "C", data: [m, y, C, b, d, g] }), n = u, l = f, i = d, s = g;
        break;
      }
      case "A": {
        const u = Math.abs(c[0]), f = Math.abs(c[1]), d = c[2], g = c[3], m = c[4], y = c[5], C = c[6];
        u === 0 || f === 0 ? (t.push({ key: "C", data: [i, s, y, C, y, C] }), i = y, s = C) : (i !== y || s !== C) && (gg(i, s, y, C, u, f, d, g, m).forEach((function(b) {
          t.push({ key: "C", data: b });
        })), i = y, s = C);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), i = o, s = a;
    }
    r = h;
  }
  return t;
}
function Hi(e, t, r) {
  return [e * Math.cos(r) - t * Math.sin(r), e * Math.sin(r) + t * Math.cos(r)];
}
function gg(e, t, r, i, s, o, a, n, l, h) {
  const c = (u = a, Math.PI * u / 180);
  var u;
  let f = [], d = 0, g = 0, m = 0, y = 0;
  if (h) [d, g, m, y] = h;
  else {
    [e, t] = Hi(e, t, -c), [r, i] = Hi(r, i, -c);
    const W = (e - r) / 2, D = (t - i) / 2;
    let E = W * W / (s * s) + D * D / (o * o);
    E > 1 && (E = Math.sqrt(E), s *= E, o *= E);
    const F = s * s, O = o * o, $ = F * O - F * D * D - O * W * W, q = F * D * D + O * W * W, j = (n === l ? -1 : 1) * Math.sqrt(Math.abs($ / q));
    m = j * s * D / o + (e + r) / 2, y = j * -o * W / s + (t + i) / 2, d = Math.asin(parseFloat(((t - y) / o).toFixed(9))), g = Math.asin(parseFloat(((i - y) / o).toFixed(9))), e < m && (d = Math.PI - d), r < m && (g = Math.PI - g), d < 0 && (d = 2 * Math.PI + d), g < 0 && (g = 2 * Math.PI + g), l && d > g && (d -= 2 * Math.PI), !l && g > d && (g -= 2 * Math.PI);
  }
  let C = g - d;
  if (Math.abs(C) > 120 * Math.PI / 180) {
    const W = g, D = r, E = i;
    g = l && g > d ? d + 120 * Math.PI / 180 * 1 : d + 120 * Math.PI / 180 * -1, f = gg(r = m + s * Math.cos(g), i = y + o * Math.sin(g), D, E, s, o, a, 0, l, [g, W, m, y]);
  }
  C = g - d;
  const b = Math.cos(d), k = Math.sin(d), S = Math.cos(g), T = Math.sin(g), _ = Math.tan(C / 4), v = 4 / 3 * s * _, L = 4 / 3 * o * _, z = [e, t], N = [e + v * k, t - L * b], M = [r + v * T, i - L * S], X = [r, i];
  if (N[0] = 2 * z[0] - N[0], N[1] = 2 * z[1] - N[1], h) return [N, M, X].concat(f);
  {
    f = [N, M, X].concat(f);
    const W = [];
    for (let D = 0; D < f.length; D += 3) {
      const E = Hi(f[D][0], f[D][1], c), F = Hi(f[D + 1][0], f[D + 1][1], c), O = Hi(f[D + 2][0], f[D + 2][1], c);
      W.push([E[0], E[1], F[0], F[1], O[0], O[1]]);
    }
    return W;
  }
}
const pT = { randOffset: function(e, t) {
  return ft(e, t);
}, randOffsetWithRange: function(e, t, r) {
  return Ro(e, t, r);
}, ellipse: function(e, t, r, i, s) {
  const o = yg(r, i, s);
  return Yn(e, t, s, o).opset;
}, doubleLineOps: function(e, t, r, i, s) {
  return pr(e, t, r, i, s, !0);
} };
function mg(e, t, r, i, s) {
  return { type: "path", ops: pr(e, t, r, i, s) };
}
function no(e, t, r) {
  const i = (e || []).length;
  if (i > 2) {
    const s = [];
    for (let o = 0; o < i - 1; o++) s.push(...pr(e[o][0], e[o][1], e[o + 1][0], e[o + 1][1], r));
    return t && s.push(...pr(e[i - 1][0], e[i - 1][1], e[0][0], e[0][1], r)), { type: "path", ops: s };
  }
  return i === 2 ? mg(e[0][0], e[0][1], e[1][0], e[1][1], r) : { type: "path", ops: [] };
}
function gT(e, t, r, i, s) {
  return (function(o, a) {
    return no(o, !0, a);
  })([[e, t], [e + r, t], [e + r, t + i], [e, t + i]], s);
}
function Hc(e, t) {
  if (e.length) {
    const r = typeof e[0][0] == "number" ? [e] : e, i = js(r[0], 1 * (1 + 0.2 * t.roughness), t), s = t.disableMultiStroke ? [] : js(r[0], 1.5 * (1 + 0.22 * t.roughness), jc(t));
    for (let o = 1; o < r.length; o++) {
      const a = r[o];
      if (a.length) {
        const n = js(a, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : js(a, 1.5 * (1 + 0.22 * t.roughness), jc(t));
        for (const h of n) h.op !== "move" && i.push(h);
        for (const h of l) h.op !== "move" && s.push(h);
      }
    }
    return { type: "path", ops: i.concat(s) };
  }
  return { type: "path", ops: [] };
}
function yg(e, t, r) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), s = Math.ceil(Math.max(r.curveStepCount, r.curveStepCount / Math.sqrt(200) * i)), o = 2 * Math.PI / s;
  let a = Math.abs(e / 2), n = Math.abs(t / 2);
  const l = 1 - r.curveFitting;
  return a += ft(a * l, r), n += ft(n * l, r), { increment: o, rx: a, ry: n };
}
function Yn(e, t, r, i) {
  const [s, o] = Gc(i.increment, e, t, i.rx, i.ry, 1, i.increment * Ro(0.1, Ro(0.4, 1, r), r), r);
  let a = Po(s, null, r);
  if (!r.disableMultiStroke && r.roughness !== 0) {
    const [n] = Gc(i.increment, e, t, i.rx, i.ry, 1.5, 0, r), l = Po(n, null, r);
    a = a.concat(l);
  }
  return { estimatedPoints: o, opset: { type: "path", ops: a } };
}
function Yc(e, t, r, i, s, o, a, n, l) {
  const h = e, c = t;
  let u = Math.abs(r / 2), f = Math.abs(i / 2);
  u += ft(0.01 * u, l), f += ft(0.01 * f, l);
  let d = s, g = o;
  for (; d < 0; ) d += 2 * Math.PI, g += 2 * Math.PI;
  g - d > 2 * Math.PI && (d = 0, g = 2 * Math.PI);
  const m = 2 * Math.PI / l.curveStepCount, y = Math.min(m / 2, (g - d) / 2), C = Xc(y, h, c, u, f, d, g, 1, l);
  if (!l.disableMultiStroke) {
    const b = Xc(y, h, c, u, f, d, g, 1.5, l);
    C.push(...b);
  }
  return a && (n ? C.push(...pr(h, c, h + u * Math.cos(d), c + f * Math.sin(d), l), ...pr(h, c, h + u * Math.cos(g), c + f * Math.sin(g), l)) : C.push({ op: "lineTo", data: [h, c] }, { op: "lineTo", data: [h + u * Math.cos(d), c + f * Math.sin(d)] })), { type: "path", ops: C };
}
function Uc(e, t) {
  const r = pg(fg(Ql(e))), i = [];
  let s = [0, 0], o = [0, 0];
  for (const { key: a, data: n } of r) switch (a) {
    case "M":
      o = [n[0], n[1]], s = [n[0], n[1]];
      break;
    case "L":
      i.push(...pr(o[0], o[1], n[0], n[1], t)), o = [n[0], n[1]];
      break;
    case "C": {
      const [l, h, c, u, f, d] = n;
      i.push(...mT(l, h, c, u, f, d, o, t)), o = [f, d];
      break;
    }
    case "Z":
      i.push(...pr(o[0], o[1], s[0], s[1], t)), o = [s[0], s[1]];
  }
  return { type: "path", ops: i };
}
function Va(e, t) {
  const r = [];
  for (const i of e) if (i.length) {
    const s = t.maxRandomnessOffset || 0, o = i.length;
    if (o > 2) {
      r.push({ op: "move", data: [i[0][0] + ft(s, t), i[0][1] + ft(s, t)] });
      for (let a = 1; a < o; a++) r.push({ op: "lineTo", data: [i[a][0] + ft(s, t), i[a][1] + ft(s, t)] });
    }
  }
  return { type: "fillPath", ops: r };
}
function Vr(e, t) {
  return (function(r, i) {
    let s = r.fillStyle || "hachure";
    if (!ne[s]) switch (s) {
      case "zigzag":
        ne[s] || (ne[s] = new nT(i));
        break;
      case "cross-hatch":
        ne[s] || (ne[s] = new lT(i));
        break;
      case "dots":
        ne[s] || (ne[s] = new hT(i));
        break;
      case "dashed":
        ne[s] || (ne[s] = new cT(i));
        break;
      case "zigzag-line":
        ne[s] || (ne[s] = new uT(i));
        break;
      default:
        s = "hachure", ne[s] || (ne[s] = new Kl(i));
    }
    return ne[s];
  })(t, pT).fillPolygons(e, t);
}
function jc(e) {
  const t = Object.assign({}, e);
  return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function Cg(e) {
  return e.randomizer || (e.randomizer = new dT(e.seed || 0)), e.randomizer.next();
}
function Ro(e, t, r, i = 1) {
  return r.roughness * i * (Cg(r) * (t - e) + e);
}
function ft(e, t, r = 1) {
  return Ro(-e, e, t, r);
}
function pr(e, t, r, i, s, o = !1) {
  const a = o ? s.disableMultiStrokeFill : s.disableMultiStroke, n = Un(e, t, r, i, s, !0, !1);
  if (a) return n;
  const l = Un(e, t, r, i, s, !0, !0);
  return n.concat(l);
}
function Un(e, t, r, i, s, o, a) {
  const n = Math.pow(e - r, 2) + Math.pow(t - i, 2), l = Math.sqrt(n);
  let h = 1;
  h = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
  let c = s.maxRandomnessOffset || 0;
  c * c * 100 > n && (c = l / 10);
  const u = c / 2, f = 0.2 + 0.2 * Cg(s);
  let d = s.bowing * s.maxRandomnessOffset * (i - t) / 200, g = s.bowing * s.maxRandomnessOffset * (e - r) / 200;
  d = ft(d, s, h), g = ft(g, s, h);
  const m = [], y = () => ft(u, s, h), C = () => ft(c, s, h), b = s.preserveVertices;
  return a ? m.push({ op: "move", data: [e + (b ? 0 : y()), t + (b ? 0 : y())] }) : m.push({ op: "move", data: [e + (b ? 0 : ft(c, s, h)), t + (b ? 0 : ft(c, s, h))] }), a ? m.push({ op: "bcurveTo", data: [d + e + (r - e) * f + y(), g + t + (i - t) * f + y(), d + e + 2 * (r - e) * f + y(), g + t + 2 * (i - t) * f + y(), r + (b ? 0 : y()), i + (b ? 0 : y())] }) : m.push({ op: "bcurveTo", data: [d + e + (r - e) * f + C(), g + t + (i - t) * f + C(), d + e + 2 * (r - e) * f + C(), g + t + 2 * (i - t) * f + C(), r + (b ? 0 : C()), i + (b ? 0 : C())] }), m;
}
function js(e, t, r) {
  if (!e.length) return [];
  const i = [];
  i.push([e[0][0] + ft(t, r), e[0][1] + ft(t, r)]), i.push([e[0][0] + ft(t, r), e[0][1] + ft(t, r)]);
  for (let s = 1; s < e.length; s++) i.push([e[s][0] + ft(t, r), e[s][1] + ft(t, r)]), s === e.length - 1 && i.push([e[s][0] + ft(t, r), e[s][1] + ft(t, r)]);
  return Po(i, null, r);
}
function Po(e, t, r) {
  const i = e.length, s = [];
  if (i > 3) {
    const o = [], a = 1 - r.curveTightness;
    s.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let n = 1; n + 2 < i; n++) {
      const l = e[n];
      o[0] = [l[0], l[1]], o[1] = [l[0] + (a * e[n + 1][0] - a * e[n - 1][0]) / 6, l[1] + (a * e[n + 1][1] - a * e[n - 1][1]) / 6], o[2] = [e[n + 1][0] + (a * e[n][0] - a * e[n + 2][0]) / 6, e[n + 1][1] + (a * e[n][1] - a * e[n + 2][1]) / 6], o[3] = [e[n + 1][0], e[n + 1][1]], s.push({ op: "bcurveTo", data: [o[1][0], o[1][1], o[2][0], o[2][1], o[3][0], o[3][1]] });
    }
  } else i === 3 ? (s.push({ op: "move", data: [e[1][0], e[1][1]] }), s.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : i === 2 && s.push(...Un(e[0][0], e[0][1], e[1][0], e[1][1], r, !0, !0));
  return s;
}
function Gc(e, t, r, i, s, o, a, n) {
  const l = [], h = [];
  if (n.roughness === 0) {
    e /= 4, h.push([t + i * Math.cos(-e), r + s * Math.sin(-e)]);
    for (let c = 0; c <= 2 * Math.PI; c += e) {
      const u = [t + i * Math.cos(c), r + s * Math.sin(c)];
      l.push(u), h.push(u);
    }
    h.push([t + i * Math.cos(0), r + s * Math.sin(0)]), h.push([t + i * Math.cos(e), r + s * Math.sin(e)]);
  } else {
    const c = ft(0.5, n) - Math.PI / 2;
    h.push([ft(o, n) + t + 0.9 * i * Math.cos(c - e), ft(o, n) + r + 0.9 * s * Math.sin(c - e)]);
    const u = 2 * Math.PI + c - 0.01;
    for (let f = c; f < u; f += e) {
      const d = [ft(o, n) + t + i * Math.cos(f), ft(o, n) + r + s * Math.sin(f)];
      l.push(d), h.push(d);
    }
    h.push([ft(o, n) + t + i * Math.cos(c + 2 * Math.PI + 0.5 * a), ft(o, n) + r + s * Math.sin(c + 2 * Math.PI + 0.5 * a)]), h.push([ft(o, n) + t + 0.98 * i * Math.cos(c + a), ft(o, n) + r + 0.98 * s * Math.sin(c + a)]), h.push([ft(o, n) + t + 0.9 * i * Math.cos(c + 0.5 * a), ft(o, n) + r + 0.9 * s * Math.sin(c + 0.5 * a)]);
  }
  return [h, l];
}
function Xc(e, t, r, i, s, o, a, n, l) {
  const h = o + ft(0.1, l), c = [];
  c.push([ft(n, l) + t + 0.9 * i * Math.cos(h - e), ft(n, l) + r + 0.9 * s * Math.sin(h - e)]);
  for (let u = h; u <= a; u += e) c.push([ft(n, l) + t + i * Math.cos(u), ft(n, l) + r + s * Math.sin(u)]);
  return c.push([t + i * Math.cos(a), r + s * Math.sin(a)]), c.push([t + i * Math.cos(a), r + s * Math.sin(a)]), Po(c, null, l);
}
function mT(e, t, r, i, s, o, a, n) {
  const l = [], h = [n.maxRandomnessOffset || 1, (n.maxRandomnessOffset || 1) + 0.3];
  let c = [0, 0];
  const u = n.disableMultiStroke ? 1 : 2, f = n.preserveVertices;
  for (let d = 0; d < u; d++) d === 0 ? l.push({ op: "move", data: [a[0], a[1]] }) : l.push({ op: "move", data: [a[0] + (f ? 0 : ft(h[0], n)), a[1] + (f ? 0 : ft(h[0], n))] }), c = f ? [s, o] : [s + ft(h[d], n), o + ft(h[d], n)], l.push({ op: "bcurveTo", data: [e + ft(h[d], n), t + ft(h[d], n), r + ft(h[d], n), i + ft(h[d], n), c[0], c[1]] });
  return l;
}
function Yi(e) {
  return [...e];
}
function Vc(e, t = 0) {
  const r = e.length;
  if (r < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (r === 3) i.push(Yi(e[0]), Yi(e[1]), Yi(e[2]), Yi(e[2]));
  else {
    const s = [];
    s.push(e[0], e[0]);
    for (let n = 1; n < e.length; n++) s.push(e[n]), n === e.length - 1 && s.push(e[n]);
    const o = [], a = 1 - t;
    i.push(Yi(s[0]));
    for (let n = 1; n + 2 < s.length; n++) {
      const l = s[n];
      o[0] = [l[0], l[1]], o[1] = [l[0] + (a * s[n + 1][0] - a * s[n - 1][0]) / 6, l[1] + (a * s[n + 1][1] - a * s[n - 1][1]) / 6], o[2] = [s[n + 1][0] + (a * s[n][0] - a * s[n + 2][0]) / 6, s[n + 1][1] + (a * s[n][1] - a * s[n + 2][1]) / 6], o[3] = [s[n + 1][0], s[n + 1][1]], i.push(o[1], o[2], o[3]);
    }
  }
  return i;
}
function lo(e, t) {
  return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function yT(e, t, r) {
  const i = lo(t, r);
  if (i === 0) return lo(e, t);
  let s = ((e[0] - t[0]) * (r[0] - t[0]) + (e[1] - t[1]) * (r[1] - t[1])) / i;
  return s = Math.max(0, Math.min(1, s)), lo(e, _r(t, r, s));
}
function _r(e, t, r) {
  return [e[0] + (t[0] - e[0]) * r, e[1] + (t[1] - e[1]) * r];
}
function jn(e, t, r, i) {
  const s = i || [];
  if ((function(n, l) {
    const h = n[l + 0], c = n[l + 1], u = n[l + 2], f = n[l + 3];
    let d = 3 * c[0] - 2 * h[0] - f[0];
    d *= d;
    let g = 3 * c[1] - 2 * h[1] - f[1];
    g *= g;
    let m = 3 * u[0] - 2 * f[0] - h[0];
    m *= m;
    let y = 3 * u[1] - 2 * f[1] - h[1];
    return y *= y, d < m && (d = m), g < y && (g = y), d + g;
  })(e, t) < r) {
    const n = e[t + 0];
    s.length ? (o = s[s.length - 1], a = n, Math.sqrt(lo(o, a)) > 1 && s.push(n)) : s.push(n), s.push(e[t + 3]);
  } else {
    const l = e[t + 0], h = e[t + 1], c = e[t + 2], u = e[t + 3], f = _r(l, h, 0.5), d = _r(h, c, 0.5), g = _r(c, u, 0.5), m = _r(f, d, 0.5), y = _r(d, g, 0.5), C = _r(m, y, 0.5);
    jn([l, f, m, C], 0, r, s), jn([C, y, g, u], 0, r, s);
  }
  var o, a;
  return s;
}
function CT(e, t) {
  return No(e, 0, e.length, t);
}
function No(e, t, r, i, s) {
  const o = s || [], a = e[t], n = e[r - 1];
  let l = 0, h = 1;
  for (let c = t + 1; c < r - 1; ++c) {
    const u = yT(e[c], a, n);
    u > l && (l = u, h = c);
  }
  return Math.sqrt(l) > i ? (No(e, t, h + 1, i, o), No(e, h, r, i, o)) : (o.length || o.push(a), o.push(n)), o;
}
function Za(e, t = 0.15, r) {
  const i = [], s = (e.length - 1) / 3;
  for (let o = 0; o < s; o++)
    jn(e, 3 * o, t, i);
  return r && r > 0 ? No(i, 0, i.length, r) : i;
}
const de = "none";
class qo {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: !1, disableMultiStrokeFill: !1, preserveVertices: !1, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, r, i) {
    return { shape: t, sets: r || [], options: i || this.defaultOptions };
  }
  line(t, r, i, s, o) {
    const a = this._o(o);
    return this._d("line", [mg(t, r, i, s, a)], a);
  }
  rectangle(t, r, i, s, o) {
    const a = this._o(o), n = [], l = gT(t, r, i, s, a);
    if (a.fill) {
      const h = [[t, r], [t + i, r], [t + i, r + s], [t, r + s]];
      a.fillStyle === "solid" ? n.push(Va([h], a)) : n.push(Vr([h], a));
    }
    return a.stroke !== de && n.push(l), this._d("rectangle", n, a);
  }
  ellipse(t, r, i, s, o) {
    const a = this._o(o), n = [], l = yg(i, s, a), h = Yn(t, r, a, l);
    if (a.fill) if (a.fillStyle === "solid") {
      const c = Yn(t, r, a, l).opset;
      c.type = "fillPath", n.push(c);
    } else n.push(Vr([h.estimatedPoints], a));
    return a.stroke !== de && n.push(h.opset), this._d("ellipse", n, a);
  }
  circle(t, r, i, s) {
    const o = this.ellipse(t, r, i, i, s);
    return o.shape = "circle", o;
  }
  linearPath(t, r) {
    const i = this._o(r);
    return this._d("linearPath", [no(t, !1, i)], i);
  }
  arc(t, r, i, s, o, a, n = !1, l) {
    const h = this._o(l), c = [], u = Yc(t, r, i, s, o, a, n, !0, h);
    if (n && h.fill) if (h.fillStyle === "solid") {
      const f = Object.assign({}, h);
      f.disableMultiStroke = !0;
      const d = Yc(t, r, i, s, o, a, !0, !1, f);
      d.type = "fillPath", c.push(d);
    } else c.push((function(f, d, g, m, y, C, b) {
      const k = f, S = d;
      let T = Math.abs(g / 2), _ = Math.abs(m / 2);
      T += ft(0.01 * T, b), _ += ft(0.01 * _, b);
      let v = y, L = C;
      for (; v < 0; ) v += 2 * Math.PI, L += 2 * Math.PI;
      L - v > 2 * Math.PI && (v = 0, L = 2 * Math.PI);
      const z = (L - v) / b.curveStepCount, N = [];
      for (let M = v; M <= L; M += z) N.push([k + T * Math.cos(M), S + _ * Math.sin(M)]);
      return N.push([k + T * Math.cos(L), S + _ * Math.sin(L)]), N.push([k, S]), Vr([N], b);
    })(t, r, i, s, o, a, h));
    return h.stroke !== de && c.push(u), this._d("arc", c, h);
  }
  curve(t, r) {
    const i = this._o(r), s = [], o = Hc(t, i);
    if (i.fill && i.fill !== de) if (i.fillStyle === "solid") {
      const a = Hc(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      s.push({ type: "fillPath", ops: this._mergedShape(a.ops) });
    } else {
      const a = [], n = t;
      if (n.length) {
        const l = typeof n[0][0] == "number" ? [n] : n;
        for (const h of l) h.length < 3 ? a.push(...h) : h.length === 3 ? a.push(...Za(Vc([h[0], h[0], h[1], h[2]]), 10, (1 + i.roughness) / 2)) : a.push(...Za(Vc(h), 10, (1 + i.roughness) / 2));
      }
      a.length && s.push(Vr([a], i));
    }
    return i.stroke !== de && s.push(o), this._d("curve", s, i);
  }
  polygon(t, r) {
    const i = this._o(r), s = [], o = no(t, !0, i);
    return i.fill && (i.fillStyle === "solid" ? s.push(Va([t], i)) : s.push(Vr([t], i))), i.stroke !== de && s.push(o), this._d("polygon", s, i);
  }
  path(t, r) {
    const i = this._o(r), s = [];
    if (!t) return this._d("path", s, i);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const o = i.fill && i.fill !== "transparent" && i.fill !== de, a = i.stroke !== de, n = !!(i.simplification && i.simplification < 1), l = (function(c, u, f) {
      const d = pg(fg(Ql(c))), g = [];
      let m = [], y = [0, 0], C = [];
      const b = () => {
        C.length >= 4 && m.push(...Za(C, u)), C = [];
      }, k = () => {
        b(), m.length && (g.push(m), m = []);
      };
      for (const { key: T, data: _ } of d) switch (T) {
        case "M":
          k(), y = [_[0], _[1]], m.push(y);
          break;
        case "L":
          b(), m.push([_[0], _[1]]);
          break;
        case "C":
          if (!C.length) {
            const v = m.length ? m[m.length - 1] : y;
            C.push([v[0], v[1]]);
          }
          C.push([_[0], _[1]]), C.push([_[2], _[3]]), C.push([_[4], _[5]]);
          break;
        case "Z":
          b(), m.push([y[0], y[1]]);
      }
      if (k(), !f) return g;
      const S = [];
      for (const T of g) {
        const _ = CT(T, f);
        _.length && S.push(_);
      }
      return S;
    })(t, 1, n ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2), h = Uc(t, i);
    if (o) if (i.fillStyle === "solid") if (l.length === 1) {
      const c = Uc(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      s.push({ type: "fillPath", ops: this._mergedShape(c.ops) });
    } else s.push(Va(l, i));
    else s.push(Vr(l, i));
    return a && (n ? l.forEach(((c) => {
      s.push(no(c, !1, i));
    })) : s.push(h)), this._d("path", s, i);
  }
  opsToPath(t, r) {
    let i = "";
    for (const s of t.ops) {
      const o = typeof r == "number" && r >= 0 ? s.data.map(((a) => +a.toFixed(r))) : s.data;
      switch (s.op) {
        case "move":
          i += `M${o[0]} ${o[1]} `;
          break;
        case "bcurveTo":
          i += `C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;
          break;
        case "lineTo":
          i += `L${o[0]} ${o[1]} `;
      }
    }
    return i.trim();
  }
  toPaths(t) {
    const r = t.sets || [], i = t.options || this.defaultOptions, s = [];
    for (const o of r) {
      let a = null;
      switch (o.type) {
        case "path":
          a = { d: this.opsToPath(o), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: de };
          break;
        case "fillPath":
          a = { d: this.opsToPath(o), stroke: de, strokeWidth: 0, fill: i.fill || de };
          break;
        case "fillSketch":
          a = this.fillSketch(o, i);
      }
      a && s.push(a);
    }
    return s;
  }
  fillSketch(t, r) {
    let i = r.fillWeight;
    return i < 0 && (i = r.strokeWidth / 2), { d: this.opsToPath(t), stroke: r.fill || de, strokeWidth: i, fill: de };
  }
  _mergedShape(t) {
    return t.filter(((r, i) => i === 0 || r.op !== "move"));
  }
}
class xT {
  constructor(t, r) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new qo(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), s = this.ctx, o = t.options.fixedDecimalPlaceDigits;
    for (const a of r) switch (a.type) {
      case "path":
        s.save(), s.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, s.lineWidth = i.strokeWidth, i.strokeLineDash && s.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (s.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(s, a, o), s.restore();
        break;
      case "fillPath": {
        s.save(), s.fillStyle = i.fill || "";
        const n = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(s, a, o, n), s.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(s, a, i);
    }
  }
  fillSketch(t, r, i) {
    let s = i.fillWeight;
    s < 0 && (s = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = s, this._drawToContext(t, r, i.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, r, i, s = "nonzero") {
    t.beginPath();
    for (const o of r.ops) {
      const a = typeof i == "number" && i >= 0 ? o.data.map(((n) => +n.toFixed(i))) : o.data;
      switch (o.op) {
        case "move":
          t.moveTo(a[0], a[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          break;
        case "lineTo":
          t.lineTo(a[0], a[1]);
      }
    }
    r.type === "fillPath" ? t.fill(s) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, r, i, s, o) {
    const a = this.gen.line(t, r, i, s, o);
    return this.draw(a), a;
  }
  rectangle(t, r, i, s, o) {
    const a = this.gen.rectangle(t, r, i, s, o);
    return this.draw(a), a;
  }
  ellipse(t, r, i, s, o) {
    const a = this.gen.ellipse(t, r, i, s, o);
    return this.draw(a), a;
  }
  circle(t, r, i, s) {
    const o = this.gen.circle(t, r, i, s);
    return this.draw(o), o;
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i), i;
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i), i;
  }
  arc(t, r, i, s, o, a, n = !1, l) {
    const h = this.gen.arc(t, r, i, s, o, a, n, l);
    return this.draw(h), h;
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i), i;
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i), i;
  }
}
const Gs = "http://www.w3.org/2000/svg";
class bT {
  constructor(t, r) {
    this.svg = t, this.gen = new qo(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), s = this.svg.ownerDocument || window.document, o = s.createElementNS(Gs, "g"), a = t.options.fixedDecimalPlaceDigits;
    for (const n of r) {
      let l = null;
      switch (n.type) {
        case "path":
          l = s.createElementNS(Gs, "path"), l.setAttribute("d", this.opsToPath(n, a)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        case "fillPath":
          l = s.createElementNS(Gs, "path"), l.setAttribute("d", this.opsToPath(n, a)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          l = this.fillSketch(s, n, i);
      }
      l && o.appendChild(l);
    }
    return o;
  }
  fillSketch(t, r, i) {
    let s = i.fillWeight;
    s < 0 && (s = i.strokeWidth / 2);
    const o = t.createElementNS(Gs, "path");
    return o.setAttribute("d", this.opsToPath(r, i.fixedDecimalPlaceDigits)), o.setAttribute("stroke", i.fill || ""), o.setAttribute("stroke-width", s + ""), o.setAttribute("fill", "none"), i.fillLineDash && o.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && o.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), o;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, r) {
    return this.gen.opsToPath(t, r);
  }
  line(t, r, i, s, o) {
    const a = this.gen.line(t, r, i, s, o);
    return this.draw(a);
  }
  rectangle(t, r, i, s, o) {
    const a = this.gen.rectangle(t, r, i, s, o);
    return this.draw(a);
  }
  ellipse(t, r, i, s, o) {
    const a = this.gen.ellipse(t, r, i, s, o);
    return this.draw(a);
  }
  circle(t, r, i, s) {
    const o = this.gen.circle(t, r, i, s);
    return this.draw(o);
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i);
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i);
  }
  arc(t, r, i, s, o, a, n = !1, l) {
    const h = this.gen.arc(t, r, i, s, o, a, n, l);
    return this.draw(h);
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i);
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i);
  }
}
var J = { canvas: (e, t) => new xT(e, t), svg: (e, t) => new bT(e, t), generator: (e) => new qo(e), newSeed: () => qo.newSeed() }, dt = /* @__PURE__ */ p(async (e, t, r) => {
  var d, g;
  let i;
  const s = t.useHtmlLabels || We((d = Tt()) == null ? void 0 : d.htmlLabels);
  r ? i = r : i = "node default";
  const o = e.insert("g").attr("class", i).attr("id", t.domId || t.id), a = o.insert("g").attr("class", "label").attr("style", Ut(t.labelStyle));
  let n;
  t.label === void 0 ? n = "" : n = typeof t.label == "string" ? t.label : t.label[0];
  const l = !!t.icon || !!t.img, h = t.labelType === "markdown", c = await He(
    a,
    ve(Ir(n), Tt()),
    {
      useHtmlLabels: s,
      width: t.width || ((g = Tt().flowchart) == null ? void 0 : g.wrappingWidth),
      classes: h ? "markdown-node-label" : "",
      style: t.labelStyle,
      addSvgBackground: l,
      markdown: h
    },
    Tt()
  );
  let u = c.getBBox();
  const f = ((t == null ? void 0 : t.padding) ?? 0) / 2;
  if (s) {
    const m = c.children[0], y = Ct(c);
    await Np(m, n), u = m.getBoundingClientRect(), y.attr("width", u.width), y.attr("height", u.height);
  }
  return s ? a.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")") : a.attr("transform", "translate(0, " + -u.height / 2 + ")"), t.centerLabel && a.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), a.insert("rect", ":first-child"), { shapeSvg: o, bbox: u, halfPadding: f, label: a };
}, "labelHelper"), Ka = /* @__PURE__ */ p(async (e, t, r) => {
  var l, h;
  const i = r.useHtmlLabels ?? se(Tt()), s = e.insert("g").attr("class", "label").attr("style", r.labelStyle || ""), o = await He(s, ve(Ir(t), Tt()), {
    useHtmlLabels: i,
    width: r.width || ((h = (l = Tt()) == null ? void 0 : l.flowchart) == null ? void 0 : h.wrappingWidth),
    style: r.labelStyle,
    addSvgBackground: !!r.icon || !!r.img
  });
  let a = o.getBBox();
  const n = r.padding / 2;
  if (se(Tt())) {
    const c = o.children[0], u = Ct(o);
    a = c.getBoundingClientRect(), u.attr("width", a.width), u.attr("height", a.height);
  }
  return i ? s.attr("transform", "translate(" + -a.width / 2 + ", " + -a.height / 2 + ")") : s.attr("transform", "translate(0, " + -a.height / 2 + ")"), r.centerLabel && s.attr("transform", "translate(" + -a.width / 2 + ", " + -a.height / 2 + ")"), s.insert("rect", ":first-child"), { shapeSvg: e, bbox: a, halfPadding: n, label: s };
}, "insertLabel"), it = /* @__PURE__ */ p((e, t) => {
  const r = t.node().getBBox();
  e.width = r.width, e.height = r.height;
}, "updateNodeBounds"), ht = /* @__PURE__ */ p((e, t) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (t || ""), "getNodeClasses");
function wt(e) {
  const t = e.map((r, i) => `${i === 0 ? "M" : "L"}${r.x},${r.y}`);
  return t.push("Z"), t.join(" ");
}
p(wt, "createPathFromPoints");
function gr(e, t, r, i, s, o) {
  const a = [], l = r - e, h = i - t, c = l / o, u = 2 * Math.PI / c, f = t + h / 2;
  for (let d = 0; d <= 50; d++) {
    const g = d / 50, m = e + g * l, y = f + s * Math.sin(u * (m - e));
    a.push({ x: m, y });
  }
  return a;
}
p(gr, "generateFullSineWavePoints");
function ms(e, t, r, i, s, o) {
  const a = [], n = s * Math.PI / 180, c = (o * Math.PI / 180 - n) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = n + u * c, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    a.push({ x: -d, y: -g });
  }
  return a;
}
p(ms, "generateCirclePoints");
function Gn(e) {
  const t = Array.from(e.childNodes).filter(
    (l) => l.tagName === "path"
  ), r = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = t.map((l) => l.getAttribute("d")).filter((l) => l !== null).join(" ");
  r.setAttribute("d", i);
  const s = t.find((l) => l.getAttribute("fill") !== "none"), o = t.find((l) => l.getAttribute("stroke") !== "none"), a = /* @__PURE__ */ p((l, h) => (l == null ? void 0 : l.getAttribute(h)) ?? void 0, "getAttr");
  if (s) {
    const l = {
      fill: a(s, "fill"),
      "fill-opacity": a(s, "fill-opacity") ?? "1"
    };
    Object.entries(l).forEach(([h, c]) => {
      c && r.setAttribute(h, c);
    });
  }
  if (o) {
    const l = {
      stroke: a(o, "stroke"),
      "stroke-width": a(o, "stroke-width") ?? "1",
      "stroke-opacity": a(o, "stroke-opacity") ?? "1"
    };
    Object.entries(l).forEach(([h, c]) => {
      c && r.setAttribute(h, c);
    });
  }
  const n = document.createElementNS("http://www.w3.org/2000/svg", "g");
  return n.appendChild(r), n;
}
p(Gn, "mergePaths");
var kT = /* @__PURE__ */ p((e, t) => {
  var r = e.x, i = e.y, s = t.x - r, o = t.y - i, a = e.width / 2, n = e.height / 2, l, h;
  return Math.abs(o) * a > Math.abs(s) * n ? (o < 0 && (n = -n), l = o === 0 ? 0 : n * s / o, h = n) : (s < 0 && (a = -a), l = a, h = s === 0 ? 0 : a * o / s), { x: r + l, y: i + h };
}, "intersectRect"), qr = kT, wT = /* @__PURE__ */ p(async (e, t, r, i = !1, s = !1) => {
  let o = t || "";
  typeof o == "object" && (o = o[0]);
  const a = Tt(), n = se(a);
  return await He(
    e,
    o,
    {
      style: r,
      isTitle: i,
      useHtmlLabels: n,
      markdown: !1,
      isNode: s,
      width: Number.POSITIVE_INFINITY
    },
    a
  );
}, "createLabel"), lr = wT, mr = /* @__PURE__ */ p((e, t, r, i, s) => [
  "M",
  e + s,
  t,
  // Move to the first point
  "H",
  e + r - s,
  // Draw horizontal line to the beginning of the right corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e + r,
  t + s,
  // Draw arc to the right top corner
  "V",
  t + i - s,
  // Draw vertical line down to the beginning of the right bottom corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e + r - s,
  t + i,
  // Draw arc to the right bottom corner
  "H",
  e + s,
  // Draw horizontal line to the beginning of the left bottom corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e,
  t + i - s,
  // Draw arc to the left bottom corner
  "V",
  t + s,
  // Draw vertical line up to the beginning of the left top corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e + s,
  t,
  // Draw arc to the left top corner
  "Z"
  // Close the path
].join(" "), "createRoundedRectPathD"), ST = /* @__PURE__ */ p(async (e, t) => {
  const r = Tt(), { themeVariables: i, handDrawnSeed: s } = r, { clusterBkg: o, clusterBorder: a } = i, n = a, { labelStyles: l, nodeStyles: h, borderStyles: c, backgroundStyles: u } = et(t), f = e.insert("g").attr("class", "cluster swimlane " + (t.cssClasses || "")).attr("id", t.id).attr("data-id", t.id).attr("data-et", "cluster").attr("data-look", t.look), d = We(r.flowchart.htmlLabels), g = t.direction === "LR", m = f.insert("g").attr("class", "cluster-label swimlane-label"), y = await He(m, t.label, {
    style: t.labelStyle,
    useHtmlLabels: d,
    isNode: !0,
    width: t.width
  });
  let C = y.getBBox();
  if (d) {
    const W = y.children[0], D = Ct(y);
    C = W.getBoundingClientRect(), D.attr("width", C.width), D.attr("height", C.height);
  }
  const b = t.padding ?? 0, k = t.width <= C.width + b ? C.width + b : t.width;
  t.width <= C.width + b ? t.diff = (k - t.width) / 2 - b : t.diff = -b;
  const S = t.height, T = t.y - S / 2, _ = t.y + S / 2, v = t.x - k / 2, L = t.swimlaneContentTop !== void 0 ? t.swimlaneContentTop : T + S / 3, z = g ? 4 : 0, N = C.height + 2 * z;
  let M, X;
  if (g) {
    const W = Math.max(N, C.height + 2 * z), D = v + W, E = Math.max(0, k - W);
    if (t.look === "handDrawn") {
      const $ = J.svg(f), q = Q(t, {
        roughness: 0.7,
        fill: o,
        stroke: n,
        fillWeight: 3,
        seed: s
      }), j = Q(t, {
        roughness: 0.7,
        fill: "none",
        stroke: n,
        seed: s
      }), Z = $.rectangle(v, T, W, S, q);
      M = f.insert(() => Z, ":first-child");
      const tt = $.rectangle(D, T, E, S, j);
      X = f.insert(() => tt, ":first-child"), M.select("path:nth-child(2)").attr("style", c.join(";")), M.select("path").attr("style", u.join(";").replace("fill", "stroke"));
    } else
      M = f.insert("rect", ":first-child"), X = f.insert("rect", ":first-child"), M.attr("class", "swimlane-title").attr("style", h).attr("x", v).attr("y", T).attr("width", W).attr("height", S).attr("fill", o).attr("stroke", n), X.attr("class", "swimlane-body").attr("style", h).attr("x", D).attr("y", T).attr("width", E).attr("height", S).attr("fill", "none").attr("stroke", n);
    const F = v + W / 2, O = t.y;
    m.attr(
      "transform",
      `translate(${F}, ${O}) rotate(-90) translate(${-C.width / 2}, ${-C.height / 2})`
    );
  } else {
    const W = Math.max(0, L - T), D = Math.min(N, W), E = T + D, F = Math.max(0, _ - E), O = t.x - k / 2;
    if (t.look === "handDrawn") {
      const j = J.svg(f), Z = Q(t, {
        roughness: 0.7,
        fill: o,
        stroke: n,
        fillWeight: 3,
        seed: s
      }), tt = Q(t, {
        roughness: 0.7,
        fill: "none",
        stroke: n,
        seed: s
      }), lt = j.rectangle(O, T, k, D, Z);
      M = f.insert(() => lt, ":first-child");
      const at = j.rectangle(O, E, k, F, tt);
      X = f.insert(() => at, ":first-child"), M.select("path:nth-child(2)").attr("style", c.join(";")), M.select("path").attr("style", u.join(";").replace("fill", "stroke"));
    } else
      M = f.insert("rect", ":first-child"), X = f.insert("rect", ":first-child"), M.attr("class", "swimlane-title").attr("style", h).attr("x", O).attr("y", T).attr("width", k).attr("height", D).attr("fill", o).attr("stroke", n), X.attr("class", "swimlane-body").attr("style", h).attr("x", O).attr("y", E).attr("width", k).attr("height", F).attr("fill", "none").attr("stroke", n);
    const $ = t.x - C.width / 2, q = T + (D - C.height) / 2;
    m.attr("transform", `translate(${$}, ${q})`);
  }
  if (U.trace("Swimlane data ", t, JSON.stringify(t)), l) {
    const W = m.select("span");
    W && W.attr("style", l);
  }
  return t.offsetX = 0, t.width = k, t.height = S, t.offsetY = C.height - b / 2, t.intersect = function(W) {
    return qr(t, W);
  }, { cluster: f, labelBBox: C };
}, "swimlane"), xg = /* @__PURE__ */ p(async (e, t) => {
  U.info("Creating subgraph rect for ", t.id, t);
  const r = Tt(), { themeVariables: i, handDrawnSeed: s } = r, { clusterBkg: o, clusterBorder: a } = i, { labelStyles: n, nodeStyles: l, borderStyles: h, backgroundStyles: c } = et(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), f = se(r), d = u.insert("g").attr("class", "cluster-label ");
  let g;
  t.labelType === "markdown" ? g = await He(d, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0,
    width: t.width
  }) : g = await lr(d, t.label, t.labelStyle || "", !1, !0);
  let m = g.getBBox();
  if (se(r)) {
    const v = g.children[0], L = Ct(g);
    m = v.getBoundingClientRect(), L.attr("width", m.width), L.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const C = t.height, b = t.x - y / 2, k = t.y - C / 2;
  U.trace("Data ", t, JSON.stringify(t));
  let S;
  if (t.look === "handDrawn") {
    const v = J.svg(u), L = Q(t, {
      roughness: 0.7,
      fill: o,
      // fill: 'red',
      stroke: a,
      fillWeight: 3,
      seed: s
    }), z = v.path(mr(b, k, y, C, 0), L);
    S = u.insert(() => (U.debug("Rough node insert CXC", z), z), ":first-child"), S.select("path:nth-child(2)").attr("style", h.join(";")), S.select("path").attr("style", c.join(";").replace("fill", "stroke"));
  } else
    S = u.insert("rect", ":first-child"), S.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", k).attr("width", y).attr("height", C);
  const { subGraphTitleTopMargin: T } = ql(r);
  if (d.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + T})`
  ), n) {
    const v = d.select("span");
    v && v.attr("style", n);
  }
  const _ = S.node().getBBox();
  return t.offsetX = 0, t.width = _.width, t.height = _.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(v) {
    return qr(t, v);
  }, { cluster: u, labelBBox: m };
}, "rect"), TT = /* @__PURE__ */ p((e, t) => {
  const r = e.insert("g").attr("class", "note-cluster").attr("id", t.domId), i = r.insert("rect", ":first-child"), s = 0 * t.padding, o = s / 2;
  i.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - o).attr("y", t.y - t.height / 2 - o).attr("width", t.width + s).attr("height", t.height + s).attr("fill", "none");
  const a = i.node().getBBox();
  return t.width = a.width, t.height = a.height, t.intersect = function(n) {
    return qr(t, n);
  }, { cluster: r, labelBBox: { width: 0, height: 0 } };
}, "noteGroup"), _T = /* @__PURE__ */ p(async (e, t) => {
  const r = Tt(), { themeVariables: i, handDrawnSeed: s } = r, { altBackground: o, compositeBackground: a, compositeTitleBackground: n, nodeBorder: l } = i, h = e.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-id", t.id).attr("data-look", t.look), c = h.insert("g", ":first-child"), u = h.insert("g").attr("class", "cluster-label");
  let f = h.append("rect");
  const d = await lr(u, t.label, t.labelStyle, void 0, !0);
  let g = d.getBBox();
  if (se(r)) {
    const z = d.children[0], N = Ct(d);
    g = z.getBoundingClientRect(), N.attr("width", g.width), N.attr("height", g.height);
  }
  const m = 0 * t.padding, y = m / 2, C = (t.width <= g.width + t.padding ? g.width + t.padding : t.width) + m;
  t.width <= g.width + t.padding ? t.diff = (C - t.width) / 2 - t.padding : t.diff = -t.padding;
  const b = t.height + m, k = t.height + m - g.height - 6, S = t.x - C / 2, T = t.y - b / 2;
  t.width = C;
  const _ = t.y - t.height / 2 - y + g.height + 2;
  let v;
  if (t.look === "handDrawn") {
    const z = t.cssClasses.includes("statediagram-cluster-alt"), N = J.svg(h), M = t.rx || t.ry ? N.path(mr(S, T, C, b, 10), {
      roughness: 0.7,
      fill: n,
      fillStyle: "solid",
      stroke: l,
      seed: s
    }) : N.rectangle(S, T, C, b, { seed: s });
    v = h.insert(() => M, ":first-child");
    const X = N.rectangle(S, _, C, k, {
      fill: z ? o : a,
      fillStyle: z ? "hachure" : "solid",
      stroke: l,
      seed: s
    });
    v = h.insert(() => M, ":first-child"), f = h.insert(() => X);
  } else
    v = c.insert("rect", ":first-child"), v.attr("class", "outer").attr("x", S).attr("y", T).attr("width", C).attr("height", b).attr("data-look", t.look), f.attr("class", "inner").attr("x", S).attr("y", _).attr("width", C).attr("height", k);
  u.attr(
    "transform",
    `translate(${t.x - g.width / 2}, ${T + 1 - (se(r) ? 0 : 3)})`
  );
  const L = v.node().getBBox();
  return t.height = L.height, t.offsetX = 0, t.offsetY = g.height - t.padding / 2, t.labelBBox = g, t.intersect = function(z) {
    return qr(t, z);
  }, { cluster: h, labelBBox: g };
}, "roundedWithTitle"), BT = /* @__PURE__ */ p(async (e, t) => {
  U.info("Creating subgraph rect for ", t.id, t);
  const r = Tt(), { themeVariables: i, handDrawnSeed: s } = r, { clusterBkg: o, clusterBorder: a } = i, { labelStyles: n, nodeStyles: l, borderStyles: h, backgroundStyles: c } = et(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), f = se(r), d = u.insert("g").attr("class", "cluster-label "), g = await He(d, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0,
    width: t.width
  });
  let m = g.getBBox();
  if (se(r)) {
    const v = g.children[0], L = Ct(g);
    m = v.getBoundingClientRect(), L.attr("width", m.width), L.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const C = t.height, b = t.x - y / 2, k = t.y - C / 2;
  U.trace("Data ", t, JSON.stringify(t));
  let S;
  if (t.look === "handDrawn") {
    const v = J.svg(u), L = Q(t, {
      roughness: 0.7,
      fill: o,
      // fill: 'red',
      stroke: a,
      fillWeight: 4,
      seed: s
    }), z = v.path(mr(b, k, y, C, t.rx), L);
    S = u.insert(() => (U.debug("Rough node insert CXC", z), z), ":first-child"), S.select("path:nth-child(2)").attr("style", h.join(";")), S.select("path").attr("style", c.join(";").replace("fill", "stroke"));
  } else
    S = u.insert("rect", ":first-child"), S.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", k).attr("width", y).attr("height", C);
  const { subGraphTitleTopMargin: T } = ql(r);
  if (d.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + T})`
  ), n) {
    const v = d.select("span");
    v && v.attr("style", n);
  }
  const _ = S.node().getBBox();
  return t.offsetX = 0, t.width = _.width, t.height = _.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(v) {
    return qr(t, v);
  }, { cluster: u, labelBBox: m };
}, "kanbanSection"), vT = /* @__PURE__ */ p((e, t) => {
  const r = Tt(), { themeVariables: i, handDrawnSeed: s } = r, { nodeBorder: o } = i, a = e.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-look", t.look), n = a.insert("g", ":first-child"), l = 0 * t.padding, h = t.width + l;
  t.diff = -t.padding;
  const c = t.height + l, u = t.x - h / 2, f = t.y - c / 2;
  t.width = h;
  let d;
  if (t.look === "handDrawn") {
    const y = J.svg(a).rectangle(u, f, h, c, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [5],
      stroke: o,
      seed: s
    });
    d = a.insert(() => y, ":first-child");
  } else {
    d = n.insert("rect", ":first-child");
    let m = "outer";
    t.look, m = "divider", d.attr("class", m).attr("x", u).attr("y", f).attr("width", h).attr("height", c).attr("data-look", t.look);
  }
  const g = d.node().getBBox();
  return t.height = g.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
    return qr(t, m);
  }, { cluster: a, labelBBox: {} };
}, "divider"), LT = xg, FT = {
  rect: xg,
  squareRect: LT,
  roundedWithTitle: _T,
  noteGroup: TT,
  divider: vT,
  kanbanSection: BT,
  swimlane: ST
}, bg = /* @__PURE__ */ new Map(), AT = /* @__PURE__ */ p(async (e, t) => {
  const r = t.shape || "rect", i = await FT[r](e, t);
  return bg.set(t.id, i), i;
}, "insertCluster"), XF = /* @__PURE__ */ p(() => {
  bg = /* @__PURE__ */ new Map();
}, "clear");
function kg(e, t) {
  return e.intersect(t);
}
p(kg, "intersectNode");
var MT = kg;
function wg(e, t, r, i) {
  var s = e.x, o = e.y, a = s - i.x, n = o - i.y, l = Math.sqrt(t * t * n * n + r * r * a * a), h = Math.abs(t * r * a / l);
  i.x < s && (h = -h);
  var c = Math.abs(t * r * n / l);
  return i.y < o && (c = -c), { x: s + h, y: o + c };
}
p(wg, "intersectEllipse");
var Sg = wg;
function Tg(e, t, r) {
  return Sg(e, t, t, r);
}
p(Tg, "intersectCircle");
var ET = Tg;
function _g(e, t, r, i) {
  {
    const s = t.y - e.y, o = e.x - t.x, a = t.x * e.y - e.x * t.y, n = s * r.x + o * r.y + a, l = s * i.x + o * i.y + a, h = 1e-6;
    if (n !== 0 && l !== 0 && Xn(n, l))
      return;
    const c = i.y - r.y, u = r.x - i.x, f = i.x * r.y - r.x * i.y, d = c * e.x + u * e.y + f, g = c * t.x + u * t.y + f;
    if (Math.abs(d) < h && Math.abs(g) < h && Xn(d, g))
      return;
    const m = s * u - c * o;
    if (m === 0)
      return;
    const y = Math.abs(m / 2);
    let C = o * f - u * a;
    const b = C < 0 ? (C - y) / m : (C + y) / m;
    C = c * a - s * f;
    const k = C < 0 ? (C - y) / m : (C + y) / m;
    return { x: b, y: k };
  }
}
p(_g, "intersectLine");
function Xn(e, t) {
  return e * t > 0;
}
p(Xn, "sameSign");
var $T = _g;
function Bg(e, t, r) {
  let i = e.x, s = e.y, o = [], a = Number.POSITIVE_INFINITY, n = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(c) {
    a = Math.min(a, c.x), n = Math.min(n, c.y);
  }) : (a = Math.min(a, t.x), n = Math.min(n, t.y));
  let l = i - e.width / 2 - a, h = s - e.height / 2 - n;
  for (let c = 0; c < t.length; c++) {
    let u = t[c], f = t[c < t.length - 1 ? c + 1 : 0], d = $T(
      e,
      r,
      { x: l + u.x, y: h + u.y },
      { x: l + f.x, y: h + f.y }
    );
    d && o.push(d);
  }
  return o.length ? (o.length > 1 && o.sort(function(c, u) {
    let f = c.x - r.x, d = c.y - r.y, g = Math.sqrt(f * f + d * d), m = u.x - r.x, y = u.y - r.y, C = Math.sqrt(m * m + y * y);
    return g < C ? -1 : g === C ? 0 : 1;
  }), o[0]) : e;
}
p(Bg, "intersectPolygon");
var OT = Bg, K = {
  node: MT,
  circle: ET,
  ellipse: Sg,
  polygon: OT,
  rect: qr
};
function vg(e, t) {
  const { labelStyles: r } = et(t);
  t.labelStyle = r;
  const i = ht(t);
  let s = i;
  i || (s = "anchor");
  const o = e.insert("g").attr("class", s).attr("id", t.domId || t.id), a = 1, { cssStyles: n } = t, l = J.svg(o), h = Q(t, { fill: "black", stroke: "none", fillStyle: "solid" });
  t.look !== "handDrawn" && (h.roughness = 0);
  const c = l.circle(0, 0, a * 2, h), u = o.insert(() => c, ":first-child");
  return u.attr("class", "anchor").attr("style", Ut(n)), it(t, u), t.intersect = function(f) {
    return U.info("Circle intersect", t, a, f), K.circle(t, a, f);
  }, o;
}
p(vg, "anchor");
function Vn(e, t, r, i, s, o, a) {
  const l = (e + r) / 2, h = (t + i) / 2, c = Math.atan2(i - t, r - e), u = (r - e) / 2, f = (i - t) / 2, d = u / s, g = f / o, m = Math.sqrt(d ** 2 + g ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), C = l + y * o * Math.sin(c) * (a ? -1 : 1), b = h - y * s * Math.cos(c) * (a ? -1 : 1), k = Math.atan2((t - b) / o, (e - C) / s);
  let T = Math.atan2((i - b) / o, (r - C) / s) - k;
  a && T < 0 && (T += 2 * Math.PI), !a && T > 0 && (T -= 2 * Math.PI);
  const _ = [];
  for (let v = 0; v < 20; v++) {
    const L = v / 19, z = k + L * T, N = C + s * Math.cos(z), M = b + o * Math.sin(z);
    _.push({ x: N, y: M });
  }
  return _;
}
p(Vn, "generateArcPoints");
function Lg(e, t, r) {
  const [i, s] = [t, r].sort((o, a) => a - o);
  return s * (1 - Math.sqrt(1 - (e / i / 2) ** 2));
}
p(Lg, "calculateArcSagitta");
async function Fg(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = /* @__PURE__ */ p((z) => z + a, "calcTotalHeight"), l = /* @__PURE__ */ p((z) => {
    const N = z / 2;
    return [N / (2.5 + z / 50), N];
  }, "calcEllipseRadius"), { shapeSvg: h, bbox: c } = await dt(e, t, ht(t)), u = n(t != null && t.height ? t == null ? void 0 : t.height : c.height), [f, d] = l(u), g = Lg(u, f, d), y = (t != null && t.width ? t == null ? void 0 : t.width : c.width) + o * 2 + g - g, C = u, { cssStyles: b } = t, k = [
    { x: y / 2, y: -C / 2 },
    { x: -y / 2, y: -C / 2 },
    ...Vn(-y / 2, -C / 2, -y / 2, C / 2, f, d, !1),
    { x: y / 2, y: C / 2 },
    ...Vn(y / 2, C / 2, y / 2, -C / 2, f, d, !0)
  ], S = J.svg(h), T = Q(t, {});
  t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
  const _ = wt(k), v = S.path(_, T), L = h.insert(() => v, ":first-child");
  return L.attr("class", "basic label-container outer-path"), b && t.look !== "handDrawn" && L.selectAll("path").attr("style", b), i && t.look !== "handDrawn" && L.selectAll("path").attr("style", i), L.attr("transform", `translate(${f / 2}, 0)`), it(t, L), t.intersect = function(z) {
    return K.polygon(t, k, z);
  }, h;
}
p(Fg, "bowTieRect");
function er(e, t, r, i) {
  return e.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(s) {
      return s.x + "," + s.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
}
p(er, "insertPolygonShape");
var Xs = 12;
async function Ag(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 28 : s, a = t.look === "neo" ? 24 : s, { shapeSvg: n, bbox: l } = await dt(e, t, ht(t)), h = ((t == null ? void 0 : t.width) ?? l.width) + (t.look === "neo" ? o * 2 : o + Xs), c = ((t == null ? void 0 : t.height) ?? l.height) + (t.look === "neo" ? a * 2 : a), u = 0, f = h, d = -c, g = 0, m = [
    { x: u + Xs, y: d },
    { x: f, y: d },
    { x: f, y: g },
    { x: u, y: g },
    { x: u, y: d + Xs },
    { x: u + Xs, y: d }
  ];
  let y;
  const { cssStyles: C } = t;
  if (t.look === "handDrawn") {
    const b = J.svg(n), k = Q(t, {}), S = wt(m), T = b.path(S, k);
    y = n.insert(() => T, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), C && y.attr("style", C);
  } else
    y = er(n, h, c, m);
  return i && y.attr("style", i), it(t, y), t.intersect = function(b) {
    return K.polygon(t, m, b);
  }, n;
}
p(Ag, "card");
function Mg(e, t) {
  const { nodeStyles: r } = et(t);
  t.label = "";
  const i = e.insert("g").attr("class", ht(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, o = Math.max(28, t.width ?? 0), a = [
    { x: 0, y: o / 2 },
    { x: o / 2, y: 0 },
    { x: 0, y: -o / 2 },
    { x: -o / 2, y: 0 }
  ], n = J.svg(i), l = Q(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const h = wt(a), c = n.path(h, l), u = i.insert(() => c, ":first-child");
  return s && t.look !== "handDrawn" && u.selectAll("path").attr("style", s), r && t.look !== "handDrawn" && u.selectAll("path").attr("style", r), t.width = 28, t.height = 28, t.intersect = function(f) {
    return K.polygon(t, a, f);
  }, i;
}
p(Mg, "choice");
async function Jl(e, t, r) {
  const { labelStyles: i, nodeStyles: s } = et(t);
  t.labelStyle = i;
  const { shapeSvg: o, bbox: a, halfPadding: n } = await dt(e, t, ht(t)), l = 16, h = (r == null ? void 0 : r.padding) ?? n, c = t.look === "neo" ? a.width / 2 + l * 2 : a.width / 2 + h;
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const d = J.svg(o), g = Q(t, {}), m = d.circle(0, 0, c * 2, g);
    u = o.insert(() => m, ":first-child"), u.attr("class", "basic label-container").attr("style", Ut(f));
  } else
    u = o.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", s).attr("r", c).attr("cx", 0).attr("cy", 0);
  return it(t, u), t.calcIntersect = function(d, g) {
    const m = d.width / 2;
    return K.circle(d, m, g);
  }, t.intersect = function(d) {
    return U.info("Circle intersect", t, c, d), K.circle(t, c, d);
  }, o;
}
p(Jl, "circle");
function Eg(e) {
  const t = Math.cos(Math.PI / 4), r = Math.sin(Math.PI / 4), i = e * 2, s = { x: i / 2 * t, y: i / 2 * r }, o = { x: -(i / 2) * t, y: i / 2 * r }, a = { x: -(i / 2) * t, y: -(i / 2) * r }, n = { x: i / 2 * t, y: -(i / 2) * r };
  return `M ${o.x},${o.y} L ${n.x},${n.y}
                   M ${s.x},${s.y} L ${a.x},${a.y}`;
}
p(Eg, "createLine");
function $g(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r, t.label = "";
  const s = e.insert("g").attr("class", ht(t)).attr("id", t.domId ?? t.id), o = Math.max(30, (t == null ? void 0 : t.width) ?? 0), { cssStyles: a } = t, n = J.svg(s), l = Q(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const h = n.circle(0, 0, o * 2, l), c = Eg(o), u = n.path(c, l), f = s.insert(() => h, ":first-child");
  return f.insert(() => u), f.attr("class", "outer-path"), a && t.look !== "handDrawn" && f.selectAll("path").attr("style", a), i && t.look !== "handDrawn" && f.selectAll("path").attr("style", i), it(t, f), t.intersect = function(d) {
    return U.info("crossedCircle intersect", t, { radius: o, point: d }), K.circle(t, o, d);
  }, s;
}
p($g, "crossedCircle");
function Ve(e, t, r, i = 100, s = 0, o = 180) {
  const a = [], n = s * Math.PI / 180, c = (o * Math.PI / 180 - n) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = n + u * c, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    a.push({ x: -d, y: -g });
  }
  return a;
}
p(Ve, "generateCirclePoints");
async function Og(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await dt(e, t, ht(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, h = o.width + n, c = o.height + l, u = Math.max(5, c * 0.1), { cssStyles: f } = t, d = [
    ...Ve(h / 2, -c / 2, u, 30, -90, 0),
    { x: -h / 2 - u, y: u },
    ...Ve(h / 2 + u * 2, -u, u, 20, -180, -270),
    ...Ve(h / 2 + u * 2, u, u, 20, -90, -180),
    { x: -h / 2 - u, y: -c / 2 },
    ...Ve(h / 2, c / 2, u, 20, 0, 90)
  ], g = [
    { x: h / 2, y: -c / 2 - u },
    { x: -h / 2, y: -c / 2 - u },
    ...Ve(h / 2, -c / 2, u, 20, -90, 0),
    { x: -h / 2 - u, y: -u },
    ...Ve(h / 2 + h * 0.1, -u, u, 20, -180, -270),
    ...Ve(h / 2 + h * 0.1, u, u, 20, -90, -180),
    { x: -h / 2 - u, y: c / 2 },
    ...Ve(h / 2, c / 2, u, 20, 0, 90),
    { x: -h / 2, y: c / 2 + u },
    { x: h / 2, y: c / 2 + u }
  ], m = J.svg(s), y = Q(t, { fill: "none" });
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const b = wt(d).replace("Z", ""), k = m.path(b, y), S = wt(g), T = m.path(S, { ...y }), _ = s.insert("g", ":first-child");
  return _.insert(() => T, ":first-child").attr("stroke-opacity", 0), _.insert(() => k, ":first-child"), _.attr("class", "text"), f && t.look !== "handDrawn" && _.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && _.selectAll("path").attr("style", i), _.attr("transform", `translate(${u}, 0)`), a.attr(
    "transform",
    `translate(${-h / 2 + u - (o.x - (o.left ?? 0))},${-c / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`
  ), it(t, _), t.intersect = function(v) {
    return K.polygon(t, g, v);
  }, s;
}
p(Og, "curlyBraceLeft");
function Ze(e, t, r, i = 100, s = 0, o = 180) {
  const a = [], n = s * Math.PI / 180, c = (o * Math.PI / 180 - n) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = n + u * c, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    a.push({ x: d, y: g });
  }
  return a;
}
p(Ze, "generateCirclePoints");
async function Dg(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await dt(e, t, ht(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, h = o.width + (t.look === "neo" ? n * 2 : n), c = o.height + (t.look === "neo" ? l * 2 : l), u = Math.max(5, c * 0.1), { cssStyles: f } = t, d = [
    ...Ze(h / 2, -c / 2, u, 20, -90, 0),
    { x: h / 2 + u, y: -u },
    ...Ze(h / 2 + u * 2, -u, u, 20, -180, -270),
    ...Ze(h / 2 + u * 2, u, u, 20, -90, -180),
    { x: h / 2 + u, y: c / 2 },
    ...Ze(h / 2, c / 2, u, 20, 0, 90)
  ], g = [
    { x: -h / 2, y: -c / 2 - u },
    { x: h / 2, y: -c / 2 - u },
    ...Ze(h / 2, -c / 2, u, 20, -90, 0),
    { x: h / 2 + u, y: -u },
    ...Ze(h / 2 + u * 2, -u, u, 20, -180, -270),
    ...Ze(h / 2 + u * 2, u, u, 20, -90, -180),
    { x: h / 2 + u, y: c / 2 },
    ...Ze(h / 2, c / 2, u, 20, 0, 90),
    { x: h / 2, y: c / 2 + u },
    { x: -h / 2, y: c / 2 + u }
  ], m = J.svg(s), y = Q(t, { fill: "none" });
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const b = wt(d).replace("Z", ""), k = m.path(b, y), S = wt(g), T = m.path(S, { ...y }), _ = s.insert("g", ":first-child");
  return _.insert(() => T, ":first-child").attr("stroke-opacity", 0), _.insert(() => k, ":first-child"), _.attr("class", "text"), f && t.look !== "handDrawn" && _.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && _.selectAll("path").attr("style", i), _.attr("transform", `translate(${-u}, 0)`), a.attr(
    "transform",
    `translate(${-h / 2 + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))},${-c / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`
  ), it(t, _), t.intersect = function(v) {
    return K.polygon(t, g, v);
  }, s;
}
p(Dg, "curlyBraceRight");
function Xt(e, t, r, i = 100, s = 0, o = 180) {
  const a = [], n = s * Math.PI / 180, c = (o * Math.PI / 180 - n) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = n + u * c, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    a.push({ x: -d, y: -g });
  }
  return a;
}
p(Xt, "generateCirclePoints");
async function Ig(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await dt(e, t, ht(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, h = o.width + (t.look === "neo" ? n * 2 : n), c = o.height + (t.look === "neo" ? l * 2 : l), u = Math.max(5, c * 0.1), { cssStyles: f } = t, d = [
    ...Xt(h / 2, -c / 2, u, 30, -90, 0),
    { x: -h / 2 - u, y: u },
    ...Xt(h / 2 + u * 2, -u, u, 20, -180, -270),
    ...Xt(h / 2 + u * 2, u, u, 20, -90, -180),
    { x: -h / 2 - u, y: -c / 2 },
    ...Xt(h / 2, c / 2, u, 20, 0, 90)
  ], g = [
    ...Xt(-h / 2 + u + u / 2, -c / 2, u, 20, -90, -180),
    { x: h / 2 - u / 2, y: u },
    ...Xt(-h / 2 - u / 2, -u, u, 20, 0, 90),
    ...Xt(-h / 2 - u / 2, u, u, 20, -90, 0),
    { x: h / 2 - u / 2, y: -u },
    ...Xt(-h / 2 + u + u / 2, c / 2, u, 30, -180, -270)
  ], m = [
    { x: h / 2, y: -c / 2 - u },
    { x: -h / 2, y: -c / 2 - u },
    ...Xt(h / 2, -c / 2, u, 20, -90, 0),
    { x: -h / 2 - u, y: -u },
    ...Xt(h / 2 + u * 2, -u, u, 20, -180, -270),
    ...Xt(h / 2 + u * 2, u, u, 20, -90, -180),
    { x: -h / 2 - u, y: c / 2 },
    ...Xt(h / 2, c / 2, u, 20, 0, 90),
    { x: -h / 2, y: c / 2 + u },
    { x: h / 2 - u - u / 2, y: c / 2 + u },
    ...Xt(-h / 2 + u + u / 2, -c / 2, u, 20, -90, -180),
    { x: h / 2 - u / 2, y: u },
    ...Xt(-h / 2 - u / 2, -u, u, 20, 0, 90),
    ...Xt(-h / 2 - u / 2, u, u, 20, -90, 0),
    { x: h / 2 - u / 2, y: -u },
    ...Xt(-h / 2 + u + u / 2, c / 2, u, 30, -180, -270)
  ], y = J.svg(s), C = Q(t, { fill: "none" });
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const k = wt(d).replace("Z", ""), S = y.path(k, C), _ = wt(g).replace("Z", ""), v = y.path(_, C), L = wt(m), z = y.path(L, { ...C }), N = s.insert("g", ":first-child");
  return N.insert(() => z, ":first-child").attr("stroke-opacity", 0), N.insert(() => S, ":first-child"), N.insert(() => v, ":first-child"), N.attr("class", "text"), f && t.look !== "handDrawn" && N.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && N.selectAll("path").attr("style", i), N.attr("transform", `translate(${u - u / 4}, 0)`), a.attr(
    "transform",
    `translate(${-h / 2 + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))},${-c / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`
  ), it(t, N), t.intersect = function(M) {
    return K.polygon(t, m, M);
  }, s;
}
p(Ig, "curlyBraces");
async function Rg(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = 20, l = 5, { shapeSvg: h, bbox: c } = await dt(e, t, ht(t)), u = Math.max(n, (c.width + o * 2) * 1.25, (t == null ? void 0 : t.width) ?? 0), f = Math.max(l, c.height + a * 2, (t == null ? void 0 : t.height) ?? 0), d = f / 2, { cssStyles: g } = t, m = J.svg(h), y = Q(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = u, b = f, k = C - d, S = b / 4, T = [
    { x: k, y: 0 },
    { x: S, y: 0 },
    { x: 0, y: b / 2 },
    { x: S, y: b },
    { x: k, y: b },
    ...ms(-k, -b / 2, d, 50, 270, 90)
  ], _ = wt(T), v = m.path(_, y), L = h.insert(() => v, ":first-child");
  return L.attr("class", "basic label-container outer-path"), g && t.look !== "handDrawn" && L.selectChildren("path").attr("style", g), i && t.look !== "handDrawn" && L.selectChildren("path").attr("style", i), L.attr("transform", `translate(${-u / 2}, ${-f / 2})`), it(t, L), t.intersect = function(z) {
    return K.polygon(t, T, z);
  }, h;
}
p(Rg, "curvedTrapezoid");
var DT = /* @__PURE__ */ p((e, t, r, i, s, o) => [
  `M${e},${t + o}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createCylinderPathD"), IT = /* @__PURE__ */ p((e, t, r, i, s, o) => [
  `M${e},${t + o}`,
  `M${e + r},${t + o}`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createOuterCylinderPathD"), RT = /* @__PURE__ */ p((e, t, r, i, s, o) => [`M${e - r / 2},${-i / 2}`, `a${s},${o} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD"), Zc = 8, Kc = 8;
async function Pg(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 24 : s, a = t.look === "neo" ? 24 : s;
  if (t.width || t.height) {
    const y = t.width ?? 0;
    t.width = (t.width ?? 0) - a, t.width < Kc && (t.width = Kc);
    const b = y / 2 / (2.5 + y / 50);
    t.height = (t.height ?? 0) - o - b * 3, t.height < Zc && (t.height = Zc);
  }
  const { shapeSvg: n, bbox: l, label: h } = await dt(e, t, ht(t)), c = (t.width ? t.width : l.width) + a, u = c / 2, f = u / (2.5 + c / 50), d = (t.height ? t.height : l.height) + o + f;
  let g;
  const { cssStyles: m } = t;
  if (t.look === "handDrawn") {
    const y = J.svg(n), C = IT(0, 0, c, d, u, f), b = RT(0, f, c, d, u, f), k = Q(t, {}), S = y.path(C, k), T = y.path(b, Q(t, { fill: "none" }));
    g = n.insert(() => T, ":first-child"), g = n.insert(() => S, ":first-child"), g.attr("class", "basic label-container"), m && g.attr("style", m);
  } else {
    const y = DT(0, 0, c, d, u, f);
    g = n.insert("path", ":first-child").attr("d", y).attr("class", "basic label-container outer-path").attr("style", Ut(m)).attr("style", i);
  }
  return g.attr("label-offset-y", f), g.attr("transform", `translate(${-c / 2}, ${-(d / 2 + f)})`), it(t, g), h.attr(
    "transform",
    `translate(${-(l.width / 2) - (l.x - (l.left ?? 0))}, ${-(l.height / 2) + (t.padding ?? 0) / 1.5 - (l.y - (l.top ?? 0))})`
  ), t.intersect = function(y) {
    const C = K.rect(t, y), b = C.x - (t.x ?? 0);
    if (u != 0 && (Math.abs(b) < (t.width ?? 0) / 2 || Math.abs(b) == (t.width ?? 0) / 2 && Math.abs(C.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - f)) {
      let k = f * f * (1 - b * b / (u * u));
      k > 0 && (k = Math.sqrt(k)), k = f - k, y.y - (t.y ?? 0) > 0 && (k = -k), C.y += k;
    }
    return C;
  }, n;
}
p(Pg, "cylinder");
async function Ai(e, t, r) {
  const { labelStyles: i, nodeStyles: s } = et(t);
  t.labelStyle = i;
  const { shapeSvg: o, bbox: a } = await dt(e, t, ht(t)), n = Math.max(a.width + r.labelPaddingX * 2, (t == null ? void 0 : t.width) || 0), l = Math.max(a.height + r.labelPaddingY * 2, (t == null ? void 0 : t.height) || 0), h = -n / 2, c = -l / 2;
  let u, { rx: f, ry: d } = t;
  const { cssStyles: g } = t;
  if (r != null && r.rx && r.ry && (f = r.rx, d = r.ry), t.look === "handDrawn") {
    const m = J.svg(o), y = Q(t, {}), C = f || d ? m.path(mr(h, c, n, l, f || 0), y) : m.rectangle(h, c, n, l, y);
    u = o.insert(() => C, ":first-child"), u.attr("class", "basic label-container").attr("style", Ut(g));
  } else
    u = o.insert("rect", ":first-child"), u.attr("class", "basic label-container").attr("style", s).attr("rx", Ut(f)).attr("ry", Ut(d)).attr("x", h).attr("y", c).attr("width", n).attr("height", l);
  return it(t, u), t.calcIntersect = function(m, y) {
    return K.rect(m, y);
  }, t.intersect = function(m) {
    return K.rect(t, m);
  }, o;
}
p(Ai, "drawRect");
async function Ng(e, t) {
  const { cssClasses: r, labelPaddingX: i, labelPaddingY: s, padding: o, width: a, height: n } = t, l = {
    rx: 0,
    ry: 0,
    labelPaddingX: i ?? (o ?? 0) * 2,
    labelPaddingY: s ?? o ?? 0
  }, h = await Ai(e, t, l);
  if (t.look === "handDrawn") {
    const d = J.svg(h), g = Q(t, {}), m = h.select(".basic.label-container > path:nth-child(2)"), y = m.node();
    if (!y)
      return h;
    let C = null;
    if (y instanceof SVGGraphicsElement)
      C = y.getBBox();
    else
      return h;
    return h.insert(
      () => d.line(C.x, C.y, C.x + C.width, C.y, g),
      ".basic.label-container g.label"
    ), h.insert(
      () => d.line(
        C.x,
        C.y + C.height,
        C.x + C.width,
        C.y + C.height,
        g
      ),
      ".basic.label-container g.label"
    ), m.remove(), h;
  }
  const c = h.select(".basic.label-container"), u = (Number(c.attr("width")) || a) ?? 0, f = (Number(c.attr("height")) || n) ?? 0;
  return u > 0 && f > 0 && c.attr("stroke-dasharray", `${u} ${f}`), h;
}
p(Ng, "datastore");
async function qg(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 16 : t.padding ?? 0, { shapeSvg: a, bbox: n, label: l } = await dt(e, t, ht(t)), h = n.width + s, c = n.height + o, u = c * 0.2, f = -h / 2, d = -c / 2 - u / 2, { cssStyles: g } = t, m = J.svg(a), y = Q(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = [
    { x: f, y: d + u },
    { x: -f, y: d + u },
    { x: -f, y: -d },
    { x: f, y: -d },
    { x: f, y: d },
    { x: -f, y: d },
    { x: -f, y: d + u }
  ], b = m.polygon(
    C.map((S) => [S.x, S.y]),
    y
  ), k = a.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container outer-path"), g && t.look !== "handDrawn" && k.selectAll("path").attr("style", g), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${f + (t.padding ?? 0) / 2 - (n.x - (n.left ?? 0))}, ${d + u + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), it(t, k), t.intersect = function(S) {
    return K.rect(t, S);
  }, a;
}
p(qg, "dividedRectangle");
async function Wg(e, t) {
  var d, g;
  const { labelStyles: r, nodeStyles: i } = et(t), s = t.look === "neo" ? 12 : 5;
  t.labelStyle = r;
  const o = t.padding ?? 0, a = t.look === "neo" ? 16 : o, { shapeSvg: n, bbox: l } = await dt(e, t, ht(t)), h = (t != null && t.width ? (t == null ? void 0 : t.width) / 2 : l.width / 2) + (a ?? 0), c = h - s;
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const m = J.svg(n), y = Q(t, { roughness: 0.2, strokeWidth: 2.5 }), C = Q(t, { roughness: 0.2, strokeWidth: 1.5 }), b = m.circle(0, 0, h * 2, y), k = m.circle(0, 0, c * 2, C);
    u = n.insert("g", ":first-child"), u.attr("class", Ut(t.cssClasses)).attr("style", Ut(f)), (d = u.node()) == null || d.appendChild(b), (g = u.node()) == null || g.appendChild(k);
  } else {
    u = n.insert("g", ":first-child");
    const m = u.insert("circle", ":first-child"), y = u.insert("circle");
    u.attr("class", "basic label-container").attr("style", i), m.attr("class", "outer-circle").attr("style", i).attr("r", h).attr("cx", 0).attr("cy", 0), y.attr("class", "inner-circle").attr("style", i).attr("r", c).attr("cx", 0).attr("cy", 0);
  }
  return it(t, u), t.intersect = function(m) {
    return U.info("DoubleCircle intersect", t, h, m), K.circle(t, h, m);
  }, n;
}
p(Wg, "doublecircle");
function zg(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = et(t);
  t.label = "", t.labelStyle = i;
  const o = e.insert("g").attr("class", ht(t)).attr("id", t.domId ?? t.id), a = 7, { cssStyles: n } = t, l = J.svg(o), { nodeBorder: h } = r, c = Q(t, { fillStyle: "solid" });
  t.look !== "handDrawn" && (c.roughness = 0);
  const u = l.circle(0, 0, a * 2, c), f = o.insert(() => u, ":first-child");
  return f.selectAll("path").attr("style", `fill: ${h} !important;`), n && n.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", n), s && t.look !== "handDrawn" && f.selectAll("path").attr("style", s), it(t, f), t.intersect = function(d) {
    return U.info("filledCircle intersect", t, { radius: a, point: d }), K.circle(t, a, d);
  }, o;
}
p(zg, "filledCircle");
var Qc = 10, Jc = 10;
async function Hg(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? s * 2 : s;
  (t.width || t.height) && (t.height = (t == null ? void 0 : t.height) ?? 0, t.height < Qc && (t.height = Qc), t.width = ((t == null ? void 0 : t.width) ?? 0) - o - o / 2, t.width < Jc && (t.width = Jc));
  const { shapeSvg: a, bbox: n, label: l } = await dt(e, t, ht(t)), h = (t != null && t.width ? t == null ? void 0 : t.width : n.width) + (o ?? 0), c = t != null && t.height ? t == null ? void 0 : t.height : h + n.height, u = c, f = [
    { x: 0, y: -c },
    { x: u, y: -c },
    { x: u / 2, y: 0 }
  ], { cssStyles: d } = t, g = J.svg(a), m = Q(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = wt(f), C = g.path(y, m), b = a.insert(() => C, ":first-child").attr("transform", `translate(${-c / 2}, ${c / 2})`).attr("class", "outer-path");
  return d && t.look !== "handDrawn" && b.selectChildren("path").attr("style", d), i && t.look !== "handDrawn" && b.selectChildren("path").attr("style", i), t.width = h, t.height = c, it(t, b), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${-c / 2 + (t.padding ?? 0) / 2 + (n.y - (n.top ?? 0))})`
  ), t.intersect = function(k) {
    return U.info("Triangle intersect", t, f, k), K.polygon(t, f, k);
  }, a;
}
p(Hg, "flippedTriangle");
function Yg(e, t, { dir: r, config: { state: i, themeVariables: s } }) {
  const { nodeStyles: o } = et(t);
  t.label = "";
  const a = e.insert("g").attr("class", ht(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t;
  let l = Math.max(70, (t == null ? void 0 : t.width) ?? 0), h = Math.max(10, (t == null ? void 0 : t.height) ?? 0);
  r === "LR" && (l = Math.max(10, (t == null ? void 0 : t.width) ?? 0), h = Math.max(70, (t == null ? void 0 : t.height) ?? 0));
  const c = -1 * l / 2, u = -1 * h / 2, f = J.svg(a), d = Q(t, {
    stroke: s.lineColor,
    fill: s.lineColor
  });
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = f.rectangle(c, u, l, h, d), m = a.insert(() => g, ":first-child");
  n && t.look !== "handDrawn" && m.selectAll("path").attr("style", n), o && t.look !== "handDrawn" && m.selectAll("path").attr("style", o), it(t, m);
  const y = (i == null ? void 0 : i.padding) ?? 0;
  return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(C) {
    return K.rect(t, C);
  }, a;
}
p(Yg, "forkJoin");
async function Ug(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = 15, o = 10, a = t.look === "neo" ? 16 : t.padding ?? 0, n = t.look === "neo" ? 12 : t.padding ?? 0;
  (t.width || t.height) && (t.height = ((t == null ? void 0 : t.height) ?? 0) - n * 2, t.height < o && (t.height = o), t.width = ((t == null ? void 0 : t.width) ?? 0) - a * 2, t.width < s && (t.width = s));
  const { shapeSvg: l, bbox: h } = await dt(e, t, ht(t)), c = (t != null && t.width ? t == null ? void 0 : t.width : Math.max(s, h.width)) + a * 2, u = (t != null && t.height ? t == null ? void 0 : t.height : Math.max(o, h.height)) + n * 2, f = u / 2, { cssStyles: d } = t, g = J.svg(l), m = Q(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -c / 2, y: -u / 2 },
    { x: c / 2 - f, y: -u / 2 },
    ...ms(-c / 2 + f, 0, f, 50, 90, 270),
    { x: c / 2 - f, y: u / 2 },
    { x: -c / 2, y: u / 2 }
  ], C = wt(y), b = g.path(C, m), k = l.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container outer-path"), d && t.look !== "handDrawn" && k.selectChildren("path").attr("style", d), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), it(t, k), t.intersect = function(S) {
    return U.info("Pill intersect", t, { radius: f, point: S }), K.polygon(t, y, S);
  }, l;
}
p(Ug, "halfRoundedRectangle");
var PT = /* @__PURE__ */ p((e, t, r, i, s) => [
  `M${e + s},${t}`,
  `L${e + r - s},${t}`,
  `L${e + r},${t - i / 2}`,
  `L${e + r - s},${t - i}`,
  `L${e + s},${t - i}`,
  `L${e},${t - i / 2}`,
  "Z"
].join(" "), "createHexagonPathD");
async function jg(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t), s = t.look === "neo" ? 3.5 : 4;
  t.labelStyle = r;
  const o = t.padding ?? 0, a = 70, n = 32, l = t.look === "neo" ? a : o, h = t.look === "neo" ? n : o;
  if (t.width || t.height) {
    const k = (t.height ?? 0) / s;
    t.width = ((t == null ? void 0 : t.width) ?? 0) - 2 * k - h, t.height = (t.height ?? 0) - l;
  }
  const { shapeSvg: c, bbox: u } = await dt(e, t, ht(t)), f = (t != null && t.height ? t == null ? void 0 : t.height : u.height) + l, d = f / s, g = (t != null && t.width ? t == null ? void 0 : t.width : u.width) + 2 * d + h, m = [
    { x: d, y: 0 },
    { x: g - d, y: 0 },
    { x: g, y: -f / 2 },
    { x: g - d, y: -f },
    { x: d, y: -f },
    { x: 0, y: -f / 2 }
  ];
  let y;
  const { cssStyles: C } = t;
  if (t.look === "handDrawn") {
    const b = J.svg(c), k = Q(t, {}), S = PT(0, 0, g, f, d), T = b.path(S, k);
    y = c.insert(() => T, ":first-child").attr("transform", `translate(${-g / 2}, ${f / 2})`), C && y.attr("style", C);
  } else
    y = er(c, g, f, m);
  return i && y.attr("style", i), t.width = g, t.height = f, it(t, y), t.intersect = function(b) {
    return K.polygon(t, m, b);
  }, c;
}
p(jg, "hexagon");
async function Gg(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.label = "", t.labelStyle = r;
  const { shapeSvg: s } = await dt(e, t, ht(t)), o = Math.max(30, (t == null ? void 0 : t.width) ?? 0), a = Math.max(30, (t == null ? void 0 : t.height) ?? 0), { cssStyles: n } = t, l = J.svg(s), h = Q(t, {});
  t.look !== "handDrawn" && (h.roughness = 0, h.fillStyle = "solid");
  const c = [
    { x: 0, y: 0 },
    { x: o, y: 0 },
    { x: 0, y: a },
    { x: o, y: a }
  ], u = wt(c), f = l.path(u, h), d = s.insert(() => f, ":first-child");
  return d.attr("class", "basic label-container outer-path"), n && t.look !== "handDrawn" && d.selectChildren("path").attr("style", n), i && t.look !== "handDrawn" && d.selectChildren("path").attr("style", i), d.attr("transform", `translate(${-o / 2}, ${-a / 2})`), it(t, d), t.intersect = function(g) {
    return U.info("Pill intersect", t, { points: c }), K.polygon(t, c, g);
  }, s;
}
p(Gg, "hourglass");
async function Xg(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = et(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: h, bbox: c, label: u } = await dt(e, t, "icon-shape default"), f = t.pos === "t", d = n, g = n, { nodeBorder: m } = r, { stylesMap: y } = Fi(t), C = -g / 2, b = -d / 2, k = t.label ? 8 : 0, S = J.svg(h), T = Q(t, { stroke: "none", fill: "none" });
  t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
  const _ = S.rectangle(C, b, g, d, T), v = Math.max(g, c.width), L = d + c.height + k, z = S.rectangle(-v / 2, -L / 2, v, L, {
    ...T,
    fill: "transparent",
    stroke: "none"
  }), N = h.insert(() => _, ":first-child"), M = h.insert(() => z);
  if (t.icon) {
    const X = h.append("g");
    X.html(
      `<g>${await _s(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const W = X.node().getBBox(), D = W.width, E = W.height, F = W.x, O = W.y;
    X.attr(
      "transform",
      `translate(${-D / 2 - F},${f ? c.height / 2 + k / 2 - E / 2 - O : -c.height / 2 - k / 2 - E / 2 - O})`
    ), X.attr("style", `color: ${y.get("stroke") ?? m};`);
  }
  return u.attr(
    "transform",
    `translate(${-c.width / 2 - (c.x - (c.left ?? 0))},${f ? -L / 2 : L / 2 - c.height})`
  ), N.attr(
    "transform",
    `translate(0,${f ? c.height / 2 + k / 2 : -c.height / 2 - k / 2})`
  ), it(t, M), t.intersect = function(X) {
    if (U.info("iconSquare intersect", t, X), !t.label)
      return K.rect(t, X);
    const W = t.x ?? 0, D = t.y ?? 0, E = t.height ?? 0;
    let F = [];
    return f ? F = [
      { x: W - c.width / 2, y: D - E / 2 },
      { x: W + c.width / 2, y: D - E / 2 },
      { x: W + c.width / 2, y: D - E / 2 + c.height + k },
      { x: W + g / 2, y: D - E / 2 + c.height + k },
      { x: W + g / 2, y: D + E / 2 },
      { x: W - g / 2, y: D + E / 2 },
      { x: W - g / 2, y: D - E / 2 + c.height + k },
      { x: W - c.width / 2, y: D - E / 2 + c.height + k }
    ] : F = [
      { x: W - g / 2, y: D - E / 2 },
      { x: W + g / 2, y: D - E / 2 },
      { x: W + g / 2, y: D - E / 2 + d },
      { x: W + c.width / 2, y: D - E / 2 + d },
      { x: W + c.width / 2 / 2, y: D + E / 2 },
      { x: W - c.width / 2, y: D + E / 2 },
      { x: W - c.width / 2, y: D - E / 2 + d },
      { x: W - g / 2, y: D - E / 2 + d }
    ], K.polygon(t, F, X);
  }, h;
}
p(Xg, "icon");
async function Vg(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = et(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: h, bbox: c, label: u } = await dt(e, t, "icon-shape default"), f = 20, d = t.label ? 8 : 0, g = t.pos === "t", { nodeBorder: m, mainBkg: y } = r, { stylesMap: C } = Fi(t), b = J.svg(h), k = Q(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const S = C.get("fill");
  k.stroke = S ?? y;
  const T = h.append("g");
  t.icon && T.html(
    `<g>${await _s(t.icon, {
      height: n,
      width: n,
      fallbackPrefix: ""
    })}</g>`
  );
  const _ = T.node().getBBox(), v = _.width, L = _.height, z = _.x, N = _.y, M = Math.max(v, L) * Math.SQRT2 + f * 2, X = b.circle(0, 0, M, k), W = Math.max(M, c.width), D = M + c.height + d, E = b.rectangle(-W / 2, -D / 2, W, D, {
    ...k,
    fill: "transparent",
    stroke: "none"
  }), F = h.insert(() => X, ":first-child"), O = h.insert(() => E);
  return T.attr(
    "transform",
    `translate(${-v / 2 - z},${g ? c.height / 2 + d / 2 - L / 2 - N : -c.height / 2 - d / 2 - L / 2 - N})`
  ), T.attr("style", `color: ${C.get("stroke") ?? m};`), u.attr(
    "transform",
    `translate(${-c.width / 2 - (c.x - (c.left ?? 0))},${g ? -D / 2 : D / 2 - c.height})`
  ), F.attr(
    "transform",
    `translate(0,${g ? c.height / 2 + d / 2 : -c.height / 2 - d / 2})`
  ), it(t, O), t.intersect = function($) {
    return U.info("iconSquare intersect", t, $), K.rect(t, $);
  }, h;
}
p(Vg, "iconCircle");
async function Zg(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = et(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: h, bbox: c, halfPadding: u, label: f } = await dt(
    e,
    t,
    "icon-shape default"
  ), d = t.pos === "t", g = n + u * 2, m = n + u * 2, { nodeBorder: y, mainBkg: C } = r, { stylesMap: b } = Fi(t), k = -m / 2, S = -g / 2, T = t.label ? 8 : 0, _ = J.svg(h), v = Q(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const L = b.get("fill");
  v.stroke = L ?? C;
  const z = _.path(mr(k, S, m, g, 5), v), N = Math.max(m, c.width), M = g + c.height + T, X = _.rectangle(-N / 2, -M / 2, N, M, {
    ...v,
    fill: "transparent",
    stroke: "none"
  }), W = h.insert(() => z, ":first-child").attr("class", "icon-shape2"), D = h.insert(() => X);
  if (t.icon) {
    const E = h.append("g");
    E.html(
      `<g>${await _s(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const F = E.node().getBBox(), O = F.width, $ = F.height, q = F.x, j = F.y;
    E.attr(
      "transform",
      `translate(${-O / 2 - q},${d ? c.height / 2 + T / 2 - $ / 2 - j : -c.height / 2 - T / 2 - $ / 2 - j})`
    ), E.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-c.width / 2 - (c.x - (c.left ?? 0))},${d ? -M / 2 : M / 2 - c.height})`
  ), W.attr(
    "transform",
    `translate(0,${d ? c.height / 2 + T / 2 : -c.height / 2 - T / 2})`
  ), it(t, D), t.intersect = function(E) {
    if (U.info("iconSquare intersect", t, E), !t.label)
      return K.rect(t, E);
    const F = t.x ?? 0, O = t.y ?? 0, $ = t.height ?? 0;
    let q = [];
    return d ? q = [
      { x: F - c.width / 2, y: O - $ / 2 },
      { x: F + c.width / 2, y: O - $ / 2 },
      { x: F + c.width / 2, y: O - $ / 2 + c.height + T },
      { x: F + m / 2, y: O - $ / 2 + c.height + T },
      { x: F + m / 2, y: O + $ / 2 },
      { x: F - m / 2, y: O + $ / 2 },
      { x: F - m / 2, y: O - $ / 2 + c.height + T },
      { x: F - c.width / 2, y: O - $ / 2 + c.height + T }
    ] : q = [
      { x: F - m / 2, y: O - $ / 2 },
      { x: F + m / 2, y: O - $ / 2 },
      { x: F + m / 2, y: O - $ / 2 + g },
      { x: F + c.width / 2, y: O - $ / 2 + g },
      { x: F + c.width / 2 / 2, y: O + $ / 2 },
      { x: F - c.width / 2, y: O + $ / 2 },
      { x: F - c.width / 2, y: O - $ / 2 + g },
      { x: F - m / 2, y: O - $ / 2 + g }
    ], K.polygon(t, q, E);
  }, h;
}
p(Zg, "iconRounded");
async function Kg(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = et(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: h, bbox: c, halfPadding: u, label: f } = await dt(
    e,
    t,
    "icon-shape default"
  ), d = t.pos === "t", g = n + u * 2, m = n + u * 2, { nodeBorder: y, mainBkg: C } = r, { stylesMap: b } = Fi(t), k = -m / 2, S = -g / 2, T = t.label ? 8 : 0, _ = J.svg(h), v = Q(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const L = b.get("fill");
  v.stroke = L ?? C;
  const z = _.path(mr(k, S, m, g, 0.1), v), N = Math.max(m, c.width), M = g + c.height + T, X = _.rectangle(-N / 2, -M / 2, N, M, {
    ...v,
    fill: "transparent",
    stroke: "none"
  }), W = h.insert(() => z, ":first-child"), D = h.insert(() => X);
  if (t.icon) {
    const E = h.append("g");
    E.html(
      `<g>${await _s(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const F = E.node().getBBox(), O = F.width, $ = F.height, q = F.x, j = F.y;
    E.attr(
      "transform",
      `translate(${-O / 2 - q},${d ? c.height / 2 + T / 2 - $ / 2 - j : -c.height / 2 - T / 2 - $ / 2 - j})`
    ), E.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-c.width / 2 - (c.x - (c.left ?? 0))},${d ? -M / 2 : M / 2 - c.height})`
  ), W.attr(
    "transform",
    `translate(0,${d ? c.height / 2 + T / 2 : -c.height / 2 - T / 2})`
  ), it(t, D), t.intersect = function(E) {
    if (U.info("iconSquare intersect", t, E), !t.label)
      return K.rect(t, E);
    const F = t.x ?? 0, O = t.y ?? 0, $ = t.height ?? 0;
    let q = [];
    return d ? q = [
      { x: F - c.width / 2, y: O - $ / 2 },
      { x: F + c.width / 2, y: O - $ / 2 },
      { x: F + c.width / 2, y: O - $ / 2 + c.height + T },
      { x: F + m / 2, y: O - $ / 2 + c.height + T },
      { x: F + m / 2, y: O + $ / 2 },
      { x: F - m / 2, y: O + $ / 2 },
      { x: F - m / 2, y: O - $ / 2 + c.height + T },
      { x: F - c.width / 2, y: O - $ / 2 + c.height + T }
    ] : q = [
      { x: F - m / 2, y: O - $ / 2 },
      { x: F + m / 2, y: O - $ / 2 },
      { x: F + m / 2, y: O - $ / 2 + g },
      { x: F + c.width / 2, y: O - $ / 2 + g },
      { x: F + c.width / 2 / 2, y: O + $ / 2 },
      { x: F - c.width / 2, y: O + $ / 2 },
      { x: F - c.width / 2, y: O - $ / 2 + g },
      { x: F - m / 2, y: O - $ / 2 + g }
    ], K.polygon(t, q, E);
  }, h;
}
p(Kg, "iconSquare");
async function Qg(e, t, { config: { flowchart: r } }) {
  const i = new Image();
  i.src = (t == null ? void 0 : t.img) ?? "", await i.decode();
  const s = Number(i.naturalWidth.toString().replace("px", "")), o = Number(i.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = s / o;
  const { labelStyles: a } = et(t);
  t.labelStyle = a;
  const n = r == null ? void 0 : r.wrappingWidth;
  t.defaultWidth = r == null ? void 0 : r.wrappingWidth;
  const l = Math.max(
    t.label ? n ?? 0 : 0,
    (t == null ? void 0 : t.assetWidth) ?? s
  ), h = t.constraint === "on" && t != null && t.assetHeight ? t.assetHeight * t.imageAspectRatio : l, c = t.constraint === "on" ? h / t.imageAspectRatio : (t == null ? void 0 : t.assetHeight) ?? o;
  t.width = Math.max(h, n ?? 0);
  const { shapeSvg: u, bbox: f, label: d } = await dt(e, t, "image-shape default"), g = t.pos === "t", m = -h / 2, y = -c / 2, C = t.label ? 8 : 0, b = J.svg(u), k = Q(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const S = b.rectangle(m, y, h, c, k), T = Math.max(h, f.width), _ = c + f.height + C, v = b.rectangle(-T / 2, -_ / 2, T, _, {
    ...k,
    fill: "none",
    stroke: "none"
  }), L = u.insert(() => S, ":first-child"), z = u.insert(() => v);
  if (t.img) {
    const N = u.append("image");
    N.attr("href", t.img), N.attr("width", h), N.attr("height", c), N.attr("preserveAspectRatio", "none"), N.attr(
      "transform",
      `translate(${-h / 2},${g ? _ / 2 - c : -_ / 2})`
    );
  }
  return d.attr(
    "transform",
    `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${g ? -c / 2 - f.height / 2 - C / 2 : c / 2 - f.height / 2 + C / 2})`
  ), L.attr(
    "transform",
    `translate(0,${g ? f.height / 2 + C / 2 : -f.height / 2 - C / 2})`
  ), it(t, z), t.intersect = function(N) {
    if (U.info("iconSquare intersect", t, N), !t.label)
      return K.rect(t, N);
    const M = t.x ?? 0, X = t.y ?? 0, W = t.height ?? 0;
    let D = [];
    return g ? D = [
      { x: M - f.width / 2, y: X - W / 2 },
      { x: M + f.width / 2, y: X - W / 2 },
      { x: M + f.width / 2, y: X - W / 2 + f.height + C },
      { x: M + h / 2, y: X - W / 2 + f.height + C },
      { x: M + h / 2, y: X + W / 2 },
      { x: M - h / 2, y: X + W / 2 },
      { x: M - h / 2, y: X - W / 2 + f.height + C },
      { x: M - f.width / 2, y: X - W / 2 + f.height + C }
    ] : D = [
      { x: M - h / 2, y: X - W / 2 },
      { x: M + h / 2, y: X - W / 2 },
      { x: M + h / 2, y: X - W / 2 + c },
      { x: M + f.width / 2, y: X - W / 2 + c },
      { x: M + f.width / 2 / 2, y: X + W / 2 },
      { x: M - f.width / 2, y: X + W / 2 },
      { x: M - f.width / 2, y: X - W / 2 + c },
      { x: M - h / 2, y: X - W / 2 + c }
    ], K.polygon(t, D, N);
  }, u;
}
p(Qg, "imageSquare");
async function Jg(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = s, a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await dt(e, t, ht(t)), h = Math.max(l.width + (a ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(l.height + (o ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), u = [
    { x: 0, y: 0 },
    { x: h, y: 0 },
    { x: h + 3 * c / 6, y: -c },
    { x: -3 * c / 6, y: -c }
  ];
  let f;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const g = J.svg(n), m = Q(t, {}), y = wt(u), C = g.path(y, m);
    f = n.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), d && f.attr("style", d);
  } else
    f = er(n, h, c, u);
  return i && f.attr("style", i), t.width = h, t.height = c, it(t, f), t.intersect = function(g) {
    return K.polygon(t, u, g);
  }, n;
}
p(Jg, "inv_trapezoid");
async function tm(e, t) {
  const { shapeSvg: r, bbox: i, label: s } = await dt(e, t, "label"), o = r.insert("rect", ":first-child");
  return o.attr("width", 0.1).attr("height", 0.1), r.attr("class", "label edgeLabel"), s.attr(
    "transform",
    `translate(${-(i.width / 2) - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`
  ), it(t, o), t.intersect = function(l) {
    return K.rect(t, l);
  }, r;
}
p(tm, "labelRect");
async function em(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = s, a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await dt(e, t, ht(t)), h = ((t == null ? void 0 : t.height) ?? l.height) + o, c = ((t == null ? void 0 : t.width) ?? l.width) + a, u = [
    { x: 0, y: 0 },
    { x: c + 3 * h / 6, y: 0 },
    { x: c, y: -h },
    { x: -(3 * h) / 6, y: -h }
  ];
  let f;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const g = J.svg(n), m = Q(t, {}), y = wt(u), C = g.path(y, m);
    f = n.insert(() => C, ":first-child").attr("transform", `translate(${-c / 2}, ${h / 2})`), d && f.attr("style", d);
  } else
    f = er(n, c, h, u);
  return i && f.attr("style", i), t.width = c, t.height = h, it(t, f), t.intersect = function(g) {
    return K.polygon(t, u, g);
  }, n;
}
p(em, "lean_left");
async function rm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = s, a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await dt(e, t, ht(t)), h = ((t == null ? void 0 : t.height) ?? l.height) + o, c = ((t == null ? void 0 : t.width) ?? l.width) + a, u = [
    { x: -3 * h / 6, y: 0 },
    { x: c, y: 0 },
    { x: c + 3 * h / 6, y: -h },
    { x: 0, y: -h }
  ];
  let f;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const g = J.svg(n), m = Q(t, {}), y = wt(u), C = g.path(y, m);
    f = n.insert(() => C, ":first-child").attr("transform", `translate(${-c / 2}, ${h / 2})`), d && f.attr("style", d);
  } else
    f = er(n, c, h, u);
  return i && f.attr("style", i), t.width = c, t.height = h, it(t, f), t.intersect = function(g) {
    return K.polygon(t, u, g);
  }, n;
}
p(rm, "lean_right");
function im(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.label = "", t.labelStyle = r;
  const s = e.insert("g").attr("class", ht(t)).attr("id", t.domId ?? t.id), { cssStyles: o } = t, a = Math.max(35, (t == null ? void 0 : t.width) ?? 0), n = Math.max(35, (t == null ? void 0 : t.height) ?? 0), l = 7, h = [
    { x: a, y: 0 },
    { x: 0, y: n + l / 2 },
    { x: a - 2 * l, y: n + l / 2 },
    { x: 0, y: 2 * n },
    { x: a, y: n - l / 2 },
    { x: 2 * l, y: n - l / 2 }
  ], c = J.svg(s), u = Q(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = wt(h), d = c.path(f, u), g = s.insert(() => d, ":first-child");
  return g.attr("class", "outer-path"), o && t.look !== "handDrawn" && g.selectAll("path").attr("style", o), i && t.look !== "handDrawn" && g.selectAll("path").attr("style", i), g.attr("transform", `translate(-${a / 2},${-n})`), it(t, g), t.intersect = function(m) {
    return U.info("lightningBolt intersect", t, m), K.polygon(t, h, m);
  }, s;
}
p(im, "lightningBolt");
var NT = /* @__PURE__ */ p((e, t, r, i, s, o, a) => [
  `M${e},${t + o}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + o + a}`,
  `a${s},${o} 0,0,0 ${r},0`
].join(" "), "createCylinderPathD"), qT = /* @__PURE__ */ p((e, t, r, i, s, o, a) => [
  `M${e},${t + o}`,
  `M${e + r},${t + o}`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + o + a}`,
  `a${s},${o} 0,0,0 ${r},0`
].join(" "), "createOuterCylinderPathD"), WT = /* @__PURE__ */ p((e, t, r, i, s, o) => [`M${e - r / 2},${-i / 2}`, `a${s},${o} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD"), tu = 10, eu = 10;
async function sm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 24 : s;
  if (t.width || t.height) {
    const C = t.width ?? 0;
    t.width = (t.width ?? 0) - o, t.width < eu && (t.width = eu);
    const k = C / 2 / (2.5 + C / 50);
    t.height = (t.height ?? 0) - a - k * 3, t.height < tu && (t.height = tu);
  }
  const { shapeSvg: n, bbox: l, label: h } = await dt(e, t, ht(t)), c = (t != null && t.width ? t == null ? void 0 : t.width : l.width) + o * 2, u = c / 2, f = u / (2.5 + c / 50), d = (t != null && t.height ? t == null ? void 0 : t.height : l.height) + f + a * 2, g = d * 0.1;
  let m;
  const { cssStyles: y } = t;
  if (t.look === "handDrawn") {
    const C = J.svg(n), b = qT(0, 0, c, d, u, f, g), k = WT(0, f, c, d, u, f), S = Q(t, {}), T = C.path(b, S), _ = C.path(k, S);
    n.insert(() => _, ":first-child").attr("class", "line"), m = n.insert(() => T, ":first-child"), m.attr("class", "basic label-container"), y && m.attr("style", y);
  } else {
    const C = NT(0, 0, c, d, u, f, g);
    m = n.insert("path", ":first-child").attr("d", C).attr("class", "basic label-container outer-path").attr("style", Ut(y)).attr("style", i);
  }
  return m.attr("label-offset-y", f), m.attr("transform", `translate(${-c / 2}, ${-(d / 2 + f)})`), it(t, m), h.attr(
    "transform",
    `translate(${-(l.width / 2) - (l.x - (l.left ?? 0))}, ${-(l.height / 2) + f - (l.y - (l.top ?? 0))})`
  ), t.intersect = function(C) {
    const b = K.rect(t, C), k = b.x - (t.x ?? 0);
    if (u != 0 && (Math.abs(k) < (t.width ?? 0) / 2 || Math.abs(k) == (t.width ?? 0) / 2 && Math.abs(b.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - f)) {
      let S = f * f * (1 - k * k / (u * u));
      S > 0 && (S = Math.sqrt(S)), S = f - S, C.y - (t.y ?? 0) > 0 && (S = -S), b.y += S;
    }
    return b;
  }, n;
}
p(sm, "linedCylinder");
async function om(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  if (t.width || t.height) {
    const S = t.width;
    t.width = (S ?? 0) * 10 / 11 - o * 2, t.width < 10 && (t.width = 10), t.height = ((t == null ? void 0 : t.height) ?? 0) - a * 2, t.height < 10 && (t.height = 10);
  }
  const { shapeSvg: n, bbox: l, label: h } = await dt(e, t, ht(t)), c = (t != null && t.width ? t == null ? void 0 : t.width : l.width) + (o ?? 0) * 2, u = (t != null && t.height ? t == null ? void 0 : t.height : l.height) + (a ?? 0) * 2, f = t.look === "neo" ? u / 4 : u / 8, d = u + f, { cssStyles: g } = t, m = J.svg(n), y = Q(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = [
    { x: -c / 2 - c / 2 * 0.1, y: -d / 2 },
    { x: -c / 2 - c / 2 * 0.1, y: d / 2 },
    ...gr(
      -c / 2 - c / 2 * 0.1,
      d / 2,
      c / 2 + c / 2 * 0.1,
      d / 2,
      f,
      0.8
    ),
    { x: c / 2 + c / 2 * 0.1, y: -d / 2 },
    { x: -c / 2 - c / 2 * 0.1, y: -d / 2 },
    { x: -c / 2, y: -d / 2 },
    { x: -c / 2, y: d / 2 * 1.1 },
    { x: -c / 2, y: -d / 2 }
  ], b = m.polygon(
    C.map((S) => [S.x, S.y]),
    y
  ), k = n.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container outer-path"), g && t.look !== "handDrawn" && k.selectAll("path").attr("style", g), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), k.attr("transform", `translate(0,${-f / 2})`), h.attr(
    "transform",
    `translate(${-c / 2 + (t.padding ?? 0) + c / 2 * 0.1 / 2 - (l.x - (l.left ?? 0))},${-u / 2 + (t.padding ?? 0) - f / 2 - (l.y - (l.top ?? 0))})`
  ), it(t, k), t.intersect = function(S) {
    return K.polygon(t, C, S);
  }, n;
}
p(om, "linedWaveEdgedRect");
async function am(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = t.look === "neo" ? 10 : 5;
  (t.width || t.height) && (t.width = Math.max(((t == null ? void 0 : t.width) ?? 0) - o * 2 - 2 * n, 10), t.height = Math.max(((t == null ? void 0 : t.height) ?? 0) - a * 2 - 2 * n, 10));
  const { shapeSvg: l, bbox: h, label: c } = await dt(e, t, ht(t)), u = (t != null && t.width ? t == null ? void 0 : t.width : h.width) + o * 2 + 2 * n, f = (t != null && t.height ? t == null ? void 0 : t.height : h.height) + a * 2 + 2 * n, d = u - 2 * n, g = f - 2 * n, m = -d / 2, y = -g / 2, { cssStyles: C } = t, b = J.svg(l), k = Q(t, {}), S = [
    { x: m - n, y: y + n },
    { x: m - n, y: y + g + n },
    { x: m + d - n, y: y + g + n },
    { x: m + d - n, y: y + g },
    { x: m + d, y: y + g },
    { x: m + d, y: y + g - n },
    { x: m + d + n, y: y + g - n },
    { x: m + d + n, y: y - n },
    { x: m + n, y: y - n },
    { x: m + n, y },
    { x: m, y },
    { x: m, y: y + n }
  ], T = [
    { x: m, y: y + n },
    { x: m + d - n, y: y + n },
    { x: m + d - n, y: y + g },
    { x: m + d, y: y + g },
    { x: m + d, y },
    { x: m, y }
  ];
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const _ = wt(S);
  let v = b.path(_, k);
  const L = wt(T);
  let z = b.path(L, k);
  t.look !== "handDrawn" && (v = Gn(v), z = Gn(z));
  const N = l.insert("g", ":first-child");
  return N.insert(() => v), N.insert(() => z), N.attr("class", "basic label-container outer-path"), C && t.look !== "handDrawn" && N.selectAll("path").attr("style", C), i && t.look !== "handDrawn" && N.selectAll("path").attr("style", i), c.attr(
    "transform",
    `translate(${-(h.width / 2) - n - (h.x - (h.left ?? 0))}, ${-(h.height / 2) + n - (h.y - (h.top ?? 0))})`
  ), it(t, N), t.intersect = function(M) {
    return K.polygon(t, S, M);
  }, l;
}
p(am, "multiRect");
async function nm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await dt(e, t, ht(t)), n = t.padding ?? 0, l = t.look === "neo" ? 16 : n, h = t.look === "neo" ? 12 : n;
  let c = !0;
  (t.width || t.height) && (c = !1, t.width = ((t == null ? void 0 : t.width) ?? 0) - l * 2, t.height = ((t == null ? void 0 : t.height) ?? 0) - h * 3);
  const u = Math.max(o.width, (t == null ? void 0 : t.width) ?? 0) + l * 2, f = Math.max(o.height, (t == null ? void 0 : t.height) ?? 0) + h * 3, d = t.look === "neo" ? f / 4 : f / 8, g = f + (c ? d / 2 : -d / 2), m = -u / 2, y = -g / 2, C = 10, { cssStyles: b } = t, k = gr(
    m - C,
    y + g + C,
    m + u - C,
    y + g + C,
    d,
    0.8
  ), S = k == null ? void 0 : k[k.length - 1], T = [
    { x: m - C, y: y + C },
    { x: m - C, y: y + g + C },
    ...k,
    { x: m + u - C, y: S.y - C },
    { x: m + u, y: S.y - C },
    { x: m + u, y: S.y - 2 * C },
    { x: m + u + C, y: S.y - 2 * C },
    { x: m + u + C, y: y - C },
    { x: m + C, y: y - C },
    { x: m + C, y },
    { x: m, y },
    { x: m, y: y + C }
  ], _ = [
    { x: m, y: y + C },
    { x: m + u - C, y: y + C },
    { x: m + u - C, y: S.y - C },
    { x: m + u, y: S.y - C },
    { x: m + u, y },
    { x: m, y }
  ], v = J.svg(s), L = Q(t, {});
  t.look !== "handDrawn" && (L.roughness = 0, L.fillStyle = "solid");
  const z = wt(T), N = v.path(z, L), M = wt(_), X = v.path(M, L), W = s.insert(() => N, ":first-child");
  return W.insert(() => X), W.attr("class", "basic label-container outer-path"), b && t.look !== "handDrawn" && W.selectAll("path").attr("style", b), i && t.look !== "handDrawn" && W.selectAll("path").attr("style", i), W.attr("transform", `translate(0,${-d / 2})`), a.attr(
    "transform",
    `translate(${-(o.width / 2) - C - (o.x - (o.left ?? 0))}, ${-(o.height / 2) + C - d / 2 - (o.y - (o.top ?? 0))})`
  ), it(t, W), t.intersect = function(D) {
    return K.polygon(t, T, D);
  }, s;
}
p(nm, "multiWaveEdgedRectangle");
async function lm(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = et(t);
  t.labelStyle = i, t.useHtmlLabels || se(Ot()) || (t.centerLabel = !0);
  const { shapeSvg: a, bbox: n, label: l } = await dt(e, t, ht(t)), h = Math.max(n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), u = -h / 2, f = -c / 2, { cssStyles: d } = t, g = J.svg(a), m = Q(t, {
    fill: r.noteBkgColor,
    stroke: r.noteBorderColor
  });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = g.rectangle(u, f, h, c, m), C = a.insert(() => y, ":first-child");
  return C.attr("class", "basic label-container outer-path"), l.attr("class", "label noteLabel"), d && t.look !== "handDrawn" && C.selectAll("path").attr("style", d), s && t.look !== "handDrawn" && C.selectAll("path").attr("style", s), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), it(t, C), t.intersect = function(b) {
    return K.rect(t, b);
  }, a;
}
p(lm, "note");
var zT = /* @__PURE__ */ p((e, t, r) => [
  `M${e + r / 2},${t}`,
  `L${e + r},${t - r / 2}`,
  `L${e + r / 2},${t - r}`,
  `L${e},${t - r / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function hm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o } = await dt(e, t, ht(t)), a = o.width + (t.padding ?? 0), n = o.height + (t.padding ?? 0), l = a + n, h = 0.5, c = [
    { x: l / 2, y: 0 },
    { x: l, y: -l / 2 },
    { x: l / 2, y: -l },
    { x: 0, y: -l / 2 }
  ];
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const d = J.svg(s), g = Q(t, {}), m = zT(0, 0, l), y = d.path(m, g);
    u = s.insert(() => y, ":first-child").attr("transform", `translate(${-l / 2 + h}, ${l / 2})`), f && u.attr("style", f);
  } else
    u = er(s, l, l, c), u.attr("transform", `translate(${-l / 2 + h}, ${l / 2})`);
  return i && u.attr("style", i), it(t, u), t.calcIntersect = function(d, g) {
    const m = d.width, y = [
      { x: m / 2, y: 0 },
      { x: m, y: -m / 2 },
      { x: m / 2, y: -m },
      { x: 0, y: -m / 2 }
    ], C = K.polygon(d, y, g);
    return { x: C.x - 0.5, y: C.y - 0.5 };
  }, t.intersect = function(d) {
    return this.calcIntersect(t, d);
  }, s;
}
p(hm, "question");
async function cm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 21 : s ?? 0, a = t.look === "neo" ? 12 : s ?? 0, { shapeSvg: n, bbox: l, label: h } = await dt(e, t, ht(t)), c = ((t == null ? void 0 : t.width) ?? l.width) + (t.look === "neo" ? o * 2 : o), u = ((t == null ? void 0 : t.height) ?? l.height) + (t.look === "neo" ? a * 2 : a), f = -c / 2, d = -u / 2, g = d / 2, m = [
    { x: f + g, y: d },
    { x: f, y: 0 },
    { x: f + g, y: -d },
    { x: -f, y: -d },
    { x: -f, y: d }
  ], { cssStyles: y } = t, C = J.svg(n), b = Q(t, {});
  t.look !== "handDrawn" && (b.roughness = 0, b.fillStyle = "solid");
  const k = wt(m), S = C.path(k, b), T = n.insert(() => S, ":first-child");
  return T.attr("class", "basic label-container outer-path"), y && t.look !== "handDrawn" && T.selectAll("path").attr("style", y), i && t.look !== "handDrawn" && T.selectAll("path").attr("style", i), T.attr("transform", `translate(${-g / 2},0)`), h.attr(
    "transform",
    `translate(${-g / 2 - l.width / 2 - (l.x - (l.left ?? 0))}, ${-(l.height / 2) - (l.y - (l.top ?? 0))})`
  ), it(t, T), t.intersect = function(_) {
    return K.polygon(t, m, _);
  }, n;
}
p(cm, "rect_left_inv_arrow");
async function um(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  let s;
  t.cssClasses ? s = "node " + t.cssClasses : s = "node default";
  const o = e.insert("g").attr("class", s).attr("id", t.domId || t.id), a = o.insert("g"), n = o.insert("g").attr("class", "label").attr("style", i), l = t.description, h = t.label, c = await lr(n, h, t.labelStyle, !0, !0);
  let u = { width: 0, height: 0 };
  if (se(Tt())) {
    const L = c.children[0], z = Ct(c);
    u = L.getBoundingClientRect(), z.attr("width", u.width), z.attr("height", u.height);
  }
  U.info("Text 2", l);
  const f = l || [], d = c.getBBox(), g = await lr(
    n,
    Array.isArray(f) ? f.join("<br/>") : f,
    t.labelStyle,
    !0,
    !0
  ), m = g.children[0], y = Ct(g);
  u = m.getBoundingClientRect(), y.attr("width", u.width), y.attr("height", u.height);
  const C = (t.padding || 0) / 2;
  Ct(g).attr(
    "transform",
    "translate( " + (u.width > d.width ? 0 : (d.width - u.width) / 2) + ", " + (d.height + C + 5) + ")"
  ), Ct(c).attr(
    "transform",
    "translate( " + (u.width < d.width ? 0 : -(d.width - u.width) / 2) + ", 0)"
  ), u = n.node().getBBox(), n.attr(
    "transform",
    "translate(" + -u.width / 2 + ", " + (-u.height / 2 - C + 3) + ")"
  );
  const b = u.width + (t.padding || 0), k = u.height + (t.padding || 0), S = -u.width / 2 - C, T = -u.height / 2 - C;
  let _, v;
  if (t.look === "handDrawn") {
    const L = J.svg(o), z = Q(t, {}), N = L.path(
      mr(S, T, b, k, t.rx || 0),
      z
    ), M = L.line(
      -u.width / 2 - C,
      -u.height / 2 - C + d.height + C,
      u.width / 2 + C,
      -u.height / 2 - C + d.height + C,
      z
    );
    v = o.insert(() => (U.debug("Rough node insert CXC", N), M), ":first-child"), _ = o.insert(() => (U.debug("Rough node insert CXC", N), N), ":first-child");
  } else
    _ = a.insert("rect", ":first-child"), v = a.insert("line"), _.attr("class", "outer title-state").attr("style", i).attr("x", -u.width / 2 - C).attr("y", -u.height / 2 - C).attr("width", u.width + (t.padding || 0)).attr("height", u.height + (t.padding || 0)), v.attr("class", "divider").attr("x1", -u.width / 2 - C).attr("x2", u.width / 2 + C).attr("y1", -u.height / 2 - C + d.height + C).attr("y2", -u.height / 2 - C + d.height + C);
  return it(t, _), t.intersect = function(L) {
    return K.rect(t, L);
  }, o;
}
p(um, "rectWithTitle");
async function dm(e, t, { config: { themeVariables: r } }) {
  const i = (r == null ? void 0 : r.radius) ?? 5, s = {
    rx: i,
    ry: i,
    labelPaddingX: ((t == null ? void 0 : t.padding) ?? 0) * 1,
    labelPaddingY: ((t == null ? void 0 : t.padding) ?? 0) * 1
  };
  return Ai(e, t, s);
}
p(dm, "roundedRect");
var wr = 8;
async function fm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 12 : t.padding ?? 0, { shapeSvg: a, bbox: n, label: l } = await dt(e, t, ht(t)), h = ((t == null ? void 0 : t.width) ?? n.width) + s * 2 + (t.look === "neo" ? wr : wr * 2), c = ((t == null ? void 0 : t.height) ?? n.height) + o * 2, u = h - wr, f = c, d = wr - h / 2, g = -c / 2, { cssStyles: m } = t, y = J.svg(a), C = Q(t, {});
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const b = [
    { x: d, y: g },
    { x: d + u, y: g },
    { x: d + u, y: g + f },
    { x: d - wr, y: g + f },
    { x: d - wr, y: g },
    { x: d, y: g },
    { x: d, y: g + f }
  ], k = y.polygon(
    b.map((T) => [T.x, T.y]),
    C
  ), S = a.insert(() => k, ":first-child");
  return S.attr("class", "basic label-container outer-path").attr("style", Ut(m)), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), m && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${wr / 2 - n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), it(t, S), t.intersect = function(T) {
    return K.rect(t, T);
  }, a;
}
p(fm, "shadedProcess");
async function pm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  (t.width || t.height) && (t.width = Math.max(((t == null ? void 0 : t.width) ?? 0) - o * 2, 10), t.height = Math.max(((t == null ? void 0 : t.height) ?? 0) / 1.5 - a * 2, 10));
  const { shapeSvg: n, bbox: l, label: h } = await dt(e, t, ht(t)), c = (t != null && t.width ? t == null ? void 0 : t.width : l.width) + o * 2, u = ((t != null && t.height ? t == null ? void 0 : t.height : l.height) + a * 2) * 1.5, f = c, d = u / 1.5, g = -f / 2, m = -d / 2, { cssStyles: y } = t, C = J.svg(n), b = Q(t, {});
  t.look !== "handDrawn" && (b.roughness = 0, b.fillStyle = "solid");
  const k = [
    { x: g, y: m },
    { x: g, y: m + d },
    { x: g + f, y: m + d },
    { x: g + f, y: m - d / 2 }
  ], S = wt(k), T = C.path(S, b), _ = n.insert(() => T, ":first-child");
  return _.attr("class", "basic label-container  outer-path"), y && t.look !== "handDrawn" && _.selectChildren("path").attr("style", y), i && t.look !== "handDrawn" && _.selectChildren("path").attr("style", i), _.attr("transform", `translate(0, ${d / 4})`), h.attr(
    "transform",
    `translate(${-f / 2 + (t.padding ?? 0) - (l.x - (l.left ?? 0))}, ${-d / 4 + (t.padding ?? 0) - (l.y - (l.top ?? 0))})`
  ), it(t, _), t.intersect = function(v) {
    return K.polygon(t, k, v);
  }, n;
}
p(pm, "slopedRect");
async function gm(e, t) {
  const r = t.padding ?? 0, i = t.look === "neo" ? 16 : r * 2, s = t.look === "neo" ? 12 : r, o = {
    rx: 0,
    ry: 0,
    labelPaddingX: t.labelPaddingX ?? i,
    labelPaddingY: s
  };
  return Ai(e, t, o);
}
p(gm, "squareRect");
async function mm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 20 : s, a = t.look === "neo" ? 12 : s, { shapeSvg: n, bbox: l } = await dt(e, t, ht(t)), h = l.height + (t.look === "neo" ? a * 2 : a), c = l.width + h / 4 + (t.look === "neo" ? o * 2 : o), u = h / 2, { cssStyles: f } = t, d = J.svg(n), g = Q(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: -c / 2 + u, y: -h / 2 },
    { x: c / 2 - u, y: -h / 2 },
    ...ms(-c / 2 + u, 0, u, 50, 90, 270),
    { x: c / 2 - u, y: h / 2 },
    ...ms(c / 2 - u, 0, u, 50, 270, 450)
  ], y = wt(m), C = d.path(y, g), b = n.insert(() => C, ":first-child");
  return b.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && b.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && b.selectChildren("path").attr("style", i), it(t, b), t.intersect = function(k) {
    return K.polygon(t, m, k);
  }, n;
}
p(mm, "stadium");
async function ym(e, t) {
  const r = {
    rx: t.look === "neo" ? 3 : 5,
    ry: t.look === "neo" ? 3 : 5
  };
  return Ai(e, t, r);
}
p(ym, "state");
function Cm(e, t, { config: { themeVariables: r } }) {
  var b, k;
  const { labelStyles: i, nodeStyles: s } = et(t);
  t.labelStyle = i;
  const { cssStyles: o } = t, { lineColor: a, stateBorder: n, nodeBorder: l, nodeShadow: h } = r;
  (t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width || (t.width = 14), t.height || (t.height = 14);
  const c = e.insert("g").attr("class", "node default").attr("id", t.domId ?? t.id), u = J.svg(c), f = Q(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const d = u.circle(0, 0, t.width, {
    ...f,
    stroke: a,
    strokeWidth: 2
  }), g = n ?? l, m = (t.width ?? 0) * 5 / 14, y = u.circle(0, 0, m, {
    ...f,
    fill: g,
    stroke: g,
    strokeWidth: 2,
    fillStyle: "solid"
  }), C = c.insert(() => d, ":first-child");
  if (C.insert(() => y), t.look !== "handDrawn" && C.attr("class", "outer-path"), o && C.selectAll("path").attr("style", o), s && C.selectAll("path").attr("style", s), t.width < 25 && h && t.look !== "handDrawn") {
    const S = ((k = (b = e.node()) == null ? void 0 : b.ownerSVGElement) == null ? void 0 : k.id) ?? "", T = S ? `${S}-drop-shadow-small` : "drop-shadow-small";
    C.attr("style", `filter:url(#${T})`);
  }
  return it(t, C), t.intersect = function(S) {
    return K.circle(t, (t.width ?? 0) / 2, S);
  }, c;
}
p(Cm, "stateEnd");
function xm(e, t, { config: { themeVariables: r } }) {
  var n, l;
  const { lineColor: i, nodeShadow: s } = r;
  (t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width || (t.width = 14), t.height || (t.height = 14);
  const o = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let a;
  if (t.look === "handDrawn") {
    const c = J.svg(o).circle(0, 0, t.width, tw(i));
    a = o.insert(() => c), a.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
  } else
    a = o.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
  if (t.width < 25 && s && t.look !== "handDrawn") {
    const h = ((l = (n = e.node()) == null ? void 0 : n.ownerSVGElement) == null ? void 0 : l.id) ?? "", c = h ? `${h}-drop-shadow-small` : "drop-shadow-small";
    a.attr("style", `filter:url(#${c})`);
  }
  return it(t, a), t.intersect = function(h) {
    return K.circle(t, (t.width ?? 7) / 2, h);
  }, o;
}
p(xm, "stateStart");
var Zr = 8;
async function bm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = (t == null ? void 0 : t.padding) ?? 8, o = t.look === "neo" ? 28 : s, a = t.look === "neo" ? 12 : s, { shapeSvg: n, bbox: l } = await dt(e, t, ht(t)), h = ((t == null ? void 0 : t.width) ?? l.width) + 2 * Zr + o, c = ((t == null ? void 0 : t.height) ?? l.height) + a, u = h - 2 * Zr, f = c, d = -h / 2, g = -c / 2, m = [
    { x: 0, y: 0 },
    { x: u, y: 0 },
    { x: u, y: -f },
    { x: 0, y: -f },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: u + 8, y: 0 },
    { x: u + 8, y: -f },
    { x: -8, y: -f },
    { x: -8, y: 0 }
  ];
  if (t.look === "handDrawn") {
    const y = J.svg(n), C = Q(t, {}), b = y.rectangle(d, g, u + 16, f, C), k = y.line(d + Zr, g, d + Zr, g + f, C), S = y.line(d + Zr + u, g, d + Zr + u, g + f, C);
    n.insert(() => k, ":first-child"), n.insert(() => S, ":first-child");
    const T = n.insert(() => b, ":first-child"), { cssStyles: _ } = t;
    T.attr("class", "basic label-container").attr("style", Ut(_)), it(t, T);
  } else {
    const y = er(n, u, f, m);
    i && y.attr("style", i), it(t, y);
  }
  return t.intersect = function(y) {
    return K.polygon(t, m, y);
  }, n;
}
p(bm, "subroutine");
var Qa = 0.2;
async function km(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  (t.width || t.height) && (t.height = Math.max(((t == null ? void 0 : t.height) ?? 0) - a * 2, 10), t.width = Math.max(
    ((t == null ? void 0 : t.width) ?? 0) - o * 2 - Qa * (t.height + a * 2),
    10
  ));
  const { shapeSvg: n, bbox: l } = await dt(e, t, ht(t)), h = (t != null && t.height ? t == null ? void 0 : t.height : l.height) + a * 2, c = Qa * h, u = Qa * h, d = (t != null && t.width ? t == null ? void 0 : t.width : l.width) + o * 2 + c - c, g = h, m = -d / 2, y = -g / 2, { cssStyles: C } = t, b = J.svg(n), k = Q(t, {}), S = [
    { x: m - c / 2, y },
    { x: m + d + c / 2, y },
    { x: m + d + c / 2, y: y + g },
    { x: m - c / 2, y: y + g }
  ], T = [
    { x: m + d - c / 2, y: y + g },
    { x: m + d + c / 2, y: y + g },
    { x: m + d + c / 2, y: y + g - u }
  ];
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const _ = wt(S), v = b.path(_, k), L = wt(T), z = b.path(L, { ...k, fillStyle: "solid" }), N = n.insert(() => z, ":first-child");
  return N.insert(() => v, ":first-child"), N.attr("class", "basic label-container outer-path"), C && t.look !== "handDrawn" && N.selectAll("path").attr("style", C), i && t.look !== "handDrawn" && N.selectAll("path").attr("style", i), it(t, N), t.intersect = function(M) {
    return K.polygon(t, S, M);
  }, n;
}
p(km, "taggedRect");
async function wm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await dt(e, t, ht(t)), n = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = l / 8, c = 0.2 * n, u = 0.2 * l, f = l + h, { cssStyles: d } = t, g = J.svg(s), m = Q(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -n / 2 - n / 2 * 0.1, y: f / 2 },
    ...gr(
      -n / 2 - n / 2 * 0.1,
      f / 2,
      n / 2 + n / 2 * 0.1,
      f / 2,
      h,
      0.8
    ),
    { x: n / 2 + n / 2 * 0.1, y: -f / 2 },
    { x: -n / 2 - n / 2 * 0.1, y: -f / 2 }
  ], C = -n / 2 + n / 2 * 0.1, b = -f / 2 - u * 0.4, k = [
    { x: C + n - c, y: (b + l) * 1.3 },
    { x: C + n, y: b + l - u },
    { x: C + n, y: (b + l) * 0.9 },
    ...gr(
      C + n,
      (b + l) * 1.25,
      C + n - c,
      (b + l) * 1.3,
      -l * 0.02,
      0.5
    )
  ], S = wt(y), T = g.path(S, m), _ = wt(k), v = g.path(_, {
    ...m,
    fillStyle: "solid"
  }), L = s.insert(() => v, ":first-child");
  return L.insert(() => T, ":first-child"), L.attr("class", "basic label-container outer-path"), d && t.look !== "handDrawn" && L.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && L.selectAll("path").attr("style", i), L.attr("transform", `translate(0,${-h / 2})`), a.attr(
    "transform",
    `translate(${-n / 2 + (t.padding ?? 0) - (o.x - (o.left ?? 0))},${-l / 2 + (t.padding ?? 0) - h / 2 - (o.y - (o.top ?? 0))})`
  ), it(t, L), t.intersect = function(z) {
    return K.polygon(t, y, z);
  }, s;
}
p(wm, "taggedWaveEdgedRectangle");
async function Sm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o } = await dt(e, t, ht(t)), a = Math.max(o.width + (t.padding ?? 0), (t == null ? void 0 : t.width) || 0), n = Math.max(o.height + (t.padding ?? 0), (t == null ? void 0 : t.height) || 0), l = -a / 2, h = -n / 2, c = s.insert("rect", ":first-child");
  return c.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", h).attr("width", a).attr("height", n), it(t, c), t.intersect = function(u) {
    return K.rect(t, u);
  }, s;
}
p(Sm, "text");
var HT = /* @__PURE__ */ p((e, t, r, i, s, o) => `M${e},${t}
    a${s},${o} 0,0,1 0,${-i}
    l${r},0
    a${s},${o} 0,0,1 0,${i}
    M${r},${-i}
    a${s},${o} 0,0,0 0,${i}
    l${-r},0`, "createCylinderPathD"), YT = /* @__PURE__ */ p((e, t, r, i, s, o) => [
  `M${e},${t}`,
  `M${e + r},${t}`,
  `a${s},${o} 0,0,0 0,${-i}`,
  `l${-r},0`,
  `a${s},${o} 0,0,0 0,${i}`,
  `l${r},0`
].join(" "), "createOuterCylinderPathD"), UT = /* @__PURE__ */ p((e, t, r, i, s, o) => [`M${e + r / 2},${-i / 2}`, `a${s},${o} 0,0,0 0,${i}`].join(" "), "createInnerCylinderPathD"), ru = 5, iu = 10;
async function Tm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 12 : s / 2;
  if (t.width || t.height) {
    const m = t.height ?? 0;
    t.height = (t.height ?? 0) - o, t.height < ru && (t.height = ru);
    const C = m / 2 / (2.5 + m / 50);
    t.width = (t.width ?? 0) - o - C * 3, t.width < iu && (t.width = iu);
  }
  const { shapeSvg: a, bbox: n, label: l } = await dt(e, t, ht(t)), h = (t.height ? t.height : n.height) + o, c = h / 2, u = c / (2.5 + h / 50), f = (t.width ? t.width : n.width) + u + o, { cssStyles: d } = t;
  let g;
  if (t.look === "handDrawn") {
    const m = J.svg(a), y = YT(0, 0, f, h, u, c), C = UT(0, 0, f, h, u, c), b = m.path(y, Q(t, {})), k = m.path(C, Q(t, { fill: "none" }));
    g = a.insert(() => k, ":first-child"), g = a.insert(() => b, ":first-child"), g.attr("class", "basic label-container"), d && g.attr("style", d);
  } else {
    const m = HT(0, 0, f, h, u, c);
    g = a.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", Ut(d)).attr("style", i), g.attr("class", "basic label-container outer-path"), d && g.selectAll("path").attr("style", d), i && g.selectAll("path").attr("style", i);
  }
  return g.attr("label-offset-x", u), g.attr("transform", `translate(${-f / 2}, ${h / 2} )`), l.attr(
    "transform",
    `translate(${-(n.width / 2) - u - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), it(t, g), t.intersect = function(m) {
    const y = K.rect(t, m), C = y.y - (t.y ?? 0);
    if (c != 0 && (Math.abs(C) < (t.height ?? 0) / 2 || Math.abs(C) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - u)) {
      let b = u * u * (1 - C * C / (c * c));
      b != 0 && (b = Math.sqrt(Math.abs(b))), b = u - b, m.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
    }
    return y;
  }, a;
}
p(Tm, "tiltedCylinder");
async function _m(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = (t.look === "neo", s), a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await dt(e, t, ht(t)), h = ((t == null ? void 0 : t.height) ?? l.height) + o, c = ((t == null ? void 0 : t.width) ?? l.width) + a, u = [
    { x: -3 * h / 6, y: 0 },
    { x: c + 3 * h / 6, y: 0 },
    { x: c, y: -h },
    { x: 0, y: -h }
  ];
  let f;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const g = J.svg(n), m = Q(t, {}), y = wt(u), C = g.path(y, m);
    f = n.insert(() => C, ":first-child").attr("transform", `translate(${-c / 2}, ${h / 2})`), d && f.attr("style", d);
  } else
    f = er(n, c, h, u);
  return i && f.attr("style", i), t.width = c, t.height = h, it(t, f), t.intersect = function(g) {
    return K.polygon(t, u, g);
  }, n;
}
p(_m, "trapezoid");
async function Bm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = 15, l = 5;
  (t.width || t.height) && (t.height = (t.height ?? 0) - a * 2, t.height < l && (t.height = l), t.width = (t.width ?? 0) - o * 2, t.width < n && (t.width = n));
  const { shapeSvg: h, bbox: c } = await dt(e, t, ht(t)), u = (t != null && t.width ? t == null ? void 0 : t.width : c.width) + o * 2, f = (t != null && t.height ? t == null ? void 0 : t.height : c.height) + a * 2, { cssStyles: d } = t, g = J.svg(h), m = Q(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -u / 2 * 0.8, y: -f / 2 },
    { x: u / 2 * 0.8, y: -f / 2 },
    { x: u / 2, y: -f / 2 * 0.6 },
    { x: u / 2, y: f / 2 },
    { x: -u / 2, y: f / 2 },
    { x: -u / 2, y: -f / 2 * 0.6 }
  ], C = wt(y), b = g.path(C, m), k = h.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container outer-path"), d && t.look !== "handDrawn" && k.selectChildren("path").attr("style", d), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), it(t, k), t.intersect = function(S) {
    return K.polygon(t, y, S);
  }, h;
}
p(Bm, "trapezoidalPentagon");
var su = 10, ou = 10;
async function vm(e, t) {
  var S;
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? s * 2 : s;
  (t.width || t.height) && (t.width = (((t == null ? void 0 : t.width) ?? 0) - o) / 2, t.width < ou && (t.width = ou), t.height = (t == null ? void 0 : t.height) ?? 0, t.height < su && (t.height = su));
  const { shapeSvg: a, bbox: n, label: l } = await dt(e, t, ht(t)), h = We((S = Tt().flowchart) == null ? void 0 : S.htmlLabels), c = (t != null && t.width ? t == null ? void 0 : t.width : n.width) + o, u = t != null && t.height ? t == null ? void 0 : t.height : c + n.height, f = u, d = [
    { x: 0, y: 0 },
    { x: f, y: 0 },
    { x: f / 2, y: -u }
  ], { cssStyles: g } = t, m = J.svg(a), y = Q(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = wt(d), b = m.path(C, y), k = a.insert(() => b, ":first-child").attr("transform", `translate(${-u / 2}, ${u / 2})`).attr("class", "outer-path");
  return g && t.look !== "handDrawn" && k.selectChildren("path").attr("style", g), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), t.width = c, t.height = u, it(t, k), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${u / 2 - (n.height + (t.padding ?? 0) / (h ? 2 : 1) - (n.y - (n.top ?? 0)))})`
  ), t.intersect = function(T) {
    return U.info("Triangle intersect", t, d, T), K.polygon(t, d, T);
  }, a;
}
p(vm, "triangle");
async function Lm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  let n = !0;
  (t.width || t.height) && (n = !1, t.width = ((t == null ? void 0 : t.width) ?? 0) - o * 2, t.width < 10 && (t.width = 10), t.height = ((t == null ? void 0 : t.height) ?? 0) - a * 2, t.height < 10 && (t.height = 10));
  const { shapeSvg: l, bbox: h, label: c } = await dt(e, t, ht(t)), u = (t != null && t.width ? t == null ? void 0 : t.width : h.width) + (o ?? 0) * 2, f = (t != null && t.height ? t == null ? void 0 : t.height : h.height) + (a ?? 0) * 2, d = t.look === "neo" ? f / 4 : f / 8, g = f + (n ? d : -d), { cssStyles: m } = t, C = 14 - u, b = C > 0 ? C / 2 : 0, k = J.svg(l), S = Q(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const T = [
    { x: -u / 2 - b, y: g / 2 },
    ...gr(
      -u / 2 - b,
      g / 2,
      u / 2 + b,
      g / 2,
      d,
      0.8
    ),
    { x: u / 2 + b, y: -g / 2 },
    { x: -u / 2 - b, y: -g / 2 }
  ], _ = wt(T), v = k.path(_, S), L = l.insert(() => v, ":first-child");
  return L.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && L.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && L.selectAll("path").attr("style", i), L.attr("transform", `translate(0,${-d / 2})`), c.attr(
    "transform",
    `translate(${-u / 2 + (t.padding ?? 0) - (h.x - (h.left ?? 0))},${-f / 2 + (t.padding ?? 0) - d - (h.y - (h.top ?? 0))})`
  ), it(t, L), t.intersect = function(z) {
    return K.polygon(t, T, z);
  }, l;
}
p(Lm, "waveEdgedRectangle");
async function Fm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 20 : s;
  if (t.width || t.height) {
    t.width = (t == null ? void 0 : t.width) ?? 0, t.width < 20 && (t.width = 20), t.height = (t == null ? void 0 : t.height) ?? 0, t.height < 10 && (t.height = 10);
    const S = Math.min(t.height * 0.2, t.height / 4);
    t.height = Math.ceil(t.height - a - S * (20 / 9)), t.width = t.width - o * 2;
  }
  const { shapeSvg: n, bbox: l } = await dt(e, t, ht(t)), h = (t != null && t.width ? t == null ? void 0 : t.width : l.width) + o * 2, c = (t != null && t.height ? t == null ? void 0 : t.height : l.height) + a, u = c / 8, f = c + u * 2, { cssStyles: d } = t, g = J.svg(n), m = Q(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -h / 2, y: f / 2 },
    ...gr(-h / 2, f / 2, h / 2, f / 2, u, 1),
    { x: h / 2, y: -f / 2 },
    ...gr(h / 2, -f / 2, -h / 2, -f / 2, u, -1)
  ], C = wt(y), b = g.path(C, m), k = n.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container"), d && t.look !== "handDrawn" && k.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), it(t, k), t.intersect = function(S) {
    return K.polygon(t, y, S);
  }, n;
}
p(Fm, "waveRectangle");
var Dt = 10;
async function Am(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 12 : t.padding ?? 0;
  (t.width || t.height) && (t.width = Math.max(((t == null ? void 0 : t.width) ?? 0) - s * 2 - Dt, 10), t.height = Math.max(((t == null ? void 0 : t.height) ?? 0) - o * 2 - Dt, 10));
  const { shapeSvg: a, bbox: n, label: l } = await dt(e, t, ht(t)), h = (t != null && t.width ? t == null ? void 0 : t.width : n.width) + s * 2 + Dt, c = (t != null && t.height ? t == null ? void 0 : t.height : n.height) + o * 2 + Dt, u = h - Dt, f = c - Dt, d = -u / 2, g = -f / 2, { cssStyles: m } = t, y = J.svg(a), C = Q(t, {}), b = [
    { x: d - Dt, y: g - Dt },
    { x: d - Dt, y: g + f },
    { x: d + u, y: g + f },
    { x: d + u, y: g - Dt }
  ], k = `M${d - Dt},${g - Dt} L${d + u},${g - Dt} L${d + u},${g + f} L${d - Dt},${g + f} L${d - Dt},${g - Dt}
                M${d - Dt},${g} L${d + u},${g}
                M${d},${g - Dt} L${d},${g + f}`;
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const S = y.path(k, C), T = a.insert(() => S, ":first-child");
  return T.attr("transform", `translate(${Dt / 2}, ${Dt / 2})`), T.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && T.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && T.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${-(n.width / 2) + Dt / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + Dt / 2 - (n.y - (n.top ?? 0))})`
  ), it(t, T), t.intersect = function(_) {
    return K.polygon(t, b, _);
  }, a;
}
p(Am, "windowPane");
var au = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), jT = /* @__PURE__ */ new Set(["redux", "redux-dark", "redux-color", "redux-dark-color"]);
async function th(e, t) {
  var rt, xt, vt, Lt;
  const r = t;
  r.alias && (t.label = r.alias);
  const { theme: i, themeVariables: s } = Ot(), { rowEven: o, rowOdd: a, nodeBorder: n, borderColorArray: l } = s;
  if (t.look === "handDrawn") {
    const { themeVariables: V } = Ot(), { background: st } = V, yt = {
      ...t,
      id: t.id + "-background",
      domId: (t.domId || t.id) + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${st}`]
    };
    await th(e, yt);
  }
  const h = Ot();
  t.useHtmlLabels = h.htmlLabels;
  let c = ((rt = h.er) == null ? void 0 : rt.diagramPadding) ?? 10, u = ((xt = h.er) == null ? void 0 : xt.entityPadding) ?? 6;
  const { cssStyles: f } = t, { labelStyles: d, nodeStyles: g } = et(t);
  if (r.attributes.length === 0 && t.label) {
    const V = {
      rx: 0,
      ry: 0,
      labelPaddingX: c,
      labelPaddingY: c * 1.5
    };
    tr(t.label, h) + V.labelPaddingX * 2 < h.er.minEntityWidth && (t.width = h.er.minEntityWidth);
    const st = await Ai(e, t, V);
    if (i != null && au.has(i)) {
      const yt = r.colorIndex ?? 0;
      st.attr("data-color-id", `color-${yt % l.length}`);
    }
    if (!We(h.htmlLabels)) {
      const yt = st.select("text"), kt = (vt = yt.node()) == null ? void 0 : vt.getBBox();
      yt.attr("transform", `translate(${-kt.width / 2}, 0)`);
    }
    return st;
  }
  h.htmlLabels || (c *= 1.25, u *= 1.25);
  let m = ht(t);
  m || (m = "node default");
  const y = e.insert("g").attr("class", m).attr("id", t.domId || t.id), C = await Jr(y, t.label ?? "", h, 0, 0, ["name"], d);
  C.height += u;
  let b = 0;
  const k = [], S = [];
  let T = 0, _ = 0, v = 0, L = 0, z = !0, N = !0;
  for (const V of r.attributes) {
    const st = await Jr(
      y,
      V.type,
      h,
      0,
      b,
      ["attribute-type"],
      d
    );
    T = Math.max(T, st.width + c);
    const yt = await Jr(
      y,
      V.name,
      h,
      0,
      b,
      ["attribute-name"],
      d
    );
    _ = Math.max(_, yt.width + c);
    const kt = await Jr(
      y,
      V.keys.join(),
      h,
      0,
      b,
      ["attribute-keys"],
      d
    );
    v = Math.max(v, kt.width + c);
    const I = await Jr(
      y,
      V.comment,
      h,
      0,
      b,
      ["attribute-comment"],
      d
    );
    L = Math.max(L, I.width + c);
    const ut = Math.max(st.height, yt.height, kt.height, I.height) + u;
    S.push({ yOffset: b, rowHeight: ut }), b += ut;
  }
  let M = 4;
  v <= c && (z = !1, v = 0, M--), L <= c && (N = !1, L = 0, M--);
  const X = y.node().getBBox();
  if (C.width + c * 2 - (T + _ + v + L) > 0) {
    const V = C.width + c * 2 - (T + _ + v + L);
    T += V / M, _ += V / M, v > 0 && (v += V / M), L > 0 && (L += V / M);
  }
  const W = T + _ + v + L, D = J.svg(y), E = Q(t, {});
  t.look !== "handDrawn" && (E.roughness = 0, E.fillStyle = "solid");
  let F = 0;
  S.length > 0 && (F = S.reduce((V, st) => V + ((st == null ? void 0 : st.rowHeight) ?? 0), 0));
  const O = Math.max(X.width + c * 2, (t == null ? void 0 : t.width) || 0, W), $ = Math.max((F ?? 0) + C.height, (t == null ? void 0 : t.height) || 0), q = -O / 2, j = -$ / 2;
  if (y.selectAll("g:not(:first-child)").each((V, st, yt) => {
    const kt = Ct(yt[st]), I = kt.attr("transform");
    let ut = 0, Mt = 0;
    if (I) {
      const Ft = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(I);
      Ft && (ut = parseFloat(Ft[1]), Mt = parseFloat(Ft[2]), kt.attr("class").includes("attribute-name") ? ut += T : kt.attr("class").includes("attribute-keys") ? ut += T + _ : kt.attr("class").includes("attribute-comment") && (ut += T + _ + v));
    }
    kt.attr(
      "transform",
      `translate(${q + c / 2 + ut}, ${Mt + j + C.height + u / 2})`
    );
  }), y.select(".name").attr("transform", "translate(" + -C.width / 2 + ", " + (j + u / 2) + ")"), i != null && au.has(i)) {
    const V = r.colorIndex ?? 0;
    y.attr("data-color-id", `color-${V % l.length}`);
  }
  const Z = D.rectangle(q, j, O, $, E), tt = y.insert(() => Z, ":first-child").attr("class", "outer-path").attr("style", f.join(""));
  k.push(0);
  for (const [V, st] of S.entries()) {
    const kt = (V + 1) % 2 === 0 && st.yOffset !== 0, I = D.rectangle(q, C.height + j + (st == null ? void 0 : st.yOffset), O, st == null ? void 0 : st.rowHeight, {
      ...E,
      fill: kt ? o : a,
      stroke: n
    });
    y.insert(() => I, "g.label").attr("style", f.join("")).attr("class", `row-rect-${kt ? "even" : "odd"}`);
  }
  const lt = 1e-4;
  let at = ti(q, C.height + j, O + q, C.height + j, lt), ct = D.polygon(
    at.map((V) => [V.x, V.y]),
    E
  );
  if (y.insert(() => ct).attr("class", "divider"), at = ti(T + q, C.height + j, T + q, $ + j, lt), ct = D.polygon(
    at.map((V) => [V.x, V.y]),
    E
  ), y.insert(() => ct).attr("class", "divider"), z) {
    const V = T + _ + q;
    at = ti(V, C.height + j, V, $ + j, lt), ct = D.polygon(
      at.map((st) => [st.x, st.y]),
      E
    ), y.insert(() => ct).attr("class", "divider");
  }
  if (N) {
    const V = T + _ + v + q;
    at = ti(V, C.height + j, V, $ + j, lt), ct = D.polygon(
      at.map((st) => [st.x, st.y]),
      E
    ), y.insert(() => ct).attr("class", "divider");
  }
  for (const V of k) {
    const st = C.height + j + V;
    at = ti(q, st, O + q, st, lt), ct = D.polygon(
      at.map((yt) => [yt.x, yt.y]),
      E
    ), y.insert(() => ct).attr("class", "divider");
  }
  if (it(t, tt), g && t.look !== "handDrawn")
    if (i != null && jT.has(i))
      y.selectAll("path").attr("style", g);
    else {
      const V = g.split(";"), st = (Lt = V == null ? void 0 : V.filter((yt) => yt.includes("stroke"))) == null ? void 0 : Lt.map((yt) => `${yt}`).join("; ");
      y.selectAll("path").attr("style", st ?? ""), y.selectAll(".row-rect-even path").attr("style", g);
    }
  return t.intersect = function(V) {
    return K.rect(t, V);
  }, y;
}
p(th, "erBox");
async function Jr(e, t, r, i = 0, s = 0, o = [], a = "") {
  const n = e.insert("g").attr("class", `label ${o.join(" ")}`).attr("transform", `translate(${i}, ${s})`).attr("style", a);
  t !== Kh(t) && (t = Kh(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  const l = n.node().appendChild(
    await He(
      n,
      t,
      {
        width: tr(t, r) + 100,
        style: a,
        useHtmlLabels: r.htmlLabels
      },
      r
    )
  );
  if (t.includes("&lt;") || t.includes("&gt;")) {
    let c = l.children[0];
    for (c.textContent = c.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); c.childNodes[0]; )
      c = c.childNodes[0], c.textContent = c.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  }
  let h = l.getBBox();
  if (We(r.htmlLabels)) {
    const c = l.children[0];
    c.style.textAlign = "start";
    const u = Ct(l);
    h = c.getBoundingClientRect(), u.attr("width", h.width), u.attr("height", h.height);
  }
  return h;
}
p(Jr, "addText");
function ti(e, t, r, i, s) {
  return e === r ? [
    { x: e - s / 2, y: t },
    { x: e + s / 2, y: t },
    { x: r + s / 2, y: i },
    { x: r - s / 2, y: i }
  ] : [
    { x: e, y: t - s / 2 },
    { x: e, y: t + s / 2 },
    { x: r, y: i + s / 2 },
    { x: r, y: i - s / 2 }
  ];
}
p(ti, "lineToPolygon");
async function Mm(e, t, r, i, s = r.class.padding ?? 12) {
  const o = i ? 0 : 3, a = e.insert("g").attr("class", ht(t)).attr("id", t.domId || t.id);
  let n = null, l = null, h = null, c = null, u = 0, f = 0, d = 0;
  if (n = a.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    const b = t.annotations[0];
    await Qi(n, { text: `«${b}»` }, 0), u = n.node().getBBox().height;
  }
  l = a.insert("g").attr("class", "label-group text"), await Qi(l, t, 0, ["font-weight: bolder"]);
  const g = l.node().getBBox();
  f = g.height, h = a.insert("g").attr("class", "members-group text");
  let m = 0;
  for (const b of t.members) {
    const k = await Qi(h, b, m, [b.parseClassifier()]);
    m += k + o;
  }
  d = h.node().getBBox().height, d <= 0 && (d = s / 2), c = a.insert("g").attr("class", "methods-group text");
  let y = 0;
  for (const b of t.methods) {
    const k = await Qi(c, b, y, [b.parseClassifier()]);
    y += k + o;
  }
  let C = a.node().getBBox();
  if (n !== null) {
    const b = n.node().getBBox();
    n.attr("transform", `translate(${-b.width / 2})`);
  }
  return l.attr("transform", `translate(${-g.width / 2}, ${u})`), C = a.node().getBBox(), h.attr(
    "transform",
    `translate(0, ${u + f + s * 2})`
  ), C = a.node().getBBox(), c.attr(
    "transform",
    `translate(0, ${u + f + (d ? d + s * 4 : s * 2)})`
  ), C = a.node().getBBox(), { shapeSvg: a, bbox: C };
}
p(Mm, "textHelper");
async function Qi(e, t, r, i = []) {
  const s = e.insert("g").attr("class", "label").attr("style", i.join("; ")), o = Ot();
  let a = "useHtmlLabels" in t ? t.useHtmlLabels : We(o.htmlLabels) ?? !0, n = "";
  "text" in t ? n = t.text : n = t.label, !a && n.startsWith("\\") && (n = n.substring(1)), ns(n) && (a = !0);
  const l = await He(
    s,
    hl(Ir(n)),
    {
      width: tr(n, o) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: a
    },
    o
  );
  let h, c = 1;
  if (a) {
    const u = l.children[0], f = Ct(l);
    c = u.innerHTML.split("<br>").length, u.innerHTML.includes("</math>") && (c += u.innerHTML.split("<mrow>").length - 1);
    const d = u.getElementsByTagName("img");
    if (d) {
      const g = n.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...d].map(
          (m) => new Promise((y) => {
            function C() {
              var b;
              if (m.style.display = "flex", m.style.flexDirection = "column", g) {
                const k = ((b = o.fontSize) == null ? void 0 : b.toString()) ?? window.getComputedStyle(document.body).fontSize, T = parseInt(k, 10) * 5 + "px";
                m.style.minWidth = T, m.style.maxWidth = T;
              } else
                m.style.width = "100%";
              y(m);
            }
            p(C, "setupImage"), setTimeout(() => {
              m.complete && C();
            }), m.addEventListener("error", C), m.addEventListener("load", C);
          })
        )
      );
    }
    h = u.getBoundingClientRect(), f.attr("width", h.width), f.attr("height", h.height);
  } else {
    i.includes("font-weight: bolder") && Ct(l).selectAll("tspan").attr("font-weight", ""), c = l.children.length;
    const u = l.children[0];
    (l.textContent === "" || l.textContent.includes("&gt")) && (u.textContent = n[0] + n.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), n[1] === " " && (u.textContent = u.textContent[0] + " " + u.textContent.substring(1))), u.textContent === "undefined" && (u.textContent = ""), h = l.getBBox();
  }
  return s.attr("transform", "translate(0," + (-h.height / (2 * c) + r) + ")"), h.height;
}
p(Qi, "addText");
async function Em(e, t) {
  var D, E;
  const r = Tt(), { themeVariables: i } = r, { useGradient: s } = i, o = r.class.padding ?? 12, a = o, n = t.useHtmlLabels ?? We(r.htmlLabels) ?? !0, l = t;
  l.annotations = l.annotations ?? [], l.members = l.members ?? [], l.methods = l.methods ?? [];
  const { shapeSvg: h, bbox: c } = await Mm(e, t, r, n, a), { labelStyles: u, nodeStyles: f } = et(t);
  t.labelStyle = u, t.cssStyles = l.styles || "";
  const d = ((D = l.styles) == null ? void 0 : D.join(";")) || f || "";
  t.cssStyles || (t.cssStyles = d.replaceAll("!important", "").split(";"));
  const g = l.members.length === 0 && l.methods.length === 0 && !((E = r.class) != null && E.hideEmptyMembersBox), m = J.svg(h), y = Q(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = Math.max(t.width ?? 0, c.width);
  let b = Math.max(t.height ?? 0, c.height);
  const k = (t.height ?? 0) > c.height;
  l.members.length === 0 && l.methods.length === 0 ? b += a : l.members.length > 0 && l.methods.length === 0 && (b += a * 2);
  const S = -C / 2, T = -b / 2;
  let _ = g ? o * 2 : l.members.length === 0 && l.methods.length === 0 ? -o : 0;
  k && (_ = o * 2);
  const v = m.rectangle(
    S - o,
    T - o - (g ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0),
    C + 2 * o,
    b + 2 * o + _,
    y
  ), L = h.insert(() => v, ":first-child");
  L.attr("class", "basic label-container outer-path");
  const z = L.node().getBBox(), N = h.select(".annotation-group").node().getBBox().height - (g ? o / 2 : 0) || 0, M = h.select(".label-group").node().getBBox().height - (g ? o / 2 : 0) || 0, X = h.select(".members-group").node().getBBox().height - (g ? o / 2 : 0) || 0, W = (N + M + T + o - (T - o - (g ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0))) / 2;
  if (h.selectAll(".text").each((F, O, $) => {
    var at, ct;
    const q = Ct($[O]), j = q.attr("transform");
    let Z = 0;
    if (j) {
      const xt = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(j);
      xt && (Z = parseFloat(xt[2]));
    }
    let tt = Z + T + o - (g ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0);
    if (q.attr("class").includes("methods-group")) {
      const rt = Math.max(X, a / 2);
      k ? tt = Math.max(
        W,
        N + M + rt + T + a * 2 + o
      ) + a * 2 : tt = N + M + rt + T + a * 4 + o;
    }
    l.members.length === 0 && l.methods.length === 0 && ((at = r.class) != null && at.hideEmptyMembersBox) && (l.annotations.length > 0 ? tt = Z - a : tt = Z), n || (tt -= 4);
    let lt = S;
    (q.attr("class").includes("label-group") || q.attr("class").includes("annotation-group")) && (lt = -((ct = q.node()) == null ? void 0 : ct.getBBox().width) / 2 || 0, h.selectAll("text").each(function(rt, xt, vt) {
      window.getComputedStyle(vt[xt]).textAnchor === "middle" && (lt = 0);
    })), q.attr("transform", `translate(${lt}, ${tt})`);
  }), l.members.length > 0 || l.methods.length > 0 || g) {
    const F = N + M + T + o, O = m.line(
      z.x,
      F,
      z.x + z.width,
      F + 1e-3,
      y
    );
    h.insert(() => O).attr("class", `divider${t.look === "neo" && !s ? " neo-line" : ""}`).attr("style", d);
  }
  if (g || l.members.length > 0 || l.methods.length > 0) {
    const F = N + M + X + T + a * 2 + o, O = m.line(
      z.x,
      k ? Math.max(W, F) : F,
      z.x + z.width,
      (k ? Math.max(W, F) : F) + 1e-3,
      y
    );
    h.insert(() => O).attr("class", `divider${t.look === "neo" && !s ? " neo-line" : ""}`).attr("style", d);
  }
  if (l.look !== "handDrawn" && h.selectAll("path").attr("style", d), L.select(":nth-child(2)").attr("style", d), h.selectAll(".divider").select("path").attr("style", d), t.labelStyle ? h.selectAll("span").attr("style", t.labelStyle) : h.selectAll("span").attr("style", d), !n) {
    const F = RegExp(/color\s*:\s*([^;]*)/), O = F.exec(d);
    if (O) {
      const $ = O[0].replace("color", "fill");
      h.selectAll("tspan").attr("style", $);
    } else if (u) {
      const $ = F.exec(u);
      if ($) {
        const q = $[0].replace("color", "fill");
        h.selectAll("tspan").attr("style", q);
      }
    }
  }
  return it(t, L), t.intersect = function(F) {
    return K.rect(t, F);
  }, h;
}
p(Em, "classBox");
async function $m(e, t) {
  var z, N;
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const s = t, o = t, a = 20, n = 20, l = "verifyMethod" in t, h = ht(t), { themeVariables: c } = Tt(), { borderColorArray: u, requirementEdgeLabelBackground: f } = c, d = e.insert("g").attr("class", h).attr("id", t.domId ?? t.id);
  let g;
  l ? g = await Oe(
    d,
    `&lt;&lt;${s.type}&gt;&gt;`,
    0,
    t.labelStyle
  ) : g = await Oe(d, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
  let m = g;
  const y = await Oe(
    d,
    s.name,
    m,
    t.labelStyle + "; font-weight: bold;"
  );
  if (m += y + n, l) {
    const M = await Oe(
      d,
      `${s.requirementId ? `ID: ${s.requirementId}` : ""}`,
      m,
      t.labelStyle
    );
    m += M;
    const X = await Oe(
      d,
      `${s.text ? `Text: ${s.text}` : ""}`,
      m,
      t.labelStyle
    );
    m += X;
    const W = await Oe(
      d,
      `${s.risk ? `Risk: ${s.risk}` : ""}`,
      m,
      t.labelStyle
    );
    m += W, await Oe(
      d,
      `${s.verifyMethod ? `Verification: ${s.verifyMethod}` : ""}`,
      m,
      t.labelStyle
    );
  } else {
    const M = await Oe(
      d,
      `${o.type ? `Type: ${o.type}` : ""}`,
      m,
      t.labelStyle
    );
    m += M, await Oe(
      d,
      `${o.docRef ? `Doc Ref: ${o.docRef}` : ""}`,
      m,
      t.labelStyle
    );
  }
  const C = (((z = d.node()) == null ? void 0 : z.getBBox().width) ?? 200) + a, b = (((N = d.node()) == null ? void 0 : N.getBBox().height) ?? 200) + a, k = -C / 2, S = -b / 2, T = J.svg(d), _ = Q(t, {});
  t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
  const v = T.rectangle(k, S, C, b, _), L = d.insert(() => v, ":first-child");
  if (L.attr("class", "basic label-container outer-path").attr("style", i), u != null && u.length) {
    const M = t.colorIndex ?? 0;
    d.attr("data-color-id", `color-${M % u.length}`);
  }
  if (d.selectAll(".label").each((M, X, W) => {
    const D = Ct(W[X]), E = D.attr("transform");
    let F = 0, O = 0;
    if (E) {
      const Z = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(E);
      Z && (F = parseFloat(Z[1]), O = parseFloat(Z[2]));
    }
    const $ = O - b / 2;
    let q = k + a / 2;
    (X === 0 || X === 1) && (q = F), D.attr("transform", `translate(${q}, ${$ + a})`);
  }), m > g + y + n) {
    const M = S + g + y + n;
    let X;
    if (t.look === "neo") {
      const E = [
        [k, M],
        [k + C, M],
        [k + C, M + 1e-3],
        [k, M + 1e-3]
      ];
      X = T.polygon(E, _);
    } else
      X = T.line(k, M, k + C, M, _);
    d.insert(() => X).attr("class", "divider");
  }
  return it(t, L), t.intersect = function(M) {
    return K.rect(t, M);
  }, i && t.look !== "handDrawn" && (f || u != null && u.length) && d.selectAll("path").attr("style", i), d;
}
p($m, "requirementBox");
async function Oe(e, t, r, i = "") {
  if (t === "")
    return 0;
  const s = e.insert("g").attr("class", "label").attr("style", i), o = Tt(), a = o.htmlLabels ?? !0, n = await He(
    s,
    hl(Ir(t)),
    {
      width: tr(t, o) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: a,
      style: i
    },
    o
  );
  let l;
  if (a) {
    const h = n.children[0], c = Ct(n);
    l = h.getBoundingClientRect(), c.attr("width", l.width), c.attr("height", l.height);
  } else {
    const h = n.children[0];
    for (const c of h.children)
      i && c.setAttribute("style", i);
    l = n.getBBox(), l.height += 6;
  }
  return s.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + r})`), l.height;
}
p(Oe, "addText");
var GT = /* @__PURE__ */ p((e) => {
  switch (e) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    // no stroke
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function Om(e, t, { config: r }) {
  var X, W;
  const { labelStyles: i, nodeStyles: s } = et(t);
  t.labelStyle = i || "";
  const o = 10, a = t.width;
  t.width = (t.width ?? 200) - 10;
  const {
    shapeSvg: n,
    bbox: l,
    label: h
  } = await dt(e, t, ht(t)), c = t.padding || 10;
  let u = "", f;
  "ticket" in t && t.ticket && ((X = r == null ? void 0 : r.kanban) != null && X.ticketBaseUrl) && (u = (W = r == null ? void 0 : r.kanban) == null ? void 0 : W.ticketBaseUrl.replace("#TICKET#", t.ticket), f = n.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", u).attr("target", "_blank"));
  const d = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: !1
  };
  let g, m;
  f ? { label: g, bbox: m } = await Ka(
    f,
    "ticket" in t && t.ticket || "",
    d
  ) : { label: g, bbox: m } = await Ka(
    n,
    "ticket" in t && t.ticket || "",
    d
  );
  const { label: y, bbox: C } = await Ka(
    n,
    "assigned" in t && t.assigned || "",
    d
  );
  t.width = a;
  const b = 10, k = (t == null ? void 0 : t.width) || 0, S = Math.max(m.height, C.height) / 2, T = Math.max(l.height + b * 2, (t == null ? void 0 : t.height) || 0) + S, _ = -k / 2, v = -T / 2;
  h.attr(
    "transform",
    "translate(" + (c - k / 2) + ", " + (-S - l.height / 2) + ")"
  ), g.attr(
    "transform",
    "translate(" + (c - k / 2) + ", " + (-S + l.height / 2) + ")"
  ), y.attr(
    "transform",
    "translate(" + (c + k / 2 - C.width - 2 * o) + ", " + (-S + l.height / 2) + ")"
  );
  let L;
  const { rx: z, ry: N } = t, { cssStyles: M } = t;
  if (t.look === "handDrawn") {
    const D = J.svg(n), E = Q(t, {}), F = z || N ? D.path(mr(_, v, k, T, z || 0), E) : D.rectangle(_, v, k, T, E);
    L = n.insert(() => F, ":first-child"), L.attr("class", "basic label-container").attr("style", M || null);
  } else {
    L = n.insert("rect", ":first-child"), L.attr("class", "basic label-container __APA__").attr("style", s).attr("rx", z ?? 5).attr("ry", N ?? 5).attr("x", _).attr("y", v).attr("width", k).attr("height", T);
    const D = "priority" in t && t.priority;
    if (D) {
      const E = n.append("line"), F = _ + 2, O = v + Math.floor((z ?? 0) / 2), $ = v + T - Math.floor((z ?? 0) / 2);
      E.attr("x1", F).attr("y1", O).attr("x2", F).attr("y2", $).attr("stroke-width", "4").attr("stroke", GT(D));
    }
  }
  return it(t, L), t.height = T, t.intersect = function(D) {
    return K.rect(t, D);
  }, n;
}
p(Om, "kanbanItem");
async function Dm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, halfPadding: a, label: n } = await dt(
    e,
    t,
    ht(t)
  ), l = o.width + 10 * a, h = o.height + 8 * a, c = 0.15 * l, { cssStyles: u } = t, f = o.width + 20, d = o.height + 20, g = Math.max(l, f), m = Math.max(h, d);
  n.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`);
  let y;
  const C = `M0 0 
    a${c},${c} 1 0,0 ${g * 0.25},${-1 * m * 0.1}
    a${c},${c} 1 0,0 ${g * 0.25},0
    a${c},${c} 1 0,0 ${g * 0.25},0
    a${c},${c} 1 0,0 ${g * 0.25},${m * 0.1}

    a${c},${c} 1 0,0 ${g * 0.15},${m * 0.33}
    a${c * 0.8},${c * 0.8} 1 0,0 0,${m * 0.34}
    a${c},${c} 1 0,0 ${-1 * g * 0.15},${m * 0.33}

    a${c},${c} 1 0,0 ${-1 * g * 0.25},${m * 0.15}
    a${c},${c} 1 0,0 ${-1 * g * 0.25},0
    a${c},${c} 1 0,0 ${-1 * g * 0.25},0
    a${c},${c} 1 0,0 ${-1 * g * 0.25},${-1 * m * 0.15}

    a${c},${c} 1 0,0 ${-1 * g * 0.1},${-1 * m * 0.33}
    a${c * 0.8},${c * 0.8} 1 0,0 0,${-1 * m * 0.34}
    a${c},${c} 1 0,0 ${g * 0.1},${-1 * m * 0.33}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const b = J.svg(s), k = Q(t, {}), S = b.path(C, k);
    y = s.insert(() => S, ":first-child"), y.attr("class", "basic label-container").attr("style", Ut(u));
  } else
    y = s.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", C);
  return y.attr("transform", `translate(${-g / 2}, ${-m / 2})`), it(t, y), t.calcIntersect = function(b, k) {
    return K.rect(b, k);
  }, t.intersect = function(b) {
    return U.info("Bang intersect", t, b), K.rect(t, b);
  }, s;
}
p(Dm, "bang");
async function Im(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, halfPadding: a, label: n } = await dt(
    e,
    t,
    ht(t)
  ), l = o.width + 2 * a, h = o.height + 2 * a, c = 0.15 * l, u = 0.25 * l, f = 0.35 * l, d = 0.2 * l, { cssStyles: g } = t;
  let m;
  const y = `M0 0 
    a${c},${c} 0 0,1 ${l * 0.25},${-1 * l * 0.1}
    a${f},${f} 1 0,1 ${l * 0.4},${-1 * l * 0.1}
    a${u},${u} 1 0,1 ${l * 0.35},${l * 0.2}

    a${c},${c} 1 0,1 ${l * 0.15},${h * 0.35}
    a${d},${d} 1 0,1 ${-1 * l * 0.15},${h * 0.65}

    a${u},${c} 1 0,1 ${-1 * l * 0.25},${l * 0.15}
    a${f},${f} 1 0,1 ${-1 * l * 0.5},0
    a${c},${c} 1 0,1 ${-1 * l * 0.25},${-1 * l * 0.15}

    a${c},${c} 1 0,1 ${-1 * l * 0.1},${-1 * h * 0.35}
    a${d},${d} 1 0,1 ${l * 0.1},${-1 * h * 0.65}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const C = J.svg(s), b = Q(t, {}), k = C.path(y, b);
    m = s.insert(() => k, ":first-child"), m.attr("class", "basic label-container").attr("style", Ut(g));
  } else
    m = s.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", y);
  return n.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`), m.attr("transform", `translate(${-l / 2}, ${-h / 2})`), it(t, m), t.calcIntersect = function(C, b) {
    return K.rect(C, b);
  }, t.intersect = function(C) {
    return U.info("Cloud intersect", t, C), K.rect(t, C);
  }, s;
}
p(Im, "cloud");
async function Rm(e, t) {
  const { labelStyles: r, nodeStyles: i } = et(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, halfPadding: a, label: n } = await dt(
    e,
    t,
    ht(t)
  ), l = o.width + 8 * a, h = o.height + 2 * a, c = 5, u = t.look === "neo" ? `
    M${-l / 2} ${h / 2 - c}
    v${-h + 2 * c}
    q0,-${c} ${c},-${c}
    h${l - 2 * c}
    q${c},0 ${c},${c}
    v${h - c}
    H${-l / 2}
    Z
  ` : `
    M${-l / 2} ${h / 2 - c}
    v${-h + 2 * c}
    q0,-${c} ${c},-${c}
    h${l - 2 * c}
    q${c},0 ${c},${c}
    v${h - 2 * c}
    q0,${c} ${-c},${c}
    h${-(l - 2 * c)}
    q${-c},0 ${-c},${-c}
    Z
  `;
  if (!t.domId)
    throw new Error(
      `defaultMindmapNode: node "${t.id}" is missing a domId — was render.ts domId prefixing skipped?`
    );
  const f = s.append("path").attr("id", t.domId).attr("class", "node-bkg node-" + t.type).attr("style", i).attr("d", u);
  return s.append("line").attr("class", "node-line-").attr("x1", -l / 2).attr("y1", h / 2).attr("x2", l / 2).attr("y2", h / 2), n.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`), s.append(() => n.node()), it(t, f), t.calcIntersect = function(d, g) {
    return K.rect(d, g);
  }, t.intersect = function(d) {
    return K.rect(t, d);
  }, s;
}
p(Rm, "defaultMindmapNode");
async function Pm(e, t) {
  const r = {
    padding: t.padding ?? 0
  };
  return Jl(e, t, r);
}
p(Pm, "mindmapCircle");
var XT = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: gm
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: dm
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: mm
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: bm
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: Pg
  },
  {
    semanticName: "Data Store",
    name: "Data Store",
    shortName: "datastore",
    description: "Data flow diagram data store",
    aliases: ["data-store"],
    handler: Ng
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: ["circ"],
    handler: Jl
  },
  {
    semanticName: "Bang",
    name: "Bang",
    shortName: "bang",
    description: "Bang",
    aliases: ["bang"],
    handler: Dm
  },
  {
    semanticName: "Cloud",
    name: "Cloud",
    shortName: "cloud",
    description: "cloud",
    aliases: ["cloud"],
    handler: Im
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: hm
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: jg
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: rm
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: em
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: _m
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: Jg
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: Wg
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: Sm
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: Ag
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: fm
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: xm
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: Cm
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: Yg
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: Gg
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: Og
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: Dg
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: Ig
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: im
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: Lm
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: Ug
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: Tm
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: sm
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: Rg
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: qg
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: vm
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: Am
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: zg
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: Bm
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: Hg
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: pm
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: nm
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: am
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: Fg
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: $g
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: wm
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: km
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: Fm
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: cm
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: om
  }
], VT = /* @__PURE__ */ p(() => {
  const t = [
    ...Object.entries({
      // States
      state: ym,
      choice: Mg,
      note: lm,
      // Rectangles
      rectWithTitle: um,
      labelRect: tm,
      // Icons
      iconSquare: Kg,
      iconCircle: Vg,
      icon: Xg,
      iconRounded: Zg,
      imageSquare: Qg,
      anchor: vg,
      // Kanban diagram
      kanbanItem: Om,
      //Mindmap diagram
      mindmapCircle: Pm,
      defaultMindmapNode: Rm,
      // class diagram
      classBox: Em,
      // er diagram
      erBox: th,
      // Requirement diagram
      requirementBox: $m
    }),
    ...XT.flatMap((r) => [
      r.shortName,
      ..."aliases" in r ? r.aliases : [],
      ..."internalAliases" in r ? r.internalAliases : []
    ].map((s) => [s, r.handler]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap"), Nm = VT();
function ZT(e) {
  return e in Nm;
}
p(ZT, "isValidShape");
var sa = /* @__PURE__ */ new Map();
async function qm(e, t, r) {
  let i, s;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  const o = t.shape ? Nm[t.shape] : void 0;
  if (!o)
    throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let a;
    r.config.securityLevel === "sandbox" ? a = "_top" : t.linkTarget && (a = t.linkTarget || "_blank"), i = e.insert("svg:a").attr("xlink:href", t.link).attr("target", a ?? null), s = await o(i, t, r);
  } else
    s = await o(e, t, r), i = s;
  return i.attr("data-look", Ut(t.look)), t.tooltip && s.attr("title", t.tooltip), sa.set(t.id, i), t.haveCallback && i.attr("class", i.attr("class") + " clickable"), i;
}
p(qm, "insertNode");
var VF = /* @__PURE__ */ p((e, t) => {
  sa.set(t.id, e);
}, "setNodeElem"), ZF = /* @__PURE__ */ p(() => {
  sa.clear();
}, "clear"), KF = /* @__PURE__ */ p((e) => {
  const t = sa.get(e.id);
  U.trace(
    "Transforming node",
    e.diff,
    e,
    "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")"
  );
  const r = 8, i = e.diff || 0;
  return e.clusterNode ? t.attr(
    "transform",
    "translate(" + (e.x + i - e.width / 2) + ", " + (e.y - e.height / 2 - r) + ")"
  ) : t.attr("transform", "translate(" + e.x + ", " + e.y + ")"), i;
}, "positionNode"), Ui = /* @__PURE__ */ p((e, t) => {
  if (t)
    return "translate(" + -e.width / 2 + ", " + -e.height / 2 + ")";
  const r = e.x ?? 0, i = e.y ?? 0;
  return "translate(" + -(r + e.width / 2) + ", " + -(i + e.height / 2) + ")";
}, "computeLabelTransform"), Qt = {
  aggregation: 17.25,
  extension: 17.25,
  composition: 17.25,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4,
  arrow_barb: 0,
  arrow_barb_neo: 5.5
  //arrow_cross: 24,
}, nu = {
  arrow_point: 4,
  arrow_cross: 12.5,
  arrow_circle: 12.5
};
function Ji(e, t) {
  if (e === void 0 || t === void 0)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  e = Et(e), t = Et(t);
  const [r, i] = [e.x, e.y], [s, o] = [t.x, t.y], a = s - r, n = o - i;
  return { angle: Math.atan(n / a), deltaX: a, deltaY: n };
}
p(Ji, "calculateDeltaAndAngle");
var Et = /* @__PURE__ */ p((e) => Array.isArray(e) ? { x: e[0], y: e[1] } : e, "pointTransformer"), KT = /* @__PURE__ */ p((e) => ({
  x: /* @__PURE__ */ p(function(t, r, i) {
    let s = 0;
    const o = Et(i[0]).x < Et(i[i.length - 1]).x ? "left" : "right";
    if (r === 0 && Object.hasOwn(Qt, e.arrowTypeStart)) {
      const { angle: d, deltaX: g } = Ji(i[0], i[1]);
      s = Qt[e.arrowTypeStart] * Math.cos(d) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Qt, e.arrowTypeEnd)) {
      const { angle: d, deltaX: g } = Ji(
        i[i.length - 1],
        i[i.length - 2]
      );
      s = Qt[e.arrowTypeEnd] * Math.cos(d) * (g >= 0 ? 1 : -1);
    }
    const a = Math.abs(
      Et(t).x - Et(i[i.length - 1]).x
    ), n = Math.abs(
      Et(t).y - Et(i[i.length - 1]).y
    ), l = Math.abs(Et(t).x - Et(i[0]).x), h = Math.abs(Et(t).y - Et(i[0]).y), c = Qt[e.arrowTypeStart], u = Qt[e.arrowTypeEnd], f = 1;
    if (a < u && a > 0 && n < u) {
      let d = u + f - a;
      d *= o === "right" ? -1 : 1, s -= d;
    }
    if (l < c && l > 0 && h < c) {
      let d = c + f - l;
      d *= o === "right" ? -1 : 1, s += d;
    }
    return Et(t).x + s;
  }, "x"),
  y: /* @__PURE__ */ p(function(t, r, i) {
    let s = 0;
    const o = Et(i[0]).y < Et(i[i.length - 1]).y ? "down" : "up";
    if (r === 0 && Object.hasOwn(Qt, e.arrowTypeStart)) {
      const { angle: d, deltaY: g } = Ji(i[0], i[1]);
      s = Qt[e.arrowTypeStart] * Math.abs(Math.sin(d)) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Qt, e.arrowTypeEnd)) {
      const { angle: d, deltaY: g } = Ji(
        i[i.length - 1],
        i[i.length - 2]
      );
      s = Qt[e.arrowTypeEnd] * Math.abs(Math.sin(d)) * (g >= 0 ? 1 : -1);
    }
    const a = Math.abs(
      Et(t).y - Et(i[i.length - 1]).y
    ), n = Math.abs(
      Et(t).x - Et(i[i.length - 1]).x
    ), l = Math.abs(Et(t).y - Et(i[0]).y), h = Math.abs(Et(t).x - Et(i[0]).x), c = Qt[e.arrowTypeStart], u = Qt[e.arrowTypeEnd], f = 1;
    if (a < u && a > 0 && n < u) {
      let d = u + f - a;
      d *= o === "up" ? -1 : 1, s -= d;
    }
    if (l < c && l > 0 && h < c) {
      let d = c + f - l;
      d *= o === "up" ? -1 : 1, s += d;
    }
    return Et(t).y + s;
  }, "y")
}), "getLineFunctionsWithOffset"), QT = /* @__PURE__ */ p((e, t, r, i, s, o = !1, a) => {
  t.arrowTypeStart && lu(
    e,
    "start",
    t.arrowTypeStart,
    r,
    i,
    s,
    o,
    a
  ), t.arrowTypeEnd && lu(e, "end", t.arrowTypeEnd, r, i, s, o, a);
}, "addEdgeMarkers"), JT = {
  arrow_cross: { type: "cross", fill: !1 },
  arrow_point: { type: "point", fill: !0 },
  arrow_barb: { type: "barb", fill: !0 },
  arrow_barb_neo: { type: "barb", fill: !0 },
  arrow_circle: { type: "circle", fill: !1 },
  aggregation: { type: "aggregation", fill: !1 },
  extension: { type: "extension", fill: !1 },
  composition: { type: "composition", fill: !0 },
  dependency: { type: "dependency", fill: !0 },
  lollipop: { type: "lollipop", fill: !1 },
  only_one: { type: "onlyOne", fill: !1 },
  zero_or_one: { type: "zeroOrOne", fill: !1 },
  one_or_more: { type: "oneOrMore", fill: !1 },
  zero_or_more: { type: "zeroOrMore", fill: !1 },
  requirement_arrow: { type: "requirement_arrow", fill: !1 },
  requirement_contains: { type: "requirement_contains", fill: !1 }
}, t_ = [
  "cross",
  "point",
  "circle",
  "lollipop",
  "aggregation",
  "extension",
  "composition",
  "dependency",
  "barb"
], lu = /* @__PURE__ */ p((e, t, r, i, s, o, a = !1, n) => {
  var g;
  const l = JT[r], h = l && t_.includes(l.type);
  if (!l) {
    U.warn(`Unknown arrow type: ${r}`);
    return;
  }
  const c = l.type, d = `${s}_${o}-${c}${t === "start" ? "Start" : "End"}${a && h ? "-margin" : ""}`;
  if (n && n.trim() !== "") {
    const m = n.replace(/[^\dA-Za-z]/g, "_"), y = `${d}_${m}`;
    if (!document.getElementById(y)) {
      const C = document.getElementById(d);
      if (C) {
        const b = C.cloneNode(!0);
        b.id = y, b.querySelectorAll("path, circle, line").forEach((S) => {
          S.setAttribute("stroke", n), l.fill && S.setAttribute("fill", n);
        }), (g = C.parentNode) == null || g.appendChild(b);
      }
    }
    e.attr(`marker-${t}`, `url(${i}#${y})`);
  } else
    e.attr(`marker-${t}`, `url(${i}#${d})`);
}, "addEdgeMarker"), e_ = /* @__PURE__ */ p((e) => {
  var t, r;
  return typeof e == "string" ? e : (r = (t = Tt()) == null ? void 0 : t.flowchart) == null ? void 0 : r.curve;
}, "resolveEdgeCurveType"), Wo = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), QF = /* @__PURE__ */ p(() => {
  Wo.clear(), Vt.clear();
}, "clear"), ji = /* @__PURE__ */ p((e) => e ? typeof e == "string" ? e : e.reduce((t, r) => t + ";" + r, "") : "", "getLabelStyles"), r_ = /* @__PURE__ */ p(async (e, t) => {
  const r = Tt();
  let i = se(r);
  const { labelStyles: s } = et(t);
  t.labelStyle = s;
  const o = e.insert("g").attr("class", "edgeLabel"), a = o.insert("g").attr("class", "label").attr("data-id", t.id), n = t.labelType === "markdown", h = await He(
    e,
    t.label,
    {
      style: ji(t.labelStyle),
      useHtmlLabels: i,
      addSvgBackground: !0,
      isNode: !1,
      markdown: n,
      // Plain text edge labels should auto-wrap, markdown edge labels respect markdownAutoWrap config
      width: n ? void 0 : void 0
    },
    r
  );
  a.node().appendChild(h), U.info("abc82", t, t.labelType);
  let c = h.getBBox(), u = c;
  if (i) {
    const d = h.children[0], g = Ct(h);
    c = d.getBoundingClientRect(), u = c, g.attr("width", c.width), g.attr("height", c.height);
  } else {
    const d = Ct(h).select("text").node();
    d && typeof d.getBBox == "function" && (u = d.getBBox());
  }
  a.attr("transform", Ui(u, i)), Wo.set(t.id, o), t.width = c.width, t.height = c.height;
  let f;
  if (t.startLabelLeft) {
    const d = e.insert("g").attr("class", "edgeTerminals"), g = d.insert("g").attr("class", "inner"), m = await lr(
      g,
      t.startLabelLeft,
      ji(t.labelStyle) || "",
      !1,
      !1
    );
    f = m;
    let y = m.getBBox();
    if (i) {
      const C = m.children[0], b = Ct(m);
      y = C.getBoundingClientRect(), b.attr("width", y.width), b.attr("height", y.height);
    }
    g.attr("transform", Ui(y, i)), Vt.get(t.id) || Vt.set(t.id, {}), Vt.get(t.id).startLeft = d, ts(f, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const d = e.insert("g").attr("class", "edgeTerminals"), g = d.insert("g").attr("class", "inner"), m = await lr(
      g,
      t.startLabelRight,
      ji(t.labelStyle) || "",
      !1,
      !1
    );
    f = m;
    let y = m.getBBox();
    if (i) {
      const C = m.children[0], b = Ct(m);
      y = C.getBoundingClientRect(), b.attr("width", y.width), b.attr("height", y.height);
    }
    g.attr("transform", Ui(y, i)), Vt.get(t.id) || Vt.set(t.id, {}), Vt.get(t.id).startRight = d, ts(f, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const d = e.insert("g").attr("class", "edgeTerminals"), g = d.insert("g").attr("class", "inner"), m = await lr(
      d,
      t.endLabelLeft,
      ji(t.labelStyle) || "",
      !1,
      !1
    );
    f = m;
    let y = m.getBBox();
    if (i) {
      const C = m.children[0], b = Ct(m);
      y = C.getBoundingClientRect(), b.attr("width", y.width), b.attr("height", y.height);
    }
    g.attr("transform", Ui(y, i)), Vt.get(t.id) || Vt.set(t.id, {}), Vt.get(t.id).endLeft = d, ts(f, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const d = e.insert("g").attr("class", "edgeTerminals"), g = d.insert("g").attr("class", "inner"), m = await lr(
      d,
      t.endLabelRight,
      ji(t.labelStyle) || "",
      !1,
      !1
    );
    f = m;
    let y = m.getBBox();
    if (i) {
      const C = m.children[0], b = Ct(m);
      y = C.getBoundingClientRect(), b.attr("width", y.width), b.attr("height", y.height);
    }
    g.attr("transform", Ui(y, i)), Vt.get(t.id) || Vt.set(t.id, {}), Vt.get(t.id).endRight = d, ts(f, t.endLabelRight);
  }
  return h;
}, "insertEdgeLabel");
function ts(e, t) {
  se(Tt()) && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
}
p(ts, "setTerminalWidth");
var i_ = /* @__PURE__ */ p((e, t) => {
  U.debug("Moving label abc88 ", e.id, e.label, Wo.get(e.id), t);
  let r = t.updatedPath ? t.updatedPath : t.originalPath;
  const i = Tt(), { subGraphTitleTotalMargin: s } = ql(i);
  if (e.label) {
    const o = Wo.get(e.id);
    let a = e.x, n = e.y;
    if (r) {
      const l = Te.calcLabelPosition(r);
      U.debug(
        "Moving label " + e.label + " from (",
        a,
        ",",
        n,
        ") to (",
        l.x,
        ",",
        l.y,
        ") abc88"
      ), t.updatedPath && (a = l.x, n = l.y);
    }
    o.attr("transform", `translate(${a}, ${n + s / 2})`);
  }
  if (e.startLabelLeft) {
    const o = Vt.get(e.id).startLeft;
    let a = e.x, n = e.y;
    if (r) {
      const l = Te.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.startLabelRight) {
    const o = Vt.get(e.id).startRight;
    let a = e.x, n = e.y;
    if (r) {
      const l = Te.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.endLabelLeft) {
    const o = Vt.get(e.id).endLeft;
    let a = e.x, n = e.y;
    if (r) {
      const l = Te.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.endLabelRight) {
    const o = Vt.get(e.id).endRight;
    let a = e.x, n = e.y;
    if (r) {
      const l = Te.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
}, "positionEdgeLabel"), s_ = /* @__PURE__ */ p((e, t) => {
  var a;
  if (!(e != null && e.isLabelEdge) || !((a = e == null ? void 0 : e.id) != null && a.endsWith("-to-label")) || !Array.isArray(t) || t.length !== 2)
    return t;
  const [r, i] = t, s = Math.abs(i.x - r.x), o = Math.abs(i.y - r.y);
  return s < 1e-3 || o < 1e-3 ? t : o >= s ? [r, { x: r.x, y: i.y }, i] : [r, { x: i.x, y: r.y }, i];
}, "orthogonalizeToLabelClippedPoints"), o_ = /* @__PURE__ */ p((e, t) => {
  const r = e.x, i = e.y, s = Math.abs(t.x - r), o = Math.abs(t.y - i), a = e.width / 2, n = e.height / 2;
  return s >= a || o >= n;
}, "outsideNode"), a_ = /* @__PURE__ */ p((e, t, r) => {
  U.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const i = e.x, s = e.y, o = Math.abs(i - r.x), a = e.width / 2;
  let n = r.x < t.x ? a - o : a + o;
  const l = e.height / 2, h = Math.abs(t.y - r.y), c = Math.abs(t.x - r.x);
  if (Math.abs(s - t.y) * a > Math.abs(i - t.x) * l) {
    let u = r.y < t.y ? t.y - l - s : s - l - t.y;
    n = c * u / h;
    const f = {
      x: r.x < t.x ? r.x + n : r.x - c + n,
      y: r.y < t.y ? r.y + h - u : r.y - h + u
    };
    return n === 0 && (f.x = t.x, f.y = t.y), c === 0 && (f.x = t.x), h === 0 && (f.y = t.y), U.debug(`abc89 top/bottom calc, Q ${h}, q ${u}, R ${c}, r ${n}`, f), f;
  } else {
    r.x < t.x ? n = t.x - a - i : n = i - a - t.x;
    let u = h * n / c, f = r.x < t.x ? r.x + c - n : r.x - c + n, d = r.y < t.y ? r.y + u : r.y - u;
    return U.debug(`sides calc abc89, Q ${h}, q ${u}, R ${c}, r ${n}`, { _x: f, _y: d }), n === 0 && (f = t.x, d = t.y), c === 0 && (f = t.x), h === 0 && (d = t.y), { x: f, y: d };
  }
}, "intersection"), hu = /* @__PURE__ */ p((e, t) => {
  U.warn("abc88 cutPathAtIntersect", e, t);
  let r = [], i = e[0], s = !1;
  return e.forEach((o) => {
    if (U.info("abc88 checking point", o, t), !o_(t, o) && !s) {
      const a = a_(t, i, o);
      U.debug("abc88 inside", o, i, a), U.debug("abc88 intersection", a, t);
      let n = !1;
      r.forEach((l) => {
        n = n || l.x === a.x && l.y === a.y;
      }), r.some((l) => l.x === a.x && l.y === a.y) ? U.warn("abc88 no intersect", a, r) : r.push(a), s = !0;
    } else
      U.warn("abc88 outside", o, i), i = o, s || r.push(o);
  }), U.debug("returning points", r), r;
}, "cutPathAtIntersect");
function Wm(e) {
  const t = [], r = [];
  for (let i = 1; i < e.length - 1; i++) {
    const s = e[i - 1], o = e[i], a = e[i + 1];
    (s.x === o.x && o.y === a.y && Math.abs(o.x - a.x) > 5 && Math.abs(o.y - s.y) > 5 || s.y === o.y && o.x === a.x && Math.abs(o.x - s.x) > 5 && Math.abs(o.y - a.y) > 5) && (t.push(o), r.push(i));
  }
  return { cornerPoints: t, cornerPointPositions: r };
}
p(Wm, "extractCornerPoints");
var cu = /* @__PURE__ */ p(function(e, t, r) {
  const i = t.x - e.x, s = t.y - e.y, o = Math.sqrt(i * i + s * s), a = r / o;
  return { x: t.x - a * i, y: t.y - a * s };
}, "findAdjacentPoint"), n_ = /* @__PURE__ */ p(function(e) {
  const { cornerPointPositions: t } = Wm(e), r = [];
  for (let i = 0; i < e.length; i++)
    if (t.includes(i)) {
      const s = e[i - 1], o = e[i + 1], a = e[i], n = cu(s, a, 5), l = cu(o, a, 5), h = l.x - n.x, c = l.y - n.y;
      r.push(n);
      const u = Math.sqrt(2) * 2;
      let f = { x: a.x, y: a.y };
      if (Math.abs(o.x - s.x) > 10 && Math.abs(o.y - s.y) >= 10) {
        U.debug(
          "Corner point fixing",
          Math.abs(o.x - s.x),
          Math.abs(o.y - s.y)
        );
        const d = 5;
        a.x === n.x ? f = {
          x: h < 0 ? n.x - d + u : n.x + d - u,
          y: c < 0 ? n.y - u : n.y + u
        } : f = {
          x: h < 0 ? n.x - u : n.x + u,
          y: c < 0 ? n.y - d + u : n.y + d - u
        };
      } else
        U.debug(
          "Corner point skipping fixing",
          Math.abs(o.x - s.x),
          Math.abs(o.y - s.y)
        );
      r.push(f, l);
    } else
      r.push(e[i]);
  return r;
}, "fixCorners"), l_ = /* @__PURE__ */ p((e, t, r) => {
  const i = e - t - r, s = 2, o = 2, a = s + o, n = Math.floor(i / a), l = Array(n).fill(`${s} ${o}`).join(" ");
  return `0 ${t} ${l} ${r}`;
}, "generateDashArray"), h_ = /* @__PURE__ */ p(function(e, t, r, i, s, o, a, n = !1) {
  var $;
  if (!a)
    throw new Error(
      `insertEdge: missing diagramId for edge "${t.id}" — edge IDs require a diagram prefix for uniqueness`
    );
  const { handDrawnSeed: l, layout: h } = Tt();
  let c = t.points, u = !1;
  const f = s;
  var d = o;
  const g = [];
  for (const q in t.cssCompiledStyles)
    Sp(q) || g.push(t.cssCompiledStyles[q]);
  if (h === "swimlane") {
    if (d.intersect && f.intersect && Array.isArray(c) && c.length >= 2)
      if (c.length === 2)
        c = [f.intersect(c[0]), d.intersect(c[1])];
      else {
        const q = c.slice(1, -1), j = q[0], Z = q[q.length - 1], tt = 0.5, lt = Math.abs(c[c.length - 1].x - Z.x) < tt && Math.abs(c[c.length - 1].y - Z.y) < tt, at = f.intersect(j), ct = lt ? Z : d.intersect(Z), rt = Math.abs(ct.x - Z.x) < tt && Math.abs(ct.y - Z.y) < tt, vt = Math.abs(at.x - j.x) < tt && Math.abs(at.y - j.y) < tt ? [] : [at], Lt = rt ? [] : [ct];
        c = [...vt, ...q, ...Lt];
      }
    c = s_(t, c);
  } else d.intersect && f.intersect && !n && (c = c.slice(1, t.points.length - 1), c.unshift(f.intersect(c[0])), c.push(d.intersect(c[c.length - 1])));
  const m = btoa(JSON.stringify(c));
  t.toCluster && (U.info("to cluster abc88", r.get(t.toCluster)), c = hu(t.points, r.get(t.toCluster).node), u = !0), t.fromCluster && (U.debug(
    "from cluster abc88",
    r.get(t.fromCluster),
    JSON.stringify(c, null, 2)
  ), c = hu(c.reverse(), r.get(t.fromCluster).node).reverse(), u = !0);
  let y = c.filter((q) => !Number.isNaN(q.y));
  const C = e_(t.curve);
  C !== "rounded" && (y = n_(y));
  let b = ss;
  switch (C) {
    case "linear":
      b = ss;
      break;
    case "basis":
      b = bn;
      break;
    case "cardinal":
      b = Bd;
      break;
    case "bumpX":
      b = kd;
      break;
    case "bumpY":
      b = wd;
      break;
    case "catmullRom":
      b = Ld;
      break;
    case "monotoneX":
      b = Od;
      break;
    case "monotoneY":
      b = Dd;
      break;
    case "natural":
      b = Rd;
      break;
    case "step":
      b = Pd;
      break;
    case "stepAfter":
      b = qd;
      break;
    case "stepBefore":
      b = Nd;
      break;
    case "rounded":
      b = ss;
      break;
    default:
      b = bn;
  }
  const { x: k, y: S } = KT(t), T = R1().x(k).y(S).curve(b);
  let _;
  switch (t.thickness) {
    case "normal":
      _ = "edge-thickness-normal";
      break;
    case "thick":
      _ = "edge-thickness-thick";
      break;
    case "invisible":
      _ = "edge-thickness-invisible";
      break;
    default:
      _ = "edge-thickness-normal";
  }
  switch (t.pattern) {
    case "solid":
      _ += " edge-pattern-solid";
      break;
    case "dotted":
      _ += " edge-pattern-dotted";
      break;
    case "dashed":
      _ += " edge-pattern-dashed";
      break;
    default:
      _ += " edge-pattern-solid";
  }
  let v, L = C === "rounded" ? zm(Hm(y, t), 5) : T(y);
  const z = Array.isArray(t.style) ? t.style : [t.style];
  let N = z.find((q) => q == null ? void 0 : q.startsWith("stroke:")), M = "";
  t.animate && (M = "edge-animation-fast"), t.animation && (M = "edge-animation-" + t.animation);
  let X = !1;
  if (t.look === "handDrawn") {
    const q = J.svg(e);
    Object.assign([], y);
    const j = q.path(L, {
      roughness: 0.3,
      seed: l
    });
    _ += " transition", v = Ct(j).select("path").attr("id", `${a}-${t.id}`).attr(
      "class",
      " " + _ + (t.classes ? " " + t.classes : "") + (M ? " " + M : "")
    ).attr("style", z ? z.reduce((tt, lt) => tt + ";" + lt, "") : "");
    let Z = v.attr("d");
    v.attr("d", Z), e.node().appendChild(v.node());
  } else {
    const q = g.join(";"), j = z ? z.reduce((rt, xt) => rt + xt + ";", "") : "", Z = (q ? q + ";" + j + ";" : j) + ";" + (z ? z.reduce((rt, xt) => rt + ";" + xt, "") : "");
    v = e.append("path").attr("d", L).attr("id", `${a}-${t.id}`).attr(
      "class",
      " " + _ + (t.classes ? " " + t.classes : "") + (M ? " " + M : "")
    ).attr("style", Z), N = ($ = Z.match(/stroke:([^;]+)/)) == null ? void 0 : $[1], X = t.animate === !0 || !!t.animation || q.includes("animation");
    const tt = v.node(), lt = typeof tt.getTotalLength == "function" ? tt.getTotalLength() : 0, at = nu[t.arrowTypeStart] || 0, ct = nu[t.arrowTypeEnd] || 0;
    if (t.look === "neo" && !X) {
      const xt = `stroke-dasharray: ${t.pattern === "dotted" || t.pattern === "dashed" ? l_(lt, at, ct) : `0 ${at} ${lt - at - ct} ${ct}`}; stroke-dashoffset: 0;`;
      v.attr("style", xt + v.attr("style"));
    }
  }
  v.attr("data-edge", !0), v.attr("data-et", "edge"), v.attr("data-id", t.id), v.attr("data-points", m), v.attr("data-look", Ut(t.look)), t.showPoints && y.forEach((q) => {
    e.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", q.x).attr("cy", q.y);
  });
  let W = "";
  (Tt().flowchart.arrowMarkerAbsolute || Tt().state.arrowMarkerAbsolute) && (W = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, W = W.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), U.info("arrowTypeStart", t.arrowTypeStart), U.info("arrowTypeEnd", t.arrowTypeEnd);
  const D = !X && (t == null ? void 0 : t.look) === "neo";
  QT(v, t, W, a, i, D, N);
  const E = Math.floor(c.length / 2), F = c[E];
  Te.isLabelCoordinateInPath(F, v.attr("d")) || (u = !0);
  let O = {};
  return u && (O.updatedPath = c), O.originalPath = t.points, O;
}, "insertEdge");
function zm(e, t) {
  if (e.length < 2)
    return "";
  let r = "";
  const i = e.length, s = 1e-5;
  for (let o = 0; o < i; o++) {
    const a = e[o], n = e[o - 1], l = e[o + 1];
    if (o === 0)
      r += `M${a.x},${a.y}`;
    else if (o === i - 1)
      r += `L${a.x},${a.y}`;
    else {
      const h = a.x - n.x, c = a.y - n.y, u = l.x - a.x, f = l.y - a.y, d = Math.hypot(h, c), g = Math.hypot(u, f);
      if (d < s || g < s) {
        r += `L${a.x},${a.y}`;
        continue;
      }
      const m = h / d, y = c / d, C = u / g, b = f / g, k = m * C + y * b, S = Math.max(-1, Math.min(1, k)), T = Math.acos(S);
      if (T < s || Math.abs(Math.PI - T) < s) {
        r += `L${a.x},${a.y}`;
        continue;
      }
      const _ = Math.min(t / Math.sin(T / 2), d / 2, g / 2), v = a.x - m * _, L = a.y - y * _, z = a.x + C * _, N = a.y + b * _;
      r += `L${v},${L}`, r += `Q${a.x},${a.y} ${z},${N}`;
    }
  }
  return r;
}
p(zm, "generateRoundedPath");
function Zn(e, t) {
  if (!e || !t)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  const r = t.x - e.x, i = t.y - e.y;
  return { angle: Math.atan2(i, r), deltaX: r, deltaY: i };
}
p(Zn, "calculateDeltaAndAngle");
function Hm(e, t) {
  const r = e.map((s) => ({ ...s }));
  if (e.length >= 2 && Qt[t.arrowTypeStart]) {
    const s = Qt[t.arrowTypeStart], o = e[0], a = e[1], { angle: n } = Zn(o, a), l = s * Math.cos(n), h = s * Math.sin(n);
    r[0].x = o.x + l, r[0].y = o.y + h;
  }
  const i = e.length;
  if (i >= 2 && Qt[t.arrowTypeEnd]) {
    const s = Qt[t.arrowTypeEnd], o = e[i - 1], a = e[i - 2], { angle: n } = Zn(a, o), l = s * Math.cos(n), h = s * Math.sin(n);
    r[i - 1].x = o.x - l, r[i - 1].y = o.y - h;
  }
  return r;
}
p(Hm, "applyMarkerOffsetsToPoints");
var c_ = /* @__PURE__ */ p((e, t, r, i) => {
  t.forEach((s) => {
    $_[s](e, r, i);
  });
}, "insertMarkers"), u_ = /* @__PURE__ */ p((e, t, r) => {
  U.trace("Making markers for ", r), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z"), e.append("marker").attr("id", r + "_" + t + "-extensionStart-margin").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,7 18,13 18,1").style("stroke-width", 2).style("stroke-dasharray", "0"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd-margin").attr("class", "marker extension " + t).attr("refX", 9).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,1 10,13 18,7").style("stroke-width", 2).style("stroke-dasharray", "0");
}, "extension"), d_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart-margin").attr("class", "marker composition " + t).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("viewBox", "0 0 15 15").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd-margin").attr("class", "marker composition " + t).attr("refX", 3.5).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), f_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart-margin").attr("class", "marker aggregation " + t).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd-margin").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), p_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart-margin").attr("class", "marker dependency " + t).attr("refX", 4).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd-margin").attr("class", "marker dependency " + t).attr("refX", 16).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), g_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart-margin").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd-margin").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2);
}, "lollipop"), m_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointEnd-margin").attr("class", "marker " + t).attr("viewBox", "0 0 11.5 14").attr("refX", 11.5).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 10.5).attr("markerHeight", 14).attr("orient", "auto").append("path").attr("d", "M 0 0 L 11.5 7 L 0 14 z").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart-margin").attr("class", "marker " + t).attr("viewBox", "0 0 11.5 14").attr("refX", 1).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11.5).attr("markerHeight", 14).attr("orient", "auto").append("polygon").attr("points", "0,7 11.5,14 11.5,0").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
}, "point"), y_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleEnd-margin").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refY", 5).attr("refX", 12.25).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart-margin").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -2).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
}, "circle"), C_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossEnd-margin").attr("class", "marker cross " + t).attr("viewBox", "0 0 15 15").attr("refX", 17.7).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5), e.append("marker").attr("id", r + "_" + t + "-crossStart-margin").attr("class", "marker cross " + t).attr("viewBox", "0 0 15 15").attr("refX", -3.5).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5).style("stroke-dasharray", "1,0");
}, "cross"), x_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), b_ = /* @__PURE__ */ p((e, t, r) => {
  const i = Ot(), { themeVariables: s } = i, { transitionColor: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd-margin").attr("refX", 17).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z").attr("fill", `${o}`);
}, "barbNeo"), k_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), w_ = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M9,0 L9,18");
  const s = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  s.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), s.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), S_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), T_ = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  const s = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  s.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), s.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), __ = /* @__PURE__ */ p((e, t, r) => {
  const i = Ot(), { themeVariables: s } = i, { strokeWidth: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18").attr("stroke-width", `${o}`), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18").attr("stroke-width", `${o}`);
}, "only_one_neo"), B_ = /* @__PURE__ */ p((e, t, r) => {
  const i = Ot(), { themeVariables: s } = i, { strokeWidth: o, mainBkg: a } = s, n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
  n.append("circle").attr("fill", a ?? "white").attr("cx", 21).attr("cy", 9).attr("stroke-width", `${o}`).attr("r", 6), n.append("path").attr("d", "M9,0 L9,18").attr("stroke-width", `${o}`);
  const l = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
  l.append("circle").attr("fill", a ?? "white").attr("cx", 9).attr("cy", 9).attr("stroke-width", `${o}`).attr("r", 6), l.append("path").attr("d", "M21,0 L21,18").attr("stroke-width", `${o}`);
}, "zero_or_one_neo"), v_ = /* @__PURE__ */ p((e, t, r) => {
  const i = Ot(), { themeVariables: s } = i, { strokeWidth: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27").attr("stroke-width", `${o}`), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18").attr("stroke-width", `${o}`);
}, "one_or_more_neo"), L_ = /* @__PURE__ */ p((e, t, r) => {
  const i = Ot(), { themeVariables: s } = i, { strokeWidth: o, mainBkg: a } = s, n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
  n.append("circle").attr("fill", a ?? "white").attr("cx", 45.5).attr("cy", 18).attr("r", 6).attr("stroke-width", `${o}`), n.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18").attr("stroke-width", `${o}`);
  const l = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
  l.append("circle").attr("fill", a ?? "white").attr("cx", 11).attr("cy", 18).attr("r", 6).attr("stroke-width", `${o}`), l.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18").attr("stroke-width", `${o}`);
}, "zero_or_more_neo"), F_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  );
}, "requirement_arrow"), A_ = /* @__PURE__ */ p((e, t, r) => {
  const i = Ot(), { themeVariables: s } = i, { strokeWidth: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("stroke-width", `${o}`).attr("viewBox", "0 0 25 20").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  ).attr("stroke-linejoin", "miter");
}, "requirement_arrow_neo"), M_ = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
  i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), E_ = /* @__PURE__ */ p((e, t, r) => {
  const i = Ot(), { themeVariables: s } = i, { strokeWidth: o } = s, a = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("g");
  a.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), a.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), a.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10), a.selectAll("*").attr("stroke-width", `${o}`);
}, "requirement_contains_neo"), $_ = {
  extension: u_,
  composition: d_,
  aggregation: f_,
  dependency: p_,
  lollipop: g_,
  point: m_,
  circle: y_,
  cross: C_,
  barb: x_,
  barbNeo: b_,
  only_one: k_,
  zero_or_one: w_,
  one_or_more: S_,
  zero_or_more: T_,
  only_one_neo: __,
  zero_or_one_neo: B_,
  one_or_more_neo: v_,
  zero_or_more_neo: L_,
  requirement_arrow: F_,
  requirement_contains: M_,
  requirement_arrow_neo: A_,
  requirement_contains_neo: E_
}, O_ = c_, D_ = {
  common: bs,
  getConfig: Ot,
  insertCluster: AT,
  insertEdge: h_,
  insertEdgeLabel: r_,
  insertMarkers: O_,
  insertNode: qm,
  interpolateToCurve: Ol,
  labelHelper: dt,
  log: U,
  positionEdgeLabel: i_
}, ys = {}, Ym = /* @__PURE__ */ p((e) => {
  for (const t of e)
    ys[t.name] = t;
}, "registerLayoutLoaders"), I_ = /* @__PURE__ */ p(() => {
  Ym([
    {
      name: "dagre",
      loader: /* @__PURE__ */ p(async () => await import("./dagre-VKFMJZFB-BDSXZOAk.js"), "loader")
    },
    {
      name: "swimlane",
      loader: /* @__PURE__ */ p(async () => await import("./swimlanes-5IMT3BWC-DbByt-An.js"), "loader")
    },
    {
      name: "cose-bilkent",
      loader: /* @__PURE__ */ p(async () => await import("./cose-bilkent-JH36ORCC-BgSd7IZc.js"), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
I_();
var JF = /* @__PURE__ */ p(async (e, t, r) => {
  if (!(e.layoutAlgorithm in ys))
    throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
  if (e.diagramId)
    for (const u of e.nodes) {
      const f = u.domId || u.id;
      u.domId = `${e.diagramId}-${f}`;
    }
  const i = ys[e.layoutAlgorithm], s = await i.loader(), { theme: o, themeVariables: a } = e.config, { useGradient: n, gradientStart: l, gradientStop: h } = a, c = t.attr("id");
  if (t.append("defs").append("filter").attr("id", `${c}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${o != null && o.includes("dark") ? "#FFFFFF" : "#000000"}`), t.append("defs").append("filter").attr("id", `${c}-drop-shadow-small`).attr("height", "150%").attr("width", "150%").append("feDropShadow").attr("dx", "2").attr("dy", "2").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${o != null && o.includes("dark") ? "#FFFFFF" : "#000000"}`), n) {
    const u = t.append("linearGradient").attr("id", t.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
    u.append("svg:stop").attr("offset", "0%").attr("stop-color", l).attr("stop-opacity", 1), u.append("svg:stop").attr("offset", "100%").attr("stop-color", h).attr("stop-opacity", 1);
  }
  return s.render(
    e,
    t,
    D_,
    {
      algorithm: i.algorithm
    },
    r
  );
}, "render"), tA = /* @__PURE__ */ p((e = "", { fallback: t = "dagre" } = {}) => {
  if (e in ys)
    return e;
  if (t in ys)
    return U.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
  throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`);
}, "getRegisteredLayoutAlgorithm"), eh = "comm", Um = "rule", jm = "decl", R_ = "@media", P_ = "@import", N_ = "@supports", q_ = "@namespace", Kn = "@keyframes", Gm = "@layer", W_ = "@scope", z_ = Math.abs, as = String.fromCharCode;
function Xm(e) {
  return e.trim();
}
function Qn(e, t, r) {
  return e.replace(t, r);
}
function ai(e, t) {
  return e.charCodeAt(t) | 0;
}
function vi(e, t, r) {
  return e.slice(t, r);
}
function De(e) {
  return e.length;
}
function Vm(e) {
  return e.length;
}
function Vs(e, t) {
  return t.push(e), e;
}
var oa = 1, Li = 1, Zm = 0, Ce = 0, Nt = 0, Mi = "";
function rh(e, t, r, i, s, o, a, n) {
  return { value: e, root: t, parent: r, type: i, props: s, children: o, line: oa, column: Li, length: a, return: "", siblings: n };
}
function H_() {
  return Nt;
}
function Y_() {
  return Nt = Ce > 0 ? ai(Mi, --Ce) : 0, Li--, Nt === 10 && (Li = 1, oa--), Nt;
}
function Be() {
  return Nt = Ce < Zm ? ai(Mi, Ce++) : 0, Li++, Nt === 10 && (Li = 1, oa++), Nt;
}
function hr() {
  return ai(Mi, Ce);
}
function ho() {
  return Ce;
}
function aa(e, t) {
  return vi(Mi, e, t);
}
function Cs(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function U_(e) {
  return oa = Li = 1, Zm = De(Mi = e), Ce = 0, [];
}
function j_(e) {
  return Mi = "", e;
}
function Ja(e) {
  return Xm(aa(Ce - 1, Jn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function G_(e) {
  for (; (Nt = hr()) && Nt < 33; )
    Be();
  return Cs(e) > 2 || Cs(Nt) > 3 ? "" : " ";
}
function X_(e, t) {
  for (; --t && Be() && !(Nt < 48 || Nt > 102 || Nt > 57 && Nt < 65 || Nt > 70 && Nt < 97); )
    ;
  return aa(e, ho() + (t < 6 && hr() == 32 && Be() == 32));
}
function Jn(e) {
  for (; Be(); )
    switch (Nt) {
      // ] ) " '
      case e:
        return Ce;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Jn(Nt);
        break;
      // (
      case 40:
        e === 41 && Jn(e);
        break;
      // \
      case 92:
        Be();
        break;
    }
  return Ce;
}
function V_(e, t) {
  for (; Be() && e + Nt !== 57; )
    if (e + Nt === 84 && hr() === 47)
      break;
  return "/*" + aa(t, Ce - 1) + "*" + as(e === 47 ? e : Be());
}
function Z_(e) {
  for (; !Cs(hr()); )
    Be();
  return aa(e, Ce);
}
function K_(e) {
  return j_(co("", null, null, null, [""], e = U_(e), 0, [0], e));
}
function co(e, t, r, i, s, o, a, n, l) {
  for (var h = 0, c = 0, u = a, f = 0, d = 0, g = 0, m = 1, y = 1, C = 1, b = 0, k = 0, S = "", T = s, _ = o, v = i, L = S; y; )
    switch (g = k, k = Be()) {
      // (
      case 40:
        g != 108 && ai(L, u - 1) == 58 ? (b++, L += "(") : L += Ja(k);
        break;
      // )
      case 41:
        b--, L += ")";
        break;
      // " ' [
      case 34:
      case 39:
      case 91:
        L += Ja(k);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        if (b > 0) {
          L += as(k);
          break;
        }
        L += G_(g);
        break;
      // \
      case 92:
        L += X_(ho() - 1, 7);
        continue;
      // /
      case 47:
        switch (hr()) {
          case 42:
          case 47:
            Vs(Q_(V_(Be(), ho()), t, r, l), l), (Cs(g || 1) == 5 || Cs(hr() || 1) == 5) && De(L) && vi(L, -1, void 0) !== " " && (L += " ");
            break;
          default:
            L += "/";
        }
        break;
      // {
      case 123 * m:
        n[h++] = De(L) * C;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        if (b > 0 && k) {
          L += as(k);
          break;
        }
        switch (k) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + c:
            C == -1 && (L = Qn(L, /\f/g, "")), d > 0 && (De(L) - u || m === 0) && Vs(d > 32 ? du(L + ";", i, r, u - 1, l) : du(Qn(L, " ", "") + ";", i, r, u - 2, l), l);
            break;
          // @ ;
          case 59:
            L += ";";
          // { rule/at-rule
          default:
            if (Vs(v = uu(L, t, r, h, c, s, n, S, T = [], _ = [], u, o), o), k === 123)
              if (c === 0)
                co(L, t, v, v, T, o, u, n, _);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (ai(L, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (ai(L, 2) === 97) break;
                  default:
                    c = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                c ? co(e, v, v, i && Vs(uu(e, v, v, 0, 0, s, n, S, s, T = [], u, _), _), s, _, u, n, i ? T : _) : co(L, v, v, v, [""], _, 0, n, _);
              }
        }
        h = c = d = 0, m = C = 1, S = L = "", u = a;
        break;
      // :
      case 58:
        u = 1 + De(L), d = g;
      default:
        if (m < 1) {
          if (k == 123)
            --m;
          else if (k == 125 && m++ == 0 && Y_() == 125)
            continue;
        }
        switch (L += as(k), k * m) {
          // &
          case 38:
            C = c > 0 ? 1 : (L += "\f", -1);
            break;
          // ,
          case 44:
            if (b > 0) break;
            n[h++] = (De(L) - 1) * C, C = 1;
            break;
          // @
          case 64:
            hr() === 45 && (L += Ja(Be())), f = hr(), c = u = De(S = L += Z_(ho())), k++;
            break;
          // -
          case 45:
            g === 45 && De(L) == 2 && (m = 0);
        }
    }
  return o;
}
function uu(e, t, r, i, s, o, a, n, l, h, c, u) {
  for (var f = s - 1, d = s === 0 ? o : [""], g = Vm(d), m = 0, y = 0, C = 0; m < i; ++m)
    for (var b = 0, k = vi(e, f + 1, f = z_(y = a[m])), S = e; b < g; ++b)
      (S = Xm(y > 0 ? d[b] + " " + k : Qn(k, /&\f/g, d[b]))) && (l[C++] = S);
  return rh(e, t, r, s === 0 ? Um : n, l, h, c, u);
}
function Q_(e, t, r, i) {
  return rh(e, t, r, eh, as(H_()), vi(e, 2, -2), 0, i);
}
function du(e, t, r, i, s) {
  return rh(e, t, r, jm, vi(e, 0, i), vi(e, i + 1, -1), i, s);
}
function tl(e, t) {
  for (var r = "", i = 0; i < e.length; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function J_(e, t, r, i) {
  switch (e.type) {
    case Gm:
      if (e.children.length) break;
    case P_:
    case q_:
    case jm:
      return e.return = e.return || e.value;
    case eh:
      return "";
    case Kn:
      return e.return = e.value + "{" + tl(e.children, i) + "}";
    case Um:
      if (!De(e.value = e.props.join(","))) return "";
  }
  return De(r = tl(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
}
function tB(e) {
  var t = Vm(e);
  return function(r, i, s, o) {
    for (var a = "", n = 0; n < t; n++)
      a += e[n](r, i, s, o) || "";
    return a;
  };
}
var Km = "c4", eB = /* @__PURE__ */ p((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"), rB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./c4Diagram-LMCZKHZV-BdaR3m9y.js");
  return { id: Km, diagram: e };
}, "loader"), iB = {
  id: Km,
  detector: eB,
  loader: rB
}, sB = iB, Qm = "flowchart", oB = /* @__PURE__ */ p((e, t) => {
  var r, i;
  return ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" || ((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(e);
}, "detector"), aB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-23GEKE2U-BTF75jtD.js");
  return { id: Qm, diagram: e };
}, "loader"), nB = {
  id: Qm,
  detector: oB,
  loader: aB
}, lB = nB, Jm = "flowchart-v2", hB = /* @__PURE__ */ p((e, t) => {
  var r, i, s;
  return ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-d3" ? !1 : (((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && ((s = t == null ? void 0 : t.flowchart) == null ? void 0 : s.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e));
}, "detector"), cB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-23GEKE2U-BTF75jtD.js");
  return { id: Jm, diagram: e };
}, "loader"), uB = {
  id: Jm,
  detector: hB,
  loader: cB
}, dB = uB, ty = "swimlane", fB = /* @__PURE__ */ p((e) => /^\s*swimlane-beta\b/.test(e), "detector"), pB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./swimlanesDiagram-G3AALYLV-DKZMbkgS.js");
  return { id: ty, diagram: e };
}, "loader"), gB = {
  id: ty,
  detector: fB,
  loader: pB
}, mB = gB, ey = "er", yB = /* @__PURE__ */ p((e) => /^\s*erDiagram/.test(e), "detector"), CB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./erDiagram-Q63AITRT-C7azH_OE.js");
  return { id: ey, diagram: e };
}, "loader"), xB = {
  id: ey,
  detector: yB,
  loader: CB
}, bB = xB, ry = "gitGraph", kB = /* @__PURE__ */ p((e) => /^\s*gitGraph/.test(e), "detector"), wB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./gitGraphDiagram-IHSO6WYX-CmCpTrsO.js");
  return { id: ry, diagram: e };
}, "loader"), SB = {
  id: ry,
  detector: kB,
  loader: wB
}, TB = SB, iy = "gantt", _B = /* @__PURE__ */ p((e) => /^\s*gantt/.test(e), "detector"), BB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./ganttDiagram-NO4QXBWP-Doc6r2az.js");
  return { id: iy, diagram: e };
}, "loader"), vB = {
  id: iy,
  detector: _B,
  loader: BB
}, LB = vB, sy = "info", FB = /* @__PURE__ */ p((e) => /^\s*info/.test(e), "detector"), AB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./infoDiagram-FWYZ7A6U-DvDnaDuW.js");
  return { id: sy, diagram: e };
}, "loader"), MB = {
  id: sy,
  detector: FB,
  loader: AB
}, oy = "pie", EB = /* @__PURE__ */ p((e) => /^\s*pie/.test(e), "detector"), $B = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./pieDiagram-ENE6RG2P-u0E5rhus.js");
  return { id: oy, diagram: e };
}, "loader"), OB = {
  id: oy,
  detector: EB,
  loader: $B
}, ay = "quadrantChart", DB = /* @__PURE__ */ p((e) => /^\s*quadrantChart/.test(e), "detector"), IB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./quadrantDiagram-ABIIQ3AL-BpfPXW-u.js");
  return { id: ay, diagram: e };
}, "loader"), RB = {
  id: ay,
  detector: DB,
  loader: IB
}, PB = RB, ny = "xychart", NB = /* @__PURE__ */ p((e) => /^\s*xychart(-beta)?/.test(e), "detector"), qB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./xychartDiagram-FW5EYKEG-B_G0nuPX.js");
  return { id: ny, diagram: e };
}, "loader"), WB = {
  id: ny,
  detector: NB,
  loader: qB
}, zB = WB, ly = "requirement", HB = /* @__PURE__ */ p((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), YB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./requirementDiagram-TGXJPOKE-Dq2MusGb.js");
  return { id: ly, diagram: e };
}, "loader"), UB = {
  id: ly,
  detector: HB,
  loader: YB
}, jB = UB, hy = "sequence", GB = /* @__PURE__ */ p((e) => /^\s*sequenceDiagram/.test(e), "detector"), XB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./sequenceDiagram-DBY2YBRQ-CL5P1PM1.js");
  return { id: hy, diagram: e };
}, "loader"), VB = {
  id: hy,
  detector: GB,
  loader: XB
}, ZB = VB, cy = "class", KB = /* @__PURE__ */ p((e, t) => {
  var r;
  return ((r = t == null ? void 0 : t.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e);
}, "detector"), QB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./classDiagram-OUVF2IWQ-C60tPR66.js");
  return { id: cy, diagram: e };
}, "loader"), JB = {
  id: cy,
  detector: KB,
  loader: QB
}, tv = JB, uy = "classDiagram", ev = /* @__PURE__ */ p((e, t) => {
  var r;
  return /^\s*classDiagram/.test(e) && ((r = t == null ? void 0 : t.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e);
}, "detector"), rv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./classDiagram-v2-EOCWNBFH-C60tPR66.js");
  return { id: uy, diagram: e };
}, "loader"), iv = {
  id: uy,
  detector: ev,
  loader: rv
}, sv = iv, dy = "state", ov = /* @__PURE__ */ p((e, t) => {
  var r;
  return ((r = t == null ? void 0 : t.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e);
}, "detector"), av = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./stateDiagram-2N3HPSRC-C4XHW25g.js");
  return { id: dy, diagram: e };
}, "loader"), nv = {
  id: dy,
  detector: ov,
  loader: av
}, lv = nv, fy = "stateDiagram", hv = /* @__PURE__ */ p((e, t) => {
  var r;
  return !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && ((r = t == null ? void 0 : t.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper");
}, "detector"), cv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./stateDiagram-v2-6OUMAXLB-D2i4B8V1.js");
  return { id: fy, diagram: e };
}, "loader"), uv = {
  id: fy,
  detector: hv,
  loader: cv
}, dv = uv, py = "journey", fv = /* @__PURE__ */ p((e) => /^\s*journey/.test(e), "detector"), pv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./journeyDiagram-5HDEW3XC-BXmwanb2.js");
  return { id: py, diagram: e };
}, "loader"), gv = {
  id: py,
  detector: fv,
  loader: pv
}, mv = gv, yv = /* @__PURE__ */ p((e, t, r) => {
  U.debug(`rendering svg for syntax error
`);
  const i = j1(t), s = i.append("g");
  i.attr("viewBox", "0 0 2412 512"), Yu(i, 100, 512, !0), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), s.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), s.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
}, "draw"), gy = { draw: yv }, Cv = gy, xv = {
  db: {},
  renderer: gy,
  parser: {
    parse: /* @__PURE__ */ p(() => {
    }, "parse")
  }
}, bv = xv, my = "flowchart-elk", kv = /* @__PURE__ */ p((e, t = {}) => {
  var r;
  return (
    // If diagram explicitly states flowchart-elk
    /^\s*flowchart-elk/.test(e) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*(flowchart|graph)/.test(e) && ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? (t.layout = "elk", !0) : !1
  );
}, "detector"), wv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-23GEKE2U-BTF75jtD.js");
  return { id: my, diagram: e };
}, "loader"), Sv = {
  id: my,
  detector: kv,
  loader: wv
}, Tv = Sv, yy = "timeline", _v = /* @__PURE__ */ p((e) => /^\s*timeline/.test(e), "detector"), Bv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./timeline-definition-FHXFAJF6-k9ve4d84.js");
  return { id: yy, diagram: e };
}, "loader"), vv = {
  id: yy,
  detector: _v,
  loader: Bv
}, Lv = vv, Cy = "mindmap", Fv = /* @__PURE__ */ p((e) => /^\s*mindmap/.test(e), "detector"), Av = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./mindmap-definition-LN4V7U3C-2Dx6HJi3.js");
  return { id: Cy, diagram: e };
}, "loader"), Mv = {
  id: Cy,
  detector: Fv,
  loader: Av
}, Ev = Mv, xy = "kanban", $v = /* @__PURE__ */ p((e) => /^\s*kanban/.test(e), "detector"), Ov = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./kanban-definition-HUTT4EX6-B0dXIFOR.js");
  return { id: xy, diagram: e };
}, "loader"), Dv = {
  id: xy,
  detector: $v,
  loader: Ov
}, Iv = Dv, by = "sankey", Rv = /* @__PURE__ */ p((e) => /^\s*sankey(-beta)?/.test(e), "detector"), Pv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./sankeyDiagram-HTMAVEWB-DC14aurv.js");
  return { id: by, diagram: e };
}, "loader"), Nv = {
  id: by,
  detector: Rv,
  loader: Pv
}, qv = Nv, ky = "packet", Wv = /* @__PURE__ */ p((e) => /^\s*packet(-beta)?/.test(e), "detector"), zv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-NH7WQ7WH-DiwywPg5.js");
  return { id: ky, diagram: e };
}, "loader"), Hv = {
  id: ky,
  detector: Wv,
  loader: zv
}, wy = "radar", Yv = /* @__PURE__ */ p((e) => /^\s*radar-beta/.test(e), "detector"), Uv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-WEI45ONY-Bch0Fp7m.js");
  return { id: wy, diagram: e };
}, "loader"), jv = {
  id: wy,
  detector: Yv,
  loader: Uv
}, Sy = "block", Gv = /* @__PURE__ */ p((e) => /^\s*block(-beta)?/.test(e), "detector"), Xv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./blockDiagram-677ZJIJ3-7yC_ime0.js");
  return { id: Sy, diagram: e };
}, "loader"), Vv = {
  id: Sy,
  detector: Gv,
  loader: Xv
}, Zv = Vv, Ty = "treeView", Kv = /* @__PURE__ */ p((e) => /^\s*treeView-beta/.test(e), "detector"), Qv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-OA4YK3LP-BRMBrQte.js");
  return { id: Ty, diagram: e };
}, "loader"), Jv = {
  id: Ty,
  detector: Kv,
  loader: Qv
}, tL = Jv, _y = "architecture", eL = /* @__PURE__ */ p((e) => /^\s*architecture/.test(e), "detector"), rL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./architectureDiagram-ZJ3FMSHR-C6xt__L8.js");
  return { id: _y, diagram: e };
}, "loader"), iL = {
  id: _y,
  detector: eL,
  loader: rL
}, sL = iL, By = "eventmodeling", oL = /* @__PURE__ */ p((e) => /^\s*eventmodeling/.test(e), "detector"), aL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-FQU43EPY-BPiUUUMq.js");
  return { id: By, diagram: e };
}, "loader"), nL = {
  id: By,
  detector: oL,
  loader: aL
}, lL = nL, vy = "ishikawa", hL = /* @__PURE__ */ p((e) => /^\s*ishikawa(-beta)?\b/i.test(e), "detector"), cL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./ishikawaDiagram-FXEZZL3T-C2Z41yDS.js");
  return { id: vy, diagram: e };
}, "loader"), uL = {
  id: vy,
  detector: hL,
  loader: cL
}, Ly = "venn", dL = /* @__PURE__ */ p((e) => /^\s*venn-beta/.test(e), "detector"), fL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./vennDiagram-L72KCM5P-CofEaUIu.js");
  return { id: Ly, diagram: e };
}, "loader"), pL = {
  id: Ly,
  detector: dL,
  loader: fL
}, gL = pL, Fy = "treemap", mL = /* @__PURE__ */ p((e) => /^\s*treemap/.test(e), "detector"), yL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-G47NLZAW-B0FwNsVn.js");
  return { id: Fy, diagram: e };
}, "loader"), CL = {
  id: Fy,
  detector: mL,
  loader: yL
}, Ay = "wardley", xL = /* @__PURE__ */ p((e) => /^\s*wardley-beta/i.test(e), "detector"), bL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./wardleyDiagram-EHGQE667-Cts5DwBD.js");
  return { id: Ay, diagram: e };
}, "loader"), kL = {
  id: Ay,
  detector: xL,
  loader: bL
}, wL = kL, My = "cynefin", SL = /* @__PURE__ */ p((e) => /^\s*cynefin-beta(?:[\s:]|$)/.test(e), "detector"), TL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./cynefinDiagram-TSTJHNR4-DsGU4PrX.js");
  return { id: My, diagram: e };
}, "loader"), _L = {
  id: My,
  detector: SL,
  loader: TL
}, Ey = "railroad", BL = /* @__PURE__ */ p((e) => /^\s*railroad-beta/i.test(e), "detector"), vL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./railroadDiagram-RFXS5EU6-9BLg3qGr.js");
  return { id: Ey, diagram: e };
}, "loader"), LL = {
  id: Ey,
  detector: BL,
  loader: vL
}, $y = "railroadEbnf", FL = /* @__PURE__ */ p((e) => /^\s*railroad-ebnf-beta/i.test(e), "detector"), AL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./ebnfDiagram-CCIWWBDH-YYmtfi99.js");
  return { id: $y, diagram: e };
}, "loader"), ML = {
  id: $y,
  detector: FL,
  loader: AL
}, Oy = "railroadAbnf", EL = /* @__PURE__ */ p((e) => /^\s*railroad-abnf-beta/i.test(e), "detector"), $L = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./abnfDiagram-VRR7QNED-5vNurhcC.js");
  return { id: Oy, diagram: e };
}, "loader"), OL = {
  id: Oy,
  detector: EL,
  loader: $L
}, Dy = "railroadPeg", DL = /* @__PURE__ */ p((e) => /^\s*railroad-peg-beta/i.test(e), "detector"), IL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./pegDiagram-2B236MQR-DgTxylMm.js");
  return { id: Dy, diagram: e };
}, "loader"), RL = {
  id: Dy,
  detector: DL,
  loader: IL
}, fu = !1, na = /* @__PURE__ */ p(() => {
  fu || (fu = !0, mo("error", bv, (e) => e.toLowerCase().trim() === "error"), mo(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: /* @__PURE__ */ p(() => {
        }, "clear")
      },
      styles: {},
      // should never be used
      renderer: {
        draw: /* @__PURE__ */ p(() => {
        }, "draw")
      },
      parser: {
        parse: /* @__PURE__ */ p(() => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }, "parse")
      },
      init: /* @__PURE__ */ p(() => null, "init")
      // no op
    },
    (e) => e.toLowerCase().trimStart().startsWith("---")
  ), an(Tv, Ev, sL), an(
    sB,
    Iv,
    sv,
    tv,
    bB,
    LB,
    MB,
    OB,
    jB,
    ZB,
    mB,
    dB,
    lB,
    Lv,
    TB,
    dv,
    lv,
    mv,
    PB,
    qv,
    Hv,
    zB,
    Zv,
    lL,
    tL,
    jv,
    uL,
    CL,
    LL,
    ML,
    OL,
    RL,
    gL,
    wL,
    _L
  ));
}, "addDiagrams"), PL = /* @__PURE__ */ p(async () => {
  U.debug("Loading registered diagrams");
  const t = (await Promise.allSettled(
    Object.entries($r).map(async ([r, { detector: i, loader: s }]) => {
      if (s)
        try {
          cn(r);
        } catch {
          try {
            const { diagram: o, id: a } = await s();
            mo(a, o, i);
          } catch (o) {
            throw U.error(`Failed to load external diagram with key ${r}. Removing from detectors.`), delete $r[r], o;
          }
        }
    })
  )).filter((r) => r.status === "rejected");
  if (t.length > 0) {
    U.error(`Failed to load ${t.length} external diagrams`);
    for (const r of t)
      U.error(r);
    throw new Error(`Failed to load ${t.length} external diagrams`);
  }
}, "loadRegisteredDiagrams"), NL = "graphics-document document";
function Iy(e, t) {
  e.attr("role", NL), t !== "" && e.attr("aria-roledescription", t);
}
p(Iy, "setA11yDiagramInfo");
function Ry(e, t, r, i) {
  if (e.insert !== void 0) {
    if (r) {
      const s = `chart-desc-${i}`;
      e.attr("aria-describedby", s), e.insert("desc", ":first-child").attr("id", s).text(r);
    }
    if (t) {
      const s = `chart-title-${i}`;
      e.attr("aria-labelledby", s), e.insert("title", ":first-child").attr("id", s).text(t);
    }
  }
}
p(Ry, "addSVGa11yTitleDescription");
var Mr, el = (Mr = class {
  constructor(t, r, i, s, o) {
    this.type = t, this.text = r, this.db = i, this.parser = s, this.renderer = o;
  }
  static async fromText(t, r = {}) {
    var h, c;
    const i = Ot(), s = sl(t, i);
    t = Qw(t) + `
`;
    try {
      cn(s);
    } catch {
      const u = qC(s);
      if (!u)
        throw new Pu(`Diagram ${s} not found.`);
      const { id: f, diagram: d } = await u();
      mo(f, d);
    }
    const { db: o, parser: a, renderer: n, init: l } = cn(s);
    return a.parser && (a.parser.yy = o), (h = o.clear) == null || h.call(o), l == null || l(i), r.title && ((c = o.setDiagramTitle) == null || c.call(o, r.title)), await a.parse(t), new Mr(s, t, o, a, n);
  }
  async render(t, r) {
    await this.renderer.draw(this.text, t, r, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}, p(Mr, "Diagram"), Mr), pu = [], qL = /* @__PURE__ */ p(() => {
  pu.forEach((e) => {
    e();
  }), pu = [];
}, "attachFunctions"), WL = /* @__PURE__ */ p((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function Py(e) {
  const t = e.match(Ru);
  if (!t)
    return {
      text: e,
      metadata: {}
    };
  const r = t[1], i = r ? t[2].split(`
`).map((a) => a.startsWith(r) ? a.slice(r.length) : a).join(`
`) : t[2];
  let s = J2(i, {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: Q2
  }) ?? {};
  s = typeof s == "object" && !Array.isArray(s) ? s : {};
  const o = {};
  return s.displayMode && (o.displayMode = s.displayMode.toString()), s.title && (o.title = s.title.toString()), s.config && (o.config = s.config), {
    text: e.slice(t[0].length),
    metadata: o
  };
}
p(Py, "extractFrontMatter");
var zL = /* @__PURE__ */ p((e) => e.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (t, r, i) => "<" + r + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), "cleanupText"), HL = /* @__PURE__ */ p((e) => {
  const { text: t, metadata: r } = Py(e), { displayMode: i, title: s, config: o = {} } = r;
  return i && (o.gantt || (o.gantt = {}), o.gantt.displayMode = i), { title: s, config: o, text: t };
}, "processFrontmatter"), YL = /* @__PURE__ */ p((e) => {
  const t = Te.detectInit(e) ?? {}, r = Te.detectDirective(e, "wrap");
  return Array.isArray(r) ? t.wrap = r.some(({ type: i }) => i === "wrap") : (r == null ? void 0 : r.type) === "wrap" && (t.wrap = !0), {
    text: Nw(e),
    directive: t
  };
}, "processDirectives");
function ih(e) {
  const t = zL(e), r = HL(t), i = YL(r.text), s = Nl(r.config, i.directive);
  return e = WL(i.text), {
    code: e,
    title: r.title,
    config: s
  };
}
p(ih, "preprocessDiagram");
function Ny(e) {
  const t = new TextEncoder().encode(e), r = Array.from(t, (i) => String.fromCodePoint(i)).join("");
  return btoa(r);
}
p(Ny, "toBase64");
var UL = 5e4, jL = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", GL = "sandbox", XL = "loose", VL = "http://www.w3.org/2000/svg", ZL = "http://www.w3.org/1999/xlink", KL = "http://www.w3.org/1999/xhtml", QL = "100%", JL = "100%", tF = "border:0;margin:0;", eF = "margin:0", rF = "allow-top-navigation-by-user-activation allow-popups", iF = 'The "iframe" tag is not supported by your browser.', sF = ["foreignobject"], oF = ["dominant-baseline"];
function sh(e) {
  const t = ih(e);
  return po(), RC(t.config ?? {}), t;
}
p(sh, "processAndSetConfigs");
async function qy(e, t) {
  na();
  try {
    const { code: r, config: i } = sh(e);
    return { diagramType: (await zy(r)).type, config: i };
  } catch (r) {
    if (t != null && t.suppressErrors)
      return !1;
    throw r;
  }
}
p(qy, "parse");
var gu = /* @__PURE__ */ p((e, t, r = []) => {
  const i = Mu(`{ ${r.join(" !important; ")} !important; }`);
  return `.${e} ${t} ${i}`;
}, "cssImportantStyles"), aF = /* @__PURE__ */ p((e, t = /* @__PURE__ */ new Map()) => {
  const r = new CSSStyleSheet();
  if (e.fontFamily !== void 0 && r.insertRule(
    `:root { --mermaid-font-family: ${e.fontFamily}}`,
    r.cssRules.length
  ), e.altFontFamily !== void 0 && r.insertRule(
    `:root { --mermaid-alt-font-family: ${e.altFontFamily}}`,
    r.cssRules.length
  ), t instanceof Map) {
    const n = se(e) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    t.forEach((l) => {
      Lc(l.styles) || n.forEach((h) => {
        r.insertRule(
          gu(l.id, h, l.styles),
          r.cssRules.length
        );
      }), Lc(l.textStyles) || r.insertRule(
        gu(
          l.id,
          "tspan",
          ((l == null ? void 0 : l.textStyles) || []).map((h) => h.replace("color", "fill"))
        ),
        r.cssRules.length
      );
    });
  }
  let i = "";
  if (e.themeCSS !== void 0)
    if (typeof r.replaceSync == "function") {
      const s = new CSSStyleSheet();
      s.replaceSync(e.themeCSS), i = hn(s) + `
`;
    } else
      i += `${e.themeCSS}
`;
  return i + hn(r);
}, "createCssStyles"), nF = /* @__PURE__ */ p((e, t) => tl(
  K_(`${e}{${t}}`),
  tB([
    /* @__PURE__ */ p(function(i, s, o, a) {
      if (i.type === "rule" && Array.isArray(i.props)) {
        if (i.parent && i.parent.type === Kn)
          return;
        i.props = i.props.map((n) => n.startsWith(e) ? n : `${e} ${n}`);
      } else i.type.startsWith("@") && ([
        ...[
          R_,
          N_,
          Gm,
          W_,
          "@container",
          "@starting-style"
        ],
        Kn
        // needed for Mermaid's animation feature
      ].includes(i.type) || (U.warn(`Removing unsupported at-rule ${i.type} from CSS`), i.type = eh));
    }, "addNamespace"),
    J_
  ])
), "compileCSS"), lF = /* @__PURE__ */ p((e, t, r, i) => {
  const s = aF(e, r), o = sx(
    t,
    s,
    { ...e.themeVariables, theme: e.theme, look: e.look },
    i
  );
  return nF(i, o);
}, "createUserStyles"), hF = /* @__PURE__ */ p((e = "", t, r) => {
  let i = e;
  return !r && !t && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = Ir(i), i = i.replace(/<br>/g, "<br/>"), i;
}, "cleanUpSvgCode"), cF = /* @__PURE__ */ p((e = "", t) => {
  var s, o;
  const r = (o = (s = t == null ? void 0 : t.viewBox) == null ? void 0 : s.baseVal) != null && o.height ? t.viewBox.baseVal.height + "px" : JL, i = Ny(`<body style="${eF}">${e}</body>`);
  return `<iframe style="width:${QL};height:${r};${tF}" src="data:text/html;charset=UTF-8;base64,${i}" sandbox="${rF}">
  ${iF}
</iframe>`;
}, "putIntoIFrame"), mu = /* @__PURE__ */ p((e, t, r, i, s) => {
  const o = e.append("div");
  o.attr("id", r), i && o.attr("style", i);
  const a = o.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", VL);
  return s && a.attr("xmlns:xlink", s), a.append("g"), e;
}, "appendDivSvgG");
function rl(e, t) {
  return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
p(rl, "sandboxedIframe");
var uF = /* @__PURE__ */ p((e, t, r, i) => {
  var s, o, a;
  (s = e.getElementById(t)) == null || s.remove(), (o = e.getElementById(r)) == null || o.remove(), (a = e.getElementById(i)) == null || a.remove();
}, "removeExistingElements"), dF = /* @__PURE__ */ p(async function(e, t, r) {
  var X, W, D, E, F, O;
  na();
  const i = sh(t);
  t = i.code;
  const s = Ot();
  U.debug(s), t.length > ((s == null ? void 0 : s.maxTextSize) ?? UL) && (t = jL);
  const o = `#${e}`, a = "i" + e, n = "#" + a, l = "d" + e, h = "#" + l, c = /* @__PURE__ */ p(() => {
    const q = Ct(f ? n : h).node();
    q && "remove" in q && q.remove();
  }, "removeTempElements");
  let u = Ct(document.body);
  const f = s.securityLevel === GL, d = s.securityLevel === XL, g = s.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), f) {
      const $ = rl(Ct(r), a);
      u = Ct($.nodes()[0].contentDocument.body), u.node().style.margin = "0";
    } else
      u = Ct(r);
    mu(u, e, l, `font-family: ${g}`, ZL);
  } else {
    if (uF(document, e, l, a), f) {
      const $ = rl(Ct(document.body), a);
      u = Ct($.nodes()[0].contentDocument.body), u.node().style.margin = "0";
    } else
      u = Ct("body");
    mu(u, e, l);
  }
  let m, y;
  try {
    m = await el.fromText(t, { title: i.title });
  } catch ($) {
    if (s.suppressErrorRendering)
      throw c(), $;
    m = await el.fromText("error"), y = $;
  }
  const C = u.select(h).node(), b = m.type, k = C.firstChild, S = k.firstChild, T = (W = (X = m.renderer).getClasses) == null ? void 0 : W.call(X, t, m), _ = lF(s, b, T, o), v = document.createElement("style");
  v.innerHTML = _, k.insertBefore(v, S);
  try {
    await m.renderer.draw(t, e, "11.16.0", m);
  } catch ($) {
    throw s.suppressErrorRendering ? c() : Cv.draw(t, e, "11.16.0"), $;
  }
  const L = u.select(`${h} svg`), z = (E = (D = m.db).getAccTitle) == null ? void 0 : E.call(D), N = (O = (F = m.db).getAccDescription) == null ? void 0 : O.call(F);
  Hy(b, L, z, N), u.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", KL);
  let M = u.select(h).node().innerHTML;
  if (U.debug("config.arrowMarkerAbsolute", s.arrowMarkerAbsolute), M = hF(M, f, We(s.arrowMarkerAbsolute)), f) {
    const $ = u.select(h + " svg").node();
    M = cF(M, $);
  } else d || (M = ki.sanitize(M, {
    ADD_TAGS: sF,
    ADD_ATTR: oF,
    HTML_INTEGRATION_POINTS: { foreignobject: !0 }
  }));
  if (qL(), y)
    throw y;
  return c(), {
    diagramType: b,
    svg: M,
    bindFunctions: m.db.bindFunctions
  };
}, "render");
function Wy(e = {}) {
  var i;
  const t = zt({}, e);
  t != null && t.fontFamily && !((i = t.themeVariables) != null && i.fontFamily) && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), DC(t), t != null && t.theme && t.theme in Ke ? t.themeVariables = Ke[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = Ke.default.getThemeVariables(t.themeVariables));
  const r = typeof t == "object" ? OC(t) : Eu();
  il(r.logLevel), na();
}
p(Wy, "initialize");
var zy = /* @__PURE__ */ p((e, t = {}) => {
  const { code: r } = ih(e);
  return el.fromText(r, t);
}, "getDiagramFromText");
function Hy(e, t, r, i) {
  Iy(t, e), Ry(t, r, i, t.attr("id"));
}
p(Hy, "addA11yInfo");
var Pr = Object.freeze({
  render: dF,
  parse: qy,
  getDiagramFromText: zy,
  initialize: Wy,
  getConfig: Ot,
  setConfig: $u,
  getSiteConfig: Eu,
  updateSiteConfig: IC,
  reset: /* @__PURE__ */ p(() => {
    po();
  }, "reset"),
  globalReset: /* @__PURE__ */ p(() => {
    po(wi);
  }, "globalReset"),
  defaultConfig: wi
});
il(Ot().logLevel);
po(Ot());
var fF = /* @__PURE__ */ p((e, t, r) => {
  U.warn(e), Pl(e) ? (r && r(e.str, e.hash), t.push({ ...e, message: e.str, error: e })) : (r && r(e), e instanceof Error && t.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
}, "handleError"), Yy = /* @__PURE__ */ p(async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await pF(e);
  } catch (t) {
    if (Pl(t) && U.error(t.str), pe.parseError && pe.parseError(t), !e.suppressErrors)
      throw U.error("Use the suppressErrors option to suppress these errors"), t;
  }
}, "run"), pF = /* @__PURE__ */ p(async function({ postRenderCallback: e, querySelector: t, nodes: r } = {
  querySelector: ".mermaid"
}) {
  const i = Pr.getConfig();
  U.debug(`${e ? "" : "No "}Callback function found`);
  let s;
  if (r)
    s = r;
  else if (t)
    s = document.querySelectorAll(t);
  else
    throw new Error("Nodes and querySelector are both undefined");
  U.debug(`Found ${s.length} diagrams`), (i == null ? void 0 : i.startOnLoad) !== void 0 && (U.debug("Start On Load: " + (i == null ? void 0 : i.startOnLoad)), Pr.updateSiteConfig({ startOnLoad: i == null ? void 0 : i.startOnLoad }));
  const o = new Te.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
  let a;
  const n = [];
  for (const l of Array.from(s)) {
    if (U.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const h = `mermaid-${o.next()}`;
    a = l.innerHTML, a = tg(Te.entityDecode(a)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const c = Te.detectInit(a);
    c && U.debug("Detected early reinit: ", c);
    try {
      const { svg: u, bindFunctions: f } = await Xy(h, a, l);
      l.innerHTML = u, e && await e(h), f && f(l);
    } catch (u) {
      fF(u, n, pe.parseError);
    }
  }
  if (n.length > 0)
    throw n[0];
}, "runThrowsErrors"), Uy = /* @__PURE__ */ p(function(e) {
  Pr.initialize(e);
}, "initialize"), gF = /* @__PURE__ */ p(async function(e, t, r) {
  U.warn("mermaid.init is deprecated. Please use run instead."), e && Uy(e);
  const i = { postRenderCallback: r, querySelector: ".mermaid" };
  typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await Yy(i);
}, "init"), mF = /* @__PURE__ */ p(async (e, {
  lazyLoad: t = !0
} = {}) => {
  na(), an(...e), t === !1 && await PL();
}, "registerExternalDiagrams"), jy = /* @__PURE__ */ p(function() {
  if (pe.startOnLoad) {
    const { startOnLoad: e } = Pr.getConfig();
    e && pe.run().catch((t) => U.error("Mermaid failed to initialize", t));
  }
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", jy, !1);
var yF = /* @__PURE__ */ p(function(e) {
  pe.parseError = e;
}, "setParseErrorHandler"), zo = [], tn = !1, Gy = /* @__PURE__ */ p(async () => {
  if (!tn) {
    for (tn = !0; zo.length > 0; ) {
      const e = zo.shift();
      if (e)
        try {
          await e();
        } catch (t) {
          U.error("Error executing queue", t);
        }
    }
    tn = !1;
  }
}, "executeQueue"), CF = /* @__PURE__ */ p(async (e, t) => new Promise((r, i) => {
  const s = /* @__PURE__ */ p(() => new Promise((o, a) => {
    Pr.parse(e, t).then(
      (n) => {
        o(n), r(n);
      },
      (n) => {
        var l;
        U.error("Error parsing", n), (l = pe.parseError) == null || l.call(pe, n), a(n), i(n);
      }
    );
  }), "performCall");
  zo.push(s), Gy().catch(i);
}), "parse"), Xy = /* @__PURE__ */ p((e, t, r) => new Promise((i, s) => {
  const o = /* @__PURE__ */ p(() => new Promise((a, n) => {
    Pr.render(e, t, r).then(
      (l) => {
        a(l), i(l);
      },
      (l) => {
        var h;
        U.error("Error parsing", l), (h = pe.parseError) == null || h.call(pe, l), n(l), s(l);
      }
    );
  }), "performCall");
  zo.push(o), Gy().catch(s);
}), "render"), xF = /* @__PURE__ */ p(() => Object.keys($r).map((e) => ({
  id: e
})), "getRegisteredDiagramsMetadata"), pe = {
  startOnLoad: !0,
  mermaidAPI: Pr,
  parse: CF,
  render: Xy,
  init: gF,
  run: Yy,
  registerExternalDiagrams: mF,
  registerLayoutLoaders: Ym,
  initialize: Uy,
  parseError: void 0,
  contentLoaded: jy,
  setParseErrorHandler: yF,
  detectType: sl,
  registerIconPacks: xS,
  getRegisteredDiagramsMetadata: xF
}, yu = pe;
/*! Check if previously processed */
/*!
 * Wait for document loaded before starting the execution
 */
const bF = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [i, s] of t)
    r[i] = s;
  return r;
};
let kF = 0, en = Promise.resolve();
const wF = y0({
  name: "WBMermaid",
  inheritAttrs: !1,
  emits: ["load", "rendered", "ready", "error"],
  props: {
    src: { type: [String, Object], required: !0 },
    config: { type: Object, default: () => ({}) },
    fetchOptions: { type: Object, default: () => ({}) },
    fetchTimeout: { type: Number, default: null },
    ariaLabel: { type: String, default: "Mermaid diagram" },
    title: { type: String, default: null },
    description: { type: String, default: null },
    wbcObj: { type: Object, default: () => ({}) },
    asWbc: { type: Object, default: () => ({}) }
  },
  data: () => ({
    svg: "",
    loading: !1,
    lastError: null
  }),
  created() {
    this._renderGeneration = 0, this._abortController = null, this._hasEmittedReady = !1, this._nodeRendererHosts = [], this._resolvedWBCComponent = null;
  },
  async mounted() {
    this.initMermaid();
  },
  beforeUnmount() {
    var e;
    this._renderGeneration += 1, (e = this._abortController) == null || e.abort(), this._abortController = null, this.clearNodeRenderers();
  },
  watch: {
    src: "renderDiagram",
    config: { handler: "renderDiagram", deep: !0 },
    asWbc: { handler: "renderDiagram", deep: !0 }
  },
  methods: {
    initMermaid() {
      this.renderDiagram();
    },
    async renderDiagram() {
      var o;
      if (typeof document > "u") return;
      const e = ++this._renderGeneration;
      (o = this._abortController) == null || o.abort(), this._abortController = null, this.loading = !0, this.lastError = null, this.clearNodeRenderers();
      let t;
      try {
        t = await this.resolveSrcToString(this.src);
      } catch (a) {
        if (this._renderGeneration !== e) return;
        this.showError(a, "source"), this.loading = !1;
        return;
      }
      if (!t || typeof t != "string") {
        this._renderGeneration === e && (this.svg = "", this.loading = !1);
        return;
      }
      if (this._renderGeneration !== e || (this.$emit("load", { source: this.src, code: t }), this.svg = '<div class="text-center pa-4 grey--text">Rendering Diagram...</div>', await Aa(), this._renderGeneration !== e)) return;
      let r;
      const i = new Promise((a) => {
        r = a;
      }), s = en;
      en = en.then(() => i), await s;
      try {
        if (this._renderGeneration !== e) return;
        const a = `mermaid-${++kF}`, n = this.$wbcMermaidOptions || {};
        yu.initialize({
          securityLevel: "strict",
          ...n.config || {},
          ...this.config,
          startOnLoad: !1
        });
        const { svg: l } = await yu.render(a, t);
        if (this._renderGeneration !== e || (this.svg = l, this.loading = !1, await Aa(), await Aa(), this._renderGeneration !== e)) return;
        this.mountNodeRenderers();
        const h = { id: a, svg: l, source: this.src, code: t };
        this.$emit("rendered", h), this._hasEmittedReady || (this._hasEmittedReady = !0, this.$emit("ready", h));
      } catch (a) {
        if (this._renderGeneration !== e) return;
        this.showError(a, "render");
      } finally {
        r();
      }
    },
    clearNodeRenderers() {
      for (const e of this._nodeRendererHosts || [])
        try {
          Eh(null, e);
        } catch {
        }
      this._nodeRendererHosts = [];
    },
    normalizeNodeRenderer(e) {
      return e && typeof e == "object" && !Array.isArray(e) && Object.prototype.hasOwnProperty.call(e, "item") ? {
        item: e.item,
        width: e.width,
        height: e.height,
        selector: e.selector,
        targets: e.targets || "all",
        class: e.class
      } : { item: e, targets: "all" };
    },
    findNodeRendererTargets(e, t, r) {
      if (r.selector)
        try {
          return [...e.querySelectorAll(r.selector)];
        } catch (h) {
          return console.warn(`[WBMermaid] Invalid asWbc selector for "${t}":`, h), [];
        }
      const i = String(t), s = `-flowchart-${i}-`, o = [...e.querySelectorAll("g.node")].filter((h) => {
        var c;
        return (c = h.id) == null ? void 0 : c.includes(s);
      }), a = [...e.querySelectorAll("rect.actor[name]")].filter((h) => h.getAttribute("name") === i), n = i.replace(/\\/g, "\\\\").replace(/"/g, '\\"'), l = [...e.querySelectorAll(`g[data-id="${n}"]`)].filter((h) => h.querySelector("foreignObject, text.actor, rect.actor")).filter((h) => {
        const c = h.querySelector(":scope > rect.actor");
        return !c || !a.includes(c);
      });
      return [.../* @__PURE__ */ new Set([...o, ...a, ...l])];
    },
    findActorText(e) {
      const t = e.parentElement;
      if (!t) return null;
      const r = Number(e.getAttribute("x") || 0) + Number(e.getAttribute("width") || 0) / 2, i = Number(e.getAttribute("y") || 0) + Number(e.getAttribute("height") || 0) / 2;
      return [...t.querySelectorAll(":scope > text.actor")].find((s) => Math.abs(Number(s.getAttribute("x") || 0) - r) < 1 && Math.abs(Number(s.getAttribute("y") || 0) - i) < 1) || t.querySelector(":scope > text.actor");
    },
    createNodeRendererHost(e, t, r) {
      var c, u, f, d;
      const i = "http://www.w3.org/2000/svg";
      let s, o, a = 0, n = 0;
      const l = (c = e.matches) != null && c.call(e, "rect.actor") ? e : (u = e.querySelector) == null ? void 0 : u.call(e, ":scope > rect.actor");
      if (l) {
        const g = l.parentElement;
        if (!g) return null;
        const m = Number(l.getAttribute("width") || 150), y = Number(l.getAttribute("height") || 65), C = Number(t.width) || m, b = Number(t.height) || y, k = Number(l.getAttribute("x") || 0) + m / 2, S = Number(l.getAttribute("y") || 0) + y / 2;
        l.setAttribute("x", String(k - C / 2)), l.setAttribute("y", String(S - b / 2)), l.setAttribute("width", String(C)), l.setAttribute("height", String(b)), l.setAttribute("data-wb-mermaid-node-renderer", String(r));
        const T = this.findActorText(l);
        T && (T.style.display = "none"), s = document.createElementNS(i, "foreignObject"), s.setAttribute("x", String(k - C / 2)), s.setAttribute("y", String(S - b / 2)), s.setAttribute("width", String(C)), s.setAttribute("height", String(b)), s.setAttribute("data-wb-mermaid-node-host", String(r)), g.appendChild(s), o = s, a = C, n = b;
      } else {
        const g = (f = e.querySelector) == null ? void 0 : f.call(e, ".label foreignObject, foreignObject");
        if (!g) return null;
        s = g;
        const m = Number(s.getAttribute("width") || 0), y = Number(s.getAttribute("height") || 0), C = Number(t.width) || m || 120, b = Number(t.height) || y || 40;
        s.setAttribute("x", String((m - C) / 2)), s.setAttribute("y", String((y - b) / 2)), s.setAttribute("width", String(C)), s.setAttribute("height", String(b)), s.setAttribute("data-wb-mermaid-node-host", String(r));
        const k = (d = e.querySelector) == null ? void 0 : d.call(e, ":scope > .label-container");
        if (k && k.tagName.toLowerCase() === "rect") {
          const T = Math.max(Number(k.getAttribute("width") || 0), C + 60), _ = Math.max(Number(k.getAttribute("height") || 0), b + 30);
          k.setAttribute("x", String(-T / 2)), k.setAttribute("y", String(-_ / 2)), k.setAttribute("width", String(T)), k.setAttribute("height", String(_));
        }
        const S = s.firstElementChild;
        S && S.replaceChildren(), o = S || s, a = C, n = b;
      }
      const h = document.createElement("div");
      return h.className = ["wb-mermaid-node-renderer", t.class].filter(Boolean).join(" "), h.dataset.nodeId = String(r), Object.assign(h.style, {
        width: `${a}px`,
        height: `${n}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        overflow: "hidden"
      }), o.appendChild(h), h;
    },
    mountNodeRenderers() {
      var s, o, a, n, l;
      const e = Object.entries(this.asWbc || {});
      if (!e.length) return;
      const t = this._resolvedWBCComponent;
      if (!t) {
        console.warn("[WBMermaid] asWbc requires a registered WBC component. Original Mermaid labels were preserved.");
        return;
      }
      const r = (o = (s = this.$el) == null ? void 0 : s.matches) != null && o.call(s, ".mermaid-container") ? this.$el : (n = (a = this.$el) == null ? void 0 : a.querySelector) == null ? void 0 : n.call(a, ".mermaid-container"), i = (l = r == null ? void 0 : r.querySelector) == null ? void 0 : l.call(r, "svg");
      if (i)
        for (const [h, c] of e) {
          const u = this.normalizeNodeRenderer(c);
          let f = this.findNodeRendererTargets(i, h, u);
          if (u.targets === "first" && (f = f.slice(0, 1)), !f.length) {
            console.warn(`[WBMermaid] asWbc could not find node "${h}". Use a stable Mermaid ID or provide selector.`);
            continue;
          }
          for (const d of f) {
            const g = this.createNodeRendererHost(d, u, h);
            if (!g) continue;
            const m = Fa(t, { item: u.item });
            m.appContext = this.$.appContext, Eh(m, g), this._nodeRendererHosts.push(g);
          }
        }
    },
    async resolveSrcToString(e) {
      if (!e) return "";
      if (typeof e == "string") {
        const t = e.trim();
        return t.startsWith("http") || t.startsWith("./") || t.startsWith("../") || t.startsWith("/") ? await this.fetchContent(t) : t;
      }
      return typeof e == "object" ? this.transformObjectToMermaid(e) : "";
    },
    async fetchContent(e) {
      var t, r;
      if ((t = this.$wbcMermaidOptions) != null && t.context)
        try {
          const i = this.$wbcMermaidOptions.context;
          let s = e;
          if (!s.startsWith("./") && !s.startsWith("../") && (s = "./" + s), i.keys().includes(s)) {
            const o = i(s), a = o.default || o;
            return typeof a == "object" ? this.transformObjectToMermaid(a) : a;
          }
        } catch {
        }
      try {
        const i = typeof AbortController < "u" ? new AbortController() : null;
        this._abortController = i;
        const s = this.fetchTimeout ?? ((r = this.$wbcMermaidOptions) == null ? void 0 : r.fetchTimeout) ?? 1e4, o = i && s > 0 ? setTimeout(() => i.abort(), s) : null;
        try {
          const a = await fetch(e, {
            ...this.fetchOptions,
            ...i ? { signal: i.signal } : {}
          });
          if (o && clearTimeout(o), !a.ok) throw new Error(a.statusText);
          const n = await a.text();
          try {
            const l = JSON.parse(n);
            return this.transformObjectToMermaid(l);
          } catch {
            return n;
          }
        } catch (a) {
          if (o && clearTimeout(o), a.name === "AbortError") {
            const n = s > 0 ? `Fetch timed out after ${s}ms: ${e}` : `Fetch cancelled: ${e}`;
            throw new Error(n, { cause: a });
          }
          throw a;
        } finally {
          this._abortController === i && (this._abortController = null);
        }
      } catch (i) {
        throw console.error("[WBMermaid] Fetch failed:", i), i;
      }
    },
    escapeHtml(e) {
      return String(e).replace(/[&<>"']/g, (t) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[t]);
    },
    showError(e, t) {
      this.loading = !1, this.lastError = e, console.error(`[WBMermaid] ${t} error:`, e);
      const r = this.escapeHtml((e == null ? void 0 : e.message) || e);
      this.svg = `
        <div class="pa-4 text-error text-center" role="alert" style="border: 1px solid currentColor; padding: 10px;">
          <strong>Diagram Error</strong><br/>
          ${r}
        </div>
      `, this.$emit("error", { error: e, phase: t, source: this.src });
    },
    transformObjectToMermaid(e) {
      if (!e) return "";
      if (e.type === "flowchart" || e.type === "graph") {
        let r = `graph ${e.direction || "TD"};
`;
        const i = e.data || e.edges || [];
        return Array.isArray(i) ? i.forEach((s) => {
          const o = s.from, a = s.to, n = s.label ? `|${s.label}|` : "";
          let l = "-->";
          s.type === "dotted" && (l = "-.->"), s.type === "thick" && (l = "==>"), r += `    ${o} ${l}${n} ${a};
`;
        }) : typeof i == "object" && Object.keys(i).forEach((s) => {
          (Array.isArray(i[s]) ? i[s] : [i[s]]).forEach((a) => {
            r += `    ${s} --> ${a};
`;
          });
        }), r;
      }
      if (e.type === "sequence" || e.type === "sequenceDiagram") {
        let t = `sequenceDiagram;
`;
        return e.autoNumber && (t += `    autonumber
`), (e.data || []).forEach((i) => {
          const s = i.from, o = i.to, a = i.text ? `: ${i.text}` : "", n = i.arrow || "->>";
          t += `    ${s}${n}${o}${a};
`;
        }), t;
      }
      return "";
    }
  },
  render() {
    const e = Object.keys(this.asWbc || {}).length > 0;
    let t = Fa("div", {
      class: "mermaid-container",
      role: e ? "group" : "img",
      "aria-roledescription": e ? "interactive diagram" : void 0,
      "aria-label": this.ariaLabel || this.title || "Mermaid diagram",
      "aria-description": this.description || void 0,
      title: this.title || void 0,
      innerHTML: this.svg,
      ...this.$attrs
    }), r = {
      default_main: t,
      ...this.wbcObj || {}
    };
    const i = C0("WBC");
    return this._resolvedWBCComponent = typeof i == "string" ? null : i, typeof i == "string" ? t : Fa(i, {
      item: { comp: "div", options: { html: r } }
    });
  }
}), SF = /* @__PURE__ */ bF(wF, [["__scopeId", "data-v-46544be4"]]), Cu = /* @__PURE__ */ new WeakSet(), TF = function(e, t = {}) {
  Cu.has(e) || (Cu.add(e), e.config.globalProperties.$wbcMermaidOptions = t, e.component("WBMermaid", SF));
}, eA = {
  install: TF
};
export {
  ex as $,
  ox as A,
  AF as B,
  cr as C,
  x0 as D,
  Ot as E,
  fx as F,
  Nl as G,
  Au as H,
  Yw as I,
  Q2 as J,
  j1 as K,
  pC as L,
  ns as M,
  LF as N,
  Qo as O,
  GC as P,
  Hu as Q,
  Kh as R,
  R1 as S,
  bn as T,
  Hw as U,
  xs as V,
  Le as W,
  R as X,
  P as Y,
  Dw as Z,
  p as _,
  nx as a,
  Lp as a$,
  Uu as a0,
  $1 as a1,
  yc as a2,
  mc as a3,
  NF as a4,
  OF as a5,
  RF as a6,
  IF as a7,
  EF as a8,
  yl as a9,
  Vt as aA,
  Qt as aB,
  sT as aC,
  El as aD,
  Al as aE,
  oo as aF,
  xw as aG,
  Cw as aH,
  yw as aI,
  mw as aJ,
  lw as aK,
  _p as aL,
  uw as aM,
  nw as aN,
  pw as aO,
  Bp as aP,
  cw as aQ,
  ww as aR,
  kw as aS,
  bw as aT,
  Tw as aU,
  Sw as aV,
  hw as aW,
  vp as aX,
  gw as aY,
  fw as aZ,
  dw as a_,
  PF as aa,
  $F as ab,
  Xr as ac,
  WF as ad,
  qF as ae,
  DF as af,
  AT as ag,
  qm as ah,
  KF as ai,
  mt as aj,
  Re as ak,
  _s as al,
  xS as am,
  Rl as an,
  J as ao,
  O_ as ap,
  ZF as aq,
  QF as ar,
  XF as as,
  it as at,
  VF as au,
  ql as av,
  h_ as aw,
  i_ as ax,
  r_ as ay,
  Wo as az,
  ax as b,
  KT as b0,
  se as b1,
  He as b2,
  Ui as b3,
  Dp as b4,
  Ir as b5,
  Np as b6,
  ku as b7,
  O1 as b8,
  b0 as b9,
  CS as ba,
  fl as bb,
  nr as bc,
  cs as bd,
  cc as be,
  fk as bf,
  et as bg,
  Sp as bh,
  ue as bi,
  ak as bj,
  dl as bk,
  od as bl,
  ws as bm,
  ld as bn,
  MF as bo,
  T0 as bp,
  SF as bq,
  eA as br,
  Tt as c,
  Ct as d,
  Yu as e,
  zt as f,
  hx as g,
  tr as h,
  ve as i,
  ow as j,
  bs as k,
  U as l,
  Rp as m,
  vF as n,
  FF as o,
  tA as p,
  cx as q,
  JF as r,
  lx as s,
  ux as t,
  Te as u,
  J2 as v,
  Gw as w,
  ZT as x,
  zF as y,
  ki as z
};
