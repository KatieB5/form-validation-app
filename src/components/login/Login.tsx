"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginForm, loginFormSchema } from "./types";
import  Link from "next/link";
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
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/ui/dialog";

export function Login() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: LoginForm) {
    console.log(data);
  }

  return (
    <DialogContent className="sm:max-w-[425px] rounded-md mx-1">
      <DialogHeader>
        <DialogTitle className="text-2xl">Login</DialogTitle>
        <DialogDescription>
          Enter your email adress and password, then hit{" "}
          <span className="font-bold">submit</span> to login.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="flex justify-center items-center sm:flex-row sm:justify-center sm:space-x-2">
            <Button
              type="submit"
              className="mr-6 px-6 py-2 text-white bg-emerald-600 rounded-md md:ml-5"
            >
              Submit
            </Button>
          </DialogFooter>
            <div className="flex justify-center items-center text-sm text-gray-400">
              Don&apos;t have an account?&nbsp;
              <Link href="#" className="underline font-bold">
                Sign up
              </Link>
            </div>
        </form>
      </Form>
    </DialogContent>
  );
}
