import Image from "next/image";

export const Header = () => {
  return (
    <header className="h-24 w-full flex items-center justify-between px-20 border-green-50 border-2">
      <Image
        src="/logo.svg"
        width={120}
        height={40}
        alt="logo-windbnb-pink"
      ></Image>
      <div></div>
    </header>
  );
};
