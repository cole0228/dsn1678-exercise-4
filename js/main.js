var $win = $(window);
var $sun = $('.sun');
var $sunSection = $win('.sun-section');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
});
