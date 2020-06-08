const $ = require('jquery');
import throttle from 'lodash.throttle';
import Utility from './utility';
var u = new Utility();

var mobileNavigation = {
	init: function() {
		var _nav = $('.nav-global');
		var _link = $('.nav-global__item a');
		var _navBtn = $('.nav-btn');
		var _aboutY = $('.about').offset().top;

		this._isActive = false;
		var _self = this;

		_navBtn.on('click', function() {

			if (!_self._isActive) {
				_self._isActive = true;
				_nav.addClass('--active');
				_navBtn.addClass('--active');
			} else if (_self._isActive) {
				_self._isActive = false;
				_nav.removeClass('--active');
				_navBtn.removeClass('--active');
			}
		})

		_link.on('click', function() {
			_self._isActive = false;
			_nav.removeClass('--active');
			_navBtn.removeClass('--active');
		})

		window.addEventListener('scroll', throttle(function() {
			if (_aboutY < u.wy) {
				_navBtn.addClass('nav-btn--scroll');
			} else {
				_navBtn.removeClass('nav-btn--scroll');
			}
		}, 100));

	},
}

module.exports = mobileNavigation;
