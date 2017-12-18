# BowFlex Grid

## Introduction

BowFlex Grid is a customizable attribute-based grid system built with the flexbox model. 

#### Why attributes?

I have always found grid-systems, like Bootstrap, that use long-winded classes to get in the way of coding.

## Installation

```bash
npm install bowflexgrid --save-dev

# or

yarn add bowflexgrid
```

## Setup

### Including Default Grid

Include the `path/to/node_modules/bowflexgrid/dist/bowflex.min.css` in either your HTML or your build process.

### Customizing the Grid

Include the following in a `_layout.scss` file:

```scss
@import "path/to/node_modules/bowflexgrid/src/_bowflex.scss"

// number of columns in grid
$columns: 12;

// spacing between columns
$gutter: 20px;

// padding-left/right below "lrg" breakpoing
$mobilePadding: 5%;

// key/size of breakpoints
$bps: (
	sml: 505px,
	med: 768px,
	lrg: 1024px,
	xlg: 1400px
);

// build the grid
@include bowflex-grid($bps, $columns, $gutter, $mobilePadding, lrg, xlg);
```
> Each `$bps` key will be used in the attributes to respond to breakpoints.

> !NOTE: be sure to include `autoprefixer` in your sass build

## Usage

#### Basic
```html
<div bow>
	<div flex>
		<div col="4"></div>
		<div col="4"></div>
		<div col="4"></div>
	</div>
</div>
```

#### Using Breakpoints
```html
<div bow>
	<div flex="nowrap between middle" flex-med="wrap bottom">
		<div col="9" col-med="6"></div>
		<div col="3" col-med="6"></div>
	</div>
</div>
```

### Row Options

#### Flex-Direction
```html
<div flex[-size]="[row|rowrev|vert|vertrev]">
```
> Using `vert` to avoid confusion with the grid col definitions

#### Flex-Wrap
```html
<div flex[-size]="[wrap|nowrap|wraprev]">
```

#### Justify-Content
```html
<div flex[-size]="[left|center|right|between|around]">
```

#### Align-Items
```html
<div flex[-size]="[top|middle|bottom|stretch|baseline]">
```

#### Wrapper-Width Row
```html
<div bow>
	<div flex="fluid"></div>
</div>
```

#### Full-Width Wrapper
```html
<div bow="fluid">
	<div flex></div>
</div>
```

#### Full Width Everything
```html
<div bow="fluid">
	<div flex="fluid"></div>
</div>

<!-- OR JUST -->

<div flex="fluid"></div>
```

### Column Options

#### Size
```html
<div col[-size]="[0-12]">
```
> Setting to `0` will hide the column at that breakpoint

#### Align-Self
```html
<div col[-size]="[top|middle|bottom|stretch|baseline]">
```

### Overrides

#### Flush
```html
<div flex[-size]="flush"></div>
```
```html
<div col[-size]="flush"></div>
```
> Remove the `margin-left` and `margin-right` for all/individual col(s)

#### Fill
```html
<div flex[-size]="fill"></div>
```
```html
<div col[-size]="fill"></div>
```
> Ignore the gutter in the col-width calculation for all/individual col(s)

### All Together Now
```html
<div bow>
	<div flex="around middle" flex-lrg="left bottom">
		<div col="4" col-lrg="5 middle"></div>
		<div col="3" col-med="0"></div>
		<div col="0" col-med="7"></div>
	</div>
</div>
```
This produces:
- `bow`
	- centered div with a max width of `1400px` (xlg)
- `flex="around middle" flex-lrg="left bottom"`
	- centered div with a max width of `1024px` (lrg)
	- equally space out children by using space-around
	- vertically align children to the middle
	- at `1024px` (lrg):
		- align the children to the left
		- vertically align children to the bottom
- `col="9" col-lrg="5 middle"`
	- 4/12 width with `20px` (gutter) spacing
	- at `1024px` (lrg):
		- 5/12 width with `20px` (gutter) spacing
		- force this column to be vertically aligned to the middle
- `col="3" col-med="0"`
	- 3/12 width with `20px` (gutter) spacing
	- at `768px` (med):
		- hidden
- `col="0" col-med="7"`
	- hidden
	- at `768px` (med):
		- 7/12 width with `20px` (gutter) spacing


## Mixins

This package employs some handy mixins, depending on the `$bps` array, that  you can use throughout your project to maintain consistency among breakpoints.

```scss
@include respond($bp, $minOrMax) { [content] }
```

`$bp` : either the key in thr `$bps` array or a specific value

`$minOrMax` : "min" (default) or "max" media query

```scss
@include respondBetween($min, $max) { [content] }
```

`$min` : either the key in thr `$bps` array or a specific value

`$max` : either the key in thr `$bps` array or a specific value

```scss
@include bp($key)
```

`$key` : either the key in thr `$bps` array or a specific value

If key is defined in `$bps`, return the value. Otherwise return `$key`

