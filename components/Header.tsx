import Image from "next/image";
import { Search } from "./Search";

export const Header = () => {
  return (
    <header className="flex h-36 w-full flex-col justify-between  bg-slate-50 px-6 py-2 md:h-24 md:flex-row md:items-center md:px-12 ">
      <Image src="/logo.svg" width={120} height={40} alt="logo-windbnb-pink" />
      <Search />
    </header>
  );
};
