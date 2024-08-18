import { QuizScoresData } from "./types";

export default function formatDataForUrl(quizScoresData: QuizScoresData) {
  const stringifiedQuizScoreData = JSON.stringify(quizScoresData);
  const encodedQuizScoreData = encodeURIComponent(stringifiedQuizScoreData);
  return encodedQuizScoreData;
}
