var vc = (e) => {
  throw TypeError(e);
};
var fa = (e, t, n) => t.has(e) || vc("Cannot " + n);
var P = (e, t, n) => (fa(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  H = (e, t, n) =>
    t.has(e)
      ? vc("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  z = (e, t, n, r) => (fa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
  xe = (e, t, n) => (fa(e, t, "access private method"), n);
var ui = (e, t, n, r) => ({
  set _(s) {
    z(e, t, s, n);
  },
  get _() {
    return P(e, t, r);
  },
});
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function kf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _f = { exports: {} },
  Io = {},
  Cf = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zs = Symbol.for("react.element"),
  Jm = Symbol.for("react.portal"),
  Xm = Symbol.for("react.fragment"),
  Ym = Symbol.for("react.strict_mode"),
  Zm = Symbol.for("react.profiler"),
  ey = Symbol.for("react.provider"),
  ty = Symbol.for("react.context"),
  ny = Symbol.for("react.forward_ref"),
  ry = Symbol.for("react.suspense"),
  sy = Symbol.for("react.memo"),
  iy = Symbol.for("react.lazy"),
  wc = Symbol.iterator;
function oy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wc && e[wc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Ef = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Rf = Object.assign,
  Pf = {};
function Qr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Pf), (this.updater = n || Ef);
}
Qr.prototype.isReactComponent = {};
Qr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Tf() {}
Tf.prototype = Qr.prototype;
function fu(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Pf), (this.updater = n || Ef);
}
var hu = (fu.prototype = new Tf());
hu.constructor = fu;
Rf(hu, Qr.prototype);
hu.isPureReactComponent = !0;
var Sc = Array.isArray,
  Lf = Object.prototype.hasOwnProperty,
  pu = { current: null },
  Mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Of(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t))
      Lf.call(t, r) && !Mf.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    s.children = l;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return { $$typeof: Zs, type: e, key: i, ref: o, props: s, _owner: pu.current };
}
function ay(e, t) {
  return { $$typeof: Zs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zs;
}
function ly(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xc = /\/+/g;
function ha(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ly("" + e.key) : t.toString(36);
}
function ji(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zs:
          case Jm:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + ha(o, 0) : r),
      Sc(s)
        ? ((n = ""),
          e != null && (n = e.replace(xc, "$&/") + "/"),
          ji(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (mu(s) &&
            (s = ay(
              s,
              n +
                (!s.key || (o && o.key === s.key) ? "" : ("" + s.key).replace(xc, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Sc(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + ha(i, a);
      o += ji(i, t, n, l, s);
    }
  else if (((l = oy(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + ha(i, a++)), (o += ji(i, t, n, l, s));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function ci(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    ji(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function uy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var be = { current: null },
  Di = { transition: null },
  cy = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: Di, ReactCurrentOwner: pu };
function Nf() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = {
  map: ci,
  forEach: function (e, t, n) {
    ci(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ci(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ci(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!mu(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
U.Component = Qr;
U.Fragment = Xm;
U.Profiler = Zm;
U.PureComponent = fu;
U.StrictMode = Ym;
U.Suspense = ry;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cy;
U.act = Nf;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " + e + "."
    );
  var r = Rf({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = pu.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Lf.call(t, l) &&
        !Mf.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Zs, type: e.type, key: s, ref: i, props: r, _owner: o };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: ty,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ey, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = Of;
U.createFactory = function (e) {
  var t = Of.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: ny, render: e };
};
U.isValidElement = mu;
U.lazy = function (e) {
  return { $$typeof: iy, _payload: { _status: -1, _result: e }, _init: uy };
};
U.memo = function (e, t) {
  return { $$typeof: sy, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = Di.transition;
  Di.transition = {};
  try {
    e();
  } finally {
    Di.transition = t;
  }
};
U.unstable_act = Nf;
U.useCallback = function (e, t) {
  return be.current.useCallback(e, t);
};
U.useContext = function (e) {
  return be.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return be.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return be.current.useEffect(e, t);
};
U.useId = function () {
  return be.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return be.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return be.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return be.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return be.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return be.current.useRef(e);
};
U.useState = function (e) {
  return be.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return be.current.useTransition();
};
U.version = "18.3.1";
Cf.exports = U;
var F = Cf.exports;
const yu = kf(F);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dy = F,
  fy = Symbol.for("react.element"),
  hy = Symbol.for("react.fragment"),
  py = Object.prototype.hasOwnProperty,
  my = dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Af(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) py.call(t, r) && !yy.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: fy, type: e, key: i, ref: o, props: s, _owner: my.current };
}
Io.Fragment = hy;
Io.jsx = Af;
Io.jsxs = Af;
_f.exports = Io;
var x = _f.exports,
  bf = { exports: {} },
  Ze = {},
  Ff = { exports: {} },
  If = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, I) {
    var D = O.length;
    O.push(I);
    e: for (; 0 < D; ) {
      var W = (D - 1) >>> 1,
        q = O[W];
      if (0 < s(q, I)) (O[W] = I), (O[D] = q), (D = W);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var I = O[0],
      D = O.pop();
    if (D !== I) {
      O[0] = D;
      e: for (var W = 0, q = O.length, ae = q >>> 1; W < ae; ) {
        var ue = 2 * (W + 1) - 1,
          ce = O[ue],
          Z = ue + 1,
          Ve = O[Z];
        if (0 > s(ce, D))
          Z < q && 0 > s(Ve, ce)
            ? ((O[W] = Ve), (O[Z] = D), (W = Z))
            : ((O[W] = ce), (O[ue] = D), (W = ue));
        else if (Z < q && 0 > s(Ve, D)) (O[W] = Ve), (O[Z] = D), (W = Z);
        else break e;
      }
    }
    return I;
  }
  function s(O, I) {
    var D = O.sortIndex - I.sortIndex;
    return D !== 0 ? D : O.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    d = 1,
    c = null,
    f = 3,
    y = !1,
    m = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(O) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= O) r(u), (I.sortIndex = I.expirationTime), t(l, I);
      else break;
      I = n(u);
    }
  }
  function S(O) {
    if (((v = !1), g(O), !m))
      if (n(l) !== null) (m = !0), G(k);
      else {
        var I = n(u);
        I !== null && Se(S, I.startTime - O);
      }
  }
  function k(O, I) {
    (m = !1), v && ((v = !1), p(_), (_ = -1)), (y = !0);
    var D = f;
    try {
      for (g(I), c = n(l); c !== null && (!(c.expirationTime > I) || (O && !M())); ) {
        var W = c.callback;
        if (typeof W == "function") {
          (c.callback = null), (f = c.priorityLevel);
          var q = W(c.expirationTime <= I);
          (I = e.unstable_now()),
            typeof q == "function" ? (c.callback = q) : c === n(l) && r(l),
            g(I);
        } else r(l);
        c = n(l);
      }
      if (c !== null) var ae = !0;
      else {
        var ue = n(u);
        ue !== null && Se(S, ue.startTime - I), (ae = !1);
      }
      return ae;
    } finally {
      (c = null), (f = D), (y = !1);
    }
  }
  var R = !1,
    C = null,
    _ = -1,
    L = 5,
    N = -1;
  function M() {
    return !(e.unstable_now() - N < L);
  }
  function b() {
    if (C !== null) {
      var O = e.unstable_now();
      N = O;
      var I = !0;
      try {
        I = C(!0, O);
      } finally {
        I ? j() : ((R = !1), (C = null));
      }
    } else R = !1;
  }
  var j;
  if (typeof h == "function")
    j = function () {
      h(b);
    };
  else if (typeof MessageChannel < "u") {
    var Q = new MessageChannel(),
      V = Q.port2;
    (Q.port1.onmessage = b),
      (j = function () {
        V.postMessage(null);
      });
  } else
    j = function () {
      w(b, 0);
    };
  function G(O) {
    (C = O), R || ((R = !0), j());
  }
  function Se(O, I) {
    _ = w(function () {
      O(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || y || ((m = !0), G(k));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (O) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = f;
      }
      var D = f;
      f = I;
      try {
        return O();
      } finally {
        f = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, I) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var D = f;
      f = O;
      try {
        return I();
      } finally {
        f = D;
      }
    }),
    (e.unstable_scheduleCallback = function (O, I, D) {
      var W = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? W + D : W))
          : (D = W),
        O)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = D + q),
        (O = {
          id: d++,
          callback: I,
          priorityLevel: O,
          startTime: D,
          expirationTime: q,
          sortIndex: -1,
        }),
        D > W
          ? ((O.sortIndex = D),
            t(u, O),
            n(l) === null && O === n(u) && (v ? (p(_), (_ = -1)) : (v = !0), Se(S, D - W)))
          : ((O.sortIndex = q), t(l, O), m || y || ((m = !0), G(k))),
        O
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (O) {
      var I = f;
      return function () {
        var D = f;
        f = I;
        try {
          return O.apply(this, arguments);
        } finally {
          f = D;
        }
      };
    });
})(If);
Ff.exports = If;
var gy = Ff.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vy = F,
  Ye = gy;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var jf = new Set(),
  Rs = {};
function Jn(e, t) {
  Ar(e, t), Ar(e + "Capture", t);
}
function Ar(e, t) {
  for (Rs[e] = t, e = 0; e < t.length; e++) jf.add(t[e]);
}
var Qt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  rl = Object.prototype.hasOwnProperty,
  wy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  kc = {},
  _c = {};
function Sy(e) {
  return rl.call(_c, e) ? !0 : rl.call(kc, e) ? !1 : wy.test(e) ? (_c[e] = !0) : ((kc[e] = !0), !1);
}
function xy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ky(e, t, n, r) {
  if (t === null || typeof t > "u" || xy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, s, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ve[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ve[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  ve[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ve[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ve[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ve[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ve[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gu = /[\-:]([a-z])/g;
function vu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gu, vu);
    ve[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gu, vu);
    ve[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(gu, vu);
  ve[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ve[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  ve[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wu(e, t, n, r) {
  var s = ve.hasOwnProperty(t) ? ve[t] : null;
  (s !== null
    ? s.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (ky(t, n, s, r) && (n = null),
    r || s === null
      ? Sy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  di = Symbol.for("react.element"),
  rr = Symbol.for("react.portal"),
  sr = Symbol.for("react.fragment"),
  Su = Symbol.for("react.strict_mode"),
  sl = Symbol.for("react.profiler"),
  Df = Symbol.for("react.provider"),
  $f = Symbol.for("react.context"),
  xu = Symbol.for("react.forward_ref"),
  il = Symbol.for("react.suspense"),
  ol = Symbol.for("react.suspense_list"),
  ku = Symbol.for("react.memo"),
  Zt = Symbol.for("react.lazy"),
  zf = Symbol.for("react.offscreen"),
  Cc = Symbol.iterator;
function Jr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cc && e[Cc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var se = Object.assign,
  pa;
function os(e) {
  if (pa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      pa = (t && t[1]) || "";
    }
  return (
    `
` +
    pa +
    e
  );
}
var ma = !1;
function ya(e, t) {
  if (!e || ma) return "";
  ma = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (ma = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? os(e) : "";
}
function _y(e) {
  switch (e.tag) {
    case 5:
      return os(e.type);
    case 16:
      return os("Lazy");
    case 13:
      return os("Suspense");
    case 19:
      return os("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ya(e.type, !1)), e;
    case 11:
      return (e = ya(e.type.render, !1)), e;
    case 1:
      return (e = ya(e.type, !0)), e;
    default:
      return "";
  }
}
function al(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case sr:
      return "Fragment";
    case rr:
      return "Portal";
    case sl:
      return "Profiler";
    case Su:
      return "StrictMode";
    case il:
      return "Suspense";
    case ol:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $f:
        return (e.displayName || "Context") + ".Consumer";
      case Df:
        return (e._context.displayName || "Context") + ".Provider";
      case xu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ku:
        return (t = e.displayName || null), t !== null ? t : al(e.type) || "Memo";
      case Zt:
        (t = e._payload), (e = e._init);
        try {
          return al(e(t));
        } catch {}
    }
  return null;
}
function Cy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return al(t);
    case 8:
      return t === Su ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Sn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function qf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ey(e) {
  var t = qf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function fi(e) {
  e._valueTracker || (e._valueTracker = Ey(e));
}
function Uf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = qf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function to(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ll(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ec(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Sn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function Bf(e, t) {
  (t = t.checked), t != null && wu(e, "checked", t, !1);
}
function ul(e, t) {
  Bf(e, t);
  var n = Sn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? cl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && cl(e, t.type, Sn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Rc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function cl(e, t, n) {
  (t !== "number" || to(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var as = Array.isArray;
function yr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Sn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function dl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (as(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Sn(n) };
}
function Vf(e, t) {
  var n = Sn(t.value),
    r = Sn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Tc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Qf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var hi,
  Hf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        hi = hi || document.createElement("div"),
          hi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = hi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ps(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ry = ["Webkit", "ms", "Moz", "O"];
Object.keys(fs).forEach(function (e) {
  Ry.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fs[t] = fs[e]);
  });
});
function Wf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (fs.hasOwnProperty(e) && fs[e])
      ? ("" + t).trim()
      : t + "px";
}
function Kf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Wf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var Py = se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function hl(e, t) {
  if (t) {
    if (Py[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function pl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var ml = null;
function _u(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yl = null,
  gr = null,
  vr = null;
function Lc(e) {
  if ((e = ni(e))) {
    if (typeof yl != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = qo(t)), yl(e.stateNode, e.type, t));
  }
}
function Gf(e) {
  gr ? (vr ? vr.push(e) : (vr = [e])) : (gr = e);
}
function Jf() {
  if (gr) {
    var e = gr,
      t = vr;
    if (((vr = gr = null), Lc(e), t)) for (e = 0; e < t.length; e++) Lc(t[e]);
  }
}
function Xf(e, t) {
  return e(t);
}
function Yf() {}
var ga = !1;
function Zf(e, t, n) {
  if (ga) return e(t, n);
  ga = !0;
  try {
    return Xf(e, t, n);
  } finally {
    (ga = !1), (gr !== null || vr !== null) && (Yf(), Jf());
  }
}
function Ts(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = qo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var gl = !1;
if (Qt)
  try {
    var Xr = {};
    Object.defineProperty(Xr, "passive", {
      get: function () {
        gl = !0;
      },
    }),
      window.addEventListener("test", Xr, Xr),
      window.removeEventListener("test", Xr, Xr);
  } catch {
    gl = !1;
  }
function Ty(e, t, n, r, s, i, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var hs = !1,
  no = null,
  ro = !1,
  vl = null,
  Ly = {
    onError: function (e) {
      (hs = !0), (no = e);
    },
  };
function My(e, t, n, r, s, i, o, a, l) {
  (hs = !1), (no = null), Ty.apply(Ly, arguments);
}
function Oy(e, t, n, r, s, i, o, a, l) {
  if ((My.apply(this, arguments), hs)) {
    if (hs) {
      var u = no;
      (hs = !1), (no = null);
    } else throw Error(T(198));
    ro || ((ro = !0), (vl = u));
  }
}
function Xn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function eh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function Mc(e) {
  if (Xn(e) !== e) throw Error(T(188));
}
function Ny(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return Mc(s), e;
        if (i === r) return Mc(s), t;
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = s), (r = i);
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === n) {
          (o = !0), (n = s), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = s), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = s);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function th(e) {
  return (e = Ny(e)), e !== null ? nh(e) : null;
}
function nh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = nh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var rh = Ye.unstable_scheduleCallback,
  Oc = Ye.unstable_cancelCallback,
  Ay = Ye.unstable_shouldYield,
  by = Ye.unstable_requestPaint,
  le = Ye.unstable_now,
  Fy = Ye.unstable_getCurrentPriorityLevel,
  Cu = Ye.unstable_ImmediatePriority,
  sh = Ye.unstable_UserBlockingPriority,
  so = Ye.unstable_NormalPriority,
  Iy = Ye.unstable_LowPriority,
  ih = Ye.unstable_IdlePriority,
  jo = null,
  At = null;
function jy(e) {
  if (At && typeof At.onCommitFiberRoot == "function")
    try {
      At.onCommitFiberRoot(jo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : zy,
  Dy = Math.log,
  $y = Math.LN2;
function zy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Dy(e) / $y) | 0)) | 0;
}
var pi = 64,
  mi = 4194304;
function ls(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function io(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (r = ls(a)) : ((i &= o), i !== 0 && (r = ls(i)));
  } else (o = n & ~s), o !== 0 ? (r = ls(o)) : i !== 0 && (r = ls(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - St(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function qy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Uy(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - St(i),
      a = 1 << o,
      l = s[o];
    l === -1 ? (!(a & n) || a & r) && (s[o] = qy(a, t)) : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function wl(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function oh() {
  var e = pi;
  return (pi <<= 1), !(pi & 4194240) && (pi = 64), e;
}
function va(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ei(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - St(t)),
    (e[t] = n);
}
function By(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - St(n),
      i = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i);
  }
}
function Eu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var K = 0;
function ah(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var lh,
  Ru,
  uh,
  ch,
  dh,
  Sl = !1,
  yi = [],
  fn = null,
  hn = null,
  pn = null,
  Ls = new Map(),
  Ms = new Map(),
  tn = [],
  Vy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Nc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      fn = null;
      break;
    case "dragenter":
    case "dragleave":
      hn = null;
      break;
    case "mouseover":
    case "mouseout":
      pn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ls.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ms.delete(t.pointerId);
  }
}
function Yr(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = ni(t)), t !== null && Ru(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Qy(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (fn = Yr(fn, e, t, n, r, s)), !0;
    case "dragenter":
      return (hn = Yr(hn, e, t, n, r, s)), !0;
    case "mouseover":
      return (pn = Yr(pn, e, t, n, r, s)), !0;
    case "pointerover":
      var i = s.pointerId;
      return Ls.set(i, Yr(Ls.get(i) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (i = s.pointerId), Ms.set(i, Yr(Ms.get(i) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function fh(e) {
  var t = Mn(e.target);
  if (t !== null) {
    var n = Xn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = eh(n)), t !== null)) {
          (e.blockedOn = t),
            dh(e.priority, function () {
              uh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $i(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ml = r), n.target.dispatchEvent(r), (ml = null);
    } else return (t = ni(n)), t !== null && Ru(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ac(e, t, n) {
  $i(e) && n.delete(t);
}
function Hy() {
  (Sl = !1),
    fn !== null && $i(fn) && (fn = null),
    hn !== null && $i(hn) && (hn = null),
    pn !== null && $i(pn) && (pn = null),
    Ls.forEach(Ac),
    Ms.forEach(Ac);
}
function Zr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Sl || ((Sl = !0), Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, Hy)));
}
function Os(e) {
  function t(s) {
    return Zr(s, e);
  }
  if (0 < yi.length) {
    Zr(yi[0], e);
    for (var n = 1; n < yi.length; n++) {
      var r = yi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    fn !== null && Zr(fn, e),
      hn !== null && Zr(hn, e),
      pn !== null && Zr(pn, e),
      Ls.forEach(t),
      Ms.forEach(t),
      n = 0;
    n < tn.length;
    n++
  )
    (r = tn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tn.length && ((n = tn[0]), n.blockedOn === null); )
    fh(n), n.blockedOn === null && tn.shift();
}
var wr = Gt.ReactCurrentBatchConfig,
  oo = !0;
function Wy(e, t, n, r) {
  var s = K,
    i = wr.transition;
  wr.transition = null;
  try {
    (K = 1), Pu(e, t, n, r);
  } finally {
    (K = s), (wr.transition = i);
  }
}
function Ky(e, t, n, r) {
  var s = K,
    i = wr.transition;
  wr.transition = null;
  try {
    (K = 4), Pu(e, t, n, r);
  } finally {
    (K = s), (wr.transition = i);
  }
}
function Pu(e, t, n, r) {
  if (oo) {
    var s = xl(e, t, n, r);
    if (s === null) Ta(e, t, r, ao, n), Nc(e, r);
    else if (Qy(s, e, t, n, r)) r.stopPropagation();
    else if ((Nc(e, r), t & 4 && -1 < Vy.indexOf(e))) {
      for (; s !== null; ) {
        var i = ni(s);
        if ((i !== null && lh(i), (i = xl(e, t, n, r)), i === null && Ta(e, t, r, ao, n), i === s))
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else Ta(e, t, r, null, n);
  }
}
var ao = null;
function xl(e, t, n, r) {
  if (((ao = null), (e = _u(r)), (e = Mn(e)), e !== null))
    if (((t = Xn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = eh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ao = e), null;
}
function hh(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Fy()) {
        case Cu:
          return 1;
        case sh:
          return 4;
        case so:
        case Iy:
          return 16;
        case ih:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var un = null,
  Tu = null,
  zi = null;
function ph() {
  if (zi) return zi;
  var e,
    t = Tu,
    n = t.length,
    r,
    s = "value" in un ? un.value : un.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (zi = s.slice(e, 1 < r ? 1 - r : void 0));
}
function qi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function gi() {
  return !0;
}
function bc() {
  return !1;
}
function et(e) {
  function t(n, r, s, i, o) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? gi
        : bc),
      (this.isPropagationStopped = bc),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = gi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = gi));
      },
      persist: function () {},
      isPersistent: gi,
    }),
    t
  );
}
var Hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Lu = et(Hr),
  ti = se({}, Hr, { view: 0, detail: 0 }),
  Gy = et(ti),
  wa,
  Sa,
  es,
  Do = se({}, ti, {
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
    getModifierState: Mu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== es &&
            (es && e.type === "mousemove"
              ? ((wa = e.screenX - es.screenX), (Sa = e.screenY - es.screenY))
              : (Sa = wa = 0),
            (es = e)),
          wa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Sa;
    },
  }),
  Fc = et(Do),
  Jy = se({}, Do, { dataTransfer: 0 }),
  Xy = et(Jy),
  Yy = se({}, ti, { relatedTarget: 0 }),
  xa = et(Yy),
  Zy = se({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  eg = et(Zy),
  tg = se({}, Hr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ng = et(tg),
  rg = se({}, Hr, { data: 0 }),
  Ic = et(rg),
  sg = {
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
  ig = {
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
  og = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ag(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = og[e]) ? !!t[e] : !1;
}
function Mu() {
  return ag;
}
var lg = se({}, ti, {
    key: function (e) {
      if (e.key) {
        var t = sg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = qi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? ig[e.keyCode] || "Unidentified"
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
    getModifierState: Mu,
    charCode: function (e) {
      return e.type === "keypress" ? qi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? qi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  ug = et(lg),
  cg = se({}, Do, {
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
  jc = et(cg),
  dg = se({}, ti, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mu,
  }),
  fg = et(dg),
  hg = se({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pg = et(hg),
  mg = se({}, Do, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yg = et(mg),
  gg = [9, 13, 27, 32],
  Ou = Qt && "CompositionEvent" in window,
  ps = null;
Qt && "documentMode" in document && (ps = document.documentMode);
var vg = Qt && "TextEvent" in window && !ps,
  mh = Qt && (!Ou || (ps && 8 < ps && 11 >= ps)),
  Dc = " ",
  $c = !1;
function yh(e, t) {
  switch (e) {
    case "keyup":
      return gg.indexOf(t.keyCode) !== -1;
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
function gh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ir = !1;
function wg(e, t) {
  switch (e) {
    case "compositionend":
      return gh(t);
    case "keypress":
      return t.which !== 32 ? null : (($c = !0), Dc);
    case "textInput":
      return (e = t.data), e === Dc && $c ? null : e;
    default:
      return null;
  }
}
function Sg(e, t) {
  if (ir)
    return e === "compositionend" || (!Ou && yh(e, t))
      ? ((e = ph()), (zi = Tu = un = null), (ir = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return mh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xg = {
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
function zc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xg[e.type] : t === "textarea";
}
function vh(e, t, n, r) {
  Gf(r),
    (t = lo(t, "onChange")),
    0 < t.length &&
      ((n = new Lu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var ms = null,
  Ns = null;
function kg(e) {
  Lh(e, 0);
}
function $o(e) {
  var t = lr(e);
  if (Uf(t)) return e;
}
function _g(e, t) {
  if (e === "change") return t;
}
var wh = !1;
if (Qt) {
  var ka;
  if (Qt) {
    var _a = "oninput" in document;
    if (!_a) {
      var qc = document.createElement("div");
      qc.setAttribute("oninput", "return;"), (_a = typeof qc.oninput == "function");
    }
    ka = _a;
  } else ka = !1;
  wh = ka && (!document.documentMode || 9 < document.documentMode);
}
function Uc() {
  ms && (ms.detachEvent("onpropertychange", Sh), (Ns = ms = null));
}
function Sh(e) {
  if (e.propertyName === "value" && $o(Ns)) {
    var t = [];
    vh(t, Ns, e, _u(e)), Zf(kg, t);
  }
}
function Cg(e, t, n) {
  e === "focusin"
    ? (Uc(), (ms = t), (Ns = n), ms.attachEvent("onpropertychange", Sh))
    : e === "focusout" && Uc();
}
function Eg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return $o(Ns);
}
function Rg(e, t) {
  if (e === "click") return $o(t);
}
function Pg(e, t) {
  if (e === "input" || e === "change") return $o(t);
}
function Tg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : Tg;
function As(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!rl.call(t, s) || !kt(e[s], t[s])) return !1;
  }
  return !0;
}
function Bc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vc(e, t) {
  var n = Bc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Bc(n);
  }
}
function xh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? xh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function kh() {
  for (var e = window, t = to(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = to(e.document);
  }
  return t;
}
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Lg(e) {
  var t = kh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && xh(n.ownerDocument.documentElement, n)) {
    if (r !== null && Nu(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        (r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Vc(n, i));
        var o = Vc(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Mg = Qt && "documentMode" in document && 11 >= document.documentMode,
  or = null,
  kl = null,
  ys = null,
  _l = !1;
function Qc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _l ||
    or == null ||
    or !== to(r) ||
    ((r = or),
    "selectionStart" in r && Nu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ys && As(ys, r)) ||
      ((ys = r),
      (r = lo(kl, "onSelect")),
      0 < r.length &&
        ((t = new Lu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = or))));
}
function vi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ar = {
    animationend: vi("Animation", "AnimationEnd"),
    animationiteration: vi("Animation", "AnimationIteration"),
    animationstart: vi("Animation", "AnimationStart"),
    transitionend: vi("Transition", "TransitionEnd"),
  },
  Ca = {},
  _h = {};
Qt &&
  ((_h = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ar.animationend.animation,
    delete ar.animationiteration.animation,
    delete ar.animationstart.animation),
  "TransitionEvent" in window || delete ar.transitionend.transition);
function zo(e) {
  if (Ca[e]) return Ca[e];
  if (!ar[e]) return e;
  var t = ar[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in _h) return (Ca[e] = t[n]);
  return e;
}
var Ch = zo("animationend"),
  Eh = zo("animationiteration"),
  Rh = zo("animationstart"),
  Ph = zo("transitionend"),
  Th = new Map(),
  Hc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function _n(e, t) {
  Th.set(e, t), Jn(t, [e]);
}
for (var Ea = 0; Ea < Hc.length; Ea++) {
  var Ra = Hc[Ea],
    Og = Ra.toLowerCase(),
    Ng = Ra[0].toUpperCase() + Ra.slice(1);
  _n(Og, "on" + Ng);
}
_n(Ch, "onAnimationEnd");
_n(Eh, "onAnimationIteration");
_n(Rh, "onAnimationStart");
_n("dblclick", "onDoubleClick");
_n("focusin", "onFocus");
_n("focusout", "onBlur");
_n(Ph, "onTransitionEnd");
Ar("onMouseEnter", ["mouseout", "mouseover"]);
Ar("onMouseLeave", ["mouseout", "mouseover"]);
Ar("onPointerEnter", ["pointerout", "pointerover"]);
Ar("onPointerLeave", ["pointerout", "pointerover"]);
Jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")
);
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var us =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ag = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
function Wc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Oy(r, t, void 0, e), (e.currentTarget = null);
}
function Lh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          Wc(s, a, u), (i = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          Wc(s, a, u), (i = l);
        }
    }
  }
  if (ro) throw ((e = vl), (ro = !1), (vl = null), e);
}
function X(e, t) {
  var n = t[Tl];
  n === void 0 && (n = t[Tl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Mh(t, e, 2, !1), n.add(r));
}
function Pa(e, t, n) {
  var r = 0;
  t && (r |= 4), Mh(n, e, r, t);
}
var wi = "_reactListening" + Math.random().toString(36).slice(2);
function bs(e) {
  if (!e[wi]) {
    (e[wi] = !0),
      jf.forEach(function (n) {
        n !== "selectionchange" && (Ag.has(n) || Pa(n, !1, e), Pa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wi] || ((t[wi] = !0), Pa("selectionchange", !1, t));
  }
}
function Mh(e, t, n, r) {
  switch (hh(t)) {
    case 1:
      var s = Wy;
      break;
    case 4:
      s = Ky;
      break;
    default:
      s = Pu;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !gl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1);
}
function Ta(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo), l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Mn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Zf(function () {
    var u = i,
      d = _u(n),
      c = [];
    e: {
      var f = Th.get(e);
      if (f !== void 0) {
        var y = Lu,
          m = e;
        switch (e) {
          case "keypress":
            if (qi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = ug;
            break;
          case "focusin":
            (m = "focus"), (y = xa);
            break;
          case "focusout":
            (m = "blur"), (y = xa);
            break;
          case "beforeblur":
          case "afterblur":
            y = xa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Fc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Xy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = fg;
            break;
          case Ch:
          case Eh:
          case Rh:
            y = eg;
            break;
          case Ph:
            y = pg;
            break;
          case "scroll":
            y = Gy;
            break;
          case "wheel":
            y = yg;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = ng;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = jc;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          p = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S), p !== null && ((S = Ts(h, p)), S != null && v.push(Fs(h, S, g)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < v.length && ((f = new y(f, m, null, n, d)), c.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f && n !== ml && (m = n.relatedTarget || n.fromElement) && (Mn(m) || m[Ht]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window),
          y
            ? ((m = n.relatedTarget || n.toElement),
              (y = u),
              (m = m ? Mn(m) : null),
              m !== null && ((w = Xn(m)), m !== w || (m.tag !== 5 && m.tag !== 6)) && (m = null))
            : ((y = null), (m = u)),
          y !== m)
        ) {
          if (
            ((v = Fc),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = jc), (S = "onPointerLeave"), (p = "onPointerEnter"), (h = "pointer")),
            (w = y == null ? f : lr(y)),
            (g = m == null ? f : lr(m)),
            (f = new v(S, h + "leave", y, n, d)),
            (f.target = w),
            (f.relatedTarget = g),
            (S = null),
            Mn(d) === u &&
              ((v = new v(p, h + "enter", m, n, d)),
              (v.target = g),
              (v.relatedTarget = w),
              (S = v)),
            (w = S),
            y && m)
          )
            t: {
              for (v = y, p = m, h = 0, g = v; g; g = er(g)) h++;
              for (g = 0, S = p; S; S = er(S)) g++;
              for (; 0 < h - g; ) (v = er(v)), h--;
              for (; 0 < g - h; ) (p = er(p)), g--;
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = er(v)), (p = er(p));
              }
              v = null;
            }
          else v = null;
          y !== null && Kc(c, f, y, v, !1), m !== null && w !== null && Kc(c, w, m, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? lr(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var k = _g;
        else if (zc(f))
          if (wh) k = Pg;
          else {
            k = Eg;
            var R = Cg;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (k = Rg);
        if (k && (k = k(e, u))) {
          vh(c, k, n, d);
          break e;
        }
        R && R(e, f, u),
          e === "focusout" &&
            (R = f._wrapperState) &&
            R.controlled &&
            f.type === "number" &&
            cl(f, "number", f.value);
      }
      switch (((R = u ? lr(u) : window), e)) {
        case "focusin":
          (zc(R) || R.contentEditable === "true") && ((or = R), (kl = u), (ys = null));
          break;
        case "focusout":
          ys = kl = or = null;
          break;
        case "mousedown":
          _l = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_l = !1), Qc(c, n, d);
          break;
        case "selectionchange":
          if (Mg) break;
        case "keydown":
        case "keyup":
          Qc(c, n, d);
      }
      var C;
      if (Ou)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        ir
          ? yh(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (mh &&
          n.locale !== "ko" &&
          (ir || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && ir && (C = ph())
            : ((un = d), (Tu = "value" in un ? un.value : un.textContent), (ir = !0))),
        (R = lo(u, _)),
        0 < R.length &&
          ((_ = new Ic(_, e, null, n, d)),
          c.push({ event: _, listeners: R }),
          C ? (_.data = C) : ((C = gh(n)), C !== null && (_.data = C)))),
        (C = vg ? wg(e, n) : Sg(e, n)) &&
          ((u = lo(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Ic("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = C)));
    }
    Lh(c, t);
  });
}
function Fs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function lo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Ts(e, n)),
      i != null && r.unshift(Fs(e, i, s)),
      (i = Ts(e, t)),
      i != null && r.push(Fs(e, i, s))),
      (e = e.return);
  }
  return r;
}
function er(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Kc(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      s
        ? ((l = Ts(n, i)), l != null && o.unshift(Fs(n, l, a)))
        : s || ((l = Ts(n, i)), l != null && o.push(Fs(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var bg = /\r\n?/g,
  Fg = /\u0000|\uFFFD/g;
function Gc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      bg,
      `
`
    )
    .replace(Fg, "");
}
function Si(e, t, n) {
  if (((t = Gc(t)), Gc(e) !== t && n)) throw Error(T(425));
}
function uo() {}
var Cl = null,
  El = null;
function Rl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Pl = typeof setTimeout == "function" ? setTimeout : void 0,
  Ig = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Jc = typeof Promise == "function" ? Promise : void 0,
  jg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Jc < "u"
        ? function (e) {
            return Jc.resolve(null).then(e).catch(Dg);
          }
        : Pl;
function Dg(e) {
  setTimeout(function () {
    throw e;
  });
}
function La(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), Os(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Os(t);
}
function mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Xc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Wr = Math.random().toString(36).slice(2),
  Ot = "__reactFiber$" + Wr,
  Is = "__reactProps$" + Wr,
  Ht = "__reactContainer$" + Wr,
  Tl = "__reactEvents$" + Wr,
  $g = "__reactListeners$" + Wr,
  zg = "__reactHandles$" + Wr;
function Mn(e) {
  var t = e[Ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[Ot])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Xc(e); e !== null; ) {
          if ((n = e[Ot])) return n;
          e = Xc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ni(e) {
  return (
    (e = e[Ot] || e[Ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function lr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function qo(e) {
  return e[Is] || null;
}
var Ll = [],
  ur = -1;
function Cn(e) {
  return { current: e };
}
function Y(e) {
  0 > ur || ((e.current = Ll[ur]), (Ll[ur] = null), ur--);
}
function J(e, t) {
  ur++, (Ll[ur] = e.current), (e.current = t);
}
var xn = {},
  Te = Cn(xn),
  ze = Cn(!1),
  Vn = xn;
function br(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function qe(e) {
  return (e = e.childContextTypes), e != null;
}
function co() {
  Y(ze), Y(Te);
}
function Yc(e, t, n) {
  if (Te.current !== xn) throw Error(T(168));
  J(Te, t), J(ze, n);
}
function Oh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(T(108, Cy(e) || "Unknown", s));
  return se({}, n, r);
}
function fo(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xn),
    (Vn = Te.current),
    J(Te, e),
    J(ze, ze.current),
    !0
  );
}
function Zc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = Oh(e, t, Vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(ze),
      Y(Te),
      J(Te, e))
    : Y(ze),
    J(ze, n);
}
var Dt = null,
  Uo = !1,
  Ma = !1;
function Nh(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function qg(e) {
  (Uo = !0), Nh(e);
}
function En() {
  if (!Ma && Dt !== null) {
    Ma = !0;
    var e = 0,
      t = K;
    try {
      var n = Dt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Dt = null), (Uo = !1);
    } catch (s) {
      throw (Dt !== null && (Dt = Dt.slice(e + 1)), rh(Cu, En), s);
    } finally {
      (K = t), (Ma = !1);
    }
  }
  return null;
}
var cr = [],
  dr = 0,
  ho = null,
  po = 0,
  st = [],
  it = 0,
  Qn = null,
  qt = 1,
  Ut = "";
function Rn(e, t) {
  (cr[dr++] = po), (cr[dr++] = ho), (ho = e), (po = t);
}
function Ah(e, t, n) {
  (st[it++] = qt), (st[it++] = Ut), (st[it++] = Qn), (Qn = e);
  var r = qt;
  e = Ut;
  var s = 32 - St(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var i = 32 - St(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (qt = (1 << (32 - St(t) + s)) | (n << s) | r),
      (Ut = i + e);
  } else (qt = (1 << i) | (n << s) | r), (Ut = e);
}
function Au(e) {
  e.return !== null && (Rn(e, 1), Ah(e, 1, 0));
}
function bu(e) {
  for (; e === ho; ) (ho = cr[--dr]), (cr[dr] = null), (po = cr[--dr]), (cr[dr] = null);
  for (; e === Qn; )
    (Qn = st[--it]),
      (st[it] = null),
      (Ut = st[--it]),
      (st[it] = null),
      (qt = st[--it]),
      (st[it] = null);
}
var Je = null,
  Ge = null,
  ee = !1,
  wt = null;
function bh(e, t) {
  var n = ot(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ed(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Ge = mn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qn !== null ? { id: qt, overflow: Ut } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ml(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ol(e) {
  if (ee) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!ed(e, t)) {
        if (Ml(e)) throw Error(T(418));
        t = mn(n.nextSibling);
        var r = Je;
        t && ed(e, t) ? bh(r, n) : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Je = e));
      }
    } else {
      if (Ml(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (Je = e);
    }
  }
}
function td(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Je = e;
}
function xi(e) {
  if (e !== Je) return !1;
  if (!ee) return td(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !Rl(e.type, e.memoizedProps))),
    t && (t = Ge))
  ) {
    if (Ml(e)) throw (Fh(), Error(T(418)));
    for (; t; ) bh(e, t), (t = mn(t.nextSibling));
  }
  if ((td(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = mn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Je ? mn(e.stateNode.nextSibling) : null;
  return !0;
}
function Fh() {
  for (var e = Ge; e; ) e = mn(e.nextSibling);
}
function Fr() {
  (Ge = Je = null), (ee = !1);
}
function Fu(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
var Ug = Gt.ReactCurrentBatchConfig;
function ts(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var s = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function ki(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)
    ))
  );
}
function nd(e) {
  var t = e._init;
  return t(e._payload);
}
function Ih(e) {
  function t(p, h) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [h]), (p.flags |= 16)) : g.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function s(p, h) {
    return (p = wn(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, h, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null ? ((g = g.index), g < h ? ((p.flags |= 2), h) : g) : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, g, S) {
    return h === null || h.tag !== 6
      ? ((h = ja(g, p.mode, S)), (h.return = p), h)
      : ((h = s(h, g)), (h.return = p), h);
  }
  function l(p, h, g, S) {
    var k = g.type;
    return k === sr
      ? d(p, h, g.props.children, S, g.key)
      : h !== null &&
          (h.elementType === k ||
            (typeof k == "object" && k !== null && k.$$typeof === Zt && nd(k) === h.type))
        ? ((S = s(h, g.props)), (S.ref = ts(p, h, g)), (S.return = p), S)
        : ((S = Ki(g.type, g.key, g.props, null, p.mode, S)),
          (S.ref = ts(p, h, g)),
          (S.return = p),
          S);
  }
  function u(p, h, g, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = Da(g, p.mode, S)), (h.return = p), h)
      : ((h = s(h, g.children || [])), (h.return = p), h);
  }
  function d(p, h, g, S, k) {
    return h === null || h.tag !== 7
      ? ((h = zn(g, p.mode, S, k)), (h.return = p), h)
      : ((h = s(h, g)), (h.return = p), h);
  }
  function c(p, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = ja("" + h, p.mode, g)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case di:
          return (
            (g = Ki(h.type, h.key, h.props, null, p.mode, g)),
            (g.ref = ts(p, null, h)),
            (g.return = p),
            g
          );
        case rr:
          return (h = Da(h, p.mode, g)), (h.return = p), h;
        case Zt:
          var S = h._init;
          return c(p, S(h._payload), g);
      }
      if (as(h) || Jr(h)) return (h = zn(h, p.mode, g, null)), (h.return = p), h;
      ki(p, h);
    }
    return null;
  }
  function f(p, h, g, S) {
    var k = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : a(p, h, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case di:
          return g.key === k ? l(p, h, g, S) : null;
        case rr:
          return g.key === k ? u(p, h, g, S) : null;
        case Zt:
          return (k = g._init), f(p, h, k(g._payload), S);
      }
      if (as(g) || Jr(g)) return k !== null ? null : d(p, h, g, S, null);
      ki(p, g);
    }
    return null;
  }
  function y(p, h, g, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(g) || null), a(h, p, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case di:
          return (p = p.get(S.key === null ? g : S.key) || null), l(h, p, S, k);
        case rr:
          return (p = p.get(S.key === null ? g : S.key) || null), u(h, p, S, k);
        case Zt:
          var R = S._init;
          return y(p, h, g, R(S._payload), k);
      }
      if (as(S) || Jr(S)) return (p = p.get(g) || null), d(h, p, S, k, null);
      ki(h, S);
    }
    return null;
  }
  function m(p, h, g, S) {
    for (var k = null, R = null, C = h, _ = (h = 0), L = null; C !== null && _ < g.length; _++) {
      C.index > _ ? ((L = C), (C = null)) : (L = C.sibling);
      var N = f(p, C, g[_], S);
      if (N === null) {
        C === null && (C = L);
        break;
      }
      e && C && N.alternate === null && t(p, C),
        (h = i(N, h, _)),
        R === null ? (k = N) : (R.sibling = N),
        (R = N),
        (C = L);
    }
    if (_ === g.length) return n(p, C), ee && Rn(p, _), k;
    if (C === null) {
      for (; _ < g.length; _++)
        (C = c(p, g[_], S)),
          C !== null && ((h = i(C, h, _)), R === null ? (k = C) : (R.sibling = C), (R = C));
      return ee && Rn(p, _), k;
    }
    for (C = r(p, C); _ < g.length; _++)
      (L = y(C, p, _, g[_], S)),
        L !== null &&
          (e && L.alternate !== null && C.delete(L.key === null ? _ : L.key),
          (h = i(L, h, _)),
          R === null ? (k = L) : (R.sibling = L),
          (R = L));
    return (
      e &&
        C.forEach(function (M) {
          return t(p, M);
        }),
      ee && Rn(p, _),
      k
    );
  }
  function v(p, h, g, S) {
    var k = Jr(g);
    if (typeof k != "function") throw Error(T(150));
    if (((g = k.call(g)), g == null)) throw Error(T(151));
    for (
      var R = (k = null), C = h, _ = (h = 0), L = null, N = g.next();
      C !== null && !N.done;
      _++, N = g.next()
    ) {
      C.index > _ ? ((L = C), (C = null)) : (L = C.sibling);
      var M = f(p, C, N.value, S);
      if (M === null) {
        C === null && (C = L);
        break;
      }
      e && C && M.alternate === null && t(p, C),
        (h = i(M, h, _)),
        R === null ? (k = M) : (R.sibling = M),
        (R = M),
        (C = L);
    }
    if (N.done) return n(p, C), ee && Rn(p, _), k;
    if (C === null) {
      for (; !N.done; _++, N = g.next())
        (N = c(p, N.value, S)),
          N !== null && ((h = i(N, h, _)), R === null ? (k = N) : (R.sibling = N), (R = N));
      return ee && Rn(p, _), k;
    }
    for (C = r(p, C); !N.done; _++, N = g.next())
      (N = y(C, p, _, N.value, S)),
        N !== null &&
          (e && N.alternate !== null && C.delete(N.key === null ? _ : N.key),
          (h = i(N, h, _)),
          R === null ? (k = N) : (R.sibling = N),
          (R = N));
    return (
      e &&
        C.forEach(function (b) {
          return t(p, b);
        }),
      ee && Rn(p, _),
      k
    );
  }
  function w(p, h, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === sr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case di:
          e: {
            for (var k = g.key, R = h; R !== null; ) {
              if (R.key === k) {
                if (((k = g.type), k === sr)) {
                  if (R.tag === 7) {
                    n(p, R.sibling), (h = s(R, g.props.children)), (h.return = p), (p = h);
                    break e;
                  }
                } else if (
                  R.elementType === k ||
                  (typeof k == "object" && k !== null && k.$$typeof === Zt && nd(k) === R.type)
                ) {
                  n(p, R.sibling),
                    (h = s(R, g.props)),
                    (h.ref = ts(p, R, g)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, R);
                break;
              } else t(p, R);
              R = R.sibling;
            }
            g.type === sr
              ? ((h = zn(g.props.children, p.mode, S, g.key)), (h.return = p), (p = h))
              : ((S = Ki(g.type, g.key, g.props, null, p.mode, S)),
                (S.ref = ts(p, h, g)),
                (S.return = p),
                (p = S));
          }
          return o(p);
        case rr:
          e: {
            for (R = g.key; h !== null; ) {
              if (h.key === R)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(p, h.sibling), (h = s(h, g.children || [])), (h.return = p), (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Da(g, p.mode, S)), (h.return = p), (p = h);
          }
          return o(p);
        case Zt:
          return (R = g._init), w(p, h, R(g._payload), S);
      }
      if (as(g)) return m(p, h, g, S);
      if (Jr(g)) return v(p, h, g, S);
      ki(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = s(h, g)), (h.return = p), (p = h))
          : (n(p, h), (h = ja(g, p.mode, S)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return w;
}
var Ir = Ih(!0),
  jh = Ih(!1),
  mo = Cn(null),
  yo = null,
  fr = null,
  Iu = null;
function ju() {
  Iu = fr = yo = null;
}
function Du(e) {
  var t = mo.current;
  Y(mo), (e._currentValue = t);
}
function Nl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Sr(e, t) {
  (yo = e),
    (Iu = fr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (De = !0), (e.firstContext = null));
}
function ut(e) {
  var t = e._currentValue;
  if (Iu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fr === null)) {
      if (yo === null) throw Error(T(308));
      (fr = e), (yo.dependencies = { lanes: 0, firstContext: e });
    } else fr = fr.next = e;
  return t;
}
var On = null;
function $u(e) {
  On === null ? (On = [e]) : On.push(e);
}
function Dh(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), $u(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    Wt(e, r)
  );
}
function Wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var en = !1;
function zu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $h(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Bt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var s = r.pending;
    return s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)), (r.pending = t), Wt(e, n);
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), $u(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    Wt(e, n)
  );
}
function Ui(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eu(e, n);
  }
}
function rd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (s = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function go(e, t, n, r) {
  var s = e.updateQueue;
  en = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (i = u) : (o.next = u), (o = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o && (a === null ? (d.firstBaseUpdate = u) : (a.next = u), (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var c = s.baseState;
    (o = 0), (d = u = l = null), (a = i);
    do {
      var f = a.lane,
        y = a.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var m = e,
            v = a;
          switch (((f = t), (y = n), v.tag)) {
            case 1:
              if (((m = v.payload), typeof m == "function")) {
                c = m.call(y, c, f);
                break e;
              }
              c = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (((m = v.payload), (f = typeof m == "function" ? m.call(y, c, f) : m), f == null))
                break e;
              c = se({}, c, f);
              break e;
            case 2:
              en = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (f = s.effects), f === null ? (s.effects = [a]) : f.push(a));
      } else
        (y = {
          eventTime: y,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (l = c)) : (d = d.next = y),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        (f = a), (a = f.next), (f.next = null), (s.lastBaseUpdate = f), (s.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = c),
      (s.baseState = l),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (o |= s.lane), (s = s.next);
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    (Wn |= o), (e.lanes = o), (e.memoizedState = c);
  }
}
function sd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function")) throw Error(T(191, s));
        s.call(r);
      }
    }
}
var ri = {},
  bt = Cn(ri),
  js = Cn(ri),
  Ds = Cn(ri);
function Nn(e) {
  if (e === ri) throw Error(T(174));
  return e;
}
function qu(e, t) {
  switch ((J(Ds, t), J(js, e), J(bt, ri), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fl(t, e));
  }
  Y(bt), J(bt, t);
}
function jr() {
  Y(bt), Y(js), Y(Ds);
}
function zh(e) {
  Nn(Ds.current);
  var t = Nn(bt.current),
    n = fl(t, e.type);
  t !== n && (J(js, e), J(bt, n));
}
function Uu(e) {
  js.current === e && (Y(bt), Y(js));
}
var te = Cn(0);
function vo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Oa = [];
function Bu() {
  for (var e = 0; e < Oa.length; e++) Oa[e]._workInProgressVersionPrimary = null;
  Oa.length = 0;
}
var Bi = Gt.ReactCurrentDispatcher,
  Na = Gt.ReactCurrentBatchConfig,
  Hn = 0,
  re = null,
  fe = null,
  pe = null,
  wo = !1,
  gs = !1,
  $s = 0,
  Bg = 0;
function ke() {
  throw Error(T(321));
}
function Vu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
  return !0;
}
function Qu(e, t, n, r, s, i) {
  if (
    ((Hn = i),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Bi.current = e === null || e.memoizedState === null ? Wg : Kg),
    (e = n(r, s)),
    gs)
  ) {
    i = 0;
    do {
      if (((gs = !1), ($s = 0), 25 <= i)) throw Error(T(301));
      (i += 1), (pe = fe = null), (t.updateQueue = null), (Bi.current = Gg), (e = n(r, s));
    } while (gs);
  }
  if (
    ((Bi.current = So),
    (t = fe !== null && fe.next !== null),
    (Hn = 0),
    (pe = fe = re = null),
    (wo = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Hu() {
  var e = $s !== 0;
  return ($s = 0), e;
}
function Pt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return pe === null ? (re.memoizedState = pe = e) : (pe = pe.next = e), pe;
}
function ct() {
  if (fe === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = pe === null ? re.memoizedState : pe.next;
  if (t !== null) (pe = t), (fe = e);
  else {
    if (e === null) throw Error(T(310));
    (fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      pe === null ? (re.memoizedState = pe = e) : (pe = pe.next = e);
  }
  return pe;
}
function zs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Aa(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = fe,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      (s.next = i.next), (i.next = o);
    }
    (r.baseQueue = s = i), (n.pending = null);
  }
  if (s !== null) {
    (i = s.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = i;
    do {
      var d = u.lane;
      if ((Hn & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = c), (o = r)) : (l = l.next = c), (re.lanes |= d), (Wn |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (o = r) : (l.next = a),
      kt(r, t.memoizedState) || (De = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (i = s.lane), (re.lanes |= i), (Wn |= i), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ba(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== s);
    kt(i, t.memoizedState) || (De = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function qh() {}
function Uh(e, t) {
  var n = re,
    r = ct(),
    s = t(),
    i = !kt(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (De = !0)),
    (r = r.queue),
    Wu(Qh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (pe !== null && pe.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), qs(9, Vh.bind(null, n, r, s, t), void 0, null), me === null))
      throw Error(T(349));
    Hn & 30 || Bh(n, t, s);
  }
  return s;
}
function Bh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (re.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Vh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Hh(t) && Wh(e);
}
function Qh(e, t, n) {
  return n(function () {
    Hh(t) && Wh(e);
  });
}
function Hh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function Wh(e) {
  var t = Wt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function id(e) {
  var t = Pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Hg.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function qs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Kh() {
  return ct().memoizedState;
}
function Vi(e, t, n, r) {
  var s = Pt();
  (re.flags |= e), (s.memoizedState = qs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bo(e, t, n, r) {
  var s = ct();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (fe !== null) {
    var o = fe.memoizedState;
    if (((i = o.destroy), r !== null && Vu(r, o.deps))) {
      s.memoizedState = qs(t, n, i, r);
      return;
    }
  }
  (re.flags |= e), (s.memoizedState = qs(1 | t, n, i, r));
}
function od(e, t) {
  return Vi(8390656, 8, e, t);
}
function Wu(e, t) {
  return Bo(2048, 8, e, t);
}
function Gh(e, t) {
  return Bo(4, 2, e, t);
}
function Jh(e, t) {
  return Bo(4, 4, e, t);
}
function Xh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Yh(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Bo(4, 4, Xh.bind(null, t, e), n);
}
function Ku() {}
function Zh(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function ep(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function tp(e, t, n) {
  return Hn & 21
    ? (kt(n, t) || ((n = oh()), (re.lanes |= n), (Wn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n));
}
function Vg(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Na.transition;
  Na.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (Na.transition = r);
  }
}
function np() {
  return ct().memoizedState;
}
function Qg(e, t, n) {
  var r = vn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), rp(e)))
    sp(t, n);
  else if (((n = Dh(e, t, n, r)), n !== null)) {
    var s = Ae();
    xt(n, e, r, s), ip(n, t, r);
  }
}
function Hg(e, t, n) {
  var r = vn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rp(e)) sp(t, s);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), kt(a, o))) {
          var l = t.interleaved;
          l === null ? ((s.next = s), $u(t)) : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = Dh(e, t, s, r)), n !== null && ((s = Ae()), xt(n, e, r, s), ip(n, t, r));
  }
}
function rp(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function sp(e, t) {
  gs = wo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function ip(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eu(e, n);
  }
}
var So = {
    readContext: ut,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useInsertionEffect: ke,
    useLayoutEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useMutableSource: ke,
    useSyncExternalStore: ke,
    useId: ke,
    unstable_isNewReconciler: !1,
  },
  Wg = {
    readContext: ut,
    useCallback: function (e, t) {
      return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ut,
    useEffect: od,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Vi(4194308, 4, Xh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Vi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Qg.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: id,
    useDebugValue: Ku,
    useDeferredValue: function (e) {
      return (Pt().memoizedState = e);
    },
    useTransition: function () {
      var e = id(!1),
        t = e[0];
      return (e = Vg.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        s = Pt();
      if (ee) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), me === null)) throw Error(T(349));
        Hn & 30 || Bh(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        od(Qh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        qs(9, Vh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pt(),
        t = me.identifierPrefix;
      if (ee) {
        var n = Ut,
          r = qt;
        (n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = $s++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Bg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Kg = {
    readContext: ut,
    useCallback: Zh,
    useContext: ut,
    useEffect: Wu,
    useImperativeHandle: Yh,
    useInsertionEffect: Gh,
    useLayoutEffect: Jh,
    useMemo: ep,
    useReducer: Aa,
    useRef: Kh,
    useState: function () {
      return Aa(zs);
    },
    useDebugValue: Ku,
    useDeferredValue: function (e) {
      var t = ct();
      return tp(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = Aa(zs)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: qh,
    useSyncExternalStore: Uh,
    useId: np,
    unstable_isNewReconciler: !1,
  },
  Gg = {
    readContext: ut,
    useCallback: Zh,
    useContext: ut,
    useEffect: Wu,
    useImperativeHandle: Yh,
    useInsertionEffect: Gh,
    useLayoutEffect: Jh,
    useMemo: ep,
    useReducer: ba,
    useRef: Kh,
    useState: function () {
      return ba(zs);
    },
    useDebugValue: Ku,
    useDeferredValue: function (e) {
      var t = ct();
      return fe === null ? (t.memoizedState = e) : tp(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ba(zs)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: qh,
    useSyncExternalStore: Uh,
    useId: np,
    unstable_isNewReconciler: !1,
  };
function ht(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Al(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      s = vn(e),
      i = Bt(r, s);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = yn(e, i, s)),
      t !== null && (xt(t, e, s, r), Ui(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      s = vn(e),
      i = Bt(r, s);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = yn(e, i, s)),
      t !== null && (xt(t, e, s, r), Ui(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = vn(e),
      s = Bt(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = yn(e, s, r)),
      t !== null && (xt(t, e, r, n), Ui(t, e, r));
  },
};
function ad(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !As(n, r) || !As(s, i)
        : !0
  );
}
function op(e, t, n) {
  var r = !1,
    s = xn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ut(i))
      : ((s = qe(t) ? Vn : Te.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? br(e, s) : xn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ld(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vo.enqueueReplaceState(t, t.state, null);
}
function bl(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), zu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (s.context = ut(i))
    : ((i = qe(t) ? Vn : Te.current), (s.context = br(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Al(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
      t !== s.state && Vo.enqueueReplaceState(s, s.state, null),
      go(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += _y(r)), (r = r.return);
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Fa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Fl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jg = typeof WeakMap == "function" ? WeakMap : Map;
function ap(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ko || ((ko = !0), (Ql = r)), Fl(e, t);
    }),
    n
  );
}
function lp(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Fl(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Fl(e, t), typeof r != "function" && (gn === null ? (gn = new Set([this])) : gn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
      }),
    n
  );
}
function ud(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jg();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = cv.bind(null, e, t, n)), t.then(e, e));
}
function cd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dd(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Bt(-1, 1)), (t.tag = 2), yn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Xg = Gt.ReactCurrentOwner,
  De = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? jh(t, null, n, r) : Ir(t, e.child, n, r);
}
function fd(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    Sr(t, s),
    (r = Qu(e, t, n, r, i, s)),
    (n = Hu()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), Kt(e, t, s))
      : (ee && n && Au(t), (t.flags |= 1), Oe(e, t, r, s), t.child)
  );
}
function hd(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !nc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), up(e, t, i, r, s))
      : ((e = Ki(n.type, null, r, t, t.mode, s)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : As), n(o, r) && e.ref === t.ref))
      return Kt(e, t, s);
  }
  return (t.flags |= 1), (e = wn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function up(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (As(i, r) && e.ref === t.ref)
      if (((De = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0)) e.flags & 131072 && (De = !0);
      else return (t.lanes = e.lanes), Kt(e, t, s);
  }
  return Il(e, t, n, r, s);
}
function cp(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(pr, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          J(pr, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        J(pr, Qe),
        (Qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), J(pr, Qe), (Qe |= r);
  return Oe(e, t, s, n), t.child;
}
function dp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Il(e, t, n, r, s) {
  var i = qe(n) ? Vn : Te.current;
  return (
    (i = br(t, i)),
    Sr(t, s),
    (n = Qu(e, t, n, r, i, s)),
    (r = Hu()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), Kt(e, t, s))
      : (ee && r && Au(t), (t.flags |= 1), Oe(e, t, n, s), t.child)
  );
}
function pd(e, t, n, r, s) {
  if (qe(n)) {
    var i = !0;
    fo(t);
  } else i = !1;
  if ((Sr(t, s), t.stateNode === null)) Qi(e, t), op(t, n, r), bl(t, n, r, s), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ut(u))
      : ((u = qe(n) ? Vn : Te.current), (u = br(t, u)));
    var d = n.getDerivedStateFromProps,
      c = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && ld(t, o, r, u)),
      (en = !1);
    var f = t.memoizedState;
    (o.state = f),
      go(t, r, o, s),
      (l = t.memoizedState),
      a !== r || f !== l || ze.current || en
        ? (typeof d == "function" && (Al(t, n, d, r), (l = t.memoizedState)),
          (a = en || ad(t, n, a, r, f, l, u))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (o = t.stateNode),
      $h(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : ht(t.type, a)),
      (o.props = u),
      (c = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ut(l))
        : ((l = qe(n) ? Vn : Te.current), (l = br(t, l)));
    var y = n.getDerivedStateFromProps;
    (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== c || f !== l) && ld(t, o, r, l)),
      (en = !1),
      (f = t.memoizedState),
      (o.state = f),
      go(t, r, o, s);
    var m = t.memoizedState;
    a !== c || f !== m || ze.current || en
      ? (typeof y == "function" && (Al(t, n, y, r), (m = t.memoizedState)),
        (u = en || ad(t, n, u, r, f, m, l) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, m, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (o.props = r),
        (o.state = m),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return jl(e, t, n, r, i, s);
}
function jl(e, t, n, r, s, i) {
  dp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && Zc(t, n, !1), Kt(e, t, i);
  (r = t.stateNode), (Xg.current = t);
  var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Ir(t, e.child, null, i)), (t.child = Ir(t, null, a, i)))
      : Oe(e, t, a, i),
    (t.memoizedState = r.state),
    s && Zc(t, n, !0),
    t.child
  );
}
function fp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Yc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Yc(e, t.context, !1),
    qu(e, t.containerInfo);
}
function md(e, t, n, r, s) {
  return Fr(), Fu(s), (t.flags |= 256), Oe(e, t, n, r), t.child;
}
var Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
function $l(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function hp(e, t, n) {
  var r = t.pendingProps,
    s = te.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (s |= 1),
    J(te, s & 1),
    e === null)
  )
    return (
      Ol(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Wo(o, r, 0, null)),
              (e = zn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = $l(n)),
              (t.memoizedState = Dl),
              e)
            : Gu(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return Yg(e, t, o, r, a, s, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
        : ((r = wn(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = wn(a, i)) : ((i = zn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? $l(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Dl),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = wn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Gu(e, t) {
  return (t = Wo({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function _i(e, t, n, r) {
  return (
    r !== null && Fu(r),
    Ir(t, e.child, null, n),
    (e = Gu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Yg(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Fa(Error(T(422)))), _i(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = Wo({ mode: "visible", children: r.children }, s, 0, null)),
          (i = zn(i, s, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Ir(t, e.child, null, o),
          (t.child.memoizedState = $l(o)),
          (t.memoizedState = Dl),
          i);
  if (!(t.mode & 1)) return _i(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(T(419))), (r = Fa(i, r, void 0)), _i(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), De || a)) {
    if (((r = me), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 && s !== i.retryLane && ((i.retryLane = s), Wt(e, s), xt(r, e, s, -1));
    }
    return tc(), (r = Fa(Error(T(421)))), _i(e, t, o, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = dv.bind(null, e)), (s._reactRetry = t), null)
    : ((e = i.treeContext),
      (Ge = mn(s.nextSibling)),
      (Je = t),
      (ee = !0),
      (wt = null),
      e !== null &&
        ((st[it++] = qt),
        (st[it++] = Ut),
        (st[it++] = Qn),
        (qt = e.id),
        (Ut = e.overflow),
        (Qn = t)),
      (t = Gu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Nl(e.return, t, n);
}
function Ia(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function pp(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((Oe(e, t, r.children, n), (r = te.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yd(e, n, t);
        else if (e.tag === 19) yd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((J(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate), e !== null && vo(e) === null && (s = n), (n = n.sibling);
        (n = s),
          n === null ? ((s = t.child), (t.child = null)) : ((s = n.sibling), (n.sibling = null)),
          Ia(t, !1, s, n, i);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && vo(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        Ia(t, !0, n, null, i);
        break;
      case "together":
        Ia(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Kt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Wn |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (e = t.child, n = wn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = wn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Zg(e, t, n) {
  switch (t.tag) {
    case 3:
      fp(t), Fr();
      break;
    case 5:
      zh(t);
      break;
    case 1:
      qe(t.type) && fo(t);
      break;
    case 4:
      qu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      J(mo, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (J(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? hp(e, t, n)
            : (J(te, te.current & 1), (e = Kt(e, t, n)), e !== null ? e.sibling : null);
      J(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        J(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), cp(e, t, n);
  }
  return Kt(e, t, n);
}
var mp, zl, yp, gp;
mp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
zl = function () {};
yp = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), Nn(bt.current);
    var i = null;
    switch (n) {
      case "input":
        (s = ll(e, s)), (r = ll(e, r)), (i = []);
        break;
      case "select":
        (s = se({}, s, { value: void 0 })), (r = se({}, r, { value: void 0 })), (i = []);
        break;
      case "textarea":
        (s = dl(e, s)), (r = dl(e, r)), (i = []);
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = uo);
    }
    hl(n, r);
    var o;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var a = s[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Rs.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
            for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") || (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Rs.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && X("scroll", e), i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
gp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ns(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ev(e, t, n) {
  var r = t.pendingProps;
  switch ((bu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _e(t), null;
    case 1:
      return qe(t.type) && co(), _e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        jr(),
        Y(ze),
        Y(Te),
        Bu(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), wt !== null && (Kl(wt), (wt = null)))),
        zl(e, t),
        _e(t),
        null
      );
    case 5:
      Uu(t);
      var s = Nn(Ds.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        yp(e, t, n, r, s), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return _e(t), null;
        }
        if (((e = Nn(bt.current)), xi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ot] = t), (r[Is] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < us.length; s++) X(us[s], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              Ec(r, i), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }), X("invalid", r);
              break;
            case "textarea":
              Pc(r, i), X("invalid", r);
          }
          hl(n, i), (s = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 && Si(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 && Si(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : Rs.hasOwnProperty(o) && a != null && o === "onScroll" && X("scroll", r);
            }
          switch (n) {
            case "input":
              fi(r), Rc(r, i, !0);
              break;
            case "textarea":
              fi(r), Tc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = uo);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Qf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ot] = t),
            (e[Is] = r),
            mp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = pl(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < us.length; s++) X(us[s], e);
                s = r;
                break;
              case "source":
                X("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (s = r);
                break;
              case "details":
                X("toggle", e), (s = r);
                break;
              case "input":
                Ec(e, r), (s = ll(e, r)), X("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = se({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                Pc(e, r), (s = dl(e, r)), X("invalid", e);
                break;
              default:
                s = r;
            }
            hl(n, s), (a = s);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Kf(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Hf(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Ps(e, l)
                        : typeof l == "number" && Ps(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Rs.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && X("scroll", e)
                          : l != null && wu(e, i, l, o));
              }
            switch (n) {
              case "input":
                fi(e), Rc(e, r, !1);
                break;
              case "textarea":
                fi(e), Tc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Sn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? yr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && yr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = uo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) gp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = Nn(Ds.current)), Nn(bt.current), xi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ot] = t),
            (i = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Si(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Si(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ot] = t),
            (t.stateNode = r);
      }
      return _e(t), null;
    case 13:
      if (
        (Y(te),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Ge !== null && t.mode & 1 && !(t.flags & 128))
          Fh(), Fr(), (t.flags |= 98560), (i = !1);
        else if (((i = xi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(T(317));
            i[Ot] = t;
          } else Fr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          _e(t), (i = !1);
        } else wt !== null && (Kl(wt), (wt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || te.current & 1 ? he === 0 && (he = 3) : tc())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null);
    case 4:
      return jr(), zl(e, t), e === null && bs(t.stateNode.containerInfo), _e(t), null;
    case 10:
      return Du(t.type._context), _e(t), null;
    case 17:
      return qe(t.type) && co(), _e(t), null;
    case 19:
      if ((Y(te), (i = t.memoizedState), i === null)) return _e(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) ns(i, !1);
        else {
          if (he !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = vo(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ns(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return J(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            le() > $r &&
            ((t.flags |= 128), (r = !0), ns(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vo(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ns(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !ee)
            )
              return _e(t), null;
          } else
            2 * le() - i.renderingStartTime > $r &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ns(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = le()),
          (t.sibling = null),
          (n = te.current),
          J(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (_e(t), null);
    case 22:
    case 23:
      return (
        ec(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function tv(e, t) {
  switch ((bu(t), t.tag)) {
    case 1:
      return (
        qe(t.type) && co(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        jr(),
        Y(ze),
        Y(Te),
        Bu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Uu(t), null;
    case 13:
      if ((Y(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        Fr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return Y(te), null;
    case 4:
      return jr(), null;
    case 10:
      return Du(t.type._context), null;
    case 22:
    case 23:
      return ec(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ci = !1,
  Re = !1,
  nv = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function hr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        oe(e, t, r);
      }
    else n.current = null;
}
function ql(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var gd = !1;
function rv(e, t) {
  if (((Cl = oo), (e = kh()), Nu(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            c = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              c !== n || (s !== 0 && c.nodeType !== 3) || (a = o + s),
                c !== i || (r !== 0 && c.nodeType !== 3) || (l = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (y = c.firstChild) !== null;

            )
              (f = c), (c = y);
            for (;;) {
              if (c === e) break t;
              if (
                (f === n && ++u === s && (a = o),
                f === i && ++d === r && (l = o),
                (y = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (El = { focusedElem: e, selectionRange: n }, oo = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var v = m.memoizedProps,
                    w = m.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ht(t.type, v), w);
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (S) {
          oe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (m = gd), (gd = !1), m;
}
function vs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        (s.destroy = void 0), i !== void 0 && ql(t, n, i);
      }
      s = s.next;
    } while (s !== r);
  }
}
function Qo(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ul(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function vp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), vp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[Ot], delete t[Is], delete t[Tl], delete t[$g], delete t[zg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function wp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || wp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = uo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bl(e, t, n), e = e.sibling; e !== null; ) Bl(e, t, n), (e = e.sibling);
}
function Vl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vl(e, t, n), e = e.sibling; e !== null; ) Vl(e, t, n), (e = e.sibling);
}
var ye = null,
  gt = !1;
function Jt(e, t, n) {
  for (n = n.child; n !== null; ) Sp(e, t, n), (n = n.sibling);
}
function Sp(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == "function")
    try {
      At.onCommitFiberUnmount(jo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || hr(n, t);
    case 6:
      var r = ye,
        s = gt;
      (ye = null),
        Jt(e, t, n),
        (ye = r),
        (gt = s),
        ye !== null &&
          (gt
            ? ((e = ye),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null &&
        (gt
          ? ((e = ye),
            (n = n.stateNode),
            e.nodeType === 8 ? La(e.parentNode, n) : e.nodeType === 1 && La(e, n),
            Os(e))
          : La(ye, n.stateNode));
      break;
    case 4:
      (r = ye),
        (s = gt),
        (ye = n.stateNode.containerInfo),
        (gt = !0),
        Jt(e, t, n),
        (ye = r),
        (gt = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Re && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          (i = i.tag), o !== void 0 && (i & 2 || i & 4) && ql(n, t, o), (s = s.next);
        } while (s !== r);
      }
      Jt(e, t, n);
      break;
    case 1:
      if (!Re && (hr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          oe(n, t, a);
        }
      Jt(e, t, n);
      break;
    case 21:
      Jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), Jt(e, t, n), (Re = r))
        : Jt(e, t, n);
      break;
    default:
      Jt(e, t, n);
  }
}
function wd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new nv()),
      t.forEach(function (r) {
        var s = fv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ye = a.stateNode), (gt = !1);
              break e;
            case 3:
              (ye = a.stateNode.containerInfo), (gt = !0);
              break e;
            case 4:
              (ye = a.stateNode.containerInfo), (gt = !0);
              break e;
          }
          a = a.return;
        }
        if (ye === null) throw Error(T(160));
        Sp(i, o, s), (ye = null), (gt = !1);
        var l = s.alternate;
        l !== null && (l.return = null), (s.return = null);
      } catch (u) {
        oe(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) xp(t, e), (t = t.sibling);
}
function xp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dt(t, e), Ct(e), r & 4)) {
        try {
          vs(3, e, e.return), Qo(3, e);
        } catch (v) {
          oe(e, e.return, v);
        }
        try {
          vs(5, e, e.return);
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      break;
    case 1:
      dt(t, e), Ct(e), r & 512 && n !== null && hr(n, n.return);
      break;
    case 5:
      if ((dt(t, e), Ct(e), r & 512 && n !== null && hr(n, n.return), e.flags & 32)) {
        var s = e.stateNode;
        try {
          Ps(s, "");
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Bf(s, i), pl(a, o);
            var u = pl(a, i);
            for (o = 0; o < l.length; o += 2) {
              var d = l[o],
                c = l[o + 1];
              d === "style"
                ? Kf(s, c)
                : d === "dangerouslySetInnerHTML"
                  ? Hf(s, c)
                  : d === "children"
                    ? Ps(s, c)
                    : wu(s, d, c, u);
            }
            switch (a) {
              case "input":
                ul(s, i);
                break;
              case "textarea":
                Vf(s, i);
                break;
              case "select":
                var f = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? yr(s, !!i.multiple, y, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? yr(s, !!i.multiple, i.defaultValue, !0)
                      : yr(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Is] = i;
          } catch (v) {
            oe(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((dt(t, e), Ct(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (s = e.stateNode), (i = e.memoizedProps);
        try {
          s.nodeValue = i;
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((dt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Os(t.containerInfo);
        } catch (v) {
          oe(e, e.return, v);
        }
      break;
    case 4:
      dt(t, e), Ct(e);
      break;
    case 13:
      dt(t, e),
        Ct(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i || (s.alternate !== null && s.alternate.memoizedState !== null) || (Yu = le())),
        r & 4 && wd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (u = Re) || d), dt(t, e), (Re = u)) : dt(t, e),
        Ct(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
          for (A = e, d = e.child; d !== null; ) {
            for (c = A = d; A !== null; ) {
              switch (((f = A), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vs(4, f, f.return);
                  break;
                case 1:
                  hr(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (v) {
                      oe(r, n, v);
                    }
                  }
                  break;
                case 5:
                  hr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    xd(c);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (A = y)) : xd(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (s = c.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = c.stateNode),
                      (l = c.memoizedProps.style),
                      (o = l != null && l.hasOwnProperty("display") ? l.display : null),
                      (a.style.display = Wf("display", o)));
              } catch (v) {
                oe(e, e.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (v) {
                oe(e, e.return, v);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) || c.memoizedState === null || c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      dt(t, e), Ct(e), r & 4 && wd(e);
      break;
    case 21:
      break;
    default:
      dt(t, e), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Ps(s, ""), (r.flags &= -33));
          var i = vd(e);
          Vl(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = vd(e);
          Bl(e, a, o);
          break;
        default:
          throw Error(T(161));
      }
    } catch (l) {
      oe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sv(e, t, n) {
  (A = e), kp(e);
}
function kp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var s = A,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || Ci;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Re;
        a = Ci;
        var u = Re;
        if (((Ci = o), (Re = l) && !u))
          for (A = s; A !== null; )
            (o = A),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? kd(s)
                : l !== null
                  ? ((l.return = o), (A = l))
                  : kd(s);
        for (; i !== null; ) (A = i), kp(i), (i = i.sibling);
        (A = s), (Ci = a), (Re = u);
      }
      Sd(e);
    } else s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (A = i)) : Sd(e);
  }
}
function Sd(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || Qo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var s = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && sd(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                sd(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && Os(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        Re || (t.flags & 512 && Ul(t));
      } catch (f) {
        oe(t, t.return, f);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function xd(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function kd(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qo(4, t);
          } catch (l) {
            oe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              oe(t, s, l);
            }
          }
          var i = t.return;
          try {
            Ul(t);
          } catch (l) {
            oe(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ul(t);
          } catch (l) {
            oe(t, o, l);
          }
      }
    } catch (l) {
      oe(t, t.return, l);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var iv = Math.ceil,
  xo = Gt.ReactCurrentDispatcher,
  Ju = Gt.ReactCurrentOwner,
  at = Gt.ReactCurrentBatchConfig,
  B = 0,
  me = null,
  de = null,
  ge = 0,
  Qe = 0,
  pr = Cn(0),
  he = 0,
  Us = null,
  Wn = 0,
  Ho = 0,
  Xu = 0,
  ws = null,
  je = null,
  Yu = 0,
  $r = 1 / 0,
  jt = null,
  ko = !1,
  Ql = null,
  gn = null,
  Ei = !1,
  cn = null,
  _o = 0,
  Ss = 0,
  Hl = null,
  Hi = -1,
  Wi = 0;
function Ae() {
  return B & 6 ? le() : Hi !== -1 ? Hi : (Hi = le());
}
function vn(e) {
  return e.mode & 1
    ? B & 2 && ge !== 0
      ? ge & -ge
      : Ug.transition !== null
        ? (Wi === 0 && (Wi = oh()), Wi)
        : ((e = K), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : hh(e.type))), e)
    : 1;
}
function xt(e, t, n, r) {
  if (50 < Ss) throw ((Ss = 0), (Hl = null), Error(T(185)));
  ei(e, n, r),
    (!(B & 2) || e !== me) &&
      (e === me && (!(B & 2) && (Ho |= n), he === 4 && nn(e, ge)),
      Ue(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && (($r = le() + 500), Uo && En()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  Uy(e, t);
  var r = io(e, e === me ? ge : 0);
  if (r === 0) n !== null && Oc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Oc(n), t === 1))
      e.tag === 0 ? qg(_d.bind(null, e)) : Nh(_d.bind(null, e)),
        jg(function () {
          !(B & 6) && En();
        }),
        (n = null);
    else {
      switch (ah(r)) {
        case 1:
          n = Cu;
          break;
        case 4:
          n = sh;
          break;
        case 16:
          n = so;
          break;
        case 536870912:
          n = ih;
          break;
        default:
          n = so;
      }
      n = Mp(n, _p.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function _p(e, t) {
  if (((Hi = -1), (Wi = 0), B & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (xr() && e.callbackNode !== n) return null;
  var r = io(e, e === me ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Co(e, r);
  else {
    t = r;
    var s = B;
    B |= 2;
    var i = Ep();
    (me !== e || ge !== t) && ((jt = null), ($r = le() + 500), $n(e, t));
    do
      try {
        lv();
        break;
      } catch (a) {
        Cp(e, a);
      }
    while (!0);
    ju(), (xo.current = i), (B = s), de !== null ? (t = 0) : ((me = null), (ge = 0), (t = he));
  }
  if (t !== 0) {
    if ((t === 2 && ((s = wl(e)), s !== 0 && ((r = s), (t = Wl(e, s)))), t === 1))
      throw ((n = Us), $n(e, 0), nn(e, r), Ue(e, le()), n);
    if (t === 6) nn(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !ov(s) &&
          ((t = Co(e, r)), t === 2 && ((i = wl(e)), i !== 0 && ((r = i), (t = Wl(e, i)))), t === 1))
      )
        throw ((n = Us), $n(e, 0), nn(e, r), Ue(e, le()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Pn(e, je, jt);
          break;
        case 3:
          if ((nn(e, r), (r & 130023424) === r && ((t = Yu + 500 - le()), 10 < t))) {
            if (io(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = Pl(Pn.bind(null, e, je, jt), t);
            break;
          }
          Pn(e, je, jt);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - St(r);
            (i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i);
          }
          if (
            ((r = s),
            (r = le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * iv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Pl(Pn.bind(null, e, je, jt), r);
            break;
          }
          Pn(e, je, jt);
          break;
        case 5:
          Pn(e, je, jt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Ue(e, le()), e.callbackNode === n ? _p.bind(null, e) : null;
}
function Wl(e, t) {
  var n = ws;
  return (
    e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256),
    (e = Co(e, t)),
    e !== 2 && ((t = je), (je = n), t !== null && Kl(t)),
    e
  );
}
function Kl(e) {
  je === null ? (je = e) : je.push.apply(je, e);
}
function ov(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!kt(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nn(e, t) {
  for (
    t &= ~Xu, t &= ~Ho, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - St(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function _d(e) {
  if (B & 6) throw Error(T(327));
  xr();
  var t = io(e, 0);
  if (!(t & 1)) return Ue(e, le()), null;
  var n = Co(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wl(e);
    r !== 0 && ((t = r), (n = Wl(e, r)));
  }
  if (n === 1) throw ((n = Us), $n(e, 0), nn(e, t), Ue(e, le()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Pn(e, je, jt), Ue(e, le()), null
  );
}
function Zu(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && (($r = le() + 500), Uo && En());
  }
}
function Kn(e) {
  cn !== null && cn.tag === 0 && !(B & 6) && xr();
  var t = B;
  B |= 1;
  var n = at.transition,
    r = K;
  try {
    if (((at.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (at.transition = n), (B = t), !(B & 6) && En();
  }
}
function ec() {
  (Qe = pr.current), Y(pr);
}
function $n(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ig(n)), de !== null))
    for (n = de.return; n !== null; ) {
      var r = n;
      switch ((bu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && co();
          break;
        case 3:
          jr(), Y(ze), Y(Te), Bu();
          break;
        case 5:
          Uu(r);
          break;
        case 4:
          jr();
          break;
        case 13:
          Y(te);
          break;
        case 19:
          Y(te);
          break;
        case 10:
          Du(r.type._context);
          break;
        case 22:
        case 23:
          ec();
      }
      n = n.return;
    }
  if (
    ((me = e),
    (de = e = wn(e.current, null)),
    (ge = Qe = t),
    (he = 0),
    (Us = null),
    (Xu = Ho = Wn = 0),
    (je = ws = null),
    On !== null)
  ) {
    for (t = 0; t < On.length; t++)
      if (((n = On[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = s), (r.next = o);
        }
        n.pending = r;
      }
    On = null;
  }
  return e;
}
function Cp(e, t) {
  do {
    var n = de;
    try {
      if ((ju(), (Bi.current = So), wo)) {
        for (var r = re.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        wo = !1;
      }
      if (
        ((Hn = 0),
        (pe = fe = re = null),
        (gs = !1),
        ($s = 0),
        (Ju.current = null),
        n === null || n.return === null)
      ) {
        (he = 1), (Us = t), (de = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = ge),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = a,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = cd(o);
          if (y !== null) {
            (y.flags &= -257), dd(y, o, a, i, t), y.mode & 1 && ud(i, u, t), (t = y), (l = u);
            var m = t.updateQueue;
            if (m === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              ud(i, u, t), tc();
              break e;
            }
            l = Error(T(426));
          }
        } else if (ee && a.mode & 1) {
          var w = cd(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), dd(w, o, a, i, t), Fu(Dr(l, a));
            break e;
          }
        }
        (i = l = Dr(l, a)), he !== 4 && (he = 2), ws === null ? (ws = [i]) : ws.push(i), (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = ap(i, l, t);
              rd(i, p);
              break e;
            case 1:
              a = l;
              var h = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (gn === null || !gn.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = lp(i, a, t);
                rd(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Pp(n);
    } catch (k) {
      (t = k), de === n && n !== null && (de = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ep() {
  var e = xo.current;
  return (xo.current = So), e === null ? So : e;
}
function tc() {
  (he === 0 || he === 3 || he === 2) && (he = 4),
    me === null || (!(Wn & 268435455) && !(Ho & 268435455)) || nn(me, ge);
}
function Co(e, t) {
  var n = B;
  B |= 2;
  var r = Ep();
  (me !== e || ge !== t) && ((jt = null), $n(e, t));
  do
    try {
      av();
      break;
    } catch (s) {
      Cp(e, s);
    }
  while (!0);
  if ((ju(), (B = n), (xo.current = r), de !== null)) throw Error(T(261));
  return (me = null), (ge = 0), he;
}
function av() {
  for (; de !== null; ) Rp(de);
}
function lv() {
  for (; de !== null && !Ay(); ) Rp(de);
}
function Rp(e) {
  var t = Lp(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps), t === null ? Pp(e) : (de = t), (Ju.current = null);
}
function Pp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = tv(n, t)), n !== null)) {
        (n.flags &= 32767), (de = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (he = 6), (de = null);
        return;
      }
    } else if (((n = ev(n, t, Qe)), n !== null)) {
      de = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      de = t;
      return;
    }
    de = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function Pn(e, t, n) {
  var r = K,
    s = at.transition;
  try {
    (at.transition = null), (K = 1), uv(e, t, n, r);
  } finally {
    (at.transition = s), (K = r);
  }
  return null;
}
function uv(e, t, n, r) {
  do xr();
  while (cn !== null);
  if (B & 6) throw Error(T(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (By(e, i),
    e === me && ((de = me = null), (ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ei ||
      ((Ei = !0),
      Mp(so, function () {
        return xr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = at.transition), (at.transition = null);
    var o = K;
    K = 1;
    var a = B;
    (B |= 4),
      (Ju.current = null),
      rv(e, n),
      xp(n, e),
      Lg(El),
      (oo = !!Cl),
      (El = Cl = null),
      (e.current = n),
      sv(n),
      by(),
      (B = a),
      (K = o),
      (at.transition = i);
  } else e.current = n;
  if (
    (Ei && ((Ei = !1), (cn = e), (_o = s)),
    (i = e.pendingLanes),
    i === 0 && (gn = null),
    jy(n.stateNode),
    Ue(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (ko) throw ((ko = !1), (e = Ql), (Ql = null), e);
  return (
    _o & 1 && e.tag !== 0 && xr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Hl ? Ss++ : ((Ss = 0), (Hl = e))) : (Ss = 0),
    En(),
    null
  );
}
function xr() {
  if (cn !== null) {
    var e = ah(_o),
      t = at.transition,
      n = K;
    try {
      if (((at.transition = null), (K = 16 > e ? 16 : e), cn === null)) var r = !1;
      else {
        if (((e = cn), (cn = null), (_o = 0), B & 6)) throw Error(T(331));
        var s = B;
        for (B |= 4, A = e.current; A !== null; ) {
          var i = A,
            o = i.child;
          if (A.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (A = u; A !== null; ) {
                  var d = A;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vs(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (A = c);
                  else
                    for (; A !== null; ) {
                      d = A;
                      var f = d.sibling,
                        y = d.return;
                      if ((vp(d), d === u)) {
                        A = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = y), (A = f);
                        break;
                      }
                      A = y;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var v = m.child;
                if (v !== null) {
                  m.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              A = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (A = o);
          else
            e: for (; A !== null; ) {
              if (((i = A), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vs(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (A = p);
                break e;
              }
              A = i.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          o = A;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (A = g);
          else
            e: for (o = h; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qo(9, a);
                  }
                } catch (k) {
                  oe(a, a.return, k);
                }
              if (a === o) {
                A = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (A = S);
                break e;
              }
              A = a.return;
            }
        }
        if (((B = s), En(), At && typeof At.onPostCommitFiberRoot == "function"))
          try {
            At.onPostCommitFiberRoot(jo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (at.transition = t);
    }
  }
  return !1;
}
function Cd(e, t, n) {
  (t = Dr(n, t)),
    (t = ap(e, t, 1)),
    (e = yn(e, t, 1)),
    (t = Ae()),
    e !== null && (ei(e, 1, t), Ue(e, t));
}
function oe(e, t, n) {
  if (e.tag === 3) Cd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Cd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (gn === null || !gn.has(r)))
        ) {
          (e = Dr(n, e)),
            (e = lp(t, e, 1)),
            (t = yn(t, e, 1)),
            (e = Ae()),
            t !== null && (ei(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function cv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    me === e &&
      (ge & n) === n &&
      (he === 4 || (he === 3 && (ge & 130023424) === ge && 500 > le() - Yu) ? $n(e, 0) : (Xu |= n)),
    Ue(e, t);
}
function Tp(e, t) {
  t === 0 && (e.mode & 1 ? ((t = mi), (mi <<= 1), !(mi & 130023424) && (mi = 4194304)) : (t = 1));
  var n = Ae();
  (e = Wt(e, t)), e !== null && (ei(e, t, n), Ue(e, n));
}
function dv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Tp(e, n);
}
function fv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Tp(e, n);
}
var Lp;
Lp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) De = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (De = !1), Zg(e, t, n);
      De = !!(e.flags & 131072);
    }
  else (De = !1), ee && t.flags & 1048576 && Ah(t, po, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qi(e, t), (e = t.pendingProps);
      var s = br(t, Te.current);
      Sr(t, n), (s = Qu(null, t, r, e, s, n));
      var i = Hu();
      return (
        (t.flags |= 1),
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((i = !0), fo(t)) : (i = !1),
            (t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
            zu(t),
            (s.updater = Vo),
            (t.stateNode = s),
            (s._reactInternals = t),
            bl(t, r, e, n),
            (t = jl(null, t, r, !0, i, n)))
          : ((t.tag = 0), ee && i && Au(t), Oe(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qi(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = pv(r)),
          (e = ht(r, e)),
          s)
        ) {
          case 0:
            t = Il(null, t, r, e, n);
            break e;
          case 1:
            t = pd(null, t, r, e, n);
            break e;
          case 11:
            t = fd(null, t, r, e, n);
            break e;
          case 14:
            t = hd(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ht(r, s)),
        Il(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ht(r, s)),
        pd(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((fp(t), e === null)) throw Error(T(387));
        (r = t.pendingProps), (i = t.memoizedState), (s = i.element), $h(e, t), go(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (s = Dr(Error(T(423)), t)), (t = md(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = Dr(Error(T(424)), t)), (t = md(e, t, r, n, s));
            break e;
          } else
            for (
              Ge = mn(t.stateNode.containerInfo.firstChild),
                Je = t,
                ee = !0,
                wt = null,
                n = jh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Fr(), r === s)) {
            t = Kt(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zh(t),
        e === null && Ol(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        Rl(r, s) ? (o = null) : i !== null && Rl(r, i) && (t.flags |= 32),
        dp(e, t),
        Oe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ol(t), null;
    case 13:
      return hp(e, t, n);
    case 4:
      return (
        qu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ir(t, null, r, n)) : Oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ht(r, s)),
        fd(e, t, r, s, n)
      );
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          J(mo, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (kt(i.value, o)) {
            if (i.children === s.children && !ze.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Bt(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Nl(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(T(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Nl(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Oe(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Sr(t, n),
        (s = ut(s)),
        (r = r(s)),
        (t.flags |= 1),
        Oe(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (s = ht(r, t.pendingProps)), (s = ht(r.type, s)), hd(e, t, r, s, n);
    case 15:
      return up(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ht(r, s)),
        Qi(e, t),
        (t.tag = 1),
        qe(r) ? ((e = !0), fo(t)) : (e = !1),
        Sr(t, n),
        op(t, r, s),
        bl(t, r, s, n),
        jl(null, t, r, !0, e, n)
      );
    case 19:
      return pp(e, t, n);
    case 22:
      return cp(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Mp(e, t) {
  return rh(e, t);
}
function hv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ot(e, t, n, r) {
  return new hv(e, t, n, r);
}
function nc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function pv(e) {
  if (typeof e == "function") return nc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === xu)) return 11;
    if (e === ku) return 14;
  }
  return 2;
}
function wn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ot(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ki(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) nc(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case sr:
        return zn(n.children, s, i, t);
      case Su:
        (o = 8), (s |= 8);
        break;
      case sl:
        return (e = ot(12, n, t, s | 2)), (e.elementType = sl), (e.lanes = i), e;
      case il:
        return (e = ot(13, n, t, s)), (e.elementType = il), (e.lanes = i), e;
      case ol:
        return (e = ot(19, n, t, s)), (e.elementType = ol), (e.lanes = i), e;
      case zf:
        return Wo(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Df:
              o = 10;
              break e;
            case $f:
              o = 9;
              break e;
            case xu:
              o = 11;
              break e;
            case ku:
              o = 14;
              break e;
            case Zt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (t = ot(o, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function zn(e, t, n, r) {
  return (e = ot(7, e, r, t)), (e.lanes = n), e;
}
function Wo(e, t, n, r) {
  return (
    (e = ot(22, e, r, t)), (e.elementType = zf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
  );
}
function ja(e, t, n) {
  return (e = ot(6, e, null, t)), (e.lanes = n), e;
}
function Da(e, t, n) {
  return (
    (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function mv(e, t, n, r, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = va(0)),
    (this.expirationTimes = va(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = va(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function rc(e, t, n, r, s, i, o, a, l) {
  return (
    (e = new mv(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ot(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zu(i),
    e
  );
}
function yv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: rr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Op(e) {
  if (!e) return xn;
  e = e._reactInternals;
  e: {
    if (Xn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return Oh(e, n, t);
  }
  return t;
}
function Np(e, t, n, r, s, i, o, a, l) {
  return (
    (e = rc(n, r, !0, e, s, i, o, a, l)),
    (e.context = Op(null)),
    (n = e.current),
    (r = Ae()),
    (s = vn(n)),
    (i = Bt(r, s)),
    (i.callback = t ?? null),
    yn(n, i, s),
    (e.current.lanes = s),
    ei(e, s, r),
    Ue(e, r),
    e
  );
}
function Ko(e, t, n, r) {
  var s = t.current,
    i = Ae(),
    o = vn(s);
  return (
    (n = Op(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Bt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = yn(s, t, o)),
    e !== null && (xt(e, s, o, i), Ui(e, s, o)),
    o
  );
}
function Eo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ed(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sc(e, t) {
  Ed(e, t), (e = e.alternate) && Ed(e, t);
}
function gv() {
  return null;
}
var Ap =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ic(e) {
  this._internalRoot = e;
}
Go.prototype.render = ic.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Ko(e, t, null, null);
};
Go.prototype.unmount = ic.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kn(function () {
      Ko(null, e, null, null);
    }),
      (t[Ht] = null);
  }
};
function Go(e) {
  this._internalRoot = e;
}
Go.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ch();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++);
    tn.splice(n, 0, e), n === 0 && fh(e);
  }
};
function oc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Jo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Rd() {}
function vv(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Eo(o);
        i.call(u);
      };
    }
    var o = Np(t, r, e, 0, null, !1, !1, "", Rd);
    return (
      (e._reactRootContainer = o),
      (e[Ht] = o.current),
      bs(e.nodeType === 8 ? e.parentNode : e),
      Kn(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Eo(l);
      a.call(u);
    };
  }
  var l = rc(e, 0, !1, null, null, !1, !1, "", Rd);
  return (
    (e._reactRootContainer = l),
    (e[Ht] = l.current),
    bs(e.nodeType === 8 ? e.parentNode : e),
    Kn(function () {
      Ko(t, l, n, r);
    }),
    l
  );
}
function Xo(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = Eo(o);
        a.call(l);
      };
    }
    Ko(t, o, e, s);
  } else o = vv(n, t, e, s, r);
  return Eo(o);
}
lh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ls(t.pendingLanes);
        n !== 0 && (Eu(t, n | 1), Ue(t, le()), !(B & 6) && (($r = le() + 500), En()));
      }
      break;
    case 13:
      Kn(function () {
        var r = Wt(e, 1);
        if (r !== null) {
          var s = Ae();
          xt(r, e, 1, s);
        }
      }),
        sc(e, 1);
  }
};
Ru = function (e) {
  if (e.tag === 13) {
    var t = Wt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      xt(t, e, 134217728, n);
    }
    sc(e, 134217728);
  }
};
uh = function (e) {
  if (e.tag === 13) {
    var t = vn(e),
      n = Wt(e, t);
    if (n !== null) {
      var r = Ae();
      xt(n, e, t, r);
    }
    sc(e, t);
  }
};
ch = function () {
  return K;
};
dh = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
yl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ul(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = qo(r);
            if (!s) throw Error(T(90));
            Uf(r), ul(r, s);
          }
        }
      }
      break;
    case "textarea":
      Vf(e, n);
      break;
    case "select":
      (t = n.value), t != null && yr(e, !!n.multiple, t, !1);
  }
};
Xf = Zu;
Yf = Kn;
var wv = { usingClientEntryPoint: !1, Events: [ni, lr, qo, Gf, Jf, Zu] },
  rs = {
    findFiberByHostInstance: Mn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Sv = {
    bundleType: rs.bundleType,
    version: rs.version,
    rendererPackageName: rs.rendererPackageName,
    rendererConfig: rs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = th(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: rs.findFiberByHostInstance || gv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ri.isDisabled && Ri.supportsFiber)
    try {
      (jo = Ri.inject(Sv)), (At = Ri);
    } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wv;
Ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oc(t)) throw Error(T(200));
  return yv(e, t, null, n);
};
Ze.createRoot = function (e, t) {
  if (!oc(e)) throw Error(T(299));
  var n = !1,
    r = "",
    s = Ap;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = rc(e, 1, !1, null, null, n, !1, r, s)),
    (e[Ht] = t.current),
    bs(e.nodeType === 8 ? e.parentNode : e),
    new ic(t)
  );
};
Ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = th(t)), (e = e === null ? null : e.stateNode), e;
};
Ze.flushSync = function (e) {
  return Kn(e);
};
Ze.hydrate = function (e, t, n) {
  if (!Jo(t)) throw Error(T(200));
  return Xo(null, e, t, !0, n);
};
Ze.hydrateRoot = function (e, t, n) {
  if (!oc(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = Ap;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Np(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[Ht] = t.current),
    bs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new Go(t);
};
Ze.render = function (e, t, n) {
  if (!Jo(t)) throw Error(T(200));
  return Xo(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function (e) {
  if (!Jo(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (Kn(function () {
        Xo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ht] = null);
        });
      }),
      !0)
    : !1;
};
Ze.unstable_batchedUpdates = Zu;
Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Jo(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Xo(e, t, n, !1, r);
};
Ze.version = "18.3.1-next-f1338f8080-20240426";
function bp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bp);
    } catch (e) {
      console.error(e);
    }
}
bp(), (bf.exports = Ze);
var Fp = bf.exports;
const Ip = kf(Fp);
var jp,
  Pd = Fp;
(jp = Pd.createRoot), Pd.hydrateRoot;
const qn = "__TSR_index",
  Td = "popstate",
  Ld = "beforeunload";
function Dp(e) {
  let t = e.getLocation();
  const n = new Set(),
    r = (o) => {
      (t = e.getLocation()), n.forEach((a) => a({ location: t, action: o }));
    },
    s = (o) => {
      (e.notifyOnIndexChange ?? !0) ? r(o) : (t = e.getLocation());
    },
    i = async ({ task: o, navigateOpts: a, ...l }) => {
      var u, d;
      if ((a == null ? void 0 : a.ignoreBlocker) ?? !1) {
        o();
        return;
      }
      const f = ((u = e.getBlockers) == null ? void 0 : u.call(e)) ?? [],
        y = l.type === "PUSH" || l.type === "REPLACE";
      if (typeof document < "u" && f.length && y)
        for (const m of f) {
          const v = Bs(l.path, l.state);
          if (await m.blockerFn({ currentLocation: t, nextLocation: v, action: l.type })) {
            (d = e.onBlocked) == null || d.call(e);
            return;
          }
        }
      o();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (o) => (
      n.add(o),
      () => {
        n.delete(o);
      }
    ),
    push: (o, a, l) => {
      const u = t.state[qn];
      (a = Gl(u + 1, a)),
        i({
          task: () => {
            e.pushState(o, a), r({ type: "PUSH" });
          },
          navigateOpts: l,
          type: "PUSH",
          path: o,
          state: a,
        });
    },
    replace: (o, a, l) => {
      const u = t.state[qn];
      (a = Gl(u, a)),
        i({
          task: () => {
            e.replaceState(o, a), r({ type: "REPLACE" });
          },
          navigateOpts: l,
          type: "REPLACE",
          path: o,
          state: a,
        });
    },
    go: (o, a) => {
      i({
        task: () => {
          e.go(o), s({ type: "GO", index: o });
        },
        navigateOpts: a,
        type: "GO",
      });
    },
    back: (o) => {
      i({
        task: () => {
          e.back((o == null ? void 0 : o.ignoreBlocker) ?? !1), s({ type: "BACK" });
        },
        navigateOpts: o,
        type: "BACK",
      });
    },
    forward: (o) => {
      i({
        task: () => {
          e.forward((o == null ? void 0 : o.ignoreBlocker) ?? !1), s({ type: "FORWARD" });
        },
        navigateOpts: o,
        type: "FORWARD",
      });
    },
    canGoBack: () => t.state[qn] !== 0,
    createHref: (o) => e.createHref(o),
    block: (o) => {
      var a;
      if (!e.setBlockers) return () => {};
      const l = ((a = e.getBlockers) == null ? void 0 : a.call(e)) ?? [];
      return (
        e.setBlockers([...l, o]),
        () => {
          var u, d;
          const c = ((u = e.getBlockers) == null ? void 0 : u.call(e)) ?? [];
          (d = e.setBlockers) == null ||
            d.call(
              e,
              c.filter((f) => f !== o)
            );
        }
      );
    },
    flush: () => {
      var o;
      return (o = e.flush) == null ? void 0 : o.call(e);
    },
    destroy: () => {
      var o;
      return (o = e.destroy) == null ? void 0 : o.call(e);
    },
    notify: r,
  };
}
function Gl(e, t) {
  return t || (t = {}), { ...t, key: _v(), [qn]: e };
}
function xv(e) {
  const t = typeof document < "u" ? window : void 0,
    n = t.history.pushState,
    r = t.history.replaceState;
  let s = [];
  const i = () => s,
    o = (_) => (s = _),
    a = (_) => _,
    l = () => Bs(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state);
  let u = l(),
    d,
    c = !1,
    f = !1,
    y = !1,
    m = !1;
  const v = () => u;
  let w, p;
  const h = () => {
      w &&
        ((C._ignoreSubscribers = !0),
        (w.isPush ? t.history.pushState : t.history.replaceState)(w.state, "", w.href),
        (C._ignoreSubscribers = !1),
        (w = void 0),
        (p = void 0),
        (d = void 0));
    },
    g = (_, L, N) => {
      const M = a(L);
      p || (d = u),
        (u = Bs(L, N)),
        (w = { href: M, state: N, isPush: (w == null ? void 0 : w.isPush) || _ === "push" }),
        p || (p = Promise.resolve().then(() => h()));
    },
    S = (_) => {
      (u = l()), C.notify({ type: _ });
    },
    k = async () => {
      if (f) {
        f = !1;
        return;
      }
      const _ = l(),
        L = _.state[qn] - u.state[qn],
        N = L === 1,
        M = L === -1,
        b = (!N && !M) || c;
      c = !1;
      const j = b ? "GO" : M ? "BACK" : "FORWARD",
        Q = b ? { type: "GO", index: L } : { type: M ? "BACK" : "FORWARD" };
      if (y) y = !1;
      else {
        const V = i();
        if (typeof document < "u" && V.length) {
          for (const G of V)
            if (await G.blockerFn({ currentLocation: u, nextLocation: _, action: j })) {
              (f = !0), t.history.go(1), C.notify(Q);
              return;
            }
        }
      }
      (u = l()), C.notify(Q);
    },
    R = (_) => {
      if (m) {
        m = !1;
        return;
      }
      let L = !1;
      const N = i();
      if (typeof document < "u" && N.length)
        for (const M of N) {
          const b = M.enableBeforeUnload ?? !0;
          if (b === !0) {
            L = !0;
            break;
          }
          if (typeof b == "function" && b() === !0) {
            L = !0;
            break;
          }
        }
      if (L) return _.preventDefault(), (_.returnValue = "");
    },
    C = Dp({
      getLocation: v,
      getLength: () => t.history.length,
      pushState: (_, L) => g("push", _, L),
      replaceState: (_, L) => g("replace", _, L),
      back: (_) => (_ && (y = !0), (m = !0), t.history.back()),
      forward: (_) => {
        _ && (y = !0), (m = !0), t.history.forward();
      },
      go: (_) => {
        (c = !0), t.history.go(_);
      },
      createHref: (_) => a(_),
      flush: h,
      destroy: () => {
        (t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(Ld, R, { capture: !0 }),
          t.removeEventListener(Td, k);
      },
      onBlocked: () => {
        d && u !== d && (u = d);
      },
      getBlockers: i,
      setBlockers: o,
      notifyOnIndexChange: !1,
    });
  return (
    t.addEventListener(Ld, R, { capture: !0 }),
    t.addEventListener(Td, k),
    (t.history.pushState = function (..._) {
      const L = n.apply(t.history, _);
      return C._ignoreSubscribers || S("PUSH"), L;
    }),
    (t.history.replaceState = function (..._) {
      const L = r.apply(t.history, _);
      return C._ignoreSubscribers || S("REPLACE"), L;
    }),
    C
  );
}
function kv(e = { initialEntries: ["/"] }) {
  const t = e.initialEntries;
  let n = e.initialIndex ? Math.min(Math.max(e.initialIndex, 0), t.length - 1) : t.length - 1;
  const r = t.map((i, o) => Gl(o, void 0));
  return Dp({
    getLocation: () => Bs(t[n], r[n]),
    getLength: () => t.length,
    pushState: (i, o) => {
      n < t.length - 1 && (t.splice(n + 1), r.splice(n + 1)),
        r.push(o),
        t.push(i),
        (n = Math.max(t.length - 1, 0));
    },
    replaceState: (i, o) => {
      (r[n] = o), (t[n] = i);
    },
    back: () => {
      n = Math.max(n - 1, 0);
    },
    forward: () => {
      n = Math.min(n + 1, t.length - 1);
    },
    go: (i) => {
      n = Math.min(Math.max(n + i, 0), t.length - 1);
    },
    createHref: (i) => i,
  });
}
function Bs(e, t) {
  const n = e.indexOf("#"),
    r = e.indexOf("?");
  return {
    href: e,
    pathname: e.substring(0, n > 0 ? (r > 0 ? Math.min(n, r) : n) : r > 0 ? r : e.length),
    hash: n > -1 ? e.substring(n) : "",
    search: r > -1 ? e.slice(r, n === -1 ? void 0 : n) : "",
    state: t || { [qn]: 0 },
  };
}
function _v() {
  return (Math.random() + 1).toString(36).substring(7);
}
var Cv = "Invariant failed";
function Ke(e, t) {
  if (!e) throw new Error(Cv);
}
const $a = F.createContext(null);
function $p() {
  return typeof document > "u"
    ? $a
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = $a), $a);
}
function Yn(e) {
  const t = F.useContext($p());
  return e == null || e.warn, t;
}
var zp = { exports: {} },
  qp = {},
  Up = { exports: {} },
  Bp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zr = F;
function Ev(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rv = typeof Object.is == "function" ? Object.is : Ev,
  Pv = zr.useState,
  Tv = zr.useEffect,
  Lv = zr.useLayoutEffect,
  Mv = zr.useDebugValue;
function Ov(e, t) {
  var n = t(),
    r = Pv({ inst: { value: n, getSnapshot: t } }),
    s = r[0].inst,
    i = r[1];
  return (
    Lv(
      function () {
        (s.value = n), (s.getSnapshot = t), za(s) && i({ inst: s });
      },
      [e, n, t]
    ),
    Tv(
      function () {
        return (
          za(s) && i({ inst: s }),
          e(function () {
            za(s) && i({ inst: s });
          })
        );
      },
      [e]
    ),
    Mv(n),
    n
  );
}
function za(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rv(e, n);
  } catch {
    return !0;
  }
}
function Nv(e, t) {
  return t();
}
var Av =
  typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"
    ? Nv
    : Ov;
Bp.useSyncExternalStore = zr.useSyncExternalStore !== void 0 ? zr.useSyncExternalStore : Av;
Up.exports = Bp;
var bv = Up.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yo = F,
  Fv = bv;
function Iv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jv = typeof Object.is == "function" ? Object.is : Iv,
  Dv = Fv.useSyncExternalStore,
  $v = Yo.useRef,
  zv = Yo.useEffect,
  qv = Yo.useMemo,
  Uv = Yo.useDebugValue;
qp.useSyncExternalStoreWithSelector = function (e, t, n, r, s) {
  var i = $v(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = qv(
    function () {
      function l(y) {
        if (!u) {
          if (((u = !0), (d = y), (y = r(y)), s !== void 0 && o.hasValue)) {
            var m = o.value;
            if (s(m, y)) return (c = m);
          }
          return (c = y);
        }
        if (((m = c), jv(d, y))) return m;
        var v = r(y);
        return s !== void 0 && s(m, v) ? ((d = y), m) : ((d = y), (c = v));
      }
      var u = !1,
        d,
        c,
        f = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        f === null
          ? void 0
          : function () {
              return l(f());
            },
      ];
    },
    [t, n, r, s]
  );
  var a = Dv(e, i[0], i[1]);
  return (
    zv(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    Uv(a),
    a
  );
};
zp.exports = qp;
var Bv = zp.exports;
const kr = new WeakMap(),
  Gi = new WeakMap(),
  Ro = { current: [] };
let qa = !1,
  xs = 0;
const cs = new Set(),
  Pi = new Map();
function Vp(e) {
  const t = Array.from(e).sort((n, r) =>
    n instanceof _r && n.options.deps.includes(r)
      ? 1
      : r instanceof _r && r.options.deps.includes(n)
        ? -1
        : 0
  );
  for (const n of t) {
    if (Ro.current.includes(n)) continue;
    Ro.current.push(n), n.recompute();
    const r = Gi.get(n);
    if (r)
      for (const s of r) {
        const i = kr.get(s);
        i && Vp(i);
      }
  }
}
function Vv(e) {
  e.listeners.forEach((t) => t({ prevVal: e.prevState, currentVal: e.state }));
}
function Qv(e) {
  e.listeners.forEach((t) => t({ prevVal: e.prevState, currentVal: e.state }));
}
function Qp(e) {
  if ((xs > 0 && !Pi.has(e) && Pi.set(e, e.prevState), cs.add(e), !(xs > 0) && !qa))
    try {
      for (qa = !0; cs.size > 0; ) {
        const t = Array.from(cs);
        cs.clear();
        for (const n of t) {
          const r = Pi.get(n) ?? n.prevState;
          (n.prevState = r), Vv(n);
        }
        for (const n of t) {
          const r = kr.get(n);
          r && (Ro.current.push(n), Vp(r));
        }
        for (const n of t) {
          const r = kr.get(n);
          if (r) for (const s of r) Qv(s);
        }
      }
    } finally {
      (qa = !1), (Ro.current = []), Pi.clear();
    }
}
function Ua(e) {
  xs++;
  try {
    e();
  } finally {
    if ((xs--, xs === 0)) {
      const t = Array.from(cs)[0];
      t && Qp(t);
    }
  }
}
class Jl {
  constructor(t, n) {
    (this.listeners = new Set()),
      (this.subscribe = (r) => {
        var s, i;
        this.listeners.add(r);
        const o =
          (i = (s = this.options) == null ? void 0 : s.onSubscribe) == null
            ? void 0
            : i.call(s, r, this);
        return () => {
          this.listeners.delete(r), o == null || o();
        };
      }),
      (this.setState = (r) => {
        var s, i, o;
        (this.prevState = this.state),
          (this.state =
            (s = this.options) != null && s.updateFn
              ? this.options.updateFn(this.prevState)(r)
              : r(this.prevState)),
          (o = (i = this.options) == null ? void 0 : i.onUpdate) == null || o.call(i),
          Qp(this);
      }),
      (this.prevState = t),
      (this.state = t),
      (this.options = n);
  }
}
class _r {
  constructor(t) {
    (this.listeners = new Set()),
      (this._subscriptions = []),
      (this.lastSeenDepValues = []),
      (this.getDepVals = () => {
        const n = [],
          r = [];
        for (const s of this.options.deps) n.push(s.prevState), r.push(s.state);
        return (
          (this.lastSeenDepValues = r),
          { prevDepVals: n, currDepVals: r, prevVal: this.prevState ?? void 0 }
        );
      }),
      (this.recompute = () => {
        var n, r;
        this.prevState = this.state;
        const { prevDepVals: s, currDepVals: i, prevVal: o } = this.getDepVals();
        (this.state = this.options.fn({ prevDepVals: s, currDepVals: i, prevVal: o })),
          (r = (n = this.options).onUpdate) == null || r.call(n);
      }),
      (this.checkIfRecalculationNeededDeeply = () => {
        for (const i of this.options.deps) i instanceof _r && i.checkIfRecalculationNeededDeeply();
        let n = !1;
        const r = this.lastSeenDepValues,
          { currDepVals: s } = this.getDepVals();
        for (let i = 0; i < s.length; i++)
          if (s[i] !== r[i]) {
            n = !0;
            break;
          }
        n && this.recompute();
      }),
      (this.mount = () => (
        this.registerOnGraph(),
        this.checkIfRecalculationNeededDeeply(),
        () => {
          this.unregisterFromGraph();
          for (const n of this._subscriptions) n();
        }
      )),
      (this.subscribe = (n) => {
        var r, s;
        this.listeners.add(n);
        const i = (s = (r = this.options).onSubscribe) == null ? void 0 : s.call(r, n, this);
        return () => {
          this.listeners.delete(n), i == null || i();
        };
      }),
      (this.options = t),
      (this.state = t.fn({
        prevDepVals: void 0,
        prevVal: void 0,
        currDepVals: this.getDepVals().currDepVals,
      }));
  }
  registerOnGraph(t = this.options.deps) {
    for (const n of t)
      if (n instanceof _r) n.registerOnGraph(), this.registerOnGraph(n.options.deps);
      else if (n instanceof Jl) {
        let r = kr.get(n);
        r || ((r = new Set()), kr.set(n, r)), r.add(this);
        let s = Gi.get(this);
        s || ((s = new Set()), Gi.set(this, s)), s.add(n);
      }
  }
  unregisterFromGraph(t = this.options.deps) {
    for (const n of t)
      if (n instanceof _r) this.unregisterFromGraph(n.options.deps);
      else if (n instanceof Jl) {
        const r = kr.get(n);
        r && r.delete(this);
        const s = Gi.get(this);
        s && s.delete(n);
      }
  }
}
function Hv(e, t = (n) => n) {
  return Bv.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    Wv
  );
}
function Wv(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, s] of e) if (!t.has(r) || !Object.is(s, t.get(r))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e) if (!t.has(r)) return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
  return !0;
}
const Hp = {},
  Kv = Hp.hasOwnProperty,
  Wp = (e, t) => {
    for (const n in e) Kv.call(e, n) && t(n, e[n]);
  },
  Gv = (e, t) => (
    t &&
      Wp(t, (n, r) => {
        e[n] = r;
      }),
    e
  ),
  Jv = (e, t) => {
    const n = e.length;
    let r = -1;
    for (; ++r < n; ) t(e[r]);
  },
  Ti = (e) => "\\u" + ("0000" + e).slice(-4),
  ss = (e, t) => {
    let n = e.toString(16);
    return t ? n : n.toUpperCase();
  },
  si = Hp.toString,
  Xv = Array.isArray,
  Yv = (e) => typeof Buffer == "function" && Buffer.isBuffer(e),
  Zv = (e) => si.call(e) == "[object Object]",
  e0 = (e) => typeof e == "string" || si.call(e) == "[object String]",
  t0 = (e) => typeof e == "number" || si.call(e) == "[object Number]",
  n0 = (e) => typeof e == "function",
  r0 = (e) => si.call(e) == "[object Map]",
  s0 = (e) => si.call(e) == "[object Set]",
  i0 = { "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" },
  o0 = /[\\\b\f\n\r\t]/,
  a0 = /[0-9]/,
  l0 = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
  u0 = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,
  c0 = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,
  Tn = (e, t) => {
    const n = () => {
        (u = l), ++t.indentLevel, (l = t.indent.repeat(t.indentLevel));
      },
      r = {
        escapeEverything: !1,
        minimal: !1,
        isScriptContext: !1,
        quotes: "single",
        wrap: !1,
        es6: !1,
        json: !1,
        compact: !0,
        lowercaseHex: !1,
        numbers: "decimal",
        indent: "	",
        indentLevel: 0,
        __inline1__: !1,
        __inline2__: !1,
      },
      s = t && t.json;
    s && ((r.quotes = "double"), (r.wrap = !0)),
      (t = Gv(r, t)),
      t.quotes != "single" &&
        t.quotes != "double" &&
        t.quotes != "backtick" &&
        (t.quotes = "single");
    const i = t.quotes == "double" ? '"' : t.quotes == "backtick" ? "`" : "'",
      o = t.compact,
      a = t.lowercaseHex;
    let l = t.indent.repeat(t.indentLevel),
      u = "";
    const d = t.__inline1__,
      c = t.__inline2__,
      f = o
        ? ""
        : `
`;
    let y,
      m = !0;
    const v = t.numbers == "binary",
      w = t.numbers == "octal",
      p = t.numbers == "decimal",
      h = t.numbers == "hexadecimal";
    if ((s && e && n0(e.toJSON) && (e = e.toJSON()), !e0(e))) {
      if (r0(e))
        return e.size == 0
          ? "new Map()"
          : (o || ((t.__inline1__ = !0), (t.__inline2__ = !1)),
            "new Map(" + Tn(Array.from(e), t) + ")");
      if (s0(e)) return e.size == 0 ? "new Set()" : "new Set(" + Tn(Array.from(e), t) + ")";
      if (Yv(e))
        return e.length == 0 ? "Buffer.from([])" : "Buffer.from(" + Tn(Array.from(e), t) + ")";
      if (Xv(e))
        return (
          (y = []),
          (t.wrap = !0),
          d && ((t.__inline1__ = !1), (t.__inline2__ = !0)),
          c || n(),
          Jv(e, (S) => {
            (m = !1), c && (t.__inline2__ = !1), y.push((o || c ? "" : l) + Tn(S, t));
          }),
          m
            ? "[]"
            : c
              ? "[" + y.join(", ") + "]"
              : "[" + f + y.join("," + f) + f + (o ? "" : u) + "]"
        );
      if (t0(e)) {
        if (s) return JSON.stringify(e);
        if (p) return String(e);
        if (h) {
          let S = e.toString(16);
          return a || (S = S.toUpperCase()), "0x" + S;
        }
        if (v) return "0b" + e.toString(2);
        if (w) return "0o" + e.toString(8);
      } else
        return Zv(e)
          ? ((y = []),
            (t.wrap = !0),
            n(),
            Wp(e, (S, k) => {
              (m = !1), y.push((o ? "" : l) + Tn(S, t) + ":" + (o ? "" : " ") + Tn(k, t));
            }),
            m ? "{}" : "{" + f + y.join("," + f) + f + (o ? "" : u) + "}")
          : s
            ? JSON.stringify(e) || "null"
            : String(e);
    }
    const g = t.escapeEverything ? u0 : c0;
    return (
      (y = e.replace(g, (S, k, R, C, _, L) => {
        if (k) {
          if (t.minimal) return k;
          const M = k.charCodeAt(0),
            b = k.charCodeAt(1);
          if (t.es6) {
            const j = (M - 55296) * 1024 + b - 56320 + 65536;
            return "\\u{" + ss(j, a) + "}";
          }
          return Ti(ss(M, a)) + Ti(ss(b, a));
        }
        if (R) return Ti(ss(R.charCodeAt(0), a));
        if (S == "\0" && !s && !a0.test(L.charAt(_ + 1))) return "\\0";
        if (C) return C == i || t.escapeEverything ? "\\" + C : C;
        if (o0.test(S)) return i0[S];
        if (t.minimal && !l0.test(S)) return S;
        const N = ss(S.charCodeAt(0), a);
        return s || N.length > 2 ? Ti(N) : "\\x" + ("00" + N).slice(-2);
      })),
      i == "`" && (y = y.replace(/\$\{/g, "\\${")),
      t.isScriptContext &&
        (y = y
          .replace(/<\/(script|style)/gi, "<\\/$1")
          .replace(/<!--/g, s ? "\\u003C!--" : "\\x3C!--")),
      t.wrap && (y = i + y + i),
      y
    );
  };
Tn.version = "3.0.2";
const We = "__root__";
function d0(e, t) {
  let n,
    r,
    s,
    i = "";
  for (n in e)
    if ((s = e[n]) !== void 0)
      if (Array.isArray(s))
        for (r = 0; r < s.length; r++)
          i && (i += "&"), (i += encodeURIComponent(n) + "=" + encodeURIComponent(s[r]));
      else i && (i += "&"), (i += encodeURIComponent(n) + "=" + encodeURIComponent(s));
  return "" + i;
}
function Md(e) {
  if (!e) return "";
  const t = decodeURIComponent(e);
  return t === "false" ? !1 : t === "true" ? !0 : +t * 0 === 0 && +t + "" === t ? +t : t;
}
function f0(e, t) {
  let n, r;
  const s = {},
    i = e.split("&");
  for (; (n = i.shift()); ) {
    const o = n.indexOf("=");
    if (o !== -1) {
      (r = n.slice(0, o)), (r = decodeURIComponent(r));
      const a = n.slice(o + 1);
      s[r] !== void 0 ? (s[r] = [].concat(s[r], Md(a))) : (s[r] = Md(a));
    } else (r = n), (r = decodeURIComponent(r)), (s[r] = "");
  }
  return s;
}
const h0 = m0(JSON.parse),
  p0 = y0(JSON.stringify, JSON.parse);
function m0(e) {
  return (t) => {
    t.substring(0, 1) === "?" && (t = t.substring(1));
    const n = f0(t);
    for (const r in n) {
      const s = n[r];
      if (typeof s == "string")
        try {
          n[r] = e(s);
        } catch {}
    }
    return n;
  };
}
function y0(e, t) {
  function n(r) {
    if (typeof r == "object" && r !== null)
      try {
        return e(r);
      } catch {}
    else if (typeof r == "string" && typeof t == "function")
      try {
        return t(r), e(r);
      } catch {}
    return r;
  }
  return (r) => {
    (r = { ...r }),
      Object.keys(r).forEach((i) => {
        const o = r[i];
        typeof o > "u" || o === void 0 ? delete r[i] : (r[i] = n(o));
      });
    const s = d0(r).toString();
    return s ? `?${s}` : "";
  };
}
function ks(e) {
  return e[e.length - 1];
}
function g0(e) {
  return typeof e == "function";
}
function Li(e, t) {
  return g0(e) ? e(t) : e;
}
function Ji(e, t) {
  return t.reduce((n, r) => ((n[r] = e[r]), n), {});
}
function tt(e, t) {
  if (e === t) return e;
  const n = t,
    r = Nd(e) && Nd(n);
  if (r || (dn(e) && dn(n))) {
    const s = r ? e : Object.keys(e),
      i = s.length,
      o = r ? n : Object.keys(n),
      a = o.length,
      l = r ? [] : {};
    let u = 0;
    for (let d = 0; d < a; d++) {
      const c = r ? d : o[d];
      ((!r && s.includes(c)) || r) && e[c] === void 0 && n[c] === void 0
        ? ((l[c] = void 0), u++)
        : ((l[c] = tt(e[c], n[c])), l[c] === e[c] && e[c] !== void 0 && u++);
    }
    return i === a && u === i ? e : l;
  }
  return n;
}
function dn(e) {
  if (!Od(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!Od(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Od(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Nd(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ad(e, t) {
  let n = Object.keys(e);
  return t && (n = n.filter((r) => e[r] !== void 0)), n;
}
function _s(e, t, n) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (dn(e) && dn(t)) {
    const r = (n == null ? void 0 : n.ignoreUndefined) ?? !0,
      s = Ad(e, r),
      i = Ad(t, r);
    return !(n != null && n.partial) && s.length !== i.length
      ? !1
      : i.every((o) => _s(e[o], t[o], n));
  }
  return Array.isArray(e) && Array.isArray(t)
    ? e.length !== t.length
      ? !1
      : !e.some((r, s) => !_s(r, t[s], n))
    : !1;
}
const Mi = typeof window < "u" ? F.useLayoutEffect : F.useEffect;
function nr(e) {
  let t, n;
  const r = new Promise((s, i) => {
    (t = s), (n = i);
  });
  return (
    (r.status = "pending"),
    (r.resolve = (s) => {
      (r.status = "resolved"), (r.value = s), t(s), e == null || e(s);
    }),
    (r.reject = (s) => {
      (r.status = "rejected"), n(s);
    }),
    r
  );
}
function Ba(e) {
  const t = F.useRef({ value: e, prev: null }),
    n = t.current.value;
  return e !== n && (t.current = { value: e, prev: n }), t.current.prev;
}
function Vt(e) {
  return Zo(e.filter((t) => t !== void 0).join("/"));
}
function Zo(e) {
  return e.replace(/\/{2,}/g, "/");
}
function ac(e) {
  return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function An(e) {
  return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function v0(e) {
  return An(ac(e));
}
function w0({ basepath: e, base: t, to: n, trailingSlash: r = "never", caseSensitive: s }) {
  var i, o;
  (t = Po(e, t, s)), (n = Po(e, n, s));
  let a = qr(t);
  const l = qr(n);
  a.length > 1 && ((i = ks(a)) == null ? void 0 : i.value) === "/" && a.pop(),
    l.forEach((d, c) => {
      d.value === "/"
        ? c
          ? c === l.length - 1 && a.push(d)
          : (a = [d])
        : d.value === ".."
          ? a.pop()
          : d.value === "." || a.push(d);
    }),
    a.length > 1 &&
      (((o = ks(a)) == null ? void 0 : o.value) === "/"
        ? r === "never" && a.pop()
        : r === "always" && a.push({ type: "pathname", value: "/" }));
  const u = Vt([e, ...a.map((d) => d.value)]);
  return Zo(u);
}
function qr(e) {
  if (!e) return [];
  e = Zo(e);
  const t = [];
  if (
    (e.slice(0, 1) === "/" && ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })), !e)
  )
    return t;
  const n = e.split("/").filter(Boolean);
  return (
    t.push(
      ...n.map((r) =>
        r === "$" || r === "*"
          ? { type: "wildcard", value: r }
          : r.charAt(0) === "$"
            ? { type: "param", value: r }
            : { type: "pathname", value: decodeURI(r) }
      )
    ),
    e.slice(-1) === "/" && ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })),
    t
  );
}
function Oi({ path: e, params: t, leaveWildcards: n, leaveParams: r, decodeCharMap: s }) {
  const i = qr(e),
    o = {};
  for (const [a, l] of Object.entries(t)) {
    const u = typeof l == "string";
    ["*", "_splat"].includes(a) ? (o[a] = u ? encodeURI(l) : l) : (o[a] = u ? S0(l, s) : l);
  }
  return Vt(
    i.map((a) => {
      if (a.type === "wildcard") {
        const l = o._splat;
        return n ? `${a.value}${l ?? ""}` : l;
      }
      if (a.type === "param") {
        if (r) {
          const l = o[a.value];
          return `${a.value}${l ?? ""}`;
        }
        return o[a.value.substring(1)] ?? "undefined";
      }
      return a.value;
    })
  );
}
function S0(e, t) {
  let n = encodeURIComponent(e);
  if (t) for (const [r, s] of t) n = n.replaceAll(r, s);
  return n;
}
function Ni(e, t, n) {
  const r = x0(e, t, n);
  if (!(n.to && !r)) return r ?? {};
}
function Po(e, t, n = !1) {
  const r = n ? e : e.toLowerCase(),
    s = n ? t : t.toLowerCase();
  switch (!0) {
    case r === "/":
      return t;
    case s === r:
      return "";
    case t.length < e.length:
      return t;
    case s[r.length] !== "/":
      return t;
    case s.startsWith(r):
      return t.slice(e.length);
    default:
      return t;
  }
}
function x0(e, t, n) {
  if (e !== "/" && !t.startsWith(e)) return;
  t = Po(e, t, n.caseSensitive);
  const r = Po(e, `${n.to ?? "$"}`, n.caseSensitive),
    s = qr(t),
    i = qr(r);
  t.startsWith("/") || s.unshift({ type: "pathname", value: "/" }),
    r.startsWith("/") || i.unshift({ type: "pathname", value: "/" });
  const o = {};
  return (() => {
    for (let l = 0; l < Math.max(s.length, i.length); l++) {
      const u = s[l],
        d = i[l],
        c = l >= s.length - 1,
        f = l >= i.length - 1;
      if (d) {
        if (d.type === "wildcard") {
          const y = decodeURI(Vt(s.slice(l).map((m) => m.value)));
          return (o["*"] = y), (o._splat = y), !0;
        }
        if (d.type === "pathname") {
          if (d.value === "/" && !(u != null && u.value)) return !0;
          if (u) {
            if (n.caseSensitive) {
              if (d.value !== u.value) return !1;
            } else if (d.value.toLowerCase() !== u.value.toLowerCase()) return !1;
          }
        }
        if (!u) return !1;
        if (d.type === "param") {
          if (u.value === "/") return !1;
          u.value.charAt(0) !== "$" && (o[d.value.substring(1)] = decodeURIComponent(u.value));
        }
      }
      if (!c && f)
        return (
          (o["**"] = Vt(s.slice(l + 1).map((y) => y.value))),
          !!n.fuzzy && (d == null ? void 0 : d.value) !== "/"
        );
    }
    return !0;
  })()
    ? o
    : void 0;
}
function Ln(e) {
  return !!(e != null && e.isRedirect);
}
function Va(e) {
  return !!(e != null && e.isRedirect) && e.href;
}
function lc(e) {
  const t = e.errorComponent ?? ea;
  return x.jsx(k0, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) =>
      n ? F.createElement(t, { error: n, reset: r }) : e.children,
  });
}
class k0 extends F.Component {
  constructor() {
    super(...arguments), (this.state = { error: null });
  }
  static getDerivedStateFromProps(t) {
    return { resetKey: t.getResetKey() };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(t, n) {
    n.error && n.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(t, n) {
    this.props.onCatch && this.props.onCatch(t, n);
  }
  render() {
    return this.props.children({
      error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
}
function ea({ error: e }) {
  const [t, n] = F.useState(!1);
  return x.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      x.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          x.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }),
          x.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => n((r) => !r),
            children: t ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      x.jsx("div", { style: { height: ".25rem" } }),
      t
        ? x.jsx("div", {
            children: x.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: e.message ? x.jsx("code", { children: e.message }) : null,
            }),
          })
        : null,
    ],
  });
}
function lt(e) {
  const t = Yn({ warn: (e == null ? void 0 : e.router) === void 0 }),
    n = (e == null ? void 0 : e.router) || t,
    r = F.useRef();
  return Hv(n.__store, (s) => {
    if (e != null && e.select) {
      if (e.structuralSharing ?? n.options.defaultStructuralSharing) {
        const i = tt(r.current, e.select(s));
        return (r.current = i), i;
      }
      return e.select(s);
    }
    return s;
  });
}
function vt(e) {
  return !!(e != null && e.isNotFound);
}
function _0(e) {
  const t = lt({ select: (n) => `not-found-${n.location.pathname}-${n.status}` });
  return x.jsx(lc, {
    getResetKey: () => t,
    onCatch: (n, r) => {
      var s;
      if (vt(n)) (s = e.onCatch) == null || s.call(e, n, r);
      else throw n;
    },
    errorComponent: ({ error: n }) => {
      var r;
      if (vt(n)) return (r = e.fallback) == null ? void 0 : r.call(e, n);
      throw n;
    },
    children: e.children,
  });
}
function C0() {
  return x.jsx("p", { children: "Not Found" });
}
const ds = {
    stringify: (e) =>
      JSON.stringify(e, function (n, r) {
        const s = this[n],
          i = bi.find((o) => o.stringifyCondition(s));
        return i ? i.stringify(s) : r;
      }),
    parse: (e) =>
      JSON.parse(e, function (n, r) {
        const s = this[n];
        if (dn(s)) {
          const i = bi.find((o) => o.parseCondition(s));
          if (i) return i.parse(s);
        }
        return r;
      }),
    encode: (e) => {
      if (Array.isArray(e)) return e.map((n) => ds.encode(n));
      if (dn(e)) return Object.fromEntries(Object.entries(e).map(([n, r]) => [n, ds.encode(r)]));
      const t = bi.find((n) => n.stringifyCondition(e));
      return t ? t.stringify(e) : e;
    },
    decode: (e) => {
      if (dn(e)) {
        const t = bi.find((n) => n.parseCondition(e));
        if (t) return t.parse(e);
      }
      return Array.isArray(e)
        ? e.map((t) => ds.decode(t))
        : dn(e)
          ? Object.fromEntries(Object.entries(e).map(([t, n]) => [t, ds.decode(n)]))
          : e;
    },
  },
  Ai = (e, t, n, r) => ({
    key: e,
    stringifyCondition: t,
    stringify: (s) => ({ [`$${e}`]: n(s) }),
    parseCondition: (s) => Object.hasOwn(s, `$${e}`),
    parse: (s) => r(s[`$${e}`]),
  }),
  bi = [
    Ai(
      "undefined",
      (e) => e === void 0,
      () => 0,
      () => {}
    ),
    Ai(
      "date",
      (e) => e instanceof Date,
      (e) => e.toISOString(),
      (e) => new Date(e)
    ),
    Ai(
      "error",
      (e) => e instanceof Error,
      (e) => ({ ...e, message: e.message, stack: e.stack, cause: e.cause }),
      (e) => Object.assign(new Error(e.message), e)
    ),
    Ai(
      "formData",
      (e) => e instanceof FormData,
      (e) => {
        const t = {};
        return (
          e.forEach((n, r) => {
            const s = t[r];
            s !== void 0 ? (Array.isArray(s) ? s.push(n) : (t[r] = [s, n])) : (t[r] = n);
          }),
          t
        );
      },
      (e) => {
        const t = new FormData();
        return (
          Object.entries(e).forEach(([n, r]) => {
            Array.isArray(r) ? r.forEach((s) => t.append(n, s)) : t.append(n, r);
          }),
          t
        );
      }
    ),
  ],
  Kp = ["component", "errorComponent", "pendingComponent", "notFoundComponent"];
function E0(e) {
  var t;
  for (const n of Kp) if ((t = e.options[n]) != null && t.preload) return !0;
  return !1;
}
function Qa(e, t) {
  if (e == null) return {};
  if ("~standard" in e) {
    const n = e["~standard"].validate(t);
    if (n instanceof Promise) throw new Xl("Async validation not supported");
    if (n.issues) throw new Xl(JSON.stringify(n.issues, void 0, 2));
    return n.value;
  }
  return "parse" in e ? e.parse(t) : typeof e == "function" ? e(t) : {};
}
function R0(e) {
  return new P0(e);
}
class P0 {
  constructor(t) {
    (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.isViewTransitionTypesSupported = void 0),
      (this.subscribers = new Set()),
      (this.startReactTransition = (n) => n()),
      (this.update = (n) => {
        var r;
        n.notFoundRoute &&
          console.warn(
            "The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info."
          );
        const s = this.options;
        (this.options = { ...this.options, ...n }),
          (this.isServer = this.options.isServer ?? typeof document > "u"),
          (this.pathParamsDecodeCharMap = this.options.pathParamsAllowedCharacters
            ? new Map(
                this.options.pathParamsAllowedCharacters.map((i) => [encodeURIComponent(i), i])
              )
            : void 0),
          (!this.basepath || (n.basepath && n.basepath !== s.basepath)) &&
            (n.basepath === void 0 || n.basepath === "" || n.basepath === "/"
              ? (this.basepath = "/")
              : (this.basepath = `/${v0(n.basepath)}`)),
          (!this.history || (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ??
              (this.isServer ? kv({ initialEntries: [this.basepath || "/"] }) : xv())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            (this.__store = new Jl(L0(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter(
                    (i) => !["redirected"].includes(i.status)
                  ),
                };
              },
            })),
          typeof window < "u" &&
            "CSS" in window &&
            typeof ((r = window.CSS) == null ? void 0 : r.supports) == "function" &&
            (this.isViewTransitionTypesSupported = window.CSS.supports(
              "selector(:active-view-transition-type(a)"
            ));
      }),
      (this.buildRouteTree = () => {
        (this.routesById = {}), (this.routesByPath = {});
        const n = this.options.notFoundRoute;
        n &&
          (n.init({ originalIndex: 99999999999, defaultSsr: this.options.defaultSsr }),
          (this.routesById[n.id] = n));
        const r = (o) => {
          o.forEach((a, l) => {
            a.init({ originalIndex: l, defaultSsr: this.options.defaultSsr });
            const u = this.routesById[a.id];
            if (
              (Ke(!u, `Duplicate routes found with id: ${String(a.id)}`),
              (this.routesById[a.id] = a),
              !a.isRoot && a.path)
            ) {
              const c = An(a.fullPath);
              (!this.routesByPath[c] || a.fullPath.endsWith("/")) && (this.routesByPath[c] = a);
            }
            const d = a.children;
            d != null && d.length && r(d);
          });
        };
        r([this.routeTree]);
        const s = [];
        Object.values(this.routesById).forEach((o, a) => {
          var l;
          if (o.isRoot || !o.path) return;
          const u = ac(o.fullPath),
            d = qr(u);
          for (; d.length > 1 && ((l = d[0]) == null ? void 0 : l.value) === "/"; ) d.shift();
          const c = d.map((f) =>
            f.value === "/" ? 0.75 : f.type === "param" ? 0.5 : f.type === "wildcard" ? 0.25 : 1
          );
          s.push({ child: o, trimmed: u, parsed: d, index: a, scores: c });
        }),
          (this.flatRoutes = s
            .sort((o, a) => {
              const l = Math.min(o.scores.length, a.scores.length);
              for (let u = 0; u < l; u++)
                if (o.scores[u] !== a.scores[u]) return a.scores[u] - o.scores[u];
              if (o.scores.length !== a.scores.length) return a.scores.length - o.scores.length;
              for (let u = 0; u < l; u++)
                if (o.parsed[u].value !== a.parsed[u].value)
                  return o.parsed[u].value > a.parsed[u].value ? 1 : -1;
              return o.index - a.index;
            })
            .map((o, a) => ((o.child.rank = a), o.child)));
      }),
      (this.subscribe = (n, r) => {
        const s = { eventType: n, fn: r };
        return (
          this.subscribers.add(s),
          () => {
            this.subscribers.delete(s);
          }
        );
      }),
      (this.emit = (n) => {
        this.subscribers.forEach((r) => {
          r.eventType === n.type && r.fn(n);
        });
      }),
      (this.parseLocation = (n, r) => {
        const s = ({ pathname: l, search: u, hash: d, state: c }) => {
            const f = this.options.parseSearch(u),
              y = this.options.stringifySearch(f);
            return {
              pathname: l,
              searchStr: y,
              search: tt(n == null ? void 0 : n.search, f),
              hash: d.split("#").reverse()[0] ?? "",
              href: `${l}${y}${d}`,
              state: tt(n == null ? void 0 : n.state, c),
            };
          },
          i = s(r ?? this.history.location),
          { __tempLocation: o, __tempKey: a } = i.state;
        if (o && (!a || a === this.tempLocationKey)) {
          const l = s(o);
          return (
            (l.state.key = i.state.key), delete l.state.__tempLocation, { ...l, maskedLocation: i }
          );
        }
        return i;
      }),
      (this.resolvePathWithBase = (n, r) =>
        w0({
          basepath: this.basepath,
          base: n,
          to: Zo(r),
          trailingSlash: this.options.trailingSlash,
          caseSensitive: this.options.caseSensitive,
        })),
      (this.getMatchedRoutes = (n, r) => {
        let s = {};
        const i = An(n.pathname),
          o = (d) =>
            Ni(this.basepath, i, {
              to: d.fullPath,
              caseSensitive: d.options.caseSensitive ?? this.options.caseSensitive,
              fuzzy: !0,
            });
        let a = (r == null ? void 0 : r.to) !== void 0 ? this.routesByPath[r.to] : void 0;
        a
          ? (s = o(a))
          : (a = this.flatRoutes.find((d) => {
              const c = o(d);
              return c ? ((s = c), !0) : !1;
            }));
        let l = a || this.routesById[We];
        const u = [l];
        for (; l.parentRoute; ) (l = l.parentRoute), u.unshift(l);
        return { matchedRoutes: u, routeParams: s, foundRoute: a };
      }),
      (this.cancelMatch = (n) => {
        const r = this.getMatch(n);
        r && (r.abortController.abort(), clearTimeout(r.pendingTimeout));
      }),
      (this.cancelMatches = () => {
        var n;
        (n = this.state.pendingMatches) == null ||
          n.forEach((r) => {
            this.cancelMatch(r.id);
          });
      }),
      (this.buildLocation = (n) => {
        const r = (i = {}, o) => {
            var a, l, u, d, c, f;
            const y = i._fromLocation
                ? this.matchRoutes(i._fromLocation, { _buildLocation: !0 })
                : this.state.matches,
              m =
                i.from != null
                  ? y.find((M) =>
                      Ni(this.basepath, An(M.pathname), {
                        to: i.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      })
                    )
                  : void 0,
              v = (m == null ? void 0 : m.pathname) || this.latestLocation.pathname;
            Ke(i.from == null || m != null, "Could not find match for from: " + i.from);
            const w =
                (a = this.state.pendingMatches) != null && a.length
                  ? (l = ks(this.state.pendingMatches)) == null
                    ? void 0
                    : l.search
                  : ((u = ks(y)) == null ? void 0 : u.search) || this.latestLocation.search,
              p =
                o == null
                  ? void 0
                  : o.matchedRoutes.filter((M) => y.find((b) => b.routeId === M.id));
            let h;
            if (i.to) h = this.resolvePathWithBase(v, `${i.to}`);
            else {
              const M =
                this.routesById[
                  (d =
                    p == null
                      ? void 0
                      : p.find((b) => {
                          const j = Oi({
                            path: b.fullPath,
                            params: (o == null ? void 0 : o.routeParams) ?? {},
                            decodeCharMap: this.pathParamsDecodeCharMap,
                          });
                          return Vt([this.basepath, j]) === v;
                        })) == null
                    ? void 0
                    : d.id
                ];
              h = this.resolvePathWithBase(v, (M == null ? void 0 : M.to) ?? v);
            }
            const g = { ...((c = ks(y)) == null ? void 0 : c.params) };
            let S = (i.params ?? !0) === !0 ? g : { ...g, ...Li(i.params, g) };
            Object.keys(S).length > 0 &&
              (o == null ||
                o.matchedRoutes
                  .map((M) => {
                    var b;
                    return (
                      ((b = M.options.params) == null ? void 0 : b.stringify) ??
                      M.options.stringifyParams
                    );
                  })
                  .filter(Boolean)
                  .forEach((M) => {
                    S = { ...S, ...M(S) };
                  })),
              (h = Oi({
                path: h,
                params: S ?? {},
                leaveWildcards: !1,
                leaveParams: n.leaveParams,
                decodeCharMap: this.pathParamsDecodeCharMap,
              }));
            let k = w;
            if (n._includeValidateSearch && (f = this.options.search) != null && f.strict) {
              let M = {};
              o == null ||
                o.matchedRoutes.forEach((b) => {
                  try {
                    b.options.validateSearch &&
                      (M = { ...M, ...(Qa(b.options.validateSearch, { ...M, ...k }) ?? {}) });
                  } catch {}
                }),
                (k = M);
            }
            (k = ((M) => {
              const b =
                  (o == null
                    ? void 0
                    : o.matchedRoutes.reduce((V, G) => {
                        var Se;
                        const O = [];
                        if ("search" in G.options)
                          (Se = G.options.search) != null &&
                            Se.middlewares &&
                            O.push(...G.options.search.middlewares);
                        else if (G.options.preSearchFilters || G.options.postSearchFilters) {
                          const I = ({ search: D, next: W }) => {
                            let q = D;
                            "preSearchFilters" in G.options &&
                              G.options.preSearchFilters &&
                              (q = G.options.preSearchFilters.reduce((ue, ce) => ce(ue), D));
                            const ae = W(q);
                            return "postSearchFilters" in G.options && G.options.postSearchFilters
                              ? G.options.postSearchFilters.reduce((ue, ce) => ce(ue), ae)
                              : ae;
                          };
                          O.push(I);
                        }
                        if (n._includeValidateSearch && G.options.validateSearch) {
                          const I = ({ search: D, next: W }) => {
                            try {
                              const q = W(D);
                              return { ...q, ...(Qa(G.options.validateSearch, q) ?? {}) };
                            } catch {}
                          };
                          O.push(I);
                        }
                        return V.concat(O);
                      }, [])) ?? [],
                j = ({ search: V }) => (i.search ? (i.search === !0 ? V : Li(i.search, V)) : {});
              b.push(j);
              const Q = (V, G) => {
                if (V >= b.length) return G;
                const Se = b[V];
                return Se({ search: G, next: (I) => Q(V + 1, I) });
              };
              return Q(0, M);
            })(k)),
              (k = tt(w, k));
            const C = this.options.stringifySearch(k),
              _ =
                i.hash === !0
                  ? this.latestLocation.hash
                  : i.hash
                    ? Li(i.hash, this.latestLocation.hash)
                    : void 0,
              L = _ ? `#${_}` : "";
            let N =
              i.state === !0
                ? this.latestLocation.state
                : i.state
                  ? Li(i.state, this.latestLocation.state)
                  : {};
            return (
              (N = tt(this.latestLocation.state, N)),
              {
                pathname: h,
                search: k,
                searchStr: C,
                state: N,
                hash: _ ?? "",
                href: `${h}${C}${L}`,
                unmaskOnReload: i.unmaskOnReload,
              }
            );
          },
          s = (i = {}, o) => {
            var a;
            const l = r(i);
            let u = o ? r(o) : void 0;
            if (!u) {
              let f = {};
              const y =
                (a = this.options.routeMasks) == null
                  ? void 0
                  : a.find((m) => {
                      const v = Ni(this.basepath, l.pathname, {
                        to: m.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      });
                      return v ? ((f = v), !0) : !1;
                    });
              if (y) {
                const { from: m, ...v } = y;
                (o = { ...Ji(n, ["from"]), ...v, params: f }), (u = r(o));
              }
            }
            const d = this.getMatchedRoutes(l, i),
              c = r(i, d);
            if (u) {
              const f = this.getMatchedRoutes(u, o),
                y = r(o, f);
              c.maskedLocation = y;
            }
            return c;
          };
        return n.mask ? s(n, { ...Ji(n, ["from"]), ...n.mask }) : s(n);
      }),
      (this.commitLocation = ({ viewTransition: n, ignoreBlocker: r, ...s }) => {
        const i = () => {
            s.state.key = this.latestLocation.state.key;
            const l = _s(s.state, this.latestLocation.state);
            return delete s.state.key, l;
          },
          o = this.latestLocation.href === s.href,
          a = this.commitLocationPromise;
        if (
          ((this.commitLocationPromise = nr(() => {
            a == null || a.resolve();
          })),
          o && i())
        )
          this.load();
        else {
          let { maskedLocation: l, hashScrollIntoView: u, ...d } = s;
          l &&
            ((d = {
              ...l,
              state: {
                ...l.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...d,
                  search: d.searchStr,
                  state: { ...d.state, __tempKey: void 0, __tempLocation: void 0, key: void 0 },
                },
              },
            }),
            (d.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (d.state.__tempKey = this.tempLocationKey)),
            (d.state.__hashScrollIntoViewOptions =
              u ?? this.options.defaultHashScrollIntoView ?? !0),
            (this.shouldViewTransition = n),
            this.history[s.replace ? "replace" : "push"](d.href, d.state, { ignoreBlocker: r });
        }
        return (
          (this.resetNextScroll = s.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        );
      }),
      (this.buildAndCommitLocation = ({
        replace: n,
        resetScroll: r,
        hashScrollIntoView: s,
        viewTransition: i,
        ignoreBlocker: o,
        href: a,
        ...l
      } = {}) => {
        if (a) {
          const d = this.history.location.state.__TSR_index,
            c = Bs(a, { __TSR_index: n ? d : d + 1 });
          (l.to = c.pathname),
            (l.search = this.options.parseSearch(c.search)),
            (l.hash = c.hash.slice(1));
        }
        const u = this.buildLocation({ ...l, _includeValidateSearch: !0 });
        return this.commitLocation({
          ...u,
          viewTransition: i,
          replace: n,
          resetScroll: r,
          hashScrollIntoView: s,
          ignoreBlocker: o,
        });
      }),
      (this.navigate = ({ to: n, reloadDocument: r, href: s, ...i }) => {
        if (r) {
          s || (s = this.buildLocation({ to: n, ...i }).href),
            i.replace ? window.location.replace(s) : (window.location.href = s);
          return;
        }
        return this.buildAndCommitLocation({ ...i, href: s, to: n });
      }),
      (this.load = async (n) => {
        this.latestLocation = this.parseLocation(this.latestLocation);
        let r, s, i;
        for (
          i = new Promise((o) => {
            this.startReactTransition(async () => {
              var a;
              try {
                const l = this.latestLocation,
                  u = this.state.resolvedLocation,
                  d = u.href !== l.href,
                  c = u.pathname !== l.pathname;
                this.cancelMatches();
                let f;
                Ua(() => {
                  (f = this.matchRoutes(l)),
                    this.__store.setState((y) => ({
                      ...y,
                      status: "pending",
                      isLoading: !0,
                      location: l,
                      pendingMatches: f,
                      cachedMatches: y.cachedMatches.filter((m) => !f.find((v) => v.id === m.id)),
                    }));
                }),
                  this.state.redirect ||
                    this.emit({
                      type: "onBeforeNavigate",
                      fromLocation: u,
                      toLocation: l,
                      pathChanged: c,
                      hrefChanged: d,
                    }),
                  this.emit({
                    type: "onBeforeLoad",
                    fromLocation: u,
                    toLocation: l,
                    pathChanged: c,
                    hrefChanged: d,
                  }),
                  await this.loadMatches({
                    sync: n == null ? void 0 : n.sync,
                    matches: f,
                    location: l,
                    onReady: async () => {
                      this.startViewTransition(async () => {
                        let y, m, v;
                        Ua(() => {
                          this.__store.setState((w) => {
                            const p = w.matches,
                              h = w.pendingMatches || w.matches;
                            return (
                              (y = p.filter((g) => !h.find((S) => S.id === g.id))),
                              (m = h.filter((g) => !p.find((S) => S.id === g.id))),
                              (v = p.filter((g) => h.find((S) => S.id === g.id))),
                              {
                                ...w,
                                isLoading: !1,
                                loadedAt: Date.now(),
                                matches: h,
                                pendingMatches: void 0,
                                cachedMatches: [
                                  ...w.cachedMatches,
                                  ...y.filter((g) => g.status !== "error"),
                                ],
                              }
                            );
                          }),
                            this.clearExpiredCache();
                        }),
                          [
                            [y, "onLeave"],
                            [m, "onEnter"],
                            [v, "onStay"],
                          ].forEach(([w, p]) => {
                            w.forEach((h) => {
                              var g, S;
                              (S = (g = this.looseRoutesById[h.routeId].options)[p]) == null ||
                                S.call(g, h);
                            });
                          });
                      });
                    },
                  });
              } catch (l) {
                Va(l)
                  ? ((r = l),
                    this.isServer || this.navigate({ ...r, replace: !0, ignoreBlocker: !0 }))
                  : vt(l) && (s = l),
                  this.__store.setState((u) => ({
                    ...u,
                    statusCode: r
                      ? r.statusCode
                      : s
                        ? 404
                        : u.matches.some((d) => d.status === "error")
                          ? 500
                          : 200,
                    redirect: r,
                  }));
              }
              this.latestLoadPromise === i &&
                ((a = this.commitLocationPromise) == null || a.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                o();
            });
          }),
            this.latestLoadPromise = i,
            await i;
          this.latestLoadPromise && i !== this.latestLoadPromise;

        )
          await this.latestLoadPromise;
      }),
      (this.startViewTransition = (n) => {
        const r = this.shouldViewTransition ?? this.options.defaultViewTransition;
        if (
          (delete this.shouldViewTransition,
          r &&
            typeof document < "u" &&
            "startViewTransition" in document &&
            typeof document.startViewTransition == "function")
        ) {
          let s;
          typeof r == "object" && this.isViewTransitionTypesSupported
            ? (s = { update: n, types: r.types })
            : (s = n),
            document.startViewTransition(s);
        } else n();
      }),
      (this.updateMatch = (n, r) => {
        var s;
        let i;
        const o = (s = this.state.pendingMatches) == null ? void 0 : s.find((d) => d.id === n),
          a = this.state.matches.find((d) => d.id === n),
          l = this.state.cachedMatches.find((d) => d.id === n),
          u = o ? "pendingMatches" : a ? "matches" : l ? "cachedMatches" : "";
        return (
          u &&
            this.__store.setState((d) => {
              var c;
              return {
                ...d,
                [u]: (c = d[u]) == null ? void 0 : c.map((f) => (f.id === n ? (i = r(f)) : f)),
              };
            }),
          i
        );
      }),
      (this.getMatch = (n) =>
        [
          ...this.state.cachedMatches,
          ...(this.state.pendingMatches ?? []),
          ...this.state.matches,
        ].find((r) => r.id === n)),
      (this.loadMatches = async ({
        location: n,
        matches: r,
        preload: s,
        onReady: i,
        updateMatch: o = this.updateMatch,
        sync: a,
      }) => {
        let l,
          u = !1;
        const d = async () => {
            u || ((u = !0), await (i == null ? void 0 : i()));
          },
          c = (y) => !!(s && !this.state.matches.find((m) => m.id === y));
        !this.isServer && !this.state.matches.length && d();
        const f = (y, m) => {
          var v, w, p;
          if (Va(m) && !m.reloadDocument) throw m;
          if (Ln(m) || vt(m)) {
            if (
              (o(y.id, (h) => ({
                ...h,
                status: Ln(m) ? "redirected" : vt(m) ? "notFound" : "error",
                isFetching: !1,
                error: m,
                beforeLoadPromise: void 0,
                loaderPromise: void 0,
              })),
              m.routeId || (m.routeId = y.routeId),
              (v = y.beforeLoadPromise) == null || v.resolve(),
              (w = y.loaderPromise) == null || w.resolve(),
              (p = y.loadPromise) == null || p.resolve(),
              Ln(m))
            )
              throw ((u = !0), (m = this.resolveRedirect({ ...m, _fromLocation: n })), m);
            if (vt(m)) throw (this._handleNotFound(r, m, { updateMatch: o }), m);
          }
        };
        try {
          await new Promise((y, m) => {
            (async () => {
              var v, w, p;
              try {
                const h = (k, R, C) => {
                  var _, L;
                  const { id: N, routeId: M } = r[k],
                    b = this.looseRoutesById[M];
                  if (R instanceof Promise) throw R;
                  (R.routerCode = C), (l = l ?? k), f(this.getMatch(N), R);
                  try {
                    (L = (_ = b.options).onError) == null || L.call(_, R);
                  } catch (j) {
                    (R = j), f(this.getMatch(N), R);
                  }
                  o(N, (j) => {
                    var Q, V;
                    return (
                      (Q = j.beforeLoadPromise) == null || Q.resolve(),
                      (V = j.loadPromise) == null || V.resolve(),
                      {
                        ...j,
                        error: R,
                        status: "error",
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0,
                      }
                    );
                  });
                };
                for (const [k, { id: R, routeId: C }] of r.entries()) {
                  const _ = this.getMatch(R),
                    L = (v = r[k - 1]) == null ? void 0 : v.id,
                    N = this.looseRoutesById[C],
                    M = N.options.pendingMs ?? this.options.defaultPendingMs,
                    b = !!(
                      i &&
                      !this.isServer &&
                      !c(R) &&
                      (N.options.loader || N.options.beforeLoad) &&
                      typeof M == "number" &&
                      M !== 1 / 0 &&
                      (N.options.pendingComponent ?? this.options.defaultPendingComponent)
                    );
                  let j = !0;
                  if (
                    ((_.beforeLoadPromise || _.loaderPromise) &&
                      (b &&
                        setTimeout(() => {
                          try {
                            d();
                          } catch {}
                        }, M),
                      await _.beforeLoadPromise,
                      (j = this.getMatch(R).status !== "success")),
                    j)
                  ) {
                    try {
                      o(R, (Z) => ({
                        ...Z,
                        loadPromise: nr(() => {
                          var Ve;
                          (Ve = Z.loadPromise) == null || Ve.resolve();
                        }),
                        beforeLoadPromise: nr(),
                      }));
                      const Q = new AbortController();
                      let V;
                      b &&
                        (V = setTimeout(() => {
                          try {
                            d();
                          } catch {}
                        }, M));
                      const { paramsError: G, searchError: Se } = this.getMatch(R);
                      G && h(k, G, "PARSE_PARAMS"), Se && h(k, Se, "VALIDATE_SEARCH");
                      const O = () => (L ? this.getMatch(L).context : (this.options.context ?? {}));
                      o(R, (Z) => ({
                        ...Z,
                        isFetching: "beforeLoad",
                        fetchCount: Z.fetchCount + 1,
                        abortController: Q,
                        pendingTimeout: V,
                        context: { ...O(), ...Z.__routeContext },
                      }));
                      const { search: I, params: D, context: W, cause: q } = this.getMatch(R),
                        ae = c(R),
                        ue = {
                          search: I,
                          abortController: Q,
                          params: D,
                          preload: ae,
                          context: W,
                          location: n,
                          navigate: (Z) => this.navigate({ ...Z, _fromLocation: n }),
                          buildLocation: this.buildLocation,
                          cause: ae ? "preload" : q,
                          matches: r,
                        };
                      let ce =
                        (await ((p = (w = N.options).beforeLoad) == null
                          ? void 0
                          : p.call(w, ue))) ?? {};
                      this.serializeLoaderData &&
                        (ce = this.serializeLoaderData("__beforeLoadContext", ce, {
                          router: this,
                          match: this.getMatch(R),
                        })),
                        (Ln(ce) || vt(ce)) && h(k, ce, "BEFORE_LOAD"),
                        o(R, (Z) => ({
                          ...Z,
                          __beforeLoadContext: ce,
                          context: { ...O(), ...Z.__routeContext, ...ce },
                          abortController: Q,
                        }));
                    } catch (Q) {
                      h(k, Q, "BEFORE_LOAD");
                    }
                    o(R, (Q) => {
                      var V;
                      return (
                        (V = Q.beforeLoadPromise) == null || V.resolve(),
                        { ...Q, beforeLoadPromise: void 0, isFetching: !1 }
                      );
                    });
                  }
                }
                const g = r.slice(0, l),
                  S = [];
                g.forEach(({ id: k, routeId: R }, C) => {
                  S.push(
                    (async () => {
                      const { loaderPromise: _ } = this.getMatch(k);
                      let L = !1,
                        N = !1;
                      if (_) {
                        await _;
                        const M = this.getMatch(k);
                        M.error && f(M, M.error);
                      } else {
                        const M = S[C - 1],
                          b = this.looseRoutesById[R],
                          j = () => {
                            const {
                                params: q,
                                loaderDeps: ae,
                                abortController: ue,
                                context: ce,
                                cause: Z,
                              } = this.getMatch(k),
                              Ve = c(k);
                            return {
                              params: q,
                              deps: ae,
                              preload: !!Ve,
                              parentMatchPromise: M,
                              abortController: ue,
                              context: ce,
                              location: n,
                              navigate: (ai) => this.navigate({ ...ai, _fromLocation: n }),
                              cause: Ve ? "preload" : Z,
                              route: b,
                            };
                          },
                          Q = Date.now() - this.getMatch(k).updatedAt,
                          V = c(k),
                          G = V
                            ? (b.options.preloadStaleTime ??
                              this.options.defaultPreloadStaleTime ??
                              3e4)
                            : (b.options.staleTime ?? this.options.defaultStaleTime ?? 0),
                          Se = b.options.shouldReload,
                          O = typeof Se == "function" ? Se(j()) : Se;
                        o(k, (q) => ({
                          ...q,
                          loaderPromise: nr(),
                          preload: !!V && !this.state.matches.find((ae) => ae.id === k),
                        }));
                        const I = async () => {
                            var q, ae, ue, ce, Z, Ve, ai, gc;
                            try {
                              const li = async () => {
                                const Le = this.getMatch(k);
                                Le.minPendingPromise && (await Le.minPendingPromise);
                              };
                              try {
                                this.loadRouteChunk(b),
                                  o(k, (da) => ({ ...da, isFetching: "loader" }));
                                let Le = await ((ae = (q = b.options).loader) == null
                                  ? void 0
                                  : ae.call(q, j()));
                                this.serializeLoaderData &&
                                  (Le = this.serializeLoaderData("loaderData", Le, {
                                    router: this,
                                    match: this.getMatch(k),
                                  })),
                                  f(this.getMatch(k), Le),
                                  await b._lazyPromise,
                                  await li();
                                const Ft =
                                    (ce = (ue = b.options).head) == null
                                      ? void 0
                                      : ce.call(ue, {
                                          matches: r,
                                          match: this.getMatch(k),
                                          params: this.getMatch(k).params,
                                          loaderData: Le,
                                        }),
                                  Zn = Ft == null ? void 0 : Ft.meta,
                                  Wm = Ft == null ? void 0 : Ft.links,
                                  Km = Ft == null ? void 0 : Ft.scripts,
                                  Gm =
                                    (Ve = (Z = b.options).headers) == null
                                      ? void 0
                                      : Ve.call(Z, { loaderData: Le });
                                o(k, (da) => ({
                                  ...da,
                                  error: void 0,
                                  status: "success",
                                  isFetching: !1,
                                  updatedAt: Date.now(),
                                  loaderData: Le,
                                  meta: Zn,
                                  links: Wm,
                                  scripts: Km,
                                  headers: Gm,
                                }));
                              } catch (Le) {
                                let Ft = Le;
                                await li(), f(this.getMatch(k), Le);
                                try {
                                  (gc = (ai = b.options).onError) == null || gc.call(ai, Le);
                                } catch (Zn) {
                                  (Ft = Zn), f(this.getMatch(k), Zn);
                                }
                                o(k, (Zn) => ({
                                  ...Zn,
                                  error: Ft,
                                  status: "error",
                                  isFetching: !1,
                                }));
                              }
                              await b._componentsPromise;
                            } catch (li) {
                              o(k, (Le) => ({ ...Le, loaderPromise: void 0 })),
                                f(this.getMatch(k), li);
                            }
                          },
                          { status: D, invalid: W } = this.getMatch(k);
                        (L = D === "success" && (W || (O ?? Q > G))),
                          (V && b.options.preload === !1) ||
                            (L && !a
                              ? ((N = !0),
                                (async () => {
                                  try {
                                    await I();
                                    const { loaderPromise: q, loadPromise: ae } = this.getMatch(k);
                                    q == null || q.resolve(),
                                      ae == null || ae.resolve(),
                                      o(k, (ue) => ({ ...ue, loaderPromise: void 0 }));
                                  } catch (q) {
                                    Va(q) && (await this.navigate(q));
                                  }
                                })())
                              : (D !== "success" || (L && a)) && (await I()));
                      }
                      if (!N) {
                        const { loaderPromise: M, loadPromise: b } = this.getMatch(k);
                        M == null || M.resolve(), b == null || b.resolve();
                      }
                      return (
                        o(k, (M) => ({
                          ...M,
                          isFetching: N ? M.isFetching : !1,
                          loaderPromise: N ? M.loaderPromise : void 0,
                          invalid: !1,
                        })),
                        this.getMatch(k)
                      );
                    })()
                  );
                }),
                  await Promise.all(S),
                  y();
              } catch (h) {
                m(h);
              }
            })();
          }),
            await d();
        } catch (y) {
          if (Ln(y) || vt(y)) throw (vt(y) && !s && (await d()), y);
        }
        return r;
      }),
      (this.invalidate = (n) => {
        const r = (s) => {
          var i;
          return (((i = n == null ? void 0 : n.filter) == null ? void 0 : i.call(n, s)) ?? !0)
            ? {
                ...s,
                invalid: !0,
                ...(s.status === "error" ? { status: "pending", error: void 0 } : {}),
              }
            : s;
        };
        return (
          this.__store.setState((s) => {
            var i;
            return {
              ...s,
              matches: s.matches.map(r),
              cachedMatches: s.cachedMatches.map(r),
              pendingMatches: (i = s.pendingMatches) == null ? void 0 : i.map(r),
            };
          }),
          this.load({ sync: n == null ? void 0 : n.sync })
        );
      }),
      (this.resolveRedirect = (n) => {
        const r = n;
        return r.href || (r.href = this.buildLocation(r).href), r;
      }),
      (this.clearCache = (n) => {
        const r = n == null ? void 0 : n.filter;
        r !== void 0
          ? this.__store.setState((s) => ({
              ...s,
              cachedMatches: s.cachedMatches.filter((i) => !r(i)),
            }))
          : this.__store.setState((s) => ({ ...s, cachedMatches: [] }));
      }),
      (this.clearExpiredCache = () => {
        const n = (r) => {
          const s = this.looseRoutesById[r.routeId];
          if (!s.options.loader) return !0;
          const i =
            (r.preload
              ? (s.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
              : (s.options.gcTime ?? this.options.defaultGcTime)) ?? 5 * 60 * 1e3;
          return !(r.status !== "error" && Date.now() - r.updatedAt < i);
        };
        this.clearCache({ filter: n });
      }),
      (this.loadRouteChunk = (n) => (
        n._lazyPromise === void 0 &&
          (n.lazyFn
            ? (n._lazyPromise = n.lazyFn().then((r) => {
                const { id: s, ...i } = r.options;
                Object.assign(n.options, i);
              }))
            : (n._lazyPromise = Promise.resolve())),
        n._componentsPromise === void 0 &&
          (n._componentsPromise = n._lazyPromise.then(() =>
            Promise.all(
              Kp.map(async (r) => {
                const s = n.options[r];
                s != null && s.preload && (await s.preload());
              })
            )
          )),
        n._componentsPromise
      )),
      (this.preloadRoute = async (n) => {
        const r = this.buildLocation(n);
        let s = this.matchRoutes(r, { throwOnError: !0, preload: !0, dest: n });
        const i = new Set(
            [...this.state.matches, ...(this.state.pendingMatches ?? [])].map((a) => a.id)
          ),
          o = new Set([...i, ...this.state.cachedMatches.map((a) => a.id)]);
        Ua(() => {
          s.forEach((a) => {
            o.has(a.id) ||
              this.__store.setState((l) => ({ ...l, cachedMatches: [...l.cachedMatches, a] }));
          });
        });
        try {
          return (
            (s = await this.loadMatches({
              matches: s,
              location: r,
              preload: !0,
              updateMatch: (a, l) => {
                i.has(a) ? (s = s.map((u) => (u.id === a ? l(u) : u))) : this.updateMatch(a, l);
              },
            })),
            s
          );
        } catch (a) {
          if (Ln(a))
            return a.reloadDocument ? void 0 : await this.preloadRoute({ ...a, _fromLocation: r });
          console.error(a);
          return;
        }
      }),
      (this.matchRoute = (n, r) => {
        const s = {
            ...n,
            to: n.to ? this.resolvePathWithBase(n.from || "", n.to) : void 0,
            params: n.params || {},
            leaveParams: !0,
          },
          i = this.buildLocation(s);
        if (r != null && r.pending && this.state.status !== "pending") return !1;
        const a = ((r == null ? void 0 : r.pending) === void 0 ? !this.state.isLoading : r.pending)
            ? this.latestLocation
            : this.state.resolvedLocation,
          l = Ni(this.basepath, a.pathname, { ...r, to: i.pathname });
        return !l || (n.params && !_s(l, n.params, { partial: !0 }))
          ? !1
          : l && ((r == null ? void 0 : r.includeSearch) ?? !0)
            ? _s(a.search, i.search, { partial: !0 })
              ? l
              : !1
            : l;
      }),
      (this.dehydrate = () => {
        var n;
        const r = ((n = this.options.errorSerializer) == null ? void 0 : n.serialize) ?? M0;
        return {
          state: {
            dehydratedMatches: this.state.matches.map((s) => ({
              ...Ji(s, ["id", "status", "updatedAt"]),
              error: s.error ? { data: r(s.error), __isServerError: !0 } : void 0,
            })),
          },
          manifest: this.manifest,
        };
      }),
      (this.hydrate = () => {
        var n, r, s;
        let i;
        typeof document < "u" &&
          (i = this.options.transformer.parse(
            (n = window.__TSR__) == null ? void 0 : n.dehydrated
          )),
          Ke(i),
          (this.dehydratedData = i.payload),
          (s = (r = this.options).hydrate) == null || s.call(r, i.payload);
        const o = i.router.state,
          a = this.matchRoutes(this.state.location).map((l) => {
            const u = o.dehydratedMatches.find((d) => d.id === l.id);
            return (
              Ke(u, `Could not find a client-side match for dehydrated match with id: ${l.id}!`),
              { ...l, ...u }
            );
          });
        this.__store.setState((l) => ({ ...l, matches: a })), (this.manifest = i.router.manifest);
      }),
      (this.injectedHtml = []),
      (this.injectHtml = (n) => {
        const r = () => ((this.injectedHtml = this.injectedHtml.filter((s) => s !== r)), n);
        this.injectedHtml.push(r);
      }),
      (this.injectScript = (n, r) => {
        this.injectHtml(
          `<script class='tsr-once'>${n}; if (typeof __TSR__ !== 'undefined') __TSR__.cleanScripts()<\/script>`
        );
      }),
      (this.streamedKeys = new Set()),
      (this.getStreamedValue = (n) => {
        var r;
        if (this.isServer) return;
        const s = (r = window.__TSR__) == null ? void 0 : r.streamedValues[n];
        if (s) return s.parsed || (s.parsed = this.options.transformer.parse(s.value)), s.parsed;
      }),
      (this.streamValue = (n, r) => {
        var s;
        this.streamedKeys.has(n),
          this.streamedKeys.add(n),
          this.injectScript(
            `__TSR__.streamedValues['${n}'] = { value: ${(s = this.serializer) == null ? void 0 : s.call(this, this.options.transformer.stringify(r))}}`
          );
      }),
      (this._handleNotFound = (n, r, { updateMatch: s = this.updateMatch } = {}) => {
        const i = Object.fromEntries(n.map((l) => [l.routeId, l]));
        let o =
          (r.global ? this.looseRoutesById[We] : this.looseRoutesById[r.routeId]) ||
          this.looseRoutesById[We];
        for (
          ;
          !o.options.notFoundComponent && !this.options.defaultNotFoundComponent && o.id !== We;

        )
          (o = o.parentRoute), Ke(o);
        const a = i[o.id];
        Ke(a, "Could not find match for route: " + o.id),
          s(a.id, (l) => ({ ...l, status: "notFound", error: r, isFetching: !1 })),
          r.routerCode === "BEFORE_LOAD" &&
            o.parentRoute &&
            ((r.routeId = o.parentRoute.id), this._handleNotFound(n, r, { updateMatch: s }));
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some((n) => n.status === "notFound" || n.globalNotFound)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...t,
        caseSensitive: t.caseSensitive ?? !1,
        notFoundMode: t.notFoundMode ?? "fuzzy",
        stringifySearch: t.stringifySearch ?? p0,
        parseSearch: t.parseSearch ?? h0,
        transformer: t.transformer ?? ds,
      }),
      typeof document < "u" && (window.__TSR__ROUTER__ = this);
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  matchRoutes(t, n, r) {
    return typeof t == "string"
      ? this.matchRoutesInternal({ pathname: t, search: n }, r)
      : this.matchRoutesInternal(t, n);
  }
  matchRoutesInternal(t, n) {
    const {
      foundRoute: r,
      matchedRoutes: s,
      routeParams: i,
    } = this.getMatchedRoutes(t, n == null ? void 0 : n.dest);
    let o = !1;
    (r ? r.path !== "/" && i["**"] : An(t.pathname)) &&
      (this.options.notFoundRoute ? s.push(this.options.notFoundRoute) : (o = !0));
    const a = (() => {
        if (o) {
          if (this.options.notFoundMode !== "root")
            for (let c = s.length - 1; c >= 0; c--) {
              const f = s[c];
              if (f.children) return f.id;
            }
          return We;
        }
      })(),
      l = s.map((c) => {
        var f;
        let y;
        const m = ((f = c.options.params) == null ? void 0 : f.parse) ?? c.options.parseParams;
        if (m)
          try {
            const v = m(i);
            Object.assign(i, v);
          } catch (v) {
            if (((y = new T0(v.message, { cause: v })), n != null && n.throwOnError)) throw y;
            return y;
          }
      }),
      u = [],
      d = (c) =>
        (c == null ? void 0 : c.id)
          ? (c.context ?? this.options.context ?? {})
          : (this.options.context ?? {});
    return (
      s.forEach((c, f) => {
        var y, m, v, w;
        const p = u[f - 1],
          [h, g] = (() => {
            const j = (p == null ? void 0 : p.search) ?? t.search;
            try {
              const Q = Qa(c.options.validateSearch, j) ?? {};
              return [{ ...j, ...Q }, void 0];
            } catch (Q) {
              const V = new Xl(Q.message, { cause: Q });
              if (n != null && n.throwOnError) throw V;
              return [j, V];
            }
          })(),
          S = ((m = (y = c.options).loaderDeps) == null ? void 0 : m.call(y, { search: h })) ?? "",
          k = S ? JSON.stringify(S) : "",
          R = Oi({ path: c.fullPath, params: i, decodeCharMap: this.pathParamsDecodeCharMap }),
          C =
            Oi({
              path: c.id,
              params: i,
              leaveWildcards: !0,
              decodeCharMap: this.pathParamsDecodeCharMap,
            }) + k,
          _ = this.getMatch(C),
          L = this.state.matches.find((j) => j.routeId === c.id),
          N = L ? "stay" : "enter";
        let M;
        if (_)
          M = {
            ..._,
            cause: N,
            params: L ? tt(L.params, i) : i,
            search: tt(L ? L.search : _.search, h),
          };
        else {
          const j =
            c.options.loader || c.options.beforeLoad || c.lazyFn || E0(c) ? "pending" : "success";
          M = {
            id: C,
            index: f,
            routeId: c.id,
            params: L ? tt(L.params, i) : i,
            pathname: Vt([this.basepath, R]),
            updatedAt: Date.now(),
            search: L ? tt(L.search, h) : h,
            searchError: void 0,
            status: j,
            isFetching: !1,
            error: void 0,
            paramsError: l[f],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: N,
            loaderDeps: L ? tt(L.loaderDeps, S) : S,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            meta: void 0,
            staticData: c.options.staticData || {},
            loadPromise: nr(),
            fullPath: c.fullPath,
          };
        }
        M.status === "success" &&
          (M.headers =
            (w = (v = c.options).headers) == null
              ? void 0
              : w.call(v, { loaderData: M.loaderData })),
          (n != null && n.preload) || (M.globalNotFound = a === c.id),
          (M.searchError = g);
        const b = d(p);
        (M.context = { ...b, ...M.__routeContext, ...M.__beforeLoadContext }), u.push(M);
      }),
      u.forEach((c, f) => {
        var y, m, v, w;
        const p = this.looseRoutesById[c.routeId];
        if (!this.getMatch(c.id) && (n == null ? void 0 : n._buildLocation) !== !0) {
          const S = u[f - 1],
            k = d(S),
            R = {
              deps: c.loaderDeps,
              params: c.params,
              context: k,
              location: t,
              navigate: (C) => this.navigate({ ...C, _fromLocation: t }),
              buildLocation: this.buildLocation,
              cause: c.cause,
              abortController: c.abortController,
              preload: !!c.preload,
              matches: u,
            };
          (c.__routeContext =
            ((m = (y = p.options).context) == null ? void 0 : m.call(y, R)) ?? {}),
            (c.context = { ...k, ...c.__routeContext, ...c.__beforeLoadContext });
        }
        const g =
          (w = (v = p.options).head) == null
            ? void 0
            : w.call(v, {
                matches: u,
                match: c,
                params: c.params,
                loaderData: c.loaderData ?? void 0,
              });
        (c.links = g == null ? void 0 : g.links),
          (c.scripts = g == null ? void 0 : g.scripts),
          (c.meta = g == null ? void 0 : g.meta);
      }),
      u
    );
  }
}
class Xl extends Error {}
class T0 extends Error {}
function L0(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: { ...e },
    location: e,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  };
}
function M0(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e };
}
function bd(e) {
  return !(typeof e == "object" && e && "data" in e) ||
    !("__isServerError" in e && e.__isServerError) ||
    !(typeof e.data == "object" && e.data)
    ? !1
    : e.__isServerError === !0;
}
function Fd(e) {
  if ("name" in e && "message" in e) {
    const t = new Error(e.message);
    return (t.name = e.name), t;
  }
  return e.data;
}
const ta = F.createContext(void 0),
  O0 = F.createContext(void 0);
function Ur(e) {
  const t = F.useContext(e.from ? O0 : ta);
  return lt({
    select: (r) => {
      const s = r.matches.find((i) => (e.from ? e.from === i.routeId : i.id === t));
      if (
        (Ke(
          !((e.shouldThrow ?? !0) && !s),
          `Could not find ${e.from ? `an active match from "${e.from}"` : "a nearest match!"}`
        ),
        s !== void 0)
      )
        return e.select ? e.select(s) : s;
    },
    structuralSharing: e.structuralSharing,
  });
}
function N0(e) {
  return Ur({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function A0(e) {
  const { select: t, ...n } = e;
  return Ur({ ...n, select: (r) => (t ? t(r.loaderDeps) : r.loaderDeps) });
}
function b0(e) {
  return Ur({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.params) : t.params),
  });
}
function F0(e) {
  return Ur({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function I0(e) {
  const { navigate: t } = Yn();
  return F.useCallback((n) => t({ ...n }), [t]);
}
let Gp = class {
  constructor(t) {
    (this.init = (n) => {
      var r, s;
      this.originalIndex = n.originalIndex;
      const i = this.options,
        o = !(i != null && i.path) && !(i != null && i.id);
      (this.parentRoute = (s = (r = this.options).getParentRoute) == null ? void 0 : s.call(r)),
        o ? (this._path = We) : Ke(this.parentRoute);
      let a = o ? We : i.path;
      a && a !== "/" && (a = ac(a));
      const l = (i == null ? void 0 : i.id) || a;
      let u = o ? We : Vt([this.parentRoute.id === We ? "" : this.parentRoute.id, l]);
      a === We && (a = "/"), u !== We && (u = Vt(["/", u]));
      const d = u === We ? "/" : Vt([this.parentRoute.fullPath, a]);
      (this._path = a),
        (this._id = u),
        (this._fullPath = d),
        (this._to = d),
        (this._ssr = (i == null ? void 0 : i.ssr) ?? n.defaultSsr ?? !0);
    }),
      (this.updateLoader = (n) => (Object.assign(this.options, n), this)),
      (this.update = (n) => (Object.assign(this.options, n), this)),
      (this.lazy = (n) => ((this.lazyFn = n), this)),
      (this.useMatch = (n) =>
        Ur({
          select: n == null ? void 0 : n.select,
          from: this.id,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
        })),
      (this.useRouteContext = (n) =>
        Ur({
          ...n,
          from: this.id,
          select: (r) => (n != null && n.select ? n.select(r.context) : r.context),
        })),
      (this.useSearch = (n) =>
        F0({
          select: n == null ? void 0 : n.select,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (n) =>
        b0({
          select: n == null ? void 0 : n.select,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (n) => A0({ ...n, from: this.id })),
      (this.useLoaderData = (n) => N0({ ...n, from: this.id })),
      (this.useNavigate = () => I0({ from: this.id })),
      (this.options = t || {}),
      (this.isRoot = !(t != null && t.getParentRoute)),
      Ke(!(t != null && t.id && t != null && t.path)),
      (this.$$typeof = Symbol.for("react.memo"));
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
  get ssr() {
    return this._ssr;
  }
  addChildren(t) {
    return this._addFileChildren(t);
  }
  _addFileChildren(t) {
    return (
      Array.isArray(t) && (this.children = t),
      typeof t == "object" && t !== null && (this.children = Object.values(t)),
      this
    );
  }
};
function j0(e) {
  return new Gp(e);
}
class D0 extends Gp {
  constructor(t) {
    super(t);
  }
  addChildren(t) {
    return super.addChildren(t), this;
  }
  _addFileChildren(t) {
    return super._addFileChildren(t), this;
  }
  _addFileTypes() {
    return this;
  }
}
function $0(e) {
  return new D0(e);
}
function z0(e) {
  return new q0(e, { silent: !0 }).createRoute;
}
class q0 {
  constructor(t, n) {
    (this.path = t),
      (this.createRoute = (r) => {
        this.silent;
        const s = j0(r);
        return (s.isRoot = !1), s;
      }),
      (this.silent = n == null ? void 0 : n.silent);
  }
}
function Xi(e) {
  return x.jsx(x.Fragment, { children: e.children });
}
function Jp(e, t, n) {
  return t.options.notFoundComponent
    ? x.jsx(t.options.notFoundComponent, { data: n })
    : e.options.defaultNotFoundComponent
      ? x.jsx(e.options.defaultNotFoundComponent, { data: n })
      : x.jsx(C0, {});
}
const Xp = F.memo(function ({ matchId: t }) {
    var n, r;
    const s = Yn(),
      i = lt({
        select: (w) => {
          var p;
          return (p = w.matches.find((h) => h.id === t)) == null ? void 0 : p.routeId;
        },
      });
    Ke(i);
    const o = s.routesById[i],
      a = o.options.pendingComponent ?? s.options.defaultPendingComponent,
      l = a ? x.jsx(a, {}) : null,
      u = o.options.errorComponent ?? s.options.defaultErrorComponent,
      d = o.options.onCatch ?? s.options.defaultOnCatch,
      c = o.isRoot
        ? (o.options.notFoundComponent ??
          ((n = s.options.notFoundRoute) == null ? void 0 : n.options.component))
        : o.options.notFoundComponent,
      f =
        (!o.isRoot || o.options.wrapInSuspense) &&
        (o.options.wrapInSuspense ??
          a ??
          ((r = o.options.errorComponent) == null ? void 0 : r.preload))
          ? F.Suspense
          : Xi,
      y = u ? lc : Xi,
      m = c ? _0 : Xi,
      v = lt({ select: (w) => w.loadedAt });
    return x.jsx(ta.Provider, {
      value: t,
      children: x.jsx(f, {
        fallback: l,
        children: x.jsx(y, {
          getResetKey: () => v,
          errorComponent: u || ea,
          onCatch: (w, p) => {
            if (vt(w)) throw w;
            d == null || d(w, p);
          },
          children: x.jsx(m, {
            fallback: (w) => {
              if (!c || (w.routeId && w.routeId !== i) || (!w.routeId && !o.isRoot)) throw w;
              return F.createElement(c, w);
            },
            children: x.jsx(U0, { matchId: t }),
          }),
        }),
      }),
    });
  }),
  U0 = F.memo(function ({ matchId: t }) {
    var n, r, s, i, o;
    const a = Yn(),
      {
        match: l,
        matchIndex: u,
        routeId: d,
      } = lt({
        select: (m) => {
          const v = m.matches.findIndex((h) => h.id === t),
            w = m.matches[v];
          return { routeId: w.routeId, matchIndex: v, match: Ji(w, ["id", "status", "error"]) };
        },
        structuralSharing: !0,
      }),
      c = a.routesById[d],
      f = F.useMemo(() => {
        const m = c.options.component ?? a.options.defaultComponent;
        return m ? x.jsx(m, {}) : x.jsx(Yp, {});
      }, [c.options.component, a.options.defaultComponent]),
      y = (c.options.errorComponent ?? a.options.defaultErrorComponent) || ea;
    if (l.status === "notFound") {
      let m;
      return (
        bd(l.error)
          ? (m = (((n = a.options.errorSerializer) == null ? void 0 : n.deserialize) ?? Fd)(
              l.error.data
            ))
          : (m = l.error),
        Ke(vt(m)),
        Jp(a, c, m)
      );
    }
    if (l.status === "redirected")
      throw (Ke(Ln(l.error)), (r = a.getMatch(l.id)) == null ? void 0 : r.loadPromise);
    if (l.status === "error") {
      if (a.isServer) return x.jsx(y, { error: l.error, info: { componentStack: "" } });
      throw bd(l.error)
        ? (((s = a.options.errorSerializer) == null ? void 0 : s.deserialize) ?? Fd)(l.error.data)
        : l.error;
    }
    if (l.status === "pending") {
      const m = c.options.pendingMinMs ?? a.options.defaultPendingMinMs;
      if (m && !((i = a.getMatch(l.id)) != null && i.minPendingPromise) && !a.isServer) {
        const v = nr();
        Promise.resolve().then(() => {
          a.updateMatch(l.id, (w) => ({ ...w, minPendingPromise: v }));
        }),
          setTimeout(() => {
            v.resolve(), a.updateMatch(l.id, (w) => ({ ...w, minPendingPromise: void 0 }));
          }, m);
      }
      throw (o = a.getMatch(l.id)) == null ? void 0 : o.loadPromise;
    }
    return x.jsxs(x.Fragment, {
      children: [f, a.AfterEachMatch ? x.jsx(a.AfterEachMatch, { match: l, matchIndex: u }) : null],
    });
  }),
  Yp = F.memo(function () {
    const t = Yn(),
      n = F.useContext(ta),
      r = lt({
        select: (u) => {
          var d;
          return (d = u.matches.find((c) => c.id === n)) == null ? void 0 : d.routeId;
        },
      }),
      s = t.routesById[r],
      i = lt({
        select: (u) => {
          const c = u.matches.find((f) => f.id === n);
          return Ke(c), c.globalNotFound;
        },
      }),
      o = lt({
        select: (u) => {
          var d;
          const c = u.matches,
            f = c.findIndex((y) => y.id === n);
          return (d = c[f + 1]) == null ? void 0 : d.id;
        },
      });
    if (i) return Jp(t, s, void 0);
    if (!o) return null;
    const a = x.jsx(Xp, { matchId: o }),
      l = t.options.defaultPendingComponent ? x.jsx(t.options.defaultPendingComponent, {}) : null;
    return n === We ? x.jsx(F.Suspense, { fallback: l, children: a }) : a;
  });
function B0() {
  const e = Yn(),
    t = F.useRef({ router: e, mounted: !1 }),
    n = lt({ select: ({ isLoading: c }) => c }),
    [r, s] = F.useState(!1),
    i = lt({ select: (c) => c.matches.some((f) => f.status === "pending"), structuralSharing: !0 }),
    o = Ba(n),
    a = n || r || i,
    l = Ba(a),
    u = n || i,
    d = Ba(u);
  return (
    e.isServer ||
      (e.startReactTransition = (c) => {
        s(!0),
          F.startTransition(() => {
            c(), s(!1);
          });
      }),
    F.useEffect(() => {
      const c = e.history.subscribe(e.load),
        f = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        An(e.latestLocation.href) !== An(f.href) && e.commitLocation({ ...f, replace: !0 }),
        () => {
          c();
        }
      );
    }, [e, e.history]),
    Mi(() => {
      var c;
      if (
        (typeof window < "u" && (c = window.__TSR__) != null && c.dehydrated) ||
        (t.current.router === e && t.current.mounted)
      )
        return;
      (t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (y) {
            console.error(y);
          }
        })();
    }, [e]),
    Mi(() => {
      if (o && !n) {
        const c = e.state.location,
          f = e.state.resolvedLocation,
          y = f.pathname !== c.pathname,
          m = f.href !== c.href;
        e.emit({ type: "onLoad", fromLocation: f, toLocation: c, pathChanged: y, hrefChanged: m });
      }
    }, [o, e, n]),
    Mi(() => {
      if (d && !u) {
        const c = e.state.location,
          f = e.state.resolvedLocation,
          y = f.pathname !== c.pathname,
          m = f.href !== c.href;
        e.emit({
          type: "onBeforeRouteMount",
          fromLocation: f,
          toLocation: c,
          pathChanged: y,
          hrefChanged: m,
        });
      }
    }, [u, d, e]),
    Mi(() => {
      if (l && !a) {
        const c = e.state.location,
          f = e.state.resolvedLocation,
          y = f.pathname !== c.pathname,
          m = f.href !== c.href;
        if (
          (e.emit({
            type: "onResolved",
            fromLocation: f,
            toLocation: c,
            pathChanged: y,
            hrefChanged: m,
          }),
          e.__store.setState((v) => ({ ...v, status: "idle", resolvedLocation: v.location })),
          typeof document < "u" && document.querySelector)
        ) {
          const v = e.state.location.state.__hashScrollIntoViewOptions ?? !0;
          if (v && e.state.location.hash !== "") {
            const w = document.getElementById(e.state.location.hash);
            w && w.scrollIntoView(v);
          }
        }
      }
    }, [a, l, e]),
    null
  );
}
function V0() {
  const e = Yn(),
    t = e.options.defaultPendingComponent ? x.jsx(e.options.defaultPendingComponent, {}) : null,
    n = e.isServer || (typeof document < "u" && window.__TSR__) ? Xi : F.Suspense,
    r = x.jsxs(n, { fallback: t, children: [x.jsx(B0, {}), x.jsx(Q0, {})] });
  return e.options.InnerWrap ? x.jsx(e.options.InnerWrap, { children: r }) : r;
}
function Q0() {
  const e = lt({
      select: (n) => {
        var r;
        return (r = n.matches[0]) == null ? void 0 : r.id;
      },
    }),
    t = lt({ select: (n) => n.loadedAt });
  return x.jsx(ta.Provider, {
    value: e,
    children: x.jsx(lc, {
      getResetKey: () => t,
      errorComponent: ea,
      onCatch: (n) => {
        n.message || n.toString();
      },
      children: e ? x.jsx(Xp, { matchId: e }) : null,
    }),
  });
}
function H0({ router: e, children: t, ...n }) {
  e.update({ ...e.options, ...n, context: { ...e.options.context, ...n.context } });
  const r = $p(),
    s = x.jsx(r.Provider, { value: e, children: t });
  return e.options.Wrap ? x.jsx(e.options.Wrap, { children: s }) : s;
}
function W0({ router: e, ...t }) {
  return x.jsx(H0, { router: e, ...t, children: x.jsx(V0, {}) });
}
var na = class {
    constructor() {
      (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ra = typeof window > "u" || "Deno" in globalThis;
function pt() {}
function K0(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function G0(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function J0(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Id(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function X0(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jd(e, t) {
  const { type: n = "all", exact: r, fetchStatus: s, predicate: i, queryKey: o, stale: a } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== uc(o, t.options)) return !1;
    } else if (!Qs(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Dd(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Vs(t.options.mutationKey) !== Vs(i)) return !1;
    } else if (!Qs(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (s && !s(t)));
}
function uc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Vs)(e);
}
function Vs(e) {
  return JSON.stringify(e, (t, n) =>
    Yl(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n
  );
}
function Qs(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? !Object.keys(t).some((n) => !Qs(e[n], t[n]))
        : !1;
}
function Zp(e, t) {
  if (e === t) return e;
  const n = $d(e) && $d(t);
  if (n || (Yl(e) && Yl(t))) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      i = n ? t : Object.keys(t),
      o = i.length,
      a = n ? [] : {};
    let l = 0;
    for (let u = 0; u < o; u++) {
      const d = n ? u : i[u];
      ((!n && r.includes(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), l++)
        : ((a[d] = Zp(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && l++);
    }
    return s === o && l === s ? e : a;
  }
  return t;
}
function $d(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Yl(e) {
  if (!zd(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !zd(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function zd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Y0(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Z0(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Zp(e, t)
      : t;
}
function ew(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function tw(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var cc = Symbol();
function em(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === cc
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Fn,
  rn,
  Cr,
  pf,
  nw =
    ((pf = class extends na {
      constructor() {
        super();
        H(this, Fn);
        H(this, rn);
        H(this, Cr);
        z(this, Cr, (t) => {
          if (!ra && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, rn) || this.setEventListener(P(this, Cr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, rn)) == null || t.call(this), z(this, rn, void 0));
      }
      setEventListener(t) {
        var n;
        z(this, Cr, t),
          (n = P(this, rn)) == null || n.call(this),
          z(
            this,
            rn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        P(this, Fn) !== t && (z(this, Fn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof P(this, Fn) == "boolean"
          ? P(this, Fn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
      }
    }),
    (Fn = new WeakMap()),
    (rn = new WeakMap()),
    (Cr = new WeakMap()),
    pf),
  tm = new nw(),
  Er,
  sn,
  Rr,
  mf,
  rw =
    ((mf = class extends na {
      constructor() {
        super();
        H(this, Er, !0);
        H(this, sn);
        H(this, Rr);
        z(this, Rr, (t) => {
          if (!ra && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n), window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, sn) || this.setEventListener(P(this, Rr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, sn)) == null || t.call(this), z(this, sn, void 0));
      }
      setEventListener(t) {
        var n;
        z(this, Rr, t),
          (n = P(this, sn)) == null || n.call(this),
          z(this, sn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        P(this, Er) !== t &&
          (z(this, Er, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return P(this, Er);
      }
    }),
    (Er = new WeakMap()),
    (sn = new WeakMap()),
    (Rr = new WeakMap()),
    mf),
  To = new rw();
function sw() {
  let e, t;
  const n = new Promise((s, i) => {
    (e = s), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(s) {
    Object.assign(n, s), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (s) => {
      r({ status: "fulfilled", value: s }), e(s);
    }),
    (n.reject = (s) => {
      r({ status: "rejected", reason: s }), t(s);
    }),
    n
  );
}
function iw(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function nm(e) {
  return (e ?? "online") === "online" ? To.isOnline() : !0;
}
var rm = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Ha(e) {
  return e instanceof rm;
}
function sm(e) {
  let t = !1,
    n = 0,
    r = !1,
    s;
  const i = sw(),
    o = (v) => {
      var w;
      r || (f(new rm(v)), (w = e.abort) == null || w.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () => tm.isFocused() && (e.networkMode === "always" || To.isOnline()) && e.canRun(),
    d = () => nm(e.networkMode) && e.canRun(),
    c = (v) => {
      var w;
      r || ((r = !0), (w = e.onSuccess) == null || w.call(e, v), s == null || s(), i.resolve(v));
    },
    f = (v) => {
      var w;
      r || ((r = !0), (w = e.onError) == null || w.call(e, v), s == null || s(), i.reject(v));
    },
    y = () =>
      new Promise((v) => {
        var w;
        (s = (p) => {
          (r || u()) && v(p);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var v;
        (s = void 0), r || (v = e.onContinue) == null || v.call(e);
      }),
    m = () => {
      if (r) return;
      let v;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        v = w ?? e.fn();
      } catch (p) {
        v = Promise.reject(p);
      }
      Promise.resolve(v)
        .then(c)
        .catch((p) => {
          var R;
          if (r) return;
          const h = e.retry ?? (ra ? 0 : 3),
            g = e.retryDelay ?? iw,
            S = typeof g == "function" ? g(n, p) : g,
            k = h === !0 || (typeof h == "number" && n < h) || (typeof h == "function" && h(n, p));
          if (t || !k) {
            f(p);
            return;
          }
          n++,
            (R = e.onFail) == null || R.call(e, n, p),
            Y0(S)
              .then(() => (u() ? void 0 : y()))
              .then(() => {
                t ? f(p) : m();
              });
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: d,
    start: () => (d() ? m() : y().then(m), i),
  };
}
function ow() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    s = (a) => setTimeout(a, 0);
  const i = (a) => {
      t
        ? e.push(a)
        : s(() => {
            n(a);
          });
    },
    o = () => {
      const a = e;
      (e = []),
        a.length &&
          s(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        t--, t || o();
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var Ne = ow(),
  In,
  yf,
  im =
    ((yf = class {
      constructor() {
        H(this, In);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          G0(this.gcTime) &&
            z(
              this,
              In,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (ra ? 1 / 0 : 5 * 60 * 1e3));
      }
      clearGcTimeout() {
        P(this, In) && (clearTimeout(P(this, In)), z(this, In, void 0));
      }
    }),
    (In = new WeakMap()),
    yf),
  Pr,
  Tr,
  rt,
  Ee,
  Xs,
  jn,
  mt,
  It,
  gf,
  aw =
    ((gf = class extends im {
      constructor(t) {
        super();
        H(this, mt);
        H(this, Pr);
        H(this, Tr);
        H(this, rt);
        H(this, Ee);
        H(this, Xs);
        H(this, jn);
        z(this, jn, !1),
          z(this, Xs, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          z(this, rt, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          z(this, Pr, uw(this.options)),
          (this.state = t.state ?? P(this, Pr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = P(this, Ee)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...P(this, Xs), ...t }), this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && P(this, rt).remove(this);
      }
      setData(t, n) {
        const r = Z0(this.state.data, t, this.options);
        return (
          xe(this, mt, It).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        xe(this, mt, It).call(this, { type: "setState", state: t, setStateOptions: n });
      }
      cancel(t) {
        var r, s;
        const n = (r = P(this, Ee)) == null ? void 0 : r.promise;
        return (
          (s = P(this, Ee)) == null || s.cancel(t), n ? n.then(pt).catch(pt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(P(this, Pr));
      }
      isActive() {
        return this.observers.some((t) => X0(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === cc ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated || this.state.data === void 0 || !J0(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }), (n = P(this, Ee)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }), (n = P(this, Ee)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          P(this, rt).notify({ type: "observerAdded", query: this, observer: t }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (P(this, Ee) &&
              (P(this, jn) ? P(this, Ee).cancel({ revert: !0 }) : P(this, Ee).cancelRetry()),
            this.scheduleGc()),
          P(this, rt).notify({ type: "observerRemoved", query: this, observer: t }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || xe(this, mt, It).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var l, u, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (P(this, Ee)) return P(this, Ee).continueRetry(), P(this, Ee).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const c = this.observers.find((f) => f.options.queryFn);
          c && this.setOptions(c.options);
        }
        const r = new AbortController(),
          s = (c) => {
            Object.defineProperty(c, "signal", {
              enumerable: !0,
              get: () => (z(this, jn, !0), r.signal),
            });
          },
          i = () => {
            const c = em(this.options, n),
              f = { queryKey: this.queryKey, meta: this.meta };
            return (
              s(f),
              z(this, jn, !1),
              this.options.persister ? this.options.persister(c, f, this) : c(f)
            );
          },
          o = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        s(o),
          (l = this.options.behavior) == null || l.onFetch(o, this),
          z(this, Tr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !== ((u = o.fetchOptions) == null ? void 0 : u.meta)) &&
            xe(this, mt, It).call(this, {
              type: "fetch",
              meta: (d = o.fetchOptions) == null ? void 0 : d.meta,
            });
        const a = (c) => {
          var f, y, m, v;
          (Ha(c) && c.silent) || xe(this, mt, It).call(this, { type: "error", error: c }),
            Ha(c) ||
              ((y = (f = P(this, rt).config).onError) == null || y.call(f, c, this),
              (v = (m = P(this, rt).config).onSettled) == null ||
                v.call(m, this.state.data, c, this)),
            this.scheduleGc();
        };
        return (
          z(
            this,
            Ee,
            sm({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (c) => {
                var f, y, m, v;
                if (c === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(c);
                } catch (w) {
                  a(w);
                  return;
                }
                (y = (f = P(this, rt).config).onSuccess) == null || y.call(f, c, this),
                  (v = (m = P(this, rt).config).onSettled) == null ||
                    v.call(m, c, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (c, f) => {
                xe(this, mt, It).call(this, { type: "failed", failureCount: c, error: f });
              },
              onPause: () => {
                xe(this, mt, It).call(this, { type: "pause" });
              },
              onContinue: () => {
                xe(this, mt, It).call(this, { type: "continue" });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            })
          ),
          P(this, Ee).start()
        );
      }
    }),
    (Pr = new WeakMap()),
    (Tr = new WeakMap()),
    (rt = new WeakMap()),
    (Ee = new WeakMap()),
    (Xs = new WeakMap()),
    (jn = new WeakMap()),
    (mt = new WeakSet()),
    (It = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return { ...r, ...lw(r.data, this.options), fetchMeta: t.meta ?? null };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const s = t.error;
            return Ha(s) && s.revert && P(this, Tr)
              ? { ...P(this, Tr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Ne.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            P(this, rt).notify({ query: this, type: "updated", action: t });
        });
    }),
    gf);
function lw(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: nm(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function uw(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Tt,
  vf,
  cw =
    ((vf = class extends na {
      constructor(t = {}) {
        super();
        H(this, Tt);
        (this.config = t), z(this, Tt, new Map());
      }
      build(t, n, r) {
        const s = n.queryKey,
          i = n.queryHash ?? uc(s, n);
        let o = this.get(i);
        return (
          o ||
            ((o = new aw({
              cache: this,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        P(this, Tt).has(t.queryHash) ||
          (P(this, Tt).set(t.queryHash, t), this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = P(this, Tt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && P(this, Tt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ne.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return P(this, Tt).get(t);
      }
      getAll() {
        return [...P(this, Tt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => jd(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => jd(t, r)) : n;
      }
      notify(t) {
        Ne.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ne.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ne.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Tt = new WeakMap()),
    vf),
  Lt,
  Me,
  Dn,
  Mt,
  Yt,
  wf,
  dw =
    ((wf = class extends im {
      constructor(t) {
        super();
        H(this, Mt);
        H(this, Lt);
        H(this, Me);
        H(this, Dn);
        (this.mutationId = t.mutationId),
          z(this, Me, t.mutationCache),
          z(this, Lt, []),
          (this.state = t.state || fw()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        P(this, Lt).includes(t) ||
          (P(this, Lt).push(t),
          this.clearGcTimeout(),
          P(this, Me).notify({ type: "observerAdded", mutation: this, observer: t }));
      }
      removeObserver(t) {
        z(
          this,
          Lt,
          P(this, Lt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          P(this, Me).notify({ type: "observerRemoved", mutation: this, observer: t });
      }
      optionalRemove() {
        P(this, Lt).length ||
          (this.state.status === "pending" ? this.scheduleGc() : P(this, Me).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = P(this, Dn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, i, o, a, l, u, d, c, f, y, m, v, w, p, h, g, S, k, R, C;
        z(
          this,
          Dn,
          sm({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (_, L) => {
              xe(this, Mt, Yt).call(this, { type: "failed", failureCount: _, error: L });
            },
            onPause: () => {
              xe(this, Mt, Yt).call(this, { type: "pause" });
            },
            onContinue: () => {
              xe(this, Mt, Yt).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Me).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !P(this, Dn).canStart();
        try {
          if (!n) {
            xe(this, Mt, Yt).call(this, { type: "pending", variables: t, isPaused: r }),
              await ((i = (s = P(this, Me).config).onMutate) == null ? void 0 : i.call(s, t, this));
            const L = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t));
            L !== this.state.context &&
              xe(this, Mt, Yt).call(this, {
                type: "pending",
                context: L,
                variables: t,
                isPaused: r,
              });
          }
          const _ = await P(this, Dn).start();
          return (
            await ((u = (l = P(this, Me).config).onSuccess) == null
              ? void 0
              : u.call(l, _, t, this.state.context, this)),
            await ((c = (d = this.options).onSuccess) == null
              ? void 0
              : c.call(d, _, t, this.state.context)),
            await ((y = (f = P(this, Me).config).onSettled) == null
              ? void 0
              : y.call(f, _, null, this.state.variables, this.state.context, this)),
            await ((v = (m = this.options).onSettled) == null
              ? void 0
              : v.call(m, _, null, t, this.state.context)),
            xe(this, Mt, Yt).call(this, { type: "success", data: _ }),
            _
          );
        } catch (_) {
          try {
            throw (
              (await ((p = (w = P(this, Me).config).onError) == null
                ? void 0
                : p.call(w, _, t, this.state.context, this)),
              await ((g = (h = this.options).onError) == null
                ? void 0
                : g.call(h, _, t, this.state.context)),
              await ((k = (S = P(this, Me).config).onSettled) == null
                ? void 0
                : k.call(S, void 0, _, this.state.variables, this.state.context, this)),
              await ((C = (R = this.options).onSettled) == null
                ? void 0
                : C.call(R, void 0, _, t, this.state.context)),
              _)
            );
          } finally {
            xe(this, Mt, Yt).call(this, { type: "error", error: _ });
          }
        } finally {
          P(this, Me).runNext(this);
        }
      }
    }),
    (Lt = new WeakMap()),
    (Me = new WeakMap()),
    (Dn = new WeakMap()),
    (Mt = new WeakSet()),
    (Yt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return { ...r, failureCount: t.failureCount, failureReason: t.error };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Ne.batch(() => {
          P(this, Lt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            P(this, Me).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    wf);
function fw() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var zt,
  yt,
  Ys,
  Sf,
  hw =
    ((Sf = class extends na {
      constructor(t = {}) {
        super();
        H(this, zt);
        H(this, yt);
        H(this, Ys);
        (this.config = t), z(this, zt, new Set()), z(this, yt, new Map()), z(this, Ys, 0);
      }
      build(t, n, r) {
        const s = new dw({
          mutationCache: this,
          mutationId: ++ui(this, Ys)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(s), s;
      }
      add(t) {
        P(this, zt).add(t);
        const n = Fi(t);
        if (typeof n == "string") {
          const r = P(this, yt).get(n);
          r ? r.push(t) : P(this, yt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (P(this, zt).delete(t)) {
          const n = Fi(t);
          if (typeof n == "string") {
            const r = P(this, yt).get(n);
            if (r)
              if (r.length > 1) {
                const s = r.indexOf(t);
                s !== -1 && r.splice(s, 1);
              } else r[0] === t && P(this, yt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Fi(t);
        if (typeof n == "string") {
          const r = P(this, yt).get(n),
            s = r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Fi(t);
        if (typeof n == "string") {
          const s =
            (r = P(this, yt).get(n)) == null ? void 0 : r.find((i) => i !== t && i.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Ne.batch(() => {
          P(this, zt).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            P(this, zt).clear(),
            P(this, yt).clear();
        });
      }
      getAll() {
        return Array.from(P(this, zt));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Dd(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Dd(t, n));
      }
      notify(t) {
        Ne.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ne.batch(() => Promise.all(t.map((n) => n.continue().catch(pt))));
      }
    }),
    (zt = new WeakMap()),
    (yt = new WeakMap()),
    (Ys = new WeakMap()),
    Sf);
function Fi(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function qd(e) {
  return {
    onFetch: (t, n) => {
      var d, c, f, y, m;
      const r = t.options,
        s =
          (f =
            (c = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : c.fetchMore) ==
          null
            ? void 0
            : f.direction,
        i = ((y = t.state.data) == null ? void 0 : y.pages) || [],
        o = ((m = t.state.data) == null ? void 0 : m.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let v = !1;
        const w = (g) => {
            Object.defineProperty(g, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (v = !0)
                  : t.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                t.signal
              ),
            });
          },
          p = em(t.options, t.fetchOptions),
          h = async (g, S, k) => {
            if (v) return Promise.reject();
            if (S == null && g.pages.length) return Promise.resolve(g);
            const R = {
              queryKey: t.queryKey,
              pageParam: S,
              direction: k ? "backward" : "forward",
              meta: t.options.meta,
            };
            w(R);
            const C = await p(R),
              { maxPages: _ } = t.options,
              L = k ? tw : ew;
            return { pages: L(g.pages, C, _), pageParams: L(g.pageParams, S, _) };
          };
        if (s && i.length) {
          const g = s === "backward",
            S = g ? pw : Ud,
            k = { pages: i, pageParams: o },
            R = S(r, k);
          a = await h(k, R, g);
        } else {
          const g = e ?? i.length;
          do {
            const S = l === 0 ? (o[0] ?? r.initialPageParam) : Ud(r, a);
            if (l > 0 && S == null) break;
            (a = await h(a, S)), l++;
          } while (l < g);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var v, w;
            return (w = (v = t.options).persister) == null
              ? void 0
              : w.call(v, u, { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal }, n);
          })
        : (t.fetchFn = u);
    },
  };
}
function Ud(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function pw(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var ie,
  on,
  an,
  Lr,
  Mr,
  ln,
  Or,
  Nr,
  xf,
  mw =
    ((xf = class {
      constructor(e = {}) {
        H(this, ie);
        H(this, on);
        H(this, an);
        H(this, Lr);
        H(this, Mr);
        H(this, ln);
        H(this, Or);
        H(this, Nr);
        z(this, ie, e.queryCache || new cw()),
          z(this, on, e.mutationCache || new hw()),
          z(this, an, e.defaultOptions || {}),
          z(this, Lr, new Map()),
          z(this, Mr, new Map()),
          z(this, ln, 0);
      }
      mount() {
        ui(this, ln)._++,
          P(this, ln) === 1 &&
            (z(
              this,
              Or,
              tm.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), P(this, ie).onFocus());
              })
            ),
            z(
              this,
              Nr,
              To.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), P(this, ie).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        ui(this, ln)._--,
          P(this, ln) === 0 &&
            ((e = P(this, Or)) == null || e.call(this),
            z(this, Or, void 0),
            (t = P(this, Nr)) == null || t.call(this),
            z(this, Nr, void 0));
      }
      isFetching(e) {
        return P(this, ie).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return P(this, on).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, ie).get(t.queryHash)) == null ? void 0 : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = P(this, ie).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale && n.isStaleByTime(Id(t.staleTime, n)) && this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return P(this, ie)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          s = P(this, ie).get(r.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = K0(t, i);
        if (o !== void 0)
          return P(this, ie)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ne.batch(() =>
          P(this, ie)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, ie).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = P(this, ie);
        Ne.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = P(this, ie),
          r = { type: "active", ...e };
        return Ne.batch(
          () => (
            n.findAll(e).forEach((s) => {
              s.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Ne.batch(() =>
            P(this, ie)
              .findAll(e)
              .map((s) => s.cancel(n))
          );
        return Promise.all(r).then(pt).catch(pt);
      }
      invalidateQueries(e, t = {}) {
        return Ne.batch(() => {
          if (
            (P(this, ie)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none")
          )
            return Promise.resolve();
          const n = {
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active",
          };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Ne.batch(() =>
            P(this, ie)
              .findAll(e)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let i = s.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(pt)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(pt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, ie).build(this, t);
        return n.isStaleByTime(Id(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(pt).catch(pt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = qd(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(pt).catch(pt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = qd(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return To.isOnline() ? P(this, on).resumePausedMutations() : Promise.resolve();
      }
      getQueryCache() {
        return P(this, ie);
      }
      getMutationCache() {
        return P(this, on);
      }
      getDefaultOptions() {
        return P(this, an);
      }
      setDefaultOptions(e) {
        z(this, an, e);
      }
      setQueryDefaults(e, t) {
        P(this, Lr).set(Vs(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...P(this, Lr).values()],
          n = {};
        return (
          t.forEach((r) => {
            Qs(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        P(this, Mr).set(Vs(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...P(this, Mr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Qs(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...P(this, an).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = uc(t.queryKey, t)),
          t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === cc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...P(this, an).mutations,
              ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        P(this, ie).clear(), P(this, on).clear();
      }
    }),
    (ie = new WeakMap()),
    (on = new WeakMap()),
    (an = new WeakMap()),
    (Lr = new WeakMap()),
    (Mr = new WeakMap()),
    (ln = new WeakMap()),
    (Or = new WeakMap()),
    (Nr = new WeakMap()),
    xf),
  yw = F.createContext(void 0),
  gw = ({ client: e, children: t }) => (
    F.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    x.jsx(yw.Provider, { value: e, children: t })
  ),
  Nt = [],
  nt = [],
  vw = Uint8Array,
  Wa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var tr = 0, ww = Wa.length; tr < ww; ++tr) (Nt[tr] = Wa[tr]), (nt[Wa.charCodeAt(tr)] = tr);
nt[45] = 62;
nt[95] = 63;
function Sw(e) {
  var t = e.length;
  if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var r = n === t ? 0 : 4 - (n % 4);
  return [n, r];
}
function xw(e, t, n) {
  return ((t + n) * 3) / 4 - n;
}
function Hs(e) {
  var t,
    n = Sw(e),
    r = n[0],
    s = n[1],
    i = new vw(xw(e, r, s)),
    o = 0,
    a = s > 0 ? r - 4 : r,
    l;
  for (l = 0; l < a; l += 4)
    (t =
      (nt[e.charCodeAt(l)] << 18) |
      (nt[e.charCodeAt(l + 1)] << 12) |
      (nt[e.charCodeAt(l + 2)] << 6) |
      nt[e.charCodeAt(l + 3)]),
      (i[o++] = (t >> 16) & 255),
      (i[o++] = (t >> 8) & 255),
      (i[o++] = t & 255);
  return (
    s === 2 &&
      ((t = (nt[e.charCodeAt(l)] << 2) | (nt[e.charCodeAt(l + 1)] >> 4)), (i[o++] = t & 255)),
    s === 1 &&
      ((t =
        (nt[e.charCodeAt(l)] << 10) |
        (nt[e.charCodeAt(l + 1)] << 4) |
        (nt[e.charCodeAt(l + 2)] >> 2)),
      (i[o++] = (t >> 8) & 255),
      (i[o++] = t & 255)),
    i
  );
}
function kw(e) {
  return Nt[(e >> 18) & 63] + Nt[(e >> 12) & 63] + Nt[(e >> 6) & 63] + Nt[e & 63];
}
function _w(e, t, n) {
  for (var r, s = [], i = t; i < n; i += 3)
    (r = ((e[i] << 16) & 16711680) + ((e[i + 1] << 8) & 65280) + (e[i + 2] & 255)), s.push(kw(r));
  return s.join("");
}
function Ws(e) {
  for (var t, n = e.length, r = n % 3, s = [], i = 16383, o = 0, a = n - r; o < a; o += i)
    s.push(_w(e, o, o + i > a ? a : o + i));
  return (
    r === 1
      ? ((t = e[n - 1]), s.push(Nt[t >> 2] + Nt[(t << 4) & 63] + "=="))
      : r === 2 &&
        ((t = (e[n - 2] << 8) + e[n - 1]),
        s.push(Nt[t >> 10] + Nt[(t >> 4) & 63] + Nt[(t << 2) & 63] + "=")),
    s.join("")
  );
}
function $t(e) {
  if (e === void 0) return {};
  if (!om(e))
    throw new Error(`The arguments to a Convex function must be an object. Received: ${e}`);
  return e;
}
function Cw(e) {
  if (typeof e > "u")
    throw new Error(
      "Client created with undefined deployment address. If you used an environment variable, check that it's set."
    );
  if (typeof e != "string") throw new Error(`Invalid deployment address: found ${e}".`);
  if (!(e.startsWith("http:") || e.startsWith("https:")))
    throw new Error(
      `Invalid deployment address: Must start with "https://" or "http://". Found "${e}".`
    );
  try {
    new URL(e);
  } catch {
    throw new Error(
      `Invalid deployment address: "${e}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`
    );
  }
  if (e.endsWith(".convex.site"))
    throw new Error(
      `Invalid deployment address: "${e}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`
    );
}
function om(e) {
  var s;
  const t = typeof e == "object",
    n = Object.getPrototypeOf(e),
    r =
      n === null ||
      n === Object.prototype ||
      ((s = n == null ? void 0 : n.constructor) == null ? void 0 : s.name) === "Object";
  return t && r;
}
const am = !0,
  Br = BigInt("-9223372036854775808"),
  dc = BigInt("9223372036854775807"),
  Zl = BigInt("0"),
  Ew = BigInt("8"),
  Rw = BigInt("256");
function lm(e) {
  return Number.isNaN(e) || !Number.isFinite(e) || Object.is(e, -0);
}
function Pw(e) {
  e < Zl && (e -= Br + Br);
  let t = e.toString(16);
  t.length % 2 === 1 && (t = "0" + t);
  const n = new Uint8Array(new ArrayBuffer(8));
  let r = 0;
  for (const s of t.match(/.{2}/g).reverse()) n.set([parseInt(s, 16)], r++), (e >>= Ew);
  return Ws(n);
}
function Tw(e) {
  const t = Hs(e);
  if (t.byteLength !== 8)
    throw new Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);
  let n = Zl,
    r = Zl;
  for (const s of t) (n += BigInt(s) * Rw ** r), r++;
  return n > dc && (n += Br + Br), n;
}
function Lw(e) {
  if (e < Br || dc < e) throw new Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);
  const t = new ArrayBuffer(8);
  return new DataView(t).setBigInt64(0, e, !0), Ws(new Uint8Array(t));
}
function Mw(e) {
  const t = Hs(e);
  if (t.byteLength !== 8)
    throw new Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);
  return new DataView(t.buffer).getBigInt64(0, !0);
}
const Ow = DataView.prototype.setBigInt64 ? Lw : Pw,
  Nw = DataView.prototype.getBigInt64 ? Mw : Tw,
  Bd = 1024;
function um(e) {
  if (e.length > Bd) throw new Error(`Field name ${e} exceeds maximum field name length ${Bd}.`);
  if (e.startsWith("$")) throw new Error(`Field name ${e} starts with a '$', which is reserved.`);
  for (let t = 0; t < e.length; t += 1) {
    const n = e.charCodeAt(t);
    if (n < 32 || n >= 127)
      throw new Error(
        `Field name ${e} has invalid character '${e[t]}': Field names can only contain non-control ASCII characters`
      );
  }
}
function Vr(e) {
  if (e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string") return e;
  if (Array.isArray(e)) return e.map((r) => Vr(r));
  if (typeof e != "object") throw new Error(`Unexpected type of ${e}`);
  const t = Object.entries(e);
  if (t.length === 1) {
    const r = t[0][0];
    if (r === "$bytes") {
      if (typeof e.$bytes != "string") throw new Error(`Malformed $bytes field on ${e}`);
      return Hs(e.$bytes).buffer;
    }
    if (r === "$integer") {
      if (typeof e.$integer != "string") throw new Error(`Malformed $integer field on ${e}`);
      return Nw(e.$integer);
    }
    if (r === "$float") {
      if (typeof e.$float != "string") throw new Error(`Malformed $float field on ${e}`);
      const s = Hs(e.$float);
      if (s.byteLength !== 8)
        throw new Error(`Received ${s.byteLength} bytes, expected 8 for $float`);
      const o = new DataView(s.buffer).getFloat64(0, am);
      if (!lm(o)) throw new Error(`Float ${o} should be encoded as a number`);
      return o;
    }
    if (r === "$set")
      throw new Error("Received a Set which is no longer supported as a Convex type.");
    if (r === "$map")
      throw new Error("Received a Map which is no longer supported as a Convex type.");
  }
  const n = {};
  for (const [r, s] of Object.entries(e)) um(r), (n[r] = Vr(s));
  return n;
}
function Cs(e) {
  return JSON.stringify(e, (t, n) =>
    n === void 0 ? "undefined" : typeof n == "bigint" ? `${n.toString()}n` : n
  );
}
function eu(e, t, n, r) {
  var o;
  if (e === void 0) {
    const a = n && ` (present at path ${n} in original object ${Cs(t)})`;
    throw new Error(
      `undefined is not a valid Convex value${a}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    );
  }
  if (e === null) return e;
  if (typeof e == "bigint") {
    if (e < Br || dc < e) throw new Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);
    return { $integer: Ow(e) };
  }
  if (typeof e == "number")
    if (lm(e)) {
      const a = new ArrayBuffer(8);
      return new DataView(a).setFloat64(0, e, am), { $float: Ws(new Uint8Array(a)) };
    } else return e;
  if (typeof e == "boolean" || typeof e == "string") return e;
  if (e instanceof ArrayBuffer) return { $bytes: Ws(new Uint8Array(e)) };
  if (Array.isArray(e)) return e.map((a, l) => eu(a, t, n + `[${l}]`));
  if (e instanceof Set) throw new Error(Ka(n, "Set", [...e], t));
  if (e instanceof Map) throw new Error(Ka(n, "Map", [...e], t));
  if (!om(e)) {
    const a = (o = e == null ? void 0 : e.constructor) == null ? void 0 : o.name,
      l = a ? `${a} ` : "";
    throw new Error(Ka(n, l, e, t));
  }
  const s = {},
    i = Object.entries(e);
  i.sort(([a, l], [u, d]) => (a === u ? 0 : a < u ? -1 : 1));
  for (const [a, l] of i) l !== void 0 && (um(a), (s[a] = eu(l, t, n + `.${a}`)));
  return s;
}
function Ka(e, t, n, r) {
  return e
    ? `${t}${Cs(n)} is not a supported Convex type (present at path ${e} in original object ${Cs(r)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    : `${t}${Cs(n)} is not a supported Convex type.`;
}
function kn(e) {
  return eu(e, e, "");
}
var Aw = Object.defineProperty,
  bw = (e, t, n) =>
    t in e ? Aw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ga = (e, t, n) => bw(e, typeof t != "symbol" ? t + "" : t, n),
  Vd,
  Qd;
const Fw = Symbol.for("ConvexError");
class tu extends ((Qd = Error), (Vd = Fw), Qd) {
  constructor(t) {
    super(typeof t == "string" ? t : Cs(t)),
      Ga(this, "name", "ConvexError"),
      Ga(this, "data"),
      Ga(this, Vd, !0),
      (this.data = t);
  }
}
const Hd = "1.18.2";
var Iw = Object.defineProperty,
  jw = (e, t, n) =>
    t in e ? Iw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Wd = (e, t, n) => jw(e, typeof t != "symbol" ? t + "" : t, n);
const Dw = "color:rgb(0, 145, 255)";
function cm(e) {
  switch (e) {
    case "query":
      return "Q";
    case "mutation":
      return "M";
    case "action":
      return "A";
    case "any":
      return "?";
  }
}
class $w {
  constructor(t) {
    Wd(this, "_onLogLineFuncs"),
      Wd(this, "_verbose"),
      (this._onLogLineFuncs = {}),
      (this._verbose = t.verbose);
  }
  addLogLineListener(t) {
    let n = Math.random().toString(36).substring(2, 15);
    for (let r = 0; r < 10 && this._onLogLineFuncs[n] !== void 0; r++)
      n = Math.random().toString(36).substring(2, 15);
    return (
      (this._onLogLineFuncs[n] = t),
      () => {
        delete this._onLogLineFuncs[n];
      }
    );
  }
  logVerbose(...t) {
    if (this._verbose)
      for (const n of Object.values(this._onLogLineFuncs))
        n("debug", `${new Date().toISOString()}`, ...t);
  }
  log(...t) {
    for (const n of Object.values(this._onLogLineFuncs)) n("info", ...t);
  }
  warn(...t) {
    for (const n of Object.values(this._onLogLineFuncs)) n("warn", ...t);
  }
  error(...t) {
    for (const n of Object.values(this._onLogLineFuncs)) n("error", ...t);
  }
}
function dm(e) {
  const t = new $w(e);
  return (
    t.addLogLineListener((n, ...r) => {
      switch (n) {
        case "debug":
          console.debug(...r);
          break;
        case "info":
          console.log(...r);
          break;
        case "warn":
          console.warn(...r);
          break;
        case "error":
          console.error(...r);
          break;
        default:
          console.log(...r);
      }
    }),
    t
  );
}
function Lo(e, t, n, r, s) {
  const i = cm(n);
  if (
    (typeof s == "object" && (s = `ConvexError ${JSON.stringify(s.errorData, null, 2)}`),
    t === "info")
  ) {
    const o = s.match(/^\[.*?\] /);
    if (o === null) {
      e.error(`[CONVEX ${i}(${r})] Could not parse console.log`);
      return;
    }
    const a = s.slice(1, o[0].length - 2),
      l = s.slice(o[0].length);
    e.log(`%c[CONVEX ${i}(${r})] [${a}]`, Dw, l);
  } else e.error(`[CONVEX ${i}(${r})] ${s}`);
}
function zw(e, t) {
  const n = `[CONVEX FATAL ERROR] ${t}`;
  return e.error(n), new Error(n);
}
function mr(e, t, n) {
  return `[CONVEX ${cm(e)}(${t})] ${n.errorMessage}
  Called by client`;
}
function nu(e, t) {
  return (t.data = e.errorData), t;
}
function Mo(e) {
  const t = e.split(":");
  let n, r;
  return (
    t.length === 1
      ? ((n = t[0]), (r = "default"))
      : ((n = t.slice(0, t.length - 1).join(":")), (r = t[t.length - 1])),
    n.endsWith(".js") && (n = n.slice(0, -3)),
    `${n}:${r}`
  );
}
function Un(e, t) {
  return JSON.stringify({ udfPath: Mo(e), args: kn(t) });
}
var qw = Object.defineProperty,
  Uw = (e, t, n) =>
    t in e ? qw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Et = (e, t, n) => Uw(e, typeof t != "symbol" ? t + "" : t, n);
class Bw {
  constructor() {
    Et(this, "nextQueryId"),
      Et(this, "querySetVersion"),
      Et(this, "querySet"),
      Et(this, "queryIdToToken"),
      Et(this, "identityVersion"),
      Et(this, "auth"),
      Et(this, "outstandingQueriesOlderThanRestart"),
      Et(this, "outstandingAuthOlderThanRestart"),
      Et(this, "paused"),
      Et(this, "pendingQuerySetModifications"),
      (this.nextQueryId = 0),
      (this.querySetVersion = 0),
      (this.identityVersion = 0),
      (this.querySet = new Map()),
      (this.queryIdToToken = new Map()),
      (this.outstandingQueriesOlderThanRestart = new Set()),
      (this.outstandingAuthOlderThanRestart = !1),
      (this.paused = !1),
      (this.pendingQuerySetModifications = new Map());
  }
  hasSyncedPastLastReconnect() {
    return (
      this.outstandingQueriesOlderThanRestart.size === 0 && !this.outstandingAuthOlderThanRestart
    );
  }
  markAuthCompletion() {
    this.outstandingAuthOlderThanRestart = !1;
  }
  subscribe(t, n, r, s) {
    const i = Mo(t),
      o = Un(i, n),
      a = this.querySet.get(o);
    if (a !== void 0)
      return (
        (a.numSubscribers += 1),
        { queryToken: o, modification: null, unsubscribe: () => this.removeSubscriber(o) }
      );
    {
      const l = this.nextQueryId++,
        u = {
          id: l,
          canonicalizedUdfPath: i,
          args: n,
          numSubscribers: 1,
          journal: r,
          componentPath: s,
        };
      this.querySet.set(o, u), this.queryIdToToken.set(l, o);
      const d = this.querySetVersion,
        c = this.querySetVersion + 1,
        f = { type: "Add", queryId: l, udfPath: i, args: [kn(n)], journal: r, componentPath: s };
      return (
        this.paused ? this.pendingQuerySetModifications.set(l, f) : (this.querySetVersion = c),
        {
          queryToken: o,
          modification: {
            type: "ModifyQuerySet",
            baseVersion: d,
            newVersion: c,
            modifications: [f],
          },
          unsubscribe: () => this.removeSubscriber(o),
        }
      );
    }
  }
  transition(t) {
    for (const n of t.modifications)
      switch (n.type) {
        case "QueryUpdated":
        case "QueryFailed": {
          this.outstandingQueriesOlderThanRestart.delete(n.queryId);
          const r = n.journal;
          if (r !== void 0) {
            const s = this.queryIdToToken.get(n.queryId);
            s !== void 0 && (this.querySet.get(s).journal = r);
          }
          break;
        }
        case "QueryRemoved": {
          this.outstandingQueriesOlderThanRestart.delete(n.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${n.type}`);
      }
  }
  queryId(t, n) {
    const r = Mo(t),
      s = Un(r, n),
      i = this.querySet.get(s);
    return i !== void 0 ? i.id : null;
  }
  isCurrentOrNewerAuthVersion(t) {
    return t >= this.identityVersion;
  }
  setAuth(t) {
    this.auth = { tokenType: "User", value: t };
    const n = this.identityVersion;
    return (
      this.paused || (this.identityVersion = n + 1),
      { type: "Authenticate", baseVersion: n, ...this.auth }
    );
  }
  setAdminAuth(t, n) {
    const r = { tokenType: "Admin", value: t, impersonating: n };
    this.auth = r;
    const s = this.identityVersion;
    return (
      this.paused || (this.identityVersion = s + 1), { type: "Authenticate", baseVersion: s, ...r }
    );
  }
  clearAuth() {
    (this.auth = void 0), this.markAuthCompletion();
    const t = this.identityVersion;
    return (
      this.paused || (this.identityVersion = t + 1),
      { type: "Authenticate", tokenType: "None", baseVersion: t }
    );
  }
  hasAuth() {
    return !!this.auth;
  }
  isNewAuth(t) {
    var n;
    return ((n = this.auth) == null ? void 0 : n.value) !== t;
  }
  queryPath(t) {
    const n = this.queryIdToToken.get(t);
    return n ? this.querySet.get(n).canonicalizedUdfPath : null;
  }
  queryArgs(t) {
    const n = this.queryIdToToken.get(t);
    return n ? this.querySet.get(n).args : null;
  }
  queryToken(t) {
    return this.queryIdToToken.get(t) ?? null;
  }
  queryJournal(t) {
    var n;
    return (n = this.querySet.get(t)) == null ? void 0 : n.journal;
  }
  restart(t) {
    this.unpause(), this.outstandingQueriesOlderThanRestart.clear();
    const n = [];
    for (const i of this.querySet.values()) {
      const o = {
        type: "Add",
        queryId: i.id,
        udfPath: i.canonicalizedUdfPath,
        args: [kn(i.args)],
        journal: i.journal,
        componentPath: i.componentPath,
      };
      n.push(o), t.has(i.id) || this.outstandingQueriesOlderThanRestart.add(i.id);
    }
    this.querySetVersion = 1;
    const r = { type: "ModifyQuerySet", baseVersion: 0, newVersion: 1, modifications: n };
    if (!this.auth) return (this.identityVersion = 0), [r, void 0];
    this.outstandingAuthOlderThanRestart = !0;
    const s = { type: "Authenticate", baseVersion: 0, ...this.auth };
    return (this.identityVersion = 1), [r, s];
  }
  pause() {
    this.paused = !0;
  }
  resume() {
    const t =
        this.pendingQuerySetModifications.size > 0
          ? {
              type: "ModifyQuerySet",
              baseVersion: this.querySetVersion,
              newVersion: ++this.querySetVersion,
              modifications: Array.from(this.pendingQuerySetModifications.values()),
            }
          : void 0,
      n =
        this.auth !== void 0
          ? { type: "Authenticate", baseVersion: this.identityVersion++, ...this.auth }
          : void 0;
    return this.unpause(), [t, n];
  }
  unpause() {
    (this.paused = !1), this.pendingQuerySetModifications.clear();
  }
  removeSubscriber(t) {
    const n = this.querySet.get(t);
    if (n.numSubscribers > 1) return (n.numSubscribers -= 1), null;
    {
      this.querySet.delete(t),
        this.queryIdToToken.delete(n.id),
        this.outstandingQueriesOlderThanRestart.delete(n.id);
      const r = this.querySetVersion,
        s = this.querySetVersion + 1,
        i = { type: "Remove", queryId: n.id };
      return (
        this.paused
          ? this.pendingQuerySetModifications.has(n.id)
            ? this.pendingQuerySetModifications.delete(n.id)
            : this.pendingQuerySetModifications.set(n.id, i)
          : (this.querySetVersion = s),
        { type: "ModifyQuerySet", baseVersion: r, newVersion: s, modifications: [i] }
      );
    }
  }
}
var Vw = Object.defineProperty,
  Qw = (e, t, n) =>
    t in e ? Vw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Kd = (e, t, n) => Qw(e, typeof t != "symbol" ? t + "" : t, n);
class Hw {
  constructor(t) {
    (this.logger = t),
      Kd(this, "inflightRequests"),
      Kd(this, "requestsOlderThanRestart"),
      (this.inflightRequests = new Map()),
      (this.requestsOlderThanRestart = new Set());
  }
  request(t, n) {
    return new Promise((s) => {
      const i = n ? "Requested" : "NotSent";
      this.inflightRequests.set(t.requestId, {
        message: t,
        status: { status: i, requestedAt: new Date(), onResult: s },
      });
    });
  }
  onResponse(t) {
    const n = this.inflightRequests.get(t.requestId);
    if (n === void 0 || n.status.status === "Completed") return null;
    const r = n.message.type === "Mutation" ? "mutation" : "action",
      s = n.message.udfPath;
    for (const l of t.logLines) Lo(this.logger, "info", r, s, l);
    const i = n.status;
    let o, a;
    if (t.success)
      (o = { success: !0, logLines: t.logLines, value: Vr(t.result) }), (a = () => i.onResult(o));
    else {
      const l = t.result,
        { errorData: u } = t;
      Lo(this.logger, "error", r, s, l),
        (o = {
          success: !1,
          errorMessage: l,
          errorData: u !== void 0 ? Vr(u) : void 0,
          logLines: t.logLines,
        }),
        (a = () => i.onResult(o));
    }
    return t.type === "ActionResponse" || !t.success
      ? (a(),
        this.inflightRequests.delete(t.requestId),
        this.requestsOlderThanRestart.delete(t.requestId),
        { requestId: t.requestId, result: o })
      : ((n.status = { status: "Completed", result: o, ts: t.ts, onResolve: a }), null);
  }
  removeCompleted(t) {
    const n = new Map();
    for (const [r, s] of this.inflightRequests.entries()) {
      const i = s.status;
      i.status === "Completed" &&
        i.ts.lessThanOrEqual(t) &&
        (i.onResolve(),
        n.set(r, i.result),
        this.inflightRequests.delete(r),
        this.requestsOlderThanRestart.delete(r));
    }
    return n;
  }
  restart() {
    this.requestsOlderThanRestart = new Set(this.inflightRequests.keys());
    const t = [];
    for (const [n, r] of this.inflightRequests) {
      if (r.status.status === "NotSent") {
        (r.status.status = "Requested"), t.push(r.message);
        continue;
      }
      if (r.message.type === "Mutation") t.push(r.message);
      else {
        if (
          (this.inflightRequests.delete(n),
          this.requestsOlderThanRestart.delete(n),
          r.status.status === "Completed")
        )
          throw new Error("Action should never be in 'Completed' state");
        r.status.onResult({
          success: !1,
          errorMessage: "Connection lost while action was in flight",
          logLines: [],
        });
      }
    }
    return t;
  }
  resume() {
    const t = [];
    for (const [, n] of this.inflightRequests)
      if (n.status.status === "NotSent") {
        (n.status.status = "Requested"), t.push(n.message);
        continue;
      }
    return t;
  }
  hasIncompleteRequests() {
    for (const t of this.inflightRequests.values()) if (t.status.status === "Requested") return !0;
    return !1;
  }
  hasInflightRequests() {
    return this.inflightRequests.size > 0;
  }
  hasSyncedPastLastReconnect() {
    return this.requestsOlderThanRestart.size === 0;
  }
  timeOfOldestInflightRequest() {
    if (this.inflightRequests.size === 0) return null;
    let t = Date.now();
    for (const n of this.inflightRequests.values())
      n.status.status !== "Completed" &&
        n.status.requestedAt.getTime() < t &&
        (t = n.status.requestedAt.getTime());
    return new Date(t);
  }
}
const Ks = Symbol.for("functionName"),
  Ww = Symbol.for("toReferencePath");
function Kw(e) {
  return e[Ww] ?? null;
}
function Gw(e) {
  return e.startsWith("function://");
}
function Jw(e) {
  let t;
  if (typeof e == "string") Gw(e) ? (t = { functionHandle: e }) : (t = { name: e });
  else if (e[Ks]) t = { name: e[Ks] };
  else {
    const n = Kw(e);
    if (!n) throw new Error(`${e} is not a functionReference`);
    t = { reference: n };
  }
  return t;
}
function $e(e) {
  const t = Jw(e);
  if (t.name === void 0)
    throw t.functionHandle !== void 0
      ? new Error(
          `Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${t.functionHandle}`
        )
      : t.reference !== void 0
        ? new Error(
            `Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${t.reference}`
          )
        : new Error(
            `Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(t)}`
          );
  if (typeof e == "string") return e;
  const n = e[Ks];
  if (!n) throw new Error(`${e} is not a functionReference`);
  return n;
}
function fc(e) {
  return { [Ks]: e };
}
function fm(e = []) {
  const t = {
    get(n, r) {
      if (typeof r == "string") {
        const s = [...e, r];
        return fm(s);
      } else if (r === Ks) {
        if (e.length < 2) {
          const o = ["api", ...e].join(".");
          throw new Error(
            `API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${o}\``
          );
        }
        const s = e.slice(0, -1).join("/"),
          i = e[e.length - 1];
        return i === "default" ? s : s + ":" + i;
      } else return r === Symbol.toStringTag ? "FunctionReference" : void 0;
    },
  };
  return new Proxy({}, t);
}
const Xw = fm();
var Yw = Object.defineProperty,
  Zw = (e, t, n) =>
    t in e ? Yw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Oo = (e, t, n) => Zw(e, typeof t != "symbol" ? t + "" : t, n);
class Gs {
  constructor(t) {
    Oo(this, "queryResults"),
      Oo(this, "modifiedQueries"),
      (this.queryResults = t),
      (this.modifiedQueries = []);
  }
  getQuery(t, ...n) {
    const r = $t(n[0]),
      s = $e(t),
      i = this.queryResults.get(Un(s, r));
    if (i !== void 0) return Gs.queryValue(i.result);
  }
  getAllQueries(t) {
    const n = [],
      r = $e(t);
    for (const s of this.queryResults.values())
      s.udfPath === Mo(r) && n.push({ args: s.args, value: Gs.queryValue(s.result) });
    return n;
  }
  setQuery(t, n, r) {
    const s = $t(n),
      i = $e(t),
      o = Un(i, s);
    let a;
    r === void 0 ? (a = void 0) : (a = { success: !0, value: r, logLines: [] });
    const l = { udfPath: i, args: s, result: a };
    this.queryResults.set(o, l), this.modifiedQueries.push(o);
  }
  static queryValue(t) {
    if (t !== void 0) return t.success ? t.value : void 0;
  }
}
class e1 {
  constructor() {
    Oo(this, "queryResults"),
      Oo(this, "optimisticUpdates"),
      (this.queryResults = new Map()),
      (this.optimisticUpdates = []);
  }
  ingestQueryResultsFromServer(t, n) {
    this.optimisticUpdates = this.optimisticUpdates.filter((o) => !n.has(o.mutationId));
    const r = this.queryResults;
    this.queryResults = new Map(t);
    const s = new Gs(this.queryResults);
    for (const o of this.optimisticUpdates) o.update(s);
    const i = [];
    for (const [o, a] of this.queryResults) {
      const l = r.get(o);
      (l === void 0 || l.result !== a.result) && i.push(o);
    }
    return i;
  }
  applyOptimisticUpdate(t, n) {
    this.optimisticUpdates.push({ update: t, mutationId: n });
    const r = new Gs(this.queryResults);
    return t(r), r.modifiedQueries;
  }
  queryResult(t) {
    const n = this.queryResults.get(t);
    if (n === void 0) return;
    const r = n.result;
    if (r !== void 0) {
      if (r.success) return r.value;
      throw r.errorData !== void 0
        ? nu(r, new tu(mr("query", n.udfPath, r)))
        : new Error(mr("query", n.udfPath, r));
    }
  }
  hasQueryResult(t) {
    return this.queryResults.get(t) !== void 0;
  }
  queryLogs(t) {
    var r;
    const n = this.queryResults.get(t);
    return (r = n == null ? void 0 : n.result) == null ? void 0 : r.logLines;
  }
}
var t1 = Object.defineProperty,
  n1 = (e, t, n) =>
    t in e ? t1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ja = (e, t, n) => n1(e, typeof t != "symbol" ? t + "" : t, n);
class He {
  constructor(t, n) {
    Ja(this, "low"),
      Ja(this, "high"),
      Ja(this, "__isUnsignedLong__"),
      (this.low = t | 0),
      (this.high = n | 0),
      (this.__isUnsignedLong__ = !0);
  }
  static isLong(t) {
    return (t && t.__isUnsignedLong__) === !0;
  }
  static fromBytesLE(t) {
    return new He(
      t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
      t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24)
    );
  }
  toBytesLE() {
    const t = this.high,
      n = this.low;
    return [
      n & 255,
      (n >>> 8) & 255,
      (n >>> 16) & 255,
      n >>> 24,
      t & 255,
      (t >>> 8) & 255,
      (t >>> 16) & 255,
      t >>> 24,
    ];
  }
  static fromNumber(t) {
    return isNaN(t) || t < 0 ? Gd : t >= r1 ? s1 : new He(t % Es | 0, (t / Es) | 0);
  }
  toString() {
    return (BigInt(this.high) * BigInt(Es) + BigInt(this.low)).toString();
  }
  equals(t) {
    return (
      He.isLong(t) || (t = He.fromValue(t)),
      this.high >>> 31 === 1 && t.high >>> 31 === 1
        ? !1
        : this.high === t.high && this.low === t.low
    );
  }
  notEquals(t) {
    return !this.equals(t);
  }
  comp(t) {
    return (
      He.isLong(t) || (t = He.fromValue(t)),
      this.equals(t)
        ? 0
        : t.high >>> 0 > this.high >>> 0 || (t.high === this.high && t.low >>> 0 > this.low >>> 0)
          ? -1
          : 1
    );
  }
  lessThanOrEqual(t) {
    return this.comp(t) <= 0;
  }
  static fromValue(t) {
    return typeof t == "number" ? He.fromNumber(t) : new He(t.low, t.high);
  }
}
const Gd = new He(0, 0),
  Jd = 65536,
  Es = Jd * Jd,
  r1 = Es * Es,
  s1 = new He(-1, -1);
var i1 = Object.defineProperty,
  o1 = (e, t, n) =>
    t in e ? i1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ii = (e, t, n) => o1(e, typeof t != "symbol" ? t + "" : t, n);
class Xd {
  constructor(t, n) {
    Ii(this, "version"),
      Ii(this, "remoteQuerySet"),
      Ii(this, "queryPath"),
      Ii(this, "logger"),
      (this.version = { querySet: 0, ts: He.fromNumber(0), identity: 0 }),
      (this.remoteQuerySet = new Map()),
      (this.queryPath = t),
      (this.logger = n);
  }
  transition(t) {
    const n = t.startVersion;
    if (
      this.version.querySet !== n.querySet ||
      this.version.ts.notEquals(n.ts) ||
      this.version.identity !== n.identity
    )
      throw new Error(`Invalid start version: ${n.ts.toString()}:${n.querySet}`);
    for (const r of t.modifications)
      switch (r.type) {
        case "QueryUpdated": {
          const s = this.queryPath(r.queryId);
          if (s) for (const o of r.logLines) Lo(this.logger, "info", "query", s, o);
          const i = Vr(r.value ?? null);
          this.remoteQuerySet.set(r.queryId, { success: !0, value: i, logLines: r.logLines });
          break;
        }
        case "QueryFailed": {
          const s = this.queryPath(r.queryId);
          if (s) for (const o of r.logLines) Lo(this.logger, "info", "query", s, o);
          const { errorData: i } = r;
          this.remoteQuerySet.set(r.queryId, {
            success: !1,
            errorMessage: r.errorMessage,
            errorData: i !== void 0 ? Vr(i) : void 0,
            logLines: r.logLines,
          });
          break;
        }
        case "QueryRemoved": {
          this.remoteQuerySet.delete(r.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${r.type}`);
      }
    this.version = t.endVersion;
  }
  remoteQueryResults() {
    return this.remoteQuerySet;
  }
  timestamp() {
    return this.version.ts;
  }
}
function Xa(e) {
  const t = Hs(e);
  return He.fromBytesLE(Array.from(t));
}
function a1(e) {
  const t = new Uint8Array(e.toBytesLE());
  return Ws(t);
}
function l1(e) {
  switch (e.type) {
    case "FatalError":
    case "AuthError":
    case "ActionResponse":
    case "Ping":
      return { ...e };
    case "MutationResponse":
      return e.success ? { ...e, ts: Xa(e.ts) } : { ...e };
    case "Transition":
      return {
        ...e,
        startVersion: { ...e.startVersion, ts: Xa(e.startVersion.ts) },
        endVersion: { ...e.endVersion, ts: Xa(e.endVersion.ts) },
      };
  }
}
function u1(e) {
  switch (e.type) {
    case "Authenticate":
    case "ModifyQuerySet":
    case "Mutation":
    case "Action":
    case "Event":
      return { ...e };
    case "Connect":
      return e.maxObservedTimestamp !== void 0
        ? { ...e, maxObservedTimestamp: a1(e.maxObservedTimestamp) }
        : { ...e, maxObservedTimestamp: void 0 };
  }
}
var c1 = Object.defineProperty,
  d1 = (e, t, n) =>
    t in e ? c1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ie = (e, t, n) => d1(e, typeof t != "symbol" ? t + "" : t, n);
const f1 = 1e3,
  h1 = 1001,
  p1 = 1005,
  m1 = 4040;
class y1 {
  constructor(t, n, r, s) {
    Ie(this, "socket"),
      Ie(this, "connectionCount"),
      Ie(this, "lastCloseReason"),
      Ie(this, "initialBackoff"),
      Ie(this, "maxBackoff"),
      Ie(this, "retries"),
      Ie(this, "serverInactivityThreshold"),
      Ie(this, "reconnectDueToServerInactivityTimeout"),
      Ie(this, "uri"),
      Ie(this, "onOpen"),
      Ie(this, "onResume"),
      Ie(this, "onMessage"),
      Ie(this, "webSocketConstructor"),
      Ie(this, "logger"),
      (this.webSocketConstructor = r),
      (this.socket = { state: "disconnected" }),
      (this.connectionCount = 0),
      (this.lastCloseReason = "InitialConnect"),
      (this.initialBackoff = 100),
      (this.maxBackoff = 16e3),
      (this.retries = 0),
      (this.serverInactivityThreshold = 3e4),
      (this.reconnectDueToServerInactivityTimeout = null),
      (this.uri = t),
      (this.onOpen = n.onOpen),
      (this.onResume = n.onResume),
      (this.onMessage = n.onMessage),
      (this.logger = s),
      this.connect();
  }
  connect() {
    if (this.socket.state === "terminated") return;
    if (this.socket.state !== "disconnected" && this.socket.state !== "stopped")
      throw new Error("Didn't start connection from disconnected state: " + this.socket.state);
    const t = new this.webSocketConstructor(this.uri);
    this._logVerbose("constructed WebSocket"),
      (this.socket = { state: "connecting", ws: t, paused: "no" }),
      this.resetServerInactivityTimeout(),
      (t.onopen = () => {
        if ((this.logger.logVerbose("begin ws.onopen"), this.socket.state !== "connecting"))
          throw new Error("onopen called with socket not in connecting state");
        (this.socket = {
          state: "ready",
          ws: t,
          paused: this.socket.paused === "yes" ? "uninitialized" : "no",
        }),
          this.resetServerInactivityTimeout(),
          this.socket.paused === "no" &&
            this.onOpen({
              connectionCount: this.connectionCount,
              lastCloseReason: this.lastCloseReason,
            }),
          this.lastCloseReason !== "InitialConnect" && this.logger.log("WebSocket reconnected"),
          (this.connectionCount += 1),
          (this.lastCloseReason = null);
      }),
      (t.onerror = (n) => {
        const r = n.message;
        this.logger.log(`WebSocket error: ${r}`);
      }),
      (t.onmessage = (n) => {
        this.resetServerInactivityTimeout();
        const r = l1(JSON.parse(n.data));
        this._logVerbose(`received ws message with type ${r.type}`),
          this.onMessage(r).hasSyncedPastLastReconnect && (this.retries = 0);
      }),
      (t.onclose = (n) => {
        if (
          (this._logVerbose("begin ws.onclose"),
          this.lastCloseReason === null && (this.lastCloseReason = n.reason ?? "OnCloseInvoked"),
          n.code !== f1 && n.code !== h1 && n.code !== p1 && n.code !== m1)
        ) {
          let r = `WebSocket closed with code ${n.code}`;
          n.reason && (r += `: ${n.reason}`), this.logger.log(r);
        }
        this.scheduleReconnect();
      });
  }
  socketState() {
    return this.socket.state;
  }
  sendMessage(t) {
    if (
      (this._logVerbose(`sending message with type ${t.type}`),
      this.socket.state === "ready" && this.socket.paused === "no")
    ) {
      const n = u1(t),
        r = JSON.stringify(n);
      try {
        this.socket.ws.send(r);
      } catch (s) {
        this.logger.log(`Failed to send message on WebSocket, reconnecting: ${s}`),
          this.closeAndReconnect("FailedToSendMessage");
      }
      return !0;
    }
    return !1;
  }
  resetServerInactivityTimeout() {
    this.socket.state !== "terminated" &&
      (this.reconnectDueToServerInactivityTimeout !== null &&
        (clearTimeout(this.reconnectDueToServerInactivityTimeout),
        (this.reconnectDueToServerInactivityTimeout = null)),
      (this.reconnectDueToServerInactivityTimeout = setTimeout(() => {
        this.closeAndReconnect("InactiveServer");
      }, this.serverInactivityThreshold)));
  }
  scheduleReconnect() {
    this.socket = { state: "disconnected" };
    const t = this.nextBackoff();
    this.logger.log(`Attempting reconnect in ${t}ms`), setTimeout(() => this.connect(), t);
  }
  closeAndReconnect(t) {
    switch ((this._logVerbose(`begin closeAndReconnect with reason ${t}`), this.socket.state)) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return;
      case "connecting":
      case "ready": {
        (this.lastCloseReason = t), this.close(), this.scheduleReconnect();
        return;
      }
      default:
        this.socket;
    }
  }
  close() {
    switch (this.socket.state) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return Promise.resolve();
      case "connecting": {
        const t = this.socket.ws;
        return new Promise((n) => {
          (t.onclose = () => {
            this._logVerbose("Closed after connecting"), n();
          }),
            (t.onopen = () => {
              this._logVerbose("Opened after connecting"), t.close();
            });
        });
      }
      case "ready": {
        this._logVerbose("ws.close called");
        const t = this.socket.ws,
          n = new Promise((r) => {
            t.onclose = () => {
              r();
            };
          });
        return t.close(), n;
      }
      default:
        return this.socket, Promise.resolve();
    }
  }
  terminate() {
    switch (
      (this.reconnectDueToServerInactivityTimeout &&
        clearTimeout(this.reconnectDueToServerInactivityTimeout),
      this.socket.state)
    ) {
      case "terminated":
      case "stopped":
      case "disconnected":
      case "connecting":
      case "ready": {
        const t = this.close();
        return (this.socket = { state: "terminated" }), t;
      }
      default:
        throw (this.socket, new Error(`Invalid websocket state: ${this.socket.state}`));
    }
  }
  stop() {
    switch (this.socket.state) {
      case "terminated":
        return Promise.resolve();
      case "connecting":
      case "stopped":
      case "disconnected":
      case "ready": {
        const t = this.close();
        return (this.socket = { state: "stopped" }), t;
      }
      default:
        return this.socket, Promise.resolve();
    }
  }
  restart() {
    switch (this.socket.state) {
      case "stopped":
        break;
      case "terminated":
        return;
      case "connecting":
      case "ready":
      case "disconnected":
        throw new Error("`restart()` is only valid after `stop()`");
      default:
        this.socket;
    }
    this.connect();
  }
  pause() {
    switch (this.socket.state) {
      case "disconnected":
      case "stopped":
      case "terminated":
        return;
      case "connecting":
      case "ready": {
        this.socket = { ...this.socket, paused: "yes" };
        return;
      }
      default: {
        this.socket;
        return;
      }
    }
  }
  resume() {
    switch (this.socket.state) {
      case "connecting":
        this.socket = { ...this.socket, paused: "no" };
        return;
      case "ready":
        this.socket.paused === "uninitialized"
          ? ((this.socket = { ...this.socket, paused: "no" }),
            this.onOpen({
              connectionCount: this.connectionCount,
              lastCloseReason: this.lastCloseReason,
            }))
          : this.socket.paused === "yes" &&
            ((this.socket = { ...this.socket, paused: "no" }), this.onResume());
        return;
      case "terminated":
      case "stopped":
      case "disconnected":
        return;
      default:
        this.socket;
    }
    this.connect();
  }
  _logVerbose(t) {
    this.logger.logVerbose(t);
  }
  nextBackoff() {
    const t = this.initialBackoff * Math.pow(2, this.retries);
    this.retries += 1;
    const n = Math.min(t, this.maxBackoff),
      r = n * (Math.random() - 0.5);
    return n + r;
  }
}
function g1() {
  return v1();
}
function v1() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = (Math.random() * 16) | 0;
    return (e === "x" ? t : (t & 3) | 8).toString(16);
  });
}
function ru(e) {
  this.message = e;
}
(ru.prototype = new Error()), (ru.prototype.name = "InvalidCharacterError");
var Yd =
  (typeof window < "u" && window.atob && window.atob.bind(window)) ||
  function (e) {
    var t = String(e).replace(/=+$/, "");
    if (t.length % 4 == 1)
      throw new ru("'atob' failed: The string to be decoded is not correctly encoded.");
    for (
      var n, r, s = 0, i = 0, o = "";
      (r = t.charAt(i++));
      ~r && ((n = s % 4 ? 64 * n + r : r), s++ % 4)
        ? (o += String.fromCharCode(255 & (n >> ((-2 * s) & 6))))
        : 0
    )
      r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
    return o;
  };
function w1(e) {
  var t = e.replace(/-/g, "+").replace(/_/g, "/");
  switch (t.length % 4) {
    case 0:
      break;
    case 2:
      t += "==";
      break;
    case 3:
      t += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }
  try {
    return (function (n) {
      return decodeURIComponent(
        Yd(n).replace(/(.)/g, function (r, s) {
          var i = s.charCodeAt(0).toString(16).toUpperCase();
          return i.length < 2 && (i = "0" + i), "%" + i;
        })
      );
    })(t);
  } catch {
    return Yd(t);
  }
}
function No(e) {
  this.message = e;
}
function S1(e, t) {
  if (typeof e != "string") throw new No("Invalid token specified");
  var n = (t = t || {}).header === !0 ? 0 : 1;
  try {
    return JSON.parse(w1(e.split(".")[n]));
  } catch (r) {
    throw new No("Invalid token specified: " + r.message);
  }
}
(No.prototype = new Error()), (No.prototype.name = "InvalidTokenError");
var x1 = Object.defineProperty,
  k1 = (e, t, n) =>
    t in e ? x1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  ft = (e, t, n) => k1(e, typeof t != "symbol" ? t + "" : t, n);
const _1 = 20 * 24 * 60 * 60 * 1e3;
class C1 {
  constructor(t, n, r) {
    ft(this, "authState", { state: "noAuth" }),
      ft(this, "configVersion", 0),
      ft(this, "syncState"),
      ft(this, "authenticate"),
      ft(this, "stopSocket"),
      ft(this, "restartSocket"),
      ft(this, "pauseSocket"),
      ft(this, "resumeSocket"),
      ft(this, "clearAuth"),
      ft(this, "logger"),
      ft(this, "refreshTokenLeewaySeconds"),
      (this.syncState = t),
      (this.authenticate = n.authenticate),
      (this.stopSocket = n.stopSocket),
      (this.restartSocket = n.restartSocket),
      (this.pauseSocket = n.pauseSocket),
      (this.resumeSocket = n.resumeSocket),
      (this.clearAuth = n.clearAuth),
      (this.logger = r.logger),
      (this.refreshTokenLeewaySeconds = r.refreshTokenLeewaySeconds);
  }
  async setConfig(t, n) {
    this.resetAuthState(), this._logVerbose("pausing WS for auth token fetch"), this.pauseSocket();
    const r = await this.fetchTokenAndGuardAgainstRace(t, { forceRefreshToken: !1 });
    r.isFromOutdatedConfig ||
      (r.value
        ? (this.setAuthState({
            state: "waitingForServerConfirmationOfCachedToken",
            config: { fetchToken: t, onAuthChange: n },
            hasRetried: !1,
          }),
          this.authenticate(r.value),
          this._logVerbose("resuming WS after auth token fetch"),
          this.resumeSocket())
        : (this.setAuthState({
            state: "initialRefetch",
            config: { fetchToken: t, onAuthChange: n },
          }),
          await this.refetchToken()));
  }
  onTransition(t) {
    if (
      this.syncState.isCurrentOrNewerAuthVersion(t.endVersion.identity) &&
      !(t.endVersion.identity <= t.startVersion.identity)
    ) {
      if (this.authState.state === "waitingForServerConfirmationOfCachedToken") {
        this._logVerbose("server confirmed auth token is valid"),
          this.refetchToken(),
          this.authState.config.onAuthChange(!0);
        return;
      }
      this.authState.state === "waitingForServerConfirmationOfFreshToken" &&
        (this._logVerbose("server confirmed new auth token is valid"),
        this.scheduleTokenRefetch(this.authState.token),
        this.authState.hadAuth || this.authState.config.onAuthChange(!0));
    }
  }
  onAuthError(t) {
    const { baseVersion: n } = t;
    if (n != null) {
      if (!this.syncState.isCurrentOrNewerAuthVersion(n + 1)) {
        this._logVerbose("ignoring auth error for previous auth attempt");
        return;
      }
      this.tryToReauthenticate(t);
      return;
    }
    this.tryToReauthenticate(t);
  }
  async tryToReauthenticate(t) {
    if (
      this.authState.state === "noAuth" ||
      this.authState.state === "waitingForServerConfirmationOfFreshToken"
    ) {
      this.logger.error(`Failed to authenticate: "${t.error}", check your server auth config`),
        this.syncState.hasAuth() && this.syncState.clearAuth(),
        this.authState.state !== "noAuth" &&
          this.setAndReportAuthFailed(this.authState.config.onAuthChange);
      return;
    }
    this._logVerbose("attempting to reauthenticate"), await this.stopSocket();
    const n = await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken, {
      forceRefreshToken: !0,
    });
    n.isFromOutdatedConfig ||
      (n.value && this.syncState.isNewAuth(n.value)
        ? (this.authenticate(n.value),
          this.setAuthState({
            state: "waitingForServerConfirmationOfFreshToken",
            config: this.authState.config,
            token: n.value,
            hadAuth:
              this.authState.state === "notRefetching" ||
              this.authState.state === "waitingForScheduledRefetch",
          }))
        : (this._logVerbose("reauthentication failed, could not fetch a new token"),
          this.syncState.hasAuth() && this.syncState.clearAuth(),
          this.setAndReportAuthFailed(this.authState.config.onAuthChange)),
      this.restartSocket());
  }
  async refetchToken() {
    if (this.authState.state === "noAuth") return;
    this._logVerbose("refetching auth token");
    const t = await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken, {
      forceRefreshToken: !0,
    });
    t.isFromOutdatedConfig ||
      (t.value
        ? this.syncState.isNewAuth(t.value)
          ? (this.setAuthState({
              state: "waitingForServerConfirmationOfFreshToken",
              hadAuth: this.syncState.hasAuth(),
              token: t.value,
              config: this.authState.config,
            }),
            this.authenticate(t.value))
          : this.setAuthState({ state: "notRefetching", config: this.authState.config })
        : (this._logVerbose("refetching token failed"),
          this.syncState.hasAuth() && this.clearAuth(),
          this.setAndReportAuthFailed(this.authState.config.onAuthChange)),
      this._logVerbose("resuming WS after auth token fetch (if currently paused)"),
      this.resumeSocket());
  }
  scheduleTokenRefetch(t) {
    if (this.authState.state === "noAuth") return;
    const n = this.decodeToken(t);
    if (!n) {
      this.logger.error("Auth token is not a valid JWT, cannot refetch the token");
      return;
    }
    const { iat: r, exp: s } = n;
    if (!r || !s) {
      this.logger.error("Auth token does not have required fields, cannot refetch the token");
      return;
    }
    const i = s - r;
    if (i <= 2) {
      this.logger.error("Auth token does not live long enough, cannot refetch the token");
      return;
    }
    let o = Math.min(_1, (i - this.refreshTokenLeewaySeconds) * 1e3);
    o <= 0 &&
      (this.logger.warn(
        `Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${i}s`
      ),
      (o = 0));
    const a = setTimeout(() => {
      this.refetchToken();
    }, o);
    this.setAuthState({
      state: "waitingForScheduledRefetch",
      refetchTokenTimeoutId: a,
      config: this.authState.config,
    }),
      this._logVerbose(`scheduled preemptive auth token refetching in ${o}ms`);
  }
  async fetchTokenAndGuardAgainstRace(t, n) {
    const r = ++this.configVersion,
      s = await t(n);
    return this.configVersion !== r
      ? { isFromOutdatedConfig: !0 }
      : { isFromOutdatedConfig: !1, value: s };
  }
  stop() {
    this.resetAuthState(), this.configVersion++;
  }
  setAndReportAuthFailed(t) {
    t(!1), this.resetAuthState();
  }
  resetAuthState() {
    this.setAuthState({ state: "noAuth" });
  }
  setAuthState(t) {
    this.authState.state === "waitingForScheduledRefetch" &&
      (clearTimeout(this.authState.refetchTokenTimeoutId), this.syncState.markAuthCompletion()),
      (this.authState = t);
  }
  decodeToken(t) {
    try {
      return S1(t);
    } catch (n) {
      return (
        this._logVerbose(
          `Error decoding token: ${n instanceof Error ? n.message : "Unknown error"}`
        ),
        null
      );
    }
  }
  _logVerbose(t) {
    this.logger.logVerbose(`${t} [v${this.configVersion}]`);
  }
}
const E1 = ["convexClientConstructed", "convexWebSocketOpen", "convexFirstMessageReceived"];
function R1(e, t) {
  const n = { sessionId: t };
  typeof performance > "u" || !performance.mark || performance.mark(e, { detail: n });
}
function P1(e) {
  let t = e.name.slice(6);
  return (t = t.charAt(0).toLowerCase() + t.slice(1)), { name: t, startTime: e.startTime };
}
function T1(e) {
  if (typeof performance > "u" || !performance.getEntriesByName) return [];
  const t = [];
  for (const n of E1) {
    const r = performance
      .getEntriesByName(n)
      .filter((s) => s.entryType === "mark")
      .filter((s) => s.detail.sessionId === e);
    t.push(...r);
  }
  return t.map(P1);
}
var L1 = Object.defineProperty,
  M1 = (e, t, n) =>
    t in e ? L1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ce = (e, t, n) => M1(e, typeof t != "symbol" ? t + "" : t, n);
class O1 {
  constructor(t, n, r) {
    if (
      (Ce(this, "address"),
      Ce(this, "state"),
      Ce(this, "requestManager"),
      Ce(this, "webSocketManager"),
      Ce(this, "authenticationManager"),
      Ce(this, "remoteQuerySet"),
      Ce(this, "optimisticQueryResults"),
      Ce(this, "_transitionHandlerCounter", 0),
      Ce(this, "_nextRequestId"),
      Ce(this, "_onTransitionFns", new Map()),
      Ce(this, "_sessionId"),
      Ce(this, "firstMessageReceived", !1),
      Ce(this, "debug"),
      Ce(this, "logger"),
      Ce(this, "maxObservedTimestamp"),
      Ce(this, "mark", (f) => {
        this.debug && R1(f, this.sessionId);
      }),
      typeof t == "object")
    )
      throw new Error(
        "Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly."
      );
    (r == null ? void 0 : r.skipConvexDeploymentUrlCheck) !== !0 && Cw(t), (r = { ...r });
    const s = r.authRefreshTokenLeewaySeconds ?? 2;
    let i = r.webSocketConstructor;
    if (!i && typeof WebSocket > "u")
      throw new Error(
        "No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient"
      );
    (i = i || WebSocket),
      (this.debug = r.reportDebugInfoToConvex ?? !1),
      (this.address = t),
      (this.logger = r.logger ?? dm({ verbose: r.verbose ?? !1 }));
    const o = t.search("://");
    if (o === -1) throw new Error("Provided address was not an absolute URL.");
    const a = t.substring(o + 3),
      l = t.substring(0, o);
    let u;
    if (l === "http") u = "ws";
    else if (l === "https") u = "wss";
    else throw new Error(`Unknown parent protocol ${l}`);
    const d = `${u}://${a}/api/${Hd}/sync`;
    (this.state = new Bw()),
      (this.remoteQuerySet = new Xd((f) => this.state.queryPath(f), this.logger)),
      (this.requestManager = new Hw(this.logger)),
      (this.authenticationManager = new C1(
        this.state,
        {
          authenticate: (f) => {
            const y = this.state.setAuth(f);
            this.webSocketManager.sendMessage(y);
          },
          stopSocket: () => this.webSocketManager.stop(),
          restartSocket: () => this.webSocketManager.restart(),
          pauseSocket: () => {
            this.webSocketManager.pause(), this.state.pause();
          },
          resumeSocket: () => this.webSocketManager.resume(),
          clearAuth: () => {
            this.clearAuth();
          },
        },
        { logger: this.logger, refreshTokenLeewaySeconds: s }
      )),
      (this.optimisticQueryResults = new e1()),
      this.addOnTransitionHandler((f) => {
        n(f.queries.map((y) => y.token));
      }),
      (this._nextRequestId = 0),
      (this._sessionId = g1());
    const { unsavedChangesWarning: c } = r;
    if (typeof window > "u" || typeof window.addEventListener > "u") {
      if (c === !0)
        throw new Error(
          "unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options."
        );
    } else
      c !== !1 &&
        window.addEventListener("beforeunload", (f) => {
          if (this.requestManager.hasIncompleteRequests()) {
            f.preventDefault();
            const y = "Are you sure you want to leave? Your changes may not be saved.";
            return ((f || window.event).returnValue = y), y;
          }
        });
    (this.webSocketManager = new y1(
      d,
      {
        onOpen: (f) => {
          this.mark("convexWebSocketOpen"),
            this.webSocketManager.sendMessage({
              ...f,
              type: "Connect",
              sessionId: this._sessionId,
              maxObservedTimestamp: this.maxObservedTimestamp,
            });
          const y = new Set(this.remoteQuerySet.remoteQueryResults().keys());
          this.remoteQuerySet = new Xd((w) => this.state.queryPath(w), this.logger);
          const [m, v] = this.state.restart(y);
          v && this.webSocketManager.sendMessage(v), this.webSocketManager.sendMessage(m);
          for (const w of this.requestManager.restart()) this.webSocketManager.sendMessage(w);
        },
        onResume: () => {
          const [f, y] = this.state.resume();
          y && this.webSocketManager.sendMessage(y), f && this.webSocketManager.sendMessage(f);
          for (const m of this.requestManager.resume()) this.webSocketManager.sendMessage(m);
        },
        onMessage: (f) => {
          switch (
            (this.firstMessageReceived ||
              ((this.firstMessageReceived = !0),
              this.mark("convexFirstMessageReceived"),
              this.reportMarks()),
            f.type)
          ) {
            case "Transition": {
              this.observedTimestamp(f.endVersion.ts),
                this.authenticationManager.onTransition(f),
                this.remoteQuerySet.transition(f),
                this.state.transition(f);
              const y = this.requestManager.removeCompleted(this.remoteQuerySet.timestamp());
              this.notifyOnQueryResultChanges(y);
              break;
            }
            case "MutationResponse": {
              f.success && this.observedTimestamp(f.ts);
              const y = this.requestManager.onResponse(f);
              y !== null && this.notifyOnQueryResultChanges(new Map([[y.requestId, y.result]]));
              break;
            }
            case "ActionResponse": {
              this.requestManager.onResponse(f);
              break;
            }
            case "AuthError": {
              this.authenticationManager.onAuthError(f);
              break;
            }
            case "FatalError": {
              const y = zw(this.logger, f.error);
              throw (this.webSocketManager.terminate(), y);
            }
          }
          return { hasSyncedPastLastReconnect: this.hasSyncedPastLastReconnect() };
        },
      },
      i,
      this.logger
    )),
      this.mark("convexClientConstructed");
  }
  hasSyncedPastLastReconnect() {
    return (
      this.requestManager.hasSyncedPastLastReconnect() || this.state.hasSyncedPastLastReconnect()
    );
  }
  observedTimestamp(t) {
    (this.maxObservedTimestamp === void 0 || this.maxObservedTimestamp.lessThanOrEqual(t)) &&
      (this.maxObservedTimestamp = t);
  }
  getMaxObservedTimestamp() {
    return this.maxObservedTimestamp;
  }
  notifyOnQueryResultChanges(t) {
    const n = this.remoteQuerySet.remoteQueryResults(),
      r = new Map();
    for (const [i, o] of n) {
      const a = this.state.queryToken(i);
      if (a !== null) {
        const l = { result: o, udfPath: this.state.queryPath(i), args: this.state.queryArgs(i) };
        r.set(a, l);
      }
    }
    const s = this.optimisticQueryResults.ingestQueryResultsFromServer(r, new Set(t.keys()));
    this.handleTransition({
      queries: s.map((i) => ({
        token: i,
        modification: { kind: "Updated", result: r.get(i).result },
      })),
      reflectedMutations: Array.from(t).map(([i, o]) => ({ requestId: i, result: o })),
      timestamp: this.remoteQuerySet.timestamp(),
    });
  }
  handleTransition(t) {
    for (const n of this._onTransitionFns.values()) n(t);
  }
  addOnTransitionHandler(t) {
    const n = this._transitionHandlerCounter++;
    return this._onTransitionFns.set(n, t), () => this._onTransitionFns.delete(n);
  }
  setAuth(t, n) {
    this.authenticationManager.setConfig(t, n);
  }
  hasAuth() {
    return this.state.hasAuth();
  }
  setAdminAuth(t, n) {
    const r = this.state.setAdminAuth(t, n);
    this.webSocketManager.sendMessage(r);
  }
  clearAuth() {
    const t = this.state.clearAuth();
    this.webSocketManager.sendMessage(t);
  }
  subscribe(t, n, r) {
    const s = $t(n),
      {
        modification: i,
        queryToken: o,
        unsubscribe: a,
      } = this.state.subscribe(
        t,
        s,
        r == null ? void 0 : r.journal,
        r == null ? void 0 : r.componentPath
      );
    return (
      i !== null && this.webSocketManager.sendMessage(i),
      {
        queryToken: o,
        unsubscribe: () => {
          const l = a();
          l && this.webSocketManager.sendMessage(l);
        },
      }
    );
  }
  localQueryResult(t, n) {
    const r = $t(n),
      s = Un(t, r);
    return this.optimisticQueryResults.queryResult(s);
  }
  localQueryResultByToken(t) {
    return this.optimisticQueryResults.queryResult(t);
  }
  hasLocalQueryResultByToken(t) {
    return this.optimisticQueryResults.hasQueryResult(t);
  }
  localQueryLogs(t, n) {
    const r = $t(n),
      s = Un(t, r);
    return this.optimisticQueryResults.queryLogs(s);
  }
  queryJournal(t, n) {
    const r = $t(n),
      s = Un(t, r);
    return this.state.queryJournal(s);
  }
  connectionState() {
    return {
      hasInflightRequests: this.requestManager.hasInflightRequests(),
      isWebSocketConnected: this.webSocketManager.socketState() === "ready",
      timeOfOldestInflightRequest: this.requestManager.timeOfOldestInflightRequest(),
    };
  }
  async mutation(t, n, r) {
    const s = await this.mutationInternal(t, n, r);
    if (!s.success)
      throw s.errorData !== void 0
        ? nu(s, new tu(mr("mutation", t, s)))
        : new Error(mr("mutation", t, s));
    return s.value;
  }
  async mutationInternal(t, n, r, s) {
    const { mutationPromise: i } = this.enqueueMutation(t, n, r, s);
    return i;
  }
  enqueueMutation(t, n, r, s) {
    const i = $t(n);
    this.tryReportLongDisconnect();
    const o = this.nextRequestId;
    if ((this._nextRequestId++, r !== void 0)) {
      const d = r.optimisticUpdate;
      if (d !== void 0) {
        const c = (m) => {
            d(m, i);
          },
          y = this.optimisticQueryResults.applyOptimisticUpdate(c, o).map((m) => {
            const v = this.localQueryResultByToken(m);
            return {
              token: m,
              modification: {
                kind: "Updated",
                result: v === void 0 ? void 0 : { success: !0, value: v, logLines: [] },
              },
            };
          });
        this.handleTransition({
          queries: y,
          reflectedMutations: [],
          timestamp: this.remoteQuerySet.timestamp(),
        });
      }
    }
    const a = { type: "Mutation", requestId: o, udfPath: t, componentPath: s, args: [kn(i)] },
      l = this.webSocketManager.sendMessage(a),
      u = this.requestManager.request(a, l);
    return { requestId: o, mutationPromise: u };
  }
  async action(t, n) {
    const r = await this.actionInternal(t, n);
    if (!r.success)
      throw r.errorData !== void 0
        ? nu(r, new tu(mr("action", t, r)))
        : new Error(mr("action", t, r));
    return r.value;
  }
  async actionInternal(t, n, r) {
    const s = $t(n),
      i = this.nextRequestId;
    this._nextRequestId++, this.tryReportLongDisconnect();
    const o = { type: "Action", requestId: i, udfPath: t, componentPath: r, args: [kn(s)] },
      a = this.webSocketManager.sendMessage(o);
    return this.requestManager.request(o, a);
  }
  async close() {
    return this.authenticationManager.stop(), this.webSocketManager.terminate();
  }
  get url() {
    return this.address;
  }
  get nextRequestId() {
    return this._nextRequestId;
  }
  get sessionId() {
    return this._sessionId;
  }
  reportMarks() {
    if (this.debug) {
      const t = T1(this.sessionId);
      this.webSocketManager.sendMessage({ type: "Event", eventType: "ClientConnect", event: t });
    }
  }
  tryReportLongDisconnect() {
    if (!this.debug) return;
    const t = this.connectionState().timeOfOldestInflightRequest;
    if (t === null || Date.now() - t.getTime() <= 60 * 1e3) return;
    const n = `${this.address}/api/debug_event`;
    fetch(n, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Convex-Client": `npm-${Hd}` },
      body: JSON.stringify({ event: "LongWebsocketDisconnect" }),
    })
      .then((r) => {
        r.ok || this.logger.warn("Analytics request failed with response:", r.body);
      })
      .catch((r) => {
        this.logger.warn("Analytics response failed with error:", r);
      });
  }
}
var N1 = Object.defineProperty,
  A1 = (e, t, n) =>
    t in e ? N1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Xt = (e, t, n) => A1(e, typeof t != "symbol" ? t + "" : t, n);
if (typeof yu > "u") throw new Error("Required dependency 'react' not found");
if (typeof Ip > "u") throw new Error("Required dependency 'react-dom' not found");
function hm(e, t, n) {
  function r(s) {
    return z1(s), t.mutation(e, s, { optimisticUpdate: n });
  }
  return (
    (r.withOptimisticUpdate = function (i) {
      if (n !== void 0)
        throw new Error(`Already specified optimistic update for mutation ${$e(e)}`);
      return hm(e, t, i);
    }),
    r
  );
}
function b1(e, t) {
  return function (n) {
    return t.action(e, n);
  };
}
class F1 {
  constructor(t, n) {
    if (
      (Xt(this, "address"),
      Xt(this, "cachedSync"),
      Xt(this, "listeners"),
      Xt(this, "options"),
      Xt(this, "closed", !1),
      Xt(this, "_logger"),
      Xt(this, "adminAuth"),
      Xt(this, "fakeUserIdentity"),
      t === void 0)
    )
      throw new Error(
        "No address provided to ConvexReactClient.\nIf trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/\nIf running locally, make sure to run `convex dev` and ensure the .env.local file is populated."
      );
    if (typeof t != "string")
      throw new Error(
        `ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof t} instead.`
      );
    if (!t.includes("://")) throw new Error("Provided address was not an absolute URL.");
    (this.address = t),
      (this.listeners = new Map()),
      (this._logger =
        (n == null ? void 0 : n.logger) ?? dm({ verbose: (n == null ? void 0 : n.verbose) ?? !1 })),
      (this.options = { ...n, logger: this._logger });
  }
  get sync() {
    if (this.closed) throw new Error("ConvexReactClient has already been closed.");
    return this.cachedSync
      ? this.cachedSync
      : ((this.cachedSync = new O1(this.address, (t) => this.transition(t), this.options)),
        this.adminAuth && this.cachedSync.setAdminAuth(this.adminAuth, this.fakeUserIdentity),
        this.cachedSync);
  }
  setAuth(t, n) {
    if (typeof t == "string")
      throw new Error(
        "Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication."
      );
    this.sync.setAuth(t, n ?? (() => {}));
  }
  clearAuth() {
    this.sync.clearAuth();
  }
  setAdminAuth(t, n) {
    if (((this.adminAuth = t), (this.fakeUserIdentity = n), this.closed))
      throw new Error("ConvexReactClient has already been closed.");
    this.cachedSync && this.sync.setAdminAuth(t, n);
  }
  watchQuery(t, ...n) {
    const [r, s] = n,
      i = $e(t);
    return {
      onUpdate: (o) => {
        const { queryToken: a, unsubscribe: l } = this.sync.subscribe(i, r, s),
          u = this.listeners.get(a);
        return (
          u !== void 0 ? u.add(o) : this.listeners.set(a, new Set([o])),
          () => {
            if (this.closed) return;
            const d = this.listeners.get(a);
            d.delete(o), d.size === 0 && this.listeners.delete(a), l();
          }
        );
      },
      localQueryResult: () => {
        if (this.cachedSync) return this.cachedSync.localQueryResult(i, r);
      },
      localQueryLogs: () => {
        if (this.cachedSync) return this.cachedSync.localQueryLogs(i, r);
      },
      journal: () => {
        if (this.cachedSync) return this.cachedSync.queryJournal(i, r);
      },
    };
  }
  mutation(t, ...n) {
    const [r, s] = n,
      i = $e(t);
    return this.sync.mutation(i, r, s);
  }
  action(t, ...n) {
    const r = $e(t);
    return this.sync.action(r, ...n);
  }
  query(t, ...n) {
    const r = this.watchQuery(t, ...n),
      s = r.localQueryResult();
    return s !== void 0
      ? Promise.resolve(s)
      : new Promise((i, o) => {
          const a = r.onUpdate(() => {
            a();
            try {
              i(r.localQueryResult());
            } catch (l) {
              o(l);
            }
          });
        });
  }
  connectionState() {
    return this.sync.connectionState();
  }
  get logger() {
    return this._logger;
  }
  async close() {
    if (((this.closed = !0), (this.listeners = new Map()), this.cachedSync)) {
      const t = this.cachedSync;
      (this.cachedSync = void 0), await t.close();
    }
  }
  transition(t) {
    Ip.unstable_batchedUpdates(() => {
      for (const n of t) {
        const r = this.listeners.get(n);
        if (r) for (const s of r) s();
      }
    });
  }
}
const sa = yu.createContext(void 0);
function I1() {
  return F.useContext(sa);
}
const j1 = ({ client: e, children: t }) => yu.createElement(sa.Provider, { value: e }, t);
function pm(e, ...t) {
  const n = t[0] === "skip",
    r = t[0] === "skip" ? {} : $t(t[0]),
    s = typeof e == "string" ? fc(e) : e,
    i = $e(s),
    o = F.useMemo(() => (n ? {} : { query: { query: s, args: r } }), [JSON.stringify(kn(r)), i, n]),
    l = Q1(o).query;
  if (l instanceof Error) throw l;
  return l;
}
function D1(e) {
  const t = typeof e == "string" ? fc(e) : e,
    n = F.useContext(sa);
  if (n === void 0)
    throw new Error(
      "Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app"
    );
  return F.useMemo(() => hm(t, n), [n, $e(t)]);
}
function $1(e) {
  const t = F.useContext(sa),
    n = typeof e == "string" ? fc(e) : e;
  if (t === void 0)
    throw new Error(
      "Could not find Convex client! `useAction` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app"
    );
  return F.useMemo(() => b1(n, t), [t, $e(n)]);
}
function z1(e) {
  if (
    typeof e == "object" &&
    e !== null &&
    "bubbles" in e &&
    "persist" in e &&
    "isDefaultPrevented" in e
  )
    throw new Error(
      "Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler."
    );
}
var q1 = Object.defineProperty,
  U1 = (e, t, n) =>
    t in e ? q1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ya = (e, t, n) => U1(e, typeof t != "symbol" ? t + "" : t, n);
class B1 {
  constructor(t) {
    Ya(this, "createWatch"),
      Ya(this, "queries"),
      Ya(this, "listeners"),
      (this.createWatch = t),
      (this.queries = {}),
      (this.listeners = new Set());
  }
  setQueries(t) {
    for (const n of Object.keys(t)) {
      const { query: r, args: s } = t[n];
      if (($e(r), this.queries[n] === void 0)) this.addQuery(n, r, s);
      else {
        const i = this.queries[n];
        ($e(r) !== $e(i.query) || JSON.stringify(kn(s)) !== JSON.stringify(kn(i.args))) &&
          (this.removeQuery(n), this.addQuery(n, r, s));
      }
    }
    for (const n of Object.keys(this.queries)) t[n] === void 0 && this.removeQuery(n);
  }
  subscribe(t) {
    return (
      this.listeners.add(t),
      () => {
        this.listeners.delete(t);
      }
    );
  }
  getLocalResults(t) {
    const n = {};
    for (const r of Object.keys(t)) {
      const { query: s, args: i } = t[r];
      $e(s);
      const o = this.createWatch(s, i);
      let a;
      try {
        a = o.localQueryResult();
      } catch (l) {
        if (l instanceof Error) a = l;
        else throw l;
      }
      n[r] = a;
    }
    return n;
  }
  setCreateWatch(t) {
    this.createWatch = t;
    for (const n of Object.keys(this.queries)) {
      const { query: r, args: s, watch: i } = this.queries[n],
        o = i.journal();
      this.removeQuery(n), this.addQuery(n, r, s, o);
    }
  }
  destroy() {
    for (const t of Object.keys(this.queries)) this.removeQuery(t);
    this.listeners = new Set();
  }
  addQuery(t, n, r, s) {
    if (this.queries[t] !== void 0)
      throw new Error(`Tried to add a new query with identifier ${t} when it already exists.`);
    const i = this.createWatch(n, r, s),
      o = i.onUpdate(() => this.notifyListeners());
    this.queries[t] = { query: n, args: r, watch: i, unsubscribe: o };
  }
  removeQuery(t) {
    const n = this.queries[t];
    if (n === void 0) throw new Error(`No query found with identifier ${t}.`);
    n.unsubscribe(), delete this.queries[t];
  }
  notifyListeners() {
    for (const t of this.listeners) t();
  }
}
function V1({ getCurrentValue: e, subscribe: t }) {
  const [n, r] = F.useState(() => ({ getCurrentValue: e, subscribe: t, value: e() }));
  let s = n.value;
  return (
    (n.getCurrentValue !== e || n.subscribe !== t) &&
      ((s = e()), r({ getCurrentValue: e, subscribe: t, value: s })),
    F.useEffect(() => {
      let i = !1;
      const o = () => {
          i ||
            r((l) => {
              if (l.getCurrentValue !== e || l.subscribe !== t) return l;
              const u = e();
              return l.value === u ? l : { ...l, value: u };
            });
        },
        a = t(o);
      return (
        o(),
        () => {
          (i = !0), a();
        }
      );
    }, [e, t]),
    s
  );
}
function Q1(e) {
  const t = I1();
  if (t === void 0)
    throw new Error(
      "Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app"
    );
  const n = F.useMemo(() => (r, s, i) => t.watchQuery(r, s, { journal: i }), [t]);
  return H1(e, n);
}
function H1(e, t) {
  const [n] = F.useState(() => new B1(t));
  n.createWatch !== t && n.setCreateWatch(t), F.useEffect(() => () => n.destroy(), [n]);
  const r = F.useMemo(
    () => ({
      getCurrentValue: () => n.getLocalResults(e),
      subscribe: (s) => (n.setQueries(e), n.subscribe(s)),
    }),
    [n, e]
  );
  return V1(r);
}
const mm = $0({ component: () => x.jsxs(x.Fragment, { children: [x.jsx(Yp, {}), !1] }) });
function ym(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: W1 } = Object.prototype,
  { getPrototypeOf: hc } = Object,
  ia = ((e) => (t) => {
    const n = W1.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  _t = (e) => ((e = e.toLowerCase()), (t) => ia(t) === e),
  oa = (e) => (t) => typeof t === e,
  { isArray: Kr } = Array,
  Js = oa("undefined");
function K1(e) {
  return (
    e !== null &&
    !Js(e) &&
    e.constructor !== null &&
    !Js(e.constructor) &&
    Xe(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const gm = _t("ArrayBuffer");
function G1(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && gm(e.buffer)),
    t
  );
}
const J1 = oa("string"),
  Xe = oa("function"),
  vm = oa("number"),
  aa = (e) => e !== null && typeof e == "object",
  X1 = (e) => e === !0 || e === !1,
  Yi = (e) => {
    if (ia(e) !== "object") return !1;
    const t = hc(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Y1 = _t("Date"),
  Z1 = _t("File"),
  eS = _t("Blob"),
  tS = _t("FileList"),
  nS = (e) => aa(e) && Xe(e.pipe),
  rS = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Xe(e.append) &&
          ((t = ia(e)) === "formdata" ||
            (t === "object" && Xe(e.toString) && e.toString() === "[object FormData]"))))
    );
  },
  sS = _t("URLSearchParams"),
  [iS, oS, aS, lS] = ["ReadableStream", "Request", "Response", "Headers"].map(_t),
  uS = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
function ii(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Kr(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let a;
    for (r = 0; r < o; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function wm(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const bn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Sm = (e) => !Js(e) && e !== bn;
function su() {
  const { caseless: e } = (Sm(this) && this) || {},
    t = {},
    n = (r, s) => {
      const i = (e && wm(t, s)) || s;
      Yi(t[i]) && Yi(r)
        ? (t[i] = su(t[i], r))
        : Yi(r)
          ? (t[i] = su({}, r))
          : Kr(r)
            ? (t[i] = r.slice())
            : (t[i] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && ii(arguments[r], n);
  return t;
}
const cS = (e, t, n, { allOwnKeys: r } = {}) => (
    ii(
      t,
      (s, i) => {
        n && Xe(s) ? (e[i] = ym(s, n)) : (e[i] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  dS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  fS = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  hS = (e, t, n, r) => {
    let s, i, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        (o = s[i]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && hc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  pS = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  mS = (e) => {
    if (!e) return null;
    if (Kr(e)) return e;
    let t = e.length;
    if (!vm(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  yS = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && hc(Uint8Array)),
  gS = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  vS = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  wS = _t("HTMLFormElement"),
  SS = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Zd = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  xS = _t("RegExp"),
  xm = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ii(n, (s, i) => {
      let o;
      (o = t(s, i, e)) !== !1 && (r[i] = o || s);
    }),
      Object.defineProperties(e, r);
  },
  kS = (e) => {
    xm(e, (t, n) => {
      if (Xe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (Xe(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  _S = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return Kr(e) ? r(e) : r(String(e).split(t)), n;
  },
  CS = () => {},
  ES = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Za = "abcdefghijklmnopqrstuvwxyz",
  ef = "0123456789",
  km = { DIGIT: ef, ALPHA: Za, ALPHA_DIGIT: Za + Za.toUpperCase() + ef },
  RS = (e = 16, t = km.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function PS(e) {
  return !!(e && Xe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const TS = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (aa(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = Kr(r) ? [] : {};
            return (
              ii(r, (o, a) => {
                const l = n(o, s + 1);
                !Js(l) && (i[a] = l);
              }),
              (t[s] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  LS = _t("AsyncFunction"),
  MS = (e) => e && (aa(e) || Xe(e)) && Xe(e.then) && Xe(e.catch),
  _m = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            bn.addEventListener(
              "message",
              ({ source: s, data: i }) => {
                s === bn && i === n && r.length && r.shift()();
              },
              !1
            ),
            (s) => {
              r.push(s), bn.postMessage(n, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(typeof setImmediate == "function", Xe(bn.postMessage)),
  OS =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(bn)
      : (typeof process < "u" && process.nextTick) || _m,
  E = {
    isArray: Kr,
    isArrayBuffer: gm,
    isBuffer: K1,
    isFormData: rS,
    isArrayBufferView: G1,
    isString: J1,
    isNumber: vm,
    isBoolean: X1,
    isObject: aa,
    isPlainObject: Yi,
    isReadableStream: iS,
    isRequest: oS,
    isResponse: aS,
    isHeaders: lS,
    isUndefined: Js,
    isDate: Y1,
    isFile: Z1,
    isBlob: eS,
    isRegExp: xS,
    isFunction: Xe,
    isStream: nS,
    isURLSearchParams: sS,
    isTypedArray: yS,
    isFileList: tS,
    forEach: ii,
    merge: su,
    extend: cS,
    trim: uS,
    stripBOM: dS,
    inherits: fS,
    toFlatObject: hS,
    kindOf: ia,
    kindOfTest: _t,
    endsWith: pS,
    toArray: mS,
    forEachEntry: gS,
    matchAll: vS,
    isHTMLForm: wS,
    hasOwnProperty: Zd,
    hasOwnProp: Zd,
    reduceDescriptors: xm,
    freezeMethods: kS,
    toObjectSet: _S,
    toCamelCase: SS,
    noop: CS,
    toFiniteNumber: ES,
    findKey: wm,
    global: bn,
    isContextDefined: Sm,
    ALPHABET: km,
    generateString: RS,
    isSpecCompliantForm: PS,
    toJSONObject: TS,
    isAsyncFn: LS,
    isThenable: MS,
    setImmediate: _m,
    asap: OS,
  };
function $(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
E.inherits($, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Cm = $.prototype,
  Em = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Em[e] = { value: e };
});
Object.defineProperties($, Em);
Object.defineProperty(Cm, "isAxiosError", { value: !0 });
$.from = (e, t, n, r, s, i) => {
  const o = Object.create(Cm);
  return (
    E.toFlatObject(
      e,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    $.call(o, e.message, t, n, r, s),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const NS = null;
function iu(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Rm(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function tf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = Rm(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function AS(e) {
  return E.isArray(e) && !e.some(iu);
}
const bS = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function la(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (v, w) {
      return !E.isUndefined(w[v]);
    }));
  const r = n.metaTokens,
    s = n.visitor || d,
    i = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(s)) throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (E.isDate(m)) return m.toISOString();
    if (!l && E.isBlob(m)) throw new $("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(m) || E.isTypedArray(m)
      ? l && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function d(m, v, w) {
    let p = m;
    if (m && !w && typeof m == "object") {
      if (E.endsWith(v, "{}")) (v = r ? v : v.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (E.isArray(m) && AS(m)) ||
        ((E.isFileList(m) || E.endsWith(v, "[]")) && (p = E.toArray(m)))
      )
        return (
          (v = Rm(v)),
          p.forEach(function (g, S) {
            !(E.isUndefined(g) || g === null) &&
              t.append(o === !0 ? tf([v], S, i) : o === null ? v : v + "[]", u(g));
          }),
          !1
        );
    }
    return iu(m) ? !0 : (t.append(tf(w, v, i), u(m)), !1);
  }
  const c = [],
    f = Object.assign(bS, { defaultVisitor: d, convertValue: u, isVisitable: iu });
  function y(m, v) {
    if (!E.isUndefined(m)) {
      if (c.indexOf(m) !== -1) throw Error("Circular reference detected in " + v.join("."));
      c.push(m),
        E.forEach(m, function (p, h) {
          (!(E.isUndefined(p) || p === null) &&
            s.call(t, p, E.isString(h) ? h.trim() : h, v, f)) === !0 && y(p, v ? v.concat(h) : [h]);
        }),
        c.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function nf(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function pc(e, t) {
  (this._pairs = []), e && la(e, this, t);
}
const Pm = pc.prototype;
Pm.append = function (t, n) {
  this._pairs.push([t, n]);
};
Pm.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, nf);
      }
    : nf;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function FS(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Tm(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || FS;
  E.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let i;
  if (
    (s ? (i = s(t, n)) : (i = E.isURLSearchParams(t) ? t.toString() : new pc(t, n).toString(r)), i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class rf {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Lm = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  IS = typeof URLSearchParams < "u" ? URLSearchParams : pc,
  jS = typeof FormData < "u" ? FormData : null,
  DS = typeof Blob < "u" ? Blob : null,
  $S = {
    isBrowser: !0,
    classes: { URLSearchParams: IS, FormData: jS, Blob: DS },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  mc = typeof window < "u" && typeof document < "u",
  ou = (typeof navigator == "object" && navigator) || void 0,
  zS = mc && (!ou || ["ReactNative", "NativeScript", "NS"].indexOf(ou.product) < 0),
  qS =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  US = (mc && window.location.href) || "http://localhost",
  BS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: mc,
        hasStandardBrowserEnv: zS,
        hasStandardBrowserWebWorkerEnv: qS,
        navigator: ou,
        origin: US,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pe = { ...BS, ...$S };
function VS(e, t) {
  return la(
    e,
    new Pe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, i) {
          return Pe.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function QS(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function HS(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Mm(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = i >= n.length;
    return (
      (o = !o && E.isArray(s) ? s.length : o),
      l
        ? (E.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !a)
        : ((!s[o] || !E.isObject(s[o])) && (s[o] = []),
          t(n, r, s[o], i) && E.isArray(s[o]) && (s[o] = HS(s[o])),
          !a)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, s) => {
        t(QS(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function WS(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const oi = {
  transitional: Lm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = E.isObject(t);
      if ((i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return s ? JSON.stringify(Mm(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t) ||
        E.isReadableStream(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return VS(t, this.formSerializer).toString();
        if ((a = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return la(a ? { "files[]": t } : t, l && new l(), this.formSerializer);
        }
      }
      return i || s ? (n.setContentType("application/json", !1), WS(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || oi.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (E.isResponse(t) || E.isReadableStream(t)) return t;
      if (t && E.isString(t) && ((r && !this.responseType) || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? $.from(a, $.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Pe.classes.FormData, Blob: Pe.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } },
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  oi.headers[e] = {};
});
const KS = E.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  GS = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (s = o.indexOf(":")),
              (n = o.substring(0, s).trim().toLowerCase()),
              (r = o.substring(s + 1).trim()),
              !(!n || (t[n] && KS[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  sf = Symbol("internals");
function is(e) {
  return e && String(e).trim().toLowerCase();
}
function Zi(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(Zi) : String(e);
}
function JS(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const XS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function el(e, t, n, r, s) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function YS(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ZS(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0,
    });
  });
}
class Be {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, l, u) {
      const d = is(l);
      if (!d) throw new Error("header name must be a non-empty string");
      const c = E.findKey(s, d);
      (!c || s[c] === void 0 || u === !0 || (u === void 0 && s[c] !== !1)) && (s[c || l] = Zi(a));
    }
    const o = (a, l) => E.forEach(a, (u, d) => i(u, d, l));
    if (E.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (E.isString(t) && (t = t.trim()) && !XS(t)) o(GS(t), n);
    else if (E.isHeaders(t)) for (const [a, l] of t.entries()) i(l, a, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = is(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return JS(s);
        if (E.isFunction(n)) return n.call(this, s, r);
        if (E.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = is(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || el(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (((o = is(o)), o)) {
        const a = E.findKey(r, o);
        a && (!n || el(r, r[a], a, n)) && (delete r[a], (s = !0));
      }
    }
    return E.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || el(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (s, i) => {
        const o = E.findKey(r, i);
        if (o) {
          (n[o] = Zi(s)), delete n[i];
          return;
        }
        const a = t ? YS(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = Zi(s)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      E.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && E.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[sf] = this[sf] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(o) {
      const a = is(o);
      r[a] || (ZS(s, o), (r[a] = !0));
    }
    return E.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Be.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.reduceDescriptors(Be.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
E.freezeMethods(Be);
function tl(e, t) {
  const n = this || oi,
    r = t || n,
    s = Be.from(r.headers);
  let i = r.data;
  return (
    E.forEach(e, function (a) {
      i = a.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function Om(e) {
  return !!(e && e.__CANCEL__);
}
function Gr(e, t, n) {
  $.call(this, e ?? "canceled", $.ERR_CANCELED, t, n), (this.name = "CanceledError");
}
E.inherits(Gr, $, { __CANCEL__: !0 });
function Nm(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new $(
          "Request failed with status code " + n.status,
          [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      );
}
function ex(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function tx(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        d = r[i];
      o || (o = u), (n[s] = l), (r[s] = u);
      let c = i,
        f = 0;
      for (; c !== s; ) (f += n[c++]), (c = c % e);
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), u - o < t)) return;
      const y = d && u - d;
      return y ? Math.round((f * 1e3) / y) : void 0;
    }
  );
}
function nx(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    i;
  const o = (u, d = Date.now()) => {
    (n = d), (s = null), i && (clearTimeout(i), (i = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const d = Date.now(),
        c = d - n;
      c >= r
        ? o(u, d)
        : ((s = u),
          i ||
            (i = setTimeout(() => {
              (i = null), o(s);
            }, r - c)));
    },
    () => s && o(s),
  ];
}
const Ao = (e, t, n = 3) => {
    let r = 0;
    const s = tx(50, 250);
    return nx((i) => {
      const o = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        l = o - r,
        u = s(l),
        d = o <= a;
      r = o;
      const c = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && a && d ? (a - o) / u : void 0,
        event: i,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(c);
    }, n);
  },
  of = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  af =
    (e) =>
    (...t) =>
      E.asap(() => e(...t)),
  rx = Pe.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Pe.origin)),
        e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)
      ))(new URL(Pe.origin), Pe.navigator && /(msie|trident)/i.test(Pe.navigator.userAgent))
    : () => !0,
  sx = Pe.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, i) {
          const o = [e + "=" + encodeURIComponent(t)];
          E.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            E.isString(r) && o.push("path=" + r),
            E.isString(s) && o.push("domain=" + s),
            i === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function ix(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ox(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Am(e, t) {
  return e && !ix(t) ? ox(e, t) : t;
}
const lf = (e) => (e instanceof Be ? { ...e } : e);
function Gn(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, c, f) {
    return E.isPlainObject(u) && E.isPlainObject(d)
      ? E.merge.call({ caseless: f }, u, d)
      : E.isPlainObject(d)
        ? E.merge({}, d)
        : E.isArray(d)
          ? d.slice()
          : d;
  }
  function s(u, d, c, f) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(u)) return r(void 0, u, c, f);
    } else return r(u, d, c, f);
  }
  function i(u, d) {
    if (!E.isUndefined(d)) return r(void 0, d);
  }
  function o(u, d) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function a(u, d, c) {
    if (c in t) return r(u, d);
    if (c in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (u, d, c) => s(lf(u), lf(d), c, !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const c = l[d] || s,
        f = c(e[d], t[d], d);
      (E.isUndefined(f) && c !== a) || (n[d] = f);
    }),
    n
  );
}
const bm = (e) => {
    const t = Gn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: i,
      headers: o,
      auth: a,
    } = t;
    (t.headers = o = Be.from(o)),
      (t.url = Tm(Am(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (E.isFormData(n)) {
      if (Pe.hasStandardBrowserEnv || Pe.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
      else if ((l = o.getContentType()) !== !1) {
        const [u, ...d] = l
          ? l
              .split(";")
              .map((c) => c.trim())
              .filter(Boolean)
          : [];
        o.setContentType([u || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      Pe.hasStandardBrowserEnv &&
      (r && E.isFunction(r) && (r = r(t)), r || (r !== !1 && rx(t.url)))
    ) {
      const u = s && i && sx.read(i);
      u && o.set(s, u);
    }
    return t;
  },
  ax = typeof XMLHttpRequest < "u",
  lx =
    ax &&
    function (e) {
      return new Promise(function (n, r) {
        const s = bm(e);
        let i = s.data;
        const o = Be.from(s.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = s,
          d,
          c,
          f,
          y,
          m;
        function v() {
          y && y(),
            m && m(),
            s.cancelToken && s.cancelToken.unsubscribe(d),
            s.signal && s.signal.removeEventListener("abort", d);
        }
        let w = new XMLHttpRequest();
        w.open(s.method.toUpperCase(), s.url, !0), (w.timeout = s.timeout);
        function p() {
          if (!w) return;
          const g = Be.from("getAllResponseHeaders" in w && w.getAllResponseHeaders()),
            k = {
              data: !a || a === "text" || a === "json" ? w.responseText : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: g,
              config: e,
              request: w,
            };
          Nm(
            function (C) {
              n(C), v();
            },
            function (C) {
              r(C), v();
            },
            k
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = p)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(p);
            }),
          (w.onabort = function () {
            w && (r(new $("Request aborted", $.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function () {
            r(new $("Network Error", $.ERR_NETWORK, e, w)), (w = null);
          }),
          (w.ontimeout = function () {
            let S = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
            const k = s.transitional || Lm;
            s.timeoutErrorMessage && (S = s.timeoutErrorMessage),
              r(new $(S, k.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED, e, w)),
              (w = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in w &&
            E.forEach(o.toJSON(), function (S, k) {
              w.setRequestHeader(k, S);
            }),
          E.isUndefined(s.withCredentials) || (w.withCredentials = !!s.withCredentials),
          a && a !== "json" && (w.responseType = s.responseType),
          u && (([f, m] = Ao(u, !0)), w.addEventListener("progress", f)),
          l &&
            w.upload &&
            (([c, y] = Ao(l)),
            w.upload.addEventListener("progress", c),
            w.upload.addEventListener("loadend", y)),
          (s.cancelToken || s.signal) &&
            ((d = (g) => {
              w && (r(!g || g.type ? new Gr(null, e, w) : g), w.abort(), (w = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(d),
            s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
        const h = ex(s.url);
        if (h && Pe.protocols.indexOf(h) === -1) {
          r(new $("Unsupported protocol " + h + ":", $.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(i || null);
      });
    },
  ux = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const i = function (u) {
        if (!s) {
          (s = !0), a();
          const d = u instanceof Error ? u : this.reason;
          r.abort(d instanceof $ ? d : new Gr(d instanceof Error ? d.message : d));
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), i(new $(`timeout ${t} of ms exceeded`, $.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((u) => {
            u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", i));
      const { signal: l } = r;
      return (l.unsubscribe = () => E.asap(a)), l;
    }
  },
  cx = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  dx = async function* (e, t) {
    for await (const n of fx(e)) yield* cx(n, t);
  },
  fx = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  uf = (e, t, n, r) => {
    const s = dx(e, t);
    let i = 0,
      o,
      a = (l) => {
        o || ((o = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: u, value: d } = await s.next();
            if (u) {
              a(), l.close();
              return;
            }
            let c = d.byteLength;
            if (n) {
              let f = (i += c);
              n(f);
            }
            l.enqueue(new Uint8Array(d));
          } catch (u) {
            throw (a(u), u);
          }
        },
        cancel(l) {
          return a(l), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ua = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
  Fm = ua && typeof ReadableStream == "function",
  hx =
    ua &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Im = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  px =
    Fm &&
    Im(() => {
      let e = !1;
      const t = new Request(Pe.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  cf = 64 * 1024,
  au = Fm && Im(() => E.isReadableStream(new Response("").body)),
  bo = { stream: au && ((e) => e.body) };
ua &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !bo[t] &&
        (bo[t] = E.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new $(`Response type '${t}' is not supported`, $.ERR_NOT_SUPPORT, r);
            });
    });
  })(new Response());
const mx = async (e) => {
    if (e == null) return 0;
    if (E.isBlob(e)) return e.size;
    if (E.isSpecCompliantForm(e))
      return (await new Request(Pe.origin, { method: "POST", body: e }).arrayBuffer()).byteLength;
    if (E.isArrayBufferView(e) || E.isArrayBuffer(e)) return e.byteLength;
    if ((E.isURLSearchParams(e) && (e = e + ""), E.isString(e))) return (await hx(e)).byteLength;
  },
  yx = async (e, t) => {
    const n = E.toFiniteNumber(e.getContentLength());
    return n ?? mx(t);
  },
  gx =
    ua &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: i,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: d,
        withCredentials: c = "same-origin",
        fetchOptions: f,
      } = bm(e);
      u = u ? (u + "").toLowerCase() : "text";
      let y = ux([s, i && i.toAbortSignal()], o),
        m;
      const v =
        y &&
        y.unsubscribe &&
        (() => {
          y.unsubscribe();
        });
      let w;
      try {
        if (l && px && n !== "get" && n !== "head" && (w = await yx(d, r)) !== 0) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R;
          if (
            (E.isFormData(r) && (R = k.headers.get("content-type")) && d.setContentType(R), k.body)
          ) {
            const [C, _] = of(w, Ao(af(l)));
            r = uf(k.body, cf, C, _);
          }
        }
        E.isString(c) || (c = c ? "include" : "omit");
        const p = "credentials" in Request.prototype;
        m = new Request(t, {
          ...f,
          signal: y,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: p ? c : void 0,
        });
        let h = await fetch(m);
        const g = au && (u === "stream" || u === "response");
        if (au && (a || (g && v))) {
          const k = {};
          ["status", "statusText", "headers"].forEach((L) => {
            k[L] = h[L];
          });
          const R = E.toFiniteNumber(h.headers.get("content-length")),
            [C, _] = (a && of(R, Ao(af(a), !0))) || [];
          h = new Response(
            uf(h.body, cf, C, () => {
              _ && _(), v && v();
            }),
            k
          );
        }
        u = u || "text";
        let S = await bo[E.findKey(bo, u) || "text"](h, e);
        return (
          !g && v && v(),
          await new Promise((k, R) => {
            Nm(k, R, {
              data: S,
              headers: Be.from(h.headers),
              status: h.status,
              statusText: h.statusText,
              config: e,
              request: m,
            });
          })
        );
      } catch (p) {
        throw (
          (v && v(),
          p && p.name === "TypeError" && /fetch/i.test(p.message)
            ? Object.assign(new $("Network Error", $.ERR_NETWORK, e, m), { cause: p.cause || p })
            : $.from(p, p && p.code, e, m))
        );
      }
    }),
  lu = { http: NS, xhr: lx, fetch: gx };
E.forEach(lu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const df = (e) => `- ${e}`,
  vx = (e) => E.isFunction(e) || e === null || e === !1,
  jm = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let o;
        if (((r = n), !vx(n) && ((r = lu[(o = String(n)).toLowerCase()]), r === void 0)))
          throw new $(`Unknown adapter '${o}'`);
        if (r) break;
        s[o || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(s).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(df).join(`
`)
            : " " + df(i[0])
          : "as no adapter specified";
        throw new $("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT");
      }
      return r;
    },
    adapters: lu,
  };
function nl(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new Gr(null, e);
}
function ff(e) {
  return (
    nl(e),
    (e.headers = Be.from(e.headers)),
    (e.data = tl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    jm
      .getAdapter(e.adapter || oi.adapter)(e)
      .then(
        function (r) {
          return (
            nl(e),
            (r.data = tl.call(e, e.transformResponse, r)),
            (r.headers = Be.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Om(r) ||
              (nl(e),
              r &&
                r.response &&
                ((r.response.data = tl.call(e, e.transformResponse, r.response)),
                (r.response.headers = Be.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Dm = "1.7.9",
  ca = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ca[e] = function (r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const hf = {};
ca.transitional = function (t, n, r) {
  function s(i, o) {
    return "[Axios v" + Dm + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, a) => {
    if (t === !1) throw new $(s(o, " has been removed" + (n ? " in " + n : "")), $.ERR_DEPRECATED);
    return (
      n &&
        !hf[o] &&
        ((hf[o] = !0),
        console.warn(
          s(o, " has been deprecated since v" + n + " and will be removed in the near future")
        )),
      t ? t(i, o, a) : !0
    );
  };
};
ca.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function wx(e, t, n) {
  if (typeof e != "object") throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      o = t[i];
    if (o) {
      const a = e[i],
        l = a === void 0 || o(a, i, e);
      if (l !== !0) throw new $("option " + i + " must be " + l, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new $("Unknown option " + i, $.ERR_BAD_OPTION);
  }
}
const eo = { assertOptions: wx, validators: ca },
  Rt = eo.validators;
class Bn {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new rf(), response: new rf() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : (s = new Error());
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = Gn(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      eo.assertOptions(
        r,
        {
          silentJSONParsing: Rt.transitional(Rt.boolean),
          forcedJSONParsing: Rt.transitional(Rt.boolean),
          clarifyTimeoutError: Rt.transitional(Rt.boolean),
        },
        !1
      ),
      s != null &&
        (E.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : eo.assertOptions(s, { encode: Rt.function, serialize: Rt.function }, !0)),
      eo.assertOptions(
        n,
        { baseUrl: Rt.spelling("baseURL"), withXsrfToken: Rt.spelling("withXSRFToken") },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && E.merge(i.common, i[n.method]);
    i &&
      E.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (m) => {
        delete i[m];
      }),
      (n.headers = Be.concat(o, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((l = l && v.synchronous), a.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let d,
      c = 0,
      f;
    if (!l) {
      const m = [ff.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, u), f = m.length, d = Promise.resolve(n); c < f; )
        d = d.then(m[c++], m[c++]);
      return d;
    }
    f = a.length;
    let y = n;
    for (c = 0; c < f; ) {
      const m = a[c++],
        v = a[c++];
      try {
        y = m(y);
      } catch (w) {
        v.call(this, w);
        break;
      }
    }
    try {
      d = ff.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (c = 0, f = u.length; c < f; ) d = d.then(u[c++], u[c++]);
    return d;
  }
  getUri(t) {
    t = Gn(this.defaults, t);
    const n = Am(t.baseURL, t.url);
    return Tm(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  Bn.prototype[t] = function (n, r) {
    return this.request(Gn(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, a) {
      return this.request(
        Gn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (Bn.prototype[t] = n()), (Bn.prototype[t + "Form"] = n(!0));
});
class yc {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let i;
        const o = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(s);
        return (
          (o.cancel = function () {
            r.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, a) {
        r.reason || ((r.reason = new Gr(i, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return this.subscribe(n), (t.signal.unsubscribe = () => this.unsubscribe(n)), t.signal;
  }
  static source() {
    let t;
    return {
      token: new yc(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function Sx(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function xx(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const uu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(uu).forEach(([e, t]) => {
  uu[t] = e;
});
function $m(e) {
  const t = new Bn(e),
    n = ym(Bn.prototype.request, t);
  return (
    E.extend(n, Bn.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return $m(Gn(e, s));
    }),
    n
  );
}
const ne = $m(oi);
ne.Axios = Bn;
ne.CanceledError = Gr;
ne.CancelToken = yc;
ne.isCancel = Om;
ne.VERSION = Dm;
ne.toFormData = la;
ne.AxiosError = $;
ne.Cancel = ne.CanceledError;
ne.all = function (t) {
  return Promise.all(t);
};
ne.spread = Sx;
ne.isAxiosError = xx;
ne.mergeConfig = Gn;
ne.AxiosHeaders = Be;
ne.formToJSON = (e) => Mm(E.isHTMLForm(e) ? new FormData(e) : e);
ne.getAdapter = jm.getAdapter;
ne.HttpStatusCode = uu;
ne.default = ne;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var kx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _x = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  we = (e, t) => {
    const n = F.forwardRef(
      (
        {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: o,
          className: a = "",
          children: l,
          ...u
        },
        d
      ) =>
        F.createElement(
          "svg",
          {
            ref: d,
            ...kx,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: o ? (Number(i) * 24) / Number(s) : i,
            className: ["lucide", `lucide-${_x(e)}`, a].join(" "),
            ...u,
          },
          [...t.map(([c, f]) => F.createElement(c, f)), ...(Array.isArray(l) ? l : [l])]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cx = we("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zm = we("Code2", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qm = we("Compass", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76", key: "m9r19z" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cu = we("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Um = we("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ex = we("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rx = we("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Px = we("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tx = we("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lx = we("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mx = we("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bm = we("Sprout", [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd",
    },
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ox = we("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vm = we("Sword", [
  ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
  ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
  ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
  ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const du = we("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qm = we("Wand2", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
      key: "1bcowg",
    },
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hm = we("Zap", [
    ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }],
  ]),
  Fo = Xw;
function Nx({ profile: e, commits: t, usesConvex: n }) {
  const [r, s] = F.useState(""),
    i = $1(Fo.chat.sendMessage),
    o = pm(Fo.chat.getMessages, { userId: e.name }) || [],
    [a, l] = F.useState(!1),
    u = async (c) => {
      if ((c.preventDefault(), !(!r.trim() || a))) {
        l(!0);
        try {
          await i({ message: r.trim(), userId: e.name, commits: t, usesConvex: n }), s("");
        } catch (f) {
          console.error("Error sending message:", f);
        } finally {
          l(!1);
        }
      }
    },
    d = o
      .map((c) => [
        { text: c.message, isAI: !1 },
        { text: c.response, isAI: !0 },
      ])
      .flat();
  return x.jsxs("div", {
    className: "mt-6 border rounded-lg overflow-hidden bg-white",
    children: [
      x.jsx("div", {
        className: "p-4 bg-gray-50 border-b",
        children: x.jsxs("div", {
          className: "flex items-center gap-2 text-gray-700",
          children: [
            x.jsx(Cx, { size: 20 }),
            x.jsx("h3", { className: "font-semibold", children: "Chat with the commits" }),
          ],
        }),
      }),
      x.jsxs("div", {
        className: "h-64 overflow-y-auto p-4 space-y-4",
        children: [
          d.map((c, f) =>
            x.jsx(
              "div",
              {
                className: `flex ${c.isAI ? "justify-start" : "justify-end"}`,
                children: x.jsx("div", {
                  className: `max-w-[80%] rounded-lg p-3 ${c.isAI ? "bg-gray-100 text-gray-800" : "bg-[#222222] text-white"}`,
                  children: c.text,
                }),
              },
              f
            )
          ),
          a &&
            x.jsx("div", {
              className: "flex justify-start",
              children: x.jsx("div", {
                className: "bg-gray-100 rounded-lg p-3 max-w-[80%]",
                children: x.jsxs("div", {
                  className: "flex gap-1",
                  children: [
                    x.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" }),
                    x.jsx("div", {
                      className:
                        "w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]",
                    }),
                    x.jsx("div", {
                      className:
                        "w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]",
                    }),
                  ],
                }),
              }),
            }),
        ],
      }),
      x.jsx("form", {
        onSubmit: u,
        className: "p-4 border-t",
        children: x.jsxs("div", {
          className: "flex gap-2",
          children: [
            x.jsx("input", {
              type: "text",
              value: r,
              onChange: (c) => s(c.target.value),
              placeholder: "Ask about this developer's commits...",
              className:
                "flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#222222] focus:border-transparent",
            }),
            x.jsx("button", {
              type: "submit",
              disabled: a,
              className:
                "px-4 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#333333] disabled:opacity-50 transition-colors",
              children: x.jsx(Mx, { size: 20 }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Ax({ profile: e, commits: t, usesConvex: n }) {
  const [r, s] = F.useState(!1),
    i = () => {
      const c = a().label,
        f = `🎮 Just discovered ${e.name} is a ${c} on Commit Rank with ${t.toLocaleString()} commits! ${n ? "⚡ Convex Developer!" : ""} Check out their journey at https://commitrank.ai`;
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(f)}`, "_blank");
    },
    o = r ? "bg-gray-900 text-white" : "bg-white text-gray-900",
    a = () =>
      t >= 1e5
        ? { icon: Hm, label: "Overload", color: "text-purple-500" }
        : t >= 1e4
          ? { icon: zm, label: "Hacker", color: "text-red-500" }
          : t >= 5e3
            ? { icon: Qm, label: "Wizard", color: "text-blue-500" }
            : t >= 1e3
              ? { icon: Vm, label: "Samurai", color: "text-indigo-500" }
              : t >= 10
                ? { icon: Bm, label: "Noob", color: "text-green-500" }
                : { icon: qm, label: "Explorer", color: "text-yellow-500" },
    l = () => {
      if (t >= 1e5) {
        const f = [
          `In the digital realm, ${e.name} stands as a legendary Overload, their ${t.toLocaleString()} commits crackling with raw coding energy. Like a power plant of pure innovation, they've generated enough code to light up entire tech ecosystems. Their GitHub history reads like a saga of digital transformation, each commit a bolt of brilliance in the vast storm of development.`,
          `Legends speak of ${e.name}, the Overload whose keyboard never cools. With ${t.toLocaleString()} commits, they've transcended normal development patterns, becoming one with the code itself. Their repository is a testament to their mastery, a beacon of light in the darkness of unsolved problems.`,
        ];
        return f[Math.floor(Math.random() * f.length)];
      }
      if (t >= 1e4) {
        const f = [
          `Deep in the matrix of code, ${e.name} moves like a digital phantom, their ${t.toLocaleString()} commits telling tales of countless systems conquered and algorithms mastered. This Hacker's repository is a masterclass in digital craftsmanship, each commit a piece of the puzzle in their grand scheme of innovation.`,
          `With fingers dancing across the keyboard, ${e.name} has carved their name into the bedrock of GitHub with ${t.toLocaleString()} precise commits. This Hacker's code flows like poetry, each pull request a verse in their epic saga of development.`,
        ];
        return f[Math.floor(Math.random() * f.length)];
      }
      if (t >= 5e3) {
        const f = [
          `In the grand library of code, ${e.name} stands as a true Wizard, their ${t.toLocaleString()} commits forming spells of pure logic and innovation. Their repository is their spellbook, each commit a carefully crafted incantation that brings digital dreams to life.`,
          `${e.name}, the Code Wizard, has woven ${t.toLocaleString()} commits into a tapestry of technical excellence. Their mastery of the digital arts is evident in every line of code, each commit a step in their journey to programming enlightenment.`,
        ];
        return f[Math.floor(Math.random() * f.length)];
      }
      if (t >= 1e3) {
        const f = [
          `In the digital dojo of ${e.name}, each commit is a stroke of the keyboard-katana. With ${t.toLocaleString()} precise cuts through the codebase, this noble developer has earned their place among the Samurai of Silicon Valley. Their git log tells tales of epic bug battles and feature quests that will be remembered in the scrolls of GitHub for generations to come.`,
          `Legend speaks of ${e.name}, the Code Samurai, whose ${t.toLocaleString()} commits are like cherry blossoms in the wind - beautiful, purposeful, and ever-growing. Through countless pull requests and merge conflicts, they have maintained their honor, following the way of Clean Code with unwavering dedication.`,
        ];
        return f[Math.floor(Math.random() * f.length)];
      }
      if (t >= 10) {
        const f = [
          `Every journey begins with a single commit, and ${e.name} has already taken ${t.toLocaleString()} steps on their path to coding mastery. Like a sprout reaching for the sun, their potential grows with each new line of code, each commit a leaf in their growing garden of development.`,
          `In the vast forest of code, ${e.name} is a promising sapling, their ${t.toLocaleString()} commits marking the beginning of what promises to be a mighty development journey. Watch as they grow, one commit at a time, into a towering presence in the tech ecosystem.`,
        ];
        return f[Math.floor(Math.random() * f.length)];
      }
      const c = [
        `Standing at the threshold of the coding universe, ${e.name} takes their first brave steps with ${t.toLocaleString()} commits. Like an explorer charting unknown territories, they venture forth into the vast expanse of development, each commit a new discovery in their programming journey.`,
        `${e.name} is an intrepid explorer in the world of code, their ${t.toLocaleString()} commits marking the beginning of an exciting adventure. With curiosity as their compass, they're setting out to discover the endless possibilities that await in the realm of development.`,
      ];
      return c[Math.floor(Math.random() * c.length)];
    },
    u = a(),
    d = u.icon;
  return x.jsxs("div", {
    className: `rounded-lg shadow-xl p-6 w-[450px] mx-auto ${o} transition-colors duration-300`,
    children: [
      x.jsxs("div", {
        className: "flex justify-between items-start mb-4",
        children: [
          x.jsx("img", {
            src: e.avatar_url,
            alt: e.name,
            className: "w-24 h-24 rounded-full border-4 border-[#222222]",
          }),
          x.jsx("button", {
            onClick: () => s(!r),
            className: "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700",
            children: r ? x.jsx(Ox, { size: 20 }) : x.jsx(Tx, { size: 20 }),
          }),
        ],
      }),
      x.jsx("h2", { className: "text-2xl font-bold mt-4", children: e.name }),
      x.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: ["@", e.login] }),
      x.jsx("p", { className: "mt-4", children: e.bio }),
      x.jsxs("div", {
        className: "mt-6 space-y-2",
        children: [
          x.jsxs("p", {
            className: "text-xl font-bold",
            children: [t.toLocaleString(), " Total Commits"],
          }),
          x.jsxs("div", {
            className: `flex items-center gap-2 ${u.color} font-semibold`,
            children: [x.jsx(d, { size: 20 }), x.jsx("span", { children: u.label })],
          }),
          n &&
            x.jsxs("div", {
              className: "flex items-center gap-2 text-orange-500 font-semibold",
              children: [x.jsx(cu, { size: 20 }), x.jsx("span", { children: "Convex Developer" })],
            }),
        ],
      }),
      x.jsxs("div", {
        className: "mt-6 p-4 bg-[#F5F5F5] dark:bg-gray-800 rounded-lg",
        children: [
          x.jsxs("h3", {
            className: `flex items-center gap-2 text-lg font-semibold ${u.color} mb-2`,
            children: [x.jsx(d, { size: 16 }), "The Tale of a ", u.label],
          }),
          x.jsx("p", {
            className: "text-sm italic text-gray-800 dark:text-gray-200",
            children: l(),
          }),
        ],
      }),
      x.jsxs("div", {
        className: "mt-6 space-y-2",
        children: [
          e.location &&
            x.jsxs("div", {
              className: "flex items-center gap-2",
              children: [x.jsx(Rx, { size: 16 }), x.jsx("span", { children: e.location })],
            }),
          e.blog &&
            x.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                x.jsx(Ex, { size: 16 }),
                x.jsx("a", {
                  href: `https://${e.blog}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-blue-500 hover:underline",
                  children: e.blog,
                }),
              ],
            }),
          e.twitter_username &&
            x.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                x.jsx(du, { size: 16 }),
                x.jsxs("a", {
                  href: `https://twitter.com/${e.twitter_username}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-blue-500 hover:underline",
                  children: ["@", e.twitter_username],
                }),
              ],
            }),
          x.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              x.jsx(Um, { size: 16 }),
              x.jsx("a", {
                href: e.html_url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-500 hover:underline",
                children: "GitHub Profile",
              }),
            ],
          }),
        ],
      }),
      x.jsxs("button", {
        onClick: i,
        className:
          "mt-6 w-full flex items-center justify-center gap-2 bg-[#222222] text-white py-2 px-4 rounded-lg hover:bg-[#333333] transition-colors",
        children: [x.jsx(du, { size: 20 }), "Share on X"],
      }),
      x.jsx(Nx, { profile: e, commits: t, usesConvex: n }),
    ],
  });
}
function bx() {
  const [e, t] = F.useState(""),
    [n, r] = F.useState(""),
    [s, i] = F.useState(6),
    o = F.useRef({}),
    a = D1(Fo.profiles.storeProfile),
    l = pm(Fo.profiles.getProfiles) || [],
    u = (C) => {
      var _;
      (_ = o.current[C]) == null || _.scrollIntoView({ behavior: "smooth", block: "center" });
    },
    d = async (C) => {
      const N = (await ne.get(`https://api.github.com/users/${C}/repos`)).data.map(async (b) => {
        try {
          const j = await ne.get(
              `https://raw.githubusercontent.com/${C}/${b.name}/main/package.json`
            ),
            Q = { ...j.data.dependencies, ...j.data.devDependencies };
          return Object.keys(Q).some((V) => V === "convex" || V.startsWith("@convex/"));
        } catch {
          return !1;
        }
      });
      return (await Promise.all(N)).some((b) => b);
    },
    c = async (C) => {
      if ((C.preventDefault(), !e.includes("github.com"))) {
        r("Please enter a valid GitHub profile URL");
        return;
      }
      try {
        const _ = e.split("/").pop();
        if (!_) throw new Error("Invalid GitHub URL");
        const L = await ne.get(`https://api.github.com/users/${_}`),
          M = (
            await ne.get(`https://api.github.com/search/commits?q=author:${_}`, {
              headers: { Accept: "application/vnd.github.cloak-preview" },
            })
          ).data.total_count,
          b = await d(_),
          j = L.data;
        await a({
          login: j.login,
          name: j.name || j.login,
          avatar_url: j.avatar_url,
          bio: j.bio || "",
          public_repos: j.public_repos,
          followers: j.followers,
          following: j.following,
          html_url: j.html_url,
          twitter_username: j.twitter_username || void 0,
          blog: j.blog || void 0,
          location: j.location || void 0,
          commits: M,
          usesConvex: b,
        }),
          t(""),
          r("");
      } catch (_) {
        console.error("Error fetching GitHub profile:", _),
          r("Error fetching GitHub profile. Please check the URL and try again.");
      }
    },
    f = () => {
      i((C) => C + 6);
    },
    y = l.slice(0, s),
    m = l.length > s,
    v = l.filter((C) => C.commits >= 1e5),
    w = l.filter((C) => C.commits >= 1e4 && C.commits < 1e5),
    p = l.filter((C) => C.commits >= 5e3 && C.commits < 1e4),
    h = l.filter((C) => C.commits >= 1e3 && C.commits < 5e3),
    g = l.filter((C) => C.commits < 10),
    S = l.filter((C) => C.commits >= 10 && C.commits < 1e3),
    k = l.filter((C) => C.usesConvex),
    R = [
      {
        name: "Overload",
        icon: Hm,
        color: "text-purple-600",
        profiles: v,
        description: "100,000+ commits",
      },
      {
        name: "Hacker",
        icon: zm,
        color: "text-red-600",
        profiles: w,
        description: "10,000+ commits",
      },
      {
        name: "Wizard",
        icon: Qm,
        color: "text-blue-600",
        profiles: p,
        description: "5,000+ commits",
      },
      {
        name: "Samurai",
        icon: Vm,
        color: "text-indigo-600",
        profiles: h,
        description: "1,000+ commits",
      },
      {
        name: "Noob",
        icon: Bm,
        color: "text-green-600",
        profiles: S,
        description: "10-999 commits",
      },
      {
        name: "Explorer",
        icon: qm,
        color: "text-yellow-600",
        profiles: g,
        description: "Less than 10 commits",
      },
      {
        name: "Convex",
        icon: cu,
        color: "text-orange-600",
        profiles: k,
        description: "Uses Convex in their repos",
      },
    ];
  return x.jsx("div", {
    className: "min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#F3F2F2] to-[#FFFFFF]",
    children: x.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        x.jsx("h1", {
          className: "text-4xl font-bold text-center mb-2 pt-10",
          children: "Commit Rank",
        }),
        x.jsx("p", {
          className: "text-center text-gray-600 mb-2",
          children:
            "Chat with any GitHub public profile and see their ranking. Just paste the GitHub profile URL below.",
        }),
        x.jsxs("div", {
          className: `flex items-center justify-center gap-2 text-sm text-gray-500 mb-8
        `,
          children: [
            "Open Source Project Built with",
            x.jsxs("a", {
              href: "https://convex.link/C9EptlP",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-grey-500 hover:underline flex items-center gap-1",
              children: [x.jsx(cu, { size: 16 }), "Convex.dev"],
            }),
            " | ",
            x.jsx("a", {
              href: "https://tanstack.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-grey-500 hover:underline",
              children: "TanStack.com",
            }),
            " | ",
            x.jsx("a", {
              href: "https://bolt.new",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-grey-500 hover:underline",
              children: "Bolt.new",
            }),
          ],
        }),
        x.jsxs("form", {
          onSubmit: c,
          className: "mb-12",
          children: [
            x.jsxs("div", {
              className: "flex gap-4 max-w-2xl mx-auto",
              children: [
                x.jsxs("div", {
                  className: "flex-1 relative",
                  children: [
                    x.jsx("input", {
                      type: "text",
                      value: e,
                      onChange: (C) => t(C.target.value),
                      placeholder: "Enter GitHub profile URL",
                      className:
                        "w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#222222] focus:border-transparent",
                    }),
                    x.jsx(Lx, { className: "absolute right-3 top-2.5 text-gray-400", size: 20 }),
                  ],
                }),
                x.jsx("button", {
                  type: "submit",
                  className:
                    "px-6 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#333333] disabled:opacity-50",
                  children: "Start Ranking",
                }),
              ],
            }),
            n && x.jsx("p", { className: "text-red-500 text-center mt-2", children: n }),
          ],
        }),
        x.jsxs("div", {
          className: "flex gap-8",
          children: [
            x.jsx("div", {
              className: "w-72 flex-shrink-0",
              children: x.jsxs("div", {
                className: "sticky top-4 bg-white rounded-lg shadow-md p-6",
                children: [
                  x.jsx("h2", {
                    className: "text-xl font-bold mb-6",
                    children: "Ranking Categories",
                  }),
                  x.jsx("div", {
                    className: "space-y-6",
                    children: R.map((C) =>
                      x.jsxs(
                        "div",
                        {
                          children: [
                            x.jsxs("div", {
                              className: `flex items-center gap-2 ${C.color} font-semibold mb-2`,
                              children: [
                                x.jsx(C.icon, { size: 20 }),
                                x.jsxs("div", {
                                  children: [
                                    x.jsxs("h3", {
                                      children: [C.name, " (", C.profiles.length, ")"],
                                    }),
                                    x.jsx("p", {
                                      className: "text-xs text-gray-500 font-normal",
                                      children: C.description,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            C.profiles.length > 0 &&
                              x.jsx("div", {
                                className: "pl-7 space-y-2",
                                children: C.profiles.map((_) =>
                                  x.jsxs(
                                    "button",
                                    {
                                      onClick: () => u(_.login),
                                      className:
                                        "text-sm text-gray-600 hover:text-[#222222] hover:underline block w-full text-left transition-colors",
                                      children: ["@", _.login],
                                    },
                                    _.login
                                  )
                                ),
                              }),
                          ],
                        },
                        C.name
                      )
                    ),
                  }),
                ],
              }),
            }),
            x.jsxs("div", {
              className: "flex-1",
              children: [
                x.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                  children: y.map((C) =>
                    x.jsx(
                      "div",
                      {
                        ref: (_) => (o.current[C.login] = _),
                        children: x.jsx(Ax, {
                          profile: C,
                          commits: C.commits,
                          usesConvex: C.usesConvex,
                        }),
                      },
                      C._id
                    )
                  ),
                }),
                m &&
                  x.jsx("div", {
                    className: "mt-8 flex justify-center",
                    children: x.jsx("button", {
                      onClick: f,
                      className:
                        "px-6 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#333333] transition-colors",
                      children: "Load More",
                    }),
                  }),
              ],
            }),
          ],
        }),
        x.jsxs("footer", {
          className: "mt-16",
          children: [
            x.jsx("hr", { className: "border-gray-200 mb-6" }),
            x.jsxs("div", {
              className: "text-center text-sm text-gray-500",
              children: [
                x.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Database powered by ",
                    x.jsx("a", { href: "https://convex.link/C9EptlP", children: " convex.dev" }),
                  ],
                }),
                x.jsxs("div", {
                  className: "flex justify-center gap-6",
                  children: [
                    x.jsx("a", {
                      href: "https://twitter.com/convex_dev",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-gray-400 hover:text-[#222222] transition-colors",
                      children: x.jsx(du, { size: 20 }),
                    }),
                    x.jsx("a", {
                      href: "https://discord.gg/XcRXcWPJGG",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-gray-400 hover:text-[#222222] transition-colors",
                      children: x.jsx(Px, { size: 20 }),
                    }),
                    x.jsx("a", {
                      href: "https://github.com/waynesutton/commitrank",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-gray-400 hover:text-[#222222] transition-colors",
                      children: x.jsx(Um, { size: 20 }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Fx = z0("/")({ component: bx }),
  Ix = Fx.update({ id: "/", path: "/", getParentRoute: () => mm }),
  jx = { IndexRoute: Ix },
  Dx = mm._addFileChildren(jx)._addFileTypes(),
  $x = R0({ routeTree: Dx }),
  zx = new mw(),
  qx = new F1("https://courteous-ostrich-527.convex.cloud");
jp(document.getElementById("root")).render(
  x.jsx(F.StrictMode, {
    children: x.jsx(j1, {
      client: qx,
      children: x.jsx(gw, { client: zx, children: x.jsx(W0, { router: $x }) }),
    }),
  })
);
