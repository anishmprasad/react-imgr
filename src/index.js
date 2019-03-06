/*eslint-disable */

import React, { Component } from 'react';
import classnames from 'classnames';
import { shallowEqual, lazyloadUtil, domHelper } from './utils';
import './styles.scss';
export default class ReactImgr extends Component {
	state = {
		preloadImgLoaded: !1
	};
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
	shouldComponentUpdate(nextProps, nextState) {
		return !Object(shallowEqual)(this.props, nextProps) || !Object(shallowEqual)(this.state, nextState);
	}
	componentWillReceiveProps(nextProps) {
		Object(shallowEqual)(this.props, nextProps) ||
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
		if (this.actualImgRef && this.preloadImgRef) {
			var n = 'progressive-image-loaded';
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
			o = t.preloadSrc,
			d = t.containerClassName,
			m = this.state.preloadImgLoaded,
			h = classnames(
				(this.f((e = {}), 'progressive-img-cont', !0),
				this.f(e, 'scale-width', m && this.props.scale && this.preloadImgWidth >= this.preloadImgHeight),
				this.f(e, 'scale-height', m && this.props.scale && this.preloadImgWidth < this.preloadImgHeight),
				e),
				d
			);
		return React.createElement(
			'div',
			{
				className: h,
				style: this.props.containerStyle
			},
			React.createElement('img', {
				ref: this.setActualImgRef,
				className: classnames('actual-img', this.props.className),
				alt: this.props.alt || ''
			}),
			React.createElement('img', {
				ref: this.setPreloadImgRef,
				className: classnames(
					'preload-img',
					this.f({}, 'blur', this.props.initialBlur),
					this.props.preloadImgClassName
				),
				src: o || n,
				alt: this.props.alt || '',
				onLoad: this.onPreloadImageLoad
			})
		);
	}
}
ReactImgr.defaultProps = {
	placeholder: 'https://via.placeholder.com/67x83',
	preloadSrc: 'https://via.placeholder.com/50x50',
	src: 'https://via.placeholder.com/3376x560',
	initialBlur: !0,
	scale: !0,
	containerStyle: {
		width: '100%',
		height: '100%'
	}
};
