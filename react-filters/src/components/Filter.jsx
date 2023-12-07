import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Accordion, Carousel } from "flowbite-react";
import { CiImageOn } from "react-icons/ci";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const Filter = () => {
    const API = "http://localhost:8000/api";
    const { productId } = useParams();
    const [filter, setFilter] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API}/filter/${productId}`);
                setFilter(response.data.filter);
            } catch (error) {
                console.error("Axios error:\n", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [API, productId]);

    return (
        <>
            {isLoading ? (
                <div className="bg-gray-100 m-0 pt-2 min-h-screen">
                    <div className="flex flex-col md:flex-row mt-4 animate-pulse w-4/5 mx-auto">
                        {/* Loading placeholder for the left column */}
                        <div className="md:flex-1 px-4 mb-3">
                            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-gray-300 dark:bg-gray-700 p-4 rounded-lg relative">
                                <CiImageOn className="text-9xl text-gray-200 absolute top-1/4 start-1/3" />
                            </div>
                        </div>

                        {/* Loading placeholder for the right column */}
                        <div className="md:flex-1 px-4">
                            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2 bg-gray-300 dark:bg-gray-700 h-8 w-3/4 animate-pulse"></div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 bg-gray-300 dark:bg-gray-700 h-4 w-1/2 animate-pulse rounded-md"></p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 bg-gray-300 dark:bg-gray-700 h-4 w-1/2 animate-pulse rounded-md"></p>
                            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2 bg-gray-300 dark:bg-gray-700 h-8 w-3/4 animate-pulse"></div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 bg-gray-300 dark:bg-gray-700 h-4 w-1/2 animate-pulse rounded-md"></p>
                            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2 bg-gray-300 dark:bg-gray-700 h-8 w-3/4 animate-pulse"></div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 bg-gray-300 dark:bg-gray-700 h-4 w-1/2 animate-pulse rounded-md"></p>
                            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2 bg-gray-300 dark:bg-gray-700 h-8 w-3/4 animate-pulse"></div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 bg-gray-300 dark:bg-gray-700 h-4 w-1/2 animate-pulse rounded-md"></p>
                            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2 bg-gray-300 dark:bg-gray-700 h-8 w-3/4 animate-pulse"></div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 bg-gray-300 dark:bg-gray-700 h-4 w-1/2 animate-pulse rounded-md"></p>
                            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2 bg-gray-300 dark:bg-gray-700 h-8 w-3/4 animate-pulse"></div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 bg-gray-300 dark:bg-gray-700 h-4 w-1/2 animate-pulse rounded-md"></p>

                            {/* ... (More loading placeholders for other content) ... */}
                        </div>
                    </div>
                </div>
            ) : isError || Object.keys(filter).length === 0 ? (
                <section className="flex items-center h-screen p-2  bg-gray-50 dark:bg-gray-700">
                    <div className="container flex flex-col items-center ">
                        <div className="flex flex-col gap-6 max-w-md text-center">
                            <h2 className="font-extrabold text-7xl text-gray-600">
                                <span className="sr-only">Error</span>404
                            </h2>
                            <p className="text-xl md:text-2xl dark:text-gray-400">
                                Sorry, we couldn't find that Filter.
                            </p>
                            <Link
                                to="/search"
                                className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
                            >
                                Back to searching page
                            </Link>
                        </div>
                    </div>
                </section>
            ) : (
                <div className="bg-gray-3o00 container mx-auto py-8 border border-cyan-500 rounded-lg mt-3">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4 w-full sm:w-auto lg:w-full md:w-auto">
                                {/*  */}

                                {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 p-4"> */}
                                <div className="h-80 border rounded bg-white">
                                    <Carousel
                                        rightControl={
                                            <FiArrowRightCircle className="text-2xl text-gray-400" />
                                        }
                                        leftControl={
                                            <FiArrowLeftCircle className="text-2xl text-gray-400" />
                                        }
                                        slide={true}
                                        // indicators={true}
                                    >
                                        {filter.images.map((image, i) => {
                                            return (
                                                <div
                                                    className="py-2 bg-white flex justify-center h-5/6"
                                                    key={i}
                                                >
                                                    <img
                                                        key={i}
                                                        src={image}
                                                        alt={filter.global_code}
                                                        className="h-full"
                                                    />
                                                </div>
                                            );
                                        })}
                                    </Carousel>
                                </div>

                                {/*  */}
                                {/* <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                    <img
                                        width="140"
                                        height="auto"
                                        className="w-full h-full object-cover"
                                        // src="{filter.images[0]}"
                                        src={filter.images[1]}
                                        alt="Product Image"
                                    />
                                </div> */}
                                {/* <div className="flex -mx-2 mb-4">
                                    <div className="w-1/2 px-2">
                                        <Link
                                            to={"/"}
                                            className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                                        >
                                            Back to Home
                                        </Link>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <Link
                                            to={"/search"}
                                            className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                                        >
                                            Find my Filter
                                        </Link>
                                    </div>
                                </div> */}
                            </div>
                            <div className="md:flex-1 px-4 w-full sm:w-auto lg:w-full md:w-auto">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                    {filter.local_code}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    EAN CODE : {filter.global_code}
                                </p>

                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Type : {filter.type}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Form : {filter.dimension_form}
                                    </span>
                                </div>

                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Filter Description:
                                    </span>
                                    <Accordion collapseAll className="mt-4">
                                        <Accordion.Panel>
                                            <Accordion.Title>
                                                Filter Dimensions
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {filter.dimensions.map(
                                                        (dimension, i) => (
                                                            <div
                                                                key={i}
                                                                className="mb-2 text-gray-500 w-full dark:text-gray-400 flex"
                                                            >
                                                                <p className=" font-bold uppercase me-1">
                                                                    {
                                                                        dimension.name
                                                                    }
                                                                </p>
                                                                {` : ${dimension.value}`}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                        <Accordion.Panel>
                                            <Accordion.Title>
                                                Supported Cars
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                {filter.supported_cars.map(
                                                    (car, i) => (
                                                        <div
                                                            key={i}
                                                            className="mb-2 text-gray-500 dark:text-gray-400 flex"
                                                        >
                                                            <p className="me-1 font-semibold">
                                                                {i + 1}
                                                            </p>
                                                            {` : ${car.brand} ${car.model} - ${car.year}`}
                                                        </div>
                                                    )
                                                )}
                                            </Accordion.Content>
                                        </Accordion.Panel>

                                        <Accordion.Panel>
                                            <Accordion.Title>
                                                Other Filter Codes
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {!filter.other_company_codes
                                                        .length >= 1 ? (
                                                        <p>No more codes..!</p>
                                                    ) : (
                                                        filter.other_company_codes.map(
                                                            (occ, i) => (
                                                                <div
                                                                    key={i}
                                                                    className="mb-2 text-gray-500 w-full dark:text-gray-400 flex"
                                                                >
                                                                    <p className=" font-bold uppercase me-1">
                                                                        {
                                                                            occ.name
                                                                        }
                                                                    </p>
                                                                    {` : ${occ.code}`}
                                                                </div>
                                                            )
                                                        )
                                                    )}
                                                </div>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>
                                    {/* <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed sed ante justo.
                                        Integer euismod libero id mauris
                                        malesuada tincidunt. Vivamus commodo
                                        nulla ut lorem rhoncus aliquet. Duis
                                        dapibus augue vel ipsum pretium, et
                                        venenatis sem blandit. Quisque ut erat
                                        vitae nisi ultrices placerat non eget
                                        velit. Integer ornare mi sed ipsum
                                        lacinia, non sagittis mauris blandit.
                                        Morbi fermentum libero vel nisl
                                        suscipit, nec tincidunt mi consectetur.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Filter;
