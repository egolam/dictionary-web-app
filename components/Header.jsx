import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import DarkModeToggle from "./DarkModeToggle";
import FontSelection from "./FontSelection";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <Image src={Logo} alt="a book illustration" />
      </Link>
      <div className="flex items-center gap-6">
        <FontSelection />
        <span className="inline-block w-0.5 self-stretch bg-[#E9E9E9]"></span>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
