"use client";

import { useEffect, useState } from "react";
import { getPracticeRecords, getWrongBook } from "@/lib/storage";
import { buildStatsSummary } from "@/lib/judge";

export default function HomeLearningSummary() {
  const [data, setData] = useState({
    total: 0,
    accuracy: 0,
    lastAt: "",
    wrongCount: 0
  });

  useEffect(() => {
    const records = getPracticeRecords();
    const wrongBook = getWrongBook();
    const summary = buildStatsSummary(records.length, records.filter((item) => item.isCorrect).length);

    setData({
      total: summary.total,
      accuracy: summary.accuracy,
      lastAt: records[0]?.answeredAt ?? "",
      wrongCount: wrongBook.length
    });
  }, []);

  return (
    <section className="card">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-bold text-slate-900">学习摘要</h2>
        <span className="chip">基于本地记录</span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article className="metric-card">
          <p className="text-sm text-slate-500">累计做题</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{data.total}</p>
        </article>
        <article className="metric-card border-emerald-200 bg-emerald-50">
          <p className="text-sm text-emerald-700">累计正确率</p>
          <p className="mt-1 text-2xl font-bold text-emerald-700">{data.accuracy}%</p>
        </article>
        <article className="metric-card border-rose-200 bg-rose-50">
          <p className="text-sm text-rose-700">错题本数量</p>
          <p className="mt-1 text-2xl font-bold text-rose-700">{data.wrongCount}</p>
        </article>
        <article className="metric-card">
          <p className="text-sm text-slate-500">最近练习</p>
          <p className="mt-1 text-sm font-semibold text-slate-800">
            {data.lastAt ? new Date(data.lastAt).toLocaleString("zh-CN") : "暂无记录"}
          </p>
        </article>
      </div>
    </section>
  );
}
