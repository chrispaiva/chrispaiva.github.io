$(document).ready(function($) {
	var $mail = $(".contact ul li span");
	var email = $mail.text() + '@gmail.com';
	$mail.replaceWith('<a href="mailto:' + email + '">' + email + '</a>');

	// http://css-tricks.com/snippets/jquery/smooth-scrolling/
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 80
				}, 800);
				return false;
			}
		}
	});

	// no animation for mobile devices
	if(typeof window.orientation !== 'undefined'){
		return;
	}

	var controller = new ScrollMagic();
	var tween;

	// menu
	new ScrollScene({offset: 0})
		.setPin(".navigation nav")
		.addTo(controller);

	// portfolio tags (item1)
	tween = TweenMax.staggerFrom(".item1 ul li", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
	new ScrollScene({offset: 250, duration: 600})
		.setTween(tween)
		.addTo(controller);

	// portfolio image (item1)
	tween = TweenMax.to(".item1 a:first-child", 1, {backgroundPosition: "0 -0px", ease: Linear.easeNone})
	new ScrollScene({offset: 300, duration: 200})
		.setTween(tween)
		.addTo(controller);

	// portfolio tags (item2)
	tween = TweenMax.staggerFrom(".item2 ul li", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
	new ScrollScene({offset: 700, duration: 650})
		.setTween(tween)
		.addTo(controller);

	// portfolio image (item2)
	tween = TweenMax.to(".item2 a:first-child", 1, {backgroundPosition: "0 -0px", ease: Linear.easeNone})
	new ScrollScene({offset: 800, duration: 200})
		.setTween(tween)
		.addTo(controller);

	/*
	new ScrollScene({offset: 1330, duration: 1070})
		.setPin(".skills .section-header", {pushFollowers: false})
		.addTo(controller);
	*/

	// skills header
	new ScrollScene({offset: 1650, duration: 1500})
		.setPin(".skills h4", {pushFollowers: false})
		.addTo(controller);

	// skills bubbles image
	tween = TweenMax.staggerFrom(".skills .bubbles li img", 10, {scale:0.3, opacity:0.8, delay:0.5, ease:Bounce.easeOut, force3D:true}, 10);
	new ScrollScene({offset: 1400, duration: 1500})
		.setTween(tween)
		.addTo(controller);

	// skills bubbles text
	tween = TweenMax.staggerFrom(".skills .bubbles li p", 10, {css:{alpha: 0.1}}, 10);
	new ScrollScene({offset: 1400, duration: 1700})
		.setTween(tween)
		.addTo(controller);

	// skills bubbles dots
	tween = TweenMax.staggerFrom(".skills .bubbles span", 2, {scale:2.5, opacity:0, delay:0.5}, 2);
	new ScrollScene({offset: 1400, duration: 1700})
		.setTween(tween)
		.addTo(controller);

	// contact background
	tween = TweenMax.to(".contact", 1, {backgroundPosition: "0 -1px", ease: Linear.easeNone})
	new ScrollScene({offset: 3650, duration: 350})
		.setTween(tween)
		.addTo(controller);
});