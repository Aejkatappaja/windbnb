import Image from "next/image";
import { Search } from "./Search";

export const Header = () => {
  return (
    <header className="flex h-24 w-full items-center justify-between bg-slate-50 px-20">
      <Image
        src="/logo.svg"
        width={120}
        height={40}
        alt="logo-windbnb-pink"
      ></Image>
      <Search />
    </header>
  );
};
