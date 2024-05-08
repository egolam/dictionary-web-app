"use client";

import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { IoMoonOutline } from "react-icons/io5";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleTheme() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else if (resolvedTheme === "light") {
      setTheme("dark");
    }
  }

  return (
    <div className="flex items-center space-x-5">
      <Switch
        checked={resolvedTheme === "dark"}
        onClick={() => handleTheme()}
        className={`${
          resolvedTheme === "light" ? "bg-[#757575]" : "bg-[#A445ED]"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          className={`${
            resolvedTheme === "dark" ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <IoMoonOutline
        className={`text-xl ${
          resolvedTheme === "light" ? "text-[#757575]" : "text-[#A445ED]"
        }`}
      />
    </div>
  );
};

export default DarkModeToggle;
