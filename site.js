$(document).ready(function($) {
	var controller = new ScrollMagic();

	new ScrollScene({offset: 0})
					.setPin("#pin1", {pushFollowers: false})
					.addTo(controller);

	// show indicators (requires debug extension)
	scene.addIndicators();
});