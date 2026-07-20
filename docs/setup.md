# 售后工单 App：第一阶段环境搭建

## 技术栈

- Expo + React Native + TypeScript：用于生成可安装到 Android 与 iPhone 的移动 App。
- Expo Router：文件式路由，便于后续按模块扩展页面。
- Zustand：轻量状态管理，适合个人开发并可扩展到团队协作。
- Expo SQLite：本地持久化数据库，后续可支持离线优先与云端同步。

## 需要安装的软件或账号

1. 安装 Node.js LTS。
2. 安装 Git。
3. Android 真机：安装 Expo Go，或安装 Android Studio 模拟器。
4. iPhone 真机：安装 Expo Go；如需正式打包上架或 TestFlight，需要 Apple Developer 账号。
5. 后续云端同步建议注册 Supabase 或 Firebase 账号；本阶段仅预留 API 配置，不接入业务服务。

## 初始化与验证命令

> 当前网络环境访问 npm registry 返回 403，因此本次已手工提交基础工程文件。你在本机网络正常时执行以下命令安装依赖。

```bash
npm install
```

验证依赖安装成功：

```bash
npm run typecheck
```

启动开发服务器：

```bash
npm run start
```

Android 验证：

```bash
npm run android
```

成功标志：Expo Go 或 Android 模拟器中看到“售后工单系统”首页，且数据库状态显示“已连接”。

iPhone 验证：

```bash
npm run ios
```

成功标志：iPhone 的 Expo Go 或 iOS 模拟器中看到“售后工单系统”首页，且数据库状态显示“已连接”。

## 本阶段停止点

本阶段只完成项目初始化、依赖声明、路由、状态管理、本地数据库连接、主题与目录结构。未开发售后工单业务功能，等待确认后再继续。
