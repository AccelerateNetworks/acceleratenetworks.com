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
	switch(loc) {
		case 'index.html':
			break;
	}
};
