
export default function parseDataFromUrl(encodedQuizData: string) {
  const decodedQuizData = decodeURIComponent(encodedQuizData);
  const parsedQuizData = JSON.parse(decodedQuizData);
  return parsedQuizData;
}
