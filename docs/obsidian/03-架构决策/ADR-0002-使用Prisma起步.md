# ADR-0002：使用 Prisma 作为第一阶段数据库工具

## 背景

当前学习者已有前端经验，但还不熟悉 RAG、向量检索和后端数据建模。第一阶段最重要的是建立真实 SaaS 后台的数据库思维：表、关系、约束、migration、CRUD 和团队协作。

## 决策

第一阶段使用 Prisma ORM。

## 原因

- Prisma schema 可读性高，适合从前端过渡到后端数据建模。
- Next.js SaaS 项目中 Prisma 很常见，资料、模板和团队经验都比较丰富。
- migration、client 生成和关系查询工作流清晰，适合先建立主流后端开发手感。

## 关于 pgvector

第一阶段先使用标准 PostgreSQL 镜像。RAG 阶段再引入 PostgreSQL + pgvector，并专门学习：

- 什么是 embedding。
- 为什么需要向量检索。
- Prisma 对特殊数据库类型的边界。
- 什么时候需要 raw SQL migration 和原生查询。

现在不要求先掌握这些概念。
