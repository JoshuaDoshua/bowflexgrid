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

	var $selects = $playTools.find('select').on('change', function(evt) {
		flexRules[evt.target.name] = evt.target.value;
		updateFlex();
	});
	$playTools.find('#add').on('click', function(e) {
		e.preventDefault();
		var clone = $('.play-col').last().clone(true);
		var size = clone.attr('col');
		clone.find('select').val(size);
		clone.appendTo($('#play-flex'));
	});
	$playTools.find('#remove').on('click', function(e) {
		e.preventDefault();
		$('.play-col').last().remove();
	});
	$playTools.find('#randomize').on('click', function(e) {
		e.preventDefault();
		$play.find('.play-col').each(function(index, item) {
			$(item).find('hr').remove();
			var num = Math.floor(Math.random() * 20) + 1;
			for (var i = 0; i < num; i++) {
				$(item).append('<hr/>');
			}
		});
	});
	$playTools.find('#reset').on('click', function(e) {
		e.preventDefault();
		$play.find('.play-col').each(function(index, item) {
			$(item).find('hr').remove();
		});
	});

	var flexRules = {
		direction: '',
		wrap: '',
		justify: '',
		align: '',
		fluid: null,
		flush: null,
		fill: null
	};

	var updateFlex = function() {
		$playFlex.attr('flex', Object.values(flexRules).join(" ").trim())
	};
	updateFlex();

	// cols
	var updateCol = function(e) {
		$col = $(e.target).closest('.play-col');
		var str = $col.find('select').val();
		var $checks = $col.find('input');
		$checks.each(function(index,item) {
			if (item.checked) {
				str += " " + item.value;
			}
			$col.attr('col', str);
		});

	};
	$playCols.find('select').on('change',updateCol);
	$playCols.find('input').on('change', updateCol);

	// main flex selects
	$playTools.find('select').on('change', function(e) {
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
	$playTools.find('.play-flush-fill').on('change', function(e) {
		if (e.target.checked) {
			flexRules[e.target.name] = e.target.name;
		} else {
			flexRules[e.target.name] = null;
		}
		updateFlex();
	});
	var section = document.querySelectorAll(".scrollable");
	var sections = {};
	var i = 0;

	Array.prototype.forEach.call(section, function(e) {
		sections[e.id] = e.offsetTop;
	});

	$(window).scroll(function() {
		var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

		for (i in sections) {
			if (sections[i] <= scrollPosition) {
				$('.active').removeClass('active');
				$('a[href*=' + i + ']').addClass('active');
			}
		}
	});

	$('#nav a').click(function(e) {
		e.preventDefault()
		let tar = $(e.target.hash)
		$('body,html').stop().animate({
			scrollTop: tar.offset().top
		});
	});

});
