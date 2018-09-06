# Flex Wrap

## CSS

```css
.row {
	flex-wrap: [wrap|nowrap|wrap-reverse];
}
```

## Bowflex

```html
<div flex(-size)="[wrap|nowrap|wraprev]">
```

## Translation

|Flexbox|BowFlex|Behaviour\*|
|:-----:|:-----:|:-------|
|`wrap`|`wrap`|children flow into multiple row|
|`nowrap`|`nowrap`|children forced into 1 row|
|`wrap-reverse`|`wraprev`|same as `wrap` but backwards|
