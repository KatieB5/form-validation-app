import { QuizScoresData} from "./types";

export function parseDataFromUrl(encodedQuizData: string) {
  const decodedQuizData = decodeURIComponent(encodedQuizData);
  const parsedQuizData = JSON.parse(decodedQuizData);
  return parsedQuizData;
}

export function totalScore(parsedData: QuizScoresData) {
  let totalScore = 0;
  
  parsedData.quizScoreData.map((obj) => {
    totalScore += obj.score;
  });

  return totalScore;
}
