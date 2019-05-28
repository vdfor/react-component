<h1 align='center'>@vdfor/react-component</h1>

<div align='center'>

[![Build Status](https://travis-ci.org/vdfor/react-component.svg?branch=master)](https://travis-ci.org/vdfor/react-component)
[![npm (scoped)](https://img.shields.io/npm/v/@vdfor/react-component.svg)](https://www.npmjs.com/package/@vdfor/react-component)

</div>

**Current version is unstable, prior to the 1.0.0 release, deprecations or breaking changes will result in a minor version bump.**

[简体中文](./README.md) | English

**[1.0 Roadmap](https://github.com/vdfor/react-component/issues/1)**

## Features

+ Written in TypeScript with predictable static types
+ Import components on demand supported
+ css in js by [styled-components](https://github.com/styled-components/styled-components)

## Install

```bash
# use yarn
yarn add @vdfor/react-component

# use npm
npm i @vdfor/react-component -S
```

## Usage

```tsx
import { Spin } from '@vdfor/react-component';

ReactDOM.render(<Spin />, mountNode);
```

[Import components on demand](./docs/use-babel-plugin-import.md)

## Docs

+ [CHANGELOG](./CHANGELOG.md)

## Components

+ [Spin](./src/Spin)
+ [Loadable](./src/Loadable)

## hooks

+ [useDelay](./src/useDelay)
+ [useTitle](./src/useTitle)

## License

[MIT](./License)