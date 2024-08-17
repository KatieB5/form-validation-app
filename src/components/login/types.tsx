"use client";

import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(5, {
    message: "You must enter at least 5 characters.",
  }).email({message: "You must enter a valid email address."}),
  password: z.string().min(1, {message: "You must enter at least 1 character"})
});

export type LoginForm = z.infer<typeof loginFormSchema>;
