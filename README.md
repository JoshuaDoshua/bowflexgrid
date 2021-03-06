# BowFlex Grid

[![npm](https://img.shields.io/npm/v/bowflexgrid.svg?style=for-the-badge)](https://www.npmjs.com/package/bowflexgrid)
[![npm](https://img.shields.io/npm/dt/bowflexgrid.svg?style=for-the-badge)](https://www.npmjs.com/package/bowflexgrid)
[![Github file size](https://img.shields.io/github/size/joshuadoshua/bowflexgrid/dist/bowflex.min.css.svg?style=for-the-badge)](https://www.npmjs.com/package/bowflexgrid)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/bowflexgrid.svg?style=for-the-badge)](https://bundlephobia.com/result?p=bowflexgrid@1.0.9)
[![license](https://img.shields.io/github/license/joshuadoshua/bowflexgrid.svg?style=for-the-badge)](https://github.com/JoshuaDoshua/bowflexgrid/blob/master/License)

## Introduction

BowFlex Grid is a customizable attribute-based grid system built with the flexbox model. 


## Features

- Full FlexBox feature set (almost)
	- order/grow/shrink won't be supported until css `attr` works beyond pseudo elements
	- align-content rules are superfluous as well and not included (unless someone can present a good case)
	- both can be easily overriden for special-cases
- SASS Based & Completely Customizable
	- include in your own build
	- define any number of breakpoints
	- nickname them anything you like
	- File size adjust with how many break points you define
- Attribute based
	- separate grid logic from classes
	- organized and readable HTML
- Intuitive declarations
	- `justify-content: flex-start` becomes `flex='left'`
	- `align-items: center` becomes `flex='middle'`
	- `justify-content: center; align-items: center` becomes `flex='center middle'`
- Handy, simple media query mixines
- Mobile first

## Helpful Links

- [Checkout all the features in action](https://joshuadoshua.github.io/bowflexgrid)
- [View the Sass-Docs](https://joshuadoshua.github.io/bowflexgrid/docs/)
- [CSS-Tricks FlexBox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Learn about FlexBox with FlexBox Froggy](http://flexboxfroggy.com/)

## Installation

```bash
npm install bowflexgrid

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

// number of columns
$cols: 12;

// space between columns
$gutter: 20px;

// added before main breakpoint to container left/right
$mobilePadding: 5%;

// key/size of breakpoints
$bps: (
	sml: 505px,
	med: 768px,
	lrg: 1024px,
	xlg: 1400px
);

$main: lrg;
$outer: xlg;

// build the grid
@include bowflex-grid($bps, $cols, $gutter, $mobilePadding, $main, $outer);
```

`$bps` - associative array of breakpoints, each key used to declare breakpoints

`$cols` - number of columns in grid
 
`$gutter` - spacing between columns
 
`$mobilePadding` - padding-left/right below the main breakpoint
 
`$main` - $bps key for main content wrapper,

`$outer` - $bps key for outer content wrapper

> :grey_exclamation: Be sure to include `autoprefixer` in your sass build
>
> Default uses sass & postcss[autoprefixer(> 2% browsers),cssnano]
>
> checkout the `gulpfile.js` grid task for full build process
 
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

#### With Breakpoints
```html
<div bow>
	<div class="foo"
		flex="nowrap between middle"
		flex-med="wrap bottom"
		>
		<div class="bar"
			col="9"
			col-med="6"
			></div>
		<div class="bar"
			col="3" col-med="6"
			></div>
	</div>
</div>
```

### Default Bow/Flex Rules
```css
[bow] {
	display: block;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	max-width: 1400px; /** $outer */
}
[flex] {
	display: flex;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	max-width: 1024px; /** $main */

	flex: 0 1 auto;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	
	padding-left:  5%;  /** $mobilePadding */
	padding-right: 5%; /** $mobilePadding */
}
@media screen and (min-width: 1024px) { /** $main */
	[flex] {
		padding-left: 0;
		padding-right: 0;
	}
}
```

> Feel free to look around at `src/_bowflex.scss` to see how all of the rules work. It's not too complicated!

### Row Options

#### Flex-Direction

```html
<div flex(-size)="[row|rowrev|vert|vertrev]">
```
> Using `vert` to avoid confusion with the grid col definitions

#### Flex-Wrap

```html
<div flex(-size)="[wrap|nowrap|wraprev]">
```

#### Justify-Content

```html
<div flex(-size)="[left|center|right|between|around]">
```

#### Align-Items

```html
<div flex(-size)="[top|middle|bottom|stretch|baseline]">
```

#### Full-Width Wrapper
```html
<!-- fill wrapper to window -->
<div bow="fluid">
	<div flex></div>
</div>

<!-- fill container to wrapper -->
<div bow>
	<div flex="fluid"></div>
</div>

<!-- fill both to window -->
<div bow="fluid">
	<div flex="fluid"></div>
</div>
<!-- same as -->
<div>
	<div flex="fluid"></div>
</div>
```

### Column Options

#### Size
```html
<div col(-size)="[0-12|auto]">
```

> You don't need to define a col if you just want to default to simple flexbox rules
> 
> Setting to `0` will hide the column at that breakpoint
>
> Setting to `auto` will ignore the flex-basis (width) value at that breakpoint

#### Align-Self

```html
<div col(-size)="[top|middle|bottom|stretch|baseline]">
```

### Overrides

#### Container

> Use `flex` as a simple container, without default flex rules

```html
<div flex="container"></div>
```

#### Flush

> Remove the `margin-left` and `margin-right` for all/individual col(s)

```html
<div flex(-size)="flush"></div>
```
```html
<div col(-size)="flush"></div>
```

#### Fill

> Ignore the gutter in the col-width calculation for all/individual col(s)

```html
<div flex(-size)="fill"></div>
```
```html
<div col(-size)="fill"></div>
```

### All Together Now
```html
<div bow>
	<div class="foo foo--bar"
		flex="around middle" flex-lrg="left bottom"
		>
		<div class="foo__bar foo__bar--baz"
			col="4" col-lrg="5 middle"
			></div>
		<div class="foo__bar foo__bar--baz"
			col="3" col-med="0"
			></div>
		<div class="foo__bar foo__bar--baz"
			col="0" col-med="7"
			></div>
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
	- 9/12 width with `20px` (gutter) spacing
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

This package defines some handy mixins, depending on the `$bps` array, that you can use throughout your project to maintain consistency among breakpoints.

```css
@include respond($bp, $minOrMax) { [content] }
```

`$bp` : either the key in thr `$bps` array or a specific value

`$minOrMax` : "min" (default) or "max" media query

```css
@include respondBetween($min, $max) { [content] }
```

`$min` : either the key in thr `$bps` array or a specific value

`$max` : either the key in thr `$bps` array or a specific value

```css
@include bp($key)
```

`$key` : either the key in thr `$bps` array or a specific value

If key is defined in `$bps`, return the value. Otherwise return `$key`

## That's It!

If you've gotten this far, you should [checkout all the features in action](https://joshuadoshua.github.io/bowflexgrid)

## TODO

- [ ] look at [better ways](https://github.com/sass-mq/sass-mq/blob/master/_mq.scss) to write media query mixin
