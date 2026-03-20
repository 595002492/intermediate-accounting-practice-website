"use client";

import { useMemo, useState } from "react";
import { getAnswerLabel, isAnswerCorrect } from "@/lib/judge";
import { addWrongQuestion, savePracticeRecord } from "@/lib/storage";
import { Question } from "@/lib/types";

type PracticePanelProps = {
  questions: Question[];
  title: string;
  mode?: "sequential" | "random";
};

function getTypeLabel(type: Question["type"]) {
  if (type === "single") return "单选题";
  if (type === "multiple") return "多选题";
  return "判断题";
}

export default function PracticePanel({
  questions,
  title,
  mode = "sequential"
}: PracticePanelProps) {
  const [index, setIndex] = useState(0);
  const [randomSeed, setRandomSeed] = useState(() => Math.random());
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const question = useMemo(() => {
    if (questions.length === 0) {
      return null;
    }

    if (mode === "random") {
      const i = Math.floor(randomSeed * questions.length);
      return questions[i];
    }

    return questions[index] ?? null;
  }, [index, mode, questions, randomSeed]);

  if (!question) {
    return (
      <section className="card">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="mt-4 text-slate-600">当前没有可练习题目。</p>
      </section>
    );
  }

  const currentQuestion: Question = question;

  function handleSelect(optionKey: string) {
    if (submitted) {
      return;
    }

    if (currentQuestion.type === "multiple") {
      setSelected((prev) =>
        prev.includes(optionKey) ? prev.filter((key) => key !== optionKey) : [...prev, optionKey]
      );
      return;
    }

    setSelected([optionKey]);
  }

  function handleSubmit() {
    if (selected.length === 0 || submitted) {
      return;
    }

    const result = isAnswerCorrect(currentQuestion, selected);
    setCorrect(result);
    setSubmitted(true);

    savePracticeRecord({
      id: `${currentQuestion.id}-${Date.now()}`,
      questionId: currentQuestion.id,
      userAnswer: selected,
      isCorrect: result,
      answeredAt: new Date().toISOString()
    });

    if (!result) {
      addWrongQuestion(currentQuestion.id);
    }
  }

  function handleNext() {
    setSelected([]);
    setSubmitted(false);
    setCorrect(false);

    if (mode === "random") {
      setRandomSeed(Math.random());
      return;
    }

    setIndex((prev) => {
      const next = prev + 1;
      return next >= questions.length ? 0 : next;
    });
  }

  const orderLabel = mode === "random" ? `随机抽题 / 总题数 ${questions.length}` : `第 ${index + 1} / ${questions.length} 题`;

  return (
    <section className="card md:p-6">
      <div className="mb-5 border-b border-slate-100 pb-4">
        <h1 className="text-xl font-bold text-slate-900 md:text-2xl">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">{orderLabel}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="chip">题型：{getTypeLabel(currentQuestion.type)}</span>
          <span className="chip">科目：{currentQuestion.subject}</span>
          <span className="chip">年份：{currentQuestion.year}</span>
        </div>
      </div>

      <article>
        <p className="text-base leading-7 text-slate-900 md:text-lg">{currentQuestion.stem}</p>

        <div className="mt-5 space-y-3">
          {currentQuestion.options.map((option) => {
            const selectedByUser = selected.includes(option.key);
            const isCorrectOption = currentQuestion.answer.includes(option.key);

            let className = "border-slate-200 bg-white hover:border-teal-300 text-slate-900";

            if (!submitted && selectedByUser) {
              className = "border-teal-500 bg-teal-50 text-teal-900";
            }

            if (submitted) {
              if (isCorrectOption) {
                className = "border-emerald-400 bg-emerald-50 text-emerald-800";
              } else if (selectedByUser) {
                className = "border-rose-400 bg-rose-50 text-rose-800";
              } else {
                className = "border-slate-200 bg-slate-50 text-slate-500";
              }
            }

            return (
              <button
                type="button"
                key={option.key}
                onClick={() => handleSelect(option.key)}
                className={`w-full rounded-xl border px-4 py-3 text-left transition ${className} ${submitted ? "cursor-not-allowed" : ""}`}
              >
                <span className="font-semibold">{option.key}.</span> {option.text}
              </button>
            );
          })}
        </div>
      </article>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={handleSubmit} disabled={submitted || selected.length === 0} className="btn-primary">
          提交答案
        </button>
        <button type="button" onClick={handleNext} className="btn-secondary">
          下一题
        </button>
      </div>

      {submitted ? (
        <div
          className={`mt-6 rounded-xl border p-4 ${
            correct ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"
          }`}
        >
          <p className={`text-base font-semibold ${correct ? "text-emerald-700" : "text-rose-700"}`}>
            {correct ? "回答正确" : "回答错误"}
          </p>
          <p className="mt-2 text-sm text-slate-700">你的答案：{getAnswerLabel(currentQuestion, selected)}</p>
          <p className="mt-1 text-sm text-slate-700">
            标准答案：{getAnswerLabel(currentQuestion, currentQuestion.answer)}
          </p>
          {!correct ? <p className="mt-1 text-sm font-semibold text-rose-700">已加入错题本</p> : null}
          <p className="mt-2 text-sm text-slate-800">解析：{currentQuestion.explanation}</p>
        </div>
      ) : null}
    </section>
  );
}
