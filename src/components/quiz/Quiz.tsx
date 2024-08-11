"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { quizFormSchema, QuizForm } from "./types";

import { Button } from "@/app/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/ui/form";
import { Input } from "@/app/ui/input";
import { RadioGroup, RadioGroupItem } from "@/app/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";

export function Quiz() {
  // 1. Define your form.
  const form = useForm<QuizForm>({
    resolver: zodResolver(quizFormSchema),
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
            <FormItem className="space-y-3">
              <FormLabel>Mode of transport</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Flies using own retractable wings" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Flies using own retractable wings
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Flies around on a dragon" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Flies around on a dragon
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Winnowing (a.k.a. teleporting, travelling vast distances instantly)" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Winnowing (a.k.a. teleporting, travelling vast distances
                      instantly)
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="personality"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Personality traits</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please select a group of personality traits." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Charismatic, cunning, fiercely protective and a dark past">
                    Charismatic, cunning, fiercely protective and a dark past
                  </SelectItem>
                  <SelectItem value="Quiet, mysterious, incredibly loyal and emotionally complex">
                    Quiet, mysterious, incredibly loyal and emotionally complex
                  </SelectItem>
                  <SelectItem value="Loyal, fierce, witty and protective">Loyal, fierce, witty and protective</SelectItem>
                  <SelectItem value="Charming with a darker side, fiercely protective, regal">Charming with a darker side, fiercely protective, regal</SelectItem>
                  <SelectItem value="Ambitious, patient, a good negotiator, daddy issues">Ambitious, patient, a good negotiator, daddy issues</SelectItem>
                  <SelectItem value="Rebellious, fiercely protective, strong sense of justice and loyal">Rebellious, fiercely protective, strong sense of justice and loyal</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
