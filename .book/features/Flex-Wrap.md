# Flex Wrap

```html
<div flex(-size)="[wrap|nowrap|wraprev]">
```

## CSS

```css
.row {
	flex-wrap: [wrap|nowrap|wrap-reverse];
}
```
## Translation

|Flexbox|BowFlex|Behaviour\*|
|:-----:|:-----:|:-------|
|`wrap`|`wrap`|children flow into multiple row|
|`nowrap`|`nowrap`|children forced into 1 row|
|`wrap-reverse`|`wraprev`|same as `wrap` but backwards|
