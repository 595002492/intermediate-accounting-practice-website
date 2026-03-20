import { CHAPTERS, QUESTION_BANK } from "@/data/questions";
import { Question } from "@/lib/types";

export function getAllQuestions() {
  return QUESTION_BANK;
}

export function getQuestionById(questionId: string) {
  return QUESTION_BANK.find((item) => item.id === questionId);
}

export function getQuestionsByChapter(chapter: string) {
  return QUESTION_BANK.filter((item) => item.chapter === chapter);
}

export function getChapterStats() {
  return CHAPTERS.map((chapter) => ({
    chapter,
    count: getQuestionsByChapter(chapter).length
  }));
}

export function getRandomQuestion(questions: Question[]) {
  if (questions.length === 0) {
    return null;
  }

  return questions[Math.floor(Math.random() * questions.length)];
}
