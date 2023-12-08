import React from "react";
import { useEffect, useState } from "react";
import { BiPlusCircle, BiTrash } from "react-icons/bi";
import { FiChevronsRight, FiSave } from "react-icons/fi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { instance } from "../api/axiosConfiguration";

const InsertFilter = () => {
    const [localCode, setLocalCode] = useState("");
    const [globalCode, setGlobalCode] = useState("");
    const [type, setType] = useState("");

    // manage Array of supported Cars :
    const [supportedCars, setSupportedCars] = useState([]);
    const [carBrand, setCarBrand] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carYear, setCarYear] = useState("");

    // manage Array of Filters Images :
    const [images, setImages] = useState([]);
    const [mainImage, setMainImage] = useState("");
    const [base64Image, setBase64Image] = useState("");
    const [isUploaded, setIsUploaded] = useState("false");

    // manage Array of dimensions :
    const [dimensionForm, setDimensionForm] = useState(""); //Oval, Round..;
    const [dimensions, setDimensions] = useState([]);
    const [newDimensionName, setNewDimensionName] = useState("");
    const [newDimensionValue, setNewDimensionValue] = useState("");

    // manage Array of the other company codes:
    const [otherCompanyCodes, setOtherCompanyCodes] = useState([]);
    const [newCompanyName, setNewCompanyName] = useState("");
    const [newCompanyCode, setNewCompanyCode] = useState("");

    const navigate = useNavigate("");
    useEffect(() => {
        if (!Cookies.get("token")) navigate("/auth-login");
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newData = {
            local_code: localCode,
            global_code: globalCode,
            dimension_form: dimensionForm,
            dimensions,
            images,
            other_company_codes: otherCompanyCodes,
            supported_cars: supportedCars,
            type: "x type",
        };

        // Perform form submission logic here, e.g., send data to the server

        try {
            // Make the Axios PUT request
            const response = await instance
                .post("/insert", newData)
                .then((req, res) => res.data)
                .catch((err) => err);
            // Handle the response as needed (e.g., show a success message)
            console.log("New Filter inserted successful:", response.data);
            alert("Inserted successful:");

            // Reset form fields
            setLocalCode("");
            setGlobalCode("");
            setType("");
            setSupportedCars([]);
            setCarBrand("");
            setCarModel("");
            setCarYear("");
            setDimensionForm("");
            setDimensions([]);
            setNewDimensionName("");
            setNewDimensionValue("");
            setOtherCompanyCodes([]);
            setNewCompanyName("");
            setNewCompanyCode("");
            setImages([]);
            setBase64Image("");
        } catch (error) {
            // Handle errors (e.g., show an error message)
            console.error("Insertion failed:", error);
        }
        // Reset other fields as needed
    };

    // Handle Change the other Companies codes:
    const handleAddCompanies = () => {
        console.log("handleAddCompanies : \n");
        if (newCompanyName !== "" && newCompanyCode !== "") {
            if (!otherCompanyCodes.some((i) => i.name === newCompanyName)) {
                setOtherCompanyCodes((prev) => [
                    ...prev,
                    { name: newCompanyName, code: newCompanyCode },
                ]);
                setNewCompanyName("");
                setNewCompanyCode("");
            } else {
                alert("This Company name already added!");
            }
        } else {
            alert("company name and code shouldn't be empty!");
        }
    };
    const handleRemoveCompany = (name) => {
        setOtherCompanyCodes((prev) => {
            return prev.filter((cmp) => cmp.name !== name);
        });
    };

    // Handle Change the other Companies codes:
    const handelAddSupportedCar = () => {
        console.log("handelAddSupportedCar : \n");
        if (carBrand !== "" && carModel !== "" && carYear !== "") {
            if (
                !supportedCars.some(
                    (i) =>
                        i.brand === carBrand &&
                        i.model === carModel &&
                        i.year === carYear
                )
            ) {
                setSupportedCars((prev) => [
                    ...prev,
                    { brand: carBrand, model: carModel, year: carYear },
                ]);
                setCarBrand("");
                setCarModel("");
                setCarYear("");
            } else {
                alert("This car already added!");
            }
        } else {
            alert("the brand, model and year couldn't be empty!");
        }
    };
    const handleRemoveSupportedCar = (car) => {
        setSupportedCars((prev) => {
            return prev.filter(
                (cr) =>
                    cr.brand !== car.brand &&
                    cr.model !== car.model &&
                    car.brand !== car.year
            );
        });
    };

    // Handle Change the other Companies codes:
    const handleAddDimensions = () => {
        console.log("handleAddDimensions : \n");
        if (newDimensionName !== "" && newDimensionValue !== "") {
            if (!dimensions.some((i) => i.name === newDimensionName)) {
                setDimensions((prev) => [
                    ...prev,
                    { name: newDimensionName, value: newDimensionValue },
                ]);
                setNewDimensionName("");
                setNewDimensionValue("");
            } else {
                alert("This Dimension CHAR already added!");
            }
        } else {
            alert("the Dimension CHAR and the value couldn't be empty!");
        }
    };
    const handleRemoveDimensions = (name) => {
        setDimensions((prev) => {
            return prev.filter((cmp) => cmp.name !== name);
        });
    };

    // Handle change images
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const base64String = await readAsDataURL(file);
            console.log(base64String);
            setImages((prev) => [...prev, base64String]);
        }
    };

    const readAsDataURL = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Resolve with the base64-encoded string
                resolve(reader.result);
            };

            // Read the file as a data URL
            reader.readAsDataURL(file);
        });
    };

    const handleRemoveImg = (img64) => {
        const tmpImages = images.filter((img) => img !== img64);
        setImages(tmpImages);
    };

    return (
        <div className=" container mx-auto p-4">
            {/* <h1 className="text-gray-700 bg-yellow-300 rounded-lg text-3xl font-bold p-2 text-center uppercase">
                Insert a Filters
            </h1> */}
            <h1 className="text-4xl font-extrabold text-green-500 mb-6 text-center">
                Insert a new Filter
            </h1>

            <form
                onSubmit={(e) => handleSubmit(e)}
                className="border-2 border-green-500 rounded-md"
            >
                <div className="md:flex sm:flex rounded shadow p-3 flex flex-col">
                    <h1 className="text-gray-700 font-bold text-xl uppercase p-2 ps-0 flex items-center">
                        <FiChevronsRight />
                        The filter Codes :
                    </h1>
                    <div className="-mx-3 md:flex sm:flex p-3">
                        {/* ... (unchanged code) */}

                        <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="global-code"
                            >
                                Global Code
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="global-code"
                                type="text"
                                value={globalCode}
                                onChange={(e) => setGlobalCode(e.target.value)}
                                placeholder="0123456789"
                                // required
                            />
                            <p className="text-red text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="local-company-name"
                            >
                                local Company Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="local-company-name"
                                type="text"
                                value="Filter-H"
                                disabled
                            />
                            <p className="text-red text-xs italic">
                                This field can't be changed.
                            </p>
                        </div>
                        <div className="md:w-1/2 px-3 sm:w-1/2">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="local-company-code"
                            >
                                local Company Code
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="local-company-code"
                                type="text"
                                placeholder="OE 123/4"
                                value={localCode}
                                onChange={(e) => setLocalCode(e.target.value)}
                                // required
                            />
                        </div>
                    </div>

                    <br />
                    {otherCompanyCodes.map((cmp, i) => (
                        <div
                            className="md:flex sm:flex mb-6 p-3  rounded"
                            key={i}
                        >
                            {/* ... (unchanged code) */}
                            <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    htmlFor={`company-name-${i}`}
                                >
                                    Company Name
                                </label>
                                <input
                                    disabled
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id={`company-name-${i}`}
                                    type="text"
                                    value={cmp.name}
                                />
                                <p className="text-red text-xs italic">
                                    Please fill out this field.
                                </p>
                            </div>
                            <div className="md:w-1/2 px-3 sm:w-1/2">
                                <label
                                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    htmlFor={`company-code-${i}`}
                                >
                                    Company Code
                                </label>
                                <input
                                    disabled
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id={`company-code-${i}`}
                                    type="text"
                                    value={cmp.code}
                                />
                            </div>
                            <div className="md:w-1/12 px-3 sm:w-1/4 mt-7">
                                <button
                                    type="button"
                                    className="rounded py-2 px-2 bg-red-500 hover:bg-red-600 text-white text-2xl"
                                    onClick={() =>
                                        handleRemoveCompany(cmp.name)
                                    }
                                >
                                    <BiTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="md:flex sm:flex mb-6 p-3  rounded">
                        {/* ... (unchanged code) */}

                        <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="new-company-name"
                            >
                                new Company Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="new-company-name"
                                type="text"
                                placeholder="Company-x"
                                value={newCompanyName}
                                onChange={(e) =>
                                    setNewCompanyName(e.target.value)
                                }
                                // required
                            />
                            <p className="text-red text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="md:w-1/2 px-3 sm:w-1/2">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="new-company-code"
                            >
                                new Company Code
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="new-company-code"
                                type="text"
                                placeholder="X123"
                                value={newCompanyCode}
                                onChange={(e) =>
                                    setNewCompanyCode(e.target.value)
                                }
                                // required
                            />
                        </div>
                        <div className="md:w-1/12 px-3 sm:w-1/4 pt-6 text-center w-full">
                            <button
                                type="button"
                                className="rounded py-3 px-3 bg-green-500 hover:bg-green-600 font-bold text-white text-xl"
                                onClick={handleAddCompanies}
                            >
                                <BiPlusCircle />
                            </button>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="p-2 ">
                        <h1 className="text-gray-700 font-bold text-xl uppercase p-2 ps-0 flex items-center">
                            <FiChevronsRight />
                            supported Cars informations :
                        </h1>
                        {supportedCars.map((car, i) => (
                            <div
                                className="md:flex sm:flex mb-6 p-3  rounded"
                                key={i}
                            >
                                {/* ... (unchanged code) */}
                                <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                        htmlFor={`car-brand-${i}`}
                                    >
                                        car brand
                                    </label>
                                    <input
                                        disabled
                                        className="appearance-none capitalize block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                        id={`car-brand-${i}`}
                                        type="text"
                                        name="carBrand"
                                        value={car.brand}
                                    />
                                    <p className="text-red text-xs italic">
                                        Please fill out this field.
                                    </p>
                                </div>
                                <div className="md:w-1/2 px-3 sm:w-1/2">
                                    <label
                                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                        htmlFor={`car-model-${i}`}
                                    >
                                        car model
                                    </label>
                                    <input
                                        disabled
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 uppercase"
                                        id={`car-model-${i}`}
                                        type="text"
                                        value={car.model}
                                    />
                                </div>
                                <div className="md:w-1/2 px-3 sm:w-1/2">
                                    <label
                                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                        htmlFor={`car-year-${i}`}
                                    >
                                        car year
                                    </label>
                                    <input
                                        disabled
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 uppercase"
                                        id={`car-year-${i}`}
                                        type="text"
                                        value={car.year}
                                        name="carYear"
                                    />
                                </div>
                                <div className="md:w-1/12 px-3 sm:w-1/4 mt-7">
                                    <button
                                        type="button"
                                        className="rounded py-2 px-2 bg-red-500 hover:bg-red-600 text-white text-2xl"
                                        onClick={() =>
                                            handleRemoveSupportedCar(car)
                                        }
                                    >
                                        <BiTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="md:flex sm:flex mb-6 p-3  rounded">
                            {/* ... (unchanged code) */}

                            <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    htmlFor="new-car-brand"
                                >
                                    car brand
                                </label>
                                <input
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 capitalize"
                                    id="new-car-brand"
                                    name="carBrand"
                                    type="text"
                                    placeholder="ex: Mercedes benz"
                                    value={carBrand}
                                    onChange={(e) =>
                                        setCarBrand(e.target.value)
                                    }
                                    // required
                                />
                                <p className="text-red text-xs italic">
                                    Please fill out this field.
                                </p>
                            </div>
                            <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    htmlFor="new-car-model"
                                >
                                    car model
                                </label>
                                <input
                                    name="carModel"
                                    className="appearance-none uppercase block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="new-car-model"
                                    type="text"
                                    placeholder="ex: AMG 220D"
                                    value={carModel}
                                    onChange={(e) =>
                                        setCarModel(e.target.value)
                                    }
                                    // required
                                />
                                <p className="text-red text-xs italic">
                                    Please fill out this field.
                                </p>
                            </div>
                            <div className="md:w-1/2 px-3 sm:w-1/2">
                                <label
                                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    htmlFor="car-year"
                                >
                                    Year
                                </label>
                                <input
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="car-year"
                                    name="carYear"
                                    type="number"
                                    min={1800}
                                    max={new Date().getFullYear() + 1}
                                    placeholder="ex: 2022"
                                    value={carYear}
                                    // required
                                    onChange={(e) => setCarYear(e.target.value)}
                                />
                            </div>
                            <div className="md:w-1/12 px-3 sm:w-1/4 pt-6 text-center w-full">
                                <button
                                    type="button"
                                    className="rounded py-3 px-3 bg-green-500 hover:bg-green-600 font-bold text-white text-xl"
                                    onClick={handelAddSupportedCar}
                                >
                                    <BiPlusCircle />
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <h1 className="text-gray-700 font-bold text-xl uppercase p-2 ps-0 flex items-center">
                        <FiChevronsRight />
                        Filter Form & dimensions :
                    </h1>
                    <div className="md:flex mb-6">
                        {/* ... (unchanged code) */}

                        <div className="md:w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="filter-form"
                            >
                                Filter Form
                            </label>
                            <select
                                id="filter-form"
                                // required
                                onChange={(e) =>
                                    setDimensionForm(e.target.value)
                                }
                                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                            >
                                <option value="Oval">Oval</option>
                                <option value="Round">Round</option>
                                <option value="Square">Square</option>
                            </select>
                            <p className="text-grey-dark text-xs italic">
                                Make it as long and as crazy as you'd like
                            </p>
                        </div>
                    </div>
                    {dimensions.map((dm, i) => (
                        <div
                            className="md:flex sm:flex mb-6 p-3  rounded"
                            key={i}
                        >
                            {/* ... (unchanged code) */}
                            <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    htmlFor={`dimension-char-${i}`}
                                >
                                    Dimensions Char
                                </label>
                                <input
                                    disabled
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id={`dimension-char-${i}`}
                                    type="text"
                                    value={dm.name}
                                />
                                <p className="text-red text-xs italic">
                                    Please fill out this field.
                                </p>
                            </div>
                            <div className="md:w-1/2 px-3 sm:w-1/2">
                                <label
                                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    htmlFor={`dimension-value-${i}`}
                                >
                                    Dimension Value
                                </label>
                                <input
                                    disabled
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-green-500 rounded py-3 px-4 uppercase"
                                    id={`dimension-value-${i}`}
                                    type="text"
                                    value={dm.value}
                                />
                            </div>
                            <div className="md:w-1/12 px-3 sm:w-1/4 mt-7">
                                <button
                                    type="button"
                                    className="rounded py-2 px-2 bg-red-500 hover:bg-red-600 text-white text-2xl"
                                    onClick={() =>
                                        handleRemoveDimensions(dm.name)
                                    }
                                >
                                    <BiTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="md:flex sm:flex mb-6 p-3  rounded">
                        {/* ... (unchanged code) */}

                        <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="new-dimension-char"
                            >
                                new Dimension Char
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 uppercase"
                                id="new-dimension-char"
                                type="text"
                                placeholder="ex: H"
                                value={newDimensionName}
                                // required
                                maxLength={1}
                                onChange={(e) =>
                                    setNewDimensionName(e.target.value)
                                }
                            />
                            <p className="text-red text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="md:w-1/2 px-3 sm:w-1/2">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="new-dimension-value"
                            >
                                new Dimension Value
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="new-dimension-value"
                                type="text"
                                placeholder="ex: 13mm"
                                value={newDimensionValue}
                                // required
                                onChange={(e) =>
                                    setNewDimensionValue(e.target.value)
                                }
                            />
                        </div>
                        <div className="md:w-1/12 px-3 sm:w-1/4 pt-6 text-center w-full">
                            <button
                                type="button"
                                className="rounded py-3 px-3 bg-green-500 hover:bg-green-600 font-bold text-white text-xl"
                                onClick={handleAddDimensions}
                            >
                                <BiPlusCircle />
                            </button>
                        </div>
                    </div>
                    <h1 className="text-gray-700 font-bold text-xl uppercase p-2 ps-0 flex items-center">
                        <FiChevronsRight /> Filter Images :
                    </h1>
                    <div className="mb-3">
                        {/* ... (unchanged code) */}
                        <input
                            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                            type="file"
                            id="formFileMultiple"
                            onChange={handleImageChange}
                            // required
                        />
                        <p className="text-red text-xs italic">
                            Select an image from your device..
                        </p>
                    </div>
                    {Array.isArray(images) ? (
                        images.length >= 1 && (
                            <div className="-mx-2 flex xs-flex sm:flex flex-wrap mb-6 bg-gray-100  rounded p-2 justify-evenly">
                                {images.map((img64, index) => (
                                    <div
                                        key={index}
                                        className="max-w-fit w-fit relative bg-red-200 mt-2"
                                    >
                                        {/* ... (unchanged code) */}
                                        <button
                                            type="button"
                                            className="p-1 bg-red-500 hover:bg-red-600 font-bold text-white text-xl absolute rounded-full right-1 top-1"
                                            onClick={(e) =>
                                                handleRemoveImg(img64)
                                            }
                                        >
                                            <BiTrash />
                                        </button>
                                        <img
                                            className="rounded shadow max-w-full h-28"
                                            src={img64}
                                            alt=""
                                        />
                                    </div>
                                ))}
                                {/* Repeat similar code for other image divs */}
                            </div>
                        )
                    ) : (
                        <></>
                    )}
                    <div className="flex justify-center">
                        <button
                            id="btn"
                            type="submit"
                            className="bg-green-500 text-white max-w-full xs:w-full w-1/3 mx-3 p-3 text-xs rounded font-bold flex items-center justify-center md:text-lg"
                        >
                            submit <FiSave className="ms-2 font-bold" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InsertFilter;
