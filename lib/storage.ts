import { PracticeRecord, WrongBookItem } from "@/lib/types";

const RECORDS_KEY = "iap_records";
const WRONG_BOOK_KEY = "iap_wrong_book";

function isBrowser() {
  return typeof window !== "undefined";
}

function readJson<T>(key: string, fallback: T): T {
  if (!isBrowser()) {
    return fallback;
  }

  const raw = window.localStorage.getItem(key);
  if (!raw) {
    return fallback;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getPracticeRecords() {
  return readJson<PracticeRecord[]>(RECORDS_KEY, []);
}

export function savePracticeRecord(record: PracticeRecord) {
  const records = getPracticeRecords();
  records.unshift(record);
  writeJson(RECORDS_KEY, records.slice(0, 200));
}

export function getWrongBook() {
  return readJson<WrongBookItem[]>(WRONG_BOOK_KEY, []);
}

export function addWrongQuestion(questionId: string) {
  const wrongBook = getWrongBook();
  const found = wrongBook.find((item) => item.questionId === questionId);

  if (found) {
    found.wrongCount += 1;
    found.lastWrongAt = new Date().toISOString();
  } else {
    wrongBook.unshift({
      id: `${questionId}-${Date.now()}`,
      questionId,
      wrongCount: 1,
      lastWrongAt: new Date().toISOString()
    });
  }

  writeJson(WRONG_BOOK_KEY, wrongBook);
}

export function removeWrongQuestion(questionId: string) {
  const wrongBook = getWrongBook().filter((item) => item.questionId !== questionId);
  writeJson(WRONG_BOOK_KEY, wrongBook);
}
