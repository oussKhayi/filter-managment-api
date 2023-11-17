import { useState, useEffect } from "react";
import axios from "axios";

const Update = (props) => {
    const API = "http://localhost:8000/api";

    const [localCode, setLocalCode] = useState("");
    const [globalCode, setGlobalCode] = useState("");
    const [type, setType] = useState("");

    // manage Array fo supported Cars :
    const [supportedCars, setSupportedCars] = useState([]);
    const [carBrand, setCarBrand] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carYear, setCarYear] = useState("");

    // manage Array fo dimensions :
    const [dimensionForm, setDimensionForm] = useState(""); //Oval, Round..;
    const [dimensions, setDimensions] = useState([]);
    const [newDimensionName, setNewDimensionName] = useState("");
    const [newDimensionValue, setNewDimensionValue] = useState("");

    // manage Array fo the other company codes:
    const [otherCompanyCodes, setOtherCompanyCodes] = useState([]);
    const [newCompanyName, setNewCompanyName] = useState("");
    const [newCompanyCode, setNewCompanyCode] = useState("");

    useEffect(() => {
        setDimensionForm(props.filter.dimension_form);
        setGlobalCode(props.filter.global_code);
        setLocalCode(props.filter.local_code);
        setDimensionForm(props.filter.dimension_form);
    }, [props]);
    const handleAddDimension = () => {
        dimensions.map((dm) => {
            if (dm.name != newDimensionName) {
                setDimensions((prev) => [
                    ...prev,
                    { name: newDimensionName, value: newDimensionValue },
                ]);
            } else {
                console.log("This dimension already Exist!");
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const myData = {
            local_code: "UpdatedCode",
            global_code: "GLCD1011",
            dimension_form: "Square",
            dimensions: { length: 7, width: 7 },
            images: ["image12.jpg", "image13.jpg"],
            other_company_codes: [{ name: "companyC", code: "OC7890" }],
            supported_cars: [{ brand: "ford", model: "mustang", year: "2023" }],
            type: "cabin filter",
        };
        const newData = {
            local_code: localCode,
            global_code: globalCode,
            dimension_form: dimensionForm,
            dimensions: dimensions,
            images: null,
            other_company_codes: otherCompanyCodes,
            supported_cars: supportedCars,
            type: type,
        };

        // Perform form submission logic here, e.g., send data to the server

        try {
            // Make the Axios PUT request
            const response = await axios.put(`${API}/update/2`, myData);

            // Handle the response as needed (e.g., show a success message)
            console.log("Update successful:", response.data);
            alert("Update successful:");

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
        } catch (error) {
            // Handle errors (e.g., show an error message)
            console.error("Update failed:", error);
        }
        // Reset other fields as needed
    };
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button type="submit">TEST</button>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex sm:flex rounded">
                        <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Company Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="grid-first-name"
                                type="text"
                                value="Filter-H"
                                disabled
                            />
                            <p className="text-red text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="md:w-1/2 px-3 sm:w-1/2">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-last-name"
                            >
                                Company Code
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-last-name"
                                type="text"
                                placeholder="D123"
                            />
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />

                    {/* Map here */}
                    {/* <div className="-mx-3 md:flex sm:flex rounded">
                        <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Company Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="grid-first-name"
                                type="text"
                                value="Filter-H"
                                disabled
                            />
                            <p className="text-red text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="md:w-1/2 px-3 sm:w-1/2">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-last-name"
                            >
                                Company Code
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-last-name"
                                type="text"
                                placeholder="D123"
                            />
                        </div>
                        <div className="md:w-1/12 px-3 sm:w-1/4 relative">
                            <button className="rounded py-3 px-2 bg-red-500 bottom-7 absolute">
                                Delete
                            </button>
                        </div>
                    </div> */}
                    <div className="-mx-3 md:flex sm:flex mb-6">
                        <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Company Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="grid-first-name"
                                type="text"
                                placeholder="Company-x"
                            />
                            <p className="text-red text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="md:w-1/2 px-3 sm:w-1/2">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-last-name"
                            >
                                Company Code
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-last-name"
                                type="text"
                                placeholder="X123"
                            />
                        </div>
                        <div className="md:w-1/12 px-3 sm:w-1/4 relative">
                            <button className="rounded py-3 px-2 bg-green-500 bottom-7 absolute">
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Dimension Form
                            </label>
                            <select
                                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                                id="grid-state"
                            >
                                <option>Oval</option>
                                <option>Round</option>
                                <option>Square</option>
                            </select>
                            <p className="text-grey-dark text-xs italic">
                                Make it as long and as crazy as you'd like
                            </p>
                        </div>
                    </div>

                    {/* Three inputs */}
                    {/* <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-city"
                            >
                                City
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-city"
                                type="text"
                                placeholder="Albuquerque"
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-state"
                            >
                                State
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                                    id="grid-state"
                                >
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                                <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                    <svg
                                        className="h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-zip"
                            >
                                Zip
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-zip"
                                type="text"
                                placeholder={90210}
                            />
                        </div>
                    </div> */}
                </div>
            </form>
            {/* <div>
                <div className="max-w-2xl mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    >
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="localCode"
                            >
                                Local Code
                            </label>
                            <input
                                type="text"
                                id="localCode"
                                name="localCode"
                                value={localCode}
                                onChange={(e) => setLocalCode(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="globalCode"
                            >
                                Global Code
                            </label>
                            <input
                                type="text"
                                id="globalCode"
                                name="globalCode"
                                value={globalCode}
                                onChange={(e) => setGlobalCode(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="dimensionForm"
                            >
                                Dimension Form
                            </label>
                            <input
                                type="text"
                                id="dimensionForm"
                                name="dimensionForm"
                                value={dimensionForm}
                                onChange={(e) =>
                                    setDimensionForm(e.target.value)
                                }
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        {dimensions.map((index, dm) => {
                            return (
                                <div key={index} className="mb-4">
                                    {index}
                                    <input
                                        type="text"
                                        id="dimensionForm"
                                        name="dimensionForm"
                                        disabled
                                        value={dm.name ? dm.name : null}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                            );
                        })}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="dimensionForm"
                            >
                                new Dimension Name
                            </label>
                            <input
                                type="text"
                                id="dimensionForm"
                                name="dimensionForm"
                                value={newDimensionName}
                                onChange={(e) =>
                                    setNewDimensionName(e.target.value)
                                }
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Update Filter
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}
        </>
    );
};

export default Update;
