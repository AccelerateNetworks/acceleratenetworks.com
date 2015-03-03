// >>
// Get the location on the page
// >>

var loc = location.href.split('/')[3].split("?")[0].split("#")[0];

// >>
// Start on load
// >>

$(function() { load(); });

// >>
// Load
// >>

var load = function() {
	// If we have '.html' at the end, remove it.
	loc = loc.replace('.html', '');

	// If we're on 'index' just set it to an empty string
	loc = loc == 'index' ? '' : loc;

	// Run the switch statment
	switch(loc) {
		case '':
			new WOW().init();
			break;
	}
};

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
