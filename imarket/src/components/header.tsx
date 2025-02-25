import { logout } from "@/app/logout/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className=" flex sticky top-0 w-full p-3 justify-between bg-[#2673b1] z-50">
      <div className="flex items-center justify-center">
        <Link href="/">
          <h1 className="text-3xl text-white font-bold ">IMARKET</h1>
        </Link>
      </div>
      <nav className="flex ">
        <ul className="flex gap-2">
          <Link
            href="/private"          >
           <Button  effect={"hoverUnderline"} className="flex items-center justify-center bg-transparent hover:bg-transparent after:bg-white">
            <h2 className="flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">Login / Register</h2>
            </Button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
