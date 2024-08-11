"use client";

import { Quiz } from "@/components/quiz/Quiz";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-8 md:p-12 lg:p-24">
      <section className="relative w-4/5 max-w-5xl">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Welcome to the quiz
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-md pt-4 pb-4">
            Fill in all of the fields and hit submit to find out your fantasy book boyfriend!
          </p>
          <Quiz />
          <p className="text-sm text-neutral-500 pt-4">
            Having trouble with the form?
            Contact the Customer Service Experts{" "}
            <Link
              href="#"
              onClick={(e) => {
                window.location.href = "mailto:help@no-one.co.uk";
                e.preventDefault();
              }}
              className="underline underline-offset-4"
            >
              here.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
