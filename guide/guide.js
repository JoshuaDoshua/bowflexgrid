(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-74103893-1', 'auto');
ga('send', 'pageview');

jQuery(document).ready(function($) {
	var wow = new WOW();
	wow.init({
		offset: '200px'
	});

	$('.gaevt').click(function() {
		ga('send','event','link','click',$(this).attr('data-label'));
	});

	var $play = $('#play');

	var $playCols = $play.find('.play-col');
	var $playTools = $('#play-tools');
	var $playBow = $('#play-bow');
	var $playFlex = $('#play-flex');

	var flexRules = {
		direction: 'row',
		wrap: 'wrap',
		justify: 'between',
		align: 'top',
		fluid: null,
		flush: null,
		fill: null
	};

	var updateFlex = function() {
		var str = '';
		str += flexRules.direction + " ";
		str += flexRules.wrap + " ";
		str += flexRules.justify + " ";
		str += flexRules.align;
		if (flexRules.fluid) { str += ' ' + flexRules.fluid; }
		if (flexRules.flush) { str += ' ' + flexRules.flush; }
		if (flexRules.fill) { str += ' ' + flexRules.fill; }

		$playFlex.attr('flex', str);
	};
	updateFlex();

	// col sizes
	$playCols.find('select').on('change', function(e) {
		$(this).closest('.play-col').attr('col', $(this).val());
	});

	// main flex selects
	$playTools.find('select').on('change', function(e) {
		console.log(e);
		flexRules[e.target.name] = e.target.value;
		updateFlex();
	});
	// bow fluid
	$playTools.find('#play-bow-fluid input').on('change', function(e) {
		if (e.target.checked) {
			$playBow.attr('bow', 'fluid');
		} else {
			$playBow.attr('bow', '');
		}
	});
	// flex fluid
	$playTools.find('#play-flex-fluid input').on('change', function(e) {
		if (e.target.checked) {
			flexRules.fluid = 'fluid';
		} else {
			flexRules.fluid = null;
		}
		updateFlex();
	});
	// flex flush/fill
	$playTools.find('#play-flush-fill input').on('change', function(e) {
		if (e.target.checked) {
			flexRules[e.target.name] = e.target.name;
		} else {
			flexRules[e.target.name] = null;
		}
		updateFlex();
	});

});
