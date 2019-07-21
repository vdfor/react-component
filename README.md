<h1 align='center'>@vdfor/react-component</h1>

<div align='center'>

[![Build Status](https://travis-ci.org/vdfor/react-component.svg?branch=master)](https://travis-ci.org/vdfor/react-component)
[![npm (scoped)](https://img.shields.io/npm/v/@vdfor/react-component.svg)](https://www.npmjs.com/package/@vdfor/react-component)

</div>

**当前版本为非稳定版本，1.0.0版本发布之前，可能会存在弃用或破坏性更新。**

简体中文 | [English](./README.en.md)

**[1.0 Roadmap](https://github.com/vdfor/react-component/issues/1)**

## 特性

+ 使用 Typescript 构建，提供完整的类型定义
+ 支持按需加载，优化前端性能
+ css in js by [styled-components](https://github.com/styled-components/styled-components)

## 安装

```bash
# use yarn
yarn add @vdfor/react-component styled-components

# use npm
npm i @vdfor/react-component styled-components -S
```

## 使用

```tsx
import { Spin } from '@vdfor/react-component';

ReactDOM.render(<Spin />, mountNode);
```

[按需加载](./docs/use-babel-plugin-import.md)

## Docs

[CHANGELOG](./CHANGELOG.md)

### Components

+ [Spin](./src/Spin)
+ [Loadable](./src/Loadable)
+ [TabBar](./src/TabBar)
+ [Skeleton](./src/Skeleton)

### Hooks

+ [useDelay](./src/useDelay)
+ [useTitle](./src/useTitle)
