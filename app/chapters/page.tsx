import Link from "next/link";
import { getChapterStats } from "@/lib/question-bank";

export default function ChaptersPage() {
  const chapters = getChapterStats();

  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">章节练习</h1>
        <p className="mt-2 text-slate-600">按章节选择练习内容，每章支持连续下一题。</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {chapters.map((item) => (
          <Link
            key={item.chapter}
            href={`/practice/${encodeURIComponent(item.chapter)}`}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-300"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item.chapter}</h2>
            <p className="mt-2 text-sm text-slate-600">题量：{item.count} 题</p>
            <p className="mt-4 text-sm font-medium text-teal-700">进入练习</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
