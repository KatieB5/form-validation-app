"use client";

import Dashboard from "@/components/dashboard/Dashboard";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 sm:p-8 md:p-12 lg:p-24">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Welcome to your results dashboard
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-md pt-4 pb-4">
          Take a look at your results from the quiz below!
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Dashboard />
      </div>
    </main>
  );
}
