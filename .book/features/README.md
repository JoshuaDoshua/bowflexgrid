# Features Overview

|Ruleset|Flexbox|BowFlex|
|:------|:-----:|:-----:|
|flex-direction|row|row|
|flex-direction|row-reverse|rowrev|
|flex-direction|column|vert|
|flex-direction|column-reverse|vertrev|
|flex-wrap|wrap|wrap|
|flex-wrap|nowrap|nowrap|
|flex-wrap|wrap-reverse|wraprev|
|justify-content|flex-start|left|
|justify-content|center|center|
|justify-content|flex-end|right|
|justify-content|space-between|between|
|justify-content|space-around|around|
|justify-content|space-evenly|even|
|align-items|flex-start|top|
|align-items|center|middle|
|align-items|flex-end|bottom|
|align-items|stretch|stretch|
|align-items|baseline|baseline|
|align-content|\*|_not included_|
|flex-basis|-|[Columns](Columns.md)|
|align-self|flex-start|top|
|align-self|center|middle|
|align-self|flex-end|bottom|
|align-self|stretch|stretch|
|align-self|baseline|baseline|
|order|\*\*|_not included_|
|flex-grow|\*\*|_not included_|
|flex-shrink|\*\*|_not included_|

> \* Align Content is a bit extrenuous for this package and not included
>
> \*\* These properties are number based. CSS doesn't currently support extrapolating numbers from data attributes outside of pseudo element content definitions. These will need to be done in CSS.
