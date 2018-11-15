
window.ga = ga;

var gaEvents = (function() {
	'use strict';

	function extend (target, source) {
        for (var key in source) {
            if (!(key in target)) {
                target[ key ] = source[ key ];
            }
        }

        return target;
    }

	function pageView (loc) {
		return new Promise(function (resolve, reject) {
			ga('send', {
				'hitType': 'pageview',
				'page': loc
			});
			resolve();
		});
	}

	function event (params) {
		return new Promise(function (resolve, reject) {
			ga('send', 'event', params.category, 'click', params.label, params.value);
			resolve();
		});
	}

	function social (params) {
		return new Promise(function (resolve, reject) {
			ga('send', 'social', params.socialName, 'click', params.href);
			resolve();
		});
	}

	function next(data) {
    	if(data.href) {
    		window.open(data.href, data.target);
    	}
    }

	var elementClicked = function (e) {
		e.preventDefault();
		var fields = {};
		fields.href = this.getAttribute("href") !== null ? this.getAttribute("href") : false;
		fields.target = this.getAttribute("target") !== null ? this.getAttribute("target") : '_self';
		fields.label = this.getAttribute("data-label") !== null ? this.getAttribute("data-label") : '';
		fields.value = this.getAttribute("data-value") !== null ? this.getAttribute("data-value") : '1';
		fields.category = this.getAttribute("data-category") !== null ? this.getAttribute("data-category") : '';
		fields.socialName = this.getAttribute("data-social-network") !== null ? this.getAttribute("data-social-network") : '';

		switch (fields.category) {
			case 'Casestudy':
				event(fields).then(function() {
					next(fields);
				});
				break;
			case 'Social':
				social(fields).then(function() {
					next(fields);
				});
				break;
			default: 
				event(fields).then(function() {
					next(fields);
				});
		}
		return false;
	}

	function init () {
		var title = document.title;
		var loc = location.pathname;
		pageView(loc);

		$(document).on('click', '#cs-study-carousel .slick-pre', function() {
			event({
				category: "Casestudy",
				label: "Next",
				value: 1
			});
		});

		$(document).on('click', '#cs-study-carousel .slick-nex', function() {
			event({
				category: "Casestudy",
				label: "Previous",
				value: 1
			});
		});

		$(document).on('click', '#testimonial-controls .slick-pre', function() {
			event({
				category: "Casestudy",
				label: "Next",
				value: 1
			});
		});

		$(document).on('click', '#testimonial-controls .slick-nex', function() {
			event({
				category: "Casestudy",
				label: "Previous",
				value: 1
			});
		});
		
		var elems = document.getElementsByClassName("ga-event");
		for (var i = 0; i < elems.length; i++) {
		    elems[i].addEventListener('click', elementClicked, false);
		}
	}

	function main () {
		init();
	}

	return extend( main, {
		event: event
	});
})();

$(function() {
    gaEvents();
});