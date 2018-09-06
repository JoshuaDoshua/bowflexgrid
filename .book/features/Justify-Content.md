# Justify Content

## CSS

```css
.row {
	justify-content: [flex-start|center|flex-end|space-between|space-around|space-evenly];
}
```

## BowFlex

```html
<div flex(-size)="[left|center|right|between|around|even]">
```

## Translation

|Flexbox|BowFlex|Behaviour|
|:-----:|:-----:|:-------|
|`flex-start`|`left`|children distributed from the beginning of the row|
|`center`|`center`|children distributed from the center of the row|
|`flex-end`|`right`|children distributed from the end of the row|
|`space-between`|`between`|children distributed evenly from beginning to end|
|`space-around`|`around`|children distributed with equal space around|
|`space-evenly`|`even`|children distributed with equal space between items|

# ! TODO - add space-evenly
