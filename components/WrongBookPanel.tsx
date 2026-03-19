"use client";

import { useMemo, useState } from "react";
import PracticePanel from "@/components/PracticePanel";
import { getWrongBook, removeWrongQuestion } from "@/lib/storage";
import { Question, WrongBookItem } from "@/lib/types";

type Props = {
  allQuestions: Question[];
};

export default function WrongBookPanel({ allQuestions }: Props) {
  const [refreshKey, setRefreshKey] = useState(0);
  const [mode, setMode] = useState<"list" | "practice">("list");

  const wrongItems = useMemo(() => {
    void refreshKey;
    const rows = getWrongBook();
    return rows.sort(
      (a: WrongBookItem, b: WrongBookItem) =>
        new Date(b.lastWrongAt).getTime() - new Date(a.lastWrongAt).getTime()
    );
  }, [refreshKey]);

  const wrongQuestions = useMemo(() => {
    const idSet = new Set(wrongItems.map((item) => item.questionId));
    return allQuestions.filter((q) => idSet.has(q.id));
  }, [allQuestions, wrongItems]);

  function handleRemove(questionId: string) {
    removeWrongQuestion(questionId);
    setRefreshKey((prev) => prev + 1);
  }

  if (mode === "practice") {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl font-bold md:text-3xl">错题重练</h1>
          <button
            type="button"
            onClick={() => setMode("list")}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium"
          >
            返回错题列表
          </button>
        </div>
        <PracticePanel questions={wrongQuestions} title="错题本练习" />
      </div>
    );
  }

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">错题本</h1>
          <p className="mt-2 text-slate-600">自动收录答错题目，可重新练习或手动移除。</p>
        </div>
        <button
          type="button"
          onClick={() => setMode("practice")}
          disabled={wrongQuestions.length === 0}
          className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          开始重练
        </button>
      </div>

      {wrongItems.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600">暂无错题记录。</div>
      ) : (
        <div className="space-y-3">
          {wrongItems.map((item) => {
            const question = allQuestions.find((q) => q.id === item.questionId);
            if (!question) {
              return null;
            }

            return (
              <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-sm text-slate-500">
                      {question.chapter} · {question.id} · 错误 {item.wrongCount} 次
                    </p>
                    <p className="text-sm leading-6 text-slate-900">{question.stem}</p>
                    <p className="text-xs text-slate-500">
                      最近错误：{new Date(item.lastWrongAt).toLocaleString("zh-CN")}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemove(item.questionId)}
                    className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-700"
                  >
                    移除
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
