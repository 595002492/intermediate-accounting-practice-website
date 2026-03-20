"use client";

import { useEffect, useMemo, useState } from "react";
import { buildStatsSummary } from "@/lib/judge";
import { getPracticeRecords } from "@/lib/storage";
import { Question } from "@/lib/types";

type Props = {
  allQuestions: Question[];
};

export default function StatsPanel({ allQuestions }: Props) {
  const [records, setRecords] = useState<ReturnType<typeof getPracticeRecords>>([]);

  useEffect(() => {
    setRecords(getPracticeRecords());
  }, []);

  const todayRecords = useMemo(() => {
    const today = new Date();
    const y = today.getFullYear();
    const m = today.getMonth();
    const d = today.getDate();

    return records.filter((item) => {
      const time = new Date(item.answeredAt);
      return time.getFullYear() === y && time.getMonth() === m && time.getDate() === d;
    });
  }, [records]);

  const totalSummary = buildStatsSummary(records.length, records.filter((item) => item.isCorrect).length);
  const todaySummary = buildStatsSummary(
    todayRecords.length,
    todayRecords.filter((item) => item.isCorrect).length
  );

  const subjectCount = useMemo(() => {
    const map = new Map<string, number>();
    records.forEach((record) => {
      const q = allQuestions.find((item) => item.id === record.questionId);
      const subject = q?.subject ?? "未知科目";
      map.set(subject, (map.get(subject) ?? 0) + 1);
    });
    return Array.from(map.entries()).map(([subject, count]) => ({ subject, count }));
  }, [allQuestions, records]);

  return (
    <section className="space-y-5">
      <div className="page-header">
        <h1 className="text-2xl font-bold md:text-3xl">学习统计</h1>
        <p className="mt-2 text-slate-600">基于本地作答记录统计，刷新后仍会保留。</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="card">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-lg font-semibold text-slate-900">今日表现</h2>
            <span className="chip">{new Date().toLocaleDateString("zh-CN")}</span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <article className="metric-card">
              <p className="text-sm text-slate-500">做题数</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{todaySummary.total}</p>
            </article>
            <article className="metric-card border-emerald-200 bg-emerald-50">
              <p className="text-sm text-emerald-700">正确题数</p>
              <p className="mt-1 text-2xl font-bold text-emerald-700">{todaySummary.correct}</p>
            </article>
            <article className="metric-card border-teal-200 bg-teal-50">
              <p className="text-sm text-teal-700">正确率</p>
              <p className="mt-1 text-2xl font-bold text-teal-700">{todaySummary.accuracy}%</p>
            </article>
          </div>
        </section>

        <section className="card">
          <h2 className="text-lg font-semibold text-slate-900">累计表现</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            <article className="metric-card">
              <p className="text-sm text-slate-500">总做题数</p>
              <p className="mt-1 text-2xl font-bold">{totalSummary.total}</p>
            </article>
            <article className="metric-card border-emerald-200 bg-emerald-50">
              <p className="text-sm text-emerald-700">正确题数</p>
              <p className="mt-1 text-2xl font-bold text-emerald-700">{totalSummary.correct}</p>
            </article>
            <article className="metric-card border-rose-200 bg-rose-50">
              <p className="text-sm text-rose-700">错误题数</p>
              <p className="mt-1 text-2xl font-bold text-rose-700">{totalSummary.wrong}</p>
            </article>
            <article className="metric-card border-teal-200 bg-teal-50">
              <p className="text-sm text-teal-700">正确率</p>
              <p className="mt-1 text-2xl font-bold text-teal-700">{totalSummary.accuracy}%</p>
            </article>
          </div>
        </section>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <section className="card lg:col-span-1">
          <h2 className="text-lg font-semibold">科目练习分布</h2>
          {subjectCount.length === 0 ? (
            <p className="mt-3 text-sm text-slate-600">暂无作答记录。</p>
          ) : (
            <div className="mt-3 space-y-2">
              {subjectCount.map((item) => (
                <div key={item.subject} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <p className="text-sm text-slate-700">{item.subject}</p>
                  <p className="text-lg font-bold text-slate-900">{item.count}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="card lg:col-span-2">
          <h2 className="text-lg font-semibold">最近练习记录</h2>
          {records.length === 0 ? (
            <p className="mt-3 text-sm text-slate-600">暂无记录，先去刷几题吧。</p>
          ) : (
            <div className="mt-4 space-y-3">
              {records.slice(0, 10).map((record) => {
                const question = allQuestions.find((q) => q.id === record.questionId);
                const label = question
                  ? `${question.subject} ${question.year}${question.chapter ? ` · ${question.chapter}` : ""}`
                  : "未知题目";
                return (
                  <article key={record.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="text-sm text-slate-700">
                      {label} · {record.questionId} ·
                      <span className={record.isCorrect ? "text-emerald-700" : "text-rose-700"}>
                        {record.isCorrect ? " 正确" : " 错误"}
                      </span>
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-600">{question?.stem ?? "题目已不存在"}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      作答时间：{new Date(record.answeredAt).toLocaleString("zh-CN")}
                    </p>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
