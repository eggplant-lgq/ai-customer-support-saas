import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 客服知识库 SaaS 后台",
  description: "用于学习真实 AI SaaS 后台工程的 Next.js 全栈项目",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
