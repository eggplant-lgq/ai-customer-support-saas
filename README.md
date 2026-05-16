# AI 客服知识库 SaaS 后台

这是一个用于长期学习和实战的 AI SaaS 项目。它不仅包含代码，也包含跨设备恢复上下文的文档、Obsidian 笔记和 Codex 协作规则。

## 当前目标

阶段 0 正在搭建项目地基：

- Next.js App Router + TypeScript + Tailwind CSS
- shadcn/ui 风格组件
- PostgreSQL，RAG 阶段再引入 pgvector
- Redis
- Docker Compose 本地依赖
- Obsidian 项目记忆层
- Codex 中文陪跑工作流

## 本地启动

首次启动建议按顺序执行：

```bash
pnpm install
cp .env.example .env
docker compose up -d
pnpm dev
```

然后打开 [http://localhost:3000](http://localhost:3000)。

> 当前设备还没有检测到 Docker 命令。Mac/Windows 都建议安装 Docker Desktop，之后再执行 `docker compose up -d`。

## 跨设备继续学习

换到另一台电脑时：

```bash
git pull
pnpm install
cp .env.example .env
docker compose up -d
pnpm dev
```

然后让 Codex 先读：

```text
请先阅读 AGENTS.md、README.md、docs/obsidian/01-当前状态.md，继续带我做下一步。
```

Codex 的长期记忆不依赖聊天记录，而是依赖仓库里的文档。

## 目录结构

```text
apps/web              Next.js 全栈应用
packages/db          Prisma 数据库 schema 与迁移配置
docs/obsidian        Obsidian 笔记库
docker-compose.yml   本地 PostgreSQL/Redis
AGENTS.md            Codex 协作规则
```

## 学习节奏

每次任务都按这个节奏推进：

1. 先解释关键概念。
2. 再拆解业务目标和验收标准。
3. Codex 示范关键实现。
4. 你完成一小段真实实操。
5. Codex 做代码审查和复盘。
6. 更新 Obsidian 当前状态和学习日志。
