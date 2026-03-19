import { Question, StatsSummary } from "@/lib/types";

export function normalizeAnswer(answer: string[]) {
  return [...answer].sort();
}

export function isAnswerCorrect(question: Question, userAnswer: string[]) {
  const standard = normalizeAnswer(question.answer);
  const actual = normalizeAnswer(userAnswer);

  if (standard.length !== actual.length) {
    return false;
  }

  return standard.every((item, index) => item === actual[index]);
}

export function getAnswerLabel(question: Question, answer: string[]) {
  const keyToText = new Map(question.options.map((item) => [item.key, item.text]));
  return normalizeAnswer(answer)
    .map((key) => `${key}. ${keyToText.get(key) ?? ""}`)
    .join("；");
}

export function buildStatsSummary(total: number, correct: number): StatsSummary {
  const wrong = total - correct;
  const accuracy = total === 0 ? 0 : Number(((correct / total) * 100).toFixed(2));

  return {
    total,
    correct,
    wrong,
    accuracy
  };
}
