import React, { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

import {
    FiHome,
    FiSettings,
    FiShare,
    FiSearch,
    FiDownload,
} from "react-icons/fi";
import { useAuth } from "../Admin/AuthContext";

const NavbarComponent = () => {
    const { isToken, removeToken } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate("/auth-login");
    };
    // const [isToken, setIsToken] = useState(false);
    // useEffect(() => {
    //     const token = Cookies.get("token");
    //     setIsToken(!!token);
    // }, []);

    return (
        <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20 shadow-sm shad border-b">
            {/* <nav className="bg-white w-full sm:w-full md:w-1/2 ..."> */}
            {/* logo */}
            <div className="inline-flex">
                <Link className="_o6689fn" to={"/"}>
                    <div className="hidden md:block">
                        {/* <p className="text-gray-800 font-bold text-2xl flex items-center">
                            Filter-H <FaFilter />
                        </p> */}
                        <p className="text-gray-900 font-bold text-2xl sm:text-xl md:text-2xl flex items-center select-none">
                            Filter-H <FaFilter />
                        </p>
                    </div>
                    <div className="block md:hidden">
                        <p className="text-gray-900 font-bold text-2xl sm:text-xl md:text-base flex items-center">
                            Filter-H <FaFilter />
                        </p>
                    </div>
                </Link>
            </div>
            {/* end logo */}
            {/* search bar */}
            <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                <div className="inline-block">
                    <div className="inline-flex items-center max-w-full">
                        <Link
                            to={"search"}
                            className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
                        >
                            <div className="block flex-grow flex-shrink overflow-hidden text-gray-600">
                                Find a filter
                            </div>
                            <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style={{
                                        display: "block",
                                        fill: "none",
                                        height: "12px",
                                        width: "12px",
                                        stroke: "currentcolor",
                                        strokeWidth: "5.33333",
                                        overflow: "visible",
                                    }}
                                >
                                    <g fill="none">
                                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* end search bar */}
            {/* login */}
            <Dropdown
                label=""
                dismissOnClick={false}
                renderTrigger={() => (
                    <span>
                        <div className="flex-initial">
                            <div className="flex justify-end items-center relative">
                                <div className="block">
                                    <div className="inline relative">
                                        <button
                                            type="button"
                                            className="inline-flex items-center relative px-2 border rounded-full hover:shadow"
                                        >
                                            <div className="pl-1">
                                                <svg
                                                    viewBox="0 0 32 32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                    role="presentation"
                                                    focusable="false"
                                                    style={{
                                                        display: "block",
                                                        fill: "none",
                                                        height: "16px",
                                                        width: "16px",
                                                        stroke: "currentcolor",
                                                        strokeWidth: 3,
                                                        overflow: "visible",
                                                    }}
                                                >
                                                    <g
                                                        fill="none"
                                                        fillRule="nonzero"
                                                    >
                                                        <path d="m2 16h28" />
                                                        <path d="m2 24h28" />
                                                        <path d="m2 8h28" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                                                <svg
                                                    viewBox="0 0 32 32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                    role="presentation"
                                                    focusable="false"
                                                    style={{
                                                        display: "block",
                                                        height: "100%",
                                                        width: "100%",
                                                        fill: "currentcolor",
                                                    }}
                                                >
                                                    <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                )}
            >
                <Dropdown.Item>
                    <Link
                        to={"/"}
                        className="flex items-center w-full justify-between"
                    >
                        Home <FiHome className="ms-1" />
                    </Link>
                </Dropdown.Item>

                <Dropdown.Item className="sm:hidden">
                    <Link
                        to={"search"}
                        className="flex items-center w-full justify-between"
                    >
                        Search <FiSearch className="ms-2" />
                    </Link>
                </Dropdown.Item>
                {isToken ? (
                    <>
                        <Dropdown.Item>
                            <Link
                                to={"manage"}
                                className="flex items-center w-full justify-between"
                            >
                                Manage <FiSettings className="ms-2" />
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link
                                to={"insert"}
                                className="flex items-center w-full justify-between"
                            >
                                New Filter <HiPencilAlt className="ms-1" />
                            </Link>
                        </Dropdown.Item>
                    </>
                ) : (
                    ""
                )}

                <Dropdown.Item>
                    {!isToken ? (
                        <Link
                            to={"auth-login"}
                            className="flex items-center w-full justify-between"
                        >
                            Log in <FiDownload className="rotate-90" />
                        </Link>
                    ) : (
                        <p
                            onClick={handleLogout}
                            className="flex items-center w-full justify-between"
                        >
                            Sign out <FiShare className="rotate-90" />
                        </p>
                    )}
                </Dropdown.Item>
            </Dropdown>

            {/* end login */}
        </nav>
    );
};

export default NavbarComponent;
