import axios from "axios";
import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { Link } from "react-router-dom"; // Import useHistory

const FindFilter = () => {
    const API = "http://localhost:8000/api";
    const [filters, setFilters] = useState([]);
    //
    const [searchTerm, setSearchTerm] = useState("");
    const [searchOption, setSearchOption] = useState("local_code");
    const [filteredItems, setFilteredItems] = useState(null);
    const [mappingFilters, setMappingFilters] = useState([]);

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
                        other_company_codes: item.other_company_codes
                            .map((occ) => `${occ.name} ${occ.code}`)
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
        threshold: 0.3,
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
        <div className="bg-lime-s400 container mx-auto">
            <div className="p-3 container">
                <h2 className="w-[90%] mx-auto font-bold py-2 text-gray-600 text-2xl uppercase">
                    Find your filter
                </h2>
            </div>

            {/* <Outlet filters={filters} /> */}
            <div>
                <div className="flex justify-center">
                    <div className="relative overflow-x-auto rounded-lg w-11/12 border border-violet-600">
                        <div className="max-w-mds mx-auto bg-white rounded-md shadow-md">
                            <div className="items-center mb-4 flex flex-wrap">
                                {/* Text Input */}

                                <div className="py-4 dark:bg-gray-900 p-2 sm:w-1/2 w-full">
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
                                            className="block pt-2 ps-10 text-sm text-gray-800 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Search for Filters"
                                            value={searchTerm}
                                            onChange={(e) =>
                                                setSearchTerm(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Select Input */}
                                <div className="p-2 sm:w-1/2 w-full flex justify-between sm:border-s border-gray-300">
                                    <p className="w-[30%] text-gray-700 p-0 place-items-baseline px-2 h-fit my-auto font-semibold">
                                        {" "}
                                        Search by{" "}
                                    </p>
                                    <select
                                        className="block pt-2 ps-10 text-sm text-gray-800 border border-gray-300 rounded-lg w-[70%] bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
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
                                        <option
                                            className="capitalize"
                                            value="other_company_codes"
                                        >
                                            Strange code
                                        </option>
                                    </select>
                                </div>

                                {/* Search Button */}
                                {/* <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus">
                                    Search
                                </button> */}
                            </div>
                        </div>

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th
                                        scope="col"
                                        className="ps-6 text-start py-3 min-w-fit"
                                    >
                                        Code & EAN Code
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 text-center py-3 min-w-fit border-s"
                                    >
                                        Form
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 text-center py-3 min-w-fit border-s"
                                    >
                                        Type
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 text-center py-3 min-w-fit border-s"
                                    >
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
                                        >
                                            <th
                                                scope="row"
                                                className="flex items-center ps-4 py-2 text-gray-900 whitespace-nowrap dark:text-white border-e min-w-fit"
                                            >
                                                <img
                                                    className="w-10 h-10 rounded-full hidden sm:block "
                                                    src={filter.images[0]}
                                                    alt={filter.global_code}
                                                />
                                                <div className="ps-3 min-w-fit">
                                                    <div className="text-base font-semibold">
                                                        {filter.local_code}
                                                    </div>
                                                    <div className="font-normal text-gray-500 w-fit">
                                                        {filter.global_code}
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="text-center  border-s">
                                                {filter.dimension_form}
                                            </td>
                                            <td className="text-center  border-s">
                                                {filter.type}
                                            </td>
                                            <td className="text-center  border-s">
                                                {/* Modal toggle */}
                                                <Link
                                                    to={`/filter/${filter.id}`}
                                                    type="button"
                                                    data-modal-target="editUserModal"
                                                    data-modal-show="editUserModal"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                >
                                                    Show Filter
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindFilter;
