/*eslint-disable */
import a from 'fbjs/lib/ExecutionEnvironment.js';

export function shallowEqual() {
	var r =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function(e) {
						return typeof e;
				  }
				: function(e) {
						return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
							? 'symbol'
							: typeof e;
				  },
		a = Object.prototype.hasOwnProperty;
	function o(e, t) {
		if (e === t) return !0;
		if (
			'object' !== (void 0 === e ? 'undefined' : r(e)) ||
			null === e ||
			'object' !== (void 0 === t ? 'undefined' : r(t)) ||
			null === t
		)
			return !1;
		var n = Object.keys(e),
			o = Object.keys(t);
		if (n.length !== o.length) return !1;
		for (var i = a.bind(t), s = 0; s < n.length; s++) if (!i(n[s]) || e[n[s]] !== t[n[s]]) return !1;
		return !0;
	}
}
function uniqueId() {
	var e = 0;
	return ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) + e++).toString();
}

export function lazyloadUtil() {
	var e = {},
		t = undefined,
		n = function(e) {
			return function(t) {
				t.forEach(function(t) {
					t.isIntersecting && e();
				});
			};
		},
		r = {
			root: undefined,
			rootMargin: '0px 0px 350px 0px',
			threshold: 0.01
		};
	t =
		t ||
		function(e) {
			return new IntersectionObserver(n(e), r);
		};
	return {
		register: function(i) {
			var s =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: function(e) {
								return e;
						  },
				c = arguments[2],
				u = arguments[3];
			if (!i || !a.canUseDOM) return null;
			var l =
				u || c
					? (function(e, t, a) {
							var o = Object.assign({}, r, {
								root: t,
								rootMargin: '0px 0px ' + (a || 350) + 'px 0px'
							});
							return new IntersectionObserver(n(e), o);
					  })(s, c, u)
					: t(s);
			l.observe(i);
			var d = Object(uniqueId)();
			return (
				(e[d] = {
					elem: i,
					observer: l
				}),
				d
			);
		},
		unregister: function(t) {
			if (t && a.canUseDOM) {
				if (e[t]) {
					var n = e[t].observer;
					n && n.unobserve(e[t].elem);
				}
				delete e[t];
			}
		}
	};
}

export function domHelper(e, t, n) {
	var a = {},
		o = function(e) {
			var t = a[e];
			return t || ((t = new RegExp('(\\s|^)' + e + '(\\s|$)')), (a[e] = t)), t;
		};
	function i(e, t) {
		var n = o(t);
		return Boolean(e && e.className && n.test(e.className));
	}
	return {
		i: function i(e, t) {
			var n = o(t);
			return Boolean(e && e.className && n.test(e.className));
		},
		s: function s(e, t) {
			e && !i(e, t) && (e.className += ' ' + t);
		},
		c: function c(e, t) {
			if (e && i(e, t)) {
				var n = o(t);
				e.className = e.className.replace(n, ' ');
			}
		},
		u: function u(e, t) {
			e && (e.className = t);
		},
		l: function l(e) {
			var t = document.getElementById(e);
			t && t.parentNode && t.parentNode.removeChild(t);
		},
		d: function d(e, t, n, a) {
			return function() {
				console.log(Object(scrollUtil().i));
				// scrollUtil().i &&
				// 	Object(scrollUtil().i)(function() {
				// 		debugger;
				// 		e && ((e.src = n), (e.src = t || n), a && c(e, a));
				//     });
				requestAnimationFrame(function() {
					e && ((e.src = n), (e.src = t || n), a && c(e, a));
				});
			};
		},
		p: function p(e) {
			return Boolean(
				!(!1 === e.isTrusted) &&
					((e.screenX && 0 !== e.screenX && e.screenY && 0 !== e.screenY) ||
						(e.clientX && 0 !== e.clientX && e.clientY && 0 !== e.clientY))
			);
		},
		f: function f(e) {
			var t = new Image();
			return new Promise(function(n, r) {
				function a() {
					t.removeEventListener('load', a), t.removeEventListener('error', o), n(t);
				}
				function o(e) {
					t.removeEventListener('load', a), t.removeEventListener('error', o), r(e);
				}
				t.addEventListener('load', a), t.addEventListener('error', o), (t.src = e);
			});
		}
	};
}

export function scrollUtil() {
	var i = a.canUseDOM
		? window.requestAnimationFrame ||
		  window.webkitRequestAnimationFrame ||
		  window.mozRequestAnimationFrame ||
		  function(e) {
				window.setTimeout(e, 1e3 / 60);
		  }
		: null;
	return {
		i: function i() {
			let requestAnimationFrame = a.canUseDOM
				? window.requestAnimationFrame ||
				  window.webkitRequestAnimationFrame ||
				  window.mozRequestAnimationFrame ||
				  function(e) {
						window.setTimeout(e, 1e3 / 60);
				  }
				: null;
			return requestAnimationFrame;
		},
		s: function s() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.8,
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : easingEquations().easeInOutSine,
				r = arguments[3];
			if (r) {
				var a = window.browserVersion,
					s =
						void 0 !== r.scrollY
							? r.scrollY
							: void 0 !== r.pageYOffset
							? r.pageYOffset
							: void 0 !== r.document.documentElement.scrollTop
							? r.document.documentElement.scrollTop
							: 0;
				if ('IE9' !== a && 'IE10' !== a) {
					var c = 0;
					!(function a() {
						var u = (c += 1 / 60) / t,
							l = easingEquations().b[n](u);
						u < 1 ? (i && i(a), r.scrollTo(0, s + e * l)) : r.scrollTo(0, s + e);
					})();
				} else document.documentElement.scrollTop = s + e;
			}
		},
		c: function c(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.8,
				r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : easingEquations().easeInOutSine;
			if (e) {
				var a = window.browserVersion;
				if ('IE9' !== a && 'IE10' !== a) {
					var s = e.scrollTop,
						c = 0;
					!(function a() {
						var u = (c += 1 / 60) / n,
							l = easingEquations().b[r](u);
						u < 1 ? (i && i(a), (e.scrollTop = s + t * l)) : (e.scrollTop = s + t);
					})();
				} else e.scrollTop += t;
			}
		},
		u: function u() {
			return {
				x: void 0 !== window.scrollX ? window.scrollX : window.pageXOffset,
				y: void 0 !== window.scrollY ? window.scrollY : window.pageYOffset
			};
		}
	};
}

export function easingEquations() {
	return {
		linear: function(e) {
			return e;
		},
		easeInSine: function(e) {
			return 1 - Math.cos(e * (Math.PI / 2));
		},
		easeOutSine: function(e) {
			return Math.sin(e * (Math.PI / 2));
		},
		easeInOutSine: function(e) {
			return -0.5 * (Math.cos(Math.PI * e) - 1);
		},
		easeFromTo: function(e) {
			return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
		},
		easeFrom: function(e) {
			return Math.pow(e, 4);
		},
		easeTo: function(e) {
			return Math.pow(e, 0.25);
		}
	};
}
