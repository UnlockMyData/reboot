"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
// import logo from "../public/logo.webp";
import titre from "/public/titre.png";

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const currentPathname = usePathname();
  const [logoSize, setLogoSize] = useState({ width: "200px" });
  const navItems = [
    {
      pathName: "/discord",
      label: "Etude sur Discord",
    },
    {
      pathName: "/google",
      label: "Etude sur Google",
    },
    {
      pathName: "/instagram",
      label: "Etude sur instagram",
    },
    {
      pathName: "/twitch",
      label: "Etude sur Twitch",
    },
    {
      pathName: "/list",
      label: "Annuaire",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setLogoSize({ width: "120px" });
      } else {
        setLogoSize({ width: "200px" });
      }
    });
  });

  return (
    <>
      <header className="">
        <nav
          data-state={menuState && "active"}
          className="fixed  z-20 w-full border-b  top-0"
          // dark:bg-gray-950/50 lg:dark:bg-transparent
        >
          <div className="m-auto  px-6">
            <div className="flex  flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                ></Link>
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="btn bg-blue variant-ghost sz-md icon-only relative z-20 -mr-2.5 block cursor-pointer lg:hidden"
                >
                  <svg
                    className="text-title m-auto size-6 transition-[transform,opacity] duration-300 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    ></path>
                  </svg>
                  <svg
                    className="text-title absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 transition-[transform,opacity] duration-300 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-gray-300/20 group-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent  lg:p-0 lg:shadow-none lg:group-data-[state=active]:flex dark:shadow-none ">
                <div className="lg:pr-4">
                  <ul className="space-y-6 lg:flex lg:gap-6 lg:space-y-0 lg:text-sm">
                    {navItems.map((item) => (
                      <li key={item.pathName}>
                        <Link
                          href={item.pathName}
                          className={
                            "font-sans block  text-blue font-bold" +
                            (currentPathname === item.pathName
                              ? " underline"
                              : "")
                          }
                          onClick={() => setMenuState(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div
          className={`fixed inset-0 z-10 bg-white transform ${
            menuState ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:hidden`}
        >
          <div className="pt-20 px-6">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.pathName}>
                  <Link
                    href={item.pathName}
                    className="font-sans text-xl text-blue font-bold block py-2"
                    onClick={() => setMenuState(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
