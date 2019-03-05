/*eslint-disable */

import React, { Component } from 'react';
import classnames from 'classnames';
import { shallowEqual, lazyloadUtil, domHelper } from './utils';
import './styles.scss';

const p = {
	'progressive-img-cont': '_2tnqd0',
	'scale-width': '_1_l8MX',
	'actual-img': '_232NW7',
	'preload-img': '_2VeolH',
	'progressive-image-loaded': 'dImZt_',
	blur: '_3I5S6S',
	'scale-height': '_2FRM9i'
};
export default class ProgressiveImage extends Component {
	f(e, t, n) {
		return (
			t in e
				? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
				  })
				: (e[t] = n),
			e
		);
	}

	// value = n;
	enumerable = !0;
	configurable = !0;
	writable = !0;
	onActualImgLoad = () => {
		'function' == typeof this.props.onImageLoad && this.props.onImageLoad(this.actualImgRef);
	};
	onActualImgError = () => {
		'function' == typeof this.props.onImageError && this.props.onImageError(this.actualImgRef);
	};
	onPreloadImageLoad = () => {
		this.preloadImgRef &&
			((this.preloadImgWidth = this.preloadImgRef.width),
			(this.preloadImgHeight = this.preloadImgRef.height),
			'function' == typeof this.props.onPreImageLoad && this.props.onPreImageLoad(this.preloadImgRef),
			this.setState({
				preloadImgLoaded: !0
			}));
	};
	setActualImgRef = e => {
		this.actualImgRef = e;
	};
	setPreloadImgRef = e => {
		this.preloadImgRef = e;
	};
	state = {
		preloadImgLoaded: !1
	};
	shouldComponentUpdate(e, t) {
		return !Object(shallowEqual)(this.props, e) || !Object(shallowEqual)(this.state, t);
	}
	componentWillReceiveProps(e) {
		Object(shallowEqual)(this.props, e) ||
			(this.lazyId && lazyloadUtil().unregister(this.lazyId), this.registerForLazyLoad());
	}
	componentDidMount() {
		this.registerForLazyLoad();
	}
	componentWillUnmount() {
		this.lazyId && lazyloadUtil().unregister(this.lazyId);
	}
	registerForLazyLoad = () => {
		var e = this;
		var t = this.actualImgRef;
		if (this.actualImgRef && this.preloadImgRef) {
			var n = p['progressive-image-loaded'];
			this.lazyId = lazyloadUtil().register(this.preloadImgRef, function() {
				return (
					e.lazyId && lazyloadUtil().unregister(e.lazyId),
					'function' == typeof e.props.onLazyLoad && e.props.onLazyLoad(),
					Object(domHelper().d)(e.actualImgRef, e.props.src, e.props.placeholder)()
				);
			});
			this.actualImgRef.onload = a => {
				window.requestAnimationFrame(() => {
					Object(domHelper().s)(this.actualImgRef, n), this.onActualImgLoad();
				});
			};
			this.actualImgRef.onerror = a => {
				window.requestAnimationFrame(function() {
					(this.actualImgRef.src = this.props.placeholder),
						Object(c.a)(this.actualImgRef, n),
						this.onActualImgError();
				});
			};
		}
	};

	render() {
		var e,
			t = this.props,
			n = t.src,
			r = t.containerStyle,
			o = t.preloadSrc,
			s = t.initialBlur,
			c = t.scale,
			l = t.preloadImgClassName,
			u = t.className,
			d = t.containerClassName,
			m = (t.impressionId, this.state.preloadImgLoaded),
			h = classnames(
				(this.f((e = {}), p['progressive-img-cont'], !0),
				this.f(e, p['scale-width'], m && c && this.preloadImgWidth >= this.preloadImgHeight),
				this.f(e, p['scale-height'], m && c && this.preloadImgWidth < this.preloadImgHeight),
				e),
				d
			);
		return React.createElement(
			'div',
			{
				className: h,
				style: r
			},
			React.createElement('img', {
				ref: this.setActualImgRef,
				className: classnames(p['actual-img'], u),
				alt: this.props.alt || ''
			}),
			React.createElement('img', {
				ref: this.setPreloadImgRef,
				className: classnames(p['preload-img'], this.f({}, p.blur, s), l),
				src: o || n,
				alt: this.props.alt || '',
				onLoad: this.onPreloadImageLoad
			})
		);
	}
}
ProgressiveImage.defaultProps = {
	src: 'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg',
	initialBlur: !0,
	scale: !0,
	containerStyle: {
		width: '100%',
		height: '100%'
	},
	placeholder: 'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg'
};
