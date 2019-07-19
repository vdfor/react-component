`@vdfor/react-component` 

遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

## v0.6.2

`2019-07-19`

+ **fix** 修复TabBar的一处ts类型错误

## v0.6.0

`2019-07-19`

+ **feature** Components - `Skeleton`
+ **perf** 优化 `Spin` `TabBar` 性能

## v0.5.0

`2019-07-09`

+ **perf** 调整`Loadable`api

## v0.4.3

`2019-07-08`

+ **fix** 修复`TabBar`无法按需使用的问题

## v0.4.1

`2019-07-08`

+ **fix** 修复TabBarItem一处TS类型错误

## v0.4.0

`2019-07-08`

+ **feature** `TabBar`新增api - className
+ **feature** `TabBarItem`新增api - onPress
+ **perf**  `Spin`默认颜色更改为`#1890ff`

## v0.3.1

`2019-07-08`

+ **feature** Components - `TabBar`
+ **doc** 更正了 `Spin` 文档示例的一处错误
 
## v0.2.1

`2019-05-31`

+ **perf**  use `babel-plugin-macros` with `styled-components`
+ **fix** 修复 `eslint` 报错 Unable to resolve path to module '@vdfor/react-component' [#2](https://github.com/vdfor/react-component/issues/2)
+ **doc** 更正了 `useTitile` 文档示例
 
## v0.2.0

`2019-05-29`

+ **feature** hooks - `useDelay` `useTitle`
+ **feature** Components - `Spin` `Loadable` 
+ **perf** `eslint` 规则新增 hooks 检测
+ **perf** 改进了未使用按需加载时浏览器控制台的提示语
+ **fix** 修复了非生产环境下使用全部引入时浏览器控制台未提示警告
+ **doc** 新增组件文档
+ **doc** 增加 use-babel-plugin-import.md 文档

## v0.1.1

`2019-05-28`

+ **perf** 弃用 `react-scripts`，重新构建了基于 `Jest` 的单元测试环境
+ **fix** 开发及构建时 nodejs 文件操作替代 linux/unix 命令，解决了windows非wsl环境下构建出错的问题

## v0.1.0

`2019-05-27`

+ init