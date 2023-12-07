import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";

const Filters = () => {
    const API = "http://localhost:8000/api";
    const [filters, setFilters] = useState([]);

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
            <div className="overflow-x-scroll">
                <div className="table w-full p-2 rounded">
                    <table className="w-full border rounded p-20">
                        <thead>
                            <tr className="bg-gray-50 border-b">
                                <th className="border-r p-2">
                                    <input type="checkbox" />
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div className="flex items-center justify-center">
                                        Image
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
                                            className="text-center border-b text-sm text-gray-600"
                                            key={filter.id}
                                        >
                                            <td className="p-2 border-r">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="p-0.5 text-center border-r items-center">
                                                <img
                                                    className="w-10 rounded-lg border mx-auto"
                                                    src={filter.images[0]}
                                                    alt={filter.global_code}
                                                />
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
                                            <td className="min-w-fit">
                                                {/* <td className="min-w-fit h-fit flex justify-around bg-lime-300"> */}
                                                <div className="flex justify-around">
                                                    <Link
                                                        to={`/filter/${filter.id}`}
                                                        className="p-0.5 font-bold text-blue-600 m-1 hover:shadow-lg text-md mx-0.5 rounded relative group"
                                                    >
                                                        <p className="hidden group-hover:block absolute text-gray-400 font-extralight text-xs border rounded-lg p-1 shadow bottom-4 end-2 w-16 transition-transform">
                                                            View
                                                        </p>
                                                        <FiEye />
                                                    </Link>
                                                    <Link
                                                        to={"#"}
                                                        className="p-0.5 font-bold text-green-500 m-1 hover:shadow-lg text-md mx-0.5 rounded relative group"
                                                    >
                                                        <p className="hidden group-hover:block absolute text-gray-400 font-extralight text-xs border rounded-lg p-1 shadow bottom-4 end-2 w-16 transition-transform">
                                                            Update
                                                        </p>
                                                        <FiEdit />
                                                    </Link>
                                                    <Link className="p-0.5 font-bold text-red-500 m-1 hover:shadow-lg text-md mx-0.5 rounded relative group">
                                                        <p className="hidden group-hover:block absolute text-gray-400 font-extralight text-xs border rounded-lg p-1 shadow bottom-4 end-2 w-16 transition-transform">
                                                            Delete
                                                        </p>
                                                        <FiTrash2 />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Filters;
// export default Filters;
