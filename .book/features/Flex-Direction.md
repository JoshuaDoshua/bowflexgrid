# Flex Direction

use "vert" to avoid confusion with the grid column definitions

```html
<div flex(-size)="[row|rowrev|vert|vertrev]">
```

## CSS

```css
.row {
	flex-direction: [row|row-reverse|column|column-reverse];
}
```

## Translation

|Flexbox|BowFlex|Behaviour\*|
|:-----:|:-----:|:-------|
|`row`|`row`|children flow left-to-right|
|`row-reverse`|`rowrev`|children flow right-to-left|
|`column`|`vert`|children flow top-to-bottom|
|`column-reverse`|`vertrev`|children flow bottom-to-top|

> \* Reversed if `text-direction: rtl;` is set
