import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Update from "../Update";
import { Link } from "react-router-dom";

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
        <div className="container mx-auto p-5">
            <h1 className="text-gray-800 text-5xl font-bold p-2 text-center">
                Admin Dashboard
            </h1>
            {/* <img width={110}  src={filters[0].images[0]} alt="" /> */}
            <div className="table w-full p-2 rounded">
                <table className="w-full border rounded  p-20">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="border-r p-2">
                                <input type="checkbox" />
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    ID
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    EAN CODE
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Filter Code
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Type
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Action
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {filters.length <= 0 ? (
                            <tr>
                                <td colSpan={6}>
                                    <div
                                        id="loading-basic-example"
                                        className="h-auto w-full p-24 flex justify-center"
                                    >
                                        <div
                                            className="items-center flex "
                                            data-te-loading-management-init
                                            data-te-parent-selector="#loading-basic-example"
                                        >
                                            <div
                                                data-te-loading-icon-ref
                                                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                                role="status"
                                            ></div>
                                            <span
                                                data-te-loading-text-ref
                                                className="ms-4"
                                            >
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
                                        <td className="min-w-fit h-fit">
                                            <Link
                                                to={`/filter/${filter.id}`}
                                                className="bg-yellow-400 p-2 font-bold text-white hover:shadow-lg text-xs mx-0.5 rounded"
                                            >
                                                View
                                            </Link>
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
                                            <Link
                                                href="#"
                                                className="bg-red-500 p-2 font-bold text-white hover:shadow-lg text-xs mx-0.5 rounded"
                                            >
                                                Remove
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Filters;
// export default Filters;
