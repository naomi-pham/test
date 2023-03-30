(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
	new MutationObserver((o) => {
		for (const i of o)
			if (i.type === 'childList')
				for (const l of i.addedNodes)
					l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(o) {
		const i = {};
		return (
			o.integrity && (i.integrity = o.integrity),
			o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
			o.crossorigin === 'use-credentials'
				? (i.credentials = 'include')
				: o.crossorigin === 'anonymous'
				? (i.credentials = 'omit')
				: (i.credentials = 'same-origin'),
			i
		);
	}
	function r(o) {
		if (o.ep) return;
		o.ep = !0;
		const i = n(o);
		fetch(o.href, i);
	}
})();
var qs =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
		? window
		: typeof global < 'u'
		? global
		: typeof self < 'u'
		? self
		: {};
function Hf(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var tr = {},
	Vf = {
		get exports() {
			return tr;
		},
		set exports(e) {
			tr = e;
		},
	},
	Do = {},
	W = {},
	Wf = {
		get exports() {
			return W;
		},
		set exports(e) {
			W = e;
		},
	},
	B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zr = Symbol.for('react.element'),
	Qf = Symbol.for('react.portal'),
	Kf = Symbol.for('react.fragment'),
	Yf = Symbol.for('react.strict_mode'),
	Xf = Symbol.for('react.profiler'),
	Gf = Symbol.for('react.provider'),
	Jf = Symbol.for('react.context'),
	bf = Symbol.for('react.forward_ref'),
	Zf = Symbol.for('react.suspense'),
	qf = Symbol.for('react.memo'),
	ed = Symbol.for('react.lazy'),
	Mu = Symbol.iterator;
function td(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Mu && e[Mu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var ea = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	ta = Object.assign,
	na = {};
function Pn(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = na),
		(this.updater = n || ea);
}
Pn.prototype.isReactComponent = {};
Pn.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
Pn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function ra() {}
ra.prototype = Pn.prototype;
function Ol(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = na),
		(this.updater = n || ea);
}
var Ll = (Ol.prototype = new ra());
Ll.constructor = Ol;
ta(Ll, Pn.prototype);
Ll.isPureReactComponent = !0;
var Du = Array.isArray,
	oa = Object.prototype.hasOwnProperty,
	Ml = { current: null },
	ia = { key: !0, ref: !0, __self: !0, __source: !0 };
function la(e, t, n) {
	var r,
		o = {},
		i = null,
		l = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (l = t.ref),
		t.key !== void 0 && (i = '' + t.key),
		t))
			oa.call(t, r) && !ia.hasOwnProperty(r) && (o[r] = t[r]);
	var u = arguments.length - 2;
	if (u === 1) o.children = n;
	else if (1 < u) {
		for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
		o.children = s;
	}
	if (e && e.defaultProps)
		for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
	return {
		$$typeof: zr,
		type: e,
		key: i,
		ref: l,
		props: o,
		_owner: Ml.current,
	};
}
function nd(e, t) {
	return {
		$$typeof: zr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function Dl(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === zr;
}
function rd(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Fu = /\/+/g;
function ti(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? rd('' + e.key)
		: t.toString(36);
}
function Kr(e, t, n, r, o) {
	var i = typeof e;
	(i === 'undefined' || i === 'boolean') && (e = null);
	var l = !1;
	if (e === null) l = !0;
	else
		switch (i) {
			case 'string':
			case 'number':
				l = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case zr:
					case Qf:
						l = !0;
				}
		}
	if (l)
		return (
			(l = e),
			(o = o(l)),
			(e = r === '' ? '.' + ti(l, 0) : r),
			Du(o)
				? ((n = ''),
				  e != null && (n = e.replace(Fu, '$&/') + '/'),
				  Kr(o, t, n, '', function (a) {
						return a;
				  }))
				: o != null &&
				  (Dl(o) &&
						(o = nd(
							o,
							n +
								(!o.key || (l && l.key === o.key)
									? ''
									: ('' + o.key).replace(Fu, '$&/') + '/') +
								e,
						)),
				  t.push(o)),
			1
		);
	if (((l = 0), (r = r === '' ? '.' : r + ':'), Du(e)))
		for (var u = 0; u < e.length; u++) {
			i = e[u];
			var s = r + ti(i, u);
			l += Kr(i, t, n, s, o);
		}
	else if (((s = td(e)), typeof s == 'function'))
		for (e = s.call(e), u = 0; !(i = e.next()).done; )
			(i = i.value), (s = r + ti(i, u++)), (l += Kr(i, t, n, s, o));
	else if (i === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.',
			))
		);
	return l;
}
function Pr(e, t, n) {
	if (e == null) return e;
	var r = [],
		o = 0;
	return (
		Kr(e, r, '', '', function (i) {
			return t.call(n, i, o++);
		}),
		r
	);
}
function od(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				},
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var ze = { current: null },
	Yr = { transition: null },
	id = {
		ReactCurrentDispatcher: ze,
		ReactCurrentBatchConfig: Yr,
		ReactCurrentOwner: Ml,
	};
B.Children = {
	map: Pr,
	forEach: function (e, t, n) {
		Pr(
			e,
			function () {
				t.apply(this, arguments);
			},
			n,
		);
	},
	count: function (e) {
		var t = 0;
		return (
			Pr(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Pr(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Dl(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.',
			);
		return e;
	},
};
B.Component = Pn;
B.Fragment = Kf;
B.Profiler = Xf;
B.PureComponent = Ol;
B.StrictMode = Yf;
B.Suspense = Zf;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = id;
B.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.',
		);
	var r = ta({}, e.props),
		o = e.key,
		i = e.ref,
		l = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (l = Ml.current)),
			t.key !== void 0 && (o = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var u = e.type.defaultProps;
		for (s in t)
			oa.call(t, s) &&
				!ia.hasOwnProperty(s) &&
				(r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
	}
	var s = arguments.length - 2;
	if (s === 1) r.children = n;
	else if (1 < s) {
		u = Array(s);
		for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
		r.children = u;
	}
	return { $$typeof: zr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
B.createContext = function (e) {
	return (
		(e = {
			$$typeof: Jf,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Gf, _context: e }),
		(e.Consumer = e)
	);
};
B.createElement = la;
B.createFactory = function (e) {
	var t = la.bind(null, e);
	return (t.type = e), t;
};
B.createRef = function () {
	return { current: null };
};
B.forwardRef = function (e) {
	return { $$typeof: bf, render: e };
};
B.isValidElement = Dl;
B.lazy = function (e) {
	return { $$typeof: ed, _payload: { _status: -1, _result: e }, _init: od };
};
B.memo = function (e, t) {
	return { $$typeof: qf, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
	var t = Yr.transition;
	Yr.transition = {};
	try {
		e();
	} finally {
		Yr.transition = t;
	}
};
B.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
B.useCallback = function (e, t) {
	return ze.current.useCallback(e, t);
};
B.useContext = function (e) {
	return ze.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
	return ze.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
	return ze.current.useEffect(e, t);
};
B.useId = function () {
	return ze.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
	return ze.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
	return ze.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
	return ze.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
	return ze.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
	return ze.current.useReducer(e, t, n);
};
B.useRef = function (e) {
	return ze.current.useRef(e);
};
B.useState = function (e) {
	return ze.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
	return ze.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
	return ze.current.useTransition();
};
B.version = '18.2.0';
(function (e) {
	e.exports = B;
})(Wf);
const ld = Hf(W);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud = W,
	sd = Symbol.for('react.element'),
	ad = Symbol.for('react.fragment'),
	cd = Object.prototype.hasOwnProperty,
	fd = ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	dd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ua(e, t, n) {
	var r,
		o = {},
		i = null,
		l = null;
	n !== void 0 && (i = '' + n),
		t.key !== void 0 && (i = '' + t.key),
		t.ref !== void 0 && (l = t.ref);
	for (r in t) cd.call(t, r) && !dd.hasOwnProperty(r) && (o[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
	return {
		$$typeof: sd,
		type: e,
		key: i,
		ref: l,
		props: o,
		_owner: fd.current,
	};
}
Do.Fragment = ad;
Do.jsx = ua;
Do.jsxs = ua;
(function (e) {
	e.exports = Do;
})(Vf);
const Kt = tr.Fragment,
	k = tr.jsx,
	Q = tr.jsxs,
	pd = [1, 2, 3, 4, 5],
	hd = [
		'cozy-bg-red-500',
		'cozy-bg-orange-500',
		'cozy-bg-yellow-500',
		'cozy-bg-green-500',
		'cozy-bg-branding-primary-500',
	];
function Fl(e, t) {
	return e === 0
		? t('')
		: e > 0 && e <= 1
		? t('Terrible')
		: e <= 2
		? t('Bad')
		: e <= 3
		? t('Okay')
		: e <= 4
		? t('Good')
		: t('Excellent');
}
function Oe(e, t) {
	return e || (typeof t < 'u' || t !== null ? t : '-');
}
const sa = ({ ...e }) =>
		Q('svg', {
			width: '20',
			height: '20',
			viewBox: '0 0 20 20',
			xmlns: 'http://www.w3.org/2000/svg',
			...e,
			children: [
				k('rect', { width: '20', height: '20', rx: '4' }),
				k('path', {
					d: 'M10 4L11.3471 8.1459H15.7063L12.1796 10.7082L13.5267 14.8541L10 12.2918L6.47329 14.8541L7.82037 10.7082L4.29366 8.1459H8.65292L10 4Z',
					fill: '#FEF8FA',
				}),
			],
		}),
	yd = [1, 2, 3, 4, 5],
	Au = [
		'cozy-bg-red-500',
		'cozy-bg-orange-500',
		'cozy-bg-yellow-500',
		'cozy-bg-green-500',
		'cozy-bg-branding-primary-500',
	],
	md = ({ rating: e, handleClick: t, message: n }) => {
		const [r, o] = W.useState(0),
			i = W.useRef(!0);
		W.useEffect(() => {
			o(e);
		}, [e]);
		const l = W.useCallback(
				(p) =>
					i.current ? 'cozy-bg-zinc-200' : p <= r ? Au[r] : 'cozy-bg-zinc-200',
				[r, i],
			),
			u = W.useCallback(
				(p) => (p <= r ? `cozy-group-hover:${Au[r]}` : ''),
				[r],
			),
			s = (p) => () => {
				(i.current = !1), t(p);
			},
			a = (p) => () => {
				(i.current = !1), o(p);
			},
			h = (p) => () => {
				(i.current = !1), o(p);
			};
		return Q('div', {
			className: 'cozy-group cozy-flex cozy-w-fit cozy-items-center cozy-gap-2',
			children: [
				yd.map((p, y) =>
					k(
						'button',
						{
							onClick: s(y),
							onMouseOver: a(y),
							onMouseOut: h(y),
							className: 'cozy-cozy-pr-1.5 last-of-type:cozy-pr-0',
							children: k('div', {
								className: `cozy-h-8 cozy-w-8 cozy-rounded-md ${l(
									y,
								)} cozy-duration-75 hover:cozy-scale-105 ${u(y)}`,
								children: k(sa, {
									className: 'cozy-h-8 cozy-w-8 cozy-fill-none',
								}),
							}),
						},
						y,
					),
				),
				k('p', { className: 'cozy-ml-2 cozy-opacity-80', children: n }),
			],
		});
	},
	gd = () => {
		const [e, t] = W.useState(''),
			[n, r] = W.useState(0),
			[o, i] = W.useState(!1),
			[l, u] = W.useState(!1),
			s = (f) => {
				r(f), i(!0), Fl(f + 1, t);
			},
			a = { title: '', review: '', name: '' };
		function h(f, z) {
			switch (z.type) {
				case 'INPUT_TITLE':
					return { ...f, title: z.payload };
				case 'INPUT_REVIEW':
					return { ...f, review: z.payload };
				case 'INPUT_NAME':
					return { ...f, name: z.payload };
			}
			throw Error('Unknown action: ' + z.type);
		}
		const [p, y] = W.useReducer(h, a),
			{ title: v, review: m, name: w } = p,
			$ = [
				{
					id: 1,
					type: 'text',
					name: 'title',
					label: 'Give your review a title',
					action: 'INPUT_TITLE',
					value: v,
					placeholder: 'Example: Awesome service!',
				},
				{
					id: 2,
					type: 'text',
					name: 'name',
					label: 'Your name',
					action: 'INPUT_NAME',
					value: w,
					placeholder: 'Example: Ben',
				},
			];
		function d() {
			console.log(p), u(!0);
		}
		const c = (f) => (z) => {
			y({ type: f, payload: z.target.value });
		};
		return k(Kt, {
			children: Q('div', {
				className: 'cozy-bg-white cozy-rounded-xl cozy-p-6 cozy-shadow-md',
				children: [
					Q('div', {
						className: 'cozy-space-y-2',
						children: [
							k('h4', {
								className:
									'cozy-font-graphik-medium cozy-text-title-2 cozy-text-light-neutral-800',
								children: 'Rate your recent experience',
							}),
							k(md, { rating: n, handleClick: s, message: e }),
						],
					}),
					o &&
						k('div', {
							className: 'cozy-mt-5',
							children: l
								? k('p', { children: 'Thank you for your feedback!' })
								: Q('form', {
										onSubmit: d,
										className: 'cozy-flex cozy-flex-col cozy-gap-4',
										children: [
											Q('label', {
												htmlFor: 'review',
												className:
													'cozy-font-graphik-medium cozy-text-body-2 cozy-text-light-neutral-700',
												children: [
													'Share your review',
													k('textarea', {
														id: 'review',
														type: 'text',
														onChange: c('INPUT_REVIEW'),
														value: m,
														className:
															'cozy-mt-1 cozy-w-full cozy-rounded cozy-border cozy-border-light-neutral-300 cozy-p-4 cozy-font-graphik cozy-text-body-2 placeholder:cozy-text-light-neutral-600 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2',
														rows: 5,
														placeholder:
															'This is where you write your reviews.',
														required: !0,
													}),
												],
											}),
											$.map((f) =>
												Q(
													'label',
													{
														className:
															'cozy-font-graphik-medium cozy-text-body-2 cozy-text-light-neutral-700',
														htmlFor: f.name,
														children: [
															f.label,
															k('input', {
																type: f.type,
																id: f.name,
																name: f.name,
																onChange: c(f.action),
																value: f.value,
																placeholder: f.placeholder,
																className:
																	'cozy-mt-1 cozy-w-full cozy-rounded cozy-border cozy-border-light-neutral-300 cozy-p-4 cozy-text-body-2 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2',
															}),
														],
													},
													f.id,
												),
											),
											k('input', {
												type: 'submit',
												value: 'Submit review',
												className:
													'cozy-rounded-xl cozy-border cozy-border-branding-primary-500 cozy-bg-branding-primary-500 cozy-p-4 cozy-text-light-neutral-25 hover:cozy-cursor-pointer hover:cozy-border-branding-primary-600 hover:cozy-bg-branding-primary-600 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2 active:cozy-bg-branding-primary-700 disabled:cozy-border-light-neutral-300 disabled:cozy-bg-light-neutral-300 disabled:cozy-text-light-neutral-500',
											}),
										],
								  }),
						}),
				],
			}),
		});
	},
	vd = () =>
		k('div', {
			className:
				'cozy-rounded-xl cozy-border-2 cozy-border-branding-primary-500 cozy-p-4 cozy-text-center cozy-text-body-1 hover:cozy-cursor-pointer hover:cozy-bg-branding-primary-100 hover:cozy-shadow-sm focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2',
			children: Q('a', {
				href: '/',
				className: 'cozy-text-light-neutral-700 cozy-duration-150',
				children: [
					k('span', { children: 'Review us on' }),
					' ',
					k('span', {
						className:
							'cozy-font-graphik-semibold cozy-text-body-1 cozy-text-branding-primary-500',
						children: 'CozyCot',
					}),
				],
			}),
		});
function aa(e, t) {
	return function () {
		return e.apply(t, arguments);
	};
}
const { toString: ca } = Object.prototype,
	{ getPrototypeOf: Al } = Object,
	$l = ((e) => (t) => {
		const n = ca.call(t);
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
	})(Object.create(null)),
	pt = (e) => ((e = e.toLowerCase()), (t) => $l(t) === e),
	Fo = (e) => (t) => typeof t === e,
	{ isArray: Rn } = Array,
	nr = Fo('undefined');
function wd(e) {
	return (
		e !== null &&
		!nr(e) &&
		e.constructor !== null &&
		!nr(e.constructor) &&
		Mt(e.constructor.isBuffer) &&
		e.constructor.isBuffer(e)
	);
}
const fa = pt('ArrayBuffer');
function zd(e) {
	let t;
	return (
		typeof ArrayBuffer < 'u' && ArrayBuffer.isView
			? (t = ArrayBuffer.isView(e))
			: (t = e && e.buffer && fa(e.buffer)),
		t
	);
}
const Sd = Fo('string'),
	Mt = Fo('function'),
	da = Fo('number'),
	Il = (e) => e !== null && typeof e == 'object',
	xd = (e) => e === !0 || e === !1,
	Xr = (e) => {
		if ($l(e) !== 'object') return !1;
		const t = Al(e);
		return (
			(t === null ||
				t === Object.prototype ||
				Object.getPrototypeOf(t) === null) &&
			!(Symbol.toStringTag in e) &&
			!(Symbol.iterator in e)
		);
	},
	kd = pt('Date'),
	Ed = pt('File'),
	Cd = pt('Blob'),
	Nd = pt('FileList'),
	_d = (e) => Il(e) && Mt(e.pipe),
	Td = (e) => {
		const t = '[object FormData]';
		return (
			e &&
			((typeof FormData == 'function' && e instanceof FormData) ||
				ca.call(e) === t ||
				(Mt(e.toString) && e.toString() === t))
		);
	},
	Pd = pt('URLSearchParams'),
	Rd = (e) =>
		e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Sr(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e === null || typeof e > 'u') return;
	let r, o;
	if ((typeof e != 'object' && (e = [e]), Rn(e)))
		for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
	else {
		const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
			l = i.length;
		let u;
		for (r = 0; r < l; r++) (u = i[r]), t.call(null, e[u], u, e);
	}
}
function pa(e, t) {
	t = t.toLowerCase();
	const n = Object.keys(e);
	let r = n.length,
		o;
	for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
	return null;
}
const ha = (() =>
		typeof globalThis < 'u'
			? globalThis
			: typeof self < 'u'
			? self
			: typeof window < 'u'
			? window
			: global)(),
	ya = (e) => !nr(e) && e !== ha;
function Oi() {
	const { caseless: e } = (ya(this) && this) || {},
		t = {},
		n = (r, o) => {
			const i = (e && pa(t, o)) || o;
			Xr(t[i]) && Xr(r)
				? (t[i] = Oi(t[i], r))
				: Xr(r)
				? (t[i] = Oi({}, r))
				: Rn(r)
				? (t[i] = r.slice())
				: (t[i] = r);
		};
	for (let r = 0, o = arguments.length; r < o; r++)
		arguments[r] && Sr(arguments[r], n);
	return t;
}
const Od = (e, t, n, { allOwnKeys: r } = {}) => (
		Sr(
			t,
			(o, i) => {
				n && Mt(o) ? (e[i] = aa(o, n)) : (e[i] = o);
			},
			{ allOwnKeys: r },
		),
		e
	),
	Ld = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
	Md = (e, t, n, r) => {
		(e.prototype = Object.create(t.prototype, r)),
			(e.prototype.constructor = e),
			Object.defineProperty(e, 'super', { value: t.prototype }),
			n && Object.assign(e.prototype, n);
	},
	Dd = (e, t, n, r) => {
		let o, i, l;
		const u = {};
		if (((t = t || {}), e == null)) return t;
		do {
			for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
				(l = o[i]), (!r || r(l, e, t)) && !u[l] && ((t[l] = e[l]), (u[l] = !0));
			e = n !== !1 && Al(e);
		} while (e && (!n || n(e, t)) && e !== Object.prototype);
		return t;
	},
	Fd = (e, t, n) => {
		(e = String(e)),
			(n === void 0 || n > e.length) && (n = e.length),
			(n -= t.length);
		const r = e.indexOf(t, n);
		return r !== -1 && r === n;
	},
	Ad = (e) => {
		if (!e) return null;
		if (Rn(e)) return e;
		let t = e.length;
		if (!da(t)) return null;
		const n = new Array(t);
		for (; t-- > 0; ) n[t] = e[t];
		return n;
	},
	$d = (
		(e) => (t) =>
			e && t instanceof e
	)(typeof Uint8Array < 'u' && Al(Uint8Array)),
	Id = (e, t) => {
		const r = (e && e[Symbol.iterator]).call(e);
		let o;
		for (; (o = r.next()) && !o.done; ) {
			const i = o.value;
			t.call(e, i[0], i[1]);
		}
	},
	jd = (e, t) => {
		let n;
		const r = [];
		for (; (n = e.exec(t)) !== null; ) r.push(n);
		return r;
	},
	Ud = pt('HTMLFormElement'),
	Bd = (e) =>
		e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
			return r.toUpperCase() + o;
		}),
	$u = (
		({ hasOwnProperty: e }) =>
		(t, n) =>
			e.call(t, n)
	)(Object.prototype),
	Hd = pt('RegExp'),
	ma = (e, t) => {
		const n = Object.getOwnPropertyDescriptors(e),
			r = {};
		Sr(n, (o, i) => {
			t(o, i, e) !== !1 && (r[i] = o);
		}),
			Object.defineProperties(e, r);
	},
	Vd = (e) => {
		ma(e, (t, n) => {
			if (Mt(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
				return !1;
			const r = e[n];
			if (Mt(r)) {
				if (((t.enumerable = !1), 'writable' in t)) {
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
	Wd = (e, t) => {
		const n = {},
			r = (o) => {
				o.forEach((i) => {
					n[i] = !0;
				});
			};
		return Rn(e) ? r(e) : r(String(e).split(t)), n;
	},
	Qd = () => {},
	Kd = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
	ni = 'abcdefghijklmnopqrstuvwxyz',
	Iu = '0123456789',
	ga = { DIGIT: Iu, ALPHA: ni, ALPHA_DIGIT: ni + ni.toUpperCase() + Iu },
	Yd = (e = 16, t = ga.ALPHA_DIGIT) => {
		let n = '';
		const { length: r } = t;
		for (; e--; ) n += t[(Math.random() * r) | 0];
		return n;
	};
function Xd(e) {
	return !!(
		e &&
		Mt(e.append) &&
		e[Symbol.toStringTag] === 'FormData' &&
		e[Symbol.iterator]
	);
}
const Gd = (e) => {
		const t = new Array(10),
			n = (r, o) => {
				if (Il(r)) {
					if (t.indexOf(r) >= 0) return;
					if (!('toJSON' in r)) {
						t[o] = r;
						const i = Rn(r) ? [] : {};
						return (
							Sr(r, (l, u) => {
								const s = n(l, o + 1);
								!nr(s) && (i[u] = s);
							}),
							(t[o] = void 0),
							i
						);
					}
				}
				return r;
			};
		return n(e, 0);
	},
	g = {
		isArray: Rn,
		isArrayBuffer: fa,
		isBuffer: wd,
		isFormData: Td,
		isArrayBufferView: zd,
		isString: Sd,
		isNumber: da,
		isBoolean: xd,
		isObject: Il,
		isPlainObject: Xr,
		isUndefined: nr,
		isDate: kd,
		isFile: Ed,
		isBlob: Cd,
		isRegExp: Hd,
		isFunction: Mt,
		isStream: _d,
		isURLSearchParams: Pd,
		isTypedArray: $d,
		isFileList: Nd,
		forEach: Sr,
		merge: Oi,
		extend: Od,
		trim: Rd,
		stripBOM: Ld,
		inherits: Md,
		toFlatObject: Dd,
		kindOf: $l,
		kindOfTest: pt,
		endsWith: Fd,
		toArray: Ad,
		forEachEntry: Id,
		matchAll: jd,
		isHTMLForm: Ud,
		hasOwnProperty: $u,
		hasOwnProp: $u,
		reduceDescriptors: ma,
		freezeMethods: Vd,
		toObjectSet: Wd,
		toCamelCase: Bd,
		noop: Qd,
		toFiniteNumber: Kd,
		findKey: pa,
		global: ha,
		isContextDefined: ya,
		ALPHABET: ga,
		generateString: Yd,
		isSpecCompliantForm: Xd,
		toJSONObject: Gd,
	};
function H(e, t, n, r, o) {
	Error.call(this),
		Error.captureStackTrace
			? Error.captureStackTrace(this, this.constructor)
			: (this.stack = new Error().stack),
		(this.message = e),
		(this.name = 'AxiosError'),
		t && (this.code = t),
		n && (this.config = n),
		r && (this.request = r),
		o && (this.response = o);
}
g.inherits(H, Error, {
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
			config: g.toJSONObject(this.config),
			code: this.code,
			status:
				this.response && this.response.status ? this.response.status : null,
		};
	},
});
const va = H.prototype,
	wa = {};
[
	'ERR_BAD_OPTION_VALUE',
	'ERR_BAD_OPTION',
	'ECONNABORTED',
	'ETIMEDOUT',
	'ERR_NETWORK',
	'ERR_FR_TOO_MANY_REDIRECTS',
	'ERR_DEPRECATED',
	'ERR_BAD_RESPONSE',
	'ERR_BAD_REQUEST',
	'ERR_CANCELED',
	'ERR_NOT_SUPPORT',
	'ERR_INVALID_URL',
].forEach((e) => {
	wa[e] = { value: e };
});
Object.defineProperties(H, wa);
Object.defineProperty(va, 'isAxiosError', { value: !0 });
H.from = (e, t, n, r, o, i) => {
	const l = Object.create(va);
	return (
		g.toFlatObject(
			e,
			l,
			function (s) {
				return s !== Error.prototype;
			},
			(u) => u !== 'isAxiosError',
		),
		H.call(l, e.message, t, n, r, o),
		(l.cause = e),
		(l.name = e.name),
		i && Object.assign(l, i),
		l
	);
};
const Jd = null;
function Li(e) {
	return g.isPlainObject(e) || g.isArray(e);
}
function za(e) {
	return g.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function ju(e, t, n) {
	return e
		? e
				.concat(t)
				.map(function (o, i) {
					return (o = za(o)), !n && i ? '[' + o + ']' : o;
				})
				.join(n ? '.' : '')
		: t;
}
function bd(e) {
	return g.isArray(e) && !e.some(Li);
}
const Zd = g.toFlatObject(g, {}, null, function (t) {
	return /^is[A-Z]/.test(t);
});
function Ao(e, t, n) {
	if (!g.isObject(e)) throw new TypeError('target must be an object');
	(t = t || new FormData()),
		(n = g.toFlatObject(
			n,
			{ metaTokens: !0, dots: !1, indexes: !1 },
			!1,
			function (w, $) {
				return !g.isUndefined($[w]);
			},
		));
	const r = n.metaTokens,
		o = n.visitor || h,
		i = n.dots,
		l = n.indexes,
		s = (n.Blob || (typeof Blob < 'u' && Blob)) && g.isSpecCompliantForm(t);
	if (!g.isFunction(o)) throw new TypeError('visitor must be a function');
	function a(m) {
		if (m === null) return '';
		if (g.isDate(m)) return m.toISOString();
		if (!s && g.isBlob(m))
			throw new H('Blob is not supported. Use a Buffer instead.');
		return g.isArrayBuffer(m) || g.isTypedArray(m)
			? s && typeof Blob == 'function'
				? new Blob([m])
				: Buffer.from(m)
			: m;
	}
	function h(m, w, $) {
		let d = m;
		if (m && !$ && typeof m == 'object') {
			if (g.endsWith(w, '{}'))
				(w = r ? w : w.slice(0, -2)), (m = JSON.stringify(m));
			else if (
				(g.isArray(m) && bd(m)) ||
				((g.isFileList(m) || g.endsWith(w, '[]')) && (d = g.toArray(m)))
			)
				return (
					(w = za(w)),
					d.forEach(function (f, z) {
						!(g.isUndefined(f) || f === null) &&
							t.append(
								l === !0 ? ju([w], z, i) : l === null ? w : w + '[]',
								a(f),
							);
					}),
					!1
				);
		}
		return Li(m) ? !0 : (t.append(ju($, w, i), a(m)), !1);
	}
	const p = [],
		y = Object.assign(Zd, {
			defaultVisitor: h,
			convertValue: a,
			isVisitable: Li,
		});
	function v(m, w) {
		if (!g.isUndefined(m)) {
			if (p.indexOf(m) !== -1)
				throw Error('Circular reference detected in ' + w.join('.'));
			p.push(m),
				g.forEach(m, function (d, c) {
					(!(g.isUndefined(d) || d === null) &&
						o.call(t, d, g.isString(c) ? c.trim() : c, w, y)) === !0 &&
						v(d, w ? w.concat(c) : [c]);
				}),
				p.pop();
		}
	}
	if (!g.isObject(e)) throw new TypeError('data must be an object');
	return v(e), t;
}
function Uu(e) {
	const t = {
		'!': '%21',
		"'": '%27',
		'(': '%28',
		')': '%29',
		'~': '%7E',
		'%20': '+',
		'%00': '\0',
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
		return t[r];
	});
}
function jl(e, t) {
	(this._pairs = []), e && Ao(e, this, t);
}
const Sa = jl.prototype;
Sa.append = function (t, n) {
	this._pairs.push([t, n]);
};
Sa.toString = function (t) {
	const n = t
		? function (r) {
				return t.call(this, r, Uu);
		  }
		: Uu;
	return this._pairs
		.map(function (o) {
			return n(o[0]) + '=' + n(o[1]);
		}, '')
		.join('&');
};
function qd(e) {
	return encodeURIComponent(e)
		.replace(/%3A/gi, ':')
		.replace(/%24/g, '$')
		.replace(/%2C/gi, ',')
		.replace(/%20/g, '+')
		.replace(/%5B/gi, '[')
		.replace(/%5D/gi, ']');
}
function xa(e, t, n) {
	if (!t) return e;
	const r = (n && n.encode) || qd,
		o = n && n.serialize;
	let i;
	if (
		(o
			? (i = o(t, n))
			: (i = g.isURLSearchParams(t) ? t.toString() : new jl(t, n).toString(r)),
		i)
	) {
		const l = e.indexOf('#');
		l !== -1 && (e = e.slice(0, l)),
			(e += (e.indexOf('?') === -1 ? '?' : '&') + i);
	}
	return e;
}
class ep {
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
		g.forEach(this.handlers, function (r) {
			r !== null && t(r);
		});
	}
}
const Bu = ep,
	ka = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1,
	},
	tp = typeof URLSearchParams < 'u' ? URLSearchParams : jl,
	np = typeof FormData < 'u' ? FormData : null,
	rp = typeof Blob < 'u' ? Blob : null,
	op = (() => {
		let e;
		return typeof navigator < 'u' &&
			((e = navigator.product) === 'ReactNative' ||
				e === 'NativeScript' ||
				e === 'NS')
			? !1
			: typeof window < 'u' && typeof document < 'u';
	})(),
	ip = (() =>
		typeof WorkerGlobalScope < 'u' &&
		self instanceof WorkerGlobalScope &&
		typeof self.importScripts == 'function')(),
	et = {
		isBrowser: !0,
		classes: { URLSearchParams: tp, FormData: np, Blob: rp },
		isStandardBrowserEnv: op,
		isStandardBrowserWebWorkerEnv: ip,
		protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
	};
function lp(e, t) {
	return Ao(
		e,
		new et.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (n, r, o, i) {
					return et.isNode && g.isBuffer(n)
						? (this.append(r, n.toString('base64')), !1)
						: i.defaultVisitor.apply(this, arguments);
				},
			},
			t,
		),
	);
}
function up(e) {
	return g
		.matchAll(/\w+|\[(\w*)]/g, e)
		.map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function sp(e) {
	const t = {},
		n = Object.keys(e);
	let r;
	const o = n.length;
	let i;
	for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
	return t;
}
function Ea(e) {
	function t(n, r, o, i) {
		let l = n[i++];
		const u = Number.isFinite(+l),
			s = i >= n.length;
		return (
			(l = !l && g.isArray(o) ? o.length : l),
			s
				? (g.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !u)
				: ((!o[l] || !g.isObject(o[l])) && (o[l] = []),
				  t(n, r, o[l], i) && g.isArray(o[l]) && (o[l] = sp(o[l])),
				  !u)
		);
	}
	if (g.isFormData(e) && g.isFunction(e.entries)) {
		const n = {};
		return (
			g.forEachEntry(e, (r, o) => {
				t(up(r), o, n, 0);
			}),
			n
		);
	}
	return null;
}
const ap = { 'Content-Type': void 0 };
function cp(e, t, n) {
	if (g.isString(e))
		try {
			return (t || JSON.parse)(e), g.trim(e);
		} catch (r) {
			if (r.name !== 'SyntaxError') throw r;
		}
	return (n || JSON.stringify)(e);
}
const $o = {
	transitional: ka,
	adapter: ['xhr', 'http'],
	transformRequest: [
		function (t, n) {
			const r = n.getContentType() || '',
				o = r.indexOf('application/json') > -1,
				i = g.isObject(t);
			if ((i && g.isHTMLForm(t) && (t = new FormData(t)), g.isFormData(t)))
				return o && o ? JSON.stringify(Ea(t)) : t;
			if (
				g.isArrayBuffer(t) ||
				g.isBuffer(t) ||
				g.isStream(t) ||
				g.isFile(t) ||
				g.isBlob(t)
			)
				return t;
			if (g.isArrayBufferView(t)) return t.buffer;
			if (g.isURLSearchParams(t))
				return (
					n.setContentType(
						'application/x-www-form-urlencoded;charset=utf-8',
						!1,
					),
					t.toString()
				);
			let u;
			if (i) {
				if (r.indexOf('application/x-www-form-urlencoded') > -1)
					return lp(t, this.formSerializer).toString();
				if ((u = g.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
					const s = this.env && this.env.FormData;
					return Ao(
						u ? { 'files[]': t } : t,
						s && new s(),
						this.formSerializer,
					);
				}
			}
			return i || o ? (n.setContentType('application/json', !1), cp(t)) : t;
		},
	],
	transformResponse: [
		function (t) {
			const n = this.transitional || $o.transitional,
				r = n && n.forcedJSONParsing,
				o = this.responseType === 'json';
			if (t && g.isString(t) && ((r && !this.responseType) || o)) {
				const l = !(n && n.silentJSONParsing) && o;
				try {
					return JSON.parse(t);
				} catch (u) {
					if (l)
						throw u.name === 'SyntaxError'
							? H.from(u, H.ERR_BAD_RESPONSE, this, null, this.response)
							: u;
				}
			}
			return t;
		},
	],
	timeout: 0,
	xsrfCookieName: 'XSRF-TOKEN',
	xsrfHeaderName: 'X-XSRF-TOKEN',
	maxContentLength: -1,
	maxBodyLength: -1,
	env: { FormData: et.classes.FormData, Blob: et.classes.Blob },
	validateStatus: function (t) {
		return t >= 200 && t < 300;
	},
	headers: { common: { Accept: 'application/json, text/plain, */*' } },
};
g.forEach(['delete', 'get', 'head'], function (t) {
	$o.headers[t] = {};
});
g.forEach(['post', 'put', 'patch'], function (t) {
	$o.headers[t] = g.merge(ap);
});
const Ul = $o,
	fp = g.toObjectSet([
		'age',
		'authorization',
		'content-length',
		'content-type',
		'etag',
		'expires',
		'from',
		'host',
		'if-modified-since',
		'if-unmodified-since',
		'last-modified',
		'location',
		'max-forwards',
		'proxy-authorization',
		'referer',
		'retry-after',
		'user-agent',
	]),
	dp = (e) => {
		const t = {};
		let n, r, o;
		return (
			e &&
				e
					.split(
						`
`,
					)
					.forEach(function (l) {
						(o = l.indexOf(':')),
							(n = l.substring(0, o).trim().toLowerCase()),
							(r = l.substring(o + 1).trim()),
							!(!n || (t[n] && fp[n])) &&
								(n === 'set-cookie'
									? t[n]
										? t[n].push(r)
										: (t[n] = [r])
									: (t[n] = t[n] ? t[n] + ', ' + r : r));
					}),
			t
		);
	},
	Hu = Symbol('internals');
function Mn(e) {
	return e && String(e).trim().toLowerCase();
}
function Gr(e) {
	return e === !1 || e == null ? e : g.isArray(e) ? e.map(Gr) : String(e);
}
function pp(e) {
	const t = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let r;
	for (; (r = n.exec(e)); ) t[r[1]] = r[2];
	return t;
}
function hp(e) {
	return /^[-_a-zA-Z]+$/.test(e.trim());
}
function ri(e, t, n, r, o) {
	if (g.isFunction(r)) return r.call(this, t, n);
	if ((o && (t = n), !!g.isString(t))) {
		if (g.isString(r)) return t.indexOf(r) !== -1;
		if (g.isRegExp(r)) return r.test(t);
	}
}
function yp(e) {
	return e
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function mp(e, t) {
	const n = g.toCamelCase(' ' + t);
	['get', 'set', 'has'].forEach((r) => {
		Object.defineProperty(e, r + n, {
			value: function (o, i, l) {
				return this[r].call(this, t, o, i, l);
			},
			configurable: !0,
		});
	});
}
class Io {
	constructor(t) {
		t && this.set(t);
	}
	set(t, n, r) {
		const o = this;
		function i(u, s, a) {
			const h = Mn(s);
			if (!h) throw new Error('header name must be a non-empty string');
			const p = g.findKey(o, h);
			(!p || o[p] === void 0 || a === !0 || (a === void 0 && o[p] !== !1)) &&
				(o[p || s] = Gr(u));
		}
		const l = (u, s) => g.forEach(u, (a, h) => i(a, h, s));
		return (
			g.isPlainObject(t) || t instanceof this.constructor
				? l(t, n)
				: g.isString(t) && (t = t.trim()) && !hp(t)
				? l(dp(t), n)
				: t != null && i(n, t, r),
			this
		);
	}
	get(t, n) {
		if (((t = Mn(t)), t)) {
			const r = g.findKey(this, t);
			if (r) {
				const o = this[r];
				if (!n) return o;
				if (n === !0) return pp(o);
				if (g.isFunction(n)) return n.call(this, o, r);
				if (g.isRegExp(n)) return n.exec(o);
				throw new TypeError('parser must be boolean|regexp|function');
			}
		}
	}
	has(t, n) {
		if (((t = Mn(t)), t)) {
			const r = g.findKey(this, t);
			return !!(r && this[r] !== void 0 && (!n || ri(this, this[r], r, n)));
		}
		return !1;
	}
	delete(t, n) {
		const r = this;
		let o = !1;
		function i(l) {
			if (((l = Mn(l)), l)) {
				const u = g.findKey(r, l);
				u && (!n || ri(r, r[u], u, n)) && (delete r[u], (o = !0));
			}
		}
		return g.isArray(t) ? t.forEach(i) : i(t), o;
	}
	clear(t) {
		const n = Object.keys(this);
		let r = n.length,
			o = !1;
		for (; r--; ) {
			const i = n[r];
			(!t || ri(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
		}
		return o;
	}
	normalize(t) {
		const n = this,
			r = {};
		return (
			g.forEach(this, (o, i) => {
				const l = g.findKey(r, i);
				if (l) {
					(n[l] = Gr(o)), delete n[i];
					return;
				}
				const u = t ? yp(i) : String(i).trim();
				u !== i && delete n[i], (n[u] = Gr(o)), (r[u] = !0);
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
			g.forEach(this, (r, o) => {
				r != null && r !== !1 && (n[o] = t && g.isArray(r) ? r.join(', ') : r);
			}),
			n
		);
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
	}
	get [Symbol.toStringTag]() {
		return 'AxiosHeaders';
	}
	static from(t) {
		return t instanceof this ? t : new this(t);
	}
	static concat(t, ...n) {
		const r = new this(t);
		return n.forEach((o) => r.set(o)), r;
	}
	static accessor(t) {
		const r = (this[Hu] = this[Hu] = { accessors: {} }).accessors,
			o = this.prototype;
		function i(l) {
			const u = Mn(l);
			r[u] || (mp(o, l), (r[u] = !0));
		}
		return g.isArray(t) ? t.forEach(i) : i(t), this;
	}
}
Io.accessor([
	'Content-Type',
	'Content-Length',
	'Accept',
	'Accept-Encoding',
	'User-Agent',
	'Authorization',
]);
g.freezeMethods(Io.prototype);
g.freezeMethods(Io);
const ut = Io;
function oi(e, t) {
	const n = this || Ul,
		r = t || n,
		o = ut.from(r.headers);
	let i = r.data;
	return (
		g.forEach(e, function (u) {
			i = u.call(n, i, o.normalize(), t ? t.status : void 0);
		}),
		o.normalize(),
		i
	);
}
function Ca(e) {
	return !!(e && e.__CANCEL__);
}
function xr(e, t, n) {
	H.call(this, e ?? 'canceled', H.ERR_CANCELED, t, n),
		(this.name = 'CanceledError');
}
g.inherits(xr, H, { __CANCEL__: !0 });
function gp(e, t, n) {
	const r = n.config.validateStatus;
	!n.status || !r || r(n.status)
		? e(n)
		: t(
				new H(
					'Request failed with status code ' + n.status,
					[H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][
						Math.floor(n.status / 100) - 4
					],
					n.config,
					n.request,
					n,
				),
		  );
}
const vp = et.isStandardBrowserEnv
	? (function () {
			return {
				write: function (n, r, o, i, l, u) {
					const s = [];
					s.push(n + '=' + encodeURIComponent(r)),
						g.isNumber(o) && s.push('expires=' + new Date(o).toGMTString()),
						g.isString(i) && s.push('path=' + i),
						g.isString(l) && s.push('domain=' + l),
						u === !0 && s.push('secure'),
						(document.cookie = s.join('; '));
				},
				read: function (n) {
					const r = document.cookie.match(
						new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'),
					);
					return r ? decodeURIComponent(r[3]) : null;
				},
				remove: function (n) {
					this.write(n, '', Date.now() - 864e5);
				},
			};
	  })()
	: (function () {
			return {
				write: function () {},
				read: function () {
					return null;
				},
				remove: function () {},
			};
	  })();
function wp(e) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function zp(e, t) {
	return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Na(e, t) {
	return e && !wp(t) ? zp(e, t) : t;
}
const Sp = et.isStandardBrowserEnv
	? (function () {
			const t = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement('a');
			let r;
			function o(i) {
				let l = i;
				return (
					t && (n.setAttribute('href', l), (l = n.href)),
					n.setAttribute('href', l),
					{
						href: n.href,
						protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
						host: n.host,
						search: n.search ? n.search.replace(/^\?/, '') : '',
						hash: n.hash ? n.hash.replace(/^#/, '') : '',
						hostname: n.hostname,
						port: n.port,
						pathname:
							n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
					}
				);
			}
			return (
				(r = o(window.location.href)),
				function (l) {
					const u = g.isString(l) ? o(l) : l;
					return u.protocol === r.protocol && u.host === r.host;
				}
			);
	  })()
	: (function () {
			return function () {
				return !0;
			};
	  })();
function xp(e) {
	const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
	return (t && t[1]) || '';
}
function kp(e, t) {
	e = e || 10;
	const n = new Array(e),
		r = new Array(e);
	let o = 0,
		i = 0,
		l;
	return (
		(t = t !== void 0 ? t : 1e3),
		function (s) {
			const a = Date.now(),
				h = r[i];
			l || (l = a), (n[o] = s), (r[o] = a);
			let p = i,
				y = 0;
			for (; p !== o; ) (y += n[p++]), (p = p % e);
			if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - l < t)) return;
			const v = h && a - h;
			return v ? Math.round((y * 1e3) / v) : void 0;
		}
	);
}
function Vu(e, t) {
	let n = 0;
	const r = kp(50, 250);
	return (o) => {
		const i = o.loaded,
			l = o.lengthComputable ? o.total : void 0,
			u = i - n,
			s = r(u),
			a = i <= l;
		n = i;
		const h = {
			loaded: i,
			total: l,
			progress: l ? i / l : void 0,
			bytes: u,
			rate: s || void 0,
			estimated: s && l && a ? (l - i) / s : void 0,
			event: o,
		};
		(h[t ? 'download' : 'upload'] = !0), e(h);
	};
}
const Ep = typeof XMLHttpRequest < 'u',
	Cp =
		Ep &&
		function (e) {
			return new Promise(function (n, r) {
				let o = e.data;
				const i = ut.from(e.headers).normalize(),
					l = e.responseType;
				let u;
				function s() {
					e.cancelToken && e.cancelToken.unsubscribe(u),
						e.signal && e.signal.removeEventListener('abort', u);
				}
				g.isFormData(o) &&
					(et.isStandardBrowserEnv || et.isStandardBrowserWebWorkerEnv) &&
					i.setContentType(!1);
				let a = new XMLHttpRequest();
				if (e.auth) {
					const v = e.auth.username || '',
						m = e.auth.password
							? unescape(encodeURIComponent(e.auth.password))
							: '';
					i.set('Authorization', 'Basic ' + btoa(v + ':' + m));
				}
				const h = Na(e.baseURL, e.url);
				a.open(e.method.toUpperCase(), xa(h, e.params, e.paramsSerializer), !0),
					(a.timeout = e.timeout);
				function p() {
					if (!a) return;
					const v = ut.from(
							'getAllResponseHeaders' in a && a.getAllResponseHeaders(),
						),
						w = {
							data:
								!l || l === 'text' || l === 'json'
									? a.responseText
									: a.response,
							status: a.status,
							statusText: a.statusText,
							headers: v,
							config: e,
							request: a,
						};
					gp(
						function (d) {
							n(d), s();
						},
						function (d) {
							r(d), s();
						},
						w,
					),
						(a = null);
				}
				if (
					('onloadend' in a
						? (a.onloadend = p)
						: (a.onreadystatechange = function () {
								!a ||
									a.readyState !== 4 ||
									(a.status === 0 &&
										!(a.responseURL && a.responseURL.indexOf('file:') === 0)) ||
									setTimeout(p);
						  }),
					(a.onabort = function () {
						a &&
							(r(new H('Request aborted', H.ECONNABORTED, e, a)), (a = null));
					}),
					(a.onerror = function () {
						r(new H('Network Error', H.ERR_NETWORK, e, a)), (a = null);
					}),
					(a.ontimeout = function () {
						let m = e.timeout
							? 'timeout of ' + e.timeout + 'ms exceeded'
							: 'timeout exceeded';
						const w = e.transitional || ka;
						e.timeoutErrorMessage && (m = e.timeoutErrorMessage),
							r(
								new H(
									m,
									w.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
									e,
									a,
								),
							),
							(a = null);
					}),
					et.isStandardBrowserEnv)
				) {
					const v =
						(e.withCredentials || Sp(h)) &&
						e.xsrfCookieName &&
						vp.read(e.xsrfCookieName);
					v && i.set(e.xsrfHeaderName, v);
				}
				o === void 0 && i.setContentType(null),
					'setRequestHeader' in a &&
						g.forEach(i.toJSON(), function (m, w) {
							a.setRequestHeader(w, m);
						}),
					g.isUndefined(e.withCredentials) ||
						(a.withCredentials = !!e.withCredentials),
					l && l !== 'json' && (a.responseType = e.responseType),
					typeof e.onDownloadProgress == 'function' &&
						a.addEventListener('progress', Vu(e.onDownloadProgress, !0)),
					typeof e.onUploadProgress == 'function' &&
						a.upload &&
						a.upload.addEventListener('progress', Vu(e.onUploadProgress)),
					(e.cancelToken || e.signal) &&
						((u = (v) => {
							a &&
								(r(!v || v.type ? new xr(null, e, a) : v),
								a.abort(),
								(a = null));
						}),
						e.cancelToken && e.cancelToken.subscribe(u),
						e.signal &&
							(e.signal.aborted ? u() : e.signal.addEventListener('abort', u)));
				const y = xp(h);
				if (y && et.protocols.indexOf(y) === -1) {
					r(new H('Unsupported protocol ' + y + ':', H.ERR_BAD_REQUEST, e));
					return;
				}
				a.send(o || null);
			});
		},
	Jr = { http: Jd, xhr: Cp };
g.forEach(Jr, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, 'name', { value: t });
		} catch {}
		Object.defineProperty(e, 'adapterName', { value: t });
	}
});
const Np = {
	getAdapter: (e) => {
		e = g.isArray(e) ? e : [e];
		const { length: t } = e;
		let n, r;
		for (
			let o = 0;
			o < t && ((n = e[o]), !(r = g.isString(n) ? Jr[n.toLowerCase()] : n));
			o++
		);
		if (!r)
			throw r === !1
				? new H(
						`Adapter ${n} is not supported by the environment`,
						'ERR_NOT_SUPPORT',
				  )
				: new Error(
						g.hasOwnProp(Jr, n)
							? `Adapter '${n}' is not available in the build`
							: `Unknown adapter '${n}'`,
				  );
		if (!g.isFunction(r)) throw new TypeError('adapter is not a function');
		return r;
	},
	adapters: Jr,
};
function ii(e) {
	if (
		(e.cancelToken && e.cancelToken.throwIfRequested(),
		e.signal && e.signal.aborted)
	)
		throw new xr(null, e);
}
function Wu(e) {
	return (
		ii(e),
		(e.headers = ut.from(e.headers)),
		(e.data = oi.call(e, e.transformRequest)),
		['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
			e.headers.setContentType('application/x-www-form-urlencoded', !1),
		Np.getAdapter(e.adapter || Ul.adapter)(e).then(
			function (r) {
				return (
					ii(e),
					(r.data = oi.call(e, e.transformResponse, r)),
					(r.headers = ut.from(r.headers)),
					r
				);
			},
			function (r) {
				return (
					Ca(r) ||
						(ii(e),
						r &&
							r.response &&
							((r.response.data = oi.call(e, e.transformResponse, r.response)),
							(r.response.headers = ut.from(r.response.headers)))),
					Promise.reject(r)
				);
			},
		)
	);
}
const Qu = (e) => (e instanceof ut ? e.toJSON() : e);
function Sn(e, t) {
	t = t || {};
	const n = {};
	function r(a, h, p) {
		return g.isPlainObject(a) && g.isPlainObject(h)
			? g.merge.call({ caseless: p }, a, h)
			: g.isPlainObject(h)
			? g.merge({}, h)
			: g.isArray(h)
			? h.slice()
			: h;
	}
	function o(a, h, p) {
		if (g.isUndefined(h)) {
			if (!g.isUndefined(a)) return r(void 0, a, p);
		} else return r(a, h, p);
	}
	function i(a, h) {
		if (!g.isUndefined(h)) return r(void 0, h);
	}
	function l(a, h) {
		if (g.isUndefined(h)) {
			if (!g.isUndefined(a)) return r(void 0, a);
		} else return r(void 0, h);
	}
	function u(a, h, p) {
		if (p in t) return r(a, h);
		if (p in e) return r(void 0, a);
	}
	const s = {
		url: i,
		method: i,
		data: i,
		baseURL: l,
		transformRequest: l,
		transformResponse: l,
		paramsSerializer: l,
		timeout: l,
		timeoutMessage: l,
		withCredentials: l,
		adapter: l,
		responseType: l,
		xsrfCookieName: l,
		xsrfHeaderName: l,
		onUploadProgress: l,
		onDownloadProgress: l,
		decompress: l,
		maxContentLength: l,
		maxBodyLength: l,
		beforeRedirect: l,
		transport: l,
		httpAgent: l,
		httpsAgent: l,
		cancelToken: l,
		socketPath: l,
		responseEncoding: l,
		validateStatus: u,
		headers: (a, h) => o(Qu(a), Qu(h), !0),
	};
	return (
		g.forEach(Object.keys(e).concat(Object.keys(t)), function (h) {
			const p = s[h] || o,
				y = p(e[h], t[h], h);
			(g.isUndefined(y) && p !== u) || (n[h] = y);
		}),
		n
	);
}
const _a = '1.3.4',
	Bl = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
	(e, t) => {
		Bl[e] = function (r) {
			return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
		};
	},
);
const Ku = {};
Bl.transitional = function (t, n, r) {
	function o(i, l) {
		return (
			'[Axios v' +
			_a +
			"] Transitional option '" +
			i +
			"'" +
			l +
			(r ? '. ' + r : '')
		);
	}
	return (i, l, u) => {
		if (t === !1)
			throw new H(
				o(l, ' has been removed' + (n ? ' in ' + n : '')),
				H.ERR_DEPRECATED,
			);
		return (
			n &&
				!Ku[l] &&
				((Ku[l] = !0),
				console.warn(
					o(
						l,
						' has been deprecated since v' +
							n +
							' and will be removed in the near future',
					),
				)),
			t ? t(i, l, u) : !0
		);
	};
};
function _p(e, t, n) {
	if (typeof e != 'object')
		throw new H('options must be an object', H.ERR_BAD_OPTION_VALUE);
	const r = Object.keys(e);
	let o = r.length;
	for (; o-- > 0; ) {
		const i = r[o],
			l = t[i];
		if (l) {
			const u = e[i],
				s = u === void 0 || l(u, i, e);
			if (s !== !0)
				throw new H('option ' + i + ' must be ' + s, H.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new H('Unknown option ' + i, H.ERR_BAD_OPTION);
	}
}
const Mi = { assertOptions: _p, validators: Bl },
	gt = Mi.validators;
class so {
	constructor(t) {
		(this.defaults = t),
			(this.interceptors = { request: new Bu(), response: new Bu() });
	}
	request(t, n) {
		typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
			(n = Sn(this.defaults, n));
		const { transitional: r, paramsSerializer: o, headers: i } = n;
		r !== void 0 &&
			Mi.assertOptions(
				r,
				{
					silentJSONParsing: gt.transitional(gt.boolean),
					forcedJSONParsing: gt.transitional(gt.boolean),
					clarifyTimeoutError: gt.transitional(gt.boolean),
				},
				!1,
			),
			o !== void 0 &&
				Mi.assertOptions(
					o,
					{ encode: gt.function, serialize: gt.function },
					!0,
				),
			(n.method = (n.method || this.defaults.method || 'get').toLowerCase());
		let l;
		(l = i && g.merge(i.common, i[n.method])),
			l &&
				g.forEach(
					['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
					(m) => {
						delete i[m];
					},
				),
			(n.headers = ut.concat(l, i));
		const u = [];
		let s = !0;
		this.interceptors.request.forEach(function (w) {
			(typeof w.runWhen == 'function' && w.runWhen(n) === !1) ||
				((s = s && w.synchronous), u.unshift(w.fulfilled, w.rejected));
		});
		const a = [];
		this.interceptors.response.forEach(function (w) {
			a.push(w.fulfilled, w.rejected);
		});
		let h,
			p = 0,
			y;
		if (!s) {
			const m = [Wu.bind(this), void 0];
			for (
				m.unshift.apply(m, u),
					m.push.apply(m, a),
					y = m.length,
					h = Promise.resolve(n);
				p < y;

			)
				h = h.then(m[p++], m[p++]);
			return h;
		}
		y = u.length;
		let v = n;
		for (p = 0; p < y; ) {
			const m = u[p++],
				w = u[p++];
			try {
				v = m(v);
			} catch ($) {
				w.call(this, $);
				break;
			}
		}
		try {
			h = Wu.call(this, v);
		} catch (m) {
			return Promise.reject(m);
		}
		for (p = 0, y = a.length; p < y; ) h = h.then(a[p++], a[p++]);
		return h;
	}
	getUri(t) {
		t = Sn(this.defaults, t);
		const n = Na(t.baseURL, t.url);
		return xa(n, t.params, t.paramsSerializer);
	}
}
g.forEach(['delete', 'get', 'head', 'options'], function (t) {
	so.prototype[t] = function (n, r) {
		return this.request(
			Sn(r || {}, { method: t, url: n, data: (r || {}).data }),
		);
	};
});
g.forEach(['post', 'put', 'patch'], function (t) {
	function n(r) {
		return function (i, l, u) {
			return this.request(
				Sn(u || {}, {
					method: t,
					headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
					url: i,
					data: l,
				}),
			);
		};
	}
	(so.prototype[t] = n()), (so.prototype[t + 'Form'] = n(!0));
});
const br = so;
class Hl {
	constructor(t) {
		if (typeof t != 'function')
			throw new TypeError('executor must be a function.');
		let n;
		this.promise = new Promise(function (i) {
			n = i;
		});
		const r = this;
		this.promise.then((o) => {
			if (!r._listeners) return;
			let i = r._listeners.length;
			for (; i-- > 0; ) r._listeners[i](o);
			r._listeners = null;
		}),
			(this.promise.then = (o) => {
				let i;
				const l = new Promise((u) => {
					r.subscribe(u), (i = u);
				}).then(o);
				return (
					(l.cancel = function () {
						r.unsubscribe(i);
					}),
					l
				);
			}),
			t(function (i, l, u) {
				r.reason || ((r.reason = new xr(i, l, u)), n(r.reason));
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
	static source() {
		let t;
		return {
			token: new Hl(function (o) {
				t = o;
			}),
			cancel: t,
		};
	}
}
const Tp = Hl;
function Pp(e) {
	return function (n) {
		return e.apply(null, n);
	};
}
function Rp(e) {
	return g.isObject(e) && e.isAxiosError === !0;
}
const Di = {
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
Object.entries(Di).forEach(([e, t]) => {
	Di[t] = e;
});
const Op = Di;
function Ta(e) {
	const t = new br(e),
		n = aa(br.prototype.request, t);
	return (
		g.extend(n, br.prototype, t, { allOwnKeys: !0 }),
		g.extend(n, t, null, { allOwnKeys: !0 }),
		(n.create = function (o) {
			return Ta(Sn(e, o));
		}),
		n
	);
}
const le = Ta(Ul);
le.Axios = br;
le.CanceledError = xr;
le.CancelToken = Tp;
le.isCancel = Ca;
le.VERSION = _a;
le.toFormData = Ao;
le.AxiosError = H;
le.Cancel = le.CanceledError;
le.all = function (t) {
	return Promise.all(t);
};
le.spread = Pp;
le.isAxiosError = Rp;
le.mergeConfig = Sn;
le.AxiosHeaders = ut;
le.formToJSON = (e) => Ea(g.isHTMLForm(e) ? new FormData(e) : e);
le.HttpStatusCode = Op;
le.default = le;
const Pa = le,
	Lp = 'https://dev.cozy-cost.just.engineer',
	Mp = Pa.create({ baseURL: Lp });
Pa.interceptors.response.use(
	function (e) {
		return e;
	},
	function (e) {
		return (
			e.response.status === 404 && console.log(404),
			console.log(e),
			Promise.reject(e)
		);
	},
);
const kr = (e) => {
		const [t, n] = W.useState(''),
			[r, o] = W.useState(''),
			[i, l] = W.useState(!0);
		W.useEffect(() => {
			u();
		}, [e]);
		async function u() {
			try {
				l(!0);
				const s = await Mp.get(e);
				n(s.data);
			} catch (s) {
				console.log(s), o(s);
			} finally {
				l(!1);
			}
		}
		return { data: t, error: r, isLoading: i };
	},
	Ra = ({
		withoutMessage: e,
		messageLarge: t,
		rating: n,
		numberOfReviews: r,
	}) => {
		const [o, i] = W.useState('');
		return (
			W.useEffect(() => {
				Fl(n, i);
			}, [n]),
			Q(Kt, {
				children: [
					!e &&
						k('p', {
							className: `${
								t ? 'cozy-text-heading-3' : ''
							} text-light-neutral-800 cozy-font-graphik-medium`,
							children: o,
						}),
					k('div', {
						className: 'cozy-flex cozy-gap-1.5',
						children: k(Oa, { rating: n }),
					}),
					t &&
						Q('a', {
							href: '/',
							className:
								'cozy-text-body-1 cozy-underline cozy-underline-offset-2',
							children: [r, ' reviews'],
						}),
				],
			})
		);
	},
	Oa = ({ rating: e, small: t }) => {
		const [n, r] = W.useState(0);
		W.useEffect(() => {
			r(e);
		}, [e]);
		const o = W.useCallback(
			(i) => (i < n ? hd[Math.round(n) - 1] : 'cozy-bg-zinc-200'),
			[n],
		);
		return k(Kt, {
			children: pd.map((i, l) =>
				k(
					'button',
					{
						children: k('div', {
							className: `cozy-rounded-md ${o(
								l,
							)} cozy-duration-75 hover:cozy-scale-105`,
							children: k(sa, {
								className: `${
									t ? 'cozy-cozy-w-5 cozy-h-5' : 'cozy-h-8 cozy-w-8'
								} cozy-fill-none`,
							}),
						}),
					},
					l,
				),
			),
		});
	},
	La = ({ withoutMessage: e, rating: t }) => {
		const [n, r] = W.useState('');
		return (
			W.useEffect(() => {
				Fl(t, r);
			}, [t]),
			Q('div', {
				className:
					'cozy-flex cozy-w-full cozy-items-center cozy-gap-2 md:cozy-w-auto',
				children: [
					!e &&
						k('p', {
							className:
								'cozy-hidden cozy-font-graphik-medium cozy-text-light-neutral-800 md:cozy-block',
							children: n,
						}),
					k('div', {
						className: 'cozy-flex cozy-gap-1',
						children: k(Oa, { rating: t, small: !0 }),
					}),
				],
			})
		);
	},
	Ma = ({ withScore: e }) => {
		var n, r, o;
		const { data: t } = kr('/api/v1/business/widgets/stats');
		return Q('div', {
			className: 'cozy-flex cozy-flex-wrap cozy-items-center cozy-p-2',
			children: [
				k(La, {
					rating: Oe(
						(n = t == null ? void 0 : t.data) == null
							? void 0
							: n.total_trust_score,
						0,
					),
					numberOfReviews: Oe(
						(r = t == null ? void 0 : t.data) == null ? void 0 : r.total_review,
						0,
					),
				}),
				e &&
					Q('p', {
						className:
							'cozy-hidden cozy-w-fit cozy-min-w-fit cozy-text-light-neutral-800 md:cozy-block',
						children: [
							Oe(
								(o = t == null ? void 0 : t.data) == null
									? void 0
									: o.total_trust_score,
								0,
							),
							' out of 5',
						],
					}),
			],
		});
	},
	Dp = () =>
		Q('div', {
			className:
				'cozy-flex cozy-w-full cozy-flex-wrap cozy-items-center cozy-p-2 cozy-py-4',
			children: [
				k(Ma, { withScore: !0 }),
				k('a', {
					href: '/',
					className:
						'cozy-font-graphik-semibold cozy-text-body-1 cozy-font-extrabold cozy-text-branding-primary-500',
					children: 'CozyCot',
				}),
			],
		}),
	Fp = () =>
		Q('a', {
			href: '/',
			className:
				'cozy-py-4 cozy-font-graphik-medium cozy-text-light-neutral-800',
			children: [
				k('span', { className: 'cozy-pr-1', children: 'See our reviews on' }),
				k('span', {
					className:
						'cozy-font-graphik-semibold cozy-text-heading-3 cozy-text-branding-primary-500',
					children: 'CozyCot',
				}),
			],
		}),
	Ap = () =>
		Q('div', {
			className: 'cozy-flex cozy-items-center cozy-p-2 cozy-py-4',
			children: [
				k(Ma, {}),
				k('a', {
					href: '/',
					className:
						'cozy-font-graphik-semibold cozy-text-body-1 cozy-font-extrabold cozy-text-branding-primary-500',
					children: 'CozyCot',
				}),
			],
		}),
	Da = ({ intent: e }) => {
		var r, o, i, l;
		const { data: t, error: n } = kr('/api/v1/business/widgets/stats');
		return k(Kt, {
			children: Q('div', {
				className: `cozy-flex cozy-flex-col  cozy-gap-3 ${
					e === 'center'
						? 'cozy-items-center cozy-justify-center cozy-text-center'
						: ''
				} cozy-p-3 `,
				children: [
					k('h4', {
						className:
							'cozy-font-graphik-semibold cozy-text-2xl cozy-text-heading-3 cozy-text-branding-primary-500',
						children: 'CozyCot',
					}),
					n &&
						k('p', {
							className: 'cozy-opacity-60 ',
							children: ' Rating not found',
						}),
					Q(Kt, {
						children: [
							k(Ra, {
								withoutMessage: !0,
								rating: Oe(
									(r = t == null ? void 0 : t.data) == null
										? void 0
										: r.total_trust_score,
								),
								numberOfReviews: Oe(
									(o = t == null ? void 0 : t.data) == null
										? void 0
										: o.total_review,
									0,
								),
							}),
							Q('p', {
								className: 'cozy-flex cozy-gap-1.5',
								children: [
									'Cozy score:',
									k('span', {
										className: 'cozy-font-graphik-medium',
										children: Oe(
											(i = t == null ? void 0 : t.data) == null
												? void 0
												: i.total_trust_score,
										),
									}),
									'•',
									Q('a', {
										href: '/',
										className: 'cozy-underline cozy-underline-offset-2',
										children: [
											Oe(
												(l = t == null ? void 0 : t.data) == null
													? void 0
													: l.total_review,
												0,
											),
											' reviews',
										],
									}),
								],
							}),
						],
					}),
				],
			}),
		});
	},
	$p = () => k(Da, {}),
	Fa = ({ ...e }) =>
		k('svg', {
			width: '4',
			height: '8',
			viewBox: '0 0 4 8',
			xmlns: 'http://www.w3.org/2000/svg',
			...e,
			children: k('path', {
				d: 'M9.44403e-06 4.00004C9.44054e-06 4.07976 0.015277 4.15709 0.0458113 4.23203C0.0763456 4.30697 0.117058 4.36915 0.167948 4.41858L2.9771 7.16895C3.08906 7.27857 3.23155 7.33337 3.40458 7.33337C3.57761 7.33337 3.7201 7.27857 3.83206 7.16895C3.94402 7.05933 4 6.91982 4 6.75041C4 6.58101 3.94402 6.4415 3.83206 6.33188L1.45039 4.00004L3.83206 1.6682C3.94402 1.55859 4 1.41907 4 1.24967C4 1.08026 3.94402 0.940749 3.83206 0.831133C3.7201 0.721516 3.57761 0.666707 3.40458 0.666707C3.23155 0.666707 3.08906 0.721516 2.9771 0.831133L0.167948 3.58151C0.10688 3.6413 0.0635208 3.70607 0.0378722 3.77583C0.0122234 3.84558 -0.000397533 3.92032 9.44403e-06 4.00004Z',
			}),
		}),
	Aa = ({ ...e }) =>
		k('svg', {
			width: '4',
			height: '8',
			viewBox: '0 0 4 8',
			xmlns: 'http://www.w3.org/2000/svg',
			...e,
			children: k('path', {
				d: 'M3.99999 4.00004C3.99999 4.07976 3.98472 4.15709 3.95419 4.23203C3.92365 4.30697 3.88294 4.36915 3.83205 4.41858L1.0229 7.16895C0.910939 7.27857 0.768446 7.33337 0.595418 7.33337C0.422391 7.33337 0.279897 7.27857 0.167938 7.16895C0.0559793 7.05933 -1.8077e-08 6.91982 -2.5482e-08 6.75041C-3.2887e-08 6.58101 0.0559792 6.4415 0.167938 6.33188L2.54961 4.00004L0.167938 1.6682C0.055979 1.55859 -2.58522e-07 1.41907 -2.65927e-07 1.24967C-2.73332e-07 1.08026 0.055979 0.940749 0.167938 0.831133C0.279897 0.721516 0.42239 0.666707 0.595418 0.666707C0.768445 0.666707 0.910939 0.721516 1.0229 0.831133L3.83205 3.58151C3.89312 3.6413 3.93648 3.70607 3.96213 3.77583C3.98778 3.84558 4.0004 3.92032 3.99999 4.00004Z',
			}),
		});
var Fi = {},
	Ip = {
		get exports() {
			return Fi;
		},
		set exports(e) {
			Fi = e;
		},
	};
(function (e, t) {
	(function (n, r) {
		e.exports = r();
	})(qs, function () {
		var n = 1e3,
			r = 6e4,
			o = 36e5,
			i = 'millisecond',
			l = 'second',
			u = 'minute',
			s = 'hour',
			a = 'day',
			h = 'week',
			p = 'month',
			y = 'quarter',
			v = 'year',
			m = 'date',
			w = 'Invalid Date',
			$ =
				/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
			d =
				/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
			c = {
				name: 'en',
				weekdays:
					'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
				months:
					'January_February_March_April_May_June_July_August_September_October_November_December'.split(
						'_',
					),
				ordinal: function (F) {
					var P = ['th', 'st', 'nd', 'rd'],
						N = F % 100;
					return '[' + F + (P[(N - 20) % 10] || P[N] || P[0]) + ']';
				},
			},
			f = function (F, P, N) {
				var A = String(F);
				return !A || A.length >= P
					? F
					: '' + Array(P + 1 - A.length).join(N) + F;
			},
			z = {
				s: f,
				z: function (F) {
					var P = -F.utcOffset(),
						N = Math.abs(P),
						A = Math.floor(N / 60),
						T = N % 60;
					return (P <= 0 ? '+' : '-') + f(A, 2, '0') + ':' + f(T, 2, '0');
				},
				m: function F(P, N) {
					if (P.date() < N.date()) return -F(N, P);
					var A = 12 * (N.year() - P.year()) + (N.month() - P.month()),
						T = P.clone().add(A, p),
						S = N - T < 0,
						E = P.clone().add(A + (S ? -1 : 1), p);
					return +(-(A + (N - T) / (S ? T - E : E - T)) || 0);
				},
				a: function (F) {
					return F < 0 ? Math.ceil(F) || 0 : Math.floor(F);
				},
				p: function (F) {
					return (
						{ M: p, y: v, w: h, d: a, D: m, h: s, m: u, s: l, ms: i, Q: y }[
							F
						] ||
						String(F || '')
							.toLowerCase()
							.replace(/s$/, '')
					);
				},
				u: function (F) {
					return F === void 0;
				},
			},
			C = 'en',
			_ = {};
		_[C] = c;
		var L = function (F) {
				return F instanceof de;
			},
			D = function F(P, N, A) {
				var T;
				if (!P) return C;
				if (typeof P == 'string') {
					var S = P.toLowerCase();
					_[S] && (T = S), N && ((_[S] = N), (T = S));
					var E = P.split('-');
					if (!T && E.length > 1) return F(E[0]);
				} else {
					var R = P.name;
					(_[R] = P), (T = R);
				}
				return !A && T && (C = T), T || (!A && C);
			},
			U = function (F, P) {
				if (L(F)) return F.clone();
				var N = typeof P == 'object' ? P : {};
				return (N.date = F), (N.args = arguments), new de(N);
			},
			M = z;
		(M.l = D),
			(M.i = L),
			(M.w = function (F, P) {
				return U(F, { locale: P.$L, utc: P.$u, x: P.$x, $offset: P.$offset });
			});
		var de = (function () {
				function F(N) {
					(this.$L = D(N.locale, null, !0)), this.parse(N);
				}
				var P = F.prototype;
				return (
					(P.parse = function (N) {
						(this.$d = (function (A) {
							var T = A.date,
								S = A.utc;
							if (T === null) return new Date(NaN);
							if (M.u(T)) return new Date();
							if (T instanceof Date) return new Date(T);
							if (typeof T == 'string' && !/Z$/i.test(T)) {
								var E = T.match($);
								if (E) {
									var R = E[2] - 1 || 0,
										I = (E[7] || '0').substring(0, 3);
									return S
										? new Date(
												Date.UTC(
													E[1],
													R,
													E[3] || 1,
													E[4] || 0,
													E[5] || 0,
													E[6] || 0,
													I,
												),
										  )
										: new Date(
												E[1],
												R,
												E[3] || 1,
												E[4] || 0,
												E[5] || 0,
												E[6] || 0,
												I,
										  );
								}
							}
							return new Date(T);
						})(N)),
							(this.$x = N.x || {}),
							this.init();
					}),
					(P.init = function () {
						var N = this.$d;
						(this.$y = N.getFullYear()),
							(this.$M = N.getMonth()),
							(this.$D = N.getDate()),
							(this.$W = N.getDay()),
							(this.$H = N.getHours()),
							(this.$m = N.getMinutes()),
							(this.$s = N.getSeconds()),
							(this.$ms = N.getMilliseconds());
					}),
					(P.$utils = function () {
						return M;
					}),
					(P.isValid = function () {
						return this.$d.toString() !== w;
					}),
					(P.isSame = function (N, A) {
						var T = U(N);
						return this.startOf(A) <= T && T <= this.endOf(A);
					}),
					(P.isAfter = function (N, A) {
						return U(N) < this.startOf(A);
					}),
					(P.isBefore = function (N, A) {
						return this.endOf(A) < U(N);
					}),
					(P.$g = function (N, A, T) {
						return M.u(N) ? this[A] : this.set(T, N);
					}),
					(P.unix = function () {
						return Math.floor(this.valueOf() / 1e3);
					}),
					(P.valueOf = function () {
						return this.$d.getTime();
					}),
					(P.startOf = function (N, A) {
						var T = this,
							S = !!M.u(A) || A,
							E = M.p(N),
							R = function (en, xe) {
								var mt = M.w(
									T.$u ? Date.UTC(T.$y, xe, en) : new Date(T.$y, xe, en),
									T,
								);
								return S ? mt : mt.endOf(a);
							},
							I = function (en, xe) {
								return M.w(
									T.toDate()[en].apply(
										T.toDate('s'),
										(S ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(xe),
									),
									T,
								);
							},
							j = this.$W,
							te = this.$M,
							pe = this.$D,
							Te = 'set' + (this.$u ? 'UTC' : '');
						switch (E) {
							case v:
								return S ? R(1, 0) : R(31, 11);
							case p:
								return S ? R(1, te) : R(0, te + 1);
							case h:
								var Pe = this.$locale().weekStart || 0,
									Je = (j < Pe ? j + 7 : j) - Pe;
								return R(S ? pe - Je : pe + (6 - Je), te);
							case a:
							case m:
								return I(Te + 'Hours', 0);
							case s:
								return I(Te + 'Minutes', 1);
							case u:
								return I(Te + 'Seconds', 2);
							case l:
								return I(Te + 'Milliseconds', 3);
							default:
								return this.clone();
						}
					}),
					(P.endOf = function (N) {
						return this.startOf(N, !1);
					}),
					(P.$set = function (N, A) {
						var T,
							S = M.p(N),
							E = 'set' + (this.$u ? 'UTC' : ''),
							R = ((T = {}),
							(T[a] = E + 'Date'),
							(T[m] = E + 'Date'),
							(T[p] = E + 'Month'),
							(T[v] = E + 'FullYear'),
							(T[s] = E + 'Hours'),
							(T[u] = E + 'Minutes'),
							(T[l] = E + 'Seconds'),
							(T[i] = E + 'Milliseconds'),
							T)[S],
							I = S === a ? this.$D + (A - this.$W) : A;
						if (S === p || S === v) {
							var j = this.clone().set(m, 1);
							j.$d[R](I),
								j.init(),
								(this.$d = j.set(m, Math.min(this.$D, j.daysInMonth())).$d);
						} else R && this.$d[R](I);
						return this.init(), this;
					}),
					(P.set = function (N, A) {
						return this.clone().$set(N, A);
					}),
					(P.get = function (N) {
						return this[M.p(N)]();
					}),
					(P.add = function (N, A) {
						var T,
							S = this;
						N = Number(N);
						var E = M.p(A),
							R = function (te) {
								var pe = U(S);
								return M.w(pe.date(pe.date() + Math.round(te * N)), S);
							};
						if (E === p) return this.set(p, this.$M + N);
						if (E === v) return this.set(v, this.$y + N);
						if (E === a) return R(1);
						if (E === h) return R(7);
						var I = ((T = {}), (T[u] = r), (T[s] = o), (T[l] = n), T)[E] || 1,
							j = this.$d.getTime() + N * I;
						return M.w(j, this);
					}),
					(P.subtract = function (N, A) {
						return this.add(-1 * N, A);
					}),
					(P.format = function (N) {
						var A = this,
							T = this.$locale();
						if (!this.isValid()) return T.invalidDate || w;
						var S = N || 'YYYY-MM-DDTHH:mm:ssZ',
							E = M.z(this),
							R = this.$H,
							I = this.$m,
							j = this.$M,
							te = T.weekdays,
							pe = T.months,
							Te = function (xe, mt, ei, Tr) {
								return (xe && (xe[mt] || xe(A, S))) || ei[mt].slice(0, Tr);
							},
							Pe = function (xe) {
								return M.s(R % 12 || 12, xe, '0');
							},
							Je =
								T.meridiem ||
								function (xe, mt, ei) {
									var Tr = xe < 12 ? 'AM' : 'PM';
									return ei ? Tr.toLowerCase() : Tr;
								},
							en = {
								YY: String(this.$y).slice(-2),
								YYYY: this.$y,
								M: j + 1,
								MM: M.s(j + 1, 2, '0'),
								MMM: Te(T.monthsShort, j, pe, 3),
								MMMM: Te(pe, j),
								D: this.$D,
								DD: M.s(this.$D, 2, '0'),
								d: String(this.$W),
								dd: Te(T.weekdaysMin, this.$W, te, 2),
								ddd: Te(T.weekdaysShort, this.$W, te, 3),
								dddd: te[this.$W],
								H: String(R),
								HH: M.s(R, 2, '0'),
								h: Pe(1),
								hh: Pe(2),
								a: Je(R, I, !0),
								A: Je(R, I, !1),
								m: String(I),
								mm: M.s(I, 2, '0'),
								s: String(this.$s),
								ss: M.s(this.$s, 2, '0'),
								SSS: M.s(this.$ms, 3, '0'),
								Z: E,
							};
						return S.replace(d, function (xe, mt) {
							return mt || en[xe] || E.replace(':', '');
						});
					}),
					(P.utcOffset = function () {
						return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
					}),
					(P.diff = function (N, A, T) {
						var S,
							E = M.p(A),
							R = U(N),
							I = (R.utcOffset() - this.utcOffset()) * r,
							j = this - R,
							te = M.m(this, R);
						return (
							(te =
								((S = {}),
								(S[v] = te / 12),
								(S[p] = te),
								(S[y] = te / 3),
								(S[h] = (j - I) / 6048e5),
								(S[a] = (j - I) / 864e5),
								(S[s] = j / o),
								(S[u] = j / r),
								(S[l] = j / n),
								S)[E] || j),
							T ? te : M.a(te)
						);
					}),
					(P.daysInMonth = function () {
						return this.endOf(p).$D;
					}),
					(P.$locale = function () {
						return _[this.$L];
					}),
					(P.locale = function (N, A) {
						if (!N) return this.$L;
						var T = this.clone(),
							S = D(N, A, !0);
						return S && (T.$L = S), T;
					}),
					(P.clone = function () {
						return M.w(this.$d, this);
					}),
					(P.toDate = function () {
						return new Date(this.valueOf());
					}),
					(P.toJSON = function () {
						return this.isValid() ? this.toISOString() : null;
					}),
					(P.toISOString = function () {
						return this.$d.toISOString();
					}),
					(P.toString = function () {
						return this.$d.toUTCString();
					}),
					F
				);
			})(),
			yt = de.prototype;
		return (
			(U.prototype = yt),
			[
				['$ms', i],
				['$s', l],
				['$m', u],
				['$H', s],
				['$W', a],
				['$M', p],
				['$y', v],
				['$D', m],
			].forEach(function (F) {
				yt[F[1]] = function (P) {
					return this.$g(P, F[0], F[1]);
				};
			}),
			(U.extend = function (F, P) {
				return F.$i || (F(P, de, U), (F.$i = !0)), U;
			}),
			(U.locale = D),
			(U.isDayjs = L),
			(U.unix = function (F) {
				return U(1e3 * F);
			}),
			(U.en = _[C]),
			(U.Ls = _),
			(U.p = {}),
			U
		);
	});
})(Ip);
const $a = Fi;
var Ai = {},
	jp = {
		get exports() {
			return Ai;
		},
		set exports(e) {
			Ai = e;
		},
	};
(function (e, t) {
	(function (n, r) {
		e.exports = r();
	})(qs, function () {
		return function (n, r, o) {
			n = n || {};
			var i = r.prototype,
				l = {
					future: 'in %s',
					past: '%s ago',
					s: 'a few seconds',
					m: 'a minute',
					mm: '%d minutes',
					h: 'an hour',
					hh: '%d hours',
					d: 'a day',
					dd: '%d days',
					M: 'a month',
					MM: '%d months',
					y: 'a year',
					yy: '%d years',
				};
			function u(a, h, p, y) {
				return i.fromToBase(a, h, p, y);
			}
			(o.en.relativeTime = l),
				(i.fromToBase = function (a, h, p, y, v) {
					for (
						var m,
							w,
							$,
							d = p.$locale().relativeTime || l,
							c = n.thresholds || [
								{ l: 's', r: 44, d: 'second' },
								{ l: 'm', r: 89 },
								{ l: 'mm', r: 44, d: 'minute' },
								{ l: 'h', r: 89 },
								{ l: 'hh', r: 21, d: 'hour' },
								{ l: 'd', r: 35 },
								{ l: 'dd', r: 25, d: 'day' },
								{ l: 'M', r: 45 },
								{ l: 'MM', r: 10, d: 'month' },
								{ l: 'y', r: 17 },
								{ l: 'yy', d: 'year' },
							],
							f = c.length,
							z = 0;
						z < f;
						z += 1
					) {
						var C = c[z];
						C.d && (m = y ? o(a).diff(p, C.d, !0) : p.diff(a, C.d, !0));
						var _ = (n.rounding || Math.round)(Math.abs(m));
						if ((($ = m > 0), _ <= C.r || !C.r)) {
							_ <= 1 && z > 0 && (C = c[z - 1]);
							var L = d[C.l];
							v && (_ = v('' + _)),
								(w =
									typeof L == 'string' ? L.replace('%d', _) : L(_, h, C.l, $));
							break;
						}
					}
					if (h) return w;
					var D = $ ? d.future : d.past;
					return typeof D == 'function' ? D(w) : D.replace('%s', w);
				}),
				(i.to = function (a, h) {
					return u(a, h, this, !0);
				}),
				(i.from = function (a, h) {
					return u(a, h, this);
				});
			var s = function (a) {
				return a.$u ? o.utc() : o();
			};
			(i.toNow = function (a) {
				return this.to(s(this), a);
			}),
				(i.fromNow = function (a) {
					return this.from(s(this), a);
				});
		};
	});
})(jp);
const Up = Ai,
	Bp = ({ ...e }) =>
		k('svg', {
			width: '24',
			height: '24',
			viewBox: '0 0 24 24',
			fill: 'none',
			xmlns: 'http://www.w3.org/2000/svg',
			...e,
			children: k('path', {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				d: 'M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75ZM16.662 9.34951C16.9931 9.01841 16.9931 8.4816 16.662 8.1505C16.3309 7.8194 15.7941 7.8194 15.463 8.1505L9.96875 13.6447L7.7245 11.4005C7.39341 11.0694 6.85659 11.0694 6.5255 11.4005C6.1944 11.7316 6.1944 12.2684 6.5255 12.5995L9.36925 15.4433C9.70034 15.7744 10.2372 15.7744 10.5683 15.4433L16.662 9.34951Z',
				fill: '#9199A7',
			}),
		});
$a.extend(Up);
const Ia = ({ item: e, responsive: t }) =>
		Q('div', {
			className: `cozy-relative cozy-min-w-full ${
				t ? 'sm:cozy-min-w-[50%]' : ''
			}`,
			children: [
				k('a', {
					href: '/',
					className: 'cozy-absolute cozy-inset-0 cozy-h-full cozy-w-full',
				}),
				Q('div', {
					className: `cozy-flex cozy-flex-col cozy-gap-3 cozy-p-4 ${
						t
							? 'sm:cozy-bg-light cozy-mx-auto cozy-w-11/12 cozy-rounded-md'
							: ''
					}`,
					children: [
						Q('div', {
							className: 'cozy-flex cozy-items-center cozy-gap-3',
							children: [
								k(La, { withoutMessage: !0, rating: Oe(e.star) }),
								(e == null ? void 0 : e.created_by.is_verified) &&
									Q('div', {
										className: 'cozy-flex cozy-gap-0.5 cozy-opacity-60',
										children: [
											k(Bp, { className: 'cozy-h-5 cozy-w-5' }),
											k('p', { children: 'Verified' }),
										],
									}),
							],
						}),
						k('h4', {
							className:
								'cozy-font-graphik-medium cozy-text-title-2 cozy-text-light-neutral-800',
							children: Oe(e.title),
						}),
						k('p', { children: Oe(e.content) }),
						k('div', {
							className: 'cozy-flex cozy-items-end cozy-gap-2',
							children: Q('p', {
								className: 'cozy-font-graphik',
								children: [
									Oe(e.created_by.name),
									',',
									' ',
									k('span', {
										className: 'cozy-text-body-1 cozy-opacity-60',
										children: $a(e == null ? void 0 : e.created_at).fromNow(),
									}),
								],
							}),
						}),
					],
				}),
			],
		}),
	Hp = ({ slides: e }) => {
		const t = W.useRef(null),
			n = e == null ? void 0 : e.length,
			[r, o] = W.useState(0),
			[i, l] = W.useState(0);
		W.useLayoutEffect(() => {
			l(t.current.clientWidth * r);
		}, []);
		function u() {
			r === n - 1
				? (o(0), l(0))
				: (o((a) => a + 1), l(t.current.clientWidth * (r + 1)));
		}
		function s() {
			r === 0
				? (o(n - 1), l(t.current.clientWidth * (n - 1)))
				: (o((a) => a - 1), l(t.current.clientWidth * (r - 1)));
		}
		return Q('div', {
			className: 'cozy-relative cozy-mx-auto cozy-w-full',
			children: [
				k('div', {
					className: 'cozy-mx-auto cozy-w-10/12 cozy-overflow-hidden',
					children: k('div', {
						className:
							'cozy-mx-auto cozy-flex cozy-transition-transform cozy-duration-500 cozy-ease-in-out',
						ref: t,
						style: { transform: `translate3d(-${i}px, 0px, 0px)` },
						children:
							e == null ? void 0 : e.map((a) => k(Ia, { item: a }, a.id)),
					}),
				}),
				k('button', {
					className:
						'cozy-absolute cozy-left-0 cozy-bottom-0 cozy-top-0 cozy-h-full disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40',
					onClick: s,
					disabled: r === 0,
					children: k(Fa, {
						className: 'cozy-h-5 cozy-w-8 cozy-fill-light-neutral-700',
					}),
				}),
				k('button', {
					className:
						'cozy-absolute cozy-right-0 cozy-bottom-0 cozy-top-0 cozy-h-full disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40',
					onClick: u,
					disabled: r === n - 1,
					children: k(Aa, {
						className: 'cozy-h-5 cozy-w-8 cozy-fill-light-neutral-700',
					}),
				}),
			],
		});
	},
	ja = () => {
		var n;
		const { data: e, error: t } = kr('/api/v1/business/reviews');
		return Q(Kt, {
			children: [
				t &&
					k('p', {
						className: 'cozy-opacity-60',
						children: ' Reviews not found',
					}),
				e &&
					k(Hp, {
						slides:
							(n = e == null ? void 0 : e.data) == null ? void 0 : n.items,
					}),
			],
		});
	},
	Vp = () =>
		Q('div', {
			className:
				'cozy-flex cozy-flex-col cozy-items-center cozy-justify-center cozy-gap-3',
			children: [
				k(Da, { intent: 'center' }),
				k('div', {
					className:
						'cozy-mx-auto cozy-w-full cozy-max-w-xs sm:cozy-max-w-xl lg:cozy-max-w-3xl',
					children: k(ja, {}),
				}),
			],
		}),
	Wp = () => {
		var n, r;
		const { data: e, error: t } = kr('/api/v1/business/widgets/stats');
		return Q('div', {
			className:
				'cozy-flex cozy-flex-col cozy-items-center cozy-gap-16 sm:cozy-flex-row',
			children: [
				Q('div', {
					className:
						'cozy-flex cozy-flex-col cozy-items-center cozy-justify-center cozy-gap-3 cozy-self-stretch cozy-p-3 cozy-px-3',
					children: [
						t &&
							k('p', {
								className: 'cozy-opacity-60',
								children: ' Stats not found',
							}),
						k(Ra, {
							messageLarge: !0,
							rating: Oe(
								(n = e == null ? void 0 : e.data) == null
									? void 0
									: n.total_trust_score,
							),
							numberOfReviews: Oe(
								(r = e == null ? void 0 : e.data) == null
									? void 0
									: r.total_review,
								0,
							),
						}),
						k('h3', {
							className:
								'cozy-font-graphik-semibold cozy-text-xl cozy-text-heading-3 cozy-text-branding-primary-500',
							children: 'CozyCot',
						}),
					],
				}),
				k('div', {
					className: 'cozy-mx-auto cozy-w-full cozy-max-w-xs sm:cozy-max-w-sm',
					children: k(ja, {}),
				}),
			],
		});
	},
	Qp = ({ slides: e }) => {
		const t = W.useRef(null),
			[n, r] = W.useState(!1),
			o = (i) => () => {
				if ((r(!0), t.current)) {
					const { scrollLeft: l, clientWidth: u } = t.current,
						s = i === 'left' ? l - u : l + u;
					t.current.scrollTo({ left: s, behavior: 'smooth' });
				}
			};
		return Q('div', {
			className:
				'cozy-group cozy-relative cozy-mx-auto cozy-w-full cozy-max-w-3xl',
			children: [
				k('button', {
					className: `cozy-absolute cozy-top-1/2 cozy-left-0 cozy-bottom-0 cozy-h-full cozy-w-8 -cozy-translate-y-1/2 cozy-cursor-pointer cozy-opacity-0 cozy-transition-all cozy-duration-200 hover:cozy-scale-125 disabled:cozy-cursor-not-allowed disabled:cozy-opacity-20 group-hover:cozy-opacity-50 sm:-cozy-left-8 ${
						n ? '' : 'cozy-hidden'
					}`,
					onClick: o('left'),
					children: k(Fa, { className: 'cozy-h-5 cozy-w-5' }),
				}),
				k('div', {
					ref: t,
					className:
						'scrollbar-hide cozy-flex cozy-items-center cozy-overflow-x-scroll',
					children:
						e == null
							? void 0
							: e.map((i) => k(Ia, { item: i, responsive: !0 }, i.id)),
				}),
				k('button', {
					className:
						'cozy-absolute cozy-top-1/2 cozy-right-0 cozy-bottom-0 cozy-h-full cozy-w-8 -cozy-translate-y-1/2 cozy-cursor-pointer cozy-opacity-0 cozy-transition-all cozy-duration-200 hover:cozy-scale-125 disabled:cozy-cursor-not-allowed disabled:cozy-opacity-20 group-hover:cozy-opacity-50 sm:-cozy-right-8',
					onClick: o('right'),
					children: k(Aa, { className: 'cozy-h-5 cozy-w-5' }),
				}),
			],
		});
	},
	Kp = () => {
		var n;
		const { data: e, error: t } = kr('/api/v1/business/reviews');
		return Q('div', {
			className:
				'cozy-mx-auto cozy-w-full cozy-max-w-xs sm:cozy-max-w-xl lg:cozy-max-w-3xl',
			children: [
				t &&
					k('p', {
						className: 'cozy-opacity-60 ',
						children: ' Reviews not found',
					}),
				e &&
					k(Qp, {
						slides:
							(n = e == null ? void 0 : e.data) == null ? void 0 : n.items,
					}),
			],
		});
	},
	Yp = [
		{ id: 1, intent: 'evaluate', component: k(gd, {}) },
		{ id: 2, intent: 'review-button', component: k(vd, {}) },
		{ id: 3, intent: 'horizontal', component: k(Dp, {}) },
		{ id: 4, intent: 'micro-review-count', component: k(Fp, {}) },
		{ id: 5, intent: 'micro-star', component: k(Ap, {}) },
		{ id: 6, intent: 'mini', component: k($p, {}) },
		{ id: 7, intent: 'review-carousel', component: k(Wp, {}) },
		{ id: 8, intent: 'mini-carousel', component: k(Vp, {}) },
		{ id: 9, intent: 'review-slider', component: k(Kp, {}) },
	],
	Xp = ({ intent: e }) =>
		k(Kt, {
			children: Yp.filter((t) => t.intent === e).map((t) =>
				k('div', { className: 'cozy-w-full', children: t.component }, t.id),
			),
		});
var $i = {},
	Gp = {
		get exports() {
			return $i;
		},
		set exports(e) {
			$i = e;
		},
	},
	Fe = {},
	Ii = {},
	Jp = {
		get exports() {
			return Ii;
		},
		set exports(e) {
			Ii = e;
		},
	},
	Ua = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(S, E) {
		var R = S.length;
		S.push(E);
		e: for (; 0 < R; ) {
			var I = (R - 1) >>> 1,
				j = S[I];
			if (0 < o(j, E)) (S[I] = E), (S[R] = j), (R = I);
			else break e;
		}
	}
	function n(S) {
		return S.length === 0 ? null : S[0];
	}
	function r(S) {
		if (S.length === 0) return null;
		var E = S[0],
			R = S.pop();
		if (R !== E) {
			S[0] = R;
			e: for (var I = 0, j = S.length, te = j >>> 1; I < te; ) {
				var pe = 2 * (I + 1) - 1,
					Te = S[pe],
					Pe = pe + 1,
					Je = S[Pe];
				if (0 > o(Te, R))
					Pe < j && 0 > o(Je, Te)
						? ((S[I] = Je), (S[Pe] = R), (I = Pe))
						: ((S[I] = Te), (S[pe] = R), (I = pe));
				else if (Pe < j && 0 > o(Je, R)) (S[I] = Je), (S[Pe] = R), (I = Pe);
				else break e;
			}
		}
		return E;
	}
	function o(S, E) {
		var R = S.sortIndex - E.sortIndex;
		return R !== 0 ? R : S.id - E.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var i = performance;
		e.unstable_now = function () {
			return i.now();
		};
	} else {
		var l = Date,
			u = l.now();
		e.unstable_now = function () {
			return l.now() - u;
		};
	}
	var s = [],
		a = [],
		h = 1,
		p = null,
		y = 3,
		v = !1,
		m = !1,
		w = !1,
		$ = typeof setTimeout == 'function' ? setTimeout : null,
		d = typeof clearTimeout == 'function' ? clearTimeout : null,
		c = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function f(S) {
		for (var E = n(a); E !== null; ) {
			if (E.callback === null) r(a);
			else if (E.startTime <= S)
				r(a), (E.sortIndex = E.expirationTime), t(s, E);
			else break;
			E = n(a);
		}
	}
	function z(S) {
		if (((w = !1), f(S), !m))
			if (n(s) !== null) (m = !0), A(C);
			else {
				var E = n(a);
				E !== null && T(z, E.startTime - S);
			}
	}
	function C(S, E) {
		(m = !1), w && ((w = !1), d(D), (D = -1)), (v = !0);
		var R = y;
		try {
			for (
				f(E), p = n(s);
				p !== null && (!(p.expirationTime > E) || (S && !de()));

			) {
				var I = p.callback;
				if (typeof I == 'function') {
					(p.callback = null), (y = p.priorityLevel);
					var j = I(p.expirationTime <= E);
					(E = e.unstable_now()),
						typeof j == 'function' ? (p.callback = j) : p === n(s) && r(s),
						f(E);
				} else r(s);
				p = n(s);
			}
			if (p !== null) var te = !0;
			else {
				var pe = n(a);
				pe !== null && T(z, pe.startTime - E), (te = !1);
			}
			return te;
		} finally {
			(p = null), (y = R), (v = !1);
		}
	}
	var _ = !1,
		L = null,
		D = -1,
		U = 5,
		M = -1;
	function de() {
		return !(e.unstable_now() - M < U);
	}
	function yt() {
		if (L !== null) {
			var S = e.unstable_now();
			M = S;
			var E = !0;
			try {
				E = L(!0, S);
			} finally {
				E ? F() : ((_ = !1), (L = null));
			}
		} else _ = !1;
	}
	var F;
	if (typeof c == 'function')
		F = function () {
			c(yt);
		};
	else if (typeof MessageChannel < 'u') {
		var P = new MessageChannel(),
			N = P.port2;
		(P.port1.onmessage = yt),
			(F = function () {
				N.postMessage(null);
			});
	} else
		F = function () {
			$(yt, 0);
		};
	function A(S) {
		(L = S), _ || ((_ = !0), F());
	}
	function T(S, E) {
		D = $(function () {
			S(e.unstable_now());
		}, E);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (S) {
			S.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			m || v || ((m = !0), A(C));
		}),
		(e.unstable_forceFrameRate = function (S) {
			0 > S || 125 < S
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
				  )
				: (U = 0 < S ? Math.floor(1e3 / S) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return y;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(s);
		}),
		(e.unstable_next = function (S) {
			switch (y) {
				case 1:
				case 2:
				case 3:
					var E = 3;
					break;
				default:
					E = y;
			}
			var R = y;
			y = E;
			try {
				return S();
			} finally {
				y = R;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (S, E) {
			switch (S) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					S = 3;
			}
			var R = y;
			y = S;
			try {
				return E();
			} finally {
				y = R;
			}
		}),
		(e.unstable_scheduleCallback = function (S, E, R) {
			var I = e.unstable_now();
			switch (
				(typeof R == 'object' && R !== null
					? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? I + R : I))
					: (R = I),
				S)
			) {
				case 1:
					var j = -1;
					break;
				case 2:
					j = 250;
					break;
				case 5:
					j = 1073741823;
					break;
				case 4:
					j = 1e4;
					break;
				default:
					j = 5e3;
			}
			return (
				(j = R + j),
				(S = {
					id: h++,
					callback: E,
					priorityLevel: S,
					startTime: R,
					expirationTime: j,
					sortIndex: -1,
				}),
				R > I
					? ((S.sortIndex = R),
					  t(a, S),
					  n(s) === null &&
							S === n(a) &&
							(w ? (d(D), (D = -1)) : (w = !0), T(z, R - I)))
					: ((S.sortIndex = j), t(s, S), m || v || ((m = !0), A(C))),
				S
			);
		}),
		(e.unstable_shouldYield = de),
		(e.unstable_wrapCallback = function (S) {
			var E = y;
			return function () {
				var R = y;
				y = E;
				try {
					return S.apply(this, arguments);
				} finally {
					y = R;
				}
			};
		});
})(Ua);
(function (e) {
	e.exports = Ua;
})(Jp);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ba = W,
	De = Ii;
function x(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n]);
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var Ha = new Set(),
	rr = {};
function Zt(e, t) {
	xn(e, t), xn(e + 'Capture', t);
}
function xn(e, t) {
	for (rr[e] = t, e = 0; e < t.length; e++) Ha.add(t[e]);
}
var at = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	ji = Object.prototype.hasOwnProperty,
	bp =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Yu = {},
	Xu = {};
function Zp(e) {
	return ji.call(Xu, e)
		? !0
		: ji.call(Yu, e)
		? !1
		: bp.test(e)
		? (Xu[e] = !0)
		: ((Yu[e] = !0), !1);
}
function qp(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function eh(e, t, n, r) {
	if (t === null || typeof t > 'u' || qp(e, t, n, r)) return !0;
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
function Se(e, t, n, r, o, i, l) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = o),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = i),
		(this.removeEmptyString = l);
}
var fe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		fe[e] = new Se(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	fe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	fe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	fe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	fe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	fe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vl = /[\-:]([a-z])/g;
function Wl(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Vl, Wl);
		fe[t] = new Se(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Vl, Wl);
		fe[t] = new Se(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(Vl, Wl);
	fe[t] = new Se(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Se(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ql(e, t, n, r) {
	var o = fe.hasOwnProperty(t) ? fe[t] : null;
	(o !== null
		? o.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(eh(t, n, o, r) && (n = null),
		r || o === null
			? Zp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: o.mustUseProperty
			? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
			: ((t = o.attributeName),
			  (r = o.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((o = o.type),
					  (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ht = Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Rr = Symbol.for('react.element'),
	nn = Symbol.for('react.portal'),
	rn = Symbol.for('react.fragment'),
	Kl = Symbol.for('react.strict_mode'),
	Ui = Symbol.for('react.profiler'),
	Va = Symbol.for('react.provider'),
	Wa = Symbol.for('react.context'),
	Yl = Symbol.for('react.forward_ref'),
	Bi = Symbol.for('react.suspense'),
	Hi = Symbol.for('react.suspense_list'),
	Xl = Symbol.for('react.memo'),
	wt = Symbol.for('react.lazy'),
	Qa = Symbol.for('react.offscreen'),
	Gu = Symbol.iterator;
function Dn(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Gu && e[Gu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var q = Object.assign,
	li;
function Hn(e) {
	if (li === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			li = (t && t[1]) || '';
		}
	return (
		`
` +
		li +
		e
	);
}
var ui = !1;
function si(e, t) {
	if (!e || ui) return '';
	ui = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (a) {
					var r = a;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (a) {
					r = a;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (a) {
				r = a;
			}
			e();
		}
	} catch (a) {
		if (a && r && typeof a.stack == 'string') {
			for (
				var o = a.stack.split(`
`),
					i = r.stack.split(`
`),
					l = o.length - 1,
					u = i.length - 1;
				1 <= l && 0 <= u && o[l] !== i[u];

			)
				u--;
			for (; 1 <= l && 0 <= u; l--, u--)
				if (o[l] !== i[u]) {
					if (l !== 1 || u !== 1)
						do
							if ((l--, u--, 0 > u || o[l] !== i[u])) {
								var s =
									`
` + o[l].replace(' at new ', ' at ');
								return (
									e.displayName &&
										s.includes('<anonymous>') &&
										(s = s.replace('<anonymous>', e.displayName)),
									s
								);
							}
						while (1 <= l && 0 <= u);
					break;
				}
		}
	} finally {
		(ui = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? Hn(e) : '';
}
function th(e) {
	switch (e.tag) {
		case 5:
			return Hn(e.type);
		case 16:
			return Hn('Lazy');
		case 13:
			return Hn('Suspense');
		case 19:
			return Hn('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = si(e.type, !1)), e;
		case 11:
			return (e = si(e.type.render, !1)), e;
		case 1:
			return (e = si(e.type, !0)), e;
		default:
			return '';
	}
}
function Vi(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case rn:
			return 'Fragment';
		case nn:
			return 'Portal';
		case Ui:
			return 'Profiler';
		case Kl:
			return 'StrictMode';
		case Bi:
			return 'Suspense';
		case Hi:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case Wa:
				return (e.displayName || 'Context') + '.Consumer';
			case Va:
				return (e._context.displayName || 'Context') + '.Provider';
			case Yl:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case Xl:
				return (
					(t = e.displayName || null), t !== null ? t : Vi(e.type) || 'Memo'
				);
			case wt:
				(t = e._payload), (e = e._init);
				try {
					return Vi(e(t));
				} catch {}
		}
	return null;
}
function nh(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return Vi(t);
		case 8:
			return t === Kl ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function Dt(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function Ka(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function rh(e) {
	var t = Ka(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var o = n.get,
			i = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return o.call(this);
				},
				set: function (l) {
					(r = '' + l), i.call(this, l);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (l) {
					r = '' + l;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Or(e) {
	e._valueTracker || (e._valueTracker = rh(e));
}
function Ya(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = Ka(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function ao(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Wi(e, t) {
	var n = t.checked;
	return q({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Ju(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Dt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function Xa(e, t) {
	(t = t.checked), t != null && Ql(e, 'checked', t, !1);
}
function Qi(e, t) {
	Xa(e, t);
	var n = Dt(t.value),
		r = t.type;
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value')
		? Ki(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && Ki(e, t.type, Dt(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function bu(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type;
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n);
}
function Ki(e, t, n) {
	(t !== 'number' || ao(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Vn = Array.isArray;
function yn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
		for (n = 0; n < e.length; n++)
			(o = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== o && (e[n].selected = o),
				o && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + Dt(n), t = null, o = 0; o < e.length; o++) {
			if (e[o].value === n) {
				(e[o].selected = !0), r && (e[o].defaultSelected = !0);
				return;
			}
			t !== null || e[o].disabled || (t = e[o]);
		}
		t !== null && (t.selected = !0);
	}
}
function Yi(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
	return q({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function Zu(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(x(92));
			if (Vn(n)) {
				if (1 < n.length) throw Error(x(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: Dt(n) };
}
function Ga(e, t) {
	var n = Dt(t.value),
		r = Dt(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function qu(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Ja(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function Xi(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? Ja(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var Lr,
	ba = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, o) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, o);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t;
		else {
			for (
				Lr = Lr || document.createElement('div'),
					Lr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = Lr.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function or(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Kn = {
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
	oh = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Kn).forEach(function (e) {
	oh.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kn[t] = Kn[e]);
	});
});
function Za(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Kn.hasOwnProperty(e) && Kn[e])
		? ('' + t).trim()
		: t + 'px';
}
function qa(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				o = Za(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
		}
}
var ih = q(
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
	},
);
function Gi(e, t) {
	if (t) {
		if (ih[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(x(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(x(60));
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(x(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(x(62));
	}
}
function Ji(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var bi = null;
function Gl(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Zi = null,
	mn = null,
	gn = null;
function es(e) {
	if ((e = Nr(e))) {
		if (typeof Zi != 'function') throw Error(x(280));
		var t = e.stateNode;
		t && ((t = Vo(t)), Zi(e.stateNode, e.type, t));
	}
}
function ec(e) {
	mn ? (gn ? gn.push(e) : (gn = [e])) : (mn = e);
}
function tc() {
	if (mn) {
		var e = mn,
			t = gn;
		if (((gn = mn = null), es(e), t)) for (e = 0; e < t.length; e++) es(t[e]);
	}
}
function nc(e, t) {
	return e(t);
}
function rc() {}
var ai = !1;
function oc(e, t, n) {
	if (ai) return e(t, n);
	ai = !0;
	try {
		return nc(e, t, n);
	} finally {
		(ai = !1), (mn !== null || gn !== null) && (rc(), tc());
	}
}
function ir(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Vo(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != 'function') throw Error(x(231, t, typeof n));
	return n;
}
var qi = !1;
if (at)
	try {
		var Fn = {};
		Object.defineProperty(Fn, 'passive', {
			get: function () {
				qi = !0;
			},
		}),
			window.addEventListener('test', Fn, Fn),
			window.removeEventListener('test', Fn, Fn);
	} catch {
		qi = !1;
	}
function lh(e, t, n, r, o, i, l, u, s) {
	var a = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, a);
	} catch (h) {
		this.onError(h);
	}
}
var Yn = !1,
	co = null,
	fo = !1,
	el = null,
	uh = {
		onError: function (e) {
			(Yn = !0), (co = e);
		},
	};
function sh(e, t, n, r, o, i, l, u, s) {
	(Yn = !1), (co = null), lh.apply(uh, arguments);
}
function ah(e, t, n, r, o, i, l, u, s) {
	if ((sh.apply(this, arguments), Yn)) {
		if (Yn) {
			var a = co;
			(Yn = !1), (co = null);
		} else throw Error(x(198));
		fo || ((fo = !0), (el = a));
	}
}
function qt(e) {
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
function ic(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function ts(e) {
	if (qt(e) !== e) throw Error(x(188));
}
function ch(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = qt(e)), t === null)) throw Error(x(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var o = n.return;
		if (o === null) break;
		var i = o.alternate;
		if (i === null) {
			if (((r = o.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (o.child === i.child) {
			for (i = o.child; i; ) {
				if (i === n) return ts(o), e;
				if (i === r) return ts(o), t;
				i = i.sibling;
			}
			throw Error(x(188));
		}
		if (n.return !== r.return) (n = o), (r = i);
		else {
			for (var l = !1, u = o.child; u; ) {
				if (u === n) {
					(l = !0), (n = o), (r = i);
					break;
				}
				if (u === r) {
					(l = !0), (r = o), (n = i);
					break;
				}
				u = u.sibling;
			}
			if (!l) {
				for (u = i.child; u; ) {
					if (u === n) {
						(l = !0), (n = i), (r = o);
						break;
					}
					if (u === r) {
						(l = !0), (r = i), (n = o);
						break;
					}
					u = u.sibling;
				}
				if (!l) throw Error(x(189));
			}
		}
		if (n.alternate !== r) throw Error(x(190));
	}
	if (n.tag !== 3) throw Error(x(188));
	return n.stateNode.current === n ? e : t;
}
function lc(e) {
	return (e = ch(e)), e !== null ? uc(e) : null;
}
function uc(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = uc(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var sc = De.unstable_scheduleCallback,
	ns = De.unstable_cancelCallback,
	fh = De.unstable_shouldYield,
	dh = De.unstable_requestPaint,
	ne = De.unstable_now,
	ph = De.unstable_getCurrentPriorityLevel,
	Jl = De.unstable_ImmediatePriority,
	ac = De.unstable_UserBlockingPriority,
	po = De.unstable_NormalPriority,
	hh = De.unstable_LowPriority,
	cc = De.unstable_IdlePriority,
	jo = null,
	tt = null;
function yh(e) {
	if (tt && typeof tt.onCommitFiberRoot == 'function')
		try {
			tt.onCommitFiberRoot(jo, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Ye = Math.clz32 ? Math.clz32 : vh,
	mh = Math.log,
	gh = Math.LN2;
function vh(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((mh(e) / gh) | 0)) | 0;
}
var Mr = 64,
	Dr = 4194304;
function Wn(e) {
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
function ho(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		o = e.suspendedLanes,
		i = e.pingedLanes,
		l = n & 268435455;
	if (l !== 0) {
		var u = l & ~o;
		u !== 0 ? (r = Wn(u)) : ((i &= l), i !== 0 && (r = Wn(i)));
	} else (l = n & ~o), l !== 0 ? (r = Wn(l)) : i !== 0 && (r = Wn(i));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & o) &&
		((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Ye(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
	return r;
}
function wh(e, t) {
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
function zh(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			o = e.expirationTimes,
			i = e.pendingLanes;
		0 < i;

	) {
		var l = 31 - Ye(i),
			u = 1 << l,
			s = o[l];
		s === -1
			? (!(u & n) || u & r) && (o[l] = wh(u, t))
			: s <= t && (e.expiredLanes |= u),
			(i &= ~u);
	}
}
function tl(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function fc() {
	var e = Mr;
	return (Mr <<= 1), !(Mr & 4194240) && (Mr = 64), e;
}
function ci(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Er(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Ye(t)),
		(e[t] = n);
}
function Sh(e, t) {
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
		var o = 31 - Ye(n),
			i = 1 << o;
		(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
	}
}
function bl(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Ye(n),
			o = 1 << r;
		(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
	}
}
var K = 0;
function dc(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pc,
	Zl,
	hc,
	yc,
	mc,
	nl = !1,
	Fr = [],
	Ct = null,
	Nt = null,
	_t = null,
	lr = new Map(),
	ur = new Map(),
	St = [],
	xh =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' ',
		);
function rs(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			Ct = null;
			break;
		case 'dragenter':
		case 'dragleave':
			Nt = null;
			break;
		case 'mouseover':
		case 'mouseout':
			_t = null;
			break;
		case 'pointerover':
		case 'pointerout':
			lr.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			ur.delete(t.pointerId);
	}
}
function An(e, t, n, r, o, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: i,
				targetContainers: [o],
		  }),
		  t !== null && ((t = Nr(t)), t !== null && Zl(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  o !== null && t.indexOf(o) === -1 && t.push(o),
		  e);
}
function kh(e, t, n, r, o) {
	switch (t) {
		case 'focusin':
			return (Ct = An(Ct, e, t, n, r, o)), !0;
		case 'dragenter':
			return (Nt = An(Nt, e, t, n, r, o)), !0;
		case 'mouseover':
			return (_t = An(_t, e, t, n, r, o)), !0;
		case 'pointerover':
			var i = o.pointerId;
			return lr.set(i, An(lr.get(i) || null, e, t, n, r, o)), !0;
		case 'gotpointercapture':
			return (
				(i = o.pointerId), ur.set(i, An(ur.get(i) || null, e, t, n, r, o)), !0
			);
	}
	return !1;
}
function gc(e) {
	var t = Bt(e.target);
	if (t !== null) {
		var n = qt(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = ic(n)), t !== null)) {
					(e.blockedOn = t),
						mc(e.priority, function () {
							hc(n);
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
function Zr(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = rl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(bi = r), n.target.dispatchEvent(r), (bi = null);
		} else return (t = Nr(n)), t !== null && Zl(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function os(e, t, n) {
	Zr(e) && n.delete(t);
}
function Eh() {
	(nl = !1),
		Ct !== null && Zr(Ct) && (Ct = null),
		Nt !== null && Zr(Nt) && (Nt = null),
		_t !== null && Zr(_t) && (_t = null),
		lr.forEach(os),
		ur.forEach(os);
}
function $n(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		nl ||
			((nl = !0),
			De.unstable_scheduleCallback(De.unstable_NormalPriority, Eh)));
}
function sr(e) {
	function t(o) {
		return $n(o, e);
	}
	if (0 < Fr.length) {
		$n(Fr[0], e);
		for (var n = 1; n < Fr.length; n++) {
			var r = Fr[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Ct !== null && $n(Ct, e),
			Nt !== null && $n(Nt, e),
			_t !== null && $n(_t, e),
			lr.forEach(t),
			ur.forEach(t),
			n = 0;
		n < St.length;
		n++
	)
		(r = St[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < St.length && ((n = St[0]), n.blockedOn === null); )
		gc(n), n.blockedOn === null && St.shift();
}
var vn = ht.ReactCurrentBatchConfig,
	yo = !0;
function Ch(e, t, n, r) {
	var o = K,
		i = vn.transition;
	vn.transition = null;
	try {
		(K = 1), ql(e, t, n, r);
	} finally {
		(K = o), (vn.transition = i);
	}
}
function Nh(e, t, n, r) {
	var o = K,
		i = vn.transition;
	vn.transition = null;
	try {
		(K = 4), ql(e, t, n, r);
	} finally {
		(K = o), (vn.transition = i);
	}
}
function ql(e, t, n, r) {
	if (yo) {
		var o = rl(e, t, n, r);
		if (o === null) zi(e, t, r, mo, n), rs(e, r);
		else if (kh(o, e, t, n, r)) r.stopPropagation();
		else if ((rs(e, r), t & 4 && -1 < xh.indexOf(e))) {
			for (; o !== null; ) {
				var i = Nr(o);
				if (
					(i !== null && pc(i),
					(i = rl(e, t, n, r)),
					i === null && zi(e, t, r, mo, n),
					i === o)
				)
					break;
				o = i;
			}
			o !== null && r.stopPropagation();
		} else zi(e, t, r, null, n);
	}
}
var mo = null;
function rl(e, t, n, r) {
	if (((mo = null), (e = Gl(r)), (e = Bt(e)), e !== null))
		if (((t = qt(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = ic(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (mo = e), null;
}
function vc(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (ph()) {
				case Jl:
					return 1;
				case ac:
					return 4;
				case po:
				case hh:
					return 16;
				case cc:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var kt = null,
	eu = null,
	qr = null;
function wc() {
	if (qr) return qr;
	var e,
		t = eu,
		n = t.length,
		r,
		o = 'value' in kt ? kt.value : kt.textContent,
		i = o.length;
	for (e = 0; e < n && t[e] === o[e]; e++);
	var l = n - e;
	for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
	return (qr = o.slice(e, 1 < r ? 1 - r : void 0));
}
function eo(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Ar() {
	return !0;
}
function is() {
	return !1;
}
function Ae(e) {
	function t(n, r, o, i, l) {
		(this._reactName = n),
			(this._targetInst = o),
			(this.type = r),
			(this.nativeEvent = i),
			(this.target = l),
			(this.currentTarget = null);
		for (var u in e)
			e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
		return (
			(this.isDefaultPrevented = (
				i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
			)
				? Ar
				: is),
			(this.isPropagationStopped = is),
			this
		);
	}
	return (
		q(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = Ar));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Ar));
			},
			persist: function () {},
			isPersistent: Ar,
		}),
		t
	);
}
var On = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	tu = Ae(On),
	Cr = q({}, On, { view: 0, detail: 0 }),
	_h = Ae(Cr),
	fi,
	di,
	In,
	Uo = q({}, Cr, {
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
		getModifierState: nu,
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
			return 'movementX' in e
				? e.movementX
				: (e !== In &&
						(In && e.type === 'mousemove'
							? ((fi = e.screenX - In.screenX), (di = e.screenY - In.screenY))
							: (di = fi = 0),
						(In = e)),
				  fi);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : di;
		},
	}),
	ls = Ae(Uo),
	Th = q({}, Uo, { dataTransfer: 0 }),
	Ph = Ae(Th),
	Rh = q({}, Cr, { relatedTarget: 0 }),
	pi = Ae(Rh),
	Oh = q({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Lh = Ae(Oh),
	Mh = q({}, On, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Dh = Ae(Mh),
	Fh = q({}, On, { data: 0 }),
	us = Ae(Fh),
	Ah = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	$h = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	Ih = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function jh(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Ih[e]) ? !!t[e] : !1;
}
function nu() {
	return jh;
}
var Uh = q({}, Cr, {
		key: function (e) {
			if (e.key) {
				var t = Ah[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = eo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? $h[e.keyCode] || 'Unidentified'
				: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: nu,
		charCode: function (e) {
			return e.type === 'keypress' ? eo(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? eo(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	Bh = Ae(Uh),
	Hh = q({}, Uo, {
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
	ss = Ae(Hh),
	Vh = q({}, Cr, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: nu,
	}),
	Wh = Ae(Vh),
	Qh = q({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Kh = Ae(Qh),
	Yh = q({}, Uo, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Xh = Ae(Yh),
	Gh = [9, 13, 27, 32],
	ru = at && 'CompositionEvent' in window,
	Xn = null;
at && 'documentMode' in document && (Xn = document.documentMode);
var Jh = at && 'TextEvent' in window && !Xn,
	zc = at && (!ru || (Xn && 8 < Xn && 11 >= Xn)),
	as = String.fromCharCode(32),
	cs = !1;
function Sc(e, t) {
	switch (e) {
		case 'keyup':
			return Gh.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function xc(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var on = !1;
function bh(e, t) {
	switch (e) {
		case 'compositionend':
			return xc(t);
		case 'keypress':
			return t.which !== 32 ? null : ((cs = !0), as);
		case 'textInput':
			return (e = t.data), e === as && cs ? null : e;
		default:
			return null;
	}
}
function Zh(e, t) {
	if (on)
		return e === 'compositionend' || (!ru && Sc(e, t))
			? ((e = wc()), (qr = eu = kt = null), (on = !1), e)
			: null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return zc && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var qh = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
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
function fs(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!qh[e.type] : t === 'textarea';
}
function kc(e, t, n, r) {
	ec(r),
		(t = go(t, 'onChange')),
		0 < t.length &&
			((n = new tu('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Gn = null,
	ar = null;
function ey(e) {
	Dc(e, 0);
}
function Bo(e) {
	var t = sn(e);
	if (Ya(t)) return e;
}
function ty(e, t) {
	if (e === 'change') return t;
}
var Ec = !1;
if (at) {
	var hi;
	if (at) {
		var yi = 'oninput' in document;
		if (!yi) {
			var ds = document.createElement('div');
			ds.setAttribute('oninput', 'return;'),
				(yi = typeof ds.oninput == 'function');
		}
		hi = yi;
	} else hi = !1;
	Ec = hi && (!document.documentMode || 9 < document.documentMode);
}
function ps() {
	Gn && (Gn.detachEvent('onpropertychange', Cc), (ar = Gn = null));
}
function Cc(e) {
	if (e.propertyName === 'value' && Bo(ar)) {
		var t = [];
		kc(t, ar, e, Gl(e)), oc(ey, t);
	}
}
function ny(e, t, n) {
	e === 'focusin'
		? (ps(), (Gn = t), (ar = n), Gn.attachEvent('onpropertychange', Cc))
		: e === 'focusout' && ps();
}
function ry(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return Bo(ar);
}
function oy(e, t) {
	if (e === 'click') return Bo(t);
}
function iy(e, t) {
	if (e === 'input' || e === 'change') return Bo(t);
}
function ly(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == 'function' ? Object.is : ly;
function cr(e, t) {
	if (Ge(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var o = n[r];
		if (!ji.call(t, o) || !Ge(e[o], t[o])) return !1;
	}
	return !0;
}
function hs(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function ys(e, t) {
	var n = hs(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
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
		n = hs(n);
	}
}
function Nc(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Nc(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function _c() {
	for (var e = window, t = ao(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = ao(e.document);
	}
	return t;
}
function ou(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function uy(e) {
	var t = _c(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Nc(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && ou(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var o = n.textContent.length,
					i = Math.min(r.start, o);
				(r = r.end === void 0 ? i : Math.min(r.end, o)),
					!e.extend && i > r && ((o = r), (r = i), (i = o)),
					(o = ys(n, i));
				var l = ys(n, r);
				o &&
					l &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== o.node ||
						e.anchorOffset !== o.offset ||
						e.focusNode !== l.node ||
						e.focusOffset !== l.offset) &&
					((t = t.createRange()),
					t.setStart(o.node, o.offset),
					e.removeAllRanges(),
					i > r
						? (e.addRange(t), e.extend(l.node, l.offset))
						: (t.setEnd(l.node, l.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var sy = at && 'documentMode' in document && 11 >= document.documentMode,
	ln = null,
	ol = null,
	Jn = null,
	il = !1;
function ms(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	il ||
		ln == null ||
		ln !== ao(r) ||
		((r = ln),
		'selectionStart' in r && ou(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(Jn && cr(Jn, r)) ||
			((Jn = r),
			(r = go(ol, 'onSelect')),
			0 < r.length &&
				((t = new tu('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = ln))));
}
function $r(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var un = {
		animationend: $r('Animation', 'AnimationEnd'),
		animationiteration: $r('Animation', 'AnimationIteration'),
		animationstart: $r('Animation', 'AnimationStart'),
		transitionend: $r('Transition', 'TransitionEnd'),
	},
	mi = {},
	Tc = {};
at &&
	((Tc = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete un.animationend.animation,
		delete un.animationiteration.animation,
		delete un.animationstart.animation),
	'TransitionEvent' in window || delete un.transitionend.transition);
function Ho(e) {
	if (mi[e]) return mi[e];
	if (!un[e]) return e;
	var t = un[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Tc) return (mi[e] = t[n]);
	return e;
}
var Pc = Ho('animationend'),
	Rc = Ho('animationiteration'),
	Oc = Ho('animationstart'),
	Lc = Ho('transitionend'),
	Mc = new Map(),
	gs =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' ',
		);
function At(e, t) {
	Mc.set(e, t), Zt(t, [e]);
}
for (var gi = 0; gi < gs.length; gi++) {
	var vi = gs[gi],
		ay = vi.toLowerCase(),
		cy = vi[0].toUpperCase() + vi.slice(1);
	At(ay, 'on' + cy);
}
At(Pc, 'onAnimationEnd');
At(Rc, 'onAnimationIteration');
At(Oc, 'onAnimationStart');
At('dblclick', 'onDoubleClick');
At('focusin', 'onFocus');
At('focusout', 'onBlur');
At(Lc, 'onTransitionEnd');
xn('onMouseEnter', ['mouseout', 'mouseover']);
xn('onMouseLeave', ['mouseout', 'mouseover']);
xn('onPointerEnter', ['pointerout', 'pointerover']);
xn('onPointerLeave', ['pointerout', 'pointerover']);
Zt(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(
		' ',
	),
);
Zt(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' ',
	),
);
Zt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Zt(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
Zt(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
Zt(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var Qn =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' ',
		),
	fy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Qn));
function vs(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), ah(r, t, void 0, e), (e.currentTarget = null);
}
function Dc(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			o = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var l = r.length - 1; 0 <= l; l--) {
					var u = r[l],
						s = u.instance,
						a = u.currentTarget;
					if (((u = u.listener), s !== i && o.isPropagationStopped())) break e;
					vs(o, u, a), (i = s);
				}
			else
				for (l = 0; l < r.length; l++) {
					if (
						((u = r[l]),
						(s = u.instance),
						(a = u.currentTarget),
						(u = u.listener),
						s !== i && o.isPropagationStopped())
					)
						break e;
					vs(o, u, a), (i = s);
				}
		}
	}
	if (fo) throw ((e = el), (fo = !1), (el = null), e);
}
function X(e, t) {
	var n = t[cl];
	n === void 0 && (n = t[cl] = new Set());
	var r = e + '__bubble';
	n.has(r) || (Fc(t, e, 2, !1), n.add(r));
}
function wi(e, t, n) {
	var r = 0;
	t && (r |= 4), Fc(n, e, r, t);
}
var Ir = '_reactListening' + Math.random().toString(36).slice(2);
function fr(e) {
	if (!e[Ir]) {
		(e[Ir] = !0),
			Ha.forEach(function (n) {
				n !== 'selectionchange' && (fy.has(n) || wi(n, !1, e), wi(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Ir] || ((t[Ir] = !0), wi('selectionchange', !1, t));
	}
}
function Fc(e, t, n, r) {
	switch (vc(t)) {
		case 1:
			var o = Ch;
			break;
		case 4:
			o = Nh;
			break;
		default:
			o = ql;
	}
	(n = o.bind(null, t, n, e)),
		(o = void 0),
		!qi ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(o = !0),
		r
			? o !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: o })
				: e.addEventListener(t, n, !0)
			: o !== void 0
			? e.addEventListener(t, n, { passive: o })
			: e.addEventListener(t, n, !1);
}
function zi(e, t, n, r, o) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var l = r.tag;
			if (l === 3 || l === 4) {
				var u = r.stateNode.containerInfo;
				if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
				if (l === 4)
					for (l = r.return; l !== null; ) {
						var s = l.tag;
						if (
							(s === 3 || s === 4) &&
							((s = l.stateNode.containerInfo),
							s === o || (s.nodeType === 8 && s.parentNode === o))
						)
							return;
						l = l.return;
					}
				for (; u !== null; ) {
					if (((l = Bt(u)), l === null)) return;
					if (((s = l.tag), s === 5 || s === 6)) {
						r = i = l;
						continue e;
					}
					u = u.parentNode;
				}
			}
			r = r.return;
		}
	oc(function () {
		var a = i,
			h = Gl(n),
			p = [];
		e: {
			var y = Mc.get(e);
			if (y !== void 0) {
				var v = tu,
					m = e;
				switch (e) {
					case 'keypress':
						if (eo(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						v = Bh;
						break;
					case 'focusin':
						(m = 'focus'), (v = pi);
						break;
					case 'focusout':
						(m = 'blur'), (v = pi);
						break;
					case 'beforeblur':
					case 'afterblur':
						v = pi;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						v = ls;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						v = Ph;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						v = Wh;
						break;
					case Pc:
					case Rc:
					case Oc:
						v = Lh;
						break;
					case Lc:
						v = Kh;
						break;
					case 'scroll':
						v = _h;
						break;
					case 'wheel':
						v = Xh;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						v = Dh;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						v = ss;
				}
				var w = (t & 4) !== 0,
					$ = !w && e === 'scroll',
					d = w ? (y !== null ? y + 'Capture' : null) : y;
				w = [];
				for (var c = a, f; c !== null; ) {
					f = c;
					var z = f.stateNode;
					if (
						(f.tag === 5 &&
							z !== null &&
							((f = z),
							d !== null && ((z = ir(c, d)), z != null && w.push(dr(c, z, f)))),
						$)
					)
						break;
					c = c.return;
				}
				0 < w.length &&
					((y = new v(y, m, null, n, h)), p.push({ event: y, listeners: w }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((y = e === 'mouseover' || e === 'pointerover'),
					(v = e === 'mouseout' || e === 'pointerout'),
					y &&
						n !== bi &&
						(m = n.relatedTarget || n.fromElement) &&
						(Bt(m) || m[ct]))
				)
					break e;
				if (
					(v || y) &&
					((y =
						h.window === h
							? h
							: (y = h.ownerDocument)
							? y.defaultView || y.parentWindow
							: window),
					v
						? ((m = n.relatedTarget || n.toElement),
						  (v = a),
						  (m = m ? Bt(m) : null),
						  m !== null &&
								(($ = qt(m)), m !== $ || (m.tag !== 5 && m.tag !== 6)) &&
								(m = null))
						: ((v = null), (m = a)),
					v !== m)
				) {
					if (
						((w = ls),
						(z = 'onMouseLeave'),
						(d = 'onMouseEnter'),
						(c = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((w = ss),
							(z = 'onPointerLeave'),
							(d = 'onPointerEnter'),
							(c = 'pointer')),
						($ = v == null ? y : sn(v)),
						(f = m == null ? y : sn(m)),
						(y = new w(z, c + 'leave', v, n, h)),
						(y.target = $),
						(y.relatedTarget = f),
						(z = null),
						Bt(h) === a &&
							((w = new w(d, c + 'enter', m, n, h)),
							(w.target = f),
							(w.relatedTarget = $),
							(z = w)),
						($ = z),
						v && m)
					)
						t: {
							for (w = v, d = m, c = 0, f = w; f; f = tn(f)) c++;
							for (f = 0, z = d; z; z = tn(z)) f++;
							for (; 0 < c - f; ) (w = tn(w)), c--;
							for (; 0 < f - c; ) (d = tn(d)), f--;
							for (; c--; ) {
								if (w === d || (d !== null && w === d.alternate)) break t;
								(w = tn(w)), (d = tn(d));
							}
							w = null;
						}
					else w = null;
					v !== null && ws(p, y, v, w, !1),
						m !== null && $ !== null && ws(p, $, m, w, !0);
				}
			}
			e: {
				if (
					((y = a ? sn(a) : window),
					(v = y.nodeName && y.nodeName.toLowerCase()),
					v === 'select' || (v === 'input' && y.type === 'file'))
				)
					var C = ty;
				else if (fs(y))
					if (Ec) C = iy;
					else {
						C = ry;
						var _ = ny;
					}
				else
					(v = y.nodeName) &&
						v.toLowerCase() === 'input' &&
						(y.type === 'checkbox' || y.type === 'radio') &&
						(C = oy);
				if (C && (C = C(e, a))) {
					kc(p, C, n, h);
					break e;
				}
				_ && _(e, y, a),
					e === 'focusout' &&
						(_ = y._wrapperState) &&
						_.controlled &&
						y.type === 'number' &&
						Ki(y, 'number', y.value);
			}
			switch (((_ = a ? sn(a) : window), e)) {
				case 'focusin':
					(fs(_) || _.contentEditable === 'true') &&
						((ln = _), (ol = a), (Jn = null));
					break;
				case 'focusout':
					Jn = ol = ln = null;
					break;
				case 'mousedown':
					il = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(il = !1), ms(p, n, h);
					break;
				case 'selectionchange':
					if (sy) break;
				case 'keydown':
				case 'keyup':
					ms(p, n, h);
			}
			var L;
			if (ru)
				e: {
					switch (e) {
						case 'compositionstart':
							var D = 'onCompositionStart';
							break e;
						case 'compositionend':
							D = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							D = 'onCompositionUpdate';
							break e;
					}
					D = void 0;
				}
			else
				on
					? Sc(e, n) && (D = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (D = 'onCompositionStart');
			D &&
				(zc &&
					n.locale !== 'ko' &&
					(on || D !== 'onCompositionStart'
						? D === 'onCompositionEnd' && on && (L = wc())
						: ((kt = h),
						  (eu = 'value' in kt ? kt.value : kt.textContent),
						  (on = !0))),
				(_ = go(a, D)),
				0 < _.length &&
					((D = new us(D, e, null, n, h)),
					p.push({ event: D, listeners: _ }),
					L ? (D.data = L) : ((L = xc(n)), L !== null && (D.data = L)))),
				(L = Jh ? bh(e, n) : Zh(e, n)) &&
					((a = go(a, 'onBeforeInput')),
					0 < a.length &&
						((h = new us('onBeforeInput', 'beforeinput', null, n, h)),
						p.push({ event: h, listeners: a }),
						(h.data = L)));
		}
		Dc(p, t);
	});
}
function dr(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function go(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var o = e,
			i = o.stateNode;
		o.tag === 5 &&
			i !== null &&
			((o = i),
			(i = ir(e, n)),
			i != null && r.unshift(dr(e, i, o)),
			(i = ir(e, t)),
			i != null && r.push(dr(e, i, o))),
			(e = e.return);
	}
	return r;
}
function tn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function ws(e, t, n, r, o) {
	for (var i = t._reactName, l = []; n !== null && n !== r; ) {
		var u = n,
			s = u.alternate,
			a = u.stateNode;
		if (s !== null && s === r) break;
		u.tag === 5 &&
			a !== null &&
			((u = a),
			o
				? ((s = ir(n, i)), s != null && l.unshift(dr(n, s, u)))
				: o || ((s = ir(n, i)), s != null && l.push(dr(n, s, u)))),
			(n = n.return);
	}
	l.length !== 0 && e.push({ event: t, listeners: l });
}
var dy = /\r\n?/g,
	py = /\u0000|\uFFFD/g;
function zs(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			dy,
			`
`,
		)
		.replace(py, '');
}
function jr(e, t, n) {
	if (((t = zs(t)), zs(e) !== t && n)) throw Error(x(425));
}
function vo() {}
var ll = null,
	ul = null;
function sl(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var al = typeof setTimeout == 'function' ? setTimeout : void 0,
	hy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Ss = typeof Promise == 'function' ? Promise : void 0,
	yy =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Ss < 'u'
			? function (e) {
					return Ss.resolve(null).then(e).catch(my);
			  }
			: al;
function my(e) {
	setTimeout(function () {
		throw e;
	});
}
function Si(e, t) {
	var n = t,
		r = 0;
	do {
		var o = n.nextSibling;
		if ((e.removeChild(n), o && o.nodeType === 8))
			if (((n = o.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(o), sr(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = o;
	} while (n);
	sr(t);
}
function Tt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function xs(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e;
				t--;
			} else n === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Ln = Math.random().toString(36).slice(2),
	qe = '__reactFiber$' + Ln,
	pr = '__reactProps$' + Ln,
	ct = '__reactContainer$' + Ln,
	cl = '__reactEvents$' + Ln,
	gy = '__reactListeners$' + Ln,
	vy = '__reactHandles$' + Ln;
function Bt(e) {
	var t = e[qe];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[ct] || n[qe])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = xs(e); e !== null; ) {
					if ((n = e[qe])) return n;
					e = xs(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function Nr(e) {
	return (
		(e = e[qe] || e[ct]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function sn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(x(33));
}
function Vo(e) {
	return e[pr] || null;
}
var fl = [],
	an = -1;
function $t(e) {
	return { current: e };
}
function G(e) {
	0 > an || ((e.current = fl[an]), (fl[an] = null), an--);
}
function Y(e, t) {
	an++, (fl[an] = e.current), (e.current = t);
}
var Ft = {},
	ge = $t(Ft),
	Ce = $t(!1),
	Yt = Ft;
function kn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Ft;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var o = {},
		i;
	for (i in n) o[i] = t[i];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		o
	);
}
function Ne(e) {
	return (e = e.childContextTypes), e != null;
}
function wo() {
	G(Ce), G(ge);
}
function ks(e, t, n) {
	if (ge.current !== Ft) throw Error(x(168));
	Y(ge, t), Y(Ce, n);
}
function Ac(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var o in r) if (!(o in t)) throw Error(x(108, nh(e) || 'Unknown', o));
	return q({}, n, r);
}
function zo(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
		(Yt = ge.current),
		Y(ge, e),
		Y(Ce, Ce.current),
		!0
	);
}
function Es(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(x(169));
	n
		? ((e = Ac(e, t, Yt)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  G(Ce),
		  G(ge),
		  Y(ge, e))
		: G(Ce),
		Y(Ce, n);
}
var ot = null,
	Wo = !1,
	xi = !1;
function $c(e) {
	ot === null ? (ot = [e]) : ot.push(e);
}
function wy(e) {
	(Wo = !0), $c(e);
}
function It() {
	if (!xi && ot !== null) {
		xi = !0;
		var e = 0,
			t = K;
		try {
			var n = ot;
			for (K = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(ot = null), (Wo = !1);
		} catch (o) {
			throw (ot !== null && (ot = ot.slice(e + 1)), sc(Jl, It), o);
		} finally {
			(K = t), (xi = !1);
		}
	}
	return null;
}
var cn = [],
	fn = 0,
	So = null,
	xo = 0,
	$e = [],
	Ie = 0,
	Xt = null,
	it = 1,
	lt = '';
function jt(e, t) {
	(cn[fn++] = xo), (cn[fn++] = So), (So = e), (xo = t);
}
function Ic(e, t, n) {
	($e[Ie++] = it), ($e[Ie++] = lt), ($e[Ie++] = Xt), (Xt = e);
	var r = it;
	e = lt;
	var o = 32 - Ye(r) - 1;
	(r &= ~(1 << o)), (n += 1);
	var i = 32 - Ye(t) + o;
	if (30 < i) {
		var l = o - (o % 5);
		(i = (r & ((1 << l) - 1)).toString(32)),
			(r >>= l),
			(o -= l),
			(it = (1 << (32 - Ye(t) + o)) | (n << o) | r),
			(lt = i + e);
	} else (it = (1 << i) | (n << o) | r), (lt = e);
}
function iu(e) {
	e.return !== null && (jt(e, 1), Ic(e, 1, 0));
}
function lu(e) {
	for (; e === So; )
		(So = cn[--fn]), (cn[fn] = null), (xo = cn[--fn]), (cn[fn] = null);
	for (; e === Xt; )
		(Xt = $e[--Ie]),
			($e[Ie] = null),
			(lt = $e[--Ie]),
			($e[Ie] = null),
			(it = $e[--Ie]),
			($e[Ie] = null);
}
var Me = null,
	Le = null,
	J = !1,
	Ke = null;
function jc(e, t) {
	var n = je(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Cs(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Me = e), (Le = Tt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Me = e), (Le = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Xt !== null ? { id: it, overflow: lt } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = je(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (Me = e),
					  (Le = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function dl(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pl(e) {
	if (J) {
		var t = Le;
		if (t) {
			var n = t;
			if (!Cs(e, t)) {
				if (dl(e)) throw Error(x(418));
				t = Tt(n.nextSibling);
				var r = Me;
				t && Cs(e, t)
					? jc(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (J = !1), (Me = e));
			}
		} else {
			if (dl(e)) throw Error(x(418));
			(e.flags = (e.flags & -4097) | 2), (J = !1), (Me = e);
		}
	}
}
function Ns(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	Me = e;
}
function Ur(e) {
	if (e !== Me) return !1;
	if (!J) return Ns(e), (J = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !sl(e.type, e.memoizedProps))),
		t && (t = Le))
	) {
		if (dl(e)) throw (Uc(), Error(x(418)));
		for (; t; ) jc(e, t), (t = Tt(t.nextSibling));
	}
	if ((Ns(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(x(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							Le = Tt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			Le = null;
		}
	} else Le = Me ? Tt(e.stateNode.nextSibling) : null;
	return !0;
}
function Uc() {
	for (var e = Le; e; ) e = Tt(e.nextSibling);
}
function En() {
	(Le = Me = null), (J = !1);
}
function uu(e) {
	Ke === null ? (Ke = [e]) : Ke.push(e);
}
var zy = ht.ReactCurrentBatchConfig;
function We(e, t) {
	if (e && e.defaultProps) {
		(t = q({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var ko = $t(null),
	Eo = null,
	dn = null,
	su = null;
function au() {
	su = dn = Eo = null;
}
function cu(e) {
	var t = ko.current;
	G(ko), (e._currentValue = t);
}
function hl(e, t, n) {
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
function wn(e, t) {
	(Eo = e),
		(su = dn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Ee = !0), (e.firstContext = null));
}
function Be(e) {
	var t = e._currentValue;
	if (su !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), dn === null)) {
			if (Eo === null) throw Error(x(308));
			(dn = e), (Eo.dependencies = { lanes: 0, firstContext: e });
		} else dn = dn.next = e;
	return t;
}
var Ht = null;
function fu(e) {
	Ht === null ? (Ht = [e]) : Ht.push(e);
}
function Bc(e, t, n, r) {
	var o = t.interleaved;
	return (
		o === null ? ((n.next = n), fu(t)) : ((n.next = o.next), (o.next = n)),
		(t.interleaved = n),
		ft(e, r)
	);
}
function ft(e, t) {
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
var zt = !1;
function du(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Hc(e, t) {
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
function st(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function Pt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), V & 2)) {
		var o = r.pending;
		return (
			o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
			(r.pending = t),
			ft(e, n)
		);
	}
	return (
		(o = r.interleaved),
		o === null ? ((t.next = t), fu(r)) : ((t.next = o.next), (o.next = t)),
		(r.interleaved = t),
		ft(e, n)
	);
}
function to(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n);
	}
}
function _s(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var o = null,
			i = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var l = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
			} while (n !== null);
			i === null ? (o = i = t) : (i = i.next = t);
		} else o = i = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: o,
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
function Co(e, t, n, r) {
	var o = e.updateQueue;
	zt = !1;
	var i = o.firstBaseUpdate,
		l = o.lastBaseUpdate,
		u = o.shared.pending;
	if (u !== null) {
		o.shared.pending = null;
		var s = u,
			a = s.next;
		(s.next = null), l === null ? (i = a) : (l.next = a), (l = s);
		var h = e.alternate;
		h !== null &&
			((h = h.updateQueue),
			(u = h.lastBaseUpdate),
			u !== l &&
				(u === null ? (h.firstBaseUpdate = a) : (u.next = a),
				(h.lastBaseUpdate = s)));
	}
	if (i !== null) {
		var p = o.baseState;
		(l = 0), (h = a = s = null), (u = i);
		do {
			var y = u.lane,
				v = u.eventTime;
			if ((r & y) === y) {
				h !== null &&
					(h = h.next =
						{
							eventTime: v,
							lane: 0,
							tag: u.tag,
							payload: u.payload,
							callback: u.callback,
							next: null,
						});
				e: {
					var m = e,
						w = u;
					switch (((y = t), (v = n), w.tag)) {
						case 1:
							if (((m = w.payload), typeof m == 'function')) {
								p = m.call(v, p, y);
								break e;
							}
							p = m;
							break e;
						case 3:
							m.flags = (m.flags & -65537) | 128;
						case 0:
							if (
								((m = w.payload),
								(y = typeof m == 'function' ? m.call(v, p, y) : m),
								y == null)
							)
								break e;
							p = q({}, p, y);
							break e;
						case 2:
							zt = !0;
					}
				}
				u.callback !== null &&
					u.lane !== 0 &&
					((e.flags |= 64),
					(y = o.effects),
					y === null ? (o.effects = [u]) : y.push(u));
			} else
				(v = {
					eventTime: v,
					lane: y,
					tag: u.tag,
					payload: u.payload,
					callback: u.callback,
					next: null,
				}),
					h === null ? ((a = h = v), (s = p)) : (h = h.next = v),
					(l |= y);
			if (((u = u.next), u === null)) {
				if (((u = o.shared.pending), u === null)) break;
				(y = u),
					(u = y.next),
					(y.next = null),
					(o.lastBaseUpdate = y),
					(o.shared.pending = null);
			}
		} while (1);
		if (
			(h === null && (s = p),
			(o.baseState = s),
			(o.firstBaseUpdate = a),
			(o.lastBaseUpdate = h),
			(t = o.shared.interleaved),
			t !== null)
		) {
			o = t;
			do (l |= o.lane), (o = o.next);
			while (o !== t);
		} else i === null && (o.shared.lanes = 0);
		(Jt |= l), (e.lanes = l), (e.memoizedState = p);
	}
}
function Ts(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				o = r.callback;
			if (o !== null) {
				if (((r.callback = null), (r = n), typeof o != 'function'))
					throw Error(x(191, o));
				o.call(r);
			}
		}
}
var Vc = new Ba.Component().refs;
function yl(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : q({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Qo = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? qt(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = we(),
			o = Ot(e),
			i = st(r, o);
		(i.payload = t),
			n != null && (i.callback = n),
			(t = Pt(e, i, o)),
			t !== null && (Xe(t, e, o, r), to(t, e, o));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = we(),
			o = Ot(e),
			i = st(r, o);
		(i.tag = 1),
			(i.payload = t),
			n != null && (i.callback = n),
			(t = Pt(e, i, o)),
			t !== null && (Xe(t, e, o, r), to(t, e, o));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = we(),
			r = Ot(e),
			o = st(n, r);
		(o.tag = 2),
			t != null && (o.callback = t),
			(t = Pt(e, o, r)),
			t !== null && (Xe(t, e, r, n), to(t, e, r));
	},
};
function Ps(e, t, n, r, o, i, l) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, i, l)
			: t.prototype && t.prototype.isPureReactComponent
			? !cr(n, r) || !cr(o, i)
			: !0
	);
}
function Wc(e, t, n) {
	var r = !1,
		o = Ft,
		i = t.contextType;
	return (
		typeof i == 'object' && i !== null
			? (i = Be(i))
			: ((o = Ne(t) ? Yt : ge.current),
			  (r = t.contextTypes),
			  (i = (r = r != null) ? kn(e, o) : Ft)),
		(t = new t(n, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Qo),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = o),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function Rs(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Qo.enqueueReplaceState(t, t.state, null);
}
function ml(e, t, n, r) {
	var o = e.stateNode;
	(o.props = n), (o.state = e.memoizedState), (o.refs = Vc), du(e);
	var i = t.contextType;
	typeof i == 'object' && i !== null
		? (o.context = Be(i))
		: ((i = Ne(t) ? Yt : ge.current), (o.context = kn(e, i))),
		(o.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == 'function' && (yl(e, t, i, n), (o.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function' ||
			(typeof o.UNSAFE_componentWillMount != 'function' &&
				typeof o.componentWillMount != 'function') ||
			((t = o.state),
			typeof o.componentWillMount == 'function' && o.componentWillMount(),
			typeof o.UNSAFE_componentWillMount == 'function' &&
				o.UNSAFE_componentWillMount(),
			t !== o.state && Qo.enqueueReplaceState(o, o.state, null),
			Co(e, n, o, r),
			(o.state = e.memoizedState)),
		typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function jn(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(x(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(x(147, e));
			var o = r,
				i = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === i
				? t.ref
				: ((t = function (l) {
						var u = o.refs;
						u === Vc && (u = o.refs = {}),
							l === null ? delete u[i] : (u[i] = l);
				  }),
				  (t._stringRef = i),
				  t);
		}
		if (typeof e != 'string') throw Error(x(284));
		if (!n._owner) throw Error(x(290, e));
	}
	return e;
}
function Br(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			x(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e,
			),
		))
	);
}
function Os(e) {
	var t = e._init;
	return t(e._payload);
}
function Qc(e) {
	function t(d, c) {
		if (e) {
			var f = d.deletions;
			f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
		}
	}
	function n(d, c) {
		if (!e) return null;
		for (; c !== null; ) t(d, c), (c = c.sibling);
		return null;
	}
	function r(d, c) {
		for (d = new Map(); c !== null; )
			c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
		return d;
	}
	function o(d, c) {
		return (d = Lt(d, c)), (d.index = 0), (d.sibling = null), d;
	}
	function i(d, c, f) {
		return (
			(d.index = f),
			e
				? ((f = d.alternate),
				  f !== null
						? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
						: ((d.flags |= 2), c))
				: ((d.flags |= 1048576), c)
		);
	}
	function l(d) {
		return e && d.alternate === null && (d.flags |= 2), d;
	}
	function u(d, c, f, z) {
		return c === null || c.tag !== 6
			? ((c = Pi(f, d.mode, z)), (c.return = d), c)
			: ((c = o(c, f)), (c.return = d), c);
	}
	function s(d, c, f, z) {
		var C = f.type;
		return C === rn
			? h(d, c, f.props.children, z, f.key)
			: c !== null &&
			  (c.elementType === C ||
					(typeof C == 'object' &&
						C !== null &&
						C.$$typeof === wt &&
						Os(C) === c.type))
			? ((z = o(c, f.props)), (z.ref = jn(d, c, f)), (z.return = d), z)
			: ((z = uo(f.type, f.key, f.props, null, d.mode, z)),
			  (z.ref = jn(d, c, f)),
			  (z.return = d),
			  z);
	}
	function a(d, c, f, z) {
		return c === null ||
			c.tag !== 4 ||
			c.stateNode.containerInfo !== f.containerInfo ||
			c.stateNode.implementation !== f.implementation
			? ((c = Ri(f, d.mode, z)), (c.return = d), c)
			: ((c = o(c, f.children || [])), (c.return = d), c);
	}
	function h(d, c, f, z, C) {
		return c === null || c.tag !== 7
			? ((c = Qt(f, d.mode, z, C)), (c.return = d), c)
			: ((c = o(c, f)), (c.return = d), c);
	}
	function p(d, c, f) {
		if ((typeof c == 'string' && c !== '') || typeof c == 'number')
			return (c = Pi('' + c, d.mode, f)), (c.return = d), c;
		if (typeof c == 'object' && c !== null) {
			switch (c.$$typeof) {
				case Rr:
					return (
						(f = uo(c.type, c.key, c.props, null, d.mode, f)),
						(f.ref = jn(d, null, c)),
						(f.return = d),
						f
					);
				case nn:
					return (c = Ri(c, d.mode, f)), (c.return = d), c;
				case wt:
					var z = c._init;
					return p(d, z(c._payload), f);
			}
			if (Vn(c) || Dn(c))
				return (c = Qt(c, d.mode, f, null)), (c.return = d), c;
			Br(d, c);
		}
		return null;
	}
	function y(d, c, f, z) {
		var C = c !== null ? c.key : null;
		if ((typeof f == 'string' && f !== '') || typeof f == 'number')
			return C !== null ? null : u(d, c, '' + f, z);
		if (typeof f == 'object' && f !== null) {
			switch (f.$$typeof) {
				case Rr:
					return f.key === C ? s(d, c, f, z) : null;
				case nn:
					return f.key === C ? a(d, c, f, z) : null;
				case wt:
					return (C = f._init), y(d, c, C(f._payload), z);
			}
			if (Vn(f) || Dn(f)) return C !== null ? null : h(d, c, f, z, null);
			Br(d, f);
		}
		return null;
	}
	function v(d, c, f, z, C) {
		if ((typeof z == 'string' && z !== '') || typeof z == 'number')
			return (d = d.get(f) || null), u(c, d, '' + z, C);
		if (typeof z == 'object' && z !== null) {
			switch (z.$$typeof) {
				case Rr:
					return (d = d.get(z.key === null ? f : z.key) || null), s(c, d, z, C);
				case nn:
					return (d = d.get(z.key === null ? f : z.key) || null), a(c, d, z, C);
				case wt:
					var _ = z._init;
					return v(d, c, f, _(z._payload), C);
			}
			if (Vn(z) || Dn(z)) return (d = d.get(f) || null), h(c, d, z, C, null);
			Br(c, z);
		}
		return null;
	}
	function m(d, c, f, z) {
		for (
			var C = null, _ = null, L = c, D = (c = 0), U = null;
			L !== null && D < f.length;
			D++
		) {
			L.index > D ? ((U = L), (L = null)) : (U = L.sibling);
			var M = y(d, L, f[D], z);
			if (M === null) {
				L === null && (L = U);
				break;
			}
			e && L && M.alternate === null && t(d, L),
				(c = i(M, c, D)),
				_ === null ? (C = M) : (_.sibling = M),
				(_ = M),
				(L = U);
		}
		if (D === f.length) return n(d, L), J && jt(d, D), C;
		if (L === null) {
			for (; D < f.length; D++)
				(L = p(d, f[D], z)),
					L !== null &&
						((c = i(L, c, D)), _ === null ? (C = L) : (_.sibling = L), (_ = L));
			return J && jt(d, D), C;
		}
		for (L = r(d, L); D < f.length; D++)
			(U = v(L, d, D, f[D], z)),
				U !== null &&
					(e && U.alternate !== null && L.delete(U.key === null ? D : U.key),
					(c = i(U, c, D)),
					_ === null ? (C = U) : (_.sibling = U),
					(_ = U));
		return (
			e &&
				L.forEach(function (de) {
					return t(d, de);
				}),
			J && jt(d, D),
			C
		);
	}
	function w(d, c, f, z) {
		var C = Dn(f);
		if (typeof C != 'function') throw Error(x(150));
		if (((f = C.call(f)), f == null)) throw Error(x(151));
		for (
			var _ = (C = null), L = c, D = (c = 0), U = null, M = f.next();
			L !== null && !M.done;
			D++, M = f.next()
		) {
			L.index > D ? ((U = L), (L = null)) : (U = L.sibling);
			var de = y(d, L, M.value, z);
			if (de === null) {
				L === null && (L = U);
				break;
			}
			e && L && de.alternate === null && t(d, L),
				(c = i(de, c, D)),
				_ === null ? (C = de) : (_.sibling = de),
				(_ = de),
				(L = U);
		}
		if (M.done) return n(d, L), J && jt(d, D), C;
		if (L === null) {
			for (; !M.done; D++, M = f.next())
				(M = p(d, M.value, z)),
					M !== null &&
						((c = i(M, c, D)), _ === null ? (C = M) : (_.sibling = M), (_ = M));
			return J && jt(d, D), C;
		}
		for (L = r(d, L); !M.done; D++, M = f.next())
			(M = v(L, d, D, M.value, z)),
				M !== null &&
					(e && M.alternate !== null && L.delete(M.key === null ? D : M.key),
					(c = i(M, c, D)),
					_ === null ? (C = M) : (_.sibling = M),
					(_ = M));
		return (
			e &&
				L.forEach(function (yt) {
					return t(d, yt);
				}),
			J && jt(d, D),
			C
		);
	}
	function $(d, c, f, z) {
		if (
			(typeof f == 'object' &&
				f !== null &&
				f.type === rn &&
				f.key === null &&
				(f = f.props.children),
			typeof f == 'object' && f !== null)
		) {
			switch (f.$$typeof) {
				case Rr:
					e: {
						for (var C = f.key, _ = c; _ !== null; ) {
							if (_.key === C) {
								if (((C = f.type), C === rn)) {
									if (_.tag === 7) {
										n(d, _.sibling),
											(c = o(_, f.props.children)),
											(c.return = d),
											(d = c);
										break e;
									}
								} else if (
									_.elementType === C ||
									(typeof C == 'object' &&
										C !== null &&
										C.$$typeof === wt &&
										Os(C) === _.type)
								) {
									n(d, _.sibling),
										(c = o(_, f.props)),
										(c.ref = jn(d, _, f)),
										(c.return = d),
										(d = c);
									break e;
								}
								n(d, _);
								break;
							} else t(d, _);
							_ = _.sibling;
						}
						f.type === rn
							? ((c = Qt(f.props.children, d.mode, z, f.key)),
							  (c.return = d),
							  (d = c))
							: ((z = uo(f.type, f.key, f.props, null, d.mode, z)),
							  (z.ref = jn(d, c, f)),
							  (z.return = d),
							  (d = z));
					}
					return l(d);
				case nn:
					e: {
						for (_ = f.key; c !== null; ) {
							if (c.key === _)
								if (
									c.tag === 4 &&
									c.stateNode.containerInfo === f.containerInfo &&
									c.stateNode.implementation === f.implementation
								) {
									n(d, c.sibling),
										(c = o(c, f.children || [])),
										(c.return = d),
										(d = c);
									break e;
								} else {
									n(d, c);
									break;
								}
							else t(d, c);
							c = c.sibling;
						}
						(c = Ri(f, d.mode, z)), (c.return = d), (d = c);
					}
					return l(d);
				case wt:
					return (_ = f._init), $(d, c, _(f._payload), z);
			}
			if (Vn(f)) return m(d, c, f, z);
			if (Dn(f)) return w(d, c, f, z);
			Br(d, f);
		}
		return (typeof f == 'string' && f !== '') || typeof f == 'number'
			? ((f = '' + f),
			  c !== null && c.tag === 6
					? (n(d, c.sibling), (c = o(c, f)), (c.return = d), (d = c))
					: (n(d, c), (c = Pi(f, d.mode, z)), (c.return = d), (d = c)),
			  l(d))
			: n(d, c);
	}
	return $;
}
var Cn = Qc(!0),
	Kc = Qc(!1),
	_r = {},
	nt = $t(_r),
	hr = $t(_r),
	yr = $t(_r);
function Vt(e) {
	if (e === _r) throw Error(x(174));
	return e;
}
function pu(e, t) {
	switch ((Y(yr, t), Y(hr, e), Y(nt, _r), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Xi(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Xi(t, e));
	}
	G(nt), Y(nt, t);
}
function Nn() {
	G(nt), G(hr), G(yr);
}
function Yc(e) {
	Vt(yr.current);
	var t = Vt(nt.current),
		n = Xi(t, e.type);
	t !== n && (Y(hr, e), Y(nt, n));
}
function hu(e) {
	hr.current === e && (G(nt), G(hr));
}
var b = $t(0);
function No(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
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
var ki = [];
function yu() {
	for (var e = 0; e < ki.length; e++)
		ki[e]._workInProgressVersionPrimary = null;
	ki.length = 0;
}
var no = ht.ReactCurrentDispatcher,
	Ei = ht.ReactCurrentBatchConfig,
	Gt = 0,
	Z = null,
	oe = null,
	ue = null,
	_o = !1,
	bn = !1,
	mr = 0,
	Sy = 0;
function he() {
	throw Error(x(321));
}
function mu(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Ge(e[n], t[n])) return !1;
	return !0;
}
function gu(e, t, n, r, o, i) {
	if (
		((Gt = i),
		(Z = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(no.current = e === null || e.memoizedState === null ? Cy : Ny),
		(e = n(r, o)),
		bn)
	) {
		i = 0;
		do {
			if (((bn = !1), (mr = 0), 25 <= i)) throw Error(x(301));
			(i += 1),
				(ue = oe = null),
				(t.updateQueue = null),
				(no.current = _y),
				(e = n(r, o));
		} while (bn);
	}
	if (
		((no.current = To),
		(t = oe !== null && oe.next !== null),
		(Gt = 0),
		(ue = oe = Z = null),
		(_o = !1),
		t)
	)
		throw Error(x(300));
	return e;
}
function vu() {
	var e = mr !== 0;
	return (mr = 0), e;
}
function Ze() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return ue === null ? (Z.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function He() {
	if (oe === null) {
		var e = Z.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = oe.next;
	var t = ue === null ? Z.memoizedState : ue.next;
	if (t !== null) (ue = t), (oe = e);
	else {
		if (e === null) throw Error(x(310));
		(oe = e),
			(e = {
				memoizedState: oe.memoizedState,
				baseState: oe.baseState,
				baseQueue: oe.baseQueue,
				queue: oe.queue,
				next: null,
			}),
			ue === null ? (Z.memoizedState = ue = e) : (ue = ue.next = e);
	}
	return ue;
}
function gr(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function Ci(e) {
	var t = He(),
		n = t.queue;
	if (n === null) throw Error(x(311));
	n.lastRenderedReducer = e;
	var r = oe,
		o = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (o !== null) {
			var l = o.next;
			(o.next = i.next), (i.next = l);
		}
		(r.baseQueue = o = i), (n.pending = null);
	}
	if (o !== null) {
		(i = o.next), (r = r.baseState);
		var u = (l = null),
			s = null,
			a = i;
		do {
			var h = a.lane;
			if ((Gt & h) === h)
				s !== null &&
					(s = s.next =
						{
							lane: 0,
							action: a.action,
							hasEagerState: a.hasEagerState,
							eagerState: a.eagerState,
							next: null,
						}),
					(r = a.hasEagerState ? a.eagerState : e(r, a.action));
			else {
				var p = {
					lane: h,
					action: a.action,
					hasEagerState: a.hasEagerState,
					eagerState: a.eagerState,
					next: null,
				};
				s === null ? ((u = s = p), (l = r)) : (s = s.next = p),
					(Z.lanes |= h),
					(Jt |= h);
			}
			a = a.next;
		} while (a !== null && a !== i);
		s === null ? (l = r) : (s.next = u),
			Ge(r, t.memoizedState) || (Ee = !0),
			(t.memoizedState = r),
			(t.baseState = l),
			(t.baseQueue = s),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		o = e;
		do (i = o.lane), (Z.lanes |= i), (Jt |= i), (o = o.next);
		while (o !== e);
	} else o === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Ni(e) {
	var t = He(),
		n = t.queue;
	if (n === null) throw Error(x(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		o = n.pending,
		i = t.memoizedState;
	if (o !== null) {
		n.pending = null;
		var l = (o = o.next);
		do (i = e(i, l.action)), (l = l.next);
		while (l !== o);
		Ge(i, t.memoizedState) || (Ee = !0),
			(t.memoizedState = i),
			t.baseQueue === null && (t.baseState = i),
			(n.lastRenderedState = i);
	}
	return [i, r];
}
function Xc() {}
function Gc(e, t) {
	var n = Z,
		r = He(),
		o = t(),
		i = !Ge(r.memoizedState, o);
	if (
		(i && ((r.memoizedState = o), (Ee = !0)),
		(r = r.queue),
		wu(Zc.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (ue !== null && ue.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			vr(9, bc.bind(null, n, r, o, t), void 0, null),
			se === null)
		)
			throw Error(x(349));
		Gt & 30 || Jc(n, t, o);
	}
	return o;
}
function Jc(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Z.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Z.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function bc(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), qc(t) && ef(e);
}
function Zc(e, t, n) {
	return n(function () {
		qc(t) && ef(e);
	});
}
function qc(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Ge(e, n);
	} catch {
		return !0;
	}
}
function ef(e) {
	var t = ft(e, 1);
	t !== null && Xe(t, e, 1, -1);
}
function Ls(e) {
	var t = Ze();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: gr,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = Ey.bind(null, Z, e)),
		[t.memoizedState, e]
	);
}
function vr(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Z.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Z.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function tf() {
	return He().memoizedState;
}
function ro(e, t, n, r) {
	var o = Ze();
	(Z.flags |= e),
		(o.memoizedState = vr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ko(e, t, n, r) {
	var o = He();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (oe !== null) {
		var l = oe.memoizedState;
		if (((i = l.destroy), r !== null && mu(r, l.deps))) {
			o.memoizedState = vr(t, n, i, r);
			return;
		}
	}
	(Z.flags |= e), (o.memoizedState = vr(1 | t, n, i, r));
}
function Ms(e, t) {
	return ro(8390656, 8, e, t);
}
function wu(e, t) {
	return Ko(2048, 8, e, t);
}
function nf(e, t) {
	return Ko(4, 2, e, t);
}
function rf(e, t) {
	return Ko(4, 4, e, t);
}
function of(e, t) {
	if (typeof t == 'function')
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
function lf(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Ko(4, 4, of.bind(null, t, e), n)
	);
}
function zu() {}
function uf(e, t) {
	var n = He();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && mu(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function sf(e, t) {
	var n = He();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && mu(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function af(e, t, n) {
	return Gt & 21
		? (Ge(n, t) || ((n = fc()), (Z.lanes |= n), (Jt |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n));
}
function xy(e, t) {
	var n = K;
	(K = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Ei.transition;
	Ei.transition = {};
	try {
		e(!1), t();
	} finally {
		(K = n), (Ei.transition = r);
	}
}
function cf() {
	return He().memoizedState;
}
function ky(e, t, n) {
	var r = Ot(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		ff(e))
	)
		df(t, n);
	else if (((n = Bc(e, t, n, r)), n !== null)) {
		var o = we();
		Xe(n, e, r, o), pf(n, t, r);
	}
}
function Ey(e, t, n) {
	var r = Ot(e),
		o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (ff(e)) df(t, o);
	else {
		var i = e.alternate;
		if (
			e.lanes === 0 &&
			(i === null || i.lanes === 0) &&
			((i = t.lastRenderedReducer), i !== null)
		)
			try {
				var l = t.lastRenderedState,
					u = i(l, n);
				if (((o.hasEagerState = !0), (o.eagerState = u), Ge(u, l))) {
					var s = t.interleaved;
					s === null
						? ((o.next = o), fu(t))
						: ((o.next = s.next), (s.next = o)),
						(t.interleaved = o);
					return;
				}
			} catch {
			} finally {
			}
		(n = Bc(e, t, o, r)),
			n !== null && ((o = we()), Xe(n, e, r, o), pf(n, t, r));
	}
}
function ff(e) {
	var t = e.alternate;
	return e === Z || (t !== null && t === Z);
}
function df(e, t) {
	bn = _o = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function pf(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n);
	}
}
var To = {
		readContext: Be,
		useCallback: he,
		useContext: he,
		useEffect: he,
		useImperativeHandle: he,
		useInsertionEffect: he,
		useLayoutEffect: he,
		useMemo: he,
		useReducer: he,
		useRef: he,
		useState: he,
		useDebugValue: he,
		useDeferredValue: he,
		useTransition: he,
		useMutableSource: he,
		useSyncExternalStore: he,
		useId: he,
		unstable_isNewReconciler: !1,
	},
	Cy = {
		readContext: Be,
		useCallback: function (e, t) {
			return (Ze().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Be,
		useEffect: Ms,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				ro(4194308, 4, of.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return ro(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return ro(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Ze();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = Ze();
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
				(e = e.dispatch = ky.bind(null, Z, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Ze();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Ls,
		useDebugValue: zu,
		useDeferredValue: function (e) {
			return (Ze().memoizedState = e);
		},
		useTransition: function () {
			var e = Ls(!1),
				t = e[0];
			return (e = xy.bind(null, e[1])), (Ze().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Z,
				o = Ze();
			if (J) {
				if (n === void 0) throw Error(x(407));
				n = n();
			} else {
				if (((n = t()), se === null)) throw Error(x(349));
				Gt & 30 || Jc(r, t, n);
			}
			o.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (
				(o.queue = i),
				Ms(Zc.bind(null, r, i, e), [e]),
				(r.flags |= 2048),
				vr(9, bc.bind(null, r, i, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Ze(),
				t = se.identifierPrefix;
			if (J) {
				var n = lt,
					r = it;
				(n = (r & ~(1 << (32 - Ye(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = mr++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = Sy++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	Ny = {
		readContext: Be,
		useCallback: uf,
		useContext: Be,
		useEffect: wu,
		useImperativeHandle: lf,
		useInsertionEffect: nf,
		useLayoutEffect: rf,
		useMemo: sf,
		useReducer: Ci,
		useRef: tf,
		useState: function () {
			return Ci(gr);
		},
		useDebugValue: zu,
		useDeferredValue: function (e) {
			var t = He();
			return af(t, oe.memoizedState, e);
		},
		useTransition: function () {
			var e = Ci(gr)[0],
				t = He().memoizedState;
			return [e, t];
		},
		useMutableSource: Xc,
		useSyncExternalStore: Gc,
		useId: cf,
		unstable_isNewReconciler: !1,
	},
	_y = {
		readContext: Be,
		useCallback: uf,
		useContext: Be,
		useEffect: wu,
		useImperativeHandle: lf,
		useInsertionEffect: nf,
		useLayoutEffect: rf,
		useMemo: sf,
		useReducer: Ni,
		useRef: tf,
		useState: function () {
			return Ni(gr);
		},
		useDebugValue: zu,
		useDeferredValue: function (e) {
			var t = He();
			return oe === null ? (t.memoizedState = e) : af(t, oe.memoizedState, e);
		},
		useTransition: function () {
			var e = Ni(gr)[0],
				t = He().memoizedState;
			return [e, t];
		},
		useMutableSource: Xc,
		useSyncExternalStore: Gc,
		useId: cf,
		unstable_isNewReconciler: !1,
	};
function _n(e, t) {
	try {
		var n = '',
			r = t;
		do (n += th(r)), (r = r.return);
		while (r);
		var o = n;
	} catch (i) {
		o =
			`
Error generating stack: ` +
			i.message +
			`
` +
			i.stack;
	}
	return { value: e, source: t, stack: o, digest: null };
}
function _i(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gl(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Ty = typeof WeakMap == 'function' ? WeakMap : Map;
function hf(e, t, n) {
	(n = st(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			Ro || ((Ro = !0), (_l = r)), gl(e, t);
		}),
		n
	);
}
function yf(e, t, n) {
	(n = st(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var o = t.value;
		(n.payload = function () {
			return r(o);
		}),
			(n.callback = function () {
				gl(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == 'function' &&
			(n.callback = function () {
				gl(e, t),
					typeof r != 'function' &&
						(Rt === null ? (Rt = new Set([this])) : Rt.add(this));
				var l = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: l !== null ? l : '',
				});
			}),
		n
	);
}
function Ds(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Ty();
		var o = new Set();
		r.set(t, o);
	} else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
	o.has(n) || (o.add(n), (e = Hy.bind(null, e, t, n)), t.then(e, e));
}
function Fs(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function As(e, t, n, r, o) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = o), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = st(-1, 1)), (t.tag = 2), Pt(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var Py = ht.ReactCurrentOwner,
	Ee = !1;
function ve(e, t, n, r) {
	t.child = e === null ? Kc(t, null, n, r) : Cn(t, e.child, n, r);
}
function $s(e, t, n, r, o) {
	n = n.render;
	var i = t.ref;
	return (
		wn(t, o),
		(r = gu(e, t, n, r, i, o)),
		(n = vu()),
		e !== null && !Ee
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~o),
			  dt(e, t, o))
			: (J && n && iu(t), (t.flags |= 1), ve(e, t, r, o), t.child)
	);
}
function Is(e, t, n, r, o) {
	if (e === null) {
		var i = n.type;
		return typeof i == 'function' &&
			!Tu(i) &&
			i.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), mf(e, t, i, r, o))
			: ((e = uo(n.type, null, r, t, t.mode, o)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((i = e.child), !(e.lanes & o))) {
		var l = i.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : cr), n(l, r) && e.ref === t.ref)
		)
			return dt(e, t, o);
	}
	return (
		(t.flags |= 1),
		(e = Lt(i, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function mf(e, t, n, r, o) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (cr(i, r) && e.ref === t.ref)
			if (((Ee = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
				e.flags & 131072 && (Ee = !0);
			else return (t.lanes = e.lanes), dt(e, t, o);
	}
	return vl(e, t, n, r, o);
}
function gf(e, t, n) {
	var r = t.pendingProps,
		o = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				Y(hn, Re),
				(Re |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = i !== null ? i.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					Y(hn, Re),
					(Re |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = i !== null ? i.baseLanes : n),
				Y(hn, Re),
				(Re |= r);
		}
	else
		i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
			Y(hn, Re),
			(Re |= r);
	return ve(e, t, o, n), t.child;
}
function vf(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function vl(e, t, n, r, o) {
	var i = Ne(n) ? Yt : ge.current;
	return (
		(i = kn(t, i)),
		wn(t, o),
		(n = gu(e, t, n, r, i, o)),
		(r = vu()),
		e !== null && !Ee
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~o),
			  dt(e, t, o))
			: (J && r && iu(t), (t.flags |= 1), ve(e, t, n, o), t.child)
	);
}
function js(e, t, n, r, o) {
	if (Ne(n)) {
		var i = !0;
		zo(t);
	} else i = !1;
	if ((wn(t, o), t.stateNode === null))
		oo(e, t), Wc(t, n, r), ml(t, n, r, o), (r = !0);
	else if (e === null) {
		var l = t.stateNode,
			u = t.memoizedProps;
		l.props = u;
		var s = l.context,
			a = n.contextType;
		typeof a == 'object' && a !== null
			? (a = Be(a))
			: ((a = Ne(n) ? Yt : ge.current), (a = kn(t, a)));
		var h = n.getDerivedStateFromProps,
			p =
				typeof h == 'function' ||
				typeof l.getSnapshotBeforeUpdate == 'function';
		p ||
			(typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof l.componentWillReceiveProps != 'function') ||
			((u !== r || s !== a) && Rs(t, l, r, a)),
			(zt = !1);
		var y = t.memoizedState;
		(l.state = y),
			Co(t, r, l, o),
			(s = t.memoizedState),
			u !== r || y !== s || Ce.current || zt
				? (typeof h == 'function' && (yl(t, n, h, r), (s = t.memoizedState)),
				  (u = zt || Ps(t, n, u, r, y, s, a))
						? (p ||
								(typeof l.UNSAFE_componentWillMount != 'function' &&
									typeof l.componentWillMount != 'function') ||
								(typeof l.componentWillMount == 'function' &&
									l.componentWillMount(),
								typeof l.UNSAFE_componentWillMount == 'function' &&
									l.UNSAFE_componentWillMount()),
						  typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = s)),
				  (l.props = r),
				  (l.state = s),
				  (l.context = a),
				  (r = u))
				: (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(l = t.stateNode),
			Hc(e, t),
			(u = t.memoizedProps),
			(a = t.type === t.elementType ? u : We(t.type, u)),
			(l.props = a),
			(p = t.pendingProps),
			(y = l.context),
			(s = n.contextType),
			typeof s == 'object' && s !== null
				? (s = Be(s))
				: ((s = Ne(n) ? Yt : ge.current), (s = kn(t, s)));
		var v = n.getDerivedStateFromProps;
		(h =
			typeof v == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function') ||
			(typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof l.componentWillReceiveProps != 'function') ||
			((u !== p || y !== s) && Rs(t, l, r, s)),
			(zt = !1),
			(y = t.memoizedState),
			(l.state = y),
			Co(t, r, l, o);
		var m = t.memoizedState;
		u !== p || y !== m || Ce.current || zt
			? (typeof v == 'function' && (yl(t, n, v, r), (m = t.memoizedState)),
			  (a = zt || Ps(t, n, a, r, y, m, s) || !1)
					? (h ||
							(typeof l.UNSAFE_componentWillUpdate != 'function' &&
								typeof l.componentWillUpdate != 'function') ||
							(typeof l.componentWillUpdate == 'function' &&
								l.componentWillUpdate(r, m, s),
							typeof l.UNSAFE_componentWillUpdate == 'function' &&
								l.UNSAFE_componentWillUpdate(r, m, s)),
					  typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof l.componentDidUpdate != 'function' ||
							(u === e.memoizedProps && y === e.memoizedState) ||
							(t.flags |= 4),
					  typeof l.getSnapshotBeforeUpdate != 'function' ||
							(u === e.memoizedProps && y === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = m)),
			  (l.props = r),
			  (l.state = m),
			  (l.context = s),
			  (r = a))
			: (typeof l.componentDidUpdate != 'function' ||
					(u === e.memoizedProps && y === e.memoizedState) ||
					(t.flags |= 4),
			  typeof l.getSnapshotBeforeUpdate != 'function' ||
					(u === e.memoizedProps && y === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return wl(e, t, n, r, i, o);
}
function wl(e, t, n, r, o, i) {
	vf(e, t);
	var l = (t.flags & 128) !== 0;
	if (!r && !l) return o && Es(t, n, !1), dt(e, t, i);
	(r = t.stateNode), (Py.current = t);
	var u =
		l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && l
			? ((t.child = Cn(t, e.child, null, i)), (t.child = Cn(t, null, u, i)))
			: ve(e, t, u, i),
		(t.memoizedState = r.state),
		o && Es(t, n, !0),
		t.child
	);
}
function wf(e) {
	var t = e.stateNode;
	t.pendingContext
		? ks(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && ks(e, t.context, !1),
		pu(e, t.containerInfo);
}
function Us(e, t, n, r, o) {
	return En(), uu(o), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sl(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function zf(e, t, n) {
	var r = t.pendingProps,
		o = b.current,
		i = !1,
		l = (t.flags & 128) !== 0,
		u;
	if (
		((u = l) ||
			(u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
		u
			? ((i = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (o |= 1),
		Y(b, o & 1),
		e === null)
	)
		return (
			pl(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((l = r.children),
				  (e = r.fallback),
				  i
						? ((r = t.mode),
						  (i = t.child),
						  (l = { mode: 'hidden', children: l }),
						  !(r & 1) && i !== null
								? ((i.childLanes = 0), (i.pendingProps = l))
								: (i = Go(l, r, 0, null)),
						  (e = Qt(e, r, n, null)),
						  (i.return = t),
						  (e.return = t),
						  (i.sibling = e),
						  (t.child = i),
						  (t.child.memoizedState = Sl(n)),
						  (t.memoizedState = zl),
						  e)
						: Su(t, l))
		);
	if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
		return Ry(e, t, l, r, u, o, n);
	if (i) {
		(i = r.fallback), (l = t.mode), (o = e.child), (u = o.sibling);
		var s = { mode: 'hidden', children: r.children };
		return (
			!(l & 1) && t.child !== o
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = s),
				  (t.deletions = null))
				: ((r = Lt(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
			u !== null ? (i = Lt(u, i)) : ((i = Qt(i, l, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(l = e.child.memoizedState),
			(l =
				l === null
					? Sl(n)
					: {
							baseLanes: l.baseLanes | n,
							cachePool: null,
							transitions: l.transitions,
					  }),
			(i.memoizedState = l),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = zl),
			r
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = Lt(i, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Su(e, t) {
	return (
		(t = Go({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Hr(e, t, n, r) {
	return (
		r !== null && uu(r),
		Cn(t, e.child, null, n),
		(e = Su(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function Ry(e, t, n, r, o, i, l) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = _i(Error(x(422)))), Hr(e, t, l, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((i = r.fallback),
			  (o = t.mode),
			  (r = Go({ mode: 'visible', children: r.children }, o, 0, null)),
			  (i = Qt(i, o, l, null)),
			  (i.flags |= 2),
			  (r.return = t),
			  (i.return = t),
			  (r.sibling = i),
			  (t.child = r),
			  t.mode & 1 && Cn(t, e.child, null, l),
			  (t.child.memoizedState = Sl(l)),
			  (t.memoizedState = zl),
			  i);
	if (!(t.mode & 1)) return Hr(e, t, l, null);
	if (o.data === '$!') {
		if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst;
		return (r = u), (i = Error(x(419))), (r = _i(i, r, void 0)), Hr(e, t, l, r);
	}
	if (((u = (l & e.childLanes) !== 0), Ee || u)) {
		if (((r = se), r !== null)) {
			switch (l & -l) {
				case 4:
					o = 2;
					break;
				case 16:
					o = 8;
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
					o = 32;
					break;
				case 536870912:
					o = 268435456;
					break;
				default:
					o = 0;
			}
			(o = o & (r.suspendedLanes | l) ? 0 : o),
				o !== 0 &&
					o !== i.retryLane &&
					((i.retryLane = o), ft(e, o), Xe(r, e, o, -1));
		}
		return _u(), (r = _i(Error(x(421)))), Hr(e, t, l, r);
	}
	return o.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Vy.bind(null, e)),
		  (o._reactRetry = t),
		  null)
		: ((e = i.treeContext),
		  (Le = Tt(o.nextSibling)),
		  (Me = t),
		  (J = !0),
		  (Ke = null),
		  e !== null &&
				(($e[Ie++] = it),
				($e[Ie++] = lt),
				($e[Ie++] = Xt),
				(it = e.id),
				(lt = e.overflow),
				(Xt = t)),
		  (t = Su(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Bs(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), hl(e.return, t, n);
}
function Ti(e, t, n, r, o) {
	var i = e.memoizedState;
	i === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: o,
		  })
		: ((i.isBackwards = t),
		  (i.rendering = null),
		  (i.renderingStartTime = 0),
		  (i.last = r),
		  (i.tail = n),
		  (i.tailMode = o));
}
function Sf(e, t, n) {
	var r = t.pendingProps,
		o = r.revealOrder,
		i = r.tail;
	if ((ve(e, t, r.children, n), (r = b.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Bs(e, n, t);
				else if (e.tag === 19) Bs(e, n, t);
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
	if ((Y(b, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (o) {
			case 'forwards':
				for (n = t.child, o = null; n !== null; )
					(e = n.alternate),
						e !== null && No(e) === null && (o = n),
						(n = n.sibling);
				(n = o),
					n === null
						? ((o = t.child), (t.child = null))
						: ((o = n.sibling), (n.sibling = null)),
					Ti(t, !1, o, n, i);
				break;
			case 'backwards':
				for (n = null, o = t.child, t.child = null; o !== null; ) {
					if (((e = o.alternate), e !== null && No(e) === null)) {
						t.child = o;
						break;
					}
					(e = o.sibling), (o.sibling = n), (n = o), (o = e);
				}
				Ti(t, !0, n, null, i);
				break;
			case 'together':
				Ti(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function oo(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Jt |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(x(153));
	if (t.child !== null) {
		for (
			e = t.child, n = Lt(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = Lt(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Oy(e, t, n) {
	switch (t.tag) {
		case 3:
			wf(t), En();
			break;
		case 5:
			Yc(t);
			break;
		case 1:
			Ne(t.type) && zo(t);
			break;
		case 4:
			pu(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				o = t.memoizedProps.value;
			Y(ko, r._currentValue), (r._currentValue = o);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (Y(b, b.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? zf(e, t, n)
					: (Y(b, b.current & 1),
					  (e = dt(e, t, n)),
					  e !== null ? e.sibling : null);
			Y(b, b.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Sf(e, t, n);
				t.flags |= 128;
			}
			if (
				((o = t.memoizedState),
				o !== null &&
					((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
				Y(b, b.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), gf(e, t, n);
	}
	return dt(e, t, n);
}
var xf, xl, kf, Ef;
xf = function (e, t) {
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
xl = function () {};
kf = function (e, t, n, r) {
	var o = e.memoizedProps;
	if (o !== r) {
		(e = t.stateNode), Vt(nt.current);
		var i = null;
		switch (n) {
			case 'input':
				(o = Wi(e, o)), (r = Wi(e, r)), (i = []);
				break;
			case 'select':
				(o = q({}, o, { value: void 0 })),
					(r = q({}, r, { value: void 0 })),
					(i = []);
				break;
			case 'textarea':
				(o = Yi(e, o)), (r = Yi(e, r)), (i = []);
				break;
			default:
				typeof o.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = vo);
		}
		Gi(n, r);
		var l;
		n = null;
		for (a in o)
			if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
				if (a === 'style') {
					var u = o[a];
					for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
				} else
					a !== 'dangerouslySetInnerHTML' &&
						a !== 'children' &&
						a !== 'suppressContentEditableWarning' &&
						a !== 'suppressHydrationWarning' &&
						a !== 'autoFocus' &&
						(rr.hasOwnProperty(a)
							? i || (i = [])
							: (i = i || []).push(a, null));
		for (a in r) {
			var s = r[a];
			if (
				((u = o != null ? o[a] : void 0),
				r.hasOwnProperty(a) && s !== u && (s != null || u != null))
			)
				if (a === 'style')
					if (u) {
						for (l in u)
							!u.hasOwnProperty(l) ||
								(s && s.hasOwnProperty(l)) ||
								(n || (n = {}), (n[l] = ''));
						for (l in s)
							s.hasOwnProperty(l) &&
								u[l] !== s[l] &&
								(n || (n = {}), (n[l] = s[l]));
					} else n || (i || (i = []), i.push(a, n)), (n = s);
				else
					a === 'dangerouslySetInnerHTML'
						? ((s = s ? s.__html : void 0),
						  (u = u ? u.__html : void 0),
						  s != null && u !== s && (i = i || []).push(a, s))
						: a === 'children'
						? (typeof s != 'string' && typeof s != 'number') ||
						  (i = i || []).push(a, '' + s)
						: a !== 'suppressContentEditableWarning' &&
						  a !== 'suppressHydrationWarning' &&
						  (rr.hasOwnProperty(a)
								? (s != null && a === 'onScroll' && X('scroll', e),
								  i || u === s || (i = []))
								: (i = i || []).push(a, s));
		}
		n && (i = i || []).push('style', n);
		var a = i;
		(t.updateQueue = a) && (t.flags |= 4);
	}
};
Ef = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Un(e, t) {
	if (!J)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function ye(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var o = e.child; o !== null; )
			(n |= o.lanes | o.childLanes),
				(r |= o.subtreeFlags & 14680064),
				(r |= o.flags & 14680064),
				(o.return = e),
				(o = o.sibling);
	else
		for (o = e.child; o !== null; )
			(n |= o.lanes | o.childLanes),
				(r |= o.subtreeFlags),
				(r |= o.flags),
				(o.return = e),
				(o = o.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ly(e, t, n) {
	var r = t.pendingProps;
	switch ((lu(t), t.tag)) {
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
			return ye(t), null;
		case 1:
			return Ne(t.type) && wo(), ye(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Nn(),
				G(Ce),
				G(ge),
				yu(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Ur(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Ke !== null && (Rl(Ke), (Ke = null)))),
				xl(e, t),
				ye(t),
				null
			);
		case 5:
			hu(t);
			var o = Vt(yr.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				kf(e, t, n, r, o),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(x(166));
					return ye(t), null;
				}
				if (((e = Vt(nt.current)), Ur(t))) {
					(r = t.stateNode), (n = t.type);
					var i = t.memoizedProps;
					switch (((r[qe] = t), (r[pr] = i), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							X('cancel', r), X('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							X('load', r);
							break;
						case 'video':
						case 'audio':
							for (o = 0; o < Qn.length; o++) X(Qn[o], r);
							break;
						case 'source':
							X('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							X('error', r), X('load', r);
							break;
						case 'details':
							X('toggle', r);
							break;
						case 'input':
							Ju(r, i), X('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!i.multiple }),
								X('invalid', r);
							break;
						case 'textarea':
							Zu(r, i), X('invalid', r);
					}
					Gi(n, i), (o = null);
					for (var l in i)
						if (i.hasOwnProperty(l)) {
							var u = i[l];
							l === 'children'
								? typeof u == 'string'
									? r.textContent !== u &&
									  (i.suppressHydrationWarning !== !0 &&
											jr(r.textContent, u, e),
									  (o = ['children', u]))
									: typeof u == 'number' &&
									  r.textContent !== '' + u &&
									  (i.suppressHydrationWarning !== !0 &&
											jr(r.textContent, u, e),
									  (o = ['children', '' + u]))
								: rr.hasOwnProperty(l) &&
								  u != null &&
								  l === 'onScroll' &&
								  X('scroll', r);
						}
					switch (n) {
						case 'input':
							Or(r), bu(r, i, !0);
							break;
						case 'textarea':
							Or(r), qu(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof i.onClick == 'function' && (r.onclick = vo);
					}
					(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(l = o.nodeType === 9 ? o : o.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = Ja(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = l.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = l.createElement(n, { is: r.is }))
								: ((e = l.createElement(n)),
								  n === 'select' &&
										((l = e),
										r.multiple
											? (l.multiple = !0)
											: r.size && (l.size = r.size)))
							: (e = l.createElementNS(e, n)),
						(e[qe] = t),
						(e[pr] = r),
						xf(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((l = Ji(n, r)), n)) {
							case 'dialog':
								X('cancel', e), X('close', e), (o = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								X('load', e), (o = r);
								break;
							case 'video':
							case 'audio':
								for (o = 0; o < Qn.length; o++) X(Qn[o], e);
								o = r;
								break;
							case 'source':
								X('error', e), (o = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								X('error', e), X('load', e), (o = r);
								break;
							case 'details':
								X('toggle', e), (o = r);
								break;
							case 'input':
								Ju(e, r), (o = Wi(e, r)), X('invalid', e);
								break;
							case 'option':
								o = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(o = q({}, r, { value: void 0 })),
									X('invalid', e);
								break;
							case 'textarea':
								Zu(e, r), (o = Yi(e, r)), X('invalid', e);
								break;
							default:
								o = r;
						}
						Gi(n, o), (u = o);
						for (i in u)
							if (u.hasOwnProperty(i)) {
								var s = u[i];
								i === 'style'
									? qa(e, s)
									: i === 'dangerouslySetInnerHTML'
									? ((s = s ? s.__html : void 0), s != null && ba(e, s))
									: i === 'children'
									? typeof s == 'string'
										? (n !== 'textarea' || s !== '') && or(e, s)
										: typeof s == 'number' && or(e, '' + s)
									: i !== 'suppressContentEditableWarning' &&
									  i !== 'suppressHydrationWarning' &&
									  i !== 'autoFocus' &&
									  (rr.hasOwnProperty(i)
											? s != null && i === 'onScroll' && X('scroll', e)
											: s != null && Ql(e, i, s, l));
							}
						switch (n) {
							case 'input':
								Or(e), bu(e, r, !1);
								break;
							case 'textarea':
								Or(e), qu(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + Dt(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(i = r.value),
									i != null
										? yn(e, !!r.multiple, i, !1)
										: r.defaultValue != null &&
										  yn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof o.onClick == 'function' && (e.onclick = vo);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
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
			return ye(t), null;
		case 6:
			if (e && t.stateNode != null) Ef(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(x(166));
				if (((n = Vt(yr.current)), Vt(nt.current), Ur(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[qe] = t),
						(i = r.nodeValue !== n) && ((e = Me), e !== null))
					)
						switch (e.tag) {
							case 3:
								jr(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									jr(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[qe] = t),
						(t.stateNode = r);
			}
			return ye(t), null;
		case 13:
			if (
				(G(b),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (J && Le !== null && t.mode & 1 && !(t.flags & 128))
					Uc(), En(), (t.flags |= 98560), (i = !1);
				else if (((i = Ur(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(x(318));
						if (
							((i = t.memoizedState),
							(i = i !== null ? i.dehydrated : null),
							!i)
						)
							throw Error(x(317));
						i[qe] = t;
					} else
						En(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					ye(t), (i = !1);
				} else Ke !== null && (Rl(Ke), (Ke = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || b.current & 1 ? ie === 0 && (ie = 3) : _u())),
				  t.updateQueue !== null && (t.flags |= 4),
				  ye(t),
				  null);
		case 4:
			return (
				Nn(), xl(e, t), e === null && fr(t.stateNode.containerInfo), ye(t), null
			);
		case 10:
			return cu(t.type._context), ye(t), null;
		case 17:
			return Ne(t.type) && wo(), ye(t), null;
		case 19:
			if ((G(b), (i = t.memoizedState), i === null)) return ye(t), null;
			if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
				if (r) Un(i, !1);
				else {
					if (ie !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((l = No(e)), l !== null)) {
								for (
									t.flags |= 128,
										Un(i, !1),
										r = l.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(i = n),
										(e = r),
										(i.flags &= 14680066),
										(l = i.alternate),
										l === null
											? ((i.childLanes = 0),
											  (i.lanes = e),
											  (i.child = null),
											  (i.subtreeFlags = 0),
											  (i.memoizedProps = null),
											  (i.memoizedState = null),
											  (i.updateQueue = null),
											  (i.dependencies = null),
											  (i.stateNode = null))
											: ((i.childLanes = l.childLanes),
											  (i.lanes = l.lanes),
											  (i.child = l.child),
											  (i.subtreeFlags = 0),
											  (i.deletions = null),
											  (i.memoizedProps = l.memoizedProps),
											  (i.memoizedState = l.memoizedState),
											  (i.updateQueue = l.updateQueue),
											  (i.type = l.type),
											  (e = l.dependencies),
											  (i.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return Y(b, (b.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					i.tail !== null &&
						ne() > Tn &&
						((t.flags |= 128), (r = !0), Un(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = No(l)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Un(i, !0),
							i.tail === null && i.tailMode === 'hidden' && !l.alternate && !J)
						)
							return ye(t), null;
					} else
						2 * ne() - i.renderingStartTime > Tn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Un(i, !1), (t.lanes = 4194304));
				i.isBackwards
					? ((l.sibling = t.child), (t.child = l))
					: ((n = i.last),
					  n !== null ? (n.sibling = l) : (t.child = l),
					  (i.last = l));
			}
			return i.tail !== null
				? ((t = i.tail),
				  (i.rendering = t),
				  (i.tail = t.sibling),
				  (i.renderingStartTime = ne()),
				  (t.sibling = null),
				  (n = b.current),
				  Y(b, r ? (n & 1) | 2 : n & 1),
				  t)
				: (ye(t), null);
		case 22:
		case 23:
			return (
				Nu(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Re & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: ye(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(x(156, t.tag));
}
function My(e, t) {
	switch ((lu(t), t.tag)) {
		case 1:
			return (
				Ne(t.type) && wo(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Nn(),
				G(Ce),
				G(ge),
				yu(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return hu(t), null;
		case 13:
			if ((G(b), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(x(340));
				En();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return G(b), null;
		case 4:
			return Nn(), null;
		case 10:
			return cu(t.type._context), null;
		case 22:
		case 23:
			return Nu(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Vr = !1,
	me = !1,
	Dy = typeof WeakSet == 'function' ? WeakSet : Set,
	O = null;
function pn(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				ee(e, t, r);
			}
		else n.current = null;
}
function kl(e, t, n) {
	try {
		n();
	} catch (r) {
		ee(e, t, r);
	}
}
var Hs = !1;
function Fy(e, t) {
	if (((ll = yo), (e = _c()), ou(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var o = r.anchorOffset,
						i = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, i.nodeType;
					} catch {
						n = null;
						break e;
					}
					var l = 0,
						u = -1,
						s = -1,
						a = 0,
						h = 0,
						p = e,
						y = null;
					t: for (;;) {
						for (
							var v;
							p !== n || (o !== 0 && p.nodeType !== 3) || (u = l + o),
								p !== i || (r !== 0 && p.nodeType !== 3) || (s = l + r),
								p.nodeType === 3 && (l += p.nodeValue.length),
								(v = p.firstChild) !== null;

						)
							(y = p), (p = v);
						for (;;) {
							if (p === e) break t;
							if (
								(y === n && ++a === o && (u = l),
								y === i && ++h === r && (s = l),
								(v = p.nextSibling) !== null)
							)
								break;
							(p = y), (y = p.parentNode);
						}
						p = v;
					}
					n = u === -1 || s === -1 ? null : { start: u, end: s };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (ul = { focusedElem: e, selectionRange: n }, yo = !1, O = t; O !== null; )
		if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (O = e);
		else
			for (; O !== null; ) {
				t = O;
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
									var w = m.memoizedProps,
										$ = m.memoizedState,
										d = t.stateNode,
										c = d.getSnapshotBeforeUpdate(
											t.elementType === t.type ? w : We(t.type, w),
											$,
										);
									d.__reactInternalSnapshotBeforeUpdate = c;
								}
								break;
							case 3:
								var f = t.stateNode.containerInfo;
								f.nodeType === 1
									? (f.textContent = '')
									: f.nodeType === 9 &&
									  f.documentElement &&
									  f.removeChild(f.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(x(163));
						}
				} catch (z) {
					ee(t, t.return, z);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (O = e);
					break;
				}
				O = t.return;
			}
	return (m = Hs), (Hs = !1), m;
}
function Zn(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var o = (r = r.next);
		do {
			if ((o.tag & e) === e) {
				var i = o.destroy;
				(o.destroy = void 0), i !== void 0 && kl(t, n, i);
			}
			o = o.next;
		} while (o !== r);
	}
}
function Yo(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
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
function El(e) {
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
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function Cf(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Cf(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[qe], delete t[pr], delete t[cl], delete t[gy], delete t[vy])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Nf(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vs(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Nf(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Cl(e, t, n) {
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
				  n != null || t.onclick !== null || (t.onclick = vo));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Cl(e, t, n), e = e.sibling; e !== null; ) Cl(e, t, n), (e = e.sibling);
}
function Nl(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Nl(e, t, n), e = e.sibling; e !== null; ) Nl(e, t, n), (e = e.sibling);
}
var ae = null,
	Qe = !1;
function vt(e, t, n) {
	for (n = n.child; n !== null; ) _f(e, t, n), (n = n.sibling);
}
function _f(e, t, n) {
	if (tt && typeof tt.onCommitFiberUnmount == 'function')
		try {
			tt.onCommitFiberUnmount(jo, n);
		} catch {}
	switch (n.tag) {
		case 5:
			me || pn(n, t);
		case 6:
			var r = ae,
				o = Qe;
			(ae = null),
				vt(e, t, n),
				(ae = r),
				(Qe = o),
				ae !== null &&
					(Qe
						? ((e = ae),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: ae.removeChild(n.stateNode));
			break;
		case 18:
			ae !== null &&
				(Qe
					? ((e = ae),
					  (n = n.stateNode),
					  e.nodeType === 8
							? Si(e.parentNode, n)
							: e.nodeType === 1 && Si(e, n),
					  sr(e))
					: Si(ae, n.stateNode));
			break;
		case 4:
			(r = ae),
				(o = Qe),
				(ae = n.stateNode.containerInfo),
				(Qe = !0),
				vt(e, t, n),
				(ae = r),
				(Qe = o);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!me &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				o = r = r.next;
				do {
					var i = o,
						l = i.destroy;
					(i = i.tag),
						l !== void 0 && (i & 2 || i & 4) && kl(n, t, l),
						(o = o.next);
				} while (o !== r);
			}
			vt(e, t, n);
			break;
		case 1:
			if (
				!me &&
				(pn(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (u) {
					ee(n, t, u);
				}
			vt(e, t, n);
			break;
		case 21:
			vt(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((me = (r = me) || n.memoizedState !== null), vt(e, t, n), (me = r))
				: vt(e, t, n);
			break;
		default:
			vt(e, t, n);
	}
}
function Ws(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Dy()),
			t.forEach(function (r) {
				var o = Wy.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(o, o));
			});
	}
}
function Ve(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var o = n[r];
			try {
				var i = e,
					l = t,
					u = l;
				e: for (; u !== null; ) {
					switch (u.tag) {
						case 5:
							(ae = u.stateNode), (Qe = !1);
							break e;
						case 3:
							(ae = u.stateNode.containerInfo), (Qe = !0);
							break e;
						case 4:
							(ae = u.stateNode.containerInfo), (Qe = !0);
							break e;
					}
					u = u.return;
				}
				if (ae === null) throw Error(x(160));
				_f(i, l, o), (ae = null), (Qe = !1);
				var s = o.alternate;
				s !== null && (s.return = null), (o.return = null);
			} catch (a) {
				ee(o, t, a);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Tf(t, e), (t = t.sibling);
}
function Tf(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Ve(t, e), be(e), r & 4)) {
				try {
					Zn(3, e, e.return), Yo(3, e);
				} catch (w) {
					ee(e, e.return, w);
				}
				try {
					Zn(5, e, e.return);
				} catch (w) {
					ee(e, e.return, w);
				}
			}
			break;
		case 1:
			Ve(t, e), be(e), r & 512 && n !== null && pn(n, n.return);
			break;
		case 5:
			if (
				(Ve(t, e),
				be(e),
				r & 512 && n !== null && pn(n, n.return),
				e.flags & 32)
			) {
				var o = e.stateNode;
				try {
					or(o, '');
				} catch (w) {
					ee(e, e.return, w);
				}
			}
			if (r & 4 && ((o = e.stateNode), o != null)) {
				var i = e.memoizedProps,
					l = n !== null ? n.memoizedProps : i,
					u = e.type,
					s = e.updateQueue;
				if (((e.updateQueue = null), s !== null))
					try {
						u === 'input' && i.type === 'radio' && i.name != null && Xa(o, i),
							Ji(u, l);
						var a = Ji(u, i);
						for (l = 0; l < s.length; l += 2) {
							var h = s[l],
								p = s[l + 1];
							h === 'style'
								? qa(o, p)
								: h === 'dangerouslySetInnerHTML'
								? ba(o, p)
								: h === 'children'
								? or(o, p)
								: Ql(o, h, p, a);
						}
						switch (u) {
							case 'input':
								Qi(o, i);
								break;
							case 'textarea':
								Ga(o, i);
								break;
							case 'select':
								var y = o._wrapperState.wasMultiple;
								o._wrapperState.wasMultiple = !!i.multiple;
								var v = i.value;
								v != null
									? yn(o, !!i.multiple, v, !1)
									: y !== !!i.multiple &&
									  (i.defaultValue != null
											? yn(o, !!i.multiple, i.defaultValue, !0)
											: yn(o, !!i.multiple, i.multiple ? [] : '', !1));
						}
						o[pr] = i;
					} catch (w) {
						ee(e, e.return, w);
					}
			}
			break;
		case 6:
			if ((Ve(t, e), be(e), r & 4)) {
				if (e.stateNode === null) throw Error(x(162));
				(o = e.stateNode), (i = e.memoizedProps);
				try {
					o.nodeValue = i;
				} catch (w) {
					ee(e, e.return, w);
				}
			}
			break;
		case 3:
			if (
				(Ve(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					sr(t.containerInfo);
				} catch (w) {
					ee(e, e.return, w);
				}
			break;
		case 4:
			Ve(t, e), be(e);
			break;
		case 13:
			Ve(t, e),
				be(e),
				(o = e.child),
				o.flags & 8192 &&
					((i = o.memoizedState !== null),
					(o.stateNode.isHidden = i),
					!i ||
						(o.alternate !== null && o.alternate.memoizedState !== null) ||
						(Eu = ne())),
				r & 4 && Ws(e);
			break;
		case 22:
			if (
				((h = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((me = (a = me) || h), Ve(t, e), (me = a)) : Ve(t, e),
				be(e),
				r & 8192)
			) {
				if (
					((a = e.memoizedState !== null),
					(e.stateNode.isHidden = a) && !h && e.mode & 1)
				)
					for (O = e, h = e.child; h !== null; ) {
						for (p = O = h; O !== null; ) {
							switch (((y = O), (v = y.child), y.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Zn(4, y, y.return);
									break;
								case 1:
									pn(y, y.return);
									var m = y.stateNode;
									if (typeof m.componentWillUnmount == 'function') {
										(r = y), (n = y.return);
										try {
											(t = r),
												(m.props = t.memoizedProps),
												(m.state = t.memoizedState),
												m.componentWillUnmount();
										} catch (w) {
											ee(r, n, w);
										}
									}
									break;
								case 5:
									pn(y, y.return);
									break;
								case 22:
									if (y.memoizedState !== null) {
										Ks(p);
										continue;
									}
							}
							v !== null ? ((v.return = y), (O = v)) : Ks(p);
						}
						h = h.sibling;
					}
				e: for (h = null, p = e; ; ) {
					if (p.tag === 5) {
						if (h === null) {
							h = p;
							try {
								(o = p.stateNode),
									a
										? ((i = o.style),
										  typeof i.setProperty == 'function'
												? i.setProperty('display', 'none', 'important')
												: (i.display = 'none'))
										: ((u = p.stateNode),
										  (s = p.memoizedProps.style),
										  (l =
												s != null && s.hasOwnProperty('display')
													? s.display
													: null),
										  (u.style.display = Za('display', l)));
							} catch (w) {
								ee(e, e.return, w);
							}
						}
					} else if (p.tag === 6) {
						if (h === null)
							try {
								p.stateNode.nodeValue = a ? '' : p.memoizedProps;
							} catch (w) {
								ee(e, e.return, w);
							}
					} else if (
						((p.tag !== 22 && p.tag !== 23) ||
							p.memoizedState === null ||
							p === e) &&
						p.child !== null
					) {
						(p.child.return = p), (p = p.child);
						continue;
					}
					if (p === e) break e;
					for (; p.sibling === null; ) {
						if (p.return === null || p.return === e) break e;
						h === p && (h = null), (p = p.return);
					}
					h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
				}
			}
			break;
		case 19:
			Ve(t, e), be(e), r & 4 && Ws(e);
			break;
		case 21:
			break;
		default:
			Ve(t, e), be(e);
	}
}
function be(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Nf(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(x(160));
			}
			switch (r.tag) {
				case 5:
					var o = r.stateNode;
					r.flags & 32 && (or(o, ''), (r.flags &= -33));
					var i = Vs(e);
					Nl(e, i, o);
					break;
				case 3:
				case 4:
					var l = r.stateNode.containerInfo,
						u = Vs(e);
					Cl(e, u, l);
					break;
				default:
					throw Error(x(161));
			}
		} catch (s) {
			ee(e, e.return, s);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Ay(e, t, n) {
	(O = e), Pf(e);
}
function Pf(e, t, n) {
	for (var r = (e.mode & 1) !== 0; O !== null; ) {
		var o = O,
			i = o.child;
		if (o.tag === 22 && r) {
			var l = o.memoizedState !== null || Vr;
			if (!l) {
				var u = o.alternate,
					s = (u !== null && u.memoizedState !== null) || me;
				u = Vr;
				var a = me;
				if (((Vr = l), (me = s) && !a))
					for (O = o; O !== null; )
						(l = O),
							(s = l.child),
							l.tag === 22 && l.memoizedState !== null
								? Ys(o)
								: s !== null
								? ((s.return = l), (O = s))
								: Ys(o);
				for (; i !== null; ) (O = i), Pf(i), (i = i.sibling);
				(O = o), (Vr = u), (me = a);
			}
			Qs(e);
		} else
			o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (O = i)) : Qs(e);
	}
}
function Qs(e) {
	for (; O !== null; ) {
		var t = O;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							me || Yo(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !me)
								if (n === null) r.componentDidMount();
								else {
									var o =
										t.elementType === t.type
											? n.memoizedProps
											: We(t.type, n.memoizedProps);
									r.componentDidUpdate(
										o,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate,
									);
								}
							var i = t.updateQueue;
							i !== null && Ts(t, i, r);
							break;
						case 3:
							var l = t.updateQueue;
							if (l !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Ts(t, l, n);
							}
							break;
						case 5:
							var u = t.stateNode;
							if (n === null && t.flags & 4) {
								n = u;
								var s = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										s.autoFocus && n.focus();
										break;
									case 'img':
										s.src && (n.src = s.src);
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
								var a = t.alternate;
								if (a !== null) {
									var h = a.memoizedState;
									if (h !== null) {
										var p = h.dehydrated;
										p !== null && sr(p);
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
							throw Error(x(163));
					}
				me || (t.flags & 512 && El(t));
			} catch (y) {
				ee(t, t.return, y);
			}
		}
		if (t === e) {
			O = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (O = n);
			break;
		}
		O = t.return;
	}
}
function Ks(e) {
	for (; O !== null; ) {
		var t = O;
		if (t === e) {
			O = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (O = n);
			break;
		}
		O = t.return;
	}
}
function Ys(e) {
	for (; O !== null; ) {
		var t = O;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Yo(4, t);
					} catch (s) {
						ee(t, n, s);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var o = t.return;
						try {
							r.componentDidMount();
						} catch (s) {
							ee(t, o, s);
						}
					}
					var i = t.return;
					try {
						El(t);
					} catch (s) {
						ee(t, i, s);
					}
					break;
				case 5:
					var l = t.return;
					try {
						El(t);
					} catch (s) {
						ee(t, l, s);
					}
			}
		} catch (s) {
			ee(t, t.return, s);
		}
		if (t === e) {
			O = null;
			break;
		}
		var u = t.sibling;
		if (u !== null) {
			(u.return = t.return), (O = u);
			break;
		}
		O = t.return;
	}
}
var $y = Math.ceil,
	Po = ht.ReactCurrentDispatcher,
	xu = ht.ReactCurrentOwner,
	Ue = ht.ReactCurrentBatchConfig,
	V = 0,
	se = null,
	re = null,
	ce = 0,
	Re = 0,
	hn = $t(0),
	ie = 0,
	wr = null,
	Jt = 0,
	Xo = 0,
	ku = 0,
	qn = null,
	ke = null,
	Eu = 0,
	Tn = 1 / 0,
	rt = null,
	Ro = !1,
	_l = null,
	Rt = null,
	Wr = !1,
	Et = null,
	Oo = 0,
	er = 0,
	Tl = null,
	io = -1,
	lo = 0;
function we() {
	return V & 6 ? ne() : io !== -1 ? io : (io = ne());
}
function Ot(e) {
	return e.mode & 1
		? V & 2 && ce !== 0
			? ce & -ce
			: zy.transition !== null
			? (lo === 0 && (lo = fc()), lo)
			: ((e = K),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vc(e.type))),
			  e)
		: 1;
}
function Xe(e, t, n, r) {
	if (50 < er) throw ((er = 0), (Tl = null), Error(x(185)));
	Er(e, n, r),
		(!(V & 2) || e !== se) &&
			(e === se && (!(V & 2) && (Xo |= n), ie === 4 && xt(e, ce)),
			_e(e, r),
			n === 1 && V === 0 && !(t.mode & 1) && ((Tn = ne() + 500), Wo && It()));
}
function _e(e, t) {
	var n = e.callbackNode;
	zh(e, t);
	var r = ho(e, e === se ? ce : 0);
	if (r === 0)
		n !== null && ns(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && ns(n), t === 1))
			e.tag === 0 ? wy(Xs.bind(null, e)) : $c(Xs.bind(null, e)),
				yy(function () {
					!(V & 6) && It();
				}),
				(n = null);
		else {
			switch (dc(r)) {
				case 1:
					n = Jl;
					break;
				case 4:
					n = ac;
					break;
				case 16:
					n = po;
					break;
				case 536870912:
					n = cc;
					break;
				default:
					n = po;
			}
			n = $f(n, Rf.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Rf(e, t) {
	if (((io = -1), (lo = 0), V & 6)) throw Error(x(327));
	var n = e.callbackNode;
	if (zn() && e.callbackNode !== n) return null;
	var r = ho(e, e === se ? ce : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Lo(e, r);
	else {
		t = r;
		var o = V;
		V |= 2;
		var i = Lf();
		(se !== e || ce !== t) && ((rt = null), (Tn = ne() + 500), Wt(e, t));
		do
			try {
				Uy();
				break;
			} catch (u) {
				Of(e, u);
			}
		while (1);
		au(),
			(Po.current = i),
			(V = o),
			re !== null ? (t = 0) : ((se = null), (ce = 0), (t = ie));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((o = tl(e)), o !== 0 && ((r = o), (t = Pl(e, o)))), t === 1)
		)
			throw ((n = wr), Wt(e, 0), xt(e, r), _e(e, ne()), n);
		if (t === 6) xt(e, r);
		else {
			if (
				((o = e.current.alternate),
				!(r & 30) &&
					!Iy(o) &&
					((t = Lo(e, r)),
					t === 2 && ((i = tl(e)), i !== 0 && ((r = i), (t = Pl(e, i)))),
					t === 1))
			)
				throw ((n = wr), Wt(e, 0), xt(e, r), _e(e, ne()), n);
			switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(x(345));
				case 2:
					Ut(e, ke, rt);
					break;
				case 3:
					if (
						(xt(e, r), (r & 130023424) === r && ((t = Eu + 500 - ne()), 10 < t))
					) {
						if (ho(e, 0) !== 0) break;
						if (((o = e.suspendedLanes), (o & r) !== r)) {
							we(), (e.pingedLanes |= e.suspendedLanes & o);
							break;
						}
						e.timeoutHandle = al(Ut.bind(null, e, ke, rt), t);
						break;
					}
					Ut(e, ke, rt);
					break;
				case 4:
					if ((xt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, o = -1; 0 < r; ) {
						var l = 31 - Ye(r);
						(i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
					}
					if (
						((r = o),
						(r = ne() - r),
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
								: 1960 * $y(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = al(Ut.bind(null, e, ke, rt), r);
						break;
					}
					Ut(e, ke, rt);
					break;
				case 5:
					Ut(e, ke, rt);
					break;
				default:
					throw Error(x(329));
			}
		}
	}
	return _e(e, ne()), e.callbackNode === n ? Rf.bind(null, e) : null;
}
function Pl(e, t) {
	var n = qn;
	return (
		e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256),
		(e = Lo(e, t)),
		e !== 2 && ((t = ke), (ke = n), t !== null && Rl(t)),
		e
	);
}
function Rl(e) {
	ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function Iy(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var o = n[r],
						i = o.getSnapshot;
					o = o.value;
					try {
						if (!Ge(i(), o)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
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
function xt(e, t) {
	for (
		t &= ~ku,
			t &= ~Xo,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Ye(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Xs(e) {
	if (V & 6) throw Error(x(327));
	zn();
	var t = ho(e, 0);
	if (!(t & 1)) return _e(e, ne()), null;
	var n = Lo(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = tl(e);
		r !== 0 && ((t = r), (n = Pl(e, r)));
	}
	if (n === 1) throw ((n = wr), Wt(e, 0), xt(e, t), _e(e, ne()), n);
	if (n === 6) throw Error(x(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Ut(e, ke, rt),
		_e(e, ne()),
		null
	);
}
function Cu(e, t) {
	var n = V;
	V |= 1;
	try {
		return e(t);
	} finally {
		(V = n), V === 0 && ((Tn = ne() + 500), Wo && It());
	}
}
function bt(e) {
	Et !== null && Et.tag === 0 && !(V & 6) && zn();
	var t = V;
	V |= 1;
	var n = Ue.transition,
		r = K;
	try {
		if (((Ue.transition = null), (K = 1), e)) return e();
	} finally {
		(K = r), (Ue.transition = n), (V = t), !(V & 6) && It();
	}
}
function Nu() {
	(Re = hn.current), G(hn);
}
function Wt(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), hy(n)), re !== null))
		for (n = re.return; n !== null; ) {
			var r = n;
			switch ((lu(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && wo();
					break;
				case 3:
					Nn(), G(Ce), G(ge), yu();
					break;
				case 5:
					hu(r);
					break;
				case 4:
					Nn();
					break;
				case 13:
					G(b);
					break;
				case 19:
					G(b);
					break;
				case 10:
					cu(r.type._context);
					break;
				case 22:
				case 23:
					Nu();
			}
			n = n.return;
		}
	if (
		((se = e),
		(re = e = Lt(e.current, null)),
		(ce = Re = t),
		(ie = 0),
		(wr = null),
		(ku = Xo = Jt = 0),
		(ke = qn = null),
		Ht !== null)
	) {
		for (t = 0; t < Ht.length; t++)
			if (((n = Ht[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var o = r.next,
					i = n.pending;
				if (i !== null) {
					var l = i.next;
					(i.next = o), (r.next = l);
				}
				n.pending = r;
			}
		Ht = null;
	}
	return e;
}
function Of(e, t) {
	do {
		var n = re;
		try {
			if ((au(), (no.current = To), _o)) {
				for (var r = Z.memoizedState; r !== null; ) {
					var o = r.queue;
					o !== null && (o.pending = null), (r = r.next);
				}
				_o = !1;
			}
			if (
				((Gt = 0),
				(ue = oe = Z = null),
				(bn = !1),
				(mr = 0),
				(xu.current = null),
				n === null || n.return === null)
			) {
				(ie = 1), (wr = t), (re = null);
				break;
			}
			e: {
				var i = e,
					l = n.return,
					u = n,
					s = t;
				if (
					((t = ce),
					(u.flags |= 32768),
					s !== null && typeof s == 'object' && typeof s.then == 'function')
				) {
					var a = s,
						h = u,
						p = h.tag;
					if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
						var y = h.alternate;
						y
							? ((h.updateQueue = y.updateQueue),
							  (h.memoizedState = y.memoizedState),
							  (h.lanes = y.lanes))
							: ((h.updateQueue = null), (h.memoizedState = null));
					}
					var v = Fs(l);
					if (v !== null) {
						(v.flags &= -257),
							As(v, l, u, i, t),
							v.mode & 1 && Ds(i, a, t),
							(t = v),
							(s = a);
						var m = t.updateQueue;
						if (m === null) {
							var w = new Set();
							w.add(s), (t.updateQueue = w);
						} else m.add(s);
						break e;
					} else {
						if (!(t & 1)) {
							Ds(i, a, t), _u();
							break e;
						}
						s = Error(x(426));
					}
				} else if (J && u.mode & 1) {
					var $ = Fs(l);
					if ($ !== null) {
						!($.flags & 65536) && ($.flags |= 256),
							As($, l, u, i, t),
							uu(_n(s, u));
						break e;
					}
				}
				(i = s = _n(s, u)),
					ie !== 4 && (ie = 2),
					qn === null ? (qn = [i]) : qn.push(i),
					(i = l);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var d = hf(i, s, t);
							_s(i, d);
							break e;
						case 1:
							u = s;
							var c = i.type,
								f = i.stateNode;
							if (
								!(i.flags & 128) &&
								(typeof c.getDerivedStateFromError == 'function' ||
									(f !== null &&
										typeof f.componentDidCatch == 'function' &&
										(Rt === null || !Rt.has(f))))
							) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var z = yf(i, u, t);
								_s(i, z);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			Df(n);
		} catch (C) {
			(t = C), re === n && n !== null && (re = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function Lf() {
	var e = Po.current;
	return (Po.current = To), e === null ? To : e;
}
function _u() {
	(ie === 0 || ie === 3 || ie === 2) && (ie = 4),
		se === null || (!(Jt & 268435455) && !(Xo & 268435455)) || xt(se, ce);
}
function Lo(e, t) {
	var n = V;
	V |= 2;
	var r = Lf();
	(se !== e || ce !== t) && ((rt = null), Wt(e, t));
	do
		try {
			jy();
			break;
		} catch (o) {
			Of(e, o);
		}
	while (1);
	if ((au(), (V = n), (Po.current = r), re !== null)) throw Error(x(261));
	return (se = null), (ce = 0), ie;
}
function jy() {
	for (; re !== null; ) Mf(re);
}
function Uy() {
	for (; re !== null && !fh(); ) Mf(re);
}
function Mf(e) {
	var t = Af(e.alternate, e, Re);
	(e.memoizedProps = e.pendingProps),
		t === null ? Df(e) : (re = t),
		(xu.current = null);
}
function Df(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = My(n, t)), n !== null)) {
				(n.flags &= 32767), (re = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ie = 6), (re = null);
				return;
			}
		} else if (((n = Ly(n, t, Re)), n !== null)) {
			re = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			re = t;
			return;
		}
		re = t = e;
	} while (t !== null);
	ie === 0 && (ie = 5);
}
function Ut(e, t, n) {
	var r = K,
		o = Ue.transition;
	try {
		(Ue.transition = null), (K = 1), By(e, t, n, r);
	} finally {
		(Ue.transition = o), (K = r);
	}
	return null;
}
function By(e, t, n, r) {
	do zn();
	while (Et !== null);
	if (V & 6) throw Error(x(327));
	n = e.finishedWork;
	var o = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(x(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = n.lanes | n.childLanes;
	if (
		(Sh(e, i),
		e === se && ((re = se = null), (ce = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Wr ||
			((Wr = !0),
			$f(po, function () {
				return zn(), null;
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		(i = Ue.transition), (Ue.transition = null);
		var l = K;
		K = 1;
		var u = V;
		(V |= 4),
			(xu.current = null),
			Fy(e, n),
			Tf(n, e),
			uy(ul),
			(yo = !!ll),
			(ul = ll = null),
			(e.current = n),
			Ay(n),
			dh(),
			(V = u),
			(K = l),
			(Ue.transition = i);
	} else e.current = n;
	if (
		(Wr && ((Wr = !1), (Et = e), (Oo = o)),
		(i = e.pendingLanes),
		i === 0 && (Rt = null),
		yh(n.stateNode),
		_e(e, ne()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
	if (Ro) throw ((Ro = !1), (e = _l), (_l = null), e);
	return (
		Oo & 1 && e.tag !== 0 && zn(),
		(i = e.pendingLanes),
		i & 1 ? (e === Tl ? er++ : ((er = 0), (Tl = e))) : (er = 0),
		It(),
		null
	);
}
function zn() {
	if (Et !== null) {
		var e = dc(Oo),
			t = Ue.transition,
			n = K;
		try {
			if (((Ue.transition = null), (K = 16 > e ? 16 : e), Et === null))
				var r = !1;
			else {
				if (((e = Et), (Et = null), (Oo = 0), V & 6)) throw Error(x(331));
				var o = V;
				for (V |= 4, O = e.current; O !== null; ) {
					var i = O,
						l = i.child;
					if (O.flags & 16) {
						var u = i.deletions;
						if (u !== null) {
							for (var s = 0; s < u.length; s++) {
								var a = u[s];
								for (O = a; O !== null; ) {
									var h = O;
									switch (h.tag) {
										case 0:
										case 11:
										case 15:
											Zn(8, h, i);
									}
									var p = h.child;
									if (p !== null) (p.return = h), (O = p);
									else
										for (; O !== null; ) {
											h = O;
											var y = h.sibling,
												v = h.return;
											if ((Cf(h), h === a)) {
												O = null;
												break;
											}
											if (y !== null) {
												(y.return = v), (O = y);
												break;
											}
											O = v;
										}
								}
							}
							var m = i.alternate;
							if (m !== null) {
								var w = m.child;
								if (w !== null) {
									m.child = null;
									do {
										var $ = w.sibling;
										(w.sibling = null), (w = $);
									} while (w !== null);
								}
							}
							O = i;
						}
					}
					if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (O = l);
					else
						e: for (; O !== null; ) {
							if (((i = O), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										Zn(9, i, i.return);
								}
							var d = i.sibling;
							if (d !== null) {
								(d.return = i.return), (O = d);
								break e;
							}
							O = i.return;
						}
				}
				var c = e.current;
				for (O = c; O !== null; ) {
					l = O;
					var f = l.child;
					if (l.subtreeFlags & 2064 && f !== null) (f.return = l), (O = f);
					else
						e: for (l = c; O !== null; ) {
							if (((u = O), u.flags & 2048))
								try {
									switch (u.tag) {
										case 0:
										case 11:
										case 15:
											Yo(9, u);
									}
								} catch (C) {
									ee(u, u.return, C);
								}
							if (u === l) {
								O = null;
								break e;
							}
							var z = u.sibling;
							if (z !== null) {
								(z.return = u.return), (O = z);
								break e;
							}
							O = u.return;
						}
				}
				if (
					((V = o), It(), tt && typeof tt.onPostCommitFiberRoot == 'function')
				)
					try {
						tt.onPostCommitFiberRoot(jo, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(K = n), (Ue.transition = t);
		}
	}
	return !1;
}
function Gs(e, t, n) {
	(t = _n(n, t)),
		(t = hf(e, t, 1)),
		(e = Pt(e, t, 1)),
		(t = we()),
		e !== null && (Er(e, 1, t), _e(e, t));
}
function ee(e, t, n) {
	if (e.tag === 3) Gs(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Gs(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(Rt === null || !Rt.has(r)))
				) {
					(e = _n(n, e)),
						(e = yf(t, e, 1)),
						(t = Pt(t, e, 1)),
						(e = we()),
						t !== null && (Er(t, 1, e), _e(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Hy(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = we()),
		(e.pingedLanes |= e.suspendedLanes & n),
		se === e &&
			(ce & n) === n &&
			(ie === 4 || (ie === 3 && (ce & 130023424) === ce && 500 > ne() - Eu)
				? Wt(e, 0)
				: (ku |= n)),
		_e(e, t);
}
function Ff(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Dr), (Dr <<= 1), !(Dr & 130023424) && (Dr = 4194304))
			: (t = 1));
	var n = we();
	(e = ft(e, t)), e !== null && (Er(e, t, n), _e(e, n));
}
function Vy(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Ff(e, n);
}
function Wy(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				o = e.memoizedState;
			o !== null && (n = o.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(x(314));
	}
	r !== null && r.delete(t), Ff(e, n);
}
var Af;
Af = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Ce.current) Ee = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Ee = !1), Oy(e, t, n);
			Ee = !!(e.flags & 131072);
		}
	else (Ee = !1), J && t.flags & 1048576 && Ic(t, xo, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			oo(e, t), (e = t.pendingProps);
			var o = kn(t, ge.current);
			wn(t, n), (o = gu(null, t, r, e, o, n));
			var i = vu();
			return (
				(t.flags |= 1),
				typeof o == 'object' &&
				o !== null &&
				typeof o.render == 'function' &&
				o.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  Ne(r) ? ((i = !0), zo(t)) : (i = !1),
					  (t.memoizedState =
							o.state !== null && o.state !== void 0 ? o.state : null),
					  du(t),
					  (o.updater = Qo),
					  (t.stateNode = o),
					  (o._reactInternals = t),
					  ml(t, r, e, n),
					  (t = wl(null, t, r, !0, i, n)))
					: ((t.tag = 0), J && i && iu(t), ve(null, t, o, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(oo(e, t),
					(e = t.pendingProps),
					(o = r._init),
					(r = o(r._payload)),
					(t.type = r),
					(o = t.tag = Ky(r)),
					(e = We(r, e)),
					o)
				) {
					case 0:
						t = vl(null, t, r, e, n);
						break e;
					case 1:
						t = js(null, t, r, e, n);
						break e;
					case 11:
						t = $s(null, t, r, e, n);
						break e;
					case 14:
						t = Is(null, t, r, We(r.type, e), n);
						break e;
				}
				throw Error(x(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : We(r, o)),
				vl(e, t, r, o, n)
			);
		case 1:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : We(r, o)),
				js(e, t, r, o, n)
			);
		case 3:
			e: {
				if ((wf(t), e === null)) throw Error(x(387));
				(r = t.pendingProps),
					(i = t.memoizedState),
					(o = i.element),
					Hc(e, t),
					Co(t, r, null, n);
				var l = t.memoizedState;
				if (((r = l.element), i.isDehydrated))
					if (
						((i = {
							element: r,
							isDehydrated: !1,
							cache: l.cache,
							pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
							transitions: l.transitions,
						}),
						(t.updateQueue.baseState = i),
						(t.memoizedState = i),
						t.flags & 256)
					) {
						(o = _n(Error(x(423)), t)), (t = Us(e, t, r, n, o));
						break e;
					} else if (r !== o) {
						(o = _n(Error(x(424)), t)), (t = Us(e, t, r, n, o));
						break e;
					} else
						for (
							Le = Tt(t.stateNode.containerInfo.firstChild),
								Me = t,
								J = !0,
								Ke = null,
								n = Kc(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((En(), r === o)) {
						t = dt(e, t, n);
						break e;
					}
					ve(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Yc(t),
				e === null && pl(t),
				(r = t.type),
				(o = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(l = o.children),
				sl(r, o) ? (l = null) : i !== null && sl(r, i) && (t.flags |= 32),
				vf(e, t),
				ve(e, t, l, n),
				t.child
			);
		case 6:
			return e === null && pl(t), null;
		case 13:
			return zf(e, t, n);
		case 4:
			return (
				pu(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Cn(t, null, r, n)) : ve(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : We(r, o)),
				$s(e, t, r, o, n)
			);
		case 7:
			return ve(e, t, t.pendingProps, n), t.child;
		case 8:
			return ve(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ve(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(o = t.pendingProps),
					(i = t.memoizedProps),
					(l = o.value),
					Y(ko, r._currentValue),
					(r._currentValue = l),
					i !== null)
				)
					if (Ge(i.value, l)) {
						if (i.children === o.children && !Ce.current) {
							t = dt(e, t, n);
							break e;
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var u = i.dependencies;
							if (u !== null) {
								l = i.child;
								for (var s = u.firstContext; s !== null; ) {
									if (s.context === r) {
										if (i.tag === 1) {
											(s = st(-1, n & -n)), (s.tag = 2);
											var a = i.updateQueue;
											if (a !== null) {
												a = a.shared;
												var h = a.pending;
												h === null
													? (s.next = s)
													: ((s.next = h.next), (h.next = s)),
													(a.pending = s);
											}
										}
										(i.lanes |= n),
											(s = i.alternate),
											s !== null && (s.lanes |= n),
											hl(i.return, n, t),
											(u.lanes |= n);
										break;
									}
									s = s.next;
								}
							} else if (i.tag === 10) l = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((l = i.return), l === null)) throw Error(x(341));
								(l.lanes |= n),
									(u = l.alternate),
									u !== null && (u.lanes |= n),
									hl(l, n, t),
									(l = i.sibling);
							} else l = i.child;
							if (l !== null) l.return = i;
							else
								for (l = i; l !== null; ) {
									if (l === t) {
										l = null;
										break;
									}
									if (((i = l.sibling), i !== null)) {
										(i.return = l.return), (l = i);
										break;
									}
									l = l.return;
								}
							i = l;
						}
				ve(e, t, o.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(o = t.type),
				(r = t.pendingProps.children),
				wn(t, n),
				(o = Be(o)),
				(r = r(o)),
				(t.flags |= 1),
				ve(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(o = We(r, t.pendingProps)),
				(o = We(r.type, o)),
				Is(e, t, r, o, n)
			);
		case 15:
			return mf(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : We(r, o)),
				oo(e, t),
				(t.tag = 1),
				Ne(r) ? ((e = !0), zo(t)) : (e = !1),
				wn(t, n),
				Wc(t, r, o),
				ml(t, r, o, n),
				wl(null, t, r, !0, e, n)
			);
		case 19:
			return Sf(e, t, n);
		case 22:
			return gf(e, t, n);
	}
	throw Error(x(156, t.tag));
};
function $f(e, t) {
	return sc(e, t);
}
function Qy(e, t, n, r) {
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
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function je(e, t, n, r) {
	return new Qy(e, t, n, r);
}
function Tu(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ky(e) {
	if (typeof e == 'function') return Tu(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Yl)) return 11;
		if (e === Xl) return 14;
	}
	return 2;
}
function Lt(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = je(e.tag, t, e.key, e.mode)),
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
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function uo(e, t, n, r, o, i) {
	var l = 2;
	if (((r = e), typeof e == 'function')) Tu(e) && (l = 1);
	else if (typeof e == 'string') l = 5;
	else
		e: switch (e) {
			case rn:
				return Qt(n.children, o, i, t);
			case Kl:
				(l = 8), (o |= 8);
				break;
			case Ui:
				return (
					(e = je(12, n, t, o | 2)), (e.elementType = Ui), (e.lanes = i), e
				);
			case Bi:
				return (e = je(13, n, t, o)), (e.elementType = Bi), (e.lanes = i), e;
			case Hi:
				return (e = je(19, n, t, o)), (e.elementType = Hi), (e.lanes = i), e;
			case Qa:
				return Go(n, o, i, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Va:
							l = 10;
							break e;
						case Wa:
							l = 9;
							break e;
						case Yl:
							l = 11;
							break e;
						case Xl:
							l = 14;
							break e;
						case wt:
							(l = 16), (r = null);
							break e;
					}
				throw Error(x(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = je(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
	);
}
function Qt(e, t, n, r) {
	return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function Go(e, t, n, r) {
	return (
		(e = je(22, e, r, t)),
		(e.elementType = Qa),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Pi(e, t, n) {
	return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function Ri(e, t, n) {
	return (
		(t = je(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Yy(e, t, n, r, o) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = ci(0)),
		(this.expirationTimes = ci(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = ci(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = o),
		(this.mutableSourceEagerHydrationData = null);
}
function Pu(e, t, n, r, o, i, l, u, s) {
	return (
		(e = new Yy(e, t, n, u, s)),
		t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
		(i = je(3, null, null, t)),
		(e.current = i),
		(i.stateNode = e),
		(i.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		du(i),
		e
	);
}
function Xy(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: nn,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function If(e) {
	if (!e) return Ft;
	e = e._reactInternals;
	e: {
		if (qt(e) !== e || e.tag !== 1) throw Error(x(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Ne(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(x(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (Ne(n)) return Ac(e, n, t);
	}
	return t;
}
function jf(e, t, n, r, o, i, l, u, s) {
	return (
		(e = Pu(n, r, !0, e, o, i, l, u, s)),
		(e.context = If(null)),
		(n = e.current),
		(r = we()),
		(o = Ot(n)),
		(i = st(r, o)),
		(i.callback = t ?? null),
		Pt(n, i, o),
		(e.current.lanes = o),
		Er(e, o, r),
		_e(e, r),
		e
	);
}
function Jo(e, t, n, r) {
	var o = t.current,
		i = we(),
		l = Ot(o);
	return (
		(n = If(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = st(i, l)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Pt(o, t, l)),
		e !== null && (Xe(e, o, l, i), to(e, o, l)),
		l
	);
}
function Mo(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Js(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Ru(e, t) {
	Js(e, t), (e = e.alternate) && Js(e, t);
}
function Gy() {
	return null;
}
var Uf =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function Ou(e) {
	this._internalRoot = e;
}
bo.prototype.render = Ou.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(x(409));
	Jo(e, t, null, null);
};
bo.prototype.unmount = Ou.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		bt(function () {
			Jo(null, e, null, null);
		}),
			(t[ct] = null);
	}
};
function bo(e) {
	this._internalRoot = e;
}
bo.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = yc();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++);
		St.splice(n, 0, e), n === 0 && gc(e);
	}
};
function Lu(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zo(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function bs() {}
function Jy(e, t, n, r, o) {
	if (o) {
		if (typeof r == 'function') {
			var i = r;
			r = function () {
				var a = Mo(l);
				i.call(a);
			};
		}
		var l = jf(t, r, e, 0, null, !1, !1, '', bs);
		return (
			(e._reactRootContainer = l),
			(e[ct] = l.current),
			fr(e.nodeType === 8 ? e.parentNode : e),
			bt(),
			l
		);
	}
	for (; (o = e.lastChild); ) e.removeChild(o);
	if (typeof r == 'function') {
		var u = r;
		r = function () {
			var a = Mo(s);
			u.call(a);
		};
	}
	var s = Pu(e, 0, !1, null, null, !1, !1, '', bs);
	return (
		(e._reactRootContainer = s),
		(e[ct] = s.current),
		fr(e.nodeType === 8 ? e.parentNode : e),
		bt(function () {
			Jo(t, s, n, r);
		}),
		s
	);
}
function qo(e, t, n, r, o) {
	var i = n._reactRootContainer;
	if (i) {
		var l = i;
		if (typeof o == 'function') {
			var u = o;
			o = function () {
				var s = Mo(l);
				u.call(s);
			};
		}
		Jo(t, l, e, o);
	} else l = Jy(n, t, e, o, r);
	return Mo(l);
}
pc = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Wn(t.pendingLanes);
				n !== 0 &&
					(bl(t, n | 1), _e(t, ne()), !(V & 6) && ((Tn = ne() + 500), It()));
			}
			break;
		case 13:
			bt(function () {
				var r = ft(e, 1);
				if (r !== null) {
					var o = we();
					Xe(r, e, 1, o);
				}
			}),
				Ru(e, 1);
	}
};
Zl = function (e) {
	if (e.tag === 13) {
		var t = ft(e, 134217728);
		if (t !== null) {
			var n = we();
			Xe(t, e, 134217728, n);
		}
		Ru(e, 134217728);
	}
};
hc = function (e) {
	if (e.tag === 13) {
		var t = Ot(e),
			n = ft(e, t);
		if (n !== null) {
			var r = we();
			Xe(n, e, t, r);
		}
		Ru(e, t);
	}
};
yc = function () {
	return K;
};
mc = function (e, t) {
	var n = K;
	try {
		return (K = e), t();
	} finally {
		K = n;
	}
};
Zi = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((Qi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var o = Vo(r);
						if (!o) throw Error(x(90));
						Ya(r), Qi(r, o);
					}
				}
			}
			break;
		case 'textarea':
			Ga(e, n);
			break;
		case 'select':
			(t = n.value), t != null && yn(e, !!n.multiple, t, !1);
	}
};
nc = Cu;
rc = bt;
var by = { usingClientEntryPoint: !1, Events: [Nr, sn, Vo, ec, tc, Cu] },
	Bn = {
		findFiberByHostInstance: Bt,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	Zy = {
		bundleType: Bn.bundleType,
		version: Bn.version,
		rendererPackageName: Bn.rendererPackageName,
		rendererConfig: Bn.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: ht.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = lc(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Bn.findFiberByHostInstance || Gy,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Qr.isDisabled && Qr.supportsFiber)
		try {
			(jo = Qr.inject(Zy)), (tt = Qr);
		} catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = by;
Fe.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Lu(t)) throw Error(x(200));
	return Xy(e, t, null, n);
};
Fe.createRoot = function (e, t) {
	if (!Lu(e)) throw Error(x(299));
	var n = !1,
		r = '',
		o = Uf;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
		(t = Pu(e, 1, !1, null, null, n, !1, r, o)),
		(e[ct] = t.current),
		fr(e.nodeType === 8 ? e.parentNode : e),
		new Ou(t)
	);
};
Fe.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(x(188))
			: ((e = Object.keys(e).join(',')), Error(x(268, e)));
	return (e = lc(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
	return bt(e);
};
Fe.hydrate = function (e, t, n) {
	if (!Zo(t)) throw Error(x(200));
	return qo(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
	if (!Lu(e)) throw Error(x(405));
	var r = (n != null && n.hydratedSources) || null,
		o = !1,
		i = '',
		l = Uf;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (o = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
		(t = jf(t, null, e, 1, n ?? null, o, !1, i, l)),
		(e[ct] = t.current),
		fr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(o = n._getVersion),
				(o = o(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, o])
					: t.mutableSourceEagerHydrationData.push(n, o);
	return new bo(t);
};
Fe.render = function (e, t, n) {
	if (!Zo(t)) throw Error(x(200));
	return qo(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
	if (!Zo(e)) throw Error(x(40));
	return e._reactRootContainer
		? (bt(function () {
				qo(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[ct] = null);
				});
		  }),
		  !0)
		: !1;
};
Fe.unstable_batchedUpdates = Cu;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Zo(n)) throw Error(x(200));
	if (e == null || e._reactInternals === void 0) throw Error(x(38));
	return qo(e, t, n, !1, r);
};
Fe.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
	function t() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
			} catch (n) {
				console.error(n);
			}
	}
	t(), (e.exports = Fe);
})(Gp);
var Bf,
	Zs = $i;
(Bf = Zs.createRoot), Zs.hydrateRoot;
(() => {
	const e = document.getElementsByClassName('root');
	for (let t = 0; t < e.length; t++) {
		let n = e[t].dataset.review;
		if (!e[t].classList.contains('root-rendered')) {
			let r = e[t].attachShadow({ mode: 'open' });
			if (
				(e[t].classList.add('root-rendered'),
				!document.getElementById('cozy-widget-style'))
			) {
				let i = document.createElement('style');
				i.setAttribute('id', 'cozy-widget-style'),
					(i.textContent = `@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@800&display=swap');*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role="button"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}@font-face{font-family:"graphik-bold";src:url("https://fonts.cozy-cost.just.engineer/GraphikBlack.otf")}@font-face{font-family:"graphik-semibold";src:url("https://fonts.cozy-cost.just.engineer/GraphikSemibold.otf")}@font-face{font-family:"graphik-medium";src:url("https://fonts.cozy-cost.just.engineer/GraphikMedium.otf")}@font-face{font-family:"graphik-regular";src:url("https://fonts.cozy-cost.just.engineer/GraphikRegular.otf")}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-scroll-snap-strictness:proximity;--tw-ordinal:;--tw-slashed-zero:;--tw-numeric-figure:;--tw-numeric-spacing:;--tw-numeric-fraction:;--tw-ring-inset:;--tw-ring-offset-width:0;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:;--tw-brightness:;--tw-contrast:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-saturate:;--tw-sepia:;--tw-drop-shadow:;--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-scroll-snap-strictness:proximity;--tw-ordinal:;--tw-slashed-zero:;--tw-numeric-figure:;--tw-numeric-spacing:;--tw-numeric-fraction:;--tw-ring-inset:;--tw-ring-offset-width:0;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:;--tw-brightness:;--tw-contrast:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-saturate:;--tw-sepia:;--tw-drop-shadow:;--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:}.cozy-absolute{position:absolute}.cozy-relative{position:relative}.cozy-inset-0{top:0;right:0;bottom:0;left:0}.cozy-bottom-0{bottom:0}.cozy-left-0{left:0}.cozy-right-0{right:0}.cozy-right-2{right:.5rem}.cozy-top-0{top:0}.cozy-top-1\\/2{top:50%}.cozy-mx-auto{margin-left:auto;margin-right:auto}.cozy-ml-2{margin-left:.5rem}.cozy-mt-5{margin-top:1rem}.cozy-mt-1{margin-top:.25rem}.cozy-mt-2{margin-top:.5rem}.cozy-flex{display:flex}.cozy-grid{display:grid}.cozy-hidden{display:none}.cozy-h-5{height:1.25rem}.cozy-h-8{height:2rem}.cozy-h-full{height:100%}.cozy-min-h-\\[200px\\]{min-height:200px}.cozy-min-h-screen{min-height:100vh}.cozy-w-10\\/12{width:83.333333%}.cozy-w-11\\/12{width:91.666667%}.cozy-w-5{width:1.25rem}.cozy-w-8{width:2rem}.cozy-w-fit{width:-moz-fit-content;width:fit-content}.cozy-w-full{width:100%}.cozy-min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.cozy-min-w-full{min-width:100%}.cozy-max-w-3xl{max-width:48rem}.cozy-max-w-xs{max-width:20rem}.-cozy-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cozy-cursor-pointer{cursor:pointer}.cozy-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.cozy-flex-col{flex-direction:column}.cozy-flex-wrap{flex-wrap:wrap}.cozy-items-end{align-items:flex-end}.cozy-items-center{align-items:center}.cozy-justify-center{justify-content:center}.cozy-gap-0{gap:0}.cozy-gap-0\\.5{gap:.125rem}.cozy-gap-1{gap:.25rem}.cozy-gap-1\\.5{gap:.375rem}.cozy-gap-16{gap:4rem}.cozy-gap-2{gap:.5rem}.cozy-gap-3{gap:.75rem}.cozy-gap-4{gap:1rem}.cozy-gap-5{gap:1.25rem}.cozy-space-y-2>:not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse))}.cozy-space-y-5>:not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.cozy-self-stretch{align-self:stretch}.cozy-overflow-hidden{overflow:hidden}.cozy-overflow-x-scroll{overflow-x:scroll}.cozy-rounded-xl{border-radius:.75rem}.cozy-rounded{border-radius:.25rem}.cozy-rounded-md{border-radius:.375rem}.cozy-rounded-sm{border-radius:.125rem}.cozy-border{border-width:1px}.cozy-border-2{border-width:2px}.cozy-border-slate-300{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity))}.cozy-border-branding-primary-500 {--tw-border-opacity: 1;border-color: rgb(233 76 137 / var(--tw-border-opacity));}.cozy-bg-branding-primary-500{--tw-border-opacity:1;border-color:rgb(223 76 137 / var(--tw-border-opacity))}.cozy-bg-branding-primary-500{--tw-bg-opacity:1;background-color:rgb(233 76 137 / var(--tw-bg-opacity))}.hover\\:cozy-border-branding-primary-600:hover{--tw-border-opacity: 1;border-color: rgb(219 71 129 / var(--tw-border-opacity));}.cozy-bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.cozy-bg-light{--tw-bg-opacity:1;background-color:rgb(247 247 248 / var(--tw-bg-opacity))}.cozy-bg-orange-500{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity))}.cozy-bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.cozy-bg-slate-50{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity))}.cozy-bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.cozy-bg-yellow-500{--tw-bg-opacity:1;background-color:rgb(234 179 8 / var(--tw-bg-opacity))}.cozy-bg-zinc-200{--tw-bg-opacity:1;background-color:rgb(228 228 231 / var(--tw-bg-opacity))}.cozy-fill-light-neutral-700{fill:#6b778c}.cozy-fill-none{fill:none}.cozy-p-2{padding:.5rem}.cozy-p-3{padding:.75rem}.cozy-p-4{padding:1rem}.cozy-px-3{padding-left:.75rem;padding-right:.75rem}.cozy-px-4{padding-left:1rem;padding-right:1rem}.cozy-py-1{padding-top:.25rem;padding-bottom:.25rem}.cozy-py-2{padding-top:.5rem;padding-bottom:.5rem}.cozy-py-4{padding-top:1rem;padding-bottom:1rem}.cozy-p-6{padding:1.5rem}.cozy-py-8{padding-top:2rem;padding-bottom:2rem}.cozy-pr-1{padding-right:.25rem}.cozy-pt-2{padding-top:.5rem}.cozy-text-center{text-align:center}.cozy-font-graphik-medium{font-family:"graphik-medium"}.cozy-font-graphik-semibold{font-family:"graphik-semibold"}.cozy-font-graphik-bold{font-family:"graphik-bold"}.cozy-text-2xl{font-size:1.5rem;line-height:2rem}.cozy-text-body-2{font-size:1rem;line-height:1.5rem}.cozy-text-title-2{font-size:1.125rem;line-height:1.75rem}.cozy-text-body-2{font-size: 2rem/* 32px */;line-height: 2.5rem/* 40px */;letter-spacing: 0.01em;}.cozy-text-body-2{font-size:.875rem;line-height:1.25rem}.cozy-text-xl{font-size:1.25rem;line-height:1.75rem}.cozy-font-bold{font-weight:700}.cozy-uppercase{text-transform:uppercase}.cozy-text-light-neutral-700{--tw-text-opacity:1;color:rgb(107 119 140 / var(--tw-text-opacity))}.cozy-text-branding-primary-500{--tw-text-opacity:1;color:rgb(233 76 137 / var(--tw-text-opacity))}.cozy-bg-branding-primary-500{--tw-border-opacity:1;color:rgb(233 76 137 / var(--tw-border-opacity))}.cozy-text-light-neutral-800 {--tw-text-opacity: 1;color: rgb(37 56 88 / var(--tw-text-opacity));}.cozy-text-light-neutral-25{--tw-text-opacity:1;color:rgb(247 247 248 / var(--tw-text-opacity))}.cozy-underline{text-decoration-line:underline}.cozy-underline-offset-2{text-underline-offset:2px}.cozy-opacity-0{opacity:0}.cozy-opacity-60{opacity:.6}.cozy-opacity-80{opacity:.8}.cozy-shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / .1),0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.cozy-outline{outline-style:solid}.cozy-ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.cozy-ring-brand{--tw-ring-opacity:1;--tw-ring-color:rgb(233 76 137 / var(--tw-ring-opacity))}.cozy-transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}.cozy-transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}.cozy-duration-150{transition-duration:150ms}.cozy-duration-200{transition-duration:200ms}.cozy-duration-500{transition-duration:500ms}.cozy-duration-75{transition-duration:75ms}.cozy-ease-in-out{transition-timing-function:cubic-bezier(0.4,0,0.2,1)}.last-of-type\\:cozy-pr-0:last-of-type{padding-right:0}.hover\\:cozy-scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:cozy-scale-125:hover{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:cozy-cursor-pointer:hover{cursor:pointer}.hover\\:cozy-bg-black-500:hover{--tw-bg-opacity:1;background-color:rgb(179 186 197 / var(--tw-bg-opacity))}.hover\\:cozy-bg-branding-primary-500:hover{--tw-bg-opacity:1;background-color:rgb(233 76 137 / var(--tw-bg-opacity))}.hover\\:cozy-bg-branding-primary-100:hover{--tw-bg-opacity:1;background-color:rgb(253 242 247 / var(--tw-bg-opacity))}.hover\\:cozy-shadow-md:hover{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / .1),0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:cozy-shadow-sm:hover{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:cozy-ring-light-neutral-300:hover{--tw-ring-opacity:1;--tw-ring-color:rgb(223 225 230 / var(--tw-ring-opacity))}.focus\\:cozy-bg-white:focus{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.focus\\:cozy-ring-offset-2:focus{--tw-ring-offset-width:2px;}.focus\\:cozy-outline-none:focus{outline: 2px solid transparent;outline-offset: 2px;}.focus\\:cozy-ring-2:focus {--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}.focus\\:cozy-ring-branding-primary-400:focus {--tw-ring-opacity: 1;--tw-ring-color: rgb(240 130 172 / var(--tw-ring-opacity));}.disabled\\:cozy-cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cozy-opacity-20:disabled{opacity:.2}.disabled\\:cozy-opacity-40:disabled{opacity:.4}.cozy-group:hover .group-hover\\:cozy-opacity-50{opacity:.5}@media(min-width:640px){.sm\\:-cozy-left-8{left:-2rem}.sm\\:-cozy-right-8{right:-2rem}.sm\\:cozy-min-w-\\[50\\%\\]{min-width:50%}.sm\\:cozy-max-w-sm{max-width:24rem}.sm\\:cozy-max-w-xl{max-width:36rem}.sm\\:cozy-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:cozy-flex-row{flex-direction:row}.sm\\:cozy-bg-light{--tw-bg-opacity:1;background-color:rgb(247 247 248 / var(--tw-bg-opacity))}}@media(min-width:768px){.md\\:cozy-block{display:block}.md\\:cozy-w-auto{width:auto}}@media(min-width:1024px){.lg\\:cozy-max-w-3xl{max-width:48rem}}`),
					r.appendChild(i);
			}
			Bf(r).render(k(ld.StrictMode, { children: k(Xp, { intent: n }) }));
		}
	}
})();
