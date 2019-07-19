---
category: Components
title: Skeleton
---

## What

骨架屏

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 是否展示标题占位符 | boolean | true |
| rows | 段落占位符行数，值0时不显示段落占位符 | number | 3 |
| loading | 为`true`时，显示占位图。反之则直接展示子组件 | boolean | true |

## Example

```tsx
import { Skeleton } from '@vdfor/react-component';

ReactDOM.render(<Skeleton rows={5} />, mountNode);
```
