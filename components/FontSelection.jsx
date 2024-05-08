"use client";

import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { Fragment, useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const fonts = [
  { label: "Sans Serif", value: "font-sans" },
  { label: "Serif", value: "font-serif" },
  { label: "Mono", value: "font-mono" },
];

const FontSelection = () => {
  const [font, setFont] = useState({ label: "Sans Serif", value: "font-sans" });
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function Yarak() {
    const params = new URLSearchParams(searchParams);
    if (font.value) {
      params.set("font", font.value);
    } else {
      params.delete("font");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    Yarak();
  }, [font]);

  function handleFont(e) {
    setFont({ label: e.target.innerText, value: e.target.value });
  }

  return (
    <Menu as="div" className="relative font-bold md:text-lg text-sm">
      <Menu.Button className="flex items-center gap-4">
        {font.label}
        <IoIosArrowDown className="text-[#A445ED]" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="w-44 flex flex-col absolute text-nowrap sm:p-6 p-3 bg-white dark:bg-[#1F1F1F] shadow-2xl space-y-6 sm:rounded-2xl rounded-lg top-11 sm:right-0 dark:shadow-[0_5px_30px_0_rgb(164,69,237)]">
          {fonts.map((font) => (
            <Menu.Item
              value={font.value}
              onClick={(e) => handleFont(e)}
              key={font.value}
              as="button"
              className={`text-left hover:text-[#A445ED] ${font.value}`}
            >
              {font.label}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FontSelection;
