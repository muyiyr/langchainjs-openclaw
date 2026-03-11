# langchainjs-openclaw

基于 LangChain JS 的最小化 TypeScript 项目模板，用于本地快速验证构建链路与运行环境（示例：初始化 Ollama LLM 实例并打印）。

## 技术栈

- 语言：TypeScript（ESM）
- 包管理：pnpm（见 `package.json` 的 `packageManager` 字段）
- 构建与开发：tsup（ESM 输出 + watch；开发模式自动构建并执行产物）
- 核心依赖：`langchain`、`@langchain/ollama`、`zod`

## 初始化仓库（从零到可运行）

1. 安装 pnpm

   - 已安装可跳过：`pnpm -v`

2. 配置外部镜像源（项目级）

   - 本项目已内置 `/.npmrc`，默认使用 `https://registry.npmmirror.com/`
   - 如需切换到 npm 官方源：把 `registry` 改为 `https://registry.npmjs.org/`

3. 安装依赖

   - 执行：`pnpm install`

4. 启动开发模式（watch + 自动运行）

   - 执行：`pnpm run dev`
   - 预期：tsup 会在 watch 模式下构建 `src/index.ts`，输出到 `dist/`，并在构建成功后自动执行 `node dist/index.js`。

5. 生产构建与运行（可选）

   - 构建：`pnpm run build`
   - 运行：`pnpm run start`

## 关键配置说明

- TypeScript：`tsconfig.json`
  - `module: ESNext` + `type: module`（ESM 运行时）
  - `target: ES2020`，源码目录 `src`，产物目录 `dist`

- tsup：`tsup.config.ts`
  - entry：`src/index.ts`
  - format：`esm`
  - 开发模式：`NODE_ENV=development pnpm run dev` 会开启 watch，并在每次构建成功后执行 `node dist/index.js`

## 最简环境校验代码

示例入口：`src/index.ts`（仅创建 Ollama LLM 实例并打印，不会发起网络请求）。

