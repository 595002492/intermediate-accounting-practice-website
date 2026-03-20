import Link from "next/link";
import { getAllQuestions } from "@/lib/question-bank";
import { CHAPTERS } from "@/data/questions";

const entries = [
  {
    title: "题组练习",
    desc: "按科目与题组练习，当前已接入财务管理真题。",
    href: "/chapters"
  },
  {
    title: "随机刷题",
    desc: "随机抽题，快速热身和查漏补缺。",
    href: "/random"
  },
  {
    title: "错题本",
    desc: "自动记录错题，支持反复重练。",
    href: "/wrong-book"
  },
  {
    title: "学习统计",
    desc: "查看总做题数、正确率和最近练习。",
    href: "/stats"
  }
];

export default function HomePage() {
  const totalQuestions = getAllQuestions().length;

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-teal-100 bg-white p-6 shadow-sm md:p-8">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">中级会计师考试练习平台</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          站点定位已升级为中级会计师三科练习网站。当前第一批已接入财务管理 2020 年客观题（单选、多选、判断），支持题组练习、随机刷题、错题复盘和学习统计。
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-slate-100 px-3 py-1">当前科目：财务管理</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">题组数：{CHAPTERS.length}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">2020 客观题：{totalQuestions}</span>
        </div>
        <div className="mt-6">
          <Link
            href="/chapters"
            className="inline-flex rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
          >
            开始练习
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {entries.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200"
          >
            <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
            <p className="mt-4 text-sm font-semibold text-teal-700">进入</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
