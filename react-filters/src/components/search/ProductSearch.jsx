import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import axios from "axios";

const ProductSearch = () => {
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

    const products = [
        {
            id: 1,
            local_code: "xz 30872",
            global_code: "9723498204",
            dimension_form: "Oval",
            dimensions: [
                { name: "A", value: "13mm" },
                { name: "B", value: "9mm" },
                { name: "H", value: "17mm" },
            ],
            images: [],
            other_company_codes: [
                {
                    name: "A",
                    code: "A123",
                },
                {
                    name: "B",
                    code: "B86675",
                },
                {
                    name: "C",
                    code: "C9096",
                },
            ],
            supported_cars: [
                {
                    brand: "Mercedes benz",
                    model: "amg c220",
                    year: "2020",
                },
                {
                    brand: "BMW",
                    model: "Gt 600",
                    year: "2024",
                },
                {
                    brand: "Audi",
                    model: "Q8",
                    year: "2020",
                },
            ],
            type: "Air filter",
            created_at: "2023-11-29T19:54:26.000000Z",
            updated_at: "2023-11-29T19:54:26.000000Z",
        },
        {
            id: 3,
            local_code: "OE 649/4",
            global_code: "5904608046499",
            dimension_form: "Oval",
            dimensions: [
                {
                    name: "A",
                    value: "13mm",
                },
                {
                    name: "B",
                    value: "9mm",
                },
                {
                    name: "H",
                    value: "17mm",
                },
            ],
            images: [
                "https://filtron.eu/website/images/filters/largeplain/oe649-4.jpg",
            ],
            other_company_codes: [
                {
                    name: "A",
                    code: "A123",
                },
                {
                    name: "B",
                    code: "B86675",
                },
                {
                    name: "C",
                    code: "C9096",
                },
            ],
            supported_cars: [
                {
                    brand: "Mercedes",
                    model: "C220",
                    year: "2019",
                },
                {
                    brand: "BMW",
                    model: "M5",
                    year: "2022",
                },
                {
                    brand: "Audi",
                    model: "A6",
                    year: "2021",
                },
            ],
            type: "Oil filter",
            created_at: "2023-12-02T01:49:01.000000Z",
            updated_at: "2023-12-02T01:49:01.000000Z",
        },
        {
            id: 4,
            local_code: "OP 532/2",
            global_code: "5904608035325",
            dimension_form: null,
            dimensions: [
                {
                    name: "A",
                    value: "7.65",
                },
                {
                    name: "B",
                    value: "71",
                },
                {
                    name: "C",
                    value: "62",
                },
                {
                    name: "g",
                    value: "3/4-16 UNF",
                },
                {
                    name: "H",
                    value: "85",
                },
            ],
            other_company_codes: [],
            supported_cars: [
                {
                    brand: "Mercedes",
                    model: "250D",
                    year: "1996",
                },
                {
                    brand: "Bmw",
                    model: "bm2",
                    year: "2006",
                },
            ],
            type: "Fuel Filter",
            created_at: "2023-12-02T01:55:25.000000Z",
            updated_at: "2023-12-02T01:55:25.000000Z",
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [searchOption, setSearchOption] = useState("local_code");
    const [filteredProducts, setFilteredProducts] = useState([]);

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
        setFilteredProducts(filtered);
    }, [searchTerm, searchOption]); // Include fuse in the dependency array

    const handleSearch = () => {
        // Triggered when the user clicks the "Search" button
        const results = fuse.search(searchTerm);
        const filtered = results.map((result) => result.item);
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter search term..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
                value={searchOption}
                onChange={(e) => setSearchOption(e.target.value)}
            >
                <option value="supported_cars">Supported Cars</option>
                <option value="local_code">Local Code</option>
                <option value="global_code">Global Code</option>
            </select>
            <button onClick={handleSearch}>Search</button>

            {/* Display the filtered products */}
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>{product.type}</li>
                ))}
            </ul>

            <br />
            <hr />
            <hr />
            <div className="p-6">
                {filters.map((product) => (
                    <ul key={product.id}>
                        <li>{product.local_code}</li>
                        <li>{product.global_code}</li>
                        <li>{product.type}</li>
                        <li>
                            supported cars <br />
                            <div>
                                {product.supported_cars.map((car, i) => {
                                    <div className="bg-red" key={i}>
                                        <p>{car.brand}</p>
                                        <p>{car.model}</p>
                                        <p>{car.year}</p>
                                    </div>;
                                })}
                            </div>
                        </li>
                        <br /> <hr />
                    </ul>
                ))}
            </div>
            <hr />
            <hr />
            <br />
        </div>
    );
};

export default ProductSearch;
