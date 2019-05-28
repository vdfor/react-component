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
  const isShow = useTitle();
  return isShow ? <div>SHOW</div> : null;
}

ReactDOM.render(<App >, mountNode);
```
