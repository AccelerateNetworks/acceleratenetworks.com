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
