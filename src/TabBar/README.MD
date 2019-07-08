---
category: Components
title: TabBar
---

## What

用于不同模块之间进行切换

## API

### TarBar

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| style | 自定义样式 | object | - |
| theme | 主题配置项 | [object](#theme) | - |

#### theme

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | tabBar高度 | string | 3.571rem |
| barTintColor | tabBar背景色 | string | #ffffff |
| tintColor | 选中的字体颜色 | string | #1890ff |
| unselectedTintColor | 未选中的字体颜色 | string | #888888 |

### TarBarItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| selected | 是否选中 | boolean | false |
| icon | 默认展示图标 | string | - |
| selectedIcon | 选中时默认展示图标 | string | - |
| title | 标题文字 | string | - |

## Example

```tsx
import { TabBar, TabBarItem } from '@vdfor/react-component';

const data = [
  {
    key: '0',
    title: '首页',
    icon: 'xxx.svg',
    selectedIcon: 'xxx.svg',
    selected: true
  },
  {
    key: '1',
    title: '列表',
    icon: 'xxx.svg',
    selectedIcon: 'xxx.svg'
  },
  {
    key: '2',
    title: '详情',
    icon: 'xxx.svg',
    selectedIcon: 'xxx.svg'
  }
];

ReactDOM.render(<TabBar>{data.map(i => (<TabBarItem {...i} />))}</TabBar>, mountNode);
```
