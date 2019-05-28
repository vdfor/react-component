---
category: Components
title: Loadable
---

## What

用于实现组件级别的按需加载

## Api

搭配 `React.lazy` 使用，使用方法如下：

`Loadable(Component, [params])`

### Component 

懒加载组件，类型为 `LazyExoticComponent`

### params

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
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

const Home = React.lazy(() => import('./Home'));

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Loadable(Home, { loading: <Spin />, props: { text: 'Home Page' } })} />
    </div>
  </Router>
);

ReactDOM.render(<App />, mountNode);
```