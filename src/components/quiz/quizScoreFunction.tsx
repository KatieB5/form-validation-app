import { QuizForm } from "./types";

export default function quizScoreCalculator(values: QuizForm) {
  const bookBfObject = {
    rhys: 0,
    cassian: 0,
    azriel: 0,
    tamlin: 0,
    lucien: 0,
    xaden: 0,
  };

  if (values.transportation === "Flies using own retractable wings") {
    bookBfObject.rhys += 1;
    bookBfObject.cassian += 1;
    bookBfObject.azriel += 1;
  } else if (values.transportation === "Flies around on a dragon") {
    bookBfObject.xaden += 1;
  } else {
    bookBfObject.tamlin += 1;
    bookBfObject.lucien += 1;
  }

  if (
    values.personality ===
    "Rebellious, fiercely protective, strong sense of justice and loyal"
  ) {
    bookBfObject.xaden += 1;
  } else if (
    values.personality === "Ambitious, patient, a good negotiator, daddy issues"
  ) {
    bookBfObject.lucien += 1;
  } else if (
    values.personality ===
    "Charismatic, cunning, fiercely protective and a dark past"
  ) {
    bookBfObject.rhys += 1;
  } else if (
    values.personality ===
    "Charming with a darker side, fiercely protective, regal"
  ) {
    bookBfObject.tamlin += 1;
  } else if (values.personality === "Loyal, fierce, witty and protective") {
    bookBfObject.cassian += 1;
  } else {
    bookBfObject.azriel += 1;
  }

  if (values.power.includes("shadows")) {
    bookBfObject.xaden += 1;
    bookBfObject.azriel += 1;
  }

  if (values.power.includes("spying")) {
    bookBfObject.azriel += 1;
  }

  if (values.power.includes("warrior")) {
    bookBfObject.cassian += 1;
    bookBfObject.xaden += 1;
    bookBfObject.azriel += 1;
    bookBfObject.rhys += 1;
  }

  if (values.power.includes("nature")) {
    bookBfObject.tamlin += 1;
  }

  if (values.power.includes("illusion and deception")) {
    bookBfObject.lucien += 1;
  }

  if (values.power.includes("mind reading")) {
    bookBfObject.rhys += 1;
    bookBfObject.xaden += 1;
  }

  if (values.power.includes("shape shifting")) {
    bookBfObject.tamlin += 1;
  }

  if (values.hair === "Blackbrown") {
    bookBfObject.rhys += 1;
    bookBfObject.xaden += 1;
    bookBfObject.cassian += 1;
    bookBfObject.azriel += 1;
  } else if (values.hair === "Blonde") {
    bookBfObject.tamlin += 1;
  } else {
    bookBfObject.lucien += 1;
  }

  //data={quizScoreData:[{name: "rhys", score: 20}]},

  const quizScoreData = {quizScoreData:[
    { name: "Rhys", score: bookBfObject.rhys },
    { name: "Cassian", score: bookBfObject.cassian },
    { name: "Azriel", score: bookBfObject.azriel },
    { name: "Tamlin", score: bookBfObject.tamlin },
    { name: "Lucien", score: bookBfObject.lucien },
    { name: "Xaden", score: bookBfObject.xaden },
  ]};

  return quizScoreData;
}
