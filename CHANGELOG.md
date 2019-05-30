`@vdfor/react-component` 

遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---
## v0.2.0

`2019-05-29`

+ **Add** hooks - `useDelay` `useTitle`
+ **Add** Components - `Spin` `Loadable` 
+ **Improved** `eslint` 规则新增 hooks 检测
+ **Improved** 改进了未使用按需加载时浏览器控制台的提示语
+ **Fix** 修复了非生产环境下使用全部引入时浏览器控制台未提示警告
+ **Docs** 新增组件文档
+ **Docs** 增加 use-babel-plugin-import.md 文档

## v0.1.1

`2019-05-28`

+ **Improve** 弃用 `react-scripts`，重新构建了基于 `Jest` 的单元测试环境
+ **Fix** 开发及构建时 nodejs 文件操作替代 linux/unix 命令，解决了windows非wsl环境下构建出错的问题

## v0.1.0

`2019-05-27`

+ init