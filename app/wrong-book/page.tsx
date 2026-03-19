import WrongBookPanel from "@/components/WrongBookPanel";
import { getAllQuestions } from "@/lib/question-bank";

export default function WrongBookPage() {
  return <WrongBookPanel allQuestions={getAllQuestions()} />;
}
