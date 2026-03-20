import Link from "next/link";
import HomeLearningSummary from "@/components/HomeLearningSummary";
import { getAllQuestions } from "@/lib/question-bank";

const subjects = [
  {
    name: "中级会计实务",
    status: "即将上线",
    desc: "题库整理中，预计后续批次接入。",
    href: "#",
    enabled: false
  },
  {
    name: "财务管理",
    status: "已接入",
    desc: "2020 年客观题可练习（单选、多选、判断）。",
    href: "/chapters",
    enabled: true
  },
  {
    name: "经济法",
    status: "即将上线",
    desc: "题库整理中，预计后续批次接入。",
    href: "#",
    enabled: false
  }
];

const entries = [
  {
    title: "题组练习",
    desc: "按年份+题型训练，当前开放财务管理 2020 客观题。",
    href: "/chapters"
  },
  {
    title: "随机刷题",
    desc: "用于热身和查漏补缺，支持快速切题。",
    href: "/random"
  },
  {
    title: "错题本",
    desc: "自动收录错题，支持集中重练。",
    href: "/wrong-book"
  },
  {
    title: "学习统计",
    desc: "查看累计正确率和近期练习记录。",
    href: "/stats"
  }
];

export default function HomePage() {
  const totalQuestions = getAllQuestions().length;

  return (
    <div className="space-y-6">
      <section className="page-header">
        <span className="chip">中级会计师考试练习平台</span>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">聚焦三科客观题训练</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          面向中级会计师考试备考，提供按科目、题组、错题复盘和统计追踪的一体化练习体验。当前首批已接入财务管理题库。
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm">
          <span className="chip">当前题量：{totalQuestions} 题</span>
          <span className="chip">已接入科目：1 / 3</span>
          <span className="chip">当前可练：财务管理 · 2020 客观题</span>
        </div>

        <div className="mt-6">
          <Link href="/chapters" className="btn-primary">
            开始练习
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {subjects.map((subject) => {
          if (subject.enabled) {
            return (
              <Link key={subject.name} href={subject.href} className="card transition hover:-translate-y-0.5 hover:border-teal-200">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-lg font-bold text-slate-900">{subject.name}</h2>
                  <span className="chip-ok">{subject.status}</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{subject.desc}</p>
                <p className="mt-4 text-sm font-semibold text-teal-700">进入科目</p>
              </Link>
            );
          }

          return (
            <article key={subject.name} className="card border-dashed">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-slate-900">{subject.name}</h2>
                <span className="chip-warn">{subject.status}</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{subject.desc}</p>
              <p className="mt-4 text-sm font-semibold text-slate-500">敬请期待</p>
            </article>
          );
        })}
      </section>

      <HomeLearningSummary />

      <section className="grid gap-4 md:grid-cols-2">
        {entries.map((item) => (
          <Link key={item.href} href={item.href} className="card transition hover:-translate-y-0.5 hover:border-teal-200">
            <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
            <p className="mt-4 text-sm font-semibold text-teal-700">进入</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
