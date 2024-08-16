"use client";

import { z } from "zod";

export const quizFormSchema = z.object({
  transportation: z.enum(
    [
      "Flies using own retractable wings",
      "Flies around on a dragon",
      "Winnowing (a.k.a. teleporting, travelling vast distances instantly)",
    ],
    {
      required_error: "Please select a book boyfriend mode of transport.",
    }
  ),
  personality: z.enum(
    [
      "Charismatic, cunning, fiercely protective and a dark past",
      "Quiet, mysterious, incredibly loyal and emotionally complex",
      "Loyal, fierce, witty and protective",
      "Charming with a darker side, fiercely protective, regal",
      "Ambitious, patient, a good negotiator, daddy issues",
      "Rebellious, fiercely protective, strong sense of justice and loyal"
    ],
    {
      required_error: "Please select book boyfriend personality traits.",
    }
  ),
  power: z.array(z.string()).refine((value) => value.length === 2, {
    message: 'You must select exactly two items.',
  }),
  hair: z.enum(
    [
      "Blackbrown",
      "Redcopper",
      "Blonde",
    ],
    {
      required_error: "Please select a book boyfriend mode of transport.",
    }
  ),
});

export type QuizForm = z.infer<typeof quizFormSchema>;
