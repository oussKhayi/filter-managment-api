<div className="bg-gray-100 container">
    <h1 className="text-gray-700 bg-yellow-300 rounded-lg text-3xl font-bold p-2 text-center uppercase">
        Insert a Filters
    </h1>
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className="bg-red-600 shadow-md rounded pt-6 pb-8 mb-4 flex flex-col my-2">
            <h1 className="text-gray-700 font-bold text-xl uppercase p-2 ps-0">
                The filter Codes :
            </h1>
            <div className="-mx-3 md:flex sm:flex rounded shadow p-3">
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
                        placeholder="Global123"
                        required
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
                        placeholder="D123"
                        value={localCode}
                        onChange={(e) => setLocalCode(e.target.value)}
                        required
                    />
                </div>
            </div>
            <br />
            <hr />
            <br />
            {otherCompanyCodes.map((cmp, i) => {
                return (
                    <div
                        className="-mx-3 md:flex sm:flex mb-6 p-3 shadow border rounded"
                        key={i}
                    >
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
                                onClick={() => handleRemoveCompany(cmp.name)}
                            >
                                <BiTrash />
                            </button>
                        </div>
                    </div>
                );
            })}
            {/* <br /> */}
            {/* <hr /> */}
            <div className="-mx-3 md:flex sm:flex mb-6 p-3 shadow border rounded">
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
                        onChange={(e) => setNewCompanyName(e.target.value)}
                        required
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
                        onChange={(e) => setNewCompanyCode(e.target.value)}
                        required
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
            {/* <br /> */}
            {/* <hr /> */}

            <div className="p-2 bg-gray-100">
                <h1 className="text-gray-700 font-bold text-xl uppercase p-2 ps-0">
                    supported Cars informations :
                </h1>
                {supportedCars.map((car, i) => {
                    return (
                        <div
                            className="-mx-3 md:flex sm:flex mb-6 p-3 shadow border rounded"
                            key={i}
                        >
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
                    );
                })}

                <div className="-mx-3 md:flex sm:flex mb-6 p-3 shadow border rounded">
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
                            onChange={(e) => setCarBrand(e.target.value)}
                            required
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
                            onChange={(e) => setCarModel(e.target.value)}
                            required
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
                            required
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
            <br />
            <hr />
            <hr />

            <h1 className="text-gray-700 font-bold text-xl uppercase p-2 ps-0">
                Filter Form & dimensions :
            </h1>
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="filter-form"
                    >
                        Filter Form
                    </label>
                    <select
                        id="filter-form"
                        required
                        onChange={(e) => setDimensionForm(e.target.value)}
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
            {dimensions.map((dm, i) => {
                return (
                    <div
                        className="-mx-3 md:flex sm:flex mb-6 p-3 shadow border rounded"
                        key={i}
                    >
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
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 uppercase"
                                id={`dimension-value-${i}`}
                                type="text"
                                value={dm.value}
                            />
                        </div>
                        <div className="md:w-1/12 px-3 sm:w-1/4 mt-7">
                            <button
                                type="button"
                                className="rounded py-2 px-2 bg-red-500 hover:bg-red-600 text-white text-2xl"
                                onClick={() => handleRemoveDimensions(dm.name)}
                            >
                                <BiTrash />
                            </button>
                        </div>
                    </div>
                );
            })}

            <div className="-mx-3 md:flex sm:flex mb-6 p-3 shadow border rounded">
                <div className="md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="new-dimension-char"
                    >
                        new Dimension Char
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                        id="new-dimension-char"
                        type="text"
                        placeholder="ex: H"
                        value={newDimensionName}
                        required
                        onChange={(e) => setNewDimensionName(e.target.value)}
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
                        required
                        onChange={(e) => setNewDimensionValue(e.target.value)}
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

            <br />
            <hr />
            <hr />
            <br />

            <div className="mb-3">
                <input
                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                    type="file"
                    id="formFileMultiple"
                    onChange={handleImageChange}
                    required
                />
                <p className="text-red text-xs italic">
                    Select an image from your device..
                </p>
            </div>
            <hr />
            <div className="-mx-2 flex xs-flex sm:flex flex-wrap mb-6 bg-gray-100 shadow border rounded p-2 justify-evenly">
                {images.map((img64, index) => {
                    return (
                        <div
                            key={index}
                            className="max-w-fit w-fit relative bg-red-200 mt-2"
                        >
                            <button
                                type="button"
                                className="p-1 bg-red-500 hover:bg-red-600 font-bold text-white text-xl absolute rounded-full right-1 top-1"
                                onClick={(e) => handleRemoveImg(img64)}
                            >
                                <BiTrash />
                            </button>
                            <img
                                className="rounded shadow max-w-full h-28"
                                src={img64}
                                alt=""
                            />
                        </div>
                    );
                })}

                {/* Repeat similar code for other image divs */}
            </div>

            <hr />
        </div>

        <div className="flex justify-center">
            <button
                type="submit"
                className="bg-violet-500 text-white max-w-full  xs:w-full w-1/3 mx-3 p-4 rounded font-bold"
            >
                submit
            </button>
        </div>
    </form>
</div>;
