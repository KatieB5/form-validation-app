"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { quizFormSchema, QuizForm } from "./types";
import { items } from "./checkboxItems";

import { Button } from "@/app/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/ui/form";
import { RadioGroup, RadioGroupItem } from "@/app/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";
import { Checkbox } from "@/app/ui/checkbox";
import quizScoreCalculator from "./quizScoreFunction";

export function Quiz() {

  const form = useForm<QuizForm>({
    resolver: zodResolver(quizFormSchema),
    defaultValues: {
      power: [],
    },
  });


  function onSubmit(values: QuizForm) {

    console.log(values);

    const quizScoresData = quizScoreCalculator(values);

    console.log(quizScoresData);
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
                  <SelectItem value="Loyal, fierce, witty and protective">
                    Loyal, fierce, witty and protective
                  </SelectItem>
                  <SelectItem value="Charming with a darker side, fiercely protective, regal">
                    Charming with a darker side, fiercely protective, regal
                  </SelectItem>
                  <SelectItem value="Ambitious, patient, a good negotiator, daddy issues">
                    Ambitious, patient, a good negotiator, daddy issues
                  </SelectItem>
                  <SelectItem value="Rebellious, fiercely protective, strong sense of justice and loyal">
                    Rebellious, fiercely protective, strong sense of justice and
                    loyal
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="power"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Power type</FormLabel>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="power"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hair"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Hair colour</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Blackbrown" />
                    </FormControl>
                    <FormLabel className="font-normal">Black/brown</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Redcopper" />
                    </FormControl>
                    <FormLabel className="font-normal">Red/copper</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Blonde" />
                    </FormControl>
                    <FormLabel className="font-normal">Blonde</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
