---
category: Hooks
title: useTitle
---

## What

设置 document title

## API

`useTitle(title)`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | document标题 | string | - |

## Example

```tsx
import { useDelay } from '@vdfor/react-component';

const App = () => {
  useTitle('Home');
  return <h1>Home Page</h1>;
}

ReactDOM.render(<App >, mountNode);
```
