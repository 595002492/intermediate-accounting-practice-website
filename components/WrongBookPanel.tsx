"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import PracticePanel from "@/components/PracticePanel";
import { getWrongBook, removeWrongQuestion } from "@/lib/storage";
import { Question, WrongBookItem } from "@/lib/types";

type Props = {
  allQuestions: Question[];
};

function getTypeLabel(type: Question["type"]) {
  if (type === "single") return "单选题";
  if (type === "multiple") return "多选题";
  return "判断题";
}

export default function WrongBookPanel({ allQuestions }: Props) {
  const [wrongItems, setWrongItems] = useState<WrongBookItem[]>([]);
  const [mode, setMode] = useState<"list" | "practice">("list");

  useEffect(() => {
    if (mode !== "list") {
      return;
    }
    const rows = getWrongBook();
    const sorted = rows.sort(
      (a: WrongBookItem, b: WrongBookItem) =>
        new Date(b.lastWrongAt).getTime() - new Date(a.lastWrongAt).getTime()
    );
    setWrongItems(sorted);
  }, [mode]);

  const wrongQuestions = useMemo(() => {
    const idSet = new Set(wrongItems.map((item) => item.questionId));
    return allQuestions.filter((q) => idSet.has(q.id));
  }, [allQuestions, wrongItems]);

  function handleRemove(questionId: string) {
    removeWrongQuestion(questionId);
    setWrongItems((prev) => prev.filter((item) => item.questionId !== questionId));
  }

  if (mode === "practice") {
    return (
      <div className="space-y-4">
        <div className="page-header flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">错题重练</h1>
            <p className="mt-1 text-sm text-slate-600">共 {wrongQuestions.length} 题，按错题本顺序循环练习。</p>
          </div>
          <button type="button" onClick={() => setMode("list")} className="btn-secondary">
            返回错题列表
          </button>
        </div>
        <PracticePanel questions={wrongQuestions} title="错题本重练" />
      </div>
    );
  }

  return (
    <section className="space-y-5">
      <div className="page-header">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">错题本</h1>
            <p className="mt-2 text-slate-600">自动收录答错题目，支持集中重练与手动移除。</p>
          </div>
          <button
            type="button"
            onClick={() => setMode("practice")}
            disabled={wrongQuestions.length === 0}
            className="btn-primary"
          >
            开始重练
          </button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="metric-card">
            <p className="text-sm text-slate-500">错题总数</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{wrongItems.length}</p>
          </article>
          <article className="metric-card border-rose-200 bg-rose-50">
            <p className="text-sm text-rose-700">累计错误次数</p>
            <p className="mt-1 text-2xl font-bold text-rose-700">
              {wrongItems.reduce((sum, item) => sum + item.wrongCount, 0)}
            </p>
          </article>
          <article className="metric-card">
            <p className="text-sm text-slate-500">最近错题时间</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">
              {wrongItems[0] ? new Date(wrongItems[0].lastWrongAt).toLocaleString("zh-CN") : "暂无记录"}
            </p>
          </article>
        </div>
      </div>

      {wrongItems.length === 0 ? (
        <div className="card text-slate-600">
          暂无错题记录。<Link href="/chapters" className="ml-1 font-semibold text-teal-700">去题组练习</Link>
        </div>
      ) : (
        <div className="space-y-3">
          {wrongItems.map((item) => {
            const question = allQuestions.find((q) => q.id === item.questionId);
            if (!question) {
              return null;
            }

            return (
              <article key={item.id} className="card p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <span className="chip">{question.subject}</span>
                      <span className="chip">{question.year}</span>
                      <span className="chip">{getTypeLabel(question.type)}</span>
                      <span className="chip-warn">错误 {item.wrongCount} 次</span>
                    </div>
                    <p className="text-sm leading-6 text-slate-900">{question.stem}</p>
                    <p className="text-xs text-slate-500">
                      最近错误：{new Date(item.lastWrongAt).toLocaleString("zh-CN")} · 题号：{question.id}
                    </p>
                  </div>
                  <button type="button" onClick={() => handleRemove(item.questionId)} className="btn-danger">
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
