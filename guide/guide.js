jQuery(document).ready(function($) {
	var wow = new WOW();
	wow.init({
		offset: '200px'
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
