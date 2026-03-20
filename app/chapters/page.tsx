import Link from "next/link";
import { getChapterStats, getQuestionsByChapter } from "@/lib/question-bank";

function getTypeLabel(type: string) {
  if (type === "single") return "单选题";
  if (type === "multiple") return "多选题";
  return "判断题";
}

export default function ChaptersPage() {
  const chapters = getChapterStats();

  return (
    <section className="space-y-5">
      <div className="page-header">
        <h1 className="text-2xl font-bold md:text-3xl">题组练习</h1>
        <p className="mt-2 text-slate-600">
          当前题组按“年份 + 题型”组织，已开放财务管理 2020 年客观题，包含单选题、多选题、判断题。
        </p>
      </div>

      <div className="space-y-4">
        {chapters.map((item) => {
          const questions = getQuestionsByChapter(item.chapter);
          const grouped = ["single", "multiple", "judge"].map((type) => ({
            type,
            count: questions.filter((q) => q.type === type).length
          }));

          return (
            <article key={item.chapter} className="card">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">财务管理 · {item.chapter}</h2>
                  <p className="mt-1 text-sm text-slate-500">总题量：{item.count} 题</p>
                </div>
                <Link href={`/practice/${encodeURIComponent(item.chapter)}`} className="btn-primary">
                  进入题组练习
                </Link>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {grouped.map((group) => (
                  <div key={group.type} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-600">{getTypeLabel(group.type)}</p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">{group.count}</p>
                    <p className="mt-1 text-xs text-slate-500">2020 年客观题</p>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
