import { redirect } from "next/navigation";
import { Header } from "@/components/header";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import { logout } from "@/app/logout/actions";

export default async function PrivatePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <Header />
      {/* Testing Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto p-6">
        {/* Profile card */}
        <div className="md:col-span-1">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center pb-10">
              <div
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
              >
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {data.user.email}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                IT
              </span>
              <div className="flex mt-4 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none"
                >
                  Sell company
                </a>
                <form action={logout}>
                  <Button
                    type="submit"
                    className="flex items-center justify-center bg-transparent hover:bg-transparent after:bg-red-600 text-red-600"
                  >
                    Logout
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-2">
          <div className="w-full h-40 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-lg shadow-sm">
            <p className="text-gray-500 dark:text-gray-300">
              Content Goes Here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
