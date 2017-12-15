# BowFlex

A sass grid creator based on the flexbox model, using data attributes for flex options and built mobile first.

[Checkout the guide to see all the features in action](http://joshuadoshua.github.io/bowflexgrid/)

[Checkout the SASSDocs for a quick overview](http://joshuadoshua.github.io/bowflexgrid/docs/)

## Installation

**via GIT**

```
# via GIT
git clone https://github.com/JoshuaDoshua/bowflexgrid.git

# via NPM
npm install -D bowflexgrid

# via Yarn
yarn add bowflexgrid
```

**Direct Link via GitHub CDN**
```
<link rel="stylesheet" href="https://cdn.rawgit.com/JoshuaDoshua/bowflexgrid/master/dist/bowflex.min.css" media="screen">
```


## SASS Setup

If you are happy with the default breakpoints you can simply include the `bowflex.min.css` file in your HTML. The default file minified is `~25KB`.

If you would like to customize the breakpoints, you can copy/paste the contents of `bowflex.scss` in your SASS files, include the `_bowflex.scss` file, and customize as needed.

> **IMPORTANT**
>
> be sure to use `autoprefixer` if you are generating your own grid.

### Variables

`$columns` : number of columns in your grid (12)

`$gutter` : space between your columns (20px)
> this does not apply to the `space-around` & `space-between` flexbox rules

`$bps` : associative array of breakpoints

```scss
$bps: (
	sml: 400px,
	med: 768px,
	lrg: 1200px,
	xlg: 1600px
);
```
Each key will be used in the flex-key suffixes `(col-sml="" col-lrg="")`, and a keyword in the `respond(sml)` mixin.

You can name these keys **anything** you like and use them in your attribute declarations.

If you need to reference these breakpoints elsewhere you can use `map-get`

```scss
  max-width: map-get($bps,sml)
```

`$container` : name of the outer wrapper container (bow)

`$inner` : name of the inner wrapper container (flex)

### Mixins

When including the `_bowflex.scss` partial, you can take advantage of these media query mixins in your project.

---

`respond($bp, $minOrMax) { [content] }`

> wraps content in a media query

> `$bp` can be the `$bps` key: `sml`, a variable (with unit), or an explicit size: `1140px`

> defaults to 'min' (mobile first)

> output: `@media screen and ($minOrMax-width: $bp) { [content] }`

```scss
.box {
  background: $primary;

  @include respond(lrg) {
    background: $secondary;
  }
}
```

---


`respondBetween($min, $max) { [content] }`


> wraps content in min and max query

> `$bp` can be the `$bps` key: `sml`, a variable (with unit), or an explicit size: `1140px`

> You may not mix a breakpoint key and size

> However, you can use `map-get($bps, sml)`

> output: `@media screen and (min-width: $min) and (max-width: $max) { [content] }`

```scss
  .box {
    background: $primary;

    @include respondBetween(sml,med) {
      background: $secondary;
    }
  }
```

## Containers

```css
<div bow>

# outer wrapper
# simple centered div with max-width: $outer
```

> outer wrapper: simple centered div with max-width

> `$outer` width

```css
<div flex>
```

> inner content wrapper, defines _flex_ display and defaults

> `$main` width

**Fluid Containers**

> changes to `max-width: 100%` instead of `$outer`/`$main`

```css
<div bow="fluid">
	<div flex>
```
```css
<div bow>
	<div flex="fluid">
```
```css
<div bow="fluid">
	<div flex="fluid">
```

## Flebox Guides and Help

[FlexFroggy - Getting started](http://flexboxfroggy.com/)

[CSS-Tricks Flex Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[Flex CheatSheet](http://www.sketchingwithcss.com/samplechapter/cheatsheet.html)

## Rows

**Default Row Rules**
```scss
[flex] {
  width: 100%;
  display: flex;

  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @main breakpoint
    max-width: $main;
    margin-left: auto;
    margin-right: auto;
}
```

**Row Options**

```html
<div flex(-key)="
	  [row|vertical|rowrev|vertrev]
	  [fill]
	  [wrap|nowrap|wraprev]
	  [start|center|end|between|around]
	  [top|middle|bottom|stretch|baseline]
		--OR--
		[container]
	  "
	>
```
> Note: "Fill" removes margins/gutters from your columns

> Note: "container" will switch `display:flex` to `display:block` to override child displays without losing the `max-width` container property

> Note: `-key` is your breakpoint key, or none (flex-sml)

**Defining a Row**

> I recommend using multi-line element attributes

```html
<div class="post__wrap"
	bow
	>
  <article class="post"
    flex="column"
    flex-sml="row wrap between"
    flex-med="nowrap around stretch"
    >
      This is a flex row that is column based up to the sml
	  breakpoint, then switches to horizontal, wrapping the
	  elements, evenly spaced and flush with the edges, and
	  at the medium breakpoint forces one row spaces them
	  equally apart and with equal height.
  </article>
</div>
```

## Columns

Since the `[flex]` attribute is setup with flexbox, we don't _need_ to define any column rules if we want to just let flexbox do it's thing.
Take a look at the default `[flex]` rules to see how the child elements will react without defining columns.

Column options handle everything except order. For the time being, if you need to alter the display from the DOM order of the elements you will need to do so with explicit css rules.

**Column Options**

```html
col(-size)="
  [(0-12)]
  [off-(1-12)]
  [top|middle|bottom|end|stretch|baseline]
  "
```

> A col="0" will provide a `display:none;` for the size-range
>
> col="fill" translates to `flex: 1;`
>
> Unfortunately, we cant get define grow/shrink/order without adding a bunch of overhead


## Defining Breakpoints with Attributes

The grid system uses abbreviations for maintaining mobile first responsive layouts. Thinking mobile first, the first set of rules do not contain a prefix.

`col="12"`

If there are no additional column attributes declared, this will always span 12 columns.

The suffixes are the keys you define in your `$bps` variable.

```html
<div
  col="12"
  col-sml="6"
  col-med="4"
  col-lrg="3 bottom"
  >
```

which would (with a 12 col grid) use the following rules:

```
(*pseudocode)

flex-basis: 100%;

@sml-breakpoint
  flex-basis: ~50%;

@med-breakpoint
  flex-basis: ~33%;

@lrg-breakpoint
  flex-basis: ~25%;
  align-self: bottom;
```

---

**Pull requests for bugs and enhancements welcome!**



# GUIDE OUTLINE

## Default

## Columns

### Common
### Even
### Complimentary

## Direction
### Row
### Row Reverse
### Wrap
### Wrap Reverse
### No Wrap
### Column
### Column Reverse

## Horizontal Alignment
### Left
### Center
### Right
### Around
### Between

## Horizontal Column Alignment
### Left
### Center
### Right

## Vertical Alignment
### Top
### Middle
### Bottom
### Stretch
### Baseline

## Column Alignments
### Self Top
### Self Middle
### Self Bottom
### Self Stretch
### Self Baseline
### Column Self Left
### Column Self Center
### Column Self Right

## Gutter Overrides
### Flush Row
### Flush Column
### Fill Row
### Fill Column
### Wrap Margins (? same as flush?)
### Wrap Reverse Margins

## Responsive
### Flex
### Col
### Hidden


