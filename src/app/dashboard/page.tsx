"use client";

import Dashboard from "@/components/dashboard/Dashboard";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 sm:p-8 md:p-12 lg:p-24">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Welcome to the results dashboard
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-md pt-4 pb-4 text-center">
          Take a look at your results from the quiz below! If you did not take
          the quiz, then the dashboard will be auto-populated with default data.<br /> To take the quiz and see your results, navigate to the quiz page using the link in the navbar above.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Suspense>
          <Dashboard />
        </Suspense>
      </div>
    </main>
  );
}
