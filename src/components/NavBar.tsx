"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { DarkModeToggle } from "./DarkModeToggle";

export const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Quiz", href: "/quiz" },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    { name: "TBC", href: "/TBC" }
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="https://github.com/KatieB5" target="_blank">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-green-800 dark:text-gray-100">
                    <div className="relative rounded-lg overflow-hidden">
                      <Image
                        src="/logo.png"
                        alt="KatieB5 logo"
                        width="100"
                        height="100"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </span>
                </Link>

                <DisclosureButton
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-emerald-800 focus:text-emerald-800 focus:bg-emerald-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </DisclosureButton>

                <DisclosurePanel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    <DarkModeToggle />
                    {navLinks.map((link) => {
                      <Link
                        key={link.name}
                        href={link.href}
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-emerald-800 focus:text-emerald-800 focus:bg-emerald-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {link.name}
                      </Link>;
                    })}
                    <Link
                      href="/"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-emerald-800 rounded-md lg:ml-5"
                    >
                      Login
                    </Link>
                  </>
                </DisclosurePanel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <DarkModeToggle />
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navLinks.map((link) => (
              <li className="mr-3 nav__item" key={link.name}>
                <Link
                  href={link.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-emerald-500 focus:text-emerald-500 focus:bg-emerald-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/"
            className="px-6 py-2 text-white bg-emerald-600 rounded-md md:ml-5"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};
