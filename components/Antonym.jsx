"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Antonym = ({ children }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch() {
    const params = new URLSearchParams(searchParams);

    params.set("search", children);

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <button onClick={handleSearch} className="font-bold hover:underline">
      {children}
    </button>
  );
};

export default Antonym;
