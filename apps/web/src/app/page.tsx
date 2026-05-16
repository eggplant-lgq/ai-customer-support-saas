import {
  BookOpenText,
  Bot,
  Database,
  FileText,
  GitBranch,
  PlayCircle,
  Server,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const metrics = [
  { label: "知识库", value: "0", hint: "阶段 2 开始接入真实数据" },
  { label: "文档", value: "0", hint: "等待上传、解析和切分" },
  { label: "RAG 问答", value: "待接入", hint: "阶段 3 实现引用回答" },
];

const milestones = [
  {
    title: "阶段 0：项目地基",
    description: "Next、Docker、数据库、Obsidian 和 Codex 协作规范。",
    status: "进行中",
  },
  {
    title: "阶段 1：后台基础",
    description: "登录、组织、权限、布局、表格和表单。",
    status: "下一步",
  },
  {
    title: "阶段 2：知识库管理",
    description: "文档上传、解析状态、失败重试和数据建模。",
    status: "规划中",
  },
  {
    title: "阶段 3：RAG 核心链路",
    description: "embedding、pgvector 检索、流式回答和引用来源。",
    status: "规划中",
  },
];

const stack = [
  { name: "Next.js App Router", icon: Server },
  { name: "TypeScript", icon: ShieldCheck },
  { name: "PostgreSQL + pgvector", icon: Database },
  { name: "Codex 学习工作流", icon: Bot },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-neutral-950 text-white">
                <Bot className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500">
                  AI Customer Support SaaS
                </p>
                <h1 className="text-lg font-semibold">客服知识库后台</h1>
              </div>
            </div>
            <Badge variant="success">阶段 0 进行中</Badge>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <Badge variant="secondary">Codex 陪跑学习项目</Badge>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                用真实 SaaS 后台训练 AI 时代的全栈前端能力
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
                这个项目会逐步实现知识库、文档解析、RAG
                问答、权限和数据看板。代码、笔记和协作规范都会进仓库，方便跨设备继续学习。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button>
                  <PlayCircle aria-hidden="true" />
                  查看当前阶段
                </Button>
                <Button variant="outline">
                  <BookOpenText aria-hidden="true" />
                  打开学习笔记
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>跨设备恢复流程</CardTitle>
                <CardDescription>
                  Codex 的长期上下文写入仓库文档，而不是依赖聊天记忆。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-neutral-700">
                  <li className="flex gap-3">
                    <GitBranch className="mt-0.5 size-4 text-neutral-500" />
                    <span>新设备执行 git pull 和 pnpm install。</span>
                  </li>
                  <li className="flex gap-3">
                    <Database className="mt-0.5 size-4 text-neutral-500" />
                    <span>使用 docker compose 启动数据库和 Redis。</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="mt-0.5 size-4 text-neutral-500" />
                    <span>让 Codex 读取 AGENTS、README 和当前状态笔记。</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-8 lg:grid-cols-3 lg:px-8">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader>
              <CardDescription>{metric.label}</CardDescription>
              <CardTitle className="text-2xl">{metric.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-500">{metric.hint}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>技术栈</CardTitle>
            <CardDescription>
              先保持服务数量克制，等业务复杂后再拆分。
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {stack.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="flex items-center gap-3 rounded-md border border-neutral-200 p-3"
                  key={item.name}
                >
                  <Icon className="size-4 text-neutral-500" aria-hidden="true" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>学习里程碑</CardTitle>
            <CardDescription>
              每个阶段都会解释概念、实现功能、验证结果并沉淀笔记。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {milestones.map((milestone) => (
              <div
                className="grid gap-3 rounded-md border border-neutral-200 p-4 sm:grid-cols-[1fr_auto]"
                key={milestone.title}
              >
                <div>
                  <h3 className="text-sm font-semibold">{milestone.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-500">
                    {milestone.description}
                  </p>
                </div>
                <Badge
                  variant={
                    milestone.status === "进行中" ? "warning" : "secondary"
                  }
                >
                  {milestone.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
