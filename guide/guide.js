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

	var $play = $('#playground');
	var $playTools = $('#play-tools');
	var $playToolsCol = $playTools.find('.play-tools-col');

	var $playCols = $play.find('.play-col');
	var $playBow = $('#play-bow');
	var $playFlex = $('#play-flex');

	var $selects = $playTools.find('select').selectmenu({
		change: function(evt,ui) {
			flexRules[evt.target.name] = evt.target.value;
			updateFlex();
		}
	});
	var $addCol = $playTools.find('#add');
	var $removeCol = $playTools.find('#remove');
	var $handles = $playCols.find('.ui-resizable-handle').hide();
	$playTools.find('#resize').on('click', function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('active');
		$handles.toggle();
		$playTools
			.find('select,input[type="checkbox"],#add,#remove')
			.prop('disabled', function(i,v) {
				return !v;
		});
		if ($this.hasClass('active')) {
			$selects.selectmenu('disable');
			$('.play-col').resizable({
				handles: 's',
				minHeight: '50px',
				maxHeight: '200px'
			});
		} else {
			$selects.selectmenu('enable');
			$('.play-col').resizable('destroy');
		}
	});
	$addCol.on('click', function(e) {
		e.preventDefault();
		var clone = $('.play-col').last().clone(true);
		var size = clone.attr('col');
		clone.find('select').val(size);
		clone.appendTo($('#play-flex'));
	});
	$removeCol.on('click', function(e) {
		e.preventDefault();
		$('.play-col').last().remove();
	});

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
		$playBow.toggleClass('atts');
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
