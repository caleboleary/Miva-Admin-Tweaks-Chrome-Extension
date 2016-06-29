document.getElementById('mm9_screen_content_frame').onload = function() {
	console.log('Caleb\'s Admin Tweaks running');

	// select search text on focus of search bar -- to prevent having to backspace last search
	document.getElementById('mm9_screen_header_search_box_search').onfocus = function(event: Object) {
	   this.select();
	};
};