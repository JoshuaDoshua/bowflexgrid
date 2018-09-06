# Containers

## Main Row Container

```html
<div flex>
	...
</div>
```

### Translation

```html
<div flex="row right bottom">
	...
</div>
```

```css
div {
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-end;
	...
	// default bowflex rules...*
}
```

> \* Bowflex defines default rules for a `<div flex>`, this is just an example

> \* ! Move this out of features

## With a Wrapper Container

This container is optional; use it if you need to wrap something wider than the main content area.

```html
<div bow>
	<section flex>
		...
	</section>
</div>
```

### Translation

```css
div {
	max-width: 1600px;
	margin-left: auto;
	margin-right: auto;
	display: block;
}
section {
	max-width: 1140px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	...
}
```

> \* This is just an example to explain the relevant methods
