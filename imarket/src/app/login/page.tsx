import { Form } from "react-hook-form";
import { login, signup } from "./actions";
import Link from "next/link";


export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-white rounded-2xl shadow-xl">
        {/* Form "Header" */}
        <div className="flex flex-row gap-3 pb-4 items-center">
          <h1 className="text-3xl font-bold text-gray-700">IMARKET</h1>
        </div>
        <div className="text-sm font-light text-gray-500 pb-8">
          Login to your account on Your Company.
        </div>

        {/* Form */}
        <form className="flex flex-col">
          {/* Email Field */}
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="pl-12 bg-gray-50 text-gray-600 border border-gray-300 sm:text-sm rounded-lg focus:ring-1 focus:ring-gray-400 focus:outline-none block w-full p-3"
                placeholder="name@company.com"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="pb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-asterisk"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8.5 14 7-4"></path>
                  <path d="m8.5 10 7 4"></path>
                </svg>
              </span>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="pl-12 bg-gray-50 text-gray-600 border border-gray-300 sm:text-sm rounded-lg focus:ring-1 focus:ring-gray-400 focus:outline-none block w-full p-3"
                placeholder="••••••••••"
                autoComplete="new-password"
              />
            </div>
          </div>

          {/* My Login Btn */}
          <button
            formAction={login}
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
          >
            Login
          </button>
          {/* The Signup Link/Btn */}
          <div className="text-sm font-light text-gray-500 text-center">
            Don't have an account yet?{" "}
            <button
              formAction={signup}
              className="font-medium text-indigo-600 hover:underline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
