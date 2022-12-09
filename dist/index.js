!(function (e, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define("paypal-legal-components", [], n)
    : "object" == typeof exports
    ? (exports["paypal-legal-components"] = n())
    : (e["paypal-legal-components"] = n());
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    var n = {};
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
      }),
      (t.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (t.t = function (e, n) {
        if ((1 & n && (e = t(e)), 8 & n)) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (t.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & n && "string" != typeof e)
        )
          for (var o in e)
            t.d(
              r,
              o,
              function (n) {
                return e[n];
              }.bind(null, o)
            );
        return r;
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, n) {
        return {}.hasOwnProperty.call(e, n);
      }),
      (t.p = ""),
      t((t.s = 0))
    );
  })([
    function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, "Legal", function () {
          return Ne;
        }),
        t.d(n, "getBuyerCountryFromFundingSource", function () {
          return de;
        }),
        t.d(n, "buildContent", function () {
          return he;
        }),
        t.d(n, "getLegalLocale", function () {
          return pe;
        }),
        t.d(n, "FPTI_KEY", function () {
          return ve;
        });
      var r = {};
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) ({}.hasOwnProperty.call(t, r) && (e[r] = t[r]));
            }
            return e;
          }).apply(this, arguments);
      }
      function i(e) {
        try {
          if (!e) return !1;
          if ("undefined" != typeof Promise && e instanceof Promise) return !0;
          if (
            "undefined" != typeof window &&
            "function" == typeof window.Window &&
            e instanceof window.Window
          )
            return !1;
          if (
            "undefined" != typeof window &&
            "function" == typeof window.constructor &&
            e instanceof window.constructor
          )
            return !1;
          var n = {}.toString;
          if (n) {
            var t = n.call(e);
            if (
              "[object Window]" === t ||
              "[object global]" === t ||
              "[object DOMWindow]" === t
            )
              return !1;
          }
          if ("function" == typeof e.then) return !0;
        } catch (e) {
          return !1;
        }
        return !1;
      }
      t.r(r),
        t.d(r, "PayUponInvoice", function () {
          return se;
        }),
        t.d(r, "boletobancario", function () {
          return Ee;
        });
      var a,
        u = [],
        c = [],
        f = 0;
      function l() {
        if (!f && a) {
          var e = a;
          (a = null), e.resolve();
        }
      }
      function s() {
        f += 1;
      }
      function E() {
        (f -= 1), l();
      }
      var d = (function () {
          function e(e) {
            var n = this;
            if (
              ((this.resolved = void 0),
              (this.rejected = void 0),
              (this.errorHandled = void 0),
              (this.value = void 0),
              (this.error = void 0),
              (this.handlers = void 0),
              (this.dispatching = void 0),
              (this.stack = void 0),
              (this.resolved = !1),
              (this.rejected = !1),
              (this.errorHandled = !1),
              (this.handlers = []),
              e)
            ) {
              var t,
                r,
                o = !1,
                i = !1,
                a = !1;
              s();
              try {
                e(
                  function (e) {
                    a ? n.resolve(e) : ((o = !0), (t = e));
                  },
                  function (e) {
                    a ? n.reject(e) : ((i = !0), (r = e));
                  }
                );
              } catch (e) {
                return E(), void this.reject(e);
              }
              E(), (a = !0), o ? this.resolve(t) : i && this.reject(r);
            }
          }
          var n = e.prototype;
          return (
            (n.resolve = function (e) {
              if (this.resolved || this.rejected) return this;
              if (i(e))
                throw new Error("Can not resolve promise with another promise");
              return (
                (this.resolved = !0), (this.value = e), this.dispatch(), this
              );
            }),
            (n.reject = function (e) {
              var n = this;
              if (this.resolved || this.rejected) return this;
              if (i(e))
                throw new Error("Can not reject promise with another promise");
              if (!e) {
                var t =
                  e && "function" == typeof e.toString
                    ? e.toString()
                    : {}.toString.call(e);
                e = new Error(
                  "Expected reject to be called with Error, got " + t
                );
              }
              return (
                (this.rejected = !0),
                (this.error = e),
                this.errorHandled ||
                  setTimeout(function () {
                    n.errorHandled ||
                      (function (e, n) {
                        if (-1 === u.indexOf(e)) {
                          u.push(e),
                            setTimeout(function () {
                              throw e;
                            }, 1);
                          for (var t = 0; t < c.length; t++) c[t](e, n);
                        }
                      })(e, n);
                  }, 1),
                this.dispatch(),
                this
              );
            }),
            (n.asyncReject = function (e) {
              return (this.errorHandled = !0), this.reject(e), this;
            }),
            (n.dispatch = function () {
              var n = this.resolved,
                t = this.rejected,
                r = this.handlers;
              if (!this.dispatching && (n || t)) {
                (this.dispatching = !0), s();
                for (
                  var o = function (e, n) {
                      return e.then(
                        function (e) {
                          n.resolve(e);
                        },
                        function (e) {
                          n.reject(e);
                        }
                      );
                    },
                    a = 0;
                  a < r.length;
                  a++
                ) {
                  var u = r[a],
                    c = u.onSuccess,
                    f = u.onError,
                    l = u.promise,
                    d = void 0;
                  if (n)
                    try {
                      d = c ? c(this.value) : this.value;
                    } catch (e) {
                      l.reject(e);
                      continue;
                    }
                  else if (t) {
                    if (!f) {
                      l.reject(this.error);
                      continue;
                    }
                    try {
                      d = f(this.error);
                    } catch (e) {
                      l.reject(e);
                      continue;
                    }
                  }
                  if (d instanceof e && (d.resolved || d.rejected)) {
                    var h = d;
                    h.resolved ? l.resolve(h.value) : l.reject(h.error),
                      (h.errorHandled = !0);
                  } else
                    i(d)
                      ? d instanceof e && (d.resolved || d.rejected)
                        ? d.resolved
                          ? l.resolve(d.value)
                          : l.reject(d.error)
                        : o(d, l)
                      : l.resolve(d);
                }
                (r.length = 0), (this.dispatching = !1), E();
              }
            }),
            (n.then = function (n, t) {
              if (n && "function" != typeof n && !n.call)
                throw new Error(
                  "Promise.then expected a function for success handler"
                );
              if (t && "function" != typeof t && !t.call)
                throw new Error(
                  "Promise.then expected a function for error handler"
                );
              var r = new e();
              return (
                this.handlers.push({ promise: r, onSuccess: n, onError: t }),
                (this.errorHandled = !0),
                this.dispatch(),
                r
              );
            }),
            (n.catch = function (e) {
              return this.then(void 0, e);
            }),
            (n.finally = function (n) {
              if (n && "function" != typeof n && !n.call)
                throw new Error("Promise.finally expected a function");
              return this.then(
                function (t) {
                  return e.try(n).then(function () {
                    return t;
                  });
                },
                function (t) {
                  return e.try(n).then(function () {
                    throw t;
                  });
                }
              );
            }),
            (n.timeout = function (e, n) {
              var t = this;
              if (this.resolved || this.rejected) return this;
              var r = setTimeout(function () {
                t.resolved ||
                  t.rejected ||
                  t.reject(
                    n || new Error("Promise timed out after " + e + "ms")
                  );
              }, e);
              return this.then(function (e) {
                return clearTimeout(r), e;
              });
            }),
            (n.toPromise = function () {
              if ("undefined" == typeof Promise)
                throw new TypeError("Could not find Promise");
              return Promise.resolve(this);
            }),
            (n.lazy = function () {
              return (this.errorHandled = !0), this;
            }),
            (e.resolve = function (n) {
              return n instanceof e
                ? n
                : i(n)
                ? new e(function (e, t) {
                    return n.then(e, t);
                  })
                : new e().resolve(n);
            }),
            (e.reject = function (n) {
              return new e().reject(n);
            }),
            (e.asyncReject = function (n) {
              return new e().asyncReject(n);
            }),
            (e.all = function (n) {
              var t = new e(),
                r = n.length,
                o = [].slice();
              if (!r) return t.resolve(o), t;
              for (
                var a = function (e, n, i) {
                    return n.then(
                      function (n) {
                        (o[e] = n), 0 == (r -= 1) && t.resolve(o);
                      },
                      function (e) {
                        i.reject(e);
                      }
                    );
                  },
                  u = 0;
                u < n.length;
                u++
              ) {
                var c = n[u];
                if (c instanceof e) {
                  if (c.resolved) {
                    (o[u] = c.value), (r -= 1);
                    continue;
                  }
                } else if (!i(c)) {
                  (o[u] = c), (r -= 1);
                  continue;
                }
                a(u, e.resolve(c), t);
              }
              return 0 === r && t.resolve(o), t;
            }),
            (e.hash = function (n) {
              var t = {},
                r = [],
                o = function (e) {
                  if (n.hasOwnProperty(e)) {
                    var o = n[e];
                    i(o)
                      ? r.push(
                          o.then(function (n) {
                            t[e] = n;
                          })
                        )
                      : (t[e] = o);
                  }
                };
              for (var a in n) o(a);
              return e.all(r).then(function () {
                return t;
              });
            }),
            (e.map = function (n, t) {
              return e.all(n.map(t));
            }),
            (e.onPossiblyUnhandledException = function (e) {
              return (function (e) {
                return (
                  c.push(e),
                  {
                    cancel: function () {
                      c.splice(c.indexOf(e), 1);
                    },
                  }
                );
              })(e);
            }),
            (e.try = function (n, t, r) {
              if (n && "function" != typeof n && !n.call)
                throw new Error("Promise.try expected a function");
              var o;
              s();
              try {
                o = n.apply(t, r || []);
              } catch (n) {
                return E(), e.reject(n);
              }
              return E(), e.resolve(o);
            }),
            (e.delay = function (n) {
              return new e(function (e) {
                setTimeout(e, n);
              });
            }),
            (e.isPromise = function (n) {
              return !!(n && n instanceof e) || i(n);
            }),
            (e.flush = function () {
              return (n = a = a || new e()), l(), n;
              var n;
            }),
            e
          );
        })(),
        h = "Call was rejected by callee.\r\n";
      function p(e) {
        return void 0 === e && (e = window), e.location.protocol;
      }
      function v(e) {
        if ((void 0 === e && (e = window), e.mockDomain)) {
          var n = e.mockDomain.split("//")[0];
          if (n) return n;
        }
        return p(e);
      }
      function N(e) {
        return void 0 === e && (e = window), "about:" === v(e);
      }
      function S(e) {
        try {
          return !0;
        } catch (e) {}
        return !1;
      }
      function w(e) {
        void 0 === e && (e = window);
        var n = e.location;
        if (!n) throw new Error("Can not read window location");
        var t = p(e);
        if (!t) throw new Error("Can not read window protocol");
        if ("file:" === t) return "file://";
        if ("about:" === t) {
          var r = (function (e) {
            if ((void 0 === e && (e = window), e))
              try {
                if (e.parent && e.parent !== e) return e.parent;
              } catch (e) {}
          })(e);
          return r && S() ? w(r) : "about://";
        }
        var o = n.host;
        if (!o) throw new Error("Can not read window host");
        return t + "//" + o;
      }
      function y(e) {
        void 0 === e && (e = window);
        var n = w(e);
        return n && e.mockDomain && 0 === e.mockDomain.indexOf("mock:")
          ? e.mockDomain
          : n;
      }
      function R(e) {
        if (
          !(function (e) {
            try {
              if (e === window) return !0;
            } catch (e) {}
            try {
              var n = Object.getOwnPropertyDescriptor(e, "location");
              if (n && !1 === n.enumerable) return !1;
            } catch (e) {}
            try {
              if (N(e) && S()) return !0;
            } catch (e) {}
            try {
              if (
                (function (e) {
                  return void 0 === e && (e = window), "mock:" === v(e);
                })(e) &&
                S()
              )
                return !0;
            } catch (e) {}
            try {
              if (w(e) === w(window)) return !0;
            } catch (e) {}
            return !1;
          })(e)
        )
          return !1;
        try {
          if (e === window) return !0;
          if (N(e) && S()) return !0;
          if (y(window) === y(e)) return !0;
        } catch (e) {}
        return !1;
      }
      var m = [],
        g = [];
      function H(e, n) {
        void 0 === n && (n = !0);
        try {
          if (e === window) return !1;
        } catch (e) {
          return !0;
        }
        try {
          if (!e) return !0;
        } catch (e) {
          return !0;
        }
        try {
          if (e.closed) return !0;
        } catch (e) {
          return !e || e.message !== h;
        }
        if (n && R(e))
          try {
            if (e.mockclosed) return !0;
          } catch (e) {}
        try {
          if (!e.parent || !e.top) return !0;
        } catch (e) {}
        var t = (function (e, n) {
          for (var t = 0; t < e.length; t++)
            try {
              if (e[t] === n) return t;
            } catch (e) {}
          return -1;
        })(m, e);
        if (-1 !== t) {
          var r = g[t];
          if (
            r &&
            (function (e) {
              if (!e.contentWindow) return !0;
              if (!e.parentNode) return !0;
              var n = e.ownerDocument;
              if (n && n.documentElement && !n.documentElement.contains(e)) {
                for (var t = e; t.parentNode && t.parentNode !== t; )
                  t = t.parentNode;
                if (!t.host || !n.documentElement.contains(t.host)) return !0;
              }
              return !1;
            })(r)
          )
            return !0;
        }
        return !1;
      }
      function F(e) {
        try {
          if (e === window) return !0;
        } catch (e) {
          if (e && e.message === h) return !0;
        }
        try {
          if ("[object Window]" === {}.toString.call(e)) return !0;
        } catch (e) {
          if (e && e.message === h) return !0;
        }
        try {
          if (window.Window && e instanceof window.Window) return !0;
        } catch (e) {
          if (e && e.message === h) return !0;
        }
        try {
          if (e && e.self === e) return !0;
        } catch (e) {
          if (e && e.message === h) return !0;
        }
        try {
          if (e && e.parent === e) return !0;
        } catch (e) {
          if (e && e.message === h) return !0;
        }
        try {
          if (e && e.top === e) return !0;
        } catch (e) {
          if (e && e.message === h) return !0;
        }
        try {
          if (
            e &&
            "__unlikely_value__" === e.__cross_domain_utils_window_check__
          )
            return !1;
        } catch (e) {
          return !0;
        }
        try {
          if ("postMessage" in e && "self" in e && "location" in e) return !0;
        } catch (e) {}
        return !1;
      }
      function Z(e, n) {
        for (var t = 0; t < e.length; t++)
          try {
            if (e[t] === n) return t;
          } catch (e) {}
        return -1;
      }
      var _,
        A = (function () {
          function e() {
            if (
              ((this.name = void 0),
              (this.weakmap = void 0),
              (this.keys = void 0),
              (this.values = void 0),
              (this.name = "__weakmap_" + ((1e9 * Math.random()) >>> 0) + "__"),
              (function () {
                if ("undefined" == typeof WeakMap) return !1;
                if (void 0 === Object.freeze) return !1;
                try {
                  var e = new WeakMap(),
                    n = {};
                  return (
                    Object.freeze(n),
                    e.set(n, "__testvalue__"),
                    "__testvalue__" === e.get(n)
                  );
                } catch (e) {
                  return !1;
                }
              })())
            )
              try {
                this.weakmap = new WeakMap();
              } catch (e) {}
            (this.keys = []), (this.values = []);
          }
          var n = e.prototype;
          return (
            (n._cleanupClosedWindows = function () {
              for (
                var e = this.weakmap, n = this.keys, t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (F(r) && H(r)) {
                  if (e)
                    try {
                      e.delete(r);
                    } catch (e) {}
                  n.splice(t, 1), this.values.splice(t, 1), (t -= 1);
                }
              }
            }),
            (n.isSafeToReadWrite = function (e) {
              return !F(e);
            }),
            (n.set = function (e, n) {
              if (!e) throw new Error("WeakMap expected key");
              var t = this.weakmap;
              if (t)
                try {
                  t.set(e, n);
                } catch (e) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(e))
                try {
                  var r = this.name,
                    o = e[r];
                  return void (o && o[0] === e
                    ? (o[1] = n)
                    : Object.defineProperty(e, r, {
                        value: [e, n],
                        writable: !0,
                      }));
                } catch (e) {}
              this._cleanupClosedWindows();
              var i = this.keys,
                a = this.values,
                u = Z(i, e);
              -1 === u ? (i.push(e), a.push(n)) : (a[u] = n);
            }),
            (n.get = function (e) {
              if (!e) throw new Error("WeakMap expected key");
              var n = this.weakmap;
              if (n)
                try {
                  if (n.has(e)) return n.get(e);
                } catch (e) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(e))
                try {
                  var t = e[this.name];
                  return t && t[0] === e ? t[1] : void 0;
                } catch (e) {}
              this._cleanupClosedWindows();
              var r = Z(this.keys, e);
              if (-1 !== r) return this.values[r];
            }),
            (n.delete = function (e) {
              if (!e) throw new Error("WeakMap expected key");
              var n = this.weakmap;
              if (n)
                try {
                  n.delete(e);
                } catch (e) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(e))
                try {
                  var t = e[this.name];
                  t && t[0] === e && (t[0] = t[1] = void 0);
                } catch (e) {}
              this._cleanupClosedWindows();
              var r = this.keys,
                o = Z(r, e);
              -1 !== o && (r.splice(o, 1), this.values.splice(o, 1));
            }),
            (n.has = function (e) {
              if (!e) throw new Error("WeakMap expected key");
              var n = this.weakmap;
              if (n)
                try {
                  if (n.has(e)) return !0;
                } catch (e) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(e))
                try {
                  var t = e[this.name];
                  return !(!t || t[0] !== e);
                } catch (e) {}
              return this._cleanupClosedWindows(), -1 !== Z(this.keys, e);
            }),
            (n.getOrSet = function (e, n) {
              if (this.has(e)) return this.get(e);
              var t = n();
              return this.set(e, t), t;
            }),
            e
          );
        })();
      function T(e) {
        return e.name || e.__name__ || e.displayName || "anonymous";
      }
      function O(e, n) {
        try {
          delete e.name, (e.name = n);
        } catch (e) {}
        return (e.__name__ = e.displayName = n), e;
      }
      function C(e) {
        if ("function" == typeof btoa)
          return btoa(
            encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, n) {
              return String.fromCharCode(parseInt(n, 16));
            })
          ).replace(/[=]/g, "");
        if ("undefined" != typeof Buffer)
          return Buffer.from(e, "utf8").toString("base64").replace(/[=]/g, "");
        throw new Error("Can not find window.btoa or Buffer");
      }
      function b() {
        var e = "0123456789abcdef";
        return (
          "uid_" +
          "xxxxxxxxxx".replace(/./g, function () {
            return e.charAt(Math.floor(Math.random() * e.length));
          }) +
          "_" +
          C(new Date().toISOString().slice(11, 19).replace("T", "."))
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase()
        );
      }
      function M(e) {
        try {
          return JSON.stringify([].slice.call(e), function (e, n) {
            return "function" == typeof n
              ? "memoize[" +
                  (function (e) {
                    if (
                      ((_ = _ || new A()),
                      null == e ||
                        ("object" != typeof e && "function" != typeof e))
                    )
                      throw new Error("Invalid object");
                    var n = _.get(e);
                    return n || ((n = typeof e + ":" + b()), _.set(e, n)), n;
                  })(n) +
                  "]"
              : (function (e) {
                  var n = !1;
                  try {
                    (e instanceof window.Element ||
                      (null !== e &&
                        "object" == typeof e &&
                        1 === e.nodeType &&
                        "object" == typeof e.style &&
                        "object" == typeof e.ownerDocument)) &&
                      (n = !0);
                  } catch (e) {}
                  return n;
                })(n)
              ? {}
              : n;
          });
        } catch (e) {
          throw new Error(
            "Arguments not serializable -- can not be used to memoize"
          );
        }
      }
      function L() {
        return {};
      }
      var P = 0,
        B = 0;
      function k(e, n) {
        void 0 === n && (n = {});
        var t,
          r,
          o = n.thisNamespace,
          i = void 0 !== o && o,
          a = n.time,
          u = P;
        P += 1;
        var c = function () {
          for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++)
            o[c] = arguments[c];
          var f, l;
          u < B && ((t = null), (r = null), (u = P), (P += 1)),
            (f = i ? (r = r || new A()).getOrSet(this, L) : (t = t || {}));
          try {
            l = M(o);
          } catch (n) {
            return e.apply(this, arguments);
          }
          var s = f[l];
          if (
            (s && a && Date.now() - s.time < a && (delete f[l], (s = null)), s)
          )
            return s.value;
          var E = Date.now(),
            d = e.apply(this, arguments);
          return (f[l] = { time: E, value: d }), d;
        };
        return (
          (c.reset = function () {
            (t = null), (r = null);
          }),
          O(c, (n.name || T(e)) + "::memoized")
        );
      }
      function D() {}
      function I(e, n) {
        void 0 === n && (n = Boolean);
        var t = {};
        for (var r in e) e.hasOwnProperty(r) && n(e[r], r) && (t[r] = e[r]);
        return t;
      }
      function G() {
        return Boolean(document.body) && "complete" === document.readyState;
      }
      function j() {
        return Boolean(document.body) && "interactive" === document.readyState;
      }
      function U(e) {
        return (function (n, t, r) {
          void 0 === r && (r = []);
          var o = (n.__inline_memoize_cache__ =
              n.__inline_memoize_cache__ || {}),
            i = M(r);
          return o.hasOwnProperty(i)
            ? o[i]
            : (o[i] = function () {
                var n = {};
                if (!e) return n;
                if (-1 === e.indexOf("=")) return n;
                for (var t = 0, r = e.split("&"); t < r.length; t++) {
                  var o = r[t];
                  (o = o.split("="))[0] &&
                    o[1] &&
                    (n[decodeURIComponent(o[0])] = decodeURIComponent(o[1]));
                }
                return n;
              }.apply(void 0, r));
        })(U, 0, [e]);
      }
      function K() {
        return "undefined" != typeof window && void 0 !== window.location;
      }
      function x() {
        var e = window.navigator,
          n = e.languages ? [].concat(e.languages) : [];
        return (
          e.language && n.push(e.language),
          e.userLanguage && n.push(e.userLanguage),
          n
            .map(function (e) {
              if (e && e.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                var n = e.split(/[-_]/);
                return { country: n[1], lang: n[0] };
              }
              return e && e.match(/^[a-z]{2}$/) ? { lang: e } : null;
            })
            .filter(Boolean)
        );
      }
      (k.clear = function () {
        B = P;
      }),
        k(function (e) {
          if (Object.values) return Object.values(e);
          var n = [];
          for (var t in e) e.hasOwnProperty(t) && n.push(e[t]);
          return n;
        }),
        Error,
        k(function () {
          return new d(function (e) {
            if (G() || j()) return e();
            var n = setInterval(function () {
              if (G() || j()) return clearInterval(n), e();
            }, 10);
          });
        });
      var W = "undefined" != typeof document ? document.currentScript : null,
        Y = k(function () {
          if (W) return W;
          if (
            (W = (function () {
              try {
                var e = (function () {
                    try {
                      throw new Error("_");
                    } catch (e) {
                      return e.stack || "";
                    }
                  })(),
                  n = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(e),
                  t = n && n[1];
                if (!t) return;
                for (
                  var r = 0,
                    o = [].slice
                      .call(document.getElementsByTagName("script"))
                      .reverse();
                  r < o.length;
                  r++
                ) {
                  var i = o[r];
                  if (i.src && i.src === t) return i;
                }
              } catch (e) {}
            })())
          )
            return W;
          throw new Error("Can not determine current script");
        }),
        V = b(),
        J = k(function () {
          var e;
          try {
            e = Y();
          } catch (e) {
            return V;
          }
          var n = e.getAttribute("data-uid");
          if (n && "string" == typeof n) return n;
          if ((n = e.getAttribute("data-uid-auto")) && "string" == typeof n)
            return n;
          if (e.src) {
            var t = (function (e) {
              for (var n = "", t = 0; t < e.length; t++) {
                var r = e[t].charCodeAt(0) * t;
                e[t + 1] && (r += e[t + 1].charCodeAt(0) * (t - 1)),
                  (n += String.fromCharCode(97 + (Math.abs(r) % 26)));
              }
              return n;
            })(JSON.stringify({ src: e.src, dataset: e.dataset }));
            n = "uid_" + t.slice(t.length - 30);
          } else n = b();
          return e.setAttribute("data-uid-auto", n), n;
        }),
        z = [];
      function X(e) {
        var n = e.url,
          t = e.method,
          r = void 0 === t ? "get" : t,
          o = e.headers,
          i = void 0 === o ? {} : o,
          a = e.json,
          u = e.data,
          c = e.body,
          f = e.win,
          l = void 0 === f ? window : f,
          s = e.timeout,
          E = void 0 === s ? 0 : s;
        return new d(function (e, t) {
          if ((a && u) || (a && c) || (u && a))
            throw new Error(
              "Only options.json or options.data or options.body should be passed"
            );
          for (var o = {}, f = 0, s = Object.keys(i); f < s.length; f++) {
            var d = s[f];
            o[d.toLowerCase()] = i[d];
          }
          a
            ? (o["content-type"] = o["content-type"] || "application/json")
            : (u || c) &&
              (o["content-type"] =
                o["content-type"] ||
                "application/x-www-form-urlencoded; charset=utf-8"),
            (o.accept = o.accept || "application/json");
          for (var h = 0; h < z.length; h++)
            for (
              var p = (0, z[h])(), v = 0, N = Object.keys(p);
              v < N.length;
              v++
            ) {
              var S = N[v];
              o[S.toLowerCase()] = p[S];
            }
          var w = new l.XMLHttpRequest();
          for (var y in (w.addEventListener(
            "load",
            function () {
              var o = (function (e) {
                void 0 === e && (e = "");
                for (
                  var n = {}, t = 0, r = e.trim().split("\n");
                  t < r.length;
                  t++
                ) {
                  var o = r[t].split(":"),
                    i = o[0],
                    a = o.slice(1);
                  n[i.toLowerCase()] = a.join(":").trim();
                }
                return n;
              })(this.getAllResponseHeaders());
              if (!this.status)
                return t(
                  new Error(
                    "Request to " +
                      r.toLowerCase() +
                      " " +
                      n +
                      " failed: no response status code."
                  )
                );
              var i = o["content-type"],
                a =
                  i &&
                  (0 === i.indexOf("application/json") ||
                    0 === i.indexOf("text/json")),
                u = this.responseText;
              try {
                u = JSON.parse(u);
              } catch (e) {
                if (a)
                  return t(
                    new Error("Invalid json: " + this.responseText + ".")
                  );
              }
              return e({ status: this.status, headers: o, body: u });
            },
            !1
          ),
          w.addEventListener(
            "error",
            function (e) {
              t(
                new Error(
                  "Request to " +
                    r.toLowerCase() +
                    " " +
                    n +
                    " failed: " +
                    e.toString() +
                    "."
                )
              );
            },
            !1
          ),
          w.open(r, n, !0),
          o))
            o.hasOwnProperty(y) && w.setRequestHeader(y, o[y]);
          a
            ? (c = JSON.stringify(a))
            : u &&
              (c = Object.keys(u)
                .map(function (e) {
                  return (
                    encodeURIComponent(e) +
                    "=" +
                    (u ? encodeURIComponent(u[e]) : "")
                  );
                })
                .join("&")),
            (w.timeout = E),
            (w.ontimeout = function () {
              t(
                new Error(
                  "Request to " + r.toLowerCase() + " " + n + " has timed out"
                )
              );
            }),
            w.send(c);
        });
      }
      var q = {
          AD: "AD",
          AE: "AE",
          AG: "AG",
          AI: "AI",
          AL: "AL",
          AM: "AM",
          AN: "AN",
          AO: "AO",
          AR: "AR",
          AT: "AT",
          AU: "AU",
          AW: "AW",
          AZ: "AZ",
          BA: "BA",
          BB: "BB",
          BE: "BE",
          BF: "BF",
          BG: "BG",
          BH: "BH",
          BI: "BI",
          BJ: "BJ",
          BM: "BM",
          BN: "BN",
          BO: "BO",
          BR: "BR",
          BS: "BS",
          BT: "BT",
          BW: "BW",
          BY: "BY",
          BZ: "BZ",
          CA: "CA",
          CD: "CD",
          CG: "CG",
          CH: "CH",
          CI: "CI",
          CK: "CK",
          CL: "CL",
          CM: "CM",
          CN: "CN",
          CO: "CO",
          CR: "CR",
          CV: "CV",
          CY: "CY",
          CZ: "CZ",
          DE: "DE",
          DJ: "DJ",
          DK: "DK",
          DM: "DM",
          DO: "DO",
          DZ: "DZ",
          EC: "EC",
          EE: "EE",
          EG: "EG",
          ER: "ER",
          ES: "ES",
          ET: "ET",
          FI: "FI",
          FJ: "FJ",
          FK: "FK",
          FM: "FM",
          FO: "FO",
          FR: "FR",
          GA: "GA",
          GB: "GB",
          GD: "GD",
          GE: "GE",
          GF: "GF",
          GI: "GI",
          GL: "GL",
          GM: "GM",
          GN: "GN",
          GP: "GP",
          GR: "GR",
          GT: "GT",
          GW: "GW",
          GY: "GY",
          HK: "HK",
          HN: "HN",
          HR: "HR",
          HU: "HU",
          ID: "ID",
          IE: "IE",
          IL: "IL",
          IN: "IN",
          IS: "IS",
          IT: "IT",
          JM: "JM",
          JO: "JO",
          JP: "JP",
          KE: "KE",
          KG: "KG",
          KH: "KH",
          KI: "KI",
          KM: "KM",
          KN: "KN",
          KR: "KR",
          KW: "KW",
          KY: "KY",
          KZ: "KZ",
          LA: "LA",
          LC: "LC",
          LI: "LI",
          LK: "LK",
          LS: "LS",
          LT: "LT",
          LU: "LU",
          LV: "LV",
          MA: "MA",
          MC: "MC",
          MD: "MD",
          ME: "ME",
          MG: "MG",
          MH: "MH",
          MK: "MK",
          ML: "ML",
          MN: "MN",
          MQ: "MQ",
          MR: "MR",
          MS: "MS",
          MT: "MT",
          MU: "MU",
          MV: "MV",
          MW: "MW",
          MX: "MX",
          MY: "MY",
          MZ: "MZ",
          NA: "NA",
          NC: "NC",
          NE: "NE",
          NF: "NF",
          NG: "NG",
          NI: "NI",
          NL: "NL",
          NO: "NO",
          NP: "NP",
          NR: "NR",
          NU: "NU",
          NZ: "NZ",
          OM: "OM",
          PA: "PA",
          PE: "PE",
          PF: "PF",
          PG: "PG",
          PH: "PH",
          PL: "PL",
          PM: "PM",
          PN: "PN",
          PT: "PT",
          PW: "PW",
          PY: "PY",
          QA: "QA",
          RE: "RE",
          RO: "RO",
          RS: "RS",
          RU: "RU",
          RW: "RW",
          SA: "SA",
          SB: "SB",
          SC: "SC",
          SE: "SE",
          SG: "SG",
          SH: "SH",
          SI: "SI",
          SJ: "SJ",
          SK: "SK",
          SL: "SL",
          SM: "SM",
          SN: "SN",
          SO: "SO",
          SR: "SR",
          ST: "ST",
          SV: "SV",
          SZ: "SZ",
          TC: "TC",
          TD: "TD",
          TG: "TG",
          TH: "TH",
          TJ: "TJ",
          TM: "TM",
          TN: "TN",
          TO: "TO",
          TR: "TR",
          TT: "TT",
          TV: "TV",
          TW: "TW",
          TZ: "TZ",
          UA: "UA",
          UG: "UG",
          US: "US",
          UY: "UY",
          VA: "VA",
          VC: "VC",
          VE: "VE",
          VG: "VG",
          VN: "VN",
          VU: "VU",
          WF: "WF",
          WS: "WS",
          YE: "YE",
          YT: "YT",
          ZA: "ZA",
          ZM: "ZM",
          ZW: "ZW",
        },
        Q = {
          AR: "ar",
          BG: "bg",
          CS: "cs",
          DA: "da",
          DE: "de",
          EL: "el",
          EN: "en",
          ES: "es",
          ET: "et",
          FI: "fi",
          FR: "fr",
          HE: "he",
          HU: "hu",
          ID: "id",
          IT: "it",
          JA: "ja",
          KO: "ko",
          LT: "lt",
          LV: "lv",
          MS: "ms",
          NL: "nl",
          NO: "no",
          PL: "pl",
          PT: "pt",
          RO: "ro",
          RU: "ru",
          SI: "si",
          SK: "sk",
          SL: "sl",
          SQ: "sq",
          SV: "sv",
          TH: "th",
          TL: "tl",
          TR: "tr",
          VI: "vi",
          ZH: "zh",
          ZH_HANT: "zh_Hant",
        },
        $ = {
          AD: [Q.EN, Q.FR, Q.ES, Q.ZH],
          AE: [Q.EN, Q.FR, Q.ES, Q.ZH, Q.AR],
          AG: [Q.EN, Q.FR, Q.ES, Q.ZH],
          AI: [Q.EN, Q.FR, Q.ES, Q.ZH],
          AL: [Q.SQ, Q.EN],
          AM: [Q.EN, Q.FR, Q.ES, Q.ZH],
          AN: [Q.EN, Q.FR, Q.ES, Q.ZH],
          AO: [Q.EN, Q.FR, Q.ES, Q.ZH],
          AR: [Q.ES, Q.EN],
          AT: [Q.DE, Q.EN],
          AU: [Q.EN],
          AW: [Q.EN, Q.FR, Q.ES, Q.ZH],
          AZ: [Q.EN, Q.FR, Q.ES, Q.ZH],
          BA: [Q.EN],
          BB: [Q.EN, Q.FR, Q.ES, Q.ZH],
          BE: [Q.EN, Q.NL, Q.FR],
          BF: [Q.FR, Q.EN, Q.ES, Q.ZH],
          BG: [Q.BG, Q.EN],
          BH: [Q.AR, Q.EN, Q.FR, Q.ES, Q.ZH],
          BI: [Q.FR, Q.EN, Q.ES, Q.ZH],
          BJ: [Q.FR, Q.EN, Q.ES, Q.ZH],
          BM: [Q.EN, Q.FR, Q.ES, Q.ZH],
          BN: [Q.MS, Q.EN],
          BO: [Q.ES, Q.EN, Q.FR, Q.ZH],
          BR: [Q.PT, Q.EN],
          BS: [Q.EN, Q.FR, Q.ES, Q.ZH],
          BT: [Q.EN],
          BW: [Q.EN, Q.FR, Q.ES, Q.ZH],
          BY: [Q.EN],
          BZ: [Q.EN, Q.ES, Q.FR, Q.ZH],
          CA: [Q.EN, Q.FR],
          CD: [Q.FR, Q.EN, Q.ES, Q.ZH],
          CG: [Q.EN, Q.FR, Q.ES, Q.ZH],
          CH: [Q.DE, Q.FR, Q.EN],
          CI: [Q.FR, Q.EN],
          CK: [Q.EN, Q.FR, Q.ES, Q.ZH],
          CL: [Q.ES, Q.EN, Q.FR, Q.ZH],
          CM: [Q.FR, Q.EN],
          CN: [Q.ZH],
          CO: [Q.ES, Q.EN, Q.FR, Q.ZH],
          CR: [Q.ES, Q.EN, Q.FR, Q.ZH],
          CV: [Q.EN, Q.FR, Q.ES, Q.ZH],
          CY: [Q.EN],
          CZ: [Q.CS, Q.EN],
          DE: [Q.DE, Q.EN],
          DJ: [Q.FR, Q.EN, Q.ES, Q.ZH],
          DK: [Q.DA, Q.EN],
          DM: [Q.EN, Q.FR, Q.ES, Q.ZH],
          DO: [Q.ES, Q.EN, Q.FR, Q.ZH],
          DZ: [Q.AR, Q.EN, Q.FR, Q.ES, Q.ZH],
          EC: [Q.ES, Q.EN, Q.FR, Q.ZH],
          EE: [Q.ET, Q.EN, Q.RU],
          EG: [Q.AR, Q.EN, Q.FR, Q.ES, Q.ZH],
          ER: [Q.EN, Q.FR, Q.ES, Q.ZH],
          ES: [Q.ES, Q.EN],
          ET: [Q.EN, Q.FR, Q.ES, Q.ZH],
          FI: [Q.FI, Q.EN],
          FJ: [Q.EN, Q.FR, Q.ES, Q.ZH],
          FK: [Q.EN, Q.FR, Q.ES, Q.ZH],
          FM: [Q.EN],
          FO: [Q.DA, Q.EN, Q.FR, Q.ES, Q.ZH],
          FR: [Q.FR, Q.EN],
          GA: [Q.FR, Q.EN, Q.ES, Q.ZH],
          GB: [Q.EN],
          GD: [Q.EN, Q.FR, Q.ES, Q.ZH],
          GE: [Q.EN, Q.FR, Q.ES, Q.ZH],
          GF: [Q.EN, Q.FR, Q.ES, Q.ZH],
          GI: [Q.EN, Q.FR, Q.ES, Q.ZH],
          GL: [Q.DA, Q.EN, Q.FR, Q.ES, Q.ZH],
          GM: [Q.EN, Q.FR, Q.ES, Q.ZH],
          GN: [Q.FR, Q.EN, Q.ES, Q.ZH],
          GP: [Q.EN, Q.FR, Q.ES, Q.ZH],
          GR: [Q.EL, Q.EN],
          GT: [Q.ES, Q.EN, Q.FR, Q.ZH],
          GW: [Q.EN, Q.FR, Q.ES, Q.ZH],
          GY: [Q.EN, Q.FR, Q.ES, Q.ZH],
          HK: [Q.EN, Q.ZH_HANT, Q.ZH],
          HN: [Q.ES, Q.EN, Q.FR, Q.ZH],
          HR: [Q.EN],
          HU: [Q.HU, Q.EN],
          ID: [Q.ID, Q.EN],
          IE: [Q.EN, Q.FR, Q.ES, Q.ZH],
          IL: [Q.HE, Q.EN],
          IN: [Q.EN],
          IS: [Q.EN],
          IT: [Q.IT, Q.EN],
          JM: [Q.EN, Q.ES, Q.FR, Q.ZH],
          JO: [Q.AR, Q.EN, Q.FR, Q.ES, Q.ZH],
          JP: [Q.JA, Q.EN],
          KE: [Q.EN, Q.FR, Q.ES, Q.ZH],
          KG: [Q.EN, Q.FR, Q.ES, Q.ZH],
          KH: [Q.EN],
          KI: [Q.EN, Q.FR, Q.ES, Q.ZH],
          KM: [Q.FR, Q.EN, Q.ES, Q.ZH],
          KN: [Q.EN, Q.FR, Q.ES, Q.ZH],
          KR: [Q.KO, Q.EN],
          KW: [Q.AR, Q.EN, Q.FR, Q.ES, Q.ZH],
          KY: [Q.EN, Q.FR, Q.ES, Q.ZH],
          KZ: [Q.EN, Q.FR, Q.ES, Q.ZH],
          LA: [Q.EN],
          LC: [Q.EN, Q.FR, Q.ES, Q.ZH],
          LI: [Q.EN, Q.FR, Q.ES, Q.ZH],
          LK: [Q.SI, Q.EN],
          LS: [Q.EN, Q.FR, Q.ES, Q.ZH],
          LT: [Q.LT, Q.EN, Q.RU, Q.ZH],
          LU: [Q.EN, Q.DE, Q.FR, Q.ES, Q.ZH],
          LV: [Q.LV, Q.EN, Q.RU],
          MA: [Q.AR, Q.EN, Q.FR, Q.ES, Q.ZH],
          MC: [Q.FR, Q.EN],
          MD: [Q.EN],
          ME: [Q.EN],
          MG: [Q.EN, Q.FR, Q.ES, Q.ZH],
          MH: [Q.EN, Q.FR, Q.ES, Q.ZH],
          MK: [Q.EN],
          ML: [Q.FR, Q.EN, Q.ES, Q.ZH],
          MN: [Q.EN],
          MQ: [Q.EN, Q.FR, Q.ES, Q.ZH],
          MR: [Q.EN, Q.FR, Q.ES, Q.ZH],
          MS: [Q.EN, Q.FR, Q.ES, Q.ZH],
          MT: [Q.EN],
          MU: [Q.EN, Q.FR, Q.ES, Q.ZH],
          MV: [Q.EN],
          MW: [Q.EN, Q.FR, Q.ES, Q.ZH],
          MX: [Q.ES, Q.EN],
          MY: [Q.MS, Q.EN],
          MZ: [Q.EN, Q.FR, Q.ES, Q.ZH],
          NA: [Q.EN, Q.FR, Q.ES, Q.ZH],
          NC: [Q.EN, Q.FR, Q.ES, Q.ZH],
          NE: [Q.FR, Q.EN, Q.ES, Q.ZH],
          NF: [Q.EN, Q.FR, Q.ES, Q.ZH],
          NG: [Q.EN],
          NI: [Q.ES, Q.EN, Q.FR, Q.ZH],
          NL: [Q.NL, Q.EN],
          NO: [Q.NO, Q.EN],
          NP: [Q.EN],
          NR: [Q.EN, Q.FR, Q.ES, Q.ZH],
          NU: [Q.EN, Q.FR, Q.ES, Q.ZH],
          NZ: [Q.EN, Q.FR, Q.ES, Q.ZH],
          OM: [Q.AR, Q.EN, Q.FR, Q.ES, Q.ZH],
          PA: [Q.ES, Q.EN, Q.FR, Q.ZH],
          PE: [Q.ES, Q.EN, Q.FR, Q.ZH],
          PF: [Q.EN, Q.FR, Q.ES, Q.ZH],
          PG: [Q.EN, Q.FR, Q.ES, Q.ZH],
          PH: [Q.TL, Q.EN],
          PL: [Q.PL, Q.EN],
          PM: [Q.EN, Q.FR, Q.ES, Q.ZH],
          PN: [Q.EN, Q.FR, Q.ES, Q.ZH],
          PT: [Q.PT, Q.EN],
          PW: [Q.EN, Q.FR, Q.ES, Q.ZH],
          PY: [Q.ES, Q.EN],
          QA: [Q.EN, Q.FR, Q.ES, Q.ZH, Q.AR],
          RE: [Q.EN, Q.FR, Q.ES, Q.ZH],
          RO: [Q.RO, Q.EN],
          RS: [Q.EN, Q.FR, Q.ES, Q.ZH],
          RU: [Q.RU, Q.EN],
          RW: [Q.FR, Q.EN, Q.ES, Q.ZH],
          SA: [Q.AR, Q.EN, Q.FR, Q.ES, Q.ZH],
          SB: [Q.EN, Q.FR, Q.ES, Q.ZH],
          SC: [Q.FR, Q.EN, Q.ES, Q.ZH],
          SE: [Q.SV, Q.EN],
          SG: [Q.EN],
          SH: [Q.EN, Q.FR, Q.ES, Q.ZH],
          SI: [Q.SL, Q.EN],
          SJ: [Q.EN, Q.FR, Q.ES, Q.ZH],
          SK: [Q.SK, Q.EN],
          SL: [Q.EN, Q.FR, Q.ES, Q.ZH],
          SM: [Q.EN, Q.FR, Q.ES, Q.ZH],
          SN: [Q.FR, Q.EN, Q.ES, Q.ZH],
          SO: [Q.EN, Q.FR, Q.ES, Q.ZH],
          SR: [Q.EN, Q.FR, Q.ES, Q.ZH],
          ST: [Q.EN, Q.FR, Q.ES, Q.ZH],
          SV: [Q.ES, Q.EN, Q.FR, Q.ZH],
          SZ: [Q.EN, Q.FR, Q.ES, Q.ZH],
          TC: [Q.EN, Q.FR, Q.ES, Q.ZH],
          TD: [Q.FR, Q.EN, Q.ES, Q.ZH],
          TG: [Q.FR, Q.EN, Q.ES, Q.ZH],
          TH: [Q.TH, Q.EN],
          TJ: [Q.EN, Q.FR, Q.ES, Q.ZH],
          TM: [Q.EN, Q.FR, Q.ES, Q.ZH],
          TN: [Q.AR, Q.EN, Q.FR, Q.ES, Q.ZH],
          TO: [Q.EN],
          TR: [Q.TR, Q.EN],
          TT: [Q.EN, Q.FR, Q.ES, Q.ZH],
          TV: [Q.EN, Q.FR, Q.ES, Q.ZH],
          TW: [Q.ZH_HANT, Q.ZH, Q.EN],
          TZ: [Q.EN, Q.FR, Q.ES, Q.ZH],
          UA: [Q.EN, Q.RU, Q.FR, Q.ES, Q.ZH],
          UG: [Q.EN, Q.FR, Q.ES, Q.ZH],
          US: [Q.EN, Q.FR, Q.ES, Q.ZH],
          UY: [Q.ES, Q.EN, Q.FR, Q.ZH],
          VA: [Q.EN, Q.FR, Q.ES, Q.ZH],
          VC: [Q.EN, Q.FR, Q.ES, Q.ZH],
          VE: [Q.ES, Q.EN, Q.FR, Q.ZH],
          VG: [Q.EN, Q.FR, Q.ES, Q.ZH],
          VN: [Q.VI, Q.EN],
          VU: [Q.EN, Q.FR, Q.ES, Q.ZH],
          WF: [Q.EN, Q.FR, Q.ES, Q.ZH],
          WS: [Q.EN],
          YE: [Q.AR, Q.EN, Q.FR, Q.ES, Q.ZH],
          YT: [Q.EN, Q.FR, Q.ES, Q.ZH],
          ZA: [Q.EN, Q.FR, Q.ES, Q.ZH],
          ZM: [Q.EN, Q.FR, Q.ES, Q.ZH],
          ZW: [Q.EN],
        };
      function ee() {
        return __PAYPAL_DOMAIN__;
      }
      var ne =
          "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R",
        te = { sandbox: ne, sb: ne, test: ne },
        re = k(function () {
          try {
            return Y();
          } catch (e) {
            throw new Error(
              'PayPal Payments SDK script not found on page! Expected to find <script src="https://' +
                __SDK_HOST__ +
                __PATH__ +
                '">\n\n' +
                (function e(n, t) {
                  if ((void 0 === t && (t = 1), t >= 3))
                    return "stringifyError stack overflow";
                  try {
                    if (!n)
                      return "<unknown error: " + {}.toString.call(n) + ">";
                    if ("string" == typeof n) return n;
                    if (n instanceof Error) {
                      var r = n && n.stack,
                        o = n && n.message;
                      if (r && o) return -1 !== r.indexOf(o) ? r : o + "\n" + r;
                      if (r) return r;
                      if (o) return o;
                    }
                    return n && n.toString && "function" == typeof n.toString
                      ? n.toString()
                      : {}.toString.call(n);
                  } catch (n) {
                    return "Error while stringifying error: " + e(n, t + 1);
                  }
                })(e)
            );
          }
        });
      k(function () {
        for (var e = {}, n = 0, t = re().attributes; n < t.length; n++) {
          var r = t[n];
          0 === r.name.indexOf("data-") && (e[r.name] = r.value);
        }
        return (e["data-uid"] = J()), e;
      });
      var oe = function (e, n) {
          return U(re().src.split("?")[1] || "")[e] || n;
        },
        ie = ["warn", "error"],
        ae = ["error", "warn", "info", "debug"],
        ue = function (e) {
          var n = e.win,
            t = void 0 === n ? window : n,
            r = e.url,
            o = e.data,
            i = e.useBlob,
            a = void 0 === i || i;
          try {
            var u = JSON.stringify(o);
            if (!t.navigator.sendBeacon)
              throw new Error("No sendBeacon available");
            if (a) {
              var c = new Blob([u], { type: "application/json" });
              return t.navigator.sendBeacon(r, c);
            }
            return t.navigator.sendBeacon(r, u);
          } catch (e) {
            return !1;
          }
        },
        ce = function (e, n) {
          for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        };
      function fe(e) {
        var n = e.url,
          t = e.prefix,
          r = e.logLevel,
          i = void 0 === r ? "warn" : r,
          a = e.transport,
          u =
            void 0 === a
              ? (function (e) {
                  void 0 === e && (e = window);
                  var n = R(e)
                    ? (function (e) {
                        if (!R(e))
                          throw new Error("Expected window to be same domain");
                        return e;
                      })(e)
                    : window;
                  return function (e) {
                    var t = e.url,
                      r = e.method,
                      o = e.headers,
                      i = e.json,
                      a = e.enableSendBeacon,
                      u = void 0 !== a && a;
                    return d
                      .try(function () {
                        var e = !1;
                        return (
                          (function (e) {
                            var n = e.headers,
                              t = e.enableSendBeacon,
                              r = n && Object.keys(n).length;
                            return !!(
                              window &&
                              window.navigator.sendBeacon &&
                              !r &&
                              t &&
                              window.Blob
                            );
                          })({ headers: o, enableSendBeacon: u }) &&
                            (e = (function (e) {
                              return (
                                "https://api2.amplitude.com/2/httpapi" === e
                              );
                            })(t)
                              ? ue({ win: n, url: t, data: i, useBlob: !1 })
                              : ue({ win: n, url: t, data: i, useBlob: !0 })),
                          e ||
                            X({
                              win: n,
                              url: t,
                              method: r,
                              headers: o,
                              json: i,
                            })
                        );
                      })
                      .then(D);
                  };
                })()
              : a,
          c = e.amplitudeApiKey,
          f = e.flushInterval,
          l = void 0 === f ? 6e4 : f,
          s = e.enableSendBeacon,
          E = void 0 !== s && s,
          h = [],
          p = [],
          v = [],
          N = [],
          S = [],
          w = [];
        function y(e, n, t) {
          if (
            K() &&
            window.console &&
            window.console.log &&
            !(ae.indexOf(e) > ae.indexOf(i))
          ) {
            var r = [n];
            r.push(t),
              (t.error || t.warning) && r.push("\n\n", t.error || t.warning);
            try {
              window.console[e] && window.console[e].apply
                ? window.console[e].apply(window.console, r)
                : window.console.log &&
                  window.console.log.apply &&
                  window.console.log.apply(window.console, r);
            } catch (e) {}
          }
        }
        function m() {
          return d.try(function () {
            if (
              K() &&
              "file:" !== window.location.protocol &&
              (h.length || p.length)
            ) {
              for (var e = {}, t = 0; t < N.length; t++) ce(e, (0, N[t])(e));
              for (var r, i = {}, a = 0; a < w.length; a++) ce(i, (0, w[a])(i));
              return (
                n &&
                  (r = u({
                    method: "POST",
                    url: n,
                    headers: i,
                    json: { events: h, meta: e, tracking: p },
                    enableSendBeacon: E,
                  }).catch(D)),
                c &&
                  u({
                    method: "POST",
                    url: "https://api2.amplitude.com/2/httpapi",
                    headers: {},
                    json: {
                      api_key: c,
                      events: p.map(function (e) {
                        return o(
                          {
                            event_type: e.transition_name || "event",
                            event_properties: e,
                          },
                          e
                        );
                      }),
                    },
                    enableSendBeacon: E,
                  }).catch(D),
                (h = []),
                (p = []),
                d.resolve(r).then(D)
              );
            }
          });
        }
        var g,
          H,
          F,
          Z,
          _ =
            (void 0 === H && (H = 50),
            O(function () {
              Z && clearTimeout(Z);
              var e = (F = F || new d());
              return (
                (Z = setTimeout(function () {
                  (F = null),
                    (Z = null),
                    d.try(g).then(
                      function (n) {
                        e.resolve(n);
                      },
                      function (n) {
                        e.reject(n);
                      }
                    );
                }, H)),
                e
              );
            }, T((g = m)) + "::promiseDebounced"));
        function A(e, n, r) {
          if ((void 0 === r && (r = {}), !K())) return b;
          t && (n = t + "_" + n);
          for (
            var i = o({}, I(r), { timestamp: Date.now().toString() }), a = 0;
            a < v.length;
            a++
          )
            ce(i, (0, v[a])(i));
          return (
            (function (e, n, t) {
              h.push({ level: e, event: n, payload: t }),
                -1 !== ie.indexOf(e) && _();
            })(e, n, i),
            y(e, n, i),
            b
          );
        }
        function C(e, n) {
          return e.push(n), b;
        }
        K() &&
          (function (e, n) {
            !(function t() {
              setTimeout(function () {
                e(), t();
              }, n);
            })();
          })(_, l),
          "object" == typeof window &&
            (window.addEventListener("beforeunload", function () {
              m();
            }),
            window.addEventListener("unload", function () {
              m();
            }),
            window.addEventListener("pagehide", function () {
              m();
            }));
        var b = {
          debug: function (e, n) {
            return A("debug", e, n);
          },
          info: function (e, n) {
            return A("info", e, n);
          },
          warn: function (e, n) {
            return A("warn", e, n);
          },
          error: function (e, n) {
            return A("error", e, n);
          },
          track: function (e) {
            if ((void 0 === e && (e = {}), !K())) return b;
            for (var n = I(e), t = 0; t < S.length; t++) ce(n, (0, S[t])(n));
            return y("debug", "track", n), p.push(n), b;
          },
          flush: _,
          immediateFlush: m,
          addPayloadBuilder: function (e) {
            return C(v, e);
          },
          addMetaBuilder: function (e) {
            return C(N, e);
          },
          addTrackingBuilder: function (e) {
            return C(S, e);
          },
          addHeaderBuilder: function (e) {
            return C(w, e);
          },
          setTransport: function (e) {
            return (u = e), b;
          },
          configure: function (e) {
            return (
              e.url && (n = e.url),
              e.prefix && (t = e.prefix),
              e.logLevel && (i = e.logLevel),
              e.transport && (u = e.transport),
              e.amplitudeApiKey && (c = e.amplitudeApiKey),
              e.flushInterval && (l = e.flushInterval),
              e.enableSendBeacon && (E = e.enableSendBeacon),
              b
            );
          },
        };
        return b;
      }
      var le = k(function () {
        return fe({
          url:
            ((e = "/xoplatform/logger/api/logger"),
            void 0 === e && (e = ""),
            "" + ee() + e),
        });
        var e;
      });
      k(function (e) {
        le().info("rest_api_create_access_token");
        var n,
          t,
          r = C(e + ":");
        return X({
          method: "post",
          url:
            ((n = "/v1/oauth2/token"),
            void 0 === n && (n = ""),
            "" +
              ((t = ee()),
              "undefined" != typeof window &&
              void 0 !== window.location &&
              y() === t
                ? ee()
                : __PAYPAL_API_DOMAIN__) +
              n),
          headers: { Authorization: "Basic " + r },
          data: { grant_type: "client_credentials" },
        }).then(function (n) {
          var t = n.body;
          if (t && "invalid_client" === t.error)
            throw new Error(
              "Auth Api invalid client id: " +
                e +
                ":\n\n" +
                JSON.stringify(t, null, 4)
            );
          if (!t || !t.access_token)
            throw new Error(
              "Auth Api response error:\n\n" + JSON.stringify(t, null, 4)
            );
          return t.access_token;
        });
      }),
        k(function () {
          var e = {},
            n = {},
            t = {
              on: function (e, t) {
                var r = (n[e] = n[e] || []);
                r.push(t);
                var o = !1;
                return {
                  cancel: function () {
                    o || ((o = !0), r.splice(r.indexOf(t), 1));
                  },
                };
              },
              once: function (e, n) {
                var r = t.on(e, function () {
                  r.cancel(), n();
                });
                return r;
              },
              trigger: function (e) {
                for (
                  var t = arguments.length,
                    r = new Array(t > 1 ? t - 1 : 0),
                    o = 1;
                  o < t;
                  o++
                )
                  r[o - 1] = arguments[o];
                var i = n[e],
                  a = [];
                if (i)
                  for (
                    var u = function (e) {
                        var n = i[e];
                        a.push(
                          d.try(function () {
                            return n.apply(void 0, r);
                          })
                        );
                      },
                      c = 0;
                    c < i.length;
                    c++
                  )
                    u(c);
                return d.all(a).then(D);
              },
              triggerOnce: function (n) {
                if (e[n]) return d.resolve();
                e[n] = !0;
                for (
                  var r = arguments.length,
                    o = new Array(r > 1 ? r - 1 : 0),
                    i = 1;
                  i < r;
                  i++
                )
                  o[i - 1] = arguments[i];
                return t.trigger.apply(t, [n].concat(o));
              },
              reset: function () {
                n = {};
              },
            };
          return t;
        });
      var se = {
          LEGAL_TEXT: {
            "en-DE": function (e) {
              return (
                "By clicking on the button, you agree to the <a rel='noopener noreferrer' target='_blank' href='https://www.ratepay.com/legal-payment-terms/'>terms of payment</a> and <a rel='noopener noreferrer' target='_blank' href='https://www.ratepay.com/legal-payment-dataprivacy/'>performance of a risk</a> check from the payment partner, Ratepay. You also agree to PayPal’s <a target='_blank' rel='noopener noreferrer' href='" +
                e +
                "'>privacy statement.</a> If your request to purchase upon invoice is accepted, the purchase price claim will be assigned to Ratepay, and you may only pay Ratepay, not the merchant."
              );
            },
            "de-DE": function (e) {
              return (
                "Mit Klicken auf den Button akzeptieren Sie die <a rel='noopener noreferrer' target='_blank' href='https://www.ratepay.com/legal-payment-terms/'>Ratepay Zahlungsbedingungen</a> und erklären sich mit der Durchführung einer <a rel='noopener noreferrer' target='_blank' href='https://www.ratepay.com/legal-payment-dataprivacy/'>Risikoprüfung durch Ratepay</a>, unseren Partner, einverstanden. Sie akzeptieren auch PayPals <a target='_blank' rel='noopener noreferrer' href='" +
                e +
                "'>Datenschutzerklärung</a>. Falls Ihre Transaktion per Kauf auf Rechnung erfolgreich abgewickelt werden kann, wird der Kaufpreis an Ratepay abgetreten und Sie dürfen nur an Ratepay überweisen, nicht an den Händler."
              );
            },
          },
          ERROR_MESSAGES: {
            PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED: {
              "en-DE":
                'The combination of your name and address could not be validated. Please correct your data and try again. You can find further information in the <a href="https://www.ratepay.com/en/ratepay-data-privacy-statement/" title="external link" target="_blank" rel="noopener noreferrer"> Ratepay Data Privacy Statement</a> or you can contact Ratepay using this <a href="https://www.ratepay.com/en/contact/" title="external link" target="_blank" rel="noopener noreferrer">contact form</a>.',
              "de-DE":
                'Die Kombination aus Ihrem Namen und Ihrer Anschrift konnte nicht validiert werden. Bitte korrigieren Sie Ihre Daten und versuchen Sie es erneut. Weitere Informationen finden Sie in den Ratepay <a href="https://www.ratepay.com/legal-payment-dataprivacy/?lang=de" title="external link" target="_blank" rel="noopener noreferrer">Datenschutzbestimmungen</a> oder nutzen Sie das Ratepay <a href="https://www.ratepay.com/kontakt/" title="external link" target="_blank" rel="noopener noreferrer">Kontaktformular</a>.',
            },
            PAYMENT_SOURCE_DECLINED_BY_PROCESSOR: {
              "en-DE":
                'It is not possible to use the selected payment method. This decision is based on automated data processing. You can find further information in the <a href="https://www.ratepay.com/en/ratepay-data-privacy-statement/" title="external link" target="_blank" rel="noopener noreferrer">Ratepay Data Privacy Statement</a> or you can contact Ratepay using this <a href="https://www.ratepay.com/en/contact/" title="external link" target="_blank" rel="noopener noreferrer">contact form</a>.',
              "de-DE":
                'Die gewählte Zahlungsart kann nicht genutzt werden. Diese Entscheidung basiert auf einem automatisierten Datenverarbeitungsverfahren. Weitere Informationen finden Sie in den Ratepay <a href="https://www.ratepay.com/legal-payment-dataprivacy/?lang=de" title="external link" target="_blank" rel="noopener noreferrer">Datenschutzbestimmungen</a> oder nutzen Sie das Ratepay <a href="https://www.ratepay.com/kontakt/" title="external link" target="_blank" rel="noopener noreferrer">Kontaktformular</a>.',
            },
          },
          DEFAULT_LOCALE: "en-DE",
          BUYER_COUNTRY: "DE",
        },
        Ee = {
          LEGAL_TEXT: {
            "en-BR": function (e) {
              return (
                "By choosing this payment option you agree that your information will be collected according to <a rel='noopener noreferrer' target='_blank' href='" +
                e +
                "'>PayPal's Privacy Statement</a>"
              );
            },
            "pt-BR": function (e) {
              return (
                "Ao clicar neste botão, você concorda que as suas informações serão coletadas de acordo com a Declaração de <a target='_blank' rel='noopener noreferrer' href='" +
                e +
                "'>Privacidade do PayPal</a>"
              );
            },
          },
          DEFAULT_LOCALE: "en-BR",
          BUYER_COUNTRY: "BR",
        };
      function de(e) {
        var n;
        return (null == (n = r[e]) ? void 0 : n.BUYER_COUNTRY) || "";
      }
      function he(e) {
        var n,
          t,
          o,
          i,
          a,
          u,
          c,
          f,
          l,
          s,
          E,
          d,
          h,
          p,
          v,
          N =
            "https://www.paypal.com/" +
            (e.buyerCountry || de(e.fundingSource)) +
            "/webapps/mpp/ua/privacy-full?locale.x=" +
            (e.legalLocale ||
              (null == (n = r[e.fundingSource]) ? void 0 : n.DEFAULT_LOCALE));
        return (
          (e.errorCode
            ? (null == (t = r[e.fundingSource]) ||
              null == (o = t.ERROR_MESSAGES) ||
              null == (i = o[e.errorCode])
                ? void 0
                : i[e.legalLocale]) ||
              (null == (a = r[e.fundingSource]) ||
              null == (u = a.ERROR_MESSAGES) ||
              null == (c = u[e.errorCode])
                ? void 0
                : c[
                    null == (f = r[e.fundingSource]) ? void 0 : f.DEFAULT_LOCALE
                  ])
            : (null == (l = r[e.fundingSource]) ||
              null == (s = l.LEGAL_TEXT) ||
              null == (E = s[e.legalLocale])
                ? void 0
                : E.call(s, N)) ||
              (null == (d = r[e.fundingSource]) ||
              null == (h = d.LEGAL_TEXT) ||
              null ==
                (p =
                  h[
                    null == (v = r[e.fundingSource]) ? void 0 : v.DEFAULT_LOCALE
                  ])
                ? void 0
                : p.call(h, N))) || ""
        );
      }
      function pe() {
        var e = (function () {
          var e = oe("locale");
          if (e)
            return (function (e) {
              var n = e.split("_"),
                t = n[0],
                r = n[1];
              t = Q[t.toUpperCase()];
              var o = $[(r = q[r])];
              return (
                o &&
                  -1 !== o.indexOf(Q.ZH_HANT) &&
                  t === Q.ZH &&
                  (t = Q.ZH_HANT),
                { lang: t, country: r }
              );
            })(e);
          for (
            var n = function (e, n) {
                var t = n[e],
                  r = t.country,
                  o = t.lang;
                if (
                  ((r = r && q[r]),
                  (o = o && Q[o.toUpperCase()]),
                  r && o && $[r] && -1 !== $[r].indexOf(o))
                )
                  return { v: { country: r, lang: o } };
                if (o) {
                  var i = Object.keys($).filter(function (e) {
                    return $[e].some(function (e) {
                      return e === o;
                    });
                  });
                  if (1 === i.length) return { v: { country: i[0], lang: o } };
                }
              },
              t = 0,
              r = x();
            t < r.length;
            t++
          ) {
            var o = n(t, r);
            if ("object" == typeof o) return o.v;
          }
          for (var i = 0, a = x(); i < a.length; i++) {
            var u = a[i].country;
            if ($.hasOwnProperty(u)) return { country: u, lang: $[u][0] };
          }
          return { lang: Q.EN, country: q.US };
        })();
        return e.lang + "-" + e.country;
      }
      var ve = { CLIENT_ID: "client_id", PAGE_TYPE: "legal_component" };
      function Ne(e) {
        return {
          render: function (n) {
            var t;
            if (!e.fundingSource)
              throw new Error("Expected options.fundingSource");
            var r = pe(),
              i = de(e.fundingSource),
              a = o({}, e, { legalLocale: r, buyerCountry: i }),
              u = { locale: r, buyerCountry: i },
              c = document.querySelector(n);
            if (!c) throw new Error("Can not find element: " + n);
            (c.innerHTML = he(a)),
              le().info(JSON.stringify(u)),
              le()
                .info("Legal Component Loaded")
                .track(
                  (((t = {})[ve.CLIENT_ID] = (function () {
                    var e = oe("client-id");
                    if (!e)
                      throw new Error(
                        "Expected client-id parameter in sdk url"
                      );
                    return te[e] ? te[e] : e;
                  })()),
                  (t[ve.PAGE_TYPE] = e.fundingSource),
                  t)
                );
          },
        };
      }
      (Ne.FUNDING = {
        PAY_UPON_INVOICE: "PayUponInvoice",
        BOLETO: "boleto",
        BOLETOBANCARIO: "boletobancario",
      }),
        (Ne.ERROR_CODE = {
          PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED:
            "PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED",
          PAYMENT_SOURCE_DECLINED_BY_PROCESSOR:
            "PAYMENT_SOURCE_DECLINED_BY_PROCESSOR",
        });
    },
  ]);
});
//# sourceMappingURL=index.js.map
