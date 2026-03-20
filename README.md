# Intermediate Accounting Practice Website (MVP)

基于 Next.js + Tailwind CSS 的中级会计师考试练习网站。

## 功能

- 首页
- 章节练习
- 随机刷题
- 提交后显示对错、标准答案、解析
- 错题本（本地存储）
- 统计页（本地存储）

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 说明

- 使用本地题库：`data/questions.ts`
- 当前已接入：财务管理 2020 年客观题（单选/多选/判断）
- 不含登录、支付、后台
- 不接复杂后端
