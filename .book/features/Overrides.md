# Overriding Defaults

## Container / Row

### Max-Width

Full width outer container

```html
<div bow="fluid">
	<div flex>
	</div>
</div>
```
> Note: this is silly and unnecessary

Fill row to conatiner
```html
<div bow>
	<div flex="fluid">
	</div>
</div>
```

```html
<div bow="fluid">
	<div flex="fluid">
	</div>
</div>
```

> Note: most cases would not call for placing `bow="fluid"`, just use a regular ole' div

### Child Size / Space

Remove the margin-left & margin-right for child columns
```html
<div flex(-size)="flush">
</div>
```
