# Basic Usage

## Default Values

**columns**: 12

**gutter**: 20px

**mobilePadding**: 5%

**bps**: (
	sml: 505px,
	med: 768px,
	lrg: 1024px,
	xlg: 1400px
)

## Implementation

### Basic

```html
<div bow>
	<div flex>
		<div col="4"></div>
		<div col="4"></div>
		<div col="4"></div>
	</div>
</div>
```

### With Breakpoints

```html
<div bow>
	<section
		flex="wrap between middle"
		flex-med="nowrap bottom"
		>
		<div
			col="12"
			col-sml="9"
			col-med="6"
			></div>
		<div
			col="12"
			col-sml="3"
			col-med="6"
			></div>
	</section>
</div>
```
