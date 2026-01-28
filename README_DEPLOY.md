# 部署指南 / Deployment Guide

## 修复构建错误 / Fixing Build Errors

我们在本地修复了以下问题：
1. **依赖缺失**: 添加了 `react-helmet-async`, `i18next` 等包。
2. **类型错误**: 在 `src/vite-env.d.ts` 中添加了类型声明，解决了 `Cannot find module` 和类型不匹配的问题。
3. **入口文件**: 更新了 `src/main.tsx` 以正确包含 `HelmetProvider`。

## 关键步骤 / Critical Steps

由于 Vercel/Netlify 等平台是拉取你的代码仓库进行构建，你必须**提交并推送**所有本地更改才能使修复生效。

请在你的本地终端（支持 git 的终端）运行：

```bash
# 1. 添加所有更改
git add .

# 2. 提交更改
git commit -m "fix: update dependencies and type declarations for build"

# 3. 推送到远程仓库
git push
```

推送成功后，Vercel 会自动检测到提交并开始新的构建。这次构建应该会成功。

## 检查配置 / Check Configuration

确保你的 Vercel 项目设置如下：
- **Framework Preset**: Vite
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
