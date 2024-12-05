import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full h-[64px] shadow-md shadow-slate-800/50">
      <nav className="w-full h-full flex items-center justify-between bg-black px-4">
        <Link href={"/dashboard"} className="pointer">
          <Image src={"/logo.png"} alt="logo" width={100} height={100} />
        </Link>
      </nav>
    </header>
  );
}
