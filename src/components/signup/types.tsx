"use client";

import { z } from "zod";

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

export const signupFormSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: "You must enter at least 1 character" }),
  lastname: z
    .string()
    .min(1, { message: "You must enter at least 1 character" }),
  email: z
    .string()
    .min(5, {
      message: "You must enter at least 5 characters.",
    })
    .email({ message: "You must enter a valid email address." }),
  password: z
    .string()
    .min(1, { message: "You must enter at least 1 character" })
    .regex(passwordValidation, {
      message: "Your password must have a minimum of 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    }),
});

export type SignUpForm = z.infer<typeof signupFormSchema>;
