"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { quizFormSchema, QuizForm } from "./types";

import { Button } from "@/app/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/ui/form";
import { Input } from "@/app/ui/input";

export function Quiz() {
  // 1. Define your form.
  const form = useForm<QuizForm>({
    resolver: zodResolver(quizFormSchema)
  });

  // 2. Define a submit handler.
  function onSubmit(values: QuizForm) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="transportation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a mode of transport</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
