import Link from "next/link";

export const Header = () => {
  return (
    <div className=" flex w-full p-3 justify-between bg-blue-900">
      <div className="flex items-center justify-center">
        <Link href="/">
          <h1 className="">IMARKET</h1>
        </Link>
      </div>
      <nav className="flex ">
        <ul className="flex gap-2">
          <Link
            href="/"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center text-background gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            <h2>Home</h2>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-700 text-background gap-2 hover:bg-blue-600 dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            <h2>Login / Register</h2>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center  bg-blue-700 text-background gap-2 hover:bg-blue-600 dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            <h2>Logout</h2>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
