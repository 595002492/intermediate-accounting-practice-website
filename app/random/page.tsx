import PracticePanel from "@/components/PracticePanel";
import { getAllQuestions } from "@/lib/question-bank";

export default function RandomPracticePage() {
  const questions = getAllQuestions();

  return <PracticePanel questions={questions} title="随机刷题" mode="random" />;
}
