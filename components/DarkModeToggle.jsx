"use client";

import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { IoMoonOutline } from "react-icons/io5";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleTheme() {
    if (theme === "dark") {
      setTheme((prev) => "light");
    } else if (theme === "light") {
      setTheme((prev) => "dark");
    }
  }

  return (
    <div className="flex items-center space-x-5">
      <Switch
        checked={theme === "dark"}
        onChange={() => handleTheme()}
        className={`${
          theme === "light" ? "bg-[#757575]" : "bg-[#A445ED]"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          className={`${
            theme === "dark" ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <IoMoonOutline
        className={`text-xl ${
          theme === "light" ? "text-[#757575]" : "text-[#A445ED]"
        }`}
      />
    </div>
  );
};

export default DarkModeToggle;
