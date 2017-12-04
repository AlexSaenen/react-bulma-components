## Button Component

The classic button, in different colors, sizes, and states ([Bulma docs](https://bulma.io/documentation/elements/button/))


### Usage:

- `import Button from 'react-bulma-components/lib/components/button'` to only import this components and his css (**Recommended**)
- `import { Button } from react-bulma-components`

```jsx
<Button>
  TEXT
</Button>
```

### Props

|property|propType|required|default|description|
|--- |--- |--- |--- |--- |
|children|`node`|no|`null`||
|className|`string`|no|||
|href|`string`|no|||
|hrefAttr|`string`|no|||
|style|`object`|no|`{}`||
|renderAs|`string` or `ReactElement`|no|`a`||
|onClick|`func`|no|`() => null`||
|color|`enum ['primary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'white', 'black']`|no|`null`||
|size|`enum ['small', 'medium', 'large']`|no|`null`||
|state|`enum ['hovered', 'focused', 'active']`|no|`null`||
|outlined|`bool`|no|`false`||
|inverted|`bool`|no|`false`||
|submit|`bool`|no|`false`||
|reset|`bool`|no|`false`||
|loading|`bool`|no|`false`||
|fullwidth|`bool`|no|`false`||
|disabled|`bool`|no|`false`||
|remove|`bool`|no|`false`||
|link|`bool`|no|`false`||
|isStatic|`bool`|no|`false`||
