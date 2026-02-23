# 明日剧场官网

明日剧场官方网站，展示剧场信息、团队成员、媒体报道等内容。

## 技术栈

- **框架**: Next.js 15
- **UI库**: React 19
- **样式**: Tailwind CSS
- **组件库**: shadcn/ui (Radix UI)
- **部署**: Cloudflare Workers
- **包管理**: pnpm

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 项目结构

```
├── src/
│   ├── app/          # 页面路由
│   ├── components/   # React组件
│   ├── hooks/        # 自定义Hooks
│   └── lib/          # 工具函数
├── public/           # 静态资源
└── package.json
```

## 部署

项目支持部署到Cloudflare Workers：

```bash
pnpm preview
```

## License

MIT
