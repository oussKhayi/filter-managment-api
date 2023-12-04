import React from "react";
import { FaFilter } from "react-icons/fa";
const LogIn = () => {
    return (
        <>
            <div
                x-data="{ sidebarOpen: false }"
                className="relative text-gray-800 bg-white font-roboto shadow"
            >
                <main className="flex items-center flex-1 min-h-screen px-8 pb-6 bg-white pattern">
                    <div className="w-full max-w-sm mx-auto">
                        <div className="text-center">
                            <div className="flex items-center justify-center">
                            <p className="text-gray-200 font-bold text-2xl sm:text-xl md:text-6xl flex items-center select-none">
                            Filter-H <FaFilter />
                        </p>
                            </div>

                            <h1 className="mt-6 text-3xl font-semibold text-gray-700">
                                Sign in
                            </h1>

                            <p className="mt-3 text-gray-500">
                                Sign in to access your account
                            </p>
                        </div>

                        <div className="mt-8">
                            <form action="/preview/premium-dashboard/">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm text-gray-600"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="example@example.com"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-indigo-400 focus:ring-indigo-300 focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label
                                            htmlFor="password"
                                            className="text-sm text-gray-600"
                                        >
                                            Password
                                        </label>
                                        <a
                                            href="#"
                                            className="text-sm text-gray-400 focus:text-indigo-500 hover:text-indigo-500 hover:underline"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>

                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Your Password"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-indigo-400 focus:ring-indigo-300 focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                                        Sign in
                                    </button>
                                </div>

                                <p className="mt-6 text-sm text-center text-gray-400">
                                    Don't have an account yet?{" "}
                                    <a
                                        href="/preview/premium-dashboard/sign-up"
                                        className="text-indigo-500 focus:outline-none focus:underline hover:underline"
                                    >
                                        Sign up
                                    </a>
                                    .
                                </p>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default LogIn;
