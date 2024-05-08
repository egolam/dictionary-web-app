"use client";

import { IoIosSearch } from "react-icons/io";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  let params = new URLSearchParams(searchParams);

  function handleSearch(query) {
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div
      className={`
          dark:focus-within:border-[#A445ED] focus-within:border-[#A445ED] w-full flex items-center justify-between sm:text-xl text-base bg-[#F4F4F4] dark:bg-[#1F1F1F] font-bold border-2 border-[#F4F4F4] hover:border-[#A445ED] sm:h-16 h-12 rounded-2xl dark:border-[#1F1F1F] dark:hover:border-[#A445ED] cursor-pointer`}
    >
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="Search for any word..."
        className="bg-transparent outline-none group w-full h-full indent-6 cursor-pointer"
        defaultValue={searchParams.get("search")?.toString()}
      />
      <span className="text-[#A445ED] h-full w-16 flex items-center justify-center">
        <IoIosSearch />
      </span>
    </div>
  );
};

export default SearchBox;
