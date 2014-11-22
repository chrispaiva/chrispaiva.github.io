$(document).ready(function($) {
	var controller = new ScrollMagic();
	var tween;

	new ScrollScene({offset: 0})
		.setPin("#pin1")
		.addTo(controller);

	tween = TweenMax.staggerFrom(".item1 ul li", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
	new ScrollScene({offset: 100, duration: 700})
		.setTween(tween)
		.addTo(controller);

	tween = TweenMax.staggerFrom(".item2 ul li", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
	new ScrollScene({offset: 400, duration: 700})
		.setTween(tween)
		.addTo(controller);
});