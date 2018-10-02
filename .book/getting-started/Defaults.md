# Defaults

```html
<div bow>
	<div flex>
		...
	</div>
</div>
```

```css
[bow] {
	display: block;
	max-width: 1400px;
}
[bow], [flex] {
	width: 100%;
	margin-left: auto;
	margin-right: auto;
}
[flex] {
	display: flex;
	max-width: 1024px;
	flex: 0 1 auto;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	
	// mobile padding
	padding-left: 5%;
	padding-right: 5%;
}
@media screen and (min-width: 1024px) {
	[flex] {
		padding-left: 0;
		padding-right: 0;
	}
}
```
