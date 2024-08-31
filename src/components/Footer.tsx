import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full pb-16">
      <div className="max-w-screen-xl p-8 w-full mx-auto grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image
            src="/logo.png"
            alt="KatieB5 logo"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <p className="mb-4 pt-2 text-sm">
            <strong className="font-medium">KatieB5</strong> is the GitHub
            profile name of Junior Software Developer, Katie B.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src="/facebook.png"
                alt="Facebook logo"
                width="6"
                height="6"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src="/twitter.png"
                alt="X logo"
                width="6"
                height="6"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src="/instagram.png"
                alt="Instagram logo"
                width="6"
                height="6"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-xs text-gray-400 pb-4">
            Social media logos sourced from www.freepik.com. Hero image is Software engineer
            by Delesign Graphics, licensed under Creative Commons Attribution
            4.0 International (CC BY 4.0). Bookboyfriend characters are property of Sarah J Maas, and Rebecca Yarros.
          </p>
          <p className="text-gray-400 text-sm">
            ©{new Date().getFullYear()} - KatieB5
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-md">
            This website
          </p>
          <ul className="text-black-500 text-xs">
            <li className="my-2 hover:text-emerald-500 cursor-pointer transition-all">
              Home{" "}
            </li>
            <li className="my-2 hover:text-emerald-500 cursor-pointer transition-all">
              Quiz{" "}
            </li>
            <li className="my-2 hover:text-emerald-500 cursor-pointer transition-all">
              Dashboard{" "}
            </li>
            <li className="my-2 hover:text-emerald-500 cursor-pointer transition-all">
              Login{" "}
            </li>
            <li className="my-2 hover:text-emerald-500 cursor-pointer transition-all">
              Sign up{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-md">Engage</p>
          <ul className="text-black-500 text-xs">
            <li className="my-2 hover:text-emerald-500 cursor-pointer transition-all">
              KatieB5 GitHub{" "}
            </li>
            <li className="my-2 hover:text-emerald-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-emerald-500 cursor-pointer transition-all">
              About KatieB5{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-md">Legal</p>
          <ul className="text-black-500 text-xs">
            <li className="my-2 hover:text-emerald-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-emerald-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
