# vite-plugin-awesome-version

## 特性

- 单页面应用增加随机码配置
- 快速切换版本
- 版本文件统一管理

## 安装

```bash
npm i vite-plugin-awesome-version -D
```

## 使用

- 修改`vite.config.ts`

```ts
import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

import AwesomeVersion from 'vite-plugin-awesome-version'

export default defineConfig({
  plugins: [
    vue(),
    AwesomeVersion({
      name: 'test-app',
      hash: true
    })
  ],
})
```

- 登录 vup 平台 修改和启用随机码

## 参数说明

| Parameter | Types     | Required | Default | Description | 
|-----------|-----------|----------|---------|-------------|
| name      | `string`  | 是        | -       | 应用名         |
| hash      | `boolean` | 否        | true    | 是否开启随机码     |  
