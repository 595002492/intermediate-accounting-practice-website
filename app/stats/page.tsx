import StatsPanel from "@/components/StatsPanel";
import { getAllQuestions } from "@/lib/question-bank";

export default function StatsPage() {
  return <StatsPanel allQuestions={getAllQuestions()} />;
}
