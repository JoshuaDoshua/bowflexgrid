# Customization

Include the following in one of your sass files:

```scss
@import "path/to/node_modules/bowflexgrid/src/_bowflex.scss";

$cols: 12;
$gutter: 20px;
$mobilePadding: 5%;
$bps: (
	sml: 505px,
	med: 768px,
	lrg: 1024px,
	xlg: 1400px
);
$main: lrg;
$outer: xlg;

@include bowflex-grid($bps, $cols, $gutter, $mobilePadding, $main, $outer);
```

> :grey_exclamation: Be sure to include `autoprefixer` in your sass build
>
> default uses > (2% browsers)
>
> checkout this projects `gulpfile` for more info

## Variables

`$cols` - number of columns in your grid

`$gutter` - space between columns

`$mobilePadding` - row padding for the main container below the main breakpoint

`$bps` - associate array of breakpoints
