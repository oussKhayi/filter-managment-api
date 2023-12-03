import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom"; // Import useHistory

const FindFilter = () => {
    const API = "http://localhost:8000/api";
    const [filters, setFilters] = useState([]);
    //
    const [searchTerm, setSearchTerm] = useState("");
    const [searchOption, setSearchOption] = useState("local_code");
    const [filteredItems, setFilteredItems] = useState(null);
    const [mappingFilters, setMappingFilters] = useState([]);
    const navigate = useNavigate(); // useNavigate hook for navigation

    useEffect(() => {
        try {
            axios
                .get(`${API}/filters`)
                .then((req, res) => {
                    console.log(req.data.filters);
                    const newArray = req.data.filters.map((item) => ({
                        ...item,
                        supported_cars: item.supported_cars
                            .map(
                                (car) => `${car.brand} ${car.model} ${car.year}`
                            )
                            .join(" "),
                    }));
                    setFilters([...newArray]);
                    setMappingFilters([...newArray]);
                })
                .catch((error) => console.log("Axios error : \n", error));
        } catch (error) {
            console.error(error);
        }
    }, []);
    useEffect(() => {
        setMappingFilters([
            ...(filteredItems && searchTerm !== "" ? filteredItems : filters),
        ]);
    }, [filteredItems]);

    const fuseOptions = {
        keys: [searchOption],
        includeScore: true,
        threshold: 0.5,
    };

    // Move the creation of Fuse outside useEffect
    const fuse = new Fuse(filters, fuseOptions);

    useEffect(() => {
        const results = fuse.search(searchTerm);
        const filtered = results.map((result) => result.item);
        setFilteredItems(filtered);
    }, [searchTerm, searchOption]); // Include fuse in the dependency array

    const handleSearch = () => {
        // Triggered when the user clicks the "Search" button
        const results = fuse.search(searchTerm);
        const filtered = results.map((result) => result.item);
        setFilteredItems(filtered);
    };
    return (
        <>
            <div className="p-3">
                <h2 className="font-bold py-2 text-gray-600 text-2xl uppercase">
                    Find your filter
                </h2>
            </div>

            {/* <Outlet filters={filters} /> */}
            <div>
                <div className="flex justify-center">
                    <div className="relative overflow-x-auto sm:rounded-lg w-11/12 border">
                        <div className="max-w-mds    mx-auto bg-white rounded-md shadow-md">
                            <div className="flex items-center mb-4">
                                {/* Text Input */}

                                <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900 p-2">
                                    <label
                                        htmlFor="table-search"
                                        className="sr-only"
                                    >
                                        Search
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg
                                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Search for Filters"
                                            value={searchTerm}
                                            onChange={(e) =>
                                                setSearchTerm(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Select Input */}
                                <select
                                    className="ml-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    value={searchOption}
                                    onChange={(e) =>
                                        setSearchOption(e.target.value)
                                    }
                                >
                                    <option
                                        className="capitalize"
                                        value="supported_cars"
                                    >
                                        Car information
                                    </option>
                                    <option
                                        className="capitalize"
                                        value="local_code"
                                    >
                                        Local Code
                                    </option>
                                    <option
                                        className="capitalize"
                                        value="global_code"
                                    >
                                        EAN code
                                    </option>
                                </select>

                                {/* Search Button */}
                                {/* <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                                    Search
                                </button> */}
                            </div>
                        </div>

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Code & EAN Code
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Form
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {mappingFilters.map((filter, i) => {
                                    return (
                                        <tr
                                            key={i}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                                            onClick={() =>
                                                navigate(`/filter/${filter.id}`)
                                            } // Use navigate for redirection
                                        >
                                            <th
                                                scope="row"
                                                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                <img
                                                    className="w-10 h-10 rounded-full"
                                                    src={filter.images[0]}
                                                    alt={filter.global_code}
                                                />
                                                <div className="ps-3">
                                                    <div className="text-base font-semibold">
                                                        {filter.local_code}
                                                    </div>
                                                    <div className="font-normal text-gray-500">
                                                        {filter.global_code}
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="px-6 py-4">
                                                {filter.dimension_form}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    {/* <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "} */}
                                                    {filter.type}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                {/* Modal toggle */}
                                                <a
                                                    href="#"
                                                    type="button"
                                                    data-modal-target="editUserModal"
                                                    data-modal-show="editUserModal"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                >
                                                    Show Filter
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FindFilter;
