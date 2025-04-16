(function () {
  const p = document.createElement("link").relList;
  if (p && p.supports && p.supports("modulepreload")) return;
  for (const q of document.querySelectorAll('link[rel="modulepreload"]')) v(q);
  new MutationObserver((q) => {
    for (const x of q)
      if (x.type === "childList")
        for (const V of x.addedNodes)
          V.tagName === "LINK" && V.rel === "modulepreload" && v(V);
  }).observe(document, { childList: !0, subtree: !0 });
  function Y(q) {
    const x = {};
    return (
      q.integrity && (x.integrity = q.integrity),
      q.referrerPolicy && (x.referrerPolicy = q.referrerPolicy),
      q.crossOrigin === "use-credentials"
        ? (x.credentials = "include")
        : q.crossOrigin === "anonymous"
        ? (x.credentials = "omit")
        : (x.credentials = "same-origin"),
      x
    );
  }
  function v(q) {
    if (q.ep) return;
    q.ep = !0;
    const x = Y(q);
    fetch(q.href, x);
  }
})();
var uf = { exports: {} },
  xe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wd;
function Nh() {
  if (Wd) return xe;
  Wd = 1;
  var _ = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.fragment");
  function Y(v, q, x) {
    var V = null;
    if (
      (x !== void 0 && (V = "" + x),
      q.key !== void 0 && (V = "" + q.key),
      "key" in q)
    ) {
      x = {};
      for (var hl in q) hl !== "key" && (x[hl] = q[hl]);
    } else x = q;
    return (
      (q = x.ref),
      { $$typeof: _, type: v, key: V, ref: q !== void 0 ? q : null, props: x }
    );
  }
  return (xe.Fragment = p), (xe.jsx = Y), (xe.jsxs = Y), xe;
}
var kd;
function Uh() {
  return kd || ((kd = 1), (uf.exports = Nh())), uf.exports;
}
var s = Uh(),
  ef = { exports: {} },
  Ne = {},
  nf = { exports: {} },
  cf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd;
function Rh() {
  return (
    Fd ||
      ((Fd = 1),
      (function (_) {
        function p(z, X) {
          var B = z.length;
          z.push(X);
          l: for (; 0 < B; ) {
            var nl = (B - 1) >>> 1,
              o = z[nl];
            if (0 < q(o, X)) (z[nl] = X), (z[B] = o), (B = nl);
            else break l;
          }
        }
        function Y(z) {
          return z.length === 0 ? null : z[0];
        }
        function v(z) {
          if (z.length === 0) return null;
          var X = z[0],
            B = z.pop();
          if (B !== X) {
            z[0] = B;
            l: for (var nl = 0, o = z.length, A = o >>> 1; nl < A; ) {
              var H = 2 * (nl + 1) - 1,
                U = z[H],
                j = H + 1,
                $ = z[j];
              if (0 > q(U, B))
                j < o && 0 > q($, U)
                  ? ((z[nl] = $), (z[j] = B), (nl = j))
                  : ((z[nl] = U), (z[H] = B), (nl = H));
              else if (j < o && 0 > q($, B)) (z[nl] = $), (z[j] = B), (nl = j);
              else break l;
            }
          }
          return X;
        }
        function q(z, X) {
          var B = z.sortIndex - X.sortIndex;
          return B !== 0 ? B : z.id - X.id;
        }
        if (
          ((_.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var x = performance;
          _.unstable_now = function () {
            return x.now();
          };
        } else {
          var V = Date,
            hl = V.now();
          _.unstable_now = function () {
            return V.now() - hl;
          };
        }
        var D = [],
          T = [],
          I = 1,
          fl = null,
          sl = 3,
          Sl = !1,
          Ql = !1,
          ut = !1,
          Wl = typeof setTimeout == "function" ? setTimeout : null,
          xt = typeof clearTimeout == "function" ? clearTimeout : null,
          Bl = typeof setImmediate < "u" ? setImmediate : null;
        function gt(z) {
          for (var X = Y(T); X !== null; ) {
            if (X.callback === null) v(T);
            else if (X.startTime <= z)
              v(T), (X.sortIndex = X.expirationTime), p(D, X);
            else break;
            X = Y(T);
          }
        }
        function kt(z) {
          if (((ut = !1), gt(z), !Ql))
            if (Y(D) !== null) (Ql = !0), Ut();
            else {
              var X = Y(T);
              X !== null && Vl(kt, X.startTime - z);
            }
        }
        var P = !1,
          Zl = -1,
          Ft = 5,
          It = -1;
        function C() {
          return !(_.unstable_now() - It < Ft);
        }
        function ll() {
          if (P) {
            var z = _.unstable_now();
            It = z;
            var X = !0;
            try {
              l: {
                (Ql = !1), ut && ((ut = !1), xt(Zl), (Zl = -1)), (Sl = !0);
                var B = sl;
                try {
                  t: {
                    for (
                      gt(z), fl = Y(D);
                      fl !== null && !(fl.expirationTime > z && C());

                    ) {
                      var nl = fl.callback;
                      if (typeof nl == "function") {
                        (fl.callback = null), (sl = fl.priorityLevel);
                        var o = nl(fl.expirationTime <= z);
                        if (((z = _.unstable_now()), typeof o == "function")) {
                          (fl.callback = o), gt(z), (X = !0);
                          break t;
                        }
                        fl === Y(D) && v(D), gt(z);
                      } else v(D);
                      fl = Y(D);
                    }
                    if (fl !== null) X = !0;
                    else {
                      var A = Y(T);
                      A !== null && Vl(kt, A.startTime - z), (X = !1);
                    }
                  }
                  break l;
                } finally {
                  (fl = null), (sl = B), (Sl = !1);
                }
                X = void 0;
              }
            } finally {
              X ? et() : (P = !1);
            }
          }
        }
        var et;
        if (typeof Bl == "function")
          et = function () {
            Bl(ll);
          };
        else if (typeof MessageChannel < "u") {
          var Nt = new MessageChannel(),
            Tt = Nt.port2;
          (Nt.port1.onmessage = ll),
            (et = function () {
              Tt.postMessage(null);
            });
        } else
          et = function () {
            Wl(ll, 0);
          };
        function Ut() {
          P || ((P = !0), et());
        }
        function Vl(z, X) {
          Zl = Wl(function () {
            z(_.unstable_now());
          }, X);
        }
        (_.unstable_IdlePriority = 5),
          (_.unstable_ImmediatePriority = 1),
          (_.unstable_LowPriority = 4),
          (_.unstable_NormalPriority = 3),
          (_.unstable_Profiling = null),
          (_.unstable_UserBlockingPriority = 2),
          (_.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (_.unstable_continueExecution = function () {
            Ql || Sl || ((Ql = !0), Ut());
          }),
          (_.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Ft = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (_.unstable_getCurrentPriorityLevel = function () {
            return sl;
          }),
          (_.unstable_getFirstCallbackNode = function () {
            return Y(D);
          }),
          (_.unstable_next = function (z) {
            switch (sl) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = sl;
            }
            var B = sl;
            sl = X;
            try {
              return z();
            } finally {
              sl = B;
            }
          }),
          (_.unstable_pauseExecution = function () {}),
          (_.unstable_requestPaint = function () {}),
          (_.unstable_runWithPriority = function (z, X) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var B = sl;
            sl = z;
            try {
              return X();
            } finally {
              sl = B;
            }
          }),
          (_.unstable_scheduleCallback = function (z, X, B) {
            var nl = _.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? nl + B : nl))
                : (B = nl),
              z)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (o = B + o),
              (z = {
                id: I++,
                callback: X,
                priorityLevel: z,
                startTime: B,
                expirationTime: o,
                sortIndex: -1,
              }),
              B > nl
                ? ((z.sortIndex = B),
                  p(T, z),
                  Y(D) === null &&
                    z === Y(T) &&
                    (ut ? (xt(Zl), (Zl = -1)) : (ut = !0), Vl(kt, B - nl)))
                : ((z.sortIndex = o), p(D, z), Ql || Sl || ((Ql = !0), Ut())),
              z
            );
          }),
          (_.unstable_shouldYield = C),
          (_.unstable_wrapCallback = function (z) {
            var X = sl;
            return function () {
              var B = sl;
              sl = X;
              try {
                return z.apply(this, arguments);
              } finally {
                sl = B;
              }
            };
          });
      })(cf)),
    cf
  );
}
var Id;
function Ch() {
  return Id || ((Id = 1), (nf.exports = Rh())), nf.exports;
}
var ff = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pd;
function Hh() {
  if (Pd) return L;
  Pd = 1;
  var _ = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.portal"),
    Y = Symbol.for("react.fragment"),
    v = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    x = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    hl = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    T = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    fl = Symbol.iterator;
  function sl(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (fl && o[fl]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var Sl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ql = Object.assign,
    ut = {};
  function Wl(o, A, H) {
    (this.props = o),
      (this.context = A),
      (this.refs = ut),
      (this.updater = H || Sl);
  }
  (Wl.prototype.isReactComponent = {}),
    (Wl.prototype.setState = function (o, A) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, o, A, "setState");
    }),
    (Wl.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    });
  function xt() {}
  xt.prototype = Wl.prototype;
  function Bl(o, A, H) {
    (this.props = o),
      (this.context = A),
      (this.refs = ut),
      (this.updater = H || Sl);
  }
  var gt = (Bl.prototype = new xt());
  (gt.constructor = Bl), Ql(gt, Wl.prototype), (gt.isPureReactComponent = !0);
  var kt = Array.isArray,
    P = { H: null, A: null, T: null, S: null },
    Zl = Object.prototype.hasOwnProperty;
  function Ft(o, A, H, U, j, $) {
    return (
      (H = $.ref),
      { $$typeof: _, type: o, key: A, ref: H !== void 0 ? H : null, props: $ }
    );
  }
  function It(o, A) {
    return Ft(o.type, A, void 0, void 0, void 0, o.props);
  }
  function C(o) {
    return typeof o == "object" && o !== null && o.$$typeof === _;
  }
  function ll(o) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (H) {
        return A[H];
      })
    );
  }
  var et = /\/+/g;
  function Nt(o, A) {
    return typeof o == "object" && o !== null && o.key != null
      ? ll("" + o.key)
      : A.toString(36);
  }
  function Tt() {}
  function Ut(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(Tt, Tt)
            : ((o.status = "pending"),
              o.then(
                function (A) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = A));
                },
                function (A) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = A));
                }
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function Vl(o, A, H, U, j) {
    var $ = typeof o;
    ($ === "undefined" || $ === "boolean") && (o = null);
    var Q = !1;
    if (o === null) Q = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case _:
            case p:
              Q = !0;
              break;
            case I:
              return (Q = o._init), Vl(Q(o._payload), A, H, U, j);
          }
      }
    if (Q)
      return (
        (j = j(o)),
        (Q = U === "" ? "." + Nt(o, 0) : U),
        kt(j)
          ? ((H = ""),
            Q != null && (H = Q.replace(et, "$&/") + "/"),
            Vl(j, A, H, "", function (_l) {
              return _l;
            }))
          : j != null &&
            (C(j) &&
              (j = It(
                j,
                H +
                  (j.key == null || (o && o.key === j.key)
                    ? ""
                    : ("" + j.key).replace(et, "$&/") + "/") +
                  Q
              )),
            A.push(j)),
        1
      );
    Q = 0;
    var ql = U === "" ? "." : U + ":";
    if (kt(o))
      for (var tl = 0; tl < o.length; tl++)
        (U = o[tl]), ($ = ql + Nt(U, tl)), (Q += Vl(U, A, H, $, j));
    else if (((tl = sl(o)), typeof tl == "function"))
      for (o = tl.call(o), tl = 0; !(U = o.next()).done; )
        (U = U.value), ($ = ql + Nt(U, tl++)), (Q += Vl(U, A, H, $, j));
    else if ($ === "object") {
      if (typeof o.then == "function") return Vl(Ut(o), A, H, U, j);
      throw (
        ((A = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Q;
  }
  function z(o, A, H) {
    if (o == null) return o;
    var U = [],
      j = 0;
    return (
      Vl(o, U, "", "", function ($) {
        return A.call(H, $, j++);
      }),
      U
    );
  }
  function X(o) {
    if (o._status === -1) {
      var A = o._result;
      (A = A()),
        A.then(
          function (H) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = H));
          },
          function (H) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = H));
          }
        ),
        o._status === -1 && ((o._status = 0), (o._result = A));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var B =
    typeof reportError == "function"
      ? reportError
      : function (o) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var A = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof o == "object" &&
                o !== null &&
                typeof o.message == "string"
                  ? String(o.message)
                  : String(o),
              error: o,
            });
            if (!window.dispatchEvent(A)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", o);
            return;
          }
          console.error(o);
        };
  function nl() {}
  return (
    (L.Children = {
      map: z,
      forEach: function (o, A, H) {
        z(
          o,
          function () {
            A.apply(this, arguments);
          },
          H
        );
      },
      count: function (o) {
        var A = 0;
        return (
          z(o, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (o) {
        return (
          z(o, function (A) {
            return A;
          }) || []
        );
      },
      only: function (o) {
        if (!C(o))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return o;
      },
    }),
    (L.Component = Wl),
    (L.Fragment = Y),
    (L.Profiler = q),
    (L.PureComponent = Bl),
    (L.StrictMode = v),
    (L.Suspense = D),
    (L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (L.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (L.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (L.cloneElement = function (o, A, H) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + "."
        );
      var U = Ql({}, o.props),
        j = o.key,
        $ = void 0;
      if (A != null)
        for (Q in (A.ref !== void 0 && ($ = void 0),
        A.key !== void 0 && (j = "" + A.key),
        A))
          !Zl.call(A, Q) ||
            Q === "key" ||
            Q === "__self" ||
            Q === "__source" ||
            (Q === "ref" && A.ref === void 0) ||
            (U[Q] = A[Q]);
      var Q = arguments.length - 2;
      if (Q === 1) U.children = H;
      else if (1 < Q) {
        for (var ql = Array(Q), tl = 0; tl < Q; tl++)
          ql[tl] = arguments[tl + 2];
        U.children = ql;
      }
      return Ft(o.type, j, void 0, void 0, $, U);
    }),
    (L.createContext = function (o) {
      return (
        (o = {
          $$typeof: V,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: x, _context: o }),
        o
      );
    }),
    (L.createElement = function (o, A, H) {
      var U,
        j = {},
        $ = null;
      if (A != null)
        for (U in (A.key !== void 0 && ($ = "" + A.key), A))
          Zl.call(A, U) &&
            U !== "key" &&
            U !== "__self" &&
            U !== "__source" &&
            (j[U] = A[U]);
      var Q = arguments.length - 2;
      if (Q === 1) j.children = H;
      else if (1 < Q) {
        for (var ql = Array(Q), tl = 0; tl < Q; tl++)
          ql[tl] = arguments[tl + 2];
        j.children = ql;
      }
      if (o && o.defaultProps)
        for (U in ((Q = o.defaultProps), Q)) j[U] === void 0 && (j[U] = Q[U]);
      return Ft(o, $, void 0, void 0, null, j);
    }),
    (L.createRef = function () {
      return { current: null };
    }),
    (L.forwardRef = function (o) {
      return { $$typeof: hl, render: o };
    }),
    (L.isValidElement = C),
    (L.lazy = function (o) {
      return { $$typeof: I, _payload: { _status: -1, _result: o }, _init: X };
    }),
    (L.memo = function (o, A) {
      return { $$typeof: T, type: o, compare: A === void 0 ? null : A };
    }),
    (L.startTransition = function (o) {
      var A = P.T,
        H = {};
      P.T = H;
      try {
        var U = o(),
          j = P.S;
        j !== null && j(H, U),
          typeof U == "object" &&
            U !== null &&
            typeof U.then == "function" &&
            U.then(nl, B);
      } catch ($) {
        B($);
      } finally {
        P.T = A;
      }
    }),
    (L.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (L.use = function (o) {
      return P.H.use(o);
    }),
    (L.useActionState = function (o, A, H) {
      return P.H.useActionState(o, A, H);
    }),
    (L.useCallback = function (o, A) {
      return P.H.useCallback(o, A);
    }),
    (L.useContext = function (o) {
      return P.H.useContext(o);
    }),
    (L.useDebugValue = function () {}),
    (L.useDeferredValue = function (o, A) {
      return P.H.useDeferredValue(o, A);
    }),
    (L.useEffect = function (o, A) {
      return P.H.useEffect(o, A);
    }),
    (L.useId = function () {
      return P.H.useId();
    }),
    (L.useImperativeHandle = function (o, A, H) {
      return P.H.useImperativeHandle(o, A, H);
    }),
    (L.useInsertionEffect = function (o, A) {
      return P.H.useInsertionEffect(o, A);
    }),
    (L.useLayoutEffect = function (o, A) {
      return P.H.useLayoutEffect(o, A);
    }),
    (L.useMemo = function (o, A) {
      return P.H.useMemo(o, A);
    }),
    (L.useOptimistic = function (o, A) {
      return P.H.useOptimistic(o, A);
    }),
    (L.useReducer = function (o, A, H) {
      return P.H.useReducer(o, A, H);
    }),
    (L.useRef = function (o) {
      return P.H.useRef(o);
    }),
    (L.useState = function (o) {
      return P.H.useState(o);
    }),
    (L.useSyncExternalStore = function (o, A, H) {
      return P.H.useSyncExternalStore(o, A, H);
    }),
    (L.useTransition = function () {
      return P.H.useTransition();
    }),
    (L.version = "19.0.0"),
    L
  );
}
var lr;
function df() {
  return lr || ((lr = 1), (ff.exports = Hh())), ff.exports;
}
var sf = { exports: {} },
  Hl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tr;
function Bh() {
  if (tr) return Hl;
  tr = 1;
  var _ = df();
  function p(D) {
    var T = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var I = 2; I < arguments.length; I++)
        T += "&args[]=" + encodeURIComponent(arguments[I]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      T +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Y() {}
  var v = {
      d: {
        f: Y,
        r: function () {
          throw Error(p(522));
        },
        D: Y,
        C: Y,
        L: Y,
        m: Y,
        X: Y,
        S: Y,
        M: Y,
      },
      p: 0,
      findDOMNode: null,
    },
    q = Symbol.for("react.portal");
  function x(D, T, I) {
    var fl =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: q,
      key: fl == null ? null : "" + fl,
      children: D,
      containerInfo: T,
      implementation: I,
    };
  }
  var V = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function hl(D, T) {
    if (D === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return (
    (Hl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v),
    (Hl.createPortal = function (D, T) {
      var I =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!T || (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11))
        throw Error(p(299));
      return x(D, T, null, I);
    }),
    (Hl.flushSync = function (D) {
      var T = V.T,
        I = v.p;
      try {
        if (((V.T = null), (v.p = 2), D)) return D();
      } finally {
        (V.T = T), (v.p = I), v.d.f();
      }
    }),
    (Hl.preconnect = function (D, T) {
      typeof D == "string" &&
        (T
          ? ((T = T.crossOrigin),
            (T =
              typeof T == "string"
                ? T === "use-credentials"
                  ? T
                  : ""
                : void 0))
          : (T = null),
        v.d.C(D, T));
    }),
    (Hl.prefetchDNS = function (D) {
      typeof D == "string" && v.d.D(D);
    }),
    (Hl.preinit = function (D, T) {
      if (typeof D == "string" && T && typeof T.as == "string") {
        var I = T.as,
          fl = hl(I, T.crossOrigin),
          sl = typeof T.integrity == "string" ? T.integrity : void 0,
          Sl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
        I === "style"
          ? v.d.S(D, typeof T.precedence == "string" ? T.precedence : void 0, {
              crossOrigin: fl,
              integrity: sl,
              fetchPriority: Sl,
            })
          : I === "script" &&
            v.d.X(D, {
              crossOrigin: fl,
              integrity: sl,
              fetchPriority: Sl,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
      }
    }),
    (Hl.preinitModule = function (D, T) {
      if (typeof D == "string")
        if (typeof T == "object" && T !== null) {
          if (T.as == null || T.as === "script") {
            var I = hl(T.as, T.crossOrigin);
            v.d.M(D, {
              crossOrigin: I,
              integrity: typeof T.integrity == "string" ? T.integrity : void 0,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
          }
        } else T == null && v.d.M(D);
    }),
    (Hl.preload = function (D, T) {
      if (
        typeof D == "string" &&
        typeof T == "object" &&
        T !== null &&
        typeof T.as == "string"
      ) {
        var I = T.as,
          fl = hl(I, T.crossOrigin);
        v.d.L(D, I, {
          crossOrigin: fl,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          type: typeof T.type == "string" ? T.type : void 0,
          fetchPriority:
            typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
          referrerPolicy:
            typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
          imageSrcSet:
            typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
          imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
          media: typeof T.media == "string" ? T.media : void 0,
        });
      }
    }),
    (Hl.preloadModule = function (D, T) {
      if (typeof D == "string")
        if (T) {
          var I = hl(T.as, T.crossOrigin);
          v.d.m(D, {
            as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
            crossOrigin: I,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          });
        } else v.d.m(D);
    }),
    (Hl.requestFormReset = function (D) {
      v.d.r(D);
    }),
    (Hl.unstable_batchedUpdates = function (D, T) {
      return D(T);
    }),
    (Hl.useFormState = function (D, T, I) {
      return V.H.useFormState(D, T, I);
    }),
    (Hl.useFormStatus = function () {
      return V.H.useHostTransitionStatus();
    }),
    (Hl.version = "19.0.0"),
    Hl
  );
}
var ar;
function qh() {
  if (ar) return sf.exports;
  ar = 1;
  function _() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (p) {
        console.error(p);
      }
  }
  return _(), (sf.exports = Bh()), sf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ur;
function Yh() {
  if (ur) return Ne;
  ur = 1;
  var _ = Ch(),
    p = df(),
    Y = qh();
  function v(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function q(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  var x = Symbol.for("react.element"),
    V = Symbol.for("react.transitional.element"),
    hl = Symbol.for("react.portal"),
    D = Symbol.for("react.fragment"),
    T = Symbol.for("react.strict_mode"),
    I = Symbol.for("react.profiler"),
    fl = Symbol.for("react.provider"),
    sl = Symbol.for("react.consumer"),
    Sl = Symbol.for("react.context"),
    Ql = Symbol.for("react.forward_ref"),
    ut = Symbol.for("react.suspense"),
    Wl = Symbol.for("react.suspense_list"),
    xt = Symbol.for("react.memo"),
    Bl = Symbol.for("react.lazy"),
    gt = Symbol.for("react.offscreen"),
    kt = Symbol.for("react.memo_cache_sentinel"),
    P = Symbol.iterator;
  function Zl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (P && l[P]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Ft = Symbol.for("react.client.reference");
  function It(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ft ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case D:
        return "Fragment";
      case hl:
        return "Portal";
      case I:
        return "Profiler";
      case T:
        return "StrictMode";
      case ut:
        return "Suspense";
      case Wl:
        return "SuspenseList";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Sl:
          return (l.displayName || "Context") + ".Provider";
        case sl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ql:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case xt:
          return (
            (t = l.displayName || null), t !== null ? t : It(l.type) || "Memo"
          );
        case Bl:
          (t = l._payload), (l = l._init);
          try {
            return It(l(t));
          } catch {}
      }
    return null;
  }
  var C = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ll = Object.assign,
    et,
    Nt;
  function Tt(l) {
    if (et === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (et = (t && t[1]) || ""),
          (Nt =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      et +
      l +
      Nt
    );
  }
  var Ut = !1;
  function Vl(l, t) {
    if (!l || Ut) return "";
    Ut = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var E = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(E.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(E, []);
                } catch (g) {
                  var y = g;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (g) {
                  y = g;
                }
                l.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                y = g;
              }
              (E = l()) &&
                typeof E.catch == "function" &&
                E.catch(function () {});
            }
          } catch (g) {
            if (g && y && typeof g.stack == "string") return [g.stack, y.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        c = n[0],
        i = n[1];
      if (c && i) {
        var f = c.split(`
`),
          r = i.split(`
`);
        for (
          e = u = 0;
          u < f.length && !f[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; e < r.length && !r[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === f.length || e === r.length)
          for (
            u = f.length - 1, e = r.length - 1;
            1 <= u && 0 <= e && f[u] !== r[e];

          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (f[u] !== r[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || f[u] !== r[e])) {
                  var S =
                    `
` + f[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", l.displayName)),
                    S
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      (Ut = !1), (Error.prepareStackTrace = a);
    }
    return (a = l ? l.displayName || l.name : "") ? Tt(a) : "";
  }
  function z(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Tt(l.type);
      case 16:
        return Tt("Lazy");
      case 13:
        return Tt("Suspense");
      case 19:
        return Tt("SuspenseList");
      case 0:
      case 15:
        return (l = Vl(l.type, !1)), l;
      case 11:
        return (l = Vl(l.type.render, !1)), l;
      case 1:
        return (l = Vl(l.type, !0)), l;
      default:
        return "";
    }
  }
  function X(l) {
    try {
      var t = "";
      do (t += z(l)), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function B(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), t.flags & 4098 && (a = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function nl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function o(l) {
    if (B(l) !== l) throw Error(v(188));
  }
  function A(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = B(l)), t === null)) throw Error(v(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return o(e), l;
          if (n === u) return o(e), t;
          n = n.sibling;
        }
        throw Error(v(188));
      }
      if (a.return !== u.return) (a = e), (u = n);
      else {
        for (var c = !1, i = e.child; i; ) {
          if (i === a) {
            (c = !0), (a = e), (u = n);
            break;
          }
          if (i === u) {
            (c = !0), (u = e), (a = n);
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === a) {
              (c = !0), (a = n), (u = e);
              break;
            }
            if (i === u) {
              (c = !0), (u = n), (a = e);
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(v(189));
        }
      }
      if (a.alternate !== u) throw Error(v(190));
    }
    if (a.tag !== 3) throw Error(v(188));
    return a.stateNode.current === a ? l : t;
  }
  function H(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = H(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var U = Array.isArray,
    j = Y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = { pending: !1, data: null, method: null, action: null },
    Q = [],
    ql = -1;
  function tl(l) {
    return { current: l };
  }
  function _l(l) {
    0 > ql || ((l.current = Q[ql]), (Q[ql] = null), ql--);
  }
  function ol(l, t) {
    ql++, (Q[ql] = l.current), (l.current = t);
  }
  var At = tl(null),
    Ru = tl(null),
    Pt = tl(null),
    Re = tl(null);
  function Ce(l, t) {
    switch ((ol(Pt, t), ol(Ru, l), ol(At, null), (l = t.nodeType), l)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? zd(t) : 0;
        break;
      default:
        if (
          ((l = l === 8 ? t.parentNode : t),
          (t = l.tagName),
          (l = l.namespaceURI))
        )
          (l = zd(l)), (t = Dd(l, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    _l(At), ol(At, t);
  }
  function $a() {
    _l(At), _l(Ru), _l(Pt);
  }
  function $n(l) {
    l.memoizedState !== null && ol(Re, l);
    var t = At.current,
      a = Dd(t, l.type);
    t !== a && (ol(Ru, l), ol(At, a));
  }
  function He(l) {
    Ru.current === l && (_l(At), _l(Ru)),
      Re.current === l && (_l(Re), (De._currentValue = $));
  }
  var Wn = Object.prototype.hasOwnProperty,
    kn = _.unstable_scheduleCallback,
    Fn = _.unstable_cancelCallback,
    sr = _.unstable_shouldYield,
    or = _.unstable_requestPaint,
    zt = _.unstable_now,
    dr = _.unstable_getCurrentPriorityLevel,
    rf = _.unstable_ImmediatePriority,
    hf = _.unstable_UserBlockingPriority,
    Be = _.unstable_NormalPriority,
    rr = _.unstable_LowPriority,
    vf = _.unstable_IdlePriority,
    hr = _.log,
    vr = _.unstable_setDisableYieldValue,
    Cu = null,
    kl = null;
  function mr(l) {
    if (kl && typeof kl.onCommitFiberRoot == "function")
      try {
        kl.onCommitFiberRoot(Cu, l, void 0, (l.current.flags & 128) === 128);
      } catch {}
  }
  function la(l) {
    if (
      (typeof hr == "function" && vr(l),
      kl && typeof kl.setStrictMode == "function")
    )
      try {
        kl.setStrictMode(Cu, l);
      } catch {}
  }
  var Fl = Math.clz32 ? Math.clz32 : Sr,
    yr = Math.log,
    gr = Math.LN2;
  function Sr(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((yr(l) / gr) | 0)) | 0;
  }
  var qe = 128,
    Ye = 4194304;
  function Da(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ge(l, t) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      e = l.suspendedLanes,
      n = l.pingedLanes,
      c = l.warmLanes;
    l = l.finishedLanes !== 0;
    var i = a & 134217727;
    return (
      i !== 0
        ? ((a = i & ~e),
          a !== 0
            ? (u = Da(a))
            : ((n &= i),
              n !== 0
                ? (u = Da(n))
                : l || ((c = i & ~c), c !== 0 && (u = Da(c)))))
        : ((i = a & ~e),
          i !== 0
            ? (u = Da(i))
            : n !== 0
            ? (u = Da(n))
            : l || ((c = a & ~c), c !== 0 && (u = Da(c)))),
      u === 0
        ? 0
        : t !== 0 &&
          t !== u &&
          !(t & e) &&
          ((e = u & -u),
          (c = t & -t),
          e >= c || (e === 32 && (c & 4194176) !== 0))
        ? t
        : u
    );
  }
  function Hu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function _r(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function mf() {
    var l = qe;
    return (qe <<= 1), !(qe & 4194176) && (qe = 128), l;
  }
  function yf() {
    var l = Ye;
    return (Ye <<= 1), !(Ye & 62914560) && (Ye = 4194304), l;
  }
  function In(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Bu(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function br(l, t, a, u, e, n) {
    var c = l.pendingLanes;
    (l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0);
    var i = l.entanglements,
      f = l.expirationTimes,
      r = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var S = 31 - Fl(a),
        E = 1 << S;
      (i[S] = 0), (f[S] = -1);
      var y = r[S];
      if (y !== null)
        for (r[S] = null, S = 0; S < y.length; S++) {
          var g = y[S];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~E;
    }
    u !== 0 && gf(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function gf(l, t, a) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var u = 31 - Fl(t);
    (l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 4194218));
  }
  function Sf(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - Fl(a),
        e = 1 << u;
      (e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e);
    }
  }
  function _f(l) {
    return (
      (l &= -l), 2 < l ? (8 < l ? (l & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function bf() {
    var l = j.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Zd(l.type));
  }
  function Er(l, t) {
    var a = j.p;
    try {
      return (j.p = l), t();
    } finally {
      j.p = a;
    }
  }
  var ta = Math.random().toString(36).slice(2),
    Rl = "__reactFiber$" + ta,
    Kl = "__reactProps$" + ta,
    Wa = "__reactContainer$" + ta,
    Pn = "__reactEvents$" + ta,
    Tr = "__reactListeners$" + ta,
    Ar = "__reactHandles$" + ta,
    Ef = "__reactResources$" + ta,
    qu = "__reactMarker$" + ta;
  function lc(l) {
    delete l[Rl], delete l[Kl], delete l[Pn], delete l[Tr], delete l[Ar];
  }
  function ja(l) {
    var t = l[Rl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Wa] || a[Rl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = Md(l); l !== null; ) {
            if ((a = l[Rl])) return a;
            l = Md(l);
          }
        return t;
      }
      (l = a), (a = l.parentNode);
    }
    return null;
  }
  function ka(l) {
    if ((l = l[Rl] || l[Wa])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Yu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(v(33));
  }
  function Fa(l) {
    var t = l[Ef];
    return (
      t ||
        (t = l[Ef] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Dl(l) {
    l[qu] = !0;
  }
  var Tf = new Set(),
    Af = {};
  function Oa(l, t) {
    Ia(l, t), Ia(l + "Capture", t);
  }
  function Ia(l, t) {
    for (Af[l] = t, l = 0; l < t.length; l++) Tf.add(t[l]);
  }
  var Rt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    zr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    zf = {},
    Df = {};
  function Dr(l) {
    return Wn.call(Df, l)
      ? !0
      : Wn.call(zf, l)
      ? !1
      : zr.test(l)
      ? (Df[l] = !0)
      : ((zf[l] = !0), !1);
  }
  function Xe(l, t, a) {
    if (Dr(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Le(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ct(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function nt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function jf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function jr(l) {
    var t = jf(l) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      u = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var e = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (c) {
            (u = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (c) {
            u = "" + c;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function Qe(l) {
    l._valueTracker || (l._valueTracker = jr(l));
  }
  function Of(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = jf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Ze(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Or = /[\n"\\]/g;
  function ct(l) {
    return l.replace(Or, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function tc(l, t, a, u, e, n, c, i) {
    (l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + nt(t))
          : l.value !== "" + nt(t) && (l.value = "" + nt(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? ac(l, c, nt(t))
        : a != null
        ? ac(l, c, nt(a))
        : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.name = "" + nt(i))
        : l.removeAttribute("name");
  }
  function Mf(l, t, a, u, e, n, c, i) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (a = a != null ? "" + nt(a) : ""),
        (t = t != null ? "" + nt(t) : a),
        i || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = i ? l.checked : !!u),
      (l.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c);
  }
  function ac(l, t, a) {
    (t === "number" && Ze(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Pa(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        (e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + nt(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          (l[e].selected = !0), u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function pf(l, t, a) {
    if (
      t != null &&
      ((t = "" + nt(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + nt(a) : "";
  }
  function xf(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(v(92));
        if (U(u)) {
          if (1 < u.length) throw Error(v(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), (t = a);
    }
    (a = nt(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u);
  }
  function lu(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Mr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Nf(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : u
      ? l.setProperty(t, a)
      : typeof a != "number" || a === 0 || Mr.has(t)
      ? t === "float"
        ? (l.cssFloat = a)
        : (l[t] = ("" + a).trim())
      : (l[t] = a + "px");
  }
  function Uf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(v(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
            ? (l.cssFloat = "")
            : (l[u] = ""));
      for (var e in t)
        (u = t[e]), t.hasOwnProperty(e) && a[e] !== u && Nf(l, e, u);
    } else for (var n in t) t.hasOwnProperty(n) && Nf(l, n, t[n]);
  }
  function uc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var pr = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    xr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ve(l) {
    return xr.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var ec = null;
  function nc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var tu = null,
    au = null;
  function Rf(l) {
    var t = ka(l);
    if (t && (l = t.stateNode)) {
      var a = l[Kl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (tc(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + ct("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Kl] || null;
                if (!e) throw Error(v(90));
                tc(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (u = a[t]), u.form === l.form && Of(u);
          }
          break l;
        case "textarea":
          pf(l, a.value, a.defaultValue);
          break l;
        case "select":
          (t = a.value), t != null && Pa(l, !!a.multiple, t, !1);
      }
    }
  }
  var cc = !1;
  function Cf(l, t, a) {
    if (cc) return l(t, a);
    cc = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((cc = !1),
        (tu !== null || au !== null) &&
          (Mn(), tu && ((t = tu), (l = au), (au = tu = null), Rf(t), l)))
      )
        for (t = 0; t < l.length; t++) Rf(l[t]);
    }
  }
  function Gu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Kl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(v(231, t, typeof a));
    return a;
  }
  var ic = !1;
  if (Rt)
    try {
      var Xu = {};
      Object.defineProperty(Xu, "passive", {
        get: function () {
          ic = !0;
        },
      }),
        window.addEventListener("test", Xu, Xu),
        window.removeEventListener("test", Xu, Xu);
    } catch {
      ic = !1;
    }
  var aa = null,
    fc = null,
    Ke = null;
  function Hf() {
    if (Ke) return Ke;
    var l,
      t = fc,
      a = t.length,
      u,
      e = "value" in aa ? aa.value : aa.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var c = a - l;
    for (u = 1; u <= c && t[a - u] === e[n - u]; u++);
    return (Ke = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function we(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Je() {
    return !0;
  }
  function Bf() {
    return !1;
  }
  function wl(l) {
    function t(a, u, e, n, c) {
      (this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var i in l)
        l.hasOwnProperty(i) && ((a = l[i]), (this[i] = a ? a(n) : n[i]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Je
          : Bf),
        (this.isPropagationStopped = Bf),
        this
      );
    }
    return (
      ll(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Je));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Je));
        },
        persist: function () {},
        isPersistent: Je,
      }),
      t
    );
  }
  var Ma = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    $e = wl(Ma),
    Lu = ll({}, Ma, { view: 0, detail: 0 }),
    Nr = wl(Lu),
    sc,
    oc,
    Qu,
    We = ll({}, Lu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: rc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Qu &&
              (Qu && l.type === "mousemove"
                ? ((sc = l.screenX - Qu.screenX), (oc = l.screenY - Qu.screenY))
                : (oc = sc = 0),
              (Qu = l)),
            sc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : oc;
      },
    }),
    qf = wl(We),
    Ur = ll({}, We, { dataTransfer: 0 }),
    Rr = wl(Ur),
    Cr = ll({}, Lu, { relatedTarget: 0 }),
    dc = wl(Cr),
    Hr = ll({}, Ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Br = wl(Hr),
    qr = ll({}, Ma, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Yr = wl(qr),
    Gr = ll({}, Ma, { data: 0 }),
    Yf = wl(Gr),
    Xr = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Lr = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Qr = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Zr(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Qr[l])
      ? !!t[l]
      : !1;
  }
  function rc() {
    return Zr;
  }
  var Vr = ll({}, Lu, {
      key: function (l) {
        if (l.key) {
          var t = Xr[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = we(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Lr[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: rc,
      charCode: function (l) {
        return l.type === "keypress" ? we(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? we(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    Kr = wl(Vr),
    wr = ll({}, We, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Gf = wl(wr),
    Jr = ll({}, Lu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: rc,
    }),
    $r = wl(Jr),
    Wr = ll({}, Ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kr = wl(Wr),
    Fr = ll({}, We, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ir = wl(Fr),
    Pr = ll({}, Ma, { newState: 0, oldState: 0 }),
    l0 = wl(Pr),
    t0 = [9, 13, 27, 32],
    hc = Rt && "CompositionEvent" in window,
    Zu = null;
  Rt && "documentMode" in document && (Zu = document.documentMode);
  var a0 = Rt && "TextEvent" in window && !Zu,
    Xf = Rt && (!hc || (Zu && 8 < Zu && 11 >= Zu)),
    Lf = " ",
    Qf = !1;
  function Zf(l, t) {
    switch (l) {
      case "keyup":
        return t0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vf(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var uu = !1;
  function u0(l, t) {
    switch (l) {
      case "compositionend":
        return Vf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Qf = !0), Lf);
      case "textInput":
        return (l = t.data), l === Lf && Qf ? null : l;
      default:
        return null;
    }
  }
  function e0(l, t) {
    if (uu)
      return l === "compositionend" || (!hc && Zf(l, t))
        ? ((l = Hf()), (Ke = fc = aa = null), (uu = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Xf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var n0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Kf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!n0[l.type] : t === "textarea";
  }
  function wf(l, t, a, u) {
    tu ? (au ? au.push(u) : (au = [u])) : (tu = u),
      (t = Rn(t, "onChange")),
      0 < t.length &&
        ((a = new $e("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t }));
  }
  var Vu = null,
    Ku = null;
  function c0(l) {
    _d(l, 0);
  }
  function ke(l) {
    var t = Yu(l);
    if (Of(t)) return l;
  }
  function Jf(l, t) {
    if (l === "change") return t;
  }
  var $f = !1;
  if (Rt) {
    var vc;
    if (Rt) {
      var mc = "oninput" in document;
      if (!mc) {
        var Wf = document.createElement("div");
        Wf.setAttribute("oninput", "return;"),
          (mc = typeof Wf.oninput == "function");
      }
      vc = mc;
    } else vc = !1;
    $f = vc && (!document.documentMode || 9 < document.documentMode);
  }
  function kf() {
    Vu && (Vu.detachEvent("onpropertychange", Ff), (Ku = Vu = null));
  }
  function Ff(l) {
    if (l.propertyName === "value" && ke(Ku)) {
      var t = [];
      wf(t, Ku, l, nc(l)), Cf(c0, t);
    }
  }
  function i0(l, t, a) {
    l === "focusin"
      ? (kf(), (Vu = t), (Ku = a), Vu.attachEvent("onpropertychange", Ff))
      : l === "focusout" && kf();
  }
  function f0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return ke(Ku);
  }
  function s0(l, t) {
    if (l === "click") return ke(t);
  }
  function o0(l, t) {
    if (l === "input" || l === "change") return ke(t);
  }
  function d0(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Il = typeof Object.is == "function" ? Object.is : d0;
  function wu(l, t) {
    if (Il(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Wn.call(t, e) || !Il(l[e], t[e])) return !1;
    }
    return !0;
  }
  function If(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Pf(l, t) {
    var a = If(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = If(a);
    }
  }
  function ls(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? ls(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ts(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Ze(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ze(l.document);
    }
    return t;
  }
  function yc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  function r0(l, t) {
    var a = ts(t);
    t = l.focusedElem;
    var u = l.selectionRange;
    if (
      a !== t &&
      t &&
      t.ownerDocument &&
      ls(t.ownerDocument.documentElement, t)
    ) {
      if (u !== null && yc(t)) {
        if (
          ((l = u.start),
          (a = u.end),
          a === void 0 && (a = l),
          "selectionStart" in t)
        )
          (t.selectionStart = l),
            (t.selectionEnd = Math.min(a, t.value.length));
        else if (
          ((a = ((l = t.ownerDocument || document) && l.defaultView) || window),
          a.getSelection)
        ) {
          a = a.getSelection();
          var e = t.textContent.length,
            n = Math.min(u.start, e);
          (u = u.end === void 0 ? n : Math.min(u.end, e)),
            !a.extend && n > u && ((e = u), (u = n), (n = e)),
            (e = Pf(t, n));
          var c = Pf(t, u);
          e &&
            c &&
            (a.rangeCount !== 1 ||
              a.anchorNode !== e.node ||
              a.anchorOffset !== e.offset ||
              a.focusNode !== c.node ||
              a.focusOffset !== c.offset) &&
            ((l = l.createRange()),
            l.setStart(e.node, e.offset),
            a.removeAllRanges(),
            n > u
              ? (a.addRange(l), a.extend(c.node, c.offset))
              : (l.setEnd(c.node, c.offset), a.addRange(l)));
        }
      }
      for (l = [], a = t; (a = a.parentNode); )
        a.nodeType === 1 &&
          l.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < l.length; t++)
        (a = l[t]),
          (a.element.scrollLeft = a.left),
          (a.element.scrollTop = a.top);
    }
  }
  var h0 = Rt && "documentMode" in document && 11 >= document.documentMode,
    eu = null,
    gc = null,
    Ju = null,
    Sc = !1;
  function as(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Sc ||
      eu == null ||
      eu !== Ze(u) ||
      ((u = eu),
      "selectionStart" in u && yc(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Ju && wu(Ju, u)) ||
        ((Ju = u),
        (u = Rn(gc, "onSelect")),
        0 < u.length &&
          ((t = new $e("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = eu))));
  }
  function pa(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var nu = {
      animationend: pa("Animation", "AnimationEnd"),
      animationiteration: pa("Animation", "AnimationIteration"),
      animationstart: pa("Animation", "AnimationStart"),
      transitionrun: pa("Transition", "TransitionRun"),
      transitionstart: pa("Transition", "TransitionStart"),
      transitioncancel: pa("Transition", "TransitionCancel"),
      transitionend: pa("Transition", "TransitionEnd"),
    },
    _c = {},
    us = {};
  Rt &&
    ((us = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete nu.animationend.animation,
      delete nu.animationiteration.animation,
      delete nu.animationstart.animation),
    "TransitionEvent" in window || delete nu.transitionend.transition);
  function xa(l) {
    if (_c[l]) return _c[l];
    if (!nu[l]) return l;
    var t = nu[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in us) return (_c[l] = t[a]);
    return l;
  }
  var es = xa("animationend"),
    ns = xa("animationiteration"),
    cs = xa("animationstart"),
    v0 = xa("transitionrun"),
    m0 = xa("transitionstart"),
    y0 = xa("transitioncancel"),
    is = xa("transitionend"),
    fs = new Map(),
    ss =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function St(l, t) {
    fs.set(l, t), Oa(t, [l]);
  }
  var it = [],
    cu = 0,
    bc = 0;
  function Fe() {
    for (var l = cu, t = (bc = cu = 0); t < l; ) {
      var a = it[t];
      it[t++] = null;
      var u = it[t];
      it[t++] = null;
      var e = it[t];
      it[t++] = null;
      var n = it[t];
      if (((it[t++] = null), u !== null && e !== null)) {
        var c = u.pending;
        c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
          (u.pending = e);
      }
      n !== 0 && os(a, e, n);
    }
  }
  function Ie(l, t, a, u) {
    (it[cu++] = l),
      (it[cu++] = t),
      (it[cu++] = a),
      (it[cu++] = u),
      (bc |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u);
  }
  function Ec(l, t, a, u) {
    return Ie(l, t, a, u), Pe(l);
  }
  function ua(l, t) {
    return Ie(l, null, null, t), Pe(l);
  }
  function os(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      (n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return);
    e &&
      t !== null &&
      l.tag === 3 &&
      ((n = l.stateNode),
      (e = 31 - Fl(a)),
      (n = n.hiddenUpdates),
      (l = n[e]),
      l === null ? (n[e] = [t]) : l.push(t),
      (t.lane = a | 536870912));
  }
  function Pe(l) {
    if (50 < Se) throw ((Se = 0), (Oi = null), Error(v(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var iu = {},
    ds = new WeakMap();
  function ft(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = ds.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: X(t) }), ds.set(l, t), t);
    }
    return { value: l, source: t, stack: X(t) };
  }
  var fu = [],
    su = 0,
    ln = null,
    tn = 0,
    st = [],
    ot = 0,
    Na = null,
    Ht = 1,
    Bt = "";
  function Ua(l, t) {
    (fu[su++] = tn), (fu[su++] = ln), (ln = l), (tn = t);
  }
  function rs(l, t, a) {
    (st[ot++] = Ht), (st[ot++] = Bt), (st[ot++] = Na), (Na = l);
    var u = Ht;
    l = Bt;
    var e = 32 - Fl(u) - 1;
    (u &= ~(1 << e)), (a += 1);
    var n = 32 - Fl(t) + e;
    if (30 < n) {
      var c = e - (e % 5);
      (n = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (e -= c),
        (Ht = (1 << (32 - Fl(t) + e)) | (a << e) | u),
        (Bt = n + l);
    } else (Ht = (1 << n) | (a << e) | u), (Bt = l);
  }
  function Tc(l) {
    l.return !== null && (Ua(l, 1), rs(l, 1, 0));
  }
  function Ac(l) {
    for (; l === ln; )
      (ln = fu[--su]), (fu[su] = null), (tn = fu[--su]), (fu[su] = null);
    for (; l === Na; )
      (Na = st[--ot]),
        (st[ot] = null),
        (Bt = st[--ot]),
        (st[ot] = null),
        (Ht = st[--ot]),
        (st[ot] = null);
  }
  var Yl = null,
    xl = null,
    k = !1,
    _t = null,
    Dt = !1,
    zc = Error(v(519));
  function Ra(l) {
    var t = Error(v(418, ""));
    throw (ku(ft(t, l)), zc);
  }
  function hs(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Rl] = l), (t[Kl] = u), a)) {
      case "dialog":
        J("cancel", t), J("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        J("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < be.length; a++) J(be[a], t);
        break;
      case "source":
        J("error", t);
        break;
      case "img":
      case "image":
      case "link":
        J("error", t), J("load", t);
        break;
      case "details":
        J("toggle", t);
        break;
      case "input":
        J("invalid", t),
          Mf(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0
          ),
          Qe(t);
        break;
      case "select":
        J("invalid", t);
        break;
      case "textarea":
        J("invalid", t), xf(t, u.value, u.defaultValue, u.children), Qe(t);
    }
    (a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      Ad(t.textContent, a)
        ? (u.popover != null && (J("beforetoggle", t), J("toggle", t)),
          u.onScroll != null && J("scroll", t),
          u.onScrollEnd != null && J("scrollend", t),
          u.onClick != null && (t.onclick = Cn),
          (t = !0))
        : (t = !1),
      t || Ra(l);
  }
  function vs(l) {
    for (Yl = l.return; Yl; )
      switch (Yl.tag) {
        case 3:
        case 27:
          Dt = !0;
          return;
        case 5:
        case 13:
          Dt = !1;
          return;
        default:
          Yl = Yl.return;
      }
  }
  function $u(l) {
    if (l !== Yl) return !1;
    if (!k) return vs(l), (k = !0), !1;
    var t = !1,
      a;
    if (
      ((a = l.tag !== 3 && l.tag !== 27) &&
        ((a = l.tag === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Vi(l.type, l.memoizedProps))),
        (a = !a)),
      a && (t = !0),
      t && xl && Ra(l),
      vs(l),
      l.tag === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(v(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((a = l.data), a === "/$")) {
              if (t === 0) {
                xl = Et(l.nextSibling);
                break l;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          l = l.nextSibling;
        }
        xl = null;
      }
    } else xl = Yl ? Et(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Wu() {
    (xl = Yl = null), (k = !1);
  }
  function ku(l) {
    _t === null ? (_t = [l]) : _t.push(l);
  }
  var Fu = Error(v(460)),
    ms = Error(v(474)),
    Dc = { then: function () {} };
  function ys(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function an() {}
  function gs(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(an, an), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), l === Fu ? Error(v(483)) : l);
      default:
        if (typeof t.status == "string") t.then(an, an);
        else {
          if (((l = cl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(v(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "fulfilled"), (e.value = u);
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "rejected"), (e.reason = u);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), l === Fu ? Error(v(483)) : l);
        }
        throw ((Iu = t), Fu);
    }
  }
  var Iu = null;
  function Ss() {
    if (Iu === null) throw Error(v(459));
    var l = Iu;
    return (Iu = null), l;
  }
  var ou = null,
    Pu = 0;
  function un(l) {
    var t = Pu;
    return (Pu += 1), ou === null && (ou = []), gs(ou, l, t);
  }
  function le(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function en(l, t) {
    throw t.$$typeof === x
      ? Error(v(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          v(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function _s(l) {
    var t = l._init;
    return t(l._payload);
  }
  function bs(l) {
    function t(h, d) {
      if (l) {
        var m = h.deletions;
        m === null ? ((h.deletions = [d]), (h.flags |= 16)) : m.push(d);
      }
    }
    function a(h, d) {
      if (!l) return null;
      for (; d !== null; ) t(h, d), (d = d.sibling);
      return null;
    }
    function u(h) {
      for (var d = new Map(); h !== null; )
        h.key !== null ? d.set(h.key, h) : d.set(h.index, h), (h = h.sibling);
      return d;
    }
    function e(h, d) {
      return (h = ma(h, d)), (h.index = 0), (h.sibling = null), h;
    }
    function n(h, d, m) {
      return (
        (h.index = m),
        l
          ? ((m = h.alternate),
            m !== null
              ? ((m = m.index), m < d ? ((h.flags |= 33554434), d) : m)
              : ((h.flags |= 33554434), d))
          : ((h.flags |= 1048576), d)
      );
    }
    function c(h) {
      return l && h.alternate === null && (h.flags |= 33554434), h;
    }
    function i(h, d, m, b) {
      return d === null || d.tag !== 6
        ? ((d = _i(m, h.mode, b)), (d.return = h), d)
        : ((d = e(d, m)), (d.return = h), d);
    }
    function f(h, d, m, b) {
      var O = m.type;
      return O === D
        ? S(h, d, m.props.children, b, m.key)
        : d !== null &&
          (d.elementType === O ||
            (typeof O == "object" &&
              O !== null &&
              O.$$typeof === Bl &&
              _s(O) === d.type))
        ? ((d = e(d, m.props)), le(d, m), (d.return = h), d)
        : ((d = An(m.type, m.key, m.props, null, h.mode, b)),
          le(d, m),
          (d.return = h),
          d);
    }
    function r(h, d, m, b) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== m.containerInfo ||
        d.stateNode.implementation !== m.implementation
        ? ((d = bi(m, h.mode, b)), (d.return = h), d)
        : ((d = e(d, m.children || [])), (d.return = h), d);
    }
    function S(h, d, m, b, O) {
      return d === null || d.tag !== 7
        ? ((d = Za(m, h.mode, b, O)), (d.return = h), d)
        : ((d = e(d, m)), (d.return = h), d);
    }
    function E(h, d, m) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return (d = _i("" + d, h.mode, m)), (d.return = h), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case V:
            return (
              (m = An(d.type, d.key, d.props, null, h.mode, m)),
              le(m, d),
              (m.return = h),
              m
            );
          case hl:
            return (d = bi(d, h.mode, m)), (d.return = h), d;
          case Bl:
            var b = d._init;
            return (d = b(d._payload)), E(h, d, m);
        }
        if (U(d) || Zl(d))
          return (d = Za(d, h.mode, m, null)), (d.return = h), d;
        if (typeof d.then == "function") return E(h, un(d), m);
        if (d.$$typeof === Sl) return E(h, bn(h, d), m);
        en(h, d);
      }
      return null;
    }
    function y(h, d, m, b) {
      var O = d !== null ? d.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return O !== null ? null : i(h, d, "" + m, b);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case V:
            return m.key === O ? f(h, d, m, b) : null;
          case hl:
            return m.key === O ? r(h, d, m, b) : null;
          case Bl:
            return (O = m._init), (m = O(m._payload)), y(h, d, m, b);
        }
        if (U(m) || Zl(m)) return O !== null ? null : S(h, d, m, b, null);
        if (typeof m.then == "function") return y(h, d, un(m), b);
        if (m.$$typeof === Sl) return y(h, d, bn(h, m), b);
        en(h, m);
      }
      return null;
    }
    function g(h, d, m, b, O) {
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return (h = h.get(m) || null), i(d, h, "" + b, O);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case V:
            return (
              (h = h.get(b.key === null ? m : b.key) || null), f(d, h, b, O)
            );
          case hl:
            return (
              (h = h.get(b.key === null ? m : b.key) || null), r(d, h, b, O)
            );
          case Bl:
            var K = b._init;
            return (b = K(b._payload)), g(h, d, m, b, O);
        }
        if (U(b) || Zl(b)) return (h = h.get(m) || null), S(d, h, b, O, null);
        if (typeof b.then == "function") return g(h, d, m, un(b), O);
        if (b.$$typeof === Sl) return g(h, d, m, bn(d, b), O);
        en(d, b);
      }
      return null;
    }
    function M(h, d, m, b) {
      for (
        var O = null, K = null, N = d, R = (d = 0), Ml = null;
        N !== null && R < m.length;
        R++
      ) {
        N.index > R ? ((Ml = N), (N = null)) : (Ml = N.sibling);
        var F = y(h, N, m[R], b);
        if (F === null) {
          N === null && (N = Ml);
          break;
        }
        l && N && F.alternate === null && t(h, N),
          (d = n(F, d, R)),
          K === null ? (O = F) : (K.sibling = F),
          (K = F),
          (N = Ml);
      }
      if (R === m.length) return a(h, N), k && Ua(h, R), O;
      if (N === null) {
        for (; R < m.length; R++)
          (N = E(h, m[R], b)),
            N !== null &&
              ((d = n(N, d, R)),
              K === null ? (O = N) : (K.sibling = N),
              (K = N));
        return k && Ua(h, R), O;
      }
      for (N = u(N); R < m.length; R++)
        (Ml = g(N, h, R, m[R], b)),
          Ml !== null &&
            (l &&
              Ml.alternate !== null &&
              N.delete(Ml.key === null ? R : Ml.key),
            (d = n(Ml, d, R)),
            K === null ? (O = Ml) : (K.sibling = Ml),
            (K = Ml));
      return (
        l &&
          N.forEach(function (Ta) {
            return t(h, Ta);
          }),
        k && Ua(h, R),
        O
      );
    }
    function G(h, d, m, b) {
      if (m == null) throw Error(v(151));
      for (
        var O = null, K = null, N = d, R = (d = 0), Ml = null, F = m.next();
        N !== null && !F.done;
        R++, F = m.next()
      ) {
        N.index > R ? ((Ml = N), (N = null)) : (Ml = N.sibling);
        var Ta = y(h, N, F.value, b);
        if (Ta === null) {
          N === null && (N = Ml);
          break;
        }
        l && N && Ta.alternate === null && t(h, N),
          (d = n(Ta, d, R)),
          K === null ? (O = Ta) : (K.sibling = Ta),
          (K = Ta),
          (N = Ml);
      }
      if (F.done) return a(h, N), k && Ua(h, R), O;
      if (N === null) {
        for (; !F.done; R++, F = m.next())
          (F = E(h, F.value, b)),
            F !== null &&
              ((d = n(F, d, R)),
              K === null ? (O = F) : (K.sibling = F),
              (K = F));
        return k && Ua(h, R), O;
      }
      for (N = u(N); !F.done; R++, F = m.next())
        (F = g(N, h, R, F.value, b)),
          F !== null &&
            (l && F.alternate !== null && N.delete(F.key === null ? R : F.key),
            (d = n(F, d, R)),
            K === null ? (O = F) : (K.sibling = F),
            (K = F));
      return (
        l &&
          N.forEach(function (xh) {
            return t(h, xh);
          }),
        k && Ua(h, R),
        O
      );
    }
    function yl(h, d, m, b) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === D &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case V:
            l: {
              for (var O = m.key; d !== null; ) {
                if (d.key === O) {
                  if (((O = m.type), O === D)) {
                    if (d.tag === 7) {
                      a(h, d.sibling),
                        (b = e(d, m.props.children)),
                        (b.return = h),
                        (h = b);
                      break l;
                    }
                  } else if (
                    d.elementType === O ||
                    (typeof O == "object" &&
                      O !== null &&
                      O.$$typeof === Bl &&
                      _s(O) === d.type)
                  ) {
                    a(h, d.sibling),
                      (b = e(d, m.props)),
                      le(b, m),
                      (b.return = h),
                      (h = b);
                    break l;
                  }
                  a(h, d);
                  break;
                } else t(h, d);
                d = d.sibling;
              }
              m.type === D
                ? ((b = Za(m.props.children, h.mode, b, m.key)),
                  (b.return = h),
                  (h = b))
                : ((b = An(m.type, m.key, m.props, null, h.mode, b)),
                  le(b, m),
                  (b.return = h),
                  (h = b));
            }
            return c(h);
          case hl:
            l: {
              for (O = m.key; d !== null; ) {
                if (d.key === O)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === m.containerInfo &&
                    d.stateNode.implementation === m.implementation
                  ) {
                    a(h, d.sibling),
                      (b = e(d, m.children || [])),
                      (b.return = h),
                      (h = b);
                    break l;
                  } else {
                    a(h, d);
                    break;
                  }
                else t(h, d);
                d = d.sibling;
              }
              (b = bi(m, h.mode, b)), (b.return = h), (h = b);
            }
            return c(h);
          case Bl:
            return (O = m._init), (m = O(m._payload)), yl(h, d, m, b);
        }
        if (U(m)) return M(h, d, m, b);
        if (Zl(m)) {
          if (((O = Zl(m)), typeof O != "function")) throw Error(v(150));
          return (m = O.call(m)), G(h, d, m, b);
        }
        if (typeof m.then == "function") return yl(h, d, un(m), b);
        if (m.$$typeof === Sl) return yl(h, d, bn(h, m), b);
        en(h, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          d !== null && d.tag === 6
            ? (a(h, d.sibling), (b = e(d, m)), (b.return = h), (h = b))
            : (a(h, d), (b = _i(m, h.mode, b)), (b.return = h), (h = b)),
          c(h))
        : a(h, d);
    }
    return function (h, d, m, b) {
      try {
        Pu = 0;
        var O = yl(h, d, m, b);
        return (ou = null), O;
      } catch (N) {
        if (N === Fu) throw N;
        var K = vt(29, N, null, h.mode);
        return (K.lanes = b), (K.return = h), K;
      } finally {
      }
    };
  }
  var Ca = bs(!0),
    Es = bs(!1),
    du = tl(null),
    nn = tl(0);
  function Ts(l, t) {
    (l = Jt), ol(nn, l), ol(du, t), (Jt = l | t.baseLanes);
  }
  function jc() {
    ol(nn, Jt), ol(du, du.current);
  }
  function Oc() {
    (Jt = nn.current), _l(du), _l(nn);
  }
  var dt = tl(null),
    jt = null;
  function ea(l) {
    var t = l.alternate;
    ol(Al, Al.current & 1),
      ol(dt, l),
      jt === null &&
        (t === null || du.current !== null || t.memoizedState !== null) &&
        (jt = l);
  }
  function As(l) {
    if (l.tag === 22) {
      if ((ol(Al, Al.current), ol(dt, l), jt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (jt = l);
      }
    } else na();
  }
  function na() {
    ol(Al, Al.current), ol(dt, dt.current);
  }
  function qt(l) {
    _l(dt), jt === l && (jt = null), _l(Al);
  }
  var Al = tl(0);
  function cn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var g0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                });
            };
          },
    S0 = _.unstable_scheduleCallback,
    _0 = _.unstable_NormalPriority,
    zl = {
      $$typeof: Sl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Mc() {
    return { controller: new g0(), data: new Map(), refCount: 0 };
  }
  function te(l) {
    l.refCount--,
      l.refCount === 0 &&
        S0(_0, function () {
          l.controller.abort();
        });
  }
  var ae = null,
    pc = 0,
    ru = 0,
    hu = null;
  function b0(l, t) {
    if (ae === null) {
      var a = (ae = []);
      (pc = 0),
        (ru = Hi()),
        (hu = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        });
    }
    return pc++, t.then(zs, zs), t;
  }
  function zs() {
    if (--pc === 0 && ae !== null) {
      hu !== null && (hu.status = "fulfilled");
      var l = ae;
      (ae = null), (ru = 0), (hu = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function E0(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          (u.status = "fulfilled"), (u.value = t);
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        }
      ),
      u
    );
  }
  var Ds = C.S;
  C.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      b0(l, t),
      Ds !== null && Ds(l, t);
  };
  var Ha = tl(null);
  function xc() {
    var l = Ha.current;
    return l !== null ? l : cl.pooledCache;
  }
  function fn(l, t) {
    t === null ? ol(Ha, Ha.current) : ol(Ha, t.pool);
  }
  function js() {
    var l = xc();
    return l === null ? null : { parent: zl._currentValue, pool: l };
  }
  var ca = 0,
    Z = null,
    al = null,
    bl = null,
    sn = !1,
    vu = !1,
    Ba = !1,
    on = 0,
    ue = 0,
    mu = null,
    T0 = 0;
  function gl() {
    throw Error(v(321));
  }
  function Nc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Il(l[a], t[a])) return !1;
    return !0;
  }
  function Uc(l, t, a, u, e, n) {
    return (
      (ca = n),
      (Z = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (C.H = l === null || l.memoizedState === null ? qa : ia),
      (Ba = !1),
      (n = a(u, e)),
      (Ba = !1),
      vu && (n = Ms(t, a, u, e)),
      Os(l),
      n
    );
  }
  function Os(l) {
    C.H = Ot;
    var t = al !== null && al.next !== null;
    if (((ca = 0), (bl = al = Z = null), (sn = !1), (ue = 0), (mu = null), t))
      throw Error(v(300));
    l === null ||
      jl ||
      ((l = l.dependencies), l !== null && _n(l) && (jl = !0));
  }
  function Ms(l, t, a, u) {
    Z = l;
    var e = 0;
    do {
      if ((vu && (mu = null), (ue = 0), (vu = !1), 25 <= e))
        throw Error(v(301));
      if (((e += 1), (bl = al = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (C.H = Ya), (n = t(a, u));
    } while (vu);
    return n;
  }
  function A0() {
    var l = C.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? ee(t) : t),
      (l = l.useState()[0]),
      (al !== null ? al.memoizedState : null) !== l && (Z.flags |= 1024),
      t
    );
  }
  function Rc() {
    var l = on !== 0;
    return (on = 0), l;
  }
  function Cc(l, t, a) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
  }
  function Hc(l) {
    if (sn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      sn = !1;
    }
    (ca = 0), (bl = al = Z = null), (vu = !1), (ue = on = 0), (mu = null);
  }
  function Jl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return bl === null ? (Z.memoizedState = bl = l) : (bl = bl.next = l), bl;
  }
  function El() {
    if (al === null) {
      var l = Z.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = al.next;
    var t = bl === null ? Z.memoizedState : bl.next;
    if (t !== null) (bl = t), (al = l);
    else {
      if (l === null)
        throw Z.alternate === null ? Error(v(467)) : Error(v(310));
      (al = l),
        (l = {
          memoizedState: al.memoizedState,
          baseState: al.baseState,
          baseQueue: al.baseQueue,
          queue: al.queue,
          next: null,
        }),
        bl === null ? (Z.memoizedState = bl = l) : (bl = bl.next = l);
    }
    return bl;
  }
  var dn;
  dn = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function ee(l) {
    var t = ue;
    return (
      (ue += 1),
      mu === null && (mu = []),
      (l = gs(mu, l, t)),
      (t = Z),
      (bl === null ? t.memoizedState : bl.next) === null &&
        ((t = t.alternate),
        (C.H = t === null || t.memoizedState === null ? qa : ia)),
      l
    );
  }
  function rn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ee(l);
      if (l.$$typeof === Sl) return Cl(l);
    }
    throw Error(v(438, String(l)));
  }
  function Bc(l) {
    var t = null,
      a = Z.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = Z.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = dn()), (Z.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = kt;
    return t.index++, a;
  }
  function Yt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function hn(l) {
    var t = El();
    return qc(t, al, l);
  }
  function qc(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(v(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        (e.next = n.next), (n.next = c);
      }
      (t.baseQueue = e = n), (u.pending = null);
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var i = (c = null),
        f = null,
        r = t,
        S = !1;
      do {
        var E = r.lane & -536870913;
        if (E !== r.lane ? (W & E) === E : (ca & E) === E) {
          var y = r.revertLane;
          if (y === 0)
            f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: r.action,
                  hasEagerState: r.hasEagerState,
                  eagerState: r.eagerState,
                  next: null,
                }),
              E === ru && (S = !0);
          else if ((ca & y) === y) {
            (r = r.next), y === ru && (S = !0);
            continue;
          } else
            (E = {
              lane: 0,
              revertLane: r.revertLane,
              action: r.action,
              hasEagerState: r.hasEagerState,
              eagerState: r.eagerState,
              next: null,
            }),
              f === null ? ((i = f = E), (c = n)) : (f = f.next = E),
              (Z.lanes |= y),
              (ya |= y);
          (E = r.action),
            Ba && a(n, E),
            (n = r.hasEagerState ? r.eagerState : a(n, E));
        } else
          (y = {
            lane: E,
            revertLane: r.revertLane,
            action: r.action,
            hasEagerState: r.hasEagerState,
            eagerState: r.eagerState,
            next: null,
          }),
            f === null ? ((i = f = y), (c = n)) : (f = f.next = y),
            (Z.lanes |= E),
            (ya |= E);
        r = r.next;
      } while (r !== null && r !== t);
      if (
        (f === null ? (c = n) : (f.next = i),
        !Il(n, l.memoizedState) && ((jl = !0), S && ((a = hu), a !== null)))
      )
        throw a;
      (l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = f),
        (u.lastRenderedState = n);
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Yc(l) {
    var t = El(),
      a = t.queue;
    if (a === null) throw Error(v(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var c = (e = e.next);
      do (n = l(n, c.action)), (c = c.next);
      while (c !== e);
      Il(n, t.memoizedState) || (jl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n);
    }
    return [n, u];
  }
  function ps(l, t, a) {
    var u = Z,
      e = El(),
      n = k;
    if (n) {
      if (a === void 0) throw Error(v(407));
      a = a();
    } else a = t();
    var c = !Il((al || e).memoizedState, a);
    if (
      (c && ((e.memoizedState = a), (jl = !0)),
      (e = e.queue),
      Lc(Us.bind(null, u, e, l), [l]),
      e.getSnapshot !== t || c || (bl !== null && bl.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        yu(9, Ns.bind(null, u, e, a, t), { destroy: void 0 }, null),
        cl === null)
      )
        throw Error(v(349));
      n || ca & 60 || xs(u, t, a);
    }
    return a;
  }
  function xs(l, t, a) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = Z.updateQueue),
      t === null
        ? ((t = dn()), (Z.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
  }
  function Ns(l, t, a, u) {
    (t.value = a), (t.getSnapshot = u), Rs(t) && Cs(l);
  }
  function Us(l, t, a) {
    return a(function () {
      Rs(t) && Cs(l);
    });
  }
  function Rs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Il(l, a);
    } catch {
      return !0;
    }
  }
  function Cs(l) {
    var t = ua(l, 2);
    t !== null && Gl(t, l, 2);
  }
  function Gc(l) {
    var t = Jl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Ba)) {
        la(!0);
        try {
          a();
        } finally {
          la(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Hs(l, t, a, u) {
    return (l.baseState = a), qc(l, al, typeof u == "function" ? u : Yt);
  }
  function z0(l, t, a, u, e) {
    if (yn(l)) throw Error(v(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      C.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Bs(t, n))
          : ((n.next = a.next), (t.pending = a.next = n));
    }
  }
  function Bs(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = C.T,
        c = {};
      C.T = c;
      try {
        var i = a(e, u),
          f = C.S;
        f !== null && f(c, i), qs(l, t, i);
      } catch (r) {
        Xc(l, t, r);
      } finally {
        C.T = n;
      }
    } else
      try {
        (n = a(e, u)), qs(l, t, n);
      } catch (r) {
        Xc(l, t, r);
      }
  }
  function qs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            Ys(l, t, u);
          },
          function (u) {
            return Xc(l, t, u);
          }
        )
      : Ys(l, t, a);
  }
  function Ys(l, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      Gs(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Bs(l, a)));
  }
  function Xc(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do (t.status = "rejected"), (t.reason = a), Gs(t), (t = t.next);
      while (t !== u);
    }
    l.action = null;
  }
  function Gs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Xs(l, t) {
    return t;
  }
  function Ls(l, t) {
    if (k) {
      var a = cl.formState;
      if (a !== null) {
        l: {
          var u = Z;
          if (k) {
            if (xl) {
              t: {
                for (var e = xl, n = Dt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = Et(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === "F!" || n === "F" ? e : null);
              }
              if (e) {
                (xl = Et(e.nextSibling)), (u = e.data === "F!");
                break l;
              }
            }
            Ra(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Jl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xs,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = no.bind(null, Z, u)),
      (u.dispatch = a),
      (u = Gc(!1)),
      (n = wc.bind(null, Z, !1, u.queue)),
      (u = Jl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = z0.bind(null, Z, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function Qs(l) {
    var t = El();
    return Zs(t, al, l);
  }
  function Zs(l, t, a) {
    (t = qc(l, t, Xs)[0]),
      (l = hn(Yt)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? ee(t)
          : t);
    var u = El(),
      e = u.queue,
      n = e.dispatch;
    return (
      a !== u.memoizedState &&
        ((Z.flags |= 2048),
        yu(9, D0.bind(null, e, a), { destroy: void 0 }, null)),
      [t, n, l]
    );
  }
  function D0(l, t) {
    l.action = t;
  }
  function Vs(l) {
    var t = El(),
      a = al;
    if (a !== null) return Zs(t, a, l);
    El(), (t = t.memoizedState), (a = El());
    var u = a.queue.dispatch;
    return (a.memoizedState = l), [t, u, !1];
  }
  function yu(l, t, a, u) {
    return (
      (l = { tag: l, create: t, inst: a, deps: u, next: null }),
      (t = Z.updateQueue),
      t === null && ((t = dn()), (Z.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function Ks() {
    return El().memoizedState;
  }
  function vn(l, t, a, u) {
    var e = Jl();
    (Z.flags |= l),
      (e.memoizedState = yu(
        1 | t,
        a,
        { destroy: void 0 },
        u === void 0 ? null : u
      ));
  }
  function mn(l, t, a, u) {
    var e = El();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    al !== null && u !== null && Nc(u, al.memoizedState.deps)
      ? (e.memoizedState = yu(t, a, n, u))
      : ((Z.flags |= l), (e.memoizedState = yu(1 | t, a, n, u)));
  }
  function ws(l, t) {
    vn(8390656, 8, l, t);
  }
  function Lc(l, t) {
    mn(2048, 8, l, t);
  }
  function Js(l, t) {
    return mn(4, 2, l, t);
  }
  function $s(l, t) {
    return mn(4, 4, l, t);
  }
  function Ws(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function ks(l, t, a) {
    (a = a != null ? a.concat([l]) : null), mn(4, 4, Ws.bind(null, t, l), a);
  }
  function Qc() {}
  function Fs(l, t) {
    var a = El();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Nc(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function Is(l, t) {
    var a = El();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Nc(t, u[1])) return u[0];
    if (((u = l()), Ba)) {
      la(!0);
      try {
        l();
      } finally {
        la(!1);
      }
    }
    return (a.memoizedState = [u, t]), u;
  }
  function Zc(l, t, a) {
    return a === void 0 || ca & 1073741824
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = td()), (Z.lanes |= l), (ya |= l), a);
  }
  function Ps(l, t, a, u) {
    return Il(a, t)
      ? a
      : du.current !== null
      ? ((l = Zc(l, a, u)), Il(l, t) || (jl = !0), l)
      : ca & 42
      ? ((l = td()), (Z.lanes |= l), (ya |= l), t)
      : ((jl = !0), (l.memoizedState = a));
  }
  function lo(l, t, a, u, e) {
    var n = j.p;
    j.p = n !== 0 && 8 > n ? n : 8;
    var c = C.T,
      i = {};
    (C.T = i), wc(l, !1, t, a);
    try {
      var f = e(),
        r = C.S;
      if (
        (r !== null && r(i, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var S = E0(f, u);
        ne(l, t, S, at(l));
      } else ne(l, t, u, at(l));
    } catch (E) {
      ne(l, t, { then: function () {}, status: "rejected", reason: E }, at());
    } finally {
      (j.p = n), (C.T = c);
    }
  }
  function j0() {}
  function Vc(l, t, a, u) {
    if (l.tag !== 5) throw Error(v(476));
    var e = to(l).queue;
    lo(
      l,
      e,
      t,
      $,
      a === null
        ? j0
        : function () {
            return ao(l), a(u);
          }
    );
  }
  function to(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: $,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Yt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function ao(l) {
    var t = to(l).next.queue;
    ne(l, t, {}, at());
  }
  function Kc() {
    return Cl(De);
  }
  function uo() {
    return El().memoizedState;
  }
  function eo() {
    return El().memoizedState;
  }
  function O0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = at();
          l = oa(a);
          var u = da(t, l, a);
          u !== null && (Gl(u, t, a), fe(u, t, a)),
            (t = { cache: Mc() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function M0(l, t, a) {
    var u = at();
    (a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      yn(l)
        ? co(t, a)
        : ((a = Ec(l, t, a, u)), a !== null && (Gl(a, l, u), io(a, t, u)));
  }
  function no(l, t, a) {
    var u = at();
    ne(l, t, a, u);
  }
  function ne(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (yn(l)) co(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            i = n(c, a);
          if (((e.hasEagerState = !0), (e.eagerState = i), Il(i, c)))
            return Ie(l, t, e, 0), cl === null && Fe(), !1;
        } catch {
        } finally {
        }
      if (((a = Ec(l, t, e, u)), a !== null))
        return Gl(a, l, u), io(a, t, u), !0;
    }
    return !1;
  }
  function wc(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Hi(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      yn(l))
    ) {
      if (t) throw Error(v(479));
    } else (t = Ec(l, a, u, 2)), t !== null && Gl(t, l, 2);
  }
  function yn(l) {
    var t = l.alternate;
    return l === Z || (t !== null && t === Z);
  }
  function co(l, t) {
    vu = sn = !0;
    var a = l.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t);
  }
  function io(l, t, a) {
    if (a & 4194176) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), Sf(l, a);
    }
  }
  var Ot = {
    readContext: Cl,
    use: rn,
    useCallback: gl,
    useContext: gl,
    useEffect: gl,
    useImperativeHandle: gl,
    useLayoutEffect: gl,
    useInsertionEffect: gl,
    useMemo: gl,
    useReducer: gl,
    useRef: gl,
    useState: gl,
    useDebugValue: gl,
    useDeferredValue: gl,
    useTransition: gl,
    useSyncExternalStore: gl,
    useId: gl,
  };
  (Ot.useCacheRefresh = gl),
    (Ot.useMemoCache = gl),
    (Ot.useHostTransitionStatus = gl),
    (Ot.useFormState = gl),
    (Ot.useActionState = gl),
    (Ot.useOptimistic = gl);
  var qa = {
    readContext: Cl,
    use: rn,
    useCallback: function (l, t) {
      return (Jl().memoizedState = [l, t === void 0 ? null : t]), l;
    },
    useContext: Cl,
    useEffect: ws,
    useImperativeHandle: function (l, t, a) {
      (a = a != null ? a.concat([l]) : null),
        vn(4194308, 4, Ws.bind(null, t, l), a);
    },
    useLayoutEffect: function (l, t) {
      return vn(4194308, 4, l, t);
    },
    useInsertionEffect: function (l, t) {
      vn(4, 2, l, t);
    },
    useMemo: function (l, t) {
      var a = Jl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Ba) {
        la(!0);
        try {
          l();
        } finally {
          la(!1);
        }
      }
      return (a.memoizedState = [u, t]), u;
    },
    useReducer: function (l, t, a) {
      var u = Jl();
      if (a !== void 0) {
        var e = a(t);
        if (Ba) {
          la(!0);
          try {
            a(t);
          } finally {
            la(!1);
          }
        }
      } else e = t;
      return (
        (u.memoizedState = u.baseState = e),
        (l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l,
          lastRenderedState: e,
        }),
        (u.queue = l),
        (l = l.dispatch = M0.bind(null, Z, l)),
        [u.memoizedState, l]
      );
    },
    useRef: function (l) {
      var t = Jl();
      return (l = { current: l }), (t.memoizedState = l);
    },
    useState: function (l) {
      l = Gc(l);
      var t = l.queue,
        a = no.bind(null, Z, t);
      return (t.dispatch = a), [l.memoizedState, a];
    },
    useDebugValue: Qc,
    useDeferredValue: function (l, t) {
      var a = Jl();
      return Zc(a, l, t);
    },
    useTransition: function () {
      var l = Gc(!1);
      return (
        (l = lo.bind(null, Z, l.queue, !0, !1)),
        (Jl().memoizedState = l),
        [!1, l]
      );
    },
    useSyncExternalStore: function (l, t, a) {
      var u = Z,
        e = Jl();
      if (k) {
        if (a === void 0) throw Error(v(407));
        a = a();
      } else {
        if (((a = t()), cl === null)) throw Error(v(349));
        W & 60 || xs(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return (
        (e.queue = n),
        ws(Us.bind(null, u, n, l), [l]),
        (u.flags |= 2048),
        yu(9, Ns.bind(null, u, n, a, t), { destroy: void 0 }, null),
        a
      );
    },
    useId: function () {
      var l = Jl(),
        t = cl.identifierPrefix;
      if (k) {
        var a = Bt,
          u = Ht;
        (a = (u & ~(1 << (32 - Fl(u) - 1))).toString(32) + a),
          (t = ":" + t + "R" + a),
          (a = on++),
          0 < a && (t += "H" + a.toString(32)),
          (t += ":");
      } else (a = T0++), (t = ":" + t + "r" + a.toString(32) + ":");
      return (l.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (Jl().memoizedState = O0.bind(null, Z));
    },
  };
  (qa.useMemoCache = Bc),
    (qa.useHostTransitionStatus = Kc),
    (qa.useFormState = Ls),
    (qa.useActionState = Ls),
    (qa.useOptimistic = function (l) {
      var t = Jl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = a), (t = wc.bind(null, Z, !0, a)), (a.dispatch = t), [l, t]
      );
    });
  var ia = {
    readContext: Cl,
    use: rn,
    useCallback: Fs,
    useContext: Cl,
    useEffect: Lc,
    useImperativeHandle: ks,
    useInsertionEffect: Js,
    useLayoutEffect: $s,
    useMemo: Is,
    useReducer: hn,
    useRef: Ks,
    useState: function () {
      return hn(Yt);
    },
    useDebugValue: Qc,
    useDeferredValue: function (l, t) {
      var a = El();
      return Ps(a, al.memoizedState, l, t);
    },
    useTransition: function () {
      var l = hn(Yt)[0],
        t = El().memoizedState;
      return [typeof l == "boolean" ? l : ee(l), t];
    },
    useSyncExternalStore: ps,
    useId: uo,
  };
  (ia.useCacheRefresh = eo),
    (ia.useMemoCache = Bc),
    (ia.useHostTransitionStatus = Kc),
    (ia.useFormState = Qs),
    (ia.useActionState = Qs),
    (ia.useOptimistic = function (l, t) {
      var a = El();
      return Hs(a, al, l, t);
    });
  var Ya = {
    readContext: Cl,
    use: rn,
    useCallback: Fs,
    useContext: Cl,
    useEffect: Lc,
    useImperativeHandle: ks,
    useInsertionEffect: Js,
    useLayoutEffect: $s,
    useMemo: Is,
    useReducer: Yc,
    useRef: Ks,
    useState: function () {
      return Yc(Yt);
    },
    useDebugValue: Qc,
    useDeferredValue: function (l, t) {
      var a = El();
      return al === null ? Zc(a, l, t) : Ps(a, al.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Yc(Yt)[0],
        t = El().memoizedState;
      return [typeof l == "boolean" ? l : ee(l), t];
    },
    useSyncExternalStore: ps,
    useId: uo,
  };
  (Ya.useCacheRefresh = eo),
    (Ya.useMemoCache = Bc),
    (Ya.useHostTransitionStatus = Kc),
    (Ya.useFormState = Vs),
    (Ya.useActionState = Vs),
    (Ya.useOptimistic = function (l, t) {
      var a = El();
      return al !== null
        ? Hs(a, al, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    });
  function Jc(l, t, a, u) {
    (t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : ll({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var $c = {
    isMounted: function (l) {
      return (l = l._reactInternals) ? B(l) === l : !1;
    },
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = at(),
        e = oa(u);
      (e.payload = t),
        a != null && (e.callback = a),
        (t = da(l, e, u)),
        t !== null && (Gl(t, l, u), fe(t, l, u));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = at(),
        e = oa(u);
      (e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = da(l, e, u)),
        t !== null && (Gl(t, l, u), fe(t, l, u));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = at(),
        u = oa(a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = da(l, u, a)),
        t !== null && (Gl(t, l, a), fe(t, l, a));
    },
  };
  function fo(l, t, a, u, e, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, c)
        : t.prototype && t.prototype.isPureReactComponent
        ? !wu(a, u) || !wu(e, n)
        : !0
    );
  }
  function so(l, t, a, u) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && $c.enqueueReplaceState(t, t.state, null);
  }
  function Ga(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = ll({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  var gn =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function oo(l) {
    gn(l);
  }
  function ro(l) {
    console.error(l);
  }
  function ho(l) {
    gn(l);
  }
  function Sn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function vo(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Wc(l, t, a) {
    return (
      (a = oa(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Sn(l, t);
      }),
      a
    );
  }
  function mo(l) {
    return (l = oa(l)), (l.tag = 3), l;
  }
  function yo(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          vo(t, a, u);
        });
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        vo(t, a, u),
          typeof e != "function" &&
            (ga === null ? (ga = new Set([this])) : ga.add(this));
        var i = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function p0(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && ie(t, a, e, !0),
        (a = dt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              jt === null ? xi() : a.alternate === null && ml === 0 && (ml = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === Dc
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Ui(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === Dc
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Ui(l, u, e)),
              !1
            );
        }
        throw Error(v(435, a.tag));
      }
      return Ui(l, u, e), xi(), !1;
    }
    if (k)
      return (
        (t = dt.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== zc && ((l = Error(v(422), { cause: u })), ku(ft(l, a))))
          : (u !== zc && ((t = Error(v(423), { cause: u })), ku(ft(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = ft(u, a)),
            (e = Wc(l.stateNode, u, e)),
            oi(l, e),
            ml !== 4 && (ml = 2)),
        !1
      );
    var n = Error(v(520), { cause: u });
    if (
      ((n = ft(n, a)),
      ye === null ? (ye = [n]) : ye.push(n),
      ml !== 4 && (ml = 2),
      t === null)
    )
      return !0;
    (u = ft(u, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = Wc(a.stateNode, u, l)),
            oi(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ga === null || !ga.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = mo(e)),
              yo(e, l, a, u),
              oi(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var go = Error(v(461)),
    jl = !1;
  function Nl(l, t, a, u) {
    t.child = l === null ? Es(t, null, a, u) : Ca(t, l.child, a, u);
  }
  function So(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var c = {};
      for (var i in u) i !== "ref" && (c[i] = u[i]);
    } else c = u;
    return (
      La(t),
      (u = Uc(l, t, a, c, n, e)),
      (i = Rc()),
      l !== null && !jl
        ? (Cc(l, t, e), Gt(l, t, e))
        : (k && i && Tc(t), (t.flags |= 1), Nl(l, t, u, e), t.child)
    );
  }
  function _o(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Si(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), bo(l, t, n, u, e))
        : ((l = An(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !ei(l, e))) {
      var c = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : wu), a(c, u) && l.ref === t.ref)
      )
        return Gt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = ma(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function bo(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (wu(n, u) && l.ref === t.ref)
        if (((jl = !1), (t.pendingProps = u = n), ei(l, e)))
          l.flags & 131072 && (jl = !0);
        else return (t.lanes = l.lanes), Gt(l, t, e);
    }
    return kc(l, t, a, u, e);
  }
  function Eo(l, t, a) {
    var u = t.pendingProps,
      e = u.children,
      n = (t.stateNode._pendingVisibility & 2) !== 0,
      c = l !== null ? l.memoizedState : null;
    if ((ce(l, t), u.mode === "hidden" || n)) {
      if (t.flags & 128) {
        if (((u = c !== null ? c.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, n = 0; e !== null; )
            (n = n | e.lanes | e.childLanes), (e = e.sibling);
          t.childLanes = n & ~u;
        } else (t.childLanes = 0), (t.child = null);
        return To(l, t, u, a);
      }
      if (a & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && fn(t, c !== null ? c.cachePool : null),
          c !== null ? Ts(t, c) : jc(),
          As(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          To(l, t, c !== null ? c.baseLanes | a : a, a)
        );
    } else
      c !== null
        ? (fn(t, c.cachePool), Ts(t, c), na(), (t.memoizedState = null))
        : (l !== null && fn(t, null), jc(), na());
    return Nl(l, t, e, a), t.child;
  }
  function To(l, t, a, u) {
    var e = xc();
    return (
      (e = e === null ? null : { parent: zl._currentValue, pool: e }),
      (t.memoizedState = { baseLanes: a, cachePool: e }),
      l !== null && fn(t, null),
      jc(),
      As(t),
      l !== null && ie(l, t, u, !0),
      null
    );
  }
  function ce(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(v(284));
      (l === null || l.ref !== a) && (t.flags |= 2097664);
    }
  }
  function kc(l, t, a, u, e) {
    return (
      La(t),
      (a = Uc(l, t, a, u, void 0, e)),
      (u = Rc()),
      l !== null && !jl
        ? (Cc(l, t, e), Gt(l, t, e))
        : (k && u && Tc(t), (t.flags |= 1), Nl(l, t, a, e), t.child)
    );
  }
  function Ao(l, t, a, u, e, n) {
    return (
      La(t),
      (t.updateQueue = null),
      (a = Ms(t, u, a, e)),
      Os(l),
      (u = Rc()),
      l !== null && !jl
        ? (Cc(l, t, n), Gt(l, t, n))
        : (k && u && Tc(t), (t.flags |= 1), Nl(l, t, a, n), t.child)
    );
  }
  function zo(l, t, a, u, e) {
    if ((La(t), t.stateNode === null)) {
      var n = iu,
        c = a.contextType;
      typeof c == "object" && c !== null && (n = Cl(c)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = $c),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        fi(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? Cl(c) : iu),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (Jc(t, a, c, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && $c.enqueueReplaceState(n, n.state, null),
          oe(t, u, n, e),
          se(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0);
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps,
        f = Ga(a, i);
      n.props = f;
      var r = n.context,
        S = a.contextType;
      (c = iu), typeof S == "object" && S !== null && (c = Cl(S));
      var E = a.getDerivedStateFromProps;
      (S =
        typeof E == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = t.pendingProps !== i),
        S ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || r !== c) && so(t, n, u, c)),
        (sa = !1);
      var y = t.memoizedState;
      (n.state = y),
        oe(t, u, n, e),
        se(),
        (r = t.memoizedState),
        i || y !== r || sa
          ? (typeof E == "function" && (Jc(t, a, E, u), (r = t.memoizedState)),
            (f = sa || fo(t, a, f, u, y, r, c))
              ? (S ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = r)),
            (n.props = u),
            (n.state = r),
            (n.context = c),
            (u = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1));
    } else {
      (n = t.stateNode),
        si(l, t),
        (c = t.memoizedProps),
        (S = Ga(a, c)),
        (n.props = S),
        (E = t.pendingProps),
        (y = n.context),
        (r = a.contextType),
        (f = iu),
        typeof r == "object" && r !== null && (f = Cl(r)),
        (i = a.getDerivedStateFromProps),
        (r =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== E || y !== f) && so(t, n, u, f)),
        (sa = !1),
        (y = t.memoizedState),
        (n.state = y),
        oe(t, u, n, e),
        se();
      var g = t.memoizedState;
      c !== E ||
      y !== g ||
      sa ||
      (l !== null && l.dependencies !== null && _n(l.dependencies))
        ? (typeof i == "function" && (Jc(t, a, i, u), (g = t.memoizedState)),
          (S =
            sa ||
            fo(t, a, S, u, y, g, f) ||
            (l !== null && l.dependencies !== null && _n(l.dependencies)))
            ? (r ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, g, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, g, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = g)),
          (n.props = u),
          (n.state = g),
          (n.context = f),
          (u = S))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      ce(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = Ca(t, l.child, null, e)),
              (t.child = Ca(t, null, a, e)))
            : Nl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Gt(l, t, e)),
      l
    );
  }
  function Do(l, t, a, u) {
    return Wu(), (t.flags |= 256), Nl(l, t, a, u), t.child;
  }
  var Fc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ic(l) {
    return { baseLanes: l, cachePool: js() };
  }
  function Pc(l, t, a) {
    return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= mt), l;
  }
  function jo(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (Al.current & 2) !== 0),
      c && ((e = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (k) {
        if ((e ? ea(t) : na(), k)) {
          var i = xl,
            f;
          if ((f = i)) {
            l: {
              for (f = i, i = Dt; f.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break l;
                }
                if (((f = Et(f.nextSibling)), f === null)) {
                  i = null;
                  break l;
                }
              }
              i = f;
            }
            i !== null
              ? ((t.memoizedState = {
                  dehydrated: i,
                  treeContext: Na !== null ? { id: Ht, overflow: Bt } : null,
                  retryLane: 536870912,
                }),
                (f = vt(18, null, null, 0)),
                (f.stateNode = i),
                (f.return = t),
                (t.child = f),
                (Yl = t),
                (xl = null),
                (f = !0))
              : (f = !1);
          }
          f || Ra(t);
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i = i.dehydrated), i !== null))
        )
          return i.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
        qt(t);
      }
      return (
        (i = u.children),
        (u = u.fallback),
        e
          ? (na(),
            (e = t.mode),
            (i = ti({ mode: "hidden", children: i }, e)),
            (u = Za(u, e, a, null)),
            (i.return = t),
            (u.return = t),
            (i.sibling = u),
            (t.child = i),
            (e = t.child),
            (e.memoizedState = Ic(a)),
            (e.childLanes = Pc(l, c, a)),
            (t.memoizedState = Fc),
            u)
          : (ea(t), li(t, i))
      );
    }
    if (
      ((f = l.memoizedState), f !== null && ((i = f.dehydrated), i !== null))
    ) {
      if (n)
        t.flags & 256
          ? (ea(t), (t.flags &= -257), (t = ai(l, t, a)))
          : t.memoizedState !== null
          ? (na(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (na(),
            (e = u.fallback),
            (i = t.mode),
            (u = ti({ mode: "visible", children: u.children }, i)),
            (e = Za(e, i, a, null)),
            (e.flags |= 2),
            (u.return = t),
            (e.return = t),
            (u.sibling = e),
            (t.child = u),
            Ca(t, l.child, null, a),
            (u = t.child),
            (u.memoizedState = Ic(a)),
            (u.childLanes = Pc(l, c, a)),
            (t.memoizedState = Fc),
            (t = e));
      else if ((ea(t), i.data === "$!")) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var r = c.dgst;
        (c = r),
          (u = Error(v(419))),
          (u.stack = ""),
          (u.digest = c),
          ku({ value: u, source: null, stack: null }),
          (t = ai(l, t, a));
      } else if (
        (jl || ie(l, t, a, !1), (c = (a & l.childLanes) !== 0), jl || c)
      ) {
        if (((c = cl), c !== null)) {
          if (((u = a & -a), u & 42)) u = 1;
          else
            switch (u) {
              case 2:
                u = 1;
                break;
              case 8:
                u = 4;
                break;
              case 32:
                u = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                u = 64;
                break;
              case 268435456:
                u = 134217728;
                break;
              default:
                u = 0;
            }
          if (
            ((u = u & (c.suspendedLanes | a) ? 0 : u),
            u !== 0 && u !== f.retryLane)
          )
            throw ((f.retryLane = u), ua(l, u), Gl(c, l, u), go);
        }
        i.data === "$?" || xi(), (t = ai(l, t, a));
      } else
        i.data === "$?"
          ? ((t.flags |= 128),
            (t.child = l.child),
            (t = V0.bind(null, l)),
            (i._reactRetry = t),
            (t = null))
          : ((l = f.treeContext),
            (xl = Et(i.nextSibling)),
            (Yl = t),
            (k = !0),
            (_t = null),
            (Dt = !1),
            l !== null &&
              ((st[ot++] = Ht),
              (st[ot++] = Bt),
              (st[ot++] = Na),
              (Ht = l.id),
              (Bt = l.overflow),
              (Na = t)),
            (t = li(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (na(),
        (e = u.fallback),
        (i = t.mode),
        (f = l.child),
        (r = f.sibling),
        (u = ma(f, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = f.subtreeFlags & 31457280),
        r !== null ? (e = ma(r, e)) : ((e = Za(e, i, a, null)), (e.flags |= 2)),
        (e.return = t),
        (u.return = t),
        (u.sibling = e),
        (t.child = u),
        (u = e),
        (e = t.child),
        (i = l.child.memoizedState),
        i === null
          ? (i = Ic(a))
          : ((f = i.cachePool),
            f !== null
              ? ((r = zl._currentValue),
                (f = f.parent !== r ? { parent: r, pool: r } : f))
              : (f = js()),
            (i = { baseLanes: i.baseLanes | a, cachePool: f })),
        (e.memoizedState = i),
        (e.childLanes = Pc(l, c, a)),
        (t.memoizedState = Fc),
        u)
      : (ea(t),
        (a = l.child),
        (l = a.sibling),
        (a = ma(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function li(l, t) {
    return (
      (t = ti({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function ti(l, t) {
    return Io(l, t, 0, null);
  }
  function ai(l, t, a) {
    return (
      Ca(t, l.child, null, a),
      (l = li(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Oo(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), ci(l.return, t, a);
  }
  function ui(l, t, a, u, e) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = u),
        (n.tail = a),
        (n.tailMode = e));
  }
  function Mo(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    if ((Nl(l, t, u.children, a), (u = Al.current), u & 2))
      (u = (u & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && l.flags & 128)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && Oo(l, a, t);
          else if (l.tag === 19) Oo(l, a, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      u &= 1;
    }
    switch ((ol(Al, u), e)) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          (l = a.alternate),
            l !== null && cn(l) === null && (e = a),
            (a = a.sibling);
        (a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          ui(t, !1, e, a, n);
        break;
      case "backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && cn(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = a), (a = e), (e = l);
        }
        ui(t, !0, a, null, n);
        break;
      case "together":
        ui(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (ya |= t.lanes),
      !(a & t.childLanes))
    )
      if (l !== null) {
        if ((ie(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(v(153));
    if (t.child !== null) {
      for (
        l = t.child, a = ma(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (a = a.sibling = ma(l, l.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function ei(l, t) {
    return l.lanes & t ? !0 : ((l = l.dependencies), !!(l !== null && _n(l)));
  }
  function x0(l, t, a) {
    switch (t.tag) {
      case 3:
        Ce(t, t.stateNode.containerInfo),
          fa(t, zl, l.memoizedState.cache),
          Wu();
        break;
      case 27:
      case 5:
        $n(t);
        break;
      case 4:
        Ce(t, t.stateNode.containerInfo);
        break;
      case 10:
        fa(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (ea(t), (t.flags |= 128), null)
            : a & t.child.childLanes
            ? jo(l, t, a)
            : (ea(t), (l = Gt(l, t, a)), l !== null ? l.sibling : null);
        ea(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (ie(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return Mo(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          ol(Al, Al.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Eo(l, t, a);
      case 24:
        fa(t, zl, l.memoizedState.cache);
    }
    return Gt(l, t, a);
  }
  function po(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) jl = !0;
      else {
        if (!ei(l, a) && !(t.flags & 128)) return (jl = !1), x0(l, t, a);
        jl = !!(l.flags & 131072);
      }
    else (jl = !1), k && t.flags & 1048576 && rs(t, tn, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType,
            e = u._init;
          if (((u = e(u._payload)), (t.type = u), typeof u == "function"))
            Si(u)
              ? ((l = Ga(u, l)), (t.tag = 1), (t = zo(null, t, u, l, a)))
              : ((t.tag = 0), (t = kc(null, t, u, l, a)));
          else {
            if (u != null) {
              if (((e = u.$$typeof), e === Ql)) {
                (t.tag = 11), (t = So(null, t, u, l, a));
                break l;
              } else if (e === xt) {
                (t.tag = 14), (t = _o(null, t, u, l, a));
                break l;
              }
            }
            throw ((t = It(u) || u), Error(v(306, t, "")));
          }
        }
        return t;
      case 0:
        return kc(l, t, t.type, t.pendingProps, a);
      case 1:
        return (u = t.type), (e = Ga(u, t.pendingProps)), zo(l, t, u, e, a);
      case 3:
        l: {
          if ((Ce(t, t.stateNode.containerInfo), l === null))
            throw Error(v(387));
          var n = t.pendingProps;
          (e = t.memoizedState), (u = e.element), si(l, t), oe(t, n, null, a);
          var c = t.memoizedState;
          if (
            ((n = c.cache),
            fa(t, zl, n),
            n !== e.cache && ii(t, [zl], a, !0),
            se(),
            (n = c.element),
            e.isDehydrated)
          )
            if (
              ((e = { element: n, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = e),
              (t.memoizedState = e),
              t.flags & 256)
            ) {
              t = Do(l, t, n, a);
              break l;
            } else if (n !== u) {
              (u = ft(Error(v(424)), t)), ku(u), (t = Do(l, t, n, a));
              break l;
            } else
              for (
                xl = Et(t.stateNode.containerInfo.firstChild),
                  Yl = t,
                  k = !0,
                  _t = null,
                  Dt = !0,
                  a = Es(t, null, n, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((Wu(), n === u)) {
              t = Gt(l, t, a);
              break l;
            }
            Nl(l, t, n, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ce(l, t),
          l === null
            ? (a = Ud(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : k ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = Hn(Pt.current).createElement(a)),
                (u[Rl] = t),
                (u[Kl] = l),
                Ul(u, a, l),
                Dl(u),
                (t.stateNode = u))
            : (t.memoizedState = Ud(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          $n(t),
          l === null &&
            k &&
            ((u = t.stateNode = pd(t.type, t.pendingProps, Pt.current)),
            (Yl = t),
            (Dt = !0),
            (xl = Et(u.firstChild))),
          (u = t.pendingProps.children),
          l !== null || k ? Nl(l, t, u, a) : (t.child = Ca(t, null, u, a)),
          ce(l, t),
          t.child
        );
      case 5:
        return (
          l === null &&
            k &&
            ((e = u = xl) &&
              ((u = ch(u, t.type, t.pendingProps, Dt)),
              u !== null
                ? ((t.stateNode = u),
                  (Yl = t),
                  (xl = Et(u.firstChild)),
                  (Dt = !1),
                  (e = !0))
                : (e = !1)),
            e || Ra(t)),
          $n(t),
          (e = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Vi(e, n) ? (u = null) : c !== null && Vi(e, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Uc(l, t, A0, null, null, a)), (De._currentValue = e)),
          ce(l, t),
          Nl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            k &&
            ((l = a = xl) &&
              ((a = ih(a, t.pendingProps, Dt)),
              a !== null
                ? ((t.stateNode = a), (Yl = t), (xl = null), (l = !0))
                : (l = !1)),
            l || Ra(t)),
          null
        );
      case 13:
        return jo(l, t, a);
      case 4:
        return (
          Ce(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = Ca(t, null, u, a)) : Nl(l, t, u, a),
          t.child
        );
      case 11:
        return So(l, t, t.type, t.pendingProps, a);
      case 7:
        return Nl(l, t, t.pendingProps, a), t.child;
      case 8:
        return Nl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return Nl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (u = t.pendingProps),
          fa(t, t.type, u.value),
          Nl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          La(t),
          (e = Cl(e)),
          (u = u(e)),
          (t.flags |= 1),
          Nl(l, t, u, a),
          t.child
        );
      case 14:
        return _o(l, t, t.type, t.pendingProps, a);
      case 15:
        return bo(l, t, t.type, t.pendingProps, a);
      case 19:
        return Mo(l, t, a);
      case 22:
        return Eo(l, t, a);
      case 24:
        return (
          La(t),
          (u = Cl(zl)),
          l === null
            ? ((e = xc()),
              e === null &&
                ((e = cl),
                (n = Mc()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              fi(t),
              fa(t, zl, e))
            : (l.lanes & a && (si(l, t), oe(t, null, null, a), se()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  fa(t, zl, u))
                : ((u = n.cache),
                  fa(t, zl, u),
                  u !== e.cache && ii(t, [zl], a, !0))),
          Nl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(v(156, t.tag));
  }
  var ni = tl(null),
    Xa = null,
    Xt = null;
  function fa(l, t, a) {
    ol(ni, t._currentValue), (t._currentValue = a);
  }
  function Lt(l) {
    (l._currentValue = ni.current), _l(ni);
  }
  function ci(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function ii(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var c = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = e;
          for (var f = 0; f < t.length; f++)
            if (i.context === t[f]) {
              (n.lanes |= a),
                (i = n.alternate),
                i !== null && (i.lanes |= a),
                ci(n.return, a, l),
                u || (c = null);
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (((c = e.return), c === null)) throw Error(v(341));
        (c.lanes |= a),
          (n = c.alternate),
          n !== null && (n.lanes |= a),
          ci(c, a, l),
          (c = null);
      } else c = e.child;
      if (c !== null) c.return = e;
      else
        for (c = e; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((e = c.sibling), e !== null)) {
            (e.return = c.return), (c = e);
            break;
          }
          c = c.return;
        }
      e = c;
    }
  }
  function ie(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if (e.flags & 524288) n = !0;
        else if (e.flags & 262144) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(v(387));
        if (((c = c.memoizedProps), c !== null)) {
          var i = e.type;
          Il(e.pendingProps.value, c.value) ||
            (l !== null ? l.push(i) : (l = [i]));
        }
      } else if (e === Re.current) {
        if (((c = e.alternate), c === null)) throw Error(v(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(De) : (l = [De]));
      }
      e = e.return;
    }
    l !== null && ii(t, l, a, u), (t.flags |= 262144);
  }
  function _n(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Il(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function La(l) {
    (Xa = l),
      (Xt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Cl(l) {
    return xo(Xa, l);
  }
  function bn(l, t) {
    return Xa === null && La(l), xo(l, t);
  }
  function xo(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Xt === null)) {
      if (l === null) throw Error(v(308));
      (Xt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Xt = Xt.next = t;
    return a;
  }
  var sa = !1;
  function fi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function si(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function oa(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function da(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), rl & 2)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Pe(l)),
        os(l, null, a),
        t
      );
    }
    return Ie(l, u, t, a), Pe(l);
  }
  function fe(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194176) !== 0))
    ) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), Sf(l, a);
    }
  }
  function oi(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          n === null ? (e = n = c) : (n = n.next = c), (a = a.next);
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      (a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a);
      return;
    }
    (l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t);
  }
  var di = !1;
  function se() {
    if (di) {
      var l = hu;
      if (l !== null) throw l;
    }
  }
  function oe(l, t, a, u) {
    di = !1;
    var e = l.updateQueue;
    sa = !1;
    var n = e.firstBaseUpdate,
      c = e.lastBaseUpdate,
      i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var f = i,
        r = f.next;
      (f.next = null), c === null ? (n = r) : (c.next = r), (c = f);
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (i = S.lastBaseUpdate),
        i !== c &&
          (i === null ? (S.firstBaseUpdate = r) : (i.next = r),
          (S.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var E = e.baseState;
      (c = 0), (S = r = f = null), (i = n);
      do {
        var y = i.lane & -536870913,
          g = y !== i.lane;
        if (g ? (W & y) === y : (u & y) === y) {
          y !== 0 && y === ru && (di = !0),
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var M = l,
              G = i;
            y = t;
            var yl = a;
            switch (G.tag) {
              case 1:
                if (((M = G.payload), typeof M == "function")) {
                  E = M.call(yl, E, y);
                  break l;
                }
                E = M;
                break l;
              case 3:
                M.flags = (M.flags & -65537) | 128;
              case 0:
                if (
                  ((M = G.payload),
                  (y = typeof M == "function" ? M.call(yl, E, y) : M),
                  y == null)
                )
                  break l;
                E = ll({}, E, y);
                break l;
              case 2:
                sa = !0;
            }
          }
          (y = i.callback),
            y !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = e.callbacks),
              g === null ? (e.callbacks = [y]) : g.push(y));
        } else
          (g = {
            lane: y,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            S === null ? ((r = S = g), (f = E)) : (S = S.next = g),
            (c |= y);
        if (((i = i.next), i === null)) {
          if (((i = e.shared.pending), i === null)) break;
          (g = i),
            (i = g.next),
            (g.next = null),
            (e.lastBaseUpdate = g),
            (e.shared.pending = null);
        }
      } while (!0);
      S === null && (f = E),
        (e.baseState = f),
        (e.firstBaseUpdate = r),
        (e.lastBaseUpdate = S),
        n === null && (e.shared.lanes = 0),
        (ya |= c),
        (l.lanes = c),
        (l.memoizedState = E);
    }
  }
  function No(l, t) {
    if (typeof l != "function") throw Error(v(191, l));
    l.call(t);
  }
  function Uo(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) No(a[l], t);
  }
  function de(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              c = a.inst;
            (u = n()), (c.destroy = u);
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (i) {
      el(t, t.return, i);
    }
  }
  function ra(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var c = u.inst,
              i = c.destroy;
            if (i !== void 0) {
              (c.destroy = void 0), (e = t);
              var f = a;
              try {
                i();
              } catch (r) {
                el(e, f, r);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (r) {
      el(t, t.return, r);
    }
  }
  function Ro(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Uo(t, a);
      } catch (u) {
        el(l, l.return, u);
      }
    }
  }
  function Co(l, t, a) {
    (a.props = Ga(l.type, l.memoizedProps)), (a.state = l.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (u) {
      el(l, t, u);
    }
  }
  function Qa(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        var u = l.stateNode;
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = u;
            break;
          default:
            e = u;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (n) {
      el(l, t, n);
    }
  }
  function Pl(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          el(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          el(l, t, e);
        }
      else a.current = null;
  }
  function Ho(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function Bo(l, t, a) {
    try {
      var u = l.stateNode;
      th(u, l.type, a, t), (u[Kl] = t);
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function qo(l) {
    return (
      l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 || l.tag === 4
    );
  }
  function ri(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || qo(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 27 && l.tag !== 18;

      ) {
        if (l.flags & 2 || l.child === null || l.tag === 4) continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function hi(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode),
        t
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(l, t)
            : a.insertBefore(l, t)
          : (a.nodeType === 8
              ? ((t = a.parentNode), t.insertBefore(l, a))
              : ((t = a), t.appendChild(l)),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Cn));
    else if (u !== 4 && u !== 27 && ((l = l.child), l !== null))
      for (hi(l, t, a), l = l.sibling; l !== null; )
        hi(l, t, a), (l = l.sibling);
  }
  function En(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && u !== 27 && ((l = l.child), l !== null))
      for (En(l, t, a), l = l.sibling; l !== null; )
        En(l, t, a), (l = l.sibling);
  }
  var Qt = !1,
    vl = !1,
    vi = !1,
    Yo = typeof WeakSet == "function" ? WeakSet : Set,
    Ol = null,
    Go = !1;
  function N0(l, t) {
    if (((l = l.containerInfo), (Qi = Ln), (l = ts(l)), yc(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              i = -1,
              f = -1,
              r = 0,
              S = 0,
              E = l,
              y = null;
            t: for (;;) {
              for (
                var g;
                E !== a || (e !== 0 && E.nodeType !== 3) || (i = c + e),
                  E !== n || (u !== 0 && E.nodeType !== 3) || (f = c + u),
                  E.nodeType === 3 && (c += E.nodeValue.length),
                  (g = E.firstChild) !== null;

              )
                (y = E), (E = g);
              for (;;) {
                if (E === l) break t;
                if (
                  (y === a && ++r === e && (i = c),
                  y === n && ++S === u && (f = c),
                  (g = E.nextSibling) !== null)
                )
                  break;
                (E = y), (y = E.parentNode);
              }
              E = g;
            }
            a = i === -1 || f === -1 ? null : { start: i, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Zi = { focusedElem: l, selectionRange: a }, Ln = !1, Ol = t;
      Ol !== null;

    )
      if (
        ((t = Ol), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        (l.return = t), (Ol = l);
      else
        for (; Ol !== null; ) {
          switch (((t = Ol), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (l & 1024 && n !== null) {
                (l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode);
                try {
                  var M = Ga(a.type, e, a.elementType === a.type);
                  (l = u.getSnapshotBeforeUpdate(M, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l);
                } catch (G) {
                  el(a, a.return, G);
                }
              }
              break;
            case 3:
              if (l & 1024) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Ji(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ji(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (l & 1024) throw Error(v(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Ol = l);
            break;
          }
          Ol = t.return;
        }
    return (M = Go), (Go = !1), M;
  }
  function Xo(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, a), u & 4 && de(5, a);
        break;
      case 1:
        if ((Vt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              el(a, a.return, i);
            }
          else {
            var e = Ga(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              el(a, a.return, i);
            }
          }
        u & 64 && Ro(a), u & 512 && Qa(a, a.return);
        break;
      case 3:
        if ((Vt(l, a), u & 64 && ((u = a.updateQueue), u !== null))) {
          if (((l = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                l = a.child.stateNode;
                break;
              case 1:
                l = a.child.stateNode;
            }
          try {
            Uo(u, l);
          } catch (i) {
            el(a, a.return, i);
          }
        }
        break;
      case 26:
        Vt(l, a), u & 512 && Qa(a, a.return);
        break;
      case 27:
      case 5:
        Vt(l, a), t === null && u & 4 && Ho(a), u & 512 && Qa(a, a.return);
        break;
      case 12:
        Vt(l, a);
        break;
      case 13:
        Vt(l, a), u & 4 && Zo(l, a);
        break;
      case 22:
        if (((e = a.memoizedState !== null || Qt), !e)) {
          t = (t !== null && t.memoizedState !== null) || vl;
          var n = Qt,
            c = vl;
          (Qt = e),
            (vl = t) && !c ? ha(l, a, (a.subtreeFlags & 8772) !== 0) : Vt(l, a),
            (Qt = n),
            (vl = c);
        }
        u & 512 &&
          (a.memoizedProps.mode === "manual"
            ? Qa(a, a.return)
            : Pl(a, a.return));
        break;
      default:
        Vt(l, a);
    }
  }
  function Lo(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), Lo(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && lc(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var Tl = null,
    lt = !1;
  function Zt(l, t, a) {
    for (a = a.child; a !== null; ) Qo(l, t, a), (a = a.sibling);
  }
  function Qo(l, t, a) {
    if (kl && typeof kl.onCommitFiberUnmount == "function")
      try {
        kl.onCommitFiberUnmount(Cu, a);
      } catch {}
    switch (a.tag) {
      case 26:
        vl || Pl(a, t),
          Zt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        vl || Pl(a, t);
        var u = Tl,
          e = lt;
        for (
          Tl = a.stateNode, Zt(l, t, a), a = a.stateNode, t = a.attributes;
          t.length;

        )
          a.removeAttributeNode(t[0]);
        lc(a), (Tl = u), (lt = e);
        break;
      case 5:
        vl || Pl(a, t);
      case 6:
        e = Tl;
        var n = lt;
        if (((Tl = null), Zt(l, t, a), (Tl = e), (lt = n), Tl !== null))
          if (lt)
            try {
              (l = Tl),
                (u = a.stateNode),
                l.nodeType === 8
                  ? l.parentNode.removeChild(u)
                  : l.removeChild(u);
            } catch (c) {
              el(a, t, c);
            }
          else
            try {
              Tl.removeChild(a.stateNode);
            } catch (c) {
              el(a, t, c);
            }
        break;
      case 18:
        Tl !== null &&
          (lt
            ? ((t = Tl),
              (a = a.stateNode),
              t.nodeType === 8
                ? wi(t.parentNode, a)
                : t.nodeType === 1 && wi(t, a),
              pe(t))
            : wi(Tl, a.stateNode));
        break;
      case 4:
        (u = Tl),
          (e = lt),
          (Tl = a.stateNode.containerInfo),
          (lt = !0),
          Zt(l, t, a),
          (Tl = u),
          (lt = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vl || ra(2, a, t), vl || ra(4, a, t), Zt(l, t, a);
        break;
      case 1:
        vl ||
          (Pl(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && Co(a, t, u)),
          Zt(l, t, a);
        break;
      case 21:
        Zt(l, t, a);
        break;
      case 22:
        vl || Pl(a, t),
          (vl = (u = vl) || a.memoizedState !== null),
          Zt(l, t, a),
          (vl = u);
        break;
      default:
        Zt(l, t, a);
    }
  }
  function Zo(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        pe(l);
      } catch (a) {
        el(t, t.return, a);
      }
  }
  function U0(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Yo()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Yo()),
          t
        );
      default:
        throw Error(v(435, l.tag));
    }
  }
  function mi(l, t) {
    var a = U0(l);
    t.forEach(function (u) {
      var e = K0.bind(null, l, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function rt(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          c = t,
          i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
            case 5:
              (Tl = i.stateNode), (lt = !1);
              break l;
            case 3:
              (Tl = i.stateNode.containerInfo), (lt = !0);
              break l;
            case 4:
              (Tl = i.stateNode.containerInfo), (lt = !0);
              break l;
          }
          i = i.return;
        }
        if (Tl === null) throw Error(v(160));
        Qo(n, c, e),
          (Tl = null),
          (lt = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Vo(t, l), (t = t.sibling);
  }
  var bt = null;
  function Vo(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        rt(t, l),
          ht(l),
          u & 4 && (ra(3, l, l.return), de(3, l), ra(5, l, l.return));
        break;
      case 1:
        rt(t, l),
          ht(l),
          u & 512 && (vl || a === null || Pl(a, a.return)),
          u & 64 &&
            Qt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
        break;
      case 26:
        var e = bt;
        if (
          (rt(t, l),
          ht(l),
          u & 512 && (vl || a === null || Pl(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  (u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e);
                  t: switch (u) {
                    case "title":
                      (n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[qu] ||
                          n[Rl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title")
                          )),
                        Ul(n, u, a),
                        (n[Rl] = l),
                        Dl(n),
                        (u = n);
                      break l;
                    case "link":
                      var c = Hd("link", "href", e).get(u + (a.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("href") ===
                              (a.href == null ? null : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Ul(n, u, a),
                        e.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = Hd("meta", "content", e).get(
                          u + (a.content || "")
                        ))
                      ) {
                        for (i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Ul(n, u, a),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(v(468, u));
                  }
                  (n[Rl] = l), Dl(n), (u = n);
                }
                l.stateNode = u;
              } else Bd(e, l.type, l.stateNode);
            else l.stateNode = Cd(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? Bd(e, l.type, l.stateNode)
                  : Cd(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                Bo(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        if (u & 4 && l.alternate === null) {
          (e = l.stateNode), (n = l.memoizedProps);
          try {
            for (var f = e.firstChild; f; ) {
              var r = f.nextSibling,
                S = f.nodeName;
              f[qu] ||
                S === "HEAD" ||
                S === "BODY" ||
                S === "SCRIPT" ||
                S === "STYLE" ||
                (S === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
                e.removeChild(f),
                (f = r);
            }
            for (var E = l.type, y = e.attributes; y.length; )
              e.removeAttributeNode(y[0]);
            Ul(e, E, n), (e[Rl] = l), (e[Kl] = n);
          } catch (M) {
            el(l, l.return, M);
          }
        }
      case 5:
        if (
          (rt(t, l),
          ht(l),
          u & 512 && (vl || a === null || Pl(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            lu(e, "");
          } catch (M) {
            el(l, l.return, M);
          }
        }
        u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), Bo(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (vi = !0);
        break;
      case 6:
        if ((rt(t, l), ht(l), u & 4)) {
          if (l.stateNode === null) throw Error(v(162));
          (u = l.memoizedProps), (a = l.stateNode);
          try {
            a.nodeValue = u;
          } catch (M) {
            el(l, l.return, M);
          }
        }
        break;
      case 3:
        if (
          ((Yn = null),
          (e = bt),
          (bt = Bn(t.containerInfo)),
          rt(t, l),
          (bt = e),
          ht(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            pe(t.containerInfo);
          } catch (M) {
            el(l, l.return, M);
          }
        vi && ((vi = !1), Ko(l));
        break;
      case 4:
        (u = bt),
          (bt = Bn(l.stateNode.containerInfo)),
          rt(t, l),
          ht(l),
          (bt = u);
        break;
      case 12:
        rt(t, l), ht(l);
        break;
      case 13:
        rt(t, l),
          ht(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (zi = zt()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), mi(l, u)));
        break;
      case 22:
        if (
          (u & 512 && (vl || a === null || Pl(a, a.return)),
          (f = l.memoizedState !== null),
          (r = a !== null && a.memoizedState !== null),
          (S = Qt),
          (E = vl),
          (Qt = S || f),
          (vl = E || r),
          rt(t, l),
          (vl = E),
          (Qt = S),
          ht(l),
          (t = l.stateNode),
          (t._current = l),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          u & 8192 &&
            ((t._visibility = f ? t._visibility & -2 : t._visibility | 1),
            f && ((t = Qt || vl), a === null || r || t || gu(l)),
            l.memoizedProps === null || l.memoizedProps.mode !== "manual"))
        )
          l: for (a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (a === null) {
                r = a = t;
                try {
                  if (((e = r.stateNode), f))
                    (n = e.style),
                      typeof n.setProperty == "function"
                        ? n.setProperty("display", "none", "important")
                        : (n.display = "none");
                  else {
                    (c = r.stateNode), (i = r.memoizedProps.style);
                    var g =
                      i != null && i.hasOwnProperty("display")
                        ? i.display
                        : null;
                    c.style.display =
                      g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (M) {
                  el(r, r.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                r = t;
                try {
                  r.stateNode.nodeValue = f ? "" : r.memoizedProps;
                } catch (M) {
                  el(r, r.return, M);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), mi(l, a))));
        break;
      case 19:
        rt(t, l),
          ht(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), mi(l, u)));
        break;
      case 21:
        break;
      default:
        rt(t, l), ht(l);
    }
  }
  function ht(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        if (l.tag !== 27) {
          l: {
            for (var a = l.return; a !== null; ) {
              if (qo(a)) {
                var u = a;
                break l;
              }
              a = a.return;
            }
            throw Error(v(160));
          }
          switch (u.tag) {
            case 27:
              var e = u.stateNode,
                n = ri(l);
              En(l, n, e);
              break;
            case 5:
              var c = u.stateNode;
              u.flags & 32 && (lu(c, ""), (u.flags &= -33));
              var i = ri(l);
              En(l, i, c);
              break;
            case 3:
            case 4:
              var f = u.stateNode.containerInfo,
                r = ri(l);
              hi(l, r, f);
              break;
            default:
              throw Error(v(161));
          }
        }
      } catch (S) {
        el(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Ko(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Ko(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Xo(l, t.alternate, t), (t = t.sibling);
  }
  function gu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ra(4, t, t.return), gu(t);
          break;
        case 1:
          Pl(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Co(t, t.return, a),
            gu(t);
          break;
        case 26:
        case 27:
        case 5:
          Pl(t, t.return), gu(t);
          break;
        case 22:
          Pl(t, t.return), t.memoizedState === null && gu(t);
          break;
        default:
          gu(t);
      }
      l = l.sibling;
    }
  }
  function ha(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ha(e, n, a), de(4, n);
          break;
        case 1:
          if (
            (ha(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (r) {
              el(u, u.return, r);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var i = u.stateNode;
            try {
              var f = e.shared.hiddenCallbacks;
              if (f !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < f.length; e++)
                  No(f[e], i);
            } catch (r) {
              el(u, u.return, r);
            }
          }
          a && c & 64 && Ro(n), Qa(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          ha(e, n, a), a && u === null && c & 4 && Ho(n), Qa(n, n.return);
          break;
        case 12:
          ha(e, n, a);
          break;
        case 13:
          ha(e, n, a), a && c & 4 && Zo(e, n);
          break;
        case 22:
          n.memoizedState === null && ha(e, n, a), Qa(n, n.return);
          break;
        default:
          ha(e, n, a);
      }
      t = t.sibling;
    }
  }
  function yi(l, t) {
    var a = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && te(a));
  }
  function gi(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && te(l));
  }
  function va(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) wo(l, t, a, u), (t = t.sibling);
  }
  function wo(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        va(l, t, a, u), e & 2048 && de(9, t);
        break;
      case 3:
        va(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && te(l)));
        break;
      case 12:
        if (e & 2048) {
          va(l, t, a, u), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              c = n.id,
              i = n.onPostCommit;
            typeof i == "function" &&
              i(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (f) {
            el(t, t.return, f);
          }
        } else va(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          t.memoizedState !== null
            ? n._visibility & 4
              ? va(l, t, a, u)
              : re(l, t)
            : n._visibility & 4
            ? va(l, t, a, u)
            : ((n._visibility |= 4),
              Su(l, t, a, u, (t.subtreeFlags & 10256) !== 0)),
          e & 2048 && yi(t.alternate, t);
        break;
      case 24:
        va(l, t, a, u), e & 2048 && gi(t.alternate, t);
        break;
      default:
        va(l, t, a, u);
    }
  }
  function Su(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        c = t,
        i = a,
        f = u,
        r = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Su(n, c, i, f, e), de(8, c);
          break;
        case 23:
          break;
        case 22:
          var S = c.stateNode;
          c.memoizedState !== null
            ? S._visibility & 4
              ? Su(n, c, i, f, e)
              : re(n, c)
            : ((S._visibility |= 4), Su(n, c, i, f, e)),
            e && r & 2048 && yi(c.alternate, c);
          break;
        case 24:
          Su(n, c, i, f, e), e && r & 2048 && gi(c.alternate, c);
          break;
        default:
          Su(n, c, i, f, e);
      }
      t = t.sibling;
    }
  }
  function re(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            re(a, u), e & 2048 && yi(u.alternate, u);
            break;
          case 24:
            re(a, u), e & 2048 && gi(u.alternate, u);
            break;
          default:
            re(a, u);
        }
        t = t.sibling;
      }
  }
  var he = 8192;
  function _u(l) {
    if (l.subtreeFlags & he)
      for (l = l.child; l !== null; ) Jo(l), (l = l.sibling);
  }
  function Jo(l) {
    switch (l.tag) {
      case 26:
        _u(l),
          l.flags & he &&
            l.memoizedState !== null &&
            bh(bt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        _u(l);
        break;
      case 3:
      case 4:
        var t = bt;
        (bt = Bn(l.stateNode.containerInfo)), _u(l), (bt = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = he), (he = 16777216), _u(l), (he = t))
            : _u(l));
        break;
      default:
        _u(l);
    }
  }
  function $o(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function ve(l) {
    var t = l.deletions;
    if (l.flags & 16) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (Ol = u), ko(u, l);
        }
      $o(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Wo(l), (l = l.sibling);
  }
  function Wo(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ve(l), l.flags & 2048 && ra(9, l, l.return);
        break;
      case 3:
        ve(l);
        break;
      case 12:
        ve(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 4 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -5), Tn(l))
          : ve(l);
        break;
      default:
        ve(l);
    }
  }
  function Tn(l) {
    var t = l.deletions;
    if (l.flags & 16) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (Ol = u), ko(u, l);
        }
      $o(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          ra(8, t, t.return), Tn(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 4 && ((a._visibility &= -5), Tn(t));
          break;
        default:
          Tn(t);
      }
      l = l.sibling;
    }
  }
  function ko(l, t) {
    for (; Ol !== null; ) {
      var a = Ol;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ra(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          te(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) (u.return = a), (Ol = u);
      else
        l: for (a = l; Ol !== null; ) {
          u = Ol;
          var e = u.sibling,
            n = u.return;
          if ((Lo(u), u === a)) {
            Ol = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (Ol = e);
            break l;
          }
          Ol = n;
        }
    }
  }
  function R0(l, t, a, u) {
    (this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function vt(l, t, a, u) {
    return new R0(l, t, a, u);
  }
  function Si(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function ma(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = vt(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 31457280),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function Fo(l, t) {
    l.flags &= 31457282;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function An(l, t, a, u, e, n) {
    var c = 0;
    if (((u = l), typeof l == "function")) Si(l) && (c = 1);
    else if (typeof l == "string")
      c = Sh(l, a, At.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case D:
          return Za(a.children, e, n, t);
        case T:
          (c = 8), (e |= 24);
          break;
        case I:
          return (
            (l = vt(12, a, t, e | 2)), (l.elementType = I), (l.lanes = n), l
          );
        case ut:
          return (l = vt(13, a, t, e)), (l.elementType = ut), (l.lanes = n), l;
        case Wl:
          return (l = vt(19, a, t, e)), (l.elementType = Wl), (l.lanes = n), l;
        case gt:
          return Io(a, e, n, t);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case fl:
              case Sl:
                c = 10;
                break l;
              case sl:
                c = 9;
                break l;
              case Ql:
                c = 11;
                break l;
              case xt:
                c = 14;
                break l;
              case Bl:
                (c = 16), (u = null);
                break l;
            }
          (c = 29),
            (a = Error(v(130, l === null ? "null" : typeof l, ""))),
            (u = null);
      }
    return (
      (t = vt(c, a, t, e)), (t.elementType = l), (t.type = u), (t.lanes = n), t
    );
  }
  function Za(l, t, a, u) {
    return (l = vt(7, l, u, t)), (l.lanes = a), l;
  }
  function Io(l, t, a, u) {
    (l = vt(22, l, u, t)), (l.elementType = gt), (l.lanes = a);
    var e = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var n = e._current;
        if (n === null) throw Error(v(456));
        if (!(e._pendingVisibility & 2)) {
          var c = ua(n, 2);
          c !== null && ((e._pendingVisibility |= 2), Gl(c, n, 2));
        }
      },
      attach: function () {
        var n = e._current;
        if (n === null) throw Error(v(456));
        if (e._pendingVisibility & 2) {
          var c = ua(n, 2);
          c !== null && ((e._pendingVisibility &= -3), Gl(c, n, 2));
        }
      },
    };
    return (l.stateNode = e), l;
  }
  function _i(l, t, a) {
    return (l = vt(6, l, null, t)), (l.lanes = a), l;
  }
  function bi(l, t, a) {
    return (
      (t = vt(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  function Kt(l) {
    l.flags |= 4;
  }
  function Po(l, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) l.flags &= -16777217;
    else if (((l.flags |= 16777216), !qd(t))) {
      if (
        ((t = dt.current),
        t !== null &&
          ((W & 4194176) === W
            ? jt !== null
            : ((W & 62914560) !== W && !(W & 536870912)) || t !== jt))
      )
        throw ((Iu = Dc), ms);
      l.flags |= 8192;
    }
  }
  function zn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? yf() : 536870912), (l.lanes |= t), (Eu |= t));
  }
  function me(l, t) {
    if (!k)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), (a = a.sibling);
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 31457280),
          (u |= e.flags & 31457280),
          (e.return = l),
          (e = e.sibling);
    else
      for (e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling);
    return (l.subtreeFlags |= u), (l.childLanes = a), t;
  }
  function C0(l, t, a) {
    var u = t.pendingProps;
    switch ((Ac(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dl(t), null;
      case 1:
        return dl(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Lt(zl),
          $a(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            ($u(t)
              ? Kt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), _t !== null && (Mi(_t), (_t = null)))),
          dl(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          l === null
            ? (Kt(t),
              a !== null ? (dl(t), Po(t, a)) : (dl(t), (t.flags &= -16777217)))
            : a
            ? a !== l.memoizedState
              ? (Kt(t), dl(t), Po(t, a))
              : (dl(t), (t.flags &= -16777217))
            : (l.memoizedProps !== u && Kt(t), dl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        He(t), (a = Pt.current);
        var e = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== u && Kt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(v(166));
            return dl(t), null;
          }
          (l = At.current),
            $u(t) ? hs(t) : ((l = pd(e, u, a)), (t.stateNode = l), Kt(t));
        }
        return dl(t), null;
      case 5:
        if ((He(t), (a = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Kt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(v(166));
            return dl(t), null;
          }
          if (((l = At.current), $u(t))) hs(t);
          else {
            switch (((e = Hn(Pt.current)), l)) {
              case 1:
                l = e.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    l = e.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (l = e.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof u.is == "string"
                        ? e.createElement("select", { is: u.is })
                        : e.createElement("select")),
                      u.multiple
                        ? (l.multiple = !0)
                        : u.size && (l.size = u.size);
                    break;
                  default:
                    l =
                      typeof u.is == "string"
                        ? e.createElement(a, { is: u.is })
                        : e.createElement(a);
                }
            }
            (l[Rl] = t), (l[Kl] = u);
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break l;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
            t.stateNode = l;
            l: switch ((Ul(l, a, u), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!u.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Kt(t);
          }
        }
        return dl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Kt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(v(166));
          if (((l = Pt.current), $u(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = Yl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            (l[Rl] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                Ad(l.nodeValue, a)
              )),
              l || Ra(t);
          } else (l = Hn(l).createTextNode(u)), (l[Rl] = t), (t.stateNode = l);
        }
        return dl(t), null;
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = $u(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(v(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(v(317));
              e[Rl] = t;
            } else
              Wu(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            dl(t), (e = !1);
          } else _t !== null && (Mi(_t), (_t = null)), (e = !0);
          if (!e) return t.flags & 256 ? (qt(t), t) : (qt(t), null);
        }
        if ((qt(t), t.flags & 128)) return (t.lanes = a), t;
        if (
          ((a = u !== null), (l = l !== null && l.memoizedState !== null), a)
        ) {
          (u = t.child),
            (e = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (n = u.memoizedState.cachePool.pool),
            n !== e && (u.flags |= 2048);
        }
        return (
          a !== l && a && (t.child.flags |= 8192),
          zn(t, t.updateQueue),
          dl(t),
          null
        );
      case 4:
        return $a(), l === null && Gi(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return Lt(t.type), dl(t), null;
      case 19:
        if ((_l(Al), (e = t.memoizedState), e === null)) return dl(t), null;
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) me(e, !1);
          else {
            if (ml !== 0 || (l !== null && l.flags & 128))
              for (l = t.child; l !== null; ) {
                if (((n = cn(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      me(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      zn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;

                  )
                    Fo(a, l), (a = a.sibling);
                  return ol(Al, (Al.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null &&
              zt() > Dn &&
              ((t.flags |= 128), (u = !0), me(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = cn(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                zn(t, l),
                me(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !k)
              )
                return dl(t), null;
            } else
              2 * zt() - e.renderingStartTime > Dn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), me(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((t = e.tail),
            (e.rendering = t),
            (e.tail = t.sibling),
            (e.renderingStartTime = zt()),
            (t.sibling = null),
            (l = Al.current),
            ol(Al, u ? (l & 1) | 2 : l & 1),
            t)
          : (dl(t), null);
      case 22:
      case 23:
        return (
          qt(t),
          Oc(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? a & 536870912 &&
              !(t.flags & 128) &&
              (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : dl(t),
          (a = t.updateQueue),
          a !== null && zn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && _l(Ha),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Lt(zl),
          dl(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(v(156, t.tag));
  }
  function H0(l, t) {
    switch ((Ac(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Lt(zl),
          $a(),
          (l = t.flags),
          l & 65536 && !(l & 128) ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return He(t), null;
      case 13:
        if (
          (qt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(v(340));
          Wu();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return _l(Al), null;
      case 4:
        return $a(), null;
      case 10:
        return Lt(t.type), null;
      case 22:
      case 23:
        return (
          qt(t),
          Oc(),
          l !== null && _l(Ha),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Lt(zl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ld(l, t) {
    switch ((Ac(t), t.tag)) {
      case 3:
        Lt(zl), $a();
        break;
      case 26:
      case 27:
      case 5:
        He(t);
        break;
      case 4:
        $a();
        break;
      case 13:
        qt(t);
        break;
      case 19:
        _l(Al);
        break;
      case 10:
        Lt(t.type);
        break;
      case 22:
      case 23:
        qt(t), Oc(), l !== null && _l(Ha);
        break;
      case 24:
        Lt(zl);
    }
  }
  var B0 = {
      getCacheForType: function (l) {
        var t = Cl(zl),
          a = t.data.get(l);
        return a === void 0 && ((a = l()), t.data.set(l, a)), a;
      },
    },
    q0 = typeof WeakMap == "function" ? WeakMap : Map,
    rl = 0,
    cl = null,
    w = null,
    W = 0,
    il = 0,
    tt = null,
    wt = !1,
    bu = !1,
    Ei = !1,
    Jt = 0,
    ml = 0,
    ya = 0,
    Va = 0,
    Ti = 0,
    mt = 0,
    Eu = 0,
    ye = null,
    Mt = null,
    Ai = !1,
    zi = 0,
    Dn = 1 / 0,
    jn = null,
    ga = null,
    On = !1,
    Ka = null,
    ge = 0,
    Di = 0,
    ji = null,
    Se = 0,
    Oi = null;
  function at() {
    if (rl & 2 && W !== 0) return W & -W;
    if (C.T !== null) {
      var l = ru;
      return l !== 0 ? l : Hi();
    }
    return bf();
  }
  function td() {
    mt === 0 && (mt = !(W & 536870912) || k ? mf() : 536870912);
    var l = dt.current;
    return l !== null && (l.flags |= 32), mt;
  }
  function Gl(l, t, a) {
    ((l === cl && il === 2) || l.cancelPendingCommit !== null) &&
      (Tu(l, 0), $t(l, W, mt, !1)),
      Bu(l, a),
      (!(rl & 2) || l !== cl) &&
        (l === cl && (!(rl & 2) && (Va |= a), ml === 4 && $t(l, W, mt, !1)),
        pt(l));
  }
  function ad(l, t, a) {
    if (rl & 6) throw Error(v(327));
    var u = (!a && (t & 60) === 0 && (t & l.expiredLanes) === 0) || Hu(l, t),
      e = u ? X0(l, t) : Ni(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        bu && !u && $t(l, t, 0, !1);
        break;
      } else if (e === 6) $t(l, t, 0, !wt);
      else {
        if (((a = l.current.alternate), n && !Y0(a))) {
          (e = Ni(l, t, !1)), (n = !1);
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            l: {
              var i = l;
              e = ye;
              var f = i.current.memoizedState.isDehydrated;
              if ((f && (Tu(i, c).flags |= 256), (c = Ni(i, c, !1)), c !== 2)) {
                if (Ei && !f) {
                  (i.errorRecoveryDisabledLanes |= n), (Va |= n), (e = 4);
                  break l;
                }
                (n = Mt), (Mt = e), n !== null && Mi(n);
              }
              e = c;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          Tu(l, 0), $t(l, t, 0, !0);
          break;
        }
        l: {
          switch (((u = l), e)) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((t & 4194176) === t) {
                $t(u, t, mt, !wt);
                break l;
              }
              break;
            case 2:
              Mt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if (
            ((u.finishedWork = a),
            (u.finishedLanes = t),
            (t & 62914560) === t && ((n = zi + 300 - zt()), 10 < n))
          ) {
            if (($t(u, t, mt, !wt), Ge(u, 0) !== 0)) break l;
            u.timeoutHandle = jd(
              ud.bind(null, u, a, Mt, jn, Ai, t, mt, Va, Eu, wt, 2, -0, 0),
              n
            );
            break l;
          }
          ud(u, a, Mt, jn, Ai, t, mt, Va, Eu, wt, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    pt(l);
  }
  function Mi(l) {
    Mt === null ? (Mt = l) : Mt.push.apply(Mt, l);
  }
  function ud(l, t, a, u, e, n, c, i, f, r, S, E, y) {
    var g = t.subtreeFlags;
    if (
      (g & 8192 || (g & 16785408) === 16785408) &&
      ((ze = { stylesheets: null, count: 0, unsuspend: _h }),
      Jo(t),
      (t = Eh()),
      t !== null)
    ) {
      (l.cancelPendingCommit = t(od.bind(null, l, a, u, e, c, i, f, 1, E, y))),
        $t(l, n, c, !r);
      return;
    }
    od(l, a, u, e, c, i, f, S, E, y);
  }
  function Y0(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!Il(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function $t(l, t, a, u) {
    (t &= ~Ti),
      (t &= ~Va),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - Fl(e),
        c = 1 << n;
      (u[n] = -1), (e &= ~c);
    }
    a !== 0 && gf(l, a, t);
  }
  function Mn() {
    return rl & 6 ? !0 : (_e(0), !1);
  }
  function pi() {
    if (w !== null) {
      if (il === 0) var l = w.return;
      else (l = w), (Xt = Xa = null), Hc(l), (ou = null), (Pu = 0), (l = w);
      for (; l !== null; ) ld(l.alternate, l), (l = l.return);
      w = null;
    }
  }
  function Tu(l, t) {
    (l.finishedWork = null), (l.finishedLanes = 0);
    var a = l.timeoutHandle;
    a !== -1 && ((l.timeoutHandle = -1), uh(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      pi(),
      (cl = l),
      (w = a = ma(l.current, null)),
      (W = t),
      (il = 0),
      (tt = null),
      (wt = !1),
      (bu = Hu(l, t)),
      (Ei = !1),
      (Eu = mt = Ti = Va = ya = ml = 0),
      (Mt = ye = null),
      (Ai = !1),
      t & 8 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Fl(u),
          n = 1 << e;
        (t |= l[e]), (u &= ~n);
      }
    return (Jt = t), Fe(), a;
  }
  function ed(l, t) {
    (Z = null),
      (C.H = Ot),
      t === Fu
        ? ((t = Ss()), (il = 3))
        : t === ms
        ? ((t = Ss()), (il = 4))
        : (il =
            t === go
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (tt = t),
      w === null && ((ml = 1), Sn(l, ft(t, l.current)));
  }
  function nd() {
    var l = C.H;
    return (C.H = Ot), l === null ? Ot : l;
  }
  function cd() {
    var l = C.A;
    return (C.A = B0), l;
  }
  function xi() {
    (ml = 4),
      wt || ((W & 4194176) !== W && dt.current !== null) || (bu = !0),
      (!(ya & 134217727) && !(Va & 134217727)) ||
        cl === null ||
        $t(cl, W, mt, !1);
  }
  function Ni(l, t, a) {
    var u = rl;
    rl |= 2;
    var e = nd(),
      n = cd();
    (cl !== l || W !== t) && ((jn = null), Tu(l, t)), (t = !1);
    var c = ml;
    l: do
      try {
        if (il !== 0 && w !== null) {
          var i = w,
            f = tt;
          switch (il) {
            case 8:
              pi(), (c = 6);
              break l;
            case 3:
            case 2:
            case 6:
              dt.current === null && (t = !0);
              var r = il;
              if (((il = 0), (tt = null), Au(l, i, f, r), a && bu)) {
                c = 0;
                break l;
              }
              break;
            default:
              (r = il), (il = 0), (tt = null), Au(l, i, f, r);
          }
        }
        G0(), (c = ml);
        break;
      } catch (S) {
        ed(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Xt = Xa = null),
      (rl = u),
      (C.H = e),
      (C.A = n),
      w === null && ((cl = null), (W = 0), Fe()),
      c
    );
  }
  function G0() {
    for (; w !== null; ) id(w);
  }
  function X0(l, t) {
    var a = rl;
    rl |= 2;
    var u = nd(),
      e = cd();
    cl !== l || W !== t
      ? ((jn = null), (Dn = zt() + 500), Tu(l, t))
      : (bu = Hu(l, t));
    l: do
      try {
        if (il !== 0 && w !== null) {
          t = w;
          var n = tt;
          t: switch (il) {
            case 1:
              (il = 0), (tt = null), Au(l, t, n, 1);
              break;
            case 2:
              if (ys(n)) {
                (il = 0), (tt = null), fd(t);
                break;
              }
              (t = function () {
                il === 2 && cl === l && (il = 7), pt(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              il = 7;
              break l;
            case 4:
              il = 5;
              break l;
            case 7:
              ys(n)
                ? ((il = 0), (tt = null), fd(t))
                : ((il = 0), (tt = null), Au(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (w.tag) {
                case 26:
                  c = w.memoizedState;
                case 5:
                case 27:
                  var i = w;
                  if (!c || qd(c)) {
                    (il = 0), (tt = null);
                    var f = i.sibling;
                    if (f !== null) w = f;
                    else {
                      var r = i.return;
                      r !== null ? ((w = r), pn(r)) : (w = null);
                    }
                    break t;
                  }
              }
              (il = 0), (tt = null), Au(l, t, n, 5);
              break;
            case 6:
              (il = 0), (tt = null), Au(l, t, n, 6);
              break;
            case 8:
              pi(), (ml = 6);
              break l;
            default:
              throw Error(v(462));
          }
        }
        L0();
        break;
      } catch (S) {
        ed(l, S);
      }
    while (!0);
    return (
      (Xt = Xa = null),
      (C.H = u),
      (C.A = e),
      (rl = a),
      w !== null ? 0 : ((cl = null), (W = 0), Fe(), ml)
    );
  }
  function L0() {
    for (; w !== null && !sr(); ) id(w);
  }
  function id(l) {
    var t = po(l.alternate, l, Jt);
    (l.memoizedProps = l.pendingProps), t === null ? pn(l) : (w = t);
  }
  function fd(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ao(a, t, t.pendingProps, t.type, void 0, W);
        break;
      case 11:
        t = Ao(a, t, t.pendingProps, t.type.render, t.ref, W);
        break;
      case 5:
        Hc(t);
      default:
        ld(a, t), (t = w = Fo(t, Jt)), (t = po(a, t, Jt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? pn(l) : (w = t);
  }
  function Au(l, t, a, u) {
    (Xt = Xa = null), Hc(t), (ou = null), (Pu = 0);
    var e = t.return;
    try {
      if (p0(l, e, t, a, W)) {
        (ml = 1), Sn(l, ft(a, l.current)), (w = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((w = e), n);
      (ml = 1), Sn(l, ft(a, l.current)), (w = null);
      return;
    }
    t.flags & 32768
      ? (k || u === 1
          ? (l = !0)
          : bu || W & 536870912
          ? (l = !1)
          : ((wt = l = !0),
            (u === 2 || u === 3 || u === 6) &&
              ((u = dt.current),
              u !== null && u.tag === 13 && (u.flags |= 16384))),
        sd(t, l))
      : pn(t);
  }
  function pn(l) {
    var t = l;
    do {
      if (t.flags & 32768) {
        sd(t, wt);
        return;
      }
      l = t.return;
      var a = C0(t.alternate, t, Jt);
      if (a !== null) {
        w = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        w = t;
        return;
      }
      w = t = l;
    } while (t !== null);
    ml === 0 && (ml = 5);
  }
  function sd(l, t) {
    do {
      var a = H0(l.alternate, l);
      if (a !== null) {
        (a.flags &= 32767), (w = a);
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        w = l;
        return;
      }
      w = l = a;
    } while (l !== null);
    (ml = 6), (w = null);
  }
  function od(l, t, a, u, e, n, c, i, f, r) {
    var S = C.T,
      E = j.p;
    try {
      (j.p = 2), (C.T = null), Q0(l, t, a, u, E, e, n, c, i, f, r);
    } finally {
      (C.T = S), (j.p = E);
    }
  }
  function Q0(l, t, a, u, e, n, c, i) {
    do zu();
    while (Ka !== null);
    if (rl & 6) throw Error(v(327));
    var f = l.finishedWork;
    if (((u = l.finishedLanes), f === null)) return null;
    if (((l.finishedWork = null), (l.finishedLanes = 0), f === l.current))
      throw Error(v(177));
    (l.callbackNode = null),
      (l.callbackPriority = 0),
      (l.cancelPendingCommit = null);
    var r = f.lanes | f.childLanes;
    if (
      ((r |= bc),
      br(l, u, r, n, c, i),
      l === cl && ((w = cl = null), (W = 0)),
      (!(f.subtreeFlags & 10256) && !(f.flags & 10256)) ||
        On ||
        ((On = !0),
        (Di = r),
        (ji = a),
        w0(Be, function () {
          return zu(), null;
        })),
      (a = (f.flags & 15990) !== 0),
      f.subtreeFlags & 15990 || a
        ? ((a = C.T),
          (C.T = null),
          (n = j.p),
          (j.p = 2),
          (c = rl),
          (rl |= 4),
          N0(l, f),
          Vo(f, l),
          r0(Zi, l.containerInfo),
          (Ln = !!Qi),
          (Zi = Qi = null),
          (l.current = f),
          Xo(l, f.alternate, f),
          or(),
          (rl = c),
          (j.p = n),
          (C.T = a))
        : (l.current = f),
      On ? ((On = !1), (Ka = l), (ge = u)) : dd(l, r),
      (r = l.pendingLanes),
      r === 0 && (ga = null),
      mr(f.stateNode),
      pt(l),
      t !== null)
    )
      for (e = l.onRecoverableError, f = 0; f < t.length; f++)
        (r = t[f]), e(r.value, { componentStack: r.stack });
    return (
      ge & 3 && zu(),
      (r = l.pendingLanes),
      u & 4194218 && r & 42
        ? l === Oi
          ? Se++
          : ((Se = 0), (Oi = l))
        : (Se = 0),
      _e(0),
      null
    );
  }
  function dd(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), te(t)));
  }
  function zu() {
    if (Ka !== null) {
      var l = Ka,
        t = Di;
      Di = 0;
      var a = _f(ge),
        u = C.T,
        e = j.p;
      try {
        if (((j.p = 32 > a ? 32 : a), (C.T = null), Ka === null)) var n = !1;
        else {
          (a = ji), (ji = null);
          var c = Ka,
            i = ge;
          if (((Ka = null), (ge = 0), rl & 6)) throw Error(v(331));
          var f = rl;
          if (
            ((rl |= 4),
            Wo(c.current),
            wo(c, c.current, i, a),
            (rl = f),
            _e(0, !1),
            kl && typeof kl.onPostCommitFiberRoot == "function")
          )
            try {
              kl.onPostCommitFiberRoot(Cu, c);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (j.p = e), (C.T = u), dd(l, t);
      }
    }
    return !1;
  }
  function rd(l, t, a) {
    (t = ft(a, t)),
      (t = Wc(l.stateNode, t, 2)),
      (l = da(l, t, 2)),
      l !== null && (Bu(l, 2), pt(l));
  }
  function el(l, t, a) {
    if (l.tag === 3) rd(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          rd(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (ga === null || !ga.has(u)))
          ) {
            (l = ft(a, l)),
              (a = mo(2)),
              (u = da(t, a, 2)),
              u !== null && (yo(a, u, t, l), Bu(u, 2), pt(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ui(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new q0();
      var e = new Set();
      u.set(t, e);
    } else (e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e));
    e.has(a) ||
      ((Ei = !0), e.add(a), (l = Z0.bind(null, l, t, a)), t.then(l, l));
  }
  function Z0(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      cl === l &&
        (W & a) === a &&
        (ml === 4 || (ml === 3 && (W & 62914560) === W && 300 > zt() - zi)
          ? !(rl & 2) && Tu(l, 0)
          : (Ti |= a),
        Eu === W && (Eu = 0)),
      pt(l);
  }
  function hd(l, t) {
    t === 0 && (t = yf()), (l = ua(l, t)), l !== null && (Bu(l, t), pt(l));
  }
  function V0(l) {
    var t = l.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), hd(l, a);
  }
  function K0(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    u !== null && u.delete(t), hd(l, a);
  }
  function w0(l, t) {
    return kn(l, t);
  }
  var xn = null,
    Du = null,
    Ri = !1,
    Nn = !1,
    Ci = !1,
    wa = 0;
  function pt(l) {
    l !== Du &&
      l.next === null &&
      (Du === null ? (xn = Du = l) : (Du = Du.next = l)),
      (Nn = !0),
      Ri || ((Ri = !0), $0(J0));
  }
  function _e(l, t) {
    if (!Ci && Nn) {
      Ci = !0;
      do
        for (var a = !1, u = xn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = u.suspendedLanes,
                i = u.pingedLanes;
              (n = (1 << (31 - Fl(42 | l) + 1)) - 1),
                (n &= e & ~(c & ~i)),
                (n = n & 201326677 ? (n & 201326677) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((a = !0), yd(u, n));
          } else
            (n = W),
              (n = Ge(u, u === cl ? n : 0)),
              !(n & 3) || Hu(u, n) || ((a = !0), yd(u, n));
          u = u.next;
        }
      while (a);
      Ci = !1;
    }
  }
  function J0() {
    Nn = Ri = !1;
    var l = 0;
    wa !== 0 && (ah() && (l = wa), (wa = 0));
    for (var t = zt(), a = null, u = xn; u !== null; ) {
      var e = u.next,
        n = vd(u, t);
      n === 0
        ? ((u.next = null),
          a === null ? (xn = e) : (a.next = e),
          e === null && (Du = a))
        : ((a = u), (l !== 0 || n & 3) && (Nn = !0)),
        (u = e);
    }
    _e(l);
  }
  function vd(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - Fl(n),
        i = 1 << c,
        f = e[c];
      f === -1
        ? (!(i & a) || i & u) && (e[c] = _r(i, t))
        : f <= t && (l.expiredLanes |= i),
        (n &= ~i);
    }
    if (
      ((t = cl),
      (a = W),
      (a = Ge(l, l === t ? a : 0)),
      (u = l.callbackNode),
      a === 0 || (l === t && il === 2) || l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && Fn(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if (!(a & 3) || Hu(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && Fn(u), _f(a))) {
        case 2:
        case 8:
          a = hf;
          break;
        case 32:
          a = Be;
          break;
        case 268435456:
          a = vf;
          break;
        default:
          a = Be;
      }
      return (
        (u = md.bind(null, l)),
        (a = kn(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && Fn(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function md(l, t) {
    var a = l.callbackNode;
    if (zu() && l.callbackNode !== a) return null;
    var u = W;
    return (
      (u = Ge(l, l === cl ? u : 0)),
      u === 0
        ? null
        : (ad(l, u, t),
          vd(l, zt()),
          l.callbackNode != null && l.callbackNode === a
            ? md.bind(null, l)
            : null)
    );
  }
  function yd(l, t) {
    if (zu()) return null;
    ad(l, t, !0);
  }
  function $0(l) {
    eh(function () {
      rl & 6 ? kn(rf, l) : l();
    });
  }
  function Hi() {
    return wa === 0 && (wa = mf()), wa;
  }
  function gd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Ve("" + l);
  }
  function Sd(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function W0(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = gd((e[Kl] || null).action),
        c = u.submitter;
      c &&
        ((t = (t = c[Kl] || null)
          ? gd(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var i = new $e("action", "action", null, u, e);
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (wa !== 0) {
                  var f = c ? Sd(e, c) : new FormData(e);
                  Vc(
                    a,
                    { pending: !0, data: f, method: e.method, action: n },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" &&
                  (i.preventDefault(),
                  (f = c ? Sd(e, c) : new FormData(e)),
                  Vc(
                    a,
                    { pending: !0, data: f, method: e.method, action: n },
                    n,
                    f
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Bi = 0; Bi < ss.length; Bi++) {
    var qi = ss[Bi],
      k0 = qi.toLowerCase(),
      F0 = qi[0].toUpperCase() + qi.slice(1);
    St(k0, "on" + F0);
  }
  St(es, "onAnimationEnd"),
    St(ns, "onAnimationIteration"),
    St(cs, "onAnimationStart"),
    St("dblclick", "onDoubleClick"),
    St("focusin", "onFocus"),
    St("focusout", "onBlur"),
    St(v0, "onTransitionRun"),
    St(m0, "onTransitionStart"),
    St(y0, "onTransitionCancel"),
    St(is, "onTransitionEnd"),
    Ia("onMouseEnter", ["mouseout", "mouseover"]),
    Ia("onMouseLeave", ["mouseout", "mouseover"]),
    Ia("onPointerEnter", ["pointerout", "pointerover"]),
    Ia("onPointerLeave", ["pointerout", "pointerover"]),
    Oa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Oa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Oa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Oa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Oa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Oa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var be =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    I0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(be)
    );
  function _d(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = u.length - 1; 0 <= c; c--) {
            var i = u[c],
              f = i.instance,
              r = i.currentTarget;
            if (((i = i.listener), f !== n && e.isPropagationStopped()))
              break l;
            (n = i), (e.currentTarget = r);
            try {
              n(e);
            } catch (S) {
              gn(S);
            }
            (e.currentTarget = null), (n = f);
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((i = u[c]),
              (f = i.instance),
              (r = i.currentTarget),
              (i = i.listener),
              f !== n && e.isPropagationStopped())
            )
              break l;
            (n = i), (e.currentTarget = r);
            try {
              n(e);
            } catch (S) {
              gn(S);
            }
            (e.currentTarget = null), (n = f);
          }
      }
    }
  }
  function J(l, t) {
    var a = t[Pn];
    a === void 0 && (a = t[Pn] = new Set());
    var u = l + "__bubble";
    a.has(u) || (bd(t, l, 2, !1), a.add(u));
  }
  function Yi(l, t, a) {
    var u = 0;
    t && (u |= 4), bd(a, l, u, t);
  }
  var Un = "_reactListening" + Math.random().toString(36).slice(2);
  function Gi(l) {
    if (!l[Un]) {
      (l[Un] = !0),
        Tf.forEach(function (a) {
          a !== "selectionchange" && (I0.has(a) || Yi(a, !1, l), Yi(a, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Un] || ((t[Un] = !0), Yi("selectionchange", !1, t));
    }
  }
  function bd(l, t, a, u) {
    switch (Zd(t)) {
      case 2:
        var e = zh;
        break;
      case 8:
        e = Dh;
        break;
      default:
        e = Ii;
    }
    (a = e.bind(null, t, a, l)),
      (e = void 0),
      !ic ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
        ? l.addEventListener(t, a, { passive: e })
        : l.addEventListener(t, a, !1);
  }
  function Xi(l, t, a, u, e) {
    var n = u;
    if (!(t & 1) && !(t & 2) && u !== null)
      l: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var i = u.stateNode.containerInfo;
          if (i === e || (i.nodeType === 8 && i.parentNode === e)) break;
          if (c === 4)
            for (c = u.return; c !== null; ) {
              var f = c.tag;
              if (
                (f === 3 || f === 4) &&
                ((f = c.stateNode.containerInfo),
                f === e || (f.nodeType === 8 && f.parentNode === e))
              )
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (((c = ja(i)), c === null)) return;
            if (((f = c.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              u = n = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        u = u.return;
      }
    Cf(function () {
      var r = n,
        S = nc(a),
        E = [];
      l: {
        var y = fs.get(l);
        if (y !== void 0) {
          var g = $e,
            M = l;
          switch (l) {
            case "keypress":
              if (we(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = Kr;
              break;
            case "focusin":
              (M = "focus"), (g = dc);
              break;
            case "focusout":
              (M = "blur"), (g = dc);
              break;
            case "beforeblur":
            case "afterblur":
              g = dc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = qf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Rr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = $r;
              break;
            case es:
            case ns:
            case cs:
              g = Br;
              break;
            case is:
              g = kr;
              break;
            case "scroll":
            case "scrollend":
              g = Nr;
              break;
            case "wheel":
              g = Ir;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Yr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Gf;
              break;
            case "toggle":
            case "beforetoggle":
              g = l0;
          }
          var G = (t & 4) !== 0,
            yl = !G && (l === "scroll" || l === "scrollend"),
            h = G ? (y !== null ? y + "Capture" : null) : y;
          G = [];
          for (var d = r, m; d !== null; ) {
            var b = d;
            if (
              ((m = b.stateNode),
              (b = b.tag),
              (b !== 5 && b !== 26 && b !== 27) ||
                m === null ||
                h === null ||
                ((b = Gu(d, h)), b != null && G.push(Ee(d, b, m))),
              yl)
            )
              break;
            d = d.return;
          }
          0 < G.length &&
            ((y = new g(y, M, null, a, S)), E.push({ event: y, listeners: G }));
        }
      }
      if (!(t & 7)) {
        l: {
          if (
            ((y = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            y &&
              a !== ec &&
              (M = a.relatedTarget || a.fromElement) &&
              (ja(M) || M[Wa]))
          )
            break l;
          if (
            (g || y) &&
            ((y =
              S.window === S
                ? S
                : (y = S.ownerDocument)
                ? y.defaultView || y.parentWindow
                : window),
            g
              ? ((M = a.relatedTarget || a.toElement),
                (g = r),
                (M = M ? ja(M) : null),
                M !== null &&
                  ((yl = B(M)),
                  (G = M.tag),
                  M !== yl || (G !== 5 && G !== 27 && G !== 6)) &&
                  (M = null))
              : ((g = null), (M = r)),
            g !== M)
          ) {
            if (
              ((G = qf),
              (b = "onMouseLeave"),
              (h = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((G = Gf),
                (b = "onPointerLeave"),
                (h = "onPointerEnter"),
                (d = "pointer")),
              (yl = g == null ? y : Yu(g)),
              (m = M == null ? y : Yu(M)),
              (y = new G(b, d + "leave", g, a, S)),
              (y.target = yl),
              (y.relatedTarget = m),
              (b = null),
              ja(S) === r &&
                ((G = new G(h, d + "enter", M, a, S)),
                (G.target = m),
                (G.relatedTarget = yl),
                (b = G)),
              (yl = b),
              g && M)
            )
              t: {
                for (G = g, h = M, d = 0, m = G; m; m = ju(m)) d++;
                for (m = 0, b = h; b; b = ju(b)) m++;
                for (; 0 < d - m; ) (G = ju(G)), d--;
                for (; 0 < m - d; ) (h = ju(h)), m--;
                for (; d--; ) {
                  if (G === h || (h !== null && G === h.alternate)) break t;
                  (G = ju(G)), (h = ju(h));
                }
                G = null;
              }
            else G = null;
            g !== null && Ed(E, y, g, G, !1),
              M !== null && yl !== null && Ed(E, yl, M, G, !0);
          }
        }
        l: {
          if (
            ((y = r ? Yu(r) : window),
            (g = y.nodeName && y.nodeName.toLowerCase()),
            g === "select" || (g === "input" && y.type === "file"))
          )
            var O = Jf;
          else if (Kf(y))
            if ($f) O = o0;
            else {
              O = f0;
              var K = i0;
            }
          else
            (g = y.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (y.type !== "checkbox" && y.type !== "radio")
                ? r && uc(r.elementType) && (O = Jf)
                : (O = s0);
          if (O && (O = O(l, r))) {
            wf(E, O, a, S);
            break l;
          }
          K && K(l, y, r),
            l === "focusout" &&
              r &&
              y.type === "number" &&
              r.memoizedProps.value != null &&
              ac(y, "number", y.value);
        }
        switch (((K = r ? Yu(r) : window), l)) {
          case "focusin":
            (Kf(K) || K.contentEditable === "true") &&
              ((eu = K), (gc = r), (Ju = null));
            break;
          case "focusout":
            Ju = gc = eu = null;
            break;
          case "mousedown":
            Sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Sc = !1), as(E, a, S);
            break;
          case "selectionchange":
            if (h0) break;
          case "keydown":
          case "keyup":
            as(E, a, S);
        }
        var N;
        if (hc)
          l: {
            switch (l) {
              case "compositionstart":
                var R = "onCompositionStart";
                break l;
              case "compositionend":
                R = "onCompositionEnd";
                break l;
              case "compositionupdate":
                R = "onCompositionUpdate";
                break l;
            }
            R = void 0;
          }
        else
          uu
            ? Zf(l, a) && (R = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (R = "onCompositionStart");
        R &&
          (Xf &&
            a.locale !== "ko" &&
            (uu || R !== "onCompositionStart"
              ? R === "onCompositionEnd" && uu && (N = Hf())
              : ((aa = S),
                (fc = "value" in aa ? aa.value : aa.textContent),
                (uu = !0))),
          (K = Rn(r, R)),
          0 < K.length &&
            ((R = new Yf(R, l, null, a, S)),
            E.push({ event: R, listeners: K }),
            N ? (R.data = N) : ((N = Vf(a)), N !== null && (R.data = N)))),
          (N = a0 ? u0(l, a) : e0(l, a)) &&
            ((R = Rn(r, "onBeforeInput")),
            0 < R.length &&
              ((K = new Yf("onBeforeInput", "beforeinput", null, a, S)),
              E.push({ event: K, listeners: R }),
              (K.data = N))),
          W0(E, l, r, a, S);
      }
      _d(E, t);
    });
  }
  function Ee(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Rn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      (e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Gu(l, a)),
          e != null && u.unshift(Ee(l, e, n)),
          (e = Gu(l, t)),
          e != null && u.push(Ee(l, e, n))),
        (l = l.return);
    }
    return u;
  }
  function ju(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ed(l, t, a, u, e) {
    for (var n = t._reactName, c = []; a !== null && a !== u; ) {
      var i = a,
        f = i.alternate,
        r = i.stateNode;
      if (((i = i.tag), f !== null && f === u)) break;
      (i !== 5 && i !== 26 && i !== 27) ||
        r === null ||
        ((f = r),
        e
          ? ((r = Gu(a, n)), r != null && c.unshift(Ee(a, r, f)))
          : e || ((r = Gu(a, n)), r != null && c.push(Ee(a, r, f)))),
        (a = a.return);
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var P0 = /\r\n?/g,
    lh = /\u0000|\uFFFD/g;
  function Td(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        P0,
        `
`
      )
      .replace(lh, "");
  }
  function Ad(l, t) {
    return (t = Td(t)), Td(l) === t;
  }
  function Cn() {}
  function ul(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || lu(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            lu(l, "" + u);
        break;
      case "className":
        Le(l, "class", u);
        break;
      case "tabIndex":
        Le(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Le(l, a, u);
        break;
      case "style":
        Uf(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Le(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        (u = Ve("" + u)), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && ul(l, t, "name", e.name, e, null),
                ul(l, t, "formEncType", e.formEncType, e, null),
                ul(l, t, "formMethod", e.formMethod, e, null),
                ul(l, t, "formTarget", e.formTarget, e, null))
              : (ul(l, t, "encType", e.encType, e, null),
                ul(l, t, "method", e.method, e, null),
                ul(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        (u = Ve("" + u)), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = Cn);
        break;
      case "onScroll":
        u != null && J("scroll", l);
        break;
      case "onScrollEnd":
        u != null && J("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(v(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (a = Ve("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
            u != null &&
            typeof u != "function" &&
            typeof u != "symbol"
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        J("beforetoggle", l), J("toggle", l), Xe(l, "popover", u);
        break;
      case "xlinkActuate":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Xe(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = pr.get(a) || a), Xe(l, a, u));
    }
  }
  function Li(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Uf(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(v(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? lu(l, u)
          : (typeof u == "number" || typeof u == "bigint") && lu(l, "" + u);
        break;
      case "onScroll":
        u != null && J("scroll", l);
        break;
      case "onScrollEnd":
        u != null && J("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Cn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Af.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Kl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e);
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
              ? l.setAttribute(a, "")
              : Xe(l, a, u);
          }
    }
  }
  function Ul(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        J("error", l), J("load", l);
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(v(137, t));
                default:
                  ul(l, t, n, c, a, null);
              }
          }
        e && ul(l, t, "srcSet", a.srcSet, a, null),
          u && ul(l, t, "src", a.src, a, null);
        return;
      case "input":
        J("invalid", l);
        var i = (n = c = e = null),
          f = null,
          r = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var S = a[u];
            if (S != null)
              switch (u) {
                case "name":
                  e = S;
                  break;
                case "type":
                  c = S;
                  break;
                case "checked":
                  f = S;
                  break;
                case "defaultChecked":
                  r = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  i = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(v(137, t));
                  break;
                default:
                  ul(l, t, u, S, a, null);
              }
          }
        Mf(l, n, i, f, r, c, e, !1), Qe(l);
        return;
      case "select":
        J("invalid", l), (u = c = n = null);
        for (e in a)
          if (a.hasOwnProperty(e) && ((i = a[e]), i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                u = i;
              default:
                ul(l, t, e, i, a, null);
            }
        (t = n),
          (a = c),
          (l.multiple = !!u),
          t != null ? Pa(l, !!u, t, !1) : a != null && Pa(l, !!u, a, !0);
        return;
      case "textarea":
        J("invalid", l), (n = e = u = null);
        for (c in a)
          if (a.hasOwnProperty(c) && ((i = a[c]), i != null))
            switch (c) {
              case "value":
                u = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(v(91));
                break;
              default:
                ul(l, t, c, i, a, null);
            }
        xf(l, u, e, n), Qe(l);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && ((u = a[f]), u != null))
            switch (f) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                ul(l, t, f, u, a, null);
            }
        return;
      case "dialog":
        J("cancel", l), J("close", l);
        break;
      case "iframe":
      case "object":
        J("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < be.length; u++) J(be[u], l);
        break;
      case "image":
        J("error", l), J("load", l);
        break;
      case "details":
        J("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        J("error", l), J("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (r in a)
          if (a.hasOwnProperty(r) && ((u = a[r]), u != null))
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, t));
              default:
                ul(l, t, r, u, a, null);
            }
        return;
      default:
        if (uc(t)) {
          for (S in a)
            a.hasOwnProperty(S) &&
              ((u = a[S]), u !== void 0 && Li(l, t, S, u, a, void 0));
          return;
        }
    }
    for (i in a)
      a.hasOwnProperty(i) && ((u = a[i]), u != null && ul(l, t, i, u, a, null));
  }
  function th(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          c = null,
          i = null,
          f = null,
          r = null,
          S = null;
        for (g in a) {
          var E = a[g];
          if (a.hasOwnProperty(g) && E != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = E;
              default:
                u.hasOwnProperty(g) || ul(l, t, g, null, u, E);
            }
        }
        for (var y in u) {
          var g = u[y];
          if (((E = a[y]), u.hasOwnProperty(y) && (g != null || E != null)))
            switch (y) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                r = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                c = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(v(137, t));
                break;
              default:
                g !== E && ul(l, t, y, g, u, E);
            }
        }
        tc(l, c, i, f, r, S, n, e);
        return;
      case "select":
        g = c = i = y = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                u.hasOwnProperty(n) || ul(l, t, n, null, u, f);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (f = a[e]),
            u.hasOwnProperty(e) && (n != null || f != null))
          )
            switch (e) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== f && ul(l, t, e, n, u, f);
            }
        (t = i),
          (a = c),
          (u = g),
          y != null
            ? Pa(l, !!a, y, !1)
            : !!u != !!a &&
              (t != null ? Pa(l, !!a, t, !0) : Pa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        g = y = null;
        for (i in a)
          if (
            ((e = a[i]),
            a.hasOwnProperty(i) && e != null && !u.hasOwnProperty(i))
          )
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                ul(l, t, i, null, u, e);
            }
        for (c in u)
          if (
            ((e = u[c]),
            (n = a[c]),
            u.hasOwnProperty(c) && (e != null || n != null))
          )
            switch (c) {
              case "value":
                y = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(v(91));
                break;
              default:
                e !== n && ul(l, t, c, e, u, n);
            }
        pf(l, y, g);
        return;
      case "option":
        for (var M in a)
          if (
            ((y = a[M]),
            a.hasOwnProperty(M) && y != null && !u.hasOwnProperty(M))
          )
            switch (M) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ul(l, t, M, null, u, y);
            }
        for (f in u)
          if (
            ((y = u[f]),
            (g = a[f]),
            u.hasOwnProperty(f) && y !== g && (y != null || g != null))
          )
            switch (f) {
              case "selected":
                l.selected =
                  y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                ul(l, t, f, y, u, g);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var G in a)
          (y = a[G]),
            a.hasOwnProperty(G) &&
              y != null &&
              !u.hasOwnProperty(G) &&
              ul(l, t, G, null, u, y);
        for (r in u)
          if (
            ((y = u[r]),
            (g = a[r]),
            u.hasOwnProperty(r) && y !== g && (y != null || g != null))
          )
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(v(137, t));
                break;
              default:
                ul(l, t, r, y, u, g);
            }
        return;
      default:
        if (uc(t)) {
          for (var yl in a)
            (y = a[yl]),
              a.hasOwnProperty(yl) &&
                y !== void 0 &&
                !u.hasOwnProperty(yl) &&
                Li(l, t, yl, void 0, u, y);
          for (S in u)
            (y = u[S]),
              (g = a[S]),
              !u.hasOwnProperty(S) ||
                y === g ||
                (y === void 0 && g === void 0) ||
                Li(l, t, S, y, u, g);
          return;
        }
    }
    for (var h in a)
      (y = a[h]),
        a.hasOwnProperty(h) &&
          y != null &&
          !u.hasOwnProperty(h) &&
          ul(l, t, h, null, u, y);
    for (E in u)
      (y = u[E]),
        (g = a[E]),
        !u.hasOwnProperty(E) ||
          y === g ||
          (y == null && g == null) ||
          ul(l, t, E, y, u, g);
  }
  var Qi = null,
    Zi = null;
  function Hn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function zd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Dd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Vi(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ki = null;
  function ah() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Ki
        ? !1
        : ((Ki = l), !0)
      : ((Ki = null), !1);
  }
  var jd = typeof setTimeout == "function" ? setTimeout : void 0,
    uh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Od = typeof Promise == "function" ? Promise : void 0,
    eh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Od < "u"
        ? function (l) {
            return Od.resolve(null).then(l).catch(nh);
          }
        : jd;
  function nh(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function wi(l, t) {
    var a = t,
      u = 0;
    do {
      var e = a.nextSibling;
      if ((l.removeChild(a), e && e.nodeType === 8))
        if (((a = e.data), a === "/$")) {
          if (u === 0) {
            l.removeChild(e), pe(t);
            return;
          }
          u--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || u++;
      a = e;
    } while (a);
    pe(t);
  }
  function Ji(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ji(a), lc(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function ch(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[qu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !== (e.href == null ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = Et(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function ih(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = Et(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Et(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  function Md(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function pd(l, t, a) {
    switch (((t = Hn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(v(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(v(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(v(454));
        return l;
      default:
        throw Error(v(451));
    }
  }
  var yt = new Map(),
    xd = new Set();
  function Bn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.ownerDocument;
  }
  var Wt = j.d;
  j.d = { f: fh, r: sh, D: oh, C: dh, L: rh, m: hh, X: mh, S: vh, M: yh };
  function fh() {
    var l = Wt.f(),
      t = Mn();
    return l || t;
  }
  function sh(l) {
    var t = ka(l);
    t !== null && t.tag === 5 && t.type === "form" ? ao(t) : Wt.r(l);
  }
  var Ou = typeof document > "u" ? null : document;
  function Nd(l, t, a) {
    var u = Ou;
    if (u && typeof t == "string" && t) {
      var e = ct(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        xd.has(e) ||
          (xd.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Ul(t, "link", l),
            Dl(t),
            u.head.appendChild(t)));
    }
  }
  function oh(l) {
    Wt.D(l), Nd("dns-prefetch", l, null);
  }
  function dh(l, t) {
    Wt.C(l, t), Nd("preconnect", l, t);
  }
  function rh(l, t, a) {
    Wt.L(l, t, a);
    var u = Ou;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + ct(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + ct(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + ct(a.imageSizes) + '"]'))
        : (e += '[href="' + ct(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = Mu(l);
          break;
        case "script":
          n = pu(l);
      }
      yt.has(n) ||
        ((l = ll(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a
        )),
        yt.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(Te(n))) ||
          (t === "script" && u.querySelector(Ae(n))) ||
          ((t = u.createElement("link")),
          Ul(t, "link", l),
          Dl(t),
          u.head.appendChild(t)));
    }
  }
  function hh(l, t) {
    Wt.m(l, t);
    var a = Ou;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + ct(u) + '"][href="' + ct(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = pu(l);
      }
      if (
        !yt.has(n) &&
        ((l = ll({ rel: "modulepreload", href: l }, t)),
        yt.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ae(n))) return;
        }
        (u = a.createElement("link")),
          Ul(u, "link", l),
          Dl(u),
          a.head.appendChild(u);
      }
    }
  }
  function vh(l, t, a) {
    Wt.S(l, t, a);
    var u = Ou;
    if (u && l) {
      var e = Fa(u).hoistableStyles,
        n = Mu(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = u.querySelector(Te(n)))) i.loading = 5;
        else {
          (l = ll({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = yt.get(n)) && $i(l, a);
          var f = (c = u.createElement("link"));
          Dl(f),
            Ul(f, "link", l),
            (f._p = new Promise(function (r, S) {
              (f.onload = r), (f.onerror = S);
            })),
            f.addEventListener("load", function () {
              i.loading |= 1;
            }),
            f.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            qn(c, t, u);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: i }),
          e.set(n, c);
      }
    }
  }
  function mh(l, t) {
    Wt.X(l, t);
    var a = Ou;
    if (a && l) {
      var u = Fa(a).hoistableScripts,
        e = pu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(Ae(e))),
        n ||
          ((l = ll({ src: l, async: !0 }, t)),
          (t = yt.get(e)) && Wi(l, t),
          (n = a.createElement("script")),
          Dl(n),
          Ul(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function yh(l, t) {
    Wt.M(l, t);
    var a = Ou;
    if (a && l) {
      var u = Fa(a).hoistableScripts,
        e = pu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(Ae(e))),
        n ||
          ((l = ll({ src: l, async: !0, type: "module" }, t)),
          (t = yt.get(e)) && Wi(l, t),
          (n = a.createElement("script")),
          Dl(n),
          Ul(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Ud(l, t, a, u) {
    var e = (e = Pt.current) ? Bn(e) : null;
    if (!e) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Mu(a.href)),
            (a = Fa(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Mu(a.href);
          var n = Fa(e).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((e = e.ownerDocument || e),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = e.querySelector(Te(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              yt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                yt.set(l, a),
                n || gh(e, l, a, c.state))),
            t && u === null)
          )
            throw Error(v(528, ""));
          return c;
        }
        if (t && u !== null) throw Error(v(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = pu(a)),
              (a = Fa(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(v(444, l));
    }
  }
  function Mu(l) {
    return 'href="' + ct(l) + '"';
  }
  function Te(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Rd(l) {
    return ll({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function gh(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Ul(t, "link", a),
        Dl(t),
        l.head.appendChild(t));
  }
  function pu(l) {
    return '[src="' + ct(l) + '"]';
  }
  function Ae(l) {
    return "script[async]" + l;
  }
  function Cd(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + ct(a.href) + '"]');
          if (u) return (t.instance = u), Dl(u), u;
          var e = ll({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            Dl(u),
            Ul(u, "style", e),
            qn(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = Mu(a.href);
          var n = l.querySelector(Te(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), Dl(n), n;
          (u = Rd(a)),
            (e = yt.get(e)) && $i(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            Dl(n);
          var c = n;
          return (
            (c._p = new Promise(function (i, f) {
              (c.onload = i), (c.onerror = f);
            })),
            Ul(n, "link", u),
            (t.state.loading |= 4),
            qn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = pu(a.src)),
            (e = l.querySelector(Ae(n)))
              ? ((t.instance = e), Dl(e), e)
              : ((u = a),
                (e = yt.get(n)) && ((u = ll({}, a)), Wi(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                Dl(e),
                Ul(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(v(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        !(t.state.loading & 4) &&
        ((u = t.instance), (t.state.loading |= 4), qn(u, a.precedence, l));
    return t.instance;
  }
  function qn(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        c = 0;
      c < u.length;
      c++
    ) {
      var i = u[c];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function $i(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Wi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Yn = null;
  function Hd(l, t, a) {
    if (Yn === null) {
      var u = new Map(),
        e = (Yn = new Map());
      e.set(a, u);
    } else (e = Yn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[qu] ||
          n[Rl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var i = u.get(c);
        i ? i.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function Bd(l, t, a) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function Sh(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function qd(l) {
    return !(l.type === "stylesheet" && !(l.state.loading & 3));
  }
  var ze = null;
  function _h() {}
  function bh(l, t, a) {
    if (ze === null) throw Error(v(475));
    var u = ze;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var e = Mu(a.href),
          n = l.querySelector(Te(e));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (u.count++, (u = Gn.bind(u)), l.then(u, u)),
            (t.state.loading |= 4),
            (t.instance = n),
            Dl(n);
          return;
        }
        (n = l.ownerDocument || l),
          (a = Rd(a)),
          (e = yt.get(e)) && $i(a, e),
          (n = n.createElement("link")),
          Dl(n);
        var c = n;
        (c._p = new Promise(function (i, f) {
          (c.onload = i), (c.onerror = f);
        })),
          Ul(n, "link", a),
          (t.instance = n);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(t, l),
        (l = t.state.preload) &&
          !(t.state.loading & 3) &&
          (u.count++,
          (t = Gn.bind(u)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function Eh() {
    if (ze === null) throw Error(v(475));
    var l = ze;
    return (
      l.stylesheets && l.count === 0 && ki(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((l.stylesheets && ki(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                (l.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function Gn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) ki(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Xn = null;
  function ki(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Xn = new Map()),
        t.forEach(Th, l),
        (Xn = null),
        Gn.call(l));
  }
  function Th(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Xn.get(l);
      if (a) var u = a.get(null);
      else {
        (a = new Map()), Xn.set(l, a);
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (u = c));
        }
        u && a.set(null, u);
      }
      (e = t.instance),
        (c = e.getAttribute("data-precedence")),
        (n = a.get(c) || u),
        n === u && a.set(null, e),
        a.set(c, e),
        this.count++,
        (u = Gn.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var De = {
    $$typeof: Sl,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0,
  };
  function Ah(l, t, a, u, e, n, c, i) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = In(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = In(0)),
      (this.hiddenUpdates = In(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map());
  }
  function Yd(l, t, a, u, e, n, c, i, f, r, S, E) {
    return (
      (l = new Ah(l, t, a, c, i, f, r, E)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = vt(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Mc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      fi(n),
      l
    );
  }
  function Gd(l) {
    return l ? ((l = iu), l) : iu;
  }
  function Xd(l, t, a, u, e, n) {
    (e = Gd(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = oa(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = da(l, u, t)),
      a !== null && (Gl(a, l, t), fe(a, l, t));
  }
  function Ld(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Fi(l, t) {
    Ld(l, t), (l = l.alternate) && Ld(l, t);
  }
  function Qd(l) {
    if (l.tag === 13) {
      var t = ua(l, 67108864);
      t !== null && Gl(t, l, 67108864), Fi(l, 67108864);
    }
  }
  var Ln = !0;
  function zh(l, t, a, u) {
    var e = C.T;
    C.T = null;
    var n = j.p;
    try {
      (j.p = 2), Ii(l, t, a, u);
    } finally {
      (j.p = n), (C.T = e);
    }
  }
  function Dh(l, t, a, u) {
    var e = C.T;
    C.T = null;
    var n = j.p;
    try {
      (j.p = 8), Ii(l, t, a, u);
    } finally {
      (j.p = n), (C.T = e);
    }
  }
  function Ii(l, t, a, u) {
    if (Ln) {
      var e = Pi(u);
      if (e === null) Xi(l, t, u, Qn, a), Vd(l, u);
      else if (Oh(e, l, t, a, u)) u.stopPropagation();
      else if ((Vd(l, u), t & 4 && -1 < jh.indexOf(l))) {
        for (; e !== null; ) {
          var n = ka(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = Da(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var f = 1 << (31 - Fl(c));
                      (i.entanglements[1] |= f), (c &= ~f);
                    }
                    pt(n), !(rl & 6) && ((Dn = zt() + 500), _e(0));
                  }
                }
                break;
              case 13:
                (i = ua(n, 2)), i !== null && Gl(i, n, 2), Mn(), Fi(n, 2);
            }
          if (((n = Pi(u)), n === null && Xi(l, t, u, Qn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Xi(l, t, u, null, a);
    }
  }
  function Pi(l) {
    return (l = nc(l)), lf(l);
  }
  var Qn = null;
  function lf(l) {
    if (((Qn = null), (l = ja(l)), l !== null)) {
      var t = B(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = nl(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (Qn = l), null;
  }
  function Zd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (dr()) {
          case rf:
            return 2;
          case hf:
            return 8;
          case Be:
          case rr:
            return 32;
          case vf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var tf = !1,
    Sa = null,
    _a = null,
    ba = null,
    je = new Map(),
    Oe = new Map(),
    Ea = [],
    jh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Vd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Sa = null;
        break;
      case "dragenter":
      case "dragleave":
        _a = null;
        break;
      case "mouseover":
      case "mouseout":
        ba = null;
        break;
      case "pointerover":
      case "pointerout":
        je.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Oe.delete(t.pointerId);
    }
  }
  function Me(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = ka(t)), t !== null && Qd(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function Oh(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return (Sa = Me(Sa, l, t, a, u, e)), !0;
      case "dragenter":
        return (_a = Me(_a, l, t, a, u, e)), !0;
      case "mouseover":
        return (ba = Me(ba, l, t, a, u, e)), !0;
      case "pointerover":
        var n = e.pointerId;
        return je.set(n, Me(je.get(n) || null, l, t, a, u, e)), !0;
      case "gotpointercapture":
        return (
          (n = e.pointerId), Oe.set(n, Me(Oe.get(n) || null, l, t, a, u, e)), !0
        );
    }
    return !1;
  }
  function Kd(l) {
    var t = ja(l.target);
    if (t !== null) {
      var a = B(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = nl(a)), t !== null)) {
            (l.blockedOn = t),
              Er(l.priority, function () {
                if (a.tag === 13) {
                  var u = at(),
                    e = ua(a, u);
                  e !== null && Gl(e, a, u), Fi(a, u);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Zn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Pi(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        (ec = u), a.target.dispatchEvent(u), (ec = null);
      } else return (t = ka(a)), t !== null && Qd(t), (l.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function wd(l, t, a) {
    Zn(l) && a.delete(t);
  }
  function Mh() {
    (tf = !1),
      Sa !== null && Zn(Sa) && (Sa = null),
      _a !== null && Zn(_a) && (_a = null),
      ba !== null && Zn(ba) && (ba = null),
      je.forEach(wd),
      Oe.forEach(wd);
  }
  function Vn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      tf ||
        ((tf = !0),
        _.unstable_scheduleCallback(_.unstable_NormalPriority, Mh)));
  }
  var Kn = null;
  function Jd(l) {
    Kn !== l &&
      ((Kn = l),
      _.unstable_scheduleCallback(_.unstable_NormalPriority, function () {
        Kn === l && (Kn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (lf(u || a) === null) continue;
            break;
          }
          var n = ka(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Vc(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function pe(l) {
    function t(f) {
      return Vn(f, l);
    }
    Sa !== null && Vn(Sa, l),
      _a !== null && Vn(_a, l),
      ba !== null && Vn(ba, l),
      je.forEach(t),
      Oe.forEach(t);
    for (var a = 0; a < Ea.length; a++) {
      var u = Ea[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < Ea.length && ((a = Ea[0]), a.blockedOn === null); )
      Kd(a), a.blockedOn === null && Ea.shift();
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          c = e[Kl] || null;
        if (typeof n == "function") c || Jd(a);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (c = n[Kl] || null))) i = c.formAction;
            else if (lf(e) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? (a[u + 1] = i) : (a.splice(u, 3), (u -= 3)),
            Jd(a);
        }
      }
  }
  function af(l) {
    this._internalRoot = l;
  }
  (wn.prototype.render = af.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(v(409));
      var a = t.current,
        u = at();
      Xd(a, u, l, t, null, null);
    }),
    (wn.prototype.unmount = af.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          l.tag === 0 && zu(),
            Xd(l.current, 2, null, l, null, null),
            Mn(),
            (t[Wa] = null);
        }
      });
  function wn(l) {
    this._internalRoot = l;
  }
  wn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = bf();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Ea.length && t !== 0 && t < Ea[a].priority; a++);
      Ea.splice(a, 0, l), a === 0 && Kd(l);
    }
  };
  var $d = p.version;
  if ($d !== "19.0.0") throw Error(v(527, $d, "19.0.0"));
  j.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(v(188))
        : ((l = Object.keys(l).join(",")), Error(v(268, l)));
    return (
      (l = A(t)),
      (l = l !== null ? H(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var ph = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    findFiberByHostInstance: ja,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jn.isDisabled && Jn.supportsFiber)
      try {
        (Cu = Jn.inject(ph)), (kl = Jn);
      } catch {}
  }
  return (
    (Ne.createRoot = function (l, t) {
      if (!q(l)) throw Error(v(299));
      var a = !1,
        u = "",
        e = oo,
        n = ro,
        c = ho,
        i = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (i = t.unstable_transitionCallbacks)),
        (t = Yd(l, 1, !1, null, null, a, u, e, n, c, i, null)),
        (l[Wa] = t.current),
        Gi(l.nodeType === 8 ? l.parentNode : l),
        new af(t)
      );
    }),
    (Ne.hydrateRoot = function (l, t, a) {
      if (!q(l)) throw Error(v(299));
      var u = !1,
        e = "",
        n = oo,
        c = ro,
        i = ho,
        f = null,
        r = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (i = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (f = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (r = a.formState)),
        (t = Yd(l, 1, !0, t, a ?? null, u, e, n, c, i, f, r)),
        (t.context = Gd(null)),
        (a = t.current),
        (u = at()),
        (e = oa(u)),
        (e.callback = null),
        da(a, e, u),
        (t.current.lanes = u),
        Bu(t, u),
        pt(t),
        (l[Wa] = t.current),
        Gi(l),
        new wn(t)
      );
    }),
    (Ne.version = "19.0.0"),
    Ne
  );
}
var er;
function Gh() {
  if (er) return ef.exports;
  er = 1;
  function _() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (p) {
        console.error(p);
      }
  }
  return _(), (ef.exports = Yh()), ef.exports;
}
var Xh = Gh(),
  Ja = df();
const Lh = "./assets/contacts-CUxQiREK.png",
  Qh = "_Contacts_ctv42_1",
  Zh = "_Content_ctv42_9",
  Vh = "_Subheader_ctv42_21",
  Kh = "_Social_ctv42_35",
  wh = "_SocialImg_ctv42_45",
  Jh = "_imgAnimate_ctv42_57",
  $h = "_Star_ctv42_62",
  Wh = "_ImgBg_ctv42_70",
  kh = "_Lines_ctv42_77",
  Fh = "_shadowText_ctv42_86",
  Ih = "_shadowImage_ctv42_91",
  $l = {
    Contacts: Qh,
    Content: Zh,
    Subheader: Vh,
    Social: Kh,
    SocialImg: wh,
    imgAnimate: Jh,
    Star: $h,
    ImgBg: Wh,
    Lines: kh,
    shadowText: Fh,
    shadowImage: Ih,
  },
  cr = "./assets/inst-My5WQVXg.svg",
  Ph = "./assets/phone-BJQuTvw8.svg",
  lv = "./assets/star3-BCDAgqSF.png",
  tv = "./assets/lines4-D8xINVz6.png",
  av = () => {
    const [_, p] = Ja.useState({ x: 0, y: 0 }),
      Y = (v) => {
        window.innerWidth > 1366 &&
          p({
            x: (v.currentTarget.offsetWidth / 2 - v.clientX) / 30,
            y: (v.currentTarget.offsetHeight / 2 - v.clientY) / 25,
          });
      };
    return s.jsxs("div", {
      id: "contacts",
      className: $l.Contacts,
      onMouseMove: (v) => {
        Y(v);
      },
      onMouseLeave: () => {
        p({ x: 0, y: 0 });
      },
      children: [
        s.jsxs("div", {
          className: $l.Content,
          children: [
            s.jsxs("h2", {
              children: [
                "Our ",
                s.jsx("br", {}),
                " ",
                s.jsx("span", { children: "Contacts" }),
              ],
            }),
            s.jsx("p", {
              className: $l.Subheader,
              children:
                "Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!",
            }),
            s.jsxs("ul", {
              children: [
                s.jsxs("li", {
                  children: [
                    s.jsx("img", { className: $l.SocialImg, src: cr, alt: "" }),
                    s.jsx("p", {
                      className: $l.Social,
                      children: "@supercoffee",
                    }),
                  ],
                }),
                s.jsxs("li", {
                  children: [
                    s.jsx("img", { className: $l.SocialImg, src: Ph, alt: "" }),
                    s.jsx("p", {
                      className: $l.Social,
                      children: "+7-999-999-99-99",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className: $l.ImgBg,
          style: { transform: `translateX(${_.x}px) translateY(${_.y}px)` },
          children: [
            s.jsx("img", {
              src: Lh,
              className: $l.imgAnimate,
              style: {
                transform: `translateX(${-_.x * 1.5}px) translateY(${_.y}px)`,
              },
              alt: "",
            }),
            s.jsx("img", {
              src: lv,
              className: $l.Star,
              style: {
                transform: `translateX(${-_.x * 1.5}px) translateY(${_.y}px)`,
              },
              alt: "",
            }),
          ],
        }),
        s.jsxs("svg", {
          className: $l.Decor,
          children: [
            s.jsx("defs", {
              children: s.jsxs("radialGradient", {
                id: "green",
                children: [
                  s.jsx("stop", { offset: "0%", stopColor: "#2372498C" }),
                  s.jsx("stop", { offset: "100%", stopColor: "transparent" }),
                ],
              }),
            }),
            s.jsx("circle", { className: $l.shadowText, fill: "url(#green)" }),
            s.jsx("circle", { className: $l.shadowImage, fill: "url(#green)" }),
          ],
        }),
        s.jsx("img", { src: tv, className: $l.Lines, alt: "" }),
      ],
    });
  },
  uv = "_Delicious_yd5l1_1",
  ev = "_animImage_yd5l1_9",
  nv = "_ImgBg_yd5l1_14",
  cv = "_Star_yd5l1_21",
  iv = "_Decor_yd5l1_47",
  fv = "_shadowText_yd5l1_53",
  sv = "_shadowImg_yd5l1_58",
  ov = "_lines_yd5l1_63",
  Aa = {
    Delicious: uv,
    animImage: ev,
    ImgBg: nv,
    Star: cv,
    Decor: iv,
    shadowText: fv,
    shadowImg: sv,
    lines: ov,
  },
  dv = "./assets/room-D3CQDNII.png",
  ir = "./assets/star-CXQI5Z9T.png",
  rv = "./assets/lines2-CL1fSebz.png",
  hv = () => {
    const [_, p] = Ja.useState({ x: 0, y: 0 }),
      Y = (v) => {
        window.innerWidth > 1366 &&
          p({
            x: (v.currentTarget.offsetWidth / 2 - v.clientX) / 30,
            y: (v.currentTarget.offsetHeight / 2 - v.clientY) / 15,
          });
      };
    return s.jsxs("div", {
      onMouseMove: (v) => Y(v),
      onMouseLeave: () => {
        p({ x: 0, y: 0 });
      },
      className: Aa.Delicious,
      children: [
        s.jsxs("div", {
          className: Aa.ImgBg,
          style: { transform: `translateX(${_.x}px) translateY(${_.y}px)` },
          children: [
            s.jsx("img", {
              src: dv,
              style: {
                transform: `translateX(${-_.x * 1.5}px) translateY(${_.y}px)`,
              },
              alt: "",
              className: Aa.animImage,
            }),
            s.jsx("img", {
              src: ir,
              style: {
                transform: `translateX(${-_.x * 1.5}px) translateY(${_.y}px)`,
              },
              className: Aa.Star,
              alt: "",
            }),
          ],
        }),
        s.jsxs("div", {
          children: [
            s.jsxs("h2", {
              children: ["We make ", s.jsx("span", { children: "delicious" })],
            }),
            s.jsx("p", {
              children:
                "Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market",
            }),
          ],
        }),
        s.jsxs("svg", {
          className: Aa.Decor,
          children: [
            s.jsxs("defs", {
              children: [
                s.jsxs("radialGradient", {
                  id: "green",
                  children: [
                    s.jsx("stop", { offset: "0%", stopColor: "#2372498C" }),
                    s.jsx("stop", { offset: "100%", stopColor: "transparent" }),
                  ],
                }),
                s.jsxs("radialGradient", {
                  id: "white",
                  children: [
                    s.jsx("stop", { offset: "0%", stopColor: "#D9D9D94D" }),
                    s.jsx("stop", { offset: "100%", stopColor: "transparent" }),
                  ],
                }),
              ],
            }),
            s.jsx("circle", { className: Aa.shadowText, fill: "url(#green)" }),
            s.jsx("circle", { className: Aa.shadowImg, fill: "url(#green)" }),
          ],
        }),
        s.jsx("img", { src: rv, className: Aa.lines, alt: "" }),
      ],
    });
  },
  vv = "_Events_1aafe_1",
  mv = "_Header_1aafe_7",
  yv = "_Wrapper_1aafe_36",
  gv = "_Content_1aafe_46",
  Sv = "_Card_1aafe_53",
  _v = "_Small_1aafe_88",
  bv = "_Large_1aafe_92",
  Ev = "_Decor_1aafe_112",
  Tv = "_Line_1aafe_118",
  Av = "_shadowTop_1aafe_127",
  zv = "_shadowRight_1aafe_133",
  Dv = "_shadowBottom_1aafe_139",
  jv = "_shadowLeft_1aafe_145",
  Ll = {
    Events: vv,
    Header: mv,
    Wrapper: yv,
    Content: gv,
    Card: Sv,
    Small: _v,
    Large: bv,
    Decor: Ev,
    Line: Tv,
    shadowTop: Av,
    shadowRight: zv,
    shadowBottom: Dv,
    shadowLeft: jv,
  },
  Ov = "_Button_1b4qt_1",
  Mv = "_Green_1b4qt_11",
  pv = "_Black_1b4qt_16",
  of = { Button: Ov, Green: Mv, Black: pv },
  Ue = ({ children: _, ...p }) => {
    const [Y, v] = Ja.useState([of.Button]);
    return (
      Ja.useEffect(() => {
        switch (p.variant) {
          case "GREEN":
            v((q) => [...q, of.Green]);
            break;
          case "BLACK":
            v((q) => [...q, of.Black]);
        }
      }, []),
      s.jsx(s.Fragment, {
        children: s.jsx("button", {
          className: Y.join(" "),
          ...p,
          children: _,
        }),
      })
    );
  };
var Uu = ((_) => ((_.LARGE = "LARGE"), (_.SMALL = "SMALL"), _))(Uu || {});
const xv = ({ bg: _, variant: p, children: Y }) => {
    switch (p) {
      case "SMALL":
        return s.jsx("li", {
          className: [Ll.Card, Ll.Small].join(" "),
          style: { backgroundImage: `url(${_})` },
          children: s.jsxs("div", {
            className: Ll.Content,
            children: [
              s.jsx("h3", { children: Y }),
              s.jsx(Ue, { variant: "GREEN", children: "More" }),
            ],
          }),
        });
      case "LARGE":
        return s.jsx("li", {
          className: [Ll.Card, Ll.Large].join(" "),
          style: { backgroundImage: `url(${_})` },
          children: s.jsxs("div", {
            className: Ll.Content,
            children: [
              s.jsx("h3", { children: Y }),
              s.jsx(Ue, { variant: "GREEN", children: "More" }),
            ],
          }),
        });
    }
  },
  Nv = "./assets/eventCard1-wMUjXcE9.png",
  Uv = "./assets/eventCard2-Bb9SHrZi.png",
  Rv = "./assets/eventCard3-Ct3nD6j6.png",
  Cv = "./assets/eventCard4-BmJ0mOvz.png",
  Hv = "./assets/eventCard5-C_cNzE3t.png",
  Bv = "./assets/lines3-DGfdGb0Z.png",
  qv = () => {
    const _ = [
      {
        bg: Nv,
        variant: Uu.LARGE,
        firstLine: "TWO COFFEE",
        secondLine: "FOR 1 PRICE",
      },
      { bg: Uv, variant: Uu.LARGE, firstLine: "KITCHEN", secondLine: "TOUR" },
      {
        bg: Rv,
        variant: Uu.SMALL,
        firstLine: "FREE COFFEE",
        secondLine: "FOR 3 COFFEE",
      },
      { bg: Cv, variant: Uu.SMALL, firstLine: "OUR", secondLine: "INSTAGRAM" },
      {
        bg: Hv,
        variant: Uu.SMALL,
        firstLine: "WHERE ARE YOU",
        secondLine: "CHOOSE US?",
      },
    ];
    return s.jsxs("div", {
      id: "events",
      className: Ll.Events,
      children: [
        s.jsxs("div", {
          className: Ll.Header,
          children: [
            s.jsx("p", {
              children:
                "Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market",
            }),
            s.jsxs("h2", {
              children: [
                "Our New ",
                s.jsx("br", {}),
                s.jsx("span", { children: "Events" }),
              ],
            }),
          ],
        }),
        s.jsx("ul", {
          className: Ll.Wrapper,
          children: _.map((p) =>
            s.jsxs(
              xv,
              {
                bg: p.bg,
                variant: p.variant,
                children: [
                  p.firstLine,
                  " ",
                  s.jsx("br", {}),
                  " ",
                  p.secondLine,
                ],
              },
              p.bg
            )
          ),
        }),
        s.jsx("img", { src: Bv, className: Ll.Line, alt: "" }),
        s.jsxs("svg", {
          className: Ll.Decor,
          children: [
            s.jsxs("defs", {
              children: [
                s.jsxs("radialGradient", {
                  id: "green",
                  children: [
                    s.jsx("stop", { offset: "0%", stopColor: "#2372498C" }),
                    s.jsx("stop", { offset: "100%", stopColor: "transparent" }),
                  ],
                }),
                s.jsxs("radialGradient", {
                  id: "white",
                  children: [
                    s.jsx("stop", { offset: "0%", stopColor: "#D9D9D94D" }),
                    s.jsx("stop", { offset: "100%", stopColor: "transparent" }),
                  ],
                }),
              ],
            }),
            s.jsx("circle", { className: Ll.shadowTop, fill: "url(#green)" }),
            s.jsx("circle", { className: Ll.shadowRight, fill: "url(#green)" }),
            s.jsx("circle", {
              className: Ll.shadowBottom,
              fill: "url(#white)",
            }),
            s.jsx("circle", { className: Ll.shadowLeft, fill: "url(#green)" }),
          ],
        }),
      ],
    });
  },
  Yv = "_Footer_1m8f0_1",
  Gv = "_Container_1m8f0_11",
  Xv = "_Menu_1m8f0_17",
  Lv = "_Navbar_1m8f0_29",
  Qv = "_Contacts_1m8f0_55",
  Zv = "_Decor_1m8f0_74",
  Vv = "_shadowLogo_1m8f0_79",
  Kv = "_shadowIcon_1m8f0_85",
  za = {
    Footer: Yv,
    Container: Gv,
    Menu: Xv,
    Navbar: Lv,
    Contacts: Qv,
    Decor: Zv,
    shadowLogo: Vv,
    shadowIcon: Kv,
  },
  wv = "_Logo_wnnxx_1",
  Jv = { Logo: wv },
  fr = () => s.jsx("h2", { className: Jv.Logo, children: "StarBucks" }),
  $v = () =>
    s.jsx("footer", {
      className: za.Footer,
      children: s.jsxs("div", {
        className: za.Container,
        children: [
          s.jsxs("div", {
            className: za.Menu,
            children: [
              s.jsx(fr, {}),
              s.jsxs("div", {
                className: za.Navbar,
                children: [
                  s.jsxs("ul", {
                    children: [
                      s.jsx("li", { children: "Main" }),
                      s.jsx("li", { children: "Buy" }),
                      s.jsx("li", { children: "More" }),
                    ],
                  }),
                  s.jsxs("ul", {
                    children: [
                      s.jsx("li", { children: "We make" }),
                      s.jsx("li", { children: "Process" }),
                    ],
                  }),
                  s.jsxs("ul", {
                    children: [
                      s.jsx("li", { children: "Products" }),
                      s.jsx("li", { children: "Cappuccino" }),
                      s.jsx("li", { children: "Fast" }),
                      s.jsx("li", { children: "Fast" }),
                    ],
                  }),
                  s.jsxs("ul", {
                    children: [
                      s.jsx("li", { children: "Events" }),
                      s.jsx("li", { children: "Drinks" }),
                      s.jsx("li", { children: "Eat" }),
                    ],
                  }),
                  s.jsxs("ul", {
                    children: [
                      s.jsx("li", { children: "Contacts" }),
                      s.jsx("li", { children: "Instagram" }),
                      s.jsx("li", { children: "Number" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: za.Contacts,
            children: [
              s.jsx("p", { children: "+7-999-999-99-99" }),
              s.jsx("img", { src: cr, alt: "" }),
            ],
          }),
          s.jsxs("svg", {
            className: za.Decor,
            children: [
              s.jsx("defs", {
                children: s.jsxs("radialGradient", {
                  id: "green",
                  children: [
                    s.jsx("stop", { offset: "0%", stopColor: "#2372498C" }),
                    s.jsx("stop", { offset: "100%", stopColor: "transparent" }),
                  ],
                }),
              }),
              s.jsx("circle", {
                className: za.shadowLogo,
                fill: "url(#green)",
              }),
              s.jsx("circle", {
                className: za.shadowIcon,
                fill: "url(#green)",
              }),
            ],
          }),
        ],
      }),
    }),
  Wv = "_Header_1dv0d_1",
  kv = "_Navbar_1dv0d_11",
  Fv = "_ModalMenu_1dv0d_16",
  Iv = "_Burger_1dv0d_37",
  Pv = "_Open_1dv0d_50",
  l1 = "_BurgerLine_1dv0d_54",
  t1 = "_Close_1dv0d_62",
  a1 = "_Modal_1dv0d_16",
  u1 = "_ModalContent_1dv0d_149",
  Xl = {
    Header: Wv,
    Navbar: kv,
    ModalMenu: Fv,
    Burger: Iv,
    Open: Pv,
    BurgerLine: l1,
    Close: t1,
    Modal: a1,
    ModalContent: u1,
  },
  e1 = () => {
    const [_, p] = Ja.useState(!1),
      Y = () => {
        _ && p((v) => !v);
      };
    return s.jsxs("header", {
      className: Xl.Header,
      children: [
        s.jsx(fr, {}),
        s.jsxs("ul", {
          className: Xl.Navbar,
          children: [
            s.jsx("li", {
              children: s.jsx("a", { href: "#product", children: "Product" }),
            }),
            s.jsx("li", {
              children: s.jsx("a", { href: "#events", children: "Events" }),
            }),
            s.jsx("li", {
              children: s.jsx("a", { href: "#contacts", children: "Contacts" }),
            }),
          ],
        }),
        s.jsx("button", {
          className: _ ? [Xl.Burger, Xl.Open].join(" ") : Xl.Burger,
          onClick: () => {
            p((v) => !v);
          },
          children: s.jsx("span", {
            className: _
              ? [Xl.BurgerLine, Xl.Open].join(" ")
              : [Xl.BurgerLine, Xl.Close].join(" "),
          }),
        }),
        s.jsx("div", {
          className: _
            ? [Xl.Modal, Xl.Open].join(" ")
            : [Xl.Modal, Xl.Close].join(" "),
          onClick: () => {
            Y();
          },
          children: s.jsx("div", {
            onClick: (v) => v.stopPropagation(),
            className: Xl.ModalContent,
            children: s.jsxs("ul", {
              className: Xl.ModalMenu,
              children: [
                s.jsx("li", {
                  children: s.jsx("a", { href: "#", children: "Home" }),
                }),
                s.jsx("li", {
                  children: s.jsx("a", { href: "#", children: "Select" }),
                }),
                s.jsx("li", {
                  children: s.jsx("a", { href: "#", children: "Shop" }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  n1 = "_Layout_1jkd5_1",
  c1 = { Layout: n1 },
  i1 = ({ children: _ }) => s.jsx("div", { className: c1.Layout, children: _ }),
  f1 = "_Main_o4no2_1",
  s1 = "_Top_o4no2_6",
  o1 = "_Subheader_o4no2_11",
  d1 = "_Content_o4no2_21",
  r1 = "_List_o4no2_38",
  h1 = "_Img_o4no2_65",
  v1 = "_Under_o4no2_72",
  m1 = "_Star_o4no2_90",
  y1 = "_First_o4no2_125",
  g1 = "_Second_o4no2_130",
  S1 = "_Third_o4no2_135",
  _1 = "_shadowMain_o4no2_184",
  b1 = "_shadowCup_o4no2_190",
  E1 = "_shadowCupWhite_o4no2_196",
  T1 = "_shadowUnder_o4no2_202",
  A1 = "_shadowUnderWhite_o4no2_208",
  z1 = "_Lines_o4no2_214",
  pl = {
    Main: f1,
    Top: s1,
    Subheader: o1,
    Content: d1,
    List: r1,
    Img: h1,
    Under: v1,
    Star: m1,
    First: y1,
    Second: g1,
    Third: S1,
    shadowMain: _1,
    shadowCup: b1,
    shadowCupWhite: E1,
    shadowUnder: T1,
    shadowUnderWhite: A1,
    Lines: z1,
  },
  D1 = "./assets/cup-DQ2bFJdB.png",
  j1 = "./assets/heart-9tzrTbQw.png",
  O1 = "./assets/rocket-CGD4WuLM.png",
  M1 = "./assets/money-CPe6hQ2o.png",
  p1 = "./assets/lines-DTWUFy-l.png",
  x1 = () =>
    s.jsxs("div", {
      className: pl.Main,
      children: [
        s.jsxs("div", {
          className: pl.Top,
          children: [
            s.jsxs("div", {
              className: pl.Content,
              children: [
                s.jsxs("h1", {
                  children: [
                    "New Cafe ",
                    s.jsx("br", {}),
                    " by",
                    s.jsx("span", { children: " StarBucks" }),
                  ],
                }),
                s.jsx("p", {
                  className: pl.Subheader,
                  children:
                    "Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!",
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx(Ue, {
                      variant: "GREEN",
                      children: "Select a coffee ",
                    }),
                    s.jsx(Ue, { variant: "BLACK", children: "More" }),
                  ],
                }),
                s.jsxs("ul", {
                  className: pl.List,
                  children: [
                    s.jsxs("li", {
                      children: [
                        s.jsxs("h2", {
                          children: ["9k ", s.jsx("span", { children: "+" })],
                        }),
                        s.jsx("p", { children: "Premium Users" }),
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        s.jsxs("h2", {
                          children: ["2k ", s.jsx("span", { children: "+" })],
                        }),
                        s.jsx("p", { children: "Happy Customer" }),
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        s.jsxs("h2", {
                          children: ["28 ", s.jsx("span", { children: "+" })],
                        }),
                        s.jsx("p", { children: "Awards Winning" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className: pl.Img,
              children: s.jsx("img", { src: D1, alt: "" }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: pl.Under,
          children: [
            s.jsx("img", { src: ir, className: pl.Star, alt: "" }),
            s.jsxs("ul", {
              children: [
                s.jsxs("li", {
                  children: [
                    s.jsx("img", { className: pl.First, src: j1, alt: "" }),
                    s.jsx("h3", { children: "Tasty" }),
                    s.jsx("p", {
                      children: "We have the most delicious coffee",
                    }),
                  ],
                }),
                s.jsxs("li", {
                  children: [
                    s.jsx("img", { className: pl.Second, src: O1, alt: "" }),
                    s.jsx("h3", { children: "Fast" }),
                    s.jsx("p", { children: "Our cafe will serve you quickly" }),
                  ],
                }),
                s.jsxs("li", {
                  children: [
                    s.jsx("img", { className: pl.Third, src: M1, alt: "" }),
                    s.jsx("h3", { children: "Available" }),
                    s.jsx("p", {
                      children: "Cafe will serveat the most pleasant prices",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsxs("svg", {
          className: pl.Decor,
          children: [
            s.jsx("defs", {
              children: s.jsxs("defs", {
                children: [
                  s.jsxs("radialGradient", {
                    id: "green",
                    children: [
                      s.jsx("stop", { offset: "0%", stopColor: "#2372498C" }),
                      s.jsx("stop", {
                        offset: "100%",
                        stopColor: "transparent",
                      }),
                    ],
                  }),
                  s.jsxs("radialGradient", {
                    id: "white",
                    children: [
                      s.jsx("stop", { offset: "0%", stopColor: "#D9D9D94D" }),
                      s.jsx("stop", {
                        offset: "100%",
                        stopColor: "transparent",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx("circle", { className: pl.shadowMain, fill: "url(#green)" }),
            s.jsx("circle", { className: pl.shadowCup, fill: "url(#green)" }),
            s.jsx("circle", {
              className: pl.shadowCupWhite,
              fill: "url(#white)",
            }),
            s.jsx("circle", { className: pl.shadowUnder, fill: "url(#green)" }),
            s.jsx("circle", {
              className: pl.shadowUnderWhite,
              fill: "url(#white)",
            }),
          ],
        }),
        s.jsx("div", {
          className: pl.Lines,
          children: s.jsx("img", { src: p1, alt: "" }),
        }),
      ],
    }),
  N1 = "_Card_1cn8r_1",
  U1 = "_Content_1cn8r_86",
  R1 = "_Decor_1cn8r_93",
  C1 = "_shadowWhite_1cn8r_100",
  H1 = "_shadowHover_1cn8r_106",
  B1 = "_greenCircle_1cn8r_128",
  xu = {
    Card: N1,
    Content: U1,
    Decor: R1,
    shadowWhite: C1,
    shadowHover: H1,
    greenCircle: B1,
  },
  q1 = ({ img: _, header: p, subheader: Y, price: v }) => {
    const q = (x, V) => Math.random() * (V - x) + x;
    return s.jsxs("li", {
      className: xu.Card,
      children: [
        s.jsxs("div", {
          className: xu.Content,
          children: [
            s.jsx("img", { src: _, alt: "" }),
            s.jsx("h3", { children: p }),
            s.jsx("h4", { children: Y }),
            s.jsxs("p", {
              children: [v[0], " ", s.jsx("span", { children: v[1] })],
            }),
            s.jsx(Ue, { variant: "GREEN", children: "Buy Product" }),
          ],
        }),
        s.jsxs("svg", {
          className: xu.Decor,
          children: [
            s.jsxs("defs", {
              children: [
                s.jsxs("radialGradient", {
                  id: "green",
                  children: [
                    s.jsx("stop", { offset: "0%", stopColor: "#2372498C" }),
                    s.jsx("stop", { offset: "100%", stopColor: "transparent" }),
                  ],
                }),
                s.jsxs("radialGradient", {
                  id: "white",
                  children: [
                    s.jsx("stop", { offset: "0%", stopColor: "#D9D9D94D" }),
                    s.jsx("stop", { offset: "100%", stopColor: "transparent" }),
                  ],
                }),
                s.jsxs("linearGradient", {
                  id: "greenGradient",
                  x1: "0",
                  x2: "0",
                  y1: "0",
                  y2: "1",
                  children: [
                    s.jsx("stop", { offset: "0%", stopColor: "#35C66B" }),
                    s.jsx("stop", { offset: "100%", stopColor: "#237249" }),
                  ],
                }),
              ],
            }),
            s.jsx("circle", {
              className: xu.shadowWhite,
              cy: `${q(15, 90)}%`,
              fill: "url(#white)",
            }),
            s.jsx("circle", {
              className: xu.shadowHover,
              cy: `${q(15, 90)}%`,
              fill: "url(#green)",
            }),
            s.jsx("circle", {
              className: xu.greenCircle,
              r: "90",
              cx: "50%",
              cy: "140",
              fill: "url(#greenGradient)",
            }),
          ],
        }),
      ],
    });
  },
  nr = "./assets/cup4-AoUda9hX.png",
  Y1 = "./assets/cup3-C1Xl6WbU.png",
  G1 = "./assets/cup2-CXFq-72t.png",
  X1 = "_Product_9x9wm_1",
  L1 = "_Content_9x9wm_8",
  Q1 = "_Decor_9x9wm_41",
  Z1 = "_shadowText_9x9wm_45",
  V1 = "_CardWrapper_9x9wm_64",
  K1 = "_End_9x9wm_78",
  Nu = {
    Product: X1,
    Content: L1,
    Decor: Q1,
    shadowText: Z1,
    CardWrapper: V1,
    End: K1,
  },
  w1 = () => {
    const [_, p] = Ja.useState({ start: null, end: null, cords: 0 });
    Ja.useEffect(() => {
      window.outerWidth >= 768 &&
      window.outerWidth <= 1366 &&
      _.cords != -10 &&
      !_.start
        ? p((x) => ({ ...x, cords: -10 }))
        : window.outerWidth <= 767 &&
          window.outerWidth >= 365 &&
          _.cords != -220 &&
          !_.start &&
          p((x) => ({ ...x, cords: -220 })),
        _.start && _.end && v();
    }, [_]);
    const Y = (x) => {
        if (window.innerWidth < 1366)
          switch ((p((V) => ({ ...V, start: 1 })), x.deltaY)) {
            case -100:
              _.cords > -10 &&
                p((V) => ({ ...V, cords: V.cords + x.deltaY / 10 }));
              break;
            case 100:
              _.cords < 3 &&
                p((V) => ({ ...V, cords: V.cords + x.deltaY / 10 }));
              break;
          }
      },
      v = (x) => {
        const { end: V, start: hl } = _;
        !V && hl && x && x.view
          ? window.outerWidth > 767 && window.outerWidth <= 1366
            ? p((D) => ({
                ...D,
                cords: (x.touches[0].clientX - hl) / 700 + D.cords,
              }))
            : window.outerWidth <= 767 &&
              p((D) => ({
                ...D,
                cords: (x.touches[0].clientX - hl) / 300 + D.cords,
              }))
          : V &&
            _.cords &&
            (window.innerWidth >= 768
              ? _.cords < -10
                ? p((D) => ({ ...D, cords: -10 }))
                : _.cords > 3 && p((D) => ({ ...D, cords: 3 }))
              : window.innerWidth <= 767 &&
                (_.cords < -220
                  ? p((D) => ({ ...D, cords: -220 }))
                  : _.cords > 0 && p((D) => ({ ...D, cords: 0 }))));
      },
      q = [
        {
          img: nr,
          header: "Espresso",
          subheader: "Our cafe will serve you quickly",
          price: ["7,45$", "330 ml"],
        },
        {
          img: Y1,
          header: "Cortado",
          subheader: "Our cafe will serve you quickly",
          price: ["4,45$", "500 ml"],
        },
        {
          img: G1,
          header: "Breve",
          subheader: "Our cafe will serve you quickly",
          price: ["9,00$", "550 ml"],
        },
        {
          img: nr,
          header: "Flat white",
          subheader: "Our cafe will serve you quickly",
          price: ["10,50$", "650 ml"],
        },
      ];
    return s.jsxs("div", {
      id: "product",
      className: Nu.Product,
      children: [
        s.jsxs("div", {
          className: Nu.Content,
          children: [
            s.jsxs("h2", {
              children: [
                "New Our ",
                s.jsx("br", {}),
                " ",
                s.jsx("span", { children: "Products" }),
              ],
            }),
            s.jsx("p", {
              children:
                "Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount! Starbucks coffee and don't forget about the discount!",
            }),
          ],
        }),
        s.jsx("div", {
          className: Nu.CardWrapper,
          children: s.jsx("ul", {
            className: _.end ? Nu.End : " ",
            style: { transform: `translateX(${_.cords}%)` },
            onWheel: (x) => Y(x),
            onTouchStart: (x) =>
              p((V) => ({ ...V, start: x.touches[0].clientX, end: !1 })),
            onTouchMove: (x) => v(x),
            onTouchEnd: () => {
              p((x) => ({ ...x, end: !0 }));
            },
            children: q.map((x) =>
              s.jsx(
                q1,
                {
                  img: x.img,
                  header: x.header,
                  price: x.price,
                  subheader: x.subheader,
                },
                x.header
              )
            ),
          }),
        }),
        s.jsxs("svg", {
          className: Nu.Decor,
          children: [
            s.jsxs("defs", {
              children: [
                s.jsxs("radialGradient", {
                  id: "green",
                  children: [
                    s.jsx("stop", { offset: "0%", stopColor: "#2372498C" }),
                    s.jsx("stop", { offset: "100%", stopColor: "transparent" }),
                  ],
                }),
                s.jsxs("radialGradient", {
                  id: "white",
                  children: [
                    s.jsx("stop", { offset: "0%", stopColor: "#D9D9D94D" }),
                    s.jsx("stop", { offset: "100%", stopColor: "transparent" }),
                  ],
                }),
              ],
            }),
            s.jsx("circle", { className: Nu.shadowText, fill: "url(#green)" }),
          ],
        }),
      ],
    });
  },
  J1 = "_App_1tg43_1",
  $1 = { App: J1 };
function W1() {
  return s.jsxs("div", {
    className: $1.App,
    children: [
      s.jsxs(i1, {
        children: [
          s.jsx(e1, {}),
          s.jsx(x1, {}),
          s.jsx(hv, {}),
          s.jsx(w1, {}),
          s.jsx(qv, {}),
          s.jsx(av, {}),
        ],
      }),
      s.jsx($v, {}),
    ],
  });
}
Xh.createRoot(document.getElementById("root")).render(s.jsx(W1, {}));
