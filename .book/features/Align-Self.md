# Align Self

```html
<div col(-size)="[top|middle|bottom|stretch|baseline]">
```

## CSS

```css
.column {
	align-self: [flex-start|center|flex-end|stretch|baseline];
}
```

## Translation

|Flexbox|BowFlex|Behaviour\*|
|:-----:|:-----:|:----------|
|`flex-start`|`top`|column vertically aligned to the top|
|`center`|`middle`|column vertically in the middle|
|`flex-end`|`bottom`|column vertically aligned to the bottom|
|`stretch`|`stretch`|column vertically fill the container\*\*|
|`baseline`|`baseline`|column vertically aligned to the typographic baseline|

> \* Relative to siblings
>
> \*\* Still respecting `min-height` & `max-height` declarations
