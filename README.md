# 网易云音乐PC项目实战

## 项目介绍

基于 `react` + `redux` + `react-router` + `styled-components` + `axios` + `ant design` + `react-redux` + `redux-thunk` `immutable` + `redux-immutable`等开发一款PC端「网易云音乐PC」 Web项目。

## 预览地址

- http://47.106.142.199

## 实现功能

- 页面之间切换和跳转
- 首页/热门推荐/新碟上架/榜单数据展示
- 排行榜数据展示
- 播放器功能
- 歌曲切换
  - 顺序播放/单曲循环/随机播放

## 技术栈

### 前端

- `React`：用于构建用户界面的 `MVVM` 框架
- `styled-components`：用于编写组件样式，并解决样式冲突问题
- `axios`: 发送网络请求，请求拦截和响应拦截
- `react-router`：为单页面应用提供的路由系统
- `react-router-config`：集中式路径映射表管理
- `redux`：React 集中状态管理，在多个组件共享某些状态时非常方便
- `react-redux`：帮助我们链及`redux`、`react`的辅助工具
- `immutable`：对`reudx`中保存的`state`使用`immutable`进行管理
- `redux-immutable`: 对根目录的`reducer`中`state`进行管理
- `redux-thunk`: 在`redux`中进行异步请求
- 项目中的优化: 函数式组件全部采用`memo`、路由懒加载

### 后端

- [NeteaseCloudMusicApi](https://binaryify.github.io/NeteaseCloudMusicApi/#/)：网易云音乐 `NodeJS` 版 `API`，提供音乐数据
- `Node.js`：利用 `Express` 搭建的本地测试服务器
- `axios`：用来请求后端 `API` 音乐数据

### 其他

- create-react-app：React 脚手架工具
- eslint：用于代码规范

## 收获

- 了解一个项目的大致流程
  - 画出流程图，大致描述各子页面的元素和用户的跳转关，使用React-Router分发路由和渲染
  - 对项目进行划分目录结构
  - 确定代码规范
  - 分析网站布局，思考代码有无重复，可以抽成单个组件进行复用
  - 思考数据的存放的位置
- 理解SPA的本质就是“如何管理负责的页面关系”
  - 处理好如何拆分页面
  - 页面之间的跳转和切换，信息传递，数据共享如何完成
- 学习到如何进行性能优化
  - 函数组件使用memo
  - 路由进行懒加载
