# FAQ

## Common Wrap Margin Issues

Margins are added to items that don't have a `center|left|right` flex attribute. If you are creating an evenly spaced grid, you can probably get away with `around|between|even`.

Often, you'll want to wrap grid elements with an unknown number of items. You can handle this two ways. In the code, you can use a modulus operator to dhynamically add a `flush` value to the column attribute value.

```php
// 2 columns
<div flex="center">
	<?php for ($i = 0; $i < count($items); $i++): ?>
		<article col="12" col="6 <?= $i % 2 === 0 ? 'flush' : ''; ?>">
			...
		</article>
	<?php endfor; // count(items) ?>
</div>

// 3 columns
<div flex="center">
	<?php for ($i = 0; $i < count($items); $i++): ?>
		<article col="12" col="4 <?= $i % 3 === 0 ? 'flush' : ''; ?>">
			...
		</article>
	<?php endfor; // count(items) ?>
</div>
```

Or, a more simple approach is to just manage this through CSS

```scss
// 2 column
.grid-item {
	&:nth-child(2n-1) { margin-left: 0; }
}
// 3 column
.grid-item {
	&:nth-child(3n-1) { margin-left: 0; }
}
```
