import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Update from "../Update";

const Filters = () => {
    const API = "http://localhost:8000/api";
    const [filters, setFilters] = useState([]);
    const [updateFl, setUpdateFl] = useState({});

    useEffect(() => {
        try {
            axios
                .get(`${API}/filters`)
                .then((req, res) => {
                    console.log(req.data.filters);
                    setFilters(req.data.filters);
                })
                .catch((error) => console.log("Axios error : \n", error));
        } catch (error) {
            console.error(error);
        }
    }, []);
    return (
        <div className="bg-gray-300 p-5">
            <h1 className="text-gray-700 text-5xl font-bold p-2 text-center">
                Filters managment
            </h1>
            {/* <img width={110}  src={filters[0].images[0]} alt="" /> */}
            <div className="table w-full p-2 rounded">
                <table className="w-full border rounded bg-purple-300 p-20">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="border-r p-2">
                                <input type="checkbox" />
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    ID
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Global code
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Local code
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Type
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Action
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* <tr className="bg-gray-50 text-center">
                            <td className="p-2 border-r"></td>
                            <td className="p-2 border-r">
                                <input type="text" className="border p-1" />
                            </td>
                            <td className="p-2 border-r">
                                <input type="text" className="border p-1" />
                            </td>
                            <td className="p-2 border-r">
                                <input type="text" className="border p-1" />
                            </td>
                            <td className="p-2 border-r">
                                <input type="text" className="border p-1" />
                            </td>
                            <td className="p-2">
                                <input type="text" className="border p-1" />
                            </td>
                        </tr> */}
                        {filters.length <= 0 ? (
                            <tr>
                                <td colSpan={6}>
                                    <div
                                        id="loading-basic-example"
                                        className="h-auto w-full p-24 flex justify-center"
                                    >
                                        <div
                                            data-te-loading-management-init
                                            data-te-parent-selector="#loading-basic-example"
                                        >
                                            <div
                                                data-te-loading-icon-ref
                                                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                                role="status"
                                            ></div>
                                            <span data-te-loading-text-ref>
                                                Loading...
                                            </span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            filters.map((filter) => {
                                return (
                                    <tr
                                        className="bg-gray-100 text-center border-b text-sm text-gray-600"
                                        key={filter.id}
                                    >
                                        <td className="p-2 border-r">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="p-2 border-r">
                                            {filter.id}
                                        </td>
                                        <td className="p-2 border-r">
                                            {filter.global_code}
                                        </td>
                                        <td className="p-2 border-r">
                                            {filter.local_code}
                                        </td>
                                        <td className="p-2 border-r uppercase">
                                            {filter.type}
                                        </td>
                                        <td>
                                            <a
                                                href="#"
                                                className="bg-yellow-400 p-2 font-bold text-white hover:shadow-lg text-xs mx-0.5 rounded"
                                            >
                                                View
                                            </a>
                                            <button
                                                type="button"
                                                // href="#"
                                                onClick={() =>
                                                    setUpdateFl(filter)
                                                }
                                                className="bg-blue-500 p-2 font-bold text-white hover:shadow-lg text-xs mx-0.5 rounded"
                                            >
                                                Edit
                                            </button>
                                            <a
                                                href="#"
                                                className="bg-red-500 p-2 font-bold text-white hover:shadow-lg text-xs mx-0.5 rounded"
                                            >
                                                Remove
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
            <hr />
            <Update filter={updateFl} />

            <hr />
        </div>
    );
};
export default Filters;
// export default Filters;
