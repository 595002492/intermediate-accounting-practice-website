import Link from "next/link";
import PracticePanel from "@/components/PracticePanel";
import { getQuestionsByChapter } from "@/lib/question-bank";
import { CHAPTERS } from "@/data/questions";

type Props = {
  params: Promise<{ chapter: string }>;
};

export function generateStaticParams() {
  return CHAPTERS.map((chapter) => ({ chapter }));
}

export default async function ChapterPracticePage({ params }: Props) {
  const { chapter: rawChapter } = await params;
  const chapter = decodeURIComponent(rawChapter);
  const questions = getQuestionsByChapter(chapter);

  if (questions.length === 0) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">未找到章节：{chapter}</h1>
        <p className="mt-3 text-slate-600">请返回章节列表重新选择。</p>
        <Link href="/chapters" className="mt-4 inline-flex text-sm font-semibold text-teal-700">
          返回章节列表
        </Link>
      </section>
    );
  }

  return <PracticePanel questions={questions} title={`${chapter} - 题组练习`} />;
}
