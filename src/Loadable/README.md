---
category: Components
title: Loadable
---

## What

用于实现组件级别的按需加载

## Api

搭配 `React.lazy` 使用，使用方法如下：

`Loadable(params)`

### params

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| component | 动态导入的组件 | () => Promise<{ default: ComponentType }> | - |
| props | 组件props | object | - |
| loading | 组件加载完成前loading，防止白屏 | ReactElement | - |
| delay | loading延迟显示(毫秒)，防止页面闪烁 | number | 200 |

## Example

```tsx
// Home.tsx

export default ({ text }) => (<div>{text}</div>);
```

```tsx
// index.tsx

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Loadable, Spin } from '@vdfor/react-component';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Loadable({ component: () => import('./Home'), loading: <Spin />, props: { text: 'Home Page' } })} />
    </div>
  </Router>
);

ReactDOM.render(<App />, mountNode);
```