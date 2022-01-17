## 技术栈 React17

- React 17
  - JSX、State、事件处理等
  - 状态提升、组件解耦、组合
  - Refs 转发
  - 高阶组件
  - Render Props
  - 错误边界
- React Hook
  - useState，useRef 等
  - 自定义 Hook：异步操作、状态管理、debounce、路由、CRUD 等
- TypeScript4
- 其他
  - Hook + Context / Redux Toolkit 管理客户端全局状态
  - React Query 管理服务端全局状态
  - 性能优化、性能监控、性能报告
  - 自动化测试：单元测试、集成测试、e2e 测试
  - CSS-in-JS、Grid、Flexbox
  - React-Router 6

## 规范化工程

## 工程列表

> 提取 URL 时候，react.js 中 process 未定义，安装插件 yarn add --dev react-app-env

- [x] 拆分组件 **project-list**:`index`,`SearchPanel`,`List`
- [x] 状态提升
- [x] 初始化数据 `useState`: param, users, list
- [x] 统一 **REACT_APP_URL_API** `.env`、`.env.development`
- [x] 初始化数据 user
- [x] 自定义 Hook 挂载 `useMount`、节流 `useDebounce`

## TS 改造工程列表

- 接口 `interface` 增强 类型限制
- 泛型 `<T>` 增强 `useDebounce`防抖钩子
- 断言 `as`
- 不返回任何值 `void`

## 登录注册工程

- [x] handleSubmit: `FormEventHandler<HTMLFormElement>`
- [x] username: `(e.currentTarget.elements[0] as HTMLInputElement).value`
- [x] password: `(e.currentTarget.elements[1] as HTMLInputElement).value`
- [x] login `fetch('/login')`
- [x] json-server 模拟非`RESTFul` (中间件 `middleware.js`)
  - [x] commonJS 规范 `module.exports = fn`
  - [x] 函数参数 `req`,`res`,`next`
  - [x] 判断请求`method`、`pathname`，和请求体 body 的`username`、`password`
  - [x] 判断成功返回响应`status(200).json({user:{token:'hansum_'}})`
  - [x] 判断失败返回响应`status(400).json({message:'用户名或密码错误'})`
  - [x] 让中间件与 json-server 建立联系 `package.json`

### auth provider 实现

> src/authProvider.ts

- [x] localStorageKey
- [x] getToken
- [x] handleUserResponse
- [x] login

### useContext 存储全局用户信息

> src/context/AuthContext.tsx

- [x] AuthContext

---
