"use client";

import { useMemo } from "react";
import { buildStatsSummary } from "@/lib/judge";
import { getPracticeRecords } from "@/lib/storage";
import { Question } from "@/lib/types";

type Props = {
  allQuestions: Question[];
};

export default function StatsPanel({ allQuestions }: Props) {
  const records = useMemo(() => getPracticeRecords(), []);
  const summary = buildStatsSummary(records.length, records.filter((item) => item.isCorrect).length);

  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">学习统计</h1>
        <p className="mt-2 text-slate-600">基于本地作答记录统计，刷新后仍保留。</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">总做题数</p>
          <p className="mt-2 text-2xl font-bold">{summary.total}</p>
        </article>
        <article className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
          <p className="text-sm text-emerald-700">正确题数</p>
          <p className="mt-2 text-2xl font-bold text-emerald-700">{summary.correct}</p>
        </article>
        <article className="rounded-xl border border-rose-200 bg-rose-50 p-4 shadow-sm">
          <p className="text-sm text-rose-700">错误题数</p>
          <p className="mt-2 text-2xl font-bold text-rose-700">{summary.wrong}</p>
        </article>
        <article className="rounded-xl border border-teal-200 bg-teal-50 p-4 shadow-sm">
          <p className="text-sm text-teal-700">正确率</p>
          <p className="mt-2 text-2xl font-bold text-teal-700">{summary.accuracy}%</p>
        </article>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
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
                <article key={record.id} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
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
      </div>
    </section>
  );
}
