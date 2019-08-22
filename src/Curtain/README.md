---
category: Components
title: Curtain
---

## What

幕帘

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否可见 | boolean | - |
| onClose | 点击叉或蒙层的回调 | function | - |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |

## Example

```tsx
import { Curtain } from '@vdfor/react-component';

const App = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <button onClick={() => setVisible(true)}>Open Cuatain</button>
      <Curtain visible={visible} onClose={() => setVisible(false)} />
    </>
  )
}

ReactDOM.render(<App />, mountNode);
```
