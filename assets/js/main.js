// >>
// Start on load
// >>

$(function() { load(); });

// >>
// Load
// >>

var load = function() {
	// wow transitions
	new WOW().init();

	// scrollto transitions
	helpers.scrollFromTo('a[href="#pricing"]', '.pricing');
	helpers.scrollFromTo('a[href="#contact"]', '.contact');
};

var helpers = {

	// >>
	// Scroll From To
	// >>

	scrollFromTo: function(from, to) {
		// Bind the scroll
		$(from).bind('click', function(e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $(to).offset().top
			}, 1250);
		});

		// Make sure to allow exiting out of the scroll
		if (window.addEventListener)
			document.addEventListener('DOMMouseScroll', function() {
				$('html, body').stop(true, false);
			}, false);
			document.addEventListener('mousewheel', function() {
				$('html, body').stop(true, false);
			}, false);
	}
}

// >>
// Map
// >>

var mapOptions = {
	center: new google.maps.LatLng(47.608136, -122.302132),
	zoom: 14,
	maxZoom: 14,
	minZoom: 14,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: true,
	scrollwheel: false,
	draggable: false,
	styles: [
		{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#444444"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [
				{
					"color": "#f2f2f2"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 45
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
				{
					"color": "#3279b2"
				},
				{
					"visibility": "on"
				}
			]
		}
	]
};

var map;
function initialize() {
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker = new google.maps.Marker({
		position: mapOptions.center,
		map: map,
		title: 'Accelerate Networks',
		icon: '/assets/img/resources/marker.png',
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', function() {
	map.setCenter(mapOptions.center);
});
