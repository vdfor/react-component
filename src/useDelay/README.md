---
category: Hooks
title: useDelay
---

## What

延迟加载

## API

`useDelay(delay)`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| delay | 延迟时间(毫秒) | number | 200 |

## Example

```tsx
import { useDelay } from '@vdfor/react-component';

const App = () => {
  const isShow = useDelay();
  return isShow ? <div>SHOW</div> : null;
}

ReactDOM.render(<App >, mountNode);
```
