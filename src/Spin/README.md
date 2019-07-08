---
category: Components
title: Spin
---

## What

加载中

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| style | 自定义样式 | object | - |
| theme | 主题配置项 | [object](#theme) |  |

### theme

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 主颜色 | string | #f03d3e |

## Example

```tsx
import { Spin } from '@vdfor/react-component';

ReactDOM.render(<Spin theme={{color: '#2f54eb'}} >, mountNode);
```
