# Align Items

replace flex-start,flex-end with top,bottom & center with middle

```html
<div flex(-size)="[top|middle|bottom|stretch|baseline]">
```

## CSS

```css
.row {
	align-items: [flex-start|center|flex-end|stretch|baseline];
}
```

## Translation

|Flexbox|BowFlex|Behaviour\*|
|:-----:|:-----:|:----------|
|`flex-start`|`top`|children vertically aligned to the top|
|`center`|`middle`|children vertically in the middle|
|`flex-end`|`bottom`|children vertically aligned to the bottom|
|`stretch`|`stretch`|children vertically fill the container\*\*|
|`baseline`|`baseline`|children vertically aligned to the typographic baseline|

> \* Relative to siblings
>
> \*\* Still respecting `min-height` & `max-height` declarations
