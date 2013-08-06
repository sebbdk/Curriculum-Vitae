(function() {

	$(document).on('ready', function() {
		$(document).on('click', '.sourcelink', openSource);
	});

	function openSource(evt) {
		evt.preventDefault();
		window.open("view-source:" + window.location.href, '_blank');
	}

})();