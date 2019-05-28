---
order: 0
title: 使用 babel-plugin-import
---

使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 实现按需加载。

---

## Usage

### 具体步骤

参考 [在 TypeScript 中使用 antd](https://ant.design/docs/react/use-in-typescript-cn#%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE)

### 核心配置项

```json
{
  "libraryName": "@vdfor/react-component",
  "libraryDirectory": "dist/es"
}
```

### 使用

```tsx
import { Spin } from '@vdfor/react-component';
```

## Q&A

### 我不想配置 babel-plugin-import，如何使用才能避免组件被全部加载？

```tsx
import Spin from '@vdfor/react-component/dist/es/Spin';
```