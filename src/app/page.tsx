import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border-gray-100 relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Welcome to the <strong>homepage</strong>.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            This website has been built as a personal project to practice using
            TypeScript, Next JS, Tailwind CSS, react hook forms and zod
            validation.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <Image
            src="/software-engineer.svg"
            alt="Software engineer illustration"
            quality={100}
            width={612}
            height={383}
          />
        </div>
      </div>
    </main>
  );
}
